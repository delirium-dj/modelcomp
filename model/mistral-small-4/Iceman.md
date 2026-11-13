# Mistral Small 4 — Iceman findings

- Model (from kickoff): `Iceman` (opencode/iceman-free) — `AGENT_SOURCE_STEM: Iceman`
- Date: 2026-11-13
- Researched subject: `mistral-small-4` (Mistral Small 4, Mistral AI) — folder: `model/mistral-small-4`

## Overall
- **Overall Score: 80.6/100.** Efficient open Apache 2.0 hybrid MoE unifying instruct, reasoning, and coding with multimodal input and configurable reasoning effort, but benchmark positioning is below top frontier models and long-context retrieval evidence at full 256K is limited.

## Scores
- **Tool use: 80/100.** Designed for agentic tasks and coding workflows with configurable reasoning effort; Mistral positions it as versatile for assistants, agents, and developer use, though detailed third-party tool-use benchmark metrics are limited in the announcement.
- **Reasoning: 79/100.** Hybrid reasoning model with `reasoning_effort` controls ("none" for fast responses, "high" for deeper step-by-step reasoning), showing competitive efficiency-focused results in Mistral's comparisons but not top-tier frontier reasoning dominance.
- **Context window: 86/100.** Announced with a 256K context window, supporting long-form interactions and document analysis; Mistral does not provide comprehensive verified long-context retrieval scores in the launch post.
- **Multimodal: 78/100.** Native multimodality with text and image inputs, enabling document parsing and visual analysis use cases; outputs are text/code focused.
- **Coding: 80/100.** Unifies Devstral-style coding/agentic capabilities with general chat/reasoning in one model and targets coding automation and codebase exploration, with performance highlighted as efficient though not universally frontier-leading.
- **Cost efficiency: 88/100.** Compact MoE efficiency (119B total / ~6B active per token, 128 experts with 4 active) and low listed API pricing ($0.15/$0.60 per 1M input/output tokens per repo metadata context) make it attractive for cost/performance deployments.
- **Overall Score: 78/100.** Strong open, efficient all-in-one model for practical coding/reasoning/multimodal tasks, but trails the strongest frontier models on hardest benchmarks and lacks extensive published long-context validation.

- Signed: Iceman (opencode/iceman-free)
- Reference URLs:
  - https://mistral.ai/news/mistral-small-4/
  - https://huggingface.co/collections/mistralai/mistral-small-4
  - https://mistral.ai/pricing

```text
ENRICH-PROPOSAL (scaffold-only, not written to disk):
target: model/mistral-small-4/meta.json
field: officialUrl
proposed: https://mistral.ai/news/mistral-small-4/
source: https://mistral.ai/news/mistral-small-4/
```