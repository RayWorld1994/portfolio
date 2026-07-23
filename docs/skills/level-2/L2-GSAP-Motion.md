# L2 — GSAP & Motion

## Purpose
Motion systems for scroll, page transitions, and micro-interactions.

## Scope
When/how to use GSAP, Motion One, and CSS animation in the portfolio.

## Responsibilities
- Use CSS/`tw-animate` for simple UI motion.
- Use GSAP (planned) for timeline/scroll-linked network illumination.
- Prefer transforming the network between sections over hard fades.
- Respect `prefers-reduced-motion`.

## Dependencies
- `L2-React-Architecture`
- `L2-Accessibility`
- `L2-Performance`
- Level 3 hero/timeline/project skills

## Exclusions
- Canvas drawing algorithms (`L3-Hero-Network`).
- Form validation UX copy (`L2-Forms`).

## Usage Examples
- Section enter: illuminate network region + rise-in content.
- Buttons: slight lift + light sweep on hover.

## Best Practices
- Ship 2–3 intentional motions per major visual surface; avoid motion noise.
- Kill/cleanup GSAP contexts on unmount.
- Keep native cursor; optional subtle aqua follower later.

## Common Mistakes
- Animating layout thrash properties when transform/opacity suffice.
- Ignoring reduced-motion.
- Running heavy timelines on the main thread without gating offscreen.
