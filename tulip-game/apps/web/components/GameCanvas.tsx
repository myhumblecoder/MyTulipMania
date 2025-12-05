'use client';

import { useEffect, useRef } from 'react';
import Phaser from 'phaser';
import { BootScene } from '@/lib/phaser/BootScene';
import { GardenScene } from '@/lib/phaser/GardenScene';

export default function GameCanvas() {
  const gameRef = useRef<Phaser.Game | null>(null);

  useEffect(() => {
    if (gameRef.current) return; // Already initialized

    const config: Phaser.Types.Core.GameConfig = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      parent: 'game-container',
      backgroundColor: '#87CEEB',
      scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
      },
      scene: [BootScene, GardenScene],
    };

    gameRef.current = new Phaser.Game(config);

    // Cleanup on unmount
    return () => {
      if (gameRef.current) {
        gameRef.current.destroy(true);
        gameRef.current = null;
      }
    };
  }, []);

  return (
    <div 
      id="game-container" 
      className="w-full h-full"
      style={{ width: '800px', height: '600px', maxWidth: '100%' }}
    />
  );
}
