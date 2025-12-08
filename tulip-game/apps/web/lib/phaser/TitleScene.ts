import Phaser from 'phaser';

export class TitleScene extends Phaser.Scene {
  constructor() {
    super({ key: 'TitleScene' });
  }

  create() {
    const width = this.cameras.main.width;
    const height = this.cameras.main.height;

    // Background - greenhouse interior
    this.add.image(width / 2, height / 2, 'greenhouse_interior')
      .setDisplaySize(width, height);

    // Overlay gradient for text readability
    const overlay = this.add.rectangle(width / 2, height / 2, width, height, 0x000000, 0.3);

    // Title
    const title = this.add.text(width / 2, height / 3, '🌷 My Tulip Greenhouse', {
      fontSize: '56px',
      fontFamily: 'Georgia, serif',
      color: '#ffffff',
      stroke: '#2d5016',
      strokeThickness: 6,
      shadow: {
        offsetX: 3,
        offsetY: 3,
        color: '#000000',
        blur: 8,
        fill: true
      }
    }).setOrigin(0.5);

    // Subtitle
    const subtitle = this.add.text(width / 2, height / 3 + 70, 'Grow rare tulips, one bloom at a time', {
      fontSize: '20px',
      fontFamily: 'Georgia, serif',
      color: '#ffffff',
      style: 'italic'
    }).setOrigin(0.5);

    // Start button (wood plank style)
    const button = this.add.text(width / 2, height * 0.65, 'Start Growing', {
      fontSize: '32px',
      fontFamily: 'Georgia, serif',
      color: '#ffffff',
      backgroundColor: '#8B4513',
      padding: { x: 50, y: 20 },
      shadow: {
        offsetX: 2,
        offsetY: 2,
        color: '#000000',
        blur: 4,
        fill: true
      }
    }).setOrigin(0.5)
      .setInteractive({ useHandCursor: true });

    // Button hover effect
    button.on('pointerover', () => {
      button.setScale(1.05);
      button.setStyle({ backgroundColor: '#A0522D' });
    });

    button.on('pointerout', () => {
      button.setScale(1);
      button.setStyle({ backgroundColor: '#8B4513' });
    });

    button.on('pointerdown', () => {
      button.setScale(0.95);
    });

    button.on('pointerup', () => {
      button.setScale(1.05);
      // Fade out and start game
      this.cameras.main.fadeOut(500, 0, 0, 0);
      this.time.delayedCall(500, () => {
        this.scene.start('GreenhouseScene');
      });
    });

    // Ambient particles (floating petals)
    this.addFloatingPetals();

    // Fade in on load
    this.cameras.main.fadeIn(1000, 0, 0, 0);
  }

  addFloatingPetals() {
    const width = this.cameras.main.width;
    const height = this.cameras.main.height;

    // Create petal particles
    for (let i = 0; i < 15; i++) {
      const x = Phaser.Math.Between(0, width);
      const y = Phaser.Math.Between(-100, height);
      const petal = this.add.circle(x, y, 3, 0xFFB6C1, 0.6);

      this.tweens.add({
        targets: petal,
        y: height + 100,
        x: x + Phaser.Math.Between(-50, 50),
        alpha: 0,
        duration: Phaser.Math.Between(8000, 12000),
        delay: Phaser.Math.Between(0, 3000),
        repeat: -1,
        ease: 'Sine.easeInOut'
      });
    }
  }
}
