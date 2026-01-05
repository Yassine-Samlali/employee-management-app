// Translation data
const translations = {
  en: {
    appTitle: 'Employee Management System',
    employees: 'Employees',
    attendance: 'Attendance',
    hours: 'Hours Worked',
    salary: 'Salary',
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
    allEmployees: 'All Employees'
  },
  fr: {
    appTitle: 'Système de Gestion des Employés',
    employees: 'Employés',
    attendance: 'Présence',
    hours: 'Heures Travaillées',
    salary: 'Salaire',
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
    allEmployees: 'Tous les Employés'
  }
};

// State management
let state = {
  currentView: 'employees',
  currentLanguage: localStorage.getItem('language') || 'en',
  employees: [],
  attendance: [],
  hours: [],
  selectedEmployee: null,
  editingEmployee: null
};

// Translation helper
function t(key) {
  return translations[state.currentLanguage][key] || key;
}

// Initialize app
async function initApp() {
  await loadEmployees();
  renderApp();
}

// Load employees from database
async function loadEmployees() {
  const result = await window.electronAPI.getEmployees();
  if (result.success) {
    state.employees = result.data;
  }
}

// Main render function
function renderApp() {
  const root = document.getElementById('root');
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

// Render header with language switcher
function renderHeader() {
  return `
    <header class="app-header">
      <h1>${t('appTitle')}</h1>
      <div class="language-switcher">
        <button class="lang-btn ${state.currentLanguage === 'en' ? 'active' : ''}" data-lang="en">EN</button>
        <button class="lang-btn ${state.currentLanguage === 'fr' ? 'active' : ''}" data-lang="fr">FR</button>
      </div>
    </header>
  `;
}

// Render navigation
function renderNavigation() {
  const views = ['employees', 'attendance', 'hours', 'salary'];
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
    case 'employees':
      return renderEmployeesView();
    case 'attendance':
      return renderAttendanceView();
    case 'hours':
      return renderHoursView();
    case 'salary':
      return renderSalaryView();
    default:
      return '';
  }
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
            ${state.employees.map(emp => `
              <tr>
                <td>${emp.firstName}</td>
                <td>${emp.lastName}</td>
                <td>${emp.email}</td>
                <td>${emp.phone || '-'}</td>
                <td>${t(emp.salaryType)}</td>
                <td>${emp.salaryAmount.toFixed(2)}</td>
                <td>
                  <button class="btn btn-small btn-edit" data-id="${emp.id}">${t('edit')}</button>
                  <button class="btn btn-small btn-delete" data-id="${emp.id}">${t('delete')}</button>
                </td>
              </tr>
            `).join('')}
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
  
  return `
    <div class="form-container">
      <h3>${isEdit ? t('editEmployee') : t('addEmployee')}</h3>
      <form id="employeeForm">
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

// Render attendance view
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

// Render attendance form
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

// Render attendance filters
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

// Render attendance table
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

// Render hours view
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

// Render hours form
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

// Render hours filters
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

// Render hours table
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

// Render salary view
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

// Attach event listeners
function attachEventListeners() {
  // Language switcher
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      state.currentLanguage = e.target.dataset.lang;
      localStorage.setItem('language', state.currentLanguage);
      renderApp();
    });
  });

  // Navigation
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      state.currentView = e.target.dataset.view;
      state.selectedEmployee = null;
      state.editingEmployee = null;
      renderApp();
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

  // Edit buttons
  document.querySelectorAll('.btn-edit').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = parseInt(e.target.dataset.id);
      state.editingEmployee = state.employees.find(emp => emp.id === id);
      renderApp();
    });
  });

  // Delete buttons
  document.querySelectorAll('.btn-delete').forEach(btn => {
    btn.addEventListener('click', (e) => {
      if (confirm(t('confirmDelete'))) {
        handleEmployeeDelete(parseInt(e.target.dataset.id));
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
}

// Event handlers
async function handleEmployeeSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const employee = {
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    salaryType: formData.get('salaryType'),
    salaryAmount: parseFloat(formData.get('salaryAmount'))
  };

  let result;
  if (state.editingEmployee.id) {
    employee.id = state.editingEmployee.id;
    result = await window.electronAPI.updateEmployee(employee);
  } else {
    result = await window.electronAPI.addEmployee(employee);
  }

  if (result.success) {
    await loadEmployees();
    state.editingEmployee = null;
    renderApp();
    showNotification(state.editingEmployee ? t('employeeUpdated') : t('employeeAdded'), 'success');
  } else {
    showNotification(result.error, 'error');
  }
}

async function handleEmployeeDelete(employeeId) {
  const result = await window.electronAPI.deleteEmployee(employeeId);
  if (result.success) {
    await loadEmployees();
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
      </div>
    `;
  } else {
    showNotification(result.error, 'error');
  }
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
