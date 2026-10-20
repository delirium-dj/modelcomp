# Model Research Report: GPT-5.1

**Researched by:** Gemini 3.8 Flash
**Research Date:** 2026-10-20
**Overall Score:** 87/100

---

### Executive Summary

GPT-5.1 was released by OpenAI on November 12–13, 2025 as the mid-generation refinement of the flagship GPT-5 architecture. Serving as an evolution over the initial August 2025 GPT-5 release, GPT-5.1 was engineered specifically to solve user-experience friction points: excessive conversational sycophancy, dry mechanical tone, over-reasoning on simple queries, and instruction drift across long contexts. The release formalized configurable thinking effort (`none`, `low`, `medium`, and `high`) across its conversational "Instant" and deep-thought "Thinking" personas, while standardizing a 400,000-token input window and 128,000-token output limit. Benchmark evaluations show marked progress: SWE-bench Verified climbs to 76.3%, GPQA Diamond achieves 87.3%, AIME 2025 reaches 94.0%–95.7%, and Tau²-Bench-Verified records 76.8% overall across enterprise tool environments. Standard API pricing remains pegged at $1.25 per million input tokens and $10.00 per million output tokens.

---

### Quantitative Evaluation

- **Tool use: 88/100.** Exemplary tool invocation fidelity and schema compliance. In the multi-domain Tau²-Bench suite, GPT-5.1 achieved 76.8% overall on the strict Tau²-Bench-Verified track (80.5% Telecom, 77.5% Retail, 72.4% Airline). Terminal-Bench CLI execution reaches 47.5% for base GPT-5.1 and 57.5%–60.4% in Codex configurations.
- **Reasoning: 90/100.** Scores 87.3% on GPQA Diamond under high reasoning effort. On competition math AIME 2025, it achieves 94.0%–95.7%. Configurable thinking effort (`none` to `high`) dynamically scales test-time compute.
- **Context window: 85/100.** Native 400,000-token context window with up to 128,000 output tokens. Reliable needle retrieval across substantial multi-file projects, though smaller than 1M+ token competing windows.
- **Multimodal: 85/100.** Native vision and document analysis ingesting diagrams, screenshots, technical schematics, and multi-page PDFs; text and code outputs.
- **Coding: 88/100.** Scores 76.3% on SWE-bench Verified. Excels at automated bug remediation, unit test generation, and full-stack software authoring.
- **Cost efficiency: 82/100.** Standard frontier pricing at $1.25 in / $10.00 out per 1M tokens ($0.125/1M cached reads), offering dependable enterprise value.
- **Overall Score: 87/100.** (Arithmetic mean: `(88 + 90 + 85 + 85 + 88) / 5 = 436 / 5 = 87.2`, rounded to **87**).

---

### Key Strengths

1. **Configurable Reasoning Effort:** Smoothly scales from instant low-latency conversational responses (`none`) to deep test-time deliberation (`high`).
2. **Robust Software Engineering:** 76.3% on SWE-bench Verified handles real-world GitHub issues and multi-file codebases.
3. **High Agentic Policy Adherence:** 76.8% on Tau²-Bench-Verified demonstrates disciplined multi-turn enterprise tool orchestration.
4. **Natural Tone & Instruction Following:** Significantly mitigates sycophancy and mechanical phrasing compared to early GPT-5.

---

### Trade-offs & Limitations

1. **Context Window vs 1M+ Flagships:** 400K tokens is ample for most repositories but trails 1M+ token offerings like Gemini 2.5/3.x and GLM-5.x.
2. **Modality Boundaries:** Strong image/document OCR and UI understanding, but lacks native direct video and raw audio token streams in standard API endpoints.
3. **Frontier Cost Profile:** At $1.25/$10.00 per 1M tokens, high-volume batch tasks require careful reasoning effort management.

---

### Performance Benchmarks

- **SWE-bench Verified:** 76.3%
- **GPQA Diamond:** 87.3%
- **AIME 2025:** 94.0% – 95.7%
- **Tau²-Bench-Verified:** 76.8% (Telecom: 80.5%, Retail: 77.5%, Airline: 72.4%)
- **LiveCodeBench:** 86.8%
- **Terminal-Bench 1.0 (Base):** 47.5% (Terminal-Bench Hard: 45.5%)

---

### Sources & Verification

- [OpenAI GPT-5.1 Release & Technical Announcement](https://openai.com)
- [OpenRouter GPT-5.1 Model Specs & Pricing](https://openrouter.ai)
- [SWE-bench Verified Benchmark Leaderboard](https://swebench.com)
- [Tau²-Bench Evaluation & Results Repository](https://github.com)
- [Artificial Analysis & Vals.ai Terminal-Bench Evaluations](https://artificialanalysis.ai)
