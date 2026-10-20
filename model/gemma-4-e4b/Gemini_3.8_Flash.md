# Gemma 4 E4B — Model Evaluation

- **Research Date:** 2026-10-20
- **Researcher:** Gemini 3.8 Flash
- **Model Name:** Gemma 4 E4B (Google DeepMind)
- **Model Type:** Edge-optimized multimodal foundation model (Apache 2.0)

---

### Executive Summary

Gemma 4 E4B is Google DeepMind's edge-optimized, open-weights multimodal foundation model released under the Apache 2.0 license, engineered for consumer hardware, high-end mobile devices, laptops, and robotics edge nodes. Featuring **4.5B effective active parameters** (and 8B total parameters utilizing Google's Per-Layer Embeddings / PLE architecture), Gemma 4 E4B combines a 42-layer dense transformer with a ~150M parameter vision encoder and native audio ingestion, fitting comfortably within a 5GB to 9GB memory footprint in quantized GGUF or LiteRT formats.

Operating across a 128,000-token (128K) native context window with hybrid sliding-window attention and Proportional RoPE, Gemma 4 E4B supports configurable thinking modes and native function calling. It achieves 69.4% on MMLU-Pro, 58.6% on GPQA Diamond, 52.0% on LiveCodeBench v6, 42.2% on Tau2, and 52.6% on MMMU-Pro. Delivering a notable step up in reasoning and code synthesis over E2B while preserving edge-deployment viability, it serves as an agile workhorse for local multimodal assistants, edge agent routing, and privacy-first application backends.

---

### Quantitative Evaluation

- **Tool use: 52/100.** Native function calling, system role prompting, and structured JSON output. Scores 42.2% on Tau2 agent evaluations; reliable for local single-step tool execution, routing, and device control.
- **Reasoning: 60/100.** Scores 69.4% on MMLU-Pro, 58.6% on GPQA Diamond, and 42.5% on AIME 2026 (no tools). Configurable thinking mode enhances step-by-step problem solving, outperforming previous 7B/9B edge baselines.
- **Context window: 68/100.** 128,000-token native context window with hybrid sliding-window attention. Achieves 25.4% on MRCR v2 8-needle at full 128K depth, performing with highest fidelity across sub-64K prompt buffers.
- **Multimodal: 80/100.** True native ingestion across text, high-resolution imagery (52.6% MMMU-Pro, 59.5% MATH-Vision), and raw audio streams (35.54 on CoVoST); text output only.
- **Coding: 55/100.** Reaches 52.0% on LiveCodeBench v6 and 940 Codeforces Elo. Capable of local script authoring, automated code translation, syntax formatting, and function-level debugging.
- **Cost efficiency: 100/100.** Apache 2.0 permissive open weights enabling completely free local execution (runs on 8GB consumer GPUs); hosted API endpoints cost ~$0.02 / $0.10 per 1M tokens.
- **Overall Score: 63/100.** (Arithmetic mean: `(52 + 60 + 68 + 80 + 55) / 5 = 315 / 5 = 63.0`, rounded to **63**).

---

### Key Strengths

1. **PLE Architecture Efficiency:** 4.5B active compute footprint delivers representational capacity comparable to conventional 7B–9B models.
2. **Local Hardware Accessibility:** Quantized 4-bit/8-bit builds run comfortably in 5GB–9GB VRAM/RAM on consumer laptops and edge nodes.
3. **Native Omni-Modal Ingestion:** Ingests raw audio, video frames, text, and images natively without external auxiliary models.
4. **Permissive Apache 2.0 License:** Completely open for private enterprise deployment, offline robotics, and commercial software integration.

---

### Trade-offs & Limitations

1. **Drop from 12B Unified:** Experienced a notable reasoning drop on mathematical competitions compared to Gemma 4 12B (42.5% vs 77.5% on AIME).
2. **Long-Context Needle Drop:** MRCR v2 needle retrieval shows moderate degradation when saturated to the full 128K boundary.
3. **Text-Only Generation:** Ingests rich multimodal inputs natively, but output generation is strictly text and code.

---

### Pricing & Value Matrix

- **Self-Host License:** Apache 2.0 (Free open source)
- **Hosted API Input:** ~$0.02 per million tokens
- **Hosted API Output:** ~$0.10 per million tokens
- **Hardware Footprint:** ~5GB – 9GB VRAM/RAM (Quantized GGUF / LiteRT)
- **Context Capacity:** 128,000 tokens (128K)
- **Speed Tier:** Real-time on-device edge foundation model

---

### Benchmark Reference Summary

| Benchmark | Score | Context / Configuration |
| :--- | :--- | :--- |
| **MMLU-Pro** | 69.4% | Multi-discipline academic reasoning |
| **GPQA Diamond** | 58.6% | Graduate-level STEM reasoning |
| **LiveCodeBench v6** | 52.0% | Code generation and execution pass rate |
| **MMMU-Pro** | 52.6% | Multimodal visual understanding |
| **Tau2 Agent Benchmark** | 42.2% | Multi-domain agent instruction following |

---

### Evaluation Sources

- Google DeepMind Model Disclosures: [Gemma 4 Edge Architecture & PLE Overview](https://blog.google)
- Hugging Face Model Repository: [Gemma 4 E4B Model Card & Specs](https://huggingface.co)
- Independent Benchmark Studies: Modal AI & LLM-Stats Index.
