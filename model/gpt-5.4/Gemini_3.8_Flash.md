# Model Research Report: GPT-5.4

**Researched by:** Gemini 3.8 Flash
**Research Date:** 2026-10-20
**Overall Score:** 92/100

---

### Executive Summary

Released by OpenAI on March 5, 2026, GPT-5.4 unifies the general-purpose GPT foundation model line with the specialized Codex agent stack into a single frontier system. Engineered for end-to-end enterprise workflows, computer use, and autonomous software development, GPT-5.4 introduces a 1M+ token context window (~922K input tokens, 128K max output) paired with fine-grained reasoning effort controls (`none`, `low`, `medium`, `high`, `xhigh`). Benchmark milestones demonstrate decisive frontier performance: on OSWorld desktop navigation, it achieves 75.0% (surpassing the 72.4% human expert baseline); on GDPval knowledge work, it reaches 83.0%; on SWE-bench Pro, it scores 57.7%; on GPQA Diamond, it hits 92.8%–93.0%; and on Terminal-Bench 2.0, it delivers 75.1%. Standard API pricing is positioned at $2.50 per million input tokens ($0.25 cached) and $15.00 per million output tokens.

---

### Quantitative Evaluation

- **Tool use: 94/100.** Delivers state-of-the-art computer use and tool orchestration. Achieving 75.0% on OSWorld, GPT-5.4 operates desktop operating systems and web browsers with human-grade autonomy. On Terminal-Bench 2.0, it scores 75.1% across complex multi-step terminal pipelines.
- **Reasoning: 93/100.** Scores 92.8%–93.0% on GPQA Diamond and 83.0% on GDPval across professional enterprise domains. Configurable reasoning controls (`none` to `xhigh`) permit tailored computational depth.
- **Context window: 95/100.** 1M+ context window capacity (~922K in / 128K out) with advanced recall architecture, allowing vast codebases, legal repositories, and multi-document corpuses to be processed in a single prompt.
- **Multimodal: 92/100.** High-fidelity multimodal perception supporting text, high-resolution imagery, complex architectural diagrams, UI mockups, and real-time screen frame interpretation for OS control.
- **Coding: 88/100.** Scores 57.7% on SWE-bench Pro and 79.2% on SWE-bench Verified. Fully integrates Codex capabilities for autonomous repository refactoring, bug fixes, and testing.
- **Cost efficiency: 74/100.** Premium frontier pricing at $2.50 in / $15.00 out per 1M tokens ($0.25 cached prompt reads), reflecting its position as OpenAI's flagship intelligence tier.
- **Overall Score: 92/100.** (Arithmetic mean: `(94 + 93 + 95 + 92 + 88) / 5 = 462 / 5 = 92.4`, rounded to **92**).

---

### Key Strengths

1. **Human-Surpassing Computer Use:** 75.0% on OSWorld outperforms the human expert benchmark (72.4%) for desktop navigation.
2. **1M+ Token Context Window:** Expansive 922K+ input horizon with 128K output capacity eliminates document chunking.
3. **Consolidated Codex Stack:** Unifies general knowledge work (83.0% GDPval) and deep software engineering (57.7% SWE-bench Pro).
4. **Flexible Reasoning Granularity:** Seamlessly scales from zero-overhead instant generation to `xhigh` test-time deliberation.

---

### Trade-offs & Limitations

1. **Premium Cost:** Standard API billing is 2x higher on input than GPT-5.1/GPT-5.2, requiring prompt caching for cost-sensitive workloads.
2. **High Latency at xhigh:** Full deliberate reasoning passes across large prompts can incur notable wait times.
3. **Complex Guardrail Overhead:** Strict frontier safety filters can produce conservative responses on security red-teaming queries.

---

### Performance Benchmarks

- **OSWorld (Computer Use):** 75.0% (vs. 72.4% human expert)
- **GDPval (Knowledge Work):** 83.0%
- **SWE-bench Pro:** 57.7%
- **SWE-bench Verified:** 79.2%
- **GPQA Diamond:** 92.8% – 93.0%
- **Terminal-Bench 2.0:** 75.1%

---

### Sources & Verification

- [OpenAI GPT-5.4 Announcement & Technical Report](https://openai.com)
- [OSWorld Benchmark Leaderboard & Results](https://osworld.ai)
- [SWE-bench Pro Leaderboard](https://swebench.com)
- [OpenRouter GPT-5.4 Specs & Pricing](https://openrouter.ai)
- [Nxcode Developer Brief: GPT-5.4 Architecture](https://nxcode.io)
