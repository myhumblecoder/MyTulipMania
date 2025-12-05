# Tech-Spec: Garden MVP

**Created:** December 5, 2025  
**Status:** Ready for Development  
**Developer:** Barry (Quick Flow Solo Dev)  
**Target:** Ship in 2-3 days, validate addiction loop

---

## Overview

### Problem Statement

We're building a 6-month blockchain tulip game, but if the core garden loop isn't addictive, the rest is worthless. We need to validate that:

1. **Planting tulips is satisfying** (instant feedback, juicy animations)
2. **Waiting 24h creates anticipation** (timer-based dopamine)
3. **Rarity reveals are exciting** (variable reward psychology)
4. **Sharing is frictionless** (virality mechanic)

Traditional approach = build everything, hope people like it, discover they don't after 6 months of work.

**Quick Flow approach** = Ship minimal garden in 3 days, get 100+ strangers playing, validate addiction BEFORE building blockchain infrastructure.

### Solution

**Garden MVP:** A standalone Next.js + Phaser game with:

- 4×4 clickable garden plots (16 total)
- Plant → Water → Bloom cycle (24h localStorage timer)
- 6-tier rarity system (common → mythic, weighted random)
- Juicy Phaser animations (particles, tweens, flash effects)
- One-tap screenshot share (canvas → PNG download)
- Deployed to Vercel with shareable URL

**Zero backend. Zero blockchain. Zero complexity.** Just pure dopamine loops and shareability.

### Scope (In/Out)

#### ✅ In Scope

- 4×4 garden grid (16 plots)
- Click to select plot → Plant seed → Water tulip → 24h bloom timer
- 6 rarity tiers with weighted distribution:
  - Common (50%)
  - Uncommon (30%)
  - Rare (15%)
  - Epic (4%)
  - Legendary (0.9%)
  - Mythic (0.1%)
- Juicy animations:
  - Water: Blue particle burst
  - Bloom: Star explosion (rarity-colored)
  - Scale tweens, flash effects
- localStorage persistence (plot states survive page refresh)
- Screenshot share button (captures Phaser canvas → PNG download)
- Responsive design (works on mobile + desktop)
- Vercel deployment with live URL

#### ❌ Out of Scope (Post-MVP)

- Backend/database (localStorage only)
- User accounts/authentication
- Blockchain/NFTs/smart contracts
- ZK proofs for RNG
- Multiplayer/guilds/raids
- Marketplace/trading
- Social features beyond screenshot sharing
- Analytics/tracking (can add GA later)
- Audio/music (visual-only for speed)

---

## Context for Development

### Codebase Patterns

**Project Structure (Turborepo):**

```
mytulipmania/
├── apps/
│   └── web/                    # Next.js 14 App Router
│       ├── app/
│       │   ├── page.tsx        # Home/landing
│       │   ├── game/
│       │   │   └── page.tsx    # Game page (Phaser canvas)
│       │   └── layout.tsx
│       ├── components/
│       │   └── GameCanvas.tsx  # Phaser wrapper component
│       └── public/
│           └── assets/         # Placeholder images (plots, tulips)
├── packages/
│   └── game-engine/            # Phaser scenes (optional package)
│       └── src/
│           └── scenes/
│               ├── BootScene.ts
│               └── GardenScene.ts
├── turbo.json
└── package.json
```

**Alternative Simpler Structure (Recommended for 2-3 day MVP):**

```
apps/web/
├── app/
│   ├── page.tsx               # Landing
│   └── game/
│       └── page.tsx           # Game
├── lib/
│   └── phaser/
│       ├── BootScene.ts
│       └── GardenScene.ts
├── components/
│   └── GameCanvas.tsx
└── public/assets/
```

**Key Patterns:**

- **Phaser SSR Bypass:** Use `next/dynamic` with `ssr: false` (Phaser requires `window`)
- **localStorage Schema:**
  ```typescript
  interface PlotState {
    status: "empty" | "planted" | "watered" | "bloomed";
    plantedAt?: number; // Unix timestamp
    wateredAt?: number;
    bloomedAt?: number;
    rarity?: number; // 1-6
  }
  // Stored as: localStorage.setItem('tulip_garden_state', JSON.stringify(plotStates))
  ```
- **Phaser Config:**
  ```typescript
  {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'game-container',
    backgroundColor: '#87CEEB',
    scene: [BootScene, GardenScene],
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH,
    }
  }
  ```

### Files to Reference

**Winston's Reference Code (from conversation):**

- `BootScene.ts` - Asset loading, progress bar, transition to GardenScene
- `GardenScene.ts` - Main game logic (4×4 grid, plant/water/bloom, animations, screenshot)
- `GameCanvas.tsx` - Next.js wrapper component with dynamic import

**Key Implementation Details:**

- **Grid Layout:** 4×4 plots, 100px each, 20px spacing, centered on 800×600 canvas
- **Timer Check:** `setInterval` every 1s, checks if `Date.now() - wateredAt >= 24h`
- **Rarity Algorithm:**
  ```typescript
  getRarity(): number {
    const roll = Math.random() * 10000; // 0-9999
    if (roll < 5000) return 1; // 50% Common
    if (roll < 8000) return 2; // 30% Uncommon
    if (roll < 9500) return 3; // 15% Rare
    if (roll < 9900) return 4; // 4% Epic
    if (roll < 9990) return 5; // 0.9% Legendary
    return 6;                   // 0.1% Mythic – HOLY SHIT MOMENT
  }
  ```
- **Screenshot:** `this.game.renderer.snapshot((image) => { /* download blob */ })`

### Technical Decisions

| Decision             | Choice                     | Rationale                                                                      |
| -------------------- | -------------------------- | ------------------------------------------------------------------------------ |
| **Framework**        | Next.js 14 App Router      | Vercel deployment, SSR/SSG for landing page, dynamic import for Phaser         |
| **Game Engine**      | Phaser 3.60+               | Best 2D canvas engine for web, huge community, battle-tested                   |
| **State Management** | localStorage direct        | Zero backend = zero cost, survives page refresh, good enough for MVP           |
| **Styling**          | Tailwind CSS               | Pre-configured in Turborepo, fast prototyping                                  |
| **Asset Strategy**   | Placeholder PNGs or emojis | Ship with simple colored rectangles or emoji sprites, polish later             |
| **Deployment**       | Vercel                     | One-click deploy from GitHub, automatic HTTPS, CDN                             |
| **Timer Accuracy**   | Client-side only           | Acceptable for MVP (cheating possible but doesn't matter without leaderboards) |
| **Mobile Support**   | Responsive canvas          | `Phaser.Scale.FIT` handles different screen sizes                              |

---

## Implementation Plan

### Tasks

**Phase 1: Project Setup (2-4 hours)**

- [ ] Initialize Turborepo monorepo (`pnpm dlx create-turbo@latest mytulipmania`)
- [ ] Install Phaser in web app (`pnpm add phaser --filter=web`)
- [ ] Install TypeScript types (`pnpm add -D @types/phaser --filter=web`)
- [ ] Create directory structure (`app/game/`, `lib/phaser/`, `public/assets/`)
- [ ] Set up Git repository and push to GitHub

**Phase 2: Core Game Logic (4-6 hours)**

- [ ] Create `BootScene.ts` (load assets, show loading bar)
- [ ] Create `GardenScene.ts` (4×4 grid, plot selection, localStorage integration)
- [ ] Implement plant/water/bloom button handlers
- [ ] Implement 24h timer check logic (1s interval)
- [ ] Implement rarity reveal algorithm (weighted random)
- [ ] Test localStorage persistence (refresh page, verify state preserved)

**Phase 3: Animations & Polish (3-4 hours)**

- [ ] Add water particle effect (blue circles, spread outward, fade)
- [ ] Add bloom particle burst (star explosion, rarity-colored)
- [ ] Add scale tweens (plant: scale 1.2 → 1.0, bloom: 0 → 1.3 → 1.0)
- [ ] Add flash effect (alpha flicker during bloom reveal)
- [ ] Add message toasts (planted, watered, bloomed notifications)
- [ ] Test animations on mobile (60 FPS target)

**Phase 4: UI & Assets (2-3 hours)**

- [ ] Create placeholder plot sprites (empty, planted, watered)
- [ ] Create placeholder tulip sprites (6 rarity tiers, different colors)
- [ ] Create action button sprites (plant, water, share) or use Tailwind buttons
- [ ] Add landing page (`app/page.tsx` with "Play Now" button)
- [ ] Style with Tailwind (responsive layout, mobile-friendly)

**Phase 5: Screenshot Share (1-2 hours)**

- [ ] Implement `shareGarden()` function (Phaser snapshot → blob → download)
- [ ] Add share button to UI (bottom right, always visible)
- [ ] Test on mobile (iOS Safari, Android Chrome)
- [ ] Add copy-to-clipboard option (fallback if download fails)

**Phase 6: Deployment (1-2 hours)**

- [ ] Connect GitHub repo to Vercel
- [ ] Configure build settings (root: `apps/web/`, framework: Next.js)
- [ ] Deploy to production
- [ ] Test live URL on mobile devices
- [ ] Share URL with 5 friends for smoke test

**Total Estimated Time: 13-21 hours (spread over 2-3 days)**

### Acceptance Criteria

**AC1: Basic Garden Loop**

- **Given** a user visits the game URL
- **When** they click a plot, click "Plant", then click "Water"
- **Then** a 24h timer starts, and after 24h the tulip blooms with a rarity tier displayed

**AC2: Rarity Distribution**

- **Given** a user plants and waters 100 tulips
- **When** all blooms are revealed
- **Then** roughly 50% are common, 30% uncommon, 15% rare, 4% epic, <1% legendary, <0.2% mythic

**AC3: Persistence**

- **Given** a user has planted tulips and closes the browser
- **When** they return to the URL hours later
- **Then** all plot states are preserved (planted, watered, bloomed, rarity)

**AC4: Juicy Animations**

- **Given** a user waters a tulip
- **When** the water button is clicked
- **Then** blue particles burst from the plot with a satisfying tween
- **And** when the tulip blooms, a star explosion effect appears

**AC5: Screenshot Share**

- **Given** a user has bloomed multiple tulips
- **When** they click the "Share" button
- **Then** a PNG screenshot of the garden is downloaded to their device

**AC6: Mobile Responsive**

- **Given** a user visits on iPhone 12 Pro or Galaxy S21
- **When** they play the game
- **Then** canvas scales properly, buttons are tappable, 60 FPS maintained

**AC7: Production Deployment**

- **Given** the game is deployed to Vercel
- **When** anyone visits the URL
- **Then** they can play the garden without errors, on any device

---

## Additional Context

### Dependencies

**Required:**

```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "phaser": "^3.60.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "@types/react": "^18.0.0",
    "@types/phaser": "^3.60.0",
    "typescript": "^5.0.0",
    "tailwindcss": "^3.4.0",
    "autoprefixer": "^10.0.0",
    "postcss": "^8.0.0"
  }
}
```

**Optional (can add later):**

- `html2canvas` (if Phaser snapshot fails)
- `zustand` (if localStorage direct becomes unwieldy)
- `@vercel/analytics` (post-launch tracking)

### Testing Strategy

**For MVP (manual testing only):**

1. **Local Dev Testing:**
   - Plant 16 tulips, water all, wait 1 minute (reduce timer to 60s for testing)
   - Refresh page, verify all states preserved
   - Test animations on Chrome, Safari, Firefox
2. **Mobile Testing:**
   - Deploy to Vercel staging
   - Test on iOS Safari (iPhone 12+)
   - Test on Android Chrome (Galaxy S21+)
   - Verify 60 FPS, no jank, buttons tappable
3. **User Testing:**
   - Share URL with 5 friends
   - Ask: "Did you plant a tulip? Why/why not?"
   - Collect feedback on confusion points
   - Fix critical UX issues before launch tweet

**Post-MVP (if it gets traction):**

- Add Playwright E2E tests (plant → water → bloom flow)
- Add Vitest unit tests (rarity algorithm, timer logic)
- Add Lighthouse CI (performance regression detection)

### Notes

**Critical Success Factors:**

1. **Instant Feedback:** Every click must have juicy animation (no dead air)
2. **Anticipation:** 24h timer creates "check back tomorrow" habit
3. **Variable Rewards:** Rarity distribution must feel fair but exciting (mythic is rare but possible)
4. **Shareability:** Screenshot must look good enough to post on X/Discord

**Known Risks:**

- **Timer Cheating:** Users can edit localStorage or change system clock (acceptable for MVP, no leaderboards)
- **Asset Quality:** Placeholder sprites might look amateur (can polish later if traction)
- **Mobile Performance:** Particle effects might lag on older devices (test on iPhone X minimum)
- **localStorage Limits:** 5-10MB cap (16 plots = ~1KB, no risk)

**Stretch Goals (if time permits):**

- Add sound effects (plant: boop, water: splash, bloom: chime)
- Add background music (lofi beats, optional mute button)
- Add "Clear Garden" button (reset all plots for testing)
- Add rarity stats counter (show % distribution live)
- Add countdown timer display (shows hours remaining until bloom)

**Post-Launch Metrics to Track:**

- DAU (daily active users)
- Avg tulips planted per user
- Screenshot share rate (% of users who download)
- D1/D3/D7 retention (do they come back after 24h?)
- Social shares (track URL in X/Discord analytics)

**If MVP Gets Traction (>100 DAU, >30% D3 retention):**

- Unfreeze architecture.md Steps 4-8
- Add backend (Supabase for leaderboards)
- Add blockchain (Immutable zkEVM for NFT tulips)
- Add guilds, raids, ZK proofs per original PRD

**If MVP Fails (<10 DAU, <5% D3 retention):**

- Pivot or kill (architecture work was correct to freeze)
- Learn: Was the loop not fun? Was distribution broken? Was shareability bad?

---

## Development Handoff

**Winston's Reference Code:**
Winston (Architect) provided complete Phaser scene implementations in the conversation history. Key files to extract:

- `BootScene.ts` (lines 1-50 of Winston's code block)
- `GardenScene.ts` (lines 1-300+ of Winston's code block)
- `GameCanvas.tsx` (Next.js wrapper with dynamic import)

**Recommended Workflow:**

1. **Day 1 Morning:** Initialize Turborepo, set up Next.js + Phaser, copy Winston's BootScene/GardenScene
2. **Day 1 Afternoon:** Implement core loop (plant/water/bloom with localStorage)
3. **Day 2 Morning:** Add animations (particles, tweens, flash effects)
4. **Day 2 Afternoon:** Create/find placeholder assets, polish UI
5. **Day 3 Morning:** Implement screenshot share, test on mobile
6. **Day 3 Afternoon:** Deploy to Vercel, smoke test with 5 users, launch tweet

**Next Steps:**

- Barry implements this spec end-to-end (Option 2: Quick-Dev workflow)
- OR hand to Amelia (Dev Agent) for story-by-story TDD implementation (slower but more rigorous)

**Recommendation:** Barry solo implements in 2-3 days, ships to production, validates traction BEFORE formal TDD process.

---

**Tech-Spec Complete!** Ready to build. 🚀🌷
