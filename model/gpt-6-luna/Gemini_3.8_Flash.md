# Model Research Report: GPT-6 Luna

**Researched by:** Gemini 3.8 Flash
**Research Date:** 2026-10-21
**Overall Score:** 84/100

---

### Executive Summary

Released by OpenAI on September 22, 2026, GPT-6 Luna (`gpt-6-luna`) is the entry-tier, high-velocity model within the GPT-6 generation (which also includes GPT-6 Sol and the apex GPT-6 Astra). Engineered for high-throughput enterprise pipelines, customer-facing chat, document extraction, and low-latency subagent loops, GPT-6 Luna pairs an expansive 1.1M-token context window (128K max output) with variable reasoning effort scaling from instant fast mode up to max effort. Benefiting from major inference infrastructure optimizations, OpenAI cut baseline pricing to an ultra-competitive $0.10 per million input tokens ($0.01 cached) and $0.50 per million output tokens. Benchmark evaluations indicate remarkable capability per dollar: reaching 66.6% on DeepSWE v1.1 at max effort (matching older flagship code resolution rates at ~$0.22 per task), significant gains on AutomationBench 1.0.6, and 16.4% on the challenging Terminal-Bench 4.0 evaluation suite.

---

### Quantitative Evaluation

- **Tool use: 85/100.** Fast tool execution and structured API schema generation. Excels in business automation workflows across HR, sales, and ERP data extraction (AutomationBench 1.0.6), though complex terminal system administration is constrained (16.4% on Terminal-Bench 4.0).
- **Reasoning: 86/100.** Inherits GPT-6's concise communication and improved logical alignment. Handles multi-step procedural logic cleanly under high/max reasoning effort, though it lacks the mathematical proof depth of Sol or Astra.
- **Context window: 95/100.** Massive 1.1M-token context capacity with strong multi-document recall and prompt-caching economics.
- **Multimodal: 80/100.** Text and image input processing; reliably parses invoices, receipt scans, UI layouts, and visual documents.
- **Coding: 76/100.** Scores 66.6% on DeepSWE v1.1 under max reasoning effort. Highly efficient for rapid codebase sweeps, unit test generation, bug localization, and automated documentation.
- **Cost efficiency: 99/100.** Industry-defining economics at $0.10 in / $0.50 out per 1M tokens ($0.01 cached reads), reducing subagent task execution costs by over 50% compared to prior generation mini tiers.
- **Overall Score: 84/100.** (Arithmetic mean: `(85 + 86 + 95 + 80 + 76) / 5 = 422 / 5 = 84.4`, rounded to **84**).

---

### Key Strengths

1. **Unrivaled Token Economics:** $0.10 per 1M input tokens and $0.01 cached reads lowers production costs to near-zero.
2. **66.6% on DeepSWE v1.1:** Matches older flagship coding capabilities for a fraction of the inference spend.
3. **1.1M Token Context Horizon:** Ingests vast document corpuses, full repositories, and long agent histories.
4. **Fast Generation & Low TTFT:** High output throughput (>60–100 tok/s) ideal for interactive conversational agents.

---

### Trade-offs & Limitations

1. **Terminal Administration Limits:** 16.4% on Terminal-Bench 4.0 confirms it is not intended for deep OS-level troubleshooting.
2. **Lacks Native Audio/Video:** Confined to text and image inputs.
3. **Latency at Max Effort:** Reaching top reasoning marks requires trading off its native low-latency speed for extended thinking passes.

---

### Performance Benchmarks

- **DeepSWE v1.1 (Max effort):** 66.6%
- **Terminal-Bench 4.0 (Max effort):** 16.4% (±2.7%)
- **AutomationBench 1.0.6:** Top-tier enterprise tool execution
- **SWE-bench Multimodal:** 37.5%
- **Context Window:** ~1,100,000 tokens (128K max output)

---

### Sources & Verification

- [OpenAI GPT-6 Luna Launch & API Pricing Announcement](https://openai.com)
- [OpenRouter GPT-6-Luna Model Card & Pricing](https://openrouter.ai)
- [Eigent AI DeepSWE v1.1 Benchmark Evaluations](https://eigent.ai)
- [Terminal-Bench 4.0 Leaderboard](https://tbench.ai)
- [MarkTechPost GPT-6 Series Architectural Breakdown](https://marktechpost.com)
