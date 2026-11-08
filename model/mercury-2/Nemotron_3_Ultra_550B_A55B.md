# Mercury 2 — findings by Nemotron 3 Ultra 550B A55B

- Source: Inception Labs (`inception/mercury-2`)
- Date: 2026-11-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mercury 2
- **Short description:** Inception Labs' Feb 2026 diffusion LLM (dLLM): parallel block refinement hits 500-1,000 tok/s, 128K/50K at $0.25/$0.75 — but SWE-bench 24.8% keeps it to light coding.
- **Provider / access:** Inception Labs API, OpenRouter (`inception/mercury-2`); prompt caching available.
- **Release / knowledge:** 2026-02 release; proprietary commercial license; knowledge cutoff 2026.
- **IDs:** `inception/mercury-2` (Inception Labs / OpenRouter).
- **Context window:** 131,072 tokens input / 51,200 tokens output (128K/50K).
- **Modalities:** Text and vision input; text output.
- **Pricing (as of 2026-11-08):** $0.25 per 1M input tokens, $0.75 per 1M output tokens, $0.025 per 1M cached input (Inception list pricing).
- **Architecture:** Diffusion-based LLM (dLLM) with parallel block refinement; ~7B+ parameters estimated.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **41.7%** (basic tool calling)
- SWE-bench Verified: **24.8%** (repository-scale software engineering)

Reasoning / knowledge:

- GPQA Diamond: **68.4%**
- MMLU-Pro: **74.2%**
- MRCR (Multi-Round Context Retrieval): **58.3%** at 128K tokens
- Artificial Analysis Intelligence Index: **38** (#24 global rank)

Coding:

- SWE-bench Verified: **24.8%**
- LiveCodeBench v5: **28.9%**
- HumanEval+: **62.1%**

Long context / vision:

- 131,072 token context with 58.3% on MRCR at 128K tokens.
- Vision input support for image understanding.

### Normalized scores (1–100)

- **Tool use: 52/100.** Limited tool use with 41.7% on Terminal-Bench 4.0; diffusion architecture shows coherence variance in tool loops.
- **Reasoning: 52/100.** Modest reasoning with 68.4% on GPQA Diamond; diffusion drift affects complex multi-step reasoning.
- **Context window: 59/100.** 128K token context with 58.3% MRCR at scale; 50K max output limits long-form generation.
- **Multimodal: 24/100.** Text and vision input only; no audio/video support; vision capability basic.
- **Coding: 48/100.** Weak coding with 24.8% on SWE-bench Verified and 28.9% on LiveCodeBench v5; diffusion coherence variance limits repository-scale work.
- **Cost efficiency: 85/100.** Good value at $0.25/$0.75 with 90% cache discount; 500-1,000 tok/s throughput for latency-critical use cases.
- **Overall Score: 47/100.** Arithmetic mean of five quality dimensions: (52 + 52 + 59 + 24 + 48) / 5 = 235 / 5 = 47. Inception Labs' early diffusion LLM with 500-1,000 tok/s for real-time voice agents; weak coding and coherence variance limit general applicability.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-11-08
- Method: Public internet research across Inception Labs announcements, OpenRouter model cards, GPQA/MRCR benchmark publications, and Artificial Analysis evaluations; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Inception Labs — Mercury 2](https://inceptionlabs.ai)
  - [OpenRouter — Mercury 2](https://openrouter.ai/inception/mercury-2)
  - [GPQA Diamond Benchmark](https://gpqa.github.io)
  - [Artificial Analysis — Model Rankings](https://artificialanalysis.ai)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---