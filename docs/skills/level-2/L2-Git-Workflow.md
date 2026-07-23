# L2 — Git Workflow

## Purpose
Safe git practices for this repo's agent and human workflow.

## Scope
Commits, branches, and PRs.

## Responsibilities
- Commit only when the user asks.
- Use conventional, why-focused messages.
- No force-push to main; no `--no-verify` unless explicitly requested.

## Dependencies
- `L1-Coding-Standards`

## Exclusions
- Deployment release process (`L3-Deployment`).

## Usage Examples
- User asks to commit → status/diff/log → stage → commit via HEREDOC.
- User asks for PR → push + `gh pr create`.

## Best Practices
- Keep commits focused.
- Never commit secrets (`.env`).

## Common Mistakes
- Amending pushed commits without explicit request.
- Bundling unrelated files into a commit.
