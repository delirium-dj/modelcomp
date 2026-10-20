# Gemini 3 Flash — Model Evaluation

- **Research Date:** 2026-10-20
- **Researcher:** Gemini 3.8 Flash
- **Model Name:** Gemini 3 Flash (Google DeepMind)
- **Model Type:** Frontier-speed multimodal thinking and agentic foundation model

---

### Executive Summary

Gemini 3 Flash is Google DeepMind's foundational generation-3 Flash model released on December 17, 2025, designed to bring frontier Pro-grade reasoning, autonomous coding, and native omni-modal understanding to the high-throughput, low-latency Flash tier. Built with a native 1,000,000-token (1M) context window, Gemini 3 Flash achieved landmark results: 90.4% on GPQA Diamond (matching top PhD-level science baselines), 78.0% on SWE-bench Verified (approaching heavy Pro models on repository-level bug fixing), 88.6% on MMLU-Pro, and 33.7%–43.5% on Humanity's Last Exam (HLE, with tools).

Priced at $0.50 per million input tokens and $3.00 per million output tokens (with audio inputs at $1.00/1M and prompt caching discounts down to 80%), Gemini 3 Flash established the modern baseline for the Gemini 3 ecosystem. It pairs real-time conversational streaming and subagent orchestration with deep mathematical deduction, serving as the direct architectural predecessor to Gemini 3.5 and 3.8 Flash.

---

### Quantitative Evaluation

- **Tool use: 90/100.** Fast native function calling, structured schema adherence, and multi-turn autonomous tool orchestration. Manages code execution environments and web grounding with high stability.
- **Reasoning: 91/100.** Scores 90.4% on GPQA Diamond, 88.6% on MMLU-Pro, and up to 43.5% on HLE (tools). High-velocity test-time compute scaling efficiently resolves difficult scientific and algorithmic queries.
- **Context window: 98/100.** 1,000,000-token native context window with robust needle retrieval across complex enterprise repositories, dense document corpora, and multi-hour media.
- **Multimodal: 94/100.** Native omnimodal ingestion handling real-time audio, video streams, diagrams, UI layouts, and dense technical schematics; text and structured code outputs.
- **Coding: 88/100.** Reaches 78.0% on SWE-bench Verified. Excels at autonomous bug remediation, automated unit test creation, and multi-file code refactoring in developer loops.
- **Cost efficiency: 92/100.** Highly competitive pricing at $0.50/$3.00 per 1M tokens with prompt caching support, offering exceptional value for frontier intelligence.
- **Overall Score: 92/100.** (Arithmetic mean: `(90 + 91 + 98 + 94 + 88) / 5 = 461 / 5 = 92.2`, rounded to **92**).

---

### Key Strengths

1. **Pro-Grade Intelligence at Flash Velocity:** 90.4% on GPQA Diamond and 78.0% on SWE-bench Verified deliver frontier capabilities with low latency.
2. **True Native Omnimodality:** Direct tokenization of audio, video, images, and text without external transcription or pre-processing layers.
3. **1M Native Context Window:** Seamlessly ingests entire application repositories and extensive multi-turn agent telemetry.
4. **Accessible Pricing:** $0.50 / $3.00 rates make frontier agentic loops cost-effective for continuous production deployment.

---

### Trade-offs & Limitations

1. **Higher Cost than 2.5 Flash:** Base input/output rates ($0.50/$3.00) represent a step up from the $0.10/$0.40 rates of the ultra-light 2.5 Flash-Lite.
2. **Subsequent Iteration Improvements:** Succeeded in late 2026 by Gemini 3.5 and 3.8 Flash, which improved Terminal-Bench CLI execution and reduced thinking token overhead.
3. **Audio Token Premium:** Audio inputs are billed at $1.00/1M tokens, requiring caching for high-volume audio applications.

---

### Pricing & Value Matrix

- **Input Price:** $0.50 per million tokens
- **Output Price:** $3.00 per million tokens
- **Audio Input:** $1.00 per million tokens
- **Context Capacity:** 1,000,000 tokens (up to 64,000 output tokens)
- **Speed Tier:** Real-time frontier reasoning / Flash tier

---

### Benchmark Reference Summary

| Benchmark | Score | Context / Configuration |
| :--- | :--- | :--- |
| **GPQA Diamond** | 90.4% | PhD-level scientific reasoning |
| **SWE-bench Verified** | 78.0% | Multi-file repository bug resolution |
| **MMLU-Pro** | 88.6% | Multi-discipline academic reasoning |
| **Humanity's Last Exam (HLE)** | 33.7% (no tools) / 43.5% (with tools) | Frontier academic reasoning |
| **Context Window** | 1,000,000 tokens | 1M native context with full multimodal recall |

---

### Evaluation Sources

- Google DeepMind Technical Disclosures: [Gemini 3 Flash Architecture & Benchmarks](https://blog.google)
- OpenRouter Model Specifications: [Google Gemini 3 Flash Details](https://openrouter.ai)
- Independent Benchmark Reports: LLMLearner & AI Release Tracker Indexes.
