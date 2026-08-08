import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { validateCommitMessage } from "./validate-commit.mjs";
import { validateBranchName } from "./branch-name.mjs";

describe("validateCommitMessage", () => {
  it("accepts conventional commits", () => {
    const result = validateCommitMessage("feat: add branch validator");
    assert.equal(result.valid, true);
  });

  it("rejects empty messages", () => {
    const result = validateCommitMessage("");
    assert.equal(result.valid, false);
  });

  it("accepts co-author trailers", () => {
    const result = validateCommitMessage(
      "feat: pair session\n\nCo-authored-by: alice <alice@example.com>",
    );
    assert.equal(result.valid, true);
  });

  it("accepts breaking change indicator", () => {
    const result = validateCommitMessage("feat!: remove legacy API");
    assert.equal(result.valid, true);
  });
});

describe("validateBranchName", () => {
  it("accepts valid branch names", () => {
    assert.equal(validateBranchName("feat/add-validator").valid, true);
  });

  it("suggests a fix for invalid names", () => {
    const result = validateBranchName("My Feature Branch");
    assert.equal(result.valid, false);
    assert.match(result.suggestion ?? "", /^feat\//);
  });

  it("accepts fix/ prefix", () => {
    assert.equal(validateBranchName("fix/login-bug").valid, true);
  });
});
