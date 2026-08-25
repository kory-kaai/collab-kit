import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { findInvalidUtf8, isProbablyBinary } from "./check-encoding.mjs";

const bytes = (...values) => Uint8Array.from(values);

describe("findInvalidUtf8", () => {
  it("accepts plain ASCII", () => {
    assert.equal(findInvalidUtf8(Buffer.from("# Git attribution\n")), null);
  });

  it("accepts multi-byte characters this repo actually uses", () => {
    // em dash, box drawing tee and dash, rightwards arrow, middle dot
    const valid = Buffer.from("\u2014 \u251c\u2500\u2500 \u2192 \u00b7\n");
    assert.equal(findInvalidUtf8(valid), null);
  });

  it("accepts a four-byte sequence", () => {
    assert.equal(findInvalidUtf8(bytes(0xf0, 0x9f, 0x92, 0xa9)), null);
  });

  it("rejects a bare 0xB7, the byte that broke README.md", () => {
    const result = findInvalidUtf8(bytes(0x6d, 0x64, 0x20, 0xb7, 0x20));
    assert.equal(result?.byte, 0xb7);
    assert.equal(result?.offset, 3);
  });

  it("rejects the CP1252 run that broke docs/git-attribution.md", () => {
    const result = findInvalidUtf8(bytes(0x47, 0xc7, 0xf6));
    assert.equal(result?.byte, 0xc7);
    assert.equal(result?.offset, 1);
  });

  it("rejects a lone continuation byte", () => {
    assert.equal(findInvalidUtf8(bytes(0x80))?.offset, 0);
  });

  it("rejects a truncated multi-byte sequence", () => {
    assert.equal(findInvalidUtf8(bytes(0xe2, 0x94))?.offset, 0);
  });

  it("rejects overlong encodings", () => {
    assert.equal(findInvalidUtf8(bytes(0xc0, 0xaf))?.offset, 0);
  });

  it("rejects UTF-16 surrogate halves", () => {
    assert.equal(findInvalidUtf8(bytes(0xed, 0xa0, 0x80))?.offset, 0);
  });

  it("reports the line the bad byte sits on", () => {
    const result = findInvalidUtf8(bytes(0x61, 0x0a, 0x62, 0x0a, 0xff));
    assert.equal(result?.line, 3);
  });
});

describe("isProbablyBinary", () => {
  it("treats a NUL byte as binary", () => {
    assert.equal(isProbablyBinary(bytes(0x89, 0x50, 0x00, 0x01)), true);
  });

  it("treats text as text", () => {
    assert.equal(isProbablyBinary(Buffer.from("hello\n")), false);
  });
});
