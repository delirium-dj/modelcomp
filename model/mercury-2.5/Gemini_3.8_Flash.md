# Mercury 2.5 — findings by Gemini 3.8 Flash

- Source: Google Gemini 3.8 Flash (`gemini-3.8-flash`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mercury 2.5
- **Short description:** Inception Labs' diffusion-based large language model (dLLM) released in September 2026, generating tokens in parallel at 700–1,100 tokens/second for latency-sensitive code autocomplete, compaction, routing, and high-speed subagent operations.
- **Provider / access:** Inception Labs API (`mercury-2.5`), [OpenRouter](https://openrouter.ai/models/inception/mercury-2.5) (`inception/mercury-2.5`), OpenCode Zen.
- **Release / knowledge:** September 8, 2026.
- **IDs:** `opencode/mercury-2.5`, `inception/mercury-2.5`, `mercury-2.5`
- **Context window:** 260,000 tokens total (260K context window; max output 65,536 tokens).
- **Modalities:** Text in; text and code out; text-only diffusion architecture.
- **Pricing (as of 2026-10-11):** $0.04 / 1M input tokens, $0.15 / 1M output tokens ($0.004 / 1M cached input) on OpenRouter; standard list price $0.20 / $0.75 per 1M tokens.
- **Architecture:** Continuous-discrete diffusion transformer (dLLM) with parallel iterative refinement instead of autoregressive next-token prediction.

### Raw benchmarks found

Agent / tool use:

- Generation speed: **700–1,107 tokens/sec**
- IFBench: **77.0%**
- Terminal-Bench 2.1: **42.0%**
- Tau2-Bench: **72.5%**
- GDPval-AA: **1,110 Elo**

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **12**
- GPQA Diamond: **50.5%** (independent) / **79.0%** (vendor high)
- Humanity's Last Exam (HLE): **8.0%**
- AA-LCR: **60.0%**
- Omniscience Accuracy / Hallucination Rate: **36% / 88%**

Coding:

- SWE-bench Verified: **45.0%**
- SWE-bench Pro: **18.0%**
- LiveCodeBench: **52.0%** pass@1
- SciCode: **24.5%**

Long context:

- 260K token context window with 65K max output buffer evaluated on parallel streaming extraction.

### Normalized scores (1–100)

- **Tool use: 55/100.** Fast tool invocation and structured formatting evidenced by 72.5% on Tau2-Bench, 77.0% on IFBench, and 42.0% on Terminal-Bench 2.1.
- **Reasoning: 52/100.** Basic analytical and logic performance with 50.5% on GPQA Diamond and 12 on AA Intelligence Index, prioritizing generation speed over multi-step reasoning depth.
- **Context window: 75/100.** 260K context window provides solid workspace for long documents and source files.
- **Multimodal: 15/100.** Baseline text-only score; lacks native vision, video, or audio processing.
- **Coding: 58/100.** Capable high-speed code generation marked by 45.0% on SWE-bench Verified and 52.0% on LiveCodeBench at 700+ tok/s.
- **Cost efficiency: 98/100.** Highly economical at $0.04 / $0.15 per 1M tokens ($0.004 cached) on OpenRouter.
- **Overall Score: 51/100.** Arithmetic mean of non-cost metrics: (55 + 52 + 75 + 15 + 58) / 5 = 51.0. Ultra-fast diffusion LLM engineered for subagent pipelines and real-time coding assists, with overall score capped by text-only modality.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: Public benchmark evaluation and analysis of Inception Labs technical releases, OpenRouter pricing, and Artificial Analysis leaderboards.
