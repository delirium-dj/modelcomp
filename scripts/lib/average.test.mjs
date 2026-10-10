// Regression tests for scripts/lib/average.mjs — average.md recomputation.
// Run: `pnpm test` (zero deps, node:test only).
import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { buildMixNote, buildAverageEntry, buildAverageLines, buildAverageBody, applyAverageToPrev, buildQueueFile } from "./average.mjs";

const entry = (overall, rest = {}) => ({
  file: `R${overall}.md`,
  scores: {
    "Tool use": 80,
    Reasoning: 82,
    "Context window": 78,
    Multimodal: 81,
    Coding: 79,
    "Cost efficiency": 90,
    "Overall Score": overall,
    ...rest,
  },
});

describe("buildMixNote (which reports counted)", () => {
  it("fallback variant names the crown rule", () => {
    const note = buildMixNote({ fallback: true, trimmed: false, totalSources: 3, cohortSize: 3 });
    assert.match(note, /Fallback mean of all 3/);
    assert.match(note, /RULES\.md/);
  });

  it("trimmed variant names the top-N-of-M cohort", () => {
    const note = buildMixNote({ fallback: false, trimmed: true, totalSources: 12, cohortSize: 10 });
    assert.match(note, /Mean of top 10 of 12/);
    assert.match(note, /ranked by Overall Score/);
  });

  it("plain variant for untrimmed qualifying sets", () => {
    assert.match(buildMixNote({ fallback: false, trimmed: false, totalSources: 4, cohortSize: 4 }), /Mean of 4 qualifying/);
  });
});

describe("buildAverageEntry + buildAverageLines", () => {
  const cohort = [entry(80), entry(82)]; // dim means: tool 80, overall 81

  it("entry carries all seven short keys from the cohort mean", () => {
    assert.deepEqual(buildAverageEntry(cohort), {
      tool: 80,
      reasoning: 82,
      context: 78,
      multimodal: 81,
      coding: 79,
      cost: 90,
      overall: 81,
    });
  });

  it("lines keep canonical order with Overall last", () => {
    const lines = buildAverageLines(cohort, "NOTE");
    assert.equal(lines.length, 7);
    assert.match(lines[0], /^- \*\*Tool use: 80\/100\.\*\* NOTE$/);
    assert.match(lines[6], /^- \*\*Overall Score: 81\/100\.\*\* NOTE$/);
  });
});

describe("buildAverageBody (Agreement notes)", () => {
  const base = {
    cohort: [entry(80)],
    labels: ["A Rater"],
    topLabels: ["A Rater"],
    excludedLabels: [],
    ignoredLabels: [],
    fallback: false,
    trimmed: false,
    totalSources: 1,
    cohortSize: 1,
  };

  it("qualifying body lists sources + top cohort", () => {
    const body = buildAverageBody(base);
    assert.match(body, /## Averaged scores/);
    assert.match(body, /Based on 1 qualifying reporting source/);
    assert.match(body, /Average from top 1 by Overall Score: A Rater/);
    assert.doesNotMatch(body, /Excluded bottom/);
    assert.doesNotMatch(body, /Ignored below-gate/);
  });

  it("trimmed body names the excluded bottom", () => {
    const body = buildAverageBody({ ...base, trimmed: true, totalSources: 3, excludedLabels: ["Low Rater"] });
    assert.match(body, /Excluded bottom 2: Low Rater/);
  });

  it("fallback body cites the crown rule path", () => {
    const body = buildAverageBody({ ...base, fallback: true, totalSources: 2, labels: ["A", "B"] });
    assert.match(body, /Fallback: no qualifying raters/);
    assert.match(body, /average from all 2 below-gate source\(s\): A, B/);
  });

  it("ignored below-gate raters are listed (non-fallback only)", () => {
    const withIgnored = buildAverageBody({ ...base, ignoredLabels: ["Weak Rater"] });
    assert.match(withIgnored, /Ignored below-gate rater\(s\): Weak Rater/);
    const fallbackIgnored = buildAverageBody({ ...base, fallback: true, ignoredLabels: ["Weak Rater"] });
    assert.doesNotMatch(fallbackIgnored, /Ignored below-gate/);
  });
});

describe("applyAverageToPrev (header preservation)", () => {
  it("new files get the full header", () => {
    const { next, created } = applyAverageToPrev(null, "Demo Model", "BODY");
    assert.equal(created, true);
    assert.match(next, /^# Demo Model — Averaged findings/);
    assert.match(next, /model-comparison\.md/);
    assert.match(next, /BODY$/);
  });

  it("existing files keep their head, replace the scores tail", () => {
    const prev = "# Custom Title\n\n- custom link\n\n## Averaged scores\n\nOLD BODY";
    const { next, created } = applyAverageToPrev(prev, "Demo Model", "NEW BODY");
    assert.equal(created, false);
    assert.match(next, /^# Custom Title/);
    assert.match(next, /custom link/);
    assert.match(next, /NEW BODY$/);
    assert.doesNotMatch(next, /OLD BODY/);
  });
});

describe("buildQueueFile (research queue)", () => {
  const index = {
    "b-model": { "average.md": { overall: 80 } },
    "a-model": { "average.md": { overall: 91.8 } },
    "c-model": { "average.md": { overall: 80 } },
    "no-average": { "Some_Rater.md": { overall: 99 } },
  };

  it("sorts Overall desc, ties A-Z, skips slugs without an average entry", () => {
    const out = buildQueueFile(index);
    assert.match(out, /do not hand-edit/);
    const rows = out.split("\n").filter((l) => l && !l.startsWith("#"));
    assert.deepEqual(rows, ["91.8 a-model", "80 b-model", "80 c-model"]);
  });

  it("ends with exactly one trailing newline", () => {
    assert.match(buildQueueFile({}), /#.*\n$/);
    assert.doesNotMatch(buildQueueFile({}), /\n\n$/);
  });

  it("omits retired (parked) slugs even with the highest Overall", () => {
    const out = buildQueueFile({ ...index, "glm-5.3-free": { "average.md": { overall: 99.9 } } });
    const rows = out.split("\n").filter((l) => l && !l.startsWith("#"));
    assert.deepEqual(rows, ["91.8 a-model", "80 b-model", "80 c-model"]);
  });

  it("documents the retired convention in the header", () => {
    assert.match(buildQueueFile(index), /Retired \(parked\) slugs are omitted/);
  });

  it("accepts an explicit retired set override", () => {
    const out = buildQueueFile(index, new Set(["a-model"]));
    const rows = out.split("\n").filter((l) => l && !l.startsWith("#"));
    assert.deepEqual(rows, ["80 b-model", "80 c-model"]);
  });
});
