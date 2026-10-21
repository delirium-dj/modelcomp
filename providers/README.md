# providers/ — curated provider (seller/console) data

One folder per provider the site tracks as a place to *buy or access* models —
marketplaces/aggregators (`opencode-zen`, `openrouter`, `nanogpt`,
`vercel-ai-gateway`, `commandcode`, `cursor`, `qoder`, `nvidia`, `deepinfra`,
`amazon-bedrock`, `microsoft`) and vendor-direct
APIs (`anthropic`, `openai`, `google`, `deepseek`, `xai`, `zai`, `moonshot`,
`xiaomi`, `minimax`, `alibaba`, `mistral`, `upstage`).

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
| `plans[]` | yes | ≥1 entry: billing lanes this provider offers |
| `plans[].name` | yes | Plan/lane name (e.g. `Free tier`, `Pay-as-you-go`) |
| `plans[].price` | yes | Price text — copy it verbatim from an already-curated claim; never invent numbers |
| `plans[].notes` | no | One-line clarification |
| `plans[].evidenceUrl` | no | The page claiming the price (site rule: every price needs a claimant) |

Folder slug is the canonical key (no separate `id`). `name` must be unique
across folders; both are enforced by `scripts/lib/providers.test.mjs`.

## Covered models (derived, never curated)

The "models offered" list on the Providers page is computed at build time:
a model matches a provider when its `id` starts with one of `idPrefixes`,
or one of its claimant URLs (`officialUrl` / `pricingLinks`) lives on one of
`hosts`. Adding a new provider folder is enough — coverage updates on the
next build.

## Editing rules

- Same claim culture as model metas: every plan `price` must trace to
  `evidenceUrl` (and, ideally, to the model findings already curated in
  `model/*/meta.json`). Never write a price without a claimant page.
- Never rename a provider folder with plans pointing elsewhere; folders are
  permanent like `model/<slug>/`.
- Vendor-official hyphenation is fine for providers (`openrouter`), but keep
  display casing in `name`.
