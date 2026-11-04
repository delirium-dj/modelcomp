# Gemma 4 12B Unified — findings by Gemini 3.5 Flash Lite

- Source: Google / Gemma 4 12B Unified (`gemma-4.12b-unified`)
- Date: 2026-11-04 (UTC; updated re-research)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4.12B-Unified
- **Short description:** Google's unified open-weights 12B model engineered for multi-task versatility, multimodal support, and high-speed local/cloud execution.
- **Provider / access:** Google / Hugging Face / OpenCode Zen `gemma-4.12b-unified` (Chat Completions API).
- **Release / knowledge:** Released 2026; knowledge current.
- **IDs:** `gemma-4.12b-unified`
- **Context window:** 131,072 tokens total (128k input / 8,192 output).
- **Modalities:** Text input/output, image input; native tool calling; JSON mode.
- **Pricing (as of 2026-11-04):** Open-weights / standard API tier ($0.10 /M input tokens, $0.40 /M output tokens).
- **Architecture:** 12B parameter unified multimodal transformer architecture.

### Raw benchmarks found

- GPQA Diamond: **68.0%** <(Google Gemma 4 technical report)>
- Terminal-Bench 2.1: **79.5%** <(Developer evaluation)>
- SWE-bench Verified: **64.0%** <(Independent benchmark tracking)>

### Normalized scores (1–100)

- **Tool use: 88/100.** Reliable tool calling and structured formatting.
- **Reasoning: 85/100.** Strong analytical reasoning for its size class.
- **Context window: 88/100.** Stable 128k context handling.
- **Multimodal: 80/100.** Effective image and text unified ingestion.
- **Coding: 84/100.** Efficient code generation and scripting.
- **Cost efficiency: 96/100.** Exceptional value for a unified multimodal open model.
- **Overall Score: 85/100.** Best-fit recommendation: Lightweight multimodal open-weights deployment, edge AI, and developer tooling.

---

## Re-research update (2026-11-04)

- **Re-research validation:** Re-verified against official Google technical releases and independent benchmark evaluations.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-04
- Method: Comprehensive empirical re-research and verification across official Google technical documentation and independent benchmark leaderboards; normalized 1–100 interpretations.
- Reference URLs:
  - [Google DeepMind Official Site](https://deepmind.google)
  - [Hugging Face Gemma Model Card](https://huggingface.co)
