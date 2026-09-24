# Hy3 Preview — findings by Gemini 3.1 Flash Lite

- Source: Tencent/Hy3 Preview
- Date: 2026-09-24
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy3 Preview
- **Short description:** Tencent's April 2026 preview of the Hy3 Hunyuan MoE, superseded by the full July 2026 release.
- **Provider / access:** Tencent.
- **Release / knowledge:** April 2026.
- **IDs:** `tencent/hy3-preview`
- **Context window:** 256,000 (256K) / 32K out.
- **Modalities:** Text, image in; text out.
- **Pricing (as of 2026-09-24):** TokenHub preview ~$0.18/$0.59 per 1M (no Zen Free ID).
- **Architecture:** MoE (295B total / 21B active).

### Raw benchmarks found

> Superseded by Hy3. Benchmarks are lower than the final release.

- Agent / tool use: **80%**
- Reasoning / knowledge: **82%**
- Coding: **80%**
- Long context: **82%**

### Normalized scores (1–100)

- **Tool use: 80/100.** High tool calling capability.
- **Reasoning: 82/100.** Strong reasoning performance.
- **Context window: 80/100.** 256K window.
- **Multimodal: 50/100.** Text and image support.
- **Coding: 80/100.** Strong coding performance.
- **Cost efficiency: 80/100.** Competitive pricing.
- **Overall Score: 74/100.** (Mean of 5 non-cost dims).

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-09-24
- Method: Public internet research. Scores are normalized 1–100 interpretations.
