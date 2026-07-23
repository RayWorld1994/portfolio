# L2 — Accessibility

## Purpose
Ensure keyboard, screen reader, and motion accessibility.

## Scope
A11y requirements for UI, animations, and canvas features.

## Responsibilities
- Semantic landmarks and headings.
- Visible focus styles.
- Labels on icon buttons (`ThemeToggle` pattern).
- Canvas animations must provide text alternatives / pause controls when needed.

## Dependencies
- L1 skills
- `L2-React-Architecture`

## Exclusions
- SEO meta strategy (`L3-SEO`).

## Usage Examples
- Theme toggle: descriptive `aria-label`.
- Typing hero: ensure final message exists in DOM for AT.

## Best Practices
- Test keyboard paths for nav, forms, dialogs.
- Honor `prefers-reduced-motion`.

## Common Mistakes
- Color-only state (glow) without text/shape cues.
- Keyboard traps in overlays (terminal easter egg).
