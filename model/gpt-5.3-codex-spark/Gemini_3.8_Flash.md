# Model Research Report: GPT-5.3-Codex-Spark

**Researched by:** Gemini 3.8 Flash
**Research Date:** 2026-10-20
**Overall Score:** 73/100

---

### Executive Summary

Introduced by OpenAI on February 12, 2026 as a specialized research preview in partnership with Cerebras Systems, GPT-5.3-Codex-Spark is an ultra-high-throughput code model engineered for instant interactive development loops. Deployed natively on Cerebras Wafer-Scale Engine (WSE-3) hardware, Codex-Spark achieves extreme inference speeds exceeding 1,000 tokens per second—roughly 15 times faster than standard frontier models. Built with a 128,000-token context window and a text-only modality stack, Codex-Spark trades away the deep architectural reasoning of the flagship GB200-powered GPT-5.3-Codex in exchange for real-time subagent execution. On developer benchmarks, it scores 58.4% on Terminal-Bench 2.0 and between 46.0% and 56.0% on SWE-bench Pro slices, out-pacing previous mini tiers while returning entire multi-file code modifications in seconds.

---

### Quantitative Evaluation

- **Tool use: 76/100.** Designed for sub-second tool execution and rapid CLI interactions. Achieving 58.4% on Terminal-Bench 2.0, it swiftly dispatches shell commands, syntax validations, and automated linter fixes. Complex multi-nested function calling with heavy schema ambiguities is occasionally fragile compared to flagship GPT-5.3-Codex.
- **Reasoning: 74/100.** Optimized for direct, low-latency procedural logic rather than deep multi-tier reasoning. Handles localized algorithmic problems and syntax refactoring cleanly, but struggles with PhD-level scientific deductions or distributed architectural trade-offs.
- **Context window: 78/100.** Features a 128,000-token context window. Wafer-scale SRAM on Cerebras WSE-3 enables instantaneous prompt ingestion across 128K tokens without memory bandwidth bottlenecks, though the window is smaller than OpenAI's standard 400K flagship horizon.
- **Multimodal: 50/100.** Text-only architecture at launch without direct image, diagram, or video perception.
- **Coding: 85/100.** Blistering code generation at >1,000 tokens per second. Hits 46.0%–56.0% on SWE-bench Pro and excels at real-time inline autocompletion, diff creation, automated test generation, and subagent repo sweeping.
- **Cost efficiency: 86/100.** Extreme operational velocity reduces developer waiting time to virtually zero. Token economics on specialized wafer-scale hosting provide exceptional value for high-frequency interactive coding sessions.
- **Overall Score: 73/100.** (Arithmetic mean: `(76 + 74 + 78 + 50 + 85) / 5 = 363 / 5 = 72.6`, rounded to **73**).

---

### Key Strengths

1. **Extreme Inference Speed:** Exceeds 1,000 tokens per second on Cerebras WSE-3 wafer-scale hardware.
2. **Interactive Developer Feedback Loop:** Delivers multi-file patches and test suites in seconds, ideal for pair programming and agentic inner loops.
3. **Solid Terminal & CLI Capability:** 58.4% on Terminal-Bench 2.0 enables rapid shell automation and build script corrections.
4. **Zero Bandwidth Bottleneck:** Cerebras on-chip SRAM architecture enables instant prompt caching and retrieval.

---

### Trade-offs & Limitations

1. **Modality Constraint:** Text-only model; cannot inspect UI mockups, screenshots, or visual diffs.
2. **Context Horizon:** 128K tokens is smaller than the 400K context available in base GPT-5.3-Codex.
3. **Complex Architectural Reasoning:** Distilled logic profile is susceptible to errors on intricate multi-component refactors requiring deep deliberative planning.

---

### Performance Benchmarks

- **Terminal-Bench 2.0:** 58.4%
- **SWE-bench Pro:** 46.0% – 56.0%
- **Inference Throughput:** >1,000 tokens/second (Cerebras WSE-3)
- **Time-to-First-Token (TTFT):** Sub-100ms ultra-low latency

---

### Sources & Verification

- [OpenAI & Cerebras GPT-5.3-Codex-Spark Announcement](https://cerebras.ai)
- [OpenAI Developer Research Preview: Codex-Spark](https://openai.com)
- [Terminal-Bench 2.0 Leaderboard](https://tbench.ai)
- [SWE-bench Pro Evaluation Suite](https://swebench.com)
