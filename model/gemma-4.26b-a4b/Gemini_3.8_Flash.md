# Gemma 4 26B A4B — Model Evaluation

- **Research Date:** 2026-10-20
- **Researcher:** Gemini 3.8 Flash
- **Model Name:** Gemma 4 26B A4B (Google DeepMind)
- **Model Type:** Sparse Mixture-of-Experts (MoE) multimodal open-weights foundation model (Apache 2.0)

---

### Executive Summary

Gemma 4 26B A4B is Google DeepMind's open-weights sparse Mixture-of-Experts (MoE) multimodal foundation model released under the Apache 2.0 license. Architected with 25.2B total parameters activating only **3.8B active parameters per token**, Gemma 4 26B A4B delivers 4B-class inference latency and throughput (exceeding 105 tokens/second) alongside the deep parametric knowledge of a 26B foundation model across a 262,144-token (256K) native context window.

Equipped with configurable thinking modes and native multimodal image understanding, instruction-tuned variants achieve near-frontier benchmarks: **88.3% on AIME 2026 (no tools)**, **82.3% on GPQA Diamond**, **77.1% on LiveCodeBench v6**, 82.6% on MMLU-Pro, and 73.8% on MMMU-Pro. Serving as the primary MoE backbone for downstream implementations like DiffusionGemma, Gemma 4 26B A4B represents one of the industry's most compute-efficient, high-throughput multimodal open-source engines for edge and enterprise deployments.

---

### Quantitative Evaluation

- **Tool use: 68/100.** Native function calling, system role adherence, and structured JSON output. Scores 68.2% on Google's Tau2 average (~40% on third-party Telecom harnesses) and ~30% on Terminal-Bench Hard; robust on structured API calls with moderate CLI depth.
- **Reasoning: 80/100.** Scores 88.3% on AIME 2026 (the second-highest math score in the Gemma 4 family), 82.3% on GPQA Diamond, and 82.6% on MMLU-Pro. Thinking mode provides powerful mathematical deduction at low active parameter overhead.
- **Context window: 76/100.** Native 262,144-token (256K) context window. Evaluated at ~70% on AA-LCR long-context reasoning and 44.1% on MRCR v2 8-needle at 128K; reliable recall across large code modules and documents.
- **Multimodal: 78/100.** Native vision-language ingestion (73.8% MMMU-Pro, 82.4% MATH-Vision, 0.149 edit distance on OmniDocBench 1.5); text and code output only.
- **Coding: 76/100.** Reaches 77.1% on LiveCodeBench v6 and 1718 Codeforces Elo. Strong algorithmic code generation, refactoring, and test suite creation.
- **Cost efficiency: 100/100.** Apache 2.0 permissive open weights enabling completely free local self-hosting (runs with 3.8B active compute); hosted API endpoints cost ~$0.09 / $0.30 per 1M tokens.
- **Overall Score: 76/100.** (Arithmetic mean: `(68 + 80 + 76 + 78 + 76) / 5 = 378 / 5 = 75.6`, rounded to **76**).

---

### Key Strengths

1. **Active MoE Compute Efficiency:** 3.8B active parameters deliver high decoding throughput (>105 tok/s) with the knowledge base of a 26B model.
2. **Elite Competition Mathematics:** 88.3% on AIME 2026 rivals dense 70B+ models at a fraction of the compute cost.
3. **Strong Multimodal Vision:** 73.8% on MMMU-Pro and 82.4% on MATH-Vision provide robust visual diagram, chart, and UI parsing.
4. **Apache 2.0 Open Weights:** Permissive license allows unrestricted commercial usage, private fine-tuning, and on-premises deployment.

---

### Trade-offs & Limitations

1. **Third-Party Agentic Spread:** Significant variance between Google's 68.2% Tau2 score and third-party evaluations (~40%), indicating sensitivity to agent framework scaffolding.
2. **Terminal Hard Fragility:** ~30% on Terminal-Bench Hard reflects execution challenges on deep multi-hour autonomous bash sessions.
3. **No Native Audio Tokens:** Unlike the 12B Unified model, 26B A4B focuses specifically on text and image modalities.

---

### Pricing & Value Matrix

- **Self-Host License:** Apache 2.0 (Free open source)
- **Hosted API Input:** ~$0.09 per million tokens
- **Hosted API Output:** ~$0.30 per million tokens
- **Hardware Footprint:** 25.2B total / 3.8B active parameters (Runs on single 24GB GPUs quantized)
- **Context Capacity:** 262,144 tokens (256K)
- **Speed Tier:** High-throughput MoE open weights

---

### Benchmark Reference Summary

| Benchmark | Score | Context / Configuration |
| :--- | :--- | :--- |
| **AIME 2026** | 88.3% | Mathematics competition (no tools) |
| **GPQA Diamond** | 82.3% | Graduate-level STEM reasoning |
| **LiveCodeBench v6** | 77.1% | Code generation and execution pass rate |
| **MMMU-Pro** | 73.8% | Multimodal visual understanding |
| **AA-LCR** | ~70.0% | Long-context reasoning retention |

---

### Evaluation Sources

- Google DeepMind Model Disclosures: [Gemma 4 MoE Architecture & Benchmarks](https://blog.google)
- DeepInfra & Modal AI Model Cards: [Gemma 4 26B A4B Deployment Specs](https://deepinfra.com)
- Artificial Analysis & BenchLM Leaderboards: [Gemma 4 MoE Evaluation Trackers](https://artificialanalysis.ai)
