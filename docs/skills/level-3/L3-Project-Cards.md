# L3 — Project Cards

## Purpose
Interactive project cards with refined hover motion.

## Scope
Projects listing/detail card interactions.

## Responsibilities
Hover: lift, glow, screenshot zoom, CTA slide-up, spring feel.
Cards are interaction containers here (exception to "no cards in hero").

## Dependencies
- `L2-Tailwind-CSS`
- `L2-GSAP-Motion`
- `L2-Performance`

## Exclusions
- Hero layout rules.
- Contact form.

## Usage Examples
- Grid of projects with image, summary, tech chips, links.

## Best Practices
- Prefer CSS/spring library over heavy timelines per card.
- Lazy-load screenshots.

## Common Mistakes
- Putting project cards in the first hero viewport.
- Autoplaying heavy video on hover without gesture.
