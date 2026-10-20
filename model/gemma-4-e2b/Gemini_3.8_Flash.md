# Gemma 4 E2B — Model Evaluation

- **Research Date:** 2026-10-20
- **Researcher:** Gemini 3.8 Flash
- **Model Name:** Gemma 4 E2B (Google DeepMind)
- **Model Type:** Ultra-compact edge multimodal foundation model (Apache 2.0)

---

### Executive Summary

Gemma 4 E2B is Google DeepMind's ultra-compact, open-weights multimodal edge model released under the Apache 2.0 license, engineered for on-device deployment across mobile phones, laptops, and IoT hardware (e.g., Raspberry Pi 5 / Jetson). Featuring ~2.3B effective active parameters (and ~5.1B total parameters utilizing Per-Layer Embeddings), Gemma 4 E2B incorporates Grouped-Query Attention (GQA), sliding window attention, and native ingestion of text, high-resolution images, and raw audio streams into a compact memory footprint of 1.5GB to 3GB RAM/VRAM when quantized (2-bit to 4-bit GGUF or LiteRT-LM).

Equipped with a 128,000-token (128K) context window, native function calling, and configurable thinking modes, Gemma 4 E2B achieves 60.0% on MMLU-Pro, 43.4% on GPQA Diamond, 44.0% on LiveCodeBench v6, 24.5% on Tau2, and 77.9% decision accuracy on JevBench v1 with a median latency of ~102 ms. It sets a new performance-per-watt standard for offline edge intelligence, local semantic routing, on-device transcription, and voice-assisted tool execution.

---

### Quantitative Evaluation

- **Tool use: 45/100.** Native function calling, system prompt adherence, and local tool invocation. Scores 24.5% on Tau2 and 77.9% on JevBench routing tasks; best suited for local single-step tool execution rather than complex multi-turn agent loops.
- **Reasoning: 50/100.** Reaches 60.0% on MMLU-Pro, 43.4% on GPQA Diamond, and 37.5% on AIME 2026 (no tools). Configurable thinking mode enhances on-device deduction, though bounded by its 2.3B parameter capacity.
- **Context window: 65/100.** 128,000-token native context window with sliding window attention; achieves 19.1% on MRCR v2 8-needle at full 128K depth, performing best within sub-32K context spans.
- **Multimodal: 75/100.** Outstanding native multimodal versatility for edge hardware, directly processing text, images (44.2% MMMU-Pro), and raw audio input (33.47 on CoVoST); text output only.
- **Coding: 45/100.** Scores 44.0% on LiveCodeBench v6. Suitable for on-device code autocompletion, script formatting, syntax translation, and quick bug fixes.
- **Cost efficiency: 100/100.** Apache 2.0 permissive open weights enabling completely free on-device deployment (runs on consumer hardware with <3GB RAM); hosted API endpoints cost ~$0.04 / $0.08 per 1M tokens.
- **Overall Score: 56/100.** (Arithmetic mean: `(45 + 50 + 65 + 75 + 45) / 5 = 280 / 5 = 56.0`, rounded to **56**).

---

### Key Strengths

1. **Ultra-Lightweight Edge Footprint:** Operates smoothly in 1.5GB–3GB RAM on phones, tablets, and edge devices via LiteRT-LM, MediaPipe, and GGUF.
2. **Native Audio & Vision Ingestion:** Direct comprehension of speech, sound, and visual UI layouts without external Whisper or OCR pipelines.
3. **Apache 2.0 Open Weights:** Unrestricted commercial distribution, edge fine-tuning, and offline on-device deployment.
4. **Fast Local Latency:** Median inference latency of ~102 ms delivers near-instantaneous offline command parsing and semantic routing.

---

### Trade-offs & Limitations

1. **Edge Parameter Bounds:** Trailing larger 12B/31B architectures on deep scientific reasoning, complex mathematics, and multi-file codebases.
2. **Long-Context Attenuation:** Retrieval accuracy attenuates past 32K tokens on dense multi-needle tests.
3. **Text-Only Output:** Ingests audio and vision natively, but outputs are limited to text and code tokens.

---

### Pricing & Value Matrix

- **Self-Host License:** Apache 2.0 (Free open source)
- **Hosted API Input:** ~$0.04 per million tokens
- **Hosted API Output:** ~$0.08 per million tokens
- **Hardware Footprint:** ~1.5GB – 3GB RAM/VRAM (quantized GGUF/LiteRT)
- **Context Capacity:** 128,000 tokens (128K)
- **Speed Tier:** Real-time on-device edge model

---

### Benchmark Reference Summary

| Benchmark | Score | Context / Configuration |
| :--- | :--- | :--- |
| **MMLU-Pro** | 60.0% | Multi-discipline evaluation |
| **GPQA Diamond** | 43.4% | Graduate-level reasoning |
| **LiveCodeBench v6** | 44.0% | Code generation accuracy |
| **JevBench v1 (Routing)** | 77.9% | Local decision-making and routing tasks |
| **CoVoST (Audio)** | 33.47 | Native audio recognition (lower is better) |

---

### Evaluation Sources

- Google DeepMind Model Disclosures: [Gemma 4 Edge Architecture & Model Card](https://ai.google.dev)
- Google AI Edge & Qualcomm AI Hub: [Gemma 4 E2B LiteRT-LM Deployment](https://huggingface.co)
- Artificial Analysis & ApX Benchmarks: [Gemma 4 E2B Intelligence Index](https://artificialanalysis.ai)
