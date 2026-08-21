# Show HN — collab-kit

Ready-to-post draft for [Hacker News](https://news.ycombinator.com/submit). Copy title and body below.

**Best time to post:** Tuesday–Thursday, 9–11am US Eastern.

---

## Title

```
Show HN: collab-kit – scaffold GitHub team workflows in one command
```

## Body

```
I got tired of copying the same GitHub boilerplate into every new repo — PR templates, issue templates, CI, Dependabot, commit hooks, and maintainer docs. GitHub template repos help, but I wanted the files in my repo with no lock-in.

collab-kit is a small CLI that scaffolds a complete collaboration baseline:

  npx @korykaai/collab-kit init .

What it drops in (plain files you own):

  - .github/ PR + issue templates, CI workflow, Dependabot
  - Git hooks (Conventional Commits, branch name checks)
  - Maintainer docs (PR workflow, triage, onboarding, troubleshooting)

No SaaS, no framework — edit or delete anything you don't want.

npm: https://www.npmjs.com/package/@korykaai/collab-kit
repo: https://github.com/kory-kaai/collab-kit

I'd love feedback on what's missing from the default scaffold — especially what you'd expect in a "team-ready" repo on day one.
```

---

## First comment (post immediately after submitting)

Prepare this as a reply to your own thread — HN users often ask for comparisons:

```
Comparison to alternatives:

- GitHub template repos: good for greenfield, but files live in the template repo until you generate. collab-kit runs against an existing folder.
- cookiecutter / degit: general scaffolding; collab-kit is opinionated specifically for GitHub team workflows.
- Manual copy from an old repo: works, but easy to forget hooks, Dependabot, or maintainer docs.

Happy to answer questions about the defaults or how to customize validators/hooks.
```

---

## Checklist before posting

- [ ] Repo README renders cleanly (badges, demo screenshot)
- [ ] `npx @korykaai/collab-kit init` works on a fresh directory
- [ ] npm package page is up to date
- [ ] Pin collab-kit on your GitHub profile
- [ ] Social preview image uploaded (Settings → General → Social preview)

---

## After posting

1. Reply to every comment in the first 2 hours — engagement matters on HN.
2. Do not ask for stars directly; let the tool speak for itself.
3. If someone reports a bug, fix fast and reply with the commit link.
4. Wait 24h before cross-posting to Reddit (see `docs/promotion.md`).

Cross-post: see docs/devto-launch.md after HN.
