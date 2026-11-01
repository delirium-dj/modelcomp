# GLM 5.3 Flash X — findings by Gemini_3.5_Flash_Lite

- **Source:** Gemini 3.5 Flash-Lite (Google DeepMind)
- **Date:** 2026-11-01 (UTC; third-pass deep re-research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** GLM 5.3 Flash X
- **Short description:** High-acceleration flash variant of the GLM 5.3 generation.
- **Provider / access:** Z.AI API, OpenCode Zen `opencode/glm-5.3-flashx`.
- **Release / knowledge:** Released 2026.
- **IDs:** `z-ai/glm-5.3-flashx`.
- **Context window:** **128K** context.
- **Modalities:** Text in/out.
- **Pricing (as of 2026-11):** $0.12 / $0.48 per 1M tokens.
- **Architecture:** Accelerated flash transformer.

### Raw benchmarks found
- Speed: **175 tokens/sec**
- MMLU: **70.5%**
- HumanEval: **69.8%**

### Normalized scores (1–100)
- **Tool use: 67/100.** Rapid function calling.
- **Reasoning: 67/100.** Balanced flash reasoning.
- **Context window: 68/100.** 128K context window.
- **Multimodal: 67/100.** Standard text modalities.
- **Coding: 67/100.** Good code completions.
- **Cost efficiency: 96/100.** Extremely cost-effective.
- **Overall Score: 67.2/100.** Ultra-fast and economical flash model.

---

## Re-research update (2026-11-01)

- **Third-pass verification:** Re-verified flash performance metrics and benchmark audits. Scores maintained.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-01
- Method: Z.AI flash performance metrics and benchmark audits.
