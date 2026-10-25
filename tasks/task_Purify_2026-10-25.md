# task_Purify_2026-10-25 — project purification & simplification audit

Audit date: 2026-10-25 · Scope: full repo scan (code, data pipeline, assets, docs, scripts) · Baseline health: `pnpm test` **471/471 pass** at audit time.

**Nothing was deleted, moved, or edited by this audit.** Per `RULES.md` (file-deletion approval rule) every item below needs your per-item confirmation before it is executed. Commands are grouped so you can approve by section.

> **Second pass (2026-10-25, later):** sections A–F below were re-verified by an independent full scan (every export in `src/` and `scripts/lib/` grepped across the whole tree; entry points, test matrix, imports, and flags cross-checked). All first-pass findings held. Sections **G–J** below are the new second-pass findings that the first pass missed; **D1 was upgraded** with hard evidence.

---

## A. Safe removals — zero references, zero functional impact

Every file below was verified unreferenced: `git grep` across the whole tree (excluding `node_modules`) finds no mention in `package.json`, scripts, hooks, docs-as-instructions, or source. Removal restores nothing and breaks nothing. All are recoverable from git history after deletion.

### A1. Root one-off helper scripts (14 files)

Ad-hoc scans/generators from past research runs; superseded by `scripts/sync-data.mjs` + `scripts/lib/` (all covered by the test suite).

| File | What it was |
|---|---|
| `batch_write.cjs` | ad-hoc bulk file writer |
| `check-missing.sh` / `check-missing.ps1` / `check_missing.ps1` | three spellings of the same "which queue models lack file X" scan (`check_missing.ps1` duplicates `check-missing.ps1`) |
| `create_excluded.ps1` | ad-hoc `.md.excluded` creator |
| `create_missing.mjs` | ad-hoc file scaffolder |
| `find_missing_models.ps1` | another missing-model scan |
| `generate_files.py` | Python-era generator |
| `generate_laguna_research.ps1` | one-stem research scaffolder |
| `generate_research.mjs` | stub (single comment line, no logic) |
| `scan-dates.cjs` / `scan2.cjs` / `summary.cjs` | one-off date/summary scanners |
| `update_research.mjs` | one-off research updater |

### A2. Root scratch outputs (7 files)

| File | What it was |
|---|---|
| `_t10.txt`, `_test_ascii.txt` | encoding smoke-test output |
| `tmp_test.txt` | 4-byte test (already gitignored — deleting is cosmetic only) |
| `True` | **0-byte file**, almost certainly a stray shell redirect (`> True`) |
| `missing_beam.txt` | empty scan output |
| `existing_slugs.txt`, `missing_models.txt`, `queue_slugs.txt` | stale slug lists; `model-queue.md` is the live roster |

### A3. Root temp scripts (2 files)

| File | What it was |
|---|---|
| `.tmp-queue.cjs` | one-off queue recompute for STEM `MiniMax_M3.1_Flash` |
| `scripts/tmp-dates.cjs`, `scripts/tmp-missing.cjs` | same pattern inside `scripts/` (the sanctioned tooling lives in `scripts/lib/`, tested) |

### A4. Stale status/log docs (2 files)

| File | Why removable |
|---|---|
| `GLM_4.7_FLASH_STATUS.md` | a 2026-10 run log ("32 files created, 148 missing"); the work itself lives in `model/**/GLM_4.7_Flash.md` and `REPORT.md` |
| `model-report-Muse_Glimmer_30B-2026-10-25.md` | a run log committed to the **repo root** by mistake (commit `a4afc7b6`). The findings it describes already exist as `model/<slug>/Muse_Glimmer_30B.md` in 100+ folders. Future run logs belong in `tasks/task_<STEM>_<DATE>.md` — e.g. this file. |

### A5. Stale rollback backup (1 directory)

| Path | Why removable |
|---|---|
| `assets/avatar-backup-2026-10-05/` (4 files) | Pre-avatar favicon rollback kit (`favicon.svg`, `manifest.json`, `router-head.tsx`, `README.txt`). The rollback never happened: the live `public/favicon.svg` and `public/manifest.json` are **byte-identical** to the backup copies (verified by hash), so this backup has been dead since 2026-10-05. |

### A6. Empty directory (1)

| Path | Why removable |
|---|---|
| `state/` | Empty on disk, nothing tracked (git cannot track empty dirs). Leftover from an old workflow. |

**Command for Section A** (review the list first, then delete as one reviewed batch):

```powershell
git rm -r --quiet batch_write.cjs check-missing.sh check-missing.ps1 check_missing.ps1 create_excluded.ps1 create_missing.mjs find_missing_models.ps1 generate_files.py generate_laguna_research.ps1 generate_research.mjs scan-dates.cjs scan2.cjs summary.cjs update_research.mjs _t10.txt _test_ascii.txt True missing_beam.txt tmp_test.txt existing_slugs.txt missing_models.txt queue_slugs.txt .tmp-queue.cjs GLM_4.7_FLASH_STATUS.md model-report-Muse_Glimmer_30B-2026-10-25.md scripts/tmp-dates.cjs scripts/tmp-missing.cjs assets/avatar-backup-2026-10-05
Remove-Item -Recurse state   # untracked empty dir
```

> `state/` deletion is outside git (`git rm` cannot remove an untracked dir). None of the touched paths are `model/**` research files, so the pre-commit guard and the `RULES.md` deletion rule do not apply — but per `RULES.md` I still ask for your explicit go-ahead.

---

## B. Judgment-call items — need your decision

### B1. `public/fonts/` is 2.23 MB; ~2.17 MB is never fetched

`src/theme.css` declares `@font-face` for **31 families / 68 woff2 files (66 rules)**, but `--font-body` and `--font-display` are both `"Ubuntu"` (root.tsx preloads only Ubuntu 400/700 — 2 of the 68 files, 63 KB). The other 30 families are declared purely as a *reskin convenience* ("the only file you need to touch to reskin the site" — theme.css header). Consequences: every clone/deploy carries ~2.17 MB of fonts no browser will ever request, and the family list in the theme.css comment must stay in sync with the files.

- **Option 1 (keep as-is):** zero risk; deliberate flexibility retained.
- **Option 2 (recommended if repo/deploy weight matters):** delete all but `public/fonts/ubuntu/*` (66 files, ~2.17 MB), and trim `theme.css` to the Ubuntu `@font-face` block + a shorter header comment. Reskinning then means dropping in a new family — acceptable because the site has shipped one font since 2026-10-15.
- Either way, the unused `hunyuan` key (see B2) is independent of this choice.

### B2. One unused vendor icon

`src/data/vendorIcons.generated.ts` inlines 90 SVGs; `VendorIcon.tsx`'s `VENDORS` table references 89. Unused: **`hunyuan`** (the table maps `hunyuan` → the `tencent` icon). Remove the key from the generated file and the source `assets/vendor-icons/hunyuan.svg` (~1 KB). File header says it is hand-maintained, so this is a two-file edit.

### B3. `BACKLOG.md` — one item is now done, two are half-done

"Redesign site from the `design-6sol` study" — largely delivered (homepage + profile pages already use the 6sol language: Bars/Hexagon switch, scoped theme toggle, phone column widths). Consider marking it done. "Pre-bake top-3 rankings" — the cheap half (`top3Ids` collapse) already happened; keep the remainder. No file removal recommended.

---

## C. Code simplifications — no behavior change

### C1. Theme-init block duplicated 4× (highest-value cleanup)

The identical ~40-line `useVisibleTask$` theme bootstrap (stored `v2-theme` → inherited `html.dark` → OS preference, writing all three) is copy-pasted in:

- `src/routes/index.tsx:147-189`
- `src/routes/model/[slug]/index.tsx:92-130`
- `src/routes/layout.tsx:30-68`
- `src/routes/providers/index.tsx:27-65`

**Guidance:** extract `src/components/v2/useThemeInit.ts` exporting `useThemeInit(): Signal<"light"|"dark">` (signal + task inside, Qwik-safe since `useVisibleTask$` is called unconditionally at hook scope). Replace all four call sites with `const theme = useThemeInit();`. ~160 lines → ~45, single source of truth for the "single writer" invariant the comments defend. Zero DOM/behavior change.

### C2. Hex geometry duplicated between homepage and profile page

`hexPoint` / `hexPolygon` (with the same γ = LN2/log(100/75) top-end emphasis) plus `names` / `colNames` label maps exist twice: `src/routes/index.tsx:33-91` and `src/routes/model/[slug]/index.tsx:22-65`. The constants differ slightly (`HEX_CY` 200 vs 172) so keep those as parameters.

**Guidance:** one `src/components/v2/hex.ts` (`hexPoint(value, index, maxR, cx, cy)`, `hexPolygon`, `DIM_LABELS`, `DIM_SHORT`) and a small `<Hexagon>`-style shared SVG piece later; start with the pure functions. The duplication is a real drift risk: the comments already had to explain "same γ as the other page".

### C3. Dead exports in `src/data/models.ts`

Verified unused anywhere in `src/`:

- `getModel` (`models.ts:449`) — nothing calls it; `MODELS.find` is used directly.
- `sortSourceFor` (`models.ts:387`) — unused (headline sorting uses its own logic).
- `MODEL_COLORS` (`models.ts:228`) — unused; pages define local `SERIES_COLORS` (identical values). The only mention of the name is a comment in `index.tsx:55`.
- `checkOverallScores` (`models.ts:457`) — only called by its own dev block at the bottom; drop the `export` keyword, keep the function.

### C4. `top3Ids` vs the in-component ranking (finishes BACKLOG item D1)

`top3Ids(src)` (`index.tsx:111-130`) and the component body's `withSource`/`rankBase` pipeline (`index.tsx:206-222`) re-implement the same filter-map-sort with slightly different shapes. **Guidance:** one module-level helper `rankBySource(src): AiModel[]` returning the sorted generative list; `top3Ids` becomes a 3-line wrapper over it and the component body calls it directly. Also lets `cmpA/B/C` defaults and `top` derive from the same ranked array.

### C5. Small consistency fixes

- `src/data/providers.ts:51-59` — `warnOnce` caches its `Set` on the function object (`(warnOnce as {...}).s`), a workaround for the re-evaluation problem `models.ts:30-35` solves with a plain module-level `Set`. Use the shared pattern (or extract one tiny `src/data/warnOnce.ts` used by both) — removes the double cast.
- `src/components/freeZenLink.tsx:11` — returns `any[]`; type it as `JSX.Element[]` / `(string | JSX.Element)[]` for strict-mode cleanliness.
- `src/routes/contact/index.tsx` — `CONTACT_EMAIL = ""` makes the contact form permanently inert (audit B12 still open). Not a cleanup item, but if the inbox stays unconfigured, consider deleting the page alternative: link `mailto:` or the GitHub issues URL directly instead of a form that always answers "not configured".

---

## D. Data/consistency observations (report-only — `RULES.md` protections apply)

These are **not** actionable without your explicit per-item sign-off; listed so they are on record.

1. **`modeljev-1.13/` at the repo root** contains `MiniMax_M3.1_Flash.md` — a findings file written outside the `model/<subject>/` tree (typo'd folder name; committed in `33fa6efb`). **Upgraded after verification:** the canonical `model/jev-1.13/MiniMax_M3.1_Flash.md` already exists and the root copy is **byte-identical** (SHA-256 match), so nothing is lost and nothing needs moving — the root copy is a pure duplicate that sync never scans. **Fix direction (needs your confirmation per `RULES.md`):** `git rm -r modeljev-1.13` (the canonical file in `model/jev-1.13/` is untouched), then run `pnpm sync` to confirm no drift.
2. **Underscore model folders** `model/north_mini_code/`, `model/pixel_canary/`, `model/xing_4.0_29b_a4b/` deviate from the hyphenated-slug convention. They are permanent dataset folders (never rename per `RULES.md`); noted for the record only.
3. **`REPORT.md` is 142 KB** append-only history. A prior audit already suggested archiving pre-2026-10 sections; optional, low priority.
4. **`docs/v2-promotion-rollback.md`** — still referenced by a code comment and documents the (now years-stale) v1 rollback recipes. Keep; optionally compress to a history note since v2 has been primary since 2026-10-15.

---

## G. Second-pass findings — src/ (dead code + real bugs)

### G1. One more dead export: `getProvider`

`src/data/providers.ts:146-148` — defined, never called (`routes/providers/index.tsx` imports only `PROVIDERS`). Delete alongside C3's items. **Low risk.**

### G2. `src/components/v2/v2.css` matches nothing — intended behavior silently dead

Its only selectors are `.v2`, `.v2.dark`, and a reduced-motion block targeting `.v2, .v2 *` — but **no element in any `.tsx` carries a bare `v2` class** (every grep hit is `V2*` component names, `v2-*` marker classes, or `v2-theme`). The file is imported 3× (`layout.tsx:5`, `index.tsx:12`, `providers/index.tsx:7`) yet currently does nothing on every page.

- **Option 1 (recommended):** add `v2` to the page-root `class` of the three importing canvases — restores the intended `color-scheme` + reduced-motion protections. Note the imports are also redundant: layout's module-level import already covers all routes using it (`/model/*` relies on it transitively) — drop the duplicate imports in `index.tsx:12` / `providers/index.tsx:7`.
- **Option 2:** delete the file — a visual no-op today, but it silently drops the *intended* color-scheme/reduced-motion features.

**Medium risk** — needs a typecheck + visual spot-check after.

### G3. Invalid Tailwind classes — real (small) visual bug, not just hygiene

`src/routes/index.tsx` uses **`text-md` ×9** (lines 503, 512, 520, 570, 679, 687, 769, 973, 981) and **`font-inherit` ×2** (lines 1190, 1240). Tailwind v3 has neither class and `tailwind.config.js` extends no `fontSize` — they are silent no-ops. The profile page uses the correct forms (`text-base`-ish explicit sizes, `font-[inherit]` — `model/[slug]/index.tsx:508, 533`).

**Guidance:** replace `text-md` → `text-base` (or the intended size) and `font-inherit` → `font-[inherit]`. **Low risk**, mechanical.

### G4. Unreachable conditional

`src/routes/layout.tsx:15` — `path === ""` can never be true (`pathname` always starts with `/`, and the two `replace` calls above guarantee `path` starts with `/`). Harmless belt-and-braces; remove or keep. **Low risk.**

### G5. Dead CSS odds and ends

- `--d6-orange` variable defined (`design-6sol/study.css:8` and `:52` dark override) but never referenced via `var()` — orange accents are hardcoded in markup (`design-6sol/index.tsx:1398` uses `border-t-[#dfab77]`). Delete the declarations or actually use the variable.
- Marker classes with no CSS anywhere (not in v2.css/theme.css/global.css/tailwind config): `v2-hero-copy`, `v2-hero-media` (`index.tsx:356, 386`), `v2-section-lead` (`index.tsx:1376`), `v2-support-copy` (`V2Footer.tsx:37`). Delete the class attributes or write the intended CSS.
- `theme.css` declares ~30 `@font-face` families (66 rules); only Ubuntu is referenced by `--font-body`/`--font-display`, plus `system-ui` in `VendorIcon.tsx:177` and DM Sans/Outfit in `study.css`. This overlaps B1 — see it for the fate of the whole file.

### G6. Over-exported symbols (drop the `export` keyword, keep the code)

Used only inside their own module — misleading as public API, tree-shaken anyway:

| Symbol | Location | Only user |
|---|---|---|
| `hasFreeTier` | `models.ts:173` | `models.ts:145` |
| `VIRTUAL_VIEWS` | `models.ts:367` | `models.ts:378/389/442` |
| `checkOverallScores` | `models.ts:457` | its own DEV block (C3 already flags this) |
| `ModelCategory`, `EvidenceItem`, `ProviderPlan`, `ProviderMeta`, `ProviderKind` | types | internal only (type exports are erased; cosmetic) |
| `FREE_ZEN_MODELS_URL` | `freeZenLink.tsx:7` | `freeZenLink.tsx:21` |

**Low risk**, cosmetic.

---

## H. Second-pass duplication map (extends C1–C4)

All verified by grep; each is shareable without behavior change. Sequence after C1 lands, per F.

| # | What is duplicated | Locations | Risk |
|---|---|---|---|
| H1 | Hexagon geometry (`HEX_GAMMA`, `hexPoint`, `hexPolygon`) — **triplicated**, not just twice as C2 says; `design-6sol` has its own copy | `index.tsx:50-91`, `model/[slug]/index.tsx:40-65`, `design-6sol/index.tsx:46-72` | low-med |
| H2 | Dimension label tables (`tableKeys`, `names`, `colNames`, `qualityKeys`, `hexKeys`) ×3 — although `DIMENSIONS` in `models.ts:184-223` already carries label/short/description in the same order; preserve the two orderings (table vs hex-clockwise) when deriving | `index.tsx:25-48`, `model/[slug]/index.tsx:20-39`, `design-6sol/index.tsx:9-26` | low-med |
| H3 | Best/worst column highlight logic (`colBestWorst`/`hlStats`/`hlClass`, `hlTitle` in 2 of 3) ×3 | `index.tsx:273-296`, `model/[slug]/index.tsx:177-199`, `design-6sol/index.tsx:156-178` | low-med |
| H4 | Shared string helpers `formattedDate` + `sourceName` (identical) ×2 | `model/[slug]/index.tsx:204-207`, `design-6sol/index.tsx:181-184` | low |
| H5 | Footer sponsor/backer constants (`SPONSOR_URL`, tiers, backers, five soon-links) ×2 | `V2Footer.tsx:9-31`, `design-6sol/index.tsx:29-43` | low (d6 is deliberately self-contained — product call) |
| H6 | Dual theme storage keys: every writer stores both `v2-theme` and legacy `theme` only so `root.tsx:33`'s anti-flash script (still reading `theme`) stays in sync — v1-era compat debt; consolidating to one key touches the anti-flash script | `root.tsx:29-44` + 5 writers (V2Header.tsx:81-82, layout:36-37, index:157-158, providers:33-34, model/[slug]:98-99) | med |
| H7 | `warnOnce` implemented twice with different mechanisms | `models.ts:31-35`, `providers.ts:51-59` (C5 already suggests unifying) | low |
| H8 | Ratings-table machinery ~70 lines near-identical | `model/[slug]/index.tsx:153-176, 500-556` vs `design-6sol/index.tsx:125-152, 397-449` | med (d6 is an intentional design study — product call, not pure cleanup) |
| H9 | Leftover v1 *comments* (no v1 code remains): `index.tsx:55, 107, 148-151, 204, 319`, `theme.css:111-112`, `root.tsx:12-19, 46-49, 53-63`, `V2Header.tsx:4-11`, `V2Footer.tsx:4-6`, `models.ts:6-7` | sweep when touching each file | none |

`design-6sol` also uses its own `d6-theme` key / `.d6-dark` (never `html.dark`) — intentional isolation for a design study; flagged for awareness, no action.

---

## I. Second-pass findings — scripts/ (pipeline simplifications)

No truly dead exports exist in `scripts/lib/*.mjs` — every export is consumed by `sync-data.mjs`, a sibling module, its own test suite (test-contract exports), or cited by name in the rule docs. CLI flags (`--quiet`, `ALLOW_MODEL_DELETE`, `SITE_ORIGIN`) are documented and handled consistently in both directions. The remaining value is in duplication removal:

| # | Finding | Fix | Risk |
|---|---|---|---|
| I1 | Score-line regex `\*\*${label}:\s*([\d.]+)/100` built twice | export a `scoreLineRe(label)` from `parse.mjs:55`; reuse in `quarantine.mjs:30` (preserve NaN-tolerance semantics) | med |
| I2 | SOURCE_DEFS entry regex copy-pasted inline at `sync-data.mjs:413` although `parseRegistryEntries` is already imported (line 76) with the same capture groups | replace the inline `matchAll` | low |
| I3 | Five near-identical emit blocks (`readFileSync → !== → writeFileSync → log`) at `sync-data.mjs:776-869` | extract `writeIfChanged(path, next, logMsg)` — ~50 lines gone | low |
| I4 | Findings-file filter predicate re-written 3× with slight variations | hoist one `isFindingsFile(f, forbiddenStemFiles)` (`sync-data.mjs:467-474, 494-503, 566-572`) | low |
| I5 | `stem.replace(/_/g, " ")` re-inlines `stemToKey` | reuse `stemToKey` from `naming.mjs:12` (`sync-data.mjs:417`, `parse.mjs:179`) | low |
| I6 | `STOPWORDS` literal in `enrich-models.mjs:299-314` contains `"varies"` and `"weights"` twice | dedupe literals (harmless — it feeds a Set) | low |
| I7 | The 7 short score keys (`tool…overall`) listed in 3 modules + the doc-mirror `SCORE_ORDER` in `models.ts:109` (acknowledged in comments) | `SCORE_FIELDS` could derive from `Object.values(SHORT)`; wire order is test-locked — keep order | med |
| I8 | `normName` (`naming.mjs:9`) vs `norm` (`enrich-models.mjs:331-333`) — byte-identical fold | enrich could import from lib (it is currently deliberately dependency-free — tradeoff) | low |

**Dead-ish defensive branches (note-only, removal optional):**
- `enrich-models.mjs:490-494` — `if (picked) return picked.url` unreachable (every `firstParty` provider has a non-empty `url`).
- `validate.mjs:119` — else-branch "the canonical tree" can never fire while `FORBIDDEN_ROOTS` has exactly one entry.
- `sync-data.mjs:716` (`stem !== "average"`) and `:764` (`if (file === "average.md") continue`) — guards that can never trigger given the filter order.
- `codegen.mjs:95-98` — reconcile prune keys target grandfathered registry entries; idempotent by design, droppable once the registry is confirmed clean for good.
- Message rot: `validate.mjs:182` says "(letters, digits, underscore only)" but `FILENAME_RE` also allows version dots; `parse.mjs:2` / `parse.test.mjs:2` say "`npm test`" but the repo is pnpm-only.

**Known drift risk (note-only):** `.githooks/pre-commit` mirrors `SLUG_VERSION_EXCEPTION` / `MERGED_MODEL_SLUGS` / `FORBIDDEN_ROOTS` / the `normalizeSlug` param-size lookahead in POSIX sh because hooks can't import ESM. Deliberate and documented — do NOT try to unify; instead, every new merge/exception must land in both places (add this to the review checklist).

---

## J. Verified healthy — no action needed

- **Entry points:** `entry.preview.tsx` (package.json `build.preview`), `entry.ssr.tsx` (preview import + `build.server`/dev convention), `entry.dev.tsx` (Qwik optimizer's conventional `CLIENT_DEV_INPUT`) — all three wired, none dead.
- **`src/data/evidence.ts` wrapper:** used by both profile routes; the homepage deliberately skips it so the ~572 KB generated evidence bundle stays code-split out of the main chunk. Working as documented.
- **Test matrix:** `package.json` "test" lists exactly the 8 `*.test.mjs` files present in `scripts/lib/` (no orphans, no gaps). `providers.test.mjs` is a data-schema gate over `providers/<slug>/meta.json` — there is intentionally no `providers.mjs` lib module.
- **Imports:** zero broken relative imports across `src/`; all referenced `public/` assets exist (`avatar.png`, `favicon.svg`, `manifest.json`, backers image, Ubuntu woff2).
- **Markers:** zero TODO/FIXME/HACK/XXX in `src/` and `scripts/`.
- **Generated-file sizes** (context for future work): `evidence.generated.ts` ~572 KB, `scores.generated.ts` ~423 KB, `vendorIcons.generated.ts` ~144 KB, `sources.generated.ts` ~12.5 KB, `verified.generated.ts` ~7 KB.

---

## E. Verification after any approved change

```powershell
pnpm test                                  # 471 tests — must stay green
pnpm sync && pnpm build.types:direct && pnpm build:direct   # Windows-safe form
git diff --stat                            # confirm only intended paths moved
```

`pnpm sync` re-emits the generated data files; Section C (code-only) never needs it, Sections A/B must be followed by at least `pnpm test` (asset/doc deletions need nothing beyond git).

---

## F. Priority recommendation

1. **Section A** — pure win, ~30 dead files, no decision needed beyond your approval.
2. **C1 + C3 + G1** — the two highest-value code cleanups (~160 lines of duplication + 5 dead exports), fully mechanical, test-covered.
3. **G3** — fix the invalid Tailwind classes (`text-md` ×9, `font-inherit` ×2): tiny diff, closes a real (small) visual bug.
4. **C2 + H1/H2/H3, C4, C5** — follow-up refactors, do after C1 lands to keep diffs reviewable.
5. **G2** — decide the fate of `v2.css` (wire the missing `v2` class, or delete the file); currently 100% dead with intended features unshipped.
6. **I1–I5** — pipeline dedup, all low-to-medium risk, test-covered by the 471-test suite.
7. **B1/B2** — your call on the reskin feature; B2 is trivial either way.
8. **D1** — one findings folder at the repo root is a byte-identical stray duplicate; one `git rm` after your confirmation.
