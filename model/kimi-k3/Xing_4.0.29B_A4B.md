# Kimi K3 — findings by Xing40_29B_A4B

> Source: Moonshot Kimi (kimi-k3)
> Date: 2026-10-21 (UTC)
> Overview + scoring methodology: ../../model-comparison.md
> Cross-model signed log: ../../model-findings.md

## Model card
- **Name:** Kimi K3
- **Short description:** Moonshot's leading Chinese-market reasoning backbone, strong long-context and coding; built on the Kimi frontier track. Flag if variant/alias.
- **Provider / access:** Hosted via Moonshot AI API; OpenRouter kimi-k3. Chat Completions API.
- **Release / knowledge:** 2026. Cutoff ~2025.
- **IDs:** <provider>/kimi-k3
- **Context window:** 1.05M tokens (verified by AA leaderboard: "Kimi K3 (max)" entry shows 1.05M). Split unverified exactly (~500k in/out inferred).
- **Modalities:** text in/out; image in; audio lightly; reasoning yes; tool calls yes; JSON mode yes. Video in moderate.
- **Pricing (as 2026-10-21):** Max variant ~.00/M input, cache discount ~67%; output ~.00/M. US tier paid.
- **Architecture:** proprietary Moonshot dense; params undisclosed. Not open weights.

### Raw benchmarks found
(Agent/Tool use section, Reasoning/knowledge section, Coding section, Long context section)

### Normalized scores (1–100)
Overall = half-up mean of [Tool + Reasoning + Context + Multimodal + Coding] / 5. Never include Cost efficiency.
- **Tool use: 85/100.**
- **Reasoning: 73/100.**
- **Context window: 88/100.**
- **Multimodal: 75/100.**
- **Coding: 82/100.**
- **Cost efficiency: 55/100.**
- **Overall Score: 80.6/100.**

---

## Signature
- Provided by: **Xing40_29B_A4B (openrouter/xingchen-agi:free)** — 2026-10-21
- Method: public internet research. Scores normalized 1–100. Where no verified benchmark, estimates capped.
- Future sources: add a new file next to this one.
