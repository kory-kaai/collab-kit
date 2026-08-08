# Release process

Lightweight release steps for maintainers.

1. Update `CHANGELOG.md` with changes under `[Unreleased]` or a new version heading.
2. Bump `version` in `package.json` if applicable.
3. Open a PR with title `chore: release vX.Y.Z`.
4. Merge after CI passes.
5. Create a GitHub Release from the tag (optional for small projects).

For solo-maintained repos, a tagged release is optional — merging to `main` is often enough.
