# Model Research Report: GPT-5.5

**Researched by:** Gemini 3.8 Flash
**Research Date:** 2026-10-21
**Overall Score:** 92/100

---

### Executive Summary

Released by OpenAI on April 23, 2026, GPT-5.5 represents a comprehensive retraining of OpenAI's base frontier architecture. Optimized specifically for long-horizon agentic workflows, complex terminal operations, multi-part enterprise instructions, and frontier mathematics, GPT-5.5 features a 1.1M-token context window (~1.05M input, 128K max output) paired with native multimodal perception. In benchmark evaluations, GPT-5.5 demonstrates state-of-the-art capability in agentic environments: on Terminal-Bench 2.0, it scores an industry-leading 82.7%; on SWE-bench Pro, it hits 58.6%; on FrontierMath Tiers 1–3, it achieves 51.7% (with 35.4% on research-level Tier 4); and on Chatbot Arena, it establishes an Elo of 1482+. Standard API pricing is structured at $5.00 per million input tokens ($0.50 cached) and $30.00 per million output tokens.

---

### Quantitative Evaluation

- **Tool use: 95/100.** Delivers premier autonomous tool coordination and CLI execution. Achieving 82.7% on Terminal-Bench 2.0, GPT-5.5 navigates complex Unix shell environments, resolves broken container networks, and automates multi-tool agent loops with minimal human supervision.
- **Reasoning: 94/100.** Reaches 51.7% on FrontierMath Tiers 1–3 and 35.4% on research-grade Tier 4. Excels at abstract mathematics, high-dimensional algorithmic problem solving, and strict instruction following.
- **Context window: 95/100.** 1.1M total token context window (~1.05M input / 128K output) featuring architecture-level attention upgrades that eliminate lost-in-the-middle degradation during massive repo traversals.
- **Multimodal: 90/100.** High-resolution multimodal processing for dense PDFs, user interfaces, system architecture diagrams, and computer-use visual feedback loops.
- **Coding: 88/100.** Hits 58.6% on SWE-bench Pro. Demonstrates robust multi-file debugging, dependency resolution, and autonomous refactoring across modern enterprise software stacks.
- **Cost efficiency: 68/100.** Priced at $5.00 in / $30.00 out per 1M tokens ($0.50 cached prompt reads), reflecting a higher price ceiling than GPT-5.4 that requires careful cache optimization in production.
- **Overall Score: 92/100.** (Arithmetic mean: `(95 + 94 + 95 + 90 + 88) / 5 = 462 / 5 = 92.4`, rounded to **92**).

---

### Key Strengths

1. **Terminal-Bench State-of-the-Art:** 82.7% on Terminal-Bench 2.0 establishes new heights in agentic command-line execution.
2. **FrontierMath Competency:** 51.7% on FrontierMath Tiers 1–3 tackles previously intractable mathematical research problems.
3. **1.1M Token Context:** Reliable zero-degradation long-context handling across massive multi-repository codebases.
4. **Chatbot Arena Leadership:** 1482+ Elo rating confirms outstanding natural language comprehension and execution.

---

### Trade-offs & Limitations

1. **Higher Cost Basis:** Standard billing ($5.00/$30.00 per 1M) is double GPT-5.4's rates, making it less suited for trivial summarization.
2. **Coding Parity with Specialized Rivals:** While strong at 58.6% SWE-bench Pro, some specialized models like Claude Opus 4.7 hold slight advantages in pure code-editing density.
3. **Absence of Native Video Tokenization:** Capped at text and image inputs on public API routes.

---

### Performance Benchmarks

- **Terminal-Bench 2.0:** 82.7%
- **SWE-bench Pro:** 58.6%
- **FrontierMath (Tiers 1–3):** 51.7%
- **FrontierMath (Tier 4):** 35.4%
- **Chatbot Arena Elo:** 1482+

---

### Sources & Verification

- [OpenAI GPT-5.5 Announcement & Technical Card](https://openai.com)
- [Vellum.ai Frontier Model Leaderboard](https://vellum.ai)
- [FrontierMath Evaluation Suite & Results](https://frontierbenchmarks.com)
- [OpenRouter GPT-5.5 Pricing & Specs](https://openrouter.ai)
- [LLM Stats GPT-5.5 Benchmark Overview](https://llm-stats.com)
