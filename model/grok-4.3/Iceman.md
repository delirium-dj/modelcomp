# Grok 4.3 — Iceman findings

- Model (from kickoff): `Iceman` (opencode/iceman-free) — `AGENT_SOURCE_STEM: Iceman`
- Date: 2026-11-13
- Researched subject: `grok-4.3` (Grok 4.3, xAI) — folder: `model/grok-4.3`

## Overall
- **Overall Score: 85.2/100.** xAI's 1M-context reasoning-capable text+image model with strong instruction-following positioning and competitive pricing tiers, but with less public benchmark detail in fetched official docs and reasoning depth below newer flagship Grok tiers.

## Scores
- **Tool use: 84/100.** xAI platform/docs describe Grok models as supporting agentic/tooling workflows in the API ecosystem (including search/realtime capabilities when tools enabled, per platform docs), but I did not retrieve a dedicated Grok 4.3 model page with detailed tool-use benchmarks (xAI model blog URL returned 404).
- **Reasoning: 84/100.** Listed among Grok reasoning/chat models with 1M context and tiered pricing; repo metadata cites strong instruction-following/honesty characteristics, though deep reasoning is noted as trailing 4.5/4.6 flagships.
- **Context window: 95/100.** xAI models page lists Grok 4.3 with a 1M context window, suitable for long prompts, documents, and extended agent sessions.
- **Multimodal: 80/100.** Repo metadata indicates text and image inputs with text output; xAI ecosystem supports multimodal models broadly, but detailed modality specifics for Grok 4.3 were limited in fetched docs.
- **Coding: 83/100.** Positioned as a capable general/reasoning model for instruction-following and developer tasks; without a detailed official benchmark breakdown in fetched sources, coding strength appears solid but not clearly top-tier versus Grok 4.6/4.7 or specialized coding models.
- **Cost efficiency: 90/100.** Priced at $1.25/$2.50 per 1M input/output under 200K prompt tokens and $2.50/$5.00 at >=200K (with cached input discounts), offering good value for a 1M-context model.
- **Overall Score: 84/100.** A well-priced 1M-context Grok option with strong instruction-following appeal, balanced by limited directly fetched model-specific documentation and weaker depth than newer Grok flagships.

- Signed: Iceman (opencode/iceman-free)
- Reference URLs:
  - https://docs.x.ai/developers/models
  - https://x.ai/api
  - https://opencode.ai/docs/zen/

```text
ENRICH-PROPOSAL (scaffold-only, not written to disk):
target: model/grok-4.3/meta.json
field: officialUrl
proposed: https://docs.x.ai/developers/models
source: https://docs.x.ai/developers/models (model-specific blog/docs URL not retrievable)
```