import Phaser from 'phaser';

interface PotState {
  status: 'empty' | 'planted' | 'watered' | 'bloomed';
  plantedAt?: number;
  wateredAt?: number;
  bloomedAt?: number;
  rarity?: number;
}

interface BloomedTulip {
  rarity: number;
  timestamp: number;
}

export class GardenScene extends Phaser.Scene {
  private pot!: Phaser.GameObjects.Image;
  private potState: PotState = { status: 'empty' };
  private timerText!: Phaser.GameObjects.Text;
  private bloomedTulips: BloomedTulip[] = [];
  
  // Tools (draggable)
  private seedBag!: Phaser.GameObjects.Image;
  private wateringCan!: Phaser.GameObjects.Image;
  private fertilizerBag!: Phaser.GameObjects.Image;
  
  // Original tool positions for snap-back
  private toolPositions = {
    seeds: { x: 150, y: 530 },
    water: { x: 400, y: 530 },
    fertilizer: { x: 650, y: 530 }
  };
  
  // Shelf for displaying bloomed tulips
  private shelfSprites: Phaser.GameObjects.Image[] = [];
  
  constructor() {
    super({ key: 'GreenhouseScene' });
  }

  create() {
    const width = this.cameras.main.width;
    const height = this.cameras.main.height;

    // Greenhouse interior background
    const bg = this.add.image(width / 2, height / 2, 'greenhouse_interior');
    bg.setDisplaySize(width, height);

    // LEFT SIDE: Display shelf for bloomed tulips
    const shelf = this.add.image(150, 300, 'shelf_empty');
    shelf.setDisplaySize(250, 450);

    // RIGHT SIDE: Single pot (center-right)
    this.pot = this.add.image(550, 300, 'pot_empty');
    this.pot.setDisplaySize(200, 200);
    this.pot.setInteractive({ dropZone: true });

    // Timer text (above pot, hidden by default)
    this.timerText = this.add.text(550, 180, '', {
      fontSize: '16px',
      color: '#ffffff',
      backgroundColor: '#000000aa',
      padding: { x: 10, y: 5 }
    }).setOrigin(0.5).setVisible(false);

    // BOTTOM: Draggable tools
    this.createTools();

    // Setup drag and drop
    this.setupDragAndDrop();

    // Load saved state
    this.loadGameState();

    // Start timer loop
    this.time.addEvent({
      delay: 1000,
      callback: this.checkBloom,
      callbackScope: this,
      loop: true,
    });

    // Share button (top right)
    const shareBtn = this.add.text(width - 20, 20, '📸 Share', {
      fontSize: '18px',
      color: '#ffffff',
      backgroundColor: '#7c2d12aa',
      padding: { x: 15, y: 8 }
    }).setOrigin(1, 0).setInteractive({ useHandCursor: true });
    shareBtn.on('pointerdown', () => this.shareGarden());
  }

  private createTools() {
    // Seed bag (left)
    this.seedBag = this.add.image(this.toolPositions.seeds.x, this.toolPositions.seeds.y, 'tool_seeds');
    this.seedBag.setDisplaySize(120, 120);
    this.seedBag.setInteractive({ useHandCursor: true, draggable: true });
    this.seedBag.setData('toolType', 'seeds');

    // Watering can (center)
    this.wateringCan = this.add.image(this.toolPositions.water.x, this.toolPositions.water.y, 'tool_watering_can');
    this.wateringCan.setDisplaySize(120, 120);
    this.wateringCan.setInteractive({ useHandCursor: true, draggable: true });
    this.wateringCan.setData('toolType', 'water');

    // Fertilizer (right)
    this.fertilizerBag = this.add.image(this.toolPositions.fertilizer.x, this.toolPositions.fertilizer.y, 'tool_fertilizer');
    this.fertilizerBag.setDisplaySize(120, 120);
    this.fertilizerBag.setInteractive({ useHandCursor: true, draggable: true });
    this.fertilizerBag.setData('toolType', 'fertilizer');
  }

  private setupDragAndDrop() {
    // Drag start
    this.input.on('dragstart', (pointer: any, gameObject: Phaser.GameObjects.Image) => {
      gameObject.setScale(1.2);
      gameObject.setDepth(100);
    });

    // During drag
    this.input.on('drag', (pointer: any, gameObject: Phaser.GameObjects.Image, dragX: number, dragY: number) => {
      gameObject.x = dragX;
      gameObject.y = dragY;

      // Check if hovering over pot
      const distance = Phaser.Math.Distance.Between(dragX, dragY, this.pot.x, this.pot.y);
      if (distance < 150) {
        this.pot.setTint(0x00ff00); // Green highlight
      } else {
        this.pot.clearTint();
      }
    });

    // Drop
    this.input.on('drop', (pointer: any, gameObject: Phaser.GameObjects.Image, dropZone: any) => {
      const toolType = gameObject.getData('toolType');
      
      if (toolType === 'seeds' && this.potState.status === 'empty') {
        this.plantSeed(gameObject);
      } else if (toolType === 'water' && this.potState.status === 'planted') {
        this.waterPot(gameObject);
      } else if (toolType === 'fertilizer' && this.potState.status === 'watered') {
        this.applyFertilizer(gameObject);
      } else {
        // Invalid drop - snap back with shake
        this.snapBack(gameObject, true);
        this.showMessage('❌ Wrong tool or wrong time!');
      }
      
      this.pot.clearTint();
    });

    // Drag end (no drop)
    this.input.on('dragend', (pointer: any, gameObject: Phaser.GameObjects.Image, dropped: boolean) => {
      if (!dropped) {
        this.snapBack(gameObject, false);
      }
      this.pot.clearTint();
    });
  }

  private snapBack(tool: Phaser.GameObjects.Image, shake: boolean) {
    const toolType = tool.getData('toolType');
    let targetX = this.toolPositions.seeds.x;
    let targetY = this.toolPositions.seeds.y;

    if (toolType === 'water') {
      targetX = this.toolPositions.water.x;
      targetY = this.toolPositions.water.y;
    } else if (toolType === 'fertilizer') {
      targetX = this.toolPositions.fertilizer.x;
      targetY = this.toolPositions.fertilizer.y;
    }

    if (shake) {
      // Shake then snap back
      this.tweens.add({
        targets: tool,
        angle: -15,
        yoyo: true,
        repeat: 3,
        duration: 100,
        onComplete: () => {
          tool.setAngle(0);
          this.tweens.add({
            targets: tool,
            x: targetX,
            y: targetY,
            scale: 1,
            duration: 300,
            ease: 'Back.easeOut'
          });
        }
      });
    } else {
      // Just snap back
      this.tweens.add({
        targets: tool,
        x: targetX,
        y: targetY,
        scale: 1,
        duration: 300,
        ease: 'Back.easeOut'
      });
    }
    
    tool.setDepth(0);
  }

  private plantSeed(tool: Phaser.GameObjects.Image) {
    // Shake animation
    this.tweens.add({
      targets: tool,
      angle: -20,
      x: this.pot.x,
      y: this.pot.y - 80,
      duration: 200,
      yoyo: true,
      repeat: 2,
      onComplete: () => {
        tool.setAngle(0);
        
        // Seed particles fall from bag
        this.addSeedParticles(this.pot.x, this.pot.y);
        
        // Change pot state
        this.potState.status = 'planted';
        this.potState.plantedAt = Date.now();
        this.pot.setTexture('pot_planted');
        
        // Snap tool back
        this.snapBack(tool, false);
        
        this.saveGameState();
        this.showMessage('🌱 Seed planted! Now water it.');
      }
    });
  }

  private waterPot(tool: Phaser.GameObjects.Image) {
    // Move can over pot and tilt to pour
    this.tweens.add({
      targets: tool,
      x: this.pot.x + 60,
      y: this.pot.y - 60,
      angle: 45,
      duration: 300,
      onComplete: () => {
        // Pour water droplets
        this.addWaterParticles(this.pot.x, this.pot.y);
        
        // Change pot state
        this.potState.status = 'watered';
        this.potState.wateredAt = Date.now();
        this.pot.setTexture('pot_watered');
        
        // Reset after pour
        this.time.delayedCall(800, () => {
          tool.setAngle(0);
          this.snapBack(tool, false);
        });
        
        this.saveGameState();
        this.showMessage('💧 Watered! Tulip will bloom in 1 minute...');
      }
    });
  }

  private applyFertilizer(tool: Phaser.GameObjects.Image) {
    // Shake fertilizer over pot
    this.tweens.add({
      targets: tool,
      y: this.pot.y - 50,
      x: this.pot.x,
      duration: 200,
      yoyo: true,
      repeat: 2,
      onComplete: () => {
        // Golden sparkles
        this.addFertilizerParticles(this.pot.x, this.pot.y);
        
        // Speed up bloom time by 50%
        if (this.potState.wateredAt) {
          const BLOOM_TIME = 60 * 1000; // 1 minute
          this.potState.wateredAt += BLOOM_TIME * 0.5;
        }
        
        this.snapBack(tool, false);
        this.saveGameState();
        this.showMessage('🌾 Fertilized! Bloom time reduced by 50%.');
      }
    });
  }

  private checkBloom() {
    if (this.potState.status === 'watered' && this.potState.wateredAt) {
      const now = Date.now();
      const elapsed = now - this.potState.wateredAt;
      const BLOOM_TIME = 60 * 1000; // 1 minute for local dev
      
      const remaining = BLOOM_TIME - elapsed;
      
      if (remaining > 0) {
        // Update timer display
        const seconds = Math.floor(remaining / 1000);
        this.timerText.setText(`Blooms in: ${seconds}s`);
        this.timerText.setVisible(true);
      } else {
        this.timerText.setVisible(false);
        this.revealBloom();
      }
    } else {
      this.timerText.setVisible(false);
    }
  }

  private getRarity(): number {
    const roll = Math.random() * 10000;
    if (roll < 5000) return 1; // 50% Common
    if (roll < 8000) return 2; // 30% Uncommon
    if (roll < 9500) return 3; // 15% Rare
    if (roll < 9900) return 4; // 4% Epic
    if (roll < 9990) return 5; // 0.9% Legendary
    return 6;                   // 0.1% Mythic
  }

  private revealBloom() {
    const rarity = this.getRarity();
    
    this.potState.status = 'bloomed';
    this.potState.bloomedAt = Date.now();
    this.potState.rarity = rarity;
    
    const sprites = [
      'tulip_common',
      'tulip_uncommon',
      'tulip_rare',
      'tulip_epic',
      'tulip_legendary',
      'tulip_mythic'
    ];
    
    // Flash effect
    this.tweens.add({
      targets: this.pot,
      alpha: 0,
      yoyo: true,
      repeat: 3,
      duration: 150,
      onComplete: () => {
        this.pot.setAlpha(1);
        
        // Create tulip on pot
        const spriteName = sprites[rarity - 1] || 'tulip_common';
        const tulip = this.add.image(this.pot.x, this.pot.y, spriteName)
          .setDisplaySize(180, 180)
          .setScale(0)
          .setDepth(10);
        
        // Bloom animation
        this.tweens.add({
          targets: tulip,
          scale: 1.2,
          duration: 600,
          ease: 'Back.easeOut',
          yoyo: true,
          onComplete: () => {
            tulip.setScale(1);
            
            // After bloom, fly to shelf
            this.time.delayedCall(1500, () => {
              this.flyToShelf(tulip, rarity);
            });
          }
        });
        
        // Particle starburst
        this.addBloomParticles(this.pot.x, this.pot.y, rarity);
        
        // Rarity label
        const rarityNames = ['', 'Common', 'Uncommon', 'Rare', 'Epic', 'Legendary', 'Mythic'];
        const rarityColors = ['', '#90EE90', '#4169E1', '#9370DB', '#FFD700', '#FF1493', '#FF00FF'];
        
        const label = this.add.text(this.pot.x, this.pot.y + 110, rarityNames[rarity], {
          fontSize: '18px',
          color: rarityColors[rarity],
          fontStyle: 'bold',
          stroke: '#000000',
          strokeThickness: 4
        }).setOrigin(0.5).setScale(0);
        
        this.tweens.add({
          targets: label,
          scale: 1.3,
          duration: 300,
          ease: 'Back.easeOut',
          yoyo: true,
          repeat: 2,
          onComplete: () => label.setScale(1)
        });
        
        this.showMessage(`🌷 ${rarityNames[rarity]} Tulip bloomed!`, 3000);
      }
    });
    
    this.saveGameState();
  }

  private flyToShelf(tulip: Phaser.GameObjects.Image, rarity: number) {
    // Calculate shelf position
    const shelfCount = this.bloomedTulips.length;
    const shelfX = 150;
    const shelfY = 200 + (shelfCount * 60); // Stack vertically
    
    // Fly animation
    this.tweens.add({
      targets: tulip,
      x: shelfX,
      y: shelfY,
      scale: 0.6,
      duration: 1000,
      ease: 'Cubic.easeInOut',
      onComplete: () => {
        // Add to shelf collection
        this.bloomedTulips.push({ rarity, timestamp: Date.now() });
        this.shelfSprites.push(tulip);
        
        // Reset pot
        this.potState = { status: 'empty' };
        this.pot.setTexture('pot_empty');
        
        this.saveGameState();
        this.showMessage(`Added to collection! (${this.bloomedTulips.length}/16)`);
      }
    });
  }

  private addSeedParticles(x: number, y: number) {
    for (let i = 0; i < 8; i++) {
      const particle = this.add.circle(x, y - 80, 3, 0x8B4513);
      this.tweens.add({
        targets: particle,
        x: x + Phaser.Math.Between(-20, 20),
        y: y,
        alpha: 0,
        duration: 600,
        delay: i * 50,
        onComplete: () => particle.destroy()
      });
    }
  }

  private addWaterParticles(x: number, y: number) {
    for (let i = 0; i < 15; i++) {
      const particle = this.add.circle(x + 60, y - 60, 4, 0x0000ff);
      this.tweens.add({
        targets: particle,
        x: x + Phaser.Math.Between(-30, 30),
        y: y + Phaser.Math.Between(-20, 20),
        alpha: 0,
        duration: 800,
        delay: i * 40,
        onComplete: () => particle.destroy()
      });
    }
  }

  private addFertilizerParticles(x: number, y: number) {
    for (let i = 0; i < 20; i++) {
      const particle = this.add.circle(x, y - 50, 3, 0xFFD700);
      this.tweens.add({
        targets: particle,
        x: x + Phaser.Math.Between(-40, 40),
        y: y + Phaser.Math.Between(-30, 30),
        alpha: 0,
        duration: 1000,
        delay: i * 30,
        onComplete: () => particle.destroy()
      });
    }
  }

  private addBloomParticles(x: number, y: number, rarity: number) {
    const colors = [0x90EE90, 0x4169E1, 0x9370DB, 0xFFD700, 0xFF1493, 0xFF00FF];
    const particleCount = rarity === 6 ? 80 : rarity === 5 ? 60 : 40;
    
    const emitter = this.add.particles(0, 0, 'particle_star', {
      x, y,
      speed: { min: 100, max: 300 },
      angle: { min: 0, max: 360 },
      scale: { start: 0.5, end: 0 },
      blendMode: 'ADD',
      lifespan: 800,
      quantity: particleCount,
      tint: colors[rarity - 1]
    });
    emitter.explode();
    
    this.time.delayedCall(1000, () => emitter.destroy());
  }

  private shareGarden() {
    this.game.renderer.snapshot((image) => {
      if (image instanceof HTMLImageElement) {
        fetch(image.src)
          .then(res => res.blob())
          .then(blob => {
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `my-tulip-greenhouse-${Date.now()}.png`;
            a.click();
            URL.revokeObjectURL(url);
            this.showMessage('📸 Screenshot saved!');
          });
      }
    });
  }

  private showMessage(text: string, duration: number = 2000) {
    const message = this.add.text(400, 80, text, {
      fontSize: '20px',
      color: '#ffffff',
      backgroundColor: '#000000aa',
      padding: { x: 20, y: 10 }
    }).setOrigin(0.5);
    
    this.tweens.add({
      targets: message,
      alpha: 0,
      duration,
      ease: 'Cubic.easeIn',
      onComplete: () => message.destroy()
    });
  }

  private saveGameState() {
    if (typeof window !== 'undefined') {
      localStorage.setItem('tulip_pot_state', JSON.stringify(this.potState));
      localStorage.setItem('tulip_collection', JSON.stringify(this.bloomedTulips));
    }
  }

  private loadGameState() {
    if (typeof window !== 'undefined') {
      const potData = localStorage.getItem('tulip_pot_state');
      if (potData) {
        this.potState = JSON.parse(potData);
        
        // Restore pot visual
        if (this.potState.status === 'planted') {
          this.pot.setTexture('pot_planted');
        } else if (this.potState.status === 'watered') {
          this.pot.setTexture('pot_watered');
        }
      }
      
      const collectionData = localStorage.getItem('tulip_collection');
      if (collectionData) {
        this.bloomedTulips = JSON.parse(collectionData);
        
        // Restore shelf tulips
        const sprites = ['tulip_common', 'tulip_uncommon', 'tulip_rare', 'tulip_epic', 'tulip_legendary', 'tulip_mythic'];
        this.bloomedTulips.forEach((tulip, index) => {
          const sprite = this.add.image(150, 200 + (index * 60), sprites[tulip.rarity - 1]);
          sprite.setDisplaySize(100, 100);
          sprite.setScale(0.6);
          this.shelfSprites.push(sprite);
        });
      }
    }
  }
}
