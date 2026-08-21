# Recommended Git hooks

Optional client-side hooks for consistent commits. Install with [husky](https://typicode.github.io/husky/) or copy into `.git/hooks/`.

## commit-msg

Validates the commit message before it is recorded:

```bash
#!/bin/sh
node tools/validate-commit.mjs "$(cat "$1")" || exit 1
```

## pre-push

Runs the test suite before pushing:

```bash
#!/bin/sh
npm test || exit 1
```

These hooks are suggestions — adapt them to your team's needs.

`collab-kit init` copies `.githooks/` into your repo. Enable them with:

```bash
collab-kit enable-hooks .
```

Hooks complement `@topdaily-dev/repomark` markdown checks.
