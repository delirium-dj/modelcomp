# Gemma 4 31B — Model Evaluation

- **Research Date:** 2026-10-20
- **Researcher:** Gemini 3.8 Flash
- **Model Name:** Gemma 4 31B IT (`google/gemma-4-31B-it`)
- **Model Type:** Dense 30.7B parameter open-weights multimodal foundation model (Apache 2.0)

---

### Executive Summary

Gemma 4 31B IT is Google DeepMind's dense 30.7B parameter open-weights multimodal model released under the Apache 2.0 license, engineered to deliver frontier-adjacent reasoning, competitive coding, and native visual comprehension in a local-serving footprint. Architected with hybrid sliding-window and global attention featuring Proportional RoPE (p-RoPE), Gemma 4 31B supports a 262,144-token (256K) native context window and configurable reasoning modes.

In competitive evaluations, Gemma 4 31B IT demonstrates top-tier open-weights performance: **89.2% on AIME 2026 (no tools)**, **84.3%–85.7% on GPQA Diamond**, **80.0% on LiveCodeBench v6**, and 85.2% on MMLU-Pro. Capable of running locally on consumer and enterprise GPUs (such as RTX 3090/4090/5090 or single A100/H100 instances) via vLLM, Ollama, and Hugging Face, it serves as a premier open-weights foundation model for private enterprise deployment and agentic workflows.

---

### Quantitative Evaluation

- **Tool use: 86/100.** Strong native function calling, structured JSON output validation, and multi-step tool execution. Integrates seamlessly into local agent pipelines with reliable schema adherence.
- **Reasoning: 88/100.** Exceptional mathematical and scientific reasoning (89.2% AIME 2026 without tools; 84.3%–85.7% GPQA Diamond; 85.2% MMLU-Pro). Competing neck-and-neck with proprietary models twice its size.
- **Context window: 86/100.** Native 262,144-token (256K) context window with hybrid attention, maintaining solid needle retrieval across long code files and technical documentation.
- **Multimodal: 82/100.** Native visual perception handling diagrams, UI layouts, and sequential video frames; text and structured code outputs.
- **Coding: 85/100.** Scores 80.0% on LiveCodeBench v6 and ~84% on algorithmic benchmarks. Proficient at complex code refactoring, algorithmic synthesis, and automated test authoring.
- **Cost efficiency: 100/100.** Fully permissive Apache 2.0 license for unrestricted free commercial self-hosting; hosted API endpoints available at ~$0.20 / $0.40 per 1M tokens.
- **Overall Score: 85/100.** (Arithmetic mean: `(86 + 88 + 86 + 82 + 85) / 5 = 427 / 5 = 85.4`, rounded to **85**).

---

### Key Strengths

1. **Frontier Math & Science in 31B:** 89.2% on AIME 2026 and 84.3%+ on GPQA Diamond rival top closed-weights flagships.
2. **Permissive Apache 2.0 License:** Completely free for commercial modification, fine-tuning, and on-premises deployment without licensing friction.
3. **Competitive Code Generation:** 80.0% on LiveCodeBench v6 delivers robust software engineering in a compact footprint.
4. **256K Native Context Window:** Accommodates extensive codebase modules and document archives without external chunking.

---

### Trade-offs & Limitations

1. **Hardware Footprint for Dense 31B:** While efficient, running full precision requires multi-GPU or quantized 4-bit/8-bit configurations on single consumer cards.
2. **Context Window vs 1M Tiers:** 256K context is expansive but smaller than 1M+ token frontier models.
3. **Audio/Speech Absence:** Multimodality is restricted to images and video frames; lacks speech token generation.

---

### Pricing & Value Matrix

- **Self-Host License:** Apache 2.0 (Free open source)
- **Hosted API Input:** ~$0.20 per million tokens
- **Hosted API Output:** ~$0.40 per million tokens
- **Hardware Footprint:** ~31B dense (Runs quantized on 24GB GPUs)
- **Context Capacity:** 262,144 tokens (256K)
- **Speed Tier:** High-performance local / enterprise open weights

---

### Benchmark Reference Summary

| Benchmark | Score | Context / Configuration |
| :--- | :--- | :--- |
| **AIME 2026** | 89.2% | Mathematics competition (no tools) |
| **GPQA Diamond** | 84.3% – 85.7% | Graduate-level STEM reasoning |
| **LiveCodeBench v6** | 80.0% | Code generation and execution pass rate |
| **MMLU-Pro** | 85.2% | Academic multi-discipline reasoning |
| **Context Window** | 262,144 tokens | 256K native hybrid attention |

---

### Evaluation Sources

- Google DeepMind Model Disclosures: [Gemma 4 Technical Report](https://blog.google)
- Hugging Face Model Repository: [Gemma-4-31B-it Model Card](https://huggingface.co/google/gemma-4-31B-it)
- Independent Benchmark Studies: SambaNova AI & LMSYS Chatbot Arena Indexes.
