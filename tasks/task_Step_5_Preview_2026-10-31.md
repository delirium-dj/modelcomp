# task_Step_5_Preview_2026-10-31 — purification & simplification audit

> **Scope:** full-repo scan for (a) things that are no longer relevant and can be
> eliminated without touching functionality, and (b) code that can be simplified
> without changing behaviour.
> **Nothing in this file was applied.** Every item needs explicit user sign-off.
> **Precedence:** `RULES.md` wins on any conflict. No `model/<slug>/` research
> file or folder is proposed for deletion anywhere in this document.
> **Independence:** every finding below was formed from the source tree alone.
> The `tasks/task_Claude_Opus_5_2026-10-04.md` format reference was opened only
> after the scan was complete. Nothing was copied from any other task file.
>
> **Parallel audit (disclosed for completeness):** a second audit,
> `tasks/task_DeepSeek_V4.1_Flash_2026-10-31.md`, appeared in `tasks/` while this
> scan was still running. I read only its header plus one section, to avoid a
> filename collision, and adopted **none** of its findings. It independently
> corroborates four of mine — **A1** (11 tracked scratch files), **A3**
> (`modeljev-1.13/` byte-identical duplicate), **A4** (`findings/` orphan tree)
> and **B1** (`model-report-TEMPLATE.md` deleted). Two agents reached the same
> four conclusions from the same tree, which raises my confidence in them.

Audited by: Step 5 Preview (`stepfun-ai/step-5-preview`), 2026-10-31.
Verification basis: direct reads of every file under `src/`, `scripts/`, `tasks/`,
`PRD/`, `.agents/`, `.antigravity/`, `docs/`, `providers/`, `adapters/`,
`assets/`, plus `git ls-files` / `git check-ignore` / `git log` / `git status` /
`git diff --stat` / SHA-256 hashing for tracked-vs-stale status, and filesystem
byte counts. Claims I could not verify from the tree are marked *(unverified)*.

**Baseline measured:** 211 `model/` folders · 7 `models_voice/` · 2
`models_finance/` · 103 `SOURCE_DEFS` registrations · 10 073 git-tracked files ·
133 vendor icons (`assets/`) vs 133 keys in `vendorIcons.generated.ts` (1:1) ·
`public/fonts/` = 68 woff2 files / 2 340 704 B across 31 families ·
11 tracked scratch files at the repo root and in `scripts/` · uncommitted
working-tree changes: 1 deletion, 2 modifications, 6 untracked files.

---

## 0. Executive summary

| Part | Theme | Items | Risk |
|---|---|---|---|
| **A** | Dead / obsolete artifacts — safe to delete (after sign-off) | 9 | low |
| **B** | Broken contracts & correctness bugs | 7 | med |
| **C** | Documentation drift (docs contradicted by the code) | 5 | low |
| **D** | Simplification, behaviour-preserving | 12 | low–med |
| **E** | Working-tree health (report only, no deletions) | 4 | — |

The single highest-value finding is **B1**: `model-report-TEMPLATE.md` — the
file every research workflow doc, `model/README.md` and ~60 existing findings
files treat as mandatory — was deleted from the tree in commit `b666acf2` and is
absent from disk *and* from git. A fresh clone cannot start research.
The second is **A2**: 64 of the 68 shipped font files (~2.2 MB, deployed to
`dist/fonts/` on every build) belong to 30 font families that no style rule
anywhere in the repo references.

---

## PART A — Eliminate (no longer relevant)

### A1. Eleven tracked scratch / one-off scripts, still in git
All eleven are tracked (verified with `git ls-files`), none is referenced by
`package.json`, any doc, or any script, and none is needed to build or sync:

| Path | Size | What it actually is |
|---|---|---|
| `_t10.txt` | 23 B | `# Test  $0.435 — ` — a mojibake probe |
| `_test_ascii.txt` | 63 B | `# Test - emdash, arrow ->, …` — same probe |
| `.missing-list.txt` | 771 B | frozen research-queue scratch: `MISSING_COUNT=35` + a slug list |
| `.tmp-queue.cjs` | 2 088 B | ad-hoc queue recompute for STEM `MiniMax_M3.1_Flash` |
| `queue_slugs.txt` | **0 B** | empty |
| `temp_slugs.txt` | 3 057 B | stale flat slug list |
| `batch_write.cjs` | 4 114 B | 2026-10-06 batch-writer that **hardcodes 20 models' seven scores each** and writes `model/<slug>/Inkling.md`. Re-running it today would resurrect a phantom rater with fabricated numbers |
| `check_parse.js` | 595 B | ad-hoc `eval()` parse-check for `vendorIcons.generated.ts` |
| `scan_missing.py` | 527 B | ad-hoc Python scanner for the same file |
| `scripts/tmp-dates.cjs` | 839 B | ad-hoc date scan for one STEM |
| `scripts/tmp-missing.cjs` | 505 B | ad-hoc "which queue slugs lack this file" scan |
| `update_research.mjs` | 6 580 B | one-off research updater; referenced by nothing |

**Guidance:** `git rm` all eleven. `batch_write.cjs` is the one I would prioritise
— it is the only item here that can *inject bad data* rather than merely occupy
bytes. Verify with `pnpm test` (it does not touch the sync path) and
`pnpm build.types:direct`. Nothing in `src/` or `scripts/lib/` imports any of them.

### A2. `public/fonts/` — 64 of 68 files are dead weight (~2.2 MB deployed)
Verified by scanning every `font-family:` declaration in `src/**/*.{tsx,css}`
against the 66 `@font-face` rules in `src/theme.css`:

- **`Ubuntu`** is the only family actually rendered — `theme.css:105-106` sets
  both `--font-body` and `--font-display` to `"Ubuntu"`, and `root.tsx:20-21`
  preloads exactly `ubuntu-400/700`.
- **`DM Sans`** and **`Outfit`** appear only in `src/routes/design-6sol/study.css`
  — and that route loads them from **Google Fonts**
  (`index.tsx:523`, `fonts.googleapis.com/css2?family=DM+Sans…&family=Outfit…`),
  so its local copies are never requested either.
- The remaining **28 families** (Inter, Roboto, Open Sans, Lato, Montserrat,
  Poppins, Raleway, Nunito, Work Sans, Manrope, Oswald, Playfair Display,
  Noto Sans, Roboto Condensed, Merriweather, Rubik, Barlow, Source Sans 3,
  Fira Sans, Mulish, Titillium Web, Nunito Sans, Josefin Sans, Cabin, Heebo,
  Archivo, Public Sans, Space Grotesk) have **zero** `font-family` references
  anywhere in `src/`.

All 68 files are copied into `dist/fonts/` on every build (verified: 68 files,
2 340 704 B). Keeping `ubuntu-400/700` and deleting the other 64 files plus
their 64 `@font-face` rules removes ~2.2 MB of deploy weight with **zero**
rendering change.
**Guidance:** delete `public/fonts/*` except `ubuntu/`; delete the matching
`@font-face` lines; **update `theme.css:1-20` in the same commit** — its header
advertises "Available family names (all self-hosted under `public/fonts/`)" with
the full 31-family list, and would become a lie the moment the files go (see **C3**).

### A3. `modeljev-1.13/` — stray duplicate of `model/jev-1.13/`
A folder at the repo root (a typo of `model/jev-1.13`) containing one findings
file. Verified: `model/jev-1.13/MiniMax_M3.1_Flash.md` exists and the root copy is
**byte-identical** (SHA-256 `C7F4CA94…9736B` on both). `pnpm sync` scans `model/`
only, so the copy is parsed nowhere — it is silently inert, and it violates the
`RULES.md` path contract ("a research agent's file is always
`model/<subject-folder>/<YOUR_STEM>.md`").
**Guidance:** `git rm -r modeljev-1.13`. The canonical file is untouched. This is
the second audit to flag it (first: `tasks/task_Purify_2026-10-25.md`), so it is
now a two-audit-old pending decision rather than a new discovery.

### A4. `findings/` — two empty tracked files and two ad-hoc research dumps
`findings/jev-1.13.md` and `findings/jev-1.13_temp.md` are **2 bytes each**
(verified) — tracked, empty, and referenced by nothing that reads the directory.
`findings/research/research-Laguna_S_2.1/claude-sonnet-5.4.md` (5 811 B) and
`…/qwen-3.7.md` (4 559 B) are ad-hoc research dumps written outside the
`model/<slug>/` tree (commit `1d83f149`) in a format no script consumes.
**Guidance:** the two empty files are unambiguously deletable. The two research
dumps are the *only* non-empty content, so deleting the directory needs sign-off —
if the research history is wanted, move the two `research-*` files under `model/`
or archive them; otherwise `git rm -r findings`.

### A5. `assets/avatar-backup-2026-10-05/` — expired rollback snapshot
A 2026-10-05 backup holding copies of `router-head.tsx`, `favicon.svg`,
`manifest.json` and a `README.txt` describing how to roll back the Vercel-avatar
favicon. Verified: the live `public/favicon.svg`, `public/manifest.json`,
`public/avatar.png` and `src/components/router-head.tsx` are all current and in
use, and nothing in the repo references the backup folder. The design it exists
to restore has now shipped and been stable for 16 days; git history covers any
genuine rollback need.
**Guidance:** delete the folder (third audit to flag it).

### A6. `state/` — empty directory
Verified empty (no files, recursively) and untracked. Nothing references it.
**Guidance:** remove the local directory. There is no git impact — git cannot
track an empty directory.

### A7. `opencode.json` — 20+ stale entries in tracked agent-runtime config
152 lines of tracked OpenCode config (`llm7` 5 models, `agentrouter` 2,
`kilocode` 15). Several entries are stale by the dataset's own records:
`nemotron-3-nano:30b` is both the `"model"` default *and* a deleted-twin subject
in the working tree, `minimax-m2.7` and `deepseek-v4-flash:0731` predate the
current roster, and the `nemotron-3-*` KiloCode `id:` overrides duplicate routes
already tracked under `model/`. This is agent tooling, not site code, so removing
it breaks no build — but it is also the live config the user's agents run on.
**Guidance:** user decision. Either prune the stale provider/model entries, or
`git rm` it and keep a local copy so the harness config stops living in the site
repo. I would not touch it without an explicit instruction.

### A8. `PRD/webshop-prd.md` — 223 KB of unrelated content
`PRD/` is gitignored (`.gitignore:13`), so this is local-only and invisible to
any clone — but 223 719 B describing a **webshop** is sitting next to the real
product spec `PRD/prd.md` (10 784 B), which is *also* gitignored despite being
named in `AGENTS.md` and the project map's required reading (that part is **C2**).
**Guidance:** delete `PRD/webshop-prd.md` locally; decide whether `PRD/prd.md`
should be un-ignored so a fresh clone can satisfy the required-reading contract.

### A9. `src/routes/design-6sol/` — local-only design study, now superseded
25 827 B of TSX + 19 385 B of CSS, gitignored via `.gitignore:15`
(`src/routes/design*`), reachable at `/design-6sol/`. `layout.tsx:19` still skips
its chrome and `docs/v2-promotion-rollback.md:15` still documents it as
"local-only (gitignored), untouched" — both still accurate.
It is a **complete duplicate of the front-end machinery**: its own
`hexKeys`/`names`/`colNames` (a third copy — see **D5**), its own `HEX_GAMMA`
math, and its own copies of the sponsor tiers, backer entry and donate-link array
(`D6_TIERS`, `D6_BACKERS`, `D6_EXTRA_LINKS` mirroring `V2Footer.tsx:10-31`).
**Guidance:** user decision, because it is local-only and harmless to the repo.
Deleting it would additionally collapse the third copy of the hexagon math and
the third copy of the sponsor data. If it is kept, it should at least stop
re-declaring the shared constants.

---

## PART B — Bugs found while scanning

### B1. `model-report-TEMPLATE.md` is gone from the tree — and everything mandates it
Verified: **absent from disk**, **absent from `git ls-files`**, and removed in
commit `b666acf2` ("Added model research and refresh site visuals"). Yet it is
treated as mandatory by:

- `tasks/research.md:49,77,176,232,267` (template + signature contract)
- `tasks/research-brief.md:82` ("read it once")
- `tasks/research-assign.md:9,30` ("Draft per `model-report-TEMPLATE.md`")
- `tasks/research-convert-excluded.md:46`
- `.agents/rules.md:41,192` ("New agents start from `model-report-TEMPLATE.md`")
- `.agents/workflows/batch_research_all_models.md:12`
- `model/README.md:49`, `README.md:74`
- `scripts/lib/parse.mjs:97`, `scripts/lib/benchmarks.mjs:9`,
  `scripts/sync-data.mjs:489` all cite it as the source of the format they parse
- **~60 findings files** quote its SELF-EXCLUSION rule as the authority for
  saving `.md.excluded`

So the parser's documented contract, the delegation workflow's instruction to new
agents, and ~60 files' justification for their own shape all point at a file a
fresh clone cannot read. **This is the highest-value finding in this report.**
**Guidance:** restore a single file from git history —
`git show c732b1c0:model-report-TEMPLATE.md > model-report-TEMPLATE.md`. Per
`RULES.md` § Agent git-restore rule this needs a **one-file confirmation popup**
(naming that exact path) before it is run; I have not run it. Then verify the
restored content still matches what `parse.mjs` expects.

### B2. The working tree carries uncommitted drift
`git status --short` reports:
- ` D model/nemotron-3-nano-omni/GPT_6_Luna.md.excluded` — a deleted findings
  file. **I verified this is a sanctioned own-twin retirement**: the sibling
  `model/nemotron-3-nano-omni/GPT_6_Luna.md` (5 785 B) is present, which is
  exactly the `.md.excluded` → fresh `.md` case `tasks/research.md` Step 3.3
  permits and `.githooks/pre-commit:191-198` allows. Not a violation — but it is
  uncommitted, so it is one `git checkout` away from becoming one.
- ` M assets/vendor-icons/runpod.svg` and ` M src/data/vendorIcons.generated.ts`
  — icon source and generated registry edited but never committed, leaving the
  two out of sync in git (on disk they are still 133:133 consistent, verified).
- `??` six untracked findings files: `model/{claude-sonnet-3.5/GPT_6_Luna,
  deepseek-v4.1-flash-1017/GPT_6_Sol, gpt-6.1-terra/GPT_6_Sol,
  grok-4.1-fast/GPT_6_Sol, nemotron-3.5-super-vl/GPT_6_Sol, seed-2.0-pro/GPT_6_Sol}.md`

**Guidance:** commit (or restore) the icon pair together so `assets/` and the
registry land as one atomic change, and run `pnpm sync` to pick up the six new
findings files. The `.md.excluded` deletion is safe to commit — the pre-commit
hook will permit it because the fresh sibling exists.

### B3. The theme contract is implemented four times
The identical ~44-line "explicit choice → inherited `html.dark` → OS preference,
write back all three keys" `useVisibleTask$` block appears verbatim in four
places (verified with a repo-wide grep for `localStorage.getItem("v2-theme")`):

- `src/routes/layout.tsx:30-68`
- `src/routes/index.tsx:157-199`
- `src/routes/model/[slug]/index.tsx:92-…`
- `src/routes/providers/index.tsx:207-…`

`root.tsx:29-44` then holds a *fifth* variant (the anti-flash inline script) that
reads the same `theme` key, and `V2Header.tsx:74-86` a sixth (the toggle's own
write-back). Six copies of one persistence rule is the reason the comments in
each file warn about "a stale ancestor `.dark` leaking dark: utilities into light
mode" — that bug class recurs once per copy.
**Guidance:** extract `src/components/v2/themeSync.ts` exporting
`useThemeSync$(): Signal<"light" | "dark">` and call it from all four routes.
`root.tsx`'s script and `V2Header`'s toggle must stay where they are (one needs
to run pre-hydration, the other needs the signal), but they can import the shared
storage-key constant.

### B4. `/contact/` is unreachable from the desktop header
`V2Header.tsx:150-164` renders Compare / Scoring / Models / Providers in the
desktop nav. **Contact is absent**; it exists only in the mobile drawer
(`:243-251`) and the footer. Any desktop visitor who wants to report a score
correction has to scroll to the bottom of the page.
**Guidance:** add the same `<a href="/contact/">Contact</a>` to the desktop nav
(next to Providers). One line, no layout change.

### B5. The contact form can never submit
`src/routes/contact/index.tsx:13` — `const CONTACT_EMAIL = ""`. Every submit
short-circuits to the "Contact inbox is not configured yet — please reach out via
GitHub" fallback. The page is prerendered and linked from the footer and the
mobile drawer, so the site ships a form that is structurally incapable of working.
**Guidance:** set the address, or delete the form and link the GitHub issues page
the fallback message already names. Shipping a dead form is worse than no form.

### B6. Five permanent "· soon" donate placeholders
`V2Footer.tsx:25-31` — all five `EXTRA_DONATE_LINKS` entries have `href: ""`, so
the footer always renders five dashed `Ko-fi · soon`, `Patreon · soon`, … chips
under an "Also via:" heading. The comment at `:23-24` ("only entries with a
non-empty href render") **contradicts the code at `:78-94`**, which renders a
`<span>` for the empty ones.
**Guidance:** either fill the URLs, or delete the array and the "Also via:"
block (and the `README.md:85-87` paragraph that documents them). If they stay,
fix the comment to say what the code does.

### B7. The hexagon exists three times, and the project map names components that were deleted
Verified: `HexRadar.tsx`, `ModelCards.tsx`, `CompareSection.tsx`, `Methodology.tsx`
do **not** exist — yet `.antigravity/history/project-map.md:39` still describes
them as the live UI ("components (HexRadar, ModelCards, CompareSection)"). What
actually exists: the same `HEX_GAMMA` / `hexPoint` / `hexPolygon` math is
copy-pasted into `src/routes/index.tsx:58-99`, `src/routes/model/[slug]/index.tsx:39-65`
and `src/routes/design-6sol/index.tsx:45-72`, and `src/routes/index.tsx` renders
two full hexagon SVGs inline (hero at `:429-518`, compare at `:648-721`, ~90 lines
each) that differ only in stroke widths and fill opacity.
**Guidance:** see **D4** — extracting one `hexagon.ts` (optionally restoring a
`<HexRadar>` component, the name the map still expects) removes the triplication
*and* makes the project map true again.

---

## PART C — Documentation drift

### C1. Project map describes an architecture that was deleted
`.antigravity/history/project-map.md:4` claims "Refreshed 2026-10-05"; `:39`
lists `HexRadar`, `ModelCards`, `CompareSection`; `:85` describes
`scripts/lib/` as "6 modules + 6 `*.test.mjs` suites" (now 7 modules + 7 suites —
`providers.test.mjs` was added); `:87` lists the plugin suite with a
"14 top-level V2 ports" count that still matches.
**Guidance:** refresh the map against the real tree (or generate it). It is the
first file `AGENTS.md` tells every agent to read, so its staleness is paid for by
every future agent's first impression.

### C2. `README.md` project layout omits half the data layer
`README.md:98-117` lists `src/data/models.ts`, `sources.generated.ts` and
`scores.generated.ts`, but omits `src/data/providers.ts`, `src/data/evidence.ts`,
`src/data/verified.generated.ts`, `src/data/vendorIcons.generated.ts`,
`adapters/static/`, `providers/`, `models_voice/` and `models_finance/` — all
first-class parts of the data flow. It also lists `PRD/prd.md` in the layout
(`:113`) while `.gitignore:13` excludes the whole `PRD/` directory, so the
required-reading doc is invisible to a clone.
**Guidance:** extend the layout block; decide whether `PRD/prd.md` should be
un-ignored.

### C3. `theme.css:1-20` advertises 31 families it will no longer ship
The header block lists every family, states "all self-hosted under
`public/fonts/`", and documents weight coverage ("400 + 700 for all families, plus
500 + 600 for Outfit and DM Sans"). After **A2**, one family remains.
**Guidance:** rewrite the header in the same commit as A2. This is a same-commit
pairing, not a separate task.

### C4. `routes/index.tsx:63` cites an import that does not exist
`// A/B/C series colors — same as the original compare page (models.ts MODEL_COLORS).`
above a local `const SERIES_COLORS = ["#4f46e5", "#059669", "#d97706"]`.
`MODEL_COLORS` lives in `models.ts:228` but is **never imported** (see **D1**), so
the comment documents a relationship the code does not have.
**Guidance:** either import `MODEL_COLORS` and delete the local copy (best — kills
the duplicate), or reword the comment.

### C5. `docs/v2-promotion-rollback.md` anchors on a 16-day-old stash
`docs/v2-promotion-rollback.md:88-90` instructs readers about
`stash@{0}` ("wip before ui-redesign", 2026-10-15). Verified: it still exists, but
the doc frames it as permanent ("do NOT drop it silently") with no expiry. The
Recipes also assume the promotion merge is still `HEAD`.
**Guidance:** decide the stash's fate deliberately and record the decision in the
doc; add a "verify with `git rev-parse HEAD`" note to Recipe A.

---

## PART D — Simplification (behaviour-preserving)

### Data layer

**D1. `src/data/models.ts` — three exports no consumer imports.**
Verified with a repo-wide grep over `src/` for each symbol:
- `MODEL_COLORS` (`:228`) — its only mention outside its own definition is the
  *comment* at `routes/index.tsx:63`, which declares its own `SERIES_COLORS`.
- `sortSourceFor` (`:395`) — zero call sites anywhere in `src/`.
- `getModel` (`:470`) — zero call sites anywhere in `src/`.

~25 lines including doc comments. Note that `tsconfig.json:19-20` sets
`noUnusedLocals` / `noUnusedParameters`, but **TypeScript never flags unused
*exports*** — which is why these survived a clean typecheck.
Live and must stay: `hasFreeTier`, `isDecisionModel`, `virtualDimFor`,
`slugForSource`, `checkOverallScores`, `SOURCES`, `VIRTUAL_VIEWS`, `DIMENSIONS`,
`MODELS`, `ModelCategory` and every exported type.
**Guidance:** delete the three, and import `MODEL_COLORS` into `routes/index.tsx`
in place of its local `SERIES_COLORS` (then delete the local const — this also
fixes **C4**).

**D2. `src/data/providers.ts` — two unused exports.**
- `PAID_ONLY_PROVIDERS` (`:308`) — the Providers page groups from `PROVIDERS` /
  `FREE_TIER_PROVIDERS` and never reads this constant.
- `getProvider(slug)` (`:343`) — zero call sites.

Live and must stay: `PROVIDERS`, `FREE_TIER_PROVIDERS`, the seven category
constants (`CODING_MOE_PROVIDERS` … `EVERYTHING_ELSE_PROVIDERS`), `isFreePlan`,
`getProviderCategory`, and the `Provider*` types.
**Guidance:** delete both.

**D3. `src/components/freeZenLink.tsx` — `any[]` return type.**
`withFreeZenLink` returns `any[]`. Tighten to `(string | JSXNode)[]` (or
`JSXNode[]`), which restores type-checking on the one place the pricing strings
become markup. Also `FREE_ZEN_MODELS_URL` is exported but used only inside its own
file — make it module-private.
**Guidance:** change the signature; drop `export`.

### Components & routes

**D4. Extract the shared hexagon math (and restore `<HexRadar>`).**
`HEX_GAMMA` (identical expression in all three), `hexPoint` and `hexPolygon` are
byte-identical across `index.tsx`, `model/[slug]/index.tsx` and
`design-6sol/index.tsx`; the only real differences are `HEX_CY`, `HEX_MAX_R` and
`HEX_LABEL_R`, and `hexPoint` already takes `maxR` as a parameter.
**Guidance:** create `src/components/hexagon.ts` exporting `HEX_GAMMA`,
`hexPoint(value, index, {cx, cy, maxR})` and `hexPolygon(points, geom)`, then a
`<HexRadar>` component taking `{ models, colors, labelRadius, centerY, maxR,
tooltips }` — the shape the project map already claims exists. The two hero/compare
hexagons in `index.tsx` become one component used twice with different props.
~180 duplicated lines → ~90 shared.

**D5. `names` / `colNames` / `tableKeys` are declared three times.**
`routes/index.tsx:25-48`, `routes/model/[slug]/index.tsx:20-37` and
`design-6sol/index.tsx:9-26`. `names` is byte-identical in all three, and both
`names` and `colNames` are *exactly* `DIMENSIONS[i].label` and `.short`
(`models.ts:184-223`).
**Guidance:** delete all three copies and derive them:
```ts
const labelOf = (k: DimensionKey) => DIMENSIONS.find((d) => d.key === k)!.label;
const shortOf = (k: DimensionKey) => DIMENSIONS.find((d) => d.key === k)!.short;
```
This also removes the risk of a table column header drifting from its radar axis
label (a class of bug the repo has no test for).

**D6. `routes/model/[slug]/index.tsx:20,39` — two hand-written orderings of the same six keys.**
`qualityKeys = ["context","coding","reasoning","tool","multimodal"]` (i.e.
`DIMENSIONS` minus cost) and `hexKeys = ["tool","reasoning","context","cost","coding","multimodal"]`
(i.e. `DIMENSIONS` in order) both exist beside the canonical `DIMENSIONS`.
**Guidance:** `const qualityKeys = DIMENSIONS.filter(d => d.key !== "cost").map(d => d.key)`
and `const hexKeys = DIMENSIONS.map(d => d.key)`. Values identical, one source.

**D7. `routes/index.tsx` — `top3Ids()` re-derives what `rankBase` already computed.**
`top3Ids(src)` (`:119-138`) filters `MODELS` by source, maps to the source's
scores, sorts and takes three ids — the same sequence `withSource` / `rankBase`
(`:216-232`) performs for the same input. Both run on every source change.
**Guidance:** one `rankedFor(source)` helper returning the sorted array;
`top3Ids` becomes `rankedFor(src).slice(0,3).map(m => m.id)`.

**D8. `routes/index.tsx:611-634` — redundant `selected` on `<option>`.**
The `<select>` is controlled via `value={slot.value.value}` *and* every
`<option>` carries `selected={o.id === slot.value.value}`. The per-option
attribute is subsumed by the controlled select.
**Guidance:** drop `selected={…}` from the `<option>`.

**D9. `src/data/providers.ts:84-182` — static slug arrays inline in control flow.**
`getProviderCategory` embeds `["deepgram","elevenlabs","gladia"]`,
`["fal","atlas-cloud"]`, `["exa","tavily","brave-search","firecrawl"]` and a
21-element observability list directly in `if` conditions, while the file already
keeps `GPU_PROVIDER_SLUGS` as a module-level `Set` (`:66-82`).
**Guidance:** hoist the remaining four lists to module-level `Set` constants and
test with `.has(slug)`. Pure readability; identical output.

**D10. `src/data/providers.ts:186-194` — `warnOnce` hangs state off the function object.**
```ts
const seen = (warnOnce as unknown as { s?: Set<string> }).s ?? new Set<string>();
```
`models.ts:30` solves the identical problem with a plain module-level
`const warned = new Set<string>()` — nothing in this file prevents that.
**Guidance:** adopt the `models.ts` pattern.

**D11. `src/routes/model/[slug]/index.tsx` — `isNarrow` recomputes a media query on every render.**
Fine as written, but `V2Header.tsx:29` already opens a `(max-width: 799px)`
query for the same auto-hide behaviour with the same `matchMedia` + listener +
`cleanup` shape. Two files, same pattern.
**Guidance:** a tiny `useMediaQuery$(query)` hook shared by both. Low priority —
correct as-is, so only do it alongside **D4**.

**D12. `.githooks/pre-commit` — one 5-line block pattern repeated eight times.**
Lines 11-18, 26-55, 61-68, 74-81, 88-95, 101-108, 116-123, 129-136 each run a
`git diff --cached --name-only --diff-filter=A -z` pipeline and then the same
`echo BLOCKED / printf %s / echo … retry with ALLOW_MODEL_DELETE=1` trio.
**Guidance:** a one-line `block() { … }` shell function. Lowest-value item here —
the hook is correct and rarely read — so only worth doing if it is being touched
anyway.

### Scripts

No simplification items found in `scripts/`: `scripts/lib/` is clean (each module
has one job, no duplicated helpers, and the three unused exports the 2026-10-04
audit found there have since been wired up or removed). The only script-side
findings are the eleven dead scratch files in **A1**.

---

## PART E — Working-tree health (report only, no deletions proposed)

### E1. `model/nemotron-3-nano-omni/GPT_6_Luna.md.excluded` — deleted, awaiting commit
Verified a sanctioned own-twin retirement (fresh `GPT_6_Luna.md`, 5 785 B,
present). See **B2**. No action beyond committing.

### E2. Six untracked findings files awaiting `pnpm sync`
`model/{claude-sonnet-3.5/GPT_6_Luna, deepseek-v4.1-flash-1017/GPT_6_Sol,
gpt-6.1-terra/GPT_6_Sol, grok-4.1-fast/GPT_6_Sol, nemotron-3.5-super-vl/GPT_6_Sol,
seed-2.0-pro/GPT_6_Sol}.md`. They are not in `SOURCE_DEFS` until sync runs.
**Guidance:** `pnpm sync` (then `pnpm build`), per the standard workflow.

### E3. Icon assets and registry are consistent — but one pair is uncommitted
Verified: 133 files in `assets/vendor-icons/` ↔ 133 keys in
`vendorIcons.generated.ts`, zero orphans in either direction (so the `hunyuan`
orphan the 2026-10-04 audit found is genuinely resolved). The only issue is the
uncommitted `runpod.svg` / generated-file pair (**B2**).

### E4. Parked-slug mirror lists agree
`RETIRED_SLUGS` in `src/data/models.ts:341` and `scripts/lib/average.mjs:146`
carry the identical 10-slug set
(`glm-5.3-free`, `gemini-2.5`, `qwen-3.5`, `kimi-k2.7-code-highspeed`,
`gemini-3.1-flash`, `longcat-2.5`, `claude-opus-4.4`, `claude-opus-3.7`,
`qwen-3.8-325b`, `ox_alpha`), as the "never invent a third list" rule requires.
No drift.

---

## PART F — Suggested execution order

**Step 1 — restore the broken contract (highest value, one file)**
**B1** `model-report-TEMPLATE.md` from `c732b1c0` (needs a one-file restore
confirmation popup per `RULES.md`). Verify: the file exists and
`scripts/lib/parse.mjs`'s documented format still matches it.
Everything else in this report is cosmetic next to this one.

**Step 2 — commit the pending working tree**
**B2** icon pair as one atomic commit · six findings files + `pnpm sync` ·
the sanctioned `.md.excluded` deletion. Do this **before** any cleanup so the
cleanup diff is not mixed with research churn.

**Step 3 — pure deletions, zero behaviour change**
**A1** 11 scratch files (`batch_write.cjs` first) · **A4** empty `findings/` files ·
**A5** avatar backup · **A6** empty `state/` dir.
Verify: `pnpm test` green, `pnpm build.types:direct` clean, `dist/` builds.

**Step 4 — the deploy-size win (one commit, two files)**
**A2** fonts + **C3** theme.css header, edited together. Expect ~2.2 MB off
`dist/fonts/`. Spot-check `dist/index.html` renders and the hero H1 still paints
in Ubuntu.

**Step 5 — small user-facing fixes (one line each)**
**B4** Contact in the desktop nav · **B5** contact inbox · **B6** donate chips ·
**C4** the `SERIES_COLORS` comment (folds into **D1**).

**Step 6 — de-duplication with the best ratio**
**D4** hexagon module (fixes **B7**'s triplication) → **D5**/**D6** derive the
label maps and key arrays from `DIMENSIONS` → **D3**/**B3** theme + media-query
helpers. Expect roughly 300-400 lines removed from `src/routes/` and
`src/components/`.

**Step 7 — dead exports and constants**
**D1** `models.ts` (3 exports, + collapse `SERIES_COLORS`) · **D2** `providers.ts`
(2 exports) · **D7**/**D8** `index.tsx` internals · **D9**/**D10** `providers.ts`
readability.

**Step 8 — user decisions, not agent decisions**
**A3** `modeljev-1.13/` · **A4** research dumps · **A7** `opencode.json` ·
**A8** `PRD/` gitignore + webshop doc · **A9** design-6sol · **C1**/**C2**
doc refresh · **C5** the stash · **E1**-**E3** commit hygiene.
Note that **A3** and the `findings/` half of **A4** are now the *third* audit to
flag them — they are pending decisions, not new findings.

---

## Appendix — what I checked and found healthy

So a future audit does not re-walk this ground:

- **`src/data/evidence.ts` is doing real work.** It looks like a 14-line
  pass-through, but its whole purpose is to keep the 610 KB
  `evidence.generated.ts` out of the list-page bundles — only profile routes
  import it. Left alone; Qwik/Vite code-splits it into profile-only chunks as
  documented.
- **Vendor icons are fully consistent:** 133 `assets/` SVGs ↔ 133 keys in
  `vendorIcons.generated.ts`, no orphans in either direction, everything inlined
  (no `<img>`, no network requests). The `hunyuan` orphan from the 2026-10-04
  audit is resolved.
- **Dependencies are minimal and all used:** 9 devDependencies, zero runtime
  dependencies, every one referenced by the build (`ignore` is required by the
  Qwik CLI per `.agents/tech-stack.md:17`). No unused packages.
- **`tailwind.config.js` is already reduced** to `darkMode:"class"` + content glob
  + empty plugins, with the load-bearing `darkMode` comment intact (the
  2026-10-04 audit's A1 is genuinely fixed — I re-verified zero usages of the
  old `theme.extend.colors` utilities).
- **CSS variables are all live:** 5 custom properties in `theme.css`
  (`--font-body`, `--font-display`, `--color-page`, `--color-ink`,
  `--color-primary`) and 2 in `global.css` (`--color-bg`, `--color-text-main`),
  every one referenced from `src/`. `v2.css` declares none.
- **`RATER_GATE` is no longer duplicated in the UI** — `routes/index.tsx:10`
  imports it from `sources.generated.ts` rather than hardcoding `84.9`
  (the 2026-10-04 audit's B6 is fixed).
- **`scripts/lib/` is fully live:** 7 modules + 7 `*.test.mjs` suites, no dead
  exports, no duplicated helpers. The `VIRTUAL_KEYS` / `checkMetaFile`
  duplication found on 2026-10-04 is resolved.
- **`.githooks/pre-commit` is correct** — I read all 225 lines and traced the
  hyphen-slug, merged-slug, merged-stem, findings-stem and twin-retirement logic;
  each guard mirrors its `scripts/lib/` counterpart. `core.hooksPath=.githooks`
  is active in this clone.
- **No `node_modules` or build output is tracked.** `.gitignore` correctly covers
  `dist/`, `server/`, `.qwik/`, `*.tsbuildinfo`, `tmp_*`, `temp_*`, `*.log`,
  `src/routes/design*` and nested `node_modules`. `dist/` (68 font files / 2.34 MB
  of them) and `server/` are local-only.
- **`.opencode/`** is the correct project plugin directory, `.opencode/node_modules`
  is gitignored, and both the V2 top-level ports and the parked `v1/` originals
  are intentional per `.agents/rules.md`. Left alone — tool config, out of scope.
- **`model-queue.md` and `model-aliases.generated.md`** are the only roster
  surfaces, and I used them rather than scanning `model/` (per the
  no-self-investigation rule). Both are auto-generated and current.
- **Working-tree research files:** the one deletion present is a sanctioned
  own-twin retirement, not a permanence violation (**E1**).

---

*Report only. Nothing in the repository was modified by this audit — no file was
deleted, moved, renamed, or restored, and no `pnpm sync` / `build` / `dev` command
was run. Every item above needs explicit user sign-off before it is applied.*
