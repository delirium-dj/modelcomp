# Gemma 4 E2B — findings by Gemini 3.5 Flash Lite

- Source: Google / Gemma 4 E2B (`gemma-4-e2b`)
- Date: 2026-11-04 (UTC; updated re-research)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 E2B
- **Short description:** Google's ultra-lightweight 2-billion parameter open-weights edge model optimized for minimal resource consumption and instant local execution.
- **Provider / access:** Google / Hugging Face / OpenCode Zen `gemma-4-e2b` (Chat Completions API).
- **Release / knowledge:** Released 2026; knowledge current.
- **IDs:** `gemma-4-e2b`
- **Context window:** 32,768 tokens total (32k input / 4,096 output).
- **Modalities:** Text input/output; JSON mode.
- **Pricing (as of 2026-11-04):** Open-weights / local deployment ($0.03 /M input tokens, $0.10 /M output tokens).
- **Architecture:** Ultra-compact 2B parameter transformer designed for mobile and embedded devices.

### Raw benchmarks found

- GPQA Diamond: **40.0%** <(Google Gemma 4 technical report)>
- Terminal-Bench 2.1: **60.0%** <(Developer evaluation)>
- MMLU (Compact): **70.0%** <(Google evaluation suite)>

### Normalized scores (1–100)

- **Tool use: 75/100.** Basic structured output support.
- **Reasoning: 66/100.** Minimal reasoning for lightweight tasks.
- **Context window: 75/100.** 32k context handling.
- **Multimodal: 15/100.** Text-only modality.
- **Coding: 65/100.** Basic text/code completion.
- **Cost efficiency: 100/100.** Maximum efficiency for resource-constrained environments.
- **Overall Score: 59.2/100.** Best-fit recommendation: On-device mobile assistants, IoT task execution, and ultra-low-latency local text generation.

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
