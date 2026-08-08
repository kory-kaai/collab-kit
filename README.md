# Collab Kit

**Bootstrap GitHub team workflows in one command.** PR templates, issue templates, CI, git hooks, commit validators, and maintainer docs — copied into your repo so you stop reinventing the same scaffolding.

[![CI](https://github.com/kory-kaai/collab-kit/actions/workflows/ci.yml/badge.svg)](https://github.com/kory-kaai/collab-kit/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Node](https://img.shields.io/badge/node-%3E%3D20-brightgreen)](package.json)

## Why star this?

Every new GitHub repo needs the same boring setup: PR templates, labels, CI, commit conventions, a code of conduct. **Collab Kit gives you all of that in 30 seconds** — then gets out of your way.

No framework lock-in. No account required. Plain files you own and customize.

## Quick start

Scaffold into your current repo:

```bash
npx @korykaai/collab-kit init .
git config core.hooksPath .githooks
```

Or into a new directory:

```bash
npx @korykaai/collab-kit init my-project
cd my-project
git init
git config core.hooksPath .githooks
```

Use `--force` to overwrite files that already exist.

## What you get

| Category | Included |
|----------|----------|
| **GitHub** | PR template, bug/feature issue templates, Dependabot, CI workflow |
| **Git hooks** | `prepare-commit-msg` to enforce clean commit messages |
| **Tooling** | Conventional Commits validator, branch name checker |
| **Docs** | PR workflow, issue triage, pair programming, onboarding, FAQ |
| **Community** | Code of conduct, contributing guide, security policy |

## CLI commands

```bash
collab-kit init [dir] [--force]     # copy workflow scaffold
collab-kit validate-commit "feat: add login"   # check commit message
collab-kit branch-name feat/add-login          # check branch name
```

## Development

```bash
git clone https://github.com/kory-kaai/collab-kit.git
cd collab-kit
npm test
```

## Documentation

- [Onboarding checklist](docs/onboarding.md) — first steps after `init`
- [Pull request workflow](docs/pr-workflow.md)
- [Issue triage](docs/issue-triage.md)
- [Pair programming](docs/pair-programming.md)
- [Git attribution hook](docs/git-attribution.md)
- [Troubleshooting](docs/troubleshooting.md)

## Contributing

PRs welcome! See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

MIT — see [LICENSE](LICENSE).
