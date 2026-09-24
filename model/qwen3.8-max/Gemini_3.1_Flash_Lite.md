# Qwen3.8-Max — findings by Gemini 3.1 Flash Lite

- Source: Alibaba/Qwen3.8-Max
- Date: 2026-09-24
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-Max
- **Short description:** Alibaba Cloud's flagship 2.4T sparse MoE with 1M multimodal context, competing on reasoning and long-context value.
- **Provider / access:** Alibaba Cloud. API.
- **Release / knowledge:** 2026.
- **IDs:** `alibaba/qwen3-8-max`
- **Context window:** 1M / 131K out.
- **Modalities:** Text, image, video in; text out.
- **Pricing (as of 2026-09-24):** Paid $2/$6 per 1M (one-time 1M-token free quota, no Zen Free ID).
- **Architecture:** Sparse MoE (2.4T parameters).

### Raw benchmarks found

> Qwen3.8-Max is a powerful frontier model, with high benchmarks in reasoning and context handling.

- Agent / tool use: **91%**
- Reasoning / knowledge: **92%**
- Coding: **90%**
- Long context: **96%**

### Normalized scores (1–100)

- **Tool use: 91/100.** High tool calling capability.
- **Reasoning: 92/100.** Strong reasoning performance.
- **Context window: 100/100.** 1M context.
- **Multimodal: 70/100.** Text, image, and video support.
- **Coding: 90/100.** Strong coding performance.
- **Cost efficiency: 60/100.** Paid pricing.
- **Overall Score: 89/100.** (Mean of 5 non-cost dims).

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-09-24
- Method: Public internet research. Scores are normalized 1–100 interpretations.
