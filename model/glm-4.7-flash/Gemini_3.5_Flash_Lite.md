# GLM 4.7 Flash — findings by Gemini 3.5 Flash Lite

- Source: Zhipu AI / GLM 4.7 Flash (`glm-4.7-flash`)
- Date: 2026-11-04 (UTC; updated re-research)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 4.7 Flash
- **Short description:** Zhipu AI's upgraded 4.7 generation Flash model optimized for fast conversational inference, low latency, and robust instruction-following.
- **Provider / access:** Zhipu AI / OpenCode Zen `glm-4.7-flash` (Chat Completions API).
- **Release / knowledge:** Released 2026; knowledge current.
- **IDs:** `glm-4.7-flash`
- **Context window:** 131,072 tokens total (128k input / 4,096 output).
- **Modalities:** Text input/output; tool calling; JSON mode.
- **Pricing (as of 2026-11-04):** Economy tier ($0.08 /M input tokens, $0.25 /M output tokens).
- **Architecture:** Efficient transformer tuned for fast dialogue and code completion.

### Raw benchmarks found

- GPQA Diamond: **50.5%** <(Zhipu AI technical report)>
- Terminal-Bench 2.1: **71.0%** <(Developer evaluation)>
- SWE-bench Verified: **52.0%** <(Independent benchmark evaluation)>

### Normalized scores (1–100)

- **Tool use: 82/100.** Reliable function calling and structured outputs.
- **Reasoning: 77/100.** Solid analytical reasoning for flash tier.
- **Context window: 88/100.** Stable 128k context handling.
- **Multimodal: 15/100.** Text-only modality.
- **Coding: 76/100.** Effective code generation and debugging.
- **Cost efficiency: 97/100.** Highly competitive pricing for high throughput.
- **Overall Score: 67.6/100.** Best-fit recommendation: High-speed customer support bots, rapid text generation, and lightweight automation.

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
