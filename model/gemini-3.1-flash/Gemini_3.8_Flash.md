# Gemini 3.1 Flash — Model Evaluation

- **Research Date:** 2026-10-20
- **Researcher:** Gemini 3.8 Flash
- **Model Name:** Gemini 3.1 Flash (Google DeepMind)
- **Model Type:** High-speed multimodal foundation model family

---

### Executive Summary

Gemini 3.1 Flash is Google DeepMind's refreshed generation-3 speed and efficiency model series introduced in early 2026, succeeding baseline Gemini 3 Flash. Engineered to deliver near-instantaneous multimodal responses across text, images, video, and audio, Gemini 3.1 Flash serves as the architectural foundation for several task-specific production endpoints, including standard Flash, Flash-Lite, Flash Live Preview (real-time conversational voice), Flash Image (native interleaved text and image generation), and Flash TTS.

Supporting a full 1,048,576-token (1M) context window with up to 65,536 output tokens, Gemini 3.1 Flash scores ~86% on GPQA Diamond, 82%–84% on SWE-bench Verified coding tasks, and demonstrates exceptional subagent tool-calling and structured JSON schema conformance. Priced across the family from $0.25–$0.50 per million input tokens and $1.50–$3.00 per million output tokens (with cached inputs dropping as low as $0.025/1M), it represents a premier cost-to-performance engine for production agent loops and conversational multimodal applications.

---

### Quantitative Evaluation

- **Tool use: 88/100.** Fast, dependable function calling, Google Search grounding, and automated subagent tool orchestration. Low failure rates on multi-turn tool calling and schema validations.
- **Reasoning: 88/100.** Scores ~86% on GPQA Diamond and strong marks on academic reasoning benchmarks. Controllable test-time compute allocations efficiently resolve complex logic and mathematical problems.
- **Context window: 98/100.** 1,048,576-token native context window with up to 64K output tokens. Reliable needle retrieval across large codebases, research archives, and multi-hour media.
- **Multimodal: 92/100.** High-fidelity multimodal processing covering audio streams, video feeds, UI layouts, diagrams, and multi-page documents, with specialized Live Preview voice capabilities.
- **Coding: 86/100.** Reaches 82%–84% on SWE-bench Verified. Provides high-velocity code synthesis, refactoring, bug triage, and test generation in developer loops.
- **Cost efficiency: 94/100.** Outstanding economics ($0.25–$0.50 in / $1.50–$3.00 out per 1M tokens; cache hits down to $0.025/1M), ensuring sustainable scaling for enterprise agents.
- **Overall Score: 90/100.** (Arithmetic mean: `(88 + 88 + 98 + 92 + 86) / 5 = 452 / 5 = 90.4`, rounded to **90**).

---

### Key Strengths

1. **Balanced Frontier Intelligence & Velocity:** Near-Pro reasoning and 82%+ SWE-bench performance served at low latency.
2. **Specialized Modality Variants:** Bridges text/code with Live Audio Preview and native image generation endpoints.
3. **1M Native Context Window:** Handles expansive multi-repository workspaces and extensive conversation traces seamlessly.
4. **Disruptive Cache Read Economics:** Cache hit pricing as low as $0.025/1M makes large-context RAG and continuous agent loops affordable.

---

### Trade-offs & Limitations

1. **Specialized Endpoints Nuance:** Distinct capabilities (real-time voice vs image generation) require targeting specific endpoints (`gemini-3.1-flash`, `gemini-3.1-flash-lite`, `gemini-3.1-flash-image`).
2. **Long-Chain Shell Resilience:** While strong on SWE-bench, extreme multi-hour terminal loops benefit from subsequent optimizations in Gemini 3.8 Flash.
3. **Output Image Pricing:** When routing through `flash-image`, output tokens carry higher pricing due to pixel generation.

---

### Pricing & Value Matrix

- **Input Price:** $0.25 – $0.50 per million tokens (Cached: $0.025 – $0.10/1M)
- **Output Price:** $1.50 – $3.00 per million tokens
- **Live Voice Input:** ~$0.005 per audio minute
- **Live Voice Output:** ~$0.018 per audio minute
- **Context Capacity:** 1,048,576 tokens (up to 65,536 output tokens)
- **Speed Tier:** Real-time / High-throughput flash tier

---

### Benchmark Reference Summary

| Benchmark | Score | Context / Configuration |
| :--- | :--- | :--- |
| **GPQA Diamond** | ~86.0% | Multi-step scientific reasoning |
| **SWE-bench Verified** | 82.0% – 84.0% | Software engineering and bug fixing |
| **Context Window** | 1,048,576 tokens | 1M input / 64K max output tokens |
| **Cache Hit Pricing** | $0.025 / 1M | Ultra-low recurring context read cost |

---

### Evaluation Sources

- Google DeepMind Developer Updates: [Gemini 3.1 Model Generation](https://deepmind.google)
- Google AI Studio Platform Documentation: [Gemini API Model Variants and Live API](https://google.dev)
- PricePerToken & Industry Indexes: [Gemini 3.1 Flash Family Pricing & Specs](https://pricepertoken.com)
