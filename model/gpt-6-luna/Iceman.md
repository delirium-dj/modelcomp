# GPT-6 Luna — Iceman findings

- Model (from kickoff): `Iceman` (opencode/iceman-free) — `AGENT_SOURCE_STEM: Iceman`
- Date: 2026-11-13
- Researched subject: `gpt-6-luna` (GPT-6 Luna, OpenAI) — folder: `model/gpt-6-luna`

## Overall
- **Overall Score: 83.8/100.** Highly efficient, low-cost long-context model optimized for focused high-volume tasks with broad tool/API support, but positioned below larger tiers for hardest reasoning and with limited public Luna-specific benchmark detail in accessible docs.

## Scores
- **Tool use: 88/100.** OpenAI docs list strong Responses/Chat support and tools including web search, file search, image generation, code interpreter, hosted shell, apply_patch, skills, computer use, MCP, and tool search (with some Chat Completions constraints), making it practical for agentic workflows.
- **Reasoning: 78/100.** Supports reasoning effort levels (`none` through `max`, default `medium`) and is designed for efficient/focused tasks; OpenAI positions it for high-volume work rather than maximum-depth reasoning, and Luna-specific benchmark scores are not detailed in the model page.
- **Context window: 95/100.** 1,050,000-token context window with 922,000 max input and 128,000 max output tokens per OpenAI developer docs, suitable for large-document summarization/extraction and long sessions (with higher pricing above 272K input tokens).
- **Multimodal: 78/100.** Accepts text and image inputs and outputs text; no native audio/video output or broader multimodal generation is indicated in the model specification.
- **Coding: 80/100.** Supports coding-relevant tools (apply_patch, code interpreter, hosted shell, computer use) and agentic workflows, but is presented as an efficiency tier rather than a top-end coding specialist.
- **Cost efficiency: 96/100.** Very low pricing at $0.10/$0.01/$0.125/$0.50 per 1M (input/cached input/cache write/output) with batch/flex discounts and long-context pricing rules, making it attractive for bulk processing.
- **Overall Score: 80/100.** Excellent value for high-volume long-context extraction/summarization and tool-assisted workflows, with tradeoffs in peak reasoning/coding depth versus premium models.

- Signed: Iceman (opencode/iceman-free)
- Reference URLs:
  - https://developers.openai.com/api/docs/models/gpt-6-luna
  - https://openai.com/api/pricing/
  - https://platform.openai.com/docs/models/gpt-6-luna

```text
ENRICH-PROPOSAL (scaffold-only, not written to disk):
target: model/gpt-6-luna/meta.json
field: officialUrl
proposed: https://developers.openai.com/api/docs/models/gpt-6-luna
source: https://developers.openai.com/api/docs/models/gpt-6-luna
```