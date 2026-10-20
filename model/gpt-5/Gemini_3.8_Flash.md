# GPT-5 — Model Evaluation

- **Research Date:** 2026-10-20
- **Researcher:** Gemini 3.8 Flash
- **Model Name:** GPT-5 (OpenAI)
- **Model Type:** Unified dynamic router reasoning and multimodal foundation model

---

### Executive Summary

GPT-5 is OpenAI's landmark foundation model released on August 7, 2025, notable for introducing a unified dynamic architecture that autonomously routes between low-latency fast execution and deep chain-of-thought test-time reasoning. Built with a 400,000-token (400K) input context window and up to 128,000 output tokens, GPT-5 represented a major generational leap over GPT-4o and the o1 preview series.

In standardized benchmark evaluations, GPT-5 achieved milestone figures: **74.9% on SWE-bench Verified**, **88.4%–89.4% on GPQA Diamond**, and near-perfect competition mathematics scores (94.6%–100% on AIME-styled tracks with Python tool execution). Billed at $1.25 per million input tokens and $10.00 per million output tokens (with prompt caching at $0.125/1M), GPT-5 established the foundation for OpenAI's generation-5 ecosystem before being succeeded in 2026 by GPT-5.1, GPT-5.2, and GPT-5.3-Codex.

---

### Quantitative Evaluation

- **Tool use: 86/100.** High-fidelity function calling, Python code interpreter sandbox execution, and web browsing grounding. Orchestrates multi-step agent tools with high schema conformance.
- **Reasoning: 89/100.** Scores 88.4%–89.4% on GPQA Diamond and >94% on AIME. The dynamic reasoning router allocates thinking tokens to tackle graduate-level STEM and algorithmic challenges.
- **Context window: 84/100.** 400,000-token context window with up to 128,000 output tokens. Reliable needle retrieval across substantial multi-file projects, though smaller than 1M+ token competing windows.
- **Multimodal: 85/100.** Native vision and document analysis ingesting diagrams, screenshots, technical schematics, and multi-page PDFs; text and code outputs.
- **Coding: 86/100.** Reaches 74.9% on SWE-bench Verified. Excels at automated bug remediation, unit test generation, and full-stack software authoring.
- **Cost efficiency: 82/100.** Standard frontier pricing at $1.25 in / $10.00 out per 1M tokens ($0.125/1M cached reads), offering dependable enterprise value.
- **Overall Score: 86/100.** (Arithmetic mean: `(86 + 89 + 84 + 85 + 86) / 5 = 430 / 5 = 86.0`, rounded to **86**).

---

### Key Strengths

1. **Unified Fast/Thinking Router:** Dynamically routes between rapid generation and extended reasoning without manual mode toggling.
2. **Strong SWE-bench Verified Performance:** 74.9% on SWE-bench Verified established robust repository software engineering.
3. **Advanced STEM Reasoning:** 88.4%+ on GPQA Diamond and competition math mastery.
4. **Substantial Output Ceiling:** 128,000 maximum output tokens allows extensive continuous code and report generation.

---

### Trade-offs & Limitations

1. **Superseded by Subsequent 5.x Models:** Replaced in primary coding and agentic tasks by GPT-5.1, GPT-5.2, and specialized Codex models.
2. **Context Size vs 1M Tiers:** 400K context is generous but less than the 1M+ token buffers in Gemini and Claude models.
3. **Reasoning Latency on Hard Prompts:** Deep thinking passes on complex queries can introduce noticeable initial response latency.

---

### Pricing & Value Matrix

- **Standard Input Price:** $1.25 per million tokens (Cached: $0.125/1M)
- **Standard Output Price:** $10.00 per million tokens
- **Context Capacity:** 400,000 tokens (up to 128,000 output tokens)
- **Speed Tier:** Frontier dynamic reasoning tier

---

### Benchmark Reference Summary

| Benchmark | Score | Context / Configuration |
| :--- | :--- | :--- |
| **SWE-bench Verified** | 74.9% | Repository-level software engineering |
| **GPQA Diamond** | 88.4% – 89.4% | Graduate-level STEM reasoning |
| **AIME 2025/2026** | 94.6% – 100% | Mathematics competition (with tools) |
| **Context Window** | 400,000 tokens | 400K input / 128K max output |

---

### Evaluation Sources

- OpenAI System Card & Official Disclosures: [GPT-5 Architecture and Capabilities](https://openai.com)
- Vellum AI & Runbear Benchmark Reviews: [GPT-5 Benchmark Evaluation](https://vellum.ai)
- Developer Pricing & Platform Documentation: [OpenAI API Pricing](https://openai.com)
