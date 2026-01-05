const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const path = require('path');
const fs = require('fs');
const initSqlJs = require('sql.js');
const nodemailer = require('nodemailer');

let mainWindow;
let db;
let SQL;
let currentUser = null;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    }
  });

  mainWindow.loadFile('index.html');
  
  // Open DevTools in development
  if (process.argv.includes('--dev')) {
    mainWindow.webContents.openDevTools();
  }
}

async function initDatabase() {
  SQL = await initSqlJs();
  
  // Store database in app directory for easy access
  const dbPath = path.join(__dirname, 'data', 'employee_management.db');
  
  // Ensure data directory exists
  const dataDir = path.join(__dirname, 'data');
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
  
  try {
    if (fs.existsSync(dbPath)) {
      const buffer = fs.readFileSync(dbPath);
      db = new SQL.Database(buffer);
    } else {
      db = new SQL.Database();
    }
  } catch (error) {
    db = new SQL.Database();
  }
  
  // Create employees table
  db.run(`
    CREATE TABLE IF NOT EXISTS employees (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      firstName TEXT NOT NULL,
      lastName TEXT NOT NULL,
      email TEXT UNIQUE NOT NULL,
      phone TEXT,
      salaryType TEXT NOT NULL,
      salaryAmount REAL NOT NULL,
      photo TEXT,
      createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Create attendance table
  db.run(`
    CREATE TABLE IF NOT EXISTS attendance (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      employeeId INTEGER NOT NULL,
      date DATE NOT NULL,
      status TEXT NOT NULL,
      notes TEXT,
      UNIQUE(employeeId, date)
    )
  `);

  // Create hours_worked table
  db.run(`
    CREATE TABLE IF NOT EXISTS hours_worked (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      employeeId INTEGER NOT NULL,
      date DATE NOT NULL,
      hoursWorked REAL NOT NULL,
      notes TEXT,
      UNIQUE(employeeId, date)
    )
  `);

  // Create users table
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL,
      role TEXT NOT NULL DEFAULT 'user',
      email TEXT,
      createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Create default admin user if no users exist
  const usersResult = db.exec('SELECT COUNT(*) FROM users');
  const userCount = usersResult[0]?.values[0]?.[0] || 0;
  if (userCount === 0) {
    const stmt = db.prepare(
      `INSERT INTO users (username, password, role, email) VALUES (?, ?, ?, ?)`
    );
    stmt.run(['admin', 'admin123', 'admin', 'admin@example.com']);
    stmt.free();
  }

  // Migration: Add photo column if it doesn't exist
  try {
    const tableInfo = db.exec("PRAGMA table_info(employees)");
    if (tableInfo.length > 0) {
      const columns = tableInfo[0].values.map(row => row[1]);
      if (!columns.includes('photo')) {
        console.log('Adding photo column to employees table...');
        db.exec('ALTER TABLE employees ADD COLUMN photo TEXT');
        console.log('Photo column added successfully');
      }
    }
  } catch (error) {
    console.log('Migration check:', error.message);
  }

  saveDatabase();
  console.log('Database initialized successfully');
}

function saveDatabase() {
  const dbPath = path.join(__dirname, 'data', 'employee_management.db');
  const data = db.export();
  const buffer = Buffer.from(data);
  fs.writeFileSync(dbPath, buffer);
}

// IPC Handlers for Employee Management
ipcMain.handle('get-employees', async () => {
  try {
    const result = db.exec('SELECT id, firstName, lastName, email, phone, salaryType, salaryAmount, photo, createdAt FROM employees ORDER BY lastName, firstName');
    const data = result.length > 0 ? result[0].values.map(row => {
      const emp = {
        id: row[0],
        firstName: row[1],
        lastName: row[2],
        email: row[3],
        phone: row[4],
        salaryType: row[5],
        salaryAmount: row[6],
        photo: row[7],
        createdAt: row[8]
      };
      console.log(`Employee ${emp.firstName} ${emp.lastName} - Photo: ${emp.photo ? (emp.photo.startsWith('data:image') ? 'YES (image data)' : 'INVALID: ' + emp.photo.substring(0, 50)) : 'NO'}`);
      return emp;
    }) : [];
    return { success: true, data };
  } catch (error) {
    return { success: false, error: error.message };
  }
});

ipcMain.handle('add-employee', async (event, employee) => {
  try {
    console.log('Adding employee with photo:', employee.photo ? 'YES (length: ' + employee.photo.length + ')' : 'NO');
    const stmt = db.prepare(
      `INSERT INTO employees (firstName, lastName, email, phone, salaryType, salaryAmount, photo)
       VALUES (?, ?, ?, ?, ?, ?, ?)`
    );
    stmt.run([employee.firstName, employee.lastName, employee.email, employee.phone, 
       employee.salaryType, employee.salaryAmount, employee.photo || null]);
    stmt.free();
    const result = db.exec('SELECT last_insert_rowid()');
    const id = result[0].values[0][0];
    saveDatabase();
    console.log('Employee added successfully with ID:', id);
    return { success: true, id };
  } catch (error) {
    console.error('Error adding employee:', error);
    return { success: false, error: error.message };
  }
});

ipcMain.handle('delete-employee', async (event, employeeId) => {
  try {
    let stmt = db.prepare('DELETE FROM employees WHERE id = ?');
    stmt.run([employeeId]);
    stmt.free();
    
    stmt = db.prepare('DELETE FROM attendance WHERE employeeId = ?');
    stmt.run([employeeId]);
    stmt.free();
    
    stmt = db.prepare('DELETE FROM hours_worked WHERE employeeId = ?');
    stmt.run([employeeId]);
    stmt.free();
    
    saveDatabase();
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
});

ipcMain.handle('update-employee', async (event, employee) => {
  try {
    console.log('Updating employee with photo:', employee.photo ? 'YES (length: ' + employee.photo.length + ')' : 'NO');
    const stmt = db.prepare(
      `UPDATE employees 
       SET firstName = ?, lastName = ?, email = ?, phone = ?, salaryType = ?, salaryAmount = ?, photo = ?
       WHERE id = ?`
    );
    stmt.run([employee.firstName, employee.lastName, employee.email, employee.phone,
       employee.salaryType, employee.salaryAmount, employee.photo || null, employee.id]);
    stmt.free();
    saveDatabase();
    console.log('Employee updated successfully');
    return { success: true };
  } catch (error) {
    console.error('Error updating employee:', error);
    return { success: false, error: error.message };
  }
});

// IPC Handlers for Attendance
ipcMain.handle('mark-attendance', async (event, attendance) => {
  try {
    const stmt = db.prepare(
      `INSERT OR REPLACE INTO attendance (employeeId, date, status, notes)
       VALUES (?, ?, ?, ?)`
    );
    stmt.run([attendance.employeeId, attendance.date, attendance.status, attendance.notes]);
    stmt.free();
    saveDatabase();
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
});

ipcMain.handle('get-attendance', async (event, filters) => {
  try {
    let query = `
      SELECT a.*, e.firstName, e.lastName 
      FROM attendance a 
      JOIN employees e ON a.employeeId = e.id
    `;
    const params = [];
    const conditions = [];

    if (filters.employeeId) {
      conditions.push('a.employeeId = ?');
      params.push(filters.employeeId);
    }
    if (filters.startDate) {
      conditions.push('a.date >= ?');
      params.push(filters.startDate);
    }
    if (filters.endDate) {
      conditions.push('a.date <= ?');
      params.push(filters.endDate);
    }

    if (conditions.length > 0) {
      query += ' WHERE ' + conditions.join(' AND ');
    }
    query += ' ORDER BY a.date DESC';

    const result = db.exec(query, params);
    const data = result.length > 0 ? result[0].values.map(row => ({
      id: row[0],
      employeeId: row[1],
      date: row[2],
      status: row[3],
      notes: row[4],
      firstName: row[5],
      lastName: row[6]
    })) : [];
    return { success: true, data };
  } catch (error) {
    return { success: false, error: error.message };
  }
});

// IPC Handlers for Hours Worked
ipcMain.handle('record-hours', async (event, hours) => {
  try {
    const stmt = db.prepare(
      `INSERT OR REPLACE INTO hours_worked (employeeId, date, hoursWorked, notes)
       VALUES (?, ?, ?, ?)`
    );
    stmt.run([hours.employeeId, hours.date, hours.hoursWorked, hours.notes]);
    stmt.free();
    saveDatabase();
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
});

ipcMain.handle('get-hours', async (event, filters) => {
  try {
    let query = `
      SELECT h.*, e.firstName, e.lastName, e.salaryType, e.salaryAmount
      FROM hours_worked h 
      JOIN employees e ON h.employeeId = e.id
    `;
    const params = [];
    const conditions = [];

    if (filters.employeeId) {
      conditions.push('h.employeeId = ?');
      params.push(filters.employeeId);
    }
    if (filters.startDate) {
      conditions.push('h.date >= ?');
      params.push(filters.startDate);
    }
    if (filters.endDate) {
      conditions.push('h.date <= ?');
      params.push(filters.endDate);
    }

    if (conditions.length > 0) {
      query += ' WHERE ' + conditions.join(' AND ');
    }
    query += ' ORDER BY h.date DESC';

    const result = db.exec(query, params);
    const data = result.length > 0 ? result[0].values.map(row => ({
      id: row[0],
      employeeId: row[1],
      date: row[2],
      hoursWorked: row[3],
      notes: row[4],
      firstName: row[5],
      lastName: row[6],
      salaryType: row[7],
      salaryAmount: row[8]
    })) : [];
    return { success: true, data };
  } catch (error) {
    return { success: false, error: error.message };
  }
});

// IPC Handler for Salary Calculation
ipcMain.handle('calculate-salary', async (event, { employeeId, month, year }) => {
  try {
    // Get employee details
    const empResult = db.exec('SELECT * FROM employees WHERE id = ?', [employeeId]);
    
    if (empResult.length === 0 || empResult[0].values.length === 0) {
      return { success: false, error: 'Employee not found' };
    }

    const empRow = empResult[0].values[0];
    const employee = {
      id: empRow[0],
      firstName: empRow[1],
      lastName: empRow[2],
      email: empRow[3],
      phone: empRow[4],
      salaryType: empRow[5],
      salaryAmount: empRow[6]
    };

    let totalSalary = 0;
    let details = {};

    if (employee.salaryType === 'monthly') {
      // For monthly salary, check attendance
      const dateFilter = `${year}-${String(month).padStart(2, '0')}`;
      const attendResult = db.exec(
        `SELECT COUNT(*) as count
         FROM attendance
         WHERE employeeId = ? 
         AND strftime('%Y-%m', date) = ?
         AND status = 'present'`,
        [employeeId, dateFilter]
      );

      const daysPresent = attendResult.length > 0 ? attendResult[0].values[0][0] : 0;
      const totalDays = new Date(year, month, 0).getDate();
      totalSalary = employee.salaryAmount;
      details = {
        salaryType: 'monthly',
        baseSalary: employee.salaryAmount,
        daysPresent: daysPresent,
        totalDays: totalDays,
        totalSalary: totalSalary
      };
    } else {
      // For hourly salary, sum hours worked
      const dateFilter = `${year}-${String(month).padStart(2, '0')}`;
      const hoursResult = db.exec(
        `SELECT SUM(hoursWorked) as totalHours
         FROM hours_worked
         WHERE employeeId = ? 
         AND strftime('%Y-%m', date) = ?`,
        [employeeId, dateFilter]
      );

      const totalHours = (hoursResult.length > 0 && hoursResult[0].values[0][0]) 
        ? hoursResult[0].values[0][0] : 0;
      totalSalary = totalHours * employee.salaryAmount;
      details = {
        salaryType: 'hourly',
        hourlyRate: employee.salaryAmount,
        totalHours: totalHours,
        totalSalary: totalSalary
      };
    }

    return { success: true, employee, details };
  } catch (error) {
    return { success: false, error: error.message };
  }
});

// Authentication handlers
ipcMain.handle('login', async (event, { username, password }) => {
  try {
    const result = db.exec(
      'SELECT * FROM users WHERE username = ? AND password = ?',
      [username, password]
    );
    
    if (result.length > 0 && result[0].values.length > 0) {
      const row = result[0].values[0];
      currentUser = {
        id: row[0],
        username: row[1],
        role: row[3],
        email: row[4]
      };
      return { success: true, user: currentUser };
    }
    return { success: false, error: 'Invalid credentials' };
  } catch (error) {
    return { success: false, error: error.message };
  }
});

ipcMain.handle('logout', async () => {
  currentUser = null;
  return { success: true };
});

ipcMain.handle('get-current-user', async () => {
  return { success: true, user: currentUser };
});

ipcMain.handle('add-user', async (event, user) => {
  try {
    if (!currentUser || currentUser.role !== 'admin') {
      return { success: false, error: 'Unauthorized' };
    }
    const stmt = db.prepare(
      'INSERT INTO users (username, password, role, email) VALUES (?, ?, ?, ?)'
    );
    stmt.run([user.username, user.password, user.role, user.email]);
    stmt.free();
    saveDatabase();
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
});

// Backup and Restore handlers
ipcMain.handle('backup-database', async () => {
  try {
    const { filePath } = await dialog.showSaveDialog(mainWindow, {
      title: 'Backup Database',
      defaultPath: `employee_backup_${new Date().toISOString().split('T')[0]}.db`,
      filters: [{ name: 'Database', extensions: ['db'] }]
    });
    
    if (filePath) {
      saveDatabase();
      const dbPath = path.join(app.getPath('userData'), 'employee_management.db');
      fs.copyFileSync(dbPath, filePath);
      return { success: true, path: filePath };
    }
    return { success: false, error: 'Backup cancelled' };
  } catch (error) {
    return { success: false, error: error.message };
  }
});

ipcMain.handle('restore-database', async () => {
  try {
    const { filePaths } = await dialog.showOpenDialog(mainWindow, {
      title: 'Restore Database',
      filters: [{ name: 'Database', extensions: ['db'] }],
      properties: ['openFile']
    });
    
    if (filePaths && filePaths.length > 0) {
      const buffer = fs.readFileSync(filePaths[0]);
      db = new SQL.Database(buffer);
      saveDatabase();
      return { success: true };
    }
    return { success: false, error: 'Restore cancelled' };
  } catch (error) {
    return { success: false, error: error.message };
  }
});

// Photo upload handler
ipcMain.handle('upload-photo', async () => {
  try {
    const { filePaths } = await dialog.showOpenDialog(mainWindow, {
      title: 'Select Employee Photo',
      filters: [
        { name: 'Images', extensions: ['jpg', 'jpeg', 'png', 'gif'] }
      ],
      properties: ['openFile']
    });
    
    if (filePaths && filePaths.length > 0) {
      const photoPath = filePaths[0];
      const photoData = fs.readFileSync(photoPath, { encoding: 'base64' });
      const ext = path.extname(photoPath).substring(1);
      const dataUrl = `data:image/${ext};base64,${photoData}`;
      return { success: true, photo: dataUrl };
    }
    return { success: false, error: 'No file selected' };
  } catch (error) {
    return { success: false, error: error.message };
  }
});

// Email handler
ipcMain.handle('send-salary-email', async (event, { to, subject, body, attachmentData }) => {
  try {
    // Configure your email settings here
    const transporter = nodemailer.createTransport({
      service: 'gmail', // or your email service
      auth: {
        user: 'your-email@gmail.com', // Configure this
        pass: 'your-app-password' // Configure this
      }
    });

    const mailOptions = {
      from: 'your-email@gmail.com',
      to: to,
      subject: subject,
      html: body
    };

    if (attachmentData) {
      mailOptions.attachments = [{
        filename: 'salary_report.pdf',
        content: attachmentData.split('base64,')[1],
        encoding: 'base64'
      }];
    }

    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
});

// Analytics handlers
ipcMain.handle('get-analytics', async () => {
  try {
    // Total employees
    const empResult = db.exec('SELECT COUNT(*) FROM employees');
    const totalEmployees = empResult[0]?.values[0]?.[0] || 0;

    // Employees by salary type
    const typeResult = db.exec(
      'SELECT salaryType, COUNT(*) FROM employees GROUP BY salaryType'
    );
    const employeesByType = {};
    if (typeResult.length > 0) {
      typeResult[0].values.forEach(row => {
        employeesByType[row[0]] = row[1];
      });
    }

    // Attendance this month
    const thisMonth = new Date().toISOString().substring(0, 7);
    const attendResult = db.exec(
      `SELECT status, COUNT(*) FROM attendance 
       WHERE strftime('%Y-%m', date) = ? 
       GROUP BY status`,
      [thisMonth]
    );
    const attendanceThisMonth = {};
    if (attendResult.length > 0) {
      attendResult[0].values.forEach(row => {
        attendanceThisMonth[row[0]] = row[1];
      });
    }

    // Total hours this month
    const hoursResult = db.exec(
      `SELECT SUM(hoursWorked) FROM hours_worked 
       WHERE strftime('%Y-%m', date) = ?`,
      [thisMonth]
    );
    const totalHoursThisMonth = hoursResult[0]?.values[0]?.[0] || 0;

    // Recent attendance trend (last 7 days)
    const trendResult = db.exec(
      `SELECT date, COUNT(*) as count 
       FROM attendance 
       WHERE date >= date('now', '-7 days') 
       GROUP BY date 
       ORDER BY date`
    );
    const attendanceTrend = [];
    if (trendResult.length > 0) {
      trendResult[0].values.forEach(row => {
        attendanceTrend.push({ date: row[0], count: row[1] });
      });
    }

    return {
      success: true,
      data: {
        totalEmployees,
        employeesByType,
        attendanceThisMonth,
        totalHoursThisMonth,
        attendanceTrend
      }
    };
  } catch (error) {
    return { success: false, error: error.message };
  }
});

app.whenReady().then(async () => {
  await initDatabase();
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    if (db) {
      saveDatabase();
      db.close();
    }
    app.quit();
  }
});
