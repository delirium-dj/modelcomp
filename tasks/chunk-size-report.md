# Chunk-size warning analysis (`Some chunks are larger than 500 kB`)

Date: 2026-10-10. Trigger: stock Vite/Rollup warning during `pnpm build`
(client step). The build itself succeeds — this is a warning, not an error.

## What the message means

- It comes from Vite core, not Qwik: any emitted chunk whose **minified**
  size exceeds `build.chunkSizeWarningLimit` (default 500 kB) is listed.
  The metric is minified bytes, **not** gzip/transfer bytes.
- Qwik already code-splits aggressively (one `q-*.js` per route/component —
  `dist/build/` holds ~40 chunks, the next-largest after the offender is
  50 kB). Exactly one chunk trips the limit, so this is a data-payload
  problem, not a framework-splitting problem.

## The offending chunk (measured, not guessed)

| Fact | Value |
|---|---|
| Chunk | `dist/build/q-5m3Nkozx.js` — **581,593 B minified** (~568 kB) |
| Transfer size | **94,936 B gzipped** (~93 kB) — repetitive keys compress well |
| Content proof | Chunk contains model slugs (e.g. `laguna-s-2.1`) and the full score table |
| Source module | `src/data/scores.generated.ts` — **582,350 B** on disk, ~5,227 lines |
| Entries | ~4,888 scored-file entries × 7 numbers (150+ models × ~30 raters) |

Import chain that forces it into one chunk (`src/data/models.ts:13`
statically imports the whole table, and every consumer pulls `models.ts`):

```text
scores.generated.ts (582 kB, one module, static export)
  → src/data/models.ts:13 (`import { GENERATED_SCORES }`)
    → CompareSection.tsx:3, ModelCards.tsx:3, routes/index.tsx:7,
      routes/model/[slug]/index.tsx
      → Rollup: single shared client chunk q-5m3Nkozx.js (568 kB)
```

Why Rollup cannot split it: a static `import` of a single module gives the
bundler no split point. `vite.config.ts` sets no `manualChunks` and no
`chunkSizeWarningLimit`, so defaults apply (checked 2026-10-10).

Emitted shape per entry (`scores.generated.ts:15`, via `renderScoresFile`
in `scripts/lib/codegen.mjs`):

```ts
"Big_Pickle.md": { tool: 70, reasoning: 75, context: 95, multimodal: 92, coding: 76, cost: 89, overall: 82 },
```

The seven key names (`tool`, `reasoning`, …) are repeated verbatim in all
~4,888 entries — roughly 60% of the 582 kB is repeated key strings, not
numbers. Growth is linear: every new findings file adds ~120 B, every new
model × every rater multiplies it.

## Real impact (not just the warning)

1. **Warning-only today.** Build is green; 93 kB gzip transfer is unremarkable.
2. **Parse/compile cost is the true tax.** ~568 kB of minified JS must be
   parsed on the client, and it grows with the dataset (which grows weekly).
3. **Qwik softens the blow.** Resumability means this chunk loads on
   interaction, not necessarily before first paint — but the homepage
   `CompareSection` needs it as soon as the user touches the source selector,
   so it is effectively required for the core interaction.
4. **It will get worse.** At current dataset growth the chunk gains tens of
   kB per research wave; gzip masks transfer size but not parse cost.

## Options (ranked)

### 1. Tuple-ize the emitted scores (recommended first step)

Change the codegen emitter (`renderScoresFile` in `scripts/lib/codegen.mjs`)
to emit positional tuples with one shared key order, and adjust hydration in
`src/data/models.ts:84-92` to map positions back to names:

```ts
// before (~120 B/entry): "Big_Pickle.md": { tool: 70, reasoning: 75, ... }
// after  (~45 B/entry):  "Big_Pickle.md": [70, 75, 95, 92, 76, 89, 82],
```

- Effect: ~55–60% smaller module → chunk drops to roughly **220–250 kB**,
  back under the limit with headroom for ~2× dataset growth.
- Effort/risk: small. Codegen-only change, no UI or workflow change;
  `scripts/lib/codegen.test.mjs` already locks the emitter (extend it for
  the tuple shape), then `pnpm sync && pnpm build.types && pnpm build`.
- Note: keep the `GeneratedScores` interface for the hydrated type; only the
  wire format becomes positional, with the order documented in one place.

### 2. Split averages from per-source detail + dynamic `import()`

The homepage/compare default view needs only `average.md` numbers (~150
models × 7 numbers ≈ tens of kB). Full per-source detail is only needed when
a non-Average results source is selected or on `/model/<slug>/` pages.

- Sync emits two modules (`scores-avgs.generated.ts`, `scores-full.generated.ts`);
  `models.ts` imports averages statically and `import()`s the full table on
  demand (Qwik `useResource$` / `useTask$`).
- Effect: initial chunk shrinks to averages + UI (~100 kB); full table loads
  only on interaction. Largest structural win short of server-loading.
- Effort/risk: medium. Touches `models.ts` hydration, `ModelSelect` /
  `CompareSection` loading states, and the sync emitter + tests.

### 3. Server-load per-route data via `routeLoader$` (structural, later)

This is an SSG site: prerender can consume the score table server-side so
per-model pages ship no table bytes to the client at all. Only the
interactive compare section needs client-side numbers (combine with option 2
for that). Largest effort; do only if option 1 + 2 stop being enough.

### 4. `manualChunks` (organizational, not a fix)

Pinning the data module to a named chunk (`vendor-data`) stabilizes hashing
and caching across builds, but changes zero bytes. Worth adding alongside
option 1 for cache hygiene; useless alone.

### 5. Raise `chunkSizeWarningLimit` (stopgap only)

Silences the warning with one config line and fixes nothing — parse cost and
growth remain. Acceptable only as a documented temporary measure with a
revisit trigger (e.g. "revisit when chunk exceeds 750 kB"), never as the
resolution.

## Recommendation

Do **option 1 now** (small, deterministic, preserves the zero-hand-edit
`pnpm sync` data flow), keep **option 2** queued for when the tuple-ized
chunk approaches the limit again, and do **not** apply option 5 alone.
Verify with: rebuild → largest `dist/build/q-*.js` < 500 kB minified →
`pnpm test` green (emitter tests updated) → spot-check hexagon values on
`/` and one `/model/<slug>/` page from `dist/`.
