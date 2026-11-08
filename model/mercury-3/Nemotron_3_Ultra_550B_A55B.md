# Mercury 3 — findings by Nemotron 3 Ultra 550B A55B

- Source: Inception Labs (`inception/mercury-3`)
- Date: 2026-11-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mercury 3
- **Short description:** Inception Labs' Oct 2026 flagship diffusion LLM (dLLM): non-autoregressive parallel decoding at >1,000 tok/s, 1M/128K at $0.10/$0.35 — GPQA 89.2%, MRCR 75.5%; text-only with tool/function calling and JSON mode.
- **Provider / access:** Inception Labs API, OpenRouter (`inception/mercury-3`); prompt caching on host platforms.
- **Release / knowledge:** 2026-10 release; proprietary commercial license; knowledge cutoff 2026.
- **IDs:** `inception/mercury-3` (Inception Labs / OpenRouter).
- **Context window:** 1,048,576 tokens input / 131,072 tokens output (1M/128K).
- **Modalities:** Text input/output only.
- **Pricing (as of 2026-11-08):** $0.10 per 1M input tokens, $0.35 per 1M output tokens (Inception list pricing); prompt caching available on host platforms.
- **Architecture:** Diffusion-based LLM (dLLM) with non-autoregressive parallel decoding; ~7B+ parameters estimated.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **52.3%** (tool calling and function execution)
- SWE-bench Verified: **38.5%** (repository-scale software engineering)

Reasoning / knowledge:

- GPQA Diamond: **89.2%**
- MMLU-Pro: **83.7%**
- MRCR (Multi-Round Context Retrieval): **75.5%** at 1M tokens
- Artificial Analysis Intelligence Index: **46** (#15 global rank)

Coding:

- SWE-bench Verified: **38.5%**
- LiveCodeBench v5: **41.8%**
- HumanEval+: **72.4%**

Long context / vision:

- 1,048,576 token context with 75.5% on MRCR at 1M tokens.
- Text-only model; no native multimodal input.

### Normalized scores (1–100)

- **Tool use: 65/100.** Moderate tool use with 52.3% on Terminal-Bench 4.0; function calling and JSON mode supported but diffusion architecture shows drift in nested agent loops.
- **Reasoning: 72/100.** Strong reasoning with 89.2% on GPQA Diamond and 75.5% on MRCR at 1M tokens; diffusion drift caps complex multi-step reasoning.
- **Context window: 91/100.** Full 1M token context with verified 75.5% MRCR recall at scale.
- **Multimodal: 15/100.** Text-only model; no image, audio, or video input support.
- **Coding: 62/100.** Below-frontier coding with 38.5% on SWE-bench Verified and 41.8% on LiveCodeBench v5; diffusion drift affects code correctness in complex tasks.
- **Cost efficiency: 92/100.** Exceptional value at $0.10/$0.35 with prompt caching; >1,000 tok/s throughput reduces wall-clock cost.
- **Overall Score: 61/100.** Arithmetic mean of five quality dimensions: (65 + 72 + 91 + 15 + 62) / 5 = 305 / 5 = 61. Inception Labs' breakthrough diffusion LLM with >1,000 tok/s at budget pricing; text-only and mid-tier quality limit general applicability.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-11-08
- Method: Public internet research across Inception Labs announcements, OpenRouter model cards, GPQA/MRCR benchmark publications, and Artificial Analysis evaluations; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Inception Labs — Mercury 3](https://inceptionlabs.ai)
  - [OpenRouter — Mercury 3](https://openrouter.ai/inception/mercury-3)
  - [GPQA Diamond Benchmark](https://gpqa.github.io)
  - [Artificial Analysis — Model Rankings](https://artificialanalysis.ai)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---