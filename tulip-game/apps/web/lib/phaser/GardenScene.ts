import Phaser from 'phaser';

interface PotState {
  status: 'empty' | 'seeded' | 'watered' | 'fertilized';
  tulipType?: string; // Which tulip will bloom
  startTime?: number;
}

interface CollectedTulip {
  type: string;
  rarity: string;
  name: string;
  story: string;
  timestamp: number;
}

const TULIP_INFO = {
  tulip_common: {
    rarity: 'Common',
    name: 'Ruby Radiance',
    story: 'A vibrant red tulip that brightens any greenhouse. Its bold crimson petals catch the morning light beautifully.',
    bloomTime: 3000 // 3 seconds
  },
  tulip_uncommon: {
    rarity: 'Uncommon',
    name: 'Lavender Dream',
    story: 'Soft purple petals reminiscent of twilight skies. This delicate bloom was favored by Dutch nobility.',
    bloomTime: 5000
  },
  tulip_rare: {
    rarity: 'Rare',
    name: 'Blush Whisper',
    story: 'Pale pink petals so delicate they seem to glow from within. A treasure among collectors.',
    bloomTime: 8000
  },
  tulip_epic: {
    rarity: 'Epic',
    name: 'Midnight Majesty',
    story: 'Deep purple blooms that appear almost black in shadow. Extremely rare and highly coveted.',
    bloomTime: 12000
  },
  tulip_legendary: {
    rarity: 'Legendary',
    name: 'Phoenix Flame',
    story: 'Brilliant orange petals that dance like fire. Said to bring fortune to those who grow it.',
    bloomTime: 20000
  },
  tulip_mythic: {
    rarity: 'Mythic',
    name: 'Crimson Emperor',
    story: 'The rarest tulip in existence. Deep burgundy petals worth their weight in gold during Tulip Mania.',
    bloomTime: 30000
  }
};

export class GardenScene extends Phaser.Scene {
  private potState: PotState = { status: 'empty' };
  private collection: CollectedTulip[] = [];
  
  // UI elements
  private potImage!: Phaser.GameObjects.Image;  // Changed from Graphics to Image
  private currentTulip?: Phaser.GameObjects.Image;
  private timerText!: Phaser.GameObjects.Text;
  private messageText!: Phaser.GameObjects.Text;
  
  // Tools
  private seedButton!: Phaser.GameObjects.Container;
  private waterButton!: Phaser.GameObjects.Container;
  private fertilizeButton!: Phaser.GameObjects.Container;
  
  // Shelf area
  private shelfContainer!: Phaser.GameObjects.Container;

  constructor() {
    super({ key: 'GardenScene' });
  }

  create() {
    const width = this.cameras.main.width;
    const height = this.cameras.main.height;

    // Background - beautiful greenhouse
    const bg = this.add.image(width / 2, height / 2, 'greenhouse_interior');
    const scale = Math.max(width / bg.width, height / bg.height);
    bg.setScale(scale);

    // === LEFT SIDE: Collection Shelf ===
    this.createCollectionShelf(150, height / 2);

    // === CENTER-RIGHT: Pot ===
    this.createPot(width * 0.6, height * 0.45); // Moved up from 0.5 to give space for tools

    // === BOTTOM: Tool Buttons ===
    this.createToolButtons(width, height);

    // Timer text (hidden by default)
    this.timerText = this.add.text(width * 0.6, height * 0.35, '', {
      fontSize: '18px',
      color: '#ffffff',
      backgroundColor: '#00000088',
      padding: { x: 12, y: 6 }
    }).setOrigin(0.5).setVisible(false);

    // Message text (top center, above everything)
    this.messageText = this.add.text(width / 2, 30, '', {
      fontSize: '20px',
      color: '#ffffff',
      backgroundColor: '#00000099',
      padding: { x: 20, y: 10 }
    }).setOrigin(0.5).setVisible(false).setDepth(500); // High depth to stay above tools

    // Load saved state
    this.loadState();

    // Check bloom timer
    this.time.addEvent({
      delay: 100,
      callback: this.checkBloom,
      callbackScope: this,
      loop: true
    });
  }

  private createCollectionShelf(x: number, y: number) {
    this.shelfContainer = this.add.container(x, y - 180);

    // Title
    const title = this.add.text(0, 0, '🌷 Collection', {
      fontSize: '24px',
      fontFamily: 'Georgia, serif',
      color: '#ffffff',
      backgroundColor: '#8B451388',
      padding: { x: 15, y: 8 }
    }).setOrigin(0.5);

    this.shelfContainer.add(title);

    // Render collected tulips
    this.renderCollection();
  }

  private renderCollection() {
    // Clear old tulips (keep title)
    while (this.shelfContainer.length > 1) {
      const item = this.shelfContainer.getAt(1);
      if (item) {
        item.destroy();
      }
      this.shelfContainer.remove(item);
    }

    // Display tulips in 3 columns, multiple rows
    const cols = 3;
    const startY = 60;
    const spacing = 90;

    this.collection.forEach((tulip, index) => {
      // Skip invalid entries from old saves
      if (!tulip.type) {
        console.warn('Skipping invalid tulip entry:', tulip);
        return;
      }

      const col = index % cols;
      const row = Math.floor(index / cols);
      const tulipX = (col - 1) * spacing;
      const tulipY = startY + row * spacing;

      console.log('Rendering shelf tulip:', tulip.type, 'at', tulipX, tulipY);

      const tulipImg = this.add.image(tulipX, tulipY, tulip.type);
      tulipImg.setDisplaySize(70, 70);
      tulipImg.setOrigin(0.5, 0.5);
      tulipImg.setDepth(100); // Ensure visibility
      tulipImg.setInteractive({ useHandCursor: true });
      tulipImg.on('pointerdown', () => this.showTulipDialog(tulip));

      // Don't tint - keep original colors visible
      // const glowColor = this.getRarityColor(tulip.rarity);
      // tulipImg.setTint(glowColor);

      // CRITICAL: Add to container so it moves with the shelf
      this.shelfContainer.add(tulipImg);
    });

    // Collection count
    if (this.collection.length > 0) {
      const countText = this.add.text(0, startY + Math.ceil(this.collection.length / cols) * spacing + 20, 
        `${this.collection.length}/6 Collected`, {
        fontSize: '14px',
        color: '#ffffff',
        backgroundColor: '#00000088',
        padding: { x: 8, y: 4 }
      }).setOrigin(0.5);
      this.shelfContainer.add(countText);
    }
  }

  private createPot(x: number, y: number) {
    // Use actual pot image
    this.potImage = this.add.image(x, y, 'pot_empty');
    this.potImage.setDisplaySize(200, 200);
  }

  private updatePotImage(status: string) {
    // Change pot image based on status
    if (status === 'seeded') {
      this.potImage.setTexture('pot_planted');
    } else if (status === 'watered' || status === 'fertilized') {
      this.potImage.setTexture('pot_watered');
    } else {
      this.potImage.setTexture('pot_empty');
    }
  }

  private createToolButtons(width: number, height: number) {
    const buttonY = height - 100; // Moved up from -150 to give more space from bottom
    const centerX = width * 0.6;
    const spacing = 140;

    // Seed button - using actual seed bag image (no label)
    this.seedButton = this.createToolButton(centerX - spacing, buttonY, 'tool_seeds');
    this.seedButton.setInteractive({ useHandCursor: true });
    this.seedButton.on('pointerdown', () => this.onSeedClick());

    // Water button - using actual watering can image (no label)
    this.waterButton = this.createToolButton(centerX, buttonY, 'tool_watering_can');
    this.waterButton.setInteractive({ useHandCursor: true });
    this.waterButton.on('pointerdown', () => this.onWaterClick());

    // Fertilize button - using actual fertilizer image (no label)
    this.fertilizeButton = this.createToolButton(centerX + spacing, buttonY, 'tool_fertilizer');
    this.fertilizeButton.setInteractive({ useHandCursor: true });
    this.fertilizeButton.on('pointerdown', () => this.onFertilizeClick());

    this.updateButtonStates();
  }

  private createToolButton(x: number, y: number, imageKey: string): Phaser.GameObjects.Container {
    const container = this.add.container(x, y);

    // Add a background circle to make tools stand out
    const bg = this.add.circle(0, 0, 60, 0x000000, 0.5);
    bg.setStrokeStyle(3, 0xFFFFFF);

    // Use actual tool image
    const toolImage = this.add.image(0, 0, imageKey);
    toolImage.setDisplaySize(100, 100);
    toolImage.setOrigin(0.5, 0.5);

    container.add([bg, toolImage]);
    container.setSize(120, 120);
    container.setDepth(100);

    return container;
  }

  private updateButtonStates() {
    // Enable/disable buttons based on pot state
    this.seedButton.setAlpha(this.potState.status === 'empty' ? 1 : 0.4);
    this.waterButton.setAlpha(this.potState.status === 'seeded' ? 1 : 0.4);
    this.fertilizeButton.setAlpha(this.potState.status === 'watered' ? 1 : 0.4);
  }

  private onSeedClick() {
    if (this.potState.status !== 'empty') {
      this.showMessage('❌ Pot must be empty first!');
      return;
    }

    // Random tulip selection (weighted rarity)
    const rand = Math.random();
    let tulipType: string;
    if (rand < 0.4) tulipType = 'tulip_common';
    else if (rand < 0.65) tulipType = 'tulip_uncommon';
    else if (rand < 0.82) tulipType = 'tulip_rare';
    else if (rand < 0.92) tulipType = 'tulip_epic';
    else if (rand < 0.98) tulipType = 'tulip_legendary';
    else tulipType = 'tulip_mythic';

    this.potState = {
      status: 'seeded',
      tulipType,
      startTime: Date.now()
    };

    this.updatePotImage('seeded');
    this.updateButtonStates();
    this.showMessage('🌱 Seed planted!');
    this.saveState();
  }

  private onWaterClick() {
    if (this.potState.status !== 'seeded') {
      this.showMessage('❌ Plant seeds first!');
      return;
    }

    this.potState.status = 'watered';
    this.updatePotImage('watered');
    this.updateButtonStates();
    this.showMessage('💧 Watered! Time to grow...');
    this.saveState();

    // Show timer
    this.timerText.setVisible(true);
  }

  private onFertilizeClick() {
    if (this.potState.status !== 'watered') {
      this.showMessage('❌ Water the plant first!');
      return;
    }

    this.potState.status = 'fertilized';
    this.updatePotImage('fertilized');
    this.updateButtonStates();
    this.showMessage('🧪 Fertilized! Blooming faster...');
    this.saveState();
  }

  private checkBloom() {
    if (this.potState.status !== 'watered' && this.potState.status !== 'fertilized') {
      this.timerText.setVisible(false);
      return;
    }

    if (!this.potState.tulipType || !this.potState.startTime) return;

    const info = TULIP_INFO[this.potState.tulipType as keyof typeof TULIP_INFO];
    let bloomTime = info.bloomTime;

    // Fertilizer cuts bloom time in half
    if (this.potState.status === 'fertilized') {
      bloomTime = bloomTime / 2;
    }

    const elapsed = Date.now() - this.potState.startTime;
    const remaining = bloomTime - elapsed;

    if (remaining > 0) {
      const seconds = Math.ceil(remaining / 1000);
      this.timerText.setText(`⏱️ Blooming in ${seconds}s`);
    } else {
      this.bloomTulip();
    }
  }

  private bloomTulip() {
    if (!this.potState.tulipType) return;

    // CRITICAL: Change state to 'bloomed' to prevent infinite loop
    this.potState.status = 'empty'; // Prevent checkBloom from triggering again
    this.timerText.setVisible(false);

    const info = TULIP_INFO[this.potState.tulipType as keyof typeof TULIP_INFO];

    console.log('Blooming tulip:', this.potState.tulipType, 'at position:', this.potImage.x, this.potImage.y);

    // Spawn tulip above pot with animation
    this.currentTulip = this.add.image(this.potImage.x, this.potImage.y - 100, this.potState.tulipType);
    this.currentTulip.setDisplaySize(200, 200); // Larger for visibility
    this.currentTulip.setDepth(1000); // Ensure it's on top
    this.currentTulip.setOrigin(0.5, 0.5);
    
    // Start with full visibility to test
    this.currentTulip.setAlpha(1);
    this.currentTulip.setScale(1);
    
    // Position it clearly above pot
    this.currentTulip.y = this.potImage.y - 180;

    // Bloom animation (bounce effect)
    this.tweens.add({
      targets: this.currentTulip,
      scale: { from: 0.5, to: 1.2 },
      duration: 400,
      ease: 'Back.easeOut',
      yoyo: true,
      onComplete: () => {
        if (this.currentTulip) {
          this.currentTulip.setScale(1);
        }
      }
    });

    // Sparkle particles
    this.addSparkles(this.potImage.x, this.potImage.y - 150);

    this.showMessage(`✨ ${info.name} bloomed! Click to collect.`);

    // Make tulip clickable
    this.currentTulip.setInteractive({ useHandCursor: true });
    this.currentTulip.on('pointerdown', () => this.collectTulip());
  }

  private collectTulip() {
    if (!this.currentTulip || !this.potState.tulipType) return;

    const info = TULIP_INFO[this.potState.tulipType as keyof typeof TULIP_INFO];

    // Add to collection
    this.collection.push({
      type: this.potState.tulipType,
      rarity: info.rarity,
      name: info.name,
      story: info.story,
      timestamp: Date.now()
    });

    // Animate to shelf
    this.tweens.add({
      targets: this.currentTulip,
      x: 150,
      y: 200,
      scale: 0.3,
      duration: 600,
      ease: 'Power2',
      onComplete: () => {
        this.currentTulip?.destroy();
        this.currentTulip = undefined;
        this.renderCollection();
      }
    });

    // Reset pot
    this.potState = { status: 'empty' };
    this.updatePotImage('empty');
    this.updateButtonStates();
    this.saveState();

    this.showMessage(`Added to collection! (${this.collection.length}/6)`);
  }

  private addSparkles(x: number, y: number) {
    const particles = this.add.particles(x, y, 'particle_star', {
      speed: { min: 50, max: 150 },
      angle: { min: 0, max: 360 },
      scale: { start: 1, end: 0 },
      lifespan: 1000,
      quantity: 15,
      blendMode: 'ADD'
    });

    this.time.delayedCall(1000, () => particles.destroy());
  }

  private showTulipDialog(tulip: CollectedTulip) {
    // Create modal overlay with high depth
    const overlay = this.add.rectangle(400, 300, 800, 600, 0x000000, 0.8);
    overlay.setDepth(1000); // Above everything else
    
    const dialog = this.add.container(400, 300);
    dialog.setDepth(1001); // Even higher than overlay

    // Dialog background
    const dialogBg = this.add.rectangle(0, 0, 500, 400, 0xF5F5DC);
    dialogBg.setStrokeStyle(4, 0x8B4513);

    // Large tulip image
    const tulipImg = this.add.image(0, -80, tulip.type);
    tulipImg.setDisplaySize(200, 200);

    // Tulip name
    const nameText = this.add.text(0, 50, tulip.name, {
      fontSize: '28px',
      fontFamily: 'Georgia, serif',
      color: '#000000',
      fontStyle: 'bold'
    }).setOrigin(0.5);

    // Rarity
    const rarityColor = this.getRarityColorHex(tulip.rarity);
    const rarityText = this.add.text(0, 85, tulip.rarity, {
      fontSize: '18px',
      color: rarityColor,
      fontStyle: 'italic'
    }).setOrigin(0.5);

    // Story
    const storyText = this.add.text(0, 125, tulip.story, {
      fontSize: '14px',
      color: '#333333',
      wordWrap: { width: 450 },
      align: 'center'
    }).setOrigin(0.5);

    // Close button
    const closeBtn = this.add.text(0, 170, '✕ Close', {
      fontSize: '16px',
      color: '#ffffff',
      backgroundColor: '#8B4513',
      padding: { x: 20, y: 8 }
    }).setOrigin(0.5).setInteractive({ useHandCursor: true });

    closeBtn.on('pointerdown', () => {
      overlay.destroy();
      dialog.destroy();
    });

    dialog.add([dialogBg, tulipImg, nameText, rarityText, storyText, closeBtn]);
  }

  private getRarityColor(rarity: string): number {
    switch (rarity) {
      case 'Common': return 0xFFFFFF;
      case 'Uncommon': return 0x90EE90;
      case 'Rare': return 0x87CEEB;
      case 'Epic': return 0xDA70D6;
      case 'Legendary': return 0xFFD700;
      case 'Mythic': return 0xFF4500;
      default: return 0xFFFFFF;
    }
  }

  private getRarityColorHex(rarity: string): string {
    switch (rarity) {
      case 'Common': return '#666666';
      case 'Uncommon': return '#22C55E';
      case 'Rare': return '#3B82F6';
      case 'Epic': return '#A855F7';
      case 'Legendary': return '#F59E0B';
      case 'Mythic': return '#EF4444';
      default: return '#666666';
    }
  }

  private showMessage(text: string) {
    this.messageText.setText(text);
    this.messageText.setVisible(true);

    this.time.delayedCall(3000, () => {
      this.messageText.setVisible(false);
    });
  }

  private saveState() {
    localStorage.setItem('tulip_pot_state', JSON.stringify(this.potState));
    localStorage.setItem('tulip_collection', JSON.stringify(this.collection));
  }

  private loadState() {
    try {
      // CLEAR OLD DATA - type field changed
      localStorage.removeItem('tulip_collection');
      localStorage.removeItem('tulip_pot_state');
      console.log('Cleared old save data');
      
      const potData = localStorage.getItem('tulip_pot_state');
      if (potData) {
        this.potState = JSON.parse(potData);
        this.updatePotImage(this.potState.status);
        this.updateButtonStates();
        
        if (this.potState.status === 'watered' || this.potState.status === 'fertilized') {
          this.timerText.setVisible(true);
        }
      }

      const collectionData = localStorage.getItem('tulip_collection');
      if (collectionData) {
        this.collection = JSON.parse(collectionData);
        console.log('Loaded collection:', this.collection);
        this.renderCollection();
      }
    } catch (e) {
      console.error('Failed to load state:', e);
    }
  }
}
