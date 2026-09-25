// Deterministic data sync for modelcomp. Run: pnpm sync
//
// What it does (see tasks/sync-data.md for the human workflow around it):
//   1. Scans every model/<slug>/ folder for findings files (*.md, excluding
//      average.md and README.md; any filename containing ".excluded" is a
//      self-excluded no-data report — skipped loudly, never counted).
//      Unknown/hygiene-violating filenames fail loudly.
//   2. Parses the seven normalized 1-100 scores from each findings file, and
//      validates each file's Overall equals the half-up mean of its five
//      non-cost dims (Cost excluded from Overall since v4; drift fails loudly
//      and blocks that folder's average rewrite).
//   3. Recomputes every model/<slug>/average.md as arithmetic means (standard
//      half-up rounding to 1 decimal) over the TOP-10 cohort: the ten source
//      files with the highest Overall Score in that folder (or all sources
//      when the folder holds <= 10). All seven numbers come from that same
//      cohort; Overall = mean of the cohort's Overall scores, NOT re-derived
//      from averaged dimensions) and rewrites files that drift.
//   4. Registers any new reporting-agent filename in src/data/models.ts
//      (SourceKey union + SOURCE_DEFS entry; dropdown order is derived at build
//      time, so registry position does not matter for the UI)
//      stable). Per-model wiring needs NO edits: scores are pre-parsed into
//      src/data/scores.generated.ts (numbers only) at sync time, which
//      src/data/models.ts imports instead of the raw markdown (keeps ~1.7 MB
//      of report prose out of the client bundle).
//   5. Validates every model/<slug>/meta.json exists, parses, and has all
//      required fields (a new model folder without meta.json fails loudly).
//
// Exit code: 0 = in sync (averages rewritten as needed, reported below).
// Non-zero = human action required (see error lines).
import { readFileSync, writeFileSync, readdirSync, renameSync, statSync, existsSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const modelDir = join(root, "model");
const modelsTsPath = join(root, "src", "data", "models.ts");

const LABELS = [
  "Tool use",
  "Reasoning",
  "Context window",
  "Multimodal",
  "Coding",
  "Cost efficiency",
  "Overall Score",
];
const META_REQUIRED = ["id", "name", "short", "contextWindow", "modalities", "pricingNote"];
// Dots are allowed: version numbers live in findings filenames (DeepSeek_4.1_Flash.md).
const FILENAME_RE = /^[A-Za-z0-9_.]+\.md$/;

/** Standard half-up rounding to 1 decimal (72.25 -> 72.3). */
const halfUp1 = (x) => Math.round(x * 10) / 10;

// `--quiet` / `-q` (aka `pnpm sync:quiet`): print only FAIL lines plus the
// final summary. Same checks, same file writes, same exit code — minus the
// per-folder SKIP/GATE/WRITE/INFO noise on large repos.
const QUIET = process.argv.includes("--quiet") || process.argv.includes("-q");
const log = (...args) => {
  if (!QUIET) console.log(...args);
};

let failures = 0;
const fail = (msg) => {
  failures++;
  console.error(`  FAIL  ${msg}`);
};
const parseScores = (md, where) => {
  const out = {};
  for (const label of LABELS) {
    const m = md.match(new RegExp(`\\*\\*${label}:\\s*([\\d.]+)/100`));
    if (!m) {
      fail(`${where}: missing "- **${label}: <N>/100" score line`);
      return null;
    }
    out[label] = Number(m[1]);
  }
  return out;
};

const slugs = readdirSync(modelDir)
  .filter((d) => statSync(join(modelDir, d)).isDirectory())
  .sort();
log(`sync-data: ${slugs.length} model folders`);

// ---- permanence tripwire (RULES.md is ultimate, precedence #1) ----
// Any git-tracked findings file (model/**/*.md / *.md.excluded, except the
// regenerable average.md + README.md) missing from disk is a forbidden
// deletion. FAIL loudly so it can never be cemented silently (a failing run
// also skips rewriting scores.generated.ts and exits non-zero).
try {
  const raw = execFileSync("git", ["ls-tree", "-r", "-z", "--name-only", "HEAD", "--", "model"], { cwd: root });
  for (const rel of raw.toString("utf8").split("\0").filter(Boolean)) {
    const posix = rel.replace(/\\/g, "/");
    if (!posix.endsWith(".md") && !posix.includes(".md.excluded")) continue;
    if (/(^|\/)average\.md$/.test(posix) || /(^|\/)README\.md$/.test(posix)) continue;
    const diskPath = join(root, ...posix.split("/"));
    if (existsSync(diskPath)) continue;
    if (posix.includes(".md.excluded")) {
      // Sanctioned twin retirement (tasks/research.md Step 3.3): the agent
      // wrote a fresh evidence-backed <.md> and its own <.md.excluded> twin
      // went. Only a twin with NO fresh sibling on disk is a real deletion.
      const sibling = diskPath.replace(/\.md\.excluded$/, ".md");
      if (existsSync(sibling)) {
        log(`  INFO  ${posix}: twin retired after re-research (${posix.replace(/\.md\.excluded$/, ".md")} present)`);
        continue;
      }
    fail(
      `${posix}: tracked in git HEAD but missing from disk — research files are permanent (RULES.md); restore with \`git restore --source=HEAD -- "${posix}"\`, never delete`,
    );
    }
  }
} catch {
  log("  WARN  git HEAD unreadable — deletion tripwire skipped (treat run as untrusted)");
}

// Slug version convention (see model/README.md): version numbers use "." not
// "-". A hyphen between two digits is never a valid version separator, so a
// folder like `gpt-5-5` is a duplicate of `gpt-5.5`, not a new model — fail
// loudly with the dotted destination instead of cementing the duplicate.
// Slug exceptions (match digit-hyphen-digit but are NOT hyphen versions):
// param sizes `gemma-4-31b` ("4" + 31B params) and `qwen-3.8-27b`
// (version 3.8 + 27B params). (Single majors with codename/experimental
// suffixes like `gpt-6-astra` never match the check at all.)
const SLUG_VERSION_EXCEPTION = new Set(["gemma-4-31b", "qwen-3.8-27b"]);
for (const slug of slugs) {
  if (SLUG_VERSION_EXCEPTION.has(slug)) continue;
  if (/\d-\d/.test(slug)) {
    fail(
      `model/${slug}/: version numbers use "." not "-" — use "model/${slug.replace(/(\d)-(?=\d)/g, "$1.")}/" instead (e.g. gpt-5-5 → gpt-5.5); merge into the existing dotted folder, never create a hyphen variant`,
    );
  }
}

const updatedAverages = [];
const presentStems = new Set(); // findings filenames (without .md) seen anywhere
// Compact score index for client codegen: slug -> file -> short-keyed scores.
// Accumulated here, emitted as src/data/scores.generated.ts (only when this
// run has zero failures, so invalid data is never cemented).
const scoreIndex = {};
const SHORT = {
  "Tool use": "tool",
  "Reasoning": "reasoning",
  "Context window": "context",
  "Multimodal": "multimodal",
  "Coding": "coding",
  "Cost efficiency": "cost",
  "Overall Score": "overall",
};

// ---- rater gate: only reports written by models whose own committed average
// Overall exceeds RATER_GATE count toward another model's average (top-10 cap
// still applies within the eligible set). Qualification reads the on-disk
// average.md files, so the gate is deterministic within a run; models without
// a usable average.md (or without a tracked model page) never qualify as
// raters. Keep RATER_GATE in sync with the UI caption in CompareSection.tsx.
const RATER_GATE = 84.9;
const raterOwn = new Map(); // model slug -> committed average Overall
for (const slug of slugs) {
  try {
    const s = parseScores(readFileSync(join(modelDir, slug, "average.md"), "utf8"), `model/${slug}/average.md`);
    if (s) raterOwn.set(slug, s["Overall Score"]);
  } catch {
    // No usable average.md — cannot prove gate passage, never a rater.
  }
}
// Findings-file stem -> rating-model slug, via the SOURCE_DEFS registry plus
// AGENT_MODEL_SLUG (exact match first, case-insensitive fallback for legacy
// registry casing drift). Stems with no tracked model never qualify.
const modelsTsGate = readFileSync(modelsTsPath, "utf8");
const stemKey = new Map(); // stem -> SourceKey (registered only)
for (const m of modelsTsGate.matchAll(/\{\s*key:\s*"([^"]+)",\s*label:\s*"[^"]+",\s*file:\s*"([^"]+)"\s*\}/g)) {
  stemKey.set(m[2].replace(/\.md$/, ""), m[1]);
}
const agentSlug = new Map(); // SourceKey -> model slug
{
  const ab = modelsTsGate.match(/AGENT_MODEL_SLUG[^=]*=\s*\{([\s\S]*?)\};/);
  if (ab) for (const m of ab[1].matchAll(/"([^"]+)":\s*"([^"]+)"/g)) agentSlug.set(m[1], m[2]);
}
const agentSlugLower = new Map([...agentSlug].map(([k, v]) => [k.toLowerCase(), v]));
function raterSlugFor(stem) {
  const key = stemKey.get(stem) ?? stem.replace(/_/g, " ");
  return agentSlug.get(key) ?? agentSlugLower.get(key.toLowerCase()) ?? null;
}

for (const slug of slugs) {
  const dir = join(modelDir, slug);
  // Auto-quarantine (enforces the template's SELF-EXCLUSION rule even when the
  // reporting agent forgot it): a findings file whose "Raw benchmarks found"
  // section holds 8+ "no verified public score found" rows and zero measured
  // (bold numeric) values is evidence-free — rename to *.md.excluded on the
  // spot so it can never poison the average. Any single real number keeps the file.
  for (const f of readdirSync(dir)
    .filter((f) => f.endsWith(".md") && !f.includes(".excluded") && f !== "average.md" && f !== "README.md")
    .sort()) {
    const content = readFileSync(join(dir, f), "utf8");
    const section = (content.split("### Raw benchmarks found")[1] || "").split("### Normalized scores")[0];
    if (!section) continue;
    const missing = (section.match(/no verified public score found/gi) || []).length;
    // NOTE: [^\n*] (not [^*) — bold spans must stay on one line, otherwise the
    // closing ** of one row pairs with the opening ** of the next (e.g. across
    // "Tau3-Banking / Tau2-Bench:") and fakes a numeric hit on empty files.
    const numerics = (section.match(/\*\*[^\n*]*\d[^\n*]*\*\*/g) || []).length;
    // Normalized quality dims (Cost excluded — it never counts toward Overall).
    const norm = (content.split("### Normalized scores")[1] || "").split("---")[0];
    const dims = ["Tool use", "Reasoning", "Context window", "Multimodal", "Coding"].map(
      (l) => Number((norm.match(new RegExp(`\\*\\*${l}:\\s*([\\d.]+)/100`)) || [])[1]),
    );
    const parsed = dims.filter((n) => Number.isFinite(n));
    const evidenceFree = missing >= 8 && numerics === 0;
    // A 0 in any quality dim is never legitimate (methodology floors are 10+):
    // it is "no data" filed as a number. Flat-identical dims with zero cited
    // numbers are invented uniformity. Either quarantines; real low scores
    // (varied dims, cited numbers) are never touched.
    const reason = evidenceFree
      ? `no verified benchmarks (${missing}x "not found", 0 measured numbers)`
      : parsed.some((n) => n === 0)
        ? `zero-scored dimension(s) [${parsed.join("/")}] = "no data" filed as 0`
        : parsed.length === 5 && parsed.every((n) => n === parsed[0]) && numerics === 0
          ? `flat ${parsed[0]}/100 across all dims with 0 measured numbers`
          : null;
    if (reason) {
      renameSync(join(dir, f), join(dir, `${f}.excluded`));
      log(`  QUAR  model/${slug}/${f} -> ${f}.excluded (${reason})`);
    }
  }
  const entries = readdirSync(dir).sort();
  // Self-excluded findings (agent found no verified benchmarks — see
  // model-report-TEMPLATE.md): never parsed, never averaged, never registered.
  // Logged so exclusions stay visible instead of silently vanishing.
  for (const f of entries.filter((f) => f.includes(".excluded"))) {
    log(`  SKIP  model/${slug}/${f} (self-excluded: no verified benchmarks)`);
  }
  const files = entries
    .filter((f) => f.endsWith(".md") && !f.includes(".excluded") && f !== "average.md" && f !== "README.md")
    .sort();

  for (const f of files) {
    if (!FILENAME_RE.test(f)) {
      fail(`model/${slug}/${f}: filename must match ${FILENAME_RE} (letters, digits, underscore only)`);
    } else {
      presentStems.add(f.replace(/\.md$/, ""));
    }
  }

  let meta = null;
  const metaPath = join(dir, "meta.json");
  try {
    meta = JSON.parse(readFileSync(metaPath, "utf8"));
  } catch {
    // Auto-scaffold missing meta.json to prevent build sync failures
    const formattedName = slug.split("-").map(w => w.length > 0 ? w[0].toUpperCase() + w.slice(1) : "").join(" ");
    meta = {
      id: `opencode/${slug}`,
      name: formattedName,
      short: `${formattedName} model evaluation entry.`,
      contextWindow: "128K total",
      modalities: "Text in/out",
      pricingNote: "Standard pricing",
    };
    writeFileSync(metaPath, JSON.stringify(meta, null, 2));
    log(`  AUTO  model/${slug}/meta.json (auto-scaffolded missing file)`);
  }
  for (const k of META_REQUIRED) {
    if (typeof meta[k] !== "string" || meta[k].length === 0) {
      fail(`model/${slug}/meta.json: missing required field "${k}"`);
    }
  }

  const perFile = [];
  let skipAverage = false;
  for (const f of files) {
    const scores = parseScores(readFileSync(join(dir, f), "utf8"), `model/${slug}/${f}`);
    if (scores) {
      perFile.push({ file: f, scores });
    } else {
      // Unparsable file (already FAILed above): don't cement a partial average.
      skipAverage = true;
    }
  }
  if (perFile.length === 0) {
    log(`  INFO  model/${slug}/: no active parseable findings files (all files excluded or pending research)`);
    continue;
  }
  for (const p of perFile) {
    const entry = {};
    for (const [label, short] of Object.entries(SHORT)) entry[short] = p.scores[label];
    (scoreIndex[slug] ||= {})[p.file] = entry;
  }

  // Source-file Overall must equal the half-up mean of the five quality dims
  // (Cost excluded since v4). Drift fails loudly and the folder's average is left
  // untouched until fixed, so partial data is never cemented.
  // (Matches the dev-time checkOverallScores() tolerance of 0.51.)
  const QUALITY = ["Tool use", "Reasoning", "Context window", "Multimodal", "Coding"];
  for (const p of perFile) {
    const mean5 = QUALITY.reduce((a, l) => a + p.scores[l], 0) / QUALITY.length;
    if (Math.abs(p.scores["Overall Score"] - mean5) > 0.51) {
      fail(
        `model/${slug}/${p.file}: Overall ${p.scores["Overall Score"]} differs from 5-dim quality mean ${halfUp1(mean5)} — Cost excluded from Overall since v4`,
      );
      skipAverage = true;
    }
  }

  // Filename stem -> display label, e.g. Gemini_3.6_Flash -> "Gemini 3.6 Flash".
  // Agreement-notes order is case-insensitive A-Z (matches the committed convention,
  // e.g. "Gemini 3.6 Flash" before "GLM 5.3 Flash"); plain .sort() would put "GLM" first.
  const labelOf = (file) => file.replace(/\.md$/, "").replace(/_/g, " ");
  const lower = (s) => s.toLowerCase();
  // Rater gate (RATER_GATE): only files written by models whose own committed
  // average Overall clears the gate count toward this average.
  const ignoredLabels = [];
  let eligible = perFile.filter((p) => {
    const rs = raterSlugFor(p.file.replace(/\.md$/, ""));
    if (rs !== null && (raterOwn.get(rs) ?? -Infinity) > RATER_GATE) return true;
    ignoredLabels.push(labelOf(p.file));
    return false;
  });
  // Crown rule (RULES.md): every folder gets an average. When no rater clears
  // the gate, fall back to averaging all available reports (top-10 cap still
  // applies) instead of leaving the folder average-less.
  let fallback = false;
  if (eligible.length === 0) {
    fallback = true;
    eligible = perFile;
    log(`  FALLBACK  model/${slug}/average.md: no qualifying raters (need own Overall > ${RATER_GATE}) — averaging all ${perFile.length} below-gate source(s)`);
  }
  const labels = eligible.map((p) => labelOf(p.file)).sort((a, b) => (lower(a) < lower(b) ? -1 : lower(a) > lower(b) ? 1 : 0));

  const ranked = [...eligible].sort((a, b) => b.scores["Overall Score"] - a.scores["Overall Score"]);
  const cohort = ranked.slice(0, 10);
  const totalSources = eligible.length;
  const cohortSize = cohort.length;
  const trimmed = totalSources > cohortSize;
  const topLabels = cohort.map((p) => labelOf(p.file)).sort((a, b) => (lower(a) < lower(b) ? -1 : lower(a) > lower(b) ? 1 : 0));
  const excludedLabels = labels.filter((l) => !topLabels.includes(l));
  if (!fallback && ignoredLabels.length > 0) {
    ignoredLabels.sort((a, b) => (lower(a) < lower(b) ? -1 : lower(a) > lower(b) ? 1 : 0));
    log(`  GATE  model/${slug}/average.md: ignored ${ignoredLabels.length} below-gate rater(s): ${ignoredLabels.join(", ")}`);
  }

  const mean = (label) => halfUp1(cohort.reduce((a, p) => a + p.scores[label], 0) / cohortSize);
  const mixNote = fallback
    ? `Fallback mean of all ${totalSources} reporting source(s) — no rater clears own Overall > ${RATER_GATE}, so the gate cannot filter (every model gets an average, RULES.md).`
    : trimmed
      ? `Mean of top ${cohortSize} of ${totalSources} qualifying reporting sources (ranked by Overall Score; only raters with own Overall > ${RATER_GATE} count).`
      : `Mean of ${totalSources} qualifying reporting source(s) (raters with own Overall > ${RATER_GATE}).`;
  // The default ("average") view needs this folder's recomputed means too:
  // the client never reads average.md itself, so index them like a source file.
  // (Folders with validation failures leave a stale average.md on disk, but a
  // failing run never rewrites scores.generated.ts — see the emit step below.)
  (scoreIndex[slug] ||= {})["average.md"] = {
    tool: mean("Tool use"),
    reasoning: mean("Reasoning"),
    context: mean("Context window"),
    multimodal: mean("Multimodal"),
    coding: mean("Coding"),
    cost: mean("Cost efficiency"),
    overall: mean("Overall Score"),
  };
  const lines = [
    ...LABELS.slice(0, 6).map((l) => `- **${l}: ${mean(l)}/100.** ${mixNote}`),
    `- **Overall Score: ${mean("Overall Score")}/100.** ${mixNote}`,
  ];
  const body =
    `## Averaged scores\n\n${lines.join("\n")}\n\n---\n\n## Agreement notes\n\n` +
    (fallback
      ? `- Fallback: no qualifying raters (need own Overall > ${RATER_GATE}); average from all ${totalSources} below-gate source(s): ${labels.join(", ")}.\n`
      : `- Based on ${totalSources} qualifying reporting source(s) (rater Overall > ${RATER_GATE}): ${labels.join(", ")}.\n`) +
    `- Average from top ${cohortSize} by Overall Score: ${topLabels.join(", ")}.\n` +
    (trimmed ? `- Excluded bottom ${totalSources - cohortSize}: ${excludedLabels.join(", ")}.\n` : "") +
    (!fallback && ignoredLabels.length > 0 ? `- Ignored below-gate rater(s): ${ignoredLabels.join(", ")}.\n` : "");

  const avgPath = join(dir, "average.md");
  let prev = null;
  try {
    prev = readFileSync(avgPath, "utf8");
  } catch {
    // created below
  }
  let next;
  if (prev === null) {
    next =
      `# ${meta.name} — Averaged findings\n\n` +
      `- Overview and scoring methodology: \`../../model-comparison.md\`\n` +
      `- Cross-model signed log: \`../../model-findings.md\`\n\n` +
      body;
    log(`  NEW   model/${slug}/average.md (created)`);
  } else {
    const head = prev.split("## Averaged scores")[0];
    next = head + body;
  }
  if (!skipAverage && prev !== next) {
    writeFileSync(avgPath, next);
    if (prev !== null) {
      updatedAverages.push(slug);
      log(`  WRITE model/${slug}/average.md (recomputed from top ${cohortSize} of ${totalSources} sources)`);
    }
  }
}

// ---- registry: every on-disk stem needs a SourceKey + SOURCES entry ----
let ts = readFileSync(modelsTsPath, "utf8");
const keyOf = (stem) => stem.replace(/_/g, " ");
const registered = new Set(
  [...ts.matchAll(/\{\s*key:\s*"([^"]+)",\s*label:\s*"[^"]+",\s*file:\s*"([^"]+)"\s*\}/g)].map((m) => m[2].replace(/\.md$/, "")),
);
const missing = [...presentStems].filter((stem) => stem !== "average" && !registered.has(stem)).sort();
const registeredFiles = new Set(
  [...ts.matchAll(/\{\s*key:\s*"([^"]+)",\s*label:\s*"[^"]+",\s*file:\s*"([^"]+)"\s*\}/g)].map((m) => m[1]),
);
// New sources are appended to the registry; the dropdown order itself is derived
// at build time (Average first, rest by max overall desc), so registry position
// is irrelevant to the UI.
const unionMembers = new Set(
  [...(ts.match(/export type SourceKey =([\s\S]*?);/) || ["", ""])[1].matchAll(/"([^"]+)"/g)].map((m) => m[1]),
);
const pending = [];
for (const stem of missing) {
  const key = keyOf(stem);
  const inSources = ts.includes(`key: "${key}"`);
  const inUnion = unionMembers.has(key);
  if (inSources) {
    // Key registered under a different filename -> genuine collision, human must decide.
    fail(`stem ${stem}.md maps to label "${key}" which is already registered for another file`);
    continue;
  }
  // Not in SOURCES: needs (re)registration. inUnion covers repair of a partial
  // earlier run that added the union line but not the SOURCES entry.
  pending.push({ key, stem, needUnion: !inUnion });
}
if (pending.length > 0) {
  // NOTE: [^[]* (with star) skips the ": { key: ... }[] = " type annotation up to
  // the array's opening bracket. A missing star here silently breaks matching.
  const unionRe = /(export type SourceKey =[\s\S]*?);/;
  // NOTE: SOURCE_DEFS is module-local (no `export` keyword) — the derived
  // `SOURCES` const is the exported one. Matching `export const` here silently
  // breaks registration (as happened once already).
  const arrRe = /(const SOURCE_DEFS[^[]*\[[\s\S]*?)\n\];/;
  const um = ts.match(unionRe);
  const am = ts.match(arrRe);
  if (!um || !am) {
    fail("could not locate SourceKey union / SOURCE_DEFS registry in src/data/models.ts — register manually");
  } else {
    const needUnion = pending.filter((p) => p.needUnion);
    if (needUnion.length > 0) {
      ts = ts.replace(unionRe, `${um[1]}${needUnion.map((p) => `\n  | "${p.key}"`).join("")};`);
    }
    ts = ts.replace(
      arrRe,
      `${am[1]}${pending.map((p) => `\n  { key: "${p.key}", label: "${p.key}", file: "${p.stem}.md" },`).join("")}\n];`,
    );
    writeFileSync(modelsTsPath, ts);
    for (const p of pending) {
      log(`  REG   new reporting source "${p.key}" (${p.stem}.md) appended to SourceKey + SOURCES`);
    }
  }
}

// Stale keys (registered but no file anywhere) are non-blocking info logs.
for (const entry of ts.matchAll(/\{\s*key:\s*"([^"]+)",\s*label:\s*"[^"]+",\s*file:\s*"([^"]+)"\s*\}/g)) {
  const [, key, file] = entry;
  if (file === "average.md") continue;
  if (!presentStems.has(file.replace(/\.md$/, ""))) {
    log(`  INFO  source "${key}" (${file}) has no active findings files in model folders`);
  }
}

// ---- codegen: numbers-only scores for the client bundle ----
// The app's runtime needs 7 numbers per findings file, not the full report
// prose. Emitting them here keeps model/*.md out of the Vite bundle (the old
// eager ?raw glob inlined ~1.7 MB of markdown into one ~1.8 MB client chunk).
// Keys are sorted so output is deterministic across runs.
const genPath = join(root, "src", "data", "scores.generated.ts");
if (failures === 0) {
  const out = [
    "// AUTO-GENERATED by `pnpm sync` (scripts/sync-data.mjs). Do not hand-edit.",
    "// Compact per-source scores (numbers only). Re-run `pnpm sync` after",
    "// adding or editing any model/<slug>/*.md findings file.",
    "export interface GeneratedScores {",
    "  tool: number;",
    "  reasoning: number;",
    "  context: number;",
    "  multimodal: number;",
    "  coding: number;",
    "  cost: number;",
    "  overall: number;",
    "}",
    "export const GENERATED_SCORES: Record<string, Record<string, GeneratedScores>> = {",
  ];
  for (const slug of Object.keys(scoreIndex).sort()) {
    out.push(`  "${slug}": {`);
    for (const file of Object.keys(scoreIndex[slug]).sort()) {
      const s = scoreIndex[slug][file];
      out.push(
        `    "${file}": { tool: ${s.tool}, reasoning: ${s.reasoning}, context: ${s.context}, multimodal: ${s.multimodal}, coding: ${s.coding}, cost: ${s.cost}, overall: ${s.overall} },`,
      );
    }
    out.push("  },");
  }
  out.push("};", "");
  const next = out.join("\n");
  let prevGen = null;
  try {
    prevGen = readFileSync(genPath, "utf8");
  } catch {
    // created below
  }
  if (prevGen !== next) {
    writeFileSync(genPath, next);
    log(
      `  WRITE src/data/scores.generated.ts (${Object.keys(scoreIndex).length} slugs, ${Object.values(scoreIndex).reduce((a, f) => a + Object.keys(f).length, 0)} files)${prevGen === null ? " (created)" : ""}`,
    );
  }
} else {
  log("  SKIP  src/data/scores.generated.ts not rewritten (failures present — fix and re-run)");
}

console.log(`sync-data: done. averages rewritten: ${updatedAverages.length}${updatedAverages.length ? ` (${updatedAverages.join(", ")})` : ""}; new sources: ${missing.length}; failures: ${failures}`);
process.exitCode = failures > 0 ? 1 : 0;
