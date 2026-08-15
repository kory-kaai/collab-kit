#!/usr/bin/env node

import { cpSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PACKAGE_ROOT = resolve(__dirname, "..");

/** @type {readonly string[]} */
export const SCAFFOLD_PATHS = [
  ".editorconfig",
  ".githooks",
  ".github",
  "tools",
  "docs",
  "examples",
  "CONTRIBUTING.md",
  "CODE_OF_CONDUCT.md",
  "SECURITY.md",
];

/**
 * @param {string} source
 * @param {string} destination
 * @param {{ force?: boolean }} options
 * @returns {{ copied: string[]; skipped: string[] }}
 */
export function scaffoldProject(source, destination, options = {}) {
  const { force = false } = options;
  const copied = [];
  const skipped = [];

  if (!existsSync(destination)) {
    mkdirSync(destination, { recursive: true });
  }

  for (const relativePath of SCAFFOLD_PATHS) {
    const from = join(source, relativePath);
    const to = join(destination, relativePath);

    if (!existsSync(from)) {
      continue;
    }

    if (existsSync(to) && !force) {
      skipped.push(relativePath);
      continue;
    }

    cpSync(from, to, { recursive: true, force: true });
    copied.push(relativePath);
  }

  return { copied, skipped };
}

/**
 * @param {string} targetDir
 * @returns {string}
 */
export function buildNextSteps(targetDir) {
  const relative = targetDir === process.cwd() ? "." : targetDir;
  return [
    "Next steps:",
    `  cd ${relative === "." ? "" : relative}`.trimEnd(),
    "  collab-kit enable-hooks .",
    "  npm test   # if you add a package.json with the test script",
    "",
    "Docs: docs/onboarding.md",
  ]
    .filter(Boolean)
    .join("\n");
}

/**
 * @param {string[]} argv
 * @returns {{ target: string; force: boolean }}
 */
export function parseInitArgs(argv) {
  const force = argv.includes("--force");
  const positional = argv.filter((arg) => !arg.startsWith("-"));
  const target = positional[0] ?? ".";
  return { target: resolve(target), force };
}

function isMainModule() {
  const invoked = process.argv[1];
  if (!invoked) {
    return false;
  }
  return resolve(invoked) === resolve(fileURLToPath(import.meta.url));
}

if (isMainModule()) {
  const { target, force } = parseInitArgs(process.argv.slice(2));
  const result = scaffoldProject(PACKAGE_ROOT, target, { force });

  if (result.copied.length === 0 && result.skipped.length > 0) {
    console.error("Nothing copied — files already exist. Use --force to overwrite.");
    process.exit(1);
  }

  console.log(`Scaffolded collab-kit into ${target}\n`);
  console.log("Copied:");
  for (const path of result.copied) {
    console.log(`  + ${path}`);
  }

  if (result.skipped.length > 0) {
    console.log("\nSkipped (already exists):");
    for (const path of result.skipped) {
      console.log(`  - ${path}`);
    }
  }

  console.log(`\n${buildNextSteps(target)}`);
}
