# task_Claude_Opus_5_2026-10-04 — purification & simplification audit

> **Scope:** full-repo scan for (a) things that are no longer relevant and can be
> eliminated without touching functionality, and (b) code that can be simplified
> without changing behaviour.
> **Nothing in this file was applied.** Every item needs explicit user sign-off.
> **Precedence:** `RULES.md` wins on any conflict. No `model/<slug>/` research
> file or folder is proposed for deletion anywhere in this document.

Audited by: Claude Opus 5 (`agentrouter/claude-opus-5`), 2026-10-04.
Verification basis: every claim below was checked against the files on disk, the
test suite (`pnpm test` → **95 tests / 39 suites / 0 fail**, green), and the
prerendered output in `dist/`. Claims I could not verify are marked *(unverified)*.

**Baseline measured:** 134 `model/` folders · 7 `models_voice/` · 1 `models_finance/` ·
3 337 active findings `.md` · 177 `.md.excluded` · 66 `SOURCE_DEFS` entries ·
133 prerendered model pages · 3 958 git-tracked files.

---

## 0. Executive summary

| Part | Theme | Items | Risk |
|---|---|---|---|
| **A** | Dead code / obsolete artifacts — safe to delete | 21 | low |
| **B** | Bugs found while scanning (3 verified in shipped `dist/`) | 10 | — |
| **C** | Documentation drift (docs contradicted by the code) | 11 | low |
| **D** | Simplification, behaviour-preserving | 24 | low–med |
| **E** | Data-tree health (report only, no deletions) | 7 | — |

The single highest-value finding is **B2**: every prerendered page and all 135
sitemap entries carry `http://localhost:4173/` as their canonical URL. The
second is **B1**: the `voicemodels/` tripwire that `RULES.md` guarantees is
dead code because of a variable-shadowing bug and has never once fired.

---

## PART A — Eliminate (no longer relevant)

### ✅ A1. `tailwind.config.js` — the whole `theme.extend.colors` block is dead
**Status (2026-10-04): SOLVED by Muse Spark 1.3.** Independently re-verified (zero class usages in `src/`; only `--color-bg` / `--color-text-main` defined in `global.css`; no root `index.html`), config reduced to `{ darkMode: "class", content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"], plugins: [] }` with the anti-flash comment kept, node-parse OK. Pending user `pnpm sync && build` verification.
`tailwind.config.js:5–20` defines `background`, `surface`, `primary`,
`secondary`, `text.{main,muted,inverted}`, `border` mapped to CSS variables.

Verified: **zero** usages of `bg-background` / `bg-surface` / `text-primary` /
`text-secondary` / `border-border` / `text-text-*` anywhere in `src/`.
Worse, 6 of the 8 variables it points at (`--color-surface`, `--color-primary`,
`--color-secondary`, `--color-text-muted`, `--color-text-inverted`,
`--color-border`) are **never defined** in `src/global.css` — only `--color-bg`
and `--color-text-main` exist. Any utility from this block would have resolved
to an empty custom property.

Also `tailwind.config.js:4` globs `"./index.html"` — no such file exists
(Qwik City has no root `index.html`).

**Guidance:** reduce to
```js
export default { darkMode: "class", content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"], plugins: [] };
```
Keep the `darkMode: "class"` comment — it is load-bearing for the anti-flash
script in `root.tsx`.

### ✅ A2. `scripts/sync-data.mjs:560–569` — legacy `agent-slugs.generated.ts` cleanup
**Status (2026-10-04): SOLVED by Muse Spark 1.3.** Re-verified (absent from disk, `git ls-files`, and all live imports — only REPORT.md history and the audit itself mention it). Deleted the `try/unlinkSync` block and dropped the now-unused `unlinkSync` from the `node:fs` import (`existsSync` stays — used elsewhere). `node --check` clean, `pnpm test` 95/95 green.
A `try/unlinkSync` block that deletes `src/data/agent-slugs.generated.ts`.
Verified absent from disk **and** from `git ls-files`. The migration it guards
is long finished.
**Guidance:** delete the block and the comment above it.

### ✅ A3. `scripts/lib/naming.mjs` — three exports no production code uses
**Status (2026-10-04): SOLVED by Muse Spark 1.3.** `checkMetaFile` now calls `missingMetaFields` + `metaNameHasUnderscore` (byte-identical messages, covered by existing `validate.test.mjs` contract tests); `VIRTUAL_KEYS` deleted from `naming.mjs` (it was *fully* orphaned — not even the claimed comment reference, which pointed at it without importing it) plus its test block and import; `sync-data.mjs:115` comment repointed at the real home (`src/data/models.ts` `VIRTUAL_VIEWS`). `node --check` clean on all three files, zero remaining `VIRTUAL_KEYS` references, `pnpm test` 94/94 green (one test removed by design).
- `VIRTUAL_KEYS` (line 47) — referenced only by a stale comment at
  `sync-data.mjs:115` and by `naming.test.mjs`.
- `missingMetaFields` (line 94) — only `naming.test.mjs`.
- `metaNameHasUnderscore` (line 99) — only `naming.test.mjs`.

The last two are worse than dead: `scripts/lib/validate.mjs:86–95`
(`checkMetaFile`) **reimplements both inline** instead of calling them.
**Guidance:** make `checkMetaFile` call `missingMetaFields` +
`metaNameHasUnderscore` (one edit removes the duplication *and* makes the
exports live), then delete `VIRTUAL_KEYS` and the `sync-data.mjs:115` comment.
See also **D17**.

### ✅ A4. `src/data/models.ts:1–5` — five leading blank lines before the first comment.
**Status (2026-10-04): SOLVED by Muse Spark 1.3.** Different from A5 (that was dead type re-exports; this is pure whitespace). Removed the 5 leading blank lines byte-precisely (`git diff` shows only those 5 deletions in that hunk). Note: the file uses CRLF line endings, so the deletion was done via a byte-exact strip rather than the edit tool. `pnpm test` 94/94 green.

### ✅ A5. `src/data/models.ts:30` — dead type re-exports
**Status (2026-10-04): SOLVED by Muse Spark 1.3.** Re-verified via repo-wide grep: `SourceDef` appeared only on the import + re-export lines (never used in any body), `ViewKey` is used internally (`VIRTUAL_VIEWS`) but never imported by any consumer. Removed `SourceDef` from both the import and the re-export, `ViewKey` from the re-export only — one step beyond the guidance, which covered only the re-export line. Remaining `SourceDef` refs are just its canonical definition in `sources.generated.ts`. `pnpm test` 94/94 green (typecheck of the touched file is pending user `build.types`).
`export type { SourceKey, SourceDef, ViewKey, ResultsView }`. Verified: no file
imports `SourceDef` or `ViewKey` from `../data/models` (consumers import
`AiModel`, `ResultsView`, `SourceKey`, `DimensionKey`, `ModelScores` only).
**Guidance:** keep `SourceKey` + `ResultsView`, drop the other two.

### ✅ A6. `src/data/models.ts:26–28` — `AGENT_MODEL_SLUG` export is unnecessary
**Status (2026-10-04): SOLVED by Muse Spark 1.3.** Re-verified (sole call site `sourceRankOverall`; zero test references). Inlined as `SOURCE_DEFS.find((s) => s.key === key)?.slug` — behavior-identical — and deleted the constant + its comment. Caution honored: did NOT inline `SOURCES.find` (that would read `SOURCES` inside its own initializer → TDZ crash); `SOURCE_DEFS` is an import, always initialized. Side effect: removes one of the six phantom "SIMPLIFY-PLAN" citations (A21). `pnpm test` 94/94 green.
Its own doc-comment says it is "kept as a named export so existing call sites
keep working" and recommends `SOURCES.find(s => s.key === key)?.slug` for new
code. Verified: the **only** call site is `sourceRankOverall` at line 296, in
the same file.
**Guidance:** drop `export`, or inline it into `sourceRankOverall` as the
comment advises.

### ✅ A7. `ViewKey` carries a dead `"overall"` member
**Status (2026-10-04): SOLVED by Muse Spark 1.3.** Re-verified (`"overall"` never a `VIRTUAL_VIEWS` key, never in `SOURCES`; `sortSourceFor`'s `"overall"` is its own inline literal; `validSource` takes `string` and returns `"average"`; `parseUnionMembers` regexes only the `SourceKey` union). Correction to the guidance: the emitter is NOT `codegen.mjs` — no script emits the `ViewKey` union, it is hand-curated in the generated file (same overclaim class as A10), so the union was edited in place and no script change was needed; next `pnpm sync` cannot restore it. Union is now `"tool" | "reason" | "context" | "cost" | "code" | "multi"`. `pnpm test` 94/94 green; full typecheck pending user `build.types`.
`src/data/sources.generated.ts:74` declares
`ViewKey = "overall" | "tool" | ...`. `"overall"` is never a `VIRTUAL_VIEWS`
key, never appears in `SOURCES`, and `validSource` (`routes/index.tsx:82`)
rewrites it to `"average"`. `sortSourceFor` accepts `"overall"` as a
`DimensionKey | "overall"` literal — unrelated to `ViewKey`.
**Guidance:** drop it from the union. The emitter is
`scripts/lib/codegen.mjs` / the committed generated file — change the generated
source and re-run `pnpm sync` to confirm it round-trips.

### ✅ A8. `src/components/HexRadar.tsx:56–58` — hardcoded Big Pickle special case
**Status (2026-10-04): SOLVED by Muse Spark 1.3.** Re-verified (branch matched on id/name; `model/big-pickle/meta.json` already carries the same sentence as `freeTierNote`). Replaced with a generic `if (model.meta.freeTierNote)` append — verified 23 model folders carry `freeTierNote`, so every one of them now gets the tooltip note instead of just Big Pickle. Zero remaining `Big Pickle` references in `src/components/`. `pnpm test` 94/94 green.
```ts
if (model.id === "opencode/big-pickle" || model.name.includes("Big Pickle")) {
  base += " (Free stealth tier on OpenCode Zen during promotional period.)";
}
```
One model hardcoded inside a generic chart component. Verified:
`model/big-pickle/meta.json` already carries
`"freeTierNote": "Free stealth promotional tier on OpenCode Zen offering zero-cost inference…"`
— the same sentence, already available generically to every model.
**Guidance:** delete the branch; append `model.meta.freeTierNote` when present.
Every model then benefits and the component has no model knowledge.

### A9. `hunyuan` icon is shipped but never selectable
`public/icons/hunyuan.svg` (1 097 B) and the `hunyuan` entry in
`src/data/vendorIcons.generated.ts` are unreferenced: `VendorIcon.tsx:58–61`
maps `hunyuan` / `hy3` / `hy4` → the **`tencent`** icon. Verified by diffing
the 21 generated keys against the 20 `icon:` values in `VENDORS` — `hunyuan` is
the only orphan.
**Guidance:** pick one — wire `{ match: "hunyuan", icon: "hunyuan", … }` (better
branding for `model/hy3/`, `hy3-preview/`, `hy4/`) or drop both assets.

### ✅ A10. `public/icons/` is published dead weight
**Status (2026-10-04): SOLVED by Muse Spark 1.3.** Re-verified (21 SVGs / 41,739 B in `public/icons`, all 21 copied to `dist/icons`; `VendorIcon` inlines from the generated file with no `<img>`/network; nothing outside history docs references `public/icons` or `/icons/` URLs; no generator script exists). Moved all 21 files with history via `git mv` to `assets/vendor-icons/` and removed the empty `public/icons/` dir — `public/` now holds only referenced assets (favicon, manifest, backers image). Re-labeled the generated-file header honestly (source path + "no generator script — hand-maintained"), which also resolves the related sub-finding. `pnpm test` 94/94 green.
21 SVGs (41 KB) are copied to `dist/icons/` on every build (verified: 21 files
present in `dist/icons/`) but are **never requested at runtime** —
`VendorIcon.tsx:26–28` states it inlines everything from
`vendorIcons.generated.ts`, "no `<img>`, no network requests".
**Guidance:** move them out of `public/` (e.g. `assets/vendor-icons/`) so they
remain the committed source of truth without being deployed. Update the
`vendorIcons.generated.ts` header comment, which names `public/icons/`.
*Related:* no generator for `vendorIcons.generated.ts` exists in `scripts/`
(verified by grep) despite the "AUTO-GENERATED" header — it is effectively
hand-maintained. Either add the generator or re-label the header honestly.

### A11. `src/components/Footer.tsx:42–53` — 5 permanently-dead donate chips
All five `EXTRA_DONATE_LINKS` entries have `href: ""`, so the footer always
renders five dashed "`Ko-fi · soon`"-style placeholders under an "Also via:"
heading. The comment on line 40–41 ("only entries with a non-empty href are
rendered") also contradicts the code, which renders a `<span>` for empty ones.
**Guidance:** either fill the URLs or drop the array + the "Also via:" block and
the matching `README.md:77–79` paragraph. `.github/FUNDING.yml` already has the
same platforms commented out, so this is the second parallel placeholder set.

### A12. `src/routes/contact/index.tsx` — shipped non-functional form
`CONTACT_EMAIL = ""` (line 7), so `onSubmit$` always short-circuits to
*"Contact inbox is not configured yet — please reach out via GitHub in the
meantime."* (lines 40–44). The page is linked from the Footer and the mobile
drawer and is prerendered.
**Guidance:** set the address, or replace the form with the GitHub issues link
the fallback message already points at. Shipping a form that can never submit
is worse than no form.

### ✅ A13. `.antigravity/history/last-lint-result.json` — stale committed receipt
**Status (2026-10-04): SOLVED by Muse Spark 1.3.** Re-verified (frozen 2026-09-21 snapshot, no git ref inside). Nuance beyond the guidance: the `/kickstart` protocol DID read this file (`kickstart.md` step 3 + `rules.md` memory-store list), so a bare delete would have broken the workflow — removed via `git rm` AND rewired both docs to a live `pnpm build.types` check instead of a committed snapshot. Zero remaining references outside the audit's own historical text. `pnpm test` 94/94 green.
`{"timestamp":"2026-09-21T16:06:00Z","status":"success","errors":0}` — a frozen
typecheck result, 13 days stale. `.antigravity/rules.md:22–24` instructs agents
to treat `.antigravity/history/` as authoritative "if files match current git
state", which cannot be determined from this file.
**Guidance:** delete it; `pnpm build.types` is the real receipt. If the
`/kickstart` protocol needs it, generate it from the build instead of committing
a snapshot.

### A14. `.antigravity/history/dependency-graph.md` duplicates `.agents/tech-stack.md`
Same versions, same script list, same locked-stack statement, ~90 % overlap.
`.agents/tech-stack.md` is the canonical home (it is in AGENTS.md's required
reading list; dependency-graph.md is not).
**Guidance:** replace the body with a one-line pointer to
`.agents/tech-stack.md`, or delete and fix `.antigravity/rules.md:14`.

### A15. `commands/individual search for ai models` — orphan one-off prompt
4 939 B, no file extension, first line hardcoded to
*"Research model **Claude Fable 5.1**…"*. It restates the v4 scoring
methodology and output format already owned by `model-report-TEMPLATE.md`,
`tasks/research.md` and `tasks/research-assign.md`. Verified: **zero**
references anywhere in the repo.
**Guidance:** delete the file and the `commands/` directory (it has no other
contents). If the standalone-chat variant is still wanted, fold it into
`tasks/research-assign.md` as an appendix so the methodology lives in one place.

### A16. `.agents/gemma-rate-limits.md` — unreferenced and self-contradictory
Verified: referenced by nothing live (`AGENTS.md` names only
`.agents/gemini-rate-limits.md`). It also contradicts itself — the header says
**12 000** TPM, Rules 1 and 2 say **16K** three times.
**Guidance:** delete, or fix the number and add it to AGENTS.md's required
reading so it is actually reachable.

### A17. `.agents/workflows/batch_research_all_models.md` — unreferenced
Only mention anywhere is a historical line in `GLM53F_IMP.md:113`.
**Guidance:** confirm with the user whether the batch workflow is still used; if
not, delete.

### A18. `.qoder/repowiki/` — 92 tracked files / 1.8 MB of IDE-generated wiki
Auto-generated by the Qoder IDE, duplicating `README.md` + `.agents/*` +
`project-map.md` content in a deeper tree. It drifts on its own (12 files showed
as modified and 2 as untracked during this audit, with no human edit).
**Guidance:** `git rm -r --cached .qoder` and add `.qoder/` to `.gitignore` —
keep the local cache, stop versioning a derived artifact that competes with the
hand-written docs for authority. This is the largest single reduction in tracked
non-research content available.

### A19. `GLM53F_IMP.md` + `IMPROVEMENTS.md` — completed logs on dead premises
Both are historical improvement lists, not living docs. Their *open* items rest
on premises that no longer hold (see **C3–C7**): `catalog.generated.ts`,
`.rerun/`, `scripts/debug-sync.mjs`, `scripts/find-fails.mjs`, `public/sw.js`,
"no test framework" — none exist.
**Guidance:** extract the three still-valid open items (IMPROVEMENTS #2 top-3
pre-bake → **D1**; #3 voice pipeline → **E-note**; #4 `meta.json` schema
validation) into one living backlog, then retire both files. `REPORT.md` already
holds the dated history.

### A20. Stale registry entry: `"Mimo v2.5 Free"`
`src/data/sources.generated.ts:108` registers `file: "Mimo_v2.5_Free.md"`.
Verified: **no** `Mimo_v2.5_Free.md` exists anywhere under `model/` (it is the
only such stem out of 65). `pnpm sync` already logs it as a non-blocking
`INFO  source … has no active findings files`.
**Guidance:** human decision — were those reports renamed to
`Mimo_v2.6_Flash.md`, or lost? If retired intentionally, retire the key too
(the registry is regenerable, not research data, so this is not a RULES.md
permanence question).

### A21. "SIMPLIFY-PLAN" is cited 6× but does not exist
`src/data/models.ts:23`, `models.ts:257`, `sources.generated.ts:3`,
`sync-data.mjs:90`, `sync-data.mjs:250`, `scripts/lib/naming.mjs:5` all
reference "SIMPLIFY-PLAN Phase 1/2/3". Verified: no `SIMPLIFY-PLAN*` file exists
anywhere in the repo or in git history's current tree.
**Guidance:** rewrite those 6 comments to state the *invariant* instead of
citing a phantom document — e.g. "slug lives inline in `SourceDef`" rather than
"SIMPLIFY-PLAN Phase 1". A comment pointing at nothing is worse than no comment.

---

## PART B — Bugs found while scanning

### B1. The `voicemodels/` tripwire has never fired (variable shadowing)
`scripts/sync-data.mjs:150–154`:
```js
for (const root of FORBIDDEN_ROOTS) {      // shadows repo root from line 82
  if (existsSync(join(root, root))) {      // => existsSync("voicemodels/voicemodels")
    fail(forbiddenRootMessage(root));
  }
}
```
Line 82 defines `const root = <repo root>`. The loop parameter is also named
`root`, so `join(root, root)` evaluates to `"voicemodels/voicemodels"` — a
relative path that can never exist.

`RULES.md:48` states as an absolute guarantee: *"`pnpm sync` FAILs loudly while
`voicemodels/` exists."* **It does not.** The unit test
(`validate.test.mjs:66–73`) passes because it only tests the pure
`forbiddenRootMessage()` helper, never the call site.
**Guidance:** one-line fix —
```js
for (const forbidden of FORBIDDEN_ROOTS) {
  if (existsSync(join(root, forbidden))) fail(forbiddenRootMessage(forbidden));
}
```
Then add a sync-level regression test (create a temp `voicemodels/`, assert
non-zero exit) so the call site is covered, not just the message builder.
*Mitigating:* `.githooks/pre-commit:11–18` independently blocks staged additions
under `voicemodels/`, and `core.hooksPath` is set to `.githooks` in this clone —
so the second line of defence is live.

### B2. Canonical URLs and the sitemap point at `localhost` — **verified in `dist/`**
```
dist/index.html:            <link rel="canonical" href="http://localhost:4173/" …>
dist/model/big-pickle/:     <link rel="canonical" href="http://localhost:4173/model/big-pickle/" …>
dist/sitemap.xml:           135 × <loc>http://localhost:4173/…</loc>
```
Cause: `adapters/static/vite.config.ts:15` sets `origin: "http://localhost:4173"`,
and `src/components/router-head.tsx:11` emits `href={loc.url.href}`.
`vercel.json` shows the site is (or was) intended for a real deployment, so
every page currently self-canonicalises to localhost and the sitemap advertises
135 unreachable URLs.
**Guidance:** set the real origin, ideally from the environment so dev and prod
differ:
```ts
staticAdapter({ origin: process.env.SITE_ORIGIN ?? "http://localhost:4173" })
```
and document `SITE_ORIGIN` in `README.md`. Re-verify by grepping
`dist/sitemap.xml` after a build.

### B3. `<link rel="manifest">` is emitted twice on every page — **verified in `dist/`**
`dist/index.html` contains 2 occurrences. Sources:
- `src/root.tsx:40–45` — `{!isDev && <link rel="manifest" href={BASE_URL + "manifest.json"} />}`
- `src/components/router-head.tsx:15` — `<link rel="manifest" href="/manifest.json" />`

**Guidance:** keep the `RouterHead` one (it owns all the other head links) and
delete the `root.tsx` block, which also removes the `isDev` import if unused
elsewhere. See **D21**.

### B4. All 133 model pages share one `<title>` — **verified in `dist/`**
133 prerendered pages, **1** distinct title: `"Model details — ModelComp"`.
`src/routes/model/[slug]/index.tsx:364–372` exports a static `head` object.
Duplicate titles across 133 pages are an SEO and tab-usability problem, and the
per-model `description` is generic too.
**Guidance:** make `head` a resolver:
```ts
export const head: DocumentHead = ({ params }) => {
  const m = MODELS.find((x) => x.slug === params.slug);
  return m
    ? { title: `${m.name} — scores & agent ratings | ModelComp`,
        meta: [{ name: "description", content: `${m.name}: Overall ${m.scores.overall}/100. ${m.short}` }] }
    : { title: "Model not found — ModelComp" };
};
```

### B5. No social/crawler metadata
Verified: `dist/index.html` has **0** `og:*` and **0** `twitter:*` meta tags,
and `dist/robots.txt` does not exist (though `dist/sitemap.xml` does).
**Guidance:** add `og:title` / `og:description` / `og:url` / `og:type` in
`RouterHead` (derived from `useDocumentHead()`, so every page gets them for
free) and a `public/robots.txt` pointing at the sitemap. Low effort, and it is
the kind of thing that silently never gets done.

### B6. The rater gate `84.9` is duplicated as a bare literal in the UI
- `scripts/lib/parse.mjs:39` — `export const RATER_GATE = 84.9;` (the real constant)
- `src/components/CompareSection.tsx:124` — `"…own Overall above 84.9 count toward the average."`
- `src/components/CompareSection.tsx:125` — `"(raters above 84.9 Overall)."`

`scripts/sync-data.mjs:237` even carries the instruction *"keep it in sync with
the UI caption in CompareSection.tsx"* — a manual-sync requirement is a defect,
not a process. The same number is also prose in `README.md:64`,
`RULES.md:77`, `.agents/rules.md:48` and `tasks/sync-data.md:50`.
**Guidance:** have `pnpm sync` emit `export const RATER_GATE = 84.9;` into
`src/data/sources.generated.ts` (it already owns generated constants) and import
it in `CompareSection`. Then the one place is `scripts/lib/parse.mjs` and the UI
can never drift. See **D22**.

### B7. `src/data/scores.generated.ts` is stale vs. disk
Measured: the generated file holds **3 460** file entries (3 327 findings + 133
averages). Disk holds **3 337** active findings + 133 `average.md` = **3 470**.
Gap ≈ 10, consistent with the 17 untracked research files added since the last
sync. `model/gemini-2.5/` has a findings file but **no** `average.md` — the only
such folder — so it is currently skipped by `models.ts` with a `warnOnce`.
**Guidance:** run `pnpm sync` before anything else in this list; several items
below (A20, E2) resolve or re-confirm themselves on that run.

### B8. `tasks/sync-data.md` contradicts itself four lines apart
- line 101–102: *"the Results-source dropdown keeps curated `SOURCES` order (new sources append last — **never reorder existing entries**)"*
- line 105: *"Results-source dropdown order is **derived, not curated**"*

Line 105 is the truth (`sourceRankOverall` in `src/data/models.ts:295–337`).
The same stale word appears in `src/components/CompareSection.tsx:23`
("the results-source selector keeps its **curated** SOURCES order").
**Guidance:** delete the line 100–102 invariant (it is superseded) and fix the
`CompareSection` comment to say "derived".

### B9. Duplicate target slug in `SOURCE_DEFS`
`"Laguna XS 2.1"` (line 120) and `"Laguna XS 2 1"` (line 130) both map to
`slug: "laguna-xs-2.1"`. Verified: the only duplicate slug among 61 slug-bearing
entries. Two source keys cross-link to the same model page and both rank by the
same `sourceRankOverall`.
**Guidance:** these are almost certainly the same rater filed under two filename
spellings (`Laguna_XS_2.1.md` and `Laguna_XS_2_1.md`). The *files* are permanent
(RULES.md), but the duplicate **key** is a registry question: decide whether
`Laguna_XS_2_1.md` is a legacy spelling to consolidate (user sign-off) or a
genuinely distinct rater that needs a distinct slug.

### B10. Contact is unreachable from the desktop header
`src/components/Header.tsx` — desktop nav (lines 55–74) has Compare / Scoring /
Models; the mobile drawer (lines 125–162) has those **plus Contact**. Desktop
users only reach `/contact` via the footer.
**Guidance:** fixed for free by **D16** (single `NAV` array), which makes the two
menus structurally identical.

---

## PART C — Documentation drift

### C1. `.agents/tech-stack.md:35` — "No test framework is configured"
False. `package.json:22` defines `test` (Node's built-in runner over six
`scripts/lib/*.test.mjs` files) and it is green: **95 tests, 39 suites, 0 fail**.
Ironically `GLM53F_IMP.md:90–91` records fixing exactly this line — the fix did
not land, or was reverted.
**Guidance:** replace with the zero-dep test statement already present in
`README.md:124`, and add `pnpm test` + `pnpm sync` / `sync:quiet` to the script
list in that file.

### C2. `.antigravity/history/project-map.md` is materially incomplete
Missing from the component/data inventory: `VendorIcon.tsx`, `freeZenLink.tsx`,
`router-head.tsx`, `routes/contact/`, `src/data/vendorIcons.generated.ts`, and
the entire `scripts/lib/` module split (6 modules + 6 test files).
Also: line 47 says `models.ts` is "~330 lines" (it is **362**), and line 46–49
lists 3 files in `src/data/` (there are **4**).
**Guidance:** this is AGENTS.md's *"read FIRST"* file — the cheapest context an
agent gets is also the most wrong. Refresh it, and consider generating the
component/route/data lists from the filesystem in `pnpm sync` so it cannot drift
again.

### C3. `GLM53F_IMP.md` item 5 argues about files that do not exist
It proposes slimming `catalog.generated.ts` (41 KB) and references a
`root !== "model"` filter at `src/data/models.ts:166`. Verified: no
`catalog.generated.ts` on disk or in git; `models.ts` has no `root` filter at
all. The item is unactionable as written.

### C4. `GLM53F_IMP.md` item 6 — "Untrack `.rerun/**` (17 tracked files)"
`.rerun/` does not exist on disk or in git. `REPORT.md:78–81` records its
deletion on 2026-09-30. Item is closed but unmarked.

### C5. `GLM53F_IMP.md` item 3 — "no test framework; proposal: add `node:test`"
Done (C1), but the item is not marked DONE while items 2, 4, 7, 8, 9 are. The
file's own status markers are unreliable.

### C6. `GLM53F_IMP.md` header — "no duplicate `AGENT_MODEL_SLUG` keys (52 entries)"
`AGENT_MODEL_SLUG` is now *derived* from 66 `SOURCE_DEFS` entries, and it **does**
contain a duplicate target slug (**B9**). The "found healthy" paragraph is stale
in both the count and the verdict.

### C7. `IMPROVEMENTS.md:51–54` — "still open" items that are already gone
Names `scripts/debug-sync.mjs`, `scripts/find-fails.mjs`, `public/sw.js` and
"cleanup blocks in `root.tsx`/`router-head.tsx`". Verified: all absent.
`REPORT.md:116` records the service-worker removal.

### C8. `model-comparison.md` — two docs disagree on whether it is live
- `README.md:68` — *"(`model-comparison.md` is **frozen v1–v3 history**.)"*
- `.agents/rules.md:22` — *"`model-comparison.md` — **overview table + methodology** (per-model details live in `model/`)"*
- `scripts/lib/average.mjs:94` — stamps every newly created `average.md` with
  `- Overview and scoring methodology: ../../model-comparison.md`

So 133 `average.md` files cite a 21 KB document that the README calls frozen
history, as their methodology reference.
**Guidance:** pick one. If it is frozen, change the `average.md` header template
in `average.mjs` to point at `README.md` §Methodology (or `RULES.md` §Scoring)
and fix `.agents/rules.md:22`. Note this changes the *head* of newly created
`average.md` files only — `applyAverageToPrev` preserves existing heads, so no
mass rewrite occurs.

### C9. Required reading is gitignored
`.gitignore:13–14` ignores `PRD/` and `instructions/`. But `AGENTS.md`
(§"Product spec") names `PRD/prd.md` as the requirements doc, `.agents/rules.md:21`
lists it under repo layout, and `.agents/rules.md:60` cites "PRD §7" as the
authority for tooltip behaviour. A fresh clone has **neither directory**, so
tooltip behaviour has no reachable specification.
**Guidance:** decide deliberately —
(a) un-ignore `PRD/` and commit `prd.md` (it is a product spec, not a secret), or
(b) remove every reference to it from `AGENTS.md` / `.agents/rules.md` and move
the §7 tooltip contract into `.agents/rules.md`, which is committed.
`instructions/` is self-described in `README.md:105` as *"consumed build guides"*
— safe to delete from disk; it is already untracked.

### C10. `.antigravity/rules.md` tells agents to trust a stale cache
Its "Check-First Logic" says: *"Before executing code analysis or full codebase
searches, verify `.antigravity/history/` receipt files. If files match current
git state, leverage cached memory instead of scanning the workspace."* Given C2
(project-map materially wrong) and A13 (receipt 13 days old with no git ref),
this protocol actively routes agents to incorrect context.
**Guidance:** either make the receipts self-validating (store the `HEAD` SHA they
were generated at and compare) or drop the "skip scanning" instruction.

### C11. Four parallel improvement logs with no stated precedence
`REPORT.md` (842 lines / 81 KB / 83 dated sections), `IMPROVEMENTS.md`,
`GLM53F_IMP.md`, and now this file. `RULES.md` establishes precedence for
*rules* but nothing establishes precedence for *findings*, so each new audit
adds a competing backlog.
**Guidance:** one living `BACKLOG.md` (open items only, each line owning a file
reference) + `REPORT.md` as the append-only dated history. Retire the rest
(A19). `REPORT.md` itself is worth splitting — e.g. move pre-2026-10 sections to
`REPORT-archive-2026-09.md` — since it is now read in full by anyone following
`tasks/sync-data.md`'s Definition of Done.

---

## PART D — Simplification (behaviour-preserving)

### Data layer & routes

**D1. `src/routes/index.tsx` — three copies of "sort, take 3 ids".**
`top3ByOverall()` (11–18), `top3ByDim()` (29–38) and the `average` branch of
`top3ForSource()` (61–66) are the same shape; the first and third are
*identical*. Collapse to one helper:
```ts
const top3 = (cmp: (a: AiModel, b: AiModel) => number): [string, string, string] => {
  const s = [...MODELS].sort(cmp);
  return [s[0]?.id ?? "", s[1]?.id ?? "", s[2]?.id ?? ""];
};
```
`top3ByOverall()` then becomes `top3ForSource("average")`. ~30 lines → ~12.
*(This is also IMPROVEMENTS.md item 2's concern; pre-baking the table at build
time is a separate, larger change — the dedupe is the cheap half.)*

**D2. `src/routes/index.tsx:20–26`** — the tuple is destructured into
`TOP_A/B/C` and immediately rebuilt into `DEFAULTS`. Use the tuple directly.

**D3. `src/routes/index.tsx:82`** —
`if (raw === "overall" || raw.toLowerCase() === "overall")`: the first clause is
strictly subsumed by the second.

**D4. `src/routes/index.tsx:79–101` (`validSource`)** — does an exact
`SOURCES.find`, then loops `SOURCES` again recomputing `normName` per candidate
on every call. Build one module-scope `Map<normalized, ResultsView>` from
`SOURCES` (keys *and* slugs) once; `validSource` becomes two lookups and no loop.

**D5. `src/routes/index.tsx:131–145`** — `useVisibleTask$` reads `query` and
performs a `window.location.replace` **before** calling `track()`. In Qwik,
reads before `track` are not tracked, so the ordering is load-bearing but
fragile and easy to break on the next edit. Move `track()` to the first
statement and gate the redirect behind an explicit first-run flag, or split into
two tasks (one redirect-only, one URL-sync).

**D6. Free/Paid badge is duplicated 7×.**
`ModelCards.tsx:139–154`, `265–276`, `350–361`; `CompareSection.tsx:158–169`,
`209–220`, `275–286`; `model/[slug]/index.tsx:136–147`. Each is the same
`!noFreeId ? <Free title={freeTierNote ?? pricingNote}> : <Paid>` with slightly
different Tailwind chrome (and two different Paid labels: `"Paid"` vs
`"Paid fallback — no Free ID"`, which is an unintended inconsistency).
Extract `src/components/PricingBadge.tsx` taking
`{ model, variant: "card" | "inline" | "hero" }`. ~95 lines → ~20, and the
`freeTierNote ?? pricingNote` fallback stops being copy-pasted.

**D7. Pricing-tier list is duplicated 5×.**
`(m.meta.pricingTiers ?? [m.meta.pricingNote]).map(tier => <li key={tier}>…)` at
`ModelCards.tsx:289`, `384`; `CompareSection.tsx:249`, `304`;
`model/[slug]/index.tsx:164`. Extract `<PricingTiers model=… />`.
**Bonus fix:** only the model page (`index.tsx:167`) routes tiers through
`withFreeZenLink`. The homepage renders the identical "Free OpenCode Zen tier"
string as plain text — so the same phrase is a link on one page and not on
another. Routing all five through the shared component fixes that too.

**D8. Sort-header button is duplicated 4× in `ModelCards.tsx`.**
Desktop dimension `<th>` (198–225), desktop Overall `<th>` (226–246), mobile
dimension chip (300–319), mobile Overall chip (320–332). All four compute
`sortKey`/`isActive` and call `onSource$`. Drive both lists off one array —
`const COLS = [...DIMENSIONS.map(d => ({ key: sortSourceFor(d.key), label: d.short, title: d.label })), { key: "average", label: "Overall", … }]`
— and one `<SortControl>`. The special-cased Overall column disappears.

**D9. Sort-header button is duplicated 3× in `model/[slug]/index.tsx`.**
Agent column (204–225), Overall column (228–249), dimension columns (257–278).
~70 near-identical lines, each repeating:
```ts
if (sortKey.value === K) sortDir.value = sortDir.value === 1 ? -1 : 1;
else { sortKey.value = K; sortDir.value = D; }
if (isNarrow.value) scrollerRef.value?.scrollTo({ left: 0, behavior: "smooth" });
```
Extract one `<SortTh key label dir active onSort$>` plus a single
`toggleSort(key, defaultDir)` QRL.

**D10. `CompareSection.tsx` — repeated lookups.**
Lines 29 and 30 each run `SOURCES.find(s => s.key === source)`; `virtualDimFor(source)`
is called at line 40 (**inside a `.map`**, so once per selected model), line 62,
and line 127. Hoist `const active = SOURCES.find(...)` and
`const sortDim = virtualDimFor(source)` to the top of the component and reuse.

**D11. `CompareSection.tsx` — slot indexing.**
`(["a","b","c"] as const)[i]` appears at lines 45 and 90, alongside
`SLOT_LABELS` (line 18) and a redundant `as "a" | "b" | "c"` cast on line 90.
One `const SLOTS = [["a","Model A"],["b","Model B"],["c","Model C"]] as const`
removes the parallel arrays, the index arithmetic and the cast.

**D12. `ModelCards.tsx` — page size `9` is a magic number** at lines 15, 97, 107
and 401. `const PAGE = 9;`.

### Components

**D13. `HexRadar.tsx:47–60` (`tooltipFor`)** builds `base`, then two of the four
branches discard and rebuild it. A `switch (d.key)` with direct returns is
shorter and skips the wasted template interpolation.

**D14. `HexRadar.tsx:70–72` — the `<desc>` axis order is wrong.**
It reads *"Tool use, Reasoning, Context window, Multimodal, Coding and Cost
efficiency"*. The actual `DIMENSIONS` order (which `.agents/rules.md:56` pins)
is Tool, Reasoning, Context, **Cost**, Coding, **Multimodal** — so the only
screen-reader description of the chart lists the axes in the wrong order.
Derive it: `DIMENSIONS.map(d => d.label).join(", ")`. Fixes an a11y bug and
removes a hand-maintained list in one edit.

**D15. `VendorIcon.tsx:13`** — `icon: keyof typeof VENDOR_ICON_SVGS | string`.
The `| string` cancels the key constraint entirely; that is precisely how
`hunyuan` (A9) could sit unreferenced with no type error, and how a typo'd icon
name would compile. Drop `| string` — with 21 keys, the exhaustive type is the
whole point. The `if (!vendor || !entry)` letter-fallback at line 80 stays as the
runtime guard.

**D16. `Header.tsx` — nav links hardcoded twice (6 anchor blocks).**
Desktop (55–74) and drawer (125–162) list the same three links with different
classes; the drawer additionally has Contact (**B10**). One array:
```ts
const NAV = [
  { href: "/#compare", label: "Compare" },
  { href: "/#methodology", label: "Scoring" },
  { href: "/#models", label: "Models" },
  { href: "/contact", label: "Contact" },
];
```
→ two `.map()` calls, ~40 lines saved, and B10 becomes impossible by
construction.

**D20. `theme-toggle.tsx:10–34`** — the if/else branches differ only in
add-vs-remove and the stored string:
```ts
const next = document.documentElement.classList.toggle("dark");
isDark.value = next;
try { localStorage.setItem("theme", next ? "dark" : "light"); } catch {}
```
24 lines → 4, identical behaviour (`classList.toggle` returns the resulting
state). Also `catch (e) {}` → `catch {}` in both this file and `root.tsx:30`.

**D21. `root.tsx` + `router-head.tsx`** — consolidate every `<link>`/`<meta>` in
`RouterHead`. Removes the duplicate manifest (**B3**) and ends the "which file
owns head tags?" ambiguity. `root.tsx` keeps only `<meta charset>` and the
anti-flash script, which genuinely must be first in `<head>`.

**D19. `freeZenLink.tsx:11`** — `withFreeZenLink(text: string): any[]` in a
`strict: true` codebase with `noUnusedLocals`. Type it `JSXOutput[]` (or
`(string | JSXNode)[]`) and drop the two internal `any[]` annotations.
`FREE_ZEN_MODELS_URL` (line 7) is also exported but used only within the file —
drop the `export`.

**D23. `model/[slug]/index.tsx:93–121`** — `sortKey` is `useSignal<string>` and
then cast at lines 99, 100 and 117
(`sortKey.value as DimensionKey`). Declare
`type RatingSortKey = "agent" | "overall" | DimensionKey` and
`useSignal<RatingSortKey>("overall")` — all three casts disappear and an invalid
sort key becomes a compile error.

**D24. `VIRTUAL_VIEWS` is a hand-maintained mirror of `DIMENSIONS`.**
`src/data/models.ts:259–266`. Verified: its six labels (`Tool`, `Reason`,
`Context`, `Cost`, `Code`, `Multi`) are **character-for-character identical** to
the six `DIMENSIONS[].short` values, in the same order. The only real
information in the list is the `DimensionKey → ViewKey` renaming
(`reasoning→reason`, `coding→code`, `multimodal→multi`). Replace with:
```ts
const VIEW_KEY: Record<DimensionKey, ViewKey> = {
  tool: "tool", reasoning: "reason", context: "context",
  cost: "cost", coding: "code", multimodal: "multi",
};
export const VIRTUAL_VIEWS = DIMENSIONS.map((d) => ({ key: VIEW_KEY[d.key], label: d.short, dim: d.key }));
```
One list of six instead of two, and the `.agents/rules.md:56` guarantee that
virtual views follow "canonical DIMENSIONS order" becomes structural rather
than conventional.

### Scripts

**D17. `scripts/lib/validate.mjs:84–97` (`checkMetaFile`)** reimplements
`missingMetaFields` and `metaNameHasUnderscore` from `naming.mjs` inline. Import
and call them — one edit removes the duplication **and** resurrects two dead
exports (**A3**). `validate.test.mjs` already covers `checkMetaFile`'s output
contract, so the refactor is verifiable immediately.

**D18. `scripts/sync-data.mjs:475`** — `const keyOf = stemToKey;` is a
single-use alias; pass `stemToKey` directly to `computePending`.

**D22. Emit the gate constant instead of duplicating it** (fixes **B6**): add
`export const RATER_GATE = <value>;` to the `renderScoresFile` /
`sources.generated.ts` emitter in `scripts/lib/codegen.mjs`, and have
`CompareSection.tsx` interpolate it. Tests already exist for the serializer, so
add one asserting the constant is emitted.

**D25. `tsconfig.json:23`** — `"include": ["src", "vite.config.ts"]` excludes
`adapters/static/vite.config.ts` from typechecking, so the one file that
contains the broken `origin` (**B2**) is never type-verified, and `scripts/`
(`allowJs: true` is set but scripts are out of scope) is unchecked too.
Consider `"include": ["src", "vite.config.ts", "adapters"]` — low cost, closes a
real blind spot.

---

## PART E — Data-tree health (report only — no deletions proposed)

> `RULES.md` makes every `model/<slug>/` file and folder permanent. Nothing below
> is a deletion proposal; these are facts a human should know.

**E1. Clean on every hard rule.** Verified:
no `voicemodels/` directory · no forbidden Muse tier folders
(`muse-spark-1.{2,3}-{max,free,contributor}`) · no hyphen-version slug
violations outside the sanctioned exception set · no duplicate `meta.json` `id`
values across 134 folders · no `meta.json` `name` containing an underscore ·
every slug-bearing `SOURCE_DEFS` entry resolves to an existing folder.

**E2. `model/gemini-2.5/` is the only folder without `average.md`.**
Contents: `meta.json` + `Qwen_3.8_27B.md`. It is also the only on-disk folder
whose `SOURCE_DEFS` twin (`"Gemini 2.5"`, line 144) carries **no** `slug`,
despite `model/gemini-2.5/meta.json` having `"name": "Gemini 2.5"` (which the
catalog lookup should match). Both are consistent with "sync has not run since
this folder appeared" — **B7**. Re-check after `pnpm sync`; if the slug is still
absent, the catalog lookup has an edge case worth investigating.

**E3. Five folders use underscores where the other 129 use hyphens.**
`llama_3.2_vision_instruct`, `longcat_2.5_preview`, `north_mini_code`,
`ox_alpha`, `pixel_canary`.
This is not merely cosmetic: three of them require a hand-written
`SOURCE_OVERRIDES` entry in `scripts/sync-data.mjs:95–113`
(`"Ox Alpha"`, `"LongCat 2.5 Preview"`, and `north_mini_code` via
`sources.generated.ts:151`) purely because the slug does not match the derived
name — i.e. the naming inconsistency has a direct, permanent code cost.
Renaming a `model/<slug>/` folder requires explicit per-instance sign-off
(`RULES.md`); flagging for a decision, not acting.

**E4. Nine `scaffolded: true` `meta.json` stubs pending curation.**
`claude-haiku-3.5`, `fledge-alpha`, `grok-4.1-fast`, `inkling-small`,
`ling-3.0-flash-vl`, `ling-3.1-flash`, `mai-experimental-test`,
`north_mini_code`, `qwen-3.5`.
Each currently ships a slug-guessed display name plus placeholder facts
(`"128K total"`, `"Text in/out"`, `"Standard pricing"`) to the live site. Sync
re-logs them as `SCAF` every run, exactly as designed — they just need a human
pass.

**E5. 54 grandfathered `Ling_3.0.md.replaced-by-Flash[_Fin]` fossils**
across `model/` (52), `models_voice/` (1) and `models_finance/` (1). Explicitly
grandfathered by `.agents/rules.md:47` ("stay untouched; no new
`*.replaced-by-*` names"). **Keep.** Noted only so a future "cleanup" pass does
not mistake them for cruft.

**E6. 17 untracked research files + 1 unstaged deletion.**
The deletion is `model/fledge-alpha/Muse_Spark_1.3.md.excluded`, and I verified
its fresh `Muse_Spark_1.3.md` sibling **is** present — so this is a *sanctioned
twin retirement* (`RULES.md`, `tasks/research.md` Step 3.3). Sync will log
`INFO  … twin retired`, not `FAIL`, and the pre-commit hook's `*.md.excluded`
sibling check will allow it.
**Guidance:** commit the 17 additions + this deletion. The permanence tripwire
only guards *committed* state, so uncommitted research is unprotected.

**E7. `model/mai-experimental-test/`** — the slug reads like a scratch/test
folder rather than a released model. Worth a human look. Not an auto-deletion
candidate: `RULES.md:31–36` makes `model/<slug>/` folders permanent regardless
of score, and the only sanctioned removal is a forbidden Muse tier duplicate.

**E-note. `models_voice/` + `models_finance/` are still unwired** (8 folders of
validated research invisible to both `pnpm sync` and the site). This is
IMPROVEMENTS.md item 3 and the only genuinely open item in that file —
`RULES.md:43–44` and `.agents/rules.md:13–19` both describe the wiring as
"pending". Worth promoting to the living backlog rather than losing it when
IMPROVEMENTS.md is retired (**A19**).

---

## PART F — Suggested execution order

Grouped so each step is independently verifiable.

**Step 0 — restore ground truth (do first)**
```powershell
pnpm sync && pnpm build.types:direct && pnpm build:direct
```
Resolves **B7**, re-confirms **A20** / **E2**, and gives a clean baseline to
diff every later change against. Then commit the 17 untracked research files +
the sanctioned twin deletion (**E6**).

**Step 1 — the three verified output bugs** (small, high value, independent)
**B2** origin · **B3** duplicate manifest (+ **D21**) · **B4** per-model titles.
Verify: grep `dist/sitemap.xml` for `localhost` (expect 0), count
`rel="manifest"` in `dist/index.html` (expect 1), count distinct `<title>`
across `dist/model/*/index.html` (expect 133).

**Step 2 — the silent correctness bug**
**B1** `voicemodels/` tripwire + a sync-level regression test.
Verify: `New-Item -ItemType Directory voicemodels` → `pnpm sync` must exit
non-zero with the `FAIL` line → remove the directory.

**Step 3 — pure deletions, zero behaviour change**
**A1** tailwind colors · **A2** legacy unlink · **A4**–**A7** models.ts
dead exports · **A8** HexRadar hardcode · **A13**–**A17** orphan docs ·
**A21** phantom-plan comments.
Verify: `pnpm test` green, `pnpm build.types:direct` clean, and
`dist/index.html` byte-identical except where intended.

**Step 4 — de-duplication with the best ratio**
**D6** PricingBadge (7 copies) · **D7** PricingTiers (5 copies, + the
`withFreeZenLink` inconsistency) · **D16** Header NAV (fixes **B10**) ·
**D8**/**D9** sort controls (7 copies).
Expect roughly 250–300 lines removed from `src/components/` + `src/routes/`.

**Step 5 — constants and contracts**
**B6**/**D22** emit `RATER_GATE` · **D17** `checkMetaFile` reuse (resurrects
**A3**) · **D24** derive `VIRTUAL_VIEWS` · **D15**/**D19**/**D23** type
tightening · **D25** typecheck `adapters/`.

**Step 6 — product decisions (need the user, not an agent)**
**A9** hunyuan icon: wire or drop · **A10** move `public/icons/` out of the
published tree · **A11** donate placeholders · **A12** contact inbox ·
**A18** untrack `.qoder/` · **B9** Laguna duplicate key · **C8**
`model-comparison.md` status · **C9** `PRD/` gitignore · **E3** underscore
slugs · **E4** 9 scaffolded stubs · **E7** `mai-experimental-test`.

**Step 7 — documentation consolidation**
**C1** tech-stack test line · **C2** project-map refresh (consider generating
it) · **B8** sync-data.md self-contradiction · **A19**/**C11** one living
`BACKLOG.md` + archive old `REPORT.md` sections · **C10** antigravity
check-first logic.

---

## Appendix — what I checked and found healthy

So a future audit does not re-walk this ground:

- **Component graph is fully live.** All 13 files in `src/components/` are
  imported and reachable; no orphaned components.
- **`scripts/lib/` is fully live** except the three exports in **A3**.
- **Test suite green:** 95 tests / 39 suites / 0 fail.
- **Dependencies are minimal and all used:** 9 devDependencies, zero runtime
  dependencies. `ignore@^5.3.2` is required by the Qwik CLI
  (`.agents/tech-stack.md:17`) — do not remove. No unused packages found.
- **No `node_modules` / build output is tracked.** `.gitignore` correctly covers
  `dist/`, `server/`, `.qwik/`, `*.tsbuildinfo`, `tmp_*`, `temp_*`, `*.log`, and
  nested `node_modules` (including `.opencode/node_modules`).
- **`.opencode/plugins/`** is the correct project plugin directory per the
  OpenCode docs, and `.opencode/.gitignore` deliberately excludes
  `package.json` / `package-lock.json` / `node_modules`. Left alone — tool
  config, out of scope for this audit.
- **`vercel.json`** — standing verdict in `GLM53F_IMP.md:148–154` is must-keep;
  nothing found to change that, and **B2** makes it clear a real deployment is
  intended.
- **`.githooks/pre-commit` is active** in this clone (`core.hooksPath=.githooks`)
  and its twin-retirement / meta.json / grace-window logic reads correctly.
- **`model-queue.md`** is consistent with `scores.generated.ts` (133 data lines
  for 133 averaged models) — it is stale only in the same way as **B7**.
- **`public/backers/extrawebsite.png`** is referenced and used
  (`Footer.tsx:35`). `public/favicon.svg` and `public/manifest.json` are
  referenced and used.
- **No leftover scratch files** in `scripts/` or the repo root — the
  2026-09-27 purification recorded in `IMPROVEMENTS.md:43–50` holds.
- **Build output size:** `dist/` 9.2 MB / 336 files, `server/` 0.6 MB — both
  gitignored. `tsconfig.tsbuildinfo` 74 KB, gitignored.

---

*Report only. Nothing in the repository was modified by this audit.*
