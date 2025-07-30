@echo off
REM 🚀 Umbrella CRM Vercel Deployment Script for Windows
REM This script automates the deployment process to Vercel

echo 🚀 Starting Umbrella CRM Deployment to Vercel...

REM Check if Vercel CLI is installed
vercel --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Vercel CLI not found. Installing...
    npm install -g vercel
)

REM Check if user is logged in to Vercel
vercel whoami >nul 2>&1
if %errorlevel% neq 0 (
    echo 🔐 Please login to Vercel...
    vercel login
)

REM Check if we're in the correct directory
if not exist "index.html" (
    echo ❌ Please run this script from the project root directory
    echo    cd "OneDrive\Desktop\Acculynx Script Code"
    pause
    exit /b 1
)

REM Check if all required files exist
echo 📋 Checking required files...
if not exist "index.html" (
    echo ❌ Missing: index.html
    pause
    exit /b 1
) else (
    echo ✅ index.html
)

if not exist "DASHBOARD\customers.html" (
    echo ❌ Missing: DASHBOARD\customers.html
    pause
    exit /b 1
) else (
    echo ✅ DASHBOARD\customers.html
)

if not exist "DASHBOARD\crm-data.js" (
    echo ❌ Missing: DASHBOARD\crm-data.js
    pause
    exit /b 1
) else (
    echo ✅ DASHBOARD\crm-data.js
)

if not exist "API\pdf-processor.js" (
    echo ❌ Missing: API\pdf-processor.js
    pause
    exit /b 1
) else (
    echo ✅ API\pdf-processor.js
)

if not exist "API\server-routes.js" (
    echo ❌ Missing: API\server-routes.js
    pause
    exit /b 1
) else (
    echo ✅ API\server-routes.js
)

if not exist "vercel.json" (
    echo ❌ Missing: vercel.json
    pause
    exit /b 1
) else (
    echo ✅ vercel.json
)

if not exist "package.json" (
    echo ❌ Missing: package.json
    pause
    exit /b 1
) else (
    echo ✅ package.json
)

echo.
echo 📦 All files ready for deployment!

REM Deploy to Vercel
echo.
echo 🚀 Deploying to Vercel...
echo    This will deploy to production (--prod flag)
echo.

vercel --prod

REM Check deployment status
if %errorlevel% equ 0 (
    echo.
    echo 🎉 Deployment successful!
    echo.
    echo 📋 Next steps:
    echo    1. Test your deployed application
    echo    2. Configure custom domain (optional)
    echo    3. Set up monitoring and analytics
    echo.
    echo 🔗 Your application is now live!
) else (
    echo.
    echo ❌ Deployment failed. Please check the error messages above.
    echo.
    echo 🔧 Troubleshooting:
    echo    1. Check your internet connection
    echo    2. Verify Vercel account status
    echo    3. Check vercel.json configuration
    echo    4. Try running: vercel --prod --force
)

pause 