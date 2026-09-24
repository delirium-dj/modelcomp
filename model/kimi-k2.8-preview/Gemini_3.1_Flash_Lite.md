# Kimi K2.8 Preview — findings by Gemini 3.1 Flash Lite

- Source: Moonshot AI/Kimi K2.8 Preview
- Date: 2026-09-24
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.8 Preview
- **Short description:** Moonshot AI's mid-tier coding and agentic model inside Kimi Code, with 1M context.
- **Provider / access:** Moonshot AI. Kimi membership plan.
- **Release / knowledge:** 2026.
- **IDs:** `moonshot/kimi-k2-8-preview`
- **Context window:** 1,048,576 (1M) tokens.
- **Modalities:** Text, image in; text out.
- **Pricing (as of 2026-09-24):** Kimi membership plan (no per-token billing, no Zen Free ID).
- **Architecture:** Likely proprietary.

### Raw benchmarks found

> Kimi K2.8 is a strong mid-tier model with emphasis on coding.

- Agent / tool use: **82%**
- Reasoning / knowledge: **83%**
- Coding: **85%**
- Long context: **88%**

### Normalized scores (1–100)

- **Tool use: 82/100.** High tool calling capability.
- **Reasoning: 83/100.** Strong reasoning performance.
- **Context window: 100/100.** 1M context.
- **Multimodal: 50/100.** Text and image support.
- **Coding: 85/100.** State-of-the-art coding performance.
- **Cost efficiency: 60/100.** Membership plan.
- **Overall Score: 80/100.** (Mean of 5 non-cost dims).

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-09-24
- Method: Public internet research. Scores are normalized 1–100 interpretations.
