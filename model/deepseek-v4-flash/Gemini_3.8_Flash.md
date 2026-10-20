# DeepSeek V4 Flash — Model Evaluation

- **Research Date:** 2026-10-20
- **Researcher:** Gemini 3.8 Flash
- **Model Name:** DeepSeek V4 Flash
- **Model Type:** Sparse Mixture-of-Experts (MoE) high-efficiency reasoning and agentic model

---

### Executive Summary

DeepSeek V4 Flash is DeepSeek's high-efficiency frontier reasoning model engineered around a 552B total parameter sparse Mixture-of-Experts (MoE) architecture with compressed active parameters (8B input / 16B output via Causal Encoder-Decoder mechanics) and Multi-Head Latent Attention (MLA). Native support includes a 1,000,000-token (1M) context window, FP4 KV-cache compression, and ultra-cheap prompt caching down to $0.003 per million tokens off-peak.

With extensive benchmark coverage across terminal agents and software engineering, DeepSeek V4 Flash achieves 90.6% on Terminal-Bench 2.1 (and 42.3% on Terminal-Bench 4.0 in updated 1017 checkpoints), 74.2%–77.0% on DeepSWE v1.1, 79.0% on SWE-bench Verified, 95.83% on AIME 2026, and 88.1%–90.8% on GPQA Diamond. Its primary limitation in its initial SKU was the separation of vision modalities into the experimental V4-Vision-Exp branch (now natively unified in V4.1), keeping its base multimodal footprint text- and code-focused.

---

### Quantitative Evaluation

- **Tool use: 87/100.** Scores 90.6% on Terminal-Bench 2.1 minimal harness and 95.0% on Tau2-Bench Telecom. Demonstrates structured JSON tool execution and command-line shell navigation at low latency.
- **Reasoning: 89/100.** Reaches 95.83% on AIME 2026, 93.94% on MathArena HMMT, and 88.1%–90.8% on GPQA Diamond. Robust mathematical deduction and multi-step algorithmic derivation.
- **Context window: 92/100.** Full native 1,000,000-token (1M) context window backed by FP4 KV-cache compression and 79.7 long-context reasoning retention on Artificial Analysis.
- **Multimodal: 25/100.** Base V4 Flash focuses strictly on text and code tokens; vision tasks were delegated to V4-Vision-Exp / V4.1-Flash.
- **Coding: 89/100.** Reaches 79.0% on SWE-bench Verified, 74.2%–77.0% on DeepSWE v1.1, and 68.2% on NL2Repo-Bench. Highly capable code generator, bug fixer, and test suite runner.
- **Cost efficiency: 98/100.** Groundbreaking economics ($0.15/$0.60 per 1M tokens off-peak; cache hits at $0.003/1M), yielding unmatched price-to-performance metrics.
- **Overall Score: 76/100.** (Arithmetic mean: `(87 + 89 + 92 + 25 + 89) / 5 = 382 / 5 = 76.4`, rounded to **76**).

---

### Key Strengths

1. **Unrivaled Operational Economics:** $0.003 per 1M cached tokens and $0.15/$0.60 off-peak pricing make massive automated test and agent runs affordable.
2. **Elite Mathematical Reasoning:** 95.83% on AIME 2026 and >88% on GPQA Diamond rival models costing orders of magnitude more.
3. **Advanced Terminal & Tool Execution:** 90.6% on Terminal-Bench 2.1 highlights strong autonomous CLI navigation.
4. **Architectural Innovations:** Multi-head latent attention (MLA) and asymmetric 8B/16B active parameter routing deliver fast time-to-first-token.

---

### Trade-offs & Limitations

1. **Base Multimodal Restriction:** Lacks integrated native vision in the base V4 Flash SKU without routing to V4-Vision-Exp or upgrading to V4.1-Flash.
2. **Peak Hour Pricing Variance:** Pricing doubles during peak windows ($0.30 input / $1.20 output), requiring scheduled off-peak batching for maximum savings.
3. **Deep Multi-Repo Refactoring:** On massive cross-package refactors, frontier models like Claude Opus 5.5 or GPT-5.1 maintain higher consistency across extended agent chains.

---

### Pricing & Value Matrix

- **Off-Peak Input Price:** $0.15 per million tokens (Cache Hit: $0.003/1M)
- **Off-Peak Output Price:** $0.60 per million tokens
- **Peak Input Price:** $0.30 per million tokens (Cache Hit: $0.006/1M)
- **Peak Output Price:** $1.20 per million tokens
- **Context Capacity:** 1,000,000 tokens
- **Speed Tier:** Real-time / High-throughput flash MoE

---

### Benchmark Reference Summary

| Benchmark | Score | Context / Configuration |
| :--- | :--- | :--- |
| **Terminal-Bench 2.1** | 90.6% | Minimal harness CLI execution |
| **Terminal-Bench 4.0** | 42.3% | Complex multi-step agentic CLI tasks (1017 checkpoint) |
| **SWE-bench Verified** | 79.0% | Multi-file repository bug resolution |
| **DeepSWE v1.1** | 74.2% – 77.0% | Mini-SWE agentic engineering evaluations |
| **AIME 2026** | 95.83% | Mathematical olympiad problem solving |
| **GPQA Diamond** | 88.1% – 90.8% | Graduate-level reasoning |

---

### Evaluation Sources

- DeepSeek Official API & Pricing Documentation: [DeepSeek Pricing & Platform Guide](https://deepseek.com)
- Artificial Analysis Independent Metrics: [DeepSeek V4 Flash Intelligence & Coding Index](https://artificialanalysis.ai)
- OpenRouter & Hugging Face Technical Releases: [DeepSeek Model Card & Benchmark Disclosures](https://huggingface.co)
