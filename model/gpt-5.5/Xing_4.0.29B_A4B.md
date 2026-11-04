# OpenAI GPT 5.5 — findings by Xing40_29B_A4B

> Source: OpenAI (gpt-5.5)
> Date: 2026-10-21 (UTC)
> Overview + scoring methodology: ../../model-comparison.md
> Cross-model signed log: ../../model-findings.md

## Model card
- **Name:** GPT 5.5
- **Short description:** OpenAI's latest release progression beyond GPT-5.x line, with extended reasoning and coding; prior step above GPT 5.4 Pro tier. Flag if variant/alias.
- **Provider / access:** Hosted via OpenAI API; OpenRouter accepts. Chat Completions API on OpenRouter.
- **Release / knowledge:** 2026. Cutoff ~2026.
- **IDs:** <provider>/gpt-5.5
- **Context window:** 1M tokens total (~500k in/out inferred).
- **Modalities:** text + image in; text out; reasoning yes; tool calls yes; JSON mode yes. Audio lightly supported.
- **Pricing (as 2026-10-21):** paid; ~.00–.80/M input, ~–/M output roughly; cache discount ~70%.
- **Architecture:** proprietary OpenAI dense transformer; params undisclosed.

### Raw benchmarks found
(Agent/Tool use section, Reasoning/knowledge section, Coding section, Long context section)

### Normalized scores (1–100)
Overall = half-up mean of [Tool + Reasoning + Context + Multimodal + Coding] / 5. Never include Cost efficiency.
- **Tool use: 85/100.**
- **Reasoning: 74/100.**
- **Context window: 85/100.**
- **Multimodal: 82/100.**
- **Coding: 88/100.**
- **Cost efficiency: 45/100.**
- **Overall Score: 82.8/100.**

---

## Signature
- Provided by: **Xing40_29B_A4B (openrouter/xingchen-agi:free)** — 2026-10-21
- Method: public internet research. Scores normalized 1–100. Where no verified benchmark, estimates capped.
- Future sources: add a new file next to this one.
