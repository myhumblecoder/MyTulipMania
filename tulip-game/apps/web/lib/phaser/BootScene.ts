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

    // Log loading errors
    this.load.on('loaderror', (fileObj: any) => {
      console.error('Failed to load:', fileObj.key, fileObj.url);
    });

    // Load greenhouse background
    this.load.image('greenhouse_interior', '/assets/greenhouse/interior.png');
    this.load.image('shelf_empty', '/assets/greenhouse/empty_shelf.png');
    
    // Load pots
    this.load.image('pot_empty', '/assets/pot/pot_stage_1.png');
    this.load.image('pot_planted', '/assets/pot/post_stage_2.png');
    this.load.image('pot_watered', '/assets/pot/pot_stage_3.png');
    
    // Load tools
    this.load.image('tool_seeds', '/assets/tools/seeds.png');
    this.load.image('tool_watering_can', '/assets/tools/watering_can.png');
    this.load.image('tool_fertilizer', '/assets/tools/fertilizer.png');
    
    // Load individual tulips (500x500 each)
    this.load.image('tulip_common', '/assets/tulips/common.png');
    this.load.image('tulip_uncommon', '/assets/tulips/uncommon.png');
    this.load.image('tulip_rare', '/assets/tulips/rare.png');
    this.load.image('tulip_epic', '/assets/tulips/epic.png');
    this.load.image('tulip_legendary', '/assets/tulips/legendary.png');
    this.load.image('tulip_mythic', '/assets/tulips/mythic.png');
    
    // Individual tulip textures will be created from the sheet in create()
    // Tulips are arranged left to right: red, lavender, pale pink, dark purple, orange, burgundy
    
    // Create particle texture for starbursts
    this.createParticleTexture();
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
    // Assets are already loaded as individual images - no extraction needed!
    console.log('All assets loaded successfully');
    console.log('Checking textures...');
    console.log('- greenhouse_interior:', this.textures.exists('greenhouse_interior'));
    console.log('- tool_seeds:', this.textures.exists('tool_seeds'));
    console.log('- tool_watering_can:', this.textures.exists('tool_watering_can'));
    console.log('- tool_fertilizer:', this.textures.exists('tool_fertilizer'));
    console.log('- tulip_common:', this.textures.exists('tulip_common'));
    console.log('- tulip_uncommon:', this.textures.exists('tulip_uncommon'));
    console.log('- pot_empty:', this.textures.exists('pot_empty'));
    this.scene.start('TitleScene');
  }
}
