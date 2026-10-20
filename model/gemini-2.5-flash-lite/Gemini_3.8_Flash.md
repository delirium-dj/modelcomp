# Gemini 2.5 Flash Lite — Model Evaluation

- **Research Date:** 2026-10-20
- **Researcher:** Gemini 3.8 Flash
- **Model Name:** Gemini 2.5 Flash-Lite (Google DeepMind)
- **Model Type:** Ultra-high-throughput multimodal efficiency foundation model (legacy status)

---

### Executive Summary

Gemini 2.5 Flash-Lite is Google DeepMind's ultra-low latency, high-throughput efficiency foundation model in the 2.5 generation, engineered for high-volume classification, data extraction, syntactic translation, and multimodal filtering. Featuring a 1,048,576-token (1M) context window, up to 65,536 output tokens, and controllable test-time thinking, Gemini 2.5 Flash-Lite achieves 84.1% on FACTS Grounding, 75.9% on MMLU-Pro, 64.6%–66.7% on GPQA Diamond (with thinking enabled), 72.9% on MMMU, and 31.6%–44.9% on SWE-bench Verified across multiple pass attempts.

Priced at an economical $0.10 per million input tokens ($0.025/1M cached) and $0.40 per million output tokens on Google AI Studio, it delivered unprecedented cost efficiency for batch and high-frequency workloads. On Google Cloud Vertex AI, it reached its formal enterprise end-of-life on October 20, 2026, transitioning to restricted legacy access for existing AI Studio accounts while new projects migrate to Gemini 3.5 Flash-Lite and Gemini 3.8 Flash.

---

### Quantitative Evaluation

- **Tool use: 72/100.** High grounding fidelity (84.1% on FACTS Grounding) with rapid native function calling and Google Search integration; constrained on autonomous multi-hop agent chains (18.4% on Tau2-bench).
- **Reasoning: 65/100.** Reaches 64.6%–66.7% on GPQA Diamond and 49.8%–53.3% on AIME 2025 with thinking tokens enabled. Solid entry-level logical deduction, though trailing frontier reasoning tiers.
- **Context window: 90/100.** 1,048,576-token context window with up to 65K output tokens. Evaluated with 100% needle-in-a-haystack recall across video, audio, and dense text inputs.
- **Multimodal: 85/100.** Native omni-modal processing across images, video, audio, and documents (72.9% MMMU, 51.3% Vibe-Eval); text output only.
- **Coding: 50/100.** Reaches 31.6% on SWE-bench Verified (up to 44.9% pass@k) and 34.3%–59.3% on LiveCodeBench (thinking variant). Well suited for unit tests, script translation, and syntax corrections.
- **Cost efficiency: 98/100.** Exceptionally cheap at $0.10 / $0.40 per 1M tokens ($0.025/1M cached input), offering massive throughput per dollar.
- **Overall Score: 72/100.** (Arithmetic mean: `(72 + 65 + 90 + 85 + 50) / 5 = 362 / 5 = 72.4`, rounded to **72**).

---

### Key Strengths

1. **Massive Throughput & Low Latency:** Fastest time-to-first-token in the 2.5 family, ideal for high-volume content filtering and entity extraction.
2. **True Native Multimodality:** Ingests hours of audio and video alongside text and images with 100% needle retrieval.
3. **Disruptive Pricing:** $0.10 / $0.40 per 1M tokens enabled massive production scale at negligible compute costs.
4. **Controllable Thinking Budget:** Allowed developers to toggle lightweight chain-of-thought tokens for reasoning-sensitive tasks.

---

### Trade-offs & Limitations

1. **Enterprise Retirement:** Scheduled enterprise end-of-life on Google Cloud Vertex AI took effect October 20, 2026; restricted to legacy projects on AI Studio.
2. **Autonomous Agent Limitations:** 18.4% on Tau2-bench indicates fragility in complex multi-step terminal or browser agent environments.
3. **Complex Refactoring Constraints:** Lacks the deep repository architectural synthesis capabilities of full Flash and Pro models.

---

### Pricing & Value Matrix

- **Input Price:** $0.10 per million tokens (Cached: $0.025/1M)
- **Output Price:** $0.40 per million tokens
- **Audio Input:** $0.30 per million tokens
- **Context Capacity:** 1,048,576 tokens (up to 65,536 output tokens)
- **Lifecycle Status:** Retiring October 20, 2026 on Google Cloud Vertex AI; legacy access on AI Studio
- **Successor:** Gemini 3.5 Flash-Lite / Gemini 3.8 Flash

---

### Benchmark Reference Summary

| Benchmark | Score | Context / Configuration |
| :--- | :--- | :--- |
| **FACTS Grounding** | 84.1% | Search grounding & factuality verification |
| **GPQA Diamond** | 64.6% – 66.7% | Standard / Thinking mode enabled |
| **MMMU** | 72.9% | Multimodal college-level reasoning |
| **AIME 2025** | 49.8% – 53.3% | Mathematical reasoning pass |
| **SWE-bench Verified** | 31.6% (resolved) / 44.9% (pass@k) | Technical report coding evaluations |

---

### Evaluation Sources

- Google Cloud Lifecycle Documentation: [Vertex AI Model End-of-Life Notices](https://cloud.google.com)
- Google DeepMind Technical Disclosures: [Gemini 2.5 Flash-Lite Overview](https://ai.google.dev)
- Artificial Analysis & OpenRouter Benchmarks: [Gemini 2.5 Flash-Lite Index](https://openrouter.ai)
