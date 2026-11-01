# task_DeepSeek_V4.1_Flash_2026-10-31 — purification & simplification audit

> **Scope:** a full-repo scan for (a) things no longer relevant that can be
> eliminated without touching functionality, and (b) code that can be simplified
> without changing behaviour.
> **Nothing in this file was applied.** Every item needs explicit user sign-off.
> **Precedence:** `RULES.md` wins on any conflict. No `model/<slug>/` research
> file or folder is proposed for deletion anywhere. The only research-tree items
> flagged are two *stray copies outside the `model/` tree* (byte-identical or
> orphaned), each marked "sign-off required".
> **Independence:** this scan was performed from the source tree only; the
> `tasks/task_Claude_Opus_5_2026-10-04.md` format reference was opened only after
> all findings were formed.

Audited by: DeepSeek V4.1 Flash (`nvidia/deepseek-ai/deepseek-v4.1-flash`), 2026-10-31.
Verification basis: direct reads of every source/scripts/doc/config file listed
below, `git ls-files` / `git check-ignore` / `git log` for tracked-vs-stale
status, and filesystem counts. Claims I could not verify from the tree are
marked *(unverified)*.

**Baseline measured:** 211 `model/` folders · 8 107 active findings `.md` ·
920 `.md.excluded` · 211 `average.md` · 103 `SOURCE_DEFS` registrations ·
7 `models_voice/` + 2 `models_finance/` folders · 10 073 git-tracked files ·
14 parked V1 plugin files (3 756 lines). Repo root carries 11 tracked scratch
files (Part A1).

---

## Status — applied 2026-11-01

Items implemented this session (see `REPORT.md` 2026-11-01 for the file-level log).
Validation: `pnpm test` **561/561** green, `pnpm build.types:direct` clean,
`pnpm build:direct` **205 SSG pages** with no errors.

**Done**

- **A1** — 11 tracked scratch files `git rm`'d + untracked `temp_slugs.txt` deleted.
- **A2** — `modeljev-1.13/` removed (byte-identical duplicate; per-file sign-off given).
- **A5** — `src/components/v2/v2.css` deleted + its three imports removed.
- **A9** — dead `HELPS` constant removed from `routes/contact/index.tsx`.
- **B2** — stale `SourceKey` prune added to `reconcileRegistry` (`scripts/lib/codegen.mjs`),
  wired in `scripts/sync-data.mjs` with `presentStems` (zero-failure runs only; new
  `codegen.test.mjs` cases). The dead keys remove themselves on the next clean `pnpm sync`.
- **C1** — `.agents/rules.md`, `.antigravity/history/project-map.md`, `tasks/sync-data.md`
  updated to the v2 component/helper reality.
- **C4 / C6** — dangling `GLM53F_IMP` comment references rewritten; sync header step list corrected.
- **D1** — shared `src/components/v2/theme.ts` (`usePageTheme` + `applyPageTheme`); the four
  theme-init copies and the `V2Header` toggle now share one writer.
- **D2** — shared `src/components/v2/hex.ts`; all three radar renderings (homepage hero,
  homepage compare, model profile, design study) use it.
- **D3** — dimension label maps derived from `DIMENSIONS` (`src/components/v2/modelView.ts`).
- **D4** — best/worst cell highlighting shared (`buildHlStats` / `hlClass` / `hlTitle`).
- **D5** — `MODEL_COLORS` now live (used by the compare chart); `SERIES_COLORS` dropped.
- **D6** — `tooltipFor` → shared `dimensionTooltip`.
- **D7** — dead exports removed (`sortSourceFor`, `getModel`, `PAID_ONLY_PROVIDERS`,
  `getProvider`, `FREE_ZEN_MODELS_URL` export, `HELPS`).
- **D8** — providers page data-driven (`SECTIONS` array in `routes/providers/index.tsx`).
- **D9** — homepage split: `routes/index.tsx` now composes `v2/HeroSection`, `FactsStrip`,
  `CompareSection`, `MethodologySection`, `ModelsSection`, `DecisionShelf`.
- **D10** — `writeIfChanged` helper in `scripts/sync-data.mjs`.

**Not applied (left for you)**

- **A3** `findings/` orphan tree — awaits your call on the two ad-hoc research notes.
- **A6** parked V1 plugins · **A7** avatar backup · **A8** `PRD/webshop-prd.md` ·
  **A10** `design-6sol` deletion (kept; only de-duplicated).
- **B1** restore `model-report-TEMPLATE.md` (not in this request).
- Part C/B items outside the execution list (**B3–B5**, **C2/C3/C5**) and **D11–D18**, **E1/E2**.

---

## 0. Executive summary

| Part | Theme | Items | Risk |
|---|---|---|---|
| **A** | Dead / obsolete artifacts — safe to delete (after sign-off) | 10 | low |
| **B** | Broken contracts & correctness | 5 | low–med |
| **C** | Documentation drift | 6 | low |
| **D** | Simplification, behaviour-preserving | 18 | low–med |
| **E** | Data-tree health (report only) | 4 | — |

The single highest-value finding is **B1**: `model-report-TEMPLATE.md` was
**accidentally deleted** in commit `b666acf2` ("Added model research and refresh
site visuals") and is still referenced as the mandatory output contract by
~10 live files — including the task files every research agent is told to follow.
A research agent today is instructed to "draft per `model-report-TEMPLATE.md`"
and "read it once" for a file that does not exist.

The largest simplification win is **D1**: the ~40-line theme-initialisation
`useVisibleTask$` block is copy-pasted **four times** across the routes, and the
hexagon geometry is copy-pasted **three times** (D2), with the dimension label
maps a further three times (D3). These are the modern equivalents of the
component duplications the 2026-10-04 audit found in the now-removed v1
components.

---

## PART A — Eliminate (no longer relevant)

### A1. Eleven tracked scratch/debug files at the repo root and in `scripts/`
One-off agent helpers and encoding smoke-tests, all verified **zero references**
anywhere in the tree (grep includes `*.md`/`*.json`/`*.mjs`/`*.cjs`/`*.js`/`*.ts(x)`/`*.yml`):

| File | What it is |
|---|---|
| `_t10.txt` (23 B) | encoding smoke test: `# Test → $0.435 ± α` |
| `_test_ascii.txt` (63 B) | encoding smoke test |
| `.missing-list.txt` (771 B) | one-off "missing models" dump |
| `.tmp-queue.cjs` (36 lines) | one-off queue recompute for STEM `MiniMax_M3.1_Flash` |
| `batch_write.cjs` (64 lines) | one-off bulk writer that created `Inkling.md` stub files in 20 folders |
| `check_parse.js` (16 lines) | `vendorIcons.generated.ts` parse debug (`eval`) |
| `scan_missing.py` (20 lines) | `vendorIcons.generated.ts` key-scan debug |
| `update_research.mjs` (217 lines) | one-off `Laguna_XS_2.1.md` generator |
| `queue_slugs.txt` (0 B) | empty stale slug list |
| `scripts/tmp-dates.cjs` (17 lines) | ad-hoc date scan for `Muse_Spark_1.3` |
| `scripts/tmp-missing.cjs` (11 lines) | ad-hoc missing-file scan |

Plus untracked `temp_slugs.txt` (3 057 B, matched by `.gitignore:9 temp_*`).
The sanctioned equivalents live in tested `scripts/lib/` (`average.mjs`
`buildQueueFile`, etc.); `model-queue.md` is the live roster.

**Guidance:** `git rm` the eleven tracked files and delete `temp_slugs.txt`
locally. Note: `tasks/task_Purify_2026-10-25.md` and
`tasks/task_DeepSeek_V4.1_Flash_2026-10-25.md` already proposed the same removal
(the list has since shrunk — most of their targets are gone); this item is the
still-pending remainder.

```powershell
git rm --quiet _t10.txt _test_ascii.txt .missing-list.txt .tmp-queue.cjs `
  batch_write.cjs check_parse.js scan_missing.py update_research.mjs `
  queue_slugs.txt scripts/tmp-dates.cjs scripts/tmp-missing.cjs
Remove-Item temp_slugs.txt -ErrorAction SilentlyContinue
```

### A2. `modeljev-1.13/` — root duplicate of a real findings file  *(sign-off required)*
`modeljev-1.13/MiniMax_M3.1_Flash.md` sits outside the `model/<subject>/`
tree (typo'd folder name) and is **byte-identical** (SHA-256
`C7F4CA94…9736B`, verified this session) to the canonical
`model/jev-1.13/MiniMax_M3.1_Flash.md`. `pnpm sync` never scans it; nothing is
lost.

**Guidance:** `git rm -r modeljev-1.13`, then `pnpm sync` to confirm no drift.
Because it is a findings file, name the exact path and get the per-file
confirmation popup (`RULES.md` file-deletion approval rule) first.

### A3. `findings/` — orphan research tree  *(sign-off required)*
A tracked directory outside `model/`, not scanned by sync, superseded by the
`model/` tree:

- `findings/jev-1.13.md` — **0 bytes**
- `findings/jev-1.13_temp.md` — **0 bytes**
- `findings/research/research-Laguna_S_2.1/claude-sonnet-5.4.md` — ad-hoc research
  for `claude-sonnet-5.4`, a slug with no tracked folder (present in the old
  `.missing-list.txt`)
- `findings/research/research-Laguna_S_2.1/qwen-3.7.md` — same pattern

**Guidance:** remove the empty stubs outright; for the two research notes,
confirm with the user whether either model is worth a proper `model/<slug>/`
folder before deleting, otherwise `git rm -r findings`.

### A4. `state/` — empty directory
`state/` exists on disk with zero entries and is not tracked. **Guidance:** delete.

### A5. `src/components/v2/v2.css` — dead CSS (its selector never matches)
The file styles `.v2` / `.v2.dark` and a `.v2 *` reduced-motion kill switch
(`v2.css:8–21`), but **no element in the tree carries a `v2` class** — the page
roots use `class="… ${theme.value === "dark" ? " dark" : ""}"`
(`index.tsx:382`, `model/[slug]/index.tsx:214`, `providers/index.tsx:249`,
`layout.tsx:73`). `color-scheme` is already owned by `global.css:21,35`. The file
is imported (with zero effect) by `routes/index.tsx:12`, `routes/layout.tsx:5`
and `routes/providers/index.tsx:19`.

**Guidance:** delete the three imports and the file, or add the `v2` class to the
page roots if the `color-scheme`/reduced-motion rules are wanted. Verify with a
repo-wide `grep -n '"v2 '` / `class="v2`.

### A6. `.opencode/plugins/v1/` — 14 parked V1 plugin files (3 756 lines)
Every file is the original OpenCode 1.x implementation, kept "verbatim apart from
a one-line header" (`v1/README.md`). They **cannot load** on the locked Desktop
2.x runtime (`PluginModule.LoadError: … missing key "default"`), are never
globbed (both loaders scan the top level only), and are fully recoverable from
git history (recovered from `f070ecbc` per `REPORT.md:24`).

**Guidance:** user decision. If the V1 originals are no longer wanted as a
reference, `git rm -r .opencode/plugins/v1` and drop the "V1 originals parked"
paragraphs in `.agents/rules.md:54–55` and `.agents/rules.md:112–114`. Keep if a
V1 binary might ever be used (the README documents how to run them).

### A7. `assets/avatar-backup-2026-10-05/` — stale backup of superseded assets
Contains `favicon.svg`, `manifest.json`, `router-head.tsx` and a `README.txt`
that references `src/components/HeroArt.tsx` (**deleted** in the v2 v1-removal)
and `public/icon-192.png` / `icon-512.png` / `apple-touch-icon.png`
(**never created** — the README describes a plan that did not ship). The live
files it backs up are all still present.

**Guidance:** `git rm -r assets/avatar-backup-2026-10-05` (git history preserves
the snapshot).

### A8. `PRD/webshop-prd.md` — 4 149 lines about an unrelated product
`PRD/prd.md` is the ModelComp spec (still cited by `AGENTS.md` and
`.agents/rules.md`), but `PRD/webshop-prd.md` (223 KB) is a webshop spec with no
connection to this project, and the whole `PRD/` directory is gitignored
(`.gitignore:13`) so it is not even shared with fresh clones.

**Guidance:** delete `PRD/webshop-prd.md`. Separately, resolve the `PRD/`
gitignore question in **C3** (the committed docs point at a gitignored spec).

### A9. `HELPS` — dead constant in the contact route
`src/routes/contact/index.tsx:30–47` defines a `HELPS` array ("What helps most"
rows) that is never referenced anywhere in the JSX (grep: only the definition).
**Guidance:** delete the constant (or render it — the surrounding comment claims
it should appear as "footer-tier-row treatment", so this may be an unfinished
feature).

### A10. `src/routes/design-6sol/` — local-only design study
Gitignored (`.gitignore:15 src/routes/design*`) and untracked; a standalone
canvas hardcoded to `claude-opus-5.5` (`design-6sol/index.tsx:8`). `docs/v2-promotion-rollback.md:15`
records it as intentionally untouched. It is **not** deployed and **not** built.
Because it is gitignored, deleting it only affects the local disk.

**Guidance:** user decision — keep as the v2 design reference, or delete. If
deleted, also drop the `path === "/design-6sol"` special case in
`routes/layout.tsx:19` (it is otherwise dead once the folder is gone).

---

## PART B — Broken contracts & correctness

### B1. `model-report-TEMPLATE.md` was deleted, but ~10 live files still require it  ← highest value
**Evidence.** The file is absent from disk and from `git ls-tree HEAD`. It
**existed until commit `b666acf2`** ("Added model research and refresh site
visuals") — i.e. it was swept into an unrelated commit. Its full 84-line content
is recoverable with `git show b666acf2^:model-report-TEMPLATE.md`. It is still
cited as the mandatory output contract by:

- `.agents/rules.md:41` ("blank template for new reporting agents"), `:192`
  ("New agents start from `model-report-TEMPLATE.md`")
- `model/README.md:49`, `:126`
- `README.md:74`
- `tasks/research.md:49`, `:77`, `:176`, `:232`, `:267`
- `tasks/research-assign.md:9`, `:30`
- `tasks/research-brief.md:82`
- `tasks/research-convert-excluded.md:46`
- `.agents/workflows/batch_research_all_models.md:12`
- script comments: `scripts/lib/parse.mjs:97`, `scripts/lib/benchmarks.mjs:9`,
  `scripts/sync-data.mjs:489`

A research agent is told to "start from" and "draft fully per" a file that does
not exist, which is exactly how the score-line / signature / benchmark format
contracts drift.

**Guidance (recommended):** restore the one file — a single-file restore, which
needs prior user permission per the `RULES.md` agent git-restore rule:
```powershell
git restore --source=b666acf2^ -- model-report-TEMPLATE.md
```
If the template was deliberately retired, instead rewrite all references above
to point at wherever the format contract now lives (`model/README.md` schema +
`tasks/research.md`). Do not leave the dangling references.

### B2. Stale `SourceKey` registry entries are never pruned
`src/data/sources.generated.ts` keeps keys whose findings files no longer exist
anywhere. Verified **0 files on disk** for each of:

- `"Space Bunny"` (merged into `MiniMax_M3.1_Flash`, 2026-10-26)
- `"Ox Alpha"` (merged into `GLM_5.3_Flash`, 2026-10-26)
- `"Mimo v2.5 Free"` (`Mimo_v2.5_Free.md` — 0 files)

`scripts/sync-data.mjs:762–768` logs these only as non-blocking
`INFO  source … has no active findings files` and never removes them. They are
harmless at runtime (`src/data/models.ts` `SOURCES` filters via
`sourceHasScores`), but they accumulate in the generated file and in the
`SourceKey` union forever.

**Guidance:** add a prune step to the registry reconciliation in
`scripts/lib/codegen.mjs` (`reconcileRegistry`) that drops entries with no live
file, on the zero-failure path only (mirroring the existing virtual-view prune
at `codegen.mjs:92–98`). Add a `codegen.test.mjs` case. Low risk: a removed key
re-registers automatically on the next sync if its file returns.

### B3. `src/data/providers.ts` — comment describes a page shape that no longer exists
The module header (`providers.ts:293–299`) and `PAID_ONLY_PROVIDERS` (`:308`)
describe the Providers page as rendering "exactly these two groups" (free-tier
first, then paid-only). The actual page (`routes/providers/index.tsx:277–449`)
renders **seven** functional categories. `PAID_ONLY_PROVIDERS` has **no
consumer** (grep: definition only).

**Guidance:** delete `PAID_ONLY_PROVIDERS` (and `getProvider`, also unused —
see D7) and correct the header comment to describe the seven-category render, or
data-drive the page as in D8.

### B4. `checkOverallScores()` bypasses the module's own warn-once policy
`src/data/models.ts:30–35` defines `warnOnce` specifically because "a bare
console.warn spams the same line 3-4x per build", yet `checkOverallScores()`
(still called in dev at `:491–493`) calls raw `console.warn` at `:485`.

**Guidance:** route the mismatch message through `warnOnce`.

### B5. Two different "Paid" labels for the same badge
Homepage/model-profile Paid badges render `"Paid"`; `design-6sol` and historic
code render variants. Within the live v2 tree the homepage says `Paid`
(`index.tsx:1084`) while the compare legend says `· Paid` (`index.tsx:802`) and
the card says `Paid` — the label set is inconsistent. Since the correct fix is
the shared `PricingBadge` extraction (D13), treat this as its acceptance
criterion: one label per variant.

---

## PART C — Documentation drift

### C1. Docs still name the removed v1 components and functions
The v1 component tree was deleted 2026-10-20, but these live docs still describe
it:

- `.agents/rules.md:179` — "Components (`CompareSection`, `ModelCards`,
  `HexRadar`, `Methodology`) read `MODELS` only … shared `ModelSelect`
  component (`allowEmpty={false}` …)". None of these files exist.
- `.agents/rules.md:210` — "own shelf in `ModelCards`".
- `.antigravity/history/project-map.md:39` — "UI components (HexRadar,
  ModelCards, CompareSection) & SSG pages".
- `tasks/sync-data.md:133` — "Model A/B/C dropdowns stay A–Z by display name
  (`CompareSection.tsx`)"; `:134` — "Homepage defaults stay dynamic
  (`top3ByOverall()` in `src/routes/index.tsx`)". The function is now `top3Ids`
  (`index.tsx:119`).

**Guidance:** update all four to the v2 reality (`src/routes/index.tsx` sections;
shared helpers once extracted per D1–D6). This matters because `AGENTS.md` and
`.agents/rules.md` are the first things a new agent reads.

### C2. `model-comparison.md` — committed docs disagree on whether it is live
- `README.md:74–76` — "(`model-comparison.md` is frozen v1–v3 history.)"
- `.agents/rules.md:39–40` — "`model-comparison.md` — overview table + methodology".
- `scripts/lib/average.mjs:94` — stamps every newly created `average.md` with
  `- Overview and scoring methodology: ../../model-comparison.md`.

So every model's methodology pointer cites a document the README labels frozen.

**Guidance:** pick one. If frozen, change the `average.md` header template in
`average.mjs` to point at `README.md` § Methodology (or `RULES.md` § Scoring)
and fix `.agents/rules.md:39`. The change affects only newly created
`average.md` heads (`applyAverageToPrev` preserves existing heads).

### C3. `PRD/` is gitignored but cited as the spec
`.gitignore:13` ignores `PRD/`, yet `AGENTS.md` (§ Product spec) names
`PRD/prd.md`, `.agents/rules.md:34` lists it under repo layout, and the PRD
itself is v1-era (it specifies `HexRadar.tsx`, `ModelCards.tsx`,
`CompareSection.tsx`, `HeroArt.tsx`, a fixed default trio of Muse Spark models,
and a single-route design — all superseded). A fresh clone has no reachable
product spec.

**Guidance:** decide — (a) un-ignore `PRD/` and commit the current spec, or
(b) delete the references and move the still-valid contracts (tooltip behavior,
§7) into `.agents/rules.md`. Also delete `PRD/webshop-prd.md` (A8).

### C4. `GLM53F_IMP.md` citations survive in code comments
The file is absent, but its issue numbers are cited as if live:

- `scripts/sync-data.mjs:27, 347, 526, 533`
- `scripts/lib/naming.mjs:170`
- `scripts/lib/naming.test.mjs:253` ("scaffolded stub stamp (GLM53F_IMP #9)")

**Guidance:** rewrite each comment to state the invariant (e.g. "sync stamps
`scaffolded: true` on an auto-created meta.json; a human must replace the
slug-guessed name") instead of citing a deleted log.

### C5. `src/data/models.ts:1–11` header describes the old bundle problem in present tense
The header explains the `?raw` glob it replaced ("~1.7 MB of markdown into a
single ~1.8 MB chunk"). It is now history. **Guidance:** trim to a one-line
"why" (the numbers are in `README.md`/`REPORT.md`).

### C6. `tasks/sync-data.md` header comment count drifts from the code
`scripts/sync-data.mjs:3–30` numbers the sync as five steps; the implementation
now does eight (plus QUAR, gate, evidence, registry reconcile, RATER_GATE line).
`tasks/sync-data.md` correctly lists eight. **Guidance:** renumber the script
header or link to `tasks/sync-data.md` instead of restating the list (restated
lists drift — the same lesson the identity-roster compaction already learned).

---

## PART D — Simplification (behaviour-preserving)

### D1. Theme initialisation is copy-pasted four times (~160 lines)
The identical `useVisibleTask$` block — read `v2-theme`, fall back to
`html.dark`, then OS preference, writing back `theme` + `v2-theme` +
`root.classList` — appears verbatim at:

- `src/routes/index.tsx:157–199`
- `src/routes/model/[slug]/index.tsx:92–130`
- `src/routes/layout.tsx:30–68`
- `src/routes/providers/index.tsx:207–245`

The write side is duplicated a fifth time in the header toggle
(`V2Header.tsx:74–86`).

**Guidance:** extract one composable, e.g.
`src/components/v2/usePageTheme.ts` exporting `usePageTheme(): Signal<"light"|"dark">`
(plus a `setTheme` used by `V2Header`). Each page then holds one line:
`const theme = usePageTheme();`. This is the single largest duplication in the
tree and the most drift-prone (the "kill the ancestor `.dark` leak" comment is
re-explained four times).

### D2. Hexagon geometry is copy-pasted three times
`hexPoint`, `hexPolygon`, `HEX_CX/CY/MAX_R/LABEL_R/GAMMA` appear in:

- `src/routes/index.tsx:58–99`
- `src/routes/model/[slug]/index.tsx:39–65`
- `src/routes/design-6sol/index.tsx:45–65`

Worse, the docs still tell readers a `<HexRadar>` component exists (C1), so the
shared home has a name already.

**Guidance:** create `src/components/hex.ts` (pure geometry: `hexPoint`,
`hexPolygon`, constants, `barWidth`) and import it in the routes. Optionally go
further and restore a shared `<HexRadar>` SVG component (the four current
renderings — homepage hero, homepage compare, model profile, design study —
differ only in size/colors/labels).

### D3. Dimension label maps are hand-maintained three times
`names` (long labels) and `colNames` (short labels) plus `tableKeys` are
re-declared in `index.tsx:25–48`, `model/[slug]/index.tsx:20–37`, and
`design-6sol/index.tsx:9–26`. `DIMENSIONS` in `src/data/models.ts:184–223`
already carries exactly these strings as `label` and `short`.

**Guidance:** derive them — e.g.
```ts
const names = Object.fromEntries(DIMENSIONS.map((d) => [d.key, d.label])) as Record<DimensionKey, string>;
const colNames = Object.fromEntries(DIMENSIONS.map((d) => [d.key, d.short])) as Record<DimensionKey, string>;
```
Removes three hand-maintained mirrors and makes `.agents/rules.md`'s "fixed
DIMENSIONS order" guarantee structural.

### D4. Table highlighting helpers duplicated twice
`colBestWorst` + `hlStats` + `hlClass` (and `hlTitle` on the profile) are near-
identical in `index.tsx:306–329` and `model/[slug]/index.tsx:177–199`.

**Guidance:** extract `src/components/highlight.ts` (`buildHlStats`, `hlClass`,
`hlTitle`).

### D5. `SERIES_COLORS` duplicates `MODEL_COLORS`
`index.tsx:64` re-declares `["#4f46e5","#059669","#d97706"]` and its own comment
admits it is "same as the original compare page (models.ts MODEL_COLORS)".
`MODEL_COLORS` (`models.ts:228`) is currently unused.

**Guidance:** import `MODEL_COLORS` (this also resurrects a dead export, D7).

### D6. `tooltipFor` duplicated
`index.tsx:102–111` defines `tooltipFor`; the profile page rebuilds the same
`name — dimension: value` strings inline in its `<title>`s.

**Guidance:** move `tooltipFor` next to the shared hex helper (D2) and import it
in both.

### D7. Dead exports in the data layer
Verified definition-only (no importer anywhere in `src/`):

- `src/data/models.ts` — `sortSourceFor` (`:395`), `getModel` (`:470`),
  `MODEL_COLORS` (`:228`, see D5)
- `src/data/providers.ts` — `PAID_ONLY_PROVIDERS` (`:308`, see B3),
  `getProvider` (`:343`)
- `src/components/freeZenLink.tsx` — `FREE_ZEN_MODELS_URL` (`:7`, used only in
  the same file)
- `src/routes/contact/index.tsx` — `HELPS` (see A9)

`checkOverallScores` (`models.ts:478`) is exported but only self-invoked in dev;
its `export` can stay or go (confirm no external dev tool imports it).

**Guidance:** delete the truly dead ones (`sortSourceFor`, `getModel`,
`PAID_ONLY_PROVIDERS`, `getProvider`, the `FREE_ZEN_MODELS_URL` export, `HELPS`)
or wire them; keep `MODEL_COLORS` and use it (D5).

### D8. Providers page: seven near-identical section blocks
`routes/providers/index.tsx:277–449` repeats, seven times, the same
heading + count + blurb + `<hr>` + `md:columns-2` card grid, differing only in
title/blurb/array. ~170 lines.

**Guidance:** drive it from one array:
```ts
const SECTIONS = [
  { title: "Coding & MoE Models", hint: "…", blurb: "…", providers: CODING_MOE_PROVIDERS },
  // …6 more
];
```
then one `.map()`. ~170 lines → ~50, and new categories become one entry.

### D9. The homepage route is 1 478 lines / 69 KB in one component
`src/routes/index.tsx` renders hero, facts strip, compare (selectors + hexagon +
table), methodology, all-models (cards/list/toolbar/search), and the decision
shelf in a single `component$`. Combined with D1–D6 this is the main maintainability
cost of the v2 tree.

**Guidance:** split into section components under `src/routes/` or
`src/components/v2/` (`HeroSection`, `CompareSection`, `MethodologySection`,
`ModelsSection`, `DecisionShelf`) and lift the charts into shared components.
Behaviour-preserving; makes the server-rendered HTML diff-checkable.

### D10. `sync-data.mjs` — the "emit if changed" block is repeated six times
`scripts/sync-data.mjs:775–869` repeats the identical read-prev / compare / write
/ log dance for `scores.generated.ts`, `verified.generated.ts`,
`evidence.generated.ts`, `model-queue.md`, `public/robots.txt`, and
`model-aliases.generated.md`.

**Guidance:** one helper
```js
function writeIfChanged(path, text, label) { … }
```
collapses ~120 lines to ~25 and makes every emitter obey the same freshness
contract by construction.

### D11. `scripts/lib/codegen.mjs` header is stale
The header says "Two outputs" (`codegen.mjs:4`) but the module now exports seven
renderers/mutators (scores, verified, evidence, robots, registry append,
registry reconcile, RATER_GATE line) — aliases live in `validate.mjs`.
**Guidance:** update the header (docs-only).

### D12. Two different `warnOnce` implementations
`models.ts:30–35` uses a module-level `Set`; `providers.ts:186–194` stores a Set
as a property on the function via `as unknown as { s?: Set<string> }` casts.
**Guidance:** use the `models.ts` pattern in `providers.ts` (or lift a tiny
`warnOnce.ts` helper both import).

### D13. Pricing renders diverge between pages
Only the model profile routes `pricingTiers`/`pricingNote` through
`withFreeZenLink` (`model/[slug]/index.tsx:374–389`). The homepage
(`index.tsx:1126`, `:1361`) and the providers page render the identical
`"Free OpenCode Zen tier"` phrase as **plain text** — the same string is a link
on one page and not another. `withFreeZenLink` also returns `any[]`
(`freeZenLink.tsx:11`) in a `strict: true` codebase.

**Guidance:** extract `<PricingTiers model=… />` (routing every tier through
`withFreeZenLink`) and use it in all three renderers; type the helper's return as
`JSXOutput[]`. Also extract a `<PricingBadge model variant="card|inline|legend" />`
to fix B5 — currently the Free/Paid JSX is repeated ~6× across the homepage and
profile.

### D14. `VendorIcon` re-derives props reactively
`VendorIcon.tsx:226–239` holds `vendorSig`/`entrySig` signals and a `useTask$`
that re-runs `vendorFor(props.id, props.name)` — but the inputs are plain props,
so the component already re-renders on change. The signals only add closures and
serialization weight.

**Guidance:** compute `const vendor = vendorFor(props.id, props.name)` and
`const entry = vendor ? VENDOR_ICON_SVGS[vendor.icon] : undefined` directly.
Also `icon: keyof typeof VENDOR_ICON_SVGS | string` (`:16`) cancels the key
constraint — drop `| string` so a typo'd icon name fails to compile.

### D15. `tsconfig.json` leaves `adapters/` and `scripts/` untypechecked
`tsconfig.json:23` is `"include": ["src", "vite.config.ts"]`, so
`adapters/static/vite.config.ts` (which owns the `SITE_ORIGIN` canonical origin)
and all of `scripts/` are outside the typecheck.

**Guidance:** `"include": ["src", "vite.config.ts", "adapters"]` (scripts are
`.mjs` and out of scope by design). Low cost, closes a real blind spot.

### D16. `layout.tsx` route-guard has redundant branches
`routes/layout.tsx:13–20` computes `path` after stripping slashes, then tests
`path === "" || path === "/"`, `startsWith("/model/")`, `startsWith("/providers")`,
and `path === "/design-6sol"`. The `"/providers"` prefix also swallows any future
`/providers-*` route. Minor.

**Guidance:** use the normalized path with an explicit set + `startsWith("/model/")`;
document the standalone canvases in one comment block (they already each render
their own chrome).

### D17. `src/data/evidence.ts` is a one-function pass-through
`evidence.ts` exists to keep `evidence.generated.ts` out of list-page bundles
(`getEvidence`). That is a legitimate code-split boundary; no change needed.
Listed here only so a future pass does not "inline it" and re-bundle 400 KB.

### D18. `entry.dev.tsx` / `entry.preview.tsx` — fine, but note
`entry.dev.tsx` renders to `document` via `render`; `entry.preview.tsx` builds
the Node preview. Both are needed by the Qwik CLI. No change.

---

## PART E — Data-tree health (report only — no deletions proposed)

> `RULES.md` makes every `model/<slug>/` file and folder permanent. Nothing below
> is a deletion proposal.

### E1. `models_finance/` holds two folders for one product
`models_finance/ling-3.0-flash-fin/` (4 files incl. `meta.json`) and
`models_finance/ling-3.0-flash-fin-free/` (24 files incl. `meta.json` +
`average.md`). By the repo's own tier-identity rule a `-free` suffix is an access
tier, not a second model — so these read as a duplicate split. The finance tree
is not scanned by `pnpm sync`, so the sync tripwires cannot adjudicate it.

**Guidance:** human decision — confirm whether `ling-3.0-flash-fin-free` is the
live tier and `ling-3.0-flash-fin` a stub (or vice versa), and record it in
`model-aliases.generated.md` or a `models_finance/README.md`. No action taken.

### E2. `models_voice/` and `models_finance/` remain unwired
9 folders of validated research (7 voice + 2 finance) are invisible to both
`pnpm sync` and the site; `RULES.md:77` and `.agents/rules.md:26` both describe
the wiring as "pending". This is the one genuinely open item the retired
`IMPROVEMENTS.md` carried (per `tasks/task_Claude_Opus_5_2026-10-04.md`
E-note). Worth keeping on the living backlog.

### E3. Grandfathered fossils — do not touch
`Ling_3.0.md.replaced-by-Flash[_Fin]` files across `model/`, `models_voice/`,
`models_finance/` are explicitly grandfathered by `.agents/rules.md:47`
("stay untouched; no new `*.replaced-by-*` names"). Noted so a future cleanup
pass does not mistake them for cruft. Same for the parked-slug folders in
`model-aliases.generated.md`.

### E4. Scratch-file definition of Done
`README.md`'s project-layout block (`:96–117`) does not mention the scratch files
in A1; after their removal, re-verify `git ls-files` at the root to confirm only
intentional files remain (`.gitignore`, `AGENTS.md`, `README.md`, `REPORT.md`,
`RULES.md`, generated rosters/queue, configs).

---

## PART F — Suggested execution order

Grouped so each step is independently verifiable. **Step 0 first.**

**Step 0 — restore ground truth (do first)**
```text
pnpm sync && pnpm build.types && pnpm build   (Windows: :direct twins)
```
Confirms the baseline, regenerates the queue/aliases, and re-logs the stale
registry keys (B2) and any scaffolded stubs. Then get sign-off for A2/A3.

**Step 1 — restore the deleted contract (B1)** *(no user data at risk)*
Restore `model-report-TEMPLATE.md` (single-file, user permission) or rewrite its
~20 references. Highest value, smallest blast radius.

**Step 2 — pure deletions, zero behaviour change**
A1 scratch files · A4 `state/` · A5 `v2.css` · A7 avatar backup ·
A9 `HELPS` · A10 design-6sol (if desired). Then A2/A3 with per-file popups.
Verify: `pnpm test` green, `pnpm build.types` clean, `dist/index.html`
byte-identical.

**Step 3 — dead exports and stale comments**
D7 (dead exports) · D11/D12 (doc/warnOnce) · B3/B4 (comment + warnOnce) ·
C4/C5/C6 (dangling comments). Verify: `pnpm build.types` clean.

**Step 4 — de-duplication with the best ratio**
D1 (theme ×4) · D2 (hex ×3) · D3 (label maps ×3) · D4 (highlight ×2) ·
D5/D6 (colors/tooltip). Expect ~300+ lines removed. Verify: prerendered HTML for
`/`, one model page and `/providers/` is unchanged apart from whitespace.

**Step 5 — component extraction**
D13 (`PricingTiers`/`PricingBadge`, fixes B5) · D14 (`VendorIcon`) ·
D8 (providers sections) · D9 (split the homepage) · D18-adjacent nothing.

**Step 6 — scripts & config**
D10 (`writeIfChanged`) · B2 (prune stale keys, with a test) · D15 (tsconfig).

**Step 7 — docs & product decisions (need the user)**
A6 (V1 plugins) · A8 (`webshop-prd.md`) · C1–C3 (doc drift + `PRD/` gitignore) ·
E1 (finance duplicate) · E2 (voice/finance wiring).

---

## Appendix — what I checked and found healthy

So a future audit does not re-walk this ground:

- **No research file or `model/<slug>/` folder is proposed for removal.** The
  two stray copies (A2, A3) are outside the `model/` tree and are exact
  duplicates/orphans; both require per-file sign-off.
- **The v2 component graph is fully live and lean:** `router-head.tsx`,
  `VendorIcon.tsx`, `freeZenLink.tsx`, `v2/V2Header.tsx`, `v2/V2Footer.tsx`,
  `v2/v2.css` (dead, A5) — no orphaned components beyond v2.css.
- **`scripts/lib/` module split is sound:** 7 pure modules + 8 zero-dep
  `*.test.mjs` suites, all wired; the only dead exports are in `src/data/`
  (D7).
- **Generated files are correctly treated as build inputs, not output:**
  `scores.generated.ts`, `verified.generated.ts`, `evidence.generated.ts`,
  `sources.generated.ts`, `model-queue.md`, `model-aliases.generated.md`,
  `public/robots.txt` — all regenerated by `pnpm sync`, zero-failure-gated.
- **Build output is untracked:** `.gitignore` correctly covers `node_modules/`,
  `dist/`, `server/`, `.qwik/`, `*.tsbuildinfo`, `tmp_*`, `temp_*`, `*.log`,
  `PRD/`, `.qoder/`, `src/routes/design*`, nested `.opencode/node_modules`.
- **No unused dependencies:** 9 devDependencies, zero runtime dependencies;
  `ignore@^5.3.2` is required by the Qwik CLI per `.agents/tech-stack.md:17` —
  do not remove.
- **`.githooks/pre-commit`** is present and its slug/stem/twin/meta guards read
  correctly; activate with `git config core.hooksPath .githooks` if not set.
- **`vercel.json`** and the `SITE_ORIGIN` canonical-origin wiring are coherent
  and still deployment-correct.
- **Identity/roster infrastructure is consistent:** `RETIRED_SLUGS` mirror lists,
  `MERGED_MODEL_SLUGS`, `MERGED_SOURCE_STEMS`, `RETIRED_ALIAS_SLUGS` and the
  generated `model-aliases.generated.md` agree; the signature-vs-stem tripwire
  is live in sync.

---

*Report only. Nothing in the repository was modified by this audit.*
