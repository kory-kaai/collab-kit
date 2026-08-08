# Tools

Small CLI utilities for local git workflow checks.

| Script | Purpose |
|--------|---------|
| `validate-commit.mjs` | Validate Conventional Commits subject and co-author trailers |
| `branch-name.mjs` | Check branch names against team conventions |

## Usage

```bash
node tools/validate-commit.mjs "feat: my change"
node tools/branch-name.mjs feat/my-change
npm test
```

These are intentionally dependency-free — plain Node.js ESM.
