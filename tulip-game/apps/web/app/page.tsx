import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-sky-400 via-blue-500 to-purple-600">
      <div className="text-center px-4 max-w-2xl">
        <h1 className="text-6xl font-bold text-white mb-6 drop-shadow-lg">
          🌷 My Tulip Garden
        </h1>
        
        <p className="text-xl text-white/90 mb-4">
          Plant magical tulip seeds, nurture them with care, and watch them bloom into rare treasures after 24 hours.
        </p>
        
        <p className="text-lg text-white/80 mb-8">
          Will you discover a <span className="font-bold text-yellow-300">Legendary</span> or even a{' '}
          <span className="font-bold text-pink-300">Mythic</span> bloom? 🎲
        </p>
        
        <Link
          href="/game"
          className="inline-block px-12 py-4 text-2xl font-bold text-white bg-green-600 hover:bg-green-700 rounded-lg shadow-xl transition-all hover:scale-105 active:scale-95"
        >
          🌱 Play Now
        </Link>
        
        <div className="mt-12 text-sm text-white/70">
          <p>4×4 garden • 6 rarity tiers • Screenshot & share your garden</p>
        </div>
      </div>
    </div>
  );
}
