# 202611expandingPRD — Implementation Inspection & Guidance

- **Inspected:** 2026-11-11, against implementation commit `6a98cf13c` (routes from `e795f1c19`) and three successive builds (00:17, 08:58, 09:15 — all produced identical defects, so nothing below is a stale-build artifact).
- **Method:** full read of every new route/component/pipeline change, `pnpm test` (685 pass / 0 fail), `dist/` forensics, compiled-plan introspection, and live `requestHandler` probes (`temp/inspect-ssg.mjs`, `temp/inspect-ssg3.mjs`, `temp/inspect-refs.mjs`).
- **Scope note:** the repo was being modified concurrently by other agents during inspection; findings were re-verified against the newest build before writing.

## TL;DR verdict

The source-level implementation is largely well-built: clean pipeline code, green tests, deterministic ordering, honest dated verdicts, SSR'd citations. **But the shipped build is broken in three ways, two of them silent:**

1. **Only 36 of the required 190 compare pages are generated.** Every pair containing a version-dot slug (`claude-opus-5.5`, `gemini-3.1-pro`, …) is silently dropped by a Qwik City SSG interaction. Root cause fully identified below — it is a **one-line fix** in `onStaticGenerate`.
2. **`/data/scores.json` and `/data/scores.csv` do not exist in the build.** The endpoint files are never discovered by Qwik City's route scanner (only `index.*` files become routes). The /data/ download links 404. Simpler fix: emit them at sync time into `public/data/`.
3. **`SITE_ORIGIN` is still unset everywhere** — committed `robots.txt`, all ~259 sitemap URLs, and every canonical point at `http://localhost:4173`. PRD Phase 0 requirement 3 is unmet in the artifacts.

Additionally, the **internal-link graph is essentially absent** (new pages are sitemap-only orphans), which defeats much of the PRD's SEO intent even after the blockers are fixed.

PRD Task 7 ("validation must show 190 compare routes") was evidently never run against a real build — it would have caught blocker #1 immediately. A cheap post-build assertion is recommended so silent SSG drops can never ship again.

---

## Phase-by-phase compliance

| PRD item | Status | Notes |
|---|---|---|
| Phase 0 — robots.txt AI-bot stanzas | ✅ Done | OAI-SearchBot, GPTBot, PerplexityBot, Claude-Web, Google-Extended stanzas present |
| Phase 0 — canonical production origin | ❌ **Blocked** | `SITE_ORIGIN` unset → localhost in robots/sitemap/canonicals (C3) |
| Phase 1 — references harvester | ✅ Done (with issues) | Correct file exclusions; URL-trim + dedup issues (M8, H3) |
| Phase 1 — benchmarks aggregator | ✅ Done | AA-harness separation, rater gate, deterministic sorts |
| Phase 2 — ReferencesSection drawer | ✅ Done (with issues) | SSR'd, `nofollow`, below evidence table; 1.66 MB client payload (H3) |
| Phase 3 — /methodology | ✅ Done (with issues) | Links to non-existent `/promotions/` (M3) |
| Phase 3 — /benchmarks | ✅ Done (with issues) | Vocabulary duplicated from `benchmarks.mjs` (M5) |
| Phase 3 — /data + downloads | ⚠️ Page done, **downloads 404** | Endpoints invisible to route scanner (C2) |
| Phase 4 — /compare engine + verdicts | ⚠️ Engine good, **SSG broken** | 36/190 pages emitted (C1); verdict engine solid |
| Phase 5 — /best-ai-models-for-coding | ✅ Done (with issues) | Hardcoded "2026", hardcoded origin in JSON-LD (M1, M2) |
| Phase 5 — /best-free-llm-for-coding | ✅ Done (with issues) | `claimantOf` may cite a paid tier (M4) |
| Task 7 — validation (190 routes) | ❌ Not performed | Build shows 36; no automated guard exists |

---

## CRITICAL findings

### C1 — 154 of 190 compare pages silently dropped (version-dot slugs)

**Symptom.** `dist/compare/` contains exactly 36 pair directories + the base page, in every build. The 36 are precisely `C(9,2)` — the pairs whose **both** slugs contain no `.`. All 154 pairs involving a dotted slug (`claude-opus-5.5-vs-…`, `gemini-3.1-pro-vs-…`, …) are missing. No build error is logged.

**Proof chain.**
- `temp/inspect-ssg.mjs` calls the compiled `onStaticGenerate` from `server/@qwik-city-plan.js` directly → **191 params, 20 distinct slugs including dotted ones**. The handler is correct.
- Live `requestHandler` probes (`temp/inspect-ssg3.mjs`, static mode, real plan + SSR entry):
  - `/compare/claude-opus-5.5-vs-gemini-3.1-pro/` → **200**, ~210 KB HTML ✅
  - `/compare/claude-opus-5.5-vs-gemini-3.1-pro` (no slash) → **301** to the slashed URL ❌

**Root cause (four links in the chain):**
1. Qwik City normalizes rest-param route names **without a trailing slash**: the compiled plan contains `"compare/[...pair]"` (while `"model/[slug]/"` keeps its slash).
2. `getPathnameForDynamicRoute` (`@builder.io/qwik-city/lib/static/node.mjs` L59–71) substitutes the param → `/compare/<pair>` with **no trailing slash**.
3. `addToQueue` (same file, L760–786) re-adds the trailing slash **only if the last segment contains no dot**:
   ```js
   if (!lastSegment.includes(".")) { pathname += "/"; }
   ```
   This "looks like a file" heuristic misfires on version-dot slugs → dotted pairs are queued **without** the slash.
4. The worker renders that URL; `fixTrailingSlash` (request-handler, applied to page routes only) throws a **301** to the slashed URL; `workerRender` marks `result.ok = false` for any non-2xx and writes **nothing, silently**.

Model pages are unaffected because their route template keeps the trailing slash, so step 3 never runs for them. Dot-free pairs get the slash appended and render fine — hence exactly 36 survivors.

**Fix — recommended (one line).** In `src/routes/compare/[...pair]/index.tsx`, emit the trailing slash inside the param so the generated pathname already ends in `/` and bypasses the dot heuristic entirely:

```ts
// Alphabetical canonical order → no reversed duplicates. 20 * 19 / 2 = 190.
// Trailing slash is REQUIRED: Qwik City's SSG dot-heuristic otherwise treats
// version-dot pairs as files, renders them slash-less, and silently drops the 301.
params.push({ pair: pairKey(top20[i].slug, top20[j].slug) + "/" });
```

This is verified safe: the probe above shows the slashed URL renders 200 through the real request handler, and `matchRoute` strips the trailing slash before `params.pair` reaches the component/`head()` (its `lengthNoTrailingSlash` + `recursiveScan` handle it). The `{ pair: "" }` base entry already yields `/compare/` and needs no change.

**Alternatives (not recommended):**
- Rename to a single `[pair]` param + separate `compare/index.tsx` base route — the template would keep its slash (like `model/[slug]/`), but it's more churn for the same result.
- Patch/upgrade Qwik City — the dot heuristic + silent non-2xx drop is an upstream defect worth reporting, but don't block the fix on it.

**General lesson:** any future rest-param route whose values can contain dots hits the same trap. Always end generated pathnames with `/` explicitly.

**Guard (strongly recommended).** Add a tiny zero-dep post-build check (repo test style), e.g. `scripts/check-dist.mjs` run after `pnpm build`:
- assert `dist/compare` directory count === 191 (190 pairs + base),
- assert `dist/data/scores.json` and `dist/data/scores.csv` exist,
- assert `dist/sitemap.xml` contains zero `localhost` occurrences when `SITE_ORIGIN` is set.

This converts silent SSG drops into loud build failures and permanently satisfies PRD Task 7.

### C2 — `/data/scores.json` / `/data/scores.csv` never emitted (download links 404)

**Symptom.** `dist/data/` contains only `index.html` + `q-data.json`. The /data/ page's download buttons point at files that don't exist in the built site.

**Root cause.** `src/routes/data/scores.json.ts` and `scores.csv.ts` are **not routes at all** in this toolchain. Qwik City's route scanner (`getSourceFile`, `lib/vite/index.mjs` L16860–16887) only accepts files whose ext-less name matches `isIndexModule` (`/^index(|!|@.+)$/`), error-code names, layouts, plugins, menus, or service workers. `scores.json` matches none → the files are silently ignored. Verified: the compiled plan's route list has 10 entries and **no** scores endpoints. The endpoint code itself is fine (correct CSV escaping, deterministic JSON) — it simply never runs.

**Fix — recommended (simpler *and* actually works): emit at sync time.**
Move the payload logic into `scripts/lib/codegen.mjs` (e.g. `renderScoresJson` / `renderScoresCsv`) and have `pnpm sync` write `public/data/scores.json` + `public/data/scores.csv`. Vite copies `public/` verbatim into `dist/`, so the files ship with zero runtime/SSR involvement. Then **delete the two dead endpoint files**. This also aligns with the repo's data-flow rule (all dataset artifacts are sync-generated) and removes an entire class of adapter-specific surprises. The /data/ page links stay unchanged.

**Alternative (if endpoints are preferred):** restructure as `src/routes/data/scores.json/index.ts` and `src/routes/data/scores.csv/index.ts` so the scanner sees `index` modules. Caveat: with `trailingSlash: true` the emitted file path for non-HTML resources needs verification (the adapter's `getRouteFilePath` behavior for extension-bearing pathnames), so this route is more fragile than the sync-emit option. Not recommended.

**Also fix while here (M9):** the /data/ page copy counts *generative* models, but the export payload includes the decision model. Pick one scope and make copy + payload agree (recommend: export everything, label the decision model's row/category clearly — researchers want the full dataset).

### C3 — `SITE_ORIGIN` unset: localhost robots/sitemap/canonicals

**Symptom.**
- Committed `public/robots.txt` ends with `Sitemap: http://localhost:4173/sitemap.xml`.
- `dist/sitemap.xml`: ~259 URLs, **all** `http://localhost:4173`.
- Every page self-canonicalises to localhost (`router-head.tsx` uses `loc.url.href`, and the adapter origin defaults to localhost).

PRD Phase 0 req 3 (production canonical origin) is unmet in the artifacts. This is the known open item B7, but the PRD implementation was the natural place to close it and did not.

**Fix.**
1. Set `SITE_ORIGIN=https://modelcomp.com` in the deploy environment (Vercel project env) **and** in the local build invocation. Both consumers already read it: `scripts/sync-data.mjs` (robots.txt) and `adapters/static/vite.config.ts` (adapter origin → sitemap + `loc.url`).
2. Re-run sync so the committed `public/robots.txt` carries the production sitemap URL (it is a generated artifact — don't hand-edit).
3. Make the JSON-LD blocks use the same origin instead of hardcoding `https://modelcomp.com` (see M2) — today the structured data and the canonicals disagree, which is worse than either alone.
4. Add the sitemap-localhost assertion to the post-build guard from C1.

---

## HIGH findings

### H1 — New pages are sitemap-only orphans (internal-link contract missing)

The companion review (`202611expanding.md`) called for an internal-link contract; it was not implemented:
- `V2Header` nav still points at homepage anchors (`/#compare`, `/#methodology`, `/#models`) — verified in the current tree. Nothing links to `/compare/`, `/methodology/`, `/benchmarks/`, `/data/`, or the two `/best-*` pages.
- `V2Footer` links only `/` and `/contact/`.
- The homepage has zero links to any new route; model pages don't link to their compare pages or to `/benchmarks/`.
- There is no crawlable index of the 190 pair pages (the `/compare/` base is an interactive picker; its links are JS-driven).

Sitemap-only discovery is the weakest possible signal for both Google and LLM crawlers, and it wastes the entire pair-page investment.

**Concrete minimal link plan (all plain `<a href>`, SSR-visible):**
1. **Nav:** point "Compare" at `/compare/` and "Scoring" at `/methodology/` (keep homepage anchors as secondary if desired). Add "Benchmarks" → `/benchmarks/` and "Data" → `/data/` (nav or footer).
2. **Footer:** add the four hubs + both `/best-*` intent pages.
3. **Model pages:** a "Head-to-head" block linking the model's top-5 pair pages (`/compare/<canonical-pair>/`) + a link to `/benchmarks/`.
4. **`/compare/` base page:** render a static, crawlable "Popular comparisons" grid of the 190 (or top ~40) pair links below the picker. This is the single highest-value addition — it turns 190 orphans into a connected cluster.
5. **Homepage `CompareSection`:** when two models are selected, show the same "Permanent link: /compare/<pair>/" affordance the compare route already has (L193–200 of the compare route — reuse that pattern).
6. **/best-* pages:** link each listed model to its model page and to 1–2 relevant pair pages.

### H2 — Reversed pair URLs are duplicate content (no canonical consolidation)

`pairKey` correctly generates only alphabetical pairs, but `/compare/<b>-vs-<a>/` still renders 200 with identical content, and `router-head.tsx` emits a **self-canonical** (`loc.url.href`) for it. Anyone who links or types the reversed order creates a duplicate page.

**Fix.** In the compare route's `head()` resolver, compute the canonical order from the parsed slugs and emit an explicit canonical via the head's `link` array:

```ts
const [slugA, slugB] = rawPair.split("-vs-");
const canonical = [slugA, slugB].sort().join("-vs-");
return {
  title: ...,
  link: [{ rel: "canonical", href: `/compare/${canonical}/` }],
  ...
};
```

Ensure `router-head.tsx` skips its default self-canonical when the route head already supplies one (otherwise two canonical tags are emitted). While in `head()`: also apply the `isDecisionModel` filter used everywhere else (currently `MODELS.find` without the filter — minor inconsistency, M13).

### H3 — 1.66 MB references chunk referenced by every model page; payload flab

- `dist/build/q-r0y9PSaO.js` = **1,662,673 bytes** — the full `REFERENCES` map (~10,892 URLs / 217 slugs) captured as a module constant by `ReferencesSection`. It is referenced by every model page's bundle graph (lazy, not modulepreloaded — preloads total ~57 KB — but one drawer open downloads 1.66 MB, and the chunk is a landmine for any future preload/eager change).
- `sourceStem` is emitted per reference but **never used by the UI** — pure wire-weight.
- `temp/inspect-refs.mjs` found **206 per-slug near-duplicate URLs** (trailing-slash / case / www variants). No normalization at harvest time.

**Simplification guidance (in order of value/effort):**
1. **Normalize + dedup at harvest** (`harvestReferences` in `codegen.mjs`): lowercase host, strip `www.`, strip trailing `/` (except root), drop `utm_*`/tracking params, then dedup per slug. Removes the 206 dupes and shrinks every downstream artifact for free.
2. **Drop `sourceStem` from the wire format** (or actually use it — e.g. `title` fallback / grouping). Unused fields in a 1.8 MB generated module are pure cost.
3. **Compact wire format:** positional tuples `[url, title]` instead of repeated object keys (the repo already uses this pattern in `scores.generated.ts`).
4. Optional, if still heavy: split references per slug via lazy `import.meta.glob` so a model page only ever loads its own citations.

Also fix the harvester's `trimUrl` edge (M8) while touching this code.

---

## MEDIUM / minor findings

- **M1 — Hardcoded "2026" in `/best-*` titles.** Both intent pages bake the year into `<title>`/H1. The repo already has `asOfDate()` (compare route) deriving a month/year from the freshest `verified` date — reuse that pattern (or drop the year). Hardcoded years rot silently and contradict the PRD's "dated, honest claims" principle.
- **M2 — JSON-LD hardcodes `https://modelcomp.com`** (best-* ItemList urls, /data citation, scores endpoint `citation`) while canonicals/sitemap follow `SITE_ORIGIN`. One origin source of truth: export it from a shared generated constant (sync already knows it) and consume everywhere.
- **M3 — `/methodology/` links to `/promotions/` which does not exist** (not in the plan's 10 routes) → 404. Either build the page or remove/redirect the link. A hub page shipping a dead link undermines the authority-hub intent.
- **M4 — `claimantOf` on `/best-free-llm-for-coding/` picks the first `pricingLinks` entry**, which may be a paid tier — the "free" claim can cite a paid pricing page. Prefer an entry explicitly marked free, else fall back to `officialUrl`, and label the claim accordingly.
- **M5 — Two sources of truth for benchmark vocabulary.** `BENCHMARK_DESC` + `PRIORITY_ORDER` are hardcoded in `src/routes/benchmarks/index.tsx` while `scripts/lib/benchmarks.mjs` owns `PRIORITY_BENCHMARKS` (31 entries, AA-harness rules). They will drift. Move descriptions/order into the sync-generated `benchmarks.generated.ts` (or a shared `src/data` module) so the hub renders exactly what the pipeline validates.
- **M6 — Latent SPA staleness on pair-to-pair navigation.** `cmpA`/`cmpB` are `useSignal`s initialized once from `loc.params.pair`. Qwik reuses the component on param-only client navigation, so clicking from one pair page to another updates the URL but keeps the old models in the selectors/table/verdict. Today this is masked because nothing links between pair pages (H1) — fixing H1 will expose it. Add a `useTask$` tracking `loc.params.pair` that re-syncs `cmpA`/`cmpB` (and resets `cmpC`/`source` if desired).
- **M7 — `generateVerdict` is exported but untested.** It's a pure function and the repo has a zero-dep test suite — add cases: noise-floor boundary (±1.0 exactly), tie wording, cost-efficiency clause, null on same/missing model. Cheap, high-value regression cover for the anti-thin-content engine.
- **M8 — Harvester `trimUrl` strips trailing `)`**, which breaks Wikipedia-style URLs legitimately ending in `)` (e.g. `…_(disambiguation)`); the bare-URL pass also skips URLs inside parentheses via its lookbehind. Handle balanced trailing parens (strip `)` only when unbalanced) — standard link-extraction practice.
- **M9 — /data scope mismatch** (see C2): page copy counts generative models; exports include the decision model.
- **M10 — JSON-LD placement.** /benchmarks emits its Dataset JSON-LD inline in the body; PRD specified `DocumentHead`. Google accepts body JSON-LD, but head placement via `head()` is cleaner and consistent with the other routes.
- **M11 — No `og:image`** in `router-head.tsx`. Social/AI-card previews degrade; a single static share image is a quick win.
- **M12 — Cosmetic sloppiness in `scripts/sync-data.mjs`:** broken indentation at several touched lines (66–67, ~700, ~704, ~919, ~938–940). Re-indent to match the file.
- **M13 — `head()` in the compare route doesn't filter decision models** (see H2 snippet note).

---

## What was done well (keep)

- **Pipeline quality:** `harvestReferences` correctly excludes `.excluded`, `average.md`, `README.md`; benchmarks aggregation keeps AA-prefixed harnesses as separate keys, enforces the 2-rater gate, and sorts deterministically. 685 tests pass.
- **Verdict engine:** ±1.0 noise floor, top-2 deltas, cost-efficiency clause, dataset-derived `asOfDate()` stamp — genuinely anti-thin-content, not boilerplate.
- **Canonical pair discipline:** alphabetical `pairKey`, decision-model exclusion from the Top-20 pool, deterministic tie-break by slug.
- **References drawer:** SSR'd (citations visible to crawlers without JS), `rel="noopener noreferrer nofollow"`, empty-state returns null, placed below the evidence table as specified.
- **robots.txt AI-bot stanzas** and CC BY 4.0 licensing/citation copy on /data.
- **Reusing `CompareSection` wholesale** on the compare route keeps one comparison UI contract instead of two diverging implementations.
- The endpoint *idea* for scores downloads was reasonable (less sync surface) — it just doesn't work in this toolchain; see C2 for the simpler replacement.

---

## Prioritized fix plan

| # | Fix | Effort | Unblocks |
|---|---|---|---|
| 1 | C1: `+ "/"` in `onStaticGenerate` pair param | 1 line | 154 missing compare pages |
| 2 | C2: sync-emit `public/data/scores.json`/`.csv`, delete dead endpoints | small | /data downloads (404s) |
| 3 | C3: set `SITE_ORIGIN` (deploy + local), re-sync robots | config | canonicals/sitemap/robots |
| 4 | C1 guard: post-build `check-dist` assertions (191 dirs, downloads exist, no localhost) | small | permanent Task-7 compliance |
| 5 | H1: nav/footer/model-page/compare-index link plan | medium | the actual SEO payoff |
| 6 | H2: canonical consolidation for reversed pairs (+ M13) | small | duplicate content |
| 7 | M6: `useTask$` param re-sync (do together with H1) | small | SPA correctness |
| 8 | H3: harvest normalization + dedup, drop `sourceStem`, tuple format | medium | 1.66 MB chunk, 206 dupes |
| 9 | M1–M5, M7–M12 | small each | polish / drift prevention |

## Validation checklist (run after fixes)

```powershell
pnpm sync && pnpm build.types:direct && pnpm build:direct
```

Then verify (or let the new `check-dist` script assert):
1. `(Get-ChildItem dist\compare -Directory).Count` → **191** (190 pairs + base).
2. `dist\data\scores.json` and `dist\data\scores.csv` exist and parse.
3. `Select-String dist\sitemap.xml -Pattern 'localhost'` → **0 matches** (with `SITE_ORIGIN` set).
4. `public/robots.txt` Sitemap line → `https://modelcomp.com/sitemap.xml`.
5. Spot-check a dotted pair page (`dist/compare/claude-opus-5.5-vs-gemini-3.1-pro/index.html`) exists with correct `<title>` and a single canonical.
6. `pnpm test` stays green (add the M7 verdict tests).

## Appendix — reproduction scripts (git-ignored `temp/`)

- `temp/inspect-ssg.mjs` — calls the compiled `onStaticGenerate` → prints 191 params / 20 slugs (proves the handler is correct).
- `temp/inspect-ssg3.mjs` — real `requestHandler` probes: dotted pair **with** slash → 200; **without** slash → 301 (proves the drop mechanism).
- `temp/inspect-refs.mjs` — per-slug URL dedup audit → 206 slash/case near-duplicates.