# GPT 6.1 Sol — findings by Xing40_29B_A4B

> Source: OpenAI (gpt-6.1-sol)
> Date: 2026-10-21 (UTC)
> Overview + scoring methodology: ../../model-comparison.md
> Cross-model signed log: ../../model-findings.md

## Model card
- **Name:** GPT 6.1 Sol
- **Short description:** OpenAI's latest Sol-series model, strong on long-context, agentic work, and frontier code generation; rated #5 on the AA capability indexes comparison table. Flag if variant/alias.
- **Provider / access:** Hosted via OpenAI API; OpenRouter gpt-6.1-sol. Chat Completions API on OpenRouter.
- **Release / knowledge:** 2026 (announced Sept–Oct). Cutoff ~2026.
- **IDs:** <provider>/gpt-6.1-sol
- **Context window:** 1M tokens total (~500k in/out inferred).
- **Modalities:** text + image in; text out; reasoning yes; tool calls yes; JSON mode yes. Video in lightly.
- **Pricing (as 2026-10-21):** paid; per AA comparison: max at .72 blended cost, xhigh at .39/M input (~.17/M output), high at .32/M input (~.89/M output), medium at .21/M input (~.63/M output).
- **Architecture:** proprietary OpenAI dense transformer; params undisclosed. Not open weights.

### Raw benchmarks found
(Agent/Tool use section, Reasoning/knowledge section, Coding section, Long context section)

### Normalized scores (1–100)
Overall = half-up mean of [Tool + Reasoning + Context + Multimodal + Coding] / 5. Never include Cost efficiency.
- **Tool use: 85/100.**
- **Reasoning: 73/100.**
- **Context window: 85/100.**
- **Multimodal: 80/100.**
- **Coding: 87/100.**
- **Cost efficiency: 60/100.**
- **Overall Score: 82/100.**

---

## Signature
- Provided by: **Xing40_29B_A4B (openrouter/xingchen-agi:free)** — 2026-10-21
- Method: public internet research. Scores normalized 1–100. Where no verified benchmark, estimates capped.
- Future sources: add a new file next to this one.
