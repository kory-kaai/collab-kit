#!/usr/bin/env node

import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

/**
 * Walks a buffer against the UTF-8 byte table and reports the first byte that
 * cannot start or continue a valid sequence.
 *
 * TextDecoder can tell us a buffer is invalid but not where, and the offset is
 * the only part a contributor can act on.
 *
 * @param {Uint8Array} bytes
 * @returns {{ offset: number; byte: number; line: number } | null}
 */
export function findInvalidUtf8(bytes) {
  let i = 0;
  let line = 1;

  const fail = (offset) => ({ offset, byte: bytes[offset], line });

  const continuation = (index, min = 0x80, max = 0xbf) =>
    index < bytes.length && bytes[index] >= min && bytes[index] <= max;

  while (i < bytes.length) {
    const byte = bytes[i];

    if (byte === 0x0a) {
      line += 1;
      i += 1;
      continue;
    }

    if (byte <= 0x7f) {
      i += 1;
      continue;
    }

    let width;
    let secondMin = 0x80;
    let secondMax = 0xbf;

    if (byte >= 0xc2 && byte <= 0xdf) {
      width = 2;
    } else if (byte === 0xe0) {
      width = 3;
      secondMin = 0xa0;
    } else if (byte === 0xed) {
      // Reject UTF-16 surrogate halves.
      width = 3;
      secondMax = 0x9f;
    } else if ((byte >= 0xe1 && byte <= 0xec) || byte === 0xee || byte === 0xef) {
      width = 3;
    } else if (byte === 0xf0) {
      width = 4;
      secondMin = 0x90;
    } else if (byte >= 0xf1 && byte <= 0xf3) {
      width = 4;
    } else if (byte === 0xf4) {
      width = 4;
      secondMax = 0x8f;
    } else {
      // 0xC0 and 0xC1 are overlong, 0xF5+ is out of range, 0x80-0xBF is a
      // continuation byte with nothing to continue.
      return fail(i);
    }

    if (!continuation(i + 1, secondMin, secondMax)) {
      return fail(i);
    }
    for (let k = 2; k < width; k += 1) {
      if (!continuation(i + k)) {
        return fail(i);
      }
    }

    i += width;
  }

  return null;
}

/**
 * @param {Uint8Array} bytes
 * @returns {boolean}
 */
export function isProbablyBinary(bytes) {
  return bytes.includes(0x00);
}

/**
 * @param {string} cwd
 * @returns {string[]}
 */
export function listTrackedFiles(cwd) {
  const output = execFileSync("git", ["ls-files", "-z"], {
    cwd,
    encoding: "utf8",
    maxBuffer: 32 * 1024 * 1024,
  });

  return output.split("\0").filter(Boolean);
}

/**
 * @param {string} root
 * @returns {{ checked: number; skipped: number; problems: { file: string; offset: number; byte: number; line: number }[] }}
 */
export function checkRepository(root) {
  const problems = [];
  let checked = 0;
  let skipped = 0;

  for (const file of listTrackedFiles(root)) {
    let bytes;
    try {
      bytes = readFileSync(join(root, file));
    } catch {
      continue;
    }

    if (isProbablyBinary(bytes)) {
      skipped += 1;
      continue;
    }

    checked += 1;
    const problem = findInvalidUtf8(bytes);
    if (problem) {
      problems.push({ file, ...problem });
    }
  }

  return { checked, skipped, problems };
}

function isMainModule() {
  const invoked = process.argv[1];
  if (!invoked) {
    return false;
  }
  return resolve(invoked) === resolve(fileURLToPath(import.meta.url));
}

if (isMainModule()) {
  const root = resolve(process.argv[2] ?? dirname(fileURLToPath(import.meta.url)) + "/..");
  const { checked, skipped, problems } = checkRepository(root);

  if (problems.length === 0) {
    console.log(`All ${checked} text files are valid UTF-8 (${skipped} binary skipped).`);
    process.exit(0);
  }

  console.error(`Found ${problems.length} file(s) that are not valid UTF-8:\n`);
  for (const { file, line, byte, offset } of problems) {
    const hex = byte.toString(16).toUpperCase().padStart(2, "0");
    console.error(`  ${file}:${line} - byte 0x${hex} at offset ${offset}`);
  }
  console.error(
    "\nThis usually means text was written in a legacy code page. Re-save the" +
      " file as UTF-8; .editorconfig already declares charset = utf-8.",
  );
  process.exit(1);
}
