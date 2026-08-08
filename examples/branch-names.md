# Branch name examples

Valid names for this project:

```
feat/commit-validator
fix/empty-subject-handling
docs/faq-page
chore/editorconfig
ci/add-dependabot
```

Invalid → suggested fix:

| Input | Suggestion |
|-------|------------|
| `My Feature` | `feat/my-feature` |
| `BUGFIX_login` | `fix/bugfix-login` |
| `update readme` | `feat/update-readme` |

Check any name with:

```bash
node tools/branch-name.mjs your-branch-name
```
