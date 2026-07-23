# ADR-001: TanStack Start (React) over Angular

## Status

Accepted

## Context

The Network portfolio blueprint originally listed Angular + GSAP + Motion One.
This repository was scaffolded with TanStack Start (React 19), TanStack Router,
Tailwind CSS 4, Biome, and Nitro.

## Decision

Implement The Network on **TanStack Start + React**, not Angular.

## Consequences

- Skills, docs, and agents must treat React/TanStack as source of truth.
- Blueprint visual/UX intent remains valid (network metaphor, palette, motion).
- Blueprint “Angular architecture” roadmap items map to React feature modules
  under `src/` (and later `src/features/`).
- GSAP / Motion One / Lenis remain optional dependencies to add when motion
  work begins (`L2-GSAP-Motion`, Level 3 hero skills).
