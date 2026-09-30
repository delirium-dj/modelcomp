// Regression tests for scripts/lib/parse.mjs — the average.md format contract.
// Run: `npm test` / `node --test scripts/lib/` (zero deps, node:test only).
import { describe, it } from "node:test";
import assert from "node:assert/strict";
import {
  LABELS,
  SHORT,
  QUALITY_DIMS,
  FILENAME_RE,
  RATER_GATE,
  OVERALL_TOLERANCE,
  halfUp1,
  parseScoresPure,
  shortenScores,
  overallDrift,
  applyOverallFix,
  meanOf,
  rankTop10,
  partitionEligible,
  sortLabelsAZ,
} from "./parse.mjs";

/** Minimal findings doc with the seven score lines. */
function makeDoc(scores) {
  const lines = LABELS.map((l) => `- **${l}: ${scores[l]}/100.** note`);
  return `# Fixture\n\n### Normalized scores\n\n${lines.join("\n")}\n`;
}

const GOOD = {
  "Tool use": 80,
  Reasoning: 82,
  "Context window": 78,
  Multimodal: 81,
  Coding: 79,
  "Cost efficiency": 90,
  "Overall Score": 80, // mean of the five quality dims = 80
};

describe("parseScoresPure (format contract)", () => {
  it("parses all seven score lines", () => {
    const r = parseScoresPure(makeDoc(GOOD));
    assert.equal(r.ok, true);
    assert.deepEqual(r.scores, GOOD);
  });

  it("accepts floats with ≤ 1 decimal", () => {
    const r = parseScoresPure(makeDoc({ ...GOOD, "Tool use": 66.5 }));
    assert.equal(r.ok, true);
    assert.equal(r.scores["Tool use"], 66.5);
  });

  it("fails on the first missing label (never invents numbers)", () => {
    const doc = makeDoc(GOOD).replace("- **Coding: 79/100.** note\n", "");
    const r = parseScoresPure(doc);
    assert.equal(r.ok, false);
    assert.equal(r.missingLabel, "Coding");
  });

  it("ignores lookalike lines in Agreement notes", () => {
    const doc = makeDoc(GOOD) + "\n## Agreement notes\n\n- Based on 3 sources: A, B, C.\n";
    assert.equal(parseScoresPure(doc).ok, true);
  });
});

describe("halfUp1", () => {
  it("rounds half up to 1 decimal (72.25 -> 72.3)", () => {
    assert.equal(halfUp1(72.25), 72.3);
  });

  it("rounds the gate boundary 84.95 -> 85", () => {
    assert.equal(halfUp1(84.95), 85);
  });

  it("leaves whole numbers alone", () => {
    assert.equal(halfUp1(80), 80);
  });
});

describe("overallDrift (Cost excluded, tolerance 0.51)", () => {
  it("no drift when Overall equals the 5-dim mean", () => {
    const d = overallDrift(GOOD);
    assert.equal(d.mean5, 80);
    assert.equal(d.corrected, 80);
    assert.equal(d.drifted, false);
  });

  it("no drift within tolerance (rounding distance)", () => {
    const d = overallDrift({ ...GOOD, "Overall Score": 80.5 });
    assert.equal(d.drifted, false);
    assert.equal(d.corrected, 80);
  });

  it("flags drift beyond tolerance for auto-correct", () => {
    const d = overallDrift({ ...GOOD, "Overall Score": 90 });
    assert.equal(d.drifted, true);
    assert.equal(d.corrected, 80);
  });

  it("Cost never feeds the mean", () => {
    const d = overallDrift({ ...GOOD, "Cost efficiency": 10 });
    assert.equal(d.mean5, 80);
    assert.equal(d.drifted, false);
  });
});

describe("applyOverallFix", () => {
  it("rewrites only the Overall number", () => {
    const doc = makeDoc({ ...GOOD, "Overall Score": 90 });
    const fixed = applyOverallFix(doc, 80);
    assert.match(fixed, /\*\*Overall Score: 80\/100/);
    assert.match(fixed, /\*\*Tool use: 80\/100/);
  });

  it("returns null when the line is not auto-fixable", () => {
    assert.equal(applyOverallFix("no score lines here", 80), null);
  });
});

describe("shortenScores", () => {
  it("maps all seven labels to short keys", () => {
    assert.deepEqual(shortenScores(GOOD), {
      tool: 80,
      reasoning: 82,
      context: 78,
      multimodal: 81,
      coding: 79,
      cost: 90,
      overall: 80,
    });
  });

  it("SHORT covers every LABEL (contract)", () => {
    assert.deepEqual([...Object.keys(SHORT)].sort(), [...LABELS].sort());
    assert.equal(QUALITY_DIMS.length, 5);
    assert.ok(!QUALITY_DIMS.includes("Cost efficiency"));
  });
});

describe("FILENAME_RE", () => {
  it("accepts version dots (DeepSeek_4.1_Flash.md)", () => {
    assert.match("DeepSeek_4.1_Flash.md", FILENAME_RE);
    assert.match("Big_Pickle.md", FILENAME_RE);
  });

  it("rejects hyphens, spaces, and non-md", () => {
    assert.doesNotMatch("my-file.md", FILENAME_RE);
    assert.doesNotMatch("my file.md", FILENAME_RE);
    assert.doesNotMatch("notes.txt", FILENAME_RE);
  });
});

describe("rankTop10 + meanOf (average.md recomputation)", () => {
  const entry = (overall) => ({ file: `${overall}.md`, scores: { ...GOOD, "Overall Score": overall } });

  it("keeps the ten highest Overall first", () => {
    const perFile = Array.from({ length: 12 }, (_, i) => entry(70 + i)); // 70..81
    const cohort = rankTop10(perFile);
    assert.equal(cohort.length, 10);
    assert.equal(cohort[0].scores["Overall Score"], 81);
    assert.equal(cohort[9].scores["Overall Score"], 72);
  });

  it("keeps all when ≤ 10 sources", () => {
    assert.equal(rankTop10([entry(80), entry(90)]).length, 2);
  });

  it("meanOf half-ups over the cohort", () => {
    const cohort = [entry(80), entry(81)];
    assert.equal(meanOf(cohort, "Overall Score"), 80.5);
  });
});

describe("partitionEligible (rater gate 84.9)", () => {
  const perFile = [{ file: "A.md" }, { file: "B.md" }, { file: "C.md" }, { file: "D.md" }];
  const resolve = (stems) => (stem) => stems[stem] ?? null;
  const raterOwn = new Map([
    ["a", 90],
    ["b", 84.9], // boundary: strict `>` => NOT eligible
    ["c", 84.91],
  ]);

  it("keeps only raters strictly above the gate", () => {
    const { eligible, ignoredLabels } = partitionEligible(
      perFile,
      resolve({ A: "a", B: "b", C: "c", D: "d" }),
      raterOwn,
      RATER_GATE,
    );
    assert.deepEqual(
      eligible.map((p) => p.file),
      ["A.md", "C.md"],
    );
    assert.deepEqual(ignoredLabels, ["B", "D"]);
  });

  it("unknown raters (no tracked model) never qualify", () => {
    const { eligible } = partitionEligible(perFile, () => null, raterOwn, RATER_GATE);
    assert.equal(eligible.length, 0);
  });
});

describe("sortLabelsAZ (Agreement-notes convention)", () => {
  it("sorts case-insensitively: Gemini before GLM", () => {
    assert.deepEqual(sortLabelsAZ(["GLM 5.3 Flash", "Gemini 3.6 Flash", "average"]), [
      "average",
      "Gemini 3.6 Flash",
      "GLM 5.3 Flash",
    ]);
  });
});

describe("contract constants", () => {
  it("gate and tolerance match the UI + dev check", () => {
    assert.equal(RATER_GATE, 84.9);
    assert.equal(OVERALL_TOLERANCE, 0.51);
  });
});
