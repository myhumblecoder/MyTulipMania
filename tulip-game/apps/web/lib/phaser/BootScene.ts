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

    // Load tulip images
    this.load.image('tulip_common', '/assets/tulips/common.png');
    this.load.image('tulip_uncommon', '/assets/tulips/uncommon.png');
    this.load.image('tulip_rare', '/assets/tulips/rare.png');
    this.load.image('tulip_epic', '/assets/tulips/epic.png');
    this.load.image('tulip_legendary', '/assets/tulips/legendary.png');
    this.load.image('tulip_mythic', '/assets/tulips/mythic.png');
    
    // For MVP, we'll use colored rectangles for plot states
    // This creates simple placeholder "sprites" programmatically
    this.createPlaceholderPlots();
    
    // Create particle texture for starbursts
    this.createParticleTexture();
  }

  createPlaceholderPlots() {
    // Create colored rectangles as placeholders for plot states
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

    graphics.destroy();
  }
  
  createParticleTexture() {
    // Create a star shape for particle effects
    const graphics = this.add.graphics();
    graphics.fillStyle(0xFFFFFF, 1);
    
    // Draw a star
    const points = [];
    for (let i = 0; i < 10; i++) {
      const angle = (i * Math.PI) / 5;
      const radius = i % 2 === 0 ? 8 : 4;
      points.push(8 + radius * Math.cos(angle));
      points.push(8 + radius * Math.sin(angle));
    }
    
    graphics.fillPoints(points as any, true);
    graphics.generateTexture('particle_star', 16, 16);
    graphics.destroy();
  }

  create() {
    this.scene.start('GardenScene');
  }
}
