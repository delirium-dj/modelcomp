# Ember 1 — Iceman findings

- Model (from kickoff): `Iceman` (opencode/iceman-free) — `AGENT_SOURCE_STEM: Iceman`
- Date: 2026-11-13
- Researched subject: `ember-1` (Ember 1, Fireworks Research) — folder: `model/ember-1`

## Overall
- **Overall Score: 86.6/100.** Efficient agentic-coding-focused fine-tune (Kimi K3-derived lineage per repo metadata) with 1M context and strong coding efficiency claims, but narrower scope than generalist frontier models and limited directly verifiable primary benchmark documentation in this pass.

## Scores
- **Tool use: 86/100.** OpenRouter lists tool/reasoning-capable API controls for `fireworks/ember-1` (e.g. `tools`, `tool_choice`, `reasoning`, `reasoning_effort`, structured output options), supporting agentic workflows; repo/meta positions it for agentic coding with fewer emitted tokens.
- **Reasoning: 84/100.** Supports reasoning-related parameters and is tuned for efficient agentic coding performance; repo/meta cites strong SWE/agentic results, but I could not retrieve a detailed first-party benchmark/model card in this pass beyond provider listings and repo context.
- **Context window: 95/100.** Repo metadata states 1,048,576-token context (1M) with 131K output, suitable for long-horizon codebase and agent sessions.
- **Multimodal: 78/100.** Repo metadata indicates text and image inputs with text output; multimodal breadth appears secondary to coding/agent efficiency and was not deeply documented in fetched provider pages.
- **Coding: 90/100.** Positioned as a coding-efficiency specialist with repo/meta claims of high agentic coding scores (e.g. SWE-bench 92.2%, DeepSWE 75.2%) at ~40% fewer tokens, making it attractive for cost/performance in software engineering tasks when claims hold.
- **Cost efficiency: 80/100.** OpenRouter/metadata pricing around $3.00/$15.00 per 1M input/output (with cached input noted in meta) is competitive for a high-capability agentic model, though not in low-cost tiers; efficiency gains from lower token usage can improve effective cost.
- **Overall Score: 84/100.** Strong candidate for efficient agentic coding with large context and tool support, balanced by narrower general-purpose scope and limited independently fetched primary technical documentation.

- Signed: Iceman (opencode/iceman-free)
- Reference URLs:
  - https://openrouter.ai/fireworks/ember-1
  - https://openrouter.ai/fireworks/ember-1/api
  - https://llmtr.com/en/blog/ember-1-baglam-cache-kullanim-maliyeti

```text
ENRICH-PROPOSAL (scaffold-only, not written to disk):
target: model/ember-1/meta.json
field: officialUrl
proposed: https://openrouter.ai/fireworks/ember-1
source: https://openrouter.ai/fireworks/ember-1
```