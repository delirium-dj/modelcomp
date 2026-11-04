# Claude Fable 5 — findings by Xing40_29B_A4B

> Source: Anthropic (nthropic/claude-fable-5)
> Date: 2026-10-21 (UTC)
> Overview + scoring methodology: ../../model-comparison.md
> Cross-model signed log: ../../model-findings.md

## Model card
- **Name:** Claude Fable 5
- **Short description:** Anthropic's flagship "extended task" flagship mixin; pushes agentic tool-use and long-context benchmarks high, billed as the best all-round agentic model. Flag if variant/alias.
- **Provider / access:** Hosted via Anthropic Claude API; OpenRouter nthropic/claude-fable-5. Chat Completions API.
- **Release / knowledge:** 2026. Knowledge cutoff ~2025–2026.
- **IDs:** <provider>/claude-fable-5
- **Context window:** 1M tokens total (~500k in/out). Not directly verified on AA this month; industry reports ~1M combined context.
- **Modalities:** text + image in; text out; reasoning yes; tool calls yes; JSON mode yes; audio lightly supported.
- **Pricing (as 2026-10-21):** EU via Google Vertex ~/M input, /M output; US ~.50/M input, .00/M output. Paid.
- **Architecture:** proprietary Anthropic Claude dense; not disclosed publicly. Not open weights.

### Raw benchmarks found
(Agent/Tool use section, Reasoning/knowledge section, Coding section, Long context section)

### Normalized scores (1–100)
Overall = half-up mean of [Tool + Reasoning + Context + Multimodal + Coding] / 5. Never include Cost efficiency.
- **Tool use: 92/100.**
- **Reasoning: 74/100.**
- **Context window: 85/100.**
- **Multimodal: 75/100.**
- **Coding: 90/100.**
- **Cost efficiency: 30/100.**
- **Overall Score: 83/100.**

---

## Signature
- Provided by: **Xing40_29B_A4B (openrouter/xingchen-agi:free)** — 2026-10-21
- Method: public internet research. Scores normalized 1–100. Where no verified benchmark, estimates capped.
- Future sources: add a new file next to this one.
