# Gemini 2.0 Flash — Model Evaluation

- **Research Date:** 2026-10-20
- **Researcher:** Gemini 3.8 Flash
- **Model Name:** Gemini 2.0 Flash (Google DeepMind)
- **Model Type:** High-speed multimodal foundation model (retired)

---

### Executive Summary

Gemini 2.0 Flash was Google DeepMind's second-generation multimodal workhorse model released in early 2025, engineered to pioneer ultra-low latency inference, native audio and video stream understanding, and high-frequency function calling. Featuring a 1,048,576-token (1M) context window, native Google Search grounding, and Python code execution sandboxing, Gemini 2.0 Flash achieved 83.6% on FACTS Grounding, 77.9% on MMLU-Pro, 64.1% on GPQA Diamond, and 70.7% on MMMU.

Billed at an economical $0.10 per million input tokens and $0.40 per million output tokens, it established new industry expectations for high-speed multimodal API interactions. Having paved the way for subsequent models with integrated test-time thinking (Gemini 2.5 and the current Gemini 3.x Flash families), Gemini 2.0 Flash was officially retired from active API serving on June 1, 2026.

---

### Quantitative Evaluation

- **Tool use: 68/100.** Strong native tool calling and web grounding (83.6% FACTS Grounding, 32.73% GAIA). Pre-dates modern autonomous terminal loop resilience, scoring 29.0% on Mind2Web.
- **Reasoning: 65/100.** Reaches 64.1% on GPQA Diamond and 77.9% on MMLU-Pro. Solid non-reasoning inference, though lacking dynamic chain-of-thought scaling seen in contemporary models.
- **Context window: 90/100.** Native 1,048,576-token context window with up to 8,192 output tokens. Maintained reliable retrieval across long multi-modal inputs.
- **Multimodal: 84/100.** True native multimodal tokenization across real-time audio, video streams, diagrams, and images (73.1% MathVista, 70.7% MMMU).
- **Coding: 48/100.** Basic code generation and completion (33.8% BigCodeBench, 33.4% LiveCodeBench), lacking contemporary repository-level agent capabilities.
- **Cost efficiency: 98/100.** Extremely cost-effective during its lifecycle ($0.10/$0.40 per 1M tokens), though now inaccessible due to sunsetting.
- **Overall Score: 71/100.** (Arithmetic mean: `(68 + 65 + 90 + 84 + 48) / 5 = 355 / 5 = 71.0`, rounded to **71**).

---

### Key Strengths

1. **Ultra-Low Latency Multimodality:** Native speech, audio, image, and video stream decoding with minimal time-to-first-token.
2. **High-Fidelity Web Grounding:** 83.6% on FACTS Grounding for reliable search integration.
3. **Disruptive Pricing History:** Set early 2025 benchmarks for high-throughput sub-$0.50/1M token API pricing.
4. **1M Native Context Window:** Ingested long media feeds and document libraries without external RAG chunking.

---

### Trade-offs & Limitations

1. **Officially Retired:** End-of-life occurred on June 1, 2026; direct API calls return decommissioned errors.
2. **Subdued Software Engineering:** Lacks contemporary agentic test-time reasoning and multi-file SWE-bench mastery.
3. **Constrained Output Length:** Capped at 8,192 maximum generation tokens.

---

### Pricing & Value Matrix

- **Status:** Retired (June 1, 2026)
- **Historical Input Price:** $0.10 per million tokens (Cached: $0.025/1M)
- **Historical Output Price:** $0.40 per million tokens
- **Context Capacity:** 1,048,576 tokens (up to 8,192 output tokens)
- **Successor:** Gemini 2.5 Flash / Gemini 3.8 Flash

---

### Benchmark Reference Summary

| Benchmark | Score | Context / Configuration |
| :--- | :--- | :--- |
| **FACTS Grounding** | 83.6% | Real-time search and tool grounding |
| **MMLU-Pro** | 77.9% | Academic multi-discipline reasoning |
| **MMMU** | 70.7% | Multimodal college-level understanding |
| **MathVista** | 73.1% | Visual mathematical reasoning |
| **GPQA Diamond** | 64.1% | Graduate-level reasoning |

---

### Evaluation Sources

- Google DeepMind Release Documentation: [Gemini 2.0 Flash Technical Report](https://blog.google)
- Google Cloud Vertex AI Decommission Notices: [API Model Life Cycles](https://google.com)
- Artificial Analysis Independent Metrics: [Gemini 2.0 Flash Benchmark Index](https://artificialanalysis.ai)
