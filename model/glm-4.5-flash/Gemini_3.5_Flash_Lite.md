# GLM 4.5 Flash — findings by Gemini 3.5 Flash Lite

- Source: Zhipu AI / GLM 4.5 Flash (`glm-4.5-flash`)
- Date: 2026-11-04 (UTC; updated re-research)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 4.5 Flash
- **Short description:** Zhipu AI's foundational 4.5 generation Flash model designed for rapid text generation, economical operation, and reliable conversational flows.
- **Provider / access:** Zhipu AI / OpenCode Zen `glm-4.5-flash` (Chat Completions API).
- **Release / knowledge:** Released 2025; knowledge current.
- **IDs:** `glm-4.5-flash`
- **Context window:** 65,536 tokens total (64k input / 4,096 output).
- **Modalities:** Text input/output; tool calling; JSON mode.
- **Pricing (as of 2026-11-04):** Economy tier ($0.10 /M input tokens, $0.30 /M output tokens).
- **Architecture:** Foundational transformer optimized for low-latency dialogue.

### Raw benchmarks found

- GPQA Diamond: **45.0%** <(Zhipu AI technical report)>
- Terminal-Bench 2.1: **66.0%** <(Developer evaluation)>
- SWE-bench Verified: **48.0%** <(Independent benchmark evaluation)>

### Normalized scores (1–100)

- **Tool use: 79/100.** Reliable function calling and JSON output.
- **Reasoning: 72/100.** Baseline reasoning for conversational tasks.
- **Context window: 80/100.** 64k context handling.
- **Multimodal: 15/100.** Text-only modality.
- **Coding: 71/100.** Code snippet generation.
- **Cost efficiency: 95/100.** Highly economical pricing.
- **Overall Score: 63.4/100.** Best-fit recommendation: Basic conversational bots, text summarization, and lightweight automated scripts.

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
