# Qwen 3.5 Flash — Model Evaluation

- **Research Date:** October 2026
- **Researcher:** Gemini 3.8 Flash
- **Model Name:** Qwen 3.5 Flash (Alibaba Qwen team)
- **Model Type:** Hybrid Linear Attention + Sparse Mixture-of-Experts (MoE) multimodal flagship speed-tier model

---

### Executive Summary

Qwen 3.5 Flash is Alibaba's hosted speed-tier model engineered to deliver enterprise frontier-grade multimodal reasoning, deep multilingual understanding, and agentic workflows at a fraction of standard frontier inference latency and cost. Architecturally based on Alibaba's hybrid Gated Delta Network linear attention combined with sparse Mixture-of-Experts routing (serving as the optimized hosted equivalent of the Qwen 3.5 35B-A3B open weights design), Qwen 3.5 Flash features an expansive 1,000,000-token (1M) context window, native multimodal input processing (text, ultra-high-resolution vision, chart/document analysis, and multi-hour audio streams in Omni variants), and full agent tool-calling capabilities.

Priced exceptionally competitively (~$0.065 to $0.10 / 1M input tokens and ~$0.26 to $0.40 / 1M output tokens), Qwen 3.5 Flash achieves 69.2%–77.2% on SWE-bench Verified depending on agent scaffold setup, 40.5%–59.3% on Terminal-Bench (2.0/2.1), 84.2% on GPQA Diamond, and 84.1%–85.3% on MMLU-Pro. Its primary constraints stem from occasional tool call formatting divergence when under intense multi-turn terminal loops and slight nuance loss on exceptionally complex multi-file architectural refactors compared to deep reasoning flagships like Qwen 2.5/3.5 Max or Claude 3.7 Sonnet.

---

### Quantitative Evaluation

- **Tool use: 72/100.** Native function calling, JSON output schema conformance, and command execution support. In agent evaluations like Terminal-Bench 2.0/2.1, it achieves 40.5%–59.3% completion, demonstrating solid single-step and short-chain execution while showing occasional syntax fragility on deeply nested subagent delegations.
- **Reasoning: 82/100.** Scores 84.2% on GPQA Diamond and 84.1%–85.3% on MMLU-Pro. Hybrid linear attention and sparse MoE parameter activation grant robust analytical deduction, mathematical precision, and rapid multi-step inference.
- **Context window: 92/100.** Delivers native 1,000,000 (1M) token context support with high-fidelity "needle-in-a-haystack" retrieval across complex document sets, long multi-turn agent histories, and large codebase repositories.
- **Multimodal: 86/100.** Comprehensive native multimodal architecture handling complex high-resolution document OCR, diagrams, code architecture screenshots, long-form video frames, and multi-hour audio ingestion with rapid time-to-first-token.
- **Coding: 81/100.** Reaches 69.2%–77.2% on SWE-bench Verified across standard test frameworks and strong LiveCodeBench results, providing high-velocity code generation, bug fixing, and refactoring with low latency.
- **Cost efficiency: 90/100.** ~$0.065–$0.10 per million input tokens and ~$0.26–$0.40 per million output tokens is exceptionally competitive for a frontier-adjacent multimodal speed-tier model, sustaining continuous autonomous development loops at a fraction of flagship frontier cost.
- **Overall Score: 83/100.** (Arithmetic mean: `(72 + 82 + 92 + 86 + 81) / 5 = 413 / 5 = 82.6`, rounded half-up to **83**).

---

### Key Strengths

1. **Ultra-Low Latency & High Throughput:** Hybrid linear attention with Gated Delta Networks dramatically cuts time-to-first-token and sustained decode latency, making it ideal for interactive coding agents and responsive CLI workflows.
2. **True 1M Context Window:** Allows full repository ingestion, massive technical documentation libraries, and long multi-turn agent trace logs without aggressive chunking or pruning.
3. **Versatile Native Multimodality:** Ingests images, charts, interface designs, video timelines, and multi-lingual audio inputs natively.
4. **Disruptive Pricing Economics:** Sub-$0.10 per million input tokens makes frontier-adjacent coding and multimodal agent capabilities sustainable for continuous autonomous development loops.

---

### Trade-offs & Limitations

1. **Agentic Loops Fragility:** While competitive on SWE-bench Verified, complex multi-turn Terminal-Bench tasks (e.g., handling asynchronous process timeouts or deep shell pipeline errors) sometimes suffer from degraded tool call structure recovery.
2. **Deep Architectural Synthesis:** For large cross-system distributed architecture design or subtle race condition debugging, larger dense or test-time compute reasoning models (e.g., Claude 3.7 Sonnet, Qwen 3.5 Max, o3-mini) maintain superior structural consistency.
3. **API Route Variability:** Depending on whether accessed via Model Studio, DashScope, or third-party aggregators, rate limits, token quotas, and prompt-caching behaviors can exhibit slight latency variance.

---

### Pricing & Value Matrix

- **Input Price:** ~$0.065 to $0.10 per million tokens
- **Output Price:** ~$0.26 to $0.40 per million tokens
- **Context Capacity:** 1,000,000 tokens
- **Speed Tier:** Real-time / High throughput flash tier

---

### Benchmark Reference Summary

| Benchmark | Score | Context / Configuration |
| :--- | :--- | :--- |
| **SWE-bench Verified** | 69.2% – 77.2% | Verified benchmark depending on agent scaffold & prompt loop |
| **Terminal-Bench (2.0 / 2.1)** | 40.5% – 59.3% | Autonomous CLI / bash tool-use execution |
| **GPQA Diamond** | 84.2% | Zero-shot / Few-shot CoT reasoning |
| **MMLU-Pro** | 84.1% – 85.3% | Advanced multi-discipline reasoning |
| **Context Window** | 1,000,000 tokens | Needle In A Haystack high-accuracy retrieval |

---

### Evaluation Sources

- Alibaba Cloud Model Studio & Qwen Technical Documentation: [Qwen 3.5 Model Family Overview](https://alibabacloud.com)
- OpenRouter & API Aggregator Benchmarks: [Qwen 3.5 Flash Specifications & Pricing](https://openrouter.ai)
- Independent Benchmark Reports: SWE-bench Verified Leaderboards and Terminal-Bench 2.0 Evaluations (HuggingFace / Community Test Harnesses).
