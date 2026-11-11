// Deterministic data sync for modelcomp. Run: pnpm sync
//
// Full step list, invariants and the human workflow live in tasks/sync-data.md.
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
  nearMissLine,
  extractReportDate,
  extractSignatureName,
  shortenScores,
  overallDrift,
  applyOverallFix,
  rankTop10,
  partitionEligible,
  sortLabelsAZ,
} from "./lib/parse.mjs";
import { quarantineReason } from "./lib/quarantine.mjs";
import { parseBenchmarkRows, agreeEvidence } from "./lib/benchmarks.mjs";
import {
  MIRROR_ROOTS,
  FORBIDDEN_ROOTS,
  MERGED_MODEL_SLUGS,
  MERGED_SOURCE_STEMS,
  RETIRED_ALIAS_SLUGS,
  DELETED_PHANTOM_SLUGS,
  SANCTIONED_DELETIONS,
  mergedSlugMessage,
  mergedStemMessage,
  retiredAliasMessage,
  deletedPhantomViolation,
  deletedPhantomMessage,
  forbiddenRootMessage,
  isResearchPath,
  isRegenerablePath,
  classifyMissingTracked,
  findMirror,
  findForbiddenRoot,
  deletionFailMessage,
  checkFilename,
  checkMetaFile,
  checkSignatureStem,
  buildAliasesFile,
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
  renderVerifiedFile,
  renderEvidenceFile,
  renderRobotsTxt,
  harvestReferences,
  renderReferencesFile,
  buildBenchmarksData,
  renderBenchmarksFile,
  ensureRaterGateLine,
} from "./lib/codegen.mjs";
import {
  normName,
  stemToKey,
  labelOf,
  resolveSourceMeta as resolveSourceMetaPure,
  hyphenVersionViolation,
  stemVersionViolation,
  vendorPrefixViolation,
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
  // Rater-key spellings that differ from the vendor-accurate page name must
  // still deep-link to the model page (catalog norm-match fails otherwise).
  "DeepSeek 4 Flash": { label: "DeepSeek V4 Flash", slug: "deepseek-v4-flash" },
  "Gemma 4 31B IT": { slug: "gemma-4-31b" },
  // Rater self-name; same model page (minimax-m3.1-flash).
  "MiniMax M3.1 Flash": { slug: "minimax-m3.1-flash" },
  "Mimo v2.5 Free": { label: "MiMo v2.5 Free", slug: "mimo-v2.5-free" },
  "MiMo 2.6 Flash": { label: "MiMo 2.6 Flash", slug: "mimo-v2.6-free" },
  "big-pickle": { label: "Big Pickle", slug: "big-pickle" },
  // Muse Spark 1.2/1.3 each have ONE model page: Contributor/Free/Standard/Max
  // are tiers of the same weights (cost + Meta data-use differ), never separate
  // folders — tier-suffixed names must not resolve to a "-free"/"-max" folder.
  "Muse Spark 1.3": { slug: "muse-spark-1.3" },
  "Muse Spark 1.2": { slug: "muse-spark-1.2" },
  // Revealed-stealth rater rename (user rule 2026-10-24/26; crouton-alpha
  // revealed 2026-11-09 as Muse Ember, merged 2026-11-10): every
  // Crouton_Alpha.md report was renamed to Muse_Ember.md together with the
  // model's folder (model/crouton-alpha/ -> model/muse-ember/), frozen
  // stealth-era signatures kept as history (SIGNATURE_STEM_EXCEPTIONS +
  // MERGED_SOURCE_STEMS in scripts/lib/validate.mjs). The meta name
  // "Muse Ember 1.0" doesn't norm-match the registry key "Muse Ember", so pin
  // the slug — rater rows deep-link to the revealed model's page; never
  // scaffold crouton-alpha* again.
  "Muse Ember": { slug: "muse-ember" },
  // Revealed-stealth rater merge (user rule 2026-10-26): the stealth-era
  // rater stems "Space Bunny" (= MiniMax M3.1 Flash Free, revealed 2026-10-19),
  // "Cat Jam" (= Beam 1.0) and "Ox Alpha" (= GLM-5.3-Flash) no longer exist —
  // every stealth-era report was merged into the revealed stem's report
  // (MERGED_SOURCE_STEMS in scripts/lib/validate.mjs) or renamed to it, so
  // their overrides were removed. The "MiniMax M3.1 Flash" entry above is the
  // revealed rater's own key (kept); never scaffold
  // space-bunny / space-bunny-alpha / space-bunny-free / cat-jam folders.
  // GPT display labels (official OpenAI style is hyphenated "GPT-5.x", never
  // "GPT 5.x" — openai.com/index/gpt-5-1/, openai.com/index/gpt-4, API IDs
  // like `gpt-5.4-2026-03-05`). Filename stems keep underscores
  // (`GPT_5.6_Terra.md`, never renamed per RULES.md), so registry keys stay
  // stem-derived (spaces) and only labels hyphenate — existing `?source=`
  // deep links keep working. naming.mjs formatGptLabel() applies the same
  // rule by default, so newly discovered GPT models need no entry here
  // unless their slug differs; these entries pin slug + label explicitly.
  "GPT 5.6 Terra": { label: "GPT-5.6 Terra", slug: "gpt-5.6-terra" },
  "GPT 5.6 Luna": { label: "GPT-5.6 Luna", slug: "gpt-5.6-luna" },
  "GPT 6 Sol": { label: "GPT-6 Sol", slug: "gpt-6-sol" },
  "GPT 6 Astra": { label: "GPT-6 Astra", slug: "gpt-6-astra" },
  "GPT 5.6 Sol": { label: "GPT-5.6 Sol", slug: "gpt-5.6-sol" },
  "GPT 5": { label: "GPT-5", slug: "gpt-5" },
  "GPT OSS 120B": { label: "GPT-OSS 120B", slug: "gpt-oss-120b" },
  "GPT 5.5": { label: "GPT-5.5", slug: "gpt-5.5" },
  "GPT 6 Luna": { label: "GPT-6 Luna", slug: "gpt-6-luna" },
  "LongCat 2.5 Preview": { slug: "longcat_2.5_preview" },
  // Beam's rater name ("Beam") doesn't norm-match its model page name
  // ("Beam 1.0"), so it would otherwise fall back to max-awarded and
  // rank far above its own 73.1 overall. Pin the slug so it ranks by its
  // own score like every other tracked rater.
  "Beam": { slug: "beam" },
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
// Deterministic generated-file write: read → compare → write only on change,
// logging a WRITE line. Every codegen emitter goes through this so they all
// share one freshness contract. Returns true when the file was (re)written.
const writeIfChanged = (path, text, label) => {
  let prev = null;
  try {
    prev = readFileSync(path, "utf8");
  } catch {
    // created below
  }
  if (prev === text) return false;
  writeFileSync(path, text);
  log(`  WRITE ${label}${prev === null ? " (created)" : ""}`);
  return true;
};
const parseScores = (md, where) => {
  const r = parseScoresPure(md);
  if (!r.ok) {
    // Near-miss hint: quote the offending line when the label is present but
    // mistyped (e.g. `50/00` for `50/100`) so the fix is a one-line hand
    // edit, not a hunt. Sync never rewrites it — see nearMissLine().
    const near = nearMissLine(md, r.missingLabel);
    fail(
      `${where}: missing "- **${r.missingLabel}: <N>/100" score line` +
        (near !== null
          ? ` (nearest line in file: ${near.slice(0, 160)})`
          : " (no such label anywhere in file — the whole line is absent)"),
    );
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
//   - merged source stem: a merged-and-deleted duplicate findings-file stem
//     (validate.mjs MERGED_SOURCE_STEMS, user-ordered source merge
//     2026-10-08) whose canonical dotted sibling exists on disk;
//   - twin retirement: <.md.excluded> gone but its fresh <.md> sibling exists
//     (tasks/research.md Step 3.3);
//   - relocation: the same relative path exists under a sanctioned mirror tree
//     (user-directed moves, e.g. models_voice/, models_finance/,
//     models_cybersecurity/, models_health/) — content
//     preserved, pending commit;
//   - sanctioned deletion: the exact path is recorded in
//     validate.mjs SANCTIONED_DELETIONS (explicit per-instance user sign-off)
//     and stays deleted.
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
    const quarantined =
      posix.endsWith(".md") && existsSync(`${diskPath}.excluded`);
    const parts = posix.split("/");
    const mirror = findMirror(parts, MIRROR_ROOTS, (m, rest) => existsSync(join(root, m, ...rest)));
    // Merged duplicate stem (user-ordered source merge, 2026-10-08 Laguna,
    // 2026-10-09 Mimo/MiMo): the variant was folded into its canonical sibling
    // and deleted — its removal from disk is sanctioned while the canonical
    // file survives (either .md or .md.excluded, so excluded-only folders stay
    // sanctioned after a rename).
    const stem = (parts[parts.length - 1] ?? "").replace(/\.md(\.excluded)?$/, "");
    const canonicalStem = MERGED_SOURCE_STEMS.get(stem);
    const mergedSource =
      canonicalStem !== undefined &&
      (existsSync(join(root, ...parts.slice(0, -1), `${canonicalStem}.md`)) ||
        existsSync(join(root, ...parts.slice(0, -1), `${canonicalStem}.md.excluded`)));
    // Deleted phantom folder (user-ordered removal 2026-11-03,
    // DELETED_PHANTOM_SLUGS): the whole folder is gone by design; its missing
    // tracked files are sanctioned INFO. A resurrected folder FAILs the slug
    // guard below, never this tripwire.
    const deletedPhantom = parts[0] === "model" && DELETED_PHANTOM_SLUGS.has(parts[1]);
    // Merged-and-deleted duplicate folder (MERGED_MODEL_SLUGS, user-ordered
    // merges): the slug's folder was folded into its canonical sibling and
    // deleted, so its tracked research files leaving HEAD is sanctioned while
    // the deletion commit is still pending — the same shape as the
    // deleted-phantom case above. A resurrected folder FAILs the merged-slug
    // guard elsewhere, never this tripwire.
    const mergedSlugCanonical = parts[0] === "model" ? MERGED_MODEL_SLUGS.get(parts[1]) : undefined;
    const mergedSlugFolder = mergedSlugCanonical !== undefined;
    const sanctionedDeletion = SANCTIONED_DELETIONS.has(posix);
    const verdict = classifyMissingTracked({
      twinRetired,
      quarantined,
      mirror,
      mergedSource,
      mergedSlugFolder,
      deletedPhantom,
      sanctionedDeletion,
    });
    if (verdict === "sanctioned-deletion") {
      log(`  INFO  ${posix}: ${SANCTIONED_DELETIONS.get(posix)}`);
      continue;
    }
    if (verdict === "deleted-phantom") {
      log(`  INFO  ${posix}: deleted phantom folder (model/${parts[1]}/) — sanctioned user-ordered removal 2026-11-03`);
      continue;
    }
    if (verdict === "merged-source") {
      log(`  INFO  ${posix}: merged duplicate stem (canonical ${canonicalStem}.md present) — sanctioned user-ordered source merge`);
      continue;
    }
    if (verdict === "merged-slug-folder") {
      log(`  INFO  ${posix}: merged duplicate folder model/${parts[1]}/ (folded into model/${mergedSlugCanonical}/ and deleted on user order) — sanctioned deletion, pending commit`);
      continue;
    }
    if (verdict === "twin-retired") {
      log(`  INFO  ${posix}: twin retired after re-research (${posix.replace(/\.md\.excluded$/, ".md")} present)`);
      continue;
    }
    if (verdict === "quarantined") {
      log(`  INFO  ${posix}: quarantined to ${posix}.excluded (${posix.replace(/\.md$/, ".md.excluded")} present)`);
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
// (version 3.8 + 27B params), `qwen-3.5-9b` (version 3.5 + 9B params) and
// `qwen-3.5-397b` (version 3.5 + 397B params, Qwen3.5-397B-A17B).
// (Single majors with codename/experimental suffixes like `gpt-6-astra`
// never match the check at all.) Full list: SLUG_VERSION_EXCEPTION in
// scripts/lib/naming.mjs.
// Hyphen-versioned folders are forbidden duplicates, never new models — so
// beyond FAILing, sync must not cement them: no meta.json scaffold, no
// average.md rewrite, no score-index / registry input from these folders.
// (2026-10-05 repeat incident: sync auto-created meta.json + average.md inside
// `model/gemma-4-12b-unified/`, turning a one-file misdrop into a
// look-alike model folder that had to be unpicked by hand.)
const hyphenSlugs = new Set();
for (const slug of slugs) {
  const suggestion = hyphenVersionViolation(slug);
  if (suggestion !== null) {
    hyphenSlugs.add(slug);
    fail(
      `model/${slug}/: version numbers use "." not "-" — use "model/${suggestion}/" instead (e.g. gpt-5-5 → gpt-5.5); merge into the existing dotted folder, never create a hyphen variant`,
    );
  }
}

// Merged + vendor-prefixed duplicate slugs (RULES.md vendor-prefix identity,
// model/README.md merged-slug list): a folder that is a resurrected merged
// slug or `<vendor>-<rest>` with `<rest>` on disk is a forbidden duplicate,
// never a new model — fail loudly with the canonical destination instead of
// cementing the duplicate. Beyond FAILing, sync cements nothing for them:
// no meta.json scaffold, no average.md rewrite, no score-index / registry
// input (same hardening as hyphen variants: a scaffolded stub would turn a
// one-file misdrop into a look-alike model folder).
const mergedSlugs = new Set();
for (const slug of slugs) {
  const canonical = MERGED_MODEL_SLUGS.get(slug);
  if (canonical !== undefined) {
    mergedSlugs.add(slug);
    fail(mergedSlugMessage(slug, canonical));
    continue;
  }
  const stripped = vendorPrefixViolation(slug, slugs);
  if (stripped !== null) {
    mergedSlugs.add(slug);
    fail(
      `model/${slug}/: vendor-prefixed duplicate — use "model/${stripped}/" instead (a leading vendor name is never part of the slug); merge into the canonical folder, never create a vendor-prefixed variant`,
    );
  }
}

// Deleted phantom model folders (user-ordered 2026-11-03, DELETED_PHANTOM_SLUGS
// in validate.mjs): previously parked phantom/duplicate identities whose
// folders were removed from disk and git. Any resurrection — exact slug,
// spelling variant (case, leading vendor prefix, `-` vs `_` version
// separators) or a suffixed derivative of a phantom checkpoint family — is a
// loud FAIL and sync cements nothing for it. Real sibling SKUs
// (gemini-3.1-flash-lite, longcat-2.5-preview, qwen-3.5-plus, glm-5.3-flash,
// gemini-2.5-pro) never match. All five model trees are scanned so the guard
// cannot be dodged by scaffolding the name outside model/. The deletion
// tripwire above sanctions the missing tracked files of the removal itself.
const deletedPhantomSlugs = new Set();
const phantomGuardRoots = [
  modelDir,
  join(root, "models_voice"),
  join(root, "models_finance"),
  join(root, "models_cybersecurity"),
  join(root, "models_health"),
  join(root, "models_legal"),
];
for (const guardRoot of phantomGuardRoots) {
  if (!existsSync(guardRoot)) continue;
  for (const slug of readdirSync(guardRoot)) {
    if (!statSync(join(guardRoot, slug)).isDirectory()) continue;
    const hit = deletedPhantomViolation(slug);
    if (hit !== null) {
      deletedPhantomSlugs.add(slug);
      const rootName = guardRoot.replace(/\\/g, "/").split("/").pop();
      fail(deletedPhantomMessage(slug, hit.canonical, hit.family, rootName));
    }
  }
}

// Retired vendor aliases (RULES.md retired-alias identity,
// RETIRED_ALIAS_SLUGS in scripts/lib/validate.mjs): a slug the vendor lists
// as an alias of a tracked model is never a folder — fail loudly with the
// canonical destination instead of cementing the duplicate. Same hardening
// as merged slugs: no meta.json scaffold, no average.md rewrite, no
// score-index / registry input.
const retiredAliasSlugs = new Set();
for (const slug of slugs) {
  const canonical = RETIRED_ALIAS_SLUGS.get(slug);
  if (canonical !== undefined) {
    retiredAliasSlugs.add(slug);
    fail(retiredAliasMessage(slug, canonical));
  }
}

const updatedAverages = [];
// meta.json stubs still carrying sync's `scaffolded: true` stamp.
const scaffoldStubs = [];
const presentStems = new Set(); // findings filenames (without .md) seen anywhere
// Compact score index for client codegen: slug -> file -> short-keyed scores.
// Accumulated here, emitted as src/data/scores.generated.ts (only when this
// run has zero failures, so invalid data is never cemented).
const scoreIndex = {};
// Newest live findings-file date per slug (`YYYY-MM-DD`, via
// extractReportDate in scripts/lib/parse.mjs). Emitted as
// src/data/verified.generated.ts (only on zero failures) for the site's
// Last-verified display — never parsed from average.md files.
const verifiedIndex = {};
// Agreed benchmark figures per slug (same figure cited by 2+ independent
// files — scripts/lib/benchmarks.mjs). Emitted as
// src/data/evidence.generated.ts (only on zero failures) for the model
// pages' Verified-benchmarks section.
const evidenceIndex = {};
// External reference URLs harvested per slug from the findings files
// (Markdown links + bare https:// URLs, deduped across a slug's files).
// Emitted as src/data/references.generated.ts for the profile citations
// drawer and the /compare/ + /benchmarks/ authority surfaces.
const referencesIndex = {};
// slug -> reference URLs already recorded (normalized), for cross-file dedup.
const refSeen = {};
// slug -> curated display name (meta.name), used to label benchmark
// leaderboards in src/data/benchmarks.generated.ts.
const modelNameBySlug = {};
// SHORT lives in scripts/lib/parse.mjs (imported above).

// ---- rater gate: only reports written by models whose own committed average
// Overall exceeds RATER_GATE count toward another model's average (top-10 cap
// still applies within the eligible set). Qualification reads the on-disk
// average.md files, so the gate is deterministic within a run; models without
// a usable average.md (or without a tracked model page) never qualify as
// raters. The UI caption reads the same value from the registry
// (RATER_GATE, maintained above) — no manual sync needed.
const raterOwn = new Map(); // model slug -> committed average Overall
for (const slug of slugs) {
  if (hyphenSlugs.has(slug)) continue; // forbidden duplicate — never a rater
  if (mergedSlugs.has(slug)) continue; // forbidden duplicate — never a rater
  if (retiredAliasSlugs.has(slug)) continue; // retired alias — never a rater
  if (deletedPhantomSlugs.has(slug)) continue; // deleted phantom — never a rater
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
for (const rDir of [modelDir, join(root, "models_voice"), join(root, "models_finance"), join(root, "models_cybersecurity"), join(root, "models_health"), join(root, "models_legal")]) {
  if (!existsSync(rDir)) continue;
  for (const d of readdirSync(rDir)) {
    if (hyphenVersionViolation(d) !== null) continue; // forbidden duplicate — never the catalog entry
    if (MERGED_MODEL_SLUGS.has(d)) continue; // forbidden duplicate — never the catalog entry
    if (RETIRED_ALIAS_SLUGS.has(d)) continue; // retired alias — never the catalog entry
    if (deletedPhantomViolation(d) !== null) continue; // deleted phantom — never the catalog entry
    if (vendorPrefixViolation(d, slugs) !== null) continue; // forbidden duplicate — never the catalog entry
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
  if (hyphenSlugs.has(slug)) {
    log(`  SKIP  model/${slug}/ (hyphen-version duplicate — merge into the dotted folder first; no files written)`);
    continue;
  }
  if (mergedSlugs.has(slug)) {
    log(`  SKIP  model/${slug}/ (merged/vendor-prefixed duplicate — merge into the canonical folder first; no files written)`);
    continue;
  }
  if (deletedPhantomSlugs.has(slug)) {
    log(`  SKIP  model/${slug}/ (deleted phantom identity — never recreate; see model-aliases.generated.md)`);
    continue;
  }
  const dir = join(modelDir, slug);
  let entries = readdirSync(dir).sort();
  // Forbidden duplicate stems, on-disk gate (RULES.md findings-stem identity):
  // - a merged-and-deleted stem (validate.mjs MERGED_SOURCE_STEMS, e.g.
  //   `Laguna_XS_2_1` folded into `Laguna_XS_2.1` 2026-10-08) that reappears
  //   is a resurrected duplicate that would silently double-count the same
  //   rater in averages;
  // - an underscore-versioned stem (naming.mjs stemVersionViolation, e.g.
  //   `Laguna_XS_2_1` for "Laguna XS 2.1") is a duplicate spelling of its
  //   dotted twin, never a second source.
  // Both FAIL loudly and sync cements nothing for them: no quarantine rename,
  // no parsing, no averaging, no registry input. Merge the newer content into
  // the dotted file, then remove the variant.
  const forbiddenStemFiles = new Set();
  for (const f of entries) {
    if (!f.endsWith(".md") && !f.includes(".md.excluded")) continue;
    if (f === "average.md" || f === "README.md") continue;
    const stem = f.replace(/\.md(\.excluded)?$/, "");
    const canonical = MERGED_SOURCE_STEMS.get(stem);
    if (canonical !== undefined) {
      forbiddenStemFiles.add(f);
      fail(`${mergedStemMessage(stem, canonical)} (found at model/${slug}/${f})`);
      continue;
    }
    const dotted = stemVersionViolation(stem);
    if (dotted !== null) {
      forbiddenStemFiles.add(f);
      fail(
        `model/${slug}/${f}: findings-file stems use "." not "_" between version digits — use "${dotted}.md" instead (e.g. Laguna_XS_2_1 -> Laguna_XS_2.1); merge into the dotted file, never create an underscore variant`,
      );
    }
  }
  // Auto-quarantine (enforces the template's SELF-EXCLUSION rule even when the
  // reporting agent forgot it): a findings file whose "Raw benchmarks found"
  // section holds 8+ "no verified public score found" rows and zero measured
  // (bold numeric) values is evidence-free — rename to *.md.excluded on the
  // spot so it can never poison the average. Any single real number keeps the file.
  for (const f of entries.filter(
    (f) =>
      f.endsWith(".md") &&
      !f.includes(".excluded") &&
      f !== "average.md" &&
      f !== "README.md" &&
      !forbiddenStemFiles.has(f),
  ).sort()) {
    const content = readFileSync(join(dir, f), "utf8");
    // Criteria live in scripts/lib/quarantine.mjs (tested); sync only renames.
    const reason = quarantineReason(content);
    if (reason) {
      renameSync(join(dir, f), join(dir, `${f}.excluded`));
      log(`  QUAR  model/${slug}/${f} -> ${f}.excluded (${reason})`);
    }
  }
  // Quarantine renamed *.md -> *.md.excluded above — refresh the snapshot so
  // the SKIP log and `files` below never reference a path that no longer exists
  // (a stale pre-rename listing made the parse step die with ENOENT, e.g.
  // model/step-5-preview/Claude_Opus_4.6.md on 2026-10-08).
  entries = readdirSync(dir).sort();
  // Self-excluded findings (agent found no verified benchmarks — see
  // model-report-TEMPLATE.md): never parsed, never averaged, never registered.
  // Logged so exclusions stay visible instead of silently vanishing.
  for (const f of entries.filter((f) => f.includes(".excluded") && !forbiddenStemFiles.has(f))) {
    log(`  SKIP  model/${slug}/${f} (self-excluded: no verified benchmarks)`);
  }
  const files = entries
    .filter(
      (f) =>
        f.endsWith(".md") &&
        !f.includes(".excluded") &&
        f !== "average.md" &&
        f !== "README.md" &&
        !forbiddenStemFiles.has(f),
    )
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
    // so the stub stays visible on every run until curated.
    meta = buildScaffoldMeta(slug);
    scaffoldedNow = true;
    writeFileSync(metaPath, JSON.stringify(meta, null, 2));
    log(`  AUTO  model/${slug}/meta.json (auto-scaffolded missing file)`);
    log(`  WARN  model/${slug}/meta.json: "name" is a slug guess ("${meta.name}") — set the official vendor display name and verified facts`);
  }
  // Scaffolded-stub tracker: while `scaffolded: true` is
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
  // Curated display name for benchmark leaderboards (benchmarks.generated.ts).
  modelNameBySlug[slug] = meta.name;

  // Stem-vs-signature identity tripwire (validate.mjs checkSignatureStem,
  // tested): a findings file whose `Provided by: **<name>**` signature names
  // a model that relates to neither the filename stem nor the folder subject
  // (nor a grandfathered spelling variant) is the 2026-10 STEM/slug
  // conflation pattern — an agent wrote files named after the model it was
  // researching instead of its own reporter STEM. The signature is the only
  // in-file evidence of the true reporter, so FAIL loudly and never cement.
  // Files without a usable bold signature (legacy) are skipped, and the
  // Flint-convention raters (signed with the subject's name) pass via the
  // subject match.
  for (const f of entries.filter(
    (f) =>
      (f.endsWith(".md") || f.includes(".md.excluded")) &&
      f !== "average.md" &&
      f !== "README.md" &&
      !forbiddenStemFiles.has(f),
  )) {
    const stem = f.replace(/\.md(\.excluded)?$/, "");
    const signature = extractSignatureName(readFileSync(join(dir, f), "utf8"));
    const msg = checkSignatureStem({
      stem,
      signature,
      acceptNames: [stem, stemToKey(stem), resolveSourceMeta(stemToKey(stem)).label],
      subjectNames: [meta.name, slug, ...(Array.isArray(meta.aliases) ? meta.aliases : [])],
      where: `model/${slug}/${f}`,
    });
    if (msg !== null) fail(msg);
  }

  const perFile = [];
  let skipAverage = false;
  const evidenceRows = [];
  for (const f of files) {
    const content = readFileSync(join(dir, f), "utf8");
    const reportDate = extractReportDate(content);
    if (reportDate !== null && (verifiedIndex[slug] === undefined || reportDate > verifiedIndex[slug])) {
      verifiedIndex[slug] = reportDate;
    }
    // Harvest external reference URLs (dedup across this slug's files),
    // attributing each new URL to the file stem it was found in.
    const stem = f.replace(/\.md$/, "");
    const seen = (refSeen[slug] ||= new Set());
    const bucket = (referencesIndex[slug] ||= []);
    for (const ref of harvestReferences(content)) {
      if (seen.has(ref.url)) continue;
      seen.add(ref.url);
      bucket.push({ url: ref.url, title: ref.title, domain: ref.domain, sourceStem: stem });
    }
    evidenceRows.push({ stem: f.replace(/\.md$/, ""), rows: parseBenchmarkRows(content) });
    const scores = parseScores(content, `model/${slug}/${f}`);
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
  const agreedEvidence = agreeEvidence(evidenceRows);
  if (agreedEvidence.length > 0) {
    evidenceIndex[slug] = agreedEvidence;
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

// Reconcile labels + inline slugs for all registered entries (idempotent),
// prune grandfathered virtual-view entries, and — on a zero-failure run —
// prune stale keys (registered with no live findings file anywhere; they
// re-register automatically if the file returns). A failing run passes no
// live-stem set so registry changes are never cemented alongside failures.
{
  const reconciled = reconcileRegistry(
    sourcesTs,
    entryForStem,
    failures === 0 ? presentStems : undefined,
  );
  if (reconciled !== sourcesTs) {
    sourcesTs = reconciled;
    writeFileSync(sourcesTsPath, sourcesTs);
    log("  WRITE src/data/sources.generated.ts (labels/slugs reconciled, stale keys pruned)");
  }
}

// Managed RATER_GATE line: the UI caption imports it from the registry, so
// the gate value has exactly one source (scripts/lib/parse.mjs) — no manual
// sync with CompareSection.tsx possible anymore.
{
  const { changed, text } = ensureRaterGateLine(sourcesTs, RATER_GATE);
  if (changed) {
    sourcesTs = text;
    writeFileSync(sourcesTsPath, sourcesTs);
    log(`  WRITE src/data/sources.generated.ts (RATER_GATE = ${RATER_GATE})`);
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
// Every emitter below runs through writeIfChanged (read → compare → write),
// so they share one freshness contract. All are regenerable build inputs and
// are rewritten only on a zero-failure run.
if (failures === 0) {
  // Numbers-only scores for the client bundle (serializer in codegen.mjs).
  writeIfChanged(
    join(root, "src", "data", "scores.generated.ts"),
    renderScoresFile(scoreIndex),
    `src/data/scores.generated.ts (${Object.keys(scoreIndex).length} slugs, ${Object.values(scoreIndex).reduce((a, f) => a + Object.keys(f).length, 0)} files)`,
  );
  // Last-verified dates for the site: newest live findings-file date per slug.
  writeIfChanged(
    join(root, "src", "data", "verified.generated.ts"),
    renderVerifiedFile(verifiedIndex),
    `src/data/verified.generated.ts (${Object.keys(verifiedIndex).length} slugs)`,
  );
  // Agreed benchmark figures (same figure cited by 2+ independent files).
  writeIfChanged(
    join(root, "src", "data", "evidence.generated.ts"),
    renderEvidenceFile(evidenceIndex),
    `src/data/evidence.generated.ts (${Object.keys(evidenceIndex).length} slugs)`,
  );
  // External reference URLs harvested from findings files (per-slug, deduped).
  writeIfChanged(
    join(root, "src", "data", "references.generated.ts"),
    renderReferencesFile(referencesIndex),
    `src/data/references.generated.ts (${Object.keys(referencesIndex).length} slugs, ${Object.values(referencesIndex).reduce((a, r) => a + r.length, 0)} urls)`,
  );
  // Per-benchmark leaderboards grouped from the agreed-evidence index.
  const benchmarksData = buildBenchmarksData(evidenceIndex, (slug) => modelNameBySlug[slug]);
  writeIfChanged(
    join(root, "src", "data", "benchmarks.generated.ts"),
    renderBenchmarksFile(benchmarksData),
    `src/data/benchmarks.generated.ts (${Object.keys(benchmarksData).length} benchmarks)`,
  );
  // Research queue for AI agents: pre-sorted `<Overall> <slug>` lines.
  writeIfChanged(
    join(root, "model-queue.md"),
    buildQueueFile(scoreIndex),
    `model-queue.md (${Object.keys(scoreIndex).length} models, Overall desc)`,
  );
  // robots.txt Sitemap must be absolute: same SITE_ORIGIN knob as the
  // static-adapter origin (adapters/static/vite.config.ts).
  const origin = process.env.SITE_ORIGIN ?? "http://localhost:4173";
  writeIfChanged(
    join(root, "public", "robots.txt"),
    renderRobotsTxt(origin),
    `public/robots.txt (Sitemap: ${origin}/sitemap.xml)`,
  );
  // Forbidden/redirected identity roster for research agents.
  const aliasesNext = buildAliasesFile();
  writeIfChanged(
    join(root, "model-aliases.generated.md"),
    aliasesNext,
    `model-aliases.generated.md (identity roster: ${aliasesNext.split("\n").filter((l) => l.startsWith("- \`")).length} entries)`,
  );
} else {
  log("  SKIP  src/data/scores.generated.ts not rewritten (failures present — fix and re-run)");
}

if (scaffoldStubs.length > 0) {
  log(`  SCAF  ${scaffoldStubs.length} scaffolded meta.json stub(s) pending curation: ${scaffoldStubs.join(", ")}`);
}
console.log(`sync-data: done. averages rewritten: ${updatedAverages.length}${updatedAverages.length ? ` (${updatedAverages.join(", ")})` : ""}; new sources: ${missing.length}; failures: ${failures}; scaffolded stubs: ${scaffoldStubs.length}`);
process.exitCode = failures > 0 ? 1 : 0;
