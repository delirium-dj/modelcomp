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
  renderRobotsTxt,
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

describe("renderScoresFile (deterministic emit)", () => {
  it("sorts slugs + files, keeps numbers verbatim", () => {
    const text = renderScoresFile({
      b: { "B.md": { tool: 1, reasoning: 2, context: 3, multimodal: 4, coding: 5, cost: 6, overall: 7 } },
      a: {
        "Z.md": { tool: 1, reasoning: 1, context: 1, multimodal: 1, coding: 1, cost: 1, overall: 1 },
        "A.md": { tool: 2, reasoning: 2, context: 2, multimodal: 2, coding: 2, cost: 2, overall: 2 },
      },
    });
    const aIdx = text.indexOf('"a": {');
    const bIdx = text.indexOf('"b": {');
    assert.ok(aIdx !== -1 && bIdx !== -1 && aIdx < bIdx);
    assert.ok(text.indexOf('"A.md"') < text.indexOf('"Z.md"'));
    assert.match(text, /"B\.md": \{ tool: 1, reasoning: 2, context: 3, multimodal: 4, coding: 5, cost: 6, overall: 7 \},/);
    assert.ok(text.endsWith("};\n"));
  });
});

describe("renderRobotsTxt (absolute Sitemap URL)", () => {
  it("allows all, points at the origin sitemap, ends with newline", () => {
    const text = renderRobotsTxt("https://example.com");
    assert.equal(text, "User-agent: *\nAllow: /\n\nSitemap: https://example.com/sitemap.xml\n");
  });
});
