const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Images that need optimization (larger than 1MB)
const imagesToOptimize = [
  {
    input: 'public/images/team-justin.jpg',
    output: 'public/images/team-justin.jpg',
    maxWidth: 800,
    quality: 80,
  },
  {
    input: 'public/images/team-chelsea.jpg',
    output: 'public/images/team-chelsea.jpg',
    maxWidth: 800,
    quality: 80,
  },
  {
    input: 'public/images/about-hero.jpg',
    output: 'public/images/about-hero.jpg',
    maxWidth: 1200,
    quality: 75,
  },
  {
    input: 'public/images/hero-clean-home.jpg',
    output: 'public/images/hero-clean-home.jpg',
    maxWidth: 1200,
    quality: 75,
  },
  {
    input: 'public/images/deep-clean.jpg',
    output: 'public/images/deep-clean.jpg',
    maxWidth: 1200,
    quality: 75,
  },
  {
    input: 'public/images/eco-friendly.jpg',
    output: 'public/images/eco-friendly.jpg',
    maxWidth: 1200,
    quality: 75,
  },
  {
    input: 'public/images/clean-home.jpg',
    output: 'public/images/clean-home.jpg',
    maxWidth: 1200,
    quality: 75,
  },
  {
    input: 'public/images/standard-clean.jpg',
    output: 'public/images/standard-clean.jpg',
    maxWidth: 1200,
    quality: 75,
  },
  {
    input: 'public/images/move-out.jpg',
    output: 'public/images/move-out.jpg',
    maxWidth: 1200,
    quality: 75,
  },
  {
    input: 'public/images/move-in-move-out.jpg',
    output: 'public/images/move-in-move-out.jpg',
    maxWidth: 1200,
    quality: 75,
  },
];

async function optimizeImage(imageConfig) {
  const { input, output, maxWidth, quality } = imageConfig;
  
  try {
    // Check if input file exists
    if (!fs.existsSync(input)) {
      console.log(`⚠️  File not found: ${input}`);
      return;
    }

    // Get original file size
    const stats = fs.statSync(input);
    const originalSize = (stats.size / 1024 / 1024).toFixed(2);

    // Create backup of original
    const backupPath = input.replace('.jpg', '.original.jpg');
    if (!fs.existsSync(backupPath)) {
      fs.copyFileSync(input, backupPath);
    }

    // Optimize the image
    await sharp(input)
      .resize(maxWidth, null, { 
        withoutEnlargement: true,
        fit: 'inside',
      })
      .jpeg({ 
        quality,
        progressive: true,
        mozjpeg: true,
      })
      .toFile(output + '.tmp');

    // Replace original with optimized
    fs.renameSync(output + '.tmp', output);

    // Get new file size
    const newStats = fs.statSync(output);
    const newSize = (newStats.size / 1024 / 1024).toFixed(2);
    const reduction = ((stats.size - newStats.size) / stats.size * 100).toFixed(1);

    console.log(`✅ Optimized ${path.basename(input)}: ${originalSize}MB → ${newSize}MB (${reduction}% reduction)`);
  } catch (error) {
    console.error(`❌ Error optimizing ${input}:`, error.message);
  }
}

async function optimizeAllImages() {
  console.log('🚀 Starting image optimization...\n');
  
  // Check if sharp is available
  try {
    require('sharp');
  } catch (error) {
    console.log('📦 Installing sharp for image optimization...');
    const { execSync } = require('child_process');
    execSync('npm install sharp', { stdio: 'inherit' });
    console.log('✅ Sharp installed successfully\n');
  }

  for (const imageConfig of imagesToOptimize) {
    await optimizeImage(imageConfig);
  }

  console.log('\n🎉 Image optimization complete!');
  console.log('\n📝 Next steps:');
  console.log('1. Test locally: npm run build && npm start');
  console.log('2. Commit changes: git add . && git commit -m "Optimize images for Vercel deployment"');
  console.log('3. Deploy: git push origin main');
}

// Run if called directly
if (require.main === module) {
  optimizeAllImages().catch(console.error);
}

module.exports = { optimizeAllImages }; 