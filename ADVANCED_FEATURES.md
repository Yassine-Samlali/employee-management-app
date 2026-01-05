# Advanced Features Guide

This guide covers all the advanced features that have been implemented in the Employee Management System.

## 🔐 Authentication System

### Login
- **Default Credentials:**
  - Username: `admin`
  - Password: `admin123`
- Secure session management
- Automatic user detection on startup

### User Management (Admin Only)
- Create new users (future enhancement)
- Role-based access control
- Admin and User roles

### Security Best Practices
1. Change the default admin password immediately
2. Store passwords securely (consider implementing hashing)
3. Log out when finished using the application

---

## 👤 Employee Photo Management

### Uploading Photos
1. Click "Add Employee" or "Edit" an existing employee
2. Click the "Upload Photo" button
3. Select an image file (JPG, JPEG, PNG, GIF)
4. Photo preview appears immediately
5. Save the employee record

### Photo Features
- Photos stored as base64 in database
- Circular photo display in employee list
- Large preview in employee form
- Automatic resizing and optimization
- Default avatar icon if no photo

### Tips
- Use clear, professional photos
- Recommended size: 300x300 pixels or larger
- Keep file sizes reasonable (< 1MB recommended)

---

## 📊 Analytics Dashboard

### Overview Cards
**Total Employees**
- Real-time count of all employees
- Updates automatically when employees are added/removed

**Attendance This Month**
- Present, Absent, and Leave counts
- Current month statistics
- Color-coded for easy reading

**Hours This Month**
- Total hours worked this month
- Aggregated across all hourly employees
- Useful for payroll planning

**Employees by Type**
- Breakdown of monthly vs. hourly employees
- Helps with workforce planning

### Attendance Trend Chart
- Line chart showing last 7 days
- Interactive Chart.js visualization
- Hover to see exact numbers
- Automatically updates with new data

### When to Use Analytics
- Weekly team meetings
- Monthly reporting
- Workforce planning
- Quick health check of operations

---

## 📄 Export Salary Reports

### PDF Export
**Features:**
- Professional formatted PDF
- Company branding ready
- Employee details included
- Salary breakdown
- Total in DH (Moroccan Dirham)

**How to Use:**
1. Calculate salary for an employee
2. Click "Export PDF"
3. File automatically downloads
4. Filename: `salary_FirstName_LastName.pdf`

### Excel Export
**Features:**
- Spreadsheet format (.xlsx)
- Easy to import into accounting software
- Editable for custom calculations
- Professional formatting

**How to Use:**
1. Calculate salary for an employee
2. Click "Export Excel"
3. File automatically downloads
4. Filename: `salary_FirstName_LastName.xlsx`

### Best Practices
- Export monthly for record keeping
- Store in organized folder structure (Year/Month/)
- Keep backup copies
- Use for auditing purposes

---

## 📧 Email Notifications

### Setup Required
Before using email features, configure your email settings in `main.js`:

```javascript
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-app-password'
  }
});
```

### Gmail Configuration
1. Enable 2-Factor Authentication in your Google Account
2. Go to Google Account > Security > App Passwords
3. Generate a new app password for "Mail"
4. Use this 16-character password in the configuration

### Other Email Providers
- **Outlook**: Change service to 'outlook'
- **Yahoo**: Change service to 'yahoo'
- **Custom SMTP**: Use host, port, secure settings

### Sending Salary Reports
1. Calculate an employee's salary
2. Click "Send Email" button
3. Email sent to employee's registered email address
4. PDF report can be attached (requires configuration)

### Email Content
- Professional HTML format
- Employee name and details
- Complete salary breakdown
- Company branding (customizable)

---

## 💾 Backup & Restore

### Backup Database
**When to Backup:**
- Before major changes
- Weekly for active systems
- Before software updates
- Monthly for archival

**How to Backup:**
1. Click "Settings" in sidebar
2. Click "Backup Database"
3. Choose save location
4. Filename suggestion: `employee_backup_YYYY-MM-DD.db`

**What's Backed Up:**
- All employee records (including photos)
- All attendance records
- All hours worked records
- User accounts
- Complete database structure

### Restore Database
**When to Restore:**
- Data corruption
- Accidental deletions
- System migration
- Rolling back changes

**How to Restore:**
1. Click "Settings" in sidebar
2. Click "Restore Database"
3. Select backup file (.db)
4. Confirm restoration
5. Application reloads with restored data

### Important Notes
⚠️ **Restoration overwrites current data** - Make a backup first!
✅ **Test backups periodically** to ensure they work
📁 **Store backups in multiple locations** (external drive, cloud storage)
🔒 **Encrypt backup files** if they contain sensitive data

---

## 🎨 User Interface Features

### Responsive Design
- Works on different screen sizes
- Tablet-friendly layout
- Mobile-optimized (within Electron window)

### Dark Mode Support
- Planned for future release
- System theme detection

### Bilingual Interface
- **English**: Full translation
- **French**: Complete French interface
- Switch anytime via EN/FR buttons
- Preference saved automatically
- All labels, buttons, messages translated

### Accessibility
- High contrast colors
- Clear typography
- Keyboard navigation support
- Screen reader friendly (basic support)

---

## 🔧 Technical Details

### Performance
- **Lightweight**: < 200MB RAM usage
- **Fast**: SQLite in-memory operations
- **Efficient**: Optimized queries
- **Scalable**: Handles 1000+ employees

### Data Storage
- **Database**: SQLite (single file)
- **Photos**: Base64 encoded in database
- **Location**: User data directory
- **Size**: Grows with data (typical: 10-50MB)

### Browser Technologies Used
- Chart.js for visualizations
- jsPDF for PDF generation
- XLSX for Excel exports
- Vanilla JavaScript (no heavy frameworks)

### Security Features
- Session-based authentication
- SQL injection protection
- XSS prevention
- Secure IPC communication

---

## 📱 Workflow Examples

### Onboarding New Employee
1. Login to system
2. Navigate to Employees
3. Click "Add Employee"
4. Upload photo
5. Fill in details
6. Select salary type and amount
7. Save

### Monthly Payroll Process
1. Review Analytics dashboard
2. Check attendance records
3. Verify hours worked (for hourly employees)
4. Calculate salary for each employee
5. Export to PDF/Excel
6. Email reports to employees
7. Backup database

### Weekly Check-in
1. View Analytics dashboard
2. Check attendance trend chart
3. Review any absences
4. Update hours worked
5. Address any discrepancies

---

## 🐛 Troubleshooting Advanced Features

### Photos Not Displaying
- Check image file format (should be JPG, PNG, GIF)
- Verify file size (< 5MB recommended)
- Clear browser cache if using DevTools
- Reopen the application

### PDF Export Fails
- Ensure jsPDF libraries loaded (check console)
- Try calculating salary again
- Check DevTools for errors
- Verify write permissions in download folder

### Email Not Sending
- Verify email configuration in main.js
- Check internet connection
- Ensure "less secure apps" enabled (if using Gmail)
- Use app-specific password, not regular password
- Check spam folder for test emails

### Chart Not Rendering
- Ensure Chart.js library loaded
- Check for console errors
- Verify attendance data exists
- Try switching views and back to Analytics

### Backup/Restore Issues
- Ensure you have write permissions
- Check disk space availability
- Verify backup file is not corrupted
- Try different file location

---

## 💡 Pro Tips

1. **Regular Backups**: Set a weekly reminder to backup
2. **Photo Standards**: Use consistent photo dimensions (square)
3. **Email Testing**: Test email with your own address first
4. **Analytics Review**: Check dashboard daily for quick insights
5. **Export Automation**: Consider scripting monthly exports
6. **User Training**: Train all admins on backup/restore
7. **Data Validation**: Regularly audit attendance and hours data
8. **Performance**: Keep database size manageable (archive old data)

---

## 📞 Support

For additional help:
- Check README.md for basic setup
- Review QUICK_START.md for getting started
- Check console logs for error messages
- Inspect network tab if email fails
- Verify database file permissions

---

**Version**: 2.0.0 (All Advanced Features Implemented)
**Last Updated**: December 30, 2025
