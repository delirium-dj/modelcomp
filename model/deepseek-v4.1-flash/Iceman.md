# DeepSeek V4.1 Flash — Iceman findings

- Model (from kickoff): `Iceman` (opencode/iceman-free) — `AGENT_SOURCE_STEM: Iceman`
- Date: 2026-11-13
- Researched subject: `deepseek-v4.1-flash` (DeepSeek Flash / DeepSeek-V4.1-Flash-1017, DeepSeek) — folder: `model/deepseek-v4.1-flash`

## Overall
- **Overall Score: 86.6/100.** High-capacity long-context multimodal Flash model with strong pricing and large output limits per DeepSeek docs, but as a Flash variant it trades some peak depth versus flagship/pro tiers and public benchmark details beyond repo/meta claims were not fully enumerated in the pricing page.

## Scores
- **Tool use: 85/100.** DeepSeek model docs list support for tool calls, Responses API, Anthropic API compatibility, JSON output, web tools/search integrations in the platform ecosystem, indicating solid tool-augmented workflow support.
- **Reasoning: 84/100.** Supports both non-thinking and thinking modes (default thinking) per DeepSeek docs, suitable for agentic/complex tasks, though Flash tuning generally prioritizes speed/cost over maximum frontier reasoning depth.
- **Context window: 96/100.** DeepSeek docs specify 1M context length and 384K maximum output for `deepseek-flash` (served by DeepSeek-V4.1-Flash-1017), excellent for long-context and long-output workloads.
- **Multimodal: 82/100.** Vision is supported for `deepseek-flash` per DeepSeek model details (text/image in; text out), enabling document/image understanding alongside text tasks.
- **Coding: 86/100.** Positioned as a capable coding/agentic model in DeepSeek's lineup with thinking mode, tool use, and very large context/output; repo/meta claims strong terminal/coding performance but the pricing page itself does not list benchmark scores.
- **Cost efficiency: 90/100.** Very competitive pricing listed by DeepSeek: off-peak $0.003/$0.15/$0.60 and peak $0.006/$0.30/$1.20 per 1M tokens (cache hit input / cache miss input / output), plus additional platform feature pricing.
- **Overall Score: 84/100.** Strong value for long-context multimodal agentic and coding workloads, with excellent context/output and low cost, balanced by Flash-tier tradeoffs and limited directly cited benchmark detail in primary pricing docs.

- Signed: Iceman (opencode/iceman-free)
- Reference URLs:
  - https://api-docs.deepseek.com/quick_start/pricing
  - https://api-docs.deepseek.com/guides/thinking_mode
  - https://www.deepseek.com/

```text
ENRICH-PROPOSAL (scaffold-only, not written to disk):
target: model/deepseek-v4.1-flash/meta.json
field: officialUrl
proposed: https://api-docs.deepseek.com/quick_start/pricing
source: https://api-docs.deepseek.com/quick_start/pricing
```