#!/usr/bin/env node

const VALID_PREFIXES = ["feat", "fix", "docs", "chore", "ci", "refactor"];

/**
 * @param {string} branch
 * @returns {{ valid: boolean; suggestion?: string }}
 */
export function validateBranchName(branch) {
  const pattern = new RegExp(`^(${VALID_PREFIXES.join("|")})/[a-z0-9]+(-[a-z0-9]+)*$`);

  if (pattern.test(branch)) {
    return { valid: true };
  }

  const slug = branch
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

  return {
    valid: false,
    suggestion: slug ? `feat/${slug}` : "feat/my-change",
  };
}

if (import.meta.url === `file://${process.argv[1]?.replace(/\\/g, "/")}`) {
  const branch = process.argv[2] ?? "";
  const result = validateBranchName(branch);

  if (result.valid) {
    console.log(`Branch "${branch}" is valid.`);
    process.exit(0);
  }

  console.error(`Branch "${branch}" does not match team conventions.`);
  console.error(`Try: ${result.suggestion}`);
  process.exit(1);
}
