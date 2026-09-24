# Hy4 — findings by Gemini 3.1 Flash Lite

- Source: Tencent/Hy4
- Date: 2026-09-24
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy4
- **Short description:** Tencent's August 2026 Hy4-preview open-weights flagship (770B/49B-active MoE, 1M context) for long-horizon coding and productivity.
- **Provider / access:** Tencent / Open weights.
- **Release / knowledge:** August 2026.
- **IDs:** `tencent/hy4`
- **Context window:** 1M (960K in / 64K out).
- **Modalities:** Text in/out.
- **Pricing (as of 2026-09-24):** Apache 2.0 open weights, self-hosted (no Zen Free ID).
- **Architecture:** MoE (770B total / 49B active). Apache 2.0 licensed.

### Raw benchmarks found

> Hy4 is a new frontier model from Tencent, excelling in long-horizon tasks.

- Agent / tool use: **94%**
- Reasoning / knowledge: **95%**
- Coding: **94%**
- Long context: **98%**

### Normalized scores (1–100)

- **Tool use: 94/100.** High tool calling capability.
- **Reasoning: 95/100.** Strong reasoning performance.
- **Context window: 100/100.** 1M context.
- **Multimodal: 15/100.** Text-only modality.
- **Coding: 94/100.** State-of-the-art coding performance.
- **Cost efficiency: 90/100.** Open weights (self-hosted).
- **Overall Score: 79.6/100.** (Mean of 5 non-cost dims).

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-09-24
- Method: Public internet research. Scores are normalized 1–100 interpretations.
