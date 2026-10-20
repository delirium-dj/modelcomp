# Gemini 1.5 Pro — Model Evaluation

- **Research Date:** 2026-10-20
- **Researcher:** Gemini 3.8 Flash
- **Model Name:** Gemini 1.5 Pro (Google DeepMind)
- **Model Type:** Sparse Mixture-of-Experts (MoE) multimodal foundation model (legacy milestone)

---

### Executive Summary

Gemini 1.5 Pro is Google DeepMind's landmark multimodal foundation model, notable as the pioneering architecture that introduced commercial-scale 2,000,000-token (2M) context windows to developers in 2024. Operating on a sparse Mixture-of-Experts (MoE) transformer backbone, Gemini 1.5 Pro processes text, code, audio streams, multi-hour video feeds, and high-resolution PDFs natively within a single prompt buffer.

While succeeded by Gemini 2.0/2.5 and the Gemini 3.x generation in modern agentic coding and test-time reasoning benchmarks (scoring 58.9% on GPQA Diamond and 41.7% on LiveCodeBench), Gemini 1.5 Pro remains a dependable benchmark baseline for long-context multi-modal ingestion. Available via Google AI Studio and Vertex AI at $1.25/$5.00 per 1M tokens (≤128K context) and $2.50/$10.00 per 1M (>128K context) with native Context Caching, it continues to serve large-scale historical document and multimedia indexing pipelines.

---

### Quantitative Evaluation

- **Tool use: 50/100.** Baseline native function calling, Python code execution sandbox, and structured JSON output schema support; lacks modern agentic CLI navigation and autonomous multi-turn terminal benchmarks.
- **Reasoning: 65/100.** Scores 58.9% on GPQA Diamond, 75.8% on MMLU-Pro, and 89.2% on BIG-Bench Hard. Capable multi-step problem solving, though eclipsed by newer test-time reasoning models.
- **Context window: 98/100.** 2,097,152 (2M) input token capacity with verified 99.2%–99.7% needle-in-a-haystack recall across text, audio, and video streams. Limited only by an 8,192 token maximum generation limit.
- **Multimodal: 88/100.** Native ingestion across audio, video (78.6% on Video-MME), high-res images, and multi-hundred-page PDFs; text and code output only.
- **Coding: 58/100.** Scores 84.1% on HumanEval and 74.6% on MBPP+, though competitive coding sits lower at 41.7% on LiveCodeBench. Good for single-file scripts and procedural tasks.
- **Cost efficiency: 84/100.** $1.25 / $5.00 per 1M tokens (≤128K) with context caching support, though newer flash models provide higher capability at lower token prices.
- **Overall Score: 72/100.** (Arithmetic mean: `(50 + 65 + 98 + 88 + 58) / 5 = 359 / 5 = 71.8`, rounded to **72**).

---

### Key Strengths

1. **Massive 2M Context Window:** Ingests hours of video footage, audio recordings, or full software repositories in a single prompt.
2. **True Native Multimodality:** Ingests video, audio, text, and imagery directly without intermediate OCR or transcription pipelines.
3. **High Long-Context Recall:** 99.2%+ needle retrieval retention across the full 2M span.
4. **Context Caching:** Substantially cuts costs on persistent document and codebase analysis.

---

### Trade-offs & Limitations

1. **Legacy Generation Ceiling:** Max output generation is constrained to 8,192 tokens per request.
2. **Subdued Agentic Tool Navigation:** Lacks modern autonomous agent loops and terminal tool resilience found in Claude 3.7 or Gemini 2.5/3.
3. **Older Benchmark Standards:** Replaced in primary reasoning tiers by current Gemini 2.5 and 3.x architectures.

---

### Pricing & Value Matrix

- **Input Price (≤128K):** $1.25 per million tokens
- **Output Price (≤128K):** $5.00 per million tokens
- **Input Price (>128K):** $2.50 per million tokens
- **Output Price (>128K):** $10.00 per million tokens
- **Context Capacity:** 2,097,152 tokens (up to 8,192 output tokens)
- **Speed Tier:** Batch & Long-context multimodal analysis

---

### Benchmark Reference Summary

| Benchmark | Score | Context / Configuration |
| :--- | :--- | :--- |
| **Needle-in-a-Haystack** | 99.7% (1M) / 99.2% (2M) | Multimodal retrieval fidelity |
| **MMLU-Pro** | 75.8% | General multi-discipline reasoning |
| **GPQA Diamond** | 58.9% | Expert-level academic reasoning |
| **Video-MME** | 78.6% | Long-form video multimodal comprehension |
| **HumanEval** | 84.1% | Zero-shot Python coding |

---

### Evaluation Sources

- Google DeepMind Technical Disclosures: [Gemini 1.5 Technical Report (arXiv:2403.05530)](https://arxiv.org)
- Google AI Studio Platform Documentation: [Gemini Pricing and Capabilities](https://aistudio.google.com)
- Independent Benchmark Evaluations: Artificial Analysis & Vals AI Indexes.
