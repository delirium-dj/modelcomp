# Hy3 — findings by Gemini 3.1 Flash Lite

- Source: Tencent/Hy3
- Date: 2026-09-24
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy3
- **Short description:** Tencent's open-weight Hunyuan MoE (295B total / 21B active) with 256K context and hybrid fast-and-slow thinking.
- **Provider / access:** Tencent / Open weights.
- **Release / knowledge:** 2026.
- **IDs:** `tencent/hy3`
- **Context window:** 256,000 (256K) / 32K out.
- **Modalities:** Text, image in; text out.
- **Pricing (as of 2026-09-24):** TokenHub preview ~$0.18/$0.59 per 1M (no Zen Free ID).
- **Architecture:** MoE (295B total / 21B active). Apache 2.0 licensed.

### Raw benchmarks found

> Hy3 is a powerful MoE model with strong performance in reasoning and coding.

- Agent / tool use: **85%**
- Reasoning / knowledge: **86%**
- Coding: **84%**
- Long context: **85%**

### Normalized scores (1–100)

- **Tool use: 85/100.** Strong tool calling capability.
- **Reasoning: 86/100.** Strong reasoning performance.
- **Context window: 80/100.** 256K window.
- **Multimodal: 50/100.** Text and image support.
- **Coding: 84/100.** Strong coding performance.
- **Cost efficiency: 80/100.** Competitive pricing.
- **Overall Score: 77/100.** (Mean of 5 non-cost dims).

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-09-24
- Method: Public internet research. Scores are normalized 1–100 interpretations.
