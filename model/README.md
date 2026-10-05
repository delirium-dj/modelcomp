# model/

One folder per tracked model. Each model folder holds one findings file per
reporting agent, plus `average.md` (recomputed by `pnpm sync`, never by hand)
and `meta.json` (curated display metadata, edited by hand when facts change).

- Folder name: filesystem-safe slug of the model (usually the Zen ID suffix), e.g. `big-pickle/`.
- **Slug version convention: version numbers use `.` not `-`.** `gpt-5.5`, never
  `gpt-5-5`; `mimo-v2.5-free`, never `mimo-v2-5-free`. Before creating a folder,
  check for an existing dotted variant first — a hyphen-versioned folder is a
  duplicate, not a new model. (`pnpm sync` fails loudly on hyphen-versioned
  folders with the dotted destination.) Exception: digits that are NOT a version
  stay hyphenated — a single major with a codename (`gpt-6-astra`), an
   experimental suffix (`deepseek-v4-vision-exp`), or a parameter size
   (`gemma-4-31b` = Gemma 4, 31B params; `qwen-3.8-27b` = Qwen 3.8, 27B params —
   neither is a dotted version).
- Findings file name: `<Source_Name>.md` using letters, digits and underscores only
  (version dots are fine: `DeepSeek_4.1_Flash.md`). Display label = stem with
  `_` → space, e.g. `Muse_Spark_1.3.md` = findings provided by Muse Spark 1.3.
- Each findings file is self-contained: model card, raw benchmarks, normalized
  1–100 scores, signature. Start from `../model-report-TEMPLATE.md` and research
  independently (do not read other agents' files first).
- Overview, comparison table and methodology stay in `../model-comparison.md`;
  cross-model signed log in `../model-findings.md`.
- Website wiring is automatic: `pnpm sync` pre-parses every `*.md` into
  `../src/data/scores.generated.ts` and `../src/data/sources.generated.ts`
  (numbers and registry only, so report prose never ships in the client bundle)
  and `../src/data/models.ts` discovers every `meta.json` via `import.meta.glob`
  at build time. **Adding files here needs no code edits** — just run
  `pnpm sync && pnpm build`.

## meta.json schema

Required: `id`, `name`, `short`, `contextWindow`, `modalities`, `pricingNote`.
Optional: `pricingTiers` (string[]), `freeTierNote` (string),
`noFreeId` (boolean — set `true` when no Zen Free ID exists; cost is then
scored on paid pricing and the UI shows a "Paid" badge instead of "Free"),
`category` ("generative" | "decision" — omit for generative; set `"decision"`
for typed-decision System-One models like Jev, which return judgments instead
of text and are never comparable to generative Overall),
`scaffolded` (boolean — stamped by `pnpm sync` when it auto-creates the file;
each later run re-logs the stub until a human replaces the slug-guessed
`name`, which clears the stamp automatically; deleting it by hand also works).

Future (not yet implemented): curated editorial verdict. The per-model page
currently shows a grouped auto-derived verdict sentence (strength cluster ≥ 90
vs. weakness cluster < 75, cost included, each summarized into one
classification with score breakdown). A true editorial verdict would add optional
`bestUse` / `avoidUse` strings here (1–2 sentences, hand-curated per model,
e.g. `"bestUse": "Genuinely best at cheap agentic coding sprints."`,
`"avoidUse": "Worst use case: multimodal work."`) rendered as an override
below the hexagon. Do not add these fields until the UI override is built.

`name` is shown verbatim across the site (cards, list, compare table, detail
pages), so it must be the official vendor display name: spaces, never `_`
(`pnpm sync` fails loudly on underscores in `name`), and exact vendor casing
(`GPT OSS 120B`, not `Gpt Oss 120b`; `DeepSeek`, not `Deepseek`). `id` stays
the provider ID (`opencode/<slug>`) and is never displayed.

```json
{
  "id": "opencode/big-pickle",
  "name": "Big Pickle (GLM 4.6)",
  "short": "One or two sentences: what it is, who makes it, top use case.",
  "contextWindow": "200K total (160K in / 32K out)",
  "modalities": "Text in/out only",
  "pricingNote": "Free Zen tier; paid equiv. GLM-4.6 ~$0.60/$2.20",
  "pricingTiers": ["Free Zen tier", "Paid equiv. GLM-4.6 ~$0.60/$2.20"],
  "freeTierNote": "How the free tier is obtained (hover tooltip on the Free badge)",
  "noFreeId": true
}
```

## Model categories (paradigms, not folders)

A model whose outputs are typed decisions rather than generated text (a
System-One model such as Jev 1.13) gets `"category": "decision"` in its
`meta.json` — it stays in `model/<slug>/` like everything else (permanence,
`RULES.md`) and is separated at render time instead: the site shows decision
models on their own shelf with native specs (state budget, I/O shape,
input-only pricing), excludes them from the A/B/C compare slots, and never
ranks their scores against generative Overall. Omit `category` (or use
`"generative"`) for every text-generating model, MoE or dense, open or
proprietary. A new paradigm later gets a new category value the same way —
never a renamed folder.

## Adding a new model

1. Derive the slug (filesystem-safe, usually the Zen ID suffix), then
   NORMALIZE it per `RULES.md` slug identity before creating anything:
   replace every digit-hyphen-digit join with a dot (`gpt-5-6-terra` →
   `gpt-5.6-terra`, `gemma-4-12b-unified` → `gemma-4.12b-unified`) — except
   `gemma-4-31b`, `qwen-3.8-27b`, `qwen-3.5-9b` (param sizes, not versions).
   Then check for an existing dotted folder first: a hyphen-versioned folder
   is a duplicate, not a new model — never create it, write into the dotted
   folder instead.
2. Create `model/<slug>/` with findings file(s) + `meta.json` (schema above).
3. Run `pnpm sync` (creates `average.md`, validates everything; FAILs hyphen
   variants and writes nothing for them — merge into the dotted folder first).
4. Run `pnpm build.types && pnpm build`.

Discovery trigger: if any reporting agent (`SourceKey` in `src/data/models.ts`,
or a signed file attribution) has no `model/<slug>/` folder, whoever finds it
scaffolds the folder with a verified-facts `meta.json` (rule 11 in
`tasks/research.md`) so every agent can research it and every cross-link
resolves. Never scaffold a folder for a name with zero evidence of a real
model (e.g. a stale registry entry with no files and no vendor ID).

## Adding a new reporting agent's findings

1. Drop `<Source_Name>.md` into every `model/<slug>/` it evaluated.
2. Run `pnpm sync` (recomputes averages; registers the source in the
   Results-source dropdown automatically).
3. Run `pnpm build.types && pnpm build`.

## Folders

One folder per tracked model, each self-described by its own `meta.json`
(this list is intentionally not enumerated here — `meta.json` is the source
of truth; examples: `big-pickle/`, `muse-spark-1.3/`,
`glm-5.1-coding/`). Known aliases: `mimo-v2.5-free/`
also covers `Xiaomi MiMo-V2.5 Free` — do not scaffold a second folder for it.

**Tier aliases — one model, one folder, whatever the tier is called.** If a
source names a model only by its pricing or effort tier, resolve it to the
base slug instead of scaffolding a tier folder:

- `muse-spark-1.3/` covers **every** Muse Spark 1.3 variant name —
  `Contributor`, `Contributor Free`, `Free`, `Standard`, `Max`,
  `muse-spark-1.3-free/`, `muse-spark-1.3-max/`, `muse-spark-1.3-contributor/`.
  Meta ships one model: same weights, 1M context (131,072 max output),
  text/image/video/PDF in. The only real differences are price and data policy
  — the Contributor/Free tier costs $0 because Meta may train on your prompts;
  `reasoning_effort: "max"` is available on the paid Standard tier only. Never
  create `model/muse-spark-1.3-free/` or `model/muse-spark-1.3-max/` again.
- `muse-spark-1.2/` covers **every** Muse Spark 1.2 variant name —
  `Contributor`, `Contributor Free`, `Free`, `Standard`, `Max`,
  `muse-spark-1.2-free/`, `muse-spark-1.2-max/`, `muse-spark-1.2-contributor/`.
  Same weights everywhere (only price and Meta's data-use differ); renamed
  from `muse-spark-1.2-free/` 2026-10-02 so the tier suffix can never read as
  a separate model. Never create `model/muse-spark-1.2-free/` or
  `model/muse-spark-1.2-max/` again.
- `space-bunny/` covers **every** name this anonymous stealth model ships
  under: `Space Bunny` (canonical), `Space Bunny Alpha` (OpenRouter
  `stealth/space-bunny-alpha`), `Space Bunny Free` (OpenCode `space-bunny-free`,
  limited-time $0 tier). All three verified as the same weights 2026-10-02;
  renamed from `space-bunny-alpha/` so the marketplace suffix can never read
  as a separate model. Never create `model/space-bunny-alpha/` or
  `model/space-bunny-free/` again.
