# Dev.to launch — collab-kit + OSS toolchain

Post when ready (after Show HN or 24h later). Publish as **kory-kaai** on Dev.to.

---

## Title

```
Stop copy-pasting GitHub boilerplate — scaffold team workflows in one command
```

## Tags

`opensource`, `github`, `cli`, `node`, `devtools`

## Cover image

Use `docs/images/social-preview.png` from the collab-kit repo.

## Body

Every new repo I start needs the same boring setup: PR templates, issue templates, CI, Dependabot, commit hooks, and maintainer docs. GitHub template repos help for greenfield projects, but I wanted something that works on an **existing** folder — plain files I own, no SaaS, no lock-in.

So I built **collab-kit**:

```bash
npx @korykaai/collab-kit init .
collab-kit enable-hooks .
```

### What you get

- `.github/` — PR + issue templates, CI workflow, Dependabot
- `.githooks/` — strips unwanted agent co-author trailers, validates Conventional Commits
- Maintainer docs — PR workflow, triage, onboarding, troubleshooting
- Validators — commit message + branch name checkers

Everything is copied into **your** repo. Edit or delete anything you don't want.

### OSS toolchain mode

For npm OSS projects, bootstrap badges, repo health, and release tooling together:

```bash
npx @korykaai/collab-kit init . --oss-toolchain
```

That pairs collab-kit with the **@topdaily-dev** stack:

| Tool | What it does |
|------|--------------|
| [repomark](https://github.com/topdaily-dev/repomark) | Score repo hygiene (README, LICENSE, CI, etc.) |
| [badgekit](https://github.com/topdaily-dev/badgekit) | Generate shields.io README badge rows |
| [shipkit](https://github.com/topdaily-dev/shipkit) | Preflight, changelog, GitHub release, npm publish |

```bash
npx @topdaily-dev/repomark check .
npx @topdaily-dev/badgekit row ci npm license --owner YOU --repo YOUR_REPO --npm @scope/pkg
npx @topdaily-dev/shipkit ship --patch --yes
```

### Why not a template repo?

Template repos are great for **new** repositories. collab-kit runs against your current directory — useful when you already have a README and just need the workflow scaffolding around it. Existing files are skipped unless you pass `--force`.

### Links

- **GitHub:** https://github.com/kory-kaai/collab-kit
- **npm:** https://www.npmjs.com/package/@korykaai/collab-kit
- **Toolchain example:** https://github.com/kory-kaai/collab-kit/blob/main/examples/oss-toolchain.md

I'd love feedback on what's missing from the default scaffold — especially what you'd expect in a "team-ready" repo on day one.

---

## First comment (post on Dev.to after publishing)

```
Quick comparison:

- **GitHub template repos** — greenfield only; files live in the template until you generate
- **cookiecutter / degit** — general scaffolding; collab-kit is opinionated for GitHub team workflows
- **Manual copy from an old repo** — works, but easy to forget hooks, Dependabot, or maintainer docs

Happy to answer customization questions in the comments.
```

Publish as kory-kaai; toolchain by @topdaily-dev (repomark, badgekit, shipkit).
