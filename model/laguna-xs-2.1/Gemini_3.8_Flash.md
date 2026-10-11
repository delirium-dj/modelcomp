# Laguna XS 2.1 — findings by Gemini 3.8 Flash

- Source: Poolside (`poolside/laguna-xs-2.1`)
- Date: 2026-09-26 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Laguna XS 2.1
- **Short description:** Poolside's open-weights 33B sparse mixture-of-experts model (3B active parameters per token) tailored for local agentic coding and developer workflows.
- **Provider / access:** Poolside API, OpenRouter (`poolside/laguna-xs-2.1`), and HuggingFace weights (BF16, FP8, NVFP4, INT4).
- **Release / knowledge:** 2026-07-02 release; knowledge cutoff mid-2026.
- **IDs:** `poolside/laguna-xs-2.1`. Open weights model; free local execution or low-cost API.
- **Context window:** 262,144 tokens total (262K context window).
- **Modalities:** Text and code input; text, code, structured output, and tool-calling output; interleaved thinking mode.
- **Pricing (as of 2026-07):** $0.06 – $0.10 / 1M input tokens, $0.12 – $0.20 / 1M output tokens, $0.05 / 1M cache read. Open weights free under OpenMDW-1.1.
- **Architecture:** 33B total / 3B active parameter sparse MoE with 256 routed experts and 1 shared expert across 40 layers.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **37.5%** mean pass@1 (Poolside model card / gradually.ai, Jul 2026)
- OSWorld / Tau-bench: no verified public score found

Reasoning / knowledge:

- Interleaved thinking mode supported across 256K context.
- GPQA Diamond: no verified public score found
- Humanity's Last Exam: no verified public score found

Coding:

- SWE-bench Verified: **70.9%** mean pass@1 (Poolside model card / gradually.ai, Jul 2026)
- SWE-bench Multilingual: **63.1%** mean pass@1 (Poolside model card, Jul 2026)
- SWE-bench Pro (Public Dataset): **47.6%** mean pass@1 (Poolside model card, Jul 2026)
- LiveCodeBench: no verified public score found

Long context:

- 262K token context window evaluated with DFlash speculator models for accelerated inference.

### Normalized scores (1–100)

- **Tool use: 62/100.** Moderate agentic execution reflected by 37.5% on Terminal-Bench 2.0, capped for a lightweight 3B-active MoE architecture.
- **Reasoning: 60/100.** Baseline chain-of-thought and algorithmic logic supported through interleaved thinking, but lacks frontier diamond benchmark results.
- **Context window: 75/100.** Standard 262K token context ceiling with high token throughput and native local runner support.
- **Multimodal: 15/100.** Text and code-only model without native vision, audio, or video capabilities.
- **Coding: 74/100.** Respectable coding performance for an efficient 3B active MoE (70.9% SWE-bench Verified, 63.1% SWE-bench Multilingual, 47.6% SWE-bench Pro).
- **Cost efficiency: 97/100.** Extremely cost-effective at $0.06 / $0.12 per 1M tokens ($0.05 cached) alongside permissive OpenMDW-1.1 weights.
- **Overall Score: 57/100.** Ultra-lean local developer model with surprisingly capable SWE-bench performance and tiny compute footprint, capped overall by text-only modality.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-09-26 UTC
- Method: Public internet research into Poolside's official release documentation, technical reports, and benchmark tracking indices; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
