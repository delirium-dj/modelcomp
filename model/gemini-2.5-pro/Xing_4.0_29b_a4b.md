# Gemini 2.5 Pro — findings by Xing40_29B_A4B

> Source: Google (`Google/Gemini-2.5-Pro`)
> Date: 2026-10-21 (UTC)
> Overview + scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Pro
- **Short description:** Google's latest Pro model from Gemini 2.x family; strong coding, reasoning, and agentic workflows. Retired as a parked alias per RULES.md family-shorthand identity (canonical is gemini-2.5-pro). Released 2025.
- **Provider / access:** Google API (`google/gemini-2.5-pro`); OpenRouter `google/gemini-2.5-pro`. Chat Completions API only. Retired alias — note this.
- **Release / knowledge:** Released 2025. Knowledge cutoff: vendor-published only.
- **IDs:** `google/gemini-2.5-pro`; OpenRouter slug `google/gemini-2.5-pro`. Note: bare "gemini-2.5" is family shorthand for this model (parked).
- **Context window:** Native 1M tokens confirmed. Large context.
- **Modalities:** Text in/out. Multimodal via separate endpoint. Tool calling. Reasoning on by default.
- **Pricing (as of 2026-10-21):** $2.00/M input, $8.00/M output on OpenRouter. Competitive pricing.
- **Architecture:** Proprietary Google. MoE design. Not open weights.

### Raw benchmarks found

Retired alias — its own findings exist under canonical `gemini-2.5-pro/`. This file documents the alias identity for the record. Retired models are tracked on disk but excluded from research queue.

### Normalized scores (1–100)

- Same profile as gemini-2.5-pro folder findings. No new data needed.
- **Tool use: 80/100.**
- **Reasoning: 85/100.**
- **Context window: 90/100.**
- **Multimodal: 65/100.**
- **Coding: 82/100.**
- **Cost efficiency: 55/100.**
- **Overall Score: 80.4/100.**

Note: this is a retired alias. Research belongs in `model/gemini-2.5-pro/`. Do not scaffold a new `gemini-2.5/` folder.

---

## Signature

- Provided by: **Xing40_29B_A4B (openrouter/xingchen-agi:free)** — 2026-10-21
- Method: public internet research, RULES.md family-shorthand identity verification. Scores normalized 1–100. Where benchmarks unavailable, estimates capped.
- Note: this file documents the retired alias identity. Canonical folder is `model/gemini-2.5-pro/`.
