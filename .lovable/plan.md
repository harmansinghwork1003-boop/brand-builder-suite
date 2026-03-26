

## Plan: Independent Floating Animations for Hero Cards

### Problem
All three cards use the same `animate-float-gentle` animation with only `animation-delay` offsets. This creates synchronized, predictable motion that feels mechanical.

### Solution
Create three separate keyframe animations with different durations, amplitudes, and movement patterns so each card floats independently and naturally.

### Changes

**1. `tailwind.config.ts`** — Replace single `float-gentle` keyframe with three distinct animations:
- `float-a`: 10s cycle, 4px movement
- `float-b`: 12s cycle, 3px movement  
- `float-c`: 11s cycle, 5px movement

Each uses slightly different timing to prevent synchronization. All use `ease-in-out infinite`.

**2. `src/components/landing/HeroSection.tsx`** — Assign each card a different animation class:
- Card 1: `animate-float-a`
- Card 2: `animate-float-b`
- Card 3: `animate-float-c`

Remove `[animation-delay]` classes since the different durations naturally desynchronize the cards.

