# Quick Start Guide

## Installation

1. Open a terminal in this directory
2. Run: `npm install`

## Running the Application

```bash
npm start
```

Or for development mode with DevTools:
```bash
npm run dev
```

## First Steps

### 1. Add Employees
- Click "Employees" in the sidebar
- Click "Add Employee" button
- Fill in the form:
  - First Name & Last Name (required)
  - Email (required, unique)
  - Phone (optional)
  - Salary Type: Monthly or Hourly
  - Salary Amount in DH
- Click "Save"

### 2. Track Attendance
- Click "Attendance" in the sidebar
- Click "Mark Attendance"
- Select employee, date, and status (Present/Absent/Leave)
- Click "Save"
- Use filters to view attendance history

### 3. Record Hours Worked
- Click "Hours Worked" in the sidebar
- Click "Record Hours"
- Select employee, date, and hours worked
- Click "Save"
- Use filters to view hours history

### 4. Calculate Salary
- Click "Salary" in the sidebar
- Select employee, month, and year
- Click "Calculate"
- View salary breakdown:
  - **Monthly employees**: Base salary + attendance tracking
  - **Hourly employees**: Hourly rate × total hours worked

### 5. Switch Language
- Click "EN" or "FR" in the top-right corner
- Interface switches between English and French
- Preference is saved automatically

## Tips

- All amounts are in Moroccan Dirham (DH)
- You can edit employee information by clicking the "Edit" button
- Deleting an employee removes all their attendance and hours records
- The database is saved in your user data directory
- Attendance and hours can be updated by submitting the form again for the same date

## Troubleshooting

If the app doesn't start:
1. Make sure Node.js is installed
2. Delete `node_modules` folder
3. Run `npm install` again
4. Try `npm start`

If you see database errors:
1. Close the application
2. Delete the database file in: `%APPDATA%\employee-management-system\employee_management.db`
3. Restart the application

## Features Summary

✅ Employee registration (add/edit/delete)
✅ Daily attendance tracking
✅ Hours worked recording
✅ Salary calculation (monthly/hourly in DH)
✅ Bilingual support (French/English)
✅ Electron desktop application
✅ SQLite database for data persistence
✅ Professional and responsive UI

Enjoy managing your employees! 🎉
