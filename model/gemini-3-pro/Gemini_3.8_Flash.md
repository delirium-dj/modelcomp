# Gemini 3 Pro — Model Evaluation

- **Research Date:** 2026-10-20
- **Researcher:** Gemini 3.8 Flash
- **Model Name:** Gemini 3 Pro (Google DeepMind)
- **Model Type:** Frontier multimodal reasoning and deep thinking foundation model

---

### Executive Summary

Gemini 3 Pro is Google DeepMind's flagship frontier reasoning model released in November 2025, introducing advanced native thinking controls and "Deep Think" test-time compute scaling across Google's 1,000,000-token (1M) multimodal context window. Built to rival closed-source reasoning leaders like OpenAI o3 and Claude Opus 5, Gemini 3 Pro achieved 91.9% on GPQA Diamond (rising to 93.8% in Deep Think mode), 95.0% on AIME 2025 (with code execution), 31.1%–45.1% on ARC-AGI-2, and #1 human preference rankings on WebDev Arena.

Priced at $2.00 per million input tokens and $12.00 per million output tokens (with 75% context caching discounts and 50% batch savings), Gemini 3 Pro established high price-to-performance standards for frontier intelligence. While succeeded by the optimized Gemini 3.1 Pro architecture, Gemini 3 Pro remains an industry milestone for native omnimodal reasoning across audio, video, high-resolution documentation, and complex multi-file codebases.

---

### Quantitative Evaluation

- **Tool use: 91/100.** High-fidelity function calling, Google Search grounding, and Python code sandbox execution. Orchestrates multi-step agentic workflows and tool chaining with low failure rates.
- **Reasoning: 94/100.** Delivers 91.9%–93.8% on GPQA Diamond and 95.0% on AIME 2025. "Deep Think" test-time compute allocation untangles intricate mathematical proofs, scientific hypotheses, and algorithmic logic.
- **Context window: 98/100.** 1,000,000-token native context window with up to 65,536 output tokens. Exceptional needle-in-a-haystack recall across large enterprise repositories and hours of continuous multimedia.
- **Multimodal: 93/100.** Native ingestion across audio, video, complex technical blueprints, and dense PDF documentation; text and structured code outputs.
- **Coding: 91/100.** Reaches 90.0% on HumanEval, high pass rates on SWE-bench Verified, and #1 placement on WebDev Arena. Robust repository-level refactoring and full-stack software authoring.
- **Cost efficiency: 86/100.** Competitive frontier pricing at $2.00 / $12.00 per 1M tokens with prompt caching dropping to $0.50/1M, offering strong value relative to $5/$25 competitor flagships.
- **Overall Score: 93/100.** (Arithmetic mean: `(91 + 94 + 98 + 93 + 91) / 5 = 467 / 5 = 93.4`, rounded to **93**).

---

### Key Strengths

1. **Frontier STEM & Scientific Deduction:** 91.9%–93.8% on GPQA Diamond and 95.0% on AIME 2025 demonstrate elite mathematical and scientific problem-solving.
2. **Deep Think Reasoning Allocation:** Dynamic thinking depth parameters (`Low`, `Medium`, `High`, `Deep Think`) allow custom tailoring of compute effort.
3. **WebDev Arena Leadership:** #1 ranking for generating functional, aesthetic, and responsive web applications.
4. **Accessible Frontier Economics:** $2.00 / $12.00 rates undercut older $5/$25 flagship models while delivering comparable or superior reasoning fidelity.

---

### Trade-offs & Limitations

1. **Deep Think Latency:** Maximum thinking effort configurations significantly expand time-to-first-token on complex queries.
2. **Succeeded by 3.1 Pro:** Gemini 3.1 Pro notably upgraded ARC-AGI-2 performance (jumping to 77.1%) and reduced execution overhead.
3. **Audio Token Surcharge:** Audio stream tokens carry separate pricing requiring caching for heavy audio ingestion.

---

### Pricing & Value Matrix

- **Input Price:** $2.00 per million tokens (Cached: $0.50/1M)
- **Output Price:** $12.00 per million tokens
- **Batch API Discount:** 50% discount ($1.00 in / $6.00 out)
- **Context Capacity:** 1,000,000 tokens (up to 65,536 output tokens)
- **Speed Tier:** Frontier reasoning / Deep Think tier

---

### Benchmark Reference Summary

| Benchmark | Score | Context / Configuration |
| :--- | :--- | :--- |
| **GPQA Diamond** | 91.9% (High) / 93.8% (Deep Think) | Graduate-level STEM reasoning |
| **AIME 2025** | 95.0% | Mathematics competition (with tools) |
| **ARC-AGI-2** | 31.1% – 45.1% | Abstract logic and novel puzzle reasoning |
| **HumanEval** | 90.0% | Zero-shot code synthesis |
| **WebDev Arena** | #1 Ranked | Human preference in functional web apps |

---

### Evaluation Sources

- Google DeepMind Official Announcements: [Gemini 3 Pro Architecture & Deep Think](https://blog.google)
- Google AI Studio Platform Specifications: [Gemini 3 Pro Pricing & API Limits](https://deepmind.google)
- Independent Benchmark Studies: Vellum AI & ARC Prize Leaderboard Trackers.
