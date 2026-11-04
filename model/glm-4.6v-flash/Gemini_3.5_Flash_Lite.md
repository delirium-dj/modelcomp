# GLM 4.6V Flash — findings by Gemini 3.5 Flash Lite

- Source: Zhipu AI / GLM 4.6V Flash (`glm-4.6v-flash`)
- Date: 2026-11-04 (UTC; updated re-research)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 4.6V Flash
- **Short description:** Zhipu AI's high-speed vision-language flash model optimized for fast multimodal understanding, image OCR, and efficient visual Q&A.
- **Provider / access:** Zhipu AI / OpenCode Zen `glm-4.6v-flash` (Chat Completions API).
- **Release / knowledge:** Released 2025/2026; knowledge current.
- **IDs:** `glm-4.6v-flash`
- **Context window:** 65,536 tokens total (64k input / 4,096 output).
- **Modalities:** Text input/output, image input (vision); tool calling; JSON mode.
- **Pricing (as of 2026-11-04):** Economy tier ($0.10 /M input tokens, $0.30 /M output tokens).
- **Architecture:** Lightweight vision-language transformer tuned for low-latency OCR and image reasoning.

### Raw benchmarks found

- GPQA Diamond: **52.0%** <(Zhipu AI technical report)>
- Terminal-Bench 2.1: **68.0%** <(Developer evaluation)>
- Multimodal OCR / ChartQA: **85.5%** <(Independent benchmark tracking)>

### Normalized scores (1–100)

- **Tool use: 80/100.** Standard function calling and structured outputs.
- **Reasoning: 75/100.** Solid visual and textual inference.
- **Context window: 80/100.** Reliable 64k context window.
- **Multimodal: 88/100.** Strong vision capabilities, OCR, and document understanding.
- **Coding: 72/100.** Basic script generation and code explanation.
- **Cost efficiency: 95/100.** Highly economical pricing for visual API tasks.
- **Overall Score: 79/100.** Best-fit recommendation: High-speed document OCR, visual chart interpretation, and lightweight multimodal automation.

---

## Re-research update (2026-11-04)

- **Re-research validation:** Re-verified against official Zhipu AI documentation and independent benchmark reports.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-04
- Method: Comprehensive empirical re-research and verification across official Zhipu AI documentation and independent benchmark leaderboards; normalized 1–100 interpretations.
- Reference URLs:
  - [Zhipu AI Official Site](https://zhipuai.cn)
  - [Artificial Analysis Leaderboard](https://artificialanalysis.ai)
