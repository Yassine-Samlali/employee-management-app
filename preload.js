const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  // Employee operations
  getEmployees: () => ipcRenderer.invoke('get-employees'),
  addEmployee: (employee) => ipcRenderer.invoke('add-employee', employee),
  deleteEmployee: (employeeId) => ipcRenderer.invoke('delete-employee', employeeId),
  updateEmployee: (employee) => ipcRenderer.invoke('update-employee', employee),
  
  // Attendance operations
  markAttendance: (attendance) => ipcRenderer.invoke('mark-attendance', attendance),
  getAttendance: (filters) => ipcRenderer.invoke('get-attendance', filters),
  
  // Hours worked operations
  recordHours: (hours) => ipcRenderer.invoke('record-hours', hours),
  getHours: (filters) => ipcRenderer.invoke('get-hours', filters),
  
  // Salary calculation
  calculateSalary: (params) => ipcRenderer.invoke('calculate-salary', params),
  
  // Authentication
  login: (credentials) => ipcRenderer.invoke('login', credentials),
  logout: () => ipcRenderer.invoke('logout'),
  getCurrentUser: () => ipcRenderer.invoke('get-current-user'),
  addUser: (user) => ipcRenderer.invoke('add-user', user),
  
  // Backup/Restore
  backupDatabase: () => ipcRenderer.invoke('backup-database'),
  restoreDatabase: () => ipcRenderer.invoke('restore-database'),
  
  // Photo upload
  uploadPhoto: () => ipcRenderer.invoke('upload-photo'),
  
  // Email
  sendSalaryEmail: (emailData) => ipcRenderer.invoke('send-salary-email', emailData),
  
  // Analytics
  getAnalytics: () => ipcRenderer.invoke('get-analytics')
});
