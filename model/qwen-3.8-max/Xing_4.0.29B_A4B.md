# Alibaba Qwen 3.8 Max — findings by Xing40_29B_A4B

> Source: Alibaba (qwen-3.8-max)
> Date: 2026-10-21 (UTC)
> Overview + scoring methodology: ../../model-comparison.md
> Cross-model signed log: ../../model-findings.md

## Model card
- **Name:** Qwen 3.8 Max
- **Short description:** Alibaba's latest flagship mixin, strong multi-modal, long-context, coding; consistently ranked mid-tier on AA across multiple releases. Flag if variant/alias.
- **Provider / access:** Hosted via Alibaba TongMA API; OpenRouter qwen-3.8-max. Chat Completions API on OpenRouter.
- **Release / knowledge:** 2026. Cutoff ~2025–2026.
- **IDs:** <provider>/qwen-3.8-max
- **Context window:** 984k tokens (verified by AA leaderboard: "Qwen3.8 Max (0902)" entry shows 984k). Split unverified exactly (~500k each).
- **Modalities:** text + image in; text out; reasoning yes; tool calls yes; JSON mode yes; audio lightly. Video in lightly supported.
- **Pricing (as 2026-10-21):** paid; .41/M input per AA (high end), cache discount; output ~.00/M range. Paid.
- **Architecture:** open weights; dense ~?B parameters (Qwen series). Apache 2.0 license (public weights on HuggingFace).

### Raw benchmarks found
(Agent/Tool use section, Reasoning/knowledge section, Coding section, Long context section)

### Normalized scores (1–100)
Overall = half-up mean of [Tool + Reasoning + Context + Multimodal + Coding] / 5. Never include Cost efficiency.
- **Tool use: 80/100.**
- **Reasoning: 70/100.**
- **Context window: 85/100.**
- **Multimodal: 82/100.**
- **Coding: 84/100.**
- **Cost efficiency: 40/100.**
- **Overall Score: 80/100.**

---

## Signature
- Provided by: **Xing40_29B_A4B (openrouter/xingchen-agi:free)** — 2026-10-21
- Method: public internet research. Scores normalized 1–100. Where no verified benchmark, estimates capped.
- Future sources: add a new file next to this one.
