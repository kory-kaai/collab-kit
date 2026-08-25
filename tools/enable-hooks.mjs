#!/usr/bin/env node

import { cpSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PACKAGE_ROOT = resolve(__dirname, "..");

/** @type {readonly string[]} */
const HOOK_FILES = [
  ".githooks/prepare-commit-msg",
  ".githooks/commit-msg",
  "tools/strip-cursor-trailers.mjs",
];

/**
 * @param {string} repoPath
 * @returns {boolean}
 */
function isGitRepo(repoPath) {
  return existsSync(join(repoPath, ".git"));
}

/**
 * @param {string} repoPath
 * @returns {void}
 */
function ensureHookFiles(repoPath) {
  for (const relativePath of HOOK_FILES) {
    const from = join(PACKAGE_ROOT, relativePath);
    const to = join(repoPath, relativePath);

    if (!existsSync(from)) {
      throw new Error(`Missing template file in collab-kit: ${relativePath}`);
    }

    mkdirSync(dirname(to), { recursive: true });

    if (!existsSync(to)) {
      cpSync(from, to);
    }
  }
}

/**
 * @param {string} repoPath
 * @returns {{ ok: boolean; message: string }}
 */
export function enableHooksInRepo(repoPath) {
  const absolute = resolve(repoPath);

  if (!isGitRepo(absolute)) {
    return { ok: false, message: "not a git repository" };
  }

  ensureHookFiles(absolute);

  const result = spawnSync("git", ["config", "core.hooksPath", ".githooks"], {
    cwd: absolute,
    encoding: "utf8",
  });

  if (result.status !== 0) {
    return {
      ok: false,
      message: result.stderr?.trim() || "git config failed",
    };
  }

  return { ok: true, message: "core.hooksPath=.githooks" };
}

/**
 * @param {string[]} argv
 * @returns {string[]}
 */
export function parseRepoPaths(argv) {
  const paths = argv.filter((arg) => !arg.startsWith("-"));
  return paths.length > 0 ? paths : ["."];
}

function isMainModule() {
  const invoked = process.argv[1];
  if (!invoked) {
    return false;
  }
  return resolve(invoked) === resolve(fileURLToPath(import.meta.url));
}

if (isMainModule()) {
  const repos = parseRepoPaths(process.argv.slice(2));
  let failed = 0;

  for (const repo of repos) {
    const result = enableHooksInRepo(repo);
    const label = resolve(repo);
    if (result.ok) {
      console.log(`OK  ${label} — ${result.message}`);
    } else {
      console.error(`FAIL ${label} — ${result.message}`);
      failed += 1;
    }
  }

  if (failed > 0) {
    process.exit(1);
  }
}
