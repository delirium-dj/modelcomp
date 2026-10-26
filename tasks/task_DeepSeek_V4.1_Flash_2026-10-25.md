# task_DeepSeek_V4.1_Flash_2026-10-25 — project purification & simplification audit

Audit date: 2026-10-25 · Audit by: **DeepSeek V4.1 Flash** (`nvidia/deepseek-ai/deepseek-v4.1-flash`)
Scope: whole repo — `src/`, `scripts/`, `.opencode/plugins/`, `.agents/`, `.antigravity/`, `assets/`,
`public/`, repo-root files, git state, and the generated-data pipeline.

> **Nothing was deleted, moved, renamed, or edited by this audit.** Every removal below needs your
> explicit per-item sign-off. Per `RULES.md` (file-deletion approval rule + research permanence),
> **no `model/**`, `models_voice/**`, `models_finance/**` findings file or `meta.json` / `average.md`
> is proposed for deletion here** — the only research-tree item flagged (the `modeljev-1.13/` stray
> duplicate) is explicitly marked "sign-off required" and can be left in place at zero cost.
> `RULES.md` wins on any conflict.

**Verification basis:** every claim below was re-checked against the files on disk with `git ls-files`,
`git status`, `grep`, `Get-FileHash`, and full reads. Claims I could not fully verify are marked
*(unverified)*. Per the repo workflow I did **not** run `pnpm sync` / `pnpm build` / `pnpm test` during
this audit (handover at the end).

**Relationship to prior audits (dated earlier this same day, already committed at HEAD `8e323f92`):**
- `tasks/task_Purify_2026-10-25.md` — a thorough purification audit. Most of Section A and the
  theme-init/hex duplication findings below **converge** with it (two independent passes landing on the
  same item is a strong signal it is real). Where they converge, I say so; where I add or correct
  detail, it is marked **[new]** / **[corrected]**.
- `tasks/task_Kimi_K3_2026-10-04.md`, `tasks/task_Claude_Opus_5_2026-10-04.md`,
  `tasks/task_Muse_Spark_1.3_2026-10-04.md` — earlier audits. Items already applied there are not
  re-listed.

---

## 0. Executive summary

| Part | Theme | Items | Risk |
|---|---|---|---|
| **A** | Safe removals — zero references, zero functional impact | 10 groups / ~45 files | low |
| **B** | Duplication → extract (behaviour-preserving simplification) | 9 | low–med |
| **C** | Correctness / latent bugs (real, small) | 6 | low–med |
| **D** | Doc / config drift | 7 | none |
| **E** | Verified healthy — no action | 8 | — |

Highest-value wins, in order:
1. **A1–A6 (~45 dead files)** — pure win, no decision beyond approval.
2. **C1 — the invalid Tailwind classes `text-md` ×9 and `font-inherit` ×2** — a real (small) visual bug, ~11-token diff. **[still open]** (flagged by the prior audit too).
3. **B1 — theme-init duplicated 4×** (~160 lines → ~45) — fully mechanical.
4. **C2 — `retiredAliasSlugs` documented hardening is not actually applied in the main folder loop** — a real comment/code mismatch, latent until a retired-alias folder is resurrected.
5. **A7/A8 — dead exports + one unused 1 KB vendor icon.**

**Baseline (measured today):** `src/` = 6 data modules + 6 components + 6 routes; `scripts/lib/` = 9 modules
+ 8 `*.test.mjs`; `.opencode/plugins/` = **12** retry plugins; `public/fonts/` = **68 files / 2.23 MB**
(2 files referenced); `dist/` + `server/` + `tsconfig.tsbuildinfo` present (build output). Working tree:
3 modified findings files + 9 untracked findings files (`git status`, unrelated to this audit).

---

## A. Safe removals — zero references, zero functional impact

Every file in A1–A4 was verified unreferenced: a repo-wide search (excluding `node_modules`, `dist`,
`.git`) finds mention only in `tasks/task_Purify_2026-10-25.md` itself (which lists them for removal)
and nowhere in `package.json`, `scripts/`, hooks, code, or docs-as-instructions.

### A1. Root one-off helper scripts (14 files)
Ad-hoc scans/generators from past research runs; superseded by `scripts/sync-data.mjs` + `scripts/lib/`.

`batch_write.cjs`, `check-missing.sh`, `check-missing.ps1`, `check_missing.ps1`, `create_excluded.ps1`,
`create_missing.mjs`, `find_missing_models.ps1`, `generate_files.py`, `generate_laguna_research.ps1`,
`generate_research.mjs` (a one-line stub with no logic), `scan-dates.cjs`, `scan2.cjs`, `summary.cjs`,
`update_research.mjs`.

### A2. Root scratch outputs (7 files)
`_t10.txt`, `_test_ascii.txt` (encoding smoke tests), `tmp_test.txt` (already gitignored),
`True` (a 0-byte stray shell redirect), `missing_beam.txt` (empty), `existing_slugs.txt`,
`queue_slugs.txt`, `missing_models.txt` (all stale slug lists — `model-queue.md` is the live roster).

### A3. Root / scripts temp scripts (3 files)
`.tmp-queue.cjs` (one-off queue recompute for STEM `MiniMax_M3.1_Flash`), `scripts/tmp-dates.cjs`,
`scripts/tmp-missing.cjs`.

### A4. Stale status / log docs (2 files)
- `GLM_4.7_FLASH_STATUS.md` — a 2026-10 run log; the work lives in `model/**/GLM_4.7_Flash.md` + `REPORT.md`.
- `model-report-Muse_Glimmer_30B-2026-10-25.md` — a run log committed to the **repo root** by mistake.
  The findings it summarizes already exist as `model/<slug>/Muse_Glimmer_30B.md`. Future run logs belong
  in `tasks/task_<STEM>_<DATE>.md` (e.g. this file).

### A5. Dead rollback backup (1 directory, 4 files) — **hash-verified identical**
`assets/avatar-backup-2026-10-05/` (`favicon.svg`, `manifest.json`, `router-head.tsx`, `README.txt`).
Verified by SHA-256: the backup `favicon.svg` (`105a2dc5…`) and `manifest.json` (`135320fa…`) are
**byte-identical** to the live `public/favicon.svg` / `public/manifest.json`. This backup has been dead
since 2026-10-05.

### A6. Empty directory (1)
`state/` — empty on disk, nothing tracked (git cannot track empty dirs). Leftover. Remove with
`Remove-Item -Recurse state` (outside git).

### A7. One unused vendor icon — **verified [new detail]**
`src/data/vendorIcons.generated.ts` inlines 90 SVGs. In `src/components/VendorIcon.tsx:69` the
`{ match: "hunyuan", icon: "tencent", label: "Tencent" }` entry points at the **`tencent`** icon and no
`hunyuan` model id exists in the dataset, so the `hunyuan` SVG entry is dead. Remove the `hunyuan` key
from the generated file and the source `assets/vendor-icons/hunyuan.svg` (~1 KB). (The file header says
it is hand-maintained, so this is a two-file edit.)

### A8. Dead exports — **verified by grep across `src/`**
| Symbol | Location | Evidence |
|---|---|---|
| `getModel` | `src/data/models.ts:449-451` | no caller; `MODELS.find` used directly |
| `sortSourceFor` | `src/data/models.ts:387-390` | no caller |
| `MODEL_COLORS` | `src/data/models.ts:228` | no caller; `index.tsx:56` re-declares `SERIES_COLORS` with the same values |
| `getProvider` | `src/data/providers.ts:146-148` | no caller; route imports only `PROVIDERS` |

Also over-exported (used only inside their own module — drop the `export` keyword, keep the code;
**low risk, cosmetic**): `checkOverallScores`, `hasFreeTier`, `VIRTUAL_VIEWS`, `ModelCategory`
(`models.ts`); `FREE_ZEN_MODELS_URL` (`freeZenLink.tsx:7`); `ProviderPlan`/`ProviderKind`/`ProviderMeta`/
`Provider` types (`providers.ts`); `EvidenceItem` re-export (`evidence.ts:3`).

**Do not touch:** `GeneratedScoreTuple` (`scores.generated.ts:5`) — exported-but-unused, but it is
emitted by `scripts/lib/codegen.mjs` and asserted by `codegen.test.mjs`; it is a test-locked contract.

### A9. Dead CSS / marker classes
- `src/components/v2/v2.css:7-21` — `.v2`, `.v2.dark`, and the `.v2`, `.v2 *` reduced-motion block.
  **No element carries a bare `v2` class** (every hit is a `V2*` component name, a `v2-*` marker, or
  `v2-theme`). `color-scheme` is already handled by `global.css` via `html.dark`. The file is imported
  3× but currently does nothing. See **C4** for the choice.
- Marker classes with no CSS anywhere: `v2-hero-copy`, `v2-hero-media` (`index.tsx:356, 386`),
  `v2-section-lead` (`index.tsx:1376`, inside the never-rendered decision shelf), `v2-support-copy`
  (`V2Footer.tsx:37`). `v2-cast-list` was searched — **it does not exist anywhere** (neither markup nor CSS).

### A10. Judgment call — `public/fonts/` is 2.23 MB, ~2.17 MB never fetched
`src/theme.css` declares `@font-face` for **31 families / 68 woff2 files**, but `--font-body` and
`--font-display` are both `"Ubuntu"` (`root.tsx` preloads only Ubuntu 400/700). The other 30 families
are an intentional *reskin menu* (documented in the theme.css header), not dead code — but they are the
bulk of the bytes. **Option 1:** keep (zero risk). **Option 2:** delete all but `public/fonts/ubuntu/*`
and trim `theme.css` to the Ubuntu block. Reskinning then means dropping in a new family.

**Command for Sections A1–A6, A8** (review first; delete as one reviewed batch):

```powershell
git rm -r --quiet batch_write.cjs check-missing.sh check-missing.ps1 check_missing.ps1 create_excluded.ps1 `
  create_missing.mjs find_missing_models.ps1 generate_files.py generate_laguna_research.ps1 `
  generate_research.mjs scan-dates.cjs scan2.cjs summary.cjs update_research.mjs `
  _t10.txt _test_ascii.txt True missing_beam.txt tmp_test.txt existing_slugs.txt queue_slugs.txt `
  missing_models.txt .tmp-queue.cjs GLM_4.7_FLASH_STATUS.md `
  model-report-Muse_Glimmer_30B-2026-10-25.md scripts/tmp-dates.cjs scripts/tmp-missing.cjs `
  assets/avatar-backup-2026-10-05
Remove-Item -Recurse state   # untracked empty dir
```

The authored edits (A7 icon, A8 exports, A9 CSS) are normal file edits, not `git rm`.

---

## B. Duplication → extract (behaviour-preserving)

All verified by grep. Sequence these **after** C1 (the one real bug) so diffs stay reviewable.

### B1. Theme-init `useVisibleTask$` block duplicated 4× (highest-value cleanup) — **[shared with prior audit]**
The identical ~40-line bootstrap (stored `v2-theme` → inherited `html.dark` → OS preference, writing back
`v2-theme` + `theme` + `html.dark`) is copy-pasted in:
`src/routes/layout.tsx:29-68`, `src/routes/index.tsx:146-189`, `src/routes/providers/index.tsx:26-65`,
`src/routes/model/[slug]/index.tsx:91-130`.

**Guidance:** extract `src/components/v2/useThemeInit.ts` exporting `useThemeInit(): Signal<"light"|"dark">`
(call `useVisibleTask$` unconditionally at hook scope — Qwik-safe). Replace all four sites with
`const theme = useThemeInit();`. ~160 lines → ~45, one source of truth for the "single writer" invariant
the comments defend. (design-6sol deliberately uses its own `d6-theme` key — leave it isolated.)

### B2. Hexagon geometry triplicated — **[corrected: it's 3×, not 2×]**
`HEX_GAMMA`, `hexPoint`, `hexPolygon` exist in `src/routes/index.tsx:50-91`,
`src/routes/model/[slug]/index.tsx:39-65`, and `src/routes/design-6sol/index.tsx:45-72`. `barWidth`
exists in the latter two (identical). Constants differ (`HEX_CY` 200 vs 172; `HEX_MAX_R` 130 vs 108), so
keep those as parameters.
**Guidance:** one `src/lib/hex.ts` with `hexPoint(value, index, { maxR, cx, cy })`, `hexPolygon`,
`barWidth`, `HEX_GAMMA`. A shared `<HexRadar>` SVG component is the follow-up (4 renderings: `index.tsx:387-483`,
`index.tsx:595-675`, `model/[slug]/index.tsx:317-354`, `design-6sol/index.tsx:292-326`).

### B3. Dimension label tables triplicated — **[new detail: `DIMENSIONS` already has them]**
`tableKeys`, `names`, `colNames` (and `qualityKeys`/`hexKeys`) are re-declared in `index.tsx:25-48`,
`model/[slug]/index.tsx:20-39`, `design-6sol/index.tsx:9-26` — yet `DIMENSIONS` in
`src/data/models.ts:184-223` already carries `label`/`short`/`description` in the same order.
**Guidance:** export derived `DIM_LABELS`/`DIM_SHORT` maps from `models.ts` and import them. Preserve the
two orderings (table order vs hex-clockwise order).

### B4. Best/worst column-highlight logic triplicated
`colBestWorst`/`hlStats`/`hlClass` (+ `hlTitle` in 2 of 3) at `index.tsx:273-296`,
`model/[slug]/index.tsx:177-199`, `design-6sol/index.tsx:156-178`. The homepage and profile emit the
**same** Tailwind best/worst class strings. **Guidance:** `src/lib/scoreHighlight.ts`.

### B5. Footer sponsor/backer data duplicated
`src/components/v2/V2Footer.tsx:9-31` vs `design-6sol/index.tsx:29-43` (identical values, `D6_*` names).
**Guidance:** export the data from one place. (design-6sol is deliberately self-contained — product call.)

### B6. `warnOnce` implemented twice with different mechanisms
`models.ts:30-35` (module-level `Set`) vs `providers.ts:51-59` (Set cached on the function object via a
double cast, to survive per-environment re-evaluation). **Guidance:** one shared `src/data/warnOnce.ts`.

### B7. `top3Ids` re-implements the component's ranking pipeline
`top3Ids(src)` (`index.tsx:111-130`) vs `withSource`/`rankBase` (`index.tsx:206-222`). **Guidance:**
one module-level `rankBySource(src): AiModel[]`; `top3Ids` becomes a 3-line wrapper and `cmpA/B/C`/`top`
derive from the same ranked array. (Finishes the open `BACKLOG.md` "pre-bake top-3 rankings" item.)

### B8. Duplicated "Show more / Show all" button JSX
`index.tsx:1102-1123` (cards) and `index.tsx:1338-1361` (list) — near-identical. Extract a tiny component.

### B9. Ratings-table machinery duplicated (intentional design study)
`model/[slug]/index.tsx:153-207, 497-593` vs `design-6sol/index.tsx:125-184, 392-451` — near-identical
derivation + markup (differs only in class names). Worth a shared `RatingsTable` **if** design-6sol is
kept; otherwise it dies with that route (see D5).

Also: `SERIES_COLORS` (`index.tsx:56`) == the dead `MODEL_COLORS` (`models.ts:228`) == the first 3
entries of `HERO_COLORS` (`index.tsx:58-61`); consolidate once A8 lands. And `model/[slug]/index.tsx`
hardcodes `#557ddd`/`#7ba0ef` 6× while `--color-primary` is available in `theme.css`.

---

## C. Correctness / latent bugs (real, small)

### C1. Invalid Tailwind classes — real visual bug, not just hygiene — **[verified; shared with prior audit]**
`src/routes/index.tsx` uses **`text-md` ×9** (lines 503, 512, 520, 570, 679, 687, 769, 973, 981) and
**`font-inherit` ×2** (lines 1190, 1240). Tailwind v3 has neither class and `tailwind.config.js` extends
no `fontSize` — they are silent no-ops. The profile page already uses the correct forms
(`font-[inherit]`, explicit sizes). **Guidance:** `text-md` → the intended size (`text-base`),
`font-inherit` → `font-[inherit]`. **Low risk, mechanical.**

### C2. `retiredAliasSlugs` hardening promised but not applied — **[new; verified]**
`scripts/sync-data.mjs:331-336` documents that retired-alias slugs get "the same hardening as merged
slugs: no meta.json scaffold, no average.md rewrite, no score-index / registry input". The set is built
at `:337-344` and **is** used for the rater gate (`:377`) and catalog (`:394`) — but the main folder loop
skips only `hyphenSlugs` (`:422`) and `mergedSlugs` (`:426`); there is **no `retiredAliasSlugs.has(slug)`
skip**. A resurrected retired-alias folder would therefore still be scaffolded/averaged/indexed, contrary
to the comment. Latent (no such folder exists today). **Guidance:** add the missing skip at
`sync-data.mjs:421`, mirroring `:422/:426`. Test-covered by the existing `validate.test.mjs`/`average.test.mjs`.

### C3. `agreeEvidence` sort comparator never returns 0
`scripts/lib/benchmarks.mjs:151` uses `(a.benchmark < b.benchmark ? -1 : 1)`, so ties never compare equal.
Today V8's stable sort hides it, but it is a fragile invariant relied on by the "collapse to the
most-cited figure" step. **Guidance:** `a.benchmark.localeCompare(b.benchmark) || a.key.localeCompare(b.key)`.

### C4. `v2.css` reduced-motion protection is inert (decision needed)
Two options, both fine — pick one: **(1)** add `v2` to the page-root `class` of the importing canvases
(restores the intended `color-scheme` + reduced-motion kill switch), and drop the now-redundant `v2.css`
imports in `index.tsx:12` / `providers/index.tsx:7` (layout's import already covers them); **(2)** delete
`v2.css` and its 3 imports (visual no-op today, but the intended features stay unshipped). Current
`motion-reduce:animate-none` at `index.tsx:424` still works either way.

### C5. `design-6sol/` is uncommitted but still builds locally
`.gitignore:15` (`src/routes/design*`) keeps both files out of git, yet Vite scans the filesystem — so a
local build compiles the route. Nothing links to `/design-6sol`; no page exports `onStaticGenerate` for
it; the only code reference is the layout-chrome skip at `src/routes/layout.tsx:19`. **Decision:**
keep as a local study (remove the stale `path === "/design-6sol"` branch only if deleting the folder) —
or delete both files **with owner sign-off** (they are not in git, so deletion is irreversible). If kept,
B9/B5 apply; if deleted, D5 resolves too.

### C6. Contact form is permanently inert
`src/routes/contact/index.tsx:7` — `CONTACT_EMAIL = ""`. The form can never send; it always answers
"not configured yet". Either configure the inbox or replace the page with a direct `mailto:`/GitHub
link. (Not a cleanup per se — flagged because a dead-looking form is a UX defect.)

### C7. `sources.generated.ts` read twice per sync run
`scripts/sync-data.mjs:411` (`sourcesTsGate`) and `:710` (`sourcesTs`) both `readFileSync` the same file.
Reuse the first read.

### C8. Small dead branches / stale bits in `enrich-models.mjs`
- `:470` `const text = tier;` — pointless alias; use `tier`.
- `:483` `p.noFreeRe?.test(text)` — `p.noFreeRe` is the same regex as `noFreeId`, so the operand is dead.
- `:299-314` `STOPWORDS` contains exact duplicates (`"varies"`, `"weights"`, `"expected"`).
- `:316` `NO_MD` includes `"meta.json"`, unreachable (the `.md` filter short-circuits first).

### C9. Fragile literal splits in the parser (robustness, low priority)
`average.mjs:99` splits on the literal `"## Averaged scores"`; `quarantine.mjs:29,43` split on literal
headings. Anchor these with `^…/m` regexes (CRLF-tolerant) before slicing. Add a CRLF test.

---

## D. Doc / config drift

1. **`.antigravity/history/project-map.md:39`** still names `HexRadar`, `ModelCards`, `CompareSection` as
   components — those files no longer exist (v1 chrome was removed 2026-10-20). Also the map's sync
   prose is slightly behind (mentions `sources.generated.ts` but the plugin count elsewhere differs).
2. **`AGENTS.md` says `.opencode/plugins/` has 11 plugins; disk has 12** (`api-connect-retry`,
   `bang-drop-retry`, `budget-retry`, `deepseek-continue-retry`, `fledge-endpoint-retry`,
   `gpt-sol-budget-retry`, `model-turn-retry`, `provider-content-filter-retry`,
   `provider-headers-timeout-retry`, `provider-high-demand-retry`, `provider-invalid-request-retry`, and
   the `bang-drop-retry` silent-drop rescan is part of it). Minor; the list is illustrative.
3. **`scripts/sync-data.mjs:364`** comment says `SHORT lives in scripts/lib/parse.mjs (imported above)`
   but `SHORT` is not imported. **`:21-27`** step-4 comment is garbled.
4. **`scripts/lib/parse.mjs:2` / `parse.test.mjs:2`** say "`npm test`" — repo is pnpm-only.
   `validate.mjs:182` message says "(letters, digits, underscore only)" but `FILENAME_RE` also allows
   version dots.
5. **`modeljev-1.13/` at the repo root** — a findings file written outside the `model/<subject>/` tree
   (missing-slash typo for `model/jev-1.13/`). **Hash-verified:** the canonical
   `model/jev-1.13/MiniMax_M3.1_Flash.md` exists and the root copy is **byte-identical**
   (`sha256 c7f4ca94…29736b`), so `pnpm sync` never scans it and nothing is lost. **Sign-off required**
   (it is a research file): `git rm -r modeljev-1.13`, then `pnpm sync` to confirm no drift.
6. **`REPORT.md` is 142 KB** append-only history (keep; optionally archive pre-2026-10 sections).
7. **v1-era comments remain** where no v1 code does: `index.tsx:55, 107, 148-151, 204, 319`,
   `theme.css:111-112`, `root.tsx:12-19, 46-49, 53-63`, `V2Header.tsx:4-11`, `V2Footer.tsx:4-6`,
   `models.ts:6-7`. Sweep when touching each file; no action on its own.

---

## E. Verified healthy — no action

- **Entry points:** `entry.preview.tsx` (`build.preview`), `entry.ssr.tsx` (preview import + dev/build
  convention), `entry.dev.tsx` (Qwik optimizer convention) — all wired, none dead.
- **Import graph:** no orphaned file under `src/`; no broken relative imports; all referenced `public/`
  assets exist.
- **Unused imports/locals:** none possible — `tsconfig.json` sets `noUnusedLocals` + `noUnusedParameters`
  and includes all of `src`, so `pnpm build.types` would already fail on any.
- **`evidence.ts` split:** correctly keeps the ~572 KB `evidence.generated.ts` code-split to profile routes only.
- **Test matrix:** `package.json` "test" lists exactly the 8 `*.test.mjs` files in `scripts/lib/`
  (no orphans/gaps). `providers.test.mjs` is a data-schema gate (no `providers.mjs` module by design).
- **No TODO/FIXME/HACK/XXX** in `src/` or `scripts/`.
- **Config:** `vite.config.ts`, `tsconfig.json`, `tailwind.config.js`, `postcss.config.js`,
  `adapters/static/vite.config.ts`, `.githooks/pre-commit`, `.github/FUNDING.yml`, `vercel.json`,
  `opencode.json` all current and used. `scripts/lib/*.mjs` is dependency-free and `console.*`-free.
- **Plugin suite:** 12 retry plugins all match the documented 3-shape hardening pattern; `.opencode/node_modules`
  is gitignored.

---

## F. Priority order

1. **Section A** — ~45 dead files, no decision needed beyond approval. Then **A7** (icon) + **A8** (exports).
2. **C1** — fix `text-md` ×9 / `font-inherit` ×2. Real (small) visual bug, tiny diff.
3. **C2** — add the missing `retiredAliasSlugs` skip in `sync-data.mjs` (comment/code contract).
4. **B1** — extract `useThemeInit` (~160 → ~45 lines).
5. **B2/B3/B4/B7** — shared `hex.ts` / derived dimension maps / `scoreHighlight.ts` / `rankBySource`.
6. **B5/B6/B8** + import `MODEL_COLORS`; then **B9** only if design-6sol is kept.
7. **C4** — decide `v2.css` (wire `v2` or delete).
8. **C3/C7/C8/C9** — small pipeline hardening.
9. **A10/B1-font** — your call on the reskin font menu (2.17 MB).
10. **D1–D4** — doc drift sweep; **D5** — one `git rm` on the stray `modeljev-1.13/` **after sign-off**;
    **C5** — decide design-6sol.

## G. Verification after any approved change

```powershell
pnpm test                                                   # must stay green (baseline: 471 pass)
pnpm sync && pnpm build.types:direct && pnpm build:direct    # Windows-safe form
git diff --stat                                              # confirm only intended paths changed
```

Sections A/B/C (files/asset edits) need nothing beyond `pnpm test` + a `dist/index.html` spot-check.
Section C (scripts) must be followed by `pnpm test` (and `pnpm sync` if the pipeline changed).
Section D5 must be followed by `pnpm sync` to confirm no dataset drift.
