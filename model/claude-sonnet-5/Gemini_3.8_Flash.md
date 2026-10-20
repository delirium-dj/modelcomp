# Claude Sonnet 5 — Model Evaluation

- **Research Date:** 2026-10-20
- **Researcher:** Gemini 3.8 Flash
- **Model Name:** Claude Sonnet 5
- **Model Type:** Frontier-class adaptive reasoning, agentic coding, and balanced workhorse model

---

### Executive Summary

Claude Sonnet 5 is Anthropic's landmark agentic model released on June 30, 2026, designed to deliver near-Opus level reasoning, multi-step planning, and autonomous coding at standard mid-tier economics. Equipped with a native 1,000,000-token (1M) context window, 128,000 token maximum output generation, and built-in adaptive thinking (governed by effort levels `low`, `medium`, and `high`), Sonnet 5 achieved 72.7% on SWE-bench Verified and made significant leaps on interactive CLI tasks in Terminal-Bench.

Priced disruptively at $2.00 per million input tokens and $10.00 per million output tokens (with cache read pricing dropping to $0.20 per million tokens), Sonnet 5 represents a substantial price-performance breakthrough over prior Sonnet iterations. While succeeded in September 2026 by Sonnet 5.5, Sonnet 5 established the modern paradigm of native 1M context, adaptive reasoning effort parameters, and affordable autonomous agent loops.

---

### Quantitative Evaluation

- **Tool use: 92/100.** High-fidelity tool calling, structured JSON output validation, and reliable command-line terminal orchestration. Manages multi-turn error recovery loops smoothly.
- **Reasoning: 93/100.** Built-in adaptive thinking intelligently scales test-time reasoning tokens to problem complexity. Excels at algorithmic deductions, logic puzzles, and complex mathematical inquiries.
- **Context window: 98/100.** Full native 1,000,000-token input capacity with up to 128K output generation. High recall accuracy across extensive codebases, legal documents, and detailed system telemetry.
- **Multimodal: 76/100.** Strong vision understanding for technical diagrams, UI mockups, architectural schematics, and dense multi-page PDF documents, though lacking real-time audio generation and video streaming tokens.
- **Coding: 93/100.** Achieves 72.7% on SWE-bench Verified. Excels at autonomous bug remediation, feature development, full-stack refactoring, and integration testing within agent loops like Claude Code.
- **Cost efficiency: 90/100.** Exceptional value with base rates at $2.00/$10.00 per million tokens and cache reads at $0.20/1M, making high-volume agent operations highly economical.
- **Overall Score: 90/100.** (Arithmetic mean: `(92 + 93 + 98 + 76 + 93) / 5 = 452 / 5 = 90.4`, rounded to **90**).

---

### Key Strengths

1. **Disruptive Pricing Economics:** $2.00/1M input and $10.00/1M output made frontier-grade reasoning accessible for mass autonomous deployments.
2. **True 1M Native Context:** Ingests entire repositories and comprehensive technical documentation libraries without chunking.
3. **Adaptive Reasoning Controls:** Simplified effort parameters (`low`, `medium`, `high`) replace manual token budget tweaking for effortless reasoning scaling.
4. **Agentic Coding Proficiency:** 72.7% on SWE-bench Verified provides dependable repository maintenance and automated code reviews.

---

### Trade-offs & Limitations

1. **Tokenizer Token Count Expansion:** Revised tokenizer results in roughly ~30% more tokens for identical text inputs compared to legacy generations.
2. **API Breaking Parameter Changes:** Requires updating legacy parameters (manual `temperature`, `top_p`, or static thinking blocks throw validation errors).
3. **Omni Modality Gap:** Purely vision and text multimodal capabilities without speech-to-speech audio.

---

### Pricing & Value Matrix

- **Input Price:** $2.00 per million tokens
- **Output Price:** $10.00 per million tokens
- **Cache Read:** $0.20 per million tokens
- **Context Capacity:** 1,000,000 tokens (up to 128,000 output tokens)
- **Speed Tier:** Fast / Mid-tier production workhorse

---

### Benchmark Reference Summary

| Benchmark | Score | Context / Configuration |
| :--- | :--- | :--- |
| **SWE-bench Verified** | 72.7% | Multi-file repository bug resolution |
| **Terminal-Bench** | High / Leading | Command-line execution and shell tool navigation |
| **Context Window** | 1,000,000 tokens | Native 1M input / 128K max output |
| **Cache Read Efficiency** | $0.20 / 1M | 90%+ discount on cached context tokens |

---

### Evaluation Sources

- Anthropic Official Announcements: [Claude Sonnet 5 Release & Architecture](https://anthropic.com/news/claude-sonnet-5)
- Developers Digest & Technical Deep Dives: [Claude Sonnet 5 Tokenizer & API Changes](https://developersdigest.tech)
- Independent Benchmark Reports: SWE-bench Verified and Terminal-Bench evaluations (CosmicJS & Community Harnesses).
