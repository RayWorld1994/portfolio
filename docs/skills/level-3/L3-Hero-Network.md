# L3 — Hero Network Animation

## Purpose
Build the glowing hexagonal network canvas that anchors the portfolio.

## Scope
Hero (and later page-wide) hexagonal network visualization.

## Responsibilities
- Hex honeycomb grid, many low-opacity nodes.
- Aqua light traverses randomly; nodes illuminate then fade.
- Slight per-visit variation.
- Future: pointer bends nearby nodes.

## Dependencies
- `L2-GSAP-Motion`
- `L2-Performance`
- `L2-Accessibility`
- `docs/design-system/`

## Exclusions
- Typing headline (`L3-Hero-Typing`).
- Skills force-graph (`L3-Skills-Graph`).

## Usage Examples
- `HeroNetwork` canvas component lazy-loaded on home.
- Pause when offscreen / reduced-motion static frame.

## Best Practices
- Prefer canvas/WebGL over DOM nodes.
- Match accent tokens (`#38D9C7` dark / `#14B8A6` light targets).
- Keep aesthetic elegant, not cyberpunk.

## Common Mistakes
- Blocking hydration on network init.
- Ignoring DPI/`devicePixelRatio`.
- Running full simulation while tab hidden.
