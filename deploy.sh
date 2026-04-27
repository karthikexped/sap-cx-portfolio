#!/bin/bash

# Exit on error
set -e

echo "🚀 Starting deployment process for SAP CX Portfolio..."

# 1. Check for gh CLI
if ! command -v gh &> /dev/null; then
    echo "❌ GitHub CLI (gh) is not installed."
    echo "   Install it with: brew install gh"
    echo "   Then run: gh auth login"
    exit 1
fi

# 2. Check for vercel CLI
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI is not installed."
    echo "   Install it with: npm i -g vercel"
    echo "   Then run: vercel login"
    exit 1
fi

# 3. Create GitHub Repository and Push
echo "📦 Creating GitHub repository..."
if gh repo view >/dev/null 2>&1; then
    echo "✅ GitHub repository already exists."
else
    gh repo create sap-cx-portfolio --public --source=. --remote=origin --push
    echo "✅ GitHub repository created and code pushed."
fi

# 4. Deploy to Vercel
echo "🚀 Deploying to Vercel..."
vercel --prod --confirm

echo "🎉 Deployment complete!"
echo "Your portfolio should be live on Vercel and GitHub."
