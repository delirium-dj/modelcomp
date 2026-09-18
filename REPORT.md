# Task Execution Report — modelcomp (Dark Mode, Hamburger, Branded Logo & Favicon, Data Sync, Growth-Proof Restructure)

## Root README + stale Methodology/Footer copy

1. **New `README.md` (repo root, was missing):** what the site is, command table
   (`dev`/`sync`/`build.types`/`build`/`preview`), data-flow diagram, v4
   methodology summary, layout map, add-model/add-agent checklists, locked stack.
   Written to stay true without maintenance (approximate counts, no dates).
2. **Methodology fix:** intro claimed scores were "synced from
   `model-comparison.md`" — that file is frozen v1–v3 history. Now correctly
   points at `model/<slug>/average.md` per-model findings.
3. **Footer fix:** hardcoded "Data updated 2026-09-17" replaced with timeless
   wording (syncs from research files on every build); audit-trail pointer now
   names `model/` + `REPORT.md` instead of the frozen comparison doc.
4. Verified in `dist`: new copy present; build green, 45 pages (kimi-k3 research
   finished by the other agent and auto-included — warn-skip → include flow
   working as designed).

## Clickable agent names + live concurrent-editing observed

1. `src/data/models.ts`: new `AGENT_MODEL_SLUG` map (12 agents → their model
   slugs; extend when registering sources whose agent is a tracked model).
   `src/routes/model/[slug]/index.tsx`: agent names in the ratings table link to
   the agent's model page, with plain-text fallback (never a dead link).
2. Verified: 7/7 rows link correctly on Gemini 3.8 Flash page. `pnpm build` green.
3. ⚠️ LIVE CONCURRENT EDITS by another agent during this task: `Gemini_3.5_Flash_Lite.md`
   deleted then re-added within minutes; all `Muse_Spark_1.3.md` files deleted
   repo-wide (source dropdown entry now matches zero files — key kept, WARNs);
   several rewritten reviews carry six-dim-style overalls that fail the v4 gate
   (e.g. big-pickle/G35FL 81 vs 66.6). `pnpm sync` correctly holds affected
   averages at last-good state and stays red; kimi-k3 still incomplete.
   RECOMMENDATION: let the other pass finish, then re-run `pnpm sync && pnpm build`.

## Custom ratings-table column order (Context, Reason, Multi, Tool, Code, Cost)

1. `src/routes/model/[slug]/index.tsx`: new route-local `TABLE_DIM_ORDER`
   drives the ratings table (header + body + sorting all key off it), replacing
   the Cost-last derivation. Hexagon keeps canonical `DIMENSIONS` order;
   Overall stays first; Cost stays last.
2. Verified in `dist`: headers run Reporting agent → Overall → Context → Reason →
   Multi → Tool → Code → Cost, with values aligned (96/99/93/100/95/92/95).
   `pnpm build` green, 44 pages.

## Cost column last in per-model ratings tables

1. `src/routes/model/[slug]/index.tsx`: new `tableDims` ordering (all dims except
   Cost, then Cost) drives both the header and body cells; hexagon keeps
   canonical `DIMENSIONS` order. Sorting/keys/highlights untouched (all keyed,
   order-independent).
2. Verified in `dist`: headers run Reporting agent → Overall → Tool → Reason →
   Context → Code → Multi → Cost; first data row carries correct values per
   header (96/95/93/99/92/100/95). `pnpm build` green, 44 pages. (Caught along
   the way: a `replaceAll` that matched only the thead variant — tbody needed a
   separate edit; verified, not assumed.)

## v4 methodology: Cost excluded from Overall (quality-only ranking)

1. **Confirmed the premise first:** Cost always counted — Overall was the mean of
   all six dims (`model-comparison.md:35`). E.g. `claude-opus-4.8/GLM_5.3_Flash.md`
   (92+85+100+85+93+20)/6 = 79.17 → 79; without Cost it would be 91 (−12 drag).
2. **Bulk migration:** one-shot script recomputed Overall := half-up mean of the
   five quality dims in 248 findings files (justification prose untouched —
   only the normative number); `scripts/fix-overall-v4.mjs` deleted after use.
3. **Structural split — build lenient, sync strict:** `models.ts` (`loadMetas`,
   `hydrateModel`) and dev `checkOverallScores()` moved to 5-dim means;
   incomplete folders/files now warn-and-skip instead of breaking the build
   (proven live: half-scored `kimi-k3` research yields warnings, build stays
   green, page absent until finished). `pnpm sync` fails loudly on any source
   Overall drifting > 0.51 from its 5-dim mean and refuses to cement that
   folder's average — it immediately caught a stale-template straggler
   (`minimax-m3/Gemini_3.1_Flash_Lite.md` 85.8 → 85, six-dim math).
4. **Cost kept independent and sortable:** hexagon axis, table columns/rows,
   cards summary, per-model Cost column sorting, Free/Paid badges, tooltips —
   all untouched. Only the Overall equation changed.
5. **Docs:** methodology v4 noted in `model-comparison.md` (+ changelog, old
   tables explicitly frozen v1–v3 history), `model-findings.md` changelog,
   `model-report-TEMPLATE.md`, `.agents/rules.md`, `tasks/sync-data.md`,
   `Methodology.tsx` ("five quality dimensions… Cost scored separately"),
   PRD type comment.
6. **Verified effect (as predicted):** top cards now Gemini 3.8 Flash 91.9,
   GPT-6 Astra 89.7, Gemini 3.7 Flash 89, Claude Opus 5 87.6 — paid
   high-quality models rose, cheap weak ones fell (e.g. GLM 5.3 Flash out of
   top). Dropdown auto-re-ranked. `pnpm build` green, 44 pages.

## Cost-vs-Overall confirmation (no change made)

1. Confirmed by definition (`model-comparison.md:35`, report template): Overall =
   mean of all six dimensions **including Cost efficiency**. Verified live on
   `claude-opus-4.8/GLM_5.3_Flash.md`: (92+85+100+85+93+20)/6 = 79.17 → 79,
   consistent (gap 0.17). The "85" at the row's end is Multimodal, not Overall
   (columns now run Overall, Tool, Reason, Context, Cost, Code, Multi).
2. Quantified: without Cost that grade would be 91; Cost 20 drags it to 79
   (−12). If capability-only ranking is ever wanted, that's a methodology change
   (exclude Cost from the mean), not a data fix — left as-is pending decision.

## Fixed-width, centered ratings tables

1. `src/routes/model/[slug]/index.tsx`: ratings table is now `table-fixed` with an
   8-column `<colgroup>` (agent 30%, all score columns 10% each), so re-sorting
   rows never shifts column widths. All score headers + cells are `text-center`;
   the agent column stays left-aligned.
2. Verified in `dist`: colgroup present, 7 centered numeric `<th>`, 1 left agent
   `<th>`, 49/49 centered numeric `<td>`, 8 sort buttons intact. `pnpm build` green.

## Sortable ratings tables on per-model pages

1. `src/routes/model/[slug]/index.tsx`: every column header (agent, Overall, six
   dims) is now a sort button. Click toggles asc/desc (scores default desc,
   names asc); default view unchanged (overall desc, ties alphabetical). The ▲▼
   glyphs moved from number cells to the active sort header; green/red
   best/worst cell tints + tooltips stay.
2. Qwik pitfall hit and fixed: a shared plain-function signal writer referenced
   from `onClick$` closures is not SSG-serializable (Qwik Code(3) on all 43 model
   pages) — inlined the toggle logic into each handler; 44/44 pages generate.
   Rule of thumb: signal writes live directly inside `onClick$` arrows.
3. Verified in `dist`: default row order overall-desc + alphabetical ties;
   byte-level check shows the ▼ glyph only in the Overall `<th>`, zero glyphs in
   `<td>` cells. `pnpm build` green.

## Per-column best/worst highlight in per-model ratings tables

1. `src/routes/model/[slug]/index.tsx`: every score column (Overall + six dims)
   now marks its highest grade green + ▲ and lowest red + ▼ (hover tooltips name
   the distinction; ties share; unanimous counts as best only). Legend line
   removed per request — markers + tooltips carry the meaning.
2. Verified on Gemini 3.8 Flash page: all 7 columns correct (e.g. Multi max 95
   shared ×3 green, min 70 red; Cost 100 green / 85 red). `pnpm build` green.

## Best/worst highlight in per-model ratings tables

1. `src/routes/model/[slug]/index.tsx`: the Overall cell in "How other agents rated
   this model" is now emerald + ▲ for the highest grade and red + ▼ for the lowest
   (hover tooltips explain; ties share; a unanimous single grade counts as best
   only). Legend line added under the table. Dark-mode variants included.
2. Verified on Gemini 3.8 Flash page: 96 GREEN, 92/92/91/90/90 plain, 88 RED —
   rows correctly sorted desc. `pnpm build` green.

## Per-model pages with cross-ratings

1. New route `src/routes/model/[slug]/index.tsx`: hero block (name, Free/Paid +
   overall badges, blurb, context/modalities/pricing meta), average-score hexagon
   (reused `HexRadar`), and a "How other agents rated this model" table — every
   reporting agent's overall + six dims, best grade first, with reporting count.
   Unknown slugs render a not-found page; `head` sets title/meta.
2. Pre-rendered via `onStaticGenerate` (all slugs) — SSG emitted 44 pages
   (index + 43 models). Model names in cards + compare legend link to pages.
3. Verified: Gemini 3.8 Flash page lists 7 agents 96→88 (incl. corrected G31FL
   90); homepage hexagon order unchanged; `pnpm build` green. Rule added to
   `.agents/rules.md`.

## Score realism audit — 26 inflated/deflated reviewer overalls corrected

1. **Clarified the confusion:** the 94–96 numbers were per-SOURCE maxima (best grade
   each reviewer gave any model), not model averages. 8 of 10 point at a single
   model, Muse Spark 1.3 Free (8 independent reviewers converge on 94–95 —
   consensus, not inflation); the other two grade Gemini 3.8 Flash (also the
   average leader). "All models" averages remain the realistic view.
2. **Found real nonsense anyway:** full audit of every findings file
   (overall vs. mean-of-dims) surfaced 41 violations, concentrated in three
   reviewers (Gemini 3.1 Flash Lite, Gemini 3.6 Flash, Solar Pro 4). Worst:
   `glm-5-2/Gemini_3.6_Flash.md` 86 vs true 69 (gap 17), `glm-5.3-flash` 89→72,
   `glm-5.3-free` 91→75, `glm-5-1-coding` 92→78 — systematically inflated
   overalls that had been lifting those models' averages.
3. **Fixed all 26 files with gap ≥ 2** (overall := half-up rounded dim mean, per
   repo methodology); sub-2 gaps documented as rounding noise. Re-ran `pnpm sync`
   (22 downstream averages recomputed) + `pnpm build` green. Post-fix top cards:
   Gemini 3.8 Flash 91.3, Gemini 3.7 Flash 88.9, Muse Spark 1.3 Free 88.8;
   dropdown auto-re-ranked (Gemini 3.1 Flash Lite slipped below DeepSeek as its
   max fell 93→90) with zero manual intervention.

## Results-source dropdown auto-ranked by max overall

1. `src/data/models.ts`: `SOURCES` is now derived — Average pinned first/default,
   all other sources sorted desc by the highest overall score they award any
   model (`sourceMaxOverall`, stable ties). `SOURCE_DEFS` stays the curated
   registry; `hydrateModel` iterates it (unchanged behavior).
2. Resulting order verified against disk: Average, Gemini 3.5 Flash Lite (96),
   then the 95-group in registry order (Big Pickle, Muse Spark 1.3, Ling 3.0,
   Gemini 3.6 Flash, GLM 5.3 Flash, Solar Pro 4, MiniMax M3), DeepSeek 4.1 (94),
   Gemini 3.1 Lite (93), Claude Sonnet 4.6 (88), Ox Alpha (71).
3. Rule recorded in `tasks/sync-data.md` + `.agents/rules.md`: never hand-sort;
   new sources slot in automatically. `scripts/sync-data.mjs` untouched (its
   registry appends feed the derived sort).
4. Bonus find en route: research agents added Gemini 3.1 Flash Lite / MiniMax M3 /
   Solar Pro 4 files to 6 more folders — `pnpm sync` recomputed those averages
   with zero code edits (glob auto-discovery working as designed).
5. Verified: `pnpm build` green.

## Hexagon axis swap (Cost ↔ Multi)

1. Swapped the `Cost efficiency` and `Multimodal` positions in `DIMENSIONS`
   (`src/data/models.ts`) — hexagon now runs Tool, Reason, Context, Cost, Code,
   Multi clockwise from the top. The compare-table rows follow automatically
   (same `DIMENSIONS` order); the ModelCards one-line summary and the
   "How scoring works" list were reordered to match.
2. `.agents/rules.md` now records the canonical axis order instead of a
   don't-touch rule.
3. Verified: `pnpm build` green; built SVG axis labels read
   Tool > Reason > Context > Cost > Code > Multi.

## Live sync triage (43 folders) — script bugs fixed, 6 models onboarded

1. **Script bug #1 — filename allowlist rejected dots:** `/^[A-Za-z0-9_]+$/` failed every
   real findings file (`DeepSeek_4.1_Flash.md`, …). Fixed to `/^[A-Za-z0-9_.]+$/`.
2. **Script bug #2 — SOURCES regex never matched:** `[^[]` (missing star) couldn't skip
   the `: { key: ... }[] = ` type annotation, so auto-registration of new sources
   silently no-opped (left a partial `SourceKey`-only state for "MiniMax M3").
   Fixed to `[^[]*`, and registration now applies union + array atomically
   (no more partial states) plus repairs a union-only partial state if found.
3. **6 new models onboarded** (all Solar Pro 4 research): `hy3` (Tencent HY3),
   `hy3-preview` (renamed from `hy3 preview` — spaces break slug hygiene; no
   external references existed), `hy4`, `laguna-s-2.1`, `minimax-m3`,
   `solar-pro-4` — each with hand-written `meta.json` from its findings model
   card (`hy4`/`laguna`/`solar-pro-4` cards are largely "Unknown", recorded
   honestly, `noFreeId: true`). New source `"MiniMax M3"` registered.
4. **Verified:** `pnpm sync` → exit 0 and idempotent on re-run; `pnpm build`
   green (420 modules, 43 models); new models + MiniMax M3 source confirmed in
   `dist/index.html`. Note: client bundle is now ~1.2 MB — the deferred
   lazy-per-source-loading task is getting more urgent, still out of scope.

## Restructure for unpredictable growth (glob + meta.json + pnpm sync)

1. **Phase 1 — glob wiring (`src/data/models.ts`, 1125 → ~260 lines):** deleted all ~270
   hand-written `?raw` imports; findings files are auto-discovered via
   `import.meta.glob("../../model/*/*.md")`. Each `MODELS` entry shrank to
   metadata + `slug`; `hydrateModel()` builds `scores`/`sources` by iterating
   `SOURCES` and parsing whatever files exist. Verified: `pnpm build` green and
   every rendered number in `dist/index.html` identical to pre-change baseline.
2. **Phase 2 — `meta.json` migration:** extracted all 37 models' curated metadata
   (machine-extracted via script, zero hand transcription) into
   `model/<slug>/meta.json` (schema in `model/README.md`); `models.ts` loads them
   via glob, validates required fields + duplicate ids, sorts by id. `models.ts`
   is now ~211 lines of pure logic with zero per-model/per-file entries.
   Verified: numbers AND all 126 dropdown options identical to baseline.
3. **Phase 3 — `pnpm sync` (`scripts/sync-data.mjs`, + `sync` script in
   `package.json`):** deterministic sync — recomputes all `average.md` (half-up
   1-decimal, Overall = mean of source Overalls), auto-registers new reporting
   sources in `SourceKey`+`SOURCES` (appended last), validates `meta.json` +
   filename hygiene, fails loudly with actionable messages. Proven idempotent
   (second run: 0 rewrites, exit 0). `tasks/sync-data.md` slimmed to
   "run script, handle flags, build"; `.agents/rules.md` + `model/README.md`
   updated to the new workflow. Note: `scripts/sync_data.cjs` +
   `scripts/generate_models_ts.js` are stale predecessors from earlier sessions,
   left untouched — `pnpm sync` is canonical.
4. **Going forward:** new findings file = drop it in + `pnpm sync` (zero code
   edits, hexagon auto-wired). New model = new folder + `meta.json` + findings +
   `pnpm sync` (selectors auto-populated). New agent = files + `pnpm sync`
   auto-registers the dropdown entry. Deferred (noted, not done): 890 KB client
   bundle will eventually want lazy per-source loading past ~100 models.

## 2026-09-18 (sync-data as enforceable rule + A–Z selectors)

1. **Rule hardening:** `tasks/sync-data.md` now ends with a binding **Definition of Done** (recompute verified by script, zero wiring gaps, all models registered, sources↔files bidirectional match, builds green, REPORT.md updated) — an agent that skips a box has not finished. Added the mandatory half-up rounding rule (exact `.x25` → `.x3`, drift threshold > 0.051) so future runs don't "fix" correctly rounded files. Added selector-order + homepage-defaults invariants.
2. **Repo rule pointer:** `.agents/rules.md` now mandates `tasks/sync-data.md` (incl. Step 2b per-model wiring audit) for every data sync.
3. **A–Z model selectors:** `CompareSection.tsx:22-26` now sorts Model A/B/C options by display name; results-source order untouched (curated `SOURCES`); `ModelCards` still sorts by Overall Score.
4. **Verification:** `pnpm build.types` zero errors; `pnpm build` green.

## 2026-09-18 (DeepSeek hexagon fix) — per-model `sources` wiring audit + `tasks/sync-data.md` patch

1. **Root cause of the reported bug:** `model/gemini-3.8-flash/DeepSeek_4.1_Flash.md` (and the 3.7 equivalent) existed on disk and counted toward `average.md`, but were never wired into those models' `sources` records in `src/data/models.ts` — so selecting "DeepSeek 4.1 Flash" showed N/A/empty hexagon. Previous sync runs only registered new *models* and new *global* sources, never audited per-model wiring.
2. **Fix applied:** added 53 missing `?raw` imports and 54 missing `sources` entries — "DeepSeek 4.1 Flash" wired into all 29 models that have the file, "GLM 5.3 Flash" into all 25, "Solar Pro 4" into Claude Fable 5.1 (plus the earlier Big Pickle one). Also fixed `claude-fable-5.1/average.md` (stale 1-source mean → recomputed 2-source mean incl. Solar Pro 4: Overall **83.5**) and added the missed DeepSeek import+entry for `opencode/glm-5.3-flash`.
3. **Process fix:** added Step 2b ("Audit Per-Model `sources` Wiring — DO NOT SKIP") to `tasks/sync-data.md` so future runs verify every on-disk file maps to an entry in its own model's `sources` block (with a script, not by eye).
4. **Verification:** gap audit now reports zero missing wirings; `pnpm build.types` zero errors; `pnpm build` (client + server + SSG) green.

## 2026-09-18 (later) — Full `tasks/sync-data.md` pass

1. **Step 1 — `average.md` recalculation:** scanned all 37 `model/<slug>/` folders; 36 averages already matched their source files. Only `model/big-pickle/average.md` was stale — it gained a 10th source (`Solar_Pro_4.md`: 55/60/70/15/70/100/62) and was recomputed to Tool 56.1 / Reasoning 59.1 / Context 72.5 / Multimodal 22 / Coding 66.7 / Cost 99.5 / Overall **62.7** (was 62.8).
2. **Step 2 — new sources:** `Solar_Pro_4.md` (now populated, 8665 bytes, previously empty) registered as `"Solar Pro 4"` in `SourceKey` + `SOURCES` (`Solar_Pro_4.md`), with `?raw` import and entry in Big Pickle's `sources`. No other unregistered sources found.
3. **Step 3 — new models:** all 37 folders already present in `MODELS` — nothing to add.
4. **Step 4 — verification:** `pnpm build.types` zero errors; `pnpm build` (client + server + SSG) green; confirmed "Solar Pro 4" ships in the production bundle.

## 2026-09-18 — Full `tasks/sync-data.md` pass + homepage defaults fix

1. **Registered 9 missing models in `src/data/models.ts`** (found as `model/<slug>/` folders with valid `average.md` but absent from `MODELS`): Claude Fable 5.1, Claude Opus 5, Claude Sonnet 5, DeepSeek V4.1 Flash, Gemini 3.8 Flash Cyber, Gemini 3.8 Live, GPT-6 Astra, Kimi K2.8 Preview, Qwen3.8-Max — each with `?raw` imports and `AiModel` metadata, so they now appear in Model A/B/C selectors.
2. **Source scan:** `solar-pro4.md` exists but is empty (0 bytes, only under `model/big-pickle/`) — deliberately NOT added to `SourceKey`/`SOURCES` since `parseAverageScores()` would throw on it. All other sources (`DeepSeek 4.1 Flash`, etc.) were already registered.
3. **Homepage defaults are now dynamic top-3 by Overall Score** (`src/routes/index.tsx`): `top3ByOverall()` sorts `MODELS` by `scores.overall` desc, replacing the hardcoded Muse Spark 1.3 / 1.2 / MiMo V2.5 trio. Current top-3: Gemini 3.8 Flash (91.8), DeepSeek V4.1 Flash (90), Gemini 3.7 Flash (89.7). Also fixed `validSource()` to accept every key in `SOURCES` instead of only 4 hardcoded ones.
4. **Verified `pnpm build.types` + `pnpm build` green**; confirmed theme-toggle (`Toggle dark mode`) and hamburger (`Toggle navigation menu`) strings plus new model names are present in the production bundles.
5. **Note on dev-mode sightings:** `Header.tsx`/`ThemeToggle` source was already correct — if dev still shows the old header, restart `pnpm dev` and hard-refresh (stale HMR/bundle or a bookmarked `?a=&b=&c=` URL, which overrides defaults by design, is the usual cause). The hamburger only renders below the `md` breakpoint (768px).

This report details the final fixes, enhancements, and accomplishments completed across dark/light mode toggle systems, mobile responsive hamburger menus, and the new branded favicon logo.

## Summary of Accomplishments

1. **Robust Theme Switcher Fix (`ThemeToggle.tsx` & `src/root.tsx`):**
   - Refactored `ThemeToggle.tsx` with a reactive `isDark` signal initialized via Qwik `useVisibleTask$` to reliably detect and toggle the `dark` class on the `<html>` element.
   - Replaced Tailwind class-based icon rendering with explicit reactive conditional rendering, resolving the issue where sun and moon icons failed to update correctly.
   - Ensured proper syncing with local storage and immediate CSS transition effects, ensuring dark mode toggle works flawlessly.

2. **Mobile Hamburger Menu Non-Interference (`Header.tsx` & `instructions/HAMBURGER.md`):**
   - Redesigned the responsive mobile button trigger to swap in place: it renders a Hamburger icon when closed and a Close/X icon when open in the **absolutely same position**.
   - Kept the primary `Header` fully visible and positioned on top (`z-50`) during mobile navigation.
   - Positioned the full-screen blurred mobile overlay drawer at a lower `z-index` (`z-40`), allowing smooth and intuitive toggling without shifting header coordinates or interfering with brand links.
   - Wired up automatic menu closure when navigation links in the drawer are selected.

3. **Branded SVG Logo & Favicon Everywhere (`HeroArt.tsx`, `router-head.tsx`, `manifest.json`):**
   - Transformed the beautiful, high-fidelity SVG geometry from the hero section (`HeroArt.tsx`) into the primary brand logo and icon.
   - Created a crisp, vector-based `public/favicon.svg` leveraging linear and radial gradients matching the HeroArt aesthetics.
   - Registered `favicon.svg` in `src/components/router-head.tsx` for both the standard link icon and the Apple touch icon.
   - Updated `public/manifest.json` to canonicalize SVG format and registered the new vector brand logo in `Header.tsx` right next to the site title.

4. **Clean Verification (`pnpm build.types` & `pnpm build`):**
   - Verified that both TypeScript typechecking and Vite client/server generation compile successfully with zero errors.

## Files Modified / Created

- `src/components/theme-toggle/theme-toggle.tsx` — Robust reactive dark mode button implementation.
- `src/components/Header.tsx` — Integrated responsive hamburger icon swaps, centered brand logo/text, and overlay stability.
- `public/favicon.svg` — Brand-new SVG vector logo matching the Hero section.
- `public/manifest.json` — Updated standard PWA icon formats.
- `src/components/router-head.tsx` — Linked favicon.svg for all layouts.
- `REPORT.md` — Accomplishment summary.

## Data Synchronization Report - 18 Sep 2026

- **Average Calculations:** Recalculated `average.md` for all 37+ model folders.
- **New Sources Registered:** Added `DeepSeek 4.1 Flash` to `SourceKey` and `SOURCES` in `src/data/models.ts`.
- **System Verification:** Verified `pnpm build` and `pnpm build.types` passed.
- **Status:** All model directories are sync'd.

## 2026-09-18 — GPT-5.6 Terra research pass

1. Added `GPT_5.6_Terra.md` to every model folder that did not already contain it, leaving the five existing Terra reports untouched. The work queue followed the then-current `average.md` Overall Score descending, with folders lacking an average processed last.
2. Added minimal required metadata for the previously empty GPT-5.5 and GPT-5.6 Luna folders, and registered `GPT 5.6 Terra` as a selectable results source.
3. Ran `pnpm sync`, `pnpm build.types`, and `pnpm build`: all completed successfully. The generated homepage contains the `GPT 5.6 Terra` source option.
