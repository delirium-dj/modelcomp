# GPT-5.6 Terra — Iceman findings

- Model (from kickoff): `Iceman` (opencode/iceman-free) — `AGENT_SOURCE_STEM: Iceman`
- Date: 2026-11-13
- Researched subject: `gpt-5.6-terra` (GPT-5.6 Terra, OpenAI) — folder: `model/gpt-5.6-terra`

## Overall
- **Overall Score: 87.2/100.** Balanced long-context OpenAI model with strong tool/API support and favorable cost-performance positioning versus higher Sol/Pro tiers, though public Terra-specific benchmark detail was limited in the accessible developer docs.

## Scores
- **Tool use: 90/100.** OpenAI docs list broad Responses/Chat support and tools including web search, file search, image generation, code interpreter, hosted shell, apply_patch, skills, computer use, MCP, and tool search, making it well-suited for agentic workflows.
- **Reasoning: 85/100.** Supports multiple reasoning effort levels (none through max, default medium) and is positioned to balance intelligence and cost; specific Terra-only benchmark scores were not provided in the model page.
- **Context window: 95/100.** 1,050,000-token context window with 922,000 max input and 128,000 max output tokens per OpenAI developer docs, enabling very long-context tasks (with higher pricing above 272K input tokens).
- **Multimodal: 80/100.** Accepts text and image inputs and outputs text according to the model page; broader audio/video/PDF native multimodal I/O is not indicated in the developer spec.
- **Coding: 86/100.** Designed for balanced coding/research workloads with strong tool integration (including apply_patch, code interpreter, hosted shell, computer use) and large context, though no dedicated Terra coding benchmark table is shown in the accessible docs.
- **Cost efficiency: 86/100.** Priced at $2/$0.2/$12 per 1M input/cached input/output tokens (with 2x input and 1.5x output above 272K), offering a practical middle tier between smaller and premium models.
- **Overall Score: 84/100.** Capable all-round model for long-context coding and agentic use with strong tooling and reasonable pricing, but with limited directly published Terra-specific performance metrics in primary docs.

- Signed: Iceman (opencode/iceman-free)
- Reference URLs:
  - https://developers.openai.com/api/docs/models/gpt-5.6-terra
  - https://openai.com/api/pricing/
  - https://platform.openai.com/docs/models/gpt-5.6-terra

```text
ENRICH-PROPOSAL (scaffold-only, not written to disk):
target: model/gpt-5.6-terra/meta.json
field: officialUrl
proposed: https://developers.openai.com/api/docs/models/gpt-5.6-terra
source: https://developers.openai.com/api/docs/models/gpt-5.6-terra
```