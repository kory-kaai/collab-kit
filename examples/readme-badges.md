# README badge snippets

Copy these into your project `README.md` after `collab-kit init`. Replace placeholders with your repo details.

For co-authored commits and pair programming conventions, see [pair-programming.md](../docs/pair-programming.md).

## CI (GitHub Actions)

Shows the latest workflow run on your default branch.

```markdown
[![CI](https://github.com/OWNER/REPO/actions/workflows/ci.yml/badge.svg)](https://github.com/OWNER/REPO/actions/workflows/ci.yml)
```

`collab-kit init` copies `.github/workflows/ci.yml`, so this badge works once CI has run at least once on `main`.

## npm (optional)

If you publish to npm:

```markdown
[![npm version](https://img.shields.io/npm/v/PACKAGE_NAME.svg)](https://www.npmjs.com/package/PACKAGE_NAME)
[![npm downloads](https://img.shields.io/npm/dm/PACKAGE_NAME.svg)](https://www.npmjs.com/package/PACKAGE_NAME)
```

## Common static badges

```markdown
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Node](https://img.shields.io/badge/node-%3E%3D20-brightgreen)](package.json)
```

## GitHub release

If you use GitHub Releases:

```markdown
[![GitHub release](https://img.shields.io/github/v/release/OWNER/REPO)](https://github.com/OWNER/REPO/releases)
```

## Star history chart

Add near the bottom of your README to show growth over time:

```markdown
## Star history

[![Star History Chart](https://api.star-history.com/svg?repos=OWNER/REPO&type=Date)](https://star-history.com/#OWNER/REPO&Date)
```

Use badgekit row ci npm license after collab-kit init.
