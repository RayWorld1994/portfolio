# L3 — Theme Switcher

## Purpose
Evolve the theme control UX while staying SSR-safe.

## Scope
Theme toggle UI and behavior refinements.

## Responsibilities
- Preserve light/dark/auto cycle unless product changes.
- Keep labels clear for AT.
- Animate token transitions ~400ms.

## Dependencies
- `L2-Theme-System`
- `L2-Accessibility`

## Exclusions
- Designing new color tokens (design-system docs + `L2-Tailwind-CSS`).

## Usage Examples
- Enhance `src/components/ThemeToggle.tsx` with icons while keeping aria text.

## Best Practices
- Stay synchronized with `__root.tsx` init script.

## Common Mistakes
- Removing `auto` mode accidentally.
- FOUC regressions.
