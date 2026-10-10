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
 * after the first SIMPLIFY backfill) and prune grandfathered virtual-view
 * entries (file average.md, key != average) plus their union lines. Virtual
 * views live in models.ts, never in the registry.
 */
export function reconcileRegistry(sourcesTs, buildEntry) {
  let text = sourcesTs;
  text = text.replace(
    /\n  \{ key: "(?:tool|reason|context|cost|code|multi)", label: "[^"]+", file: "average\.md"(?:, slug: "[^"]+")? \},/g,
    "",
  );
  text = text.replace(/\n  \| "(?:tool|reason|context|cost|code|multi)"/g, "");
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
 */
export function renderRobotsTxt(origin) {
  return ["User-agent: *", "Allow: /", "", `Sitemap: ${origin}/sitemap.xml`, ""].join("\n");
}
