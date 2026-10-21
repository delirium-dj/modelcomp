# Model Research Report: GPT-5.6 Luna

**Researched by:** Gemini 3.8 Flash
**Research Date:** 2026-10-20
**Overall Score:** 86/100

---

### Executive Summary

Released by OpenAI on July 9, 2026, GPT-5.6 Luna (`gpt-5.6-luna`) is the entry-tier, high-velocity model within the planetary-themed GPT-5.6 generation (comprising Luna, Terra, and Sol). Engineered for low-latency chat applications, high-volume data extraction, document classification, and autonomous subagent loops, GPT-5.6 Luna combines a massive 1.1M-token context window with configurable reasoning controls (`none` to `max`). Following post-launch optimizations, OpenAI lowered baseline API pricing by 80% to an ultra-competitive $0.20 per million input tokens ($0.02 cached) and $1.20 per million output tokens. Benchmark evaluations show impressive frontier performance for an economy tier: GPQA Diamond reaches 91.7%–92.3%, MMLU-Pro hits 86.0%–86.5%, and SWE-bench / coding agent evaluations achieve 62.7%–68.5% with 74.6%–75.0% on Terminal-Bench integrations.

---

### Quantitative Evaluation

- **Tool use: 86/100.** High-speed tool execution and dependable structured output generation. Scoring 74.6%–75.0% on coding agent/terminal integrations, Luna executes function calling and command-line steps with fast turnaround times.
- **Reasoning: 90/100.** Strong deductive performance for a lightweight model. Reaches 91.7%–92.3% on GPQA Diamond and 86.0%–86.5% on MMLU-Pro under extended reasoning configurations.
- **Context window: 94/100.** Massive 1.1M-token context window capacity allows multi-book, full-repository, or extensive conversational session ingestion without degradation.
- **Multimodal: 80/100.** Efficient multimodal perception for document OCR, chart analysis, and screenshot interpretation.
- **Coding: 82/100.** Scores 62.7%–68.5% across SWE-bench coding evaluations, performing admirably on automated code review, bug hunting, unit test authoring, and repository exploration.
- **Cost efficiency: 98/100.** Exceptional value at $0.20 in / $1.20 out per 1M tokens ($0.02 cached reads), drastically reducing operational expenses for high-throughput production systems.
- **Overall Score: 86/100.** (Arithmetic mean: `(86 + 90 + 94 + 80 + 82) / 5 = 432 / 5 = 86.4`, rounded to **86**).

---

### Key Strengths

1. **Ultra-Low Inference Cost:** $0.20 per 1M input tokens and $0.02 cached reads makes frontier-level context accessible at commodity prices.
2. **1.1M Token Context:** Expansive context horizon handles complete codebases and large document archives seamlessly.
3. **High Generation Speed:** Exceeds 60–100+ tokens per second with very low time-to-first-token.
4. **Strong Science & Math Floor:** 91.7%–92.3% on GPQA Diamond ensures solid factual grounding.

---

### Trade-offs & Limitations

1. **Complex System Design Limits:** For large-scale distributed architectures and zero-shot novel algorithm generation, flagship siblings (Terra and Sol) provide deeper reasoning ceilings.
2. **Modality Ceiling:** Does not feature native audio or video generation; confined to text and image inputs.
3. **Long-Context Pricing Threshold:** Context injections exceeding 272K tokens trigger standard long-context pricing surcharges.

---

### Performance Benchmarks

- **GPQA Diamond:** 91.7% – 92.3%
- **MMLU-Pro:** 86.0% – 86.5%
- **SWE-bench Coding Evaluations:** 62.7% – 68.5%
- **Terminal-Bench / Coding Agent Index:** 74.6% – 75.0%
- **Context Window:** ~1,100,000 tokens

---

### Sources & Verification

- [OpenAI GPT-5.6 Luna Launch & Pricing Announcement](https://openai.com)
- [OpenRouter GPT-5.6-luna Model Specifications](https://openrouter.ai)
- [Vals AI & Artificial Analysis Benchmark Evaluations](https://artificialanalysis.ai)
- [RankLLMs Frontier Model Tracker](https://rankllms.com)
