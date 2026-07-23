# L1 — Core Principles

## Purpose
Define non-negotiable product and engineering principles for The Network portfolio.

## Scope
Always-on guidance for every task: product vision, consistency, token discipline, and dependency direction.

## Responsibilities
- Preserve the portfolio vision: interactive network experience, not a generic marketing site.
- Prefer modular knowledge: load only required Level 2/3 skills.
- Never reverse dependency flow (L3 → L2 → L1 only).
- Prefer clarity, performance, and accessibility over novelty.

## Dependencies
- None (root skill).

## Exclusions
- Feature-specific implementation details (Level 3).
- Library API deep-dives (Level 2 or installed agent skills).

## Usage Examples
- Before implementing hero work: confirm L1 principles, then load `L2-GSAP-Motion` + `L3-Hero-Network`.
- Before refactors: check folder structure and coding standards first.

## Best Practices
- One composition per viewport; brand-first hero.
- Reference other skills instead of duplicating rules.
- Keep Level 1 lightweight; put depth in L2/L3.

## Common Mistakes
- Loading every domain skill "just in case".
- Inventing a second visual language that fights the network concept.
- Copying Angular patterns from the blueprint into this React/TanStack codebase.

## Product Vision (summary)
Living hexagonal network = career growth. Modern, minimal, futuristic, elegant. Inspired by Apple / Linear / Stripe — not cyberpunk.

## Stack Truth
This repo is **TanStack Start + React 19 + Tailwind CSS 4 + Biome**, not Angular. Blueprint stack notes that conflict with the repo are superseded by `docs/decisions/`.
