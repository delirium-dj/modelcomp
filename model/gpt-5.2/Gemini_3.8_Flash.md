# Model Research Report: GPT-5.2

**Researched by:** Gemini 3.8 Flash
**Research Date:** 2026-10-20
**Overall Score:** 90/100

---

### Executive Summary

Released by OpenAI on December 11, 2025, GPT-5.2 represents a major architectural milestone within the GPT-5 generation, specifically calibrated for professional knowledge work, multi-language software engineering, and high-stakes agentic workflows. Addressing the limitations of earlier iterations, GPT-5.2 expanded reasoning controls to include an `xhigh` reasoning effort alongside `none`, `low`, and `medium`, while retaining a native 400,000-token input window and 128,000-token generation capacity. Benchmark milestones highlight a decisive leap in professional performance: on GDPval—which evaluates tasks across 44 human professions—GPT-5.2 Thinking matched or beat human industry experts on 70.9% of tasks (compared to 38.8% for GPT-5). On STEM and coding benchmarks, it scored 80.0% on SWE-bench Verified, 55.6% on SWE-bench Pro, 92.4% on GPQA Diamond (without tools), and a perfect 100.0% on AIME 2025 without tool augmentation. Standard API pricing is structured between $1.25–$1.75 per million input tokens and $10.00–$14.00 per million output tokens depending on tiered reasoning effort.

---

### Quantitative Evaluation

- **Tool use: 91/100.** Sets an outstanding benchmark for autonomous tool calling, multi-step orchestration, and dynamic API schema generation. In terminal and CLI development harnesses (such as Warp integrations and Terminal-Bench), it handles self-healing environment setup and multi-command pipeline execution with top-tier reliability.
- **Reasoning: 93/100.** Scores 92.4% on GPQA Diamond without tools and 100.0% on AIME 2025 without tools. Matches or outperforms human domain experts on 70.9% of GDPval knowledge-work scenarios across 44 targeted professions.
- **Context window: 86/100.** Native 400,000-token context window with up to 128,000 output tokens. Multi-needle retrieval across the full 400K context is near flawless, and native prompt caching minimizes repeated input processing latency.
- **Multimodal: 88/100.** Handles complex multimodal inputs across visual document comprehension, high-resolution technical diagrams, UI wireframes, and financial sheets with high OCR fidelity and precise spatial grounding.
- **Coding: 92/100.** Hits 80.0% resolution on SWE-bench Verified and 55.6% on SWE-bench Pro. Plans multi-file refactoring, resolves broken integration test suites, and enforces typing and test coverage across complex frameworks.
- **Cost efficiency: 78/100.** Premium frontier pricing at $1.25–$1.75 in / $10.00–$14.00 out per 1M tokens ($0.125–$0.175 cached), justifiable for high-stakes enterprise knowledge tasks.
- **Overall Score: 90/100.** (Arithmetic mean: `(91 + 93 + 86 + 88 + 92) / 5 = 450 / 5 = 90.0`, rounded to **90**).

---

### Key Strengths

1. **State-of-the-Art Professional Knowledge Work:** 70.9% match/win rate on GDPval across 44 white-collar professions.
2. **Superior Coding & Architecture:** 80.0% SWE-bench Verified and 55.6% SWE-bench Pro tackle production-grade enterprise repositories.
3. **Flawless Mathematical Logic:** 100.0% on AIME 2025 without tool assistance.
4. **Adaptive Effort Granularity:** Added `xhigh` reasoning effort for extreme deep-thinking problems alongside low-latency conversational modes.

---

### Trade-offs & Limitations

1. **Inference Latency at xhigh:** Maximum reasoning depth introduces multi-minute thinking pauses on deep mathematical problems.
2. **Context Window Cap:** 400K tokens remains behind 1M+ token offerings like Gemini 2.5/3.x and GLM-5.x.
3. **High Frontier Price:** Reasoning compute costs can escalate rapidly on multi-turn automated agent workflows without caching.

---

### Performance Benchmarks

- **SWE-bench Verified:** 80.0%
- **SWE-bench Pro:** 55.6%
- **GPQA Diamond (No tools):** 92.4%
- **AIME 2025 (No tools):** 100.0%
- **GDPval (Professional Knowledge Work):** 70.9% match/win rate vs. human experts
- **ARC-AGI-1:** ~90%

---

### Sources & Verification

- [OpenAI GPT-5.2 Announcement & Technical Report](https://openai.com)
- [OpenAI GDPval Benchmark & Evaluation Suite](https://openai.com)
- [SWE-bench Leaderboard & Verified Results](https://swebench.com)
- [OpenRouter & PricePerToken API Index](https://pricepertoken.com)
- [Warp Developer & Agentic Terminal Analysis](https://warp.dev)
