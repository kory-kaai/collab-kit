# Changelog

All notable changes to this project are documented here.

## [Unreleased]

### Added

- Logo, demo screenshot, and social preview image for README
- "Why collab-kit?" comparison table and before/after file tree
- Promotion playbook with HN/Reddit drafts and awesome-list submission templates

## [0.3.1] - 2026-08-09

### Added

- npm trusted publishing via GitHub Actions OIDC
- npm version badge in README

### Fixed

- Renamed npm package to `@korykaai/collab-kit` (unscoped `collab-kit` conflicts with existing `collabkit` package)

## [0.3.0] - 2026-08-08

### Added

- `collab-kit init` CLI — scaffold PR templates, CI, hooks, tools, and docs into any repo
- `bin/collab-kit.mjs` with `init`, `validate-commit`, and `branch-name` commands
- Star-friendly README with badges and quick-start via `npx github:kory-kaai/collab-kit`

## [0.2.0] - 2026-08-08

### Added

- Commit message validator (`tools/validate-commit.mjs`)
- Branch name validator (`tools/branch-name.mjs`)
- Workflow documentation (PR process, issue triage, pair programming)
- GitHub issue/PR templates and CI workflow
