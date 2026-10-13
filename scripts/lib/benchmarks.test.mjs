// Regression tests for scripts/lib/benchmarks.mjs — verified-figure agreement.
// Run: `pnpm test` (zero deps, node:test only).
import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { matchBenchmark, normalizeFigure, parseBenchmarkRows, agreeEvidence } from "./benchmarks.mjs";

describe("matchBenchmark (vocab, longest-first, anchored)", () => {
  it("matches canonical rows", () => {
    assert.equal(matchBenchmark("- Terminal-Bench 2.0: **82.7%**").entry.key, "terminalbench");
    assert.equal(matchBenchmark("- SWE-bench Verified: **82.6%** (Vals.ai)").entry.key, "swe-verified");
  });

  it("prefers longer aliases and keeps AA harnesses separate", () => {
    assert.equal(matchBenchmark("- MMMU-Pro: **81.2%**").entry.key, "mmmu-pro");
    assert.equal(matchBenchmark("- AA-GPQA Diamond: **72.7%**").entry.key, "aa-gpqa");
    assert.equal(matchBenchmark("- GPQA Diamond: **93.6%**").entry.key, "gpqa");
  });

  it("ignores prose lines and unknown benchmarks", () => {
    assert.equal(matchBenchmark("Scores are normalized 1–100 interpretations."), null);
  });

  it("parses Elo figures", () => {
    assert.equal(matchBenchmark("- GDPval-AA **1769 Elo** / v2 **1494**").entry.key, "gdpval");
    const rows = parseBenchmarkRows("- GDPval-AA **1769 Elo** / v2 **1494**\n");
    assert.deepEqual(rows, [{ key: "gdpval", benchmark: "GDPval", value: "1769 Elo" }]);
  });

  it("returns null for unlisted benchmarks", () => {
    assert.equal(matchBenchmark("- KingBench 3: **53/80**"), null);
    assert.equal(matchBenchmark("- No verified public score found"), null);
  });
});

describe("normalizeFigure (% or Elo only)", () => {
  it("normalizes percents", () => {
    assert.equal(normalizeFigure("82.6", "%"), "82.6%");
    assert.equal(normalizeFigure("82.60", "%"), "82.6%");
  });

  it("normalizes Elo", () => {
    assert.equal(normalizeFigure("1470", "Elo"), "1470 Elo");
  });

  it("rejects negatives, ranks and unitless counts", () => {
    assert.equal(normalizeFigure("-37.1", undefined), null);
    assert.equal(normalizeFigure("75.7", undefined), null);
    assert.equal(normalizeFigure("1515", undefined), null);
  });
});

describe("parseBenchmarkRows (house format, conservative)", () => {
  it("takes the first bold figure per row", () => {
    const rows = parseBenchmarkRows("- HLE: **41.4%** no tools / **52.2%** with tools\n");
    assert.deepEqual(rows, [{ key: "hle", benchmark: "HLE", value: "41.4%" }]);
  });

  it("splits multi-benchmark lines on semicolons", () => {
    const rows = parseBenchmarkRows("- AA-LCR: **53.0%**; AA-HLE: **8.0%**; **CritPt: 0.0%** (AA)\n");
    assert.deepEqual(rows.map((r) => r.value), ["53%", "8%", "0%"]);
  });

  it("skips no-data rows and composites", () => {
    assert.deepEqual(parseBenchmarkRows("- SWE-bench Verified / SWE-Pro: no verified public score found\n"), []);
    assert.deepEqual(parseBenchmarkRows("- BenchLM overall **49.47/100** composite\n"), []);
  });
});

describe("agreeEvidence (2+ distinct stems)", () => {
  const a = [{ key: "swe-verified", benchmark: "SWE-bench Verified", value: "82.6%" }];
  const b = [{ key: "swe-verified", benchmark: "SWE-bench Verified", value: "82.6%" }];
  const c = [{ key: "swe-verified", benchmark: "SWE-bench Verified", value: "63.8%" }];

  it("surfaces same-figure agreement with both raters", () => {
    assert.deepEqual(agreeEvidence([{ stem: "A", rows: a }, { stem: "B", rows: b }]), [
      { benchmark: "SWE-bench Verified", value: "82.6%", raters: ["A", "B"] },
    ]);
  });

  it("hides singletons and same-file double counts", () => {
    assert.deepEqual(agreeEvidence([{ stem: "A", rows: a }]), []);
    assert.deepEqual(agreeEvidence([{ stem: "A", rows: [...a, ...a] }]), []);
  });

  it("keeps differing figures apart", () => {
    assert.deepEqual(agreeEvidence([{ stem: "A", rows: a }, { stem: "B", rows: c }]), []);
  });

  it("sorts most-cited first", () => {
    const gpqa = [{ key: "gpqa", benchmark: "GPQA Diamond", value: "93.6%" }];
    const out = agreeEvidence([
      { stem: "A", rows: [...a, ...gpqa] },
      { stem: "B", rows: [...b, ...gpqa] },
      { stem: "C", rows: gpqa },
    ]);
    assert.equal(out[0].benchmark, "GPQA Diamond");
    assert.deepEqual(out[0].raters, ["A", "B", "C"]);
  });

  it("ranks priority benchmarks above more-cited others", () => {
    const live = [{ key: "livecodebench", benchmark: "LiveCodeBench", value: "84.0%" }];
    const tb = [{ key: "terminalbench", benchmark: "Terminal-Bench", value: "82.7%" }];
    const input = [
      { stem: "A", rows: [...live, ...tb] },
      { stem: "B", rows: [...live, ...tb] },
      { stem: "C", rows: live },
      { stem: "D", rows: live },
    ];
    const out = agreeEvidence(input);
    assert.equal(out[0].benchmark, "Terminal-Bench");
    assert.equal(out[1].benchmark, "LiveCodeBench");
  });

  it("collapses every benchmark to its most-cited figure", () => {
    const tb1 = [{ key: "terminalbench", benchmark: "Terminal-Bench", value: "82.7%" }];
    const tb2 = [{ key: "terminalbench", benchmark: "Terminal-Bench", value: "78.2%" }];
    const hle1 = [{ key: "hle", benchmark: "HLE", value: "52.2%" }];
    const hle2 = [{ key: "hle", benchmark: "HLE", value: "41.4%" }];
    const out = agreeEvidence([
      { stem: "A", rows: [...tb1, ...hle2] },
      { stem: "B", rows: [...tb1, ...hle2] },
      { stem: "C", rows: [...tb2, ...hle1] },
      { stem: "D", rows: [...tb2, ...hle1] },
      { stem: "E", rows: [...tb2, ...hle1] },
    ]);
    const tbRows = out.filter((r) => r.benchmark === "Terminal-Bench");
    const hleRows = out.filter((r) => r.benchmark === "HLE");
    assert.equal(tbRows.length, 1);
    assert.equal(tbRows[0].value, "78.2%");
    assert.equal(hleRows.length, 1);
    assert.equal(hleRows[0].value, "52.2%");
  });
});
