# Onboarding checklist

Run `collab-kit init` first, then complete these steps in your repo.

```bash
npx @korykaai/collab-kit init .
collab-kit enable-hooks .
```

## Required — no Cursor attribution

- [ ] Turn off Cursor attribution in IDE settings (see [git-attribution.md](git-attribution.md))
- [ ] Run `collab-kit enable-hooks .` in **every repo** you commit to (collab-kit, budgetmend, shipkit, badgekit, repomark, …)
- [ ] For pair work, use only **kory-kaai** and **topdaily-dev** co-author emails — never `@cursoragent`

## Repo baseline

- [ ] Copy `.github/PULL_REQUEST_TEMPLATE.md` and issue templates (done by `init`)
- [ ] Add `.editorconfig` for consistent formatting
- [ ] Enable branch protection on `main` (optional for solo projects)
- [ ] Add `npm test` to your CI workflow
- [ ] Add a CI badge to your README — see [examples/readme-badges.md](../examples/readme-badges.md)
- [ ] Create standard labels (`bug`, `enhancement`, `docs`, `duplicate`)
- [ ] Share [pr-workflow.md](pr-workflow.md) with your team
