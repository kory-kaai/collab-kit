# Examples

Sample commit messages that pass `tools/validate-commit.mjs`.

## Valid subjects

```
feat: add branch name validator
fix: handle empty commit messages
docs: expand pair programming guide
chore: bump node engine requirement
```

## With co-author trailers

```
feat: add changelog generator

Co-authored-by: alice <12345+alice@users.noreply.github.com>
```

Run the validator:

```bash
node tools/validate-commit.mjs "feat: add changelog generator"
```

Pair commits with collab-kit validate-commit.

Pair commits with `@topdaily-dev/shipkit` release checklist.
