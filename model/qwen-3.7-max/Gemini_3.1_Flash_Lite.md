# Qwen 3.7 Max — findings by Gemini 3.1 Flash Lite

- Source: Alibaba/Qwen 3.7 Max
- Date: 2026-11-13
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7 Max
- **Short description:** Alibaba's proprietary agent model for long-horizon coding and office automation.
- **Provider / access:** Alibaba (https://qwenlm.github.io). Chat Completions API.
- **Release / knowledge:** 2026; knowledge cutoff unknown.
- **IDs:** `alibaba/qwen-3.7-max` (Paid only)
- **Context window:** 1M tokens total; 131K output.
- **Modalities:** Text in/out.
- **Pricing (as of 2026-11-13):** Paid ~$1.48/$4.43 per 1M (OpenRouter).
- **Architecture:** Proprietary (Max backbone).

### Raw benchmarks found

- SWE-bench Verified: **80.4%** (Alibaba meta.json)
- SWE-Pro: **60.6%** (Alibaba meta.json)

### Normalized scores (1–100)

- **Tool use: 90/100.** Capable agentic performance.
- **Reasoning: 88/100.** Solid reasoning.
- **Context window: 95/100.** 1M context.
- **Multimodal: 15/100.** Text-only.
- **Coding: 91/100.** Strong coding capabilities (80.4% SWE-bench Verified).
- **Cost efficiency: 70/100.** Competitive for the performance level.
- **Overall Score: 75.8/100.** Dependable agentic model for coding and office automation.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-11-13
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [QwenLM](https://qwenlm.github.io)
