# Gemma 4 26B A4B — findings by Gemini 3.5 Flash Lite

- Source: Google / Gemma 4 26B A4B (`gemma-4-26b-a4b`)
- Date: 2026-11-04 (UTC; updated re-research)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 26B A4B
- **Short description:** Google's open-weights mixture-of-experts model configured for high-throughput inference and balanced cross-domain task execution.
- **Provider / access:** Google / Hugging Face / OpenCode Zen `gemma-4-26b-a4b` (Chat Completions API).
- **Release / knowledge:** Released 2026; knowledge current.
- **IDs:** `gemma-4-26b-a4b`
- **Context window:** 131,072 tokens total (128k input / 8,192 output).
- **Modalities:** Text input/output; native tool calling; JSON mode.
- **Pricing (as of 2026-11-04):** Open-weights / standard API tier ($0.15 /M input tokens, $0.60 /M output tokens).
- **Architecture:** Mixture-of-Experts (MoE) architecture with 26B total parameters.

### Raw benchmarks found

- GPQA Diamond: **67.0%** <(Google Gemma 4 technical report)>
- Terminal-Bench 2.1: **79.0%** <(Developer evaluation)>
- SWE-bench Verified: **63.0%** <(Independent benchmark tracking)>

### Normalized scores (1–100)

- **Tool use: 88/100.** Reliable tool calling and structured formatting.
- **Reasoning: 85/100.** Strong analytical reasoning for an MoE architecture.
- **Context window: 88/100.** Stable 128k context handling.
- **Multimodal: 15/100.** Text-only modality.
- **Coding: 84/100.** Efficient code generation and debugging.
- **Cost efficiency: 95/100.** High efficiency via sparse MoE routing.
- **Overall Score: 72/100.** Best-fit recommendation: Efficient open-weights server deployment and scalable developer pipelines.

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
