# GPT-5.6 Luna — Iceman findings

- Model (from kickoff): `Iceman` (opencode/iceman-free) — `AGENT_SOURCE_STEM: Iceman`
- Date: 2026-11-13
- Researched subject: `gpt-5.6-luna` (GPT-5.6 Luna, OpenAI) — folder: `model/gpt-5.6-luna`

## Overall
- **Overall Score: 83.6/100.** Cost-sensitive, high-volume OpenAI model with very large context, broad tool/API support, and low pricing, but positioned below higher 5.6 tiers for peak reasoning/coding depth and with limited Luna-specific public benchmark detail in accessible docs.

## Scores
- **Tool use: 88/100.** OpenAI developer docs list support across Responses/Chat/Realtime/Assistants and tools including web search, file search, image generation, code interpreter, hosted shell, apply_patch, skills, computer use, MCP, and tool search, suitable for agentic workflows.
- **Reasoning: 77/100.** Supports reasoning effort levels `none`, `low`, `medium` (default), `high`, `xhigh`, and `max`; designed for cost-sensitive workloads (nano-tier analogue) rather than maximum-depth frontier reasoning.
- **Context window: 95/100.** 1,050,000-token context window with 922,000 max input and 128,000 max output tokens per OpenAI docs, enabling long-context/high-volume tasks (higher pricing applies above 272K input tokens).
- **Multimodal: 78/100.** Accepts text and image inputs and outputs text according to the model specification; no native audio/video output indicated.
- **Coding: 80/100.** Supports coding-relevant tools (apply_patch, code interpreter, hosted shell, computer use) and agentic use, but optimized for efficiency/cost over top-tier coding specialization; repo/meta claims strong verified coding/math results not fully enumerated in the fetched model page.
- **Cost efficiency: 97/100.** Very low pricing at $0.20/$0.02/$0.25/$1.20 per 1M input/cached input/cache write/output tokens (with long-context surcharges above 272K), making it attractive for bulk automation and extraction.
- **Overall Score: 79/100.** Strong value for high-volume, long-context, tool-assisted workloads, with tradeoffs in hardest reasoning and peak coding depth versus premium tiers.

- Signed: Iceman (opencode/iceman-free)
- Reference URLs:
  - https://developers.openai.com/api/docs/models/gpt-5.6-luna
  - https://openai.com/api/pricing/
  - https://platform.openai.com/docs/models/gpt-5.6-luna

```text
ENRICH-PROPOSAL (scaffold-only, not written to disk):
target: model/gpt-5.6-luna/meta.json
field: officialUrl
proposed: https://developers.openai.com/api/docs/models/gpt-5.6-luna
source: https://developers.openai.com/api/docs/models/gpt-5.6-luna
```