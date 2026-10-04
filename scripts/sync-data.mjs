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
//   5. Validates every model/<slug>/meta.json parses and has all required
//      fields; a missing file is auto-scaffolded with `scaffolded: true` and
//      re-logged as SCAF every run until a human curates it (GLM53F_IMP #9).
//
// Exit code: 0 = in sync (averages rewritten as needed, reported below).
// Non-zero = human action required (see error lines).
import { readFileSync, writeFileSync, readdirSync, renameSync, statSync, existsSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
// Pure helpers (tested: `npm test` / `node --test scripts/lib/`). Sync adds
// fs/logging/FAIL accounting around them; behavior stays byte-identical.
import {
  META_REQUIRED,
  RATER_GATE,
  parseScoresPure,
  shortenScores,
  overallDrift,
  applyOverallFix,
  rankTop10,
  partitionEligible,
  sortLabelsAZ,
} from "./lib/parse.mjs";
import { quarantineReason } from "./lib/quarantine.mjs";
import {
  MIRROR_ROOTS,
  FORBIDDEN_ROOTS,
  forbiddenRootMessage,
  isResearchPath,
  isRegenerablePath,
  classifyMissingTracked,
  findMirror,
  findForbiddenRoot,
  deletionFailMessage,
  checkFilename,
  checkMetaFile,
} from "./lib/validate.mjs";
import { buildAverageEntry, buildAverageBody, applyAverageToPrev, buildQueueFile } from "./lib/average.mjs";
import {
  parseRegistryEntries,
  buildRegistryEntry,
  computePending,
  collisionFailMessage,
  appendPendingSources,
  reconcileRegistry,
  renderScoresFile,
  renderRobotsTxt,
} from "./lib/codegen.mjs";
import {
  normName,
  stemToKey,
  labelOf,
  resolveSourceMeta as resolveSourceMetaPure,
  hyphenVersionViolation,
  buildScaffoldMeta,
  isScaffoldStub,
  metaNameIsSlugGuess,
} from "./lib/naming.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const modelDir = join(root, "model");

const sourcesTsPath = join(root, "src", "data", "sources.generated.ts");

// Score-format constants live in scripts/lib/parse.mjs (imported above) so
// regression tests lock the format contract.

// Single edge-case map: every filename-derived key
// whose display label or model-page slug differs from the default.
// Defaults (no entry needed): label = key, slug = catalog lookup by
// normalized name (see catalogNames below), absent when the agent has no
// tracked model page.
const SOURCE_OVERRIDES = {
  "DeepSeek 4.1 Flash": { label: "DeepSeek v4.1 Flash", slug: "deepseek-v4.1-flash" },
  "Mimo v2.6 Flash": { label: "MiMo v2.6 Flash", slug: "mimo-v2.6-free" },
  "Mimo v2.5 Free": { label: "MiMo v2.5 Free", slug: "mimo-v2.5-free" },
  "big-pickle": { label: "Big Pickle", slug: "big-pickle" },
  "Ox Alpha": { slug: "ox_alpha" },
  // Muse Spark 1.2/1.3 each have ONE model page: Contributor/Free/Standard/Max
  // are tiers of the same weights (cost + Meta data-use differ), never separate
  // folders — tier-suffixed names must not resolve to a "-free"/"-max" folder.
  "Muse Spark 1.3": { slug: "muse-spark-1.3" },
  "Muse Spark 1.2": { slug: "muse-spark-1.2" },
  // Space Bunny = Space Bunny Alpha (OpenRouter stealth/space-bunny-alpha) =
  // Space Bunny Free (OpenCode space-bunny-free): one anonymous stealth model
  // under three marketplace labels (confirmed 2026-10-02). Never scaffold
  // space-bunny-alpha/ or space-bunny-free/.
  "Space Bunny": { slug: "space-bunny" },
  "GPT 5.6 Sol": { slug: "gpt-5.6-sol" },
  "LongCat 2.5 Preview": { slug: "longcat_2.5_preview" },
};

// Virtual sort-view keys live in src/data/models.ts (VIRTUAL_VIEWS).
// halfUp1 lives in scripts/lib/parse.mjs. Grandfathered virtual entries
// (file "average.md") are pruned from the registry below.

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
  const r = parseScoresPure(md);
  if (!r.ok) {
    fail(`${where}: missing "- **${r.missingLabel}: <N>/100" score line`);
    return null;
  }
  return r.scores;
};

const slugs = readdirSync(modelDir)
  .filter((d) => statSync(join(modelDir, d)).isDirectory())
  .sort();
log(`sync-data: ${slugs.length} model folders`);

// ---- forbidden duplicate roots (RULES.md voice-routing rule) ----
// Retired tree names (e.g. `voicemodels/`, pre-2026-09-28 name of
// `models_voice/`) must never be recreated by research agents. FAIL loudly
// while one exists so the duplicate is merged away, never cemented.
{
  const hit = findForbiddenRoot(root, FORBIDDEN_ROOTS, (r, f) => existsSync(join(r, f)));
  if (hit !== undefined) fail(forbiddenRootMessage(hit));
}

// ---- permanence tripwire (RULES.md is ultimate, precedence #1) ----
// Any git-tracked findings file (model/**/*.md / *.md.excluded, except the
// regenerable average.md + README.md) missing from disk is a forbidden
// deletion — unless it survives somewhere sanctioned. FAIL loudly so a real
// deletion can never be cemented silently (a failing run also skips rewriting
// scores.generated.ts and exits non-zero).
// Sanctioned survivals (INFO, never FAIL):
//   - twin retirement: <.md.excluded> gone but its fresh <.md> sibling exists
//     (tasks/research.md Step 3.3);
//   - relocation: the same relative path exists under a sanctioned mirror tree
//     (user-directed moves, e.g. models_voice/, models_finance/) — content
//     preserved, pending commit.
const ALLOW_MODEL_DELETE = process.env.ALLOW_MODEL_DELETE === "1" || process.env.ALLOW_MODEL_DELETE === "true";
try {
  if (ALLOW_MODEL_DELETE) {
    log("  INFO  ALLOW_MODEL_DELETE set — tripwire check for missing tracked research files skipped");
  } else {
    const raw = execFileSync("git", ["ls-tree", "-r", "-z", "--name-only", "HEAD", "--", "model"], { cwd: root });
    for (const rel of raw.toString("utf8").split("\0").filter(Boolean)) {
    const posix = rel.replace(/\\/g, "/");
    // Filters + verdict live in scripts/lib/validate.mjs (tested); sync only
    // consults fs/git and logs. MIRROR_ROOTS is defined there (it was a bare
    // reference before, which threw on the first genuine tripwire hit).
    if (!isResearchPath(posix)) continue;
    if (isRegenerablePath(posix)) continue;
    const diskPath = join(root, ...posix.split("/"));
    if (existsSync(diskPath)) continue;
    const twinRetired =
      posix.includes(".md.excluded") && existsSync(diskPath.replace(/\.md\.excluded$/, ".md"));
    const parts = posix.split("/");
    const mirror = findMirror(parts, MIRROR_ROOTS, (m, rest) => existsSync(join(root, m, ...rest)));
    const verdict = classifyMissingTracked({ twinRetired, mirror });
    if (verdict === "twin-retired") {
      log(`  INFO  ${posix}: twin retired after re-research (${posix.replace(/\.md\.excluded$/, ".md")} present)`);
      continue;
    }
    if (verdict === "relocated") {
      log(`  INFO  ${posix}: relocated to ${mirror}/${parts.slice(1).join("/")} (pending commit)`);
      continue;
    }
    fail(deletionFailMessage(posix));
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
// param sizes `gemma-4-31b` ("4" + 31B params), `qwen-3.8-27b`
// (version 3.8 + 27B params) and `qwen-3.5-9b` (version 3.5 + 9B params).
// (Single majors with codename/experimental suffixes like `gpt-6-astra`
// never match the check at all.) Full list: SLUG_VERSION_EXCEPTION in
// scripts/lib/naming.mjs.
for (const slug of slugs) {
  const suggestion = hyphenVersionViolation(slug);
  if (suggestion !== null) {
    fail(
      `model/${slug}/: version numbers use "." not "-" — use "model/${suggestion}/" instead (e.g. gpt-5-5 → gpt-5.5); merge into the existing dotted folder, never create a hyphen variant`,
    );
  }
}

const updatedAverages = [];
// meta.json stubs still carrying sync's `scaffolded: true` stamp (GLM53F_IMP #9).
const scaffoldStubs = [];
const presentStems = new Set(); // findings filenames (without .md) seen anywhere
// Compact score index for client codegen: slug -> file -> short-keyed scores.
// Accumulated here, emitted as src/data/scores.generated.ts (only when this
// run has zero failures, so invalid data is never cemented).
const scoreIndex = {};
// SHORT lives in scripts/lib/parse.mjs (imported above).

// ---- rater gate: only reports written by models whose own committed average
// Overall exceeds RATER_GATE count toward another model's average (top-10 cap
// still applies within the eligible set). Qualification reads the on-disk
// average.md files, so the gate is deterministic within a run; models without
// a usable average.md (or without a tracked model page) never qualify as
// raters. RATER_GATE lives in scripts/lib/parse.mjs — keep it in sync with
// the UI caption in CompareSection.tsx.
const raterOwn = new Map(); // model slug -> committed average Overall
for (const slug of slugs) {
  try {
    const s = parseScores(readFileSync(join(modelDir, slug, "average.md"), "utf8"), `model/${slug}/average.md`);
    if (s) raterOwn.set(slug, s["Overall Score"]);
  } catch {
    // No usable average.md — cannot prove gate passage, never a rater.
  }
}
// Model catalog: normalized display name -> folder slug, across all model
// trees. Single lookup behind both the rater gate and SOURCE_DEFS slug
// emission (slug lives inline in SourceDef).
const catalogNames = new Map(); // normalized name -> slug
for (const rDir of [modelDir, join(root, "models_voice"), join(root, "models_finance")]) {
  if (!existsSync(rDir)) continue;
  for (const d of readdirSync(rDir)) {
    const mPath = join(rDir, d, "meta.json");
    if (!existsSync(mPath)) continue;
    try {
      const mData = JSON.parse(readFileSync(mPath, "utf8"));
      if (mData.name) catalogNames.set(normName(mData.name), d);
    } catch {}
  }
}
/** Resolve the display label + model-page slug for a source key. */
function resolveSourceMeta(key) {
  return resolveSourceMetaPure(key, SOURCE_OVERRIDES, (norm) => catalogNames.get(norm));
}
// Findings-file stem -> rating-model slug, via the SOURCE_DEFS registry plus
// SOURCE_OVERRIDES / catalog lookup (exact match first, derived key fallback).
// Stems with no tracked model never qualify.
const sourcesTsGate = existsSync(sourcesTsPath) ? readFileSync(sourcesTsPath, "utf8") : "";
const stemKey = new Map(); // stem -> SourceKey (registered only)
for (const m of sourcesTsGate.matchAll(/\{\s*key:\s*"([^"]+)",\s*label:\s*"[^"]+",\s*file:\s*"([^"]+)"(?:,\s*slug:\s*"[^"]+")?\s*\}/g)) {
  stemKey.set(m[2].replace(/\.md$/, ""), m[1]);
}
function raterSlugFor(stem) {
  const key = stemKey.get(stem) ?? stem.replace(/_/g, " ");
  return resolveSourceMeta(key).slug ?? null;
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
    // Criteria live in scripts/lib/quarantine.mjs (tested); sync only renames.
    const reason = quarantineReason(content);
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
    const hygiene = checkFilename(slug, f);
    if (hygiene !== null) {
      fail(hygiene);
    } else {
      presentStems.add(f.replace(/\.md$/, ""));
    }
  }

  let meta = null;
  const metaPath = join(dir, "meta.json");
  let scaffoldedNow = false;
  try {
    meta = JSON.parse(readFileSync(metaPath, "utf8"));
  } catch {
    // Auto-scaffold missing meta.json to prevent build sync failures.
    // The name is a slug guess (title-cased, separators to spaces) — NEVER
    // the official vendor display name. A human must replace it (plus the
    // placeholder facts) before the entry is trustworthy; the "_" check
    // below fails loudly on the worst derivation artifacts.
    // buildScaffoldMeta (naming.mjs, tested) also stamps `scaffolded: true`
    // so the stub stays visible on every run until curated (GLM53F_IMP #9).
    meta = buildScaffoldMeta(slug);
    scaffoldedNow = true;
    writeFileSync(metaPath, JSON.stringify(meta, null, 2));
    log(`  AUTO  model/${slug}/meta.json (auto-scaffolded missing file)`);
    log(`  WARN  model/${slug}/meta.json: "name" is a slug guess ("${meta.name}") — set the official vendor display name and verified facts`);
  }
  // Scaffolded-stub tracker (GLM53F_IMP #9): while `scaffolded: true` is
  // present and `name` is still the slug guess, re-log the stub every run
  // (fresh scaffolds already WARNed above) and count it in the run summary.
  // Once `name` differs from the guess a human curated the entry — drop the
  // stamp, logged as CURATED.
  if (isScaffoldStub(meta)) {
    if (metaNameIsSlugGuess(meta, slug)) {
      scaffoldStubs.push(slug);
      if (!scaffoldedNow) {
        log(`  SCAF  model/${slug}/meta.json: scaffolded stub — set the official vendor name + verified facts (delete "scaffolded" when curated)`);
      }
    } else {
      delete meta.scaffolded;
      writeFileSync(metaPath, JSON.stringify(meta, null, 2));
      log(`  CURATED  model/${slug}/meta.json: official name set — "scaffolded" stamp removed`);
    }
  }
  // Required fields + display-name gate live in scripts/lib/validate.mjs
  // (checkMetaFile, tested) — sync only records the FAILs.
  for (const msg of checkMetaFile(slug, meta, META_REQUIRED)) {
    fail(msg);
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
    (scoreIndex[slug] ||= {})[p.file] = shortenScores(p.scores);
  }

  // Source-file Overall is DERIVED (half-up mean of the five quality dims,
  // Cost excluded since v4) — so drift is auto-corrected, not failed: sync
  // rewrites just the Overall number, logs an AUTO line, and the folder's
  // average proceeds on the corrected value. Dims, benchmarks, and prose are
  // never touched; unparsable score lines still fail loudly in parseScores
  // above (never invent structure).
  // (Matches the dev-time checkOverallScores() tolerance of 0.51.)
  for (const p of perFile) {
    const { corrected, drifted } = overallDrift(p.scores);
    if (drifted) {
      const fp = join(dir, p.file);
      const content = readFileSync(fp, "utf8");
      const next = applyOverallFix(content, corrected);
      if (next === null) {
        fail(`model/${slug}/${p.file}: Overall drifted but score line not auto-fixable — hand-fix it`);
        skipAverage = true;
        continue;
      }
      writeFileSync(fp, next);
      log(`  AUTO  model/${slug}/${p.file}: Overall ${p.scores["Overall Score"]} -> ${corrected} (5-dim quality mean)`);
      p.scores["Overall Score"] = corrected;
      if (scoreIndex[slug]?.[p.file]) scoreIndex[slug][p.file].overall = corrected;
    }
  }

  // Rater gate (RATER_GATE): only files written by models whose own committed
  // average Overall clears the gate count toward this average.
  // Partition lives in scripts/lib/parse.mjs (tested); label order (labelOf,
  // case-insensitive A-Z) matches the committed Agreement-notes convention
  // (e.g. "Gemini 3.6 Flash" before "GLM 5.3 Flash").
  let { eligible, ignoredLabels } = partitionEligible(perFile, raterSlugFor, raterOwn);
  // Crown rule (RULES.md): every folder gets an average. When no rater clears
  // the gate, fall back to averaging all available reports (top-10 cap still
  // applies) instead of leaving the folder average-less.
  let fallback = false;
  if (eligible.length === 0) {
    fallback = true;
    eligible = perFile;
    log(`  FALLBACK  model/${slug}/average.md: no qualifying raters (need own Overall > ${RATER_GATE}) — averaging all ${perFile.length} below-gate source(s)`);
  }
  const labels = sortLabelsAZ(eligible.map((p) => labelOf(p.file)));

  const cohort = rankTop10(eligible);
  const totalSources = eligible.length;
  const cohortSize = cohort.length;
  const trimmed = totalSources > cohortSize;
  const topLabels = sortLabelsAZ(cohort.map((p) => labelOf(p.file)));
  const excludedLabels = labels.filter((l) => !topLabels.includes(l));
  if (!fallback && ignoredLabels.length > 0) {
    ignoredLabels = sortLabelsAZ(ignoredLabels);
    log(`  GATE  model/${slug}/average.md: ignored ${ignoredLabels.length} below-gate rater(s): ${ignoredLabels.join(", ")}`);
  }

  // The default ("average") view needs this folder's recomputed means too:
  // the client never reads average.md itself, so index them like a source file.
  // (Folders with validation failures leave a stale average.md on disk, but a
  // failing run never rewrites scores.generated.ts — see the emit step below.)
  // Text assembly lives in scripts/lib/average.mjs (tested); sync only writes.
  (scoreIndex[slug] ||= {})["average.md"] = buildAverageEntry(cohort);
  const body = buildAverageBody({
    cohort,
    labels,
    topLabels,
    excludedLabels,
    ignoredLabels,
    fallback,
    trimmed,
    totalSources,
    cohortSize,
  });

  const avgPath = join(dir, "average.md");
  let prev = null;
  try {
    prev = readFileSync(avgPath, "utf8");
  } catch {
    // created below
  }
  const { next, created } = applyAverageToPrev(prev, meta.name, body);
  if (created) {
    log(`  NEW   model/${slug}/average.md (created)`);
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
// Slug lives inline in SourceDef; labels + slugs resolve via SOURCE_OVERRIDES
// + catalog lookup. Text surgery lives in scripts/lib/codegen.mjs (tested);
// sync only consults the fs and writes. Virtual keys are pruned.
let sourcesTs = existsSync(sourcesTsPath) ? readFileSync(sourcesTsPath, "utf8") : "";
const keyOf = stemToKey; // scripts/lib/naming.mjs (tested)
// entryForStem keeps the exact on-disk filename (stems with
// dots/legacy casing must round-trip, never re-derived from the key).
const entryForStem = (key, stem) => buildRegistryEntry(key, stem, resolveSourceMeta);
const registered = new Set(parseRegistryEntries(sourcesTs).map((e) => e.file.replace(/\.md$/, "")));
const missing = [...presentStems].filter((stem) => stem !== "average" && !registered.has(stem)).sort();
// New sources are appended to the registry; the dropdown order itself is derived
// at build time (Average first, rest by own average Overall desc), so registry
// position is irrelevant to the UI.
const { pending, collisions } = computePending(missing, sourcesTs, keyOf);
for (const c of collisions) {
  // Key registered under a different filename -> genuine collision, human must decide.
  fail(collisionFailMessage(c.stem, c.key));
}
if (pending.length > 0) {
  const { ok, text } = appendPendingSources(sourcesTs, pending, entryForStem);
  if (!ok) {
    fail("could not locate SourceKey union / SOURCE_DEFS registry in src/data/sources.generated.ts — register manually");
  } else {
    sourcesTs = text;
    writeFileSync(sourcesTsPath, sourcesTs);
    for (const p of pending) {
      log(`  REG   new reporting source "${p.key}" (${p.stem}.md) appended to SourceKey + SOURCES`);
    }
  }
}

// Reconcile labels + inline slugs for all registered entries (idempotent).
// Grandfathered virtual-view entries (file average.md, key != average) are
// pruned — virtual views live in models.ts, not the registry.
{
  const reconciled = reconcileRegistry(sourcesTs, entryForStem);
  if (reconciled !== sourcesTs) {
    sourcesTs = reconciled;
    writeFileSync(sourcesTsPath, sourcesTs);
    log("  WRITE src/data/sources.generated.ts (labels/slugs reconciled, virtual views pruned)");
  }
}

// Stale keys (registered but no file anywhere) are non-blocking info logs.
for (const { key, file } of parseRegistryEntries(sourcesTs)) {
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
  // Serializer lives in scripts/lib/codegen.mjs (tested, deterministic).
  const next = renderScoresFile(scoreIndex);
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
  // Research queue for AI agents (model-queue.md): pre-sorted `<Overall> <slug>`
  // lines so agents stop scanning every average.md themselves. Same freshness
  // contract as scores.generated.ts — only on zero failures, committed.
  const queuePath = join(root, "model-queue.md");
  const queueNext = buildQueueFile(scoreIndex);
  let prevQueue = null;
  try {
    prevQueue = readFileSync(queuePath, "utf8");
  } catch {
    // created below
  }
  if (prevQueue !== queueNext) {
    writeFileSync(queuePath, queueNext);
    log(
      `  WRITE model-queue.md (${Object.keys(scoreIndex).length} models, Overall desc)${prevQueue === null ? " (created)" : ""}`,
    );
  }
  // robots.txt Sitemap must be absolute: same SITE_ORIGIN knob as the
  // static-adapter origin (adapters/static/vite.config.ts). Written here
  // (not hand-maintained) so the two can never disagree.
  const robotsPath = join(root, "public", "robots.txt");
  const robotsNext = renderRobotsTxt(process.env.SITE_ORIGIN ?? "http://localhost:4173");
  let prevRobots = null;
  try {
    prevRobots = readFileSync(robotsPath, "utf8");
  } catch {
    // created below
  }
  if (prevRobots !== robotsNext) {
    writeFileSync(robotsPath, robotsNext);
    log(`  WRITE public/robots.txt (Sitemap: ${process.env.SITE_ORIGIN ?? "http://localhost:4173"}/sitemap.xml)`);
  }
} else {
  log("  SKIP  src/data/scores.generated.ts not rewritten (failures present — fix and re-run)");
}

if (scaffoldStubs.length > 0) {
  log(`  SCAF  ${scaffoldStubs.length} scaffolded meta.json stub(s) pending curation: ${scaffoldStubs.join(", ")}`);
}
console.log(`sync-data: done. averages rewritten: ${updatedAverages.length}${updatedAverages.length ? ` (${updatedAverages.join(", ")})` : ""}; new sources: ${missing.length}; failures: ${failures}; scaffolded stubs: ${scaffoldStubs.length}`);
process.exitCode = failures > 0 ? 1 : 0;
