'use client';

import dynamic from 'next/dynamic';

// Dynamic import to avoid SSR issues with Phaser
const GameCanvas = dynamic(() => import('@/components/GameCanvas'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-screen bg-sky-400">
      <div className="text-white text-2xl">🌷 Loading Garden...</div>
    </div>
  ),
});

export default function GamePage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 p-4">
      <GameCanvas />
    </div>
  );
}
