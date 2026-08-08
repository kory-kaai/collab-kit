# npm CI publishing setup

Automated publishes run from `.github/workflows/publish-npm.yml` when a GitHub Release is published.

## Option A: Trusted publishing (recommended)

No long-lived tokens. Uses GitHub OIDC.

1. Sign in at [npmjs.com](https://www.npmjs.com/).
2. Open [@korykaai/collab-kit package settings](https://www.npmjs.com/package/@korykaai/collab-kit).
3. Go to **Trusted Publisher** (or **Publishing access**).
4. Add a GitHub Actions trusted publisher:
   - **Organization or user:** `kory-kaai`
   - **Repository:** `collab-kit`
   - **Workflow filename:** `publish-npm.yml`
   - **Environment:** leave blank
5. Save.

The workflow already has `id-token: write` and uses `npm publish --provenance`.

## Option B: NPM_TOKEN secret

If you prefer a classic automation token:

1. Sign in at [npmjs.com](https://www.npmjs.com/) → **Access Tokens** → **Generate New Token** → **Granular Access Token**.
2. Set:
   - **Packages:** `@korykaai/collab-kit` (read and write)
   - **Bypass 2FA:** enabled (required for CI)
3. Copy the token (shown once).
4. Add it to GitHub:

```bash
gh secret set NPM_TOKEN --repo kory-kaai/collab-kit
```

Paste the token when prompted.

## Verify

After setup, bump `version` in `package.json`, merge to `main`, and create a GitHub Release. The workflow will run tests and publish to npm.
