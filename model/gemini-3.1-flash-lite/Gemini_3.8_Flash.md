# Gemini 3.1 Flash Lite — Model Evaluation

- **Research Date:** 2026-10-20
- **Researcher:** Gemini 3.8 Flash
- **Model Name:** Gemini 3.1 Flash Lite (Google DeepMind)
- **Model Type:** High-throughput, ultra-low latency multimodal foundation model

---

### Executive Summary

Gemini 3.1 Flash Lite is Google DeepMind's ultra-fast, high-throughput lightweight foundation model released in March 2026, engineered to deliver responsive inference, low Time-To-First-Token (<1s), and sustained output velocities between 150 to over 350 tokens/second across a 1,048,576-token (1M) context window. Built for high queries-per-second (QPS) enterprise pipelines, large-scale data extraction, translation, and parallel tool calling, Gemini 3.1 Flash Lite features controllable thinking budgets (`minimal`, `low`, `medium`, `high`) to adapt compute dynamically.

Achieving 86.9% on GPQA Diamond (no tools), 16.0% on Humanity's Last Exam (HLE), and 60.1% on MRCR v2 at 128K, Gemini 3.1 Flash Lite brings reasoning capabilities that rival older full-scale Flash models into an ultra-low cost structure. Priced at $0.25 per million input tokens and $1.50 per million output tokens ($0.125/$0.75 in batch processing, with prompt caching down to $0.025/1M), it serves as Google's premier high-volume workhorse for autonomous subagent swarms and real-time conversational APIs.

---

### Quantitative Evaluation

- **Tool use: 76/100.** Fast parallel function calling, JSON schema compliance, and structured tool invocation. Ideal for high-speed subagent delegations and routing; constrained on deep multi-turn terminal debug loops.
- **Reasoning: 80/100.** Delivers 86.9% on GPQA Diamond with thinking mode enabled and 16.0% on HLE. Controllable thinking budgets provide strong deductive reasoning for a lightweight class.
- **Context window: 72/100.** 1,048,576-token context window with up to 65,536 output tokens. Solid retrieval at 128K (60.1% MRCR v2), though experiencing noticeable needle degradation at the full 1M boundary.
- **Multimodal: 75/100.** Native ingestion across audio, video, images, and multi-page PDF documents; text and code output only.
- **Coding: 68/100.** Fast boilerplate generation, code snippet translation, and script formatting; best suited as a fast coding helper rather than an autonomous repository refactoring agent.
- **Cost efficiency: 95/100.** Outstanding value at $0.25/$1.50 per 1M tokens ($0.125/$0.75 batch; $0.025/1M cache hits) paired with high output throughput (~330+ tok/s).
- **Overall Score: 74/100.** (Arithmetic mean: `(76 + 80 + 72 + 75 + 68) / 5 = 371 / 5 = 74.2`, rounded to **74**).

---

### Key Strengths

1. **High Token Throughput:** Generates 150–350+ tokens/second with sub-second time-to-first-token for ultra-responsive user interactions.
2. **Accessible Pricing Economics:** $0.25 input / $1.50 output per 1M tokens with 50% batch discounts and $0.025/1M cache reads.
3. **Controllable Thinking Modes:** Granular thinking levels (`minimal`, `low`, `medium`, `high`) allow developers to balance latency vs accuracy.
4. **True 1M Multimodal Ingestion:** Handles long video sequences, audio streams, and heavy PDF manuals without external preprocessing.

---

### Trade-offs & Limitations

1. **Extreme Long-Context Attenuation:** Documented retrieval degradation on needle tests at full 1M token depth (12.3% pointwise MRCR).
2. **Autonomous Coding Limits:** Not intended for complex multi-file architectural refactoring or end-to-end repository bug fixes.
3. **Text-Only Generation:** Ingests rich multimedia natively, but outputs are restricted to text and structured code tokens.

---

### Pricing & Value Matrix

- **Standard Input Price:** $0.25 per million tokens (Cached: $0.025/1M)
- **Standard Output Price:** $1.50 per million tokens
- **Batch Processing:** 50% discount ($0.125 in / $0.75 out)
- **Generation Throughput:** ~150 – 350+ tokens/second
- **Context Capacity:** 1,048,576 tokens (up to 65,536 output tokens)
- **Speed Tier:** Real-time high-QPS / Lite efficiency tier

---

### Benchmark Reference Summary

| Benchmark | Score | Context / Configuration |
| :--- | :--- | :--- |
| **GPQA Diamond** | 86.9% | Thinking mode enabled (no tools) |
| **Humanity's Last Exam (HLE)** | 16.0% | Expert multi-discipline evaluation (no tools) |
| **MRCR v2 (8-needle)** | 60.1% @ 128K | Long-context retrieval fidelity |
| **Throughput Speed** | ~330.5 tok/s | Measured generation velocity on AI Studio |

---

### Evaluation Sources

- Google DeepMind Model Specifications: [Gemini 3.1 Flash-Lite Model Card](https://deepmind.google)
- Google AI Studio API Documentation: [Gemini Developer Pricing & Limits](https://ai.google.dev)
- Artificial Analysis & OpenRouter Telemetry: [Gemini 3.1 Flash-Lite Throughput Index](https://openrouter.ai)
