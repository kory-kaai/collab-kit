# Troubleshooting

Common issues when adopting these workflow patterns.

## Commit validator fails locally

**Symptom:** `node tools/validate-commit.mjs` rejects your message.

**Fix:** Use Conventional Commits format: `type: subject` (e.g. `docs: update FAQ`).

## Branch name rejected

**Symptom:** `node tools/branch-name.mjs` suggests a different name.

**Fix:** Use `feat/`, `fix/`, `docs/`, `chore/`, or `ci/` followed by a lowercase slug.

## CI fails on push

**Symptom:** GitHub Actions reports test failures.

**Fix:** Run `npm test` locally before pushing. Ensure Node.js 20+ is installed.

## Co-author not showing on GitHub

**Symptom:** You added a `Co-authored-by` trailer but GitHub does not credit them.

**Fix:** Verify the email matches a verified address on their GitHub account. See [pair-programming.md](pair-programming.md).

If badges 404 run badgekit validate and fix owner/repo flags.
