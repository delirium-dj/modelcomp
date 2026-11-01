# task_GLM_5.3_Flash_2026-10-31 — purification & simplification audit

> **Scope:** full-repo scan for (a) things that are no longer relevant and can be
> eliminated without touching functionality, and (b) code that can be simplified
> without changing behaviour.
> **Nothing in this file was applied.** Every item needs explicit user sign-off.
> **Precedence:** `RULES.md` wins on any conflict. No `model/**` research file or
> folder is proposed for deletion anywhere in this document — the one deletion
> candidate touching research content (A5) sits **outside** `model/` at the repo
> root and is byte-identical to the canonical file inside `model/`.

Audited by: GLM 5.3 Flash (`z-ai/glm-5.3-flash`), 2026-10-31.

Verification basis: every claim below was checked against the files on disk and
git **after** commit `b666acf2` (see the mid-audit note), via `git ls-files` /
`git status` / `git cat-file`, SHA-256 hashing, and repo-wide grep. No builds,
no sync, no tests were run by this audit (AGENTS.md handover rule) — the
verification commands are at the bottom.

> **Mid-audit commit.** While this scan was running, `b666acf2` ("Added model
> research and refresh site visuals") landed and committed the bulk of the
> 2026-10-25 purge (the `task_Purify_2026-10-25.md` Section A file family, the
> `AGENTS_RESEARCH_*` reports, `BACKLOG.md`, `True`, and the vendor-icon
> refresh). All findings below are re-verified against the resulting HEAD. The
> purge was executed **incompletely** and with **one collateral casualty** —
> that casualty is the headline finding.

**Baseline measured (post-`b666acf2`):** 211 `model/` folders · 201 models in
`model-queue.md` · 10 073 git-tracked files · 8 test suites wired in
`package.json` (test run delegated, not executed here) · working tree: 2
deleted + 3 modified tracked files, 17 untracked research files.

---

## 0. Executive summary

| Part | Theme | Items | Risk |
|---|---|---|---|
| **A** | Eliminate — leftovers, strays, one critical restoration | 5 | low (A1 = critical fix) |
| **B** | Working-tree hygiene — protect in-flight research | 3 | — (report only) |
| **C** | Documentation drift | 3 | low |
| **D** | Simplification, behaviour-preserving | 11 | low–med |
| **E** | User decisions (product / cost calls) | 4 | — |
| **F** | Verified healthy — no action | — | — |

The single highest-value finding is **A1**: commit `b666acf2` deleted
`model-report-TEMPLATE.md` — the template that **nine live workflow documents**
require every research agent to start from. It was *not* part of the approved
purge list; it is collateral damage from that commit, and it is still
recoverable from the parent commit with a single-file restore.

---

## PART A — Eliminate (no longer relevant)

### 🚨 A1. `model-report-TEMPLATE.md` — deleted by `b666acf2`, must be restored

**Status:** absent from disk **and** absent from `HEAD`
(`git cat-file -e HEAD:model-report-TEMPLATE.md` fails;
`git log --diff-filter=D` names `b666acf2`). Byte-recoverable from the parent:
`git cat-file -e c2a3343c:model-report-TEMPLATE.md` succeeds.

**Why this is critical.** The template is the format contract for the entire
research pipeline. Live references (all verified today):

- `.agents/rules.md:41` ("blank template for new reporting agents") and `:192`
  ("New agents start from `model-report-TEMPLATE.md`")
- `README.md:74` ("Per-agent template in `model-report-TEMPLATE.md`")
- `tasks/research.md:49, 77, 173, 176, 232, 267` (signature format, drafting
  step, peer-read exception, compliance check)
- `tasks/research-assign.md:9, 30` (read-only list + "Draft per …")
- `tasks/research-brief.md:82` (the small-context brief embeds it)
- `tasks/research-convert-excluded.md:46`
- `.agents/workflows/batch_research_all_models.md:12`

**Why it is collateral, not policy.** The approved purge command
(`tasks/task_Purify_2026-10-25.md`, Section A, line 71) lists
`model-report-Muse_Glimmer_30B-2026-10-25.md` — the one-off run log — but
**never** the template. No audit has ever recommended deleting it. It was
swept up by a too-broad batch deletion and then committed.

**Guidance:** single-file restore, exactly the shape `RULES.md` § *Agent
git-restore rule* sanctions (one file, demonstrably needed, user-confirmed):

```powershell
git restore --source=c2a3343c -- model-report-TEMPLATE.md
```

then commit it as its own one-file commit. After restore, **no doc edits are
needed** — every reference above becomes valid again. This audit did not run
the restore; it needs your go-ahead per `RULES.md`.

### A2. The approved 2026-10-25 purge is half-executed — 9 approved leftovers are still tracked

The following were **already user-approved** in `task_Purify_2026-10-25.md`
§ A (Section A command, line 71) but are still on disk **and still tracked**
after `b666acf2` (verified via `git ls-files` today):

| Path | Size | What it was (per the approved audit) |
|---|---|---|
| `batch_write.cjs` | 4.1 KB | ad-hoc bulk file writer |
| `_t10.txt` | 23 B | encoding smoke-test output |
| `_test_ascii.txt` | 63 B | encoding smoke-test output |
| `.tmp-queue.cjs` | 2.1 KB | one-off queue recompute (STEM `MiniMax_M3.1_Flash`) |
| `queue_slugs.txt` | 0 B | stale slug list (`model-queue.md` is the live roster) |
| `scripts/tmp-dates.cjs` | 839 B | one-off temp script |
| `scripts/tmp-missing.cjs` | 505 B | one-off temp script |
| `assets/avatar-backup-2026-10-05/` | 4 files | dead favicon rollback kit (live files are byte-identical — verified by hash in the prior audit) |

Plus two items the approved batch missed or never reached:

- **`.missing-list.txt`** (771 B, tracked) — root scratch output of an old
  missing-model scan; same class as `missing_models.txt` / `existing_slugs.txt`
  which were deleted. Nothing references it (repo-wide grep today).
- **`state/`** — an **empty, untracked** directory at the repo root; the prior
  audit's `Remove-Item -Recurse state` was never run.

**Guidance:** re-run the already-reviewed deletion as one batch, plus the two
additions. None of these paths are under `model/`, so the pre-commit guard and
the `RULES.md` deletion-approval rule do not apply — but the prior approval
should be re-confirmed since the batch is being re-issued:

```powershell
git rm --quiet batch_write.cjs _t10.txt _test_ascii.txt .tmp-queue.cjs queue_slugs.txt scripts/tmp-dates.cjs scripts/tmp-missing.cjs .missing-list.txt
git rm -r --quiet assets/avatar-backup-2026-10-05
Remove-Item -Recurse -Force state
```

### A3. `check_parse.js` + `scan_missing.py` — debug scripts accidentally committed by `b666acf2`

Both were **untracked** when this audit started (observed as `??` in the
pre-commit working tree) and are now **tracked** — they were swept into the
"refresh site visuals" commit together with the legitimate icon work.

- `check_parse.js` — extracts the object literal from
  `src/data/vendorIcons.generated.ts` and **`eval()`s it** to check it parses.
- `scan_missing.py` — string-scans the same generated file for `,{"viewBox"`
  occurrences (a missing-key debugging session).

Nothing references either (repo-wide grep today). The vendor-icon refresh they
were debugging is real work and stays; the debug scripts themselves are
root-level one-offs of exactly the class the purge removes (sanctioned tooling
lives in `scripts/lib/`, covered by `pnpm test`).

**Guidance:** `git rm --quiet check_parse.js scan_missing.py` in the next
housekeeping commit.

### A4. `findings/` — legacy research artifacts predating the `model/<slug>/` convention

Four tracked files, none of which `pnpm sync` can see (it scans `model/` only,
`scripts/sync-data.mjs:199-201`):

```text
findings/jev-1.13.md
findings/jev-1.13_temp.md
findings/research/research-Laguna_S_2.1/claude-sonnet-5.4.md
findings/research/research-Laguna_S_2.1/qwen-3.7.md
```

These date from an earlier workflow generation. They have zero effect on the
site, the averages, or the registry; `jev-1.13_temp.md` is scratch by name.
The corresponding live data exists in the canonical trees (`model/jev-1.13/`,
`model/laguna-s-2.1/`). They sit outside the `RULES.md` permanence tree, but
they are research-shaped files, so this needs your explicit sign-off rather
than a batch delete.

**Guidance:** `git rm -r findings` after your confirmation — the canonical
findings for the same subjects already live under `model/` (permanence rule
satisfied there). If you prefer to keep the Laguna research sub-reports as
history, delete only the two `jev-1.13*` scratch files and move the rest
under `docs/` — either is fine; today it is dead weight with no reader.

### A5. `modeljev-1.13/` — byte-identical stray duplicate at the repo root

`modeljev-1.13/MiniMax_M3.1_Flash.md` is a typo'd folder name (`model` +
`jev-1.13` concatenated), committed long ago. Re-verified **today** by SHA-256:
the root copy and `model/jev-1.13/MiniMax_M3.1_Flash.md` are **byte-identical**.
`pnpm sync` scans `model/` only, so the root copy contributes nothing to
averages, the registry, or the site — it is pure duplicate weight, and the
prior audit (Purify D1) already established the same verdict.

**Guidance (needs your confirmation — it is a findings file by nature):**
`git rm -r modeljev-1.13` — the canonical file inside `model/jev-1.13/` is
untouched; then `pnpm sync` to confirm zero drift.

---

## PART B — Working-tree hygiene (report only — protect this work)

### B1. In-flight research files — never sweep these into cleanup commits

17 untracked files are active research by other agents (the `GPT_6_Sol` /
`GPT_6_Luna` / `Step_5_Preview` wave across 16 model folders, plus
`tasks/task_DeepSeek_V4.1_Flash_2026-10-31.md` — a parallel audit from today).
Every housekeeping commit should use **explicit paths** (as the commands in
this file do), never `git add -A` / `git commit -a`.

### B2. Twin-retirement pending commit — sanctioned, let it land

`model/claude-sonnet-3.5/GPT_6_Luna.md.excluded` and
`model/nemotron-3-nano-omni/GPT_6_Luna.md.excluded` are deleted in the working
tree while fresh `GPT_6_Luna.md` siblings exist (one committed in `b666acf2`,
one untracked). That is the sanctioned own-twin retirement
(`RULES.md` § Research rules; `tasks/research.md` Step 3.3) — `pnpm sync` will
log it as INFO `twin-retired`. Also `model/qwen-3.5-flash-lite/Step_5_Preview.md.excluded`
is modified — in-flight edit, not junk. **No action.**

### B3. Modified vendor-icon files — real work, commit as its own change

`assets/vendor-icons/runpod.svg` + `src/data/vendorIcons.generated.ts` are
modified (continuation of the `b666acf2` icon refresh). Commit them as the
icon-refresh change they are, separate from any purge commit, so the history
stays reviewable.

---

## PART C — Documentation drift

### C1. `model-comparison.md` — two rule docs still disagree (third audit in a row)

- `README.md:76` — *"`model-comparison.md` is frozen v1–v3 history."*
- `.agents/rules.md:39` — *"`model-comparison.md` — overview table +
  methodology (per-model details live in `model/`)"*

Hundreds of findings files cite it as their methodology source, and
`pnpm sync` never regenerates it — it is a frozen hand-made document. The same
contradiction was flagged by the Claude Opus 5 audit (C8, 2026-10-04) and the
Kimi K3 audit (C5, 2026-10-04) and is still unresolved.

**Guidance:** one-line fix in `.agents/rules.md:39`:
"`model-comparison.md` — **frozen v1–v3 history** (live roster:
`model-queue.md`; live site: the tracked pages themselves)."

### C2. `docs/v2-promotion-rollback.md` — keep, optionally compress

Still referenced by a live code comment (`src/routes/index.tsx:19-20`) and
records the 2026-10-15 promotion history. The Purify audit (D4) said keep.
**Guidance:** keep as-is; if you want the weight gone, compress to a 5-line
history note — but that is optional, not a cleanup.

### C3. `models.ts` comment points at a symbol Part D deletes

`src/routes/index.tsx:63` — "same as the original compare page
(models.ts MODEL_COLORS)". If **D3** removes `MODEL_COLORS`, reword this
comment to state the invariant (the three series colors are the A/B/C slot
palette) instead of citing a dead export.

---

## PART D — Simplification (behaviour-preserving)

Items marked *(Purify Cn/In/Hn — open)* were already recommended on
2026-10-25, were not applied, and are **re-verified against today's code**.

### D1. Theme-init block duplicated 4× *(Purify C1 — open)* — highest-value cleanup

The identical ~40-line `useVisibleTask$` theme bootstrap (stored `v2-theme` →
inherited `html.dark` → OS preference, writing signal + root class + both
storage keys) is copy-pasted, byte-for-byte in spirit, at:

- `src/routes/layout.tsx:30-68`
- `src/routes/index.tsx:157-199`
- `src/routes/model/[slug]/index.tsx:92-130`
- `src/routes/providers/index.tsx:207-245`

**Guidance:** extract `src/components/v2/useThemeInit.ts` exporting
`useThemeInit(): Signal<"light" | "dark">` (signal + task inside; call it
unconditionally at hook scope). Replace the four call sites with
`const theme = useThemeInit();` — ~160 lines → ~45, one home for the
"single writer" invariant the comments defend. Zero DOM/behaviour change.
(`design-6sol` deliberately keeps its own `d6-theme` isolation — leave it.)

### D2. Hexagon geometry + dimension labels + highlight logic duplicated *(Purify C2/H1–H4 — open)*

Re-verified today, duplicated between `src/routes/index.tsx` and
`src/routes/model/[slug]/index.tsx` (plus a third copy in the gitignored
`design-6sol` study):

- `HEX_GAMMA` / `hexPoint` / `hexPolygon` — `index.tsx:58-99` vs
  `model/[slug]/index.tsx:40-65` (only `HEX_CY`/`HEX_MAX_R` differ — params)
- label tables `tableKeys` / `names` / `colNames` (`index.tsx:25-48` vs
  `model/[slug]/index.tsx:20-37`) — although `DIMENSIONS` in `models.ts`
  already carries label/short/description
- best/worst highlight machinery `colBestWorst` / `hlStats` / `hlClass`
  (+ `hlTitle` on the profile) — `index.tsx:306-329` vs
  `model/[slug]/index.tsx:177-199`

**Guidance:** one `src/components/v2/hex.ts` (`hexPoint(value, index, { cx,
cy, maxR })`, `hexPolygon`, label maps derived from `DIMENSIONS` while
preserving the two orderings — table vs hex-clockwise) and a small `hl.ts`.
Start with the pure functions; the duplication is a live drift risk (the
comments already have to explain "same γ as the other page").

### D3. Dead exports in `src/data/` — five symbols, re-verified today

Verified by repo-wide grep that the only occurrence is the definition:

| Symbol | Location | Note |
|---|---|---|
| `MODEL_COLORS` | `src/data/models.ts:228` | pages define local `SERIES_COLORS` with identical values; only a comment mentions it (C3) |
| `sortSourceFor` | `src/data/models.ts:395` | unused anywhere |
| `getModel` | `src/data/models.ts:470` | consumers use `MODELS.find` directly |
| `PAID_ONLY_PROVIDERS` | `src/data/providers.ts:308` | **new** — not in the prior audit; the Providers page imports `FREE_TIER_PROVIDERS` + the category lists only |
| `getProvider` | `src/data/providers.ts:343` | *(Purify G1 — open)* |

Additionally `checkOverallScores` (`models.ts:478`) is only called by its own
DEV block at the bottom of the file — drop the `export` keyword, keep the
function.

**Guidance:** delete the five exports + the `export` keyword; `pnpm
build.types` after. Low risk, mechanical.

### D4. `top3Ids` vs the in-component ranking pipeline *(Purify C4 — open)*

`top3Ids(src)` (`index.tsx:119-138`) and the component body's
`withSource` → `rankBase` → `generative` pipeline (`index.tsx:216-233`)
re-implement the same filter→map→sort with slightly different shapes.

**Guidance:** one module-level helper `rankBySource(src): AiModel[]` returning
the sorted generative list; `top3Ids` becomes a 3-line wrapper and the
component body calls the same helper — `cmpA/B/C` defaults, `top`, and the
hero cast then derive from one ranked array.

### D5. `warnOnce` implemented twice with different mechanisms *(Purify C5/H7 — open)*

`models.ts:30-35` uses a plain module-level `Set`; `providers.ts:186-194`
caches the `Set` on the function object via a double cast. Same purpose, two
patterns.

**Guidance:** copy the `models.ts` pattern into `providers.ts` (module-level
`Set`), or extract one tiny shared `src/data/warnOnce.ts` used by both.

### D6. `withFreeZenLink` returns `any[]` *(Purify C5 — open)*

`src/components/freeZenLink.tsx:11` — `function withFreeZenLink(text: string):
any[]` in a `strict: true` repo.

**Guidance:** type it `(string | JSX.Element)[]` (or `JSXChildren`), no
behaviour change.

### D7. Invalid Tailwind classes — `text-md` ×9, `font-inherit` ×2 *(Purify G3 — open, re-verified)*

`src/routes/index.tsx` uses `text-md` nine times (e.g. lines 617, 726, 734,
1020, 1028) and `font-inherit` twice (lines 1237, 1287). Tailwind v3.4 has
neither class and `tailwind.config.js` extends no `fontSize` — both are silent
no-ops. The profile page already uses the correct forms
(`text-*` explicit sizes; `font-[inherit]` at `model/[slug]/index.tsx:508, 533`).

**Guidance:** `text-md` → `text-base` (or the intended size);
`font-inherit` → `font-[inherit]`. Tiny diff, closes a small visual bug.

### D8. `VendorIcon` — signal + task machinery for a pure prop derivation *(new)*

`src/components/VendorIcon.tsx:220-242`: two `useSignal`s are initialized from
props and then re-synced by a `useTask$` tracking `props.id`/`props.name` —
but a Qwik `component$` body already re-runs when its props change, so the
signals add ~20 lines of state machinery with no effect.

**Guidance:** replace with direct computation in the body:

```ts
const vendor = vendorFor(props.id, props.name);
const entry = vendor ? VENDOR_ICON_SVGS[vendor.icon as keyof typeof VENDOR_ICON_SVGS] : undefined;
```

Medium-low risk — verify with a typecheck plus a visual spot-check of the
compare slots and the rotating leader spotlight (the two places props change
dynamically).

### D9. `v2.css` — the `.v2` class it targets is never applied *(Purify G2 — open, re-verified)*

`src/components/v2/v2.css` only styles `.v2`, `.v2.dark`, and a
reduced-motion kill switch on `.v2, .v2 *` — but no element in any `.tsx`
carries a bare `v2` class (all grep hits are `V2*` components, `v2-*` marker
classes, or `v2-theme`). The file is imported three times and does nothing.

Two nuances beyond the prior audit:

- The **`color-scheme` half is already covered elsewhere**: `global.css:21`
  (`color-scheme: light` on `:root`) and `:35` (`dark` on `html.dark`) — so
  only the **global reduced-motion kill switch** is the actually-missing
  intended feature.
- The three imports are redundant with each other: `layout.tsx:5` imports the
  file at module level and the layout is an ancestor of every route, so the
  duplicate imports in `index.tsx:12` and `providers/index.tsx:7` add nothing
  (Vite dedupes them).

**Guidance (pick one):**
1. *(recommended)* add `v2` to the page-root `class` of the three standalone
   canvases (index / model profile / providers) — restores the intended
   reduced-motion protection; drop the two duplicate imports; or
2. delete the file knowingly, accepting that no global reduced-motion fallback
   exists (per-element `motion-reduce:` utilities remain).

### D10. `layout.tsx` — unreachable conditional *(Purify G4 — open)*

`src/routes/layout.tsx:14` — `path === ""` can never be true: `pathname`
always starts with `/` and the two `replace` calls guarantee a leading `/`.
Harmless belt-and-braces. **Guidance:** remove or keep; zero risk either way.

### D11. `sync-data.mjs` pipeline dedup *(Purify I2–I5 — open, test-locked)*

- Five near-identical emit blocks (read → compare → write → log,
  `sync-data.mjs:776-869`) → one `writeIfChanged(path, next, msg)` helper
  (~50 lines gone).
- The `SOURCE_DEFS` entry regex is copy-pasted inline at `:413` although
  `parseRegistryEntries` (already imported) captures the same groups.
- The findings-file filter predicate is written three times with slight
  variations (`:467-474`, `:494-503`, `:566-572`) → hoist
  `isFindingsFile(f, forbiddenStemFiles)`.
- `stem.replace(/_/g, " ")` at `:417` re-inlines `stemToKey` (`naming.mjs`).

**Guidance:** all four are covered by the 8-suite test contract; do them one
commit at a time with `pnpm test` between.

---

## PART E — User decisions (product / cost calls)

### E1. `public/fonts/` — 68 files, 2.29 MB, one family used *(Purify B1 — open, re-verified)*

Re-measured today: 68 woff2 files / 2 285.8 KB; `theme.css` declares 31
families while `--font-body` and `--font-display` are both `"Ubuntu"` (only
ubuntu-400/700 preloaded in `root.tsx`). Browsers fetch only used faces, so
the cost is repo/deploy weight, not runtime. **Option 1:** keep — it is the
documented reskin mechanism. **Option 2:** delete all but `ubuntu/` and trim
the `theme.css` header — ~2.2 MB lighter clones and deploys.

### E2. `hunyuan` icon orphan *(Purify A9/B2 — open, re-verified)*

`VendorIcon.tsx:76-79` maps `hunyuan` → the `tencent` icon; the `hunyuan` key
in `vendorIcons.generated.ts` (+ `assets/vendor-icons/hunyuan.svg`) is
unreachable. **Guidance:** wire `{ match: "hunyuan", icon: "hunyuan" }` (better
branding for the Tencent Hunyuan folders) or drop the key + the source SVG.

### E3. `.opencode/plugins/v1/` — 14 parked V1 originals (reference-only)

The V2 ports are the live, verified set; both loaders glob the top level only,
so the `v1/` folder is inert — but `.agents/rules.md` deliberately parks it as
reference. **Guidance:** your call — keep as documented history, or `git rm`
(now that the V2 suite is verified on Desktop 2.2.0, git history preserves the
originals either way). Do not delete silently; the rules currently promise it
exists.

### E4. Long-standing product calls (restated, unchanged)

- **Contact form is permanently inert** (`CONTACT_EMAIL = ""`,
  `contact/index.tsx:13`) — set an address, or link GitHub issues instead.
- **Five footer donate placeholders** render as "· soon" forever
  (`V2Footer.tsx:25-31`) — fill URLs or drop the block.
- **`REPORT.md`** keeps growing (append-only history) — optionally archive
  pre-2026-10 sections.

---

## PART F — Verified healthy (no action)

- **Entry points:** `entry.dev/preview/ssr.tsx` all wired to their
  package.json scripts and consumers.
- **`src/data/evidence.ts` wrapper:** correctly code-split — `models.ts`
  deliberately does not import it; only the profile route does, keeping the
  ~400 KB generated evidence bundle out of list-page chunks.
- **Test matrix:** `package.json` "test" lists exactly the 8 `*.test.mjs`
  files that exist in `scripts/lib/` — no orphans, no gaps.
- **Configs:** `tailwind.config.js` is already minimal (prior audit's cleanup
  holds); `vite.config.ts` / `adapters/static/vite.config.ts` /
  `vercel.json` / `opencode.json` all live and referenced.
- **`design-6sol`:** intentionally gitignored (`src/routes/design*` rule) —
  local design study, referenced by the layout's skip-list; on fresh clones it
  is simply absent and nothing breaks.
- **Mirror trees:** `models_voice/` and `models_finance/` are intact and
  consumed by `MIRROR_ROOTS` in `validate.mjs` + the catalog loop in sync.
- **`public/`:** every asset is referenced (avatar/favicon/manifest/backers
  image, Ubuntu fonts, generated robots.txt).

---

## Priority recommendation

1. **A1** — restore `model-report-TEMPLATE.md` from `c2a3343c` (one file,
   one commit). Everything else can wait; this cannot.
2. **A2 + A3** — finish the already-approved purge batch and sweep the two
   accidentally-committed debug scripts (one housekeeping commit, explicit
   paths).
3. **D3 + D7** — dead exports and the invalid Tailwind classes: two small,
   mechanical, test-covered diffs.
4. **D1** — the theme-init dedup (biggest single simplification, 4 sites).
5. **A4 + A5** — `findings/` and `modeljev-1.13/` after your sign-off.
6. **D2, D4, D5, D6, D8, D9, D10, D11** — follow-up refactors, one commit at a
   time after D1 lands so diffs stay reviewable.
7. **E1–E4** — product/cost calls, whenever you have a preference.

## Verification after any approved change

```powershell
pnpm test                                                  # 8 suites must stay green
pnpm sync && pnpm build.types:direct && pnpm build:direct  # Windows-safe handover form
git diff --stat                                            # confirm only intended paths moved
```

Per AGENTS.md this audit ran none of these — they are the user handover.
Section A1 needs only `git restore` + commit (no build). Sections A2/A3/A4/A5
need `pnpm test` afterwards at most; Section D changes need the full triple.
