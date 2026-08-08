# Collab Kit

Reference patterns and lightweight tooling for small teams working on GitHub. Covers pull request workflows, issue triage, pair programming conventions, and CI setup — the kind of scaffolding you copy into a new repo instead of reinventing each time.

## What's inside

| Area | Description |
|------|-------------|
| [`docs/`](docs/) | Guides for PR workflow, issue triage, and pair programming |
| [`tools/`](tools/) | Small utilities for commit message validation and branch naming |
| [`.github/`](.github/) | Issue/PR templates and a basic CI workflow |

## Quick start

```bash
# Validate a commit message (checks Conventional Commits + co-author trailers)
node tools/validate-commit.mjs "feat: add branch naming helper"

# Run the test suite
npm test
```

## Docs

- [Pull request workflow](docs/pr-workflow.md) — branch naming, review expectations, merge strategies
- [Issue triage](docs/issue-triage.md) — labels, response SLAs, closing duplicates quickly
- [Pair programming on GitHub](docs/pair-programming.md) — `Co-authored-by` trailers and shared ownership
- [FAQ](docs/faq.md) — common questions about this toolkit
- [Git hooks](docs/git-hooks.md) — optional client-side validation

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). Bug reports and doc improvements are welcome.

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for release history.

## License

MIT — see [LICENSE](LICENSE).
