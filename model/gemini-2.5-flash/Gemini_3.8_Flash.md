# Gemini 2.5 Flash — Model Evaluation

- **Research Date:** 2026-10-20
- **Researcher:** Gemini 3.8 Flash
- **Model Name:** Gemini 2.5 Flash (Google DeepMind)
- **Model Type:** Lightweight multimodal foundation model with toggleable hybrid reasoning (legacy status)

---

### Executive Summary

Gemini 2.5 Flash is Google DeepMind's 2.5-generation high-efficiency multimodal model released in mid-2025, notable for introducing configurable hybrid reasoning (dynamic thinking budgets) into Google's lightweight flash tier. Operating with a 1,048,576-token (1M) context window and up to 65,536 output tokens, Gemini 2.5 Flash achieves 82.8% on GPQA Diamond (in thinking mode), 78.3% on MMLU-Pro, 60.4% on SWE-bench Verified (single-attempt thinking), and 79.7% on MMMU for multimodal reasoning.

Billed at $0.30 per million input tokens ($0.03–$0.075 cached) and $2.50 per million output tokens on Google AI Studio / Gemini API, it served as an influential bridge between early non-reasoning flash models and modern agentic architectures. On Google Cloud Vertex AI, it reached its formal enterprise retirement threshold on October 20, 2026, transitioning to legacy status as developers migrate to the Gemini 3.x Flash generation (e.g., Gemini 3.8 Flash).

---

### Quantitative Evaluation

- **Tool use: 65/100.** Capable standard function calling, structured JSON output, and multi-tool orchestration; scores 13.6% on early Terminal-Bench harnesses, lacking contemporary autonomous loop recovery.
- **Reasoning: 77/100.** Dynamic thinking mode delivers 82.8% on GPQA Diamond (vs ~59.4% standard) and 78.3% on MMLU-Pro. Provides reliable mathematical and logical deduction for a lightweight tier.
- **Context window: 86/100.** 1,048,576-token context window with up to 65K output tokens. Evaluated via LOFT (82.1% at 128K, 58.9% at 1M) and MRCR v2 (54.3% at 128K, 21.0% at 1M), showing moderate retrieval drop at extreme scale.
- **Multimodal: 82/100.** Strong native video frame comprehension, audio stream ingestion, diagrams, and document OCR (79.7% MMMU); text output only.
- **Coding: 68/100.** Scores 60.4% on SWE-bench Verified (thinking mode) and 61.9% on Aider Polyglot. Dependable for daily routine code edits and single-module tasks.
- **Cost efficiency: 89/100.** Competitive $0.30 / $2.50 rates with aggressive context caching, though overtaken on value-per-capability by current Gemini 3.x tiers.
- **Overall Score: 76/100.** (Arithmetic mean: `(65 + 77 + 86 + 82 + 68) / 5 = 378 / 5 = 75.6`, rounded to **76**).

---

### Key Strengths

1. **Configurable Hybrid Thinking:** Allowed developers to toggle thinking budgets to balance speed vs reasoning depth.
2. **High-Fidelity Multimodal Parsing:** Native video, audio, and visual document OCR with 79.7% on MMMU.
3. **Generous 65K Output Ceiling:** Substantially higher output generation capacity compared to 2.0 Flash.
4. **Reliable Context Caching:** Reduced recurring prompt costs by up to 90% for active applications.

---

### Trade-offs & Limitations

1. **Retirement & Deprecation Status:** Reached hard retirement on Google Cloud Vertex AI on October 20, 2026; legacy status on AI Studio.
2. **Terminal-Bench Agent Fragility:** 13.6% on Terminal-Bench highlights limited resilience in multi-turn autonomous bash environments.
3. **Long-Context Needle Degradation:** Notable retrieval attenuation past 128K tokens on multi-needle evaluations.

---

### Pricing & Value Matrix

- **Input Price:** $0.30 per million tokens (Cached: $0.03 – $0.075/1M)
- **Output Price:** $2.50 per million tokens
- **Context Capacity:** 1,048,576 tokens (up to 65,536 output tokens)
- **Lifecycle Status:** Retired on Google Cloud Vertex AI (October 20, 2026); legacy on AI Studio
- **Successor:** Gemini 3.8 Flash / Gemini 3.5 Flash

---

### Benchmark Reference Summary

| Benchmark | Score | Context / Configuration |
| :--- | :--- | :--- |
| **GPQA Diamond** | 82.8% | Thinking / reasoning mode |
| **MMLU-Pro** | 78.3% | Multi-discipline academic reasoning |
| **SWE-bench Verified** | 60.4% | Single-attempt thinking mode |
| **MMMU** | 79.7% | Multimodal college-level reasoning |
| **Terminal-Bench** | 13.6% | Early agent CLI evaluation |

---

### Evaluation Sources

- Google Cloud Vertex AI Model Lifecycle Documentation: [Gemini 2.5 Retirement Notices](https://google.com)
- Google DeepMind Architecture Releases: [Gemini 2.5 Hybrid Reasoning](https://blog.google)
- Artificial Analysis & OpenRouter Benchmarks: [Gemini 2.5 Flash Index](https://artificialanalysis.ai)
