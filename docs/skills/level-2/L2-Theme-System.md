# L2 — Theme System

## Purpose
Light/dark/auto theming with SSR-safe initialization.

## Scope
Theme tokens, storage, and flash-prevention.

## Responsibilities
- Init theme early via inline script in `__root.tsx` (already present).
- Persist `theme` in `localStorage`: `light` | `dark` | `auto`.
- Resolve `auto` with `prefers-color-scheme`.
- Tokens in `src/styles.css`; migrate toward Network palette in design-system docs.

## Dependencies
- `L2-Tailwind-CSS`
- `L3-Theme-Switcher`

## Exclusions
- Marketing copy.
- Animation choreography beyond color transition.

## Usage Examples
- Toggle cycles light → dark → auto (current `ThemeToggle`).
- ~400ms color transitions per blueprint.

## Best Practices
- Always `suppressHydrationWarning` on `<html>` when classing theme.
- Keep init script and React toggle logic aligned.

## Common Mistakes
- Setting theme only in React without the pre-hydration script (FOUC).
- Storing resolved theme instead of mode (`auto` lost).
