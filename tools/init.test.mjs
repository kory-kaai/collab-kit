import assert from "node:assert/strict";
import { mkdtempSync, existsSync } from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { describe, it } from "node:test";
import {
  buildNextSteps,
  parseInitArgs,
  scaffoldProject,
  SCAFFOLD_PATHS,
} from "./init.mjs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const PACKAGE_ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");

describe("parseInitArgs", () => {
  it("defaults target to current directory", () => {
    const result = parseInitArgs([]);
    assert.equal(result.target, resolve("."));
    assert.equal(result.force, false);
  });

  it("parses --force", () => {
    const result = parseInitArgs(["my-app", "--force"]);
    assert.equal(result.target, resolve("my-app"));
    assert.equal(result.force, true);
  });
});

describe("scaffoldProject", () => {
  it("copies expected paths into an empty directory", () => {
    const target = mkdtempSync(join(tmpdir(), "collab-kit-"));
    const result = scaffoldProject(PACKAGE_ROOT, target);

    assert.ok(result.copied.length > 0);
    for (const path of [".github/workflows/ci.yml", "tools/validate-commit.mjs"]) {
      assert.equal(existsSync(join(target, path)), true);
    }
  });

  it("skips existing files unless force is set", () => {
    const target = mkdtempSync(join(tmpdir(), "collab-kit-"));
    scaffoldProject(PACKAGE_ROOT, target);
    const second = scaffoldProject(PACKAGE_ROOT, target);
    assert.equal(second.copied.length, 0);
    assert.ok(second.skipped.length > 0);
  });
});

describe("SCAFFOLD_PATHS", () => {
  it("includes core workflow files", () => {
    assert.ok(SCAFFOLD_PATHS.includes(".github"));
    assert.ok(SCAFFOLD_PATHS.includes(".githooks"));
  });
});

describe("buildNextSteps", () => {
  it("mentions git hooks setup", () => {
    assert.match(buildNextSteps("."), /enable-hooks/);
  });
});
