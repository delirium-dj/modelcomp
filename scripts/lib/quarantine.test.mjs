// Regression tests for scripts/lib/quarantine.mjs — QUAR / SELF-EXCLUSION.
// Run: `npm test` / `node --test scripts/lib/` (zero deps, node:test only).
import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { countMissing, countNumerics, parseQualityDims, quarantineReason } from "./quarantine.mjs";

const NOT_FOUND_ROW = (bench) => `- **${bench}:** no verified public score found (source)`;
const NUMERIC_ROW = (bench, n) => `- **${bench}: ${n}** (source)`;
// NOTE: bench names must contain no digits — countNumerics counts any bold
// span with a digit (same heuristic as sync), so digit-bearing names would
// fake measured numbers.
const LETTER_BENCH = (i) => `Bench${"ABCDEFGHIJ"[i]}`;

function findingsDoc({ rawRows, dims }) {
  const dimLines = Object.entries(dims)
    .map(([l, n]) => `- **${l}: ${n}/100.** normalized`)
    .join("\n");
  return `# Fixture\n\n### Raw benchmarks found\n\n${rawRows.join("\n")}\n\n### Normalized scores\n\n${dimLines}\n\n---\n`;
}

const HEALTHY_DIMS = {
  "Tool use": 80,
  Reasoning: 82,
  "Context window": 78,
  Multimodal: 81,
  Coding: 79,
};

const VARIED_LOW_DIMS = {
  "Tool use": 42,
  Reasoning: 38,
  "Context window": 51,
  Multimodal: 35,
  Coding: 47,
};

describe("countMissing / countNumerics", () => {
  it("counts case-insensitive not-found rows", () => {
    const section = [NOT_FOUND_ROW("A"), "- **B:** No Verified Public Score Found (x)"].join("\n");
    assert.equal(countMissing(section), 2);
  });

  it("counts bold numeric spans", () => {
    assert.equal(countNumerics(NUMERIC_ROW("SWE-bench", 87)), 1);
  });

  it("never pairs ** across lines (historical escaping bug)", () => {
    // With the old buggy `[^*]*` pattern this scores 1: the closing ** of the
    // first row pairs with the opening ** of the second across the newline.
    const section = ["- Tau3-Banking / Tau2-Bench: **score pending", "  87 continued**"].join("\n");
    assert.equal(countNumerics(section), 0);
  });
});

describe("quarantineReason (QUAR criteria)", () => {
  it("quarantines evidence-free files (8+ not-found, 0 numerics)", () => {
    const rawRows = Array.from({ length: 9 }, (_, i) => NOT_FOUND_ROW(`LETTER_BENCH(i)`));
    const reason = quarantineReason(findingsDoc({ rawRows, dims: HEALTHY_DIMS }));
    assert.match(reason, /no verified benchmarks/);
    assert.match(reason, /9x "not found", 0 measured numbers/);
  });

  it("keeps files below the 8-row threshold", () => {
    const rawRows = Array.from({ length: 7 }, (_, i) => NOT_FOUND_ROW(`LETTER_BENCH(i)`));
    assert.equal(quarantineReason(findingsDoc({ rawRows, dims: HEALTHY_DIMS })), null);
  });

  it("any single real number keeps the file", () => {
    const rawRows = [...Array.from({ length: 9 }, (_, i) => NOT_FOUND_ROW(`LETTER_BENCH(i)`)), NUMERIC_ROW("SWE-bench", 62)];
    assert.equal(quarantineReason(findingsDoc({ rawRows, dims: HEALTHY_DIMS })), null);
  });

  it("quarantines zero-scored dims ('no data' filed as 0)", () => {
    const rawRows = [NUMERIC_ROW("SWE-bench", 62)];
    const dims = { ...HEALTHY_DIMS, Coding: 0 };
    const reason = quarantineReason(findingsDoc({ rawRows, dims }));
    assert.match(reason, /zero-scored dimension/);
  });

  it("quarantines flat-identical dims with zero cited numbers", () => {
    const rawRows = Array.from({ length: 3 }, (_, i) => NOT_FOUND_ROW(`LETTER_BENCH(i)`));
    const flat = Object.fromEntries(Object.keys(HEALTHY_DIMS).map((k) => [k, 70]));
    const reason = quarantineReason(findingsDoc({ rawRows, dims: flat }));
    assert.match(reason, /flat 70\/100 across all dims/);
  });

  it("never touches real low scores (varied dims, cited numbers)", () => {
    const rawRows = [NUMERIC_ROW("SWE-bench", 41), NUMERIC_ROW("Tau-bench", 38), NOT_FOUND_ROW("Other")];
    assert.equal(quarantineReason(findingsDoc({ rawRows, dims: VARIED_LOW_DIMS })), null);
  });

  it("ignores files without a Raw-benchmarks section", () => {
    assert.equal(quarantineReason("# No sections here\n"), null);
  });
});

describe("parseQualityDims (Cost excluded)", () => {
  it("parses the five quality dims in any order", () => {
    const dims = parseQualityDims(findingsDoc({ rawRows: [], dims: HEALTHY_DIMS }));
    assert.deepEqual(dims, [80, 82, 78, 81, 79]);
  });
});
