# Promotion playbook

Ready-to-use copy for launching collab-kit and getting it in front of developers.

## One-liner hooks

Pick one depending on the audience:

- **Pain point:** "I got tired of copying PR templates into every new repo — one command scaffolds the whole GitHub workflow."
- **Speed:** "Bootstrap PR templates, CI, git hooks, and maintainer docs in 30 seconds: `npx @korykaai/collab-kit init .`"
- **Ownership:** "Like a GitHub template repo, but the files land in *your* repo — no lock-in, no account required."

## Hacker News — Show HN draft

**Title:** Show HN: collab-kit – scaffold GitHub team workflows in one command

**Body:**

I built collab-kit because every new repo needed the same boring setup: PR templates, issue templates, CI, commit conventions, a code of conduct, and maintainer docs.

`npx @korykaai/collab-kit init .` copies a complete collaboration baseline into your repo. Plain files you own — no framework, no SaaS.

Includes:
- GitHub PR/issue templates, Dependabot, CI
- Git hooks + Conventional Commits / branch name validators
- Maintainer docs (PR workflow, triage, onboarding, FAQ)

MIT licensed, on npm: https://www.npmjs.com/package/@korykaai/collab-kit
Repo: https://github.com/kory-kaai/collab-kit

Would love feedback on what's missing from the default scaffold.

## Reddit draft (r/node, r/programming, r/webdev)

**Title:** I made a CLI that scaffolds GitHub team workflows (PR templates, CI, hooks, docs) in one command

**Body:**

Every new project I start needs the same GitHub boilerplate. Copying from an old repo works, but it's tedious and easy to forget pieces.

So I built **collab-kit**:

```bash
npx @korykaai/collab-kit init .
git config core.hooksPath .githooks
```

It drops in `.github/` templates, CI, Dependabot, git hooks, commit/branch validators, and maintainer docs. Everything is plain files — edit or delete whatever you don't want.

- npm: https://www.npmjs.com/package/@korykaai/collab-kit
- GitHub: https://github.com/kory-kaai/collab-kit

Open source (MIT). Happy to hear what you'd want in the default scaffold.

## Dev.to / blog post outline

1. **The problem** — reinventing GitHub workflow scaffolding per repo
2. **What collab-kit ships** — screenshot + file tree
3. **Quick start** — 3 commands
4. **Why not X?** — comparison table (from README)
5. **Customize it** — hooks, validators, docs
6. **Call to action** — star the repo, try `npx`

## GitHub repo settings checklist

- [x] Description set
- [x] **Social preview:** upload `docs/images/social-preview.png` at  
      **Settings → General → Social preview**
- [x] Homepage: https://www.npmjs.com/package/@korykaai/collab-kit
- [x] Topics: cli, github, workflow, scaffold, developer-tools

## Awesome list submissions

### 1. agarrharr/awesome-cli-apps (Git section)

Fork https://github.com/agarrharr/awesome-cli-apps and add under **Version Control → Git**:

```markdown
- [collab-kit](https://github.com/kory-kaai/collab-kit) - Scaffold GitHub team workflows — PR templates, CI, git hooks, and maintainer docs in one command.
```

PR title: `Add collab-kit to Git tools`

**Status:** PR opened → https://github.com/agarrharr/awesome-cli-apps/pull/1285

### 2. hidden-salmon/awesome-cli (issue submission)

Open: https://github.com/hidden-salmon/awesome-cli/issues/new?template=submit-tool.yml

**Status:** Issue opened → https://github.com/hidden-salmon/awesome-cli/issues/4

- **Name:** collab-kit
- **URL:** https://github.com/kory-kaai/collab-kit
- **Description:** Scaffold GitHub team workflows — PR templates, CI, git hooks, and docs in one command
- **Category:** Git & Version Control / Developer Tools
- **Install:** `npx @korykaai/collab-kit init .`

### 3. sindresorhus/awesome (GitHub section)

Fork https://github.com/sindresorhus/awesome and add under **Platforms → GitHub**:

```markdown
- [collab-kit](https://github.com/kory-kaai/collab-kit) - Bootstrap GitHub team workflows in one command.
```

Note: awesome list PRs can take weeks and have strict review. Submit anyway — it's free distribution.

## Pin the repo

On your GitHub profile, pin **collab-kit** so visitors see it immediately.

## Timing tips

- Post **Tuesday–Thursday, 9–11am US Eastern** for best HN/Reddit visibility
- Don't post to HN and Reddit in the same hour — stagger by a day
- Reply to every comment in the first 2 hours (engagement boosts ranking)

See also: docs/devto-launch.md for a long-form Dev.to post.
