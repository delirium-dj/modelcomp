# Gemini 3.5 Flash Lite — Model Evaluation

- **Research Date:** 2026-10-20
- **Researcher:** Gemini 3.8 Flash
- **Model Name:** Gemini 3.5 Flash-Lite (Google DeepMind)
- **Model Type:** Ultra-high throughput agentic lightweight foundation model

---

### Executive Summary

Gemini 3.5 Flash-Lite is Google DeepMind's ultra-low latency, high-throughput foundation model released on July 21, 2026, alongside Gemini 3.6 Flash. Engineered specifically for agentic search, high-frequency interactive APIs, real-time tool orchestration, and large-scale document parsing, Gemini 3.5 Flash-Lite delivers an industry-leading generation velocity of 350 to 388 output tokens per second, making it the fastest model in the Gemini 3.5 generation.

Featuring a 1,048,576-token (1M) context window and up to 65,536 output tokens across text, audio, video, and image inputs, Gemini 3.5 Flash-Lite demonstrates significant benchmark jumps over its 3.1 predecessor: 54.0% on Terminal-Bench 2.1 (up from 31.0%), 54.2% on SWE-bench Pro (up from 38.3%), and 1,140 Elo on GDPval-AA v2. Priced at $0.30 per million input tokens and $2.50 per million output tokens (with prompt caching discounts down to $0.03/1M), it sets a compelling standard for high-QPS agent swarms and low-latency production pipelines.

---

### Quantitative Evaluation

- **Tool use: 85/100.** Scores 54.0% on Terminal-Bench 2.1. Fast native function calling, structured JSON output validation, and responsive command execution in automated agent harnesses.
- **Reasoning: 85/100.** Delivers 1,140 Elo on GDPval-AA v2 and strong marks across lightweight multi-step problem solving. Controllable thinking budgets efficiently balance latency and deductive precision.
- **Context window: 95/100.** 1,048,576-token context window with up to 65,536 output tokens. Improved long-context needle retrieval and document retention over earlier Lite generations.
- **Multimodal: 90/100.** Native ingestion across audio streams, video feeds, dense PDF manuals, and high-resolution images; text and code output only.
- **Coding: 83/100.** Achieves 54.2% on SWE-bench Pro. Highly capable for code completion, unit test generation, script translation, and automated bug triage.
- **Cost efficiency: 97/100.** Unmatched speed-to-cost ratio at $0.30/$2.50 per 1M tokens with prompt caching at $0.03/1M and generation speeds up to 388 tok/s.
- **Overall Score: 88/100.** (Arithmetic mean: `(85 + 85 + 95 + 90 + 83) / 5 = 438 / 5 = 87.6`, rounded to **88**).

---

### Key Strengths

1. **Blazing 350–388 tok/s Velocity:** Delivers the fastest decode throughput in the Gemini 3.5 family with near-instantaneous time-to-first-token.
2. **Substantial Agentic Leap:** 54.0% on Terminal-Bench 2.1 and 54.2% on SWE-bench Pro represent dramatic upgrades over older lite iterations.
3. **1M Native Context Window:** Ingests expansive codebases, technical manuals, and multi-hour media files in a single prompt.
4. **Accessible Economics:** $0.30 / $2.50 pricing allows sustainable continuous subagent orchestration and high-volume data extraction.

---

### Trade-offs & Limitations

1. **Complex Architectural Refactoring:** For massive cross-package code refactors, full-tier models like Gemini 3.5 Flash or Gemini 3.8 Flash offer higher persistence.
2. **Audio Input Surcharges:** Direct streaming audio tokens carry separate pricing requiring caching for heavy audio workloads.
3. **Extreme Edge-Case Deduction:** While strong on SWE-bench Pro, complex multi-step mathematical theorem proving benefits from heavier Pro reasoning models.

---

### Pricing & Value Matrix

- **Input Price:** $0.30 per million tokens (Cached: $0.03 – $0.075/1M)
- **Output Price:** $2.50 per million tokens
- **Throughput Velocity:** 350 – 388 tokens/second
- **Context Capacity:** 1,048,576 tokens (up to 65,536 output tokens)
- **Speed Tier:** Ultra-fast real-time / High-QPS Lite tier

---

### Benchmark Reference Summary

| Benchmark | Score | Context / Configuration |
| :--- | :--- | :--- |
| **Terminal-Bench 2.1** | 54.0% | Autonomous CLI execution & tool use |
| **SWE-bench Pro** | 54.2% | Repository-level software engineering |
| **GDPval-AA v2** | 1,140 Elo | Economic knowledge work & reasoning |
| **Generation Speed** | 350 – 388 tok/s | Measured throughput on Google AI Studio |
| **Context Window** | 1,048,576 tokens | 1M input / 65K max output tokens |

---

### Evaluation Sources

- Google DeepMind Official Announcements: [Gemini 3.5 Flash-Lite & 3.6 Flash Release](https://blog.google)
- Google AI Studio Platform Specifications: [Gemini Developer API Pricing](https://ai.google.dev)
- Independent Benchmark Reports: PricePerToken & DeepMind Technical Research Disclosures.
