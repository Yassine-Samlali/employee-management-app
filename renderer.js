// Translation data
const translations = {
  en: {
    appTitle: 'Employee Management System',
    employees: 'Employees',
    attendance: 'Attendance',
    hours: 'Hours Worked',
    salary: 'Salary',
    analytics: 'Analytics',
    settings: 'Settings',
    addEmployee: 'Add Employee',
    editEmployee: 'Edit Employee',
    deleteEmployee: 'Delete Employee',
    firstName: 'First Name',
    lastName: 'Last Name',
    email: 'Email',
    phone: 'Phone',
    salaryType: 'Salary Type',
    monthly: 'Monthly',
    hourly: 'Hourly',
    salaryAmount: 'Salary Amount',
    save: 'Save',
    cancel: 'Cancel',
    delete: 'Delete',
    edit: 'Edit',
    date: 'Date',
    status: 'Status',
    present: 'Present',
    absent: 'Absent',
    leave: 'Leave',
    notes: 'Notes',
    markAttendance: 'Mark Attendance',
    viewAttendance: 'View Attendance',
    recordHours: 'Record Hours',
    hoursWorked: 'Hours Worked',
    viewHours: 'View Hours',
    calculateSalary: 'Calculate Salary',
    selectMonth: 'Select Month',
    selectYear: 'Select Year',
    calculate: 'Calculate',
    baseSalary: 'Base Salary',
    daysPresent: 'Days Present',
    totalDays: 'Total Days',
    hourlyRate: 'Hourly Rate',
    totalHours: 'Total Hours',
    totalSalary: 'Total Salary',
    selectEmployee: 'Select Employee',
    search: 'Search',
    filter: 'Filter',
    startDate: 'Start Date',
    endDate: 'End Date',
    apply: 'Apply',
    confirmDelete: 'Are you sure you want to delete this employee?',
    success: 'Success',
    error: 'Error',
    employeeAdded: 'Employee added successfully',
    employeeUpdated: 'Employee updated successfully',
    employeeDeleted: 'Employee deleted successfully',
    attendanceMarked: 'Attendance marked successfully',
    hoursRecorded: 'Hours recorded successfully',
    dh: 'DH',
    actions: 'Actions',
    allEmployees: 'All Employees',
    photo: 'Photo',
    uploadPhoto: 'Upload Photo',
    exportPDF: 'Export PDF',
    exportExcel: 'Export Excel',
    sendEmail: 'Send Email',
    backup: 'Backup',
    restore: 'Restore',
    backupDatabase: 'Backup Database',
    restoreDatabase: 'Restore Database',
    backupSuccess: 'Database backed up successfully',
    restoreSuccess: 'Database restored successfully',
    totalEmployees: 'Total Employees',
    attendanceThisMonth: 'Attendance This Month',
    hoursThisMonth: 'Hours This Month',
    attendanceTrend: 'Attendance Trend (Last 7 Days)',
    employeesByType: 'Employees by Salary Type',
    login: 'Login',
    logout: 'Logout',
    username: 'Username',
    password: 'Password',
    loginButton: 'Login',
    welcome: 'Welcome',
    emailSent: 'Email sent successfully',
    emailFailed: 'Failed to send email'
  },
  fr: {
    appTitle: 'Système de Gestion des Employés',
    employees: 'Employés',
    attendance: 'Présence',
    hours: 'Heures Travaillées',
    salary: 'Salaire',
    analytics: 'Analytique',
    settings: 'Paramètres',
    addEmployee: 'Ajouter un Employé',
    editEmployee: 'Modifier l\'Employé',
    deleteEmployee: 'Supprimer l\'Employé',
    firstName: 'Prénom',
    lastName: 'Nom',
    email: 'Email',
    phone: 'Téléphone',
    salaryType: 'Type de Salaire',
    monthly: 'Mensuel',
    hourly: 'Horaire',
    salaryAmount: 'Montant du Salaire',
    save: 'Enregistrer',
    cancel: 'Annuler',
    delete: 'Supprimer',
    edit: 'Modifier',
    date: 'Date',
    status: 'Statut',
    present: 'Présent',
    absent: 'Absent',
    leave: 'Congé',
    notes: 'Notes',
    markAttendance: 'Marquer la Présence',
    viewAttendance: 'Voir la Présence',
    recordHours: 'Enregistrer les Heures',
    hoursWorked: 'Heures Travaillées',
    viewHours: 'Voir les Heures',
    calculateSalary: 'Calculer le Salaire',
    selectMonth: 'Sélectionner le Mois',
    selectYear: 'Sélectionner l\'Année',
    calculate: 'Calculer',
    baseSalary: 'Salaire de Base',
    daysPresent: 'Jours Présents',
    totalDays: 'Jours Totaux',
    hourlyRate: 'Taux Horaire',
    totalHours: 'Heures Totales',
    totalSalary: 'Salaire Total',
    selectEmployee: 'Sélectionner un Employé',
    search: 'Rechercher',
    filter: 'Filtrer',
    startDate: 'Date de Début',
    endDate: 'Date de Fin',
    apply: 'Appliquer',
    confirmDelete: 'Êtes-vous sûr de vouloir supprimer cet employé?',
    success: 'Succès',
    error: 'Erreur',
    employeeAdded: 'Employé ajouté avec succès',
    employeeUpdated: 'Employé modifié avec succès',
    employeeDeleted: 'Employé supprimé avec succès',
    attendanceMarked: 'Présence marquée avec succès',
    hoursRecorded: 'Heures enregistrées avec succès',
    dh: 'DH',
    actions: 'Actions',
    allEmployees: 'Tous les Employés',
    photo: 'Photo',
    uploadPhoto: 'Télécharger Photo',
    exportPDF: 'Exporter PDF',
    exportExcel: 'Exporter Excel',
    sendEmail: 'Envoyer Email',
    backup: 'Sauvegarde',
    restore: 'Restaurer',
    backupDatabase: 'Sauvegarder la Base de Données',
    restoreDatabase: 'Restaurer la Base de Données',
    backupSuccess: 'Base de données sauvegardée avec succès',
    restoreSuccess: 'Base de données restaurée avec succès',
    totalEmployees: 'Total des Employés',
    attendanceThisMonth: 'Présence ce Mois',
    hoursThisMonth: 'Heures ce Mois',
    attendanceTrend: 'Tendance de Présence (7 Derniers Jours)',
    employeesByType: 'Employés par Type de Salaire',
    login: 'Connexion',
    logout: 'Déconnexion',
    username: 'Nom d\'utilisateur',
    password: 'Mot de passe',
    loginButton: 'Se connecter',
    welcome: 'Bienvenue',
    emailSent: 'Email envoyé avec succès',
    emailFailed: 'Échec de l\'envoi de l\'email'
  }
};

// State management
let state = {
  currentView: 'analytics',
  currentLanguage: localStorage.getItem('language') || 'en',
  theme: 'light',
  employees: [],
  attendance: [],
  hours: [],
  selectedEmployee: null,
  editingEmployee: null,
  currentUser: null,
  isLoggedIn: false,
  analytics: null,
  currentSalaryData: null
};

let attendanceChartInstance = null;

// Translation helper
function t(key) {
  return translations[state.currentLanguage][key] || key;
}

// Initialize app
async function initApp() {
  // Load theme preference
  const savedTheme = localStorage.getItem('theme') || 'light';
  state.theme = savedTheme;
  document.body.classList.toggle('dark-theme', savedTheme === 'dark');
  
  // Check if user is logged in
  const userResult = await window.electronAPI.getCurrentUser();
  if (userResult.user) {
    state.currentUser = userResult.user;
    state.isLoggedIn = true;
    await loadEmployees();
    await loadAnalytics();
  }
  renderApp();
}

// Load employees from database
async function loadEmployees() {
  const result = await window.electronAPI.getEmployees();
  if (result.success) {
    state.employees = result.data;
  }
}

// Load analytics
async function loadAnalytics() {
  const result = await window.electronAPI.getAnalytics();
  if (result.success) {
    state.analytics = result.data;
  }
}

// Main render function
function renderApp() {
  const root = document.getElementById('root');
  
  if (!state.isLoggedIn) {
    root.innerHTML = renderLoginScreen();
    attachLoginListeners();
    return;
  }
  
  root.innerHTML = `
    <div class="app-container">
      ${renderHeader()}
      <div class="main-content">
        ${renderNavigation()}
        <div class="content-area">
          ${renderCurrentView()}
        </div>
      </div>
    </div>
  `;
  attachEventListeners();
}

// Render login screen
function renderLoginScreen() {
  return `
    <div class="login-container">
      <div class="login-box">
        <h1>${t('appTitle')}</h1>
        <h2>${t('login')}</h2>
        <form id="loginForm">
          <div class="form-group">
            <label>${t('username')}</label>
            <input type="text" name="username" required value="admin">
          </div>
          <div class="form-group password-field">
            <label>${t('password')}</label>
            <div class="password-input-wrapper">
              <input type="password" name="password" id="loginPassword" required value="admin123">
              <button type="button" class="password-toggle" id="passwordToggle">
                <lord-icon
                  id="passwordIcon"
                  src="https://cdn.lordicon.com/vaaaohbj.json"
                  trigger="click"
                  stroke="bold"
                  state="morph-close"
                  style="width:24px;height:24px">
                </lord-icon>
              </button>
            </div>
          </div>
          <button type="submit" class="btn btn-primary">${t('loginButton')}</button>
          <p class="login-hint">Default: admin / admin123</p>
        </form>
      </div>
    </div>
  `;
}

function attachLoginListeners() {
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const result = await window.electronAPI.login({
        username: formData.get('username'),
        password: formData.get('password')
      });
      
      if (result.success) {
        state.currentUser = result.user;
        state.isLoggedIn = true;
        await loadEmployees();
        await loadAnalytics();
        renderApp();
      } else {
        showNotification(result.error, 'error');
      }
    });
  }

  // Password toggle
  const passwordToggle = document.getElementById('passwordToggle');
  const loginPassword = document.getElementById('loginPassword');
  if (passwordToggle && loginPassword) {
    passwordToggle.addEventListener('click', () => {
      const type = loginPassword.type === 'password' ? 'text' : 'password';
      loginPassword.type = type;
      
      // Toggle icon state
      const icon = document.getElementById('passwordIcon');
      if (type === 'text') {
        icon.setAttribute('state', 'in-reveal');
      } else {
        icon.setAttribute('state', 'morph-close');
      }
    });
  }
}

// Render header with language switcher
function renderHeader() {
  return `
    <header class="app-header">
      <h1>${t('appTitle')}</h1>
      <div class="header-right">
        <span class="user-info">${t('welcome')}, ${state.currentUser?.username}</span>
        <div class="language-switcher">
          <button class="lang-btn ${state.currentLanguage === 'en' ? 'active' : ''}" data-lang="en">EN</button>
          <button class="lang-btn ${state.currentLanguage === 'fr' ? 'active' : ''}" data-lang="fr">FR</button>
        </div>
        <button class="btn btn-theme-toggle" id="themeToggleBtn" title="Toggle Theme">
          <lord-icon
            src="https://cdn.lordicon.com/pwlnbxzy.json"
            trigger="hover"
            colors="primary:#ffffff"
            style="width:28px;height:28px">
          </lord-icon>
        </button>
        <button class="btn btn-logout" id="logoutBtn" title="${t('logout')}">
          <lord-icon
            src="https://cdn.lordicon.com/mzucjztf.json"
            trigger="hover"
            style="width:28px;height:28px">
          </lord-icon>
        </button>
      </div>
    </header>
  `;
}

// Render navigation
function renderNavigation() {
  const views = ['analytics', 'employees', 'attendance', 'hours', 'salary', 'settings'];
  return `
    <nav class="sidebar">
      ${views.map(view => `
        <button class="nav-btn ${state.currentView === view ? 'active' : ''}" data-view="${view}">
          ${t(view)}
        </button>
      `).join('')}
    </nav>
  `;
}

// Render current view
function renderCurrentView() {
  switch (state.currentView) {
    case 'analytics':
      return renderAnalyticsView();
    case 'employees':
      return renderEmployeesView();
    case 'attendance':
      return renderAttendanceView();
    case 'hours':
      return renderHoursView();
    case 'salary':
      return renderSalaryView();
    case 'settings':
      return renderSettingsView();
    default:
      return '';
  }
}

// Render analytics view
function renderAnalyticsView() {
  if (!state.analytics) return '<div class="loading">Loading analytics...</div>';
  
  return `
    <div class="view-container">
      <div class="view-header">
        <h2>${t('analytics')}</h2>
      </div>
      
      <div class="analytics-grid">
        <div class="analytics-card">
          <h3>${t('totalEmployees')}</h3>
          <div class="big-number">${state.analytics.totalEmployees}</div>
        </div>
        
        <div class="analytics-card">
          <h3>${t('attendanceThisMonth')}</h3>
          <div class="stats-list">
            <div>${t('present')}: ${state.analytics.attendanceThisMonth.present || 0}</div>
            <div>${t('absent')}: ${state.analytics.attendanceThisMonth.absent || 0}</div>
            <div>${t('leave')}: ${state.analytics.attendanceThisMonth.leave || 0}</div>
          </div>
        </div>
        
        <div class="analytics-card">
          <h3>${t('hoursThisMonth')}</h3>
          <div class="big-number">${(state.analytics.totalHoursThisMonth || 0).toFixed(1)}h</div>
        </div>
        
        <div class="analytics-card">
          <h3>${t('employeesByType')}</h3>
          <div class="stats-list">
            <div>${t('monthly')}: ${state.analytics.employeesByType.monthly || 0}</div>
            <div>${t('hourly')}: ${state.analytics.employeesByType.hourly || 0}</div>
          </div>
        </div>
      </div>
      
      <div class="chart-container">
        <h3>${t('attendanceTrend')}</h3>
        <canvas id="attendanceChart"></canvas>
      </div>
    </div>
  `;
}

// Render employees view
function renderEmployeesView() {
  return `
    <div class="view-container">
      <div class="view-header">
        <h2>${t('employees')}</h2>
        <button class="btn btn-primary" id="addEmployeeBtn">${t('addEmployee')}</button>
      </div>
      ${state.editingEmployee !== null ? renderEmployeeForm() : ''}
      <div class="table-container">
        <table class="data-table">
          <thead>
            <tr>
              <th>${t('photo')}</th>
              <th>${t('firstName')}</th>
              <th>${t('lastName')}</th>
              <th>${t('email')}</th>
              <th>${t('phone')}</th>
              <th>${t('salaryType')}</th>
              <th>${t('salaryAmount')} (${t('dh')})</th>
              <th>${t('actions')}</th>
            </tr>
          </thead>
          <tbody>
            ${state.employees.map(emp => {
              console.log(`Rendering employee ${emp.firstName} - has photo: ${emp.photo ? 'YES' : 'NO'}`);
              return `
              <tr>
                <td>
                  ${emp.photo && emp.photo.startsWith('data:image') ? `<img src="${emp.photo}" class="employee-photo-small" alt="${emp.firstName}">` : '<div class="no-photo">👤</div>'}
                </td>
                <td>${emp.firstName}</td>
                <td>${emp.lastName}</td>
                <td>${emp.email}</td>
                <td>${emp.phone || '-'}</td>
                <td>${t(emp.salaryType)}</td>
                <td>${emp.salaryAmount.toFixed(2)}</td>
                <td>
                  <button class="btn btn-small btn-edit" data-id="${emp.id}" title="${t('edit')}">
                    <lord-icon
                      src="https://cdn.lordicon.com/tobsqthh.json"
                      trigger="hover"
                      style="width:37px;height:37px">
                    </lord-icon>
                  </button>
                  <button class="btn btn-small btn-delete" data-id="${emp.id}" title="${t('delete')}">
                    <lord-icon
                      src="https://cdn.lordicon.com/sxhqklqh.json"
                      trigger="hover"
                      colors="primary:#121331,secondary:#c71f16,tertiary:#646e78"
                      style="width:37px;height:37px">
                    </lord-icon>
                  </button>
                </td>
              </tr>
            `}).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

// Render employee form
function renderEmployeeForm() {
  const emp = state.editingEmployee || {};
  const isEdit = emp.id !== undefined;
  
  console.log('Rendering form for employee:', emp.firstName || 'NEW', 'Photo:', emp.photo ? 'YES' : 'NO');
  
  return `
    <div class="form-container">
      <h3>${isEdit ? t('editEmployee') : t('addEmployee')}</h3>
      <form id="employeeForm">
        <div class="photo-upload-section">
          ${emp.photo && emp.photo.startsWith('data:image') ? `<img src="${emp.photo}" class="employee-photo-preview" id="photoPreview">` : '<div class="no-photo-large" id="photoPreview">👤</div>'}
          <button type="button" class="btn btn-secondary" id="uploadPhotoBtn">${t('uploadPhoto')}</button>
          <input type="hidden" name="photo" id="photoData" value="${emp.photo || ''}">
        </div>
        <div class="form-row">
          <div class="form-group">
            <label>${t('firstName')}*</label>
            <input type="text" name="firstName" value="${emp.firstName || ''}" required>
          </div>
          <div class="form-group">
            <label>${t('lastName')}*</label>
            <input type="text" name="lastName" value="${emp.lastName || ''}" required>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label>${t('email')}*</label>
            <input type="email" name="email" value="${emp.email || ''}" required>
          </div>
          <div class="form-group">
            <label>${t('phone')}</label>
            <input type="tel" name="phone" value="${emp.phone || ''}">
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label>${t('salaryType')}*</label>
            <select name="salaryType" required>
              <option value="monthly" ${emp.salaryType === 'monthly' ? 'selected' : ''}>${t('monthly')}</option>
              <option value="hourly" ${emp.salaryType === 'hourly' ? 'selected' : ''}>${t('hourly')}</option>
            </select>
          </div>
          <div class="form-group">
            <label>${t('salaryAmount')} (${t('dh')})*</label>
            <input type="number" name="salaryAmount" value="${emp.salaryAmount || ''}" step="0.01" min="0" required>
          </div>
        </div>
        <div class="form-actions">
          <button type="submit" class="btn btn-primary">${t('save')}</button>
          <button type="button" class="btn btn-secondary" id="cancelFormBtn">${t('cancel')}</button>
        </div>
      </form>
    </div>
  `;
}

// Render attendance view (same as before, keeping for completeness)
function renderAttendanceView() {
  return `
    <div class="view-container">
      <div class="view-header">
        <h2>${t('attendance')}</h2>
        <button class="btn btn-primary" id="markAttendanceBtn">${t('markAttendance')}</button>
      </div>
      ${state.selectedEmployee !== null && state.currentView === 'attendance' ? renderAttendanceForm() : ''}
      ${renderAttendanceFilters()}
      ${renderAttendanceTable()}
    </div>
  `;
}

function renderAttendanceForm() {
  const today = new Date().toISOString().split('T')[0];
  
  return `
    <div class="form-container">
      <h3>${t('markAttendance')}</h3>
      <form id="attendanceForm">
        <div class="form-row">
          <div class="form-group">
            <label>${t('selectEmployee')}*</label>
            <select name="employeeId" required>
              <option value="">${t('selectEmployee')}</option>
              ${state.employees.map(emp => `
                <option value="${emp.id}">${emp.firstName} ${emp.lastName}</option>
              `).join('')}
            </select>
          </div>
          <div class="form-group">
            <label>${t('date')}*</label>
            <input type="date" name="date" value="${today}" required>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label>${t('status')}*</label>
            <select name="status" required>
              <option value="present">${t('present')}</option>
              <option value="absent">${t('absent')}</option>
              <option value="leave">${t('leave')}</option>
            </select>
          </div>
          <div class="form-group">
            <label>${t('notes')}</label>
            <input type="text" name="notes">
          </div>
        </div>
        <div class="form-actions">
          <button type="submit" class="btn btn-primary">${t('save')}</button>
          <button type="button" class="btn btn-secondary" id="cancelAttendanceBtn">${t('cancel')}</button>
        </div>
      </form>
    </div>
  `;
}

function renderAttendanceFilters() {
  return `
    <div class="filters-container">
      <h4>${t('filter')}</h4>
      <form id="attendanceFilterForm">
        <div class="form-row">
          <div class="form-group">
            <label>${t('selectEmployee')}</label>
            <select name="employeeId">
              <option value="">${t('allEmployees')}</option>
              ${state.employees.map(emp => `
                <option value="${emp.id}">${emp.firstName} ${emp.lastName}</option>
              `).join('')}
            </select>
          </div>
          <div class="form-group">
            <label>${t('startDate')}</label>
            <input type="date" name="startDate">
          </div>
          <div class="form-group">
            <label>${t('endDate')}</label>
            <input type="date" name="endDate">
          </div>
          <button type="submit" class="btn btn-primary">${t('apply')}</button>
        </div>
      </form>
    </div>
  `;
}

function renderAttendanceTable() {
  return `
    <div class="table-container">
      <table class="data-table">
        <thead>
          <tr>
            <th>${t('date')}</th>
            <th>${t('firstName')}</th>
            <th>${t('lastName')}</th>
            <th>${t('status')}</th>
            <th>${t('notes')}</th>
          </tr>
        </thead>
        <tbody id="attendanceTableBody">
          <tr><td colspan="5">${t('apply')} ${t('filter')}</td></tr>
        </tbody>
      </table>
    </div>
  `;
}

// Render hours view (similar structure)
function renderHoursView() {
  return `
    <div class="view-container">
      <div class="view-header">
        <h2>${t('hours')}</h2>
        <button class="btn btn-primary" id="recordHoursBtn">${t('recordHours')}</button>
      </div>
      ${state.selectedEmployee !== null && state.currentView === 'hours' ? renderHoursForm() : ''}
      ${renderHoursFilters()}
      ${renderHoursTable()}
    </div>
  `;
}

function renderHoursForm() {
  const today = new Date().toISOString().split('T')[0];
  
  return `
    <div class="form-container">
      <h3>${t('recordHours')}</h3>
      <form id="hoursForm">
        <div class="form-row">
          <div class="form-group">
            <label>${t('selectEmployee')}*</label>
            <select name="employeeId" required>
              <option value="">${t('selectEmployee')}</option>
              ${state.employees.map(emp => `
                <option value="${emp.id}">${emp.firstName} ${emp.lastName}</option>
              `).join('')}
            </select>
          </div>
          <div class="form-group">
            <label>${t('date')}*</label>
            <input type="date" name="date" value="${today}" required>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label>${t('hoursWorked')}*</label>
            <input type="number" name="hoursWorked" step="0.5" min="0" max="24" required>
          </div>
          <div class="form-group">
            <label>${t('notes')}</label>
            <input type="text" name="notes">
          </div>
        </div>
        <div class="form-actions">
          <button type="submit" class="btn btn-primary">${t('save')}</button>
          <button type="button" class="btn btn-secondary" id="cancelHoursBtn">${t('cancel')}</button>
        </div>
      </form>
    </div>
  `;
}

function renderHoursFilters() {
  return `
    <div class="filters-container">
      <h4>${t('filter')}</h4>
      <form id="hoursFilterForm">
        <div class="form-row">
          <div class="form-group">
            <label>${t('selectEmployee')}</label>
            <select name="employeeId">
              <option value="">${t('allEmployees')}</option>
              ${state.employees.map(emp => `
                <option value="${emp.id}">${emp.firstName} ${emp.lastName}</option>
              `).join('')}
            </select>
          </div>
          <div class="form-group">
            <label>${t('startDate')}</label>
            <input type="date" name="startDate">
          </div>
          <div class="form-group">
            <label>${t('endDate')}</label>
            <input type="date" name="endDate">
          </div>
          <button type="submit" class="btn btn-primary">${t('apply')}</button>
        </div>
      </form>
    </div>
  `;
}

function renderHoursTable() {
  return `
    <div class="table-container">
      <table class="data-table">
        <thead>
          <tr>
            <th>${t('date')}</th>
            <th>${t('firstName')}</th>
            <th>${t('lastName')}</th>
            <th>${t('hoursWorked')}</th>
            <th>${t('notes')}</th>
          </tr>
        </thead>
        <tbody id="hoursTableBody">
          <tr><td colspan="5">${t('apply')} ${t('filter')}</td></tr>
        </tbody>
      </table>
    </div>
  `;
}

// Render salary view with export options
function renderSalaryView() {
  return `
    <div class="view-container">
      <div class="view-header">
        <h2>${t('salary')}</h2>
      </div>
      <div class="form-container">
        <h3>${t('calculateSalary')}</h3>
        <form id="salaryForm">
          <div class="form-row">
            <div class="form-group">
              <label>${t('selectEmployee')}*</label>
              <select name="employeeId" required>
                <option value="">${t('selectEmployee')}</option>
                ${state.employees.map(emp => `
                  <option value="${emp.id}">${emp.firstName} ${emp.lastName}</option>
                `).join('')}
              </select>
            </div>
            <div class="form-group">
              <label>${t('selectMonth')}*</label>
              <select name="month" required>
                ${[...Array(12)].map((_, i) => {
                  const month = i + 1;
                  const monthName = new Date(2000, i, 1).toLocaleString(state.currentLanguage, { month: 'long' });
                  return `<option value="${month}">${monthName}</option>`;
                }).join('')}
              </select>
            </div>
            <div class="form-group">
              <label>${t('selectYear')}*</label>
              <select name="year" required>
                ${[...Array(5)].map((_, i) => {
                  const year = new Date().getFullYear() - i;
                  return `<option value="${year}">${year}</option>`;
                }).join('')}
              </select>
            </div>
            <button type="submit" class="btn btn-primary">${t('calculate')}</button>
          </div>
        </form>
      </div>
      <div id="salaryResult"></div>
    </div>
  `;
}

// Render settings view
function renderSettingsView() {
  return `
    <div class="view-container">
      <div class="view-header">
        <h2>${t('settings')}</h2>
      </div>
      
      <div class="settings-section">
        <h3>${t('backup')} & ${t('restore')}</h3>
        <div class="settings-buttons">
          <button class="btn btn-primary" id="backupBtn">${t('backupDatabase')}</button>
          <button class="btn btn-secondary" id="restoreBtn">${t('restoreDatabase')}</button>
        </div>
      </div>
    </div>
  `;
}

// Export to PDF
function exportSalaryToPDF() {
  if (!state.currentSalaryData) return;
  
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  
  const { employee, details } = state.currentSalaryData;
  
  doc.setFontSize(20);
  doc.text('Salary Report', 105, 20, { align: 'center' });
  
  doc.setFontSize(12);
  doc.text(`Employee: ${employee.firstName} ${employee.lastName}`, 20, 40);
  doc.text(`Email: ${employee.email}`, 20, 50);
  
  let yPos = 70;
  if (details.salaryType === 'monthly') {
    doc.text(`Base Salary: ${details.baseSalary.toFixed(2)} DH`, 20, yPos);
    doc.text(`Days Present: ${details.daysPresent} / ${details.totalDays}`, 20, yPos + 10);
  } else {
    doc.text(`Hourly Rate: ${details.hourlyRate.toFixed(2)} DH`, 20, yPos);
    doc.text(`Total Hours: ${details.totalHours}`, 20, yPos + 10);
  }
  
  doc.setFontSize(16);
  doc.text(`Total Salary: ${details.totalSalary.toFixed(2)} DH`, 20, yPos + 30);
  
  doc.save(`salary_${employee.firstName}_${employee.lastName}.pdf`);
  showNotification('PDF exported successfully', 'success');
}

// Export to Excel
function exportSalaryToExcel() {
  if (!state.currentSalaryData) return;
  
  const { employee, details } = state.currentSalaryData;
  
  const data = [
    ['Salary Report'],
    [''],
    ['Employee', `${employee.firstName} ${employee.lastName}`],
    ['Email', employee.email],
    [''],
  ];
  
  if (details.salaryType === 'monthly') {
    data.push(
      ['Base Salary (DH)', details.baseSalary.toFixed(2)],
      ['Days Present', details.daysPresent],
      ['Total Days', details.totalDays]
    );
  } else {
    data.push(
      ['Hourly Rate (DH)', details.hourlyRate.toFixed(2)],
      ['Total Hours', details.totalHours]
    );
  }
  
  data.push(
    [''],
    ['Total Salary (DH)', details.totalSalary.toFixed(2)]
  );
  
  const ws = XLSX.utils.aoa_to_sheet(data);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Salary Report');
  
  XLSX.writeFile(wb, `salary_${employee.firstName}_${employee.lastName}.xlsx`);
  showNotification('Excel exported successfully', 'success');
}

// Send salary via email
async function sendSalaryEmail() {
  if (!state.currentSalaryData) return;
  
  const { employee, details } = state.currentSalaryData;
  
  const body = `
    <h2>Salary Report</h2>
    <p><strong>Employee:</strong> ${employee.firstName} ${employee.lastName}</p>
    <p><strong>Email:</strong> ${employee.email}</p>
    ${details.salaryType === 'monthly' 
      ? `<p><strong>Base Salary:</strong> ${details.baseSalary.toFixed(2)} DH</p>
         <p><strong>Days Present:</strong> ${details.daysPresent} / ${details.totalDays}</p>`
      : `<p><strong>Hourly Rate:</strong> ${details.hourlyRate.toFixed(2)} DH</p>
         <p><strong>Total Hours:</strong> ${details.totalHours}</p>`
    }
    <h3>Total Salary: ${details.totalSalary.toFixed(2)} DH</h3>
  `;
  
  const result = await window.electronAPI.sendSalaryEmail({
    to: employee.email,
    subject: 'Salary Report',
    body: body
  });
  
  if (result.success) {
    showNotification(t('emailSent'), 'success');
  } else {
    showNotification(t('emailFailed') + ': ' + result.error, 'error');
  }
}

// Attach event listeners (continued from previous code with additions)
function attachEventListeners() {
  // Language switcher
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      state.currentLanguage = e.target.dataset.lang;
      localStorage.setItem('language', state.currentLanguage);
      renderApp();
    });
  });

  // Logout
  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', async () => {
      await window.electronAPI.logout();
      state.isLoggedIn = false;
      state.currentUser = null;
      renderApp();
    });
  }

  // Theme toggle
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', state.theme);
      document.body.classList.toggle('dark-theme', state.theme === 'dark');
      renderAttendanceChart();
    });
  }

  // Navigation
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', async (e) => {
      state.currentView = e.target.dataset.view;
      state.selectedEmployee = null;
      state.editingEmployee = null;
      
      // Reload analytics when switching to analytics view
      if (state.currentView === 'analytics') {
        await loadAnalytics();
      }
      
      renderApp();
      
      // Render chart if on analytics view
      if (state.currentView === 'analytics') {
        setTimeout(renderAttendanceChart, 100);
      }
    });
  });

  // Employee management
  const addEmployeeBtn = document.getElementById('addEmployeeBtn');
  if (addEmployeeBtn) {
    addEmployeeBtn.addEventListener('click', () => {
      state.editingEmployee = {};
      renderApp();
    });
  }

  const employeeForm = document.getElementById('employeeForm');
  if (employeeForm) {
    employeeForm.addEventListener('submit', handleEmployeeSubmit);
  }

  const cancelFormBtn = document.getElementById('cancelFormBtn');
  if (cancelFormBtn) {
    cancelFormBtn.addEventListener('click', () => {
      state.editingEmployee = null;
      renderApp();
    });
  }

  // Photo upload
  const uploadPhotoBtn = document.getElementById('uploadPhotoBtn');
  if (uploadPhotoBtn) {
    uploadPhotoBtn.addEventListener('click', async () => {
      const result = await window.electronAPI.uploadPhoto();
      if (result.success) {
        console.log('Photo uploaded, length:', result.photo.length);
        document.getElementById('photoData').value = result.photo;
        const preview = document.getElementById('photoPreview');
        preview.outerHTML = `<img src="${result.photo}" class="employee-photo-preview" id="photoPreview">`;
        showNotification('Photo uploaded successfully', 'success');
      } else {
        showNotification('Failed to upload photo: ' + result.error, 'error');
      }
    });
  }

  // Edit/Delete buttons
  document.querySelectorAll('.btn-edit').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const button = e.currentTarget;
      const id = parseInt(button.dataset.id);
      state.editingEmployee = state.employees.find(emp => emp.id === id);
      renderApp();
    });
  });

  document.querySelectorAll('.btn-delete').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const button = e.currentTarget;
      if (confirm(t('confirmDelete'))) {
        handleEmployeeDelete(parseInt(button.dataset.id));
      }
    });
  });

  // Attendance
  const markAttendanceBtn = document.getElementById('markAttendanceBtn');
  if (markAttendanceBtn) {
    markAttendanceBtn.addEventListener('click', () => {
      state.selectedEmployee = {};
      renderApp();
    });
  }

  const attendanceForm = document.getElementById('attendanceForm');
  if (attendanceForm) {
    attendanceForm.addEventListener('submit', handleAttendanceSubmit);
  }

  const cancelAttendanceBtn = document.getElementById('cancelAttendanceBtn');
  if (cancelAttendanceBtn) {
    cancelAttendanceBtn.addEventListener('click', () => {
      state.selectedEmployee = null;
      renderApp();
    });
  }

  const attendanceFilterForm = document.getElementById('attendanceFilterForm');
  if (attendanceFilterForm) {
    attendanceFilterForm.addEventListener('submit', handleAttendanceFilter);
  }

  // Hours
  const recordHoursBtn = document.getElementById('recordHoursBtn');
  if (recordHoursBtn) {
    recordHoursBtn.addEventListener('click', () => {
      state.selectedEmployee = {};
      renderApp();
    });
  }

  const hoursForm = document.getElementById('hoursForm');
  if (hoursForm) {
    hoursForm.addEventListener('submit', handleHoursSubmit);
  }

  const cancelHoursBtn = document.getElementById('cancelHoursBtn');
  if (cancelHoursBtn) {
    cancelHoursBtn.addEventListener('click', () => {
      state.selectedEmployee = null;
      renderApp();
    });
  }

  const hoursFilterForm = document.getElementById('hoursFilterForm');
  if (hoursFilterForm) {
    hoursFilterForm.addEventListener('submit', handleHoursFilter);
  }

  // Salary
  const salaryForm = document.getElementById('salaryForm');
  if (salaryForm) {
    salaryForm.addEventListener('submit', handleSalaryCalculation);
  }

  // Settings
  const backupBtn = document.getElementById('backupBtn');
  if (backupBtn) {
    backupBtn.addEventListener('click', async () => {
      const result = await window.electronAPI.backupDatabase();
      if (result.success) {
        showNotification(t('backupSuccess'), 'success');
      } else {
        showNotification(result.error, 'error');
      }
    });
  }

  const restoreBtn = document.getElementById('restoreBtn');
  if (restoreBtn) {
    restoreBtn.addEventListener('click', async () => {
      const result = await window.electronAPI.restoreDatabase();
      if (result.success) {
        showNotification(t('restoreSuccess'), 'success');
        await loadEmployees();
        await loadAnalytics();
        renderApp();
      } else {
        showNotification(result.error, 'error');
      }
    });
  }
}

// Event handlers (keeping existing ones and adding new)
async function handleEmployeeSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const photoValue = formData.get('photo');
  console.log('Form submitted with photo:', photoValue ? 'YES (length: ' + photoValue.length + ')' : 'NO');
  const employee = {
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    salaryType: formData.get('salaryType'),
    salaryAmount: parseFloat(formData.get('salaryAmount')),
    photo: photoValue || null
  };

  let result;
  const isEdit = state.editingEmployee.id !== undefined;
  if (isEdit) {
    employee.id = state.editingEmployee.id;
    result = await window.electronAPI.updateEmployee(employee);
  } else {
    result = await window.electronAPI.addEmployee(employee);
  }

  if (result.success) {
    await loadEmployees();
    await loadAnalytics();
    state.editingEmployee = null;
    renderApp();
    showNotification(isEdit ? t('employeeUpdated') : t('employeeAdded'), 'success');
  } else {
    showNotification(result.error, 'error');
  }
}

async function handleEmployeeDelete(employeeId) {
  const result = await window.electronAPI.deleteEmployee(employeeId);
  if (result.success) {
    await loadEmployees();
    await loadAnalytics();
    renderApp();
    showNotification(t('employeeDeleted'), 'success');
  } else {
    showNotification(result.error, 'error');
  }
}

async function handleAttendanceSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const attendance = {
    employeeId: parseInt(formData.get('employeeId')),
    date: formData.get('date'),
    status: formData.get('status'),
    notes: formData.get('notes')
  };

  const result = await window.electronAPI.markAttendance(attendance);
  if (result.success) {
    state.selectedEmployee = null;
    await loadAnalytics();
    renderApp();
    showNotification(t('attendanceMarked'), 'success');
  } else {
    showNotification(result.error, 'error');
  }
}

async function handleAttendanceFilter(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const filters = {
    employeeId: formData.get('employeeId') ? parseInt(formData.get('employeeId')) : null,
    startDate: formData.get('startDate') || null,
    endDate: formData.get('endDate') || null
  };

  const result = await window.electronAPI.getAttendance(filters);
  if (result.success) {
    const tbody = document.getElementById('attendanceTableBody');
    if (result.data.length === 0) {
      tbody.innerHTML = `<tr><td colspan="5">No records found</td></tr>`;
    } else {
      tbody.innerHTML = result.data.map(record => `
        <tr>
          <td>${record.date}</td>
          <td>${record.firstName}</td>
          <td>${record.lastName}</td>
          <td>${t(record.status)}</td>
          <td>${record.notes || '-'}</td>
        </tr>
      `).join('');
    }
  } else {
    showNotification(result.error, 'error');
  }
}

async function handleHoursSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const hours = {
    employeeId: parseInt(formData.get('employeeId')),
    date: formData.get('date'),
    hoursWorked: parseFloat(formData.get('hoursWorked')),
    notes: formData.get('notes')
  };

  const result = await window.electronAPI.recordHours(hours);
  if (result.success) {
    state.selectedEmployee = null;
    await loadAnalytics();
    renderApp();
    showNotification(t('hoursRecorded'), 'success');
  } else {
    showNotification(result.error, 'error');
  }
}

async function handleHoursFilter(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const filters = {
    employeeId: formData.get('employeeId') ? parseInt(formData.get('employeeId')) : null,
    startDate: formData.get('startDate') || null,
    endDate: formData.get('endDate') || null
  };

  const result = await window.electronAPI.getHours(filters);
  if (result.success) {
    const tbody = document.getElementById('hoursTableBody');
    if (result.data.length === 0) {
      tbody.innerHTML = `<tr><td colspan="5">No records found</td></tr>`;
    } else {
      tbody.innerHTML = result.data.map(record => `
        <tr>
          <td>${record.date}</td>
          <td>${record.firstName}</td>
          <td>${record.lastName}</td>
          <td>${record.hoursWorked}</td>
          <td>${record.notes || '-'}</td>
        </tr>
      `).join('');
    }
  } else {
    showNotification(result.error, 'error');
  }
}

async function handleSalaryCalculation(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const params = {
    employeeId: parseInt(formData.get('employeeId')),
    month: parseInt(formData.get('month')),
    year: parseInt(formData.get('year'))
  };

  const result = await window.electronAPI.calculateSalary(params);
  const resultDiv = document.getElementById('salaryResult');
  
  if (result.success) {
    state.currentSalaryData = result;
    const { employee, details } = result;
    let detailsHTML = '';
    
    if (details.salaryType === 'monthly') {
      detailsHTML = `
        <div class="salary-detail"><span>${t('baseSalary')}:</span> <strong>${details.baseSalary.toFixed(2)} ${t('dh')}</strong></div>
        <div class="salary-detail"><span>${t('daysPresent')}:</span> <strong>${details.daysPresent} / ${details.totalDays}</strong></div>
      `;
    } else {
      detailsHTML = `
        <div class="salary-detail"><span>${t('hourlyRate')}:</span> <strong>${details.hourlyRate.toFixed(2)} ${t('dh')}</strong></div>
        <div class="salary-detail"><span>${t('totalHours')}:</span> <strong>${details.totalHours}</strong></div>
      `;
    }
    
    resultDiv.innerHTML = `
      <div class="salary-result-container">
        <h3>${employee.firstName} ${employee.lastName}</h3>
        ${detailsHTML}
        <div class="salary-total">
          <span>${t('totalSalary')}:</span>
          <strong>${details.totalSalary.toFixed(2)} ${t('dh')}</strong>
        </div>
        <div class="salary-actions">
          <button class="btn btn-primary" onclick="exportSalaryToPDF()">${t('exportPDF')}</button>
          <button class="btn btn-primary" onclick="exportSalaryToExcel()">${t('exportExcel')}</button>
          <button class="btn btn-secondary" onclick="sendSalaryEmail()">${t('sendEmail')}</button>
        </div>
      </div>
    `;
  } else {
    showNotification(result.error, 'error');
  }
}

// Render attendance chart
function renderAttendanceChart() {
  if (!state.analytics || !state.analytics.attendanceTrend) return;
  
  const ctx = document.getElementById('attendanceChart');
  if (!ctx) return;
  
  if (attendanceChartInstance) {
    attendanceChartInstance.destroy();
    attendanceChartInstance = null;
  }

  const isDark = document.body.classList.contains('dark-theme');
  const lineColor = isDark ? '#8ad1ff' : '#667eea';
  const fillColor = isDark ? 'rgba(138, 209, 255, 0.18)' : 'rgba(102, 126, 234, 0.12)';
  const gridColor = isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.05)';
  const tickColor = isDark ? '#f2f2f2' : '#666';

  const labels = state.analytics.attendanceTrend.map(d => d.date);
  const data = state.analytics.attendanceTrend.map(d => d.count);
  
  attendanceChartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: t('attendance'),
        data: data,
        borderColor: lineColor,
        backgroundColor: fillColor,
        tension: 0.4,
        borderWidth: 3,
        pointRadius: 4,
        pointBackgroundColor: lineColor,
        pointBorderColor: lineColor
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            stepSize: 1,
            color: tickColor
          },
          grid: {
            color: gridColor
          }
        },
        x: {
          ticks: {
            color: tickColor
          },
          grid: {
            color: gridColor
          }
        }
      }
    }
  });
}

// Show notification
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.textContent = message;
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.classList.add('show');
  }, 10);
  
  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', initApp);

// Make functions globally available for inline onclick handlers
window.exportSalaryToPDF = exportSalaryToPDF;
window.exportSalaryToExcel = exportSalaryToExcel;
window.sendSalaryEmail = sendSalaryEmail;
