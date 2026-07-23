# L2 — Documentation

## Purpose
Keep human and AI docs accurate without duplication.

## Scope
Where product docs, ADRs, and skills live; how to update them.

## Responsibilities
- Product vision briefs stay in `.doc/`.
- Executable AI skills stay in `docs/skills/`.
- Decisions go in `docs/decisions/`.
- Update the skill that owns a rule; don't copy into three places.

## Dependencies
- `L1-Folder-Structure`
- Architecture guide: `.doc/AI_Skill_Architecture_Guide.md`

## Exclusions
- Code comments that restate obvious code.
- Vendor README mirrors.

## Usage Examples
- After adding a feature: add/adjust matching L3 skill.
- After a stack choice: add ADR.

## Best Practices
- Link to skills instead of pasting.
- Keep L1 short.

## Common Mistakes
- Documenting Angular while the repo is React.
- Orphan docs outside the agreed tree.
