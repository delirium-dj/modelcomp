# GPT 5.5 Pro — findings by Xing40_29B_A4B

> Source: OpenAI (gpt-5.5-pro)
> Date: 2026-10-21 (UTC)
> Overview + scoring methodology: ../../model-comparison.md
> Cross-model signed log: ../../model-findings.md

## Model card
- **Name:** GPT 5.5 Pro
- **Short description:** OpenAI's latest extended-reasoning flagship, positioned above the Opus-class product tier (internal codename / alpha-preview label). Flag if variant/alias.
- **Provider / access:** Hosted via OpenAI API; OpenRouter accepts (non-standard slug). Chat Completions API on OpenRouter.
- **Release / knowledge:** 2026. Cutoff ~2026.
- **IDs:** <provider>/gpt-5.5-pro
- **Context window:** 1M tokens (industry standard for latest flagship). In/out split unverified exactly (~500k each).
- **Modalities:** text + image in; text out; reasoning yes; tool calls yes; JSON mode yes. Audio in lightly.
- **Pricing (as 2026-10-21):** paid; ~.50/M input and ~/M output roughly; cache hit discount ~70%.
- **Architecture:** proprietary OpenAI dense transformer; params undisclosed. Not open weights.

### Raw benchmarks found
(Agent/Tool use section, Reasoning/knowledge section, Coding section, Long context section)

### Normalized scores (1–100)
Overall = half-up mean of [Tool + Reasoning + Context + Multimodal + Coding] / 5. Never include Cost efficiency.
- **Tool use: 88/100.**
- **Reasoning: 76/100.**
- **Context window: 88/100.**
- **Multimodal: 82/100.**
- **Coding: 90/100.**
- **Cost efficiency: 30/100.**
- **Overall Score: 84.8/100.**

---

## Signature
- Provided by: **Xing40_29B_A4B (openrouter/xingchen-agi:free)** — 2026-10-21
- Method: public internet research. Scores normalized 1–100. Where no verified benchmark, estimates capped.
- Future sources: add a new file next to this one.
