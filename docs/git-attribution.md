# Git hooks

This repo uses `.githooks/` to keep commit attribution on **your account only**.

## Setup (one time per clone)

```bash
git config core.hooksPath .githooks
```

On Unix/macOS, make the hook executable:

```bash
chmod +x .githooks/prepare-commit-msg
```

## What it does

The `prepare-commit-msg` hook removes any `Co-authored-by: Cursor <cursoragent@cursor.com>` trailer before a commit is recorded. Cloud agents may inject this automatically; the hook prevents it from reaching your git history.

## Cursor IDE setting

Also disable attribution in **Cursor Settings → Agents → Attribution** (and **Git & PRs → Attribution**) so trailers are not added in the first place.
