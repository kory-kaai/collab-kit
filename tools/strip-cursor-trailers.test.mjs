import assert from "node:assert/strict";
import { describe, it } from "node:test";

import {
  findForbiddenAttribution,
  stripForbiddenAttribution,
} from "./strip-cursor-trailers.mjs";

describe("stripForbiddenAttribution", () => {
  it("removes Cursor co-author trailers", () => {
    const input = [
      "feat: fix build",
      "",
      "Co-authored-by: Cursor <cursoragent@cursor.com>",
    ].join("\n");

    const output = stripForbiddenAttribution(input);
    assert.equal(output, "feat: fix build");
  });

  it("removes Made-with Cursor trailers", () => {
    const input = "feat: ship\n\nMade-with: Cursor";
    assert.equal(stripForbiddenAttribution(input), "feat: ship");
  });

  it("keeps human GitHub co-authors", () => {
    const input = [
      "feat: pair session",
      "",
      "Co-authored-by: Kory Kaai <69431357+kory-kaai@users.noreply.github.com>",
      "Co-authored-by: TopDaily Dev <315340167+topdaily-dev@users.noreply.github.com>",
    ].join("\n");

    assert.equal(stripForbiddenAttribution(input), input);
  });
});

describe("findForbiddenAttribution", () => {
  it("finds cursoragent lines", () => {
    const lines = findForbiddenAttribution(
      "Co-authored-by: Cursor <cursoragent@cursor.com>",
    );
    assert.equal(lines.length, 1);
  });
});
