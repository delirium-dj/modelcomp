// Regression tests for scripts/lib/codegen.mjs — registry surgery + emit.
// Run: `pnpm test` (zero deps, node:test only).
import { describe, it } from "node:test";
import assert from "node:assert/strict";
import {
  parseRegistryEntries,
  parseUnionMembers,
  buildRegistryEntry,
  computePending,
  collisionFailMessage,
  appendPendingSources,
  reconcileRegistry,
  renderScoresFile,
  renderVerifiedFile,
  renderEvidenceFile,
  renderRobotsTxt,
  harvestReferences,
  renderReferencesFile,
  buildBenchmarksData,
  renderBenchmarksFile,
  ensureRaterGateLine,
} from "./codegen.mjs";
const SOURCES_TS = `// AUTO-GENERATED
export type SourceKey =
  | "average"
  | "Alpha";

export interface SourceDef {
  key: SourceKey;
  label: string;
  file: string;
  slug?: string;
}

export const SOURCE_DEFS: SourceDef[] = [
  { key: "average", label: "Average", file: "average.md" },
  { key: "Alpha", label: "Alpha", file: "Alpha.md", slug: "alpha" },
];
`;

const resolve = (key) => ({ label: key, slug: key === "Alpha" ? "alpha" : undefined });
const keyOf = (stem) => stem.replace(/_/g, " ");

describe("parseRegistryEntries / parseUnionMembers", () => {
  it("reads entries with and without inline slugs", () => {
    const entries = parseRegistryEntries(SOURCES_TS);
    assert.deepEqual(entries, [
      { full: '{ key: "average", label: "Average", file: "average.md" }', key: "average", file: "average.md" },
      { full: '{ key: "Alpha", label: "Alpha", file: "Alpha.md", slug: "alpha" }', key: "Alpha", file: "Alpha.md" },
    ]);
  });

  it("reads the union members", () => {
    assert.deepEqual([...parseUnionMembers(SOURCES_TS)], ["average", "Alpha"]);
  });
});

describe("buildRegistryEntry (exact on-disk stems)", () => {
  it("emits slug inline when resolved", () => {
    assert.equal(buildRegistryEntry("Alpha", "Alpha", resolve), '{ key: "Alpha", label: "Alpha", file: "Alpha.md", slug: "alpha" }');
  });

  it("omits slug when the agent has no tracked page", () => {
    assert.equal(buildRegistryEntry("Ghost", "Ghost", resolve), '{ key: "Ghost", label: "Ghost", file: "Ghost.md" }');
  });

  it("preserves dotted stems verbatim (never re-derived)", () => {
    assert.equal(
      buildRegistryEntry("DeepSeek 4.1 Flash", "DeepSeek_4.1_Flash", () => ({ label: "DeepSeek v4.1 Flash", slug: "s" })),
      '{ key: "DeepSeek 4.1 Flash", label: "DeepSeek v4.1 Flash", file: "DeepSeek_4.1_Flash.md", slug: "s" }',
    );
  });
});

describe("computePending (new stems vs collisions)", () => {
  it("flags genuinely new stems (missing = on-disk minus registered)", () => {
    // Sync pre-filters to stems absent from the registry; "Alpha" is already
    // registered, so only "Beta" arrives here. (An unregistered stem mapping
    // to a taken key is the collision case below, not a pending one.)
    const { pending, collisions } = computePending(["Beta"], SOURCES_TS, keyOf);
    assert.deepEqual(collisions, []);
    assert.deepEqual(pending, [{ key: "Beta", stem: "Beta", needUnion: true }]);
  });

  it("routes key collisions to a human (stem maps to a taken key)", () => {
    // Missing stem "Zeta" derives key "Alpha", already registered for Alpha.md.
    const { pending, collisions } = computePending(["Zeta"], SOURCES_TS, (s) => (s === "Zeta" ? "Alpha" : keyOf(s)));
    assert.deepEqual(pending, []);
    assert.deepEqual(collisions, [{ stem: "Zeta", key: "Alpha" }]);
    assert.match(collisionFailMessage("Zeta", "Alpha"), /already registered for another file/);
  });

  it("repairs partial runs (union line present, entry missing)", () => {
    const withUnion = SOURCES_TS.replace('| "Alpha";', '| "Alpha"\n  | "Beta";');
    const { pending } = computePending(["Beta"], withUnion, keyOf);
    assert.deepEqual(pending, [{ key: "Beta", stem: "Beta", needUnion: false }]);
  });
});

describe("appendPendingSources (registry splice)", () => {
  it("appends union lines + entries, last wins no reorder", () => {
    const { ok, text } = appendPendingSources(SOURCES_TS, [{ key: "Beta", stem: "Beta", needUnion: true }], (k, s) =>
      buildRegistryEntry(k, s, resolve),
    );
    assert.equal(ok, true);
    assert.match(text, /\| "Beta";/);
    assert.match(text, /\{ key: "Beta", label: "Beta", file: "Beta\.md" \},/);
    assert.ok(text.indexOf('{ key: "Alpha"') < text.indexOf('{ key: "Beta"')); // existing order preserved, appended last
  });

  it("fails closed when anchors are unlocatable", () => {
    assert.equal(appendPendingSources("garbage", [{ key: "B", stem: "B", needUnion: true }], buildRegistryEntry).ok, false);
  });
});

describe("reconcileRegistry (labels/slugs + virtual prune)", () => {
  const withVirtual = SOURCES_TS.replace(
    '  { key: "average", label: "Average", file: "average.md" },',
    '  { key: "average", label: "Average", file: "average.md" },\n  { key: "tool", label: "Tool", file: "average.md" },',
  ).replace('| "Alpha";', '| "Alpha"\n  | "tool";');

  it("prunes grandfathered virtual entries + union lines", () => {
    const text = reconcileRegistry(withVirtual, (k, s) => buildRegistryEntry(k, s, resolve));
    assert.doesNotMatch(text, /"tool"/);
    assert.match(text, /\{ key: "Alpha"/);
  });

  it("backfills drifted labels/slugs, idempotent afterwards", () => {
    const drifted = SOURCES_TS.replace('{ key: "Alpha", label: "Alpha", file: "Alpha.md", slug: "alpha" }', '{ key: "Alpha", label: "WRONG", file: "Alpha.md" }');
    const once = reconcileRegistry(drifted, (k, s) => buildRegistryEntry(k, s, resolve));
    assert.match(once, /\{ key: "Alpha", label: "Alpha", file: "Alpha\.md", slug: "alpha" \}/);
    assert.equal(reconcileRegistry(once, (k, s) => buildRegistryEntry(k, s, resolve)), once);
  });
});

describe("reconcileRegistry (stale-key prune)", () => {
  const withStale = SOURCES_TS.replace(
    '  { key: "Alpha", label: "Alpha", file: "Alpha.md", slug: "alpha" },',
    '  { key: "Alpha", label: "Alpha", file: "Alpha.md", slug: "alpha" },\n  { key: "Ghost", label: "Ghost", file: "Ghost.md" },',
  ).replace('| "Alpha";', '| "Alpha"\n  | "Ghost";');

  it("prunes a registered key with no live file and rebuilds the union", () => {
    const text = reconcileRegistry(withStale, (k, s) => buildRegistryEntry(k, s, resolve), new Set(["Alpha"]));
    assert.doesNotMatch(text, /"Ghost"/);
    assert.match(text, /\{ key: "Alpha"/);
    assert.match(text, /\{ key: "average", label: "Average", file: "average\.md" \}/);
    assert.match(text, /export type SourceKey =\n  \| "average"\n  \| "Alpha";/);
  });

  it("does not prune when no live-stem set is supplied (failing runs)", () => {
    const text = reconcileRegistry(withStale, (k, s) => buildRegistryEntry(k, s, resolve));
    assert.match(text, /"Ghost"/);
  });

  it("keeps a key whose file is live", () => {
    const text = reconcileRegistry(withStale, (k, s) => buildRegistryEntry(k, s, resolve), new Set(["Alpha", "Ghost"]));
    assert.match(text, /\{ key: "Ghost"/);
  });
});

describe("renderScoresFile (deterministic tuple emit)", () => {
  it("sorts slugs + files, emits positional tuples in SCORE_FIELDS order", () => {
    const text = renderScoresFile({
      b: { "B.md": { tool: 1, reasoning: 2, context: 3, multimodal: 4, coding: 5, cost: 6, overall: 7 } },
      a: {
        "Z.md": { tool: 1, reasoning: 1, context: 1, multimodal: 1, coding: 1, cost: 1, overall: 1 },
        "A.md": { tool: 8, reasoning: 7, context: 6, multimodal: 5, coding: 4, cost: 3, overall: 2 },
      },
    });
    const aIdx = text.indexOf('"a": {');
    const bIdx = text.indexOf('"b": {');
    assert.ok(aIdx !== -1 && bIdx !== -1 && aIdx < bIdx);
    assert.ok(text.indexOf('"A.md"') < text.indexOf('"Z.md"'));
    assert.match(text, /"B\.md": \[1, 2, 3, 4, 5, 6, 7\],/);
    assert.match(text, /"A\.md": \[8, 7, 6, 5, 4, 3, 2\],/);
    assert.doesNotMatch(text, /tool: 1/);
    assert.match(
      text,
      /export type GeneratedScoreTuple = \[tool: number, reasoning: number, context: number, multimodal: number, coding: number, cost: number, overall: number\];/,
    );
    assert.ok(text.endsWith("};\n"));
  });
});

describe("renderRobotsTxt (absolute Sitemap URL + AI search bots)", () => {
  it("welcomes AI search indexers, allows all, points at the origin sitemap, ends with newline", () => {
    const text = renderRobotsTxt("https://example.com");
    for (const bot of ["OAI-SearchBot", "GPTBot", "PerplexityBot", "Claude-Web", "Google-Extended"]) {
      assert.ok(text.includes(`User-agent: ${bot}\nAllow: /`), `missing allow block for ${bot}`);
    }
    assert.ok(text.includes("User-agent: *\nAllow: /"));
    assert.ok(text.endsWith("Sitemap: https://example.com/sitemap.xml\n"));
  });
});

describe("harvestReferences (external URL harvester)", () => {
  it("keeps markdown + bare external URLs, drops relative/localhost/placeholders", () => {
    const md = [
      "- Card: [Official specs](https://platform.claude.com/docs/opus-5)",
      "- Methodology: [link](../../model-comparison.md)",
      "- Bare: https://artificialanalysis.ai/models/x, and more.",
      "- Placeholder: <https://...> and https://<host>/v1",
      "- Local: http://localhost:4173/foo",
      "- Ref again: [Official specs](https://platform.claude.com/docs/opus-5)",
    ].join("\n");
    const refs = harvestReferences(md);
    const urls = refs.map((r) => r.url);
    assert.ok(urls.includes("https://platform.claude.com/docs/opus-5"));
    assert.ok(urls.includes("https://artificialanalysis.ai/models/x"), "trailing punctuation should be trimmed");
    assert.ok(!urls.some((u) => u.includes("model-comparison")), "relative link must be dropped");
    assert.ok(!urls.some((u) => u.includes("localhost")), "localhost must be dropped");
    assert.ok(!urls.some((u) => u.includes("<")), "placeholder must be dropped");
    assert.equal(urls.filter((u) => u === "https://platform.claude.com/docs/opus-5").length, 1, "dedup by url");
    const card = refs.find((r) => r.url === "https://platform.claude.com/docs/opus-5");
    assert.equal(card.title, "Official specs");
    assert.equal(card.domain, "platform.claude.com");
  });
});

describe("renderReferencesFile + buildBenchmarksData + renderBenchmarksFile", () => {
  it("emits deterministic references with the ReferenceItem shape", () => {
    const text = renderReferencesFile({
      "b-model": [{ url: "https://x.com/a", title: "A", domain: "x.com", sourceStem: "Rater" }],
      "a-model": [],
    });
    assert.ok(text.includes("export const REFERENCES: Record<string, ReferenceItem[]>"));
    assert.ok(text.indexOf('"b-model"') > text.indexOf("ReferenceItem {"));
    assert.ok(!text.includes('"a-model"'), "empty slug arrays are skipped");
    assert.ok(text.endsWith("};\n"));
  });
  it("groups agreed evidence into numeric-sorted benchmark leaderboards", () => {
    const data = buildBenchmarksData(
      {
        "m-low": [{ benchmark: "SWE-bench Verified", value: "50%", raters: ["A", "B"] }],
        "m-high": [{ benchmark: "SWE-bench Verified", value: "88.5%", raters: ["A", "B", "C"] }],
      },
      (slug) => slug.toUpperCase(),
    );
    const group = data["SWE-bench Verified"];
    assert.equal(group[0].modelSlug, "m-high");
    assert.equal(group[0].numericValue, 88.5);
    assert.equal(group[0].modelName, "M-HIGH");
    assert.equal(group[0].ratersCount, 3);
    const text = renderBenchmarksFile(data);
    assert.ok(text.includes("export const BENCHMARKS_DATA: Record<string, BenchmarkEntry[]>"));
    assert.ok(text.includes('numericValue: 88.5'));
    assert.ok(text.endsWith("};\n"));
  });
});

describe("renderVerifiedFile (deterministic date emit)", () => {
  it("sorts slugs, emits quoted ISO dates, ends with newline", () => {
    const text = renderVerifiedFile({ "b-model": "2026-09-23", "a-model": "2026-10-11" });
    const aIdx = text.indexOf('"a-model"');
    const bIdx = text.indexOf('"b-model"');
    assert.ok(aIdx !== -1 && bIdx !== -1 && aIdx < bIdx);
    assert.match(text, /"a-model": "2026-10-11",/);
    assert.match(text, /"b-model": "2026-09-23",/);
    assert.match(text, /export const VERIFIED: Record<string, string>/);
    assert.ok(text.endsWith("};\n"));
  });
});

describe("renderEvidenceFile (agreed figures emit)", () => {
  it("skips empty models, emits items with rater stems, ends with newline", () => {
    const text = renderEvidenceFile({
      "b-model": [],
      "a-model": [{ benchmark: "GPQA Diamond", value: "93.6%", raters: ["Big_Pickle", "Claude_Opus_5"] }],
    });
    assert.ok(!text.includes('"b-model"'));
    assert.match(text, /"a-model": \[/);
    assert.match(text, /\{ benchmark: "GPQA Diamond", value: "93\.6%", raters: \["Big_Pickle", "Claude_Opus_5"\] \},/);
    assert.match(text, /export const EVIDENCE: Record<string, EvidenceItem\[\]>/);
    assert.ok(text.endsWith("};\n"));
  });
});

describe("ensureRaterGateLine (managed RATER_GATE)", () => {
  const base = "// head\nexport type SourceKey =\n  | \"average\"\n;";
  it("inserts before the union when missing", () => {
    const { changed, text } = ensureRaterGateLine(base, 84.9);
    assert.equal(changed, true);
    assert.match(text, /export const RATER_GATE = 84\.9;/);
    assert.ok(text.indexOf("RATER_GATE") < text.indexOf("export type SourceKey"));
  });
  it("corrects drift, no-ops when current", () => {
    const drifted = ensureRaterGateLine(base, 80).text;
    const fixed = ensureRaterGateLine(drifted, 84.9);
    assert.equal(fixed.changed, true);
    assert.match(fixed.text, /export const RATER_GATE = 84\.9;/);
    assert.equal(ensureRaterGateLine(fixed.text, 84.9).changed, false);
  });
  it("leaves text without a union anchor untouched", () => {
    assert.deepEqual(ensureRaterGateLine("// nothing here\n", 84.9), { changed: false, text: "// nothing here\n" });
  });
});
