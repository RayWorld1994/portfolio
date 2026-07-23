# L2 — Forms

## Purpose
Accessible, validated forms with progressive enhancement where possible.

## Scope
Contact and any future form flows.

## Responsibilities
- Validate with Zod on client and server.
- Submit via `createServerFn` (POST).
- Surface field errors accessibly (`aria-invalid`, live regions).

## Dependencies
- `L2-Accessibility`
- `L2-API-Layer`
- `L3-Contact-Form`

## Exclusions
- Analytics event naming (`L3-Analytics`).
- Theme controls (`L3-Theme-Switcher`).

## Usage Examples
- Contact: name/email/message → server fn → success state.

## Best Practices
- Never trust client-only validation.
- Preserve user input on failure.

## Common Mistakes
- Only validating in the UI.
- Using `alert()` for errors.
