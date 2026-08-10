# Onboarding checklist

Run `collab-kit init` first, then complete these steps in your repo.

```bash
npx @korykaai/collab-kit init .
git config core.hooksPath .githooks
```

- [ ] Copy `.github/PULL_REQUEST_TEMPLATE.md` and issue templates (done by `init`)
- [ ] Add `.editorconfig` for consistent formatting
- [ ] Enable branch protection on `main` (optional for solo projects)
- [ ] Run `git config core.hooksPath .githooks` if using the commit hook
- [ ] Add `npm test` to your CI workflow
- [ ] Add a CI badge to your README — see [examples/readme-badges.md](../examples/readme-badges.md)
- [ ] Create standard labels (`bug`, `enhancement`, `docs`, `duplicate`)
- [ ] Share [pr-workflow.md](pr-workflow.md) with your team
