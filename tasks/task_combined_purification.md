# task_combined_purification — combined purification & simplification audit

> **Scope:** full-repo scan for (a) things no longer relevant that can be
> eliminated without touching functionality, and (b) code that can be simplified
> without changing behaviour. Combined from 8 individual task audits:
> - task_DeepSeek_V4.1_Flash_2026-10-31.md (audited 2026-10-31)
> - task_DeepSeek_V4.1_Flash_2026-10-25.md (audited 2026-10-25)
> - task_GLM_5.3_Flash_2026-10-31.md (audited 2026-10-31)
> - task_Step_5_Preview_2026-10-31.md (audited 2026-10-31)
> - task_Purify_2026-10-25.md (audited 2026-10-25)
> - task_Muse_Spark_1.3_2026-10-04.md (audited 2026-10-04)
> - task_Kimi_K3_2026-10-04.md (audited 2026-10-04)
> - task_Claude_Opus_5_2026-10-04.md (audited 2026-10-04)
>
> **Precedence:** `RULES.md` wins on any conflict. No `model/<slug>/` research
> file or folder is proposed for deletion anywhere — all research-tree items
> are outside the `model/` tree (stray copies, orphaned) and require sign-off.
> **No self-investigation:** identity/score questions answered by `model-queue.md`
> only; never by listing `model/` or scanning `average.md`.

**Aggregated baseline (all audits):** ~211 `model/` folders · ~200 models in
`model-queue.md` · ~8,107 active findings `.md` · ~920 `.md.excluded` ·
~211 `average.md` · ~103 `SOURCE_DEFS` registrations · ~10,073 git-tracked files ·
7 `models_voice/` + 2 `models_finance/` folders · ~3,958–10,073 git-tracked files
(variance across audit dates) · ~11–14 parked V1 plugin files · `public/fonts/` =
68 woff2 files / ~2.2–2.3 MB · `.opencode/plugins/v1/` parked V1 plugins · `PRD/`
directory gitignored.

---

## Status — applied 2026-11-01 to 2026-11-02

Items implemented during consolidation session (see `REPORT.md` for file-level log).

Validation: `pnpm test` **563/563** green, `pnpm build.types:direct` clean,
`pnpm build:direct` **205 SSG pages** with no errors.

**Done**

- **A1** — 11 tracked scratch files `git rm`'d + untracked `temp_slugs.txt` deleted.
- **A2** — `modeljev-1.13/` removed (byte-identical duplicate; per-file sign-off given).
- **A3** — `findings/` orphan research tree `git rm -r`'d: two 0-byte stubs plus two ad-hoc
  notes for `claude-sonnet-5.4` (Overall 85.6) and `qwen-3.7` (Overall 77.3).
- **A4** — `state/` empty directory deleted locally (untracked, no git impact).
- **A5** — `src/components/v2/v2.css` deleted + its three imports removed.
- **A6** — `.opencode/plugins/v1/` removed (14 parked V1 plugin files, 3,756 lines).
- **B6** — `src/components/freeZenLink.tsx` internal array typed as `any[]` → `JSXOutput[]` (strict type safety). ✅ Done 2026-11-02.
- **B1 (voicemodels)** — `voicemodels/` tripwire can never fire due to variable shadowing in `scripts/sync-data.mjs`. Fixed by refactoring to `findForbiddenRoot(root, FORBIDDEN_ROOTS, (r, f) => existsSync(join(r, f)))` in `scripts/lib/validate.mjs:194-196`, which correctly passes `root` (repo root) and `f` (forbidden name) to the join. Comment at `validate.mjs:190-192` documents the fix. ✅ Done 2026-11-02.
- **A7** — `assets/avatar-backup-2026-10-05/` removed (4 tracked files).
- **A9** — dead `HELPS` constant removed from `routes/contact/index.tsx`.
- **A10** — `src/routes/design-6sol/` removed: folder deleted from disk (untracked, gitignored),
  dead `path === "/design-6sol"` branch dropped from `layout.tsx`.
- **B1** — `model-report-TEMPLATE.md` restored from `b666acf2^` (107-line template).
- **B2** — stale `SourceKey` prune added to `reconcileRegistry` (`scripts/lib/codegen.mjs`).
- **B3** — `src/data/providers.ts` already describes the seven-category render; `PAID_ONLY_PROVIDERS`
  and `getProvider` do not exist (dead code already removed, tracked as D7 done).
- **B4** — `checkOverallScores()` now routes through `warnOnce()` instead of raw `console.warn()`.
- **B5** — fixed via **D13** (`PricingBadge`/`PricingTiers` components).
- **C1** — docs updated to v2 component/helper reality.
- **C2** — `model-comparison.md` declared frozen v1–v3 history; `average.mjs` header stamp points
  at `README.md#methodology`; `.agents/rules.md` updated.
- **C3** — `PRD/` references removed from active docs (`AGENTS.md`, `.agents/rules.md`, `README.md`,
  `modelView.ts`); `PRD/` stays gitignored; `PRD/webshop-prd.md` remains untracked (see **A8** pending).
- **C4** — dangling `GLM53F_IMP` comment references rewritten (verified: 0 matches for
  `GLM53F_IMP` in active docs outside historical audit files).
- **C5** — `src/data/models.ts` header trimmed to one-line "why".
- **C6** — `scripts/sync-data.mjs` header comment simplified; removed redundant numbered step list,
  kept only pointer to `tasks/sync-data.md`.
- **D1** — shared `src/components/v2/theme.ts` (`usePageTheme` + `applyPageTheme`).
- **D2** — shared `src/components/v2/hex.ts`; all three radar renderings use it.
- **D3** — dimension label maps derived from `DIMENSIONS` (`src/components/v2/modelView.ts`).
- **D4** — best/worst cell highlighting shared (`buildHlStats` / `hlClass` / `hlTitle`).
- **D5** — `MODEL_COLORS` now live (used by compare chart); `SERIES_COLORS` dropped.
- **D6** — `tooltipFor` → shared `dimensionTooltip`.
- **D7** — dead exports removed (`sortSourceFor`, `getModel`, `PAID_ONLY_PROVIDERS`,
  `getProvider`, `FREE_ZEN_MODELS_URL` export, `HELPS`).
- **D8** — providers page data-driven (`SECTIONS` array).
- **D9** — homepage split into section components (`HeroSection`, `FactsStrip`, `CompareSection`,
  `MethodologySection`, `ModelsSection`, `DecisionShelf`).
- **D10** — `writeIfChanged` helper in `scripts/sync-data.mjs`.
- **D13** — Pricing renders unified: `PricingBadge.tsx` (`card`/`inline`/`legend` variants) fixes B5;
  `PricingTiers.tsx` wraps `withFreeZenLink`; `withFreeZenLink` return type `JSXOutput[]`.

**Not applied (pending — sorted by priority)**

**Priority 1 — pure deletions (no behaviour change):**

- **A8** — `PRD/webshop-prd.md` — 223 KB webshop spec with no connection to this project.
  `PRD/` stays gitignored (`.gitignore:13`); delete only `webshop-prd.md`. Per user instruction,
  do NOT un-ignore `PRD/` or remove `PRD/prd.md` references beyond what C3 already did.

**Priority 2 — correctness / latent bugs:**

- **B7** — canonical URLs + sitemap point at `localhost:4173` (`adapters/static/vite.config.ts` hardcodes
  `origin`). Fix: `origin: process.env.SITE_ORIGIN ?? "http://localhost:4173"`.
- **B8** — `<link rel="manifest">` emitted twice on every page (`root.tsx:40-45` + `router-head.tsx:15`).
- **B9** — all model pages share one static `<title>`; make `head` a resolver keyed off `params.slug`.
- **B10** — contact form can never submit (`CONTACT_EMAIL = ""`).
- **B11** — five permanent "· soon" donate placeholders (`EXTRA_DONATE_LINKS` all have `href: ""`).
- **B12** — contact unreachable from desktop header (fixed by **D8** below).
- **B13 (from GLM)** — duplicate target slug in `SOURCE_DEFS` ("Laguna XS 2.1" and "Laguna XS 2 1"
  both map to `slug: "laguna-xs-2.1"`).
- **B14** — `tasks/sync-data.md` contradicts itself on curated vs. derived SOURCES order.

**Priority 3 — documentation drift:**

- **C2 (from GLM)** — `docs/v2-promotion-rollback.md` keep or optionally compress.
- **C3 (from GLM)** — `models.ts` comment points at `MODEL_COLORS` (dead export removed in D7);
  reword to state the invariant.
- **C4 (from Muse Spark)** — `.agents/tech-stack.md` script inventory stale (omits `sync`/`sync:quiet`/`test`).
- **C5 (from Muse Spark)** — `.antigravity/history/project-map.md` inventory incomplete
  (missing `VendorIcon.tsx`, `freeZenLink.tsx`, `router-head.tsx`, `routes/contact/`,
  `vendorIcons.generated.ts`, `scripts/lib/` split).
- **C6 (from Muse Spark)** — `CompareSection.tsx` comment says "curated SOURCES order" but order is derived.
- **C7 (from Muse Spark)** — "SIMPLIFY-PLAN" citations point at non-existent document.
- **C8 (from Muse Spark)** — required reading is gitignored (`PRD/` and `instructions/`).
- **C9 (from Muse Spark)** — `vendorIcons.generated.ts` header overclaims "AUTO-GENERATED" when hand-maintained.
- **C10 (from Claude Opus)** — `.antigravity/rules.md` tells agents to trust stale cache receipts.
- **C11 (from Claude Opus)** — four parallel improvement logs with no stated precedence.

**Priority 4 — simplification (behaviour-preserving):**

- **D11** — `scripts/lib/codegen.mjs` header says "Two outputs" but exports seven renderers.
- **D12** — two different `warnOnce` implementations (`models.ts` module-level `Set` vs
  `providers.ts` function-property `Set`).
- **D14** — `VendorIcon` re-derives props reactively (signals + `useTask$` for pure prop derivation).
- **D15** — `tsconfig.json` leaves `adapters/` and `scripts/` untypechecked.
- **D16** — `layout.tsx` route-guard has redundant branches (`path === ""` can never be true;
  `startsWith("/providers")` swallows `/providers-*` routes).
- **D17** — `src/data/evidence.ts` is a one-function pass-through (legitimate code-split; no change).
- **D18** — `entry.dev.tsx` / `entry.preview.tsx` fine; no change.

**Priority 5 — data-tree health (report only):**

- **E1** — `models_finance/` holds two folders for one product (`ling-3.0-flash-fin/` + `ling-3.0-flash-fin-free/`).
- **E2** — `models_voice/` and `models_finance/` remain unwired (9 folders invisible to sync/site).
- **E3** — grandfathered fossils — do not touch (`*.replaced-by-*` files).
- **E4** — scratch-file definition of Done.

---

## Part A — Eliminate (no longer relevant)

Full detail from all audits follows. Done items are marked `✅ DONE`; pending items are marked `⏳ PENDING`.

### A1. Eleven tracked scratch/debug files at repo root and in `scripts/` ✅ DONE

All 11 verified zero references:
- `_t10.txt` (23 B), `_test_ascii.txt` (63 B) — encoding smoke tests
- `.missing-list.txt` (771 B) — one-off "missing models" dump
- `.tmp-queue.cjs` (36 lines) — one-off queue recompute for STEM `MiniMax_M3.1_Flash`
- `batch_write.cjs` (64 lines) — bulk writer that created `Inkling.md` stub files
- `check_parse.js` (16 lines) — `vendorIcons.generated.ts` parse debug (`eval`)
- `scan_missing.py` (20 lines) — key-scan debug
- `update_research.mjs` (217 lines) — `Laguna_XS_2.1.md` generator
- `queue_slugs.txt` (0 B) — empty stale slug list
- `scripts/tmp-dates.cjs` (17 lines) — ad-hoc date scan for `Muse_Spark_1.3`
- `scripts/tmp-missing.cjs` (11 lines) — ad-hoc missing-file scan
Plus untracked `temp_slugs.txt` (3,057 B, matched by `.gitignore:9 temp_*`).

**Guidance:** `git rm` the 11 tracked files + `Remove-Item temp_slugs.txt`. ✅ Done 2026-11-01.

### A2. `modeljev-1.13/` — root duplicate of a real findings file ✅ DONE

`modeljev-1.13/MiniMax_M3.1_Flash.md` sits outside the `model/<subject>/` tree (typo'd folder name)
and is byte-identical (SHA-256 `C7F4CA94…9736B`) to the canonical
`model/jev-1.13/MiniMax_M3.1_Flash.md`. `pnpm sync` never scans it; nothing is lost.

**Guidance:** `git rm -r modeljev-1.13`. ✅ Done 2026-11-01.

### A3. `findings/` — orphan research tree ✅ DONE

A tracked directory outside `model/`, not scanned by sync, superseded by the `model/` tree:
- `findings/jev-1.13.md` — 0 bytes
- `findings/jev-1.13_temp.md` — 0 bytes
- `findings/research/research-Laguna_S_2.1/claude-sonnet-5.4.md` — ad-hoc research for
  `claude-sonnet-5.4` (Overall 85.6 in `model-queue.md`)
- `findings/research/research-Laguna_S_2.1/qwen-3.7.md` — ad-hoc research for
  `qwen-3.7` (Overall 77.3 in `model-queue.md`)

**Guidance:** remove the empty stubs outright; both research-note models already have proper
`model/<slug>/` folders, so the orphan notes are redundant; `git rm -r findings`. ✅ Done 2026-11-01.

### A4. `state/` — empty directory ✅ DONE

`state/` existed on disk with zero entries and was not tracked. Removed locally (`Remove-Item -Recurse state`). No git impact — git cannot track empty directories. ✅ Done 2026-11-02.

### A5. `src/components/v2/v2.css` — dead CSS ✅ DONE

Styles `.v2` / `.v2.dark` and a `.v2 *` reduced-motion kill switch, but no element carries a
`v2` class. Imported 3× with zero effect. **Guidance:** delete the three imports and the file.
✅ Done 2026-11-01.

### A6. `.opencode/plugins/v1/` — 14 parked V1 plugin files ✅ DONE

Original OpenCode 1.x implementation, kept verbatim apart from a one-line header. Cannot load on
the locked Desktop 2.x runtime (`PluginModule.LoadError: missing key "default"`), never globbed
(both loaders scan top level only), fully recoverable from git history. **Guidance:**
`git rm -r .opencode/plugins/v1`. ✅ Done 2026-11-01.

### A7. `assets/avatar-backup-2026-10-05/` — stale backup ✅ DONE

Contains `favicon.svg`, `manifest.json`, `router-head.tsx` and a `README.txt` that references
`src/components/HeroArt.tsx` (deleted in v2 v1-removal) and public icon PNGs never created.
The live files it backs up are all still present. **Guidance:** `git rm -r assets/avatar-backup-2026-10-05`.
✅ Done 2026-11-01.

### A8. `PRD/webshop-prd.md` ⏳ PENDING

4,149 lines about an unrelated webshop product. `PRD/prd.md` is the ModelComp spec (cited by
`AGENTS.md` and `.agents/rules.md`), but `PRD/webshop-prd.md` (223 KB) has no connection to this
project, and the whole `PRD/` directory is gitignored (`.gitignore:13`) so it is not shared
with fresh clones. **Guidance:** delete `PRD/webshop-prd.md`. Per user instruction: `PRD/`
stays gitignored; do NOT un-ignore it or remove remaining `PRD/prd.md` references beyond
what C3 already did.

### A9. `HELPS` — dead constant in contact route ✅ DONE

Defines a `HELPS` array ("What helps most" rows) never referenced in JSX (grep: only the
definition). **Guidance:** delete the constant (or render it). ✅ Done 2026-11-01.

### A10. `src/routes/design-6sol/` — local-only design study ✅ DONE

Gitignored (`.gitignore:15 src/routes/design*`) and untracked; standalone canvas hardcoded to
`claude-opus-5.5`. Not deployed, not built. Deleting only affects local disk. **Guidance:**
delete the folder and drop the `path === "/design-6sol"` special case in `layout.tsx`.
✅ Done 2026-11-01.

---

## Part B — Broken contracts & correctness

Full detail from all audits. Done items marked `✅ DONE`; pending marked `⏳ PENDING`.

### B1. `model-report-TEMPLATE.md` was deleted ✅ DONE

Absent from disk and from `git ls-tree HEAD`. Existed until commit `b666acf2`. Byte-recoverable
from parent `c2a3343c`. Cited as mandatory output contract by ~10 live files including
`.agents/rules.md`, `tasks/research.md`, `tasks/research-assign.md`, `model/README.md`,
`README.md`. **Guidance:** restore with `git restore --source=c2a3343c -- model-report-TEMPLATE.md`.
✅ Done 2026-11-01.

### B2. Stale `SourceKey` registry entries never pruned ✅ DONE

`src/data/sources.generated.ts` keeps keys whose findings files no longer exist:
`"Space Bunny"`, `"Ox Alpha"`, `"Mimo v2.5 Free"`. **Guidance:** prune step added to
`reconcileRegistry` in `scripts/lib/codegen.mjs`, wired in `scripts/sync-data.mjs` with
`presentStems` (zero-failure runs only). ✅ Done 2026-11-01.

### B3. `src/data/providers.ts` comment describes old page shape ✅ DONE

Module header and `PAID_ONLY_PROVIDERS` described page as rendering "exactly two groups"
(free-tier first, then paid-only). Actual page renders seven functional categories.
`PAID_ONLY_PROVIDERS` has no consumer (definition only). **Guidance:** delete `PAID_ONLY_PROVIDERS`
(and `getProvider`, also unused) and correct the header comment. ✅ Done (dead code already removed
as part of D7; comment already corrected).

### B4. `checkOverallScores()` bypasses warn-once policy ✅ DONE

`src/data/models.ts:30-35` defines `warnOnce` because "a bare `console.warn` spams the same line
3-4x per build", yet `checkOverallScores()` calls raw `console.warn`. **Guidance:** route through
`warnOnce`. ✅ Done 2026-11-01.

### B5. Two different "Paid" labels for same badge ✅ DONE

Homepage/model-profile Paid badges render `"Paid"`; compare legend says `· Paid`; card says
`Paid`. **Guidance:** shared `PricingBadge` extraction (D13) — one label per variant.
✅ Done via D13.

### B1 (Kimi K3 / Claude Opus / Muse Spark). `voicemodels/` tripwire can never fire ✅ DONE

`scripts/sync-data.mjs:150–154` loop variable `root` shadowed repo root `root`, so
`join(root, root)` evaluated to `"voicemodels/voicemodels"` which could never exist.
`RULES.md:48` guarantees sync FAILs loudly while `voicemodels/` exists — it did not.
Fixed by refactoring to `findForbiddenRoot(root, FORBIDDEN_ROOTS, (r, f) => existsSync(join(r, f)))` in
`scripts/lib/validate.mjs:194-196`, which correctly passes `root` (repo root) and `f`
(forbidden name) to the join. Comment at `validate.mjs:190-192` documents the fix.
✅ Done 2026-11-02.

### B7 (Kimi K3). Canonical URLs + sitemap point at `localhost:4173` ⏳ PENDING

`adapters/static/vite.config.ts:15` hardcodes `origin: "http://localhost:4173"`.
Every canonical URL and all ~136 sitemap entries point at localhost. **Guidance:**
`staticAdapter({ origin: process.env.SITE_ORIGIN ?? "http://localhost:4173" })`.

### B8 (Kimi K3). `<link rel="manifest">` emitted twice on every page ⏳ PENDING

`src/root.tsx:40-45` (prod-only) + `src/components/router-head.tsx:15` (unconditional).
**Guidance:** keep RouterHead one, delete `root.tsx` block.

### B9 (Kimi K3). All model pages share one static `<title>` ⏳ PENDING

Every prerendered model page carries `Model details - ModelComp`. **Guidance:** make `head`
a resolver keyed off `params.slug` with per-model title and description.

### B10 (Kimi K3). Contact form can never submit ⏳ PENDING

`src/routes/contact/index.tsx:7` — `CONTACT_EMAIL = ""`. Every submit short-circuits to
"Contact inbox is not configured yet". **Guidance:** set the address or delete the form,
linking GitHub issues instead.

### B11 (Kimi K3). Five permanent "· soon" donate placeholders ⏳ PENDING

`V2Footer.tsx` — all five `EXTRA_DONATE_LINKS` entries have `href: ""`, rendering dashed
"Ko-fi · soon", "Patreon · soon", ... chips. Comment contradicts code (renders `<span>` for
empty ones). **Guidance:** fill URLs, or delete array + "Also via:" block.

### B12 (Kimi K3). Contact unreachable from desktop header ⏳ PENDING

`Header.tsx` desktop nav lists Compare / Scoring / Models; mobile drawer has those + Contact.
**Guidance:** fixed by **D8** below (single `NAV` array feeds both menus).

### B13 (GLM). Duplicate target slug in `SOURCE_DEFS` ⏳ PENDING

"Laguna XS 2.1" (`Laguna_XS_2.1.md`) and "Laguna XS 2 1" (`Laguna_XS_2_1.md`) both carry
`slug: "laguna-xs-2.1"`. **Guidance:** user decision — consolidate or assign distinct slug.

### B14 (GLM). `tasks/sync-data.md` contradicts itself ⏳ PENDING

~Line 101: "curated `SOURCES` order (new sources append last — never reorder)"; ~line 106:
"Results-source dropdown order is derived, not curated". Line 106 is truth (`sourceRankOverall`
in `models.ts`). **Guidance:** delete line 100-102 invariant; fix `CompareSection.tsx` comment
to say "derived".

---

## Part C — Documentation drift

Full detail from all audits. Done items marked `✅ DONE`; pending marked `⏳ PENDING`.

### C1. Docs still name removed v1 components ✅ DONE

`.agents/rules.md`, `.antigravity/history/project-map.md`, `tasks/sync-data.md` still describe
removed v1 components (`CompareSection`, `ModelCards`, `HexRadar`, `Methodology`). **Guidance:**
update all four to v2 reality. ✅ Done 2026-11-01.

### C2. `model-comparison.md` — committed docs disagree on whether it is live ✅ DONE

- `README.md` — "(`model-comparison.md` is frozen v1–v3 history.)"
- `.agents/rules.md:39` — "`model-comparison.md` — overview table + methodology"
- `scripts/lib/average.mjs:94` — stamps every newly created `average.md` with
  `- Overview and scoring methodology: ../../model-comparison.md`
**Guidance:** pick one. Chose frozen: `.agents/rules.md:39` updated to "frozen v1–v3 history"
with pointer to `README.md` § Methodology + `RULES.md` § Scoring; `average.mjs:94` header stamp
now points at `../../README.md#methodology`. ✅ Done 2026-11-01.

### C3. `PRD/` is gitignored but cited as the spec ✅ DONE

`.gitignore:13` ignores `PRD/`, yet `AGENTS.md` (§ Product spec) names `PRD/prd.md`,
`.agents/rules.md:34` lists it under repo layout. `PRD/` itself is v1-era. **Guidance:** decided —
delete references, move still-valid contracts into `.agents/rules.md`. `AGENTS.md` "Product spec"
section removed; `.agents/rules.md` repo-layout entry and tooltip `(see PRD §7)` citation removed;
`README.md` project-layout `PRD/prd.md` line removed; `src/components/v2/modelView.ts`
`(PRD §7)` comment removed. `PRD/` stays gitignored. ✅ Done 2026-11-01.

### C4. `GLM53F_IMP.md` citations survive in code comments ✅ DONE

File absent but issue numbers cited as if live in `scripts/sync-data.mjs`, `scripts/lib/naming.mjs`,
`scripts/lib/naming.test.mjs`. **Guidance:** rewrite each comment to state the invariant instead of
citing a deleted log. ✅ Done (verified: 0 matches for `GLM53F_IMP` in active docs).

### C5. `src/data/models.ts` header describes old bundle problem ✅ DONE

Header explains old `?raw` glob ("~1.7 MB of markdown into a single ~1.8 MB chunk") in present
tense. **Guidance:** trim to one-line "why"; numbers in `README.md`/`REPORT.md`. ✅ Done 2026-11-01.

### C6. `tasks/sync-data.md` header comment drifts from code ✅ DONE

`scripts/sync-data.mjs:3-30` numbers sync as five steps; implementation now does eight.
**Guidance:** renumber script header or link to `tasks/sync-data.md`. Chose Option A: removed
redundant numbered list, kept only pointer to `tasks/sync-data.md`. ✅ Done 2026-11-01.

### C2 (from GLM). `docs/v2-promotion-rollback.md` ⏳ PENDING

Still referenced by live code comment (`src/routes/index.tsx:19-20`) and records the 2026-10-15
promotion history. **Guidance:** keep as-is; optionally compress to a 5-line history note.

### C3 (from GLM). `models.ts` comment points at dead export ⏳ PENDING

`src/routes/index.tsx:63` — "same as the original compare page (models.ts MODEL_COLORS)".
If `MODEL_COLORS` removed, reword comment to state invariant (three series colors are A/B/C slot
palette).

### C4 (from Muse Spark). `.agents/tech-stack.md` script inventory stale ⏳ PENDING

Omits `sync` / `sync:quiet` and `test` scripts. **Guidance:** add `sync`, `sync:quiet`, `test`
to script list; state zero-dep runner.

### C5 (from Muse Spark). `.antigravity/history/project-map.md` inventory incomplete ⏳ PENDING

Missing `VendorIcon.tsx`, `freeZenLink.tsx`, `router-head.tsx`, `routes/contact/`,
`vendorIcons.generated.ts`, entire `scripts/lib/` module split. **Guidance:** refresh inventory.

### C6 (from Muse Spark). `CompareSection.tsx` comment says "curated SOURCES order" ⏳ PENDING

Comment claims results-source selector keeps "curated `SOURCES` order", but order is derived.
**Guidance:** reword to "derived `SOURCES` order" in both places.

### C7 (from Muse Spark). "SIMPLIFY-PLAN" citations point at non-existent document ⏳ PENDING

Six citations across five files. **Guidance:** rewrite each citation to state the invariant
directly instead of citing phantom plan.

### C8 (from Muse Spark). Required reading is gitignored ⏳ PENDING

`.gitignore` ignores `PRD/` and `instructions/`, yet `AGENTS.md` names `PRD/prd.md` as product
spec. **Guidance:** decide — un-ignore `PRD/` and commit `prd.md`, or remove references and move
§7 tooltip contract into `.agents/rules.md`. Per user instruction: `PRD/` stays gitignored;
references already removed in C3.

### C9 (from Muse Spark). `vendorIcons.generated.ts` header overclaims ⏳ PENDING

Header implies generator; body admits "No generator script exists — this file is hand-maintained".
**Guidance:** drop "AUTO-GENERATED"-style wording from first line.

### C10 (from Claude Opus). `.antigravity/rules.md` tells agents to trust stale cache ⏳ PENDING

"Check-First Logic" says verify `.antigravity/history/` receipt files before scanning workspace.
Receipts are stale (13 days old, no git SHA). **Guidance:** make receipts self-validating or drop
the "skip scanning" instruction.

### C11 (from Claude Opus). Four parallel improvement logs ⏳ PENDING

`REPORT.md`, `IMPROVEMENTS.md`, `GLM53F_IMP.md`, and `tasks/task_*_<date>.md` audits all compete.
**Guidance:** one living `BACKLOG.md` + `REPORT.md` as append-only history; retire the rest.

---

## Part D — Simplification (behaviour-preserving)

Done items marked `✅ DONE`; pending marked `⏳ PENDING`.

### D1. Theme initialisation copied 4× ✅ DONE

Identical ~40-line `useVisibleTask$` block at `src/routes/index.tsx`, `routes/model/[slug]/index.tsx`,
`routes/layout.tsx`, `routes/providers/index.tsx` (5th write side in `V2Header.tsx`).
**Guidance:** extract `src/components/v2/usePageTheme.ts` exporting `usePageTheme()`. ✅ Done.

### D2. Hexagon geometry copied 3× ✅ DONE

`hexPoint`, `hexPolygon`, `HEX_CX/CY/MAX_R/LABEL_R/GAMMA` at `routes/index.tsx`, `routes/model/[slug]/index.tsx`,
`routes/design-6sol/index.tsx`. **Guidance:** create `src/components/v2/hex.ts`. ✅ Done.

### D3. Dimension label maps hand-maintained 3× ✅ DONE

`names` / `colNames` / `tableKeys` redeclared at `index.tsx:25-48`, `model/[slug]/index.tsx:20-37`,
`design-6sol/index.tsx:9-26`. `DIMENSIONS` in `models.ts:184-223` already carries `label`/`short`.
**Guidance:** derive from `DIMENSIONS`. ✅ Done via `modelView.ts`.

### D4. Table highlighting helpers duplicated ✅ DONE

`colBestWorst` + `hlStats` + `hlClass` (+ `hlTitle` on profile) near-identical at
`index.tsx:306-329` and `model/[slug]/index.tsx:177-199`. **Guidance:** extract `src/components/highlight.ts`.
✅ Done.

### D5. `SERIES_COLORS` duplicates `MODEL_COLORS` ✅ DONE

`index.tsx:64` re-declares `["#4f46e6","#059669","#d97706"]`. `MODEL_COLORS` in `models.ts:228`
was unused. **Guidance:** import `MODEL_COLORS`. ✅ Done.

### D6. `tooltipFor` duplicated ✅ DONE

`index.tsx:102-111` defines `tooltipFor`; profile page rebuilds same strings inline in `<title>`s.
**Guidance:** move `tooltipFor` next to shared hex helper. ✅ Done via `dimensionTooltip`.

### D7. Dead exports in data layer ✅ DONE

`sortSourceFor`, `getModel`, `MODEL_COLORS` (`models.ts`); `PAID_ONLY_PROVIDERS`, `getProvider`
(`providers.ts`); `FREE_ZEN_MODELS_URL` export (`freeZenLink.tsx`); `HELPS` (`contact/index.tsx`).
**Guidance:** delete truly dead ones; keep `MODEL_COLORS` and use it (D5). ✅ Done.

### D8. Providers page: seven near-identical section blocks ✅ DONE

`routes/providers/index.tsx:277-449` repeats same section block 7×. **Guidance:** drive from one
`SECTIONS` array + `.map()`. ✅ Done.

### D9. Homepage route is 1,478 lines in one component ✅ DONE

`routes/index.tsx` renders hero, facts strip, compare, methodology, all-models, decision shelf
in single `component$`. **Guidance:** split into section components under `src/components/v2/`.
✅ Done.

### D10. `sync-data.mjs` "emit if changed" block repeated 6× ✅ DONE

`scripts/sync-data.mjs:775-869` repeats read-prev/compare/write/log for 6 files. **Guidance:** one
`writeIfChanged` helper. ✅ Done.

### D11. `codegen.mjs` header is stale ⏳ PENDING

Header says "Two outputs" but module now exports 7 renderers/mutators. **Guidance:** update header
(docs-only).

### D12. Two different `warnOnce` implementations ⏳ PENDING

`models.ts:30-35` uses module-level `Set`; `providers.ts:186-194` stores Set as function property
via `as unknown as { s?: Set<string> }` casts. **Guidance:** use `models.ts` pattern in `providers.ts`
or lift shared `warnOnce.ts` helper.

### D13. Pricing renders diverge between pages ✅ DONE

Only model profile routes `pricingTiers`/`pricingNote` through `withFreeZenLink`. Homepage and
providers page render identical phrase as plain text. `withFreeZenLink` returns `any[]` in
`strict: true` codebase. **Guidance:** extract `<PricingTiers model=… />` and `<PricingBadge model variant=… />`.
✅ Done (creates B5 fix too).

### D14. `VendorIcon` re-derives props reactively ⏳ PENDING

`VendorIcon.tsx:226-239` holds `vendorSig`/`entrySig` signals + `useTask$` re-running
`vendorFor()` — but inputs are plain props, so component already re-renders on change.
**Guidance:** compute directly; drop `| string` from `icon: keyof typeof VENDOR_ICON_SVGS | string`.

### D15. `tsconfig.json` leaves `adapters/` and `scripts/` untypechecked ⏳ PENDING

`tsconfig.json:23` `"include": ["src", "vite.config.ts"]`. `adapters/static/vite.config.ts` (owns
`SITE_ORIGIN`) and all of `scripts/` outside typecheck. **Guidance:** `"include": ["src", "vite.config.ts", "adapters"]`.

### D16. `layout.tsx` route-guard has redundant branches ⏳ PENDING

Computes `path` after stripping slashes, then tests `path === "" || path === "/"`,
`startsWith("/model/")`, `startsWith("/providers")`, `path === "/design-6sol"`. `path === ""`
can never be true; `"/providers"` prefix swallows `/providers-*` routes. **Guidance:** use
normalized path with explicit set + `startsWith("/model/")`.

### D17. `src/data/evidence.ts` is one-function pass-through — no change needed

Legitimate code-split boundary (keeps `evidence.generated.ts` out of list-page bundles).
**Guidance:** listed only so future pass does not "inline it".

### D18. `entry.dev.tsx` / `entry.preview.tsx` — fine

Both needed by Qwik CLI. **Guidance:** no change.

---

## Part E — Data-tree health (report only — no deletions proposed)

`RULES.md` makes every `model/<slug>/` file and folder permanent. Nothing below is a deletion
proposal.

### E1. `models_finance/` holds two folders for one product ⏳ PENDING

`models_finance/ling-3.0-flash-fin/` (4 files incl. `meta.json`) and
`models_finance/ling-3.0-flash-fin-free/` (24 files incl. `meta.json` + `average.md`). By the
repo's tier-identity rule, `-free` suffix is an access tier, not a second model — reads as a
duplicate split. Finance tree not scanned by `pnpm sync`. **Guidance:** human decision — confirm
which tier is live; record in `model-aliases.generated.md` or `models_finance/README.md`.

### E2. `models_voice/` and `models_finance/` remain unwired ⏳ PENDING

9 folders of validated research (7 voice + 2 finance) invisible to both `pnpm sync` and the site.
`RULES.md:77` and `.agents/rules.md:26` both describe wiring as "pending". **Guidance:** extend
`pnpm sync` to scan these trees; wire into site.

### E3. Grandfathered fossils — do not touch

`Ling_3.0.md.replaced-by-Flash[_Fin]` files across `model/`, `models_voice/`,
`models_finance/` explicitly grandfathered by `.agents/rules.md:47`. **Guidance:** do not touch;
noted so future cleanup does not mistake them for cruft.

### E4. Scratch-file definition of Done ⏳ PENDING

`README.md`'s project-layout block does not mention scratch files in A1; after their removal,
re-verify `git ls-files` at root to confirm only intentional files remain.

---

## Part F — Priority execution order

Grouped so each step is independently verifiable. Step 0 first.

**Step 0 — restore ground truth (do first)**

```text
pnpm sync && pnpm build.types:direct && pnpm build:direct   (Windows: pnpm sync && pnpm build.types:direct && pnpm build:direct)
```
Confirms baseline, regenerates queue/aliases, re-logs stale registry keys (B2) and any scaffolded
stubs. Then get sign-off for remaining items.

**Step 1 — pure deletions (zero behaviour change)**

A8 `PRD/webshop-prd.md`.
Verify: `pnpm test` green, `pnpm build.types:direct` clean.

**Step 2 — correctness / latent bugs**

B7 `SITE_ORIGIN` env var · B8 manifest dedup · B9 per-model
title resolver · B10 contact email · B11 donate chips · B12 contact in desktop nav · B13 duplicate
slug · B14 sync-data.md contradiction.
Verify: `pnpm test` green, `pnpm build.types:direct` clean.

**Step 3 — documentation drift**

C2 promotion-rollback doc · C3 models.ts comment · C4 tech-stack scripts · C5 project map · C6
curated vs derived comment · C7 SIMPLIFY-PLAN citations · C9 vendorIcons header · C10 cache
receipts · C11 improvement logs.
Verify: `pnpm build.types:direct` clean.

**Step 4 — simplification / de-duplication**

D11 codegen.mjs header · D12 warnOnce unification · D14 VendorIcon reactive props · D15 tsconfig
include adapters · D16 layout.tsx route-guard.
Verify: `pnpm test` green, `pnpm build.types:direct` clean.

**Step 5 — data-tree health decisions (need user)**

E1 finance duplicate · E2 voice/finance wiring · E4 scratch-file Done verification.

**Step 6 — build & verify**

```text
pnpm sync && pnpm build.types:direct && pnpm build:direct
```

---

## Appendix — what was checked and found healthy

So a future audit does not re-walk this ground:

- **No `model/<slug>/` research file or folder is proposed for removal.** The two stray copies
  (A2, A3) are outside the `model/` tree and are exact duplicates/orphans; both require
  per-file sign-off.
- **The v2 component graph is fully live and lean:** `router-head.tsx`, `VendorIcon.tsx`,
  `freeZenLink.tsx`, `v2/V2Header.tsx`, `v2/V2Footer.tsx` — no orphaned components beyond
  `v2.css` (dead, A5).
- **`scripts/lib/` module split is sound:** 7 pure modules + 8 zero-dep `*.test.mjs` suites,
  all wired; only dead exports are in `src/data/` (D7).
- **Generated files correctly treated as build inputs, not output:** `scores.generated.ts`,
  `verified.generated.ts`, `evidence.generated.ts`, `sources.generated.ts`,
  `model-queue.md`, `model-aliases.generated.md`, `public/robots.txt` — all regenerated by
  `pnpm sync`, zero-failure-gated.
- **Build output untracked:** `.gitignore` correctly covers `node_modules/`, `dist/`, `server/`,
  `.qwik/`, `*.tsbuildinfo`, `tmp_*`, `temp_*`, `*.log`, `PRD/`, `.qoder/`,
  `src/routes/design*`, nested `.opencode/node_modules`.
- **No unused dependencies:** 9 devDependencies, zero runtime dependencies;
  `ignore@^5.3.2` is required by Qwik CLI per `.agents/tech-stack.md:17` — do not remove.
- **`.githooks/pre-commit`** present; slug/stem/twin/meta guards read correctly; activate with
  `git config core.hooksPath .githooks` if not set.
- **`vercel.json`** and `SITE_ORIGIN` canonical-origin wiring coherent and deployment-correct.
- **Identity/roster infrastructure consistent:** `RETIRED_SLUGS` mirror lists,
  `MERGED_MODEL_SLUGS`, `MERGED_SOURCE_STEMS`, `RETIRED_ALIAS_SLUGS` and generated
  `model-aliases.generated.md` agree; signature-vs-stem tripwire live in sync.

---

