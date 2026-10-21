# Model Research Report: GPT-5.4-mini

**Researched by:** Gemini 3.8 Flash
**Research Date:** 2026-10-20
**Overall Score:** 84/100

---

### Executive Summary

Released by OpenAI on March 17, 2026 alongside GPT-5.4-nano, GPT-5.4-mini is a lightweight, low-latency frontier reasoning model engineered for high-throughput agentic workflows, coding subagents, and cost-sensitive computer use. Running at more than twice the speed of the full GPT-5.4 flagship model, GPT-5.4-mini delivers remarkable performance parity at a fraction of the compute overhead. It features a 400,000-token context window, multimodal vision support, and configurable reasoning effort (`none` to `xhigh`). Benchmark results showcase extraordinary capability for a compact tier: at maximum reasoning effort (`xhigh`), it achieves 54.4% on SWE-bench Pro (closely trailing full GPT-5.4's 57.7%), 72.1% on OSWorld-Verified (surpassing human expert levels), 88.0% on GPQA Diamond, and 60.0% on Terminal-Bench 2.0. Standard API pricing is set at $0.75 per million input tokens ($0.075 cached) and $4.50 per million output tokens.

---

### Quantitative Evaluation

- **Tool use: 86/100.** Exceptional tool calling and autonomous execution for a compact model. Achieving 72.1% on OSWorld-Verified, it handles complex desktop and browser automation routines with high fidelity. On Terminal-Bench 2.0, it scores 60.0%, dispatching shell commands and multi-turn tool loops reliably.
- **Reasoning: 88/100.** Achieves 88.0% on GPQA Diamond under `xhigh` reasoning effort, rivaling previous full-sized frontier models. Demonstrates tight mathematical logic, strong schema adherence, and crisp instruction following.
- **Context window: 85/100.** Provides a 400,000-token input context window with reliable needle-in-a-haystack recall across large multi-file documents, though smaller than the 1M+ context window of flagship GPT-5.4.
- **Multimodal: 82/100.** Native vision perception capable of processing desktop screenshots, UI layouts, diagrams, and technical charts to support OS automation and document QA.
- **Coding: 80/100.** Scores 54.4% on SWE-bench Pro. Excels as a coding subagent for fast unit test generation, localized refactors, inline code review, and automated bug fixing at twice the generation speed of standard flagship models.
- **Cost efficiency: 92/100.** Outstanding value at $0.75 in / $4.50 out per 1M tokens ($0.075 cached prompt reads), reducing the operational expense of continuous background subagent loops by over 65% compared to flagship pricing.
- **Overall Score: 84/100.** (Arithmetic mean: `(86 + 88 + 85 + 82 + 80) / 5 = 421 / 5 = 84.2`, rounded to **84**).

---

### Key Strengths

1. **Near-Flagship Coding Power:** 54.4% on SWE-bench Pro captures 94% of full GPT-5.4's coding accuracy at a fraction of the cost.
2. **Surpassing Human OS Automation:** 72.1% on OSWorld-Verified enables reliable UI and desktop browser agents.
3. **High-Throughput Subagent Utility:** Operates at >2x the speed of full GPT-5.4, ideal for rapid multi-step developer iterations.
4. **Aggressive Pricing:** $0.75/$4.50 per 1M tokens with $0.075 cached input pricing unlocks high-volume agent deployments.

---

### Trade-offs & Limitations

1. **Context Window vs. Flagship:** 400K context is substantial, but does not match the 1M+ token ceiling of flagship GPT-5.4.
2. **Complex Distributed Architecture:** Complex multi-repo distributed system redesigns still require the deeper capacity of full GPT-5.4 or GPT-5.4-Pro.
3. **Multimodal Limitations:** Visual inputs are supported, but direct audio/video streaming is not natively exposed on standard API endpoints.

---

### Performance Benchmarks

- **SWE-bench Pro:** 54.4%
- **OSWorld-Verified:** 72.1%
- **GPQA Diamond:** 88.0%
- **Terminal-Bench 2.0:** 60.0%
- **Toolathlon:** 42.9%

---

### Sources & Verification

- [OpenAI GPT-5.4 mini & nano Announcement](https://openai.com)
- [OSWorld-Verified Benchmark Leaderboard](https://osworld.ai)
- [SWE-bench Pro Evaluation Results](https://swebench.com)
- [LLM Stats API Pricing & Model Registry](https://llm-stats.com)
- [TheRouter.ai Technical Breakdown of GPT-5.4-mini](https://therouter.ai)
