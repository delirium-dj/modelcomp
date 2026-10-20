# DiffusionGemma 26B A4B — Model Evaluation

- **Research Date:** 2026-10-20
- **Researcher:** Gemini 3.8 Flash
- **Model Name:** DiffusionGemma 26B A4B
- **Model Type:** Open-weights discrete text-diffusion Mixture-of-Experts (MoE) foundation model

---

### Executive Summary

DiffusionGemma 26B A4B is Google DeepMind's open-weights discrete text-diffusion model released under the Apache 2.0 license, combining a 26B total parameter Mixture-of-Experts (MoE) backbone with 3.8B active parameters per token. In contrast to traditional sequential autoregressive decoding, DiffusionGemma generates 256-token blocks in parallel, achieving extraordinary inference velocities of up to ~1,500 tokens/second on a single NVIDIA H100 GPU and fitting comfortably within 24GB VRAM (e.g., RTX 4090/5090 via NVFP4).

Equipped with a 256,000-token (256K) context window, native multimodal input processing (text, image, and video), and function-calling capabilities, DiffusionGemma achieves 77.6% on MMLU-Pro, 69.1% on AIME 2026, 73.2% on GPQA Diamond, 69.1% on LiveCodeBench v6, and 56.2% on the Tau2 agentic benchmark. While it incurs a minor "diffusion tax" in deep multi-step mathematical proofs relative to pure autoregressive baselines, it represents a revolutionary speed frontier for local latency-sensitive code infilling, interactive editing, and rapid drafting workflows.

---

### Quantitative Evaluation

- **Tool use: 60/100.** Features native function calling on Model Garden and NVIDIA NGC. Scores 56.2% on Tau2 across retail, airline, and telecom domains; best suited for short-chain tool calls rather than deep autonomous terminal loops.
- **Reasoning: 65/100.** Scores 77.6% on MMLU-Pro, 73.2% on GPQA Diamond, and 69.1% on AIME 2026. Block diffusion enables rapid deduction, though non-autoregressive parallel token generation exhibits slight degradation on complex multi-step chain-of-thought proofs.
- **Context window: 72/100.** Supports up to 256K context with 32K maximum generation, achieving 32.0% on MRCR v2 8-needle at 128K; optimal fidelity maintained within medium-length prompt buffers.
- **Multimodal: 72/100.** Ingests text, images, and video sequences natively (54.3% on MMMU-Pro, 70.5% on MATH-Vision); text output only.
- **Coding: 63/100.** Delivers 69.1% on LiveCodeBench v6 and 1429 Codeforces Elo. Ideal for high-speed local code infilling, inline autocompletion, and rapid refactoring passes.
- **Cost efficiency: 96/100.** Free open weights under Apache 2.0 with ultra-low self-hosting compute overhead (~1,500 tok/s on an H100; runs locally on 24GB consumer GPUs).
- **Overall Score: 66/100.** (Arithmetic mean: `(60 + 65 + 72 + 72 + 63) / 5 = 332 / 5 = 66.4`, rounded to **66**).

---

### Key Strengths

1. **Unprecedented Generation Velocity:** Generates ~1,500 tokens/second on an H100 by diffusing 256-token blocks in parallel, outperforming autoregressive baselines up to 4×.
2. **Local Hardware Viability:** Fits within a 24GB VRAM footprint (RTX 4090/5090) with native NVFP4 quantization on modern hardware architectures.
3. **Apache 2.0 Open Weights:** Fully permissive open-source release allowing unrestricted commercial deployment and edge deployment.
4. **Native Video & Image Input:** Flexible multimodal input ingestion for real-time video and UI parsing.

---

### Trade-offs & Limitations

1. **Diffusion Proof Tax:** Mathematical and formal deduction is slightly lower than pure autoregressive equivalents (e.g., Gemma 4 AR at 88.3% on AIME vs. 69.1% here).
2. **Long-Context Retrieval Drop:** MRCR v2 needle retrieval declines at 128K+ spans compared to dense attention autoregressive models.
3. **Agentic Scaffolding Compatibility:** Discrete diffusion generation patterns require modern inference engines (vLLM, TensorRT-LLM, or Hugging Face EB samplers) tuned for block-level sampling.

---

### Pricing & Value Matrix

- **Self-Host License:** Apache 2.0 (Free open source)
- **Hosted Cloud Price:** ~$0.00 – $0.50 per million tokens (depending on aggregator)
- **Hardware Footprint:** Fits in 24GB VRAM (NVFP4 quantized)
- **Generation Speed:** ~1,000 – 1,500 tokens/second
- **Context Capacity:** 256,000 tokens (up to 32,000 output tokens)
- **Speed Tier:** Real-time ultra-fast block diffusion

---

### Benchmark Reference Summary

| Benchmark | Score | Context / Configuration |
| :--- | :--- | :--- |
| **MMLU-Pro** | 77.6% | Zero/few-shot multi-discipline evaluation |
| **GPQA Diamond** | 73.2% | Graduate-level reasoning |
| **AIME 2026** | 69.1% | Mathematics competition (no tools) |
| **LiveCodeBench v6** | 69.1% | Code generation and execution pass rate |
| **Tau2 Agent Benchmark** | 56.2% | Multi-domain agent instruction following |
| **Generation Speed** | ~1,500 tok/s | Single NVIDIA H100 execution |

---

### Evaluation Sources

- Google DeepMind Technical Disclosures: [DiffusionGemma Architecture and Benchmarks](https://google.dev)
- ArXiv Technical Paper: [DiffusionGemma: Discrete Text Diffusion at Scale](https://arxiv.org)
- NVIDIA NGC & Model Garden Documentation: [TensorRT-LLM DiffusionGemma Deployment](https://nvidia.com)
