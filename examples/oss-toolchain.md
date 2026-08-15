# OSS toolchain (badgekit + repomark + shipkit)

Use this stack to keep README badges, repo hygiene, and releases consistent.

## 1. Badges

```bash
npx @topdaily-dev/badgekit row ci npm license node \
  --owner YOUR_ORG --repo YOUR_REPO --npm @scope/pkg
npx @topdaily-dev/badgekit validate .
```

## 2. Repo health

```bash
npx @topdaily-dev/repomark check .
npx @topdaily-dev/repomark fix . --dry-run
npx @topdaily-dev/repomark fix .
```

CI (requires `collab-kit init --oss-toolchain` or copy `.github/workflows/repomark.yml`):

```yaml
- uses: topdaily-dev/repomark-action@v1
  with:
    min: "70"
```

## 3. Releases

```bash
npx @topdaily-dev/shipkit preflight
npx @topdaily-dev/shipkit ship --patch --yes
```

## Pair with collab-kit

```bash
npx @korykaai/collab-kit init . --oss-toolchain
collab-kit enable-hooks .
```

Human co-authors only — see `docs/git-attribution.md`.
