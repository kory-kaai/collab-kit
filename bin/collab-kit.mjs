#!/usr/bin/env node

import { spawnSync } from "node:child_process";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");

const HELP = `collab-kit — GitHub team workflow toolkit

Usage:
  collab-kit init [dir] [--force]   Scaffold PR templates, CI, hooks, and docs
  collab-kit validate-commit <msg>  Check Conventional Commits format
  collab-kit branch-name <name>    Check branch naming conventions

Examples:
  npx @korykaai/collab-kit init .
  collab-kit init my-new-repo --force
`;

/** @type {Record<string, string>} */
const COMMANDS = {
  init: "tools/init.mjs",
  "validate-commit": "tools/validate-commit.mjs",
  "branch-name": "tools/branch-name.mjs",
};

const [command, ...args] = process.argv.slice(2);

if (!command || command === "--help" || command === "-h") {
  console.log(HELP);
  process.exit(0);
}

const script = COMMANDS[command];
if (!script) {
  console.error(`Unknown command: ${command}\n`);
  console.error(HELP);
  process.exit(1);
}

const result = spawnSync(process.execPath, [resolve(ROOT, script), ...args], {
  stdio: "inherit",
});

process.exit(result.status ?? 1);
