#!/usr/bin/env node

const CONVENTIONAL_PREFIX =
  /^(feat|fix|docs|style|refactor|perf|test|chore|ci|build|revert)(\(.+\))?!?: .+/;

const CO_AUTHOR = /^Co-authored-by: .+ <.+@.+>$/m;

/**
 * @param {string} message
 * @returns {{ valid: boolean; errors: string[] }}
 */
export function validateCommitMessage(message) {
  const errors = [];
  const trimmed = message.trim();

  if (!trimmed) {
    errors.push("Commit message is empty.");
    return { valid: false, errors };
  }

  const [subject] = trimmed.split("\n");
  if (!CONVENTIONAL_PREFIX.test(subject)) {
    errors.push(
      "Subject must use Conventional Commits (e.g. feat: add validator).",
    );
  }

  if (subject.length > 72) {
    errors.push("Subject line should be 72 characters or fewer.");
  }

  const trailers = trimmed
    .split("\n")
    .filter((line) => line.startsWith("Co-authored-by:"));

  for (const trailer of trailers) {
    if (!CO_AUTHOR.test(trailer)) {
      errors.push(`Invalid co-author trailer: ${trailer}`);
    }
  }

  return { valid: errors.length === 0, errors };
}

if (import.meta.url === `file://${process.argv[1]?.replace(/\\/g, "/")}`) {
  const message = process.argv.slice(2).join(" ");
  const result = validateCommitMessage(message);

  if (!result.valid) {
    for (const error of result.errors) {
      console.error(error);
    }
    process.exit(1);
  }

  console.log("Commit message looks good.");
}
