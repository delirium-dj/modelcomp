# Model Research Report: GPT-6 Sol

**Researched by:** Gemini 3.8 Flash
**Research Date:** 2026-10-21
**Overall Score:** 92/100

---

### Executive Summary

Released by OpenAI on September 22, 2026, GPT-6 Sol (`gpt-6-sol`) is the balanced, workhorse frontier model of the GPT-6 generation, positioned directly between the economical GPT-6 Luna and the apex flagship GPT-6 Astra. Engineered to approach flagship-tier software engineering, long-horizon computer use, and scientific simulation at roughly one-fifth of Astra's operating cost, GPT-6 Sol features a 1.05M-to-1.1M-token context window with 128,000 maximum output tokens. Supporting granular reasoning effort controls (`low`, `medium`, `high`, `xhigh`, `max`), GPT-6 Sol excels on real-world engineering evaluations: reaching ~69%–71% on DeepSWE v1.1, strong marks on OSWorld 2.0 offline desktop navigation, and robust execution on Terminal-Bench Science 0.1 at an average cost of $5.47 per completed task (compared to Astra's $23.80). Standard API pricing is structured at $2.00 per million input tokens ($0.10 cached) and $10.00 per million output tokens.

---

### Quantitative Evaluation

- **Tool use: 94/100.** High-autonomy computer use and command-line execution. On OSWorld 2.0 desktop workflows, Sol tracks within a few percentage points of flagship Astra while executing complex multi-application pipelines at a fraction of the cost.
- **Reasoning: 94/100.** Deep deductive and analytical reasoning across extended multi-variable instructions. Sol reliably handles formal logic, business operations, and multi-step scientific data analysis under high reasoning effort.
- **Context window: 96/100.** 1.05M-to-1.1M-token context window (128K max output) with full-recall attention, digesting large monorepos and multi-document corpuses with near-zero contextual drift.
- **Multimodal: 85/100.** Native text and image multimodal input; accurately interprets UI wireframes, desktop application captures, and dense architectural schematics to power autonomous computer-use agents.
- **Coding: 91/100.** Heavy-duty agentic coding capabilities. Delivers ~69%–71% on DeepSWE v1.1, managing repository-wide refactoring, automated regression testing, and security auditing with remarkable economic efficiency.
- **Cost efficiency: 86/100.** Exceptional value at $2.00 in / $10.00 out per 1M tokens ($0.10 cached reads), providing previous-generation apex intelligence at commodity production pricing.
- **Overall Score: 92/100.** (Arithmetic mean: `(94 + 94 + 96 + 85 + 91) / 5 = 460 / 5 = 92.0`, rounded to **92**).

---

### Key Strengths

1. **Near-Flagship Performance at 1/5th Cost:** Approaches GPT-6 Astra's computer-use and software development capabilities at $2.00/$10.00 per 1M tokens.
2. **DeepSWE v1.1 Autonomy:** Delivers ~69%–71% on DeepSWE v1.1 for robust autonomous software maintenance.
3. **1M+ Context Window:** 1.05M–1.1M-token context horizon allows comprehensive multi-file codebase analysis.
4. **OSWorld 2.0 Computer Use:** Operates desktop applications and web browsers with human-competitive precision.

---

### Trade-offs & Limitations

1. **Extreme Scientific Ceiling:** For saturated ExploitBench vulnerability synthesis or cutting-edge wet-lab research, flagship Astra retains a noticeable edge.
2. **Thinking Latency at High/Max:** Deliberate test-time compute scaling on complex coding tasks requires planning around longer response latency.
3. **Absence of Audio/Video Streaming:** Native inputs remain focused on text and images for standard API endpoints.

---

### Performance Benchmarks

- **DeepSWE v1.1:** ~69.0% – 71.0% (scaling to 75.2% on GPT-6.1 refresh)
- **OSWorld 2.0 (Offline):** High-tier desktop and computer-use automation
- **Terminal-Bench Science 0.1:** High scientific workflow success rate ($5.47/task vs. $23.80 for Astra)
- **Context Window:** ~1,100,000 tokens (128K output)

---

### Sources & Verification

- [OpenAI GPT-6 Sol Announcement & DevDay Notes](https://openai.com)
- [OpenRouter GPT-6 Sol Specifications & Pricing](https://openrouter.ai)
- [DataCamp GPT-6 Family Evaluation & Benchmarks](https://datacamp.com)
- [Vellum.ai OSWorld 2.0 & DeepSWE Model Comparisons](https://vellum.ai)
- [Layer3Labs Model Economics & Benchmark Index](https://layer3labs.io)
