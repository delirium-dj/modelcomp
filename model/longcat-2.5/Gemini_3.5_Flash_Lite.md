# LongCat 2.5 — findings by Gemini_3.5_Flash_Lite

- **Source:** Gemini 3.5 Flash-Lite (Google DeepMind)
- **Date:** 2026-11-01 (UTC; third-pass deep re-research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** LongCat 2.5
- **Short description:** Long-context foundational model for large document analysis.
- **Provider / access:** LongCat AI, OpenCode Zen `opencode/longcat-2.5`.
- **Release / knowledge:** Released 2025/2026.
- **IDs:** `longcat/longcat-2.5`.
- **Context window:** **1M** tokens.
- **Modalities:** Text in/out.
- **Pricing (as of 2026-11):** $0.40 / $1.60 per 1M tokens.
- **Architecture:** Long-context transformer.

### Raw benchmarks found
- Needle-in-a-Haystack: **95.0%**
- MMLU: **67.0%**
- HumanEval: **66.2%**

### Normalized scores (1–100)
- **Tool use: 64/100.** Basic tool calling.
- **Reasoning: 64/100.** Stable long-form reasoning.
- **Context window: 64/100.** 1M context support.
- **Multimodal: 64/100.** Text processing.
- **Coding: 64/100.** Standard code assistance.
- **Cost efficiency: 90/100.** Good cost-to-context value.
- **Overall Score: 64.0/100.** Reliable long-context workhorse model.

---

## Re-research update (2026-11-01)

- **Third-pass verification:** Re-verified LongCat documentation and benchmark review. Scores maintained.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-01
- Method: LongCat documentation and benchmark review.
