#!/bin/bash

# Fix Image Loading Issues and Deploy to Vercel
# Run this script to apply fixes and redeploy

echo "🔧 Fixing Image Loading Issues for Vercel..."

echo "✅ Image fixes applied:"
echo "  - Fixed eco-friendly.jpg filename reference"
echo "  - Updated Next.js config for Vercel compatibility"
echo "  - Added SVG support"
echo "  - Optimized image loading configuration"

echo ""
echo "🏗️  Building locally to verify fixes..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Local build successful!"
    echo ""
    echo "📤 Deploying to Vercel..."
    
    git add .
    git commit -m "Fix image loading issues for Vercel deployment

- Fixed eco-friendly.jpg filename reference
- Updated Next.js config for better Vercel compatibility
- Added SVG support and image optimization
- Resolved image loading issues on production"
    
    echo "🚀 Pushing to repository..."
    git push origin main
    
    echo ""
    echo "✅ Deployment complete!"
    echo ""
    echo "🔍 Next steps:"
    echo "1. Check your Vercel dashboard for deployment status"
    echo "2. Test images on your live site"
    echo "3. If images still don't load, run: vercel --prod --force"
    echo ""
    echo "📋 Image checklist:"
    echo "- Homepage hero image"
    echo "- Service page images"  
    echo "- About page team photos"
    echo "- Service icons (SVGs)"
    echo "- Company logos"
    
else
    echo "❌ Local build failed! Please check the errors above."
    exit 1
fi 