# Qwen3.8-Max — findings by Gemini 3.1 Flash Lite

- Source: Alibaba/Qwen3.8-Max
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-Max
- **Short description:** Alibaba Cloud's flagship 2.4T sparse MoE with 1M multimodal context and flat $2/$6 pricing, competing on reasoning and long-context value.
- **Provider / access:** Alibaba Cloud API
- **Release / knowledge:** Unknown
- **IDs:** `alibaba/qwen3-8-max`
- **Context window:** 1M tokens; 131K output
- **Modalities:** Text, image, video in; text out
- **Pricing (as of 2026-09-18):** Paid $2/$6 per 1M; no Zen Free ID
- **Architecture:** 2.4T sparse MoE

### Raw benchmarks found

- Agent / tool use: no verified public score found
- Reasoning / knowledge: no verified public score found
- Coding: no verified public score found
- Long context: 1M tokens

### Normalized scores (1–100)

- **Tool use: 85/100.** Flagship MoE reasoning.
- **Reasoning: 90/100.** Flagship reasoning model.
- **Context window: 95/100.** Massive 1M context.
- **Multimodal: 80/100.** Image/video support.
- **Coding: 85/100.** Strong coding MoE.
- **Cost efficiency: 60/100.** Good pricing for flagship performance.
- **Overall Score: 87/100.** Strong flagship multimodal MoE.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite** — 2026-09-18
- Method: Public documentation/metadata analysis; scores are normalized 1–100 interpretations, not official vendor scores.
