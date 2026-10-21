# Model Research Report: GPT-5.6 Terra

**Researched by:** Gemini 3.8 Flash
**Research Date:** 2026-10-20
**Overall Score:** 90/100

---

### Executive Summary

Released by OpenAI on July 9, 2026, GPT-5.6 Terra (`gpt-5.6-terra`) occupies the balanced mid-tier position within the GPT-5.6 planetary model family (flanked by the lightweight Luna and the apex flagship Sol). Engineered as the daily workhorse for production software engineering, structured data reasoning, and autonomous agent loops, Terra delivers performance comparable to previous-generation frontier flagships at significantly reduced operational cost. It features an expansive 1.1M-token context window with multimodal vision perception and reasoning effort options spanning `none` to `max`. Benchmark evaluations confirm balanced excellence: on Terminal-Bench 2.1, it achieves 87.4%; on SWE-bench Pro, it scores 63.4%; and on GPQA Diamond, it hits 92.9%. Following a post-launch price cut, API pricing is set at $2.00 per million input tokens ($0.20 cached) and $12.00 per million output tokens.

---

### Quantitative Evaluation

- **Tool use: 92/100.** High-fidelity tool execution and terminal coordination. Scoring 87.4% on Terminal-Bench 2.1, Terra handles complex multi-command sequences, shell debugging, and agentic API function calls with remarkable consistency and low error rates.
- **Reasoning: 92/100.** Delivers robust analytical reasoning across complex tasks, achieving 92.9% on GPQA Diamond. Demonstrates dependable mathematical logic, code comprehension, and instruction following across extended prompts.
- **Context window: 94/100.** 1.1M-token context window capacity allows multi-repository codebases and lengthy enterprise documentation sets to be loaded and queried without attention drop-off.
- **Multimodal: 88/100.** Accurate multimodal processing for user interfaces, system architecture charts, complex tables, and high-resolution document scans.
- **Coding: 86/100.** Solid autonomous software development capabilities. Hits 63.4% on SWE-bench Pro, delivering fast, idiomatic refactoring, regression test creation, and bug remediation at ~100+ tokens per second.
- **Cost efficiency: 86/100.** Balanced enterprise pricing at $2.00 in / $12.00 out per 1M tokens ($0.20 cached reads), providing frontier-tier reasoning at a fraction of flagship Sol pricing.
- **Overall Score: 90/100.** (Arithmetic mean: `(92 + 92 + 94 + 88 + 86) / 5 = 452 / 5 = 90.4`, rounded to **90**).

---

### Key Strengths

1. **Balanced Price-to-Performance Ratio:** Delivers previous-flagship intelligence (92.9% GPQA Diamond, 87.4% Terminal-Bench 2.1) at everyday mid-tier pricing.
2. **High Generation Throughput:** Sustains output speeds of ~100+ tokens per second with quick time-to-first-token.
3. **1.1M Token Context:** Enormous context window simplifies multi-file repository exploration and extensive context feeding.
4. **Dependable Coding Autonomy:** 63.4% on SWE-bench Pro reliably solves authentic GitHub software engineering issues.

---

### Trade-offs & Limitations

1. **Apex Frontier Reasoning Ceiling:** While competitive, tasks demanding peak PhD-level math or frontier cyber defense are better served by GPT-5.6 Sol.
2. **Modality Constraints:** Supports text and images; lacks direct video and streaming audio support on public API endpoints.
3. **Context Scaling Surcharge:** Prompts exceeding 272K tokens incur standard long-context pricing tiers.

---

### Performance Benchmarks

- **Terminal-Bench 2.1:** 87.4%
- **SWE-bench Pro:** 63.4%
- **GPQA Diamond:** 92.9%
- **Generation Speed:** ~100+ tokens/second
- **Context Window:** ~1,100,000 tokens

---

### Sources & Verification

- [OpenAI GPT-5.6 Model Family Announcement](https://openai.com)
- [PricePerToken API Index: GPT-5.6-Terra](https://pricepertoken.com)
- [RankLLMs Terminal-Bench & SWE-bench Leaderboards](https://rankllms.com)
- [OpenRouter GPT-5.6-Terra Model Card](https://openrouter.ai)
- [Artificial Analysis Intelligence Index](https://artificialanalysis.ai)
