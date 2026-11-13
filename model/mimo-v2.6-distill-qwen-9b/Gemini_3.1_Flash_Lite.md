# MiMo V2.6 Distill Qwen 9B — findings by Gemini 3.1 Flash Lite

- Source: Xiaomi/MiMo V2.6 Distill Qwen 9B
- Date: 2026-11-13
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 Distill Qwen 9B
- **Short description:** Xiaomi's 9.41B dense model for agentic-RL research baselines.
- **Provider / access:** Xiaomi (https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B). MIT open-weights.
- **Release / knowledge:** 2026; knowledge cutoff unknown.
- **IDs:** `XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B` (MIT License)
- **Context window:** 262K total.
- **Modalities:** Text in/out.
- **Pricing (as of 2026-11-13):** Open-weights; self-hostable.
- **Architecture:** Dense (9.41B).

### Raw benchmarks found

- SWE-bench Verified: **44.6%** (Xiaomi meta.json)

### Normalized scores (1–100)

- **Tool use: 75/100.** Research baseline performance.
- **Reasoning: 70/100.** Research-grade reasoning.
- **Context window: 80/100.** 262K capacity.
- **Multimodal: 15/100.** Text-only.
- **Coding: 75/100.** Coding-agent research base (44.6% SWE-bench Verified).
- **Cost efficiency: 100/100.** Open-weights / self-hostable.
- **Overall Score: 63/100.** Specialized checkpoint for agentic-RL research.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-11-13
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Xiaomi MiMo](https://mimo.mi.com)
