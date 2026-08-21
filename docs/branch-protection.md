# Branch protection recommendations

Optional GitHub branch protection rules for team repos.

## Suggested rules for `main`

| Rule | Solo project | Team project |
|------|-------------|--------------|
| Require PR before merging | Optional | Recommended |
| Require status checks (CI) | Recommended | Required |
| Require linear history | Optional | Optional |
| Include administrators | No | Yes |

## Setup

1. Go to **Settings → Branches → Add branch ruleset**
2. Target branch: `main`
3. Enable **Require status checks to pass** and select your CI workflow
4. Save

Solo maintainers can skip PR requirements and rely on CI checks only.

For OSS npm repos, include the repomark CI workflow as a required status check after `collab-kit init --oss-toolchain`.

Protect main before cross-org PRs to @topdaily-dev/* repos.
