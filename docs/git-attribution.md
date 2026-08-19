# Git attribution

Keep commits attributed to **your GitHub accounts only** — never Cursor, `@cursoragent`, or other agent identities.

## Checklist (do once per machine)

- [ ] **Cursor IDE:** Settings → **Agents → Attribution** → turn **Commit** and **PR** attribution **off**
- [ ] **Cursor IDE:** Settings → **Git & PRs → Attribution** → turn both **off**
- [ ] **Cursor CLI:** in `%USERPROFILE%\.cursor\cli-config.json` set:
  ```json
  "attribution": {
    "attributeCommitsToAgent": false,
    "attributePRsToAgent": false
  }
  ```
- [ ] **Every repo you commit in:** run `node tools/enable-hooks.mjs .` (or `collab-kit enable-hooks .`)
- [ ] **Pair programming:** only use human co-authors:
  - `Co-authored-by: Kory Kaai <69431357+kory-kaai@users.noreply.github.com>`
  - `Co-authored-by: TopDaily Dev <315340167+topdaily-dev@users.noreply.github.com>`

Cross-org toolchain PRs should use the same human co-author trailers when pairing across GitHub accounts.

Cloud / background agents may still inject `Co-authored-by: Cursor <cursoragent@cursor.com>`. The git hooks below strip or block that before it reaches GitHub.

## Enable hooks in a repo

From collab-kit (or any repo that copied these tools):

```bash
node tools/enable-hooks.mjs .
node tools/enable-hooks.mjs ../budgetmend ../shipkit
```

Or via the CLI:

```bash
collab-kit enable-hooks .
```

This sets `git config core.hooksPath .githooks` and copies hook files if missing.

## What the hooks do

| Hook | Purpose |
|------|---------|
| `prepare-commit-msg` | Strips Cursor / agent trailers before the commit is saved |
| `commit-msg` | Rejects the commit if forbidden attribution is still present |

Blocked patterns include:

- `Co-authored-by: Cursor <cursoragent@cursor.com>`
- `Made-with: Cursor`
- Any `@cursor.com` co-author line

## Verify before push

```bash
git log -1 --format=%B
node tools/strip-cursor-trailers.mjs --check .git/COMMIT_EDITMSG
```

## Achievement history is permanent

If Pair Extraordinaire already unlocked from an old `@cursoragent` merge, GitHub will **not** remove that history line. These steps prevent **future** commits and PRs from showing Cursor anywhere.

## Manual setup (without enable-hooks)

```bash
git config core.hooksPath .githooks
```

On Unix/macOS:

```bash
chmod +x .githooks/prepare-commit-msg .githooks/commit-msg
```
