# L2 — Performance

## Purpose
Protect Core Web Vitals and interaction smoothness.

## Scope
Bundle size, rendering cost, animation budgeting, and asset strategy.

## Responsibilities
- Code-split heavy animation/WebGL modules.
- Lazy-load below-fold feature graphs.
- Avoid main-thread long tasks from network simulation.
- Follow `.agents/skills/vercel-react-best-practices`.

## Dependencies
- `L2-React-Architecture`
- `L2-TanStack-Router`
- `L2-GSAP-Motion`

## Exclusions
- SEO specifics (`L3-SEO`).
- Analytics script loading details beyond deferral (`L3-Analytics`).

## Usage Examples
- Dynamic `import()` for hero network canvas.
- `content-visibility` for long timeline sections when appropriate.

## Best Practices
- Measure before micro-optimizing.
- Defer third-party scripts.

## Common Mistakes
- Shipping Three.js without a proven need.
- Animating hundreds of DOM nodes instead of canvas/WebGL.
