# Grok 4.20 — Iceman findings

- Model (from kickoff): `Iceman` (opencode/iceman-free) — `AGENT_SOURCE_STEM: Iceman`
- Date: 2026-11-13
- Researched subject: `grok-4.20` (Grok 4.20, xAI) — folder: `model/grok-4.20`

## Overall
- **Overall Score: 86.2/100.** High-performance xAI reasoning model with 1M context, function calling/structured outputs, and strong coding/research positioning, but documentation across sources varies (e.g. context/multi-agent details) and the line is marked deprecated in repo metadata.

## Scores
- **Tool use: 88/100.** xAI docs state function calling and structured outputs are supported, with reasoning capabilities; repo metadata also highlights a multi-agent mode (leader + parallel agents) as a distinctive capability, though that specific mode detail was not fully confirmed in the fetched xAI model page.
- **Reasoning: 86/100.** Offered as a reasoning model (`grok-4.20-0309-reasoning` and aliases) aimed at precise, truthful responses and complex tasks; repo/meta cites strong coding/reasoning benchmark performance.
- **Context window: 90/100.** xAI developer docs list a 1,000,000-token context window (with pricing tiers split at 200K prompt tokens). Repo metadata notes conflicting reports of 1M-2M across sources; I scored based on the directly verified xAI docs figure.
- **Multimodal: 82/100.** Repo metadata indicates text, image, and file/PDF inputs with text output; xAI docs/model positioning supports multimodal understanding, but detailed modality specifics were limited in the fetched page.
- **Coding: 85/100.** Positioned for agentic coding/research tasks with strong benchmark claims in repo metadata (SWE-bench/LiveCodeBench ranges), though exact harness-dependent results vary and were not all directly verified from xAI docs in this pass.
- **Cost efficiency: 86/100.** Priced at $1.25/$2.50 per 1M input/output under 200K prompt tokens and $2.50/$5.00 at >=200K (with cached input discounts and batch discount available per docs), competitive for a 1M-context reasoning model.
- **Overall Score: 84/100.** A capable reasoning/tool-using model with large context and solid value, tempered by source inconsistencies on some specs and deprecation/migration context noted in repo metadata.

- Signed: Iceman (opencode/iceman-free)
- Reference URLs:
  - https://docs.x.ai/developers/models/grok-4.20-0309-reasoning
  - https://docs.x.ai/docs/models
  - https://openrouter.ai/x-ai/grok-4.20

```text
ENRICH-PROPOSAL (scaffold-only, not written to disk):
target: model/grok-4.20/meta.json
field: contextWindow
proposed: 1,000,000 tokens (xAI docs); some third-party sources report 2M — verify
source: https://docs.x.ai/developers/models/grok-4.20-0309-reasoning
```