# Pair programming on GitHub

When two people write code together, both should get credit in the git history.

## Co-authored-by trailers

Add a trailer block at the end of the commit message:

```
feat: implement branch name suggestions

Co-authored-by: alice <alice@users.noreply.github.com>
Co-authored-by: bob <bob@users.noreply.github.com>
```

### Rules

- Use the person's **GitHub username** as the name (or their display name).
- Use an email **linked to their GitHub account** (often `id+username@users.noreply.github.com`).
- Both authors should have contributed to the commit's changes.

## GitHub Desktop

GitHub Desktop has a built-in "Co-Authors" field when committing — it adds the trailer automatically.

## Pull requests

Open a PR with the co-authored commit and merge it. GitHub attributes the contribution to both authors on the commit and in the PR.

## GitHub Pair Extraordinaire achievement

GitHub awards **Pair Extraordinaire** when a **merged public PR** contains at least one commit with a valid `Co-authored-by:` trailer.

### Requirements

- Repository must be **public**
- PR must be **merged** (not just closed)
- Co-author email must be **linked to a real GitHub account** you control
- Use only human collaborators — **never** `Cursor`, `@cursoragent`, or `@cursor.com`

### Approved co-authors (this org)

```
Co-authored-by: Kory Kaai <69431357+kory-kaai@users.noreply.github.com>
Co-authored-by: TopDaily Dev <315340167+topdaily-dev@users.noreply.github.com>
```

See [git-attribution.md](git-attribution.md) for hooks that block agent trailers.

### Example commit message

```
docs: add troubleshooting FAQ entry

Co-authored-by: Alex Kim <12345678+alexkim@users.noreply.github.com>
```

Find a collaborator's noreply email at **GitHub → Settings → Emails** (or use their public `users.noreply.github.com` address).

### Verify before merging

```bash
git log -1 --format=%B
gh pr view --json commits
```

After merge, both authors should see progress toward Pair Extraordinaire on their profiles within ~24 hours.

Cross-org doc PRs between maintainers still qualify when merged to a repo you do not own — useful for toolchain repos owned by different GitHub accounts.

Use human Co-authored-by trailers when pairing on `@topdaily-dev` repos.
