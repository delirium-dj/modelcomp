# Model Research Report: GPT-5.4-nano

**Researched by:** Gemini 3.8 Flash
**Research Date:** 2026-10-20
**Overall Score:** 73/100

---

### Executive Summary

Released by OpenAI on March 17, 2026 alongside GPT-5.4-mini, GPT-5.4-nano is OpenAI's most cost-efficient and lightweight model within the GPT-5.4 generation. Engineered for ultra-high-throughput enterprise routing, text extraction, fast summarization, and lightweight subagent execution, GPT-5.4-nano supports a 400,000-token context window with native multimodal image input capabilities and adjustable reasoning effort (`none` to `xhigh`). Despite its ultra-compact size and aggressive pricing of $0.20 per million input tokens ($0.02 cached) and $1.25 per million output tokens, GPT-5.4-nano achieves remarkable benchmark marks when augmented with reasoning compute: 52.4% on SWE-bench Pro, 46.3% on Terminal-Bench 2.0, 82.8% on GPQA Diamond, and 39.0% on OSWorld-Verified.

---

### Quantitative Evaluation

- **Tool use: 70/100.** Capable tool-calling and lightweight agent coordination. Handles structured function dispatch and API payload construction cleanly, scoring 35.5% on Toolathlon and 46.3% on Terminal-Bench 2.0. OS navigation is constrained (39.0% on OSWorld-Verified), rendering it better suited for backend APIs rather than full desktop manipulation.
- **Reasoning: 80/100.** Scores 82.8% on GPQA Diamond under `xhigh` reasoning effort. Delivers strong instruction following, semantic classification, and factual synthesis for a sub-billion to low-billion scale deployment class.
- **Context window: 84/100.** Supports a 400,000-token context window with high recall fidelity on standard entity lookup and extraction tasks.
- **Multimodal: 68/100.** Handles text and image inputs reliably for OCR, visual document parsing, and simple diagram classification.
- **Coding: 65/100.** Achieves 52.4% on SWE-bench Pro when leveraging extended reasoning tokens. Highly effective for low-latency syntax checking, unit test generation, docstring writing, and localized diff generation.
- **Cost efficiency: 98/100.** Industry-leading enterprise pricing at $0.20 in / $1.25 out per 1M tokens ($0.02 cached input reads), making it extraordinarily economical for bulk automation and high-frequency subagent loops.
- **Overall Score: 73/100.** (Arithmetic mean: `(70 + 80 + 84 + 68 + 65) / 5 = 367 / 5 = 73.4`, rounded to **73**).

---

### Key Strengths

1. **Ultra-Low Cost Structure:** $0.20 per 1M input tokens and $0.02 cached prompt reads delivers dramatic operational savings.
2. **Surprising Reasoning Floor:** 82.8% on GPQA Diamond under `xhigh` reasoning effort outstrips older full-size models.
3. **Respectable SWE-bench Pro Score:** 52.4% on SWE-bench Pro handles practical multi-file software engineering tasks.
4. **400K Token Horizon:** Permits massive document scanning and log analysis without chunking pipelines.

---

### Trade-offs & Limitations

1. **Desktop / OS Automation Limits:** 39.0% on OSWorld-Verified trails mini (72.1%) and flagship (75.0%) tiers.
2. **Complex Function Calling:** Multi-turn tool loops with dozens of ambiguous parameters can suffer schema hallucinations.
3. **Reasoning Latency at xhigh:** Achieving high accuracy requires allocating reasoning tokens, which offsets raw throughput benefits.

---

### Performance Benchmarks

- **SWE-bench Pro:** 52.4%
- **GPQA Diamond:** 82.8%
- **Terminal-Bench 2.0:** 46.3%
- **OSWorld-Verified:** 39.0%
- **Toolathlon:** 35.5%

---

### Sources & Verification

- [OpenAI GPT-5.4 nano Announcement & Model Specs](https://openai.com)
- [Economize Cloud Pricing Index: GPT-5.4-nano](https://economize.cloud)
- [OpenRouter GPT-5.4-nano Model Card](https://openrouter.ai)
- [SWE-bench Pro Results & Benchmark Index](https://swebench.com)
