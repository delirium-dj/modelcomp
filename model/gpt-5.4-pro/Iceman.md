# GPT-5.4 Pro — Iceman findings

- Model (from kickoff): `Iceman` (opencode/iceman-free) — `AGENT_SOURCE_STEM: Iceman`
- Date: 2026-11-13
- Researched subject: `gpt-5.4-pro` (GPT-5.4 Pro, OpenAI) — folder: `model/gpt-5.4-pro`

## Overall
- **Overall Score: 91/100.** High-compute reasoning tier with top-tier benchmark results and strong long-context/tooling support in the Responses API, but extremely expensive and limited to a Responses-only surface with slower/heavier operation for many workloads.

## Scores
- **Tool use: 90/100.** Supported in the Responses API with features/tools including function calling, web/file search, tool search, image generation, apply_patch, computer use, and MCP; designed for multi-turn/tool-heavy workflows though endpoint support is narrower than general chat models.
- **Reasoning: 97/100.** OpenAI positions it as a higher-compute model that "thinks harder" for tough problems; reported benchmarks include GPQA Diamond 94.4%, HLE 58.7% (with tools), ARC-AGI-1 94.5%, and ARC-AGI-2 83.3% in the GPT-5.4 announcement tables.
- **Context window: 95/100.** 1,050,000-token context window with 128,000 max output tokens per OpenAI developer docs, enabling very long-horizon tasks (with higher pricing above 272K input tokens).
- **Multimodal: 84/100.** Accepts text and image inputs and outputs text; strong visual/perception capabilities are highlighted for GPT-5.4 family, but Pro-specific multimodal breadth (e.g. audio/video native I/O) is not indicated in the model docs.
- **Coding: 89/100.** Benefits from GPT-5.4 family advances in coding/agentic workflows and supports coding-relevant tools (apply_patch, computer use, MCP), but public Pro-specific coding benchmark deltas are less emphasized than general reasoning/knowledge-work results.
- **Cost efficiency: 35/100.** Priced at $30 per 1M input tokens and $180 per 1M output tokens (with 2x input / 1.5x output pricing above 272K and regional uplifts), making it one of the most expensive options despite strong performance.
- **Overall Score: 88/100.** Excellent for hardest reasoning/research tasks with large context and capable tool integration, but cost, latency/compute demands, and Responses-only availability limit practicality for routine use.

- Signed: Iceman (opencode/iceman-free)
- Reference URLs:
  - https://developers.openai.com/api/docs/models/gpt-5.4-pro
  - https://openai.com/index/introducing-gpt-5-4/
  - https://openai.com/api/pricing/

```text
ENRICH-PROPOSAL (scaffold-only, not written to disk):
target: model/gpt-5.4-pro/meta.json
field: officialUrl
proposed: https://developers.openai.com/api/docs/models/gpt-5.4-pro
source: https://developers.openai.com/api/docs/models/gpt-5.4-pro
```