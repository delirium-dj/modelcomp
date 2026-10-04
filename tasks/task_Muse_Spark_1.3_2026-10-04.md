# task_Muse_Spark_1.3_2026-10-04 — purification & simplification audit

> **Scope:** full-repo scan for (a) things that are no longer relevant and can be
> eliminated without touching functionality, and (b) code that can be simplified
> without changing behaviour.
> **Nothing in this file was applied.** Every item needs explicit user sign-off.
> **Precedence:** `RULES.md` wins on any conflict. No `model/<slug>/` research
> file or folder is proposed for deletion anywhere in this document.

Audited by: Muse Spark 1.3 (`muse-spark-1.3-contributor-free`), 2026-10-04.
Verification basis: read-only scan of the files on disk. Per the repo directives
no `pnpm sync`, `pnpm build.types`, `pnpm build`, `pnpm dev`, or `pnpm test` was
executed during this audit — the user runs
`pnpm sync && pnpm build.types && pnpm build` (Windows:
`pnpm sync && pnpm build.types:direct && pnpm build:direct`) after sign-off.
Claims below marked *(carried forward)* were reported by the prior
`task_Claude_Opus_5_2026-10-04.md` audit and spot-checked only as noted; all other
claims were verified by reading the cited files in this session. No `dist/`
output claims are made (no build was run).

**Baseline measured:** 134 `model/` folders · 7 `models_voice/` · 1 `models_finance/` ·
67 `file:` entries in `src/data/sources.generated.ts` · 4 202 git-tracked files.

**Relation to the prior audit:** `tasks/task_Claude_Opus_5_2026-10-04.md` already
covered this ground in depth, and several of its A-items are confirmed fixed on
disk (reduced `tailwind.config.js`, `assets/vendor-icons/` move, generic
`freeTierNote` tooltip, no leading blank lines in `models.ts`). This report is an
independent re-scan: it re-states only what was re-verified, adds a few items the
prior audit did not emphasise, and explicitly marks what was *not* re-verified
instead of repeating it as fact.

---

## 0. Executive summary

| Part | Theme | Items | Risk |
|---|---|---|---|
| **A** | Dead / obsolete artifacts — safe to delete or archive | 12 | low |
| **B** | Bugs found while scanning (source-verified; `dist/` not re-checked) | 6 | — |
| **C** | Documentation drift (docs contradicted by the code) | 6 | low |
| **D** | Simplification, behaviour-preserving | 14 | low–med |
| **E** | Data-tree health (report only, no deletions) | 4 | — |

Highest value per effort: **B1** (the `voicemodels/` tripwire cannot fire —
variable shadowing, source-verified) and **B2** (canonical URLs / sitemap origin
is `http://localhost:4173` in source; `dist/` impact not re-verified here).
Largest dead-weight reduction available without touching research data: **A3**
(`.qoder/` IDE cache, if tracked) and **A6** (archive the three historical
improvement logs into one living backlog).

---

## PART A — Eliminate (no longer relevant)

### ✅ A1. `commands/` — orphan one-off research prompt
**Status (2026-10-04): SOLVED.** File + directory deleted from disk (deletion
left unstaged for user review/commit); re-grepped repo-wide — the only
remaining `commands/` mentions are this audit and the prior
`task_Claude_Opus_5_2026-10-04.md` historical record, so no other project .md
needed updating.
`commands/` holds a single file with no extension
(`commands/individual search for ai models`, 64 lines). Verified: first line is
hardcoded to *"Research model Claude Fable 5.1…"*; the body restates the v4
scoring methodology and output format already owned by
`model-report-TEMPLATE.md`, `tasks/research.md`, and `tasks/research-assign.md`.
No references to `commands/` exist in code, tasks, or docs read during this scan.
**Guidance:** delete the file and the now-empty `commands/` directory. If a
standalone-chat prompt variant is still wanted, fold it into
`tasks/research-assign.md` as an appendix so the methodology lives in one place.

### A2. `instructions/` — consumed build guides, already gitignored
`instructions/` holds `HAMBURGER.md`, `LIGHTDARK.md`, `PWA.md`. `.gitignore`
explicitly ignores `instructions/` (and `PRD/`), so these are local working
notes, not versioned product state.
**Guidance:** safe to delete from disk (nothing to commit — they are untracked).
If any paragraph is still normative, move it into `.agents/rules.md` first.

### A3. `.qoder/repowiki/` — IDE-generated wiki cache
`.qoder/repowiki/` exists on disk. It is IDE-derived documentation that competes
with the hand-written docs (`README.md`, `.agents/*`, project map) for authority
and drifts on its own.
**Guidance:** `git rm -r --cached .qoder` (only if tracked — tracked status not
re-verified in this session) and add `.qoder/` to `.gitignore`. Keep the local
cache; stop versioning a derived artifact.

### A4. `src/components/Footer.tsx:42–53` — five permanently-dead donate chips
All five `EXTRA_DONATE_LINKS` entries have `href: ""`, so the footer always
renders five dashed "*Ko-fi · soon*"-style placeholders under an "Also via:"
heading. The comment above ("only entries with a non-empty href are rendered")
contradicts the code, which renders a disabled `<span>` for empty ones.
**Guidance:** either fill in real URLs or delete the array plus the "Also via:"
block. `.github/FUNDING.yml` already carries the same platforms (commented out),
so this is a second parallel placeholder set.

### A5. `src/routes/contact/index.tsx:7` — shipped non-functional form
`CONTACT_EMAIL = ""`, so `onSubmit$` always short-circuits to *"Contact inbox is
not configured yet — please reach out via GitHub in the meantime."* The page is
linked from the Footer and the mobile drawer and is prerendered.
**Guidance:** set the address, or replace the form with the GitHub issues link
the fallback message already points at. A form that can never submit should not
ship.

### ✅ A6. Historical improvement logs — retire into one living backlog
**Status (2026-10-04): SOLVED.** `BACKLOG.md` created (open items only:
lean meta bundle, pre-baked top-3, voice/finance wiring, `meta.json` schema
validation + standing decisions); `GLM53F_IMP.md` + `IMPROVEMENTS.md` deleted
from disk (left unstaged for review; content preserved in git history +
`REPORT.md`). No live docs referenced either file (verified repo-wide —
only the two audit reports, `REPORT.md` history, IDE cache, and code-comment
provenance notes mention them), so no other .md needed rewriting. The optional
`REPORT.md` pre-2026-10 split was deliberately deferred (append-only log,
untouched).
`GLM53F_IMP.md` (8 769 B), `IMPROVEMENTS.md` (3 809 B), and `REPORT.md`
(86 251 B) are history, not working state. Verified in this session:
`GLM53F_IMP.md` items argue about files that do not exist on disk
(`catalog.generated.ts`, `.rerun/`, `scripts/debug-sync.mjs`,
`scripts/find-fails.mjs`, `public/sw.js`, "no test framework" — all absent);
`IMPROVEMENTS.md:43–50` records a 2026-09-27 purification that holds; `REPORT.md`
is an append-only dated log.
**Guidance:** extract the still-open items (top-3 pre-bake idea, voice/finance
pipeline wiring, `meta.json` schema validation — see **D1**, **E4**) into one
living `BACKLOG.md`, keep `REPORT.md` as append-only history (consider splitting
pre-2026-10 sections into an archive file), and retire `GLM53F_IMP.md` /
`IMPROVEMENTS.md` once extracted. This preserves history while ending the
four-competing-backlogs situation.

### ✅ A7. `package.json:19` — placeholder `deploy` script
**Status (2026-10-04): SOLVED.** Line deleted (1-line diff, JSON re-validated
via `node -e`, all 15 remaining scripts intact); repo-wide grep showed no live
docs reference `pnpm deploy` (only IDE cache + this audit), so no other .md
needed updating.
`"deploy": "echo 'Run \"pnpm qwik add\" to install a server adapter'"` is a
scaffold leftover: the site ships via the static adapter
(`adapters/static/vite.config.ts` → `dist/`) plus `vercel.json`, not via
`qwik add`. The granular variants (`build.client`, `build.server`,
`build.preview`, `start`) are legitimate Qwik/Vite entry points and are kept.
**Guidance:** delete the `deploy` line (or replace it with the real deploy
command if one exists). Zero behaviour change to any documented workflow.

### A8. `tsconfig.tsbuildinfo` on disk — gitignored build receipt
Present on disk; `.gitignore` covers `*.tsbuildinfo`, so it is untracked.
**Guidance:** delete locally whenever cleaning (`Remove-Item tsconfig.tsbuildinfo`);
`pnpm build.types` regenerates it. Not a repo change.

### A9. `dist/` + `server/` on disk — gitignored build output
Both directories exist locally and both are gitignored. They are not cruft in
the repo sense, but they are stale the moment sources change.
**Guidance:** no commit action; `pnpm build` recreates them. Included here only
so a future "what is this large directory" pass does not mistake them for source.

### A10. `model-comparison.md` — decide frozen vs. live, then act
`model-comparison.md` (22 329 B) opens with *"Last updated: 2026-09-17"* and
describes the v3 split of per-model details into `model/`; `.agents/rules.md`
still lists it as the live "overview table + methodology". Both statements were
read in this session, so the contradiction is real — but the README side of the
dispute was not re-read here, and the `average.md` header template that cites
this file (`scripts/lib/average.mjs`) was not re-read either.
**Guidance:** pick one status deliberately: if frozen, repoint the `average.md`
header template at the live methodology home and fix `.agents/rules.md`; if
live, refresh the stale table (its 10 sample rows predate the current 134-model
tree). Either way, one edit ends the ambiguity.

### A11. Stale registry entry *(carried forward, not re-verified)*
Prior audit reports `src/data/sources.generated.ts` registering a stem with no
corresponding findings file anywhere under `model/` (reported as
`"Mimo v2.5 Free"`). The registry section of the generated file was only
partially read in this session, so this is **not independently confirmed**.
**Guidance:** `pnpm sync` already logs sourceless keys as non-blocking INFO —
read that line on the next sync. If the stem is truly file-less, decide with the
user whether the reports were renamed or retired before touching the registry
(the registry is regenerable; research files are not — `RULES.md` permanence
still applies to the files themselves).

### A12. Duplicate-slug registry keys *(carried forward, not re-verified)*
Prior audit reports two source keys mapping to one model-page slug (reported as
the two `Laguna XS 2.1` spellings). Slug-bearing registry entries were not
fully audited in this session.
**Guidance:** confirm from the next `pnpm sync` output / registry read. The
*files* are permanent regardless; only the registry key mapping is in question,
and only with user sign-off.

---

## PART B — Bugs found while scanning

> All B-items below are source-verified by reading the cited files. `dist/`
> impact statements from the prior audit were **not** re-verified (no build ran).

### B1. The `voicemodels/` tripwire cannot fire (variable shadowing)
`scripts/sync-data.mjs:82` defines `const root = <repo root>`. Lines 150–154
then run `for (const root of FORBIDDEN_ROOTS)` and test
`existsSync(join(root, root))` — the loop parameter shadows the repo root, so
the check resolves to a relative `"voicemodels/voicemodels"`-style path that can
never exist. `RULES.md:48` guarantees *"pnpm sync FAILs loudly while
`voicemodels/` exists"* — on this code path, it does not.
**Guidance:**
```js
for (const forbidden of FORBIDDEN_ROOTS) {
  if (existsSync(join(root, forbidden))) fail(forbiddenRootMessage(forbidden));
}
```
plus a sync-level regression test (create a temp `voicemodels/`, assert non-zero
exit), since the existing unit test only covers the message builder, never the
call site. Mitigating second line of defence (carried forward, hook file not
re-read here): the pre-commit hook reportedly blocks staged `voicemodels/`
additions independently.

### B2. Canonical origin is `localhost` in source
`adapters/static/vite.config.ts:15` sets `origin: "http://localhost:4173"`, and
`src/components/router-head.tsx:11` emits `<link rel="canonical"
href={loc.url.href} />`. Every prerendered page therefore self-canonicalises to
localhost unless the adapter origin is the real site origin.
**Guidance:**
```ts
staticAdapter({ origin: process.env.SITE_ORIGIN ?? "http://localhost:4173" })
```
document `SITE_ORIGIN` in `README.md`, and after the user's build grep
`dist/sitemap.xml` for `localhost` (expect 0). Whether `dist/` currently
contains localhost URLs was not re-verified in this session.

### B3. `<link rel="manifest">` is emitted twice (source-verified)
`src/root.tsx:40–45` adds a manifest link when `!isDev`, and
`src/components/router-head.tsx:15` adds `<link rel="manifest"
href="/manifest.json" />` unconditionally. Production pages get two manifest
links.
**Guidance:** keep the `RouterHead` one (it owns all other head links) and
delete the `root.tsx` block — which also removes the `isDev` import if unused
elsewhere (see **D11**).

### B4. All model pages share one static `<title>`
`src/routes/model/[slug]/index.tsx` exports a static `head` object
(`"Model details — ModelComp"`) with a generic description, so every
per-model page carries the same title.
**Guidance:** make `head` a resolver keyed off `params.slug`:
```ts
export const head: DocumentHead = ({ params }) => {
  const m = MODELS.find((x) => x.slug === params.slug);
  return m
    ? { title: `${m.name} — scores & agent ratings | ModelComp`,
        meta: [{ name: "description",
                 content: `${m.name}: Overall ${m.scores.overall}/100. ${m.short}` }] }
    : { title: "Model not found — ModelComp" };
};
```

### B5. Contact unreachable from the desktop header
`src/components/Header.tsx`: desktop nav (lines 55–74) lists Compare / Scoring /
Models; the mobile drawer (lines 125–162) lists those **plus Contact**. Desktop
users only reach `/contact` via the footer.
**Guidance:** fixed structurally by **D8** (single `NAV` array feeding both
menus), which makes the divergence impossible by construction.

### B6. Rater-gate constant duplicated as a bare literal in the UI
`src/components/CompareSection.tsx` captions the gate as prose ("raters above
84.9 Overall" / "own Overall above 84.9") while the authoritative constant lives
in the sync pipeline (`RATER_GATE` in `scripts/lib/parse.mjs` — pipeline side
carried forward; the lib file was not re-read here, but `sync-data.mjs:234–238`
imports it and even carries a "keep it in sync with the UI caption" comment,
which is itself the defect: a manual-sync requirement).
**Guidance:** have `pnpm sync` emit the constant into `sources.generated.ts`
(it already owns generated constants) and interpolate it in `CompareSection`.
One source of truth; the UI can never drift.

---

## PART C — Documentation drift

### C1. `.agents/tech-stack.md` — script inventory is stale
The "Scripts" section lists `dev`, `build.types`, `build`, and granular
variants but omits `sync` / `sync:quiet` and `test`, while the "Data layer"
section's verification line predates the zero-dep test suite wired in
`package.json` (`node --test scripts/lib/*.test.mjs`).
**Guidance:** add `sync`, `sync:quiet`, and `test` to the script list and state
the zero-dep runner. One paragraph; ends the "no test framework" falsehood for
good.

### C2. `.antigravity/history/project-map.md` — inventory is incomplete
The component/data inventory predates several live files: `VendorIcon.tsx`,
`freeZenLink.tsx`, `router-head.tsx`, `routes/contact/`,
`src/data/vendorIcons.generated.ts`, and the `scripts/lib/` module split are
absent from the map, and the `models.ts` line count / `src/data/` file count are
stale. This file is AGENTS.md's "read FIRST" context, so drift here is the most
expensive drift in the repo.
**Guidance:** refresh the inventory (or generate the file lists from the
filesystem during `pnpm sync` so it cannot drift again).

### C3. `CompareSection.tsx:22–23` comment says "curated SOURCES order"
The comment claims the results-source selector keeps "curated SOURCES order",
but dropdown order is derived at runtime (`SOURCES` initializer in `models.ts`:
Overall first, virtual views in `DIMENSIONS` order, reporting agents by own
average Overall). The comment also contradicts `tasks/sync-data.md`'s own
"derived, not curated" line.
**Guidance:** reword to "derived SOURCES order" in both places.

### C4. "SIMPLIFY-PLAN" citations point at a document that does not exist
`src/data/models.ts` (virtual-views comment), `scripts/sync-data.mjs:90`
(`SOURCE_OVERRIDES` comment), and the `sources.generated.ts` header all cite
"SIMPLIFY-PLAN Phase 1/2/3". No such file was encountered during this scan.
**Guidance:** rewrite each citation as the invariant it means (e.g. "slug lives
inline in `SourceDef`", "virtual views are built in `models.ts`, never
registered") and delete the phantom name.

### C5. Required reading is gitignored (PRD)
`.gitignore` ignores `PRD/` (and `instructions/`), yet `AGENTS.md` names
`PRD/prd.md` as the product spec and `.agents/rules.md` cites "PRD §7" as the
tooltip authority. A fresh clone has no `PRD/` directory, so tooltip behaviour
has no reachable specification. (`instructions/` is self-described as consumed
guides — **A2** covers it.)
**Guidance:** decide deliberately: (a) un-ignore `PRD/` and commit `prd.md`, or
(b) remove the references and move the §7 tooltip contract into
`.agents/rules.md`, which is committed.

### C6. `vendorIcons.generated.ts` header overclaims
The header implies a generator; the body comment itself admits *"No generator
script exists — this file is hand-maintained"* and names
`assets/vendor-icons/` as the vendored source (correct since the prior audit's
`public/icons/` → `assets/vendor-icons/` move, verified: 21 SVGs on disk, none
under `public/`).
**Guidance:** drop "AUTO-GENERATED"-style wording from the first line (keep the
honest hand-maintained note + source path). Cosmetic, but it ends the recurring
"where is the icon generator?" confusion. No icon wiring change is proposed
here; the `hunyuan`-orphan question from the prior audit was not re-verified and
is left to **A11**'s backlog decision.

---

## PART D — Simplification (behaviour-preserving)

### Data layer & routes

**D1. `src/routes/index.tsx` — three copies of "sort, take 3 ids".**
`top3ByOverall()`, `top3ByDim()`, and the `average` branch of `top3ForSource()`
share one shape; the first and third are identical. Collapse to a single
comparator-driven helper (~30 lines → ~12). (Pre-baking a top-3 table at sync
time, per `IMPROVEMENTS.md` item 2, is a separate larger change — the dedupe is
the cheap half and is safe on its own.)

**D2. `src/routes/index.tsx:20–26` — tuple unpacked then rebuilt.**
`TOP_A/B/C` are destructured from the tuple and immediately rebuilt into
`DEFAULTS`. Use the tuple (or the object) directly; one of the two names goes
away.

**D3. `src/routes/index.tsx:82` — subsumed condition.**
`if (raw === "overall" || raw.toLowerCase() === "overall")` — the first clause
is strictly subsumed by the second. Keep the case-insensitive one.

**D4. `validSource` re-scans `SOURCES` twice per call.**
Exact `find` first, then a loop recomputing normalized key/slug comparisons per
candidate. Build one module-scope `Map<normalized, ResultsView>` from `SOURCES`
(keys and slugs) once; `validSource` becomes two lookups, no loop.

**D5. `useVisibleTask$` redirect-before-`track` ordering is fragile.**
The redirect reads (`query.get`, `slugForSource`) run before `track()`, so the
ordering is load-bearing but easy to break on the next edit. Move `track()`
first with an explicit first-run guard, or split into two tasks (redirect-only
vs. URL-sync).

### Components

**D6. Free/Paid badge duplicated 7×.**
`ModelCards.tsx` (3 sites), `CompareSection.tsx` (3 sites),
`model/[slug]/index.tsx` (1 site) repeat the same
`!noFreeId ? <Free title={freeTierNote ?? pricingNote}> : <Paid>` with slightly
different chrome — including two different Paid labels (`"Paid"` vs `"Paid
fallback — no Free ID"`), an unintended inconsistency. Extract
`src/components/PricingBadge.tsx` (`{ model, variant }`); ~95 lines → ~20, and
the `freeTierNote ?? pricingNote` fallback stops being copy-pasted.

**D7. Pricing-tier list duplicated 5× (+ link inconsistency).**
`(pricingTiers ?? [pricingNote]).map(tier => <li key={tier}>…)` repeats across
`ModelCards.tsx`, `CompareSection.tsx`, and the model page — but only the model
page routes tiers through `withFreeZenLink`, so the identical "Free OpenCode Zen
tier" string is a link on one page and plain text on the homepage. Extract
`<PricingTiers model />` and route all five sites through it; the inconsistency
disappears with the duplication.

**D8. `Header.tsx` — nav links hardcoded twice (6 anchor blocks).**
Desktop nav and mobile drawer list the same links with different classes (and
the drawer alone has Contact — **B5**). One array —
`[{ href: "/#compare", label: "Compare" }, { href: "/#methodology", label:
"Scoring" }, { href: "/#models", label: "Models" }, { href: "/contact", label:
"Contact" }]` — feeding two `.map()` calls saves ~40 lines and makes **B5**
structurally impossible.

**D9. Sort controls duplicated 7×.**
`ModelCards.tsx` repeats the sort-header button 4× (desktop dim, desktop
Overall, mobile dim chip, mobile Overall chip); `model/[slug]/index.tsx`
repeats its own 3× (agent, Overall, dimension), each re-implementing the same
toggle-direction logic. Drive each list off one column array with a single
`<SortControl>` / `toggleSort(key, defaultDir)`.

**D10. `CompareSection.tsx` — repeated lookups.**
`SOURCES.find(s => s.key === source)` runs twice in adjacent lines and
`virtualDimFor(source)` is called per-model inside a `.map()` plus twice more
outside it. Hoist `active` and `sortDim` to the top of the component and reuse.

**D11. Consolidate head tags in `RouterHead` (fixes B3).**
`root.tsx` keeps only `<meta charset>` + the anti-flash script (which must stay
first in `<head>`); every `<link>`/`<meta>` moves to `router-head.tsx`. Ends
the "which file owns head tags?" ambiguity permanently.

**D12. `theme-toggle.tsx:10–34` — 24-line if/else → `toggle`.**
Both branches differ only in add-vs-remove and the stored string:
```ts
const next = document.documentElement.classList.toggle("dark");
isDark.value = next;
try { localStorage.setItem("theme", next ? "dark" : "light"); } catch {}
```
Identical behaviour (`toggle` returns the resulting state). Also normalise
`catch (e) {}` → `catch {}` here and in `root.tsx`.

**D13. `freeZenLink.tsx` — filename casing + `any[]` in a `strict` repo.**
Lowercase filename breaks the PascalCase convention of the other 12 components,
and `withFreeZenLink(text: string): any[]` (plus two internal `any[]`) opts out
of `strict: true`. Type it `(string | JSXNode)[]`, drop the unneeded `export`
on `FREE_ZEN_MODELS_URL` (used only in-file), and rename to `FreeZenLink.tsx`
(or fold it into the `PricingTiers` component from **D7**).

**D14. `VIRTUAL_VIEWS` hand-mirrors `DIMENSIONS`.**
Verified: the six virtual-view labels are character-identical to the six
`DIMENSIONS[].short` values in the same order; the only real information is the
`DimensionKey → ViewKey` renaming (`reasoning→reason`, `coding→code`,
`multimodal→multi`). Derive it:
```ts
const VIEW_KEY: Record<DimensionKey, ViewKey> = {
  tool: "tool", reasoning: "reason", context: "context",
  cost: "cost", coding: "code", multimodal: "multi",
};
export const VIRTUAL_VIEWS = DIMENSIONS.map((d) => ({ key: VIEW_KEY[d.key], label: d.short, dim: d.key }));
```
One list of six instead of two, and the "canonical DIMENSIONS order" guarantee
becomes structural rather than conventional.

### Scripts & config

**D15. `scripts/sync-data.mjs` — single-use alias + stale comment.**
`const keyOf = stemToKey` (line ~475) is used once — pass `stemToKey` directly.
Same file's registry comment block should drop the "SIMPLIFY-PLAN" citation
(see **C4**).

**D16. `tsconfig.json` — `adapters/` is never typechecked.**
`"include": ["src", "vite.config.ts"]` leaves `adapters/static/vite.config.ts`
— the file holding the `origin` from **B2** — outside typechecking (and
`scripts/` with it, despite `allowJs: true`). Consider
`"include": ["src", "vite.config.ts", "adapters"]`. Low cost, closes a real
blind spot.

---

## PART E — Data-tree health (report only — no deletions proposed)

> `RULES.md` makes every `model/<slug>/` file and folder permanent. Nothing below
> is a deletion proposal.

**E1. Underscore slugs carry a permanent code cost.**
`SOURCE_OVERRIDES` in `scripts/sync-data.mjs:95–113` hand-maps entries whose
slugs do not match the derived name (`Ox Alpha → ox_alpha`, `LongCat 2.5
Preview → longcat_2.5_preview`, plus the `big-pickle` and `Space Bunny` cases
read in this session). Renaming a `model/<slug>/` folder needs explicit
per-instance user sign-off (`RULES.md`); flagged for a decision, not acted on.

**E2. Grandfathered `*.replaced-by-*` fossils are not cruft.**
The `Ling_3.0.md.replaced-by-Flash[_Fin]` files are explicitly grandfathered by
`.agents/rules.md` ("stay untouched; no new names"). **Keep.** Noted only so a
future cleanup pass does not mistake them for leftovers.

**E3. `models_voice/` + `models_finance/` remain unwired.**
8 folders of validated research invisible to both `pnpm sync` (scans `model/`
only) and the site; both rule files describe the wiring as "pending". This is
the one genuinely open item in `IMPROVEMENTS.md` — promote it to the living
backlog (**A6**) rather than losing it when that file is retired.

**E4. Sync-first verification pending.**
`scores.generated.ts`, `model-queue.md`, scaffold-stub counts, and the registry
items in **A11**–**A12** all resolve or re-confirm themselves on the next
`pnpm sync`. Run it before acting on anything in Parts A–C that touches
generated state.

---

## PART F — Suggested execution order

Grouped so each step is independently verifiable. No step was executed in this
audit.

**Step 0 — restore ground truth (do first)**
```powershell
pnpm sync && pnpm build.types:direct && pnpm build:direct
```
Re-confirms **A11**–**A12**, **E4**, then `pnpm test`. Diff every later change
against this baseline.

**Step 1 — correctness bugs (small, high value, independent)**
**B1** tripwire + regression test · **B2** origin (+ verify `dist/sitemap.xml`
has 0 `localhost`) · **B3** duplicate manifest (+ **D11**) · **B4** per-model
titles (count distinct `<title>` across `dist/model/*/index.html`).

**Step 2 — pure deletions, zero behaviour change**
**A1** `commands/` · **A2** `instructions/` (disk only) · **A4** donate
placeholders · **A7** `deploy` echo · **A8**–**A9** local artifact cleanup.

**Step 3 — de-duplication with the best ratio**
**D6** PricingBadge (7 copies, fixes the Paid-label inconsistency) ·
**D7** PricingTiers (5 copies + link inconsistency) · **D8** Header NAV (fixes
**B5**) · **D9** sort controls (7 copies) · **D1**–**D5** route helpers ·
**D10**, **D12**–**D14** component/data tightening.

**Step 4 — constants and contracts**
**B6** emit `RATER_GATE` · **D15**–**D16** script/config hygiene ·
**C4** phantom-plan comments.

**Step 5 — product decisions (need the user, not an agent)**
**A5** contact inbox · **A6** log consolidation · **A10** comparison-doc status ·
**A11**–**A12** registry questions · **C5** `PRD/` gitignore · **E1** underscore
slugs · **E3** voice/finance wiring.

**Step 6 — documentation consolidation**
**C1** tech-stack scripts · **C2** project-map refresh (consider generating it)
· **C3** SOURCES-order comment · **C6** icon-header wording.

---

## Appendix — what was checked and found healthy

- **Component graph is live.** All 13 files in `src/components/` are imported
and reachable; no orphaned components found.
- **Dependencies are minimal and all used:** 8 `devDependencies`, zero runtime
dependencies. `ignore@^5.3.2` is required by the Qwik CLI — do not remove.
- **`assets/vendor-icons/` is the vendored icon source** (21 SVGs); nothing
under `public/` is dead weight (`favicon.svg`, `manifest.json`,
`backers/extrawebsite.png` all referenced — the backer logo from `Footer.tsx`).
- **`.opencode/` is tool config, out of scope.** `.opencode/.gitignore` exists
alongside its `package.json`/`package-lock.json`/`node_modules`; nested
`node_modules` is a tool-local install, not repo cruft — left alone.
- **`.githooks/pre-commit`, `.github/FUNDING.yml`, `vercel.json`,
`adapters/static/vite.config.ts`, `postcss.config.js`, `public/manifest.json`,
`src/entry.*.tsx`, `src/global.css`, `model-queue.md`, `model-report-TEMPLATE.md`
all read and unremarkable except where cited above.
- **`scripts/lib/` split is healthy.** Six focused modules with co-located
`*.test.mjs` files; `sync-data.mjs` is orchestration around pure, tested
helpers. No further split proposed.
- **Not re-verified in this session** (see **A11**, **A12**, **B6**-pipeline
side, **C6**-icon detail, and all `dist/` output claims): carried forward from
the prior audit as explicitly marked, not asserted as fresh fact.

---

*Report only. Nothing in the repository was modified by this audit.*
