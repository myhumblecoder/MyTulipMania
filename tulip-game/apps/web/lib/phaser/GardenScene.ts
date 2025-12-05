import Phaser from 'phaser';

interface PlotState {
  status: 'empty' | 'planted' | 'watered' | 'bloomed';
  plantedAt?: number;
  wateredAt?: number;
  bloomedAt?: number;
  rarity?: number;
}

export class GardenScene extends Phaser.Scene {
  private plots: Phaser.GameObjects.Image[] = [];
  private plotStates: PlotState[] = [];
  private selectedPlot: number | null = null;
  private timerTexts: Phaser.GameObjects.Text[] = [];
  
  private plantBtn!: Phaser.GameObjects.Text;
  private waterBtn!: Phaser.GameObjects.Text;
  private shareBtn!: Phaser.GameObjects.Text;
  
  constructor() {
    super({ key: 'GardenScene' });
  }

  create() {
    console.log('🌷 GardenScene.create() called');
    const width = this.cameras.main.width;
    const height = this.cameras.main.height;
    console.log('Canvas dimensions:', width, 'x', height);

    // Background
    this.add.rectangle(width / 2, height / 2, width, height, 0x87CEEB);
    this.add.text(width / 2, 40, '🌷 My Tulip Garden', {
      fontSize: '32px',
      color: '#ffffff',
      fontStyle: 'bold',
    }).setOrigin(0.5);

    // 4×4 grid of plots (centered)
    const plotSize = 100;
    const spacing = 20;
    const gridSize = 4;
    const gridWidth = gridSize * plotSize + (gridSize - 1) * spacing;
    const startX = (width - gridWidth) / 2 + plotSize / 2;
    const startY = 120;

    for (let row = 0; row < gridSize; row++) {
      for (let col = 0; col < gridSize; col++) {
        const x = startX + col * (plotSize + spacing);
        const y = startY + row * (plotSize + spacing);
        
        const plot = this.add.image(x, y, 'plot_empty');
        plot.setDisplaySize(plotSize, plotSize);
        plot.setInteractive({ useHandCursor: true });
        
        const plotIndex = row * gridSize + col;
        plot.on('pointerdown', () => {
          console.log('Plot clicked:', plotIndex);
          this.selectPlot(plotIndex);
        });
        
        // Timer text (hidden by default)
        const timerText = this.add.text(x, y - 60, '', {
          fontSize: '12px',
          color: '#ffffff',
          backgroundColor: '#000000',
          padding: { x: 4, y: 2 }
        }).setOrigin(0.5).setVisible(false);
        
        this.plots.push(plot);
        this.timerTexts.push(timerText);
        this.plotStates.push({ status: 'empty' });
      }
    }

    // Action buttons (bottom of screen)
    const btnY = height - 80;
    
    this.plantBtn = this.add.text(width / 2 - 150, btnY, '🌱 Plant', {
      fontSize: '24px',
      color: '#ffffff',
      backgroundColor: '#2d5016',
      padding: { x: 20, y: 10 }
    }).setOrigin(0.5).setInteractive({ useHandCursor: true });
    this.plantBtn.on('pointerdown', () => this.plantSeed());
    
    this.waterBtn = this.add.text(width / 2, btnY, '💧 Water', {
      fontSize: '24px',
      color: '#ffffff',
      backgroundColor: '#1e40af',
      padding: { x: 20, y: 10 }
    }).setOrigin(0.5).setInteractive({ useHandCursor: true });
    this.waterBtn.on('pointerdown', () => this.waterPlot());
    
    this.shareBtn = this.add.text(width / 2 + 150, btnY, '📸 Share', {
      fontSize: '24px',
      color: '#ffffff',
      backgroundColor: '#7c2d12',
      padding: { x: 20, y: 10 }
    }).setOrigin(0.5).setInteractive({ useHandCursor: true });
    this.shareBtn.on('pointerdown', () => this.shareGarden());

    // Load saved state from localStorage
    this.loadGameState();
    
    // Start timer loop (check for blooms every second)
    this.time.addEvent({
      delay: 1000,
      callback: this.checkBlooms,
      callbackScope: this,
      loop: true,
    });
  }

  private selectPlot(index: number) {
    // Deselect previous plot
    if (this.selectedPlot !== null) {
      this.plots[this.selectedPlot]?.clearTint();
    }
    
    // Select new plot
    this.selectedPlot = index;
    this.plots[index]?.setTint(0xffff00); // Yellow highlight
  }

  private plantSeed() {
    if (this.selectedPlot === null) {
      this.showMessage('Select a plot first!');
      return;
    }
    
    const state = this.plotStates[this.selectedPlot];
    if (!state || state.status !== 'empty') {
      this.showMessage('Plot already has a tulip!');
      return;
    }
    
    // Plant seed
    state.status = 'planted';
    state.plantedAt = Date.now();
    this.plots[this.selectedPlot]?.setTexture('plot_planted');
    
    // Juicy feedback
    this.tweens.add({
      targets: this.plots[this.selectedPlot],
      scaleX: 1.2,
      scaleY: 1.2,
      yoyo: true,
      duration: 200,
      ease: 'Back.easeOut',
    });
    
    this.saveGameState();
    this.showMessage('🌱 Seed planted! Water it to start growing.');
  }

  private waterPlot() {
    if (this.selectedPlot === null) {
      this.showMessage('Select a plot first!');
      return;
    }
    
    const state = this.plotStates[this.selectedPlot];
    const plot = this.plots[this.selectedPlot];
    if (!state || !plot || state.status !== 'planted') {
      this.showMessage('Nothing to water!');
      return;
    }
    
    // Water tulip
    state.status = 'watered';
    state.wateredAt = Date.now();
    plot.setTexture('plot_watered');
    
    // Juicy particle effect
    this.addWaterParticles(plot.x, plot.y);
    
    this.saveGameState();
    this.showMessage('💧 Watered! Bloom in 24 hours...');
  }

  private checkBlooms() {
    const now = Date.now();
    
    this.plotStates.forEach((state, index) => {
      if (state.status === 'watered' && state.wateredAt) {
        const elapsed = now - state.wateredAt;
        // Production: 24 hours
        const BLOOM_TIME = 24 * 60 * 60 * 1000; // 24 hours for production
        // const BLOOM_TIME = 60 * 1000; // 60 seconds for testing
        
        const remaining = BLOOM_TIME - elapsed;
        
        if (remaining > 0) {
          // Update timer display
          const hours = Math.floor(remaining / (60 * 60 * 1000));
          const minutes = Math.floor((remaining % (60 * 60 * 1000)) / (60 * 1000));
          const seconds = Math.floor((remaining % (60 * 1000)) / 1000);
          
          let timeStr = '';
          if (hours > 0) {
            timeStr = `${hours}h ${minutes}m`;
          } else if (minutes > 0) {
            timeStr = `${minutes}m ${seconds}s`;
          } else {
            timeStr = `${seconds}s`;
          }
          
          const timerText = this.timerTexts[index];
          if (timerText) {
            timerText.setText(`Blooms in: ${timeStr}`);
            timerText.setVisible(true);
          }
        } else {
          const timerText = this.timerTexts[index];
          if (timerText) timerText.setVisible(false);
          this.revealBloom(index);
        }
      } else {
        const timerText = this.timerTexts[index];
        if (timerText) timerText.setVisible(false);
      }
    });
  }

  private getRarity(): number {
    const roll = Math.random() * 10000; // 0-9999
    if (roll < 5000) return 1; // 50% Common
    if (roll < 8000) return 2; // 30% Uncommon
    if (roll < 9500) return 3; // 15% Rare
    if (roll < 9900) return 4; // 4% Epic
    if (roll < 9990) return 5; // 0.9% Legendary
    return 6;                   // 0.1% Mythic – HOLY SHIT MOMENT
  }

  private revealBloom(index: number) {
    const state = this.plotStates[index];
    const plot = this.plots[index];
    if (!state || !plot) return;
    
    // Get rarity
    const rarity = this.getRarity();
    
    state.status = 'bloomed';
    state.bloomedAt = Date.now();
    state.rarity = rarity;
    
    // Juicy reveal animation
    
    // Flash effect
    this.tweens.add({
      targets: plot,
      alpha: 0,
      yoyo: true,
      repeat: 3,
      duration: 150,
      onComplete: () => {
        plot.setTexture(`tulip_rarity_${rarity}`);
        plot.setAlpha(1);
        
        // Scale-in animation
        plot.setScale(0);
        this.tweens.add({
          targets: plot,
          scaleX: 1.3,
          scaleY: 1.3,
          duration: 500,
          ease: 'Back.easeOut',
          onComplete: () => {
            this.tweens.add({
              targets: plot,
              scaleX: 1,
              scaleY: 1,
              duration: 200,
            });
          },
        });
        
        // Particle burst
        this.addBloomParticles(plot.x, plot.y, rarity);
        
        // Show rarity message with color
        const rarityNames = ['', 'Common', 'Uncommon', 'Rare', 'Epic', 'Legendary', 'Mythic'];
        const rarityColors = ['', '#90EE90', '#4169E1', '#9370DB', '#FFD700', '#FF1493', '#FF00FF'];
        
        const rarityName = rarityNames[rarity] || 'Unknown';
        const rarityColor = rarityColors[rarity] || '#FFFFFF';
        
        // Rarity label on plot
        const label = this.add.text(plot.x, plot.y + 60, rarityName, {
          fontSize: '14px',
          color: rarityColor,
          fontStyle: 'bold',
          stroke: '#000000',
          strokeThickness: 3
        }).setOrigin(0.5).setScale(0);
        
        // Label flash animation
        this.tweens.add({
          targets: label,
          scale: 1.3,
          duration: 300,
          ease: 'Back.easeOut',
          yoyo: true,
          repeat: 2,
          onComplete: () => {
            this.tweens.add({
              targets: label,
              scale: 1,
              duration: 200
            });
          }
        });
        
        this.showMessage(`🌷 ${rarityNames[rarity]} Tulip bloomed!`, 3000);
      },
    });
    
    this.saveGameState();
  }

  private addWaterParticles(x: number, y: number) {
    // Simple particle effect (blue droplets)
    for (let i = 0; i < 10; i++) {
      const particle = this.add.circle(x, y, 3, 0x0000ff);
      this.tweens.add({
        targets: particle,
        x: x + Phaser.Math.Between(-30, 30),
        y: y + Phaser.Math.Between(-30, 30),
        alpha: 0,
        duration: 600,
        ease: 'Cubic.easeOut',
        onComplete: () => particle.destroy(),
      });
    }
  }

  private addBloomParticles(x: number, y: number, rarity: number) {
    // Rarity-specific colors
    const colors = [0xffffff, 0x90EE90, 0x4169E1, 0x9370DB, 0xFFD700, 0xFF1493, 0xFF00FF];
    const color = colors[rarity];
    
    // Star burst
    for (let i = 0; i < 20; i++) {
      const particle = this.add.circle(x, y, 5, color);
      const angle = (Math.PI * 2 * i) / 20;
      const distance = 60;
      
      this.tweens.add({
        targets: particle,
        x: x + Math.cos(angle) * distance,
        y: y + Math.sin(angle) * distance,
        alpha: 0,
        duration: 800,
        ease: 'Cubic.easeOut',
        onComplete: () => particle.destroy(),
      });
    }
  }

  private shareGarden() {
    // Capture garden screenshot (Phaser canvas → PNG)
    this.game.renderer.snapshot((image) => {
      // Convert to blob and trigger download
      if (image instanceof HTMLImageElement) {
        fetch(image.src)
          .then(res => res.blob())
          .then(blob => {
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `my-tulip-garden-${Date.now()}.png`;
            a.click();
            URL.revokeObjectURL(url);
            
            this.showMessage('📸 Garden saved! Share it on X/Discord.');
          });
      }
    });
  }

  private showMessage(text: string, duration: number = 2000) {
    const width = this.cameras.main.width;
    const message = this.add.text(width / 2, 80, text, {
      fontSize: '20px',
      color: '#ffffff',
      backgroundColor: '#000000',
      padding: { x: 20, y: 10 },
    }).setOrigin(0.5);
    
    this.tweens.add({
      targets: message,
      alpha: 0,
      duration: duration,
      ease: 'Cubic.easeIn',
      onComplete: () => message.destroy(),
    });
  }

  private saveGameState() {
    if (typeof window !== 'undefined') {
      localStorage.setItem('tulip_garden_state', JSON.stringify(this.plotStates));
    }
  }

  private loadGameState() {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('tulip_garden_state');
      if (saved) {
        this.plotStates = JSON.parse(saved);
        
        // Update plot visuals
        this.plotStates.forEach((state, index) => {
          const plot = this.plots[index];
          if (!plot) return;
          
          if (state.status === 'planted') {
            plot.setTexture('plot_planted');
          } else if (state.status === 'watered') {
            plot.setTexture('plot_watered');
          } else if (state.status === 'bloomed' && state.rarity) {
            plot.setTexture(`tulip_rarity_${state.rarity}`);
          }
        });
      }
    }
  }
}
