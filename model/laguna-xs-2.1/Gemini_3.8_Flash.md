# Laguna XS 2.1 — findings by Gemini 3.8 Flash

- Source: Google Gemini 3.8 Flash (`gemini-3.8-flash`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Laguna XS 2.1
- **Short description:** Poolside's open-weights 33B sparse Mixture-of-Experts model (3B active parameters per token) tailored for local agentic coding and developer workflows under an OpenMDW-1.1 license.
- **Provider / access:** Poolside API, [OpenRouter](https://openrouter.ai/models/poolside/laguna-xs-2.1) (`poolside/laguna-xs-2.1` and `:free`), and [Hugging Face](https://huggingface.co/poolside/Laguna-XS-2.1) weights (BF16, FP8, NVFP4, INT4).
- **Release / knowledge:** July 2, 2026.
- **Lifecycle status:** Active; scheduled removal from OpenRouter hosted endpoints on October 31, 2026 (weights remain permanently accessible for self-hosting).
- **IDs:** `poolside/laguna-xs-2.1`, `poolside/laguna-xs-2.1:free`
- **Context window:** 262,144 tokens total (262K context window; max output 32,768 tokens).
- **Modalities:** Text and code input; text, code, structured output, and tool-calling output; interleaved thinking mode.
- **Pricing (as of 2026-10-11):** $0.06 / 1M input tokens, $0.12 / 1M output tokens ($0.03 / 1M cached read); free tier available (`poolside/laguna-xs-2.1:free`); open-weights free under OpenMDW-1.1.
- **Architecture:** 33B total / 3B active parameter sparse MoE with 256 routed experts and 1 shared expert across 40 layers.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **37.5%** mean pass@1 (Harbor framework with Poolside agent harness)
- OSWorld / Tau-bench: no verified public score found.

Reasoning / knowledge:

- Interleaved thinking mode supported across 256K context.
- GPQA Diamond / HLE: no verified public score found.

Coding:

- SWE-bench Verified: **70.9%** mean pass@1
- SWE-bench Multilingual: **63.1%** mean pass@1
- SWE-bench Pro: **47.6%** mean pass@1

Long context:

- 262K token context window evaluated with DFlash speculator models for accelerated inference.

### Normalized scores (1–100)

- **Tool use: 62/100.** Moderate agentic execution reflected by 37.5% on Terminal-Bench 2.0, capped for a lightweight 3B-active MoE architecture.
- **Reasoning: 60/100.** Baseline chain-of-thought and algorithmic logic supported through interleaved thinking, but lacks frontier diamond benchmark results.
- **Context window: 75/100.** Standard 262K token context ceiling with high token throughput and native local runner support.
- **Multimodal: 15/100.** Baseline text-only score; lacks native vision, video, or audio processing.
- **Coding: 74/100.** Respectable coding performance for an efficient 3B active MoE (70.9% SWE-bench Verified, 63.1% SWE-bench Multilingual, 47.6% SWE-bench Pro).
- **Cost efficiency: 98/100.** Extremely cost-effective at $0.06 / $0.12 per 1M tokens ($0.03 cached) alongside a free tier on OpenRouter and permissive OpenMDW-1.1 weights.
- **Overall Score: 57/100.** Arithmetic mean of non-cost metrics: (62 + 60 + 75 + 15 + 74) / 5 = 57.2 → 57. Ultra-lean local developer model with capable SWE-bench performance and tiny compute footprint, capped overall by text-only modality.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: Public benchmark evaluation and analysis of Poolside technical announcements, Hugging Face model cards, OpenRouter endpoints, and Artificial Analysis leaderboards.
