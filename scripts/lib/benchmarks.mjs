// Benchmark-evidence extraction for modelcomp sync (scripts/sync-data.mjs).
// Zero dependencies. Covered by benchmarks.test.mjs.
//
// A model page may only cite a benchmark figure as *verified* when two or
// more INDEPENDENT reporting-agent files cite the SAME figure for the SAME
// benchmark. These pure functions implement that conservatively: a curated
// benchmark vocabulary (misses simply never surface — no false positives),
// strict row shapes (`- <Benchmark>: **82.6%**`, the house format from
// model-report-TEMPLATE.md), values in % or Elo only (ranks, counts, prices
// and harness prose never parse), and agreement on exact normalized figures
// across distinct file stems.

/**
 * Curated benchmark vocabulary: key -> display name + accepted spellings.
 * AA-prefixed trackers stay SEPARATE keys (different harness/scale than the
 * vendor figure — e.g. AA-GPQA 72.7% vs official GPQA 93.6% must never meet).
 * Matching is anchored at the row-segment start, longest alias first.
 */
export const BENCHMARKS = [
  { key: "swe-verified", display: "SWE-bench Verified", aliases: ["swe-bench verified", "swe verified", "swe-bench-verified"] },
  { key: "swe-pro", display: "SWE-bench Pro", aliases: ["swe-bench pro", "swe-bench-pro", "swe pro"] },
  { key: "livecodebench", display: "LiveCodeBench", aliases: ["livecodebench", "live-code-bench", "lcb"] },
  { key: "livebench", display: "LiveBench", aliases: ["livebench", "live-bench"] },
  { key: "gpqa", display: "GPQA Diamond", aliases: ["gpqa diamond", "gpqa-diamond", "gpqa"] },
  { key: "hle", display: "HLE", aliases: ["humanity's last exam", "hle"] },
  { key: "terminalbench", display: "Terminal-Bench", aliases: ["terminal-bench", "terminal bench"] },
  { key: "aime", display: "AIME", aliases: ["aime"] },
  { key: "mmmu-pro", display: "MMMU-Pro", aliases: ["mmmu-pro", "mmmu pro"] },
  { key: "mmmu", display: "MMMU", aliases: ["mmmu"] },
  { key: "scicode", display: "SciCode", aliases: ["scicode", "sci-code"] },
  { key: "tau2", display: "Tau2-bench", aliases: ["tau2-bench", "tau2 bench", "τ²-bench", "τ² bench", "tau2", "τ²"] },
  { key: "tau3", display: "Tau3-bench", aliases: ["tau3-banking", "tau3-bench", "tau3 bench", "τ³", "tau3"] },
  { key: "gdpval", display: "GDPval", aliases: ["gdpval-aa", "gdpval"] },
  { key: "osworld", display: "OSWorld", aliases: ["osworld-verified", "osworld verified", "osworld"] },
  { key: "browsecomp", display: "BrowseComp", aliases: ["browsecomp", "browse-comp"] },
  { key: "mmlu-pro", display: "MMLU-Pro", aliases: ["mmlu-pro", "mmlu pro"] },
  { key: "mmlu", display: "MMLU", aliases: ["mmlu"] },
  { key: "arc-agi", display: "ARC-AGI", aliases: ["arc-agi-2", "arc-agi 2", "arc-agi"] },
  { key: "frontiermath", display: "FrontierMath", aliases: ["frontiermath", "frontier-math", "frontier math"] },
  { key: "aider", display: "Aider Polyglot", aliases: ["aider polyglot", "aider"] },
  { key: "deepswe", display: "DeepSWE", aliases: ["deepswe", "deep-swe"] },
  { key: "lmarena", display: "LMArena", aliases: ["lmarena", "lm-arena"] },
  { key: "vibe-code", display: "Vibe Code Bench", aliases: ["vibe code bench", "vibe-code", "vibe code"] },
  { key: "critpt", display: "CritPt", aliases: ["critpt", "crit-point"] },
  { key: "humaneval", display: "HumanEval", aliases: ["humaneval", "human-eval"] },
  { key: "aa-gpqa", display: "AA-GPQA", aliases: ["aa-gpqa diamond", "aa-gpqa"] },
  { key: "aa-hle", display: "AA-HLE", aliases: ["aa-hle", "aa hle"] },
  { key: "aa-lcr", display: "AA-LCR", aliases: ["aa-lcr", "aa lcr"] },
  { key: "aa-coding-index", display: "AA Coding Index", aliases: ["aa coding index", "coding index"] },
  { key: "aa-intelligence-index", display: "AA Intelligence Index", aliases: ["artificial analysis intelligence index", "aa intelligence index", "intelligence index"] },
];

/**
 * Display priority: the five most-cited benchmarks dataset-wide (measured
 * 2026-10-13: Terminal-Bench 359, HLE 304, GPQA Diamond 277, GDPval 191,
 * SWE-bench Verified 178 model-level agreements — also the industry-standard
 * agentic-coding/reasoning set). Model pages show these first; everything
 * else folds under the expander.
 */
export const PRIORITY_BENCHMARKS = ["terminalbench", "hle", "gpqa", "gdpval", "swe-verified"];

/** Flattened alias -> entry, longest alias first (mmmu-pro beats mmmu). */
const ALIAS_INDEX = BENCHMARKS.flatMap((b) => b.aliases.map((a) => [a, b]))
  .sort((x, y) => y[0].length - x[0].length);

/** Match a vocabulary entry anchored at a row-segment start. */
export function matchBenchmark(segment) {
  const clean = segment
    .replace(/^[\s\-–>*>]+/, "")
    .replace(/^\*\*/, "")
    .toLowerCase();
  for (const [alias, entry] of ALIAS_INDEX) {
    if (clean === alias || clean.startsWith(alias)) {
      const rest = clean.slice(alias.length);
      if (rest === "" || /[^a-z0-9]/.test(rest[0])) return { entry, rest: segment.slice(segment.toLowerCase().indexOf(alias) + alias.length) };
    }
  }
  return null;
}

/** First bold figure after the benchmark mention: % or Elo only. */
const FIGURE_RE = /(?:\*\*)?\s*(-?[\d.,]+)\s*(%|Elo)?\s*\*\*/;

/** Normalize one figure to display form, or null when not a clean %/Elo figure. */
export function normalizeFigure(num, unit) {
  if (num.startsWith("-")) return null;
  const n = Number(num.replace(/,/g, ""));
  if (!Number.isFinite(n)) return null;
  if (unit === "%") return `${String(n)}%`;
  if (unit === "Elo") return `${Math.round(n)} Elo`;
  return null;
}

/**
 * Extract (benchmark, figure) rows from one findings file. Multi-benchmark
 * lines (`AA-LCR: **53%**; AA-HLE: **8%**`) split on `;`. Only the FIRST
 * bold figure per segment counts (conditional splits like `41.4%` no-tools /
 * `52.2%` with-tools attribute the leading figure). Prose-heavy rows without
 * a clean figure never parse.
 */
export function parseBenchmarkRows(md) {
  const rows = [];
  for (const line of md.split("\n")) {
    for (const segment of line.split(";")) {
      const hit = matchBenchmark(segment);
      if (!hit) continue;
      const m = hit.rest.match(FIGURE_RE);
      if (!m) continue;
      const value = normalizeFigure(m[1], m[2]);
      if (value === null) continue;
      rows.push({ key: hit.entry.key, benchmark: hit.entry.display, value });
    }
  }
  return rows;
}

/**
 * Agreement: same (benchmark, figure) cited by 2+ DISTINCT file stems.
 * Returns [{ benchmark, value, raters: [stem, ...] }], priority benchmarks
 * first (PRIORITY_BENCHMARKS order), then most-cited first (ties A-Z on
 * benchmark). One row per benchmark: versions and conditions fragment the
 * vote (Terminal-Bench 2.0 vs 2.1, HLE with vs without tools), so only the
 * most-cited figure surfaces — multiple same-name rows read as
 * contradictory. Single-rater figures never surface.
 */
export function agreeEvidence(perFileRows) {
  const groups = new Map();
  for (const { stem, rows } of perFileRows) {
    const seen = new Set();
    for (const r of rows) {
      const k = `${r.key}	${r.value}`;
      if (seen.has(k)) continue; // one vote per file per figure
      seen.add(k);
      let g = groups.get(k);
      if (!g) {
        g = { key: r.key, benchmark: r.benchmark, value: r.value, raters: new Set() };
        groups.set(k, g);
      }
      g.raters.add(stem);
    }
  }
  const prio = new Map(PRIORITY_BENCHMARKS.map((k, i) => [k, i]));
  const prioOf = (key) => (prio.has(key) ? prio.get(key) : Infinity);
  const seenKeys = new Set();
  return [...groups.values()]
    .filter((g) => g.raters.size >= 2)
    .sort(
      (a, b) =>
        prioOf(a.key) - prioOf(b.key) ||
        b.raters.size - a.raters.size ||
        (a.benchmark < b.benchmark ? -1 : 1),
    )
    .filter((g) => {
      if (seenKeys.has(g.key)) return false; // collapsed: most-cited figure already kept
      seenKeys.add(g.key);
      return true;
    })
    .map((g) => ({ benchmark: g.benchmark, value: g.value, raters: [...g.raters].sort() }));
}
