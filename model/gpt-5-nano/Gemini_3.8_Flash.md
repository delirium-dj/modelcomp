# GPT-5 Nano — Model Evaluation

- **Research Date:** 2026-10-20
- **Researcher:** Gemini 3.8 Flash
- **Model Name:** GPT-5 Nano (OpenAI)
- **Model Type:** Ultra-high throughput lightweight utility and classification foundation model

---

### Executive Summary

GPT-5 Nano is OpenAI's ultra-lightweight entry in the generation-5 model family released on August 7, 2025. Engineered for extreme throughput (>250 tokens/second), rapid Time-To-First-Token (~80 ms), and near-zero compute overhead, GPT-5 Nano was built specifically for high-volume background tasks, semantic routing, real-time content filtering, lightweight data extraction, and high-frequency edge tool execution.

Featuring an expansive 400,000-token (400K) context window and up to 128,000 output tokens, GPT-5 Nano achieves 62.0% on MMLU-Pro, 85.0% on GSM8K, 55.0% on GPQA Diamond, 74.0% on Tau2-Bench, and 25.0%–35.0% on SWE-bench Verified. Priced at an ultra-low commodity rate of **$0.05 per million input tokens** and **$0.40 per million output tokens** (with prompt caching at $0.005/1M), it delivers massive cost efficiencies for batch preprocessing, continuous classification pipelines, and responsive micro-agent routing.

---

### Quantitative Evaluation

- **Tool use: 60/100.** Scores 74.0% on Tau2-Bench and 42.5% on Terminal-Bench 2.1. Dependable for single-turn function execution, API routing, and structured JSON parsing; constrained on deep multi-turn terminal debug loops.
- **Reasoning: 60/100.** Achieves 55.0% on GPQA Diamond and 85.0% on GSM8K. Adequate for straightforward multi-step logic, classification, and text transformation.
- **Context window: 76/100.** 400,000-token context window with up to 128K output buffer. Ingests large document sets and extensive logs cheaply, with 64.0% retention on AA-LCR long-context evaluations.
- **Multimodal: 52/100.** Lightweight visual perception for simple image labeling, OCR, and basic chart inspection; text and code output only.
- **Coding: 48/100.** Reaches 25.0%–35.0% on SWE-bench Verified and 52.5% on LiveCodeBench. Well suited for inline autocompletion, script formatting, and boilerplate synthesis.
- **Cost efficiency: 98/100.** Near-commodity pricing at $0.05 / $0.40 per 1M tokens with prompt caching at $0.005/1M and >250 tok/s generation throughput.
- **Overall Score: 59/100.** (Arithmetic mean: `(60 + 60 + 76 + 52 + 48) / 5 = 296 / 5 = 59.2`, rounded to **59**).

---

### Key Strengths

1. **Ultra-Low Inference Latency:** ~80 ms Time-To-First-Token and >250 tokens/second output speed for real-time applications.
2. **Disruptive Pricing Economics:** $0.05 / $0.40 per 1M tokens ($0.005/1M cached) makes massive automated document and log processing negligible in cost.
3. **400K Context Buffer:** Expansive context window allows large batch inputs to be evaluated without chunking.
4. **Reliable Semantic Routing:** 74.0% on Tau2-Bench makes it an ideal front-end router for routing complex requests to larger models.

---

### Trade-offs & Limitations

1. **Autonomous Coding Limits:** 25%–35% on SWE-bench Verified indicates clear boundaries on multi-file repository debugging.
2. **Lightweight Reasoning Bounds:** Not intended for complex mathematical competitions or graduate-level scientific theorem proving.
3. **Basic Vision Modalities:** Image parsing is limited to coarse feature extraction and OCR rather than high-density diagram analysis.

---

### Pricing & Value Matrix

- **Standard Input Price:** $0.05 per million tokens (Cached: $0.005/1M)
- **Standard Output Price:** $0.40 per million tokens
- **Throughput Speed:** ~250+ tokens/second (~80 ms TTFT)
- **Context Capacity:** 400,000 tokens (up to 128,000 output tokens)
- **Speed Tier:** Real-time high-throughput utility tier

---

### Benchmark Reference Summary

| Benchmark | Score | Context / Configuration |
| :--- | :--- | :--- |
| **MMLU-Pro** | 62.0% | Multi-discipline evaluation |
| **GSM8K** | 85.0% | Mathematical word problems |
| **GPQA Diamond** | 55.0% | Graduate-level STEM reasoning |
| **SWE-bench Verified** | 25.0% – 35.0% | Minimal agent software engineering harness |
| **Tau2-Bench** | 74.0% | Instruction following and tool trigger accuracy |

---

### Evaluation Sources

- OpenAI Platform Documentation: [GPT-5 Nano Specifications and API Pricing](https://openai.com)
- Serenities AI & InferenceBench: [GPT-5 Nano Performance & Throughput](https://inferencebench.io)
- PricePerToken Index: [GPT-5 Model Family Comparative Pricing](https://pricepertoken.com)
