#!/bin/bash

# 🚀 Umbrella CRM Vercel Deployment Script
# This script automates the deployment process to Vercel

echo "🚀 Starting Umbrella CRM Deployment to Vercel..."

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI not found. Installing..."
    npm install -g vercel
fi

# Check if user is logged in to Vercel
if ! vercel whoami &> /dev/null; then
    echo "🔐 Please login to Vercel..."
    vercel login
fi

# Check if we're in the correct directory
if [ ! -f "index.html" ]; then
    echo "❌ Please run this script from the project root directory"
    echo "   cd 'OneDrive/Desktop/Acculynx Script Code'"
    exit 1
fi

# Check if all required files exist
echo "📋 Checking required files..."
required_files=(
    "index.html"
    "DASHBOARD/customers.html"
    "DASHBOARD/crm-data.js"
    "API/pdf-processor.js"
    "API/server-routes.js"
    "vercel.json"
    "package.json"
)

for file in "${required_files[@]}"; do
    if [ ! -f "$file" ]; then
        echo "❌ Missing required file: $file"
        exit 1
    else
        echo "✅ $file"
    fi
done

echo ""
echo "📦 All files ready for deployment!"

# Deploy to Vercel
echo ""
echo "🚀 Deploying to Vercel..."
echo "   This will deploy to production (--prod flag)"
echo ""

vercel --prod

# Check deployment status
if [ $? -eq 0 ]; then
    echo ""
    echo "🎉 Deployment successful!"
    echo ""
    echo "📋 Next steps:"
    echo "   1. Test your deployed application"
    echo "   2. Configure custom domain (optional)"
    echo "   3. Set up monitoring and analytics"
    echo ""
    echo "🔗 Your application is now live!"
else
    echo ""
    echo "❌ Deployment failed. Please check the error messages above."
    echo ""
    echo "🔧 Troubleshooting:"
    echo "   1. Check your internet connection"
    echo "   2. Verify Vercel account status"
    echo "   3. Check vercel.json configuration"
    echo "   4. Try running: vercel --prod --force"
fi 