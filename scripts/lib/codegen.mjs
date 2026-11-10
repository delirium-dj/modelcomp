// Pure registry + codegen builders for modelcomp sync.
// Zero dependencies. Covered by codegen.test.mjs.
//
// Two outputs: SOURCE_DEFS registry text surgery in sources.generated.ts
// (append missing keys, reconcile labels/slugs, prune virtual views) and the
// numbers-only scores.generated.ts serializer. Sync does the fs writes and
// logging; these functions lock the *text* so the emit is deterministic.

/** Fresh registry-entry regex per call (module-level /g regexes are stateful). */
function entryRegex() {
  return /\{\s*key:\s*"([^"]+)",\s*label:\s*"[^"]+",\s*file:\s*"([^"]+)"(?:,\s*slug:\s*"[^"]+")?\s*\}/g;
}

/** All SOURCE_DEFS entries as { full, key, file } (in file order). */
export function parseRegistryEntries(text) {
  return [...text.matchAll(entryRegex())].map((m) => ({ full: m[0], key: m[1], file: m[2] }));
}

/** SourceKey union members as a Set (in file order). */
export function parseUnionMembers(text) {
  const body = (text.match(/export type SourceKey =([\s\S]*?);/) || ["", ""])[1];
  return new Set([...body.matchAll(/"([^"]+)"/g)].map((m) => m[1]));
}

/**
 * Build one SOURCE_DEFS entry line. Keeps the exact on-disk stem (dots and
 * legacy casing round-trip, never re-derived from the key). `resolve` maps a
 * key to { label, slug } (sync passes its catalog-backed resolver).
 */
export function buildRegistryEntry(key, stem, resolve) {
  const { label, slug } = resolve(key);
  return slug === undefined
    ? `{ key: "${key}", label: "${label}", file: "${stem}.md" }`
    : `{ key: "${key}", label: "${label}", file: "${stem}.md", slug: "${slug}" }`;
}

/**
 * Compute the pending (re)registrations for on-disk stems missing from the
 * registry. Returns { pending, collisions }: a stem whose key is already
 * registered under another filename is a genuine collision for a human
 * (sync FAILs it). inUnion covers repair of a partial earlier run that added
 * the union line but not the SOURCE_DEFS entry.
 */
export function computePending(missingStems, sourcesTs, keyOf) {
  const inSources = (key) => sourcesTs.includes(`key: "${key}"`);
  const unionMembers = parseUnionMembers(sourcesTs);
  const pending = [];
  const collisions = [];
  for (const stem of missingStems) {
    const key = keyOf(stem);
    if (inSources(key)) {
      collisions.push({ stem, key });
      continue;
    }
    pending.push({ key, stem, needUnion: !unionMembers.has(key) });
  }
  return { pending, collisions };
}

/** Exact FAIL text for a key collision (locked: it routes to a human). */
export function collisionFailMessage(stem, key) {
  return `stem ${stem}.md maps to label "${key}" which is already registered for another file`;
}

/**
 * Splice pending entries into the registry text (union lines + SOURCE_DEFS
 * array). Returns { ok, text }; ok:false when the anchors are unlocatable
 * (sync FAILs "register manually"). New sources append last; dropdown order
 * is derived at build time, so registry position is irrelevant to the UI.
 */
export function appendPendingSources(sourcesTs, pending, buildEntry) {
  const unionRe = /(export type SourceKey =[\s\S]*?);/;
  const arrRe = /(export const SOURCE_DEFS:[^[]*\[[\s\S]*?)\n\];/;
  const um = sourcesTs.match(unionRe);
  const am = sourcesTs.match(arrRe);
  if (!um || !am) return { ok: false, text: sourcesTs };
  let text = sourcesTs;
  const needUnion = pending.filter((p) => p.needUnion);
  if (needUnion.length > 0) {
    text = text.replace(unionRe, `${um[1]}${needUnion.map((p) => `\n  | "${p.key}"`).join("")};`);
  }
  text = text.replace(arrRe, `${am[1]}${pending.map((p) => `\n  ${buildEntry(p.key, p.stem)},`).join("")}\n];`);
  return { ok: true, text };
}

/**
 * Reconcile labels + inline slugs for every registered entry (idempotent
 * after the first SIMPLIFY backfill) and prune:
 *   1. grandfathered virtual-view entries (file average.md, key != average)
 *      plus their union lines — virtual views live in models.ts;
 *   2. stale keys — registered entries with no live findings file anywhere.
 * `liveStems` is the set of on-disk findings-file stems (without `.md`) the
 * caller found. Pass it ONLY on a zero-failure run (a failing run must not
 * cement registry changes); `undefined` disables stale-key pruning and leaves
 * the union untouched. The `average` entry (file average.md) is always kept.
 * A pruned key re-registers automatically if its file returns.
 */
export function reconcileRegistry(sourcesTs, buildEntry, liveStems) {
  let text = sourcesTs;
  text = text.replace(
    /\n  \{ key: "(?:tool|reason|context|cost|code|multi)", label: "[^"]+", file: "average\.md"(?:, slug: "[^"]+")? \},/g,
    "",
  );
  text = text.replace(/\n  \| "(?:tool|reason|context|cost|code|multi)"/g, "");
  if (liveStems) {
    const kept = [];
    let pruned = false;
    for (const e of parseRegistryEntries(text)) {
      if (e.file === "average.md" || liveStems.has(e.file.replace(/\.md$/, ""))) {
        kept.push(e);
      } else {
        // Drop the whole line (entry + trailing comma) so pruning never leaves
        // a dangling comma that would parse as an `undefined` array element.
        const nl = String.fromCharCode(10);
        text = text.split(nl).filter((line) => !line.includes(e.full)).join(nl);
        pruned = true;
      }
    }
    if (pruned) {
      const unionRe = /export type SourceKey =[\s\S]*?;/;
      const union = `export type SourceKey =${kept
        .map((e) => `\n  | ${JSON.stringify(e.key)}`)
        .join("")};`;
      text = text.replace(unionRe, union);
    }
  }
  for (const { full, key, file } of parseRegistryEntries(text)) {
    if (file === "average.md") continue;
    const expected = buildEntry(key, file.replace(/\.md$/, ""));
    if (full !== expected) text = text.replace(full, expected);
  }
  return text;
}

/**
 * Positional wire order of each score tuple. Must match SCORE_ORDER in
 * src/data/models.ts and SHORT in parse.mjs — keys are omitted from the
 * emit to keep the client chunk small (wire format documented in
 * .agents/rules.md § Website data flow). Drift here silently mislabels
 * every score on the site, so the exact tuple string is locked by
 * codegen.test.mjs. Never reorder.
 */
const SCORE_FIELDS = ["tool", "reasoning", "context", "multimodal", "coding", "cost", "overall"];

/**
 * Render the full scores.generated.ts text (deterministic: sorted slugs and
 * files). scoreIndex: slug -> file -> short-keyed scores. Scores emit as
 * positional tuples [tool, reasoning, context, multimodal, coding, cost,
 * overall] — never objects — so the repeated key names (previously ~60% of
 * the emit) don't bloat the client chunk past Vite's 500 kB warning limit.
 */
export function renderScoresFile(scoreIndex) {
  const out = [
    "// AUTO-GENERATED by `pnpm sync` (scripts/sync-data.mjs). Do not hand-edit.",
    "// Compact per-source scores (numbers only) as positional tuples:",
    "// [tool, reasoning, context, multimodal, coding, cost, overall].",
    "// Order is SCORE_FIELDS in scripts/lib/codegen.mjs — do not reorder.",
    "export type GeneratedScoreTuple = [tool: number, reasoning: number, context: number, multimodal: number, coding: number, cost: number, overall: number];",
    "export const GENERATED_SCORES: Record<string, Record<string, GeneratedScoreTuple>> = {",
  ];
  for (const slug of Object.keys(scoreIndex).sort()) {
    out.push(`  "${slug}": {`);
    for (const file of Object.keys(scoreIndex[slug]).sort()) {
      const s = scoreIndex[slug][file];
      out.push(`    "${file}": [${SCORE_FIELDS.map((k) => s[k]).join(", ")}],`);
    }
    out.push("  },");
  }
  out.push("};", "");
  return out.join("\n");
}

/**
 * Render src/data/verified.generated.ts (deterministic: sorted slugs).
 * verifiedIndex: slug -> newest live findings-file date (`YYYY-MM-DD`,
 * from extractReportDate in scripts/lib/parse.mjs). The site's
 * Last-verified display (ModelCards, per-model pages) reads this file —
 * never the markdown — so report prose stays out of the client bundle.
 */
export function renderVerifiedFile(verifiedIndex) {
  const out = [
    "// AUTO-GENERATED by `pnpm sync` (scripts/sync-data.mjs). Do not hand-edit.",
    "// Newest live findings-file date per model (`YYYY-MM-DD`).",
    "export const VERIFIED: Record<string, string> = {",
  ];
  for (const slug of Object.keys(verifiedIndex).sort()) {
    out.push(`  "${slug}": "${verifiedIndex[slug]}",`);
  }
  out.push("};", "");
  return out.join("\n");
}

/**
 * Render src/data/evidence.generated.ts (deterministic: sorted slugs;
 * rows pre-sorted most-cited first by agreeEvidence in
 * scripts/lib/benchmarks.mjs). Only figures cited by 2+ independent
 * reporting-agent files surface — single-rater figures never do. Raters
 * are filename stems; the UI resolves display labels via SOURCES.
 */
export function renderEvidenceFile(evidenceIndex) {
  const out = [
    "// AUTO-GENERATED by `pnpm sync` (scripts/sync-data.mjs). Do not hand-edit.",
    "// Benchmark figures cited by 2+ independent reporting-agent files, per model.",
    "export interface EvidenceItem { benchmark: string; value: string; raters: string[]; }",
    "export const EVIDENCE: Record<string, EvidenceItem[]> = {",
  ];
  for (const slug of Object.keys(evidenceIndex).sort()) {
    const items = evidenceIndex[slug];
    if (items.length === 0) continue;
    out.push(`  "${slug}": [`);
    for (const it of items) {
      out.push(
        `    { benchmark: ${JSON.stringify(it.benchmark)}, value: ${JSON.stringify(it.value)}, raters: [${it.raters.map((r) => JSON.stringify(r)).join(", ")}] },`,
      );
    }
    out.push("  ],");
  }
  out.push("};", "");
  return out.join("\n");
}

/**
 * Maintain the managed RATER_GATE line in sources.generated.ts. Single
 * source is RATER_GATE in scripts/lib/parse.mjs; the UI imports the value
 * from the registry file, so the caption can never drift from the gate.
 * Inserts before the SourceKey union when missing, corrects drift otherwise.
 * Returns { changed, text }.
 */
export function ensureRaterGateLine(sourcesTs, value) {
  const wanted = `export const RATER_GATE = ${value};`;
  const re = /export const RATER_GATE = [0-9.]+;/;
  if (re.test(sourcesTs)) {
    const text = sourcesTs.replace(re, wanted);
    return { changed: text !== sourcesTs, text };
  }
  const anchor = "export type SourceKey =";
  if (!sourcesTs.includes(anchor)) return { changed: false, text: sourcesTs };
  const block =
    `/** Rater gate: only reports by models with own Overall above this count ` +
    `(managed by \`pnpm sync\` from scripts/lib/parse.mjs — do not hand-edit). */\n${wanted}\n\n`;
  return { changed: true, text: sourcesTs.replace(anchor, block + anchor) };
}

/**
 * Render public/robots.txt. The Sitemap URL must be absolute (crawlers), and
 * the origin is only known at sync/build time — so it rides the same
 * SITE_ORIGIN knob as the static-adapter canonical URLs (see README, B2),
 * defaulting to the local preview origin.
 *
 * AI search indexers get an explicit `Allow: /` welcome block before the
 * catch-all rule: SearchGPT (OAI-SearchBot / GPTBot), Perplexity, Claude-Web
 * and Google-Extended check robots.txt before citing a page, so an explicit
 * allow raises the odds our comparison pages surface in AI answers.
 */
const AI_SEARCH_BOTS = [
  "OAI-SearchBot",
  "GPTBot",
  "PerplexityBot",
  "Claude-Web",
  "Google-Extended",
];

export function renderRobotsTxt(origin) {
  const lines = [];
  for (const bot of AI_SEARCH_BOTS) {
    lines.push(`User-agent: ${bot}`, "Allow: /", "");
  }
  lines.push("User-agent: *", "Allow: /", "", `Sitemap: ${origin}/sitemap.xml`, "");
  return lines.join("\n");
}

/**
 * Harvest external reference URLs from one findings-file body.
 *
 * Scans Markdown links `[text](url)` and bare `https://…` URLs, then filters
 * out anything that is not a citable external source: relative/internal links
 * (`../../model-comparison.md`, `/…`), localhost addresses, and template
 * placeholder domains (`<https://…>`, `https://<host>/v1`, `…/example.com`,
 * literal `...`). Returns `{ url, title, domain }` records — `title` is the
 * Markdown link text when present (unless it is itself a placeholder), else
 * the last clean path segment, else the domain. Deduplication across a
 * model's files happens in the caller (sync) keyed on the normalized URL.
 */
const PLACEHOLDER_HOST_RE = /(^|\.)(example\.(com|org|net)|test\.com|your-domain\.com|localhost)$/i;

/** True when a raw URL is a template placeholder / non-citable artifact. */
function isPlaceholderUrl(raw) {
  if (/[<>]/.test(raw)) return true; // <https://…>, https://<host>/v1
  if (raw.includes("...") || raw.includes("…")) return true;
  if (/^(mailto:|tel:|data:|javascript:)/i.test(raw)) return true;
  return false;
}

/** Strip trailing prose punctuation from a bare URL. */
function trimUrl(raw) {
  return raw.replace(/[)\]}>.,;:!?'"]+$/, "");
}

/** Lowercased hostname minus a leading `www.`, or null for a non-absolute URL. */
function domainOf(url) {
  const m = url.match(/^https?:\/\/([^/?#]+)/i);
  if (!m) return null;
  const host = m[1].replace(/:\d+$/, "").toLowerCase();
  return host.startsWith("www.") ? host.slice(4) : host;
}

export function harvestReferences(content) {
  const out = [];
  const seen = new Set();
  const push = (rawUrl, rawTitle) => {
    const url = trimUrl((rawUrl ?? "").trim());
    if (!/^https?:\/\//i.test(url)) return; // absolute external only (drops relative)
    if (isPlaceholderUrl(url)) return;
    const domain = domainOf(url);
    if (domain === null) return;
    if (/^(localhost|127\.|0\.0\.0\.0|\[?::1\]?)$/.test(domain) || domain.startsWith("127.")) return;
    if (PLACEHOLDER_HOST_RE.test(domain)) return;
    if (seen.has(url)) return;
    seen.add(url);
    let title = (rawTitle ?? "").trim();
    if (title === "" || isPlaceholderUrl(title) || title.startsWith("<")) {
      const seg = url.replace(/^https?:\/\//i, "").split(/[/?#]/).filter(Boolean).pop();
      title = seg && !seg.includes("...") ? seg : domain;
    }
    out.push({ url, title, domain });
  };
  // Markdown links first so their text wins as the title over the bare-URL pass.
  for (const m of content.matchAll(/\[([^\]]*)\]\(([^)\s]+)\)/g)) push(m[2], m[1]);
  // Bare URLs (not already inside a Markdown `](…)` — dedup handles overlap).
  for (const m of content.matchAll(/(?<!["'(])https?:\/\/[^\s)\]<>]+/g)) push(m[0]);
  return out;
}

/**
 * Render src/data/references.generated.ts (deterministic: sorted slugs, then
 * insertion order of harvested URLs). referencesIndex: slug -> ReferenceItem[].
 * Profile pages read this for the Evidence & Research Citations drawer.
 */
export function renderReferencesFile(referencesIndex) {
  const out = [
    "// AUTO-GENERATED by `pnpm sync` (scripts/sync-data.mjs). Do not hand-edit.",
    "// External reference URLs harvested from model/<slug>/*.md findings files.",
    "export interface ReferenceItem {",
    "  url: string;",
    "  title: string;",
    "  domain: string;",
    "  sourceStem: string;",
    "}",
    "export const REFERENCES: Record<string, ReferenceItem[]> = {",
  ];
  for (const slug of Object.keys(referencesIndex).sort()) {
    const items = referencesIndex[slug];
    if (items.length === 0) continue;
    out.push(`  "${slug}": [`);
    for (const it of items) {
      out.push(
        `    { url: ${JSON.stringify(it.url)}, title: ${JSON.stringify(it.title)}, domain: ${JSON.stringify(it.domain)}, sourceStem: ${JSON.stringify(it.sourceStem)} },`,
      );
    }
    out.push("  ],");
  }
  out.push("};", "");
  return out.join("\n");
}

/** Leading numeric value of a benchmark figure (`87.2%`→87.2, `1238 Elo`→1238). */
function numericFigure(value) {
  const m = String(value).match(/-?[\d.,]+/);
  if (m === null) return 0;
  const n = Number(m[0].replace(/,/g, ""));
  return Number.isFinite(n) ? n : 0;
}

/**
 * Group the agreed-evidence index (slug -> [{benchmark, value, raters}]) into
 * per-benchmark leaderboards for src/data/benchmarks.generated.ts. Each entry
 * carries the model slug, display name (from `nameOf`), the raw figure string,
 * its numeric value and the number of raters agreeing on it. Groups are sorted
 * numeric-value descending (ties A-Z on slug); keys are emitted sorted so the
 * file stays deterministic. `nameOf(slug)` resolves the model display name.
 */
export function buildBenchmarksData(evidenceIndex, nameOf) {
  const groups = new Map(); // benchmark name -> entries[]
  for (const slug of Object.keys(evidenceIndex).sort()) {
    for (const item of evidenceIndex[slug]) {
      if (!groups.has(item.benchmark)) groups.set(item.benchmark, []);
      groups.get(item.benchmark).push({
        name: item.benchmark,
        modelSlug: slug,
        modelName: nameOf(slug) ?? slug,
        value: item.value,
        numericValue: numericFigure(item.value),
        ratersCount: item.raters.length,
      });
    }
  }
  const data = {};
  for (const [name, entries] of [...groups.entries()].sort((a, b) => (a[0] < b[0] ? -1 : 1))) {
    data[name] = entries.sort(
      (a, b) => b.numericValue - a.numericValue || (a.modelSlug < b.modelSlug ? -1 : 1),
    );
  }
  return data;
}

/**
 * Render src/data/benchmarks.generated.ts (deterministic: sorted benchmark
 * keys). benchmarksData: benchmark name -> BenchmarkEntry[] (see
 * buildBenchmarksData). Consumed by the /benchmarks/ authority hub.
 */
export function renderBenchmarksFile(benchmarksData) {
  const out = [
    "// AUTO-GENERATED by `pnpm sync` (scripts/sync-data.mjs). Do not hand-edit.",
    "// Per-benchmark leaderboards from agreed evidence (2+ independent raters).",
    "export interface BenchmarkEntry {",
    "  name: string;",
    "  modelSlug: string;",
    "  modelName: string;",
    "  value: string;",
    "  numericValue: number;",
    "  ratersCount: number;",
    "}",
    "export const BENCHMARKS_DATA: Record<string, BenchmarkEntry[]> = {",
  ];
  for (const name of Object.keys(benchmarksData).sort()) {
    const entries = benchmarksData[name];
    if (entries.length === 0) continue;
    out.push(`  ${JSON.stringify(name)}: [`);
    for (const e of entries) {
      out.push(
        `    { name: ${JSON.stringify(e.name)}, modelSlug: ${JSON.stringify(e.modelSlug)}, modelName: ${JSON.stringify(e.modelName)}, value: ${JSON.stringify(e.value)}, numericValue: ${e.numericValue}, ratersCount: ${e.ratersCount} },`,
      );
    }
    out.push("  ],");
  }
  out.push("};", "");
  return out.join("\n");
}
