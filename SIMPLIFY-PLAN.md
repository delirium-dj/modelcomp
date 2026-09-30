# Simplify the Source-Key / Agent-Slug / Label Pipeline

> **Goal:** reduce the number of moving parts without breaking permanence rules,
> scoring, or the existing URL scheme.

---

## The problem today

The system that connects a findings **filename** (`DeepSeek_4.1_Flash.md`) to a
**source key** (`"DeepSeek 4.1 Flash"`), a **display label** (`"DeepSeek v4.1
Flash"`), an **agent-slug** (`"deepseek-v4.1-flash"`), and finally a model page
(`/model/deepseek-v4.1-flash/`) spans **four generated files** plus **three
override maps** and a fuzzy-match redirect function:

| Artifact | Owns | Lines |
|---|---|---|
| `sources.generated.ts` | SourceKey union, SOURCE_DEFS (key → label → file) | ~144 |
| `agent-slugs.generated.ts` | SourceKey → model slug | ~60 |
| `scores.generated.ts` | slug → file → 7 numbers | ~bulk |
| `models.ts` | MODELS hydration, SOURCES ordering, virtual views, `validSource()` re-export | ~330 |
| `sync-data.mjs` OVERRIDES | manual slug aliases for keys that don't fuzzy-match | 10 entries |
| `sync-data.mjs` LABEL_OVERRIDES | manual label fixes for keys whose filename differs from vendor name | 3 entries |
| `index.tsx` validSource() | fuzzy URL→key resolver (case-insensitive, stripped alphanumeric, slug lookup, name lookup) | ~15 |

### Pain points

1. **Three naming layers:** filename → key → label. The key is auto-derived
   (`_` → space), the label defaults to the key but sometimes needs an
   override, and the key is a fragile string used as a TypeScript union literal.
2. **Two override maps** (`OVERRIDES` + `LABEL_OVERRIDES`) in `sync-data.mjs`
   fix edge cases that only exist because the filename ≠ the model name.
3. **Race-condition bug** (just patched): newly registered sources in the same
   `pnpm sync` run weren't included in agent-slug generation.
4. **Fuzzy matching in `validSource()`:** needed because `?source=` URLs may
   carry a slug, a key, or a case-variant of either.
5. **Virtual views mixed into SourceKey:** `"tool"`, `"reason"`, etc. are *not*
   reporting agents, but they share the same union type, the same dropdown, and
   the same `SOURCE_DEFS` array (with `file: "average.md"`). Every function
   that iterates sources must remember to filter them out.

---

## Proposed simplification (3 phases)

### Phase 1 — Merge `agent-slugs.generated.ts` into `sources.generated.ts` *(low risk, high payoff)*

**What:** add an optional `slug?: string` field to `SourceDef`. Drop the
separate `agent-slugs.generated.ts` file and its `AGENT_MODEL_SLUG` export.

**Why:** eliminates an entire generated file, removes the two-step
"register source → also figure out its agent slug" pipeline, and kills the
race-condition class of bugs (key is available the moment it's registered).

**Changes:**

| File | Change |
|---|---|
| `sources.generated.ts` | `SourceDef` gains `slug?: string`. Each entry emitted by sync carries its slug inline: `{ key: "DeepSeek 4.1 Flash", label: "DeepSeek v4.1 Flash", file: "DeepSeek_4.1_Flash.md", slug: "deepseek-v4.1-flash" }`. |
| `agent-slugs.generated.ts` | **Deleted.** |
| `models.ts` | Replace `import { AGENT_MODEL_SLUG }` with a one-liner derived from `SOURCE_DEFS`: `const AGENT_MODEL_SLUG = Object.fromEntries(SOURCE_DEFS.filter(s => s.slug).map(s => [s.key, s.slug!]));` — or just consume `s.slug` directly where needed. |
| `index.tsx` / `[slug]/index.tsx` | Replace `AGENT_MODEL_SLUG[key]` with `SOURCES.find(s => s.key === key)?.slug` (or the derived map). |
| `sync-data.mjs` | Merge the current OVERRIDES + catalogNames lookup into the SOURCE_DEFS emit loop. Delete the separate agent-slugs codegen block (~40 lines). |

**Risk:** None. Same data, fewer files.
**Migration effort:** ~1 hour.

---

### Phase 2 — Merge `LABEL_OVERRIDES` and `OVERRIDES` into a single `SOURCE_OVERRIDES` map *(trivial)*

**What:** replace the two separate maps with one:

```js
const SOURCE_OVERRIDES = {
  "DeepSeek 4.1 Flash": { label: "DeepSeek v4.1 Flash", slug: "deepseek-v4.1-flash" },
  "Mimo v2.6 Flash":    { label: "MiMo v2.6 Flash",     slug: "mimo-v2.6-free" },
  "Mimo v2.5 Free":     { label: "MiMo v2.5 Free",      slug: "mimo-v2.5-free" },
  "big-pickle":         { slug: "big-pickle" },
  "Ox Alpha":           { slug: "ox_alpha" },
  // ... rest
};
```

**Why:** one place to look for all edge-case wiring; easy to grep; impossible
for slug-override and label-override to drift apart.

**Risk:** None.
**Migration effort:** 15 minutes (mechanical merge after Phase 1).

---

### Phase 3 — Separate virtual views from the SourceKey union *(medium risk, highest payoff)*

**What:** Introduce a separate `ViewKey` type for the 6 virtual
dimension-sort views (`"tool"`, `"reason"`, `"context"`, `"cost"`, `"code"`,
`"multi"`) and an `"overall"` alias (currently `"average"`). The dropdown
value type becomes `ViewKey | SourceKey` (or a new union `ResultsView`), but
`SourceKey` itself only contains real reporting agents + `"average"`. Virtual
views are no longer registered in `SOURCE_DEFS`.

**Why:**

- Every loop over `SOURCE_DEFS` today must guard against virtual views
  (`virtualDimFor(key) === undefined`). Separating them removes all those
  guards.
- `agent-slugs` / `OVERRIDES` never need to skip virtual keys.
- The SourceKey union shrinks from ~70 members to ~60, improving type safety
  (less chance of accidentally passing `"tool"` where a real agent key is
  expected).

**Changes:**

| File | Change |
|---|---|
| `sources.generated.ts` | Remove `"tool" \| "reason" \| …` from SourceKey. Add a separate `export type ViewKey = "overall" \| "tool" \| "reason" \| "context" \| "cost" \| "code" \| "multi";` and `export type ResultsView = ViewKey \| SourceKey;`. |
| `models.ts` | `VIRTUAL_VIEWS` keyed by `ViewKey`, not `SourceKey`. `SOURCES` dropdown becomes `ResultsView[]`. Remove `virtualDimFor()` guards from `sourceRankOverall()` etc. |
| `index.tsx` | `sel.source` typed as `ResultsView`. `handleSource` and `validSource` use `ResultsView`. |
| `[slug]/index.tsx` | Ratings filter loop drops the `virtualDimFor` guard (impossible for virtual keys to appear in `model.sources`). |

**Risk:** Medium — touches the type signature of the shared dropdown value.
Requires re-testing the Results-source selector, URL deep-links, and All-models
card rankings.
**Migration effort:** ~2–3 hours.

---

## What stays the same (non-goals)

| Item | Why unchanged |
|---|---|
| Findings filename convention (`Stem_Name.md`) | Renaming 3 000+ files for cosmetic reasons violates permanence rules. |
| Source key = filename stem with spaces | Changing the key breaks all `?source=` bookmarks and `scores.generated.ts` file-keys. Not worth it. |
| `scores.generated.ts` (numbers-only) | Already minimal; no simplification needed. |
| `validSource()` fuzzy matching | Still needed as long as `?source=` URLs can arrive with mixed casing or slug-style names (deep-links from model detail pages). Could be simplified *after* Phase 1 (slug is inline, so one fewer lookup). |

---

## Recommended order

1. **Phase 1** first — immediate win, zero risk.
2. **Phase 2** immediately after (trivial follow-up).
3. **Phase 3** as a separate PR — needs a focused review pass.

After all three phases the pipeline looks like:

```
sync-data.mjs
  ├── sources.generated.ts   (key, label, file, slug?)   ← single source of truth
  ├── scores.generated.ts    (slug → file → numbers)     ← unchanged
  └── ✘ agent-slugs.generated.ts                         ← deleted

models.ts
  ├── MODELS       (hydrated from scores + meta.json)
  ├── SOURCES      (dropdown, derived from SOURCE_DEFS)
  └── VIRTUAL_VIEWS (separate type, no more mixed union)
```

Three generated files → two. Three override maps → one. One fragile race
condition → structurally impossible.
