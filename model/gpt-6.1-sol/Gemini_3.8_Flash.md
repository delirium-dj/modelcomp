# Model Research Report: GPT-6.1 Sol

**Researched by:** Gemini 3.8 Flash
**Research Date:** 2026-10-21
**Overall Score:** 93/100

---

### Executive Summary

Announced by OpenAI at DevDay on September 29, 2026 as the rapid generational refinement to GPT-6 Sol, GPT-6.1 Sol (`gpt-6.1-sol`) delivers near-flagship intelligence matching GPT-6 Astra on core agentic workflows at roughly one-fifth of the cost. Featuring a 1.05M-to-1.1M-token context window with 128,000 output tokens, GPT-6.1 Sol supports variable reasoning controls across `low`, `medium`, `high`, `xhigh`, and `max`. In benchmark evaluations, GPT-6.1 Sol sets extraordinary efficiency and accuracy marks: reaching 75.2% on DeepSWE v1.1 (surpassing flagship Astra's 74.1%), 71.4% on OSWorld 2.0 offline desktop workflows (within 2.1 percentage points of Astra at 1/7th the cost), 58.2% on Terminal-Bench 4.0, and 57.0% on Terminal-Bench Science 0.1 at an average task cost of $5.47 (compared to Astra's $23.80). Standard API pricing is positioned at $2.00 per million input tokens ($0.10 cached) and $10.00 per million output tokens.

---

### Quantitative Evaluation

- **Tool use: 95/100.** Premier autonomous desktop and terminal automation. Achieving 71.4% on OSWorld 2.0 and 58.2% on Terminal-Bench 4.0, GPT-6.1 Sol executes multi-application workflows, terminal commands, and API choreographies with near-flagship parity at 80% lower cost.
- **Reasoning: 95/100.** High-level analytical and deductive reasoning scoring 52 on the Artificial Analysis composite index (just 1 point behind Astra at 53). Eliminates edge-case procedural errors in multi-turn agent logic.
- **Context window: 96/100.** 1.05M-to-1.1M-token context window (128K max output) featuring zero-degradation full-attention recall and efficient prompt caching ($0.10/1M).
- **Multimodal: 86/100.** Native text and image multimodal perception; excels at interpreting complex desktop interfaces, technical diagrams, and document scans for agentic execution.
- **Coding: 94/100.** Industry-leading agentic software engineering. Scoring 75.2% on DeepSWE v1.1, it matches or exceeds top flagship accuracy on real-world GitHub issue resolution and multi-file codebases.
- **Cost efficiency: 90/100.** Unbeatable frontier value at $2.00 in / $10.00 out per 1M tokens ($0.10 cached reads), delivering Astra-class software engineering at commodity enterprise pricing.
- **Overall Score: 93/100.** (Arithmetic mean: `(95 + 95 + 96 + 86 + 94) / 5 = 466 / 5 = 93.2`, rounded to **93**).

---

### Key Strengths

1. **Astra-Level Coding at 1/5th Cost:** 75.2% on DeepSWE v1.1 matches or edges out GPT-6 Astra while slashing operational expenses by ~80%.
2. **71.4% on OSWorld 2.0:** Delivers top-tier computer-use automation within 2.1% of the flagship at 1/7th the execution cost.
3. **Terminal-Bench 4.0 Parity:** 58.2% on Terminal-Bench 4.0 matches Astra's score with a 5x lower token budget.
4. **1M+ Token Horizon:** 1.05M–1.1M-token context window processes large codebases with dependable recall.

---

### Trade-offs & Limitations

1. **Unsupported Zero-Reasoning Modes:** `none` and `minimal` reasoning efforts are unsupported; all completions incur at least low reasoning tokens.
2. **Responses API Restriction:** Tool calling is natively constrained to the Responses API rather than legacy Chat Completions endpoints.
3. **No Direct Audio/Video:** Modalities remain text and image inputs.

---

### Performance Benchmarks

- **DeepSWE v1.1 (High effort):** 75.2% (Mercor mini-swe-agent: 72.30%)
- **OSWorld 2.0 (Offline, Max effort):** 71.4%
- **Terminal-Bench 4.0:** 58.2%
- **Terminal-Bench Science 0.1:** 57.0% ($5.47/task vs. $23.80 for Astra)
- **Artificial Analysis Intelligence Index:** 52 (vs. Astra 53)

---

### Sources & Verification

- [OpenAI DevDay 2026: GPT-6.1 Sol Announcement](https://openai.com)
- [DataCamp GPT-6.1 Sol Technical Evaluation](https://datacamp.com)
- [Terminal-Bench 4.0 Benchmark Leaderboard](https://tbench.ai)
- [OpenRouter GPT-6.1 Sol Pricing & Model Card](https://openrouter.ai)
- [Beri AI & Vellum DeepSWE v1.1 Comparative Analysis](https://vellum.ai)
