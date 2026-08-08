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
