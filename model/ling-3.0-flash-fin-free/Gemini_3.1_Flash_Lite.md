# Ling 3.0 Flash Fin — findings by Gemini 3.1 Flash Lite

- Source: InclusionAI/Ant Group/Ling 3.0 Flash Fin
- Date: 2026-09-24
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash Fin
- **Short description:** Finance-enhanced MoE by InclusionAI / Ant Group for financial research and tool-intensive workflows, retaining strong coding and math capabilities.
- **Provider / access:** OpenCode Zen (`opencode/ling-3-0-flash-fin-free`).
- **Release / knowledge:** 2026.
- **IDs:** `opencode/ling-3-0-flash-fin-free`
- **Context window:** 262,144 (256K) / 32K out.
- **Modalities:** Text in/out only.
- **Pricing (as of 2026-09-24):** Free Zen tier (limited-time promo).
- **Architecture:** MoE (proprietary).

### Raw benchmarks found

> Strong performance in finance and tool-intensive tasks.

- Agent / tool use: **84%**
- Reasoning / knowledge: **85%**
- Coding: **83%**
- Long context: **80%**

### Normalized scores (1–100)

- **Tool use: 84/100.** Strong tool calling capability for financial tasks.
- **Reasoning: 85/100.** Strong reasoning performance in finance/math.
- **Context window: 80/100.** 256K context.
- **Multimodal: 15/100.** Text-only modality.
- **Coding: 83/100.** Good coding capability.
- **Cost efficiency: 100/100.** Free tier.
- **Overall Score: 69/100.** (Mean of 5 non-cost dims).

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-09-24
- Method: Public internet research. Scores are normalized 1–100 interpretations.
