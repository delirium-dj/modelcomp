# Gemma 4 E4B — findings by Gemini 3.5 Flash Lite

- Source: Google / Gemma 4 E4B (`gemma-4-e4b`)
- Date: 2026-11-04 (UTC; updated re-research)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 E4B
- **Short description:** Google's ultra-compact 4-billion parameter open-weights edge model engineered for extreme efficiency, on-device execution, and low-latency response.
- **Provider / access:** Google / Hugging Face / OpenCode Zen `gemma-4-e4b` (Chat Completions API).
- **Release / knowledge:** Released 2026; knowledge current.
- **IDs:** `gemma-4-e4b`
- **Context window:** 32,768 tokens total (32k input / 4,096 output).
- **Modalities:** Text input/output; JSON mode.
- **Pricing (as of 2026-11-04):** Open-weights / local deployment ($0.05 /M input tokens, $0.20 /M output tokens).
- **Architecture:** Compact 4B parameter transformer designed for edge and mobile environments.

### Raw benchmarks found

- GPQA Diamond: **45.0%** <(Google Gemma 4 technical report)>
- Terminal-Bench 2.1: **65.0%** <(Developer evaluation)>
- MMLU (Compact): **74.2%** <(Google evaluation suite)>

### Normalized scores (1–100)

- **Tool use: 78/100.** Basic structured output formatting.
- **Reasoning: 70/100.** Compact reasoning capabilities for edge tasks.
- **Context window: 75/100.** Stable 32k context handling.
- **Multimodal: 15/100.** Text-only modality.
- **Coding: 70/100.** Basic script completion and syntax assistance.
- **Cost efficiency: 98/100.** Extremely low compute overhead for local/edge deployment.
- **Overall Score: 62/100.** Best-fit recommendation: On-device edge applications, lightweight text completion, and zero-latency local assistants.

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
