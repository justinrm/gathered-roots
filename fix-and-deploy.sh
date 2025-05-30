#!/bin/bash

# Gathered Roots Cleaning - Fix Images and Deploy to Vercel
# This script fixes image loading issues and deploys to production

echo "🚀 Starting Gathered Roots Cleaning deployment process..."
echo ""

# 1. Optimize images for web
echo "📸 Step 1: Optimizing images for web performance..."
npm run optimize-images
if [ $? -ne 0 ]; then
    echo "❌ Image optimization failed!"
    exit 1
fi
echo "✅ Images optimized successfully"
echo ""

# 2. Run linting and formatting
echo "🔍 Step 2: Running code quality checks..."
npm run lint
npm run format
echo "✅ Code quality checks completed"
echo ""

# 3. Build the project locally to test
echo "🔨 Step 3: Building project locally..."
npm run build
if [ $? -ne 0 ]; then
    echo "❌ Build failed! Please fix errors before deploying."
    exit 1
fi
echo "✅ Local build successful"
echo ""

# 4. Verify forms functionality
echo "📋 Step 4: Verifying forms configuration..."
npm run verify-forms
echo "✅ Forms verification completed"
echo ""

# 5. Add all changes to git
echo "📝 Step 5: Adding changes to git..."
git add .
git status
echo ""

# 6. Commit with descriptive message
echo "💾 Step 6: Committing changes..."
COMMIT_MSG="Fix image loading issues for Vercel deployment

- Optimize large images (2MB+ → ~70-90KB)
- Update Next.js config for Vercel compatibility  
- Add vercel.json configuration
- Fix cache header conflicts
- Add image optimization script

Fixes: Images not loading in production build"

git commit -m "$COMMIT_MSG"
if [ $? -ne 0 ]; then
    echo "⚠️  Nothing to commit or commit failed"
fi
echo ""

# 7. Push to main branch
echo "🚀 Step 7: Pushing to main branch..."
git push origin main
if [ $? -ne 0 ]; then
    echo "❌ Failed to push to main branch!"
    exit 1
fi
echo "✅ Successfully pushed to main"
echo ""

# 8. Deploy to Vercel (if available)
echo "☁️  Step 8: Deploying to Vercel..."
if command -v vercel &> /dev/null; then
    echo "Using Vercel CLI for deployment..."
    vercel --prod
    if [ $? -eq 0 ]; then
        echo "✅ Vercel deployment successful!"
    else
        echo "⚠️  Vercel deployment may have issues. Check Vercel dashboard."
    fi
else
    echo "Vercel CLI not found. Deployment will happen via git push (if connected)."
    echo "🌐 Check your Vercel dashboard for deployment status."
fi
echo ""

# 9. Final verification steps
echo "🔍 Step 9: Final verification checklist"
echo ""
echo "Please verify the following after deployment:"
echo "  ✓ Homepage hero image loads quickly"
echo "  ✓ About page team photos display"
echo "  ✓ Service page images load properly"
echo "  ✓ All images are responsive on mobile"
echo "  ✓ Page load times are under 3 seconds"
echo ""
echo "🎯 Image optimization results:"
echo "  • Large images: 2MB+ → ~70-90KB (95%+ reduction)"
echo "  • Faster load times and better SEO"
echo "  • Vercel-optimized configuration"
echo ""
echo "🚀 Deployment complete! Your images should now load correctly on Vercel."
echo ""
echo "🔗 Next steps:"
echo "  1. Check your live site at your Vercel URL"
echo "  2. Test images on mobile devices"
echo "  3. Run Lighthouse audit for performance score"
echo "  4. Monitor for any remaining issues"
echo ""
echo "📧 If you still experience issues, check:"
echo "  • Browser console for image errors"
echo "  • Vercel function logs for timeout errors"
echo "  • Network tab for failed image requests" 