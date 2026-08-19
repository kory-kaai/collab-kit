# Code review checklist

Use this when reviewing pull requests.

- [ ] Change matches the PR description
- [ ] Tests pass (`npm test`)
- [ ] Commit messages follow Conventional Commits
- [ ] No secrets or credentials in the diff
- [ ] Documentation updated if behavior changed
- [ ] Breaking changes called out in the PR body

For docs-only PRs, focus on clarity and accuracy over code style.

For OSS npm repos, also run `npx @topdaily-dev/repomark check .` before merging release-related changes.
