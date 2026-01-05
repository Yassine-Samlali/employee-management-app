@echo off
REM Employee Management System Starter
REM This batch file starts the Electron app

cd /d "%~dp0"

REM Check if node_modules exists, if not install dependencies
if not exist "node_modules" (
    echo Installing dependencies...
    call npm install
)

REM Start the app
echo Starting Employee Management System...
start "" /B npm run dev

REM Keep window open
pause
