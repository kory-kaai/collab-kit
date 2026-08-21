# FAQ

## Why Conventional Commits?

They make changelog generation and release tooling predictable. The validator enforces a minimal subset.

## Can I merge my own PRs?

On small solo projects, yes — especially for docs-only changes. See [pr-workflow.md](pr-workflow.md).

## How do co-author trailers work?

See [pair-programming.md](pair-programming.md). Both authors must be real contributors to the change.

## What branch prefix should I use?

| Change type | Prefix |
|-------------|--------|
| New feature | `feat/` |
| Bug fix | `fix/` |
| Documentation | `docs/` |
| CI / tooling | `chore/` or `ci/` |

Use `node tools/branch-name.mjs your-branch-name` to check or get a suggestion.

## What does `--oss-toolchain` add?

It copies repomark CI, badgekit-friendly README examples, and shipkit release docs in one pass. See [examples/oss-toolchain.md](../examples/oss-toolchain.md).

Q: Which `@topdaily-dev` packages pair with collab-kit? See examples/oss-toolchain.md.
