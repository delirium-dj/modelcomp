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
  (`gemma-4-31b` = Gemma 4, 31B params, not version 4.31).
- Findings file name: `<Source_Name>.md` using letters, digits and underscores only
  (version dots are fine: `DeepSeek_4.1_Flash.md`). Display label = stem with
  `_` → space, e.g. `Muse_Spark_1.3.md` = findings provided by Muse Spark 1.3.
- Each findings file is self-contained: model card, raw benchmarks, normalized
  1–100 scores, signature. Start from `../model-report-TEMPLATE.md` and research
  independently (do not read other agents' files first).
- Overview, comparison table and methodology stay in `../model-comparison.md`;
  cross-model signed log in `../model-findings.md`.
- Website wiring is automatic: `pnpm sync` pre-parses every `*.md` into
  `../src/data/scores.generated.ts` (numbers only, so report prose never ships
  in the client bundle) and `../src/data/models.ts` discovers every `meta.json`
  via `import.meta.glob` at build time. **Adding files here
  needs no code edits** — just run `pnpm sync && pnpm build`.

## meta.json schema

Required: `id`, `name`, `short`, `contextWindow`, `modalities`, `pricingNote`.
Optional: `pricingTiers` (string[]), `freeTierNote` (string),
`noFreeId` (boolean — set `true` when no Zen Free ID exists; cost is then
scored on paid pricing and the UI shows a "Paid" badge instead of "Free").

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

## Adding a new model

1. Create `model/<slug>/` with findings file(s) + `meta.json` (schema above).
2. Run `pnpm sync` (creates `average.md`, validates everything).
3. Run `pnpm build.types && pnpm build`.

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

- `big-pickle/` — Big Pickle
- `muse-spark-1.3-free/` — Muse Spark 1.3 Contributor
- `ling-3.0-flash-fin-free/` — Ling 3.0 Flash Fin Free
- `mimo-v2.5-free/` — MiMo V2.5 Free (also covers the `Xiaomi MiMo-V2.5 Free` alias)
- `muse-spark-1.2-free/` — Muse Spark 1.2 Free
- `nemotron-3-ultra-free/` — Nemotron 3 Ultra Free
- `nemotron-3.5-lightning-free/` — Nemotron 3.5 Lightning Free
- `glm-5.1-coding/` — GLM 5.1 Coding (no Zen Free ID; scored on paid pricing)
- `minimax-m2.7/` — MiniMax M2.7 (no Zen Free ID; scored on paid pricing)
- `xiaomi-mimo-v2.5-pro/` — MiMo V2.5 Pro (no Zen Free ID; scored on paid pricing)
- …plus newer folders, each self-described by its own `meta.json`.
