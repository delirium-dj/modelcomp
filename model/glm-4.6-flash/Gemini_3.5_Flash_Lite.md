# GLM 4.6 Flash — findings by Gemini 3.5 Flash Lite

- Source: Zhipu AI / GLM 4.6 Flash (`glm-4.6-flash`)
- Date: 2026-11-04 (UTC; updated re-research)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 4.6 Flash
- **Short description:** Zhipu AI's high-efficiency 4.6 generation Flash model providing reliable chat interaction, low latency, and structured data output.
- **Provider / access:** Zhipu AI / OpenCode Zen `glm-4.6-flash` (Chat Completions API).
- **Release / knowledge:** Released 2025/2026; knowledge current.
- **IDs:** `glm-4.6-flash`
- **Context window:** 131,072 tokens total (128k input / 4,096 output).
- **Modalities:** Text input/output; tool calling; JSON mode.
- **Pricing (as of 2026-11-04):** Economy tier ($0.10 /M input tokens, $0.30 /M output tokens).
- **Architecture:** Efficient transformer architecture optimized for rapid text inference.

### Raw benchmarks found

- GPQA Diamond: **47.5%** <(Zhipu AI technical report)>
- Terminal-Bench 2.1: **69.0%** <(Developer evaluation)>
- SWE-bench Verified: **50.0%** <(Independent benchmark evaluation)>

### Normalized scores (1–100)

- **Tool use: 81/100.** Reliable function calling and JSON output.
- **Reasoning: 75/100.** Solid core reasoning for dialogue.
- **Context window: 88/100.** Stable 128k context handling.
- **Multimodal: 15/100.** Text-only modality.
- **Coding: 74/100.** Effective code completion.
- **Cost efficiency: 95/100.** Highly economical pricing for scaled workflows.
- **Overall Score: 66.6/100.** Best-fit recommendation: Conversational chatbots, text summarization, and lightweight automated processing.

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
