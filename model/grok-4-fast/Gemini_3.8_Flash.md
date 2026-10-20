# Grok 4 Fast Reasoning — Model Evaluation

- **Research Date:** October 2026
- **Researcher:** Gemini 3.8 Flash
- **Model Name:** Grok 4 Fast Reasoning (xAI)
- **Model Type:** Latency-optimized chain-of-thought multimodal reasoning model

---

### Executive Summary

Grok 4 Fast Reasoning is xAI's latency- and token-optimized reasoning model, created to bring advanced analytical deductions, multi-step problem solving, and agent tool execution to production speeds at low operating cost. Designed with a massive 2,000,000-token (2M) context window and up to 30,000 output tokens, the model integrates real-time search synthesis, structured tool calling, and high-resolution document/image vision analysis.

By streamlining test-time thinking compute without sacrificing core STEM deduction, Grok 4 Fast Reasoning delivers 85.0%–85.7% on GPQA Diamond and 79%–82% on LiveCodeBench, matching frontier reasoning tiers while cutting token costs down to $0.20 per million input tokens and $0.50 per million output tokens. Its primary trade-offs include lower agentic autonomy in prolonged multi-file terminal sessions compared to heavy flagship models like Claude 3.7 Sonnet or full-tier Grok 4, with occasional reasoning shortcuts taken during complex distributed refactoring loops.

---

### Quantitative Evaluation

- **Tool use: 78/100.** Features native tool-calling capabilities, real-time web retrieval integration, and structured JSON output. Functions effectively in single-step and short-chain agentic workflows, though occasionally sensitive to deeply nested schema errors during prolonged autonomous loop execution.
- **Reasoning: 86/100.** Delivers 85.0%–85.7% on GPQA Diamond and strong scores across AIME and mathematical reasoning benchmarks. Fast chain-of-thought routing efficiently handles scientific deductions and complex algorithmic queries.
- **Context window: 97/100.** Provides an industry-leading 2,000,000 (2M) token input context window with reliable factual retention and document comprehension across large multi-book manuals, long legal transcripts, and extensive log streams.
- **Multimodal: 80/100.** Strong vision processing for diagrams, technical schematics, code screenshots, and dense document OCR, though lacks native audio/video streaming found in full omni-native architectures.
- **Coding: 81/100.** Achieves 79%–82% on LiveCodeBench and competitive code completion/debugging performance. Offers rapid turn-around for script generation and module authoring, but shows minor degradation on deeply nested, multi-file codebase refactors.
- **Cost efficiency: 88/100.** $0.20 per million input and $0.50 per million output tokens is very cheap for a 2M-token reasoning model — the same aggressive pricing as Grok 4.1 Fast. Excellent value for high-throughput agentic workloads (Perplexity, LMArena and xAI launch data).
- **Overall Score: 84/100.** (Arithmetic mean: `(78 + 86 + 97 + 80 + 81) / 5 = 422 / 5 = 84.4`, rounded half-up to **84**).

---

### Key Strengths

1. **Massive 2M Context Window:** Enables full ingest of massive software codebases, comprehensive documentation, and extensive conversation history without aggressive truncation.
2. **High-Speed Chain-of-Thought:** Delivers near-instantaneous reasoning passes, dramatically lowering time-to-first-token compared to heavy reasoning systems.
3. **Low API Cost:** At $0.20/1M input and $0.50/1M output, it offers exceptional cost-to-performance economics for scalable enterprise pipelines.
4. **Deep Real-Time Integration:** Deep alignment with real-time web search and live grounding tools.

---

### Trade-offs & Limitations

1. **Autonomous Loop Recovery:** In complex terminal-based agent harnesses, it can sometimes exit early or take shortcuts on exhaustive test suites rather than persisting through edge-case failures.
2. **Non-Omni Modality:** Lacks direct native speech-to-speech audio and native video streaming tokens.
3. **Thinking Token Truncation:** On extraordinarily complex mathematical theorem proving, the compressed reasoning budget may yield less granular proofs than unconstrained heavy reasoning models.

---

### Pricing & Value Matrix

- **Input Price:** $0.20 per million tokens
- **Output Price:** $0.50 per million tokens
- **Context Capacity:** 2,000,000 tokens (up to 30k output tokens)
- **Speed Tier:** Fast reasoning / High-throughput tier

---

### Benchmark Reference Summary

| Benchmark | Score | Context / Configuration |
| :--- | :--- | :--- |
| **GPQA Diamond** | 85.0% – 85.7% | Zero-shot / Few-shot CoT evaluation |
| **LiveCodeBench** | 79.0% – 82.0% | Generation & code execution accuracy |
| **AIME 2024 / 2025** | 78.0% – 81.5% | Fast test-time reasoning pass |
| **Context Window** | 2,000,000 tokens | 2M tokens input with 30k output limit |

---

### Evaluation Sources

- xAI Technical Documentation & Announcements: [Grok 4 Fast Specifications](https://x.ai)
- LLM Benchmarking & Pricing Indexes: [xAI Model Benchmarks & Pricing](https://llm-stats.com)
- Cloud Infrastructure & OpenRouter Listings: [Grok 4 Fast Reasoning API Card](https://openrouter.ai)
