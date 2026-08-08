# Pull request workflow

A lightweight PR process for repos with one to five maintainers.

## Branch naming

| Prefix | Use case |
|--------|----------|
| `feat/` | New functionality |
| `fix/` | Bug fixes |
| `docs/` | Documentation only |
| `chore/` | Tooling, deps, CI |

Example: `feat/branch-name-validator`

## Opening a PR

1. Keep PRs small — one logical change per PR.
2. Link related issues with `Closes #123` in the description.
3. Request review when you want feedback; solo maintainers may merge without review for docs-only changes.

## Merge strategies

- **Squash merge** — default for feature work (clean history).
- **Merge commit** — when preserving individual commits matters (e.g. co-authored work).
- **Rebase merge** — linear history without a merge commit.

## Solo maintainer note

When you are the only contributor, merging your own PR without a formal review is normal for small projects. Use your judgment — production repos should still get review when possible.
