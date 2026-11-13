# GPT-5.4 — Iceman findings

- Model (from kickoff): `Iceman` (opencode/iceman-free) — `AGENT_SOURCE_STEM: Iceman`
- Date: 2026-11-13
- Researched subject: `gpt-5.4` (GPT-5.4, OpenAI) — folder: `model/gpt-5.4`

## Overall
- **Overall Score: 90/100.** Flagship OpenAI model for complex professional and coding work with 1.05M context, strong tool/computer-use support, and high reasoning capability, priced below top Pro tiers but with long-context surcharges and some endpoint limitations.

## Scores
- **Tool use: 94/100.** OpenAI docs list broad tool support in Responses API including function calling, web search, file search, tool search, image generation, code interpreter, hosted shell, apply_patch, skills, computer use, and MCP, making it highly capable for agentic and desktop/app workflows.
- **Reasoning: 91/100.** Supports reasoning token usage and configurable reasoning effort (`none` default, `low`, `medium`, `high`, `xhigh`), positioned as a flagship model for complex professional work; specific benchmark deltas vs successors vary but it remains a strong general reasoner.
- **Context window: 95/100.** 1,050,000-token context window with 128,000 max output tokens (snapshot `gpt-5.4-2026-03-05`, knowledge cutoff Aug 31 2025), enabling very large-context tasks (with 2x input / 1.5x output pricing above 272K input tokens).
- **Multimodal: 80/100.** Accepts text and image inputs and outputs text per developer docs; strong for document/screenshot understanding and computer-use scenarios, but no native audio/video generation in this model spec.
- **Coding: 92/100.** Marketed as a more affordable model for coding and professional work with coding-focused tools (apply_patch, code interpreter, hosted shell, computer use) and large context; repo/meta cites strong terminal/software-engineering performance.
- **Cost efficiency: 82/100.** Priced at $2.50/$0.25/$15 per 1M input/cached input/output tokens (with higher long-context/regional uplifts), offering good capability-per-dollar versus premium models but not in low-cost tiers.
- **Overall Score: 90/100.** Excellent all-around model for agentic coding, computer use, and long-context professional workflows, with tradeoffs mainly in cost at very long contexts and being succeeded in some areas by newer family members.

- Signed: Iceman (opencode/iceman-free)
- Reference URLs:
  - https://developers.openai.com/api/docs/models/gpt-5.4
  - https://openai.com/api/pricing/
  - https://openai.com/index/gpt-5.4/

```text
ENRICH-PROPOSAL (scaffold-only, not written to disk):
target: model/gpt-5.4/meta.json
field: pricingTiers
proposed: $2.50/$0.25/$15 per 1M in/cached/out (<=272K); 2x input and 1.5x output for prompts >272K (standard/batch/flex)
source: https://developers.openai.com/api/docs/models/gpt-5.4
```