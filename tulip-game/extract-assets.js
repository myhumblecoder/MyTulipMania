// Quick script to extract individual tulips from the sprite sheet
// Run with: node extract-assets.js

const fs = require('fs');
const path = require('path');

console.log('Asset extraction helper');
console.log('=======================\n');
console.log('You need to manually crop the images using one of these methods:\n');
console.log('Option 1: Use Photopea (free online Photoshop)');
console.log('  1. Go to photopea.com');
console.log('  2. Open tulips_lowpoly.png');
console.log('  3. Use Rectangle Select tool');
console.log('  4. Crop each tulip (approximately 230px wide each)');
console.log('  5. Export as PNG with names: tulip_common.png, tulip_uncommon.png, etc.\n');

console.log('Option 2: Use ImageMagick (command line)');
console.log('  Install: brew install imagemagick');
console.log('  Then run these commands:\n');

const tulipNames = ['common', 'uncommon', 'rare', 'epic', 'legendary', 'mythic'];
const tulipWidth = 233; // Width per tulip
const startX = 10; // Slight offset from left edge

tulipNames.forEach((name, i) => {
  const x = startX + (i * tulipWidth);
  console.log(`  convert apps/web/public/assets/tulips_lowpoly.png -crop ${tulipWidth}x700+${x}+50 +repage apps/web/public/assets/tulips/${name}.png`);
});

console.log('\nFor asset_sheet.png (pots, tools):');
console.log('  - Manually crop in Photopea');
console.log('  - OR I can use the existing assets and you generate better ones later\n');
