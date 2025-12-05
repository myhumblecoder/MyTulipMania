import Phaser from 'phaser';

export class BootScene extends Phaser.Scene {
  constructor() {
    super({ key: 'BootScene' });
  }

  preload() {
    // Loading bar
    const width = this.cameras.main.width;
    const height = this.cameras.main.height;
    
    const progressBar = this.add.graphics();
    const progressBox = this.add.graphics();
    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(width / 2 - 160, height / 2 - 25, 320, 50);

    const loadingText = this.add.text(width / 2, height / 2 - 50, 'Loading...', {
      fontSize: '20px',
      color: '#ffffff'
    }).setOrigin(0.5);

    this.load.on('progress', (value: number) => {
      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect(width / 2 - 150, height / 2 - 15, 300 * value, 30);
    });

    this.load.on('complete', () => {
      progressBar.destroy();
      progressBox.destroy();
      loadingText.destroy();
    });

    // For MVP, we'll use colored rectangles instead of assets
    // This creates simple placeholder "sprites" programmatically
    this.createPlaceholderAssets();
  }

  createPlaceholderAssets() {
    // Create colored rectangles as placeholders
    const graphics = this.add.graphics();
    
    // Plot states
    graphics.fillStyle(0x8B4513, 1); // Brown for empty plot
    graphics.fillRect(0, 0, 100, 100);
    graphics.generateTexture('plot_empty', 100, 100);
    graphics.clear();

    graphics.fillStyle(0x654321, 1); // Darker brown for planted
    graphics.fillRect(0, 0, 100, 100);
    graphics.generateTexture('plot_planted', 100, 100);
    graphics.clear();

    graphics.fillStyle(0x4169E1, 1); // Blue for watered
    graphics.fillRect(0, 0, 100, 100);
    graphics.generateTexture('plot_watered', 100, 100);
    graphics.clear();

    // Rarity tulips (different colors)
    const rarityColors = [
      0xFFFFFF, // 0 (unused)
      0x90EE90, // 1 Common (light green)
      0x4169E1, // 2 Uncommon (royal blue)
      0x9370DB, // 3 Rare (medium purple)
      0xFFD700, // 4 Epic (gold)
      0xFF1493, // 5 Legendary (deep pink)
      0xFF00FF  // 6 Mythic (magenta)
    ];

    rarityColors.forEach((color, index) => {
      if (index === 0) return;
      graphics.fillStyle(color, 1);
      graphics.fillRect(0, 0, 100, 100);
      // Add a simple tulip shape (triangle on circle)
      graphics.fillStyle(0xFFFFFF, 0.3);
      graphics.fillCircle(50, 70, 20);
      graphics.fillTriangle(50, 30, 35, 60, 65, 60);
      graphics.generateTexture(`tulip_rarity_${index}`, 100, 100);
      graphics.clear();
    });

    graphics.destroy();
  }

  create() {
    this.scene.start('GardenScene');
  }
}
