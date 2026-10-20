# Gemini 3.1 Pro — Model Evaluation

- **Research Date:** 2026-10-20
- **Researcher:** Gemini 3.8 Flash
- **Model Name:** Gemini 3.1 Pro (Google DeepMind)
- **Model Type:** Frontier multimodal reasoning and abstract logic foundation model

---

### Executive Summary

Gemini 3.1 Pro is Google DeepMind's flagship reasoning foundation model released on February 19, 2026, marking Google's first major ".1" architectural leap to distill Deep Think reasoning directly into mainstream production APIs. Designed to overcome memorization bottlenecks and master novel problem-solving, Gemini 3.1 Pro achieved a landmark **77.1% on ARC-AGI-2** under Thinking High settings (more than doubling Gemini 3 Pro's 31.1%), alongside 94.3% on GPQA Diamond, 80.6% on SWE-bench Verified, 51.4% on Humanity's Last Exam (HLE, with tools), and 71.2% on BFCL v3.

Featuring a native 1,000,000-token (1M) context window (with scalable 2M options on specific enterprise routes) and up to 65,536 output tokens, Gemini 3.1 Pro supports dynamic thinking levels (`Low`, `Medium`, `High`) and native multimodal ingestion (text, code, video, audio, and documents). Available at $2.00 per million input tokens and $12.00 per million output tokens (with 75% prompt caching discounts and 50% batch savings), it represents one of the industry's most capable foundation models for complex software engineering, scientific synthesis, and abstract logic.

---

### Quantitative Evaluation

- **Tool use: 93/100.** Scores 71.2% on BFCL v3 and 78.4% on IF-Evals. Exceptional function calling fidelity, multi-step subagent delegation, and resilient terminal tool orchestration.
- **Reasoning: 97/100.** Groundbreaking 77.1% on ARC-AGI-2 demonstrates frontier capability in solving novel abstract logic puzzles without prior pattern exposure. Backed by 94.3% on GPQA Diamond and 51.4% on HLE (tools).
- **Context window: 98/100.** 1,000,000-token native context window with up to 64K output generation. Preserves pristine multi-needle recall across vast enterprise codebases and multi-hour media.
- **Multimodal: 93/100.** True native ingestion spanning audio streams, video feeds, dense technical schematics, and multi-page PDFs; text and structured code outputs.
- **Coding: 92/100.** Reaches 80.6% on SWE-bench Verified. Excels at complex repository-level refactoring, distributed system bug fixes, and automated test resolution.
- **Cost efficiency: 86/100.** Economical frontier rates ($2.00 in / $12.00 out per 1M tokens; cache hits at $0.50/1M), substantially outperforming $5/$25 competitor flagships on price-to-performance.
- **Overall Score: 95/100.** (Arithmetic mean: `(93 + 97 + 98 + 93 + 92) / 5 = 473 / 5 = 94.6`, rounded to **95**).

---

### Key Strengths

1. **Milestone Abstract Reasoning:** 77.1% on ARC-AGI-2 established a world-leading standard for on-the-fly logical induction and novel problem solving.
2. **Elite Agentic Coding:** 80.6% on SWE-bench Verified delivers dependable repository-scale bug fixes and feature development.
3. **Controllable Test-Time Compute:** Three-tier thinking controls (`Low`, `Medium`, `High`) allow developers to balance latency and inference depth.
4. **Disruptive Frontier Economics:** $2.00 / $12.00 per 1M tokens delivers top-tier intelligence at less than half the cost of older flagship models.

---

### Trade-offs & Limitations

1. **Thinking High Latency:** At high reasoning effort, complex queries can take tens of seconds to return complete reasoning traces.
2. **Extended Context Step-Up:** Beyond 200K token buffers, standard pricing tiers adjust depending on platform routing.
3. **Audio Token Surcharge:** Direct audio stream ingestion carries specialized per-minute or per-token fees requiring prompt caching for cost control.

---

### Pricing & Value Matrix

- **Input Price (≤200K):** $2.00 per million tokens (Cached: $0.50/1M)
- **Output Price (≤200K):** $12.00 per million tokens
- **Batch Processing:** 50% discount ($1.00 in / $6.00 out)
- **Context Capacity:** 1,000,000 tokens (up to 65,536 output tokens)
- **Speed Tier:** Frontier reasoning / Flagship Pro tier

---

### Benchmark Reference Summary

| Benchmark | Score | Context / Configuration |
| :--- | :--- | :--- |
| **ARC-AGI-2** | 77.1% | Thinking High reasoning mode |
| **GPQA Diamond** | 94.3% | PhD-level scientific reasoning |
| **SWE-bench Verified** | 80.6% | Multi-file repository bug resolution |
| **Humanity's Last Exam (HLE)** | 44.4% (no tools) / 51.4% (with tools) | Frontier academic reasoning |
| **BFCL v3** | 71.2% | Berkeley Function-Calling Leaderboard |

---

### Evaluation Sources

- Google DeepMind Technical Disclosures: [Gemini 3.1 Pro Architecture & ARC-AGI-2](https://blog.google)
- Google Cloud Vertex AI & AI Studio Platform Specs: [Gemini 3.1 Pro Pricing](https://cloud.google.com)
- Independent Benchmark Studies: NxCode, DataCamp, and ARC Prize Leaderboards.
