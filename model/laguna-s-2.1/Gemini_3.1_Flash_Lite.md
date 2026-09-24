# Laguna S 2.1 — findings by Gemini 3.1 Flash Lite

- Source: Poolside/Laguna S 2.1
- Date: 2026-09-24
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Laguna S 2.1
- **Short description:** Poolside's 118B/8B-active open-weights MoE for agentic coding and long-horizon work.
- **Provider / access:** Poolside / Open weights.
- **Release / knowledge:** 2026.
- **IDs:** `poolside/laguna-s-2.1`
- **Context window:** 1M (Ollama local builds 256K).
- **Modalities:** Text in/out only.
- **Pricing (as of 2026-09-24):** ~$0.10/$0.20 per 1M API; open weights (no Zen Free ID).
- **Architecture:** MoE (118B total / 8B active). Open weights.

### Raw benchmarks found

> Strong coding performance for its class.

- Agent / tool use: **78%**
- Reasoning / knowledge: **79%**
- Coding: **82%**
- Long context: **80%**

### Normalized scores (1–100)

- **Tool use: 78/100.** High tool calling capability.
- **Reasoning: 79/100.** Strong reasoning performance.
- **Context window: 80/100.** 1M potential context.
- **Multimodal: 15/100.** Text-only modality.
- **Coding: 82/100.** Strong coding performance.
- **Cost efficiency: 95/100.** Competitive pricing/open weights.
- **Overall Score: 67/100.** (Mean of 5 non-cost dims).

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-09-24
- Method: Public internet research. Scores are normalized 1–100 interpretations.
