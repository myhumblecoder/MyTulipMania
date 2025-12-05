# Product Requirements Document: MyTulipMania

---

## Document Control

| Field                | Value                                                                                                                                                                                 |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Document Type**    | Product Requirements Document (PRD)                                                                                                                                                   |
| **Project Name**     | MyTulipMania                                                                                                                                                                          |
| **Version**          | 1.0                                                                                                                                                                                   |
| **Status**           | Draft - In Progress                                                                                                                                                                   |
| **Created Date**     | December 5, 2025                                                                                                                                                                      |
| **Last Updated**     | December 5, 2025                                                                                                                                                                      |
| **Author**           | John (Product Manager)                                                                                                                                                                |
| **Stakeholders**     | TulipMaster (Project Lead), Development Team, Immutable Partnership Team                                                                                                              |
| **Source Documents** | Product Brief (`docs/product-brief-mytulipmania.md`)<br/>Brainstorming Session (`docs/analysis/brainstorming-session-2025-12-05.md`)<br/>Analyst Q&A (`docs/design/05_ANALYST_QA.md`) |

---

## Approval & Sign-Off

| Role                    | Name        | Signature | Date      |
| ----------------------- | ----------- | --------- | --------- |
| **Product Owner**       | TulipMaster | _Pending_ | _Pending_ |
| **Product Manager**     | John        | _Pending_ | _Pending_ |
| **Technical Architect** | Winston     | _Pending_ | _Pending_ |
| **Development Lead**    | Amelia      | _Pending_ | _Pending_ |
| **QA/Test Lead**        | Murat (TEA) | _Pending_ | _Pending_ |

---

## Revision History

| Version | Date       | Author | Description                                        |
| ------- | ---------- | ------ | -------------------------------------------------- |
| 0.1     | 2025-12-05 | John   | Initial draft - Document structure created         |
| 1.0     | 2025-12-05 | John   | Section 1: Document Control & Vision (In Progress) |

---

## Table of Contents

1. [Document Control](#document-control)
2. [Executive Summary](#executive-summary)
3. [Product Vision & Goals](#product-vision--goals)
4. [User Personas & Journey Maps](#user-personas--journey-maps)
5. [Core Game Loop & Mechanics](#core-game-loop--mechanics)
6. [Feature Requirements](#feature-requirements)
   - 6.1 [Guild Wars at Scale](#61-guild-wars-at-scale)
   - 6.2 [Viral Share Mechanics](#62-viral-share-mechanics)
   - 6.3 [Historical Satire Layer](#63-historical-satire-layer)
   - 6.4 [ZK Bubble Raids](#64-zk-bubble-raids)
7. [Technical Architecture](#technical-architecture)
8. [Non-Functional Requirements](#non-functional-requirements)
9. [Release Plan & Roadmap](#release-plan--roadmap)
10. [Risk Management](#risk-management)
11. [Success Metrics & Analytics](#success-metrics--analytics)
12. [Appendices](#appendices)

---

## 2. Executive Summary

### Product Overview

**MyTulipMania** is a satirical, free-to-play idle tulip-breeding game built on Immutable zkEVM that recreates the 1637 Dutch Tulip Mania—history's first recorded economic bubble. Players cultivate digital tulip gardens, breed virus-streaked legendary varieties, trade in Collegie (Dutch auction houses), and participate in guild-based PvP raids during Mania Meter peaks. The game satirizes both historical speculation and modern crypto culture while delivering addictive idle mechanics with zero gas fees.

**Platform**: Immutable zkEVM (gasless blockchain gaming)  
**Genre**: Idle/Breeding + Guild PvP + Historical Satire  
**Business Model**: 100% F2P with 2.5% royalties on secondary NFT trading  
**Target Audience**: Crypto-native idle gamers (primary) + viral mainstream (secondary)

### Market Opportunity

- **Addressable Market**: 200K-300K crypto-native idle gamers on Immutable ecosystem
- **Viral Potential**: Mainstream crossover via historical satire + meme culture (TikTok, Reddit)
- **Competitive Moat**: 6-12 month clone delay via ZK raids, guild network effects, cultural positioning
- **Revenue Model**: Sustainable at 8% trading rate ($14.4K/mo), realistic at 12% ($54K/mo), explosive during Mania events ($378K/week)

### Success Probability

**87%** (validated via stress testing with TRIZ failure mode analysis)

**Key Risk Factors**:

- Week 1 DAU below 2K (30% probability) → Mitigated via Solo Empire Builder pivot
- Clone marketing flood (60% probability) → Countered by K-factor 1.2+ viral mechanics
- ZK proving latency >5s (20% probability) → Hybrid optimistic fallback ready

### Strategic Importance

MyTulipMania establishes a **triple moat** that competitors cannot replicate:

1. **Technical Moat**: ZK proof-based raids requiring custom circuits ($150K+ dev cost, 6-12 months)
2. **Network Moat**: Guild wars die at <2K DAU, explosive at 10K+ (impossible to bootstrap)
3. **Cultural Moat**: First-mover on "1637 Tulip Mania" positioning (Vitalik-retweet-worthy narrative)

---

## 3. Product Vision & Goals

### Vision Statement

> **"Transform idle gaming by proving that gasless blockchain mechanics, provably fair RNG, and historical satire can create viral addiction loops that beat Web2 retention benchmarks—while educating a generation about financial bubbles through play."**

### Mission

Build the first idle breeding game where:

- **Economic speculation** feels authentic (Dutch Golden Age meets DeFi)
- **Guild warfare** creates emergent player drama (Eve Online meets Axie Infinity)
- **Zero-knowledge proofs** eliminate trust issues (Chainlink meets Starknet)
- **Historical accuracy** drives mainstream appeal (Ken Burns meets Hamster Kombat)

### Product Principles

1. **Gasless First**: Every daily action (plant, water, breed, raid) costs $0. No wallet friction.
2. **Provably Fair**: ZK proofs guarantee RNG authenticity. No server manipulation.
3. **5-Minute Dopamine**: Overnight bloom reveals deliver daily "slot machine" hits.
4. **Guild Obligations**: Social bonds (lending pools, raid teams) beat individual grind.
5. **Sharp Satire**: Educate while entertaining—history normies AND crypto degens both laugh.

### Business Goals

#### Primary Goals (Launch Success Criteria)

| Goal                         | Target                  | Measurement Period | Priority      |
| ---------------------------- | ----------------------- | ------------------ | ------------- |
| **Daily Active Users (DAU)** | 10,000                  | First 30 days      | P0 (Critical) |
| **Day-7 Retention**          | >40%                    | Cohort analysis    | P0 (Critical) |
| **Day-30 Retention**         | >35%                    | Cohort analysis    | P0 (Critical) |
| **Viral K-Factor**           | >1.2                    | Weekly tracking    | P0 (Critical) |
| **Monthly Royalties**        | $54K (12% trading rate) | First 90 days      | P1 (High)     |

#### Secondary Goals (Growth Indicators)

| Goal                     | Target               | Measurement Period | Priority    |
| ------------------------ | -------------------- | ------------------ | ----------- |
| **Guild Formation Rate** | 100+ guilds          | Week 2 post-launch | P1 (High)   |
| **Raid Participation**   | 40%+ of DAU          | During Mania peaks | P1 (High)   |
| **Daily Share Rate**     | 35K shares @ 10K DAU | Ongoing            | P1 (High)   |
| **Guild TVL**            | $1M+ in raid pools   | Month 3            | P2 (Medium) |
| **Mainstream Crossover** | 20% non-crypto users | Month 6            | P2 (Medium) |

#### Stretch Goals (Viral Success)

| Goal                         | Target             | Measurement Period | Priority          |
| ---------------------------- | ------------------ | ------------------ | ----------------- |
| **Vitalik/Balaji Retweet**   | 1+ organic mention | First 60 days      | P3 (Nice-to-Have) |
| **TikTok Educational Views** | 10M+ on mini-docs  | First 90 days      | P3 (Nice-to-Have) |
| **University Partnership**   | 1+ economics dept  | Month 9-12         | P3 (Nice-to-Have) |

### Success Criteria (MVP Launch)

The MVP is considered **successful** if it achieves **4 out of 5** critical metrics within 30 days:

✅ **Metric 1**: DAU ≥ 2,000 (minimum for guild network effects)  
✅ **Metric 2**: D7 Retention ≥ 40% (beats industry 15-20%)  
✅ **Metric 3**: K-Factor ≥ 1.0 (organic viral growth without paid ads)  
✅ **Metric 4**: Monthly Royalties ≥ $14.4K (break-even at 8% trading rate)  
✅ **Metric 5**: Guild Participation ≥ 30% of DAU (network effect activation)

**Launch is considered a FAILURE if**:

- DAU < 1,000 by Week 2 (insufficient scale)
- D7 Retention < 25% (unsustainable churn)
- K-Factor < 0.8 (death spiral, cannot grow organically)

### Anti-Goals (What We're NOT Building)

❌ **NOT a PvE grinding treadmill** → Offline progression prevents burnout  
❌ **NOT a pay-to-win economy** → 100% F2P, cosmetics only  
❌ **NOT a complex DeFi protocol** → Simple: plant, breed, trade, raid  
❌ **NOT a historical documentary** → 70% satire, 30% education  
❌ **NOT a multi-chain game** → Immutable-exclusive for gasless moat

---

## 4. User Personas & Journey Maps

### 4.1 Primary Persona: "Degen Dave" - Crypto-Native Idle Gamer

**Demographics**:

- Age: 22-35
- Location: Global (timezone-agnostic gaming)
- Crypto Experience: 2-5 years (owns 5-10 NFT collections)
- Gaming Background: Played Axie Infinity, Gods Unchained, Sunflower Land, Pixels
- Wallet: Immutable Passport or MetaMask
- Daily Screen Time: 3-5 hours (mobile + desktop)

**Psychographics**:

- **Motivations**: Make money while gaming, flex rare NFTs, guild status, FOMO from missing "the next big thing"
- **Pain Points**: Gas fees kill daily engagement, server-controlled RNG feels rigged, guild coordination requires Discord chaos, most blockchain games die in 3 months
- **Behaviors**: Checks Discord 50+ times/day, shares PvP wins on X, optimizes breeding spreadsheets, rage-sells during market crashes
- **Values**: Provable fairness, gasless transactions, real ownership, guild loyalty (but will switch for 10× gains)

**Goals in MyTulipMania**:

1. **Primary**: Flip tulips for profit (2-5× ROI in first month)
2. **Secondary**: Climb guild leaderboard (top 10 globally)
3. **Tertiary**: Collect all legendary virus-streaked varieties

**User Journey Map (Degen Dave)**:

#### Day 1: Discovery & Onboarding

1. **Trigger**: Sees raid clip on X with "Raided @whale for $10K tulips" caption
2. **First Touch**: Clicks link → Immutable Passport auto-login (no wallet setup friction)
3. **First Session** (10 min):
   - Plants 3 starter seeds (Common, Uncommon, Rare)
   - Reads pop-up: "Tulips bloom in 24h—check tomorrow for reveals"
   - Joins random guild via auto-matchmaking
   - **Hook**: Sees Mania Meter at 35% ("Raid Mode unlocks at 80%—breed more to boost!")
4. **First Share**: Auto-prompted to share garden profile → 3 friends click through

#### Day 2-7: Habit Formation

- **Morning Ritual** (5 min): Checks overnight bloom reveals → "RARE virus-streaked!" dopamine hit
- **Lunchtime** (3 min): Waters tulips, fertilizes with guild resources
- **Evening** (15 min): Breeds 2 new tulips, lists 1 on Collegie auction
- **Guild Drama**: Sees guild chat about raid strategy → stays for social bonds
- **Day 7 Retention Driver**: Guild raid invitation ("We need you for 5v5 tonight!")

#### Day 8-30: Guild Warfare & Mastery

- **Raid Participation**: 3-5 raids/week during Mania peaks (>80% meter)
- **Trading Activity**: 10-15 auctions/week (flipping Common → Rare arbitrage)
- **Guild Obligations**: Lending pool contributor (stakes 5 Rares for newbie loans)
- **Collection Goals**: 40% of virus varieties unlocked → "gotta catch 'em all"
- **Day 30 Retention Driver**: Season 1 ends in 2 weeks ("Guild needs top 10 finish for exclusive legendary!")

**Key Friction Points**:

- ❌ **ZK proving latency >3s**: Rage-quits raid mid-battle → Mitigation: Hybrid optimistic mode
- ❌ **Empty raid lobbies**: Boring when <2K DAU → Mitigation: AI phantom raiders
- ❌ **No X integration**: Manual screenshot sharing sucks → Mitigation: One-tap GIF generation

---

### 4.2 Secondary Persona: "History Hannah" - Viral Mainstream Crossover

**Demographics**:

- Age: 28-45
- Location: US/EU (English-speaking, educated)
- Crypto Experience: None (heard of Bitcoin, skeptical of NFTs)
- Gaming Background: Wordle, NYT games, mobile puzzle games
- Wallet: None (will create Immutable Passport if game is worth it)
- Daily Screen Time: 1-2 hours (mostly mobile during commute)

**Psychographics**:

- **Motivations**: Learn while entertained, share clever memes, feel smart (not scammed), low commitment (5-10 min/day max)
- **Pain Points**: Crypto feels scammy, NFT games are pay-to-win, no time for grinding, historical inaccuracies annoy her
- **Behaviors**: Binges TikTok history content, shares NYT articles, listens to podcasts about economics, plays casual games on subway
- **Values**: Authenticity, education, satire with substance, accessibility (no steep learning curves)

**Goals in MyTulipMania**:

1. **Primary**: Understand what Tulip Mania actually was (without reading a textbook)
2. **Secondary**: Share clever "Bitcoin = tulips" memes with friends
3. **Tertiary**: Collect all historical mini-documentaries (completionist streak)

**User Journey Map (History Hannah)**:

#### Day 1: Viral Discovery

1. **Trigger**: TikTok video shows 30s mini-doc about Semper Augustus tulip ("traded for a house in 1637")
2. **First Touch**: Swipes up → game link with "Relive history's first bubble" tagline
3. **First Session** (7 min):
   - Skips crypto wallet jargon → "Just let me play" → Passport auto-creates
   - Plants 1 tulip, reads pop-up: "Amsterdam tavern owners traded these like Bitcoin in 1637"
   - **Hook**: Pop-culture reference appears ("Your tulip is now worth 8 cows 🐄")
4. **First Share**: Screenshots pop-up, posts to Instagram Stories with "lol capitalism"

#### Day 2-7: Educational Engagement

- **Morning Ritual** (3 min): Checks tulip bloom → unlocks mini-doc about windhandel (futures trading)
- **Lunchtime** (2 min): Reads historical facts while watering ("Did you know the crash only lasted 3 days?")
- **Evening** (5 min): Breeds 1 new tulip → unlocks "Crash of 1637" animation
- **Day 7 Retention Driver**: Collection progress at 30% ("Unlock 20 more to complete historian badge")

#### Day 8-30: Casual Collector

- **No Guild Pressure**: Plays solo mode, never joins raids (doesn't care about PvP)
- **Trading Activity**: 0 auctions/week (keeps everything for collection)
- **Educational Value**: Shares 2-3 mini-docs/week on social media
- **Day 30 Retention Driver**: New season announcement ("Season 2: The South Sea Bubble!")

**Key Friction Points**:

- ❌ **Crypto terminology**: "What's a wallet?" → Mitigation: Passport auto-creates, no jargon
- ❌ **Guild pressure**: Feels forced into PvP → Mitigation: Solo Empire Builder mode
- ❌ **Pay-to-win vibes**: Assumes she needs to spend money → Mitigation: "100% FREE" everywhere

---

### 4.3 Tertiary Persona: "Guild Master Gary" - Hardcore Organizer

**Demographics**:

- Age: 25-40
- Location: Global (coordinates across timezones)
- Crypto Experience: 5-10 years (DeFi power user, runs 3 DAOs)
- Gaming Background: Eve Online (10 years), Clash of Clans, Albion Online
- Wallet: Ledger hardware wallet + Immutable Passport
- Daily Screen Time: 6-10 hours (streams on Twitch)

**Psychographics**:

- **Motivations**: Build empire, recruit top talent, dominate leaderboards, create legacy ("first legendary guild")
- **Pain Points**: Guild tools suck (Discord bots unreliable), most games don't reward organizers, drama kills retention
- **Behaviors**: Manages spreadsheets of member stats, runs voice strategy sessions, records raid VODs for training
- **Values**: Meritocracy, transparency (on-chain guild treasury), long-term investment over quick flips

**Goals in MyTulipMania**:

1. **Primary**: Build top 3 guild globally (10K+ DAU server)
2. **Secondary**: Control $1M+ guild TVL (lending pool dominance)
3. **Tertiary**: Get guild logo minted into Season 2 legendary tulip

**User Journey Map (Guild Master Gary)**:

#### Day 1: Guild Launch

1. **Trigger**: Immutable announces MyTulipMania grant ($100K prize for top guilds)
2. **First Touch**: Pre-launch waitlist → recruits 50 members from Eve Online community
3. **First Session** (2 hours):
   - Creates guild smart contract ($500 seed treasury)
   - Sets up lending pool rules (50% profit share for newbies)
   - Organizes raid roster (2v2, 5v5, 10v10 teams)
   - **Hook**: Guild leaderboard shows #47 globally → "We'll be top 10 in 2 weeks"

#### Day 2-7: Organizational Infrastructure

- **Morning** (30 min): Reviews guild treasury, adjusts lending pool rates
- **Midday** (1 hour): Recruits 10 new members via X threads ("Join winning guild")
- **Evening** (3 hours): Leads 5v5 raid practice, records VOD for training library
- **Day 7 Retention Driver**: Guild hits #23 globally → viral recruitment surge

#### Day 8-30: Competitive Dominance

- **Raid Leadership**: Organizes 15-20 raids/week across timezones
- **Treasury Management**: Guild TVL grows to $50K (top 15 globally)
- **Recruitment**: 200+ members, waiting list for lending pool access
- **Day 30 Retention Driver**: Guild #8 globally → Season 2 legendary tulip announcement

**Key Friction Points**:

- ❌ **Guild treasury gas fees**: Can't afford daily operations → Mitigation: Immutable gasless pooling
- ❌ **No raid analytics**: Can't optimize strategy → Mitigation: Export stats to CSV
- ❌ **Member churn**: Lost 20 members to competing guild → Mitigation: Vesting rewards over 6 months

---

### 4.4 User Journey Comparison Matrix

| Stage                | Degen Dave (Crypto-Native)         | History Hannah (Mainstream)       | Guild Master Gary (Hardcore)       |
| -------------------- | ---------------------------------- | --------------------------------- | ---------------------------------- |
| **Discovery**        | X raid clip (viral PvP)            | TikTok mini-doc (educational)     | Immutable grant announcement       |
| **Onboarding**       | Passport auto-login (0 friction)   | "Just let me play" (skip jargon)  | Waitlist → recruits 50 members     |
| **First Hook**       | Mania Meter + raid FOMO            | Historical pop-culture references | Guild leaderboard (#47 → #10)      |
| **Daily Engagement** | 5-10 min (bloom checks + raids)    | 3-5 min (educational unlocks)     | 2-4 hours (guild leadership)       |
| **Retention Driver** | Guild obligations (social bonds)   | Collection completionism (badges) | Competitive dominance (legacy)     |
| **Churn Risk**       | Empty raid lobbies (<2K DAU)       | Crypto terminology confusion      | Guild treasury management friction |
| **Monetization**     | 10-15 trades/week (active flipper) | 0 trades/week (collector)         | $50K+ guild TVL (lending pools)    |

---

### 4.5 Critical User Flows

#### Flow 1: New Player Onboarding (0-5 Minutes)

**Goal**: Get player to first "aha moment" (tulip planted + 24h anticipation) in <5 minutes

```
1. Landing Page
   ↓
2. "Play Now" CTA (no wallet prompt yet)
   ↓
3. Choose Username (skip wallet creation)
   ↓
4. Tutorial Popup: "Plant Your First Tulip"
   ├→ Click seed → Plot 1 → "Plant" button
   ├→ Animation: Seed buries in soil
   └→ Countdown Timer: "Blooms in 24h"
   ↓
5. Historical Fact Popup: "In 1637, this tulip was worth 8 cows"
   ↓
6. Call-to-Action: "Share Your Garden" (optional)
   ├→ One-tap GIF generation
   └→ "Invite 3 friends → Unlock Rare seed"
   ↓
7. Immutable Passport Prompt (background)
   ├→ "We created a wallet for you (gasless!)"
   └→ "Add email to secure your garden" (optional)
```

**Success Criteria**:

- ✅ 80%+ complete onboarding (plant first seed)
- ✅ 40%+ return Day 2 (check bloom reveal)
- ✅ 20%+ share garden (viral loop activation)

#### Flow 2: First Raid Participation (Day 3-7)

**Goal**: Get player into first guild raid during Mania peak

```
1. Mania Meter Alert: "80% → RAID MODE ACTIVE!"
   ↓
2. Guild Chat Notification: "Need 1 more for 5v5 raid"
   ↓
3. Accept Invite → Raid Lobby
   ├→ See 4 guild members (avatars + tulip counts)
   └→ Enemy guild preview (total TVL, win rate)
   ↓
4. Raid Countdown: 60s to join (FOMO timer)
   ↓
5. Raid UI Loads (Phaser canvas)
   ├→ 10 move options (steal, mutate, defend)
   └→ Guild chat (real-time tactics)
   ↓
6. Execute Moves (10-20 manual selections)
   ↓
7. ZK Proof Generation (client-side, <3s)
   ├→ Progress bar: "Proving raid fairness..."
   └→ Submit via Immutable Passport
   ↓
8. Raid Results Screen
   ├→ Victory: +1% enemy tulips, +Raid Badge NFT
   ├→ Defeat: "Better luck next time" + consolation rewards
   └→ Auto-share prompt: "Raided @enemy guild!"
```

**Success Criteria**:

- ✅ 40%+ DAU participate in raids during Mania peaks
- ✅ 60%+ share raid results (viral clips)
- ✅ 70%+ return for next raid (within 48h)

#### Flow 3: Collegie Auction Trading (Day 7-30)

**Goal**: Get player to list first tulip in Dutch auction

```
1. Bloom Reveal: "RARE virus-streaked tulip!"
   ↓
2. Popup: "This is worth 5-10× Common tulips"
   ├→ "Keep for breeding"
   └→ "Sell in Collegie auction" (recommended)
   ↓
3. Collegie UI (Dutch auction house)
   ├→ Set starting price (auto-suggests 2× floor)
   ├→ Set auction duration (12h, 24h, 48h)
   └→ Preview price decay curve
   ↓
4. List Tulip (gasless transaction via Passport)
   ↓
5. Live Auction Tracking
   ├→ Push notification when bid received
   └→ Price chart updates every 1 hour
   ↓
6. Auction Ends
   ├→ SOLD: Royalty to guild treasury (0.5%), 2.5% to platform
   └→ UNSOLD: "Relist at lower price?" suggestion
```

**Success Criteria**:

- ✅ 12%+ DAU list tulips weekly (realistic trading rate)
- ✅ 70%+ auctions complete (not canceled)
- ✅ 2.5% royalty revenue = $54K/mo @ 10K DAU

---

## 5. Core Game Loop & Mechanics

### 5.1 Game Loop Overview

MyTulipMania operates on **three interconnected loops** that create complementary addiction cycles:

```
┌─────────────────────────────────────────────────────────────┐
│                     MACRO LOOP (30 Days)                     │
│  Season Competition → Guild Rankings → Legendary Rewards     │
│         ↓                    ↓                    ↓          │
│  ┌────────────────────────────────────────────────────┐     │
│  │             MESO LOOP (7 Days)                      │     │
│  │  Mania Meter Builds → Raid Events → Trading Spikes │     │
│  │         ↓                ↓                ↓         │     │
│  │  ┌────────────────────────────────────────────┐    │     │
│  │  │        MICRO LOOP (24 Hours)               │    │     │
│  │  │  Plant → Water → Bloom → Breed → Trade    │    │     │
│  │  │         ↓         ↓        ↓        ↓      │    │     │
│  │  │  OVERNIGHT ANTICIPATION (Slot Machine)     │    │     │
│  │  └────────────────────────────────────────────┘    │     │
│  └────────────────────────────────────────────────────┘     │
└─────────────────────────────────────────────────────────────┘
```

### 5.2 Micro Loop: Daily Idle Progression (24-Hour Cycle)

**Core Mechanic**: Plant → Water → Bloom → Breed/Trade → Repeat

#### Action 1: Planting Seeds (5 seconds)

- **Input**: Select seed from inventory (Common, Uncommon, Rare, Legendary)
- **Interaction**: Click empty garden plot → drag seed → confirm
- **Gasless Transaction**: Immutable Passport signs, $0 cost
- **Feedback**:
  - Animation: Seed burrows into soil
  - Particle effect: Dirt spray
  - Sound: Satisfying "thunk"
  - Countdown timer appears: "Blooms in 24:00:00"
- **Constraint**: Maximum 16 plots per garden (4×4 grid)

#### Action 2: Watering & Fertilizing (30 seconds/day)

- **Input**: Click watering can icon
- **Interaction**: Drag across all planted tulips (bulk action)
- **Effect**: +10% bloom quality chance (Common → Uncommon upgrade possible)
- **Frequency**: Every 12 hours (morning + evening)
- **Gasless Transaction**: Bulk action, single signature
- **Feedback**:
  - Animation: Water droplets shimmer
  - Visual: Tulips glow slightly
  - Counter: "12 tulips watered → +10% quality boost"
- **Guild Bonus**: Guild members can water your garden (+5% bonus, builds social bonds)

#### Action 3: Bloom Reveal (10 seconds - THE DOPAMINE HIT)

- **Trigger**: 24-hour timer expires → Push notification
- **Interaction**: Click tulip → "Reveal Bloom" button
- **RNG Resolution**:
  - ZK-VRF generates rarity on-chain (provably fair)
  - Client reveals visuals based on rarity seed
- **Possible Outcomes**:

| Rarity        | Probability | Visual Traits                    | Player Reaction                   |
| ------------- | ----------- | -------------------------------- | --------------------------------- |
| **Common**    | 60%         | Solid color, no patterns         | "Meh, breed it"                   |
| **Uncommon**  | 25%         | Single stripe, slight shimmer    | "Okay, not bad"                   |
| **Rare**      | 10%         | Virus streaks (2-3 colors)       | "Nice! Auction or breed?"         |
| **Epic**      | 4%          | Flame patterns (Rembrandt-style) | "HOLY SHIT!" → auto-share         |
| **Legendary** | 1%          | Semper Augustus (full virus)     | "WHALE BAIT!" → screenshot frenzy |

- **Feedback**:
  - Animation: Tulip petals unfurl (3s cinematic)
  - Particle effects: Rarity-specific (flames for Epic, aurora for Legendary)
  - Sound: Escalating chimes (more dramatic for higher rarity)
  - Pop-up: Historical fact about that tulip variety
  - **Auto-share prompt** (for Rare+): "Share this bloom?" → One-tap X/TikTok

#### Action 4: Breeding (2 minutes - Strategy Layer)

- **Input**: Select 2 parent tulips from inventory
- **Interaction**: Drag to breeding plot → "Breed" button
- **Breeding Rules**:
  - Common × Common = 80% Common, 20% Uncommon
  - Uncommon × Rare = 60% Uncommon, 30% Rare, 10% Epic
  - Rare × Rare = 40% Rare, 50% Epic, 10% Legendary
  - **Virus Inheritance**: Streaked patterns combine (pseudo-genetics)
- **Gasless Transaction**: Single signature, outputs new seed NFT
- **Cooldown**: 12 hours per parent tulip (prevents spam)
- **Feedback**:
  - Animation: Tulips cross-pollinate (particle swirl)
  - Progress bar: "Breeding... 12:00:00 remaining"
  - Notification: "Your tulips are ready to reveal!"

#### Action 5: Trading in Collegie Auctions (5 minutes - Monetization)

- **Trigger**: Rare+ bloom → popup suggests auction
- **Interaction**:
  1. Navigate to Collegie (Dutch auction house)
  2. Set starting price (auto-suggests 2× floor based on rarity)
  3. Set duration (12h, 24h, 48h options)
  4. Preview price decay curve
  5. Confirm listing (gasless)
- **Auction Mechanics**:
  - **Dutch Auction**: Price drops 10% every 2 hours
  - **Instant Buy**: Player can purchase at current price
  - **Auto-Cancel**: Relists at 50% starting price if unsold
- **Royalty Distribution**:
  - 2.5% to platform (MyTulipMania treasury)
  - 0.5% to seller's guild treasury
  - 97% to seller
- **Feedback**:
  - Real-time price chart updates
  - Push notification when sold: "Your tulip sold for 15 IMX!"
  - Guild chat celebration: "Dave just sold a Legendary for 50 IMX!"

### 5.3 Meso Loop: Mania Meter & Raid Events (7-Day Cycle)

**Core Mechanic**: Community activity drives Mania Meter → Raids unlock at 80% → Trading spikes → Meter resets

#### Mania Meter Mechanics

**What Drives the Meter Up**:

- New tulips planted: +0.1% per tulip (across all players)
- Breeding activity: +0.5% per breed
- Auction listings: +1% per listing
- Raid victories: +2% per guild raid win
- **Exponential Growth**: Meter climbs faster as it approaches 80% (FOMO effect)

**What Drives the Meter Down**:

- Raid defeats: -1% per guild loss
- Failed auctions: -0.5% per unsold tulip
- Player inactivity: -0.1% per 1000 inactive users/day
- **Crash Event** (random at 95%+): Meter drops to 20% ("Bubble Burst!")

**Visual Representation**:

```
┌─────────────────────────────────────────────────────────┐
│  MANIA METER                                   [i] Info  │
├─────────────────────────────────────────────────────────┤
│  ████████████████████████░░░░░░░░░░░░░░░░  78%          │
│  🌷 Tulip Fever Rising!                                 │
│  Raid Mode unlocks at 80%                              │
│  - 15,234 tulips planted today (+15%)                  │
│  - 8,921 auctions active (+9%)                         │
│  - 234 raids won this hour (+5%)                       │
└─────────────────────────────────────────────────────────┘
```

#### Raid Events (80%+ Mania Meter)

**Trigger**: Mania Meter crosses 80% → Global notification: "RAID MODE ACTIVE!"

**Raid Mechanics**:

1. **Guild Matchmaking** (30s):

   - 2v2 (small skirmishes): 4 players total
   - 5v5 (medium battles): 10 players total
   - 10v10 (epic wars): 20 players total
   - Matchmaking by guild TVL (fair fights)

2. **Raid Lobby** (60s countdown):

   - See guild members + enemy guild preview
   - Real-time chat (strategy coordination)
   - **Stakes**: Each player antes 1 Rare+ tulip to pool

3. **Raid Battle** (5 minutes):

   - **Turn-Based Mechanics**: 10-20 moves per player
   - **Move Options**:
     - **Steal** (50% success): Take 1% of enemy tulips
     - **Mutate** (30% success): Apply virus to enemy tulips (reduces value)
     - **Defend** (80% success): Block incoming steal/mutate
     - **Boost** (100% success): +10% to next guild member's move
   - **UI**: Phaser canvas with drag-and-drop moves
   - **No Real-Time Pressure**: Players have 30s per turn

4. **ZK Proof Settlement** (<5s):

   - Client-side proof generation (all moves batched)
   - WebGPU proving (optimized for mobile)
   - Immutable Passport submission (gasless)
   - **Fallback**: If latency >5s, hybrid optimistic mode

5. **Raid Results**:
   - **Victory**:
     - Guild splits enemy ante pool (1% of total tulips)
     - Each participant gets Raid Badge NFT
     - Guild leaderboard +100 points
     - Auto-share prompt: "We raided [Enemy Guild]!"
   - **Defeat**:
     - Lose ante (tulips transferred to winners)
     - Consolation reward: 10% refund in guild credits
     - Motivational message: "Regroup for next raid!"

**Raid Frequency**:

- Mania Meter at 80-89%: 1 raid/hour possible
- Mania Meter at 90-94%: 3 raids/hour possible
- Mania Meter at 95%+: 10 raids/hour (chaos mode)
- After Crash Event (20%): No raids for 24h (recovery period)

#### Trading Spikes During Mania

**Historical Pattern** (based on stress testing):

- Normal trading rate: 8-12% of DAU list tulips weekly
- During Mania peaks (>80%): 25-35% trading rate
- Post-Crash dumps (20-40%): 5% trading rate (accumulation)

**Why Players Trade More During Mania**:

1. **FOMO**: "Prices are peaking, sell now!"
2. **Raid Prep**: Need Rare+ tulips to ante for raids
3. **Guild Obligations**: Treasury needs liquidity for lending pools
4. **Profit-Taking**: Whales offload before crash

### 5.4 Macro Loop: Season Competition (30-Day Cycle)

**Core Mechanic**: Guilds compete for top 10 global ranking → Winners get exclusive legendary tulips

#### Season Structure

**Week 1: Accumulation**

- Players plant seeds, breed varieties
- Guilds recruit members, build treasuries
- Mania Meter climbs slowly (40-60% average)
- Trading volume low (8% rate)

**Week 2-3: Mania Build**

- Raid events increase (Meter at 70-85%)
- Guild wars intensify (top 20 jockey for position)
- Trading spikes (15-25% rate)
- Drama emerges (guild betrayals, poaching attempts)

**Week 4: Chaos & Crash**

- Mania Meter hits 95%+ multiple times
- 10 raids/hour (saturation)
- Trading frenzy (30-35% rate)
- **Crash Event** (guaranteed Week 4): Meter drops to 20%
- Final leaderboard freeze (top 10 locked)

#### Season Rewards

**Top 10 Guilds**:

1. **1st Place**: Custom legendary tulip with guild logo, $10K IMX prize split
2. **2nd-3rd Place**: Epic tulip variants, $5K IMX split
3. **4th-10th Place**: Rare exclusive varieties, $1K IMX split

**Individual Rewards** (based on contribution):

- **Top 100 Traders**: "Merchant Prince" badge NFT
- **Top 100 Raiders**: "Warrior" badge NFT
- **Top 100 Breeders**: "Geneticist" badge NFT
- **Collection Completionists**: "Historian" badge (unlocked all mini-docs)

**Season 2 Teaser** (announced Week 4):

- New historical bubble theme (South Sea Bubble 1720? Railway Mania 1840s?)
- New tulip varieties (10+ new legendaries)
- New raid mechanics (3v3v3 free-for-all?)

### 5.5 Offline Progression Mechanics

**Problem**: Idle games die when players can't progress offline

**Solution**: Tulips grow while players sleep, but caps prevent runaway inflation

#### Offline Growth Rules

**While Offline**:

- Planted tulips continue bloom countdown (up to 48h max)
- Watering bonus decays (loses 1% per hour, min 0%)
- Breeding cooldowns tick down
- Guild lending pool accumulates interest (+0.5%/day)

**Upon Return**:

- Push notification: "3 tulips ready to reveal!"
- Batch reveal option: "Reveal All" (3s animation per tulip)
- Watering reminder: "Your garden needs water!" (12h cooldown reset)
- Guild chat recap: "Your guild won 2 raids while you were away"

**Offline Caps** (prevent exploitation):

- Maximum 16 tulips can bloom offline (full 4×4 grid)
- No breeding occurs offline (requires active participation)
- No auction sales offline (listings remain live but need check-in)

#### Solo Empire Builder Mode (3K DAU Pivot)

**Activation**: If DAU < 2K by Week 2 → AI phantom raiders appear

**How It Works**:

- AI guilds with generated names ("The Windhandel Syndicate", "De Keizerskroon Cartel")
- Raid matchmaking includes AI opponents (50/50 real/AI mix)
- AI difficulty scales with player skill (rubber-banding)
- Rewards identical to real raids (no distinguishing)
- **Seamless Transition**: When DAU >2K, AI raiders phase out

**Why This Prevents Death Spiral**:

- Players still get raid dopamine hits
- Guild mechanics remain engaging
- Economics stay viable ($7.8K/mo royalties at 3K DAU)
- No "ghost town" feeling

### 5.6 Progression Systems

#### Garden Expansion

**Starting State**: 4 plots (2×2 grid)

**Unlock Path**:

- **8 plots** (2×4): Plant 10 tulips
- **12 plots** (3×4): Breed 5 tulips
- **16 plots** (4×4): Complete 1 raid OR unlock 10 historical facts

**Premium Option** (cosmetic only):

- Themed garden backgrounds ($5): "Amsterdam Tavern", "Golden Age Estate"
- Custom plot decorations ($2): Windmills, cobblestone paths
- **NOT Pay-to-Win**: No gameplay advantage

#### Collection Progress

**3 Collection Types**:

1. **Tulip Varieties** (60 total):

   - Common: 20 varieties
   - Uncommon: 15 varieties
   - Rare: 15 varieties
   - Epic: 8 varieties
   - Legendary: 2 varieties (Semper Augustus + Season exclusive)

2. **Historical Mini-Docs** (50 unlocks):

   - Unlock by breeding specific tulip combinations
   - 30-60s videos about 1637 bubble
   - TikTok-friendly (vertical format, captions)

3. **Badge NFTs** (20 achievements):
   - "First Bloom", "Raid Veteran", "Merchant Prince"
   - Display on profile, tradeable on Immutable marketplace
   - **Flex Value**: Rare badges = status symbol

#### Guild Progression

**Guild Levels** (based on TVL + raid wins):

| Level  | TVL Requirement | Raid Wins | Perks                                 |
| ------ | --------------- | --------- | ------------------------------------- |
| **1**  | $0              | 0         | Basic lending pool (10 members max)   |
| **2**  | $1K             | 5         | +20 members, custom guild emblem      |
| **3**  | $5K             | 20        | +50 members, guild chat channels      |
| **4**  | $10K            | 50        | +100 members, priority matchmaking    |
| **5**  | $50K            | 100       | +500 members, exclusive raid modes    |
| **10** | $1M+            | 500+      | Top 10 leaderboard, legendary rewards |

**Guild Reputation**:

- Win/loss record displayed publicly
- Member retention rate (churn indicator)
- Average lending pool APY
- Raid strategy VODs (optional public sharing)

### 5.7 Economy Design

#### Token Flow Diagram

```
┌─────────────────────────────────────────────────────────┐
│                  PLAYER ACTIONS                          │
│  Plant → Breed → List Auction → Sale → Royalties        │
└──────────────┬──────────────────────────────────────────┘
               ↓
┌──────────────────────────────────────────────────────────┐
│              IMMUTABLE MARKETPLACE                        │
│  Buyer pays 100 IMX for Legendary tulip                  │
│  ├→ 97 IMX to Seller                                     │
│  ├→ 2.5 IMX to Platform (MyTulipMania treasury)          │
│  └→ 0.5 IMX to Seller's Guild treasury                   │
└──────────────┬───────────────────────────────────────────┘
               ↓
┌──────────────────────────────────────────────────────────┐
│              GUILD ECONOMY                                │
│  Guild Treasury = $50K TVL                               │
│  ├→ Lending Pool: $40K (80% allocated to newbie loans)   │
│  ├→ Raid Stakes: $8K (16% reserved for raid antes)       │
│  └→ Operating Fund: $2K (4% for recruitment bonuses)     │
└──────────────┬───────────────────────────────────────────┘
               ↓
┌──────────────────────────────────────────────────────────┐
│              PLATFORM TREASURY                            │
│  Monthly royalties = $54K (12% trading rate @ 10K DAU)   │
│  ├→ Infrastructure: $6K (hosting, Immutable fees)        │
│  ├→ Content: $10K (artists, historians, video editors)   │
│  ├→ Marketing: $5K (meme artists, influencer partnerships)│
│  ├→ Development: $20K (team salaries, audits)            │
│  └→ Reserve: $13K (rainy day fund, Season 2 prizes)      │
└──────────────────────────────────────────────────────────┘
```

#### Inflation & Deflation Controls

**Inflationary Pressures**:

- New seeds minted daily (starter packs for new players)
- Breeding produces new tulip NFTs (combinatorial explosion)

**Deflationary Mechanisms**:

1. **Raid Stakes**: 1% of losing guild's tulips burned (permanent destruction)
2. **Failed Auctions**: Tulips auto-burn after 3 failed listings (quality floor)
3. **Crash Events**: 5% of all tulips wilt during bubble burst (scarcity shock)
4. **Collection Burning**: Players can burn complete sets for exclusive badges

**Result**: Inflation rate targets 2-3%/month (healthy growth, not hyperinflation)

---

## 6. Feature Requirements

This section details the **4 MVP features** identified during brainstorming stress testing (87% success probability). Each feature includes functional requirements, non-functional requirements, user stories, acceptance criteria, edge cases, and dependencies.

---

### 6.1 Guild Wars at Scale (Network Moat)

**Strategic Purpose**: Create network effects that make the game exponentially better at 10K DAU vs 1K DAU. Guild wars become boring below 2K DAU (empty lobbies) but explosive above 10K DAU (constant matchmaking).

**Business Impact**:

- **Primary Moat**: 6-12 month clone delay (requires player base, cannot bootstrap)
- **Retention Driver**: Guild obligations create social bonds (40%+ D7 retention)
- **Viral Amplification**: Raid clips shared 60%+ of the time (K-factor boost)

#### 6.1.1 Functional Requirements

**FR-GW-001: Guild Creation & Management**

- **Description**: Players can create guilds, invite members, and manage guild treasury
- **Priority**: P0 (Critical)
- **Details**:
  - Guild creation requires ERC721 NFT mint (gasless via Immutable Passport)
  - Maximum 500 members per guild (enforced by smart contract)
  - Guild treasury = multi-sig wallet (3-of-5 leader approval for withdrawals)
  - Guild levels 1-10 (based on TVL + raid win count)
  - Public guild leaderboard (global ranking updated hourly)

**FR-GW-002: Mania Meter System**

- **Description**: Global meter (0-100%) that tracks community activity and triggers raid mode
- **Priority**: P0 (Critical)
- **Details**:
  - Meter increases from: planting (+0.1%), breeding (+0.5%), auctions (+1%), raid wins (+2%)
  - Meter decreases from: raid losses (-1%), failed auctions (-0.5%), inactivity (-0.1%/1K users/day)
  - Raid mode activates at 80%+ (global notification to all players)
  - Crash event at 95%+ (random 20% probability/hour, drops meter to 20%)
  - Visual representation in UI (progress bar + historical chart)

**FR-GW-003: Raid Matchmaking**

- **Description**: Real-time matchmaking for 2v2, 5v5, 10v10 guild battles
- **Priority**: P0 (Critical)
- **Details**:
  - Matchmaking by guild TVL (±20% tolerance for fair fights)
  - 60-second lobby countdown (minimum 4/10/20 players required)
  - AI phantom raiders fill empty slots if <2K DAU (seamless transition)
  - Raid frequency scales with Mania Meter:
    - 80-89%: 1 raid/hour possible
    - 90-94%: 3 raids/hour possible
    - 95%+: 10 raids/hour (chaos mode)
  - Failed matchmaking → return to lobby (no penalty)

**FR-GW-004: Raid Battle Mechanics**

- **Description**: Turn-based guild battles with 4 move types and ZK settlement
- **Priority**: P0 (Critical)
- **Details**:
  - **Turn Structure**: 10-20 moves per player (5-minute battle)
  - **Move Options**:
    - **Steal** (50% success rate): Take 1% of enemy guild tulips
    - **Mutate** (30% success rate): Apply virus to enemy tulips (reduces value 10%)
    - **Defend** (80% success rate): Block incoming steal/mutate
    - **Boost** (100% success rate): +10% to next guild member's move
  - **Turn Timer**: 30 seconds per player turn (prevents stalling)
  - **Move Validation**: Client-side move selection → batched ZK proof → on-chain settlement
  - **UI**: Phaser 3 canvas with drag-and-drop move interface
  - **Guild Chat**: Real-time text chat during battle (coordination)

**FR-GW-005: ZK Proof Settlement**

- **Description**: Provably fair raid resolution using zero-knowledge proofs
- **Priority**: P1 (High)
- **Details**:
  - **Proof Generation**: Client-side (WebGPU) proves all moves valid
  - **Latency Target**: <3s for proof generation + submission
  - **Circuits**: circom/halo2 (pre-audited, open-source)
  - **Fallback**: Hybrid optimistic mode if latency >5s:
    - Moves execute immediately (optimistic)
    - ZK proof generated async (within 30s)
    - Dispute period: 5 minutes (challenge invalid moves)
  - **Security**: Immutable Passport signs proof submission (prevents replay attacks)

**FR-GW-006: Raid Rewards & Penalties**

- **Description**: Winners receive enemy tulips + badges, losers pay ante
- **Priority**: P0 (Critical)
- **Details**:
  - **Victory Rewards**:
    - Guild splits 1% of enemy tulips (distributed by contribution)
    - Each participant receives Raid Badge NFT (cumulative collection)
    - Guild leaderboard +100 points
    - Auto-share prompt: "We raided [Enemy Guild]!" (one-tap X/TikTok)
  - **Defeat Penalties**:
    - Lose ante tulips (1 Rare+ per player, transferred to winners)
    - Consolation reward: 10% refund in guild credits
    - Motivational message: "Regroup for next raid!" (no shame spiral)
  - **Ante Requirement**: Each player must stake 1 Rare+ tulip to join raid

**FR-GW-007: Solo Empire Builder Mode**

- **Description**: AI phantom raiders prevent "ghost town" effect if <2K DAU
- **Priority**: P1 (High - Contingency Plan)
- **Details**:
  - **Activation Trigger**: If DAU <2K by Week 2, AI guilds auto-spawn
  - **AI Guild Names**: Procedurally generated ("The Windhandel Syndicate", "De Keizerskroon Cartel")
  - **AI Difficulty**: Rubber-banding (scales with player skill, win rate targets 50-55%)
  - **Reward Parity**: AI raids give identical rewards (no distinguishing marks)
  - **Seamless Transition**: When DAU >2K, AI raiders phase out (10% reduction/week)
  - **Disclosure**: No UI indication of AI opponents (feels like real players)

#### 6.1.2 Non-Functional Requirements

**NFR-GW-001: Performance**

- **Requirement**: Raid matchmaking completes in <10s @ 10K DAU
- **Measurement**: Average lobby formation time (P95 latency)
- **Target**: 95% of raids start within 10s of player joining queue

**NFR-GW-002: Scalability**

- **Requirement**: Support 1000 concurrent raids (10K DAU with 40% participation)
- **Infrastructure**: Immutable zkEVM handles transaction load (gasless = no network congestion)
- **Load Testing**: Simulate 10K concurrent users in staging environment

**NFR-GW-003: Reliability**

- **Requirement**: ZK proof generation succeeds 99.9% of the time
- **Fallback**: Hybrid optimistic mode activates automatically if proof fails
- **Monitoring**: Track proof generation failures, alert if >0.1% fail rate

**NFR-GW-004: Security**

- **Requirement**: Guild treasury withdrawals require 3-of-5 multi-sig approval
- **Audit**: Smart contract audit by OpenZeppelin or Trail of Bits
- **Bug Bounty**: $50K reward for critical vulnerabilities

**NFR-GW-005: Fairness**

- **Requirement**: RNG for raid outcomes is provably fair (ZK-VRF)
- **Transparency**: Players can verify ZK proofs on Immutable Explorer
- **Dispute Resolution**: 5-minute challenge period for suspicious results

#### 6.1.3 User Stories

**US-GW-001: Guild Master Creates Guild**

- **As a** Guild Master Gary
- **I want to** create a guild with custom name and emblem
- **So that** I can recruit members and compete in guild wars
- **Acceptance Criteria**:
  - Guild creation form accepts name (3-30 chars), description (max 500 chars), emblem (upload PNG)
  - ERC721 NFT minted gaslessly via Immutable Passport
  - Guild appears on public leaderboard within 5 minutes
  - Treasury wallet auto-generated (3-of-5 multi-sig)

**US-GW-002: Player Joins First Raid**

- **As a** Degen Dave (Day 5 player)
- **I want to** join my first guild raid when Mania Meter hits 80%
- **So that** I can experience guild PvP and earn raid rewards
- **Acceptance Criteria**:
  - Push notification when Mania Meter reaches 80%: "RAID MODE ACTIVE!"
  - Guild chat notification: "Need 1 more for 5v5 raid"
  - Lobby countdown shows 60s timer + current participants (4/5)
  - Raid starts automatically when 5th player joins
  - Ante requirement checked (1 Rare+ tulip in inventory)

**US-GW-003: Player Executes Raid Moves**

- **As a** Degen Dave (mid-raid)
- **I want to** select moves (steal, mutate, defend, boost) strategically
- **So that** my guild can win the raid and earn rewards
- **Acceptance Criteria**:
  - Phaser UI displays 4 move options with success rate tooltips
  - Drag-and-drop moves to target slots (enemy tulips or guild members)
  - 30-second turn timer displays countdown + "hurry up!" alert at 10s
  - Guild chat shows real-time move suggestions from teammates
  - Move confirmation button prevents accidental submissions

**US-GW-004: Guild Wins Raid**

- **As a** Guild Master Gary
- **I want to** see victory celebration screen with loot breakdown
- **So that** I feel rewarded and share the win on social media
- **Acceptance Criteria**:
  - Victory screen shows: +1% enemy tulips split, Raid Badge NFT earned, +100 leaderboard points
  - Auto-share prompt: "We raided [Enemy Guild]!" with one-tap X/TikTok sharing
  - Guild chat celebration animation (confetti, trophy icon)
  - Guild treasury updated within 30s (tulips deposited)

**US-GW-005: Player Loses Raid (Graceful Failure)**

- **As a** Degen Dave (defeated)
- **I want to** receive consolation rewards and encouragement
- **So that** I'm motivated to try again instead of rage-quitting
- **Acceptance Criteria**:
  - Defeat screen shows: "Better luck next time!" + 10% ante refund in guild credits
  - Next raid countdown: "Regroup in 2 hours—Mania Meter still at 85%!"
  - Guild chat motivational message: "We'll get them next time!"
  - No public humiliation (defeat doesn't show on profile)

#### 6.1.4 Edge Cases & Error Handling

**EC-GW-001: Player Disconnects Mid-Raid**

- **Scenario**: Player loses internet connection during raid battle
- **Handling**:
  - Raid continues with AI takeover for disconnected player (30s timeout)
  - Player can rejoin if reconnects within 2 minutes
  - Rewards/penalties still apply (no free pass for disconnects)

**EC-GW-002: Insufficient Players for Matchmaking**

- **Scenario**: <4 players available for 2v2 raid during low-traffic hours
- **Handling**:
  - AI phantom raiders fill empty slots (seamless, no UI distinction)
  - If DAU >2K, matchmaking timeout after 5 minutes → return to lobby
  - No penalty for failed matchmaking

**EC-GW-003: ZK Proof Generation Fails**

- **Scenario**: Client-side proof fails due to WebGPU incompatibility
- **Handling**:
  - Hybrid optimistic mode activates automatically
  - Moves execute immediately, proof generated async within 30s
  - If async proof also fails → escalate to support, manual review

**EC-GW-004: Guild Treasury Insufficient for Ante**

- **Scenario**: Player tries to join raid but doesn't own 1 Rare+ tulip
- **Handling**:
  - Popup: "You need at least 1 Rare tulip to join raids"
  - Suggestion: "Breed your tulips or borrow from guild lending pool"
  - Link to guild treasury: "Request loan from guild (0.5% daily interest)"

**EC-GW-005: Mania Meter Crash During Raid**

- **Scenario**: Meter hits 95% crash event while raid is in progress
- **Handling**:
  - Active raids complete normally (no mid-raid interruption)
  - New raids disabled for 24h (recovery period notification)
  - Crash event animation plays after raid results screen

#### 6.1.5 Dependencies & Integrations

**DEP-GW-001: Immutable zkEVM Integration**

- **Dependency**: Gasless transactions via Immutable Passport
- **Risk**: Passport API downtime (99.9% SLA)
- **Mitigation**: Fallback to MetaMask if Passport unavailable

**DEP-GW-002: ZK Proving Infrastructure**

- **Dependency**: circom/halo2 circuits, WebGPU client-side proving
- **Risk**: WebGPU not supported on 20% of mobile devices
- **Mitigation**: Hybrid optimistic mode for incompatible devices

**DEP-GW-003: Phaser 3 Game Engine**

- **Dependency**: Canvas rendering for raid UI
- **Risk**: Performance issues on low-end Android devices
- **Mitigation**: Degraded graphics mode (disable particle effects)

**DEP-GW-004: Smart Contract Audits**

- **Dependency**: Guild treasury multi-sig, raid settlement contracts
- **Timeline**: 4-6 weeks for audit completion
- **Blocker**: Cannot launch without audit approval

---

### 6.2 Viral Share Mechanics (Growth Engine)

**Strategic Purpose**: Engineer K-factor >1.2 through 5 share-forcing mechanics that turn every player into an acquisition channel. Target 35K shares/day @ 10K DAU (3.5 shares/player on average).

**Business Impact**:

- **Growth Driver**: 1.2× K-factor = 20% organic DAU growth/week (no paid ads)
- **Clone Defense**: Viral mechanics compound with network effects (clone needs both)
- **Mainstream Crossover**: TikTok historical mini-docs attract non-crypto audience

#### 6.2.1 Functional Requirements

**FR-VS-001: One-Tap GIF Sharing**

- **Description**: Convert game moments to shareable GIFs with one tap
- **Priority**: P0 (Critical)
- **Details**:
  - **Trigger Points**: Bloom reveals (Rare+), raid victories, legendary breeds
  - **GIF Generation**: Canvas capture via Phaser → WebGPU encoding → 5-10s looping GIF
  - **File Size**: <5MB (optimized for mobile networks)
  - **Branding**: MyTulipMania watermark (bottom-right, 10% opacity)
  - **Share Targets**: X (Twitter), TikTok, Instagram Stories, Discord
  - **Referral Link**: Auto-appended tracking parameter (?ref=player_id)
  - **Performance**: GIF generation completes in <3s (background process)

**FR-VS-002: Historical Mini-Documentaries**

- **Description**: 30-60s educational videos about 1637 Tulip Mania
- **Priority**: P1 (High)
- **Details**:
  - **Total Count**: 50 mini-docs (unlocked via gameplay)
  - **Format**: Vertical video (1080×1920), TikTok-optimized
  - **Content Mix**:
    - 20 videos: Historical facts (e.g., "Semper Augustus traded for a house")
    - 15 videos: Economic concepts (e.g., "What is windhandel futures trading?")
    - 10 videos: Pop-culture parallels (e.g., "Tulip Mania = Bitcoin 2017?")
    - 5 videos: Satire sketches (e.g., "Amsterdam tavern owners as DeFi degens")
  - **Unlock Mechanism**:
    - Breeding specific tulip combinations unlocks related mini-docs
    - Collection progress: 0/50 displayed on profile
  - **Share Prompt**: Auto-prompt after watching: "Share this to X/TikTok?" (one-tap)
  - **Educational Value**: Historical accuracy verified by economics professors

**FR-VS-003: Raid Clip Generation**

- **Description**: Auto-record raid highlights with cinematic replays
- **Priority**: P1 (High)
- **Details**:
  - **Recording**: Capture last 30s of raid (winning move sequence)
  - **Editing**: Auto-highlight dramatic moments (steal success, clutch defend)
  - **Soundtrack**: Baroque music overlay (public domain, historical accuracy)
  - **Caption Generation**: AI-generated captions ("We raided @whale for $10K tulips!")
  - **File Format**: MP4 video (10-30s, <10MB)
  - **Share Prompt**: Immediate post-raid: "Share your victory?" (60%+ acceptance rate)
  - **Leaderboard Integration**: Top 10 raids of the week featured on homepage

**FR-VS-004: Invite Rewards System**

- **Description**: Incentivize player referrals with guaranteed Rare seed
- **Priority**: P0 (Critical)
- **Details**:
  - **Referral Tracking**: Unique referral links (?ref=player_id)
  - **Reward Tiers**:
    - **1 friend joins**: Uncommon seed
    - **3 friends join**: Rare seed
    - **10 friends join**: Epic seed
    - **50 friends join**: Legendary seed (Semper Augustus)
  - **Verification**: Friend must plant first tulip (prevents bot farming)
  - **Attribution Window**: 30 days from click to sign-up
  - **Reward Delivery**: Auto-airdrop within 24h of friend verification
  - **Leaderboard**: Top 100 referrers displayed publicly (status flex)

**FR-VS-005: Garden Profile Sharing**

- **Description**: Shareable garden profile cards with collection stats
- **Priority**: P2 (Medium)
- **Details**:
  - **Profile Card Design**: Garden screenshot + stats overlay
    - Total tulips planted (lifetime)
    - Rarest tulip owned (image + name)
    - Guild affiliation (logo + rank)
    - Collection progress (60/60 varieties, 30/50 mini-docs, 15/20 badges)
  - **Generation**: Auto-generate PNG (1200×630, optimized for social previews)
  - **Share Targets**: X, Instagram, Discord, Reddit
  - **CTA**: "Plant your own tulip garden—100% free!" + referral link
  - **Vanity Metrics**: Profile views displayed (social proof)

#### 6.2.2 Non-Functional Requirements

**NFR-VS-001: Performance**

- **Requirement**: GIF generation completes in <3s on average mobile devices
- **Optimization**: WebGPU hardware acceleration, aggressive frame sampling
- **Fallback**: If generation >5s, fallback to static screenshot

**NFR-VS-002: Virality**

- **Requirement**: 35K shares/day @ 10K DAU (3.5 shares/player average)
- **Measurement**: Track share button clicks + social media impressions
- **Target**: K-factor >1.2 (each player brings >1.2 new players)

**NFR-VS-003: Content Moderation**

- **Requirement**: Historical mini-docs reviewed by subject matter experts
- **Accuracy**: No blatant historical inaccuracies (satire is fine, lies are not)
- **Attribution**: Cite sources for historical claims (Wikipedia, university papers)

**NFR-VS-004: Brand Safety**

- **Requirement**: Watermark on all shared content (prevent uncredited viral spread)
- **Trademark**: "MyTulipMania" registered trademark in US/EU
- **DMCA**: Takedown policy for unauthorized use

#### 6.2.3 User Stories

**US-VS-001: Player Shares First Bloom Reveal**

- **As a** Degen Dave (Day 1)
- **I want to** share my first Rare tulip bloom on X
- **So that** I can flex to my crypto friends and invite them to play
- **Acceptance Criteria**:
  - Bloom reveal triggers auto-share prompt: "Share this Rare bloom?"
  - One-tap GIF generation (canvas capture → encoding → share modal)
  - GIF includes: Tulip animation, rarity label, MyTulipMania watermark, referral link
  - Share to X auto-populates caption: "Just bloomed a Rare tulip in MyTulipMania! 🌷"
  - GIF generation completes in <3s (no loading spinner torture)

**US-VS-002: History Hannah Discovers Mini-Docs**

- **As a** History Hannah (Day 3)
- **I want to** unlock a mini-doc about Semper Augustus tulip
- **So that** I can learn about Tulip Mania and share clever content
- **Acceptance Criteria**:
  - Breeding Rare × Rare unlocks mini-doc: "The $250K Tulip: Semper Augustus"
  - Video plays in-app (30s, vertical format, captions enabled)
  - Share prompt after video: "Share to TikTok?" (one-tap)
  - TikTok auto-populates with referral link in bio + hashtags (#TulipMania #History #Economics)
  - Collection progress updates: "30/50 mini-docs unlocked"

**US-VS-003: Guild Master Shares Raid Victory**

- **As a** Guild Master Gary (post-raid)
- **I want to** share our guild's epic raid victory on X
- **So that** I can recruit new members and flex on competing guilds
- **Acceptance Criteria**:
  - Raid victory triggers auto-clip generation (last 30s highlights)
  - Video includes: Winning moves, enemy guild name, loot breakdown, guild logo
  - AI-generated caption: "We just raided @CompetitorGuild for 50 tulips! Join us: [link]"
  - Baroque music overlay (public domain, dramatic flair)
  - Video posts to X with guild tag + referral link

**US-VS-004: New Player Claims Invite Reward**

- **As a** Degen Dave (Day 2)
- **I want to** invite 3 friends and claim my Rare seed reward
- **So that** I can accelerate my collection progress
- **Acceptance Criteria**:
  - Profile shows: "2/3 friends joined—1 more for Rare seed!"
  - Referral link displayed prominently: "Copy link" button
  - When 3rd friend plants first tulip → push notification: "Rare seed unlocked!"
  - Reward auto-airdropped to inventory within 24h
  - Friend must plant tulip (not just create account) to count

**US-VS-005: Player Shares Garden Profile**

- **As a** History Hannah (Week 2)
- **I want to** share my garden profile card on Instagram Stories
- **So that** my friends can see my collection progress
- **Acceptance Criteria**:
  - Profile page has "Share Garden" button
  - Auto-generates PNG: Garden screenshot + stats overlay (tulips planted, rarest tulip, guild, collection %)
  - Instagram Stories one-tap share (optimized 1080×1920)
  - CTA on image: "Plant your own garden—100% free!" + referral link
  - Profile views counter increments (vanity metric displayed)

#### 6.2.4 Edge Cases & Error Handling

**EC-VS-001: GIF Generation Fails**

- **Scenario**: Canvas capture fails due to WebGPU incompatibility
- **Handling**:
  - Fallback to static screenshot (PNG instead of GIF)
  - Share prompt still appears (don't block viral loop)
  - Log error for analytics (track failure rate)

**EC-VS-002: Referral Link Tracking Lost**

- **Scenario**: Friend clicks referral link but attribution cookie expires before sign-up
- **Handling**:
  - Manual attribution: New player enters referrer username during onboarding
  - Support ticket system for disputed referrals
  - Rewards credited within 48h of manual review

**EC-VS-003: Mini-Doc Video Fails to Load**

- **Scenario**: Player has poor internet connection, video won't stream
- **Handling**:
  - Show static thumbnail + "Watch Later" button (save to watch queue)
  - Offline mode: Download mini-docs for offline viewing
  - Collection progress still counts (unlock doesn't require watching)

**EC-VS-004: Share Button Blocked by Ad Blocker**

- **Scenario**: Browser extension blocks social media share integrations
- **Handling**:
  - Fallback to "Copy Link" button (manual sharing)
  - Instruction tooltip: "Paste this link on X/TikTok/Instagram"
  - Track fallback usage (optimize for ad-blocker-heavy audiences)

#### 6.2.5 Dependencies & Integrations

**DEP-VS-001: Social Media APIs**

- **Dependency**: X API, TikTok API, Instagram Graph API
- **Risk**: API rate limits, authentication changes
- **Mitigation**: Fallback to Web Share API (browser-native sharing)

**DEP-VS-002: Video Encoding Pipeline**

- **Dependency**: FFmpeg.js for client-side video encoding
- **Risk**: Performance issues on low-end devices
- **Mitigation**: Server-side encoding fallback (costs $0.01/video)

**DEP-VS-003: Content Delivery Network**

- **Dependency**: CDN for hosting mini-doc videos + shared GIFs
- **Infrastructure**: Cloudflare or AWS CloudFront
- **Bandwidth**: 50GB/day @ 10K DAU (1TB/month = $50/mo)

---

### 6.3 Historical Satire Layer (Cultural Moat)

**Strategic Purpose**: Own the "1637 Tulip Mania" narrative before competitors arrive. First-mover advantage on cultural positioning = Vitalik-retweet-worthy, university partnerships, Ken Burns-level educational credibility.

**Business Impact**:

- **Mainstream Appeal**: 20% non-crypto users via TikTok educational content
- **Brand Defensibility**: Cannot clone historical IP (we define "Tulip Mania game")
- **Partnership Revenue**: University partnerships ($10K-$50K curriculum integrations)

#### 6.3.1 Functional Requirements

**FR-HS-001: Historical Fact Popups**

- **Description**: Contextual historical facts appear during gameplay moments
- **Priority**: P1 (High)
- **Details**:
  - **Trigger Points**: After bloom reveals, during auction listings, post-raid victories
  - **Content Examples**:
    - "In 1637, a single Semper Augustus bulb traded for a house in Amsterdam"
    - "Windhandel was the first futures market—traders sold tulips they didn't own yet"
    - "The crash lasted only 3 days, but the meme lasted 400 years"
  - **Tone**: 70% satire, 30% education (playful but accurate)
  - **Length**: 1-2 sentences (mobile-friendly, scannable)
  - **Frequency**: Max 3 popups/session (avoid annoyance)
  - **Dismissal**: Auto-dismiss after 10s or manual close button

**FR-HS-002: Collegie (Dutch Auction House) Theming**

- **Description**: Auction interface styled as 1637 Amsterdam tavern
- **Priority**: P2 (Medium)
- **Details**:
  - **Visual Design**: Wooden tables, candlelight, parchment UI elements
  - **NPC Characters**: Dutch merchants (illustrated, no voice acting in MVP)
  - **Auction Announcements**: Period-appropriate language ("Lot 42: A fine Admiral Liefkens!")
  - **Sound Design**: Tavern ambience (low murmur, clinking glasses)
  - **Historical Accuracy**: Verified by Dutch Golden Age historians

**FR-HS-003: Tulip Naming & Lore**

- **Description**: All tulip varieties use authentic 1637 Dutch names
- **Priority**: P1 (High)
- **Details**:
  - **Legendary Tulips**:
    - Semper Augustus (red/white streaks, most valuable)
    - Viceroy (purple/white streaks, second-tier)
  - **Epic Tulips**:
    - Admiral Liefkens, Admirael de Man, General Bol
  - **Rare Tulips**:
    - Bizarden (yellow background + red/brown), Violetten (white + purple)
  - **Common/Uncommon**:
    - Generic Dutch names (e.g., "Amsterdam Red", "Utrecht Yellow")
  - **Lore Tooltips**: Each tulip has historical description (50-100 words)

**FR-HS-004: Mania Meter Historical Parallels**

- **Description**: UI draws parallels between 1637 bubble and crypto bubbles
- **Priority**: P2 (Medium)
- **Details**:
  - **Meter Labels**:
    - 0-20%: "Accumulation" (like Bitcoin 2018 bear market)
    - 20-60%: "Steady Growth" (like 2020 DeFi summer)
    - 60-80%: "Irrational Exuberance" (like 2021 NFT mania)
    - 80-95%: "Peak Euphoria" (like Bitcoin $69K Nov 2021)
    - 95%+: "Imminent Crash" (like Terra/Luna May 2022)
  - **Historical Quotes**: Rotating quotes from 1637 documents
    - "A fool and his money are soon parted" - Dutch proverb
    - "The trade in tulips has become a disease" - Anonymous pamphlet
  - **Pop-Culture References**: BTC/ETH/DOGE chart overlays (satire)

**FR-HS-005: Season Themes (Multi-Bubble Roadmap)**

- **Description**: Each season explores a different historical bubble
- **Priority**: P3 (Nice-to-Have - Post-Launch)
- **Details**:
  - **Season 1**: Dutch Tulip Mania (1637)
  - **Season 2**: South Sea Bubble (1720 England)
  - **Season 3**: Railway Mania (1840s Britain)
  - **Season 4**: Dot-Com Bubble (1999 USA)
  - **Season 5**: Housing Crisis (2008 USA)
  - **Season 6**: Crypto Mania (2021 Global)
  - **Educational Arc**: Players "relive" 400 years of speculation

#### 6.3.2 Non-Functional Requirements

**NFR-HS-001: Historical Accuracy**

- **Requirement**: 95%+ factual accuracy (satire tone, but facts correct)
- **Verification**: 2 historians review all content (paid consultants)
- **Attribution**: Cite sources for historical claims

**NFR-HS-002: Educational Value**

- **Requirement**: Players can pass a 10-question Tulip Mania quiz after 30 days
- **Measurement**: Optional quiz unlocks "Historian" badge
- **Target**: 60%+ quiz pass rate

**NFR-HS-003: Brand Positioning**

- **Requirement**: "MyTulipMania" becomes synonymous with Tulip Mania gaming
- **SEO**: Rank #1 for "tulip mania game" on Google within 90 days
- **Trademark**: Registered trademark in US/EU (legal protection)

#### 6.3.3 User Stories

**US-HS-001: History Hannah Learns About Semper Augustus**

- **As a** History Hannah (Day 5)
- **I want to** read historical context about Semper Augustus tulip
- **So that** I can understand why it's legendary
- **Acceptance Criteria**:
  - Breeding Rare × Rare unlocks Semper Augustus lore popup
  - Popup shows: Historical image, Dutch Golden Age context, modern equivalent ($500K in 2025 dollars)
  - "Learn More" button links to 30s mini-doc about Semper Augustus
  - Lore stored in "Collection" tab for re-reading

**US-HS-002: Degen Dave Sees Crypto Parallels**

- **As a** Degen Dave (during Mania peak)
- **I want to** see how Mania Meter parallels Bitcoin 2021
- **So that** I understand the satire and feel clever
- **Acceptance Criteria**:
  - Mania Meter at 90% shows tooltip: "Peak Euphoria (like Bitcoin $69K Nov 2021)"
  - Historical quote appears: "The trade in tulips has become a disease" (1637)
  - Pop-culture reference: Bitcoin chart overlay (2020-2021 bull run)
  - Degen Dave laughs, screenshots, shares to X with "lol too real"

**US-HS-003: University Professor Uses Game for Teaching**

- **As a** economics professor
- **I want to** assign MyTulipMania as homework
- **So that** students learn about speculative bubbles through play
- **Acceptance Criteria**:
  - "Educator Mode" available (classroom accounts, no trading required)
  - Students complete 30-day season, take quiz, earn certificate
  - Professor dashboard shows: Student engagement, quiz scores, time spent
  - University partnership materials: Lesson plans, discussion guides

**US-HS-004: Player Explores Collegie Auction House**

- **As a** History Hannah (Day 10)
- **I want to** explore the Collegie auction house atmosphere
- **So that** I feel immersed in 1637 Amsterdam
- **Acceptance Criteria**:
  - Collegie UI styled as Dutch tavern (wooden tables, candlelight, parchment)
  - NPC merchant character appears: "Goede dag! Looking to trade tulips?"
  - Auction listings use period language: "Lot 42: A fine Admiral Liefkens, starting bid 50 guilders"
  - Tavern ambience sound (low murmur, optional mute button)

#### 6.3.4 Edge Cases & Error Handling

**EC-HS-001: Historical Inaccuracy Reported**

- **Scenario**: Player reports factual error in mini-doc
- **Handling**:
  - Submit via "Report Error" button (includes citation field)
  - Historian reviews within 48h
  - If error confirmed: Correct content, credit reporter publicly
  - If error disputed: Provide sources, explain nuance

**EC-HS-002: Satire Misunderstood as Financial Advice**

- **Scenario**: Player thinks game is endorsing tulip speculation
- **Handling**:
  - Legal disclaimer on homepage: "This is satire, not financial advice"
  - Pop-culture references clearly labeled as jokes
  - Educational content separates historical facts from modern parallels

**EC-HS-003: Offensive Historical Content**

- **Scenario**: 1637 Dutch society had problematic elements (colonialism, slavery)
- **Handling**:
  - Focus content on economic bubble mechanics (avoid colonial context)
  - If historical realities mentioned: Provide educational framing (not glorification)
  - Content moderation: Historians flag any insensitive portrayals

#### 6.3.5 Dependencies & Integrations

**DEP-HS-001: Historian Consultants**

- **Dependency**: 2 historians (Dutch Golden Age specialists)
- **Cost**: $5K retainer (content review, fact-checking)
- **Timeline**: 2-week review cycle for all content

**DEP-HS-002: Art Assets (Historical Illustrations)**

- **Dependency**: Public domain Dutch Golden Age paintings
- **Sources**: Rijksmuseum API (free, open-access)
- **Licensing**: Verify all images are public domain (400+ years old)

**DEP-HS-003: Educational Partnerships**

- **Dependency**: University economics departments (curriculum integration)
- **Timeline**: 6-12 months for formal partnership approvals
- **Revenue**: $10K-$50K/partnership (sponsored content, research grants)

---

### 6.4 ZK Bubble Raids (Technical Moat)

**Strategic Purpose**: Use zero-knowledge proofs to create provably fair PvP raids that competitors cannot replicate without 6-12 months dev time + $150K investment. Technical moat complements network moat (guild wars).

**Business Impact**:

- **Clone Barrier**: Requires custom ZK circuits, cryptography expertise, audit costs
- **Trust Premium**: Provably fair RNG eliminates server manipulation concerns
- **Immutable Exclusive**: zkEVM integration makes multi-chain ports expensive

#### 6.4.1 Functional Requirements

**FR-ZK-001: ZK-VRF for Bloom Reveals**

- **Description**: Zero-knowledge verifiable random function generates tulip rarity
- **Priority**: P1 (High)
- **Details**:
  - **Input**: Player's seed NFT ID + block timestamp + Immutable VRF seed
  - **Output**: Rarity value (0-100,000, mapped to rarity tiers)
  - **Proving**: Client-side proof that output is correctly derived from input
  - **Verification**: Anyone can verify proof on Immutable Explorer
  - **Latency**: Proof generation <1s (bloom reveal must feel instant)
  - **Security**: Cannot manipulate RNG by retrying or timing attacks

**FR-ZK-002: Raid Move Validation Proofs**

- **Description**: ZK proof that all raid moves follow game rules
- **Priority**: P0 (Critical)
- **Details**:
  - **Input**: Batched moves from all players (10-20 moves per player)
  - **Proof**: All moves are valid (no cheating, no impossible sequences)
  - **Constraints**:
    - Steal targets must exist (cannot steal from empty inventory)
    - Defend must be used before steal/mutate lands (timing)
    - Boost stacks correctly (+10% per boost, max 5 stacks)
  - **Circuits**: circom DSL for move validation logic
  - **Proving Time**: <3s for 200 total moves (10v10 raid)
  - **Settlement**: Smart contract verifies proof on-chain, distributes rewards

**FR-ZK-003: Hybrid Optimistic Fallback**

- **Description**: If ZK proving fails or exceeds 5s, use optimistic execution
- **Priority**: P0 (Critical - User Experience Safeguard)
- **Details**:
  - **Trigger**: Client-side proof generation >5s OR proof fails entirely
  - **Optimistic Execution**: Moves execute immediately (results shown to players)
  - **Async Proving**: ZK proof generated in background (within 30s)
  - **Dispute Period**: 5 minutes to challenge invalid moves
  - **Challenge Process**:
    - Any player can submit counter-proof (invalid move detected)
    - Smart contract adjudicates (verify both proofs)
    - If challenge succeeds: Rewards reversed, cheater penalized
  - **Fraud Detection**: Monitor dispute rate (<0.1% expected)

**FR-ZK-004: On-Chain Raid Settlement**

- **Description**: Smart contract verifies ZK proof and distributes rewards
- **Priority**: P0 (Critical)
- **Details**:
  - **Contract Functions**:
    - `submitRaidProof(bytes proof, RaidResult result)`: Submit ZK proof + results
    - `verifyProof(bytes proof)`: Verify proof validity (on-chain)
    - `distributeRewards(address[] winners, uint256[] amounts)`: Transfer tulip NFTs
  - **Gas Costs**: $0 (Immutable gasless transactions)
  - **Latency**: <10s from proof submission to reward distribution
  - **Transparency**: All raids viewable on Immutable Explorer (public ledger)

**FR-ZK-005: Client-Side Proving (WebGPU)**

- **Description**: ZK proofs generated in browser using WebGPU acceleration
- **Priority**: P1 (High - Performance Critical)
- **Details**:
  - **Hardware**: Leverages GPU for proof generation (10-50× faster than CPU)
  - **Compatibility**: Fallback to WebAssembly if WebGPU unavailable
  - **Library**: snarkjs or halo2-wasm (battle-tested, audited)
  - **Optimization**: Precompute witness generation (reduce proving time)
  - **Mobile Support**: Test on iPhone 12+ and Samsung Galaxy S21+ (mid-tier devices)

**FR-ZK-006: Proof Verification UI**

- **Description**: Players can inspect ZK proofs for any raid
- **Priority**: P2 (Medium - Trust Building)
- **Details**:
  - **Access**: Click "Verify Proof" on raid results screen
  - **Display**:
    - Proof hash (link to Immutable Explorer)
    - Input parameters (player moves, RNG seeds)
    - Output parameters (raid winner, reward distribution)
  - **Educational Tooltip**: "What is a ZK proof?" explainer (50 words)
  - **Target Audience**: Crypto-natives who care about provability (10-20% of players)

#### 6.4.2 Non-Functional Requirements

**NFR-ZK-001: Proving Performance**

- **Requirement**: ZK proof generation <3s on average mobile devices
- **Measurement**: P95 latency across 10K DAU
- **Target**: 95% of proofs generated in <3s, 99% in <5s

**NFR-ZK-002: Security**

- **Requirement**: Zero successful proof forgeries (provable security)
- **Audit**: ZK circuits audited by Trail of Bits or Least Authority
- **Bug Bounty**: $100K reward for proof forgery exploit

**NFR-ZK-003: Transparency**

- **Requirement**: 100% of raids verifiable on-chain (public ledger)
- **Monitoring**: Alert if any raid settles without valid proof
- **Fraud Rate**: <0.01% of raids disputed (target for healthy system)

**NFR-ZK-004: Fallback Reliability**

- **Requirement**: Hybrid optimistic mode activates in <5s if proving fails
- **User Experience**: No player sees "proof failed" error (seamless fallback)
- **Monitoring**: Track fallback activation rate (<1% expected)

#### 6.4.3 User Stories

**US-ZK-001: Player Verifies Bloom Reveal is Fair**

- **As a** Degen Dave (skeptical of RNG)
- **I want to** verify my tulip bloom was provably fair
- **So that** I trust the game isn't rigged
- **Acceptance Criteria**:
  - Bloom reveal screen has "Verify Proof" button
  - Clicking opens modal with: Proof hash, input parameters (seed ID, block timestamp), output (rarity value)
  - Link to Immutable Explorer: "View on blockchain"
  - Educational tooltip: "This proof guarantees no one (not even us) can manipulate RNG"

**US-ZK-002: Player Experiences Fast Raid Settlement**

- **As a** Degen Dave (post-raid)
- **I want** raid results to appear in <5s
- **So that** I don't rage-quit from waiting
- **Acceptance Criteria**:
  - Raid battle ends → "Generating proof..." progress bar (0-3s)
  - Proof generation completes → "Submitting to blockchain..." (0-2s)
  - Results screen appears: Victory/defeat + rewards (total <5s)
  - If proving >5s: Hybrid optimistic mode activates (results show immediately, proof async)

**US-ZK-003: Player Challenges Suspicious Raid Outcome**

- **As a** Guild Master Gary (sees suspicious raid loss)
- **I want to** dispute the raid results and request proof audit
- **So that** I can ensure fairness
- **Acceptance Criteria**:
  - Raid results screen has "Dispute Result" button (5-minute window)
  - Dispute form: "Describe suspicious behavior" (text field)
  - Smart contract verifies proof on-chain (automated)
  - If proof valid: Dispute rejected, no penalty
  - If proof invalid: Rewards reversed, opponent penalized (rare edge case)

**US-ZK-004: Player Sees Hybrid Optimistic Fallback**

- **As a** Degen Dave (on slow mobile device)
- **I want** raid results even if ZK proving is slow
- **So that** I don't get stuck waiting
- **Acceptance Criteria**:
  - Raid battle ends → proof generation starts
  - If >5s: Results screen appears immediately (optimistic execution)
  - Notification: "Finalizing results... (verifying proof)"
  - Proof completes within 30s: "Results confirmed ✓"
  - If proof fails: Rare case, escalates to support (player sees "Under review")

#### 6.4.4 Edge Cases & Error Handling

**EC-ZK-001: WebGPU Not Supported**

- **Scenario**: Player's device doesn't support WebGPU (20% of mobile users)
- **Handling**:
  - Fallback to WebAssembly proving (3-5× slower, but works)
  - If WASM also slow (>10s): Hybrid optimistic mode activates
  - Log device info for analytics (optimize circuit for common devices)

**EC-ZK-002: Proof Generation Fails Entirely**

- **Scenario**: Circuit error, malformed input, or memory exhaustion
- **Handling**:
  - Hybrid optimistic mode activates immediately
  - Background retry (3 attempts within 30s)
  - If all retries fail: Escalate to manual review (support ticket)
  - Player sees: "Raid results under verification—check back in 5 min"

**EC-ZK-003: Dispute Period Abuse**

- **Scenario**: Player disputes every raid loss hoping for false positive
- **Handling**:
  - Rate limit: Max 3 disputes/week per player
  - If dispute rejected 5× → warning message
  - If dispute rejected 10× → 24h dispute cooldown (prevents spam)

**EC-ZK-004: Smart Contract Verification Fails**

- **Scenario**: On-chain proof verification fails due to gas limit or contract bug
- **Handling**:
  - Automatic retry with higher gas limit (Immutable gasless = no cost)
  - If retry fails: Escalate to dev team, pause raid settlement
  - Players notified: "Raid results delayed—investigating issue"
  - Emergency fix deployed within 2 hours (critical bug SLA)

#### 6.4.5 Dependencies & Integrations

**DEP-ZK-001: ZK Circuit Development**

- **Dependency**: circom/halo2 circuits for bloom RNG + raid validation
- **Timeline**: 8-12 weeks development + 4-6 weeks audit
- **Cost**: $150K (dev + audit)
- **Blocker**: Cannot launch without audit approval

**DEP-ZK-002: WebGPU Browser Support**

- **Dependency**: Chrome 113+, Safari 17+, Firefox 121+
- **Current Support**: 60-70% of mobile devices
- **Fallback**: WebAssembly for incompatible devices

**DEP-ZK-003: Immutable zkEVM Integration**

- **Dependency**: Immutable Passport for proof submission, smart contracts for verification
- **Risk**: Immutable API downtime (99.9% SLA)
- **Mitigation**: Retry logic, fallback to MetaMask if Passport unavailable

**DEP-ZK-004: Audit Firms**

- **Dependency**: Trail of Bits or Least Authority for ZK circuit audit
- **Timeline**: 4-6 weeks (must book 3 months in advance)
- **Cost**: $80K-$120K depending on circuit complexity

---

## 7. Technical Architecture

This section provides the complete system architecture for MyTulipMania, including infrastructure, technology stack, blockchain integration, and security design.

---

### 7.1 System Architecture Overview

**High-Level Architecture Diagram**:

```
┌───────────────────────────────────────────────────────────────────────┐
│                         CLIENT LAYER (Browser/Mobile)                  │
│  ┌─────────────────┐  ┌──────────────────┐  ┌────────────────────┐   │
│  │  Phaser 3 Game  │  │  React UI Layer  │  │  Immutable Passport│   │
│  │  Engine (Canvas)│  │  (Menus/Profile) │  │  (Wallet/Auth)     │   │
│  └────────┬────────┘  └────────┬─────────┘  └─────────┬──────────┘   │
│           │                     │                       │              │
│           └─────────────────────┴───────────────────────┘              │
│                                 │                                      │
└─────────────────────────────────┼──────────────────────────────────────┘
                                  │
                                  ▼
┌───────────────────────────────────────────────────────────────────────┐
│                      APPLICATION LAYER (Vercel)                        │
│  ┌─────────────────────────────────────────────────────────────────┐  │
│  │  Next.js API Routes (Backend-for-Frontend)                      │  │
│  │  ├─ /api/game/state → Player data aggregation                  │  │
│  │  ├─ /api/social/share → GIF generation + social media API      │  │
│  │  ├─ /api/analytics → Event tracking (PostHog/Mixpanel)         │  │
│  │  └─ /api/content → Historical mini-docs CDN routing            │  │
│  └─────────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────┼──────────────────────────────────────┘
                                  │
                                  ▼
┌───────────────────────────────────────────────────────────────────────┐
│                    BLOCKCHAIN LAYER (Immutable zkEVM)                  │
│  ┌────────────────┐  ┌─────────────────┐  ┌─────────────────────┐    │
│  │ Smart Contracts│  │  Immutable APIs │  │  zkEVM RPC Nodes    │    │
│  │ ├─ TulipNFT    │  │ ├─ Orderbook   │  │  (JSON-RPC)         │    │
│  │ ├─ GuildTreasury│  │ ├─ Passport    │  │  ├─ eth_call       │    │
│  │ ├─ RaidSettlement│  │ └─ Marketplace │  │  ├─ eth_sendTx     │    │
│  │ └─ ZKVerifier   │  │                 │  │  └─ zkevm_verify   │    │
│  └────────────────┘  └─────────────────┘  └─────────────────────┘    │
└─────────────────────────────────┼──────────────────────────────────────┘
                                  │
                                  ▼
┌───────────────────────────────────────────────────────────────────────┐
│                      ZK PROVING LAYER (Client-Side)                    │
│  ┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐    │
│  │  circom Circuits │  │  WebGPU Prover   │  │  snarkjs Library │    │
│  │  ├─ bloom_rng.circom│  │  (GPU Accel)  │  │  (Proof Gen)     │    │
│  │  └─ raid_validate  │  │  Fallback:     │  │  Fallback:       │    │
│  │     .circom        │  │  WebAssembly   │  │  Server-Side     │    │
│  └──────────────────┘  └──────────────────┘  └──────────────────┘    │
└───────────────────────────────────────────────────────────────────────┘
                                  │
                                  ▼
┌───────────────────────────────────────────────────────────────────────┐
│                     DATA/STORAGE LAYER                                 │
│  ┌────────────────┐  ┌─────────────────┐  ┌─────────────────────┐    │
│  │  PostgreSQL    │  │  Redis Cache    │  │  CDN (Cloudflare)   │    │
│  │  (Player Data) │  │  (Mania Meter,  │  │  ├─ Mini-doc videos │    │
│  │  ├─ Profiles   │  │   Leaderboards) │  │  ├─ Shared GIFs     │    │
│  │  ├─ Guild State│  │                 │  │  └─ Game assets     │    │
│  │  └─ Analytics  │  │                 │  │                      │    │
│  └────────────────┘  └─────────────────┘  └─────────────────────┘    │
└───────────────────────────────────────────────────────────────────────┘
```

**Architecture Principles**:

1. **Client-Heavy Design**: Phaser game logic runs browser-side (reduce server costs, enable offline progression)
2. **Blockchain-Native**: All ownership/trading on Immutable zkEVM (gasless = no UX friction)
3. **ZK-Proving Client-Side**: WebGPU proving eliminates server trust (provably fair RNG)
4. **Serverless Backend**: Next.js API routes on Vercel (auto-scaling, $0 at low traffic)
5. **CDN-First Content**: Static assets on Cloudflare (fast global delivery, low bandwidth costs)

---

### 7.2 Technology Stack

#### 7.2.1 Frontend Stack

**Game Engine: Phaser 3.60+**

- **Purpose**: Canvas-based game rendering, animations, particle effects
- **Why Phaser**:
  - Battle-tested (100K+ production games)
  - Mobile-optimized (60 FPS on iPhone 12+)
  - WebGL + Canvas API (hardware acceleration)
  - Active community (plugins for everything)
- **Key Plugins**:
  - `phaser-gif-plugin` (canvas capture for viral sharing)
  - `phaser-particle-emitter` (bloom reveal effects)
  - `phaser-input-handler` (touch + mouse unified)

**UI Framework: React 18 + Next.js 14**

- **Purpose**: Menus, profile pages, leaderboards, social features
- **Why React/Next.js**:
  - SEO-friendly (server-side rendering for landing page)
  - API routes (backend-for-frontend without separate server)
  - Vercel-optimized (zero-config deployment)
  - TypeScript support (type safety for blockchain interactions)
- **Component Library**: Tailwind CSS 3.x (rapid prototyping, mobile-first)

**Blockchain Integration: Immutable SDK 1.x**

- **Purpose**: Wallet connection, NFT minting, marketplace integration
- **Components**:
  - `@imtbl/sdk` (core Immutable SDK)
  - `Immutable Passport` (embedded wallet, OAuth-style login)
  - `Immutable Orderbook` (gasless NFT trading)
- **Fallback**: ethers.js 6.x (MetaMask support if Passport unavailable)

**ZK Proving: snarkjs 0.7.x + circom 2.x**

- **Purpose**: Client-side ZK proof generation
- **Components**:
  - `snarkjs` (JavaScript prover, WASM-compiled)
  - `circomlibjs` (circuit utilities)
  - WebGPU API (hardware acceleration, Chrome 113+)
- **Fallback**: Server-side proving via AWS Lambda (if client proving >5s)

**State Management: Zustand 4.x**

- **Purpose**: Global game state (inventory, guild, Mania Meter)
- **Why Zustand**: Lightweight (3KB), React-friendly, no boilerplate
- **Alternative Considered**: Redux (rejected, too heavy for game state)

**Build Tools**:

- **Bundler**: Webpack 5 (Phaser requires custom config)
- **Transpiler**: TypeScript 5.x (strict mode enabled)
- **Linter**: ESLint + Prettier (enforce code standards)
- **Package Manager**: pnpm (faster than npm, monorepo-friendly)

#### 7.2.2 Backend Stack

**Hosting: Vercel (Serverless)**

- **Purpose**: Next.js deployment, API routes, edge functions
- **Why Vercel**:
  - Zero-config Next.js support
  - Global edge network (low latency)
  - Auto-scaling (0-10K requests/sec)
  - Free tier sufficient for MVP (100K API calls/month)
- **Cost**: $0-$50/mo @ 10K DAU

**Database: PostgreSQL 15 (Supabase)**

- **Purpose**: Player profiles, guild state, analytics events
- **Schema**:
  ```sql
  players (id, wallet_address, username, created_at, last_login)
  guilds (id, name, treasury_address, tvl, level, wins, losses)
  raids (id, guild_a_id, guild_b_id, winner_id, proof_hash, timestamp)
  tulips (token_id, owner_address, rarity, parent_a_id, parent_b_id)
  mania_meter_history (timestamp, value, event_type)
  ```
- **Why Supabase**:
  - Managed PostgreSQL (no DevOps)
  - Realtime subscriptions (live leaderboards)
  - Free tier: 500MB storage, 2GB bandwidth/month
- **Cost**: $0-$25/mo @ 10K DAU

**Cache: Redis 7.x (Upstash)**

- **Purpose**: Mania Meter state, leaderboards, rate limiting
- **Why Redis**:
  - Sub-millisecond reads (critical for Mania Meter updates)
  - Sorted sets (efficient leaderboard queries)
  - TTL support (auto-expire old raid lobbies)
- **Why Upstash**: Serverless pricing ($0.20/100K reads), global replication
- **Cost**: $0-$10/mo @ 10K DAU

**CDN: Cloudflare**

- **Purpose**: Static assets (mini-doc videos, shared GIFs, game sprites)
- **Why Cloudflare**:
  - 300+ edge locations (fast global delivery)
  - R2 storage ($0.015/GB/mo, 10× cheaper than S3)
  - Free bandwidth on cached assets
- **Cost**: $5-$20/mo @ 10K DAU (100GB storage + 1TB bandwidth)

**Analytics: PostHog (Self-Hosted or Cloud)**

- **Purpose**: Event tracking, funnel analysis, feature flags
- **Events Tracked**:
  - `bloom_reveal` (rarity distribution analysis)
  - `raid_joined` (participation rate)
  - `share_clicked` (viral coefficient)
  - `auction_listed` (trading volume)
- **Why PostHog**:
  - Open-source (can self-host if scale requires)
  - Session replay (debug UX issues)
  - Feature flags (A/B test viral mechanics)
- **Cost**: $0-$100/mo @ 10K DAU (1M events/mo included in free tier)

#### 7.2.3 Blockchain Stack

**L2 Network: Immutable zkEVM**

- **Chain ID**: 13473 (testnet), 13371 (mainnet)
- **RPC Endpoint**: `https://rpc.immutable.com`
- **Block Time**: 2 seconds (fast finality)
- **Gas Model**: Gasless via Immutable Passport (platform sponsors gas)
- **Why Immutable zkEVM**:
  - Only zkEVM with native gasless transactions
  - Gaming-focused (1.2M daily active wallets)
  - $100K-$500K grants available
  - Marketplace infrastructure built-in (orderbook, royalties)

**Smart Contracts: Solidity 0.8.20**

- **Development Framework**: Hardhat 2.x
- **Testing**: Foundry (gas-optimized tests)
- **Deployment**: Immutable CLI + Hardhat scripts

**Contracts Architecture**:

```
TulipNFT.sol (ERC721)
├─ mint(address to, uint256 rarity) → Mints new tulip
├─ breed(uint256 parentA, uint256 parentB) → Creates seed NFT
├─ setBreedingCooldown(uint256 tokenId, uint256 cooldown)
└─ tokenURI(uint256 tokenId) → Returns metadata JSON

GuildTreasury.sol (Multi-Sig)
├─ deposit(uint256 amount) → Add funds to treasury
├─ withdraw(uint256 amount, address[] signers) → 3-of-5 approval
├─ lendToMember(address member, uint256 amount, uint256 rate)
└─ raidStake(uint256 raidId, uint256[] tulipIds) → Lock tulips for raid

RaidSettlement.sol (ZK Verifier)
├─ submitRaidProof(bytes proof, RaidResult result)
├─ verifyProof(bytes proof) → Calls Groth16 verifier
├─ distributeRewards(address[] winners, uint256[] tulipIds)
└─ handleDispute(uint256 raidId, bytes counterProof)

ZKVerifier.sol (Groth16)
├─ verify(uint256[2] a, uint256[2][2] b, uint256[2] c, uint256[] input)
└─ (Auto-generated by snarkjs from circom circuits)

ManiaMeter.sol (Global State)
├─ updateMeter(int256 delta) → Adjust meter (onlyAuthorized)
├─ getMeterValue() → Returns current 0-100 value
├─ triggerCrashEvent() → Resets to 20%, emits event
└─ isRaidModeActive() → Returns true if meter ≥ 80%
```

**Security Considerations**:

- **Audits**: OpenZeppelin or Trail of Bits (4-6 weeks, $50K-$80K)
- **Upgradability**: Transparent proxy pattern (emergency fixes without redeployment)
- **Access Control**: OpenZeppelin AccessControl (role-based permissions)
- **Reentrancy Guards**: OpenZeppelin ReentrancyGuard on all fund transfers
- **Gas Optimization**: Foundry gas reports (target <100K gas per transaction)

#### 7.2.4 ZK Proving Infrastructure

**Circuit Language: circom 2.1.6**

- **Purpose**: Define ZK circuits for bloom RNG + raid validation
- **Circuits**:

  ```
  bloom_rng.circom (150 constraints)
  ├─ Input: seed_id, block_timestamp, vrf_seed
  ├─ Output: rarity_value (0-100,000)
  └─ Constraints: SHA256 hash + range checks

  raid_validate.circom (500 constraints)
  ├─ Input: player_moves[200], initial_state, final_state
  ├─ Output: is_valid (0 or 1)
  └─ Constraints: Move validation logic (steal/mutate/defend rules)
  ```

**Proving System: Groth16**

- **Why Groth16**:
  - Smallest proof size (128 bytes, fast on-chain verification)
  - Fastest verification (EVM-compatible, <50K gas)
  - Trusted setup (can use Perpetual Powers of Tau ceremony)
- **Alternative Considered**: PLONK (rejected, larger proof size)

**Proving Performance**:

- **Target**: <3s proof generation on iPhone 12 Pro
- **Optimization Strategies**:
  - WebGPU acceleration (10-50× faster than CPU)
  - Precompute witness generation (reduce proving time 30%)
  - Batch proofs (200 moves in single proof vs 200 individual proofs)
- **Fallback**: WebAssembly (3-5× slower) → Server-side Lambda (10s, rare edge case)

**Trusted Setup**:

- **Phase 1**: Perpetual Powers of Tau (community ceremony, audited)
- **Phase 2**: Circuit-specific setup (run by dev team, publicly verifiable)
- **Transparency**: Publish setup artifacts on GitHub (verifiable by anyone)

---

### 7.3 Immutable zkEVM Integration

#### 7.3.1 Immutable Passport (Wallet + Auth)

**Integration Flow**:

```
1. Player clicks "Play Now"
   ↓
2. Immutable Passport SDK initializes
   ├─ Check existing session (localStorage)
   └─ If no session: OAuth-style popup
   ↓
3. Player approves with Google/Apple/Email
   ↓
4. Passport creates embedded wallet (custodial, managed by Immutable)
   ├─ Wallet address generated (deterministic from OAuth ID)
   └─ Private key secured in Immutable's HSM (player never sees seed phrase)
   ↓
5. Game receives wallet address + session token
   ↓
6. All transactions auto-signed (gasless, no MetaMask popups)
```

**SDK Configuration**:

```typescript
import { config, passport } from "@imtbl/sdk";

const passportInstance = new passport.Passport({
  baseConfig: new config.ImmutableConfiguration({
    environment: config.Environment.PRODUCTION,
  }),
  clientId: process.env.NEXT_PUBLIC_IMMUTABLE_CLIENT_ID,
  redirectUri: "https://mytulipmania.com/callback",
  logoutRedirectUri: "https://mytulipmania.com",
  audience: "platform_api",
  scope: "openid offline_access email transact",
});
```

**Gasless Transaction Sponsorship**:

- **Who Pays**: MyTulipMania platform (Immutable sponsors via grant program)
- **Cost**: $0.00003 per transaction (Fusaka upgrade pricing)
- **Budget**: 10K DAU × 5 txns/day × $0.00003 = $1.50/day = $45/mo
- **Sustainability**: Covered by royalty revenue ($54K/mo >> $45/mo gas costs)

#### 7.3.2 Immutable Orderbook (NFT Marketplace)

**Integration Flow**:

```typescript
import { orderbook } from "@imtbl/sdk";

// List tulip for sale (Dutch auction)
const listing = await orderbook.createListing({
  sell: {
    type: "ERC721",
    contractAddress: TULIP_NFT_ADDRESS,
    tokenId: "12345",
  },
  buy: {
    type: "NATIVE", // IMX token
    amount: "5000000000000000000", // 5 IMX starting price
  },
  makerFees: [
    { recipient: PLATFORM_FEE_ADDRESS, percentage: 2.5 },
    { recipient: GUILD_TREASURY_ADDRESS, percentage: 0.5 },
  ],
});

// Auto-price decay (Dutch auction)
setInterval(async () => {
  const newPrice = currentPrice * 0.9; // 10% drop every 2 hours
  await orderbook.updateListing(listing.id, { amount: newPrice });
}, 2 * 60 * 60 * 1000);
```

**Royalty Enforcement**:

- **On-Chain**: Immutable enforces royalties at marketplace level (cannot bypass)
- **Split**: 2.5% platform + 0.5% guild (3% total, competitive with OpenSea)
- **Payout**: Instant (no escrow delays)

#### 7.3.3 Immutable APIs

**Key Endpoints**:

```typescript
// Get player's tulip inventory
GET https://api.immutable.com/v1/assets
  ?user=0x1234...
  &collection=0xTULIP_NFT_ADDRESS
  &page_size=200

// Get guild treasury balance
GET https://api.immutable.com/v1/balances
  ?owner=0xGUILD_TREASURY_ADDRESS

// Get marketplace activity (trading volume)
GET https://api.immutable.com/v1/orders
  ?sell_token_address=0xTULIP_NFT_ADDRESS
  &status=filled
  &updated_min_timestamp=2025-12-01T00:00:00Z
```

**Rate Limits**: 50 requests/second (sufficient for 10K DAU)

---

### 7.4 Phaser Game Engine Architecture

#### 7.4.1 Scene Structure

```typescript
// Game Scenes (Phaser scene hierarchy)
BootScene → Preload assets (3s)
  ↓
MenuScene → Main menu (play, leaderboard, profile)
  ↓
GardenScene → Core gameplay (plant, water, reveal, breed)
  ↓
RaidScene → Guild battles (move selection, animation)
  ↓
CollegieScene → Dutch auction house (browse, list, buy)
```

**Scene Transitions**:

- **Fade Effect**: 300ms black fade between scenes
- **State Preservation**: Zustand maintains game state across scenes
- **Asset Management**: Shared texture atlas (reduce load times)

#### 7.4.2 Rendering Pipeline

**Canvas Configuration**:

```typescript
const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO, // WebGL with Canvas fallback
  width: 1920,
  height: 1080,
  scale: {
    mode: Phaser.Scale.FIT, // Maintain aspect ratio
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  physics: {
    default: "arcade", // Lightweight physics for particles
    arcade: { debug: false },
  },
  render: {
    pixelArt: false, // Anti-aliasing enabled
    antialias: true,
    roundPixels: true, // Crisp sprites
  },
};
```

**Performance Optimizations**:

- **Object Pooling**: Reuse particle emitters (avoid GC pauses)
- **Texture Atlases**: Single 4096×4096 sprite sheet (reduce draw calls)
- **Lazy Loading**: Load raid assets only when Mania Meter >70%
- **Frame Rate Cap**: 60 FPS (battery-friendly on mobile)

#### 7.4.3 Animation System

**Bloom Reveal Animation** (Key Dopamine Moment):

```typescript
// 3-second cinematic reveal
scene.tweens.add({
  targets: tulipSprite,
  scaleX: { from: 0, to: 1.2 },
  scaleY: { from: 0, to: 1.2 },
  alpha: { from: 0, to: 1 },
  duration: 1000,
  ease: "Back.easeOut",
  onComplete: () => {
    // Particle burst (rarity-dependent)
    emitter.explode(rarity === "Legendary" ? 100 : 50);
    // Play rarity-specific sound
    scene.sound.play(rarity === "Legendary" ? "fanfare" : "chime");
  },
});
```

**Raid Battle Animations**:

- **Move Selection**: Drag-and-drop with physics-based snap
- **Attack Effects**: Particle trails (steal = coins, mutate = virus)
- **Guild Chat**: Speech bubbles with text (no voice acting in MVP)

---

### 7.5 Security Architecture

#### 7.5.1 Authentication & Authorization

**Player Authentication**:

- **Primary**: Immutable Passport OAuth (Google, Apple, Email)
- **Session Management**: JWT tokens (7-day expiry, refresh tokens for 30 days)
- **Fallback**: MetaMask signature-based auth (SIWE - Sign-In With Ethereum)

**API Authorization**:

```typescript
// Next.js API route middleware
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession(req);
  if (!session?.wallet) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  // Verify wallet owns the tulip being traded
  const tulip = await db.tulips.findUnique({
    where: { tokenId: req.body.tokenId },
  });
  if (tulip.owner !== session.wallet) {
    return res.status(403).json({ error: "Forbidden: Not tulip owner" });
  }

  // Proceed with action...
}
```

#### 7.5.2 Smart Contract Security

**Audit Scope**:

- **Contracts**: TulipNFT, GuildTreasury, RaidSettlement, ZKVerifier
- **Timeline**: 4-6 weeks (book 3 months in advance)
- **Cost**: $50K-$80K (depending on complexity)
- **Auditors**: OpenZeppelin, Trail of Bits, or Consensys Diligence

**Security Patterns**:

```solidity
// Reentrancy protection
contract RaidSettlement is ReentrancyGuard {
  function distributeRewards(address[] memory winners, uint256[] memory tulipIds)
    external nonReentrant onlyRole(RAID_RESOLVER_ROLE) {
    // Safe reward distribution
  }
}

// Access control
contract ManiaMeter is AccessControl {
  bytes32 public constant UPDATER_ROLE = keccak256("UPDATER_ROLE");

  function updateMeter(int256 delta) external onlyRole(UPDATER_ROLE) {
    // Only authorized backend can update meter
  }
}
```

**Upgrade Strategy**:

- **Proxy Pattern**: TransparentUpgradeableProxy (OpenZeppelin)
- **Timelock**: 48-hour delay on upgrades (emergency pause available)
- **Multi-Sig**: 3-of-5 team members must approve upgrades

#### 7.5.3 ZK Proof Security

**Circuit Audits**:

- **Scope**: bloom_rng.circom, raid_validate.circom
- **Auditor**: Trail of Bits (ZK cryptography specialists)
- **Cost**: $80K-$120K
- **Timeline**: 6-8 weeks

**Proof Verification**:

```solidity
contract RaidSettlement {
  ZKVerifier public verifier;

  function submitRaidProof(bytes memory proof, RaidResult memory result) external {
    // Parse proof components
    (uint256[2] memory a, uint256[2][2] memory b, uint256[2] memory c, uint256[] memory input)
      = abi.decode(proof, (uint256[2], uint256[2][2], uint256[2], uint256[]));

    // Verify proof on-chain
    require(verifier.verify(a, b, c, input), "Invalid ZK proof");

    // Distribute rewards if proof valid
    _distributeRewards(result.winners, result.tulipIds);
  }
}
```

**Attack Mitigations**:

- **Proof Replay**: Include nonce in proof input (prevents reuse)
- **Front-Running**: ZK proof hides moves until settlement (no MEV risk)
- **Proof Forgery**: Groth16 provides 128-bit security (quantum-resistant preparation)

#### 7.5.4 Rate Limiting & Anti-Bot Measures

**API Rate Limits** (per wallet address):

```typescript
// Redis-based rate limiting
const rateLimiter = new RateLimiterRedis({
  storeClient: redisClient,
  points: 100, // 100 requests
  duration: 60, // per 60 seconds
  blockDuration: 300, // 5-minute cooldown if exceeded
});

// Apply to sensitive endpoints
app.use("/api/raid/join", async (req, res, next) => {
  try {
    await rateLimiter.consume(req.session.wallet);
    next();
  } catch {
    res.status(429).json({ error: "Rate limit exceeded" });
  }
});
```

**Bot Detection**:

- **Honeypot Fields**: Hidden form fields (bots auto-fill)
- **Behavior Analysis**: Flag accounts that breed tulips in <10s (humanly impossible)
- **Captcha**: hCaptcha on first tulip mint (one-time, not every action)

---

### 7.6 Performance & Scalability

#### 7.6.1 Target Performance Metrics

| Metric                   | Target       | Measurement                         |
| ------------------------ | ------------ | ----------------------------------- |
| **Page Load Time**       | <2s (P95)    | Lighthouse Performance Score >90    |
| **Bloom Reveal Latency** | <1s (P95)    | ZK-VRF proof generation             |
| **Raid Matchmaking**     | <10s (P95)   | Time from "Join Raid" to lobby full |
| **Raid Settlement**      | <5s (P95)    | ZK proof generation + on-chain tx   |
| **API Response Time**    | <200ms (P95) | Next.js API routes                  |
| **Database Queries**     | <50ms (P95)  | PostgreSQL indexed queries          |

#### 7.6.2 Scalability Strategy

**Horizontal Scaling**:

- **Frontend**: Vercel auto-scales (10K→100K DAU, zero config)
- **Backend**: Serverless functions (AWS Lambda-style, auto-scale)
- **Database**: Supabase read replicas (add when >50K DAU)
- **Cache**: Redis cluster (Upstash global replication)

**Load Testing Plan**:

```bash
# Simulate 10K concurrent users
k6 run --vus 10000 --duration 5m load-test.js

# Key scenarios:
# - 5K users revealing blooms simultaneously (ZK-VRF load)
# - 1K concurrent raids (matchmaking stress)
# - 3K marketplace listings/hour (orderbook writes)
```

**Cost Projections**:

| Service          | 1K DAU  | 10K DAU  | 100K DAU |
| ---------------- | ------- | -------- | -------- |
| Vercel (hosting) | $0      | $50      | $200     |
| Supabase (DB)    | $0      | $25      | $100     |
| Upstash (Redis)  | $0      | $10      | $50      |
| Cloudflare (CDN) | $5      | $20      | $100     |
| Immutable (gas)  | $5      | $45      | $450     |
| **Total/Month**  | **$10** | **$150** | **$900** |

**Revenue vs Costs** (@ 10K DAU):

- **Monthly Costs**: $150
- **Monthly Royalties**: $54,000 (12% trading rate)
- **Profit Margin**: 99.7% 🚀

---

### 7.7 Deployment Pipeline

#### 7.7.1 Environments

**Development** (`dev` branch):

- **Frontend**: Vercel preview deployment (auto-deploy on PR)
- **Backend**: Immutable testnet (Sepolia)
- **Database**: Supabase dev project
- **Purpose**: Feature development, unit tests

**Staging** (`staging` branch):

- **Frontend**: staging.mytulipmania.com
- **Backend**: Immutable testnet
- **Database**: Supabase staging project
- **Purpose**: Integration tests, QA, load tests

**Production** (`main` branch):

- **Frontend**: mytulipmania.com
- **Backend**: Immutable zkEVM mainnet
- **Database**: Supabase production project
- **Purpose**: Live game, real money

#### 7.7.2 CI/CD Pipeline

```yaml
# GitHub Actions workflow
name: Deploy

on:
  push:
    branches: [main, staging, dev]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: pnpm install
      - run: pnpm test:unit
      - run: pnpm test:integration
      - run: pnpm lint

  deploy-contracts:
    needs: test
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    steps:
      - run: pnpm hardhat deploy --network immutable-mainnet
      - run: pnpm hardhat verify --network immutable-mainnet

  deploy-frontend:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: vercel/actions@v1
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
```

**Deployment Checklist**:

- ✅ Unit tests pass (Foundry + Jest)
- ✅ Integration tests pass (Playwright E2E)
- ✅ Load tests pass (k6 simulates 10K DAU)
- ✅ Smart contract audit complete (no critical issues)
- ✅ ZK circuit audit complete (proof security verified)
- ✅ Immutable grant approved (gas sponsorship confirmed)
- ✅ CDN assets uploaded (mini-docs, sprites)
- ✅ Monitoring configured (PostHog, Sentry error tracking)

#### 7.7.3 Monitoring & Alerting

**Error Tracking: Sentry**

- **Frontend**: JavaScript errors, React component crashes
- **Backend**: API errors, database failures
- **Alerts**: Slack notification if error rate >1% (critical issues)

**Performance Monitoring: Vercel Analytics**

- **Metrics**: Core Web Vitals (LCP, FID, CLS)
- **Target**: >90 Lighthouse Performance Score
- **Alerts**: Slack notification if score drops <80

**Business Metrics: PostHog**

- **Dashboards**: DAU, D7/D30 retention, K-factor, trading volume
- **Alerts**: Slack notification if DAU drops >20% day-over-day

**Blockchain Monitoring: Immutable Dashboard**

- **Metrics**: Gas usage, transaction success rate, smart contract calls
- **Alerts**: Email if gas budget >$100/day (prevent runaway costs)

---

## 8. Non-Functional Requirements

This section defines quality attributes, performance targets, security standards, and operational requirements that are critical for launch success but not directly tied to specific features.

---

### 8.1 Performance Requirements

#### 8.1.1 Response Time Requirements

| Operation                    | Target Latency | Measurement                            | Priority |
| ---------------------------- | -------------- | -------------------------------------- | -------- |
| **Page Load (First Visit)**  | <2s (P95)      | Lighthouse Performance Score >90       | P0       |
| **Page Load (Return Visit)** | <1s (P95)      | Service worker cache hit               | P1       |
| **Bloom Reveal**             | <1s (P95)      | ZK-VRF proof generation + UI animation | P0       |
| **Raid Matchmaking**         | <10s (P95)     | Time from "Join Raid" to lobby full    | P0       |
| **Raid Settlement**          | <5s (P95)      | ZK proof generation + blockchain tx    | P0       |
| **Auction Listing**          | <3s (P95)      | Immutable Orderbook API call           | P1       |
| **API Endpoints**            | <200ms (P95)   | Next.js API routes response time       | P1       |
| **Database Queries**         | <50ms (P95)    | PostgreSQL indexed queries             | P1       |
| **Cache Reads**              | <5ms (P95)     | Redis GET operations                   | P2       |

**Measurement Strategy**:

- **Real User Monitoring**: Vercel Analytics (Core Web Vitals)
- **Synthetic Monitoring**: Lighthouse CI (daily automated tests)
- **Load Testing**: k6 scenarios simulating 10K concurrent users

#### 8.1.2 Throughput Requirements

| Metric                     | Target       | Measurement Period      | Scale Point                        |
| -------------------------- | ------------ | ----------------------- | ---------------------------------- |
| **Concurrent Users**       | 10,000       | Peak hours (7-10pm EST) | Launch target                      |
| **Transactions/Second**    | 50 TPS       | Sustained load          | Immutable zkEVM capacity: 2000 TPS |
| **API Requests/Second**    | 500 req/s    | Peak load               | Vercel serverless auto-scales      |
| **Database Writes/Second** | 100 writes/s | Peak load               | PostgreSQL: 1000 writes/s capacity |
| **Raid Matches/Hour**      | 400 raids/hr | Mania Meter >80%        | 40% of 10K DAU participate         |

**Scalability Targets**:

- **1K DAU**: Zero infrastructure changes (runs on free tiers)
- **10K DAU**: Upgrade to paid tiers ($150/mo total)
- **100K DAU**: Add database read replicas, Redis cluster ($900/mo total)

#### 8.1.3 Resource Utilization

**Client-Side (Player Device)**:

- **Memory Usage**: <500MB RAM (mobile browser)
- **CPU Usage**: <30% sustained (prevent battery drain)
- **Storage**: <50MB cached assets (progressive loading)
- **Network**: <1MB/minute sustained data transfer (4G-friendly)

**Server-Side (Vercel + Supabase)**:

- **API Function Execution**: <1s per invocation (Lambda timeout)
- **Database Connections**: <100 concurrent (connection pooling)
- **CDN Bandwidth**: <1TB/month @ 10K DAU (cached assets)

---

### 8.2 Scalability Requirements

#### 8.2.1 User Growth Targets

| Timeframe   | DAU Target | Infrastructure Changes          | Cost Impact |
| ----------- | ---------- | ------------------------------- | ----------- |
| **Week 1**  | 1,000      | None (free tiers sufficient)    | $10/mo      |
| **Week 4**  | 10,000     | Upgrade to paid tiers           | $150/mo     |
| **Month 3** | 30,000     | Add DB read replicas            | $300/mo     |
| **Month 6** | 50,000     | Redis cluster, CDN tier upgrade | $600/mo     |
| **Year 1**  | 100,000    | Multi-region deployment         | $900/mo     |

**Break-Even Analysis**:

- **At 10K DAU**: $54K royalties/mo >> $150 infrastructure costs
- **At 100K DAU**: $540K royalties/mo >> $900 infrastructure costs
- **Conclusion**: Costs scale linearly, revenue scales exponentially (sustainable)

#### 8.2.2 Data Growth Projections

| Data Type            | Growth Rate  | 1 Year Volume      | Storage Cost         |
| -------------------- | ------------ | ------------------ | -------------------- |
| **Player Profiles**  | 10K/week     | 520K records       | 50MB ($0.01/mo)      |
| **Tulip NFTs**       | 50K/week     | 2.6M tokens        | On-chain (Immutable) |
| **Raid History**     | 2K raids/day | 730K records       | 500MB ($0.10/mo)     |
| **Analytics Events** | 10M/month    | 120M events        | PostHog (included)   |
| **Mini-Doc Videos**  | 50 videos    | 5GB                | CDN ($0.08/mo)       |
| **Shared GIFs**      | 100K/month   | 1.2M files (120GB) | CDN ($1.80/mo)       |

**Retention Policy**:

- **Player Data**: Infinite retention (GDPR delete on request)
- **Raid History**: 12 months, then archive to cold storage
- **Analytics Events**: 6 months, then aggregate to monthly summaries
- **Shared GIFs**: 90 days, then auto-delete (regenerate on demand)

#### 8.2.3 Geographic Distribution

**Launch Regions** (Priority Order):

1. **North America** (50% of traffic): US/Canada, primary timezone
2. **Europe** (30% of traffic): UK/Germany/Netherlands, secondary timezone
3. **Asia-Pacific** (15% of traffic): Singapore/Australia, tertiary timezone
4. **Rest of World** (5% of traffic): Supported but not optimized

**CDN Strategy**:

- **Primary**: Cloudflare (300+ edge locations globally)
- **Latency Target**: <100ms from any major city
- **Failover**: Vercel CDN (automatic if Cloudflare unavailable)

---

### 8.3 Reliability & Availability

#### 8.3.1 Uptime Requirements

| Component               | SLA Target | Downtime Budget       | Recovery Time |
| ----------------------- | ---------- | --------------------- | ------------- |
| **Game Frontend**       | 99.9%      | 43 min/month          | <5 minutes    |
| **API Backend**         | 99.9%      | 43 min/month          | <5 minutes    |
| **Immutable zkEVM**     | 99.9%      | Managed by Immutable  | N/A           |
| **Database (Supabase)** | 99.95%     | Managed by Supabase   | <10 minutes   |
| **CDN (Cloudflare)**    | 99.99%     | Managed by Cloudflare | <1 minute     |

**Measurement**:

- **Synthetic Checks**: Uptime Robot pings every 5 minutes
- **Real User Monitoring**: Sentry error rate tracking
- **Alerting**: PagerDuty escalation if downtime >5 minutes

#### 8.3.2 Disaster Recovery

**Backup Strategy**:

- **Database**: Daily automated backups (Supabase), 30-day retention
- **Smart Contracts**: Immutable (cannot be deleted, permanent on-chain)
- **CDN Assets**: S3 backup (weekly), Glacier archive (yearly)

**Recovery Procedures**:

```
Scenario 1: Database Corruption
├─ Step 1: Switch to read replica (5 min)
├─ Step 2: Restore from latest backup (15 min)
├─ Step 3: Validate data integrity (10 min)
└─ Total RTO (Recovery Time Objective): 30 minutes

Scenario 2: Smart Contract Bug
├─ Step 1: Emergency pause contracts (1 min)
├─ Step 2: Deploy fixed version via proxy upgrade (48h timelock)
├─ Step 3: Audit patch, resume operations
└─ Total RTO: 48+ hours (timelock protection)

Scenario 3: Vercel Outage
├─ Step 1: Deploy to backup hosting (AWS Amplify)
├─ Step 2: Update DNS records (5 min propagation)
├─ Step 3: Validate functionality
└─ Total RTO: 15 minutes
```

#### 8.3.3 Fault Tolerance

**Redundancy Mechanisms**:

- **Multiple Availability Zones**: Vercel + Supabase use multi-AZ by default
- **Database Replication**: Write to primary, read from replicas
- **Smart Contract Upgradability**: Proxy pattern allows emergency fixes
- **ZK Proof Fallbacks**: Hybrid optimistic mode if client proving fails

**Circuit Breakers**:

```typescript
// Immutable API circuit breaker
const circuitBreaker = new CircuitBreaker(
  async () => {
    return await immutableAPI.getAssets();
  },
  {
    timeout: 5000, // 5s timeout
    errorThreshold: 50, // Open circuit after 50% errors
    resetTimeout: 30000, // Try again after 30s
  }
);

// Fallback to cached data
const assets = await circuitBreaker.fire().catch(() => getCachedAssets());
```

---

### 8.4 Security Requirements

#### 8.4.1 Authentication & Authorization

**Requirements**:

- **REQ-SEC-001**: All API endpoints require authenticated session (JWT token)
- **REQ-SEC-002**: Smart contract functions use role-based access control (OpenZeppelin)
- **REQ-SEC-003**: ZK proofs include nonce to prevent replay attacks
- **REQ-SEC-004**: Session tokens expire after 7 days, refresh tokens after 30 days

**Compliance**:

- **OWASP Top 10**: Address all critical vulnerabilities (injection, XSS, CSRF)
- **CWE Top 25**: Mitigate common software weaknesses

#### 8.4.2 Data Protection

**Encryption Requirements**:

- **Data in Transit**: TLS 1.3 for all API calls (HTTPS only)
- **Data at Rest**: AES-256 encryption for database (Supabase default)
- **Private Keys**: HSM-secured (Immutable Passport manages)
- **Sensitive Data**: No storage of seed phrases or private keys

**Privacy Requirements**:

- **REQ-PRIV-001**: Comply with GDPR (EU users), CCPA (California)
- **REQ-PRIV-002**: Support "Right to be Forgotten" (delete account + data)
- **REQ-PRIV-003**: Anonymize analytics data (no PII in PostHog)
- **REQ-PRIV-004**: Cookie consent banner for EU users

**Data Retention**:

- **Player Profiles**: Retained until account deletion requested
- **Blockchain Data**: Immutable (cannot be deleted, pseudonymous)
- **Analytics Events**: 6 months, then aggregated
- **Support Tickets**: 2 years (legal compliance)

#### 8.4.3 Security Testing

**Testing Requirements**:

- **Penetration Testing**: Annual pentest by third-party firm ($10K-$20K)
- **Smart Contract Audits**: Pre-launch audit by OpenZeppelin/Trail of Bits ($50K-$80K)
- **ZK Circuit Audits**: Pre-launch cryptography audit ($80K-$120K)
- **Bug Bounty Program**: $50K max reward for critical vulnerabilities

**Security Monitoring**:

- **WAF (Web Application Firewall)**: Cloudflare (blocks OWASP attacks)
- **DDoS Protection**: Cloudflare (unlimited mitigation)
- **Rate Limiting**: Redis-based (prevent API abuse)
- **Fraud Detection**: Flag accounts with bot-like behavior

---

### 8.5 Usability & Accessibility

#### 8.5.1 Usability Requirements

**REQ-UX-001: Onboarding Completion**

- **Target**: 80%+ complete first tulip planting
- **Measurement**: Analytics funnel (landing → plant → Day 2 return)
- **Mitigation**: If <70%, redesign tutorial flow

**REQ-UX-002: Mobile Responsiveness**

- **Target**: 100% features work on mobile (responsive design)
- **Testing**: Manual QA on iPhone 12/14, Samsung Galaxy S21/S23
- **Performance**: 60 FPS on mid-tier devices (2-year-old flagships)

**REQ-UX-003: Error Messages**

- **Requirement**: User-friendly error messages (no stack traces)
- **Example**: "Oops! Your tulip bloom failed. Try again?" (not "Error 500")
- **Fallback**: Link to support if error persists

#### 8.5.2 Accessibility Requirements

**WCAG 2.1 Level AA Compliance**:

- **REQ-A11Y-001**: Color contrast ratio ≥4.5:1 (text readability)
- **REQ-A11Y-002**: Keyboard navigation support (no mouse required)
- **REQ-A11Y-003**: Screen reader labels (ARIA attributes)
- **REQ-A11Y-004**: Captions for all video content (mini-docs)

**Assistive Technology Support**:

- **Screen Readers**: NVDA (Windows), VoiceOver (macOS/iOS)
- **Magnification**: Support 200% browser zoom (no horizontal scroll)
- **Reduced Motion**: Disable animations if user prefers (CSS media query)

#### 8.5.3 Internationalization (Future)

**Launch**: English-only (MVP)

**Post-Launch Expansion** (Month 6+):

- **Languages**: Dutch (historical accuracy), Spanish, Mandarin, Japanese
- **Localization**: UI strings, mini-doc subtitles, smart contract events
- **Infrastructure**: i18next library, Crowdin for translations

---

### 8.6 Compatibility Requirements

#### 8.6.1 Browser Support

| Browser         | Minimum Version | Market Share | Testing Priority |
| --------------- | --------------- | ------------ | ---------------- |
| **Chrome/Edge** | 113+ (WebGPU)   | 65%          | P0 (Critical)    |
| **Safari**      | 17+ (WebGPU)    | 20%          | P0 (Critical)    |
| **Firefox**     | 121+ (WebGPU)   | 10%          | P1 (High)        |
| **Brave**       | Latest          | 3%           | P1 (High)        |
| **Opera**       | Latest          | 2%           | P2 (Medium)      |

**Unsupported Browsers**:

- Internet Explorer (EOL, <0.5% market share)
- Chrome <113 (no WebGPU → fallback to WASM proving)

#### 8.6.2 Device Support

**Desktop**:

- **Windows 10/11**: Chrome, Edge, Firefox
- **macOS 12+**: Chrome, Safari, Firefox
- **Linux**: Chrome, Firefox (community support only)

**Mobile**:

- **iOS 17+**: Safari, Chrome (PWA-installable)
- **Android 12+**: Chrome, Samsung Internet

**Tablets**:

- **iPad**: Full support (optimized landscape layout)
- **Android Tablets**: Support but not optimized (use phone layout)

**Unsupported**:

- Devices >5 years old (insufficient WebGL/WebGPU support)
- Low-end Android (<4GB RAM, game will crash)

#### 8.6.3 Network Requirements

**Minimum Connection**:

- **Bandwidth**: 1 Mbps sustained (4G/LTE)
- **Latency**: <300ms to nearest CDN edge
- **Offline Mode**: Tulips bloom offline (sync on reconnect)

**Optimizations**:

- **Progressive Loading**: Load core assets first (5MB), mini-docs on demand
- **Image Compression**: WebP format (50% smaller than PNG)
- **Video Streaming**: Adaptive bitrate (HLS for mini-docs)

---

### 8.7 Compliance & Legal

#### 8.7.1 Regulatory Compliance

**Blockchain/Crypto Regulations**:

- **REQ-REG-001**: Not classified as security (Howey Test analysis: game items, not investments)
- **REQ-REG-002**: KYC not required (game purchases <$1K, no fiat withdrawals)
- **REQ-REG-003**: Terms of Service: "For entertainment purposes only, not financial advice"

**Consumer Protection**:

- **REQ-REG-004**: COPPA compliance (13+ age gate, no data collection from minors)
- **REQ-REG-005**: FTC disclosure (clearly label paid partnerships, influencer sponsorships)

#### 8.7.2 Data Privacy Compliance

**GDPR (EU Users)**:

- **REQ-GDPR-001**: Cookie consent banner (essential vs analytics cookies)
- **REQ-GDPR-002**: Data export (JSON download of all player data)
- **REQ-GDPR-003**: Right to deletion (delete profile, but blockchain data immutable)
- **REQ-GDPR-004**: Privacy policy (readable, no legalese)

**CCPA (California Users)**:

- **REQ-CCPA-001**: "Do Not Sell My Data" link (we don't sell data anyway)
- **REQ-CCPA-002**: Disclose analytics partners (PostHog, Vercel)

#### 8.7.3 Content Moderation

**User-Generated Content**:

- **Scope**: Guild names, player usernames (no chat MVP, so limited UGC)
- **Moderation**: Profanity filter (List of Dirty Words library)
- **Reporting**: "Report Guild Name" button (manual review within 24h)

**Historical Content**:

- **Accuracy**: 95%+ factual (historian review)
- **Sensitivity**: Avoid glorification of speculation (educational framing)

---

### 8.8 Operational Requirements

#### 8.8.1 Monitoring & Alerting

**Alert Priority Levels**:

| Priority          | Response Time     | Examples                            |
| ----------------- | ----------------- | ----------------------------------- |
| **P0 - Critical** | 5 minutes         | Game down, smart contract exploit   |
| **P1 - High**     | 1 hour            | API errors >5%, ZK proving failures |
| **P2 - Medium**   | 4 hours           | Performance degradation, DAU drop   |
| **P3 - Low**      | Next business day | Minor UI bugs, analytics gaps       |

**On-Call Rotation**:

- **Primary**: Dev lead (24/7 PagerDuty)
- **Secondary**: Smart contract dev (blockchain issues only)
- **Escalation**: Founders (if P0 unresolved >1 hour)

#### 8.8.2 Support Requirements

**Support Channels**:

- **In-App**: "Help" button → FAQ + contact form
- **Discord**: Community support (moderators + devs)
- **Email**: support@mytulipmania.com (24h response time)

**Support SLAs**:

- **P0 (Account Locked)**: 4-hour response, 24-hour resolution
- **P1 (Lost NFT)**: 24-hour response, 3-day resolution
- **P2 (General Question)**: 48-hour response

#### 8.8.3 Maintenance Windows

**Planned Maintenance**:

- **Frequency**: Monthly (first Sunday, 2-4am EST)
- **Duration**: <2 hours
- **Notification**: 7-day advance notice (in-game banner + Discord)

**Emergency Maintenance**:

- **Trigger**: Critical smart contract bug, security exploit
- **Process**: Emergency pause → fix → audit → resume (48h minimum)

---

## 9. Release Plan & Roadmap

This section outlines the 6-month MVP development timeline, monthly milestones, launch criteria, and post-launch roadmap.

---

### 9.1 Development Phases

#### Phase 1: Foundation (Months 1-2)

**Timeline**: Weeks 1-8

**Deliverables**:

- Smart contract development (TulipNFT, GuildTreasury, RaidSettlement)
- ZK circuit development (bloom_rng, raid_validate)
- Phaser game engine setup (garden scene, bloom animations)
- Immutable integration (Passport auth, Orderbook API)
- Database schema + API scaffolding

**Team Allocation**:

- 2 Smart Contract Devs (full-time)
- 1 ZK Circuit Dev (full-time)
- 2 Frontend Devs (full-time)
- 1 Backend Dev (part-time)

**Critical Path**:

- **Week 1-4**: Smart contracts + ZK circuits (parallel development)
- **Week 5-6**: Smart contract audit (OpenZeppelin)
- **Week 7-8**: ZK circuit audit (Trail of Bits)

**Risk**: Audit delays → Mitigation: Book auditors 3 months in advance

---

#### Phase 2: Core Gameplay (Months 3-4)

**Timeline**: Weeks 9-16

**Deliverables**:

- Complete daily loop (plant → water → bloom → breed)
- Mania Meter system (global state, Redis cache)
- Raid matchmaking + battle UI (Phaser canvas)
- Collegie auction house (Immutable Orderbook integration)
- Historical mini-docs (50 videos, 30-60s each)

**Team Allocation**:

- 3 Frontend Devs (full-time)
- 1 Backend Dev (full-time)
- 1 Game Designer (part-time)
- 2 Content Creators (historians + video editors)

**Critical Path**:

- **Week 9-12**: Core gameplay loop (plant/bloom/breed)
- **Week 13-14**: Mania Meter + raid mechanics
- **Week 15-16**: Auctions + mini-docs

**Risk**: Mini-doc production delays → Mitigation: Start video production in Month 2

---

#### Phase 3: Viral & Polish (Month 5)

**Timeline**: Weeks 17-20

**Deliverables**:

- One-tap GIF sharing (canvas capture + social APIs)
- Raid clip generation (auto-highlight reel)
- Invite rewards system (referral tracking)
- Guild profile pages (leaderboards, stats)
- Performance optimization (<2s page loads)

**Team Allocation**:

- 2 Frontend Devs (full-time)
- 1 Backend Dev (full-time)
- 1 QA Engineer (full-time)

**Critical Path**:

- **Week 17-18**: Viral share mechanics (GIF/clips)
- **Week 19**: Guild features (leaderboards, profiles)
- **Week 20**: Performance optimization + bug fixes

**Risk**: Social API rate limits → Mitigation: Fallback to Web Share API

---

#### Phase 4: Launch Prep (Month 6)

**Timeline**: Weeks 21-24

**Deliverables**:

- Closed beta (100 players, invite-only)
- Load testing (10K concurrent users simulation)
- Security audit (penetration testing)
- Marketing assets (landing page, trailers, press kit)
- Immutable grant approval ($100K+ gas sponsorship)

**Team Allocation**:

- All hands on deck (6 devs + 2 content creators)
- External: Auditors, marketers, community moderators

**Critical Path**:

- **Week 21**: Closed beta launch (100 players)
- **Week 22**: Fix beta bugs, load testing
- **Week 23**: Security audit + Immutable grant approval
- **Week 24**: Public launch 🚀

**Risk**: Beta reveals critical bugs → Mitigation: 2-week buffer for fixes

---

### 9.2 Monthly Milestones

#### Month 1 Milestone: Smart Contracts Deployed

**Success Criteria**:

- ✅ TulipNFT contract deployed to testnet
- ✅ GuildTreasury contract deployed (3-of-5 multi-sig)
- ✅ bloom_rng ZK circuit compiles (<150 constraints)
- ✅ Foundry gas reports (<100K gas per mint)

**Demo**: Mint test tulip via CLI, verify on Immutable Explorer

---

#### Month 2 Milestone: Audits Complete

**Success Criteria**:

- ✅ Smart contract audit by OpenZeppelin (no critical issues)
- ✅ ZK circuit audit by Trail of Bits (proof security verified)
- ✅ Audit reports published on GitHub (transparency)

**Demo**: Generate ZK proof for bloom reveal, verify on-chain

---

#### Month 3 Milestone: Playable Prototype

**Success Criteria**:

- ✅ Plant seed → wait 24h → bloom reveal (full loop works)
- ✅ Breed 2 tulips → new seed NFT minted (gasless)
- ✅ Mania Meter displays real-time (Redis updates)

**Demo**: Internal team playtest (10 devs plant 50 tulips)

---

#### Month 4 Milestone: Raid Battles Functional

**Success Criteria**:

- ✅ Join raid lobby → matchmaking → battle UI loads
- ✅ Execute 10-20 moves → ZK proof generates <3s
- ✅ Rewards distributed (tulip NFTs transferred)

**Demo**: Mock 5v5 raid (dev team vs dev team)

---

#### Month 5 Milestone: Viral Mechanics Live

**Success Criteria**:

- ✅ Share bloom reveal → GIF generates <3s
- ✅ Share raid clip → auto-posts to X with referral link
- ✅ Invite 3 friends → Rare seed reward airdropped

**Demo**: Dev team shares 50 GIFs to social media, tracks impressions

---

#### Month 6 Milestone: Public Launch

**Success Criteria**:

- ✅ 1,000 players in first 48h
- ✅ D1 retention >60% (600 players return Day 2)
- ✅ 50 guilds formed (100+ raid matches)
- ✅ $5K+ royalty revenue (first week trading)

**Demo**: Live on mytulipmania.com, Immutable grant approved

---

### 9.3 Launch Criteria

**Go/No-Go Checklist**:

**Technical Readiness**:

- ✅ All smart contracts audited (no critical issues)
- ✅ ZK circuits audited (cryptography secure)
- ✅ Load testing passed (10K concurrent users)
- ✅ Uptime >99.9% in staging (last 2 weeks)
- ✅ Security pentest complete (no P0 vulnerabilities)

**Product Readiness**:

- ✅ Core game loop functional (plant → bloom → breed)
- ✅ Raid battles stable (<1% ZK proof failures)
- ✅ 50 mini-docs published (historian-verified)
- ✅ Onboarding flow <5 minutes (80%+ completion rate in beta)

**Business Readiness**:

- ✅ Immutable grant approved ($100K+ gas sponsorship)
- ✅ Terms of Service finalized (lawyer reviewed)
- ✅ GDPR compliance (cookie consent, privacy policy)
- ✅ Support infrastructure (Discord mods, FAQ)

**Marketing Readiness**:

- ✅ Landing page live (SEO-optimized)
- ✅ Launch trailer (60s, TikTok/X-ready)
- ✅ Press kit (screenshots, fact sheet, media contacts)
- ✅ 10 influencer partnerships confirmed (Day 1 content)

---

### 9.4 Post-Launch Roadmap (Months 7-12)

#### Month 7: Optimization & Retention

**Goals**:

- Improve D7 retention from 40% → 50%
- Fix top 10 bugs reported by players
- Add requested QoL features (bulk actions, favorites)

**New Features**:

- Garden themes ($5 cosmetics, revenue diversification)
- Guild chat (in-game, no Discord required)

---

#### Month 8: Season 2 Launch

**Theme**: South Sea Bubble (1720 England)

**New Content**:

- 10 new legendary tulips (Season 2 exclusive)
- 20 new mini-docs (British history, East India Company)
- New raid mode: 3v3v3 free-for-all
- Historical parallels: British Parliament speculation, King George I involvement

**Marketing**: "Relive history's second-biggest bubble!"

---

#### Month 9: Mainstream Push

**Goals**:

- 20% non-crypto users (History Hannah persona)
- University partnerships (2 economics departments)

**New Features**:

- Educator Mode (classroom accounts, no trading)
- Quiz certification ("Tulip Mania Scholar" badge)

**Marketing**: Press outreach (TechCrunch, The Verge, NYT Games section)

---

#### Month 10: Mobile App (PWA)

**Goals**:

- Installable PWA (iOS/Android home screen)
- Push notifications (bloom reveals, raid invites)

**Technical**:

- Service worker (offline support)
- App icons + splash screens

---

#### Month 11: Advanced Features

**Goals**:

- Cross-guild alliances (10v10v10 mega-raids)
- Tulip leasing (lend NFTs for % of trading profit)
- DAO governance (players vote on Season 3 theme)

---

#### Month 12: Scale & Internationalization

**Goals**:

- 100K DAU (10× growth from launch)
- 5 languages (Dutch, Spanish, Mandarin, Japanese, French)

**Infrastructure**:

- Multi-region deployment (reduce latency)
- Database sharding (handle data growth)

---

## 10. Risk Management

This section identifies critical risks from stress testing, assigns probabilities, and defines mitigation strategies.

---

### 10.1 Technical Risks

#### RISK-T-001: ZK Proving Latency >5s

**Probability**: 20% (Low)  
**Impact**: High (players rage-quit mid-raid)  
**Severity**: P1 (High Priority)

**Root Cause**:

- Low-end mobile devices (<4GB RAM)
- WebGPU not supported (20% of devices)
- Complex circuits (>500 constraints)

**Mitigation Strategies**:

1. **Hybrid Optimistic Fallback**: If proving >5s, execute moves immediately, prove async
2. **Circuit Optimization**: Reduce constraints to <300 (target <2s on iPhone 12)
3. **Server-Side Proving**: AWS Lambda fallback (10s latency, rare edge case)

**Monitoring**:

- Track P95 proving latency (alert if >3s)
- Log devices with fallback activation (identify problem models)

**Contingency Plan**:

- If >10% fallback rate: Simplify circuits further OR disable raids temporarily

---

#### RISK-T-002: Smart Contract Exploit

**Probability**: 5% (Very Low)  
**Impact**: Critical (guild treasuries drained, reputation destroyed)  
**Severity**: P0 (Critical)

**Root Cause**:

- Reentrancy attack (classic Solidity vulnerability)
- Access control bypass (privilege escalation)
- Integer overflow/underflow

**Mitigation Strategies**:

1. **Pre-Launch Audit**: OpenZeppelin audit ($50K-$80K)
2. **Security Patterns**: ReentrancyGuard, AccessControl, SafeMath
3. **Bug Bounty**: $50K reward for critical vulnerabilities
4. **Emergency Pause**: Multi-sig can pause contracts (48h timelock for upgrades)

**Monitoring**:

- On-chain monitoring (Forta alerts for suspicious transactions)
- Daily transaction review (look for anomalies)

**Contingency Plan**:

- If exploit detected: Pause contracts → deploy fix via proxy → audit patch → resume

---

#### RISK-T-003: Immutable API Downtime

**Probability**: 10% (Low)  
**Impact**: Medium (players can't trade, but gameplay continues)  
**Severity**: P2 (Medium Priority)

**Root Cause**:

- Immutable infrastructure outage (99.9% SLA = 43 min/month)
- Rate limiting (50 req/s exceeded)

**Mitigation Strategies**:

1. **Fallback to MetaMask**: If Passport unavailable, use ethers.js direct
2. **Circuit Breaker**: Fail gracefully, show cached data
3. **Retry Logic**: Exponential backoff (3 retries over 30s)

**Monitoring**:

- Synthetic checks (ping Immutable API every 5 min)
- Error rate dashboard (alert if >1% API failures)

**Contingency Plan**:

- If downtime >1 hour: Disable trading temporarily, notify players via banner

---

### 10.2 Product Risks

#### RISK-P-001: Week 1 DAU <1K (Death Spiral)

**Probability**: 30% (Medium)  
**Impact**: Critical (cannot activate guild network effects)  
**Severity**: P0 (Critical)

**Root Cause**:

- Poor GTM execution (no influencer partnerships)
- Onboarding friction (Passport confusion)
- Boring gameplay (core loop not fun)

**Mitigation Strategies**:

1. **Pre-Launch Hype**: 10 influencer partnerships (Day 1 content)
2. **Streamlined Onboarding**: Skip wallet jargon, auto-create Passport
3. **AI Phantom Raiders**: Solo Empire Builder mode (3K DAU pivot)

**Monitoring**:

- Daily DAU tracking (alert if <500 by Week 1)
- Onboarding funnel analysis (identify drop-off points)

**Contingency Plan**:

- If <1K by Week 2: Activate AI raiders, shift marketing to History Hannah persona

---

#### RISK-P-002: D7 Retention <25% (Unsustainable Churn)

**Probability**: 25% (Low-Medium)  
**Impact**: High (cannot achieve profitability at 8% trading rate)  
**Severity**: P1 (High Priority)

**Root Cause**:

- Daily loop too grindy (burnout after Day 3)
- No social bonds (guilds feel optional)
- Competitors launch clones (players switch)

**Mitigation Strategies**:

1. **Offline Progression**: Tulips bloom while players sleep (reduce FOMO)
2. **Guild Obligations**: Lending pools create social debt (guilt if leave)
3. **Viral K-Factor >1.2**: Friends join, creating social pressure to stay

**Monitoring**:

- Cohort retention dashboard (flag if D7 <35%)
- Exit surveys ("Why did you quit?" optional form)

**Contingency Plan**:

- If D7 <30%: Reduce breeding cooldowns, increase bloom rewards, add daily quests

---

#### RISK-P-003: Clone Marketing Flood

**Probability**: 60% (High)  
**Impact**: Medium (split player base, reputation damage)  
**Severity**: P2 (Medium Priority)

**Root Cause**:

- Game concept simple to copy (idle breeding + auctions)
- Competitors skip ZK complexity (faster time-to-market)
- Paid ads outspend organic growth

**Mitigation Strategies**:

1. **Cultural Moat**: Own "1637 Tulip Mania" narrative (Vitalik-retweet-worthy)
2. **Technical Moat**: ZK raids = 6-12 month clone delay
3. **Viral K-Factor >1.2**: Organic growth beats paid ads long-term

**Monitoring**:

- Google Alerts ("tulip mania game" keyword)
- Competitor tracker (Sensor Tower app rankings)

**Contingency Plan**:

- If clone launches: Emphasize provably fair ZK proofs (trust differentiation)

---

### 10.3 Business Risks

#### RISK-B-001: Immutable Grant Rejected

**Probability**: 15% (Low)  
**Impact**: High (cannot afford $45/mo gas costs at scale)  
**Severity**: P1 (High Priority)

**Root Cause**:

- Grant application incomplete (missing metrics)
- Immutable prioritizes other games
- Budget exhausted (grants closed)

**Mitigation Strategies**:

1. **Early Application**: Submit 3 months before launch (increase approval odds)
2. **Strong Metrics**: Show traction (beta signups, social media buzz)
3. **Fallback Funding**: Bootstrap gas costs from personal funds ($45/mo manageable)

**Monitoring**:

- Grant status tracker (follow up every 2 weeks)

**Contingency Plan**:

- If rejected: Absorb gas costs until profitable (breakeven at 3K DAU with 8% trading rate)

---

#### RISK-B-002: Royalty Revenue <$14.4K/mo (Unprofitable)

**Probability**: 20% (Low)  
**Impact**: Medium (negative cash flow, runway concerns)  
**Severity**: P2 (Medium Priority)

**Root Cause**:

- Trading rate <8% (players hoard tulips instead of selling)
- Low DAU (<10K, insufficient volume)
- Market crash (IMX token price drops, tulip values crash)

**Mitigation Strategies**:

1. **Trading Incentives**: Collegie auctions are default action after Rare+ blooms
2. **Guild Obligations**: Lending pools require tulip collateral (forces trading)
3. **Crash Events**: 5% wilt during bubble burst (scarcity drives demand)

**Monitoring**:

- Weekly trading rate dashboard (alert if <10%)
- Revenue projections updated monthly

**Contingency Plan**:

- If revenue <$10K/mo by Month 3: Introduce cosmetic sales (garden themes $5)

---

#### RISK-B-003: University Partnerships Fail

**Probability**: 40% (Medium)  
**Impact**: Low (nice-to-have, not critical for launch)  
**Severity**: P3 (Low Priority)

**Root Cause**:

- Approval process slow (6-12 months)
- Faculty skeptical of NFTs/crypto
- Budget constraints (no funding for curriculum integration)

**Mitigation Strategies**:

1. **Educator Mode Free**: No licensing fees (remove barrier)
2. **Historian Endorsements**: Get professors to vouch publicly
3. **Pilot Programs**: Offer 1-2 universities free trials

**Monitoring**:

- Partnership tracker (status of 5 university outreach efforts)

**Contingency Plan**:

- If partnerships fail: Focus on TikTok educational content (History Hannah persona)

---

### 10.4 Market Risks

#### RISK-M-001: Crypto Bear Market

**Probability**: 50% (Medium)  
**Impact**: Medium (DAU down 30-50%, trading volume crashes)  
**Severity**: P2 (Medium Priority)

**Root Cause**:

- Bitcoin drops below $50K (market panic)
- NFT floor prices collapse (tulips lose perceived value)
- Players leave crypto gaming entirely

**Mitigation Strategies**:

1. **Free-to-Play**: Zero entry cost (no barrier during bear market)
2. **Mainstream Appeal**: History Hannah persona (non-crypto audience)
3. **Solo Empire Builder**: AI raiders keep game fun at low DAU

**Monitoring**:

- Bitcoin price tracker (alert if <$60K)
- Immutable ecosystem DAU (flag if drops >20%)

**Contingency Plan**:

- If bear market: Shift marketing to educational TikTok (pivot from crypto narrative)

---

#### RISK-M-002: Regulatory Crackdown

**Probability**: 10% (Low)  
**Impact**: Critical (game shutdown, legal liability)  
**Severity**: P0 (Critical)

**Root Cause**:

- SEC classifies tulip NFTs as securities (Howey Test)
- EU bans NFT gaming (MICA regulations)
- KYC requirements added (destroys UX)

**Mitigation Strategies**:

1. **Legal Analysis**: Pre-launch Howey Test review (confirm "game items, not securities")
2. **Terms of Service**: Disclaim financial advice, entertainment only
3. **Geographic Blocks**: Disable in restricted jurisdictions (if required)

**Monitoring**:

- Regulatory news tracker (SEC, ESMA announcements)
- Legal counsel on retainer ($5K/mo)

**Contingency Plan**:

- If crackdown: Pivot to non-NFT version (cosmetic-only sales, no trading)

---

## 11. Success Metrics & Analytics

This section defines KPIs, measurement strategies, and analytics infrastructure for tracking product success.

---

### 11.1 North Star Metric

**Primary KPI**: **Daily Active Users (DAU)**

**Why DAU**:

- Guild network effects require critical mass (10K+ DAU)
- Revenue scales with DAU (12% trading rate = $54K/mo @ 10K DAU)
- Retention/virality compound into DAU growth

**Target Trajectory**:

- **Week 1**: 1,000 DAU
- **Week 4**: 10,000 DAU
- **Month 3**: 30,000 DAU
- **Month 6**: 50,000 DAU

---

### 11.2 Core Metrics Dashboard

#### 11.2.1 Acquisition Metrics

| Metric                   | Definition                   | Target                | Measurement          |
| ------------------------ | ---------------------------- | --------------------- | -------------------- |
| **New Signups**          | First tulip planted          | 500/day @ 10K DAU     | PostHog event        |
| **Viral K-Factor**       | New signups / active players | >1.2                  | Referral attribution |
| **Share Rate**           | Shares / DAU                 | 3.5 shares/player/day | Social API callbacks |
| **Cost Per Acquisition** | Ad spend / new signups       | $0 (organic only)     | Google Analytics     |

**Dashboard View**:

```
Acquisition Funnel (Last 7 Days)
├─ Landing Page Views: 50K
├─ "Play Now" Clicks: 10K (20% CTR)
├─ Passport Created: 8K (80% conversion)
├─ First Tulip Planted: 7K (88% completion)
└─ Day 2 Return: 4.2K (60% D1 retention)
```

#### 11.2.2 Engagement Metrics

| Metric                 | Definition                 | Target           | Measurement              |
| ---------------------- | -------------------------- | ---------------- | ------------------------ |
| **Session Length**     | Avg minutes per session    | 15-20 min        | PostHog session tracking |
| **Daily Actions**      | Avg actions per player/day | 10-15 actions    | Event count              |
| **Raid Participation** | % of DAU in raids          | 40% during Mania | Raid join events         |
| **Trading Activity**   | % of DAU listing tulips    | 12% weekly       | Orderbook API calls      |

**Dashboard View**:

```
Engagement Heatmap (Today)
         00:00  06:00  12:00  18:00  24:00
Plant     ████   ██     ████   ██████  ███
Water     ███    █      ███    █████   ██
Bloom     ██████ ████   ██     ███     ████
Raid      ██     █      ███    ████████ ███
Trade     ███    ██     ████   ██████  ████
```

#### 11.2.3 Retention Metrics

| Metric            | Definition           | Target | Industry Benchmark |
| ----------------- | -------------------- | ------ | ------------------ |
| **D1 Retention**  | % return Day 2       | 60%    | 40% (idle games)   |
| **D7 Retention**  | % return Day 8       | 40%    | 20% (idle games)   |
| **D30 Retention** | % return Day 31      | 20%    | 10% (idle games)   |
| **Churn Rate**    | % stop playing/month | 15%    | 30% (idle games)   |

**Cohort Analysis**:

```
Retention by Cohort (% Returning)
Cohort       D1    D7    D14   D30   D60
Week 1      65%   45%   30%   22%   18%
Week 2      62%   42%   28%   20%   --
Week 3      68%   48%   32%   --    --
Week 4      70%   50%   --    --    --
```

#### 11.2.4 Monetization Metrics

| Metric              | Definition              | Target            | Measurement           |
| ------------------- | ----------------------- | ----------------- | --------------------- |
| **Trading Volume**  | Total IMX traded/week   | $450K @ 10K DAU   | Immutable API         |
| **Royalty Revenue** | 2.5% of trading volume  | $54K/mo @ 10K DAU | Smart contract events |
| **ARPU**            | Revenue per user/month  | $5.40 @ 12% rate  | Revenue / MAU         |
| **LTV**             | Lifetime value per user | $27 (5-month avg) | ARPU × avg lifespan   |

**Revenue Dashboard**:

```
Monthly Royalty Revenue (Last 6 Months)
Month 1: $5K   (1K DAU, 10% trading rate)
Month 2: $14K  (3K DAU, 11% trading rate)
Month 3: $32K  (6K DAU, 12% trading rate)
Month 4: $54K  (10K DAU, 12% trading rate)
Month 5: $81K  (15K DAU, 12% trading rate)
Month 6: $108K (20K DAU, 12% trading rate)
```

---

### 11.3 Health Metrics (Early Warning System)

**Critical Alerts** (Slack notifications):

| Metric                      | Threshold          | Action                       |
| --------------------------- | ------------------ | ---------------------------- |
| **DAU drops >20%**          | Day-over-day       | Investigate immediately (P0) |
| **D7 retention <35%**       | Weekly cohort      | Review gameplay loop (P1)    |
| **Raid participation <30%** | During Mania peaks | Check matchmaking (P1)       |
| **Trading rate <8%**        | Weekly average     | Adjust incentives (P2)       |
| **K-factor <0.8**           | 7-day rolling      | Fix viral mechanics (P1)     |
| **Error rate >1%**          | P95 API responses  | Debug backend (P0)           |

---

### 11.4 Viral Metrics

#### 11.4.1 Share Analytics

**Share Breakdown** (by type):

```
Daily Shares @ 10K DAU (Target: 35K shares/day)
├─ Bloom Reveal GIFs: 15K (43%)
├─ Raid Victory Clips: 10K (29%)
├─ Mini-Doc TikToks: 7K (20%)
├─ Garden Profile Cards: 3K (8%)
└─ Total: 35K shares/day (3.5 shares/player)
```

**Social Media Impressions**:

- **X (Twitter)**: 2M impressions/month
- **TikTok**: 5M views/month (mini-docs viral potential)
- **Instagram**: 500K impressions/month
- **Discord**: 10K guild chat messages/day

#### 11.4.2 Referral Program Metrics

| Metric                   | Target                           | Measurement          |
| ------------------------ | -------------------------------- | -------------------- |
| **Referral Conversion**  | 30% (invitee plants first tulip) | Attribution tracking |
| **Avg Referrals/Player** | 2.5 friends invited              | Invite link clicks   |
| **Top Referrer Reward**  | 50+ friends = Legendary seed     | Leaderboard          |

---

### 11.5 Analytics Implementation

#### 11.5.1 Event Tracking (PostHog)

**Key Events**:

```typescript
// Player actions
posthog.capture("tulip_planted", { rarity: "Uncommon", plot_id: 3 });
posthog.capture("tulip_bloomed", { rarity: "Rare", reveal_time_ms: 850 });
posthog.capture("tulips_bred", {
  parent_a: "Rare",
  parent_b: "Epic",
  child: "Legendary",
});
posthog.capture("auction_listed", { rarity: "Rare", starting_price_imx: 5 });
posthog.capture("auction_sold", {
  rarity: "Rare",
  final_price_imx: 7,
  duration_hours: 12,
});

// Social actions
posthog.capture("bloom_shared", { platform: "twitter", rarity: "Legendary" });
posthog.capture("raid_clip_shared", { platform: "tiktok", result: "victory" });
posthog.capture("friend_invited", { referral_code: "abc123" });

// Guild actions
posthog.capture("guild_created", {
  name: "Tulip Titans",
  initial_tvl_imx: 500,
});
posthog.capture("raid_joined", { guild_id: 42, raid_size: "5v5" });
posthog.capture("raid_completed", {
  guild_id: 42,
  result: "victory",
  loot_count: 5,
});

// Mania Meter events
posthog.capture("mania_meter_updated", {
  old_value: 75,
  new_value: 82,
  trigger: "raid_win",
});
posthog.capture("crash_event_triggered", {
  meter_value: 96,
  wilted_tulips: 5000,
});
```

#### 11.5.2 Funnel Analysis

**Onboarding Funnel**:

```
Landing Page → Passport → First Plant → D2 Return → D7 Return
100%          80%        88%           60%         40%
```

**Monetization Funnel**:

```
Rare Bloom → View Auction UI → List Tulip → Sale Complete
100%         70%               50%          85%
```

#### 11.5.3 A/B Testing Framework

**Test Examples**:

- **Test 1**: Default action after Rare bloom (Breed vs Sell)
  - **Hypothesis**: Suggesting "Sell" increases trading rate
  - **Metric**: Trading rate (target 12% → 15%)
- **Test 2**: Raid invite timing (Immediate vs 5s delay)
  - **Hypothesis**: Delay reduces accidental clicks
  - **Metric**: Raid completion rate (target 70% → 80%)

**Implementation**:

```typescript
const variant = posthog.getFeatureFlag("rare_bloom_cta");
if (variant === "suggest_sell") {
  showSuggestion("List this tulip in Collegie auction?");
} else {
  showSuggestion("Breed this tulip for better offspring?");
}
```

---

## 12. Appendices

### 12.1 Glossary

**Blockchain/Crypto Terms**:

- **zkEVM**: Zero-knowledge Ethereum Virtual Machine (rollup technology)
- **Gasless**: Transactions with $0 cost to player (platform sponsors fees)
- **NFT**: Non-fungible token (unique digital asset)
- **IMX**: Immutable X token (used for trading tulip NFTs)
- **Passport**: Immutable's embedded wallet (OAuth-style authentication)
- **Orderbook**: On-chain marketplace for buying/selling NFTs

**Game Mechanics**:

- **Mania Meter**: Global 0-100% gauge driving raid events
- **Collegie**: Dutch-style auction house (price decays over time)
- **Raid**: Guild vs guild PvP battle for tulip loot
- **ZK Proof**: Zero-knowledge cryptographic proof (provably fair RNG)
- **Bloom Reveal**: 24h wait → tulip rarity revealed (slot machine mechanic)

**Historical Terms**:

- **Tulip Mania**: 1637 Dutch economic bubble (first recorded speculation frenzy)
- **Semper Augustus**: Most valuable tulip variety (traded for a house)
- **Windhandel**: Dutch futures trading (selling tulips not yet grown)
- **Collegie**: Taverns where tulip auctions occurred

---

### 12.2 References

**Source Documents**:

1. **Product Brief**: `docs/product-brief-mytulipmania.md` (603 lines, 19 sections)
2. **Brainstorming Session**: `docs/analysis/brainstorming-session-2025-12-05.md` (3 rounds, 87% success probability)
3. **Analyst Q&A**: `docs/design/05_ANALYST_QA.md` (Economics validation, 2025 data)

**External Research**:

- **Immutable zkEVM Docs**: https://docs.immutable.com
- **Phaser 3 Documentation**: https://photonstorm.github.io/phaser3-docs
- **circom ZK Circuits**: https://docs.circom.io
- **TRIZ Methodology**: Stress testing framework (failure mode analysis)

---

### 12.3 Competitive Analysis Summary

**Direct Competitors** (Idle Breeding Games):

- **Axie Infinity**: Pay-to-play (high barrier), Ronin network (not gasless)
- **Sunflower Land**: Polygon (gas fees during congestion), no PvP
- **Pixels**: Casual farming (no speculation satire), Ronin network

**MyTulipMania Advantages**:

- ✅ **Gasless**: Zero barrier to entry ($0 to play forever)
- ✅ **ZK Proofs**: Provably fair RNG (trust premium)
- ✅ **Cultural Moat**: First-mover on "1637 Tulip Mania" narrative
- ✅ **Guild Wars**: Network effects impossible to bootstrap

**Indirect Competitors** (Casual/Idle Games):

- **Hamster Kombat**: Telegram tap-to-earn (viral but no depth)
- **Cookie Clicker**: Web2 idle (no ownership, no trading)
- **Candy Crush**: Match-3 (different genre, but competes for time)

---

### 12.4 Technical Specifications Summary

**Smart Contracts**:

- **Language**: Solidity 0.8.20
- **Network**: Immutable zkEVM (Chain ID: 13371)
- **Gas Model**: Gasless (Immutable sponsors via Passport)
- **Audit**: OpenZeppelin ($50K-$80K, 4-6 weeks)

**ZK Circuits**:

- **Language**: circom 2.1.6
- **Proof System**: Groth16 (128-byte proofs, <50K gas verification)
- **Proving**: Client-side WebGPU (<3s target)
- **Audit**: Trail of Bits ($80K-$120K, 6-8 weeks)

**Frontend**:

- **Game Engine**: Phaser 3.60+
- **UI Framework**: React 18 + Next.js 14
- **Deployment**: Vercel (serverless)
- **Performance**: <2s page load, 60 FPS gameplay

**Backend**:

- **Database**: PostgreSQL 15 (Supabase)
- **Cache**: Redis 7.x (Upstash)
- **CDN**: Cloudflare R2 (videos + assets)
- **Analytics**: PostHog (self-hosted option available)

---

### 12.5 Team Roles & Responsibilities

**Development Team** (6-8 people):

- **2 Smart Contract Devs**: Solidity, Foundry, Hardhat
- **1 ZK Circuit Dev**: circom, cryptography, Groth16
- **2 Frontend Devs**: React, Phaser, TypeScript
- **1 Backend Dev**: Next.js, PostgreSQL, Redis
- **1 QA Engineer**: Playwright E2E tests, load testing
- **1 Game Designer**: Balancing, UX, onboarding flows

**Content Team** (2-3 people):

- **1 Historian**: Fact-checking, mini-doc scripts
- **1 Video Editor**: TikTok-style 30-60s videos
- **1 Community Manager**: Discord, support, moderation

**External Partners**:

- **Auditors**: OpenZeppelin (smart contracts), Trail of Bits (ZK circuits)
- **Legal**: Crypto lawyer (regulatory compliance, Terms of Service)
- **Marketing**: 10 influencer partnerships (Day 1 content)

---

### 12.6 Budget Summary

**Development Costs** (One-Time):

- Smart contract audit: $50K-$80K
- ZK circuit audit: $80K-$120K
- Penetration testing: $10K-$20K
- Legal fees: $5K-$10K
- **Total**: $145K-$230K

**Monthly Operating Costs** (@ 10K DAU):

- Infrastructure (Vercel, Supabase, CDN): $150
- Gas sponsorship (Immutable): $45
- Team salaries: $40K (6 devs @ $80K/yr avg)
- Content creation: $5K (videos, historians)
- Marketing: $5K (influencer partnerships)
- **Total**: $50.2K/mo

**Revenue Projections** (@ 10K DAU, 12% trading rate):

- Monthly royalties: $54K
- **Profit**: $3.8K/mo (7% margin, breakeven achieved)

**Immutable Grant Ask**:

- **Estimated Amount**: $250K-$500K
- **Allocation**: Gas sponsorship ($100K), marketing co-op ($100K), ecosystem development ($50K-$300K)
- **Justification**: 10K DAU target = top 5 game on Immutable, proven viral mechanics, educational value

**Funding Strategy**:

- **Bootstrapped**: Personal funds ($50K seed)
- **Immutable Grant**: $100K-$500K (gas sponsorship + marketing)
- **Revenue-Funded**: Profitable by Month 3, reinvest in growth

---

### 12.7 Launch Contacts

**Key Stakeholders**:

- **Product Owner**: TulipMaster (project@mytulipmania.com)
- **Technical Lead**: Winston (architect@mytulipmania.com)
- **Community Manager**: Discord mods (support@mytulipmania.com)

**External Partners**:

- **Immutable Partnership**: partnerships@immutable.com
- **Press Inquiries**: press@mytulipmania.com
- **Security Vulnerabilities**: security@mytulipmania.com (bug bounty)

---

**END OF PRODUCT REQUIREMENTS DOCUMENT**

---

**Document Status**: ✅ **COMPLETE - Ready for Review**

**Next Steps**:

1. **Stakeholder Review**: TulipMaster, Winston, Amelia, Murat (1 week)
2. **Approval Sign-Offs**: All roles approve (capture signatures)
3. **Handoff Decision**: Choose next agent:
   - **Option A**: Barry (Quick Flow Solo Dev) → Rapid Day 1 prototype
   - **Option B**: Winston (Architect) → Full system design documents
   - **Option C**: Amelia (Dev) → TDD story implementation

**PRD Version**: 1.0 (DRAFT)  
**Last Updated**: December 5, 2025  
**Author**: John (Product Manager)  
**Total Pages**: 75+ sections, 10,000+ words  
**Confidence Level**: 87% (stress-tested via TRIZ analysis)

---
