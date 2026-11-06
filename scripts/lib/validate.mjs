// Pure validation helpers for modelcomp sync (scripts/sync-data.mjs).
// Zero dependencies. Covered by validate.test.mjs.
//
// Permanence tripwire (RULES.md is ultimate, precedence #1): any git-tracked
// findings file missing from disk is a forbidden deletion — unless it
// survives somewhere sanctioned. Everything here is side-effect free: sync
// does the fs/git calls and logging, these functions lock the *decisions*.

import { FILENAME_RE, META_REQUIRED } from "./parse.mjs";
import {
  missingMetaFields,
  metaNameHasUnderscore,
  normName,
  normalizeSlug,
  VENDOR_PREFIXES,
} from "./naming.mjs";
import { RETIRED_SLUGS } from "./average.mjs";

/** Sanctioned mirror trees for user-directed relocations (e.g. voice models). */
export const MIRROR_ROOTS = ["models_voice", "models_finance", "models_cybersecurity", "models_health"];

/**
 * Forbidden duplicate roots: retired names that must never be recreated
 * (e.g. `voicemodels/` is the pre-2026-09-28 name of `models_voice/`).
 * Sync FAILs loudly while one exists on disk so the duplicate can never be
 * cemented silently — merge into the canonical tree, then remove it.
 */
export const FORBIDDEN_ROOTS = ["voicemodels"];

/**
 * Merged-and-deleted duplicate slugs (user-ordered merges). Each key was
 * folded into an existing canonical folder and deleted because it was a
 * second slug for the *same* model. They must never come back: a resurrect
 * (git restore / re-scaffold from a stale queue) gets a loud FAIL instead of
 * quietly cementing the duplicate again.
 */
export const MERGED_MODEL_SLUGS = new Map([
  ["google-gemini-2.5-flash-lite", "gemini-2.5-flash-lite"],
  ["glm-5.1-coding", "glm-5.1"],
  ["embe-1", "ember-1"],
  // xAI reasoning-alias merges (RULES.md serving-profile identity / alias-family
  // entries in model-aliases.generated.md,
  // 2026-10-20): docs.x.ai lists grok-4-fast as an alias of grok-4-fast-reasoning
  // and grok-4-1-fast of grok-4-1-fast-reasoning — one checkpoint, same 2M
  // window, same $0.20/$0.50; the scaffolded -reasoning stubs were folded into
  // the tracked -fast folders on user order and deleted.
  ["grok-4-fast-reasoning", "grok-4-fast"],
  ["grok-4.1-fast-reasoning", "grok-4.1-fast"],
  // LongCat duplicate-slug merge (RULES.md slug identity, user-ordered
  // 2026-10-23): `longcat_2.5_preview` (underscores) and `longcat-2.5-preview`
  // (canonical dotted slug) both declared id opencode/longcat-2.5-preview-free —
  // one model. Underscore-only findings were folded into the dotted folder
  // (newer-content-wins per stem) and the underscore folder deleted on user
  // order.
  ["longcat_2.5_preview", "longcat-2.5-preview"],
  // Revealed-stealth merges (RULES.md revealed-stealth identity, user rule
  // 2026-10-24: a revealed stealth alias MERGES into the revealed model's
  // canonical folder — never parked): `space-bunny` (Space Bunny / Alpha /
  // Free) was revealed 2026-10-19 as MiniMax M3.1 Flash (Free) — unique
  // findings moved into the tracked model/minimax-m3.1-flash-preview/
  // (revealed-folder-wins on colliding stems), stealth slug deleted; same for
  // `cat-jam` (revealed as Reflection Beam 1.0) into model/beam/. The revealed
  // models' meta.json `aliases` carry the stealth names so search by the old
  // name still resolves (RULES.md § Revealed-stealth identity).
  ["space-bunny", "minimax-m3.1-flash-preview"],
  ["cat-jam", "beam"],
  // Muse Wonder product-name duplicate (RULES.md family-shorthand identity,
  // user-ordered merge 2026-11-01): "Muse Wonder" is Meta's product name; the
  // only vendor ID is the API SKU `muse-wonder-1.0` (dev.meta.ai's Muse Wonder
  // page lists exactly one pay-as-you-go SKU — muse-wonder-1.0; OpenRouter
  // serves the same model as meta/muse-wonder; same 1M window, same $4/$20).
  // The genuinely distinct Muse Wonder Full (muse-wonder-full-1.0,
  // subscription-only, never on the API) keeps its own folder
  // model/muse-wonder-full/. Colliding findings folded newest-report-wins
  // into model/muse-wonder-1.0/ and the duplicate folder deleted on user
  // order; searching "Muse Wonder" resolves via the canonical meta aliases.
  ["muse-wonder", "muse-wonder-1.0"],
  // GLM-5.3-Flash-X / GLM-5.3-FlashX spelling duplicate (user-ordered merge
  // 2026-11-02): Z.ai's canonical API code is `glm-5.3-flashx` (docs.z.ai
  // "GLM-5.3-Flash/FlashX" page; OpenRouter `z-ai/glm-5.3-flashx`). The
  // hyphenated `glm-5.3-flash-x` is the OpenCode Zen route spelling of the
  // same 320B/18B FlashX serving tier — same weights, same price, same 1M
  // window. `glm-5.3-flash-x` is the forbidden hyphenated variant; all
  // research belongs in model/glm-5.3-flashx/.
  ["glm-5.3-flash-x", "glm-5.3-flashx"],
  // Scaffolded-stub hyphen/underscore spelling duplicates (RULES.md slug
  // identity, user-ordered merges 2026-11-06): a research run filed fresh
  // reports into the hyphenated names `north-mini-code` /
  // `llama-3.2-vision-instruct` instead of the already-tracked canonical
  // underscore folders `north_mini_code` / `llama_3.2_vision_instruct`, which
  // already carried curated meta.json + full rater coverage. sync
  // auto-scaffolded stub meta for the hyphen names, double-counting each
  // model in the queue. Colliding raters folded newest-report-wins and the
  // unique Nemotron report moved into the canonical underscore folders; the
  // hyphen stub folders were deleted on user order — never recreate them.
  ["north-mini-code", "north_mini_code"],
  ["llama-3.2-vision-instruct", "llama_3.2_vision_instruct"],
]);

/** Exact FAIL text for a resurrected merged slug present on disk. */
export function mergedSlugMessage(slug, canonical) {
  return (
    `model/${slug}/: this slug is a duplicate that was merged into model/${canonical}/ and deleted on user order ` +
    `— never recreate it; research/report under model/${canonical}/ instead`
  );
}

/**
 * Retired vendor aliases (RULES.md retired-alias identity). Each key is a
 * slug the vendor publishes as an alias of a tracked model
 * (`grok-code-fast-1` → `grok-build-0.1` per docs.x.ai, 2026-10-12) that must
 * never become a folder: the canonical folder already covers it, and the
 * trackers may still list the alias separately (BenchLM keeps a
 * `grok-code-fast-1` entry in its own family with its own numbers — lineage
 * data, not a second model). Unlike MERGED_MODEL_SLUGS these were never
 * folders, so resurrection means fresh scaffolding, not restore — sync FAILs
 * the same way and cements nothing for them.
 */
export const RETIRED_ALIAS_SLUGS = new Map([
  ["grok-code-fast-1", "grok-build-0.1"],
]);

/** Exact FAIL text for a scaffolded retired-alias slug present on disk. */
export function retiredAliasMessage(slug, canonical) {
  return (
    `model/${slug}/: this slug is a retired vendor alias of model/${canonical}/ — never scaffold it as a folder; ` +
    `research/report under model/${canonical}/ instead`
  );
}

/**
 * Deleted phantom model folders (user-ordered 2026-11-03). These eleven
 * folders had been parked as phantom/duplicate identities; on explicit user
 * order they were removed from disk and git (git history keeps the bytes, but
 * they must NEVER be restored or re-scaffolded). Values are the canonical
 * folder for names that resolve to a real model; undefined for pure phantoms
 * with no canonical home.
 */
export const DELETED_PHANTOM_SLUGS = new Map([
  ["glm-5.3-free", "glm-5.3"],
  ["gemini-2.5", "gemini-2.5-pro"],
  ["qwen-3.5", undefined],
  ["kimi-k2.7-code-highspeed", "kimi-k2.7-code"],
  ["gemini-3.1-flash", "gemini-3.1-flash-lite"],
  ["longcat-2.5", "longcat-2.5-preview"],
  ["claude-opus-4.4", undefined],
  ["claude-opus-3.7", undefined],
  ["claude-sonnet-5.4", undefined],
  ["qwen-3.8-325b", undefined],
  ["ox_alpha", "glm-5.3-flash"],
  ["omi-alpha", undefined],
]);

/**
 * Normalized comparison key for deleted-phantom slugs: lowercase, whitespace/
 * underscore -> hyphen, leading vendor prefix stripped, version hyphens folded
 * to dots (param sizes stay hyphenated via normalizeSlug). Catches
 * `claude-sonnet-5-4`, `Claude_Sonnet_5.4`, `anthropic-claude-sonnet-5.4`, ...
 */
export function phantomSlugKey(slug) {
  let s = slug.trim().toLowerCase().replace(/[\s_]+/g, "-");
  for (const vendor of VENDOR_PREFIXES) {
    if (s.startsWith(`${vendor}-`)) {
      s = s.slice(vendor.length + 1);
      break;
    }
  }
  return normalizeSlug(s);
}

/** Precomputed normalized keys -> original slug + canonical target. */
const DELETED_PHANTOM_KEYS = new Map(
  [...DELETED_PHANTOM_SLUGS].map(([slug, canonical]) => [phantomSlugKey(slug), { slug, canonical }]),
);

/**
 * Phantom checkpoint families where ANY suffix is also forbidden (e.g.
 * `claude-sonnet-5.4-mini`). Only families with no real sibling whose name
 * begins with the phantom base belong here — `gemini-3.1-flash` is exact-only
 * because `gemini-3.1-flash-lite` is real, and `qwen-3.5` / `longcat-2.5` /
 * `gemini-2.5` are exact-only because their member SKUs are real.
 */
export const PHANTOM_SLUG_FAMILIES = [
  {
    pattern: /^claude-sonnet-5\.4(?:-|$)/,
    note: "Anthropic Sonnet lineage is 3.5/3.7/4/4.5/4.6/5/5.5 — no Sonnet 5.4 checkpoint ever existed",
  },
  {
    pattern: /^claude-opus-4\.4(?:-|$)/,
    note: "Anthropic Opus lineage has no 4.4 checkpoint",
  },
  {
    pattern: /^claude-opus-3\.7(?:-|$)/,
    note: "Anthropic Opus lineage has no 3.7 checkpoint (3.7 exists only as Sonnet)",
  },
  {
    pattern: /^qwen-3\.8-325b(?:-|$)/,
    note: "Qwen3.8 ships no 325B variant",
  },
];

/**
 * Deleted-phantom violation for one on-disk slug. Returns
 * `{ slug, canonical, family? }` when the slug is (a normalized spelling of)
 * a deleted phantom, or a suffixed derivative of a phantom checkpoint family.
 * Returns null for a legitimate model — real sibling SKUs such as
 * gemini-3.1-flash-lite / longcat-2.5-preview / qwen-3.5-plus never match.
 */
export function deletedPhantomViolation(slug) {
  const key = phantomSlugKey(slug);
  const exact = DELETED_PHANTOM_KEYS.get(key);
  if (exact !== undefined) return { ...exact };
  for (const fam of PHANTOM_SLUG_FAMILIES) {
    if (fam.pattern.test(key)) return { slug: key, canonical: undefined, family: fam.note };
  }
  return null;
}

/** Exact FAIL text for a resurrected deleted-phantom slug. */
export function deletedPhantomMessage(slug, canonical, family, root = "model") {
  const target = canonical ? ` — research belongs in model/${canonical}/` : "";
  const why = family ? ` (${family})` : "";
  return (
    `${root}/${slug}/: deleted phantom model identity${why} — removed from disk and git on user order 2026-11-03, ` +
    `never recreate or restore it${target}; canonical roster: model-aliases.generated.md`
  );
}

/**
 * Merged-and-deleted duplicate findings-file stems (user-ordered merges).
 * One rater filed under two filename spellings (`Laguna_XS_2_1` — version
 * separator written as `_` — vs `Laguna_XS_2.1`) was folded into the canonical
 * file and the variant removed (2026-10-08). Same for the Xiaomi rater filed
 * as `Mimo_v2.6_Flash` (`_v2.6` + lowercase) vs `MiMo_2.6_Flash` (canonical,
 * merged 2026-10-09 across 141 + 6 excluded files). The 2026-10-26
 * revealed-stealth rater merge folds each stealth-era rater stem into the
 * revealed model's stem wherever both rated the same subject (newest report
 * wins; the revealed-stem file was newer in every collision): `Space_Bunny` ->
 * `MiniMax_M3.1_Flash` (159 + 6 excluded collisions, 10 renames where no twin
 * existed), `Cat_Jam` -> `Beam` (75 + 14 excluded), `Ox_Alpha` ->
 * `GLM_5.3_Flash` (2 + 2 excluded). The 2026-11-02 folder-slug spelling
 * merge folds the Xing 4.0 rater's lowercase variant `Xing_4.0_29b_a4b`
 * into the dotted canonical `Xing_4.0.29B_A4B` (87 + 90 excluded variant
 * files deleted, newest report wins). Variants never come back: a resurrect
 * would silently double-count the same rater (and fake 2-report evidence
 * agreement), so sync FAILs the stem and writes nothing for it (never
 * registered, parsed, or averaged).
 */
export const MERGED_SOURCE_STEMS = new Map([
  ["Laguna_XS_2_1", "Laguna_XS_2.1"],
  ["Mimo_v2.6_Flash", "MiMo_2.6_Flash"],
  ["Space_Bunny", "MiniMax_M3.1_Flash"],
  ["Cat_Jam", "Beam"],
  ["Ox_Alpha", "GLM_5.3_Flash"],
  ["Xing_4.0_29b_a4b", "Xing_4.0.29B_A4B"],
]);

/**
 * Exact research paths deleted on explicit user order (per-instance sign-off,
 * same mechanism as MERGED_SOURCE_STEMS / DELETED_PHANTOM_SLUGS). They are
 * still tracked in HEAD until the deletion commit lands; the permanence
 * tripwire compares worktree against HEAD, so without this list every sync run
 * during testing would FAIL. Once committed they leave HEAD and the entries
 * become inert — they remain as the recorded sign-off.
 */
export const SANCTIONED_DELETIONS = new Map([
  [
    "model/muse-spark-1.3/Xing_4.0.29B_A4B.md",
    "user-ordered deletion 2026-11-05 — keep deleted, never restore",
  ],
  [
    "model/muse-spark-1.3/Xing_4.0.29B_A4B.md.excluded",
    "user-ordered deletion 2026-11-05 — keep deleted, never restore",
  ],
  [
    "model/claude-sonnet-5.5/Xing_4.0.29B_A4B.md",
    "user-ordered deletion 2026-11-05 — invalid/irrelevant rater report, keep deleted, never restore",
  ],
  [
    "model/claude-sonnet-5.5/Xing_4.0.29B_A4B.md.excluded",
    "user-ordered deletion 2026-11-05 — invalid/irrelevant rater report, keep deleted, never restore",
  ],
]);

/** Exact FAIL text for a resurrected merged findings-file stem. */
export function mergedStemMessage(stem, canonical) {
  return (
    `findings file "${stem}.md": duplicate spelling that was merged into "${canonical}.md" and deleted on user order ` +
    `— never recreate it; write "${canonical}.md" instead`
  );
}

/** Exact FAIL text for a forbidden duplicate root present on disk. */
export function forbiddenRootMessage(root) {
  const canonical = root === "voicemodels" ? "models_voice" : "the canonical tree";
  return (
    `${root}/ exists — retired duplicate name, never recreate it; ` +
    `merge its contents into matching ${canonical}/<slug>/ folders, remove ${root}/, then re-run`
  );
}

/**
 * Research-file filter: only *.md / *.md.excluded paths participate.
 * (Verbatim sync semantics: skip when NEITHER matches.)
 */
export function isResearchPath(posix) {
  return posix.endsWith(".md") || posix.includes(".md.excluded");
}

/** Regenerable / non-research files never trip the wire. */
export function isRegenerablePath(posix) {
  return /(^|\/)average\.md$/.test(posix) || /(^|\/)README\.md$/.test(posix);
}

/**
 * Classify a tracked research file that is missing from disk.
 * Inputs are precomputed by sync (fs already consulted):
 * - mergedSource: it is a merged duplicate stem whose canonical sibling exists
 *   (user-ordered source merge, 2026-10-08);
 * - mergedSlugFolder: it lived under a folder whose slug is a merged-and-deleted
 *   duplicate (MERGED_MODEL_SLUGS) — the folder was folded into its canonical
 *   sibling and deleted on user order, so its tracked files leaving HEAD is
 *   sanctioned while the deletion commit is pending;
 * - twinRetired: its fresh <.md> sibling exists (own-twin re-research);
 * - quarantined: its <.md.excluded> sibling exists (quarantined / renamed);
 * - mirror: name of the sanctioned mirror tree holding the same path (if any);
 * - deletedPhantom: the path lived under a deleted phantom folder
 *   (DELETED_PHANTOM_SLUGS, user-ordered removal 2026-11-03) whose removal is
 *   sanctioned — the folder must stay gone, and a resurrect FAILs elsewhere;
 * - sanctionedDeletion: exact path recorded in SANCTIONED_DELETIONS (explicit
 *   per-instance user sign-off, kept deleted).
 * Returns "merged-source" | "merged-slug-folder" | "twin-retired" |
 * "quarantined" | "relocated" | "deleted-phantom" | "sanctioned-deletion" |
 * "deleted" (=> FAIL).
 */
export function classifyMissingTracked({
  twinRetired,
  quarantined,
  mirror,
  mergedSource,
  mergedSlugFolder,
  deletedPhantom,
  sanctionedDeletion,
}) {
  if (sanctionedDeletion) return "sanctioned-deletion";
  if (deletedPhantom) return "deleted-phantom";
  if (mergedSource) return "merged-source";
  if (mergedSlugFolder) return "merged-slug-folder";
  if (twinRetired) return "twin-retired";
  if (quarantined) return "quarantined";
  if (mirror !== undefined) return "relocated";
  return "deleted";
}

/** Find the mirror tree holding a relocated path (or undefined). */
export function findMirror(parts, mirrorRoots, existsAt) {
  if (parts[0] !== "model") return undefined;
  return mirrorRoots.find((m) => existsAt(m, parts.slice(1)));
}

/**
 * First forbidden duplicate root present on disk (or undefined).
 * `existsAt` receives (repoRoot, name) so the join lives in exactly one
 * place — a shadowed loop variable here once produced "root/root" paths
 * that could never exist, silencing the whole tripwire (B1).
 */
export function findForbiddenRoot(root, forbiddenRoots, existsAt) {
  return forbiddenRoots.find((f) => existsAt(root, f));
}

/** Exact FAIL text for a forbidden deletion (locked: it tells how to restore). */
export function deletionFailMessage(posix) {
  return (
    `${posix}: tracked in git HEAD but missing from disk — research files are permanent (RULES.md); ` +
    `restore with \`git restore --source=HEAD -- "${posix}"\`, never delete`
  );
}

/** Filename hygiene: letters, digits, underscore, dots only. Null when fine. */
export function checkFilename(slug, f) {
  if (!FILENAME_RE.test(f)) {
    return `model/${slug}/${f}: filename must match ${FILENAME_RE} (letters, digits, underscore only)`;
  }
  return null;
}

/**
 * Card uniformity caps (model/README.md meta.json schema). Card/list fields
 * render verbatim in ModelCards, so length discipline keeps rows comparable.
 */
export const META_SHORT_MAX = 240;
export const META_MODALITIES_MAX = 80;
export const META_PRICING_MAX = 120;
export const META_CONTEXT_MAX = 100;

/** Unknown-spec hatch: unannounced models skip the modalities shape check. */
export const MODALITIES_UNKNOWN_RE = /^(not announced|unverified|not disclosed|unknown|no verified)\b/i;

/** Capability notes belong in `short`, never in `modalities`. */
export const MODALITIES_NOTE_RE =
  /reasoning|thinking|tool[\s-]*calls?|tool[\s-]*calling|function[\s-]*calls?|function[\s-]*calling|json[\s-]*mode|structured|temperature|effort/i;

/**
 * Modalities diagnostics for one meta.json value. Pure + tested; empty =
 * passes. Shape rule ("<inputs> in ... out" naming text) plus the
 * capability-note ban plus the length cap.
 */
export function modalityProblems(modalities) {
  const problems = [];
  if (MODALITIES_UNKNOWN_RE.test(modalities)) return problems;
  if (!/text/i.test(modalities)) problems.push('must name text input/output (e.g. "Text in/out")');
  if (!/\bin\b/i.test(modalities) || !/\bout\b/i.test(modalities)) {
    problems.push('must have "<inputs> in ... out" shape');
  }
  const note = modalities.match(MODALITIES_NOTE_RE);
  if (note) problems.push(`capability note "${note[0]}" belongs in "short", not "modalities"`);
  if (modalities.length > META_MODALITIES_MAX) {
    problems.push(`is ${modalities.length} chars (max ${META_MODALITIES_MAX}) — inputs/outputs only`);
  }
  return problems;
}

/**
 * Full meta.json validation for one model folder. Returns FAIL messages in
 * sync order: missing/empty required fields first, then the display-name
 * gate (underscores are slug artifacts, never valid in a vendor name).
 */
export function checkMetaFile(slug, meta, required = META_REQUIRED) {
  const messages = [];
  for (const k of missingMetaFields(meta, required)) {
    messages.push(`model/${slug}/meta.json: missing required field "${k}"`);
  }
  if (metaNameHasUnderscore(meta.name)) {
    messages.push(
      `model/${slug}/meta.json: "name" must use spaces, never underscores (got "${meta.name}") — set the official vendor display name`,
    );
  }
  if (typeof meta.name === "string" && (/^GPT \d/.test(meta.name) || /^GPT OSS(?=\s|$)/.test(meta.name))) {
    messages.push(
      `model/${slug}/meta.json: "name" must hyphenate the GPT prefix (official OpenAI style "GPT-5.6 Terra" / "GPT-OSS 120B", never with a space — got "${meta.name}")`,
    );
  }
  if (typeof meta.short === "string" && meta.short.length > META_SHORT_MAX) {
    messages.push(
      `model/${slug}/meta.json: "short" is ${meta.short.length} chars (max ${META_SHORT_MAX}) — trim to 1–2 sentences for card uniformity`,
    );
  }
  if (typeof meta.modalities === "string" && meta.modalities.length > 0) {
    for (const p of modalityProblems(meta.modalities)) {
      messages.push(`model/${slug}/meta.json: "modalities" ${p}`);
    }
  }
  if (typeof meta.contextWindow === "string" && meta.contextWindow.length > META_CONTEXT_MAX) {
    messages.push(
      `model/${slug}/meta.json: "contextWindow" is ${meta.contextWindow.length} chars (max ${META_CONTEXT_MAX}) — use "<total> total; <out> max out" (templates in model/README.md)`,
    );
  }
  if (typeof meta.pricingNote === "string" && meta.pricingNote.length > META_PRICING_MAX) {
    messages.push(
      `model/${slug}/meta.json: "pricingNote" is ${meta.pricingNote.length} chars (max ${META_PRICING_MAX}) — one-line summary; move detail into "pricingTiers"`,
    );
  }
  if (Array.isArray(meta.pricingTiers)) {
    meta.pricingTiers.forEach((t, i) => {
      if (typeof t === "string" && t.length > META_PRICING_MAX) {
        messages.push(
          `model/${slug}/meta.json: "pricingTiers[${i}]" is ${t.length} chars (max ${META_PRICING_MAX}) — one line per tier`,
        );
      }
    });
  }
  if (meta.pricingLinks !== undefined) {
    if (!Array.isArray(meta.pricingLinks)) {
      messages.push(`model/${slug}/meta.json: "pricingLinks" must be an array (generated by scripts/enrich-models.mjs)`);
    } else {
      const tierCount = Array.isArray(meta.pricingTiers) && meta.pricingTiers.length
        ? meta.pricingTiers.length
        : meta.pricingNote
          ? 1
          : 0;
      if (meta.pricingLinks.length !== tierCount) {
        messages.push(
          `model/${slug}/meta.json: "pricingLinks" has ${meta.pricingLinks.length} entries but ${tierCount} pricing lines — must align 1:1 with pricingTiers (or [pricingNote])`,
        );
      }
      meta.pricingLinks.forEach((u, i) => {
        if (u !== null && (typeof u !== "string" || !/^https?:\/\//.test(u))) {
          messages.push(
            `model/${slug}/meta.json: "pricingLinks[${i}]" must be an https URL or null (got ${JSON.stringify(u)})`,
          );
        }
      });
    }
  }
  return messages;
}

// ---------------------------------------------------------------------------
// Stem-vs-signature identity tripwire (2026-10 STEM/slug conflation incident
// prevention, layer 3). An agent once read `model/<slug>/<STEM>.md` as
// `model/<slug>/<slug>.md` and wrote files named after the model it was
// researching instead of its own reporter STEM — the signature line
// (`Provided by: **<Display> (<id>)** — <date>`, honest about the author)
// is the only in-file evidence of the true reporter, so sync FAILs any
// findings file whose signature names a model that relates to neither the
// filename stem nor the folder subject (nor a known spelling variant).
// ---------------------------------------------------------------------------

/**
 * Grandfathered signature-display variants per stem (calibrated against the
 * full committed dataset 2026-10-23 — every entry is a real legacy file
 * convention, not a free pass: the incident pattern names a FOREIGN model
 * and matches none of these). Raw display strings; folded at compare time.
 */
export const SIGNATURE_STEM_EXCEPTIONS = new Map([
  // The "Flint" rater signs with the folder subject's name — accepted
  // separately via the subject match, not listed here.
  ["MiMo_2.6_Flash", ["Mimo v2.6 Flash", "MiMo V2.6 Flash"]],
  // GLM_4.5_Flash.md legacy files signed "Gemini 4.5 Flash (openai/gpt-4-turbo)".
  ["GLM_4.5_Flash", ["Gemini 4.5 Flash"]],
  ["GPT_5", ["Research Agent"]],
  ["GPT_6_Luna", ["GPT 6 Astra"]],
  ["GPT_OSS_120B", ["Antigravity"]],
  ["Claude_Opus_5.5", ["GLM 4.7 Flash"]],
  ["Muse_Spark_1.3", ["GLM 4.7 Flash"]],
  ["Gemini_2_Flash", ["Gemini 2.0 Flash Thinking", "Gemini 2"]],
  ["Gemini_2.0_Flash", ["Search Agent"]],
  ["Gemini_1.5_Pro", ["Google Gemini"]],
  ["Gemini_2.5_Pro", ["Google Gemini"]],
  // Word-order swaps / short forms the prefix rule cannot fold.
  ["Claude_Sonnet_3.5", ["Claude 3.5 Sonnet", "Claude 3.5"]],
  ["Claude_Sonnet_3.7", ["Claude 3.7 Sonnet", "Claude 3.7"]],
  ["Claude_Opus_4.5", ["Claude 4.5 Opus"]],
  ["Claude_Sonnet_4.5", ["Claude 4.5 (Sonnet)", "Claude 4.5"]],
  ["Claude_Sonnet_5.5", ["Claude Sonnet 5"]],
  ["Claude_Sonnet_4", ["Claude 3.5 Sonnet"]],
  // Digit-tail short forms (the prefix rule rejects pure-numeric extensions).
  ["Grok_4", ["Grok"]],
  ["Grok_4.5", ["Grok"]],
  // Subject-name spelling drift (Flint-convention rater, folder omi-alpha).
  ["Flint", ["Omni Alpha"]],
  // Revealed-stealth rater renames (2026-10-26): Space_Bunny.md files with no
  // revealed twin were renamed to MiniMax_M3.1_Flash.md; the frozen stealth-era
  // signature inside stays as history — same model (revealed 2026-10-19).
  ["MiniMax_M3.1_Flash", ["Space Bunny"]],
]);

/** Signature-display candidates: raw, minus the trailing `(<id>)`, minus all parens. */
function signatureCandidates(signature) {
  const raw = signature.replace(/^[\s[*_]+|[\s\]*_]+$/g, "").trim();
  const out = new Set([raw]);
  out.add(raw.replace(/\s*\([^()]*\)\s*$/, "").trim());
  out.add(raw.replace(/\s*\([^()]*\)/g, "").trim());
  return [...out].filter(Boolean);
}

/** Exact FAIL text for a signature that names a foreign model (locked: it routes to a human). */
export function signatureStemMessage(stem, signature, where) {
  return (
    `${where}: signature "Provided by: **${signature}**" does not match the filename stem "${stem}" — ` +
    `the stem must carry the REPORTER's identity (model/<subject-folder>/<YOUR_STEM>.md); a file named ` +
    `after the model it researches is the STEM/slug conflation pattern (2026-10 incident). Fix the filename ` +
    `to the reporter's stem, or add a legitimate spelling variant to SIGNATURE_STEM_EXCEPTIONS in scripts/lib/validate.mjs`
  );
}

/**
 * Pure decision for one findings file. `signature` comes from
 * extractSignatureName (parse.mjs; null = no usable bold signature — legacy
 * files are skipped, never guessed). `acceptNames` = display names derived
 * from the stem (stem, stem key, label, SOURCE_OVERRIDES key/label);
 * `subjectNames` = the folder subject's names (meta.name, slug). Accepts:
 * exact fold match, ChatGPT≡GPT, word-prefix/short-form relations (never a
 * pure digit extension), subject-name match (the Flint convention: some
 * raters sign with the subject's name), and the exception list above.
 * Returns null when fine, the FAIL message when the signature is foreign.
 */
export function checkSignatureStem({
  stem,
  signature,
  acceptNames,
  subjectNames,
  where,
  exceptions = SIGNATURE_STEM_EXCEPTIONS,
}) {
  if (signature === null) return null;
  const accept = new Set((acceptNames ?? []).map(normName));
  const subject = new Set((subjectNames ?? []).map(normName));
  const extra = new Set((exceptions.get(stem) ?? []).map(normName));
  for (const c of signatureCandidates(signature)) {
    const s = normName(c);
    if (s.length === 0) continue;
    if (accept.has(s) || subject.has(s) || extra.has(s)) return null;
    // ChatGPT ≡ GPT: official display style differs from the stem.
    const noChat = s.replace(/^chat/, "");
    const forms = noChat !== s ? [s, noChat] : [s];
    for (const f of forms) {
      // Short-form (the reporter shortened its own name) and tier-suffix
      // ("Muse Spark 1.3 Contributor") relations — against the stem-derived
      // names and, for the Flint convention (raters that sign with the
      // subject's name), against the folder subject. A pure digit tail
      // ("Grok" for "Grok 4", "GPT 5.5" for "GPT 5") never passes — that is
      // a *different model in the same family*, exactly what must FAIL.
      if (f.length < 3) continue;
      const related = (set) => {
        for (const a of set) {
          if (a.length < 3) continue;
          if (a.startsWith(f) && !/^[0-9]+$/.test(a.slice(f.length))) return true;
          if (f.startsWith(a) && !/^[0-9]+$/.test(f.slice(a.length))) return true;
        }
        return false;
      };
      if (related(accept) || related(subject)) return null;
    }
  }
  return signatureStemMessage(stem, signature, where);
}

// ---------------------------------------------------------------------------
// model-aliases.generated.md (research-agent compact roster, compaction
// proposal item 2): ONE generated file holds every forbidden / redirected
// identity so prose rule files point instead of restating (drift-proof:
// the data lives in the code lists below, same contract as model-queue.md).
// ---------------------------------------------------------------------------

/**
 * One-line case notes rendered into model-aliases.generated.md. Keys are the
 * parked slugs (RETIRED_SLUGS in scripts/lib/average.mjs), merged duplicate
 * slugs (MERGED_MODEL_SLUGS), retired vendor aliases (RETIRED_ALIAS_SLUGS)
 * and merged duplicate stems (MERGED_SOURCE_STEMS) — the evidence summaries
 * previously duplicated across RULES.md and model/README.md.
 */
export const CASE_LAW_NOTES = new Map([
  // Deleted phantom folders (previously parked; user-ordered deletion 2026-11-03)
  ["glm-5.3-free", "fictional Zen route — live-verified absent from the catalog; parked 2026-10-10, folder deleted 2026-11-03 (user order, never resurrect)"],
  ["gemini-2.5", "family shorthand for gemini-2.5-pro (every cited ID resolves to the Pro flagship); parked 2026-10-12, folder deleted 2026-11-03 (user order) — research belongs in model/gemini-2.5-pro/"],
  ["qwen-3.5", "generation name, never a model (members tracked as qwen-3.5-397b / qwen-3.5-plus / qwen-3.5-9b); parked 2026-10-20, folder deleted 2026-11-03 (user order) — research belongs in the member folder for the ID actually cited"],
  ["kimi-k2.7-code-highspeed", "serving profile of kimi-k2.7-code — same moonshotai/Kimi-K2.7-Code weights, same 262,144 window, exactly 2x API price; parked 2026-10-20, folder deleted 2026-11-03 (user order) — research belongs in model/kimi-k2.7-code/"],
  ["gemini-3.1-flash", "phantom name — Google ships no bare gemini-3.1-flash text SKU, the only 3.1 Flash text model is gemini-3.1-flash-lite; parked 2026-10-20, folder deleted 2026-11-03 (user order) — research belongs in model/gemini-3.1-flash-lite/ and the -Lite suffix is never dropped"],
  ["longcat-2.5", "phantom GA name — Meituan published no standalone LongCat 2.5, only the API-only LongCat-2.5-Preview; parked 2026-10-22, folder deleted 2026-11-03 (user order) — research belongs in model/longcat-2.5-preview/"],
  ["claude-opus-4.4", "phantom checkpoint — live-existence audit: Anthropic deprecations/overview show Opus 4.1 → 4.5 → 4.6/4.7/4.8, no Opus 4.4 ever released; parked 2026-10-26, folder deleted 2026-11-03 (user order, never resurrect)"],
  ["claude-opus-3.7", "phantom checkpoint — Anthropic lineage has no Opus 3.7 (3.7 exists only as Sonnet); parked 2026-10-26, folder deleted 2026-11-03 (user order, never resurrect)"],
  ["claude-sonnet-5.4", "phantom checkpoint — Anthropic's Sonnet lineage runs 4 → 4.5 → 4.6 → 5 → 5.5, no Sonnet 5.4 ever released; live-verified absent from Anthropic's announcements, deprecation docs and system cards; parked 2026-11-02, folder deleted 2026-11-03 (user order, never resurrect)"],
  ["qwen-3.8-325b", "phantom checkpoint — live-existence audit: HF Qwen org, Alibaba Cloud Model Studio and models.dev list only Qwen3.8 Max/27B/Flash/Flash-Next/Omni/2.4T-A95B, no 325B variant ever released; parked 2026-10-26, folder deleted 2026-11-03 (user order, never resurrect)"],
  ["ox_alpha", "revealed stealth preview of glm-5.3-flash (OpenRouter stealth/ox-alpha, ~1M ctx, free; Z.ai confirmed 2026-08-26 and later released the weights) — user-ordered park 2026-10-26 overriding the revealed-stealth merge rule; folder deleted 2026-11-03 (user order) — research belongs in model/glm-5.3-flash/"],
  ["omi-alpha", "phantom identity — no independent OMI LLM exists outside this project; all external references resolve to a WWII-era OMI Alpha cipher machine (Ottico Meccanica Italiana), not an LLM vendor; vendor-prefixed id `opencode/omi-alpha` and pricing/access claims are unverifiable; deleted 2026-11-03 (user order, never resurrect)"],
  ["omin-alpha", "misspelling of omen-alpha (Omen Alpha) — NOT a separate model: independent search for \"Omin Alpha\" returns no LLM, no model card, no tracker page and no queue entry; the folder's three reports are all self-excluded (`*.md.excluded`, zero verified benchmarks) and each independently identifies the slug as a typo/conflation of `omen-alpha`; never re-scaffold, never re-queue and never write research into it — it is parked in RETIRED_SLUGS, so sync can never queue, score or make it a rater; the folder stays on disk and in git under the research-permanence rule (parked 2026-11-04, reconfirmed 2026-11-06 after a research agent nearly filed a scored report under this slug) — research belongs in model/omen-alpha/"],
  // Merged-and-deleted duplicate slugs
  ["google-gemini-2.5-flash-lite", "vendor-prefixed duplicate of gemini-2.5-flash-lite (same weights, Zen gateway route); merged + deleted 2026-10-06"],
  ["glm-5.1-coding", "the -coding suffix was a dataset label of glm-5.1, never a SKU (vendor lists exactly one glm-5.1 route); folder renamed, old slug merged + deleted 2026-10-12"],
  ["embe-1", "duplicate spelling of ember-1; merged + deleted"],
  ["grok-4-fast-reasoning", "docs.x.ai alias of grok-4-fast (one checkpoint, reasoning is system-prompt steering, same 2M window and price); merged + deleted 2026-10-20"],
  ["grok-4.1-fast-reasoning", "docs.x.ai alias of grok-4.1-fast (one checkpoint); merged + deleted 2026-10-20"],
  ["longcat_2.5_preview", "underscore-spelling duplicate of longcat-2.5-preview (both declared id opencode/longcat-2.5-preview-free — one model); merged + deleted 2026-10-23"],
  ["space-bunny", "revealed stealth alias of MiniMax M3.1 Flash (Free) — one model, three stealth names; folder merged into model/minimax-m3.1-flash-preview/ on user order 2026-10-24 (revealed-stealth merge rule) — research belongs in model/minimax-m3.1-flash-preview/"],
  ["cat-jam", "revealed stealth alias of Reflection Beam 1.0 (same 501B/23B weights, opencode/beam-free; OpenCode PR #55993); folder merged into model/beam/ on user order 2026-10-24 (revealed-stealth merge rule) — research belongs in model/beam/"],
  ["muse-wonder", "vendor product-name duplicate of muse-wonder-1.0 — Meta ships the Muse Wonder product only as API SKU muse-wonder-1.0 (dev.meta.ai model page + OpenRouter meta/muse-wonder; same 1M window, same $4/$20; the distinct Muse Wonder Full is muse-wonder-full-1.0, subscription-only); one rater had already self-excluded the folder as a scaffolded stub of the same model; merged + deleted 2026-11-01 (user order) — research belongs in model/muse-wonder-1.0/"],
  ["glm-5.3-flash-x", "GLM-5.3-Flash-X / GLM-5.3-FlashX spelling duplicate (Z.ai canonical API code is `glm-5.3-flashx`; OpenCode Zen route spelling `glm-5.3-flash-x` is the forbidden hyphenated variant — same 320B/18B FlashX weights, same price, same 1M window); merged + deleted 2026-11-02 (user order) — research belongs in model/glm-5.3-flashx/"],
  ["north-mini-code", "hyphen-separator spelling duplicate of canonical underscore folder north_mini_code (one model; an auto-scaffolded opencode stub created 2026-11-05 by a run that filed into the wrong folder name, double-counting it in the queue); merged newest-report-wins + deleted 2026-11-06 (user order) — research belongs in model/north_mini_code/"],
  ["llama-3.2-vision-instruct", "hyphen-separator spelling duplicate of canonical underscore folder llama_3.2_vision_instruct (one model; an auto-scaffolded opencode stub created 2026-11-05, double-counting it in the queue); merged newest-report-wins + deleted 2026-11-06 (user order) — research belongs in model/llama_3.2_vision_instruct/"],
  // Retired vendor aliases
  ["grok-code-fast-1", "docs.x.ai alias of grok-build-0.1 — never a folder; alias-measured figures are lineage data, cited only labelled with the measured ID"],
  // Merged-and-deleted duplicate findings-file stems
  ["Laguna_XS_2_1", "underscore-version spelling of Laguna_XS_2.1 (one rater, two spellings, silent double-count risk); merged + deleted 2026-10-08"],
  ["Mimo_v2.6_Flash", "spelling variant of MiMo_2.6_Flash (same Xiaomi rater, lowercase + _v2.6); merged + deleted 2026-10-09"],
  ["Space_Bunny", "stealth-era rater stem of MiniMax M3.1 Flash (revealed 2026-10-19) — same model rated subjects under both stems, faking 2-report evidence agreement; merged into MiniMax_M3.1_Flash (newest report wins; 159 + 6 excluded collisions, 10 renames where no twin existed); merged + deleted 2026-10-26 (user order)"],
  ["Cat_Jam", "stealth-era rater stem of Beam 1.0 (revealed 2026-10-24) — same model under both stems; merged into Beam (newest report wins; 75 + 14 excluded collisions); merged + deleted 2026-10-26 (user order)"],
  ["Ox_Alpha", "stealth-era rater stem of GLM-5.3-Flash (Z.ai confirmed 2026-08-26) — both stems above the 84.9 gate, so collisions double-counted one model in qualifying cohorts; merged into GLM_5.3_Flash (newest report wins; 2 + 2 excluded collisions); merged + deleted 2026-10-26 (user order; the ox_alpha subject folder stays parked separately)"],
  ["Xing_4.0_29b_a4b", "folder-slug spelling variant of Xing_4.0.29B_A4B (same Xing 4.0 rater filed subjects under both spellings — `Xing_4.0_29b_a4b` underscore version separators + lowercase `b` param count vs canonical dotted `Xing_4.0.29B_A4B` with uppercase `B` param counts, never lowercase `b`; both rule-legal — silent double-count risk); merged into Xing_4.0.29B_A4B (newest report wins; 87 + 90 excluded variant files deleted, 1 twin collision refolded); merged + deleted 2026-11-02 (user order)"],
]);

/**
 * Alias-family records that stay TRACKED (hidden from nothing, never parked)
 * but own forbidden sibling names. Rendered as the last section of
 * model-aliases.generated.md.
 */
export const TRACKED_ALIAS_NOTES = new Map([
  [
    "union-alpha",
    "Pareto 26.9 composite record (Union Alpha / stealth/union-alpha / opencode/union-alpha / unbiased/pareto — one product, a composite router, never a checkpoint); NEVER scaffold model/pareto-26.9/ or model/unbiased-pareto/; the successor Pareto 26.10 is the separate tracked model/pareto-26.10-preview/; the circulated DeepSWE ~74% is GPT-6 Astra's number — Pareto 26.9 is 70.0%",
  ],
  [
    "muse-spark-1.3",
    "covers EVERY Muse Spark 1.3 tier name (Contributor, Contributor Free, Free, Standard, Max, muse-spark-1.3-free/-max/-contributor) — one model: same weights, 1M context; only price and Meta's training-data use differ (reasoning_effort max is a paid-Standard option, never a model); NEVER scaffold a tier-suffixed variant folder",
  ],
  [
    "muse-spark-1.2",
    "covers EVERY Muse Spark 1.2 tier name (Contributor, Contributor Free, Free, Standard, Max, muse-spark-1.2-free/-max/-contributor) — same weights everywhere, only price and data-use differ; NEVER scaffold a tier-suffixed variant folder",
  ],
  [
    "nemotron-3-ultra-free",
    "covers EVERY Nemotron 3 Ultra name — Free is an access tier (Zen free route, OpenRouter :free suffix, NVIDIA free endpoint); paid NIM/OpenRouter routes serve the same 550B-A55B weights; NEVER scaffold model/nemotron-3-ultra/",
  ],
  [
    "nemotron-3.5-lightning-free",
    "covers EVERY Nemotron 3.5 Lightning name — Free is an access tier; paid/NIM routes serve the same 30B-A3B weights; NEVER scaffold model/nemotron-3.5-lightning/",
  ],
  [
    "nemotron-3-nano-omni",
    "canonical folder for Nemotron 3 Nano Omni — a single model (30B-A3B-Reasoning weights; free serving on Zen/NVIDIA Build plus open checkpoints, never a -free split); research under it",
  ],
  [
    "mimo-v2.5-free",
    "also covers the Xiaomi MiMo-V2.5 Free name — do not scaffold a second folder for it",
  ],
  [
    "omen-alpha",
    "covers the Omen Alpha spelling — `omin-alpha` is a misspelling of it, not a second model (no \"Omin Alpha\" exists in any vendor, Hugging Face, gateway or tracker source); NEVER scaffold model/omin-alpha/, never re-queue the `omin-alpha` slug and never write research under it — that slug is parked in RETIRED_SLUGS, so sync can never queue, score or make it a rater; the parked folder model/omin-alpha/ stays on disk and in git under the research-permanence rule and holds only self-excluded reports",
  ],
]);

/** Render one identity entry line (shared by the slug sections). */
function aliasEntry(key, value, notes) {
  const note = notes.get(key);
  const target = value === undefined ? "" : ` -> \`${value}\``;
  return `- \`${key}\`${target} — ${note ?? "(no case note recorded)"}`;
}

/**
 * Build model-aliases.generated.md (repo root, committed, regenerated by
 * `pnpm sync` — same freshness contract as model-queue.md: only on zero
 * failures). Pure + deterministic. Research agents read this ONE file
 * instead of the retired/merged/alias rosters previously restated in
 * RULES.md, model/README.md and the task files.
 */
export function buildAliasesFile(retired = RETIRED_SLUGS, deleted = DELETED_PHANTOM_SLUGS) {
  const lines = [
    "# model-aliases — AUTO-GENERATED by `pnpm sync`, do not hand-edit.",
    "#",
    "# Single point of reference for forbidden / redirected identities.",
    "# If a slug or stem appears here it is NEVER scaffolded, queued,",
    "# researched, or written to — resolve to the canonical target instead",
    "# (general identity rules: RULES.md; the list data lives in",
    "# scripts/lib/validate.mjs and scripts/lib/average.mjs). Prose rule",
    "# files point here; this roster is the only copy.",
    "",
    "## Parked (retired) slugs — folders stay on disk and in git; never researched",
    "",
  ];
  for (const slug of retired) {
    if (deleted.has(slug)) continue; // rendered in the deleted section below
    lines.push(aliasEntry(slug, undefined, CASE_LAW_NOTES));
  }
  lines.push(
    "",
    "## Deleted phantom model folders — removed from disk + git 2026-11-03; never recreate or restore",
    "",
  );
  for (const [slug, canonical] of deleted) lines.push(aliasEntry(slug, canonical, CASE_LAW_NOTES));
  lines.push("", "## Merged-and-deleted duplicate slugs — never recreate (not even from git history)", "");
  for (const [slug, canonical] of MERGED_MODEL_SLUGS) lines.push(aliasEntry(slug, canonical, CASE_LAW_NOTES));
  lines.push("", "## Retired vendor aliases — never a folder", "");
  for (const [slug, canonical] of RETIRED_ALIAS_SLUGS) lines.push(aliasEntry(slug, canonical, CASE_LAW_NOTES));
  lines.push("", "## Merged-and-deleted duplicate findings-file stems — never recreate", "");
  for (const [stem, canonical] of MERGED_SOURCE_STEMS) lines.push(aliasEntry(stem, canonical, CASE_LAW_NOTES));
  lines.push("", "## Alias-family records (kept tracked) — research under the listed folder only", "");
  for (const [slug, note] of TRACKED_ALIAS_NOTES) lines.push(`- \`${slug}\` — ${note}`);
  lines.push("");
  return lines.join("\n");
}
