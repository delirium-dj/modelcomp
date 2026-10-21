# providers/ — curated provider (seller/console) data

One folder per provider the site tracks as a place to *buy or access* models —
marketplaces/aggregators (`opencode-zen`, `openrouter`, `nanogpt`,
`vercel-ai-gateway`, `commandcode`, `cursor`, `qoder`, `github`, `nvidia`,
`deepinfra`, `huggingface`, `fireworks-ai`, `cloudflare-workers-ai`,
`amazon-bedrock`, `microsoft`, `together-ai`, `novita-ai`, `baseten`, `ollama`,
`scaleway`, `sambanova`, `groq`, `llm7`, `ovhcloud`) and vendor-direct
APIs (`anthropic`, `openai`, `google`, `deepseek`, `xai`, `zai`, `moonshot`,
`xiaomi`, `minimax`, `alibaba`, `mistral`, `upstage`, `meta`, `longcat`).

This folder is **not** scanned by `pnpm sync` (which covers `model/` only) —
it is loaded directly by the website build via `import.meta.glob`
(`src/data/providers.ts`), the same way `model/<slug>/meta.json` is.

## Schema (`providers/<provider-slug>/meta.json`)

| field | required | meaning |
|---|---|---|
| `name` | yes | Display name (vendor-accurate casing, e.g. `OpenCode Zen`) |
| `kind` | no | `vendor` (sells own models) or `aggregator` (bills others'). Default `vendor` |
| `short` | yes | 1–2 sentence description shown on the card |
| `officialUrl` | no | Main site (also used to build the covered-model list) |
| `hosts` | no | Extra domain names whose claimant links count this provider as the seller |
| `idPrefixes` | no | Model-id first path word that means "served by this provider" (e.g. `opencode`, `anthropic`, `Qwen` — case-sensitive, matches `id` prefixes in `model/<slug>/meta.json`) |
| `covers` | no | Model slugs the provider sells when no model meta cites its catalog (needs `catalogUrl`) |
| `catalogUrl` | no | Official model catalog page backing `covers` (required when `covers` is present) |
| `plans[]` | yes | ≥1 entry: billing lanes this provider offers |
| `plans[].name` | yes | Plan/lane name (e.g. `Free tier`, `Pay-as-you-go`) |
| `plans[].price` | yes | Price text — copy it verbatim from an already-curated claim; never invent numbers |
| `plans[].notes` | no | One-line clarification |
| `plans[].evidenceUrl` | no | The page claiming the price (site rule: every price needs a claimant) |

Folder slug is the canonical key (no separate `id`). `name` must be unique
across folders; both are enforced by `scripts/lib/providers.test.mjs`.

## Covered models (derived first, catalog fallback)

The "models offered" list on the Providers page is computed at build time.
A model matches a provider when its `id` starts with one of `idPrefixes`, or
one of its claimant URLs (`officialUrl` / `pricingLinks`) lives on one of
`hosts`. When a provider sells models its catalog names but no model meta
cites it (common for IDEs and resale consoles), list those model slugs in
`covers` and point `catalogUrl` at the catalog page. `covers` entries must
name real `model/<slug>/` folders and are deduped against derived matches.
Adding a new provider folder is enough — coverage updates on the next build.

## Editing rules

- Same claim culture as model metas: every plan `price` must trace to
  `evidenceUrl` (and, ideally, to the model findings already curated in
  `model/*/meta.json`). Never write a price without a claimant page.
- Every `covers` slug must be verifiable on `catalogUrl`; do not add models
  from memory or from a different provider's page.
- Never rename a provider folder with plans pointing elsewhere; folders are
  permanent like `model/<slug>/`.
- Vendor-official hyphenation is fine for providers (`openrouter`), but keep
  display casing in `name`.
