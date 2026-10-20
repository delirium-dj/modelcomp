# GLM 5.1 — Model Evaluation

- **Research Date:** 2026-10-20
- **Researcher:** Gemini 3.8 Flash
- **Model Name:** GLM 5.1 (Zhipu AI / Z.ai)
- **Model Type:** Open-weights 754B Mixture-of-Experts (MoE) software engineering foundation model (MIT)

---

### Executive Summary

GLM 5.1 (GLM 5.1 Coding) is Zhipu AI / Z.ai's open-weights flagship Mixture-of-Experts (MoE) foundation model released under the MIT license on April 7, 2026. Built with a 754B total parameter footprint activating **40B active parameters per token** (256 routed experts + 1 shared expert, with 8 active experts per token), GLM 5.1 incorporates DeepSeek Sparse Attention (DSA) and Multi-Token Prediction (MTP) layers trained natively on Huawei Ascend infrastructure.

Specifically engineered for long-horizon autonomous software engineering and multi-hour terminal loops without early-plateau failure, GLM 5.1 achieves leading benchmarks: **58.4% on SWE-bench Pro**, **63.5% on Terminal-Bench 2.0** (Terminus-2 harness), **42.7% on NL2Repo**, 95.3% on AIME 2026, and 86.2% on GPQA Diamond. Operating across a ~204,800-token (200K) context window with up to 128,000 output tokens, it stands as an elite open-source alternative to proprietary frontier models for autonomous repository maintenance.

---

### Quantitative Evaluation

- **Tool use: 80/100.** Scores 63.5% on Terminal-Bench 2.0 (56.9% on standard runs), 71.8% on MCP-Atlas, and 70.6% on Tau3. Demonstrates exceptional endurance over multi-turn agent loops (supporting up to thousands of consecutive tool executions without loop stalling).
- **Reasoning: 84/100.** Delivers 86.2% on GPQA Diamond and 95.3% on AIME 2026. Excels at complex algorithmic synthesis, formal mathematical logic, and deep system architecture modeling.
- **Context window: 72/100.** 204,800-token (~200K) context window with an expansive 128K maximum output token limit. DeepSeek Sparse Attention (DSA) preserves 68.0% long-context reasoning retention (AA-LCR).
- **Multimodal: 20/100.** Text and code inputs/outputs only; lacks native video, audio, or image ingestion in the base 5.1 model.
- **Coding: 88/100.** SOTA open-weights performance with 58.4% on SWE-bench Pro, 1530 Arena Code Elo, and 42.7% on NL2Repo. Capable of multi-file refactoring, test suite synthesis, and autonomous bug patching.
- **Cost efficiency: 90/100.** MIT open-weights license enables completely free on-premise execution; official API pricing is ~$0.97–$1.05 per 1M input tokens and ~$3.04–$3.50 per 1M output tokens ($0.205/1M cached).
- **Overall Score: 69/100.** (Arithmetic mean: `(80 + 84 + 72 + 20 + 88) / 5 = 344 / 5 = 68.8`, rounded to **69**).

---

### Key Strengths

1. **Long-Horizon Agent Endurance:** Engineered to sustain hundreds of autonomous tool iterations over multi-hour coding sessions without memory degeneration.
2. **Top-Tier Open-Weights SWE-bench Pro:** 58.4% on SWE-bench Pro places it ahead of many proprietary frontier systems on repository tasks.
3. **DeepSeek Sparse Attention (DSA):** Substantially reduces computational overhead across 200K token buffers while activating only 40B parameters per token.
4. **Permissive MIT License:** Unrestricted commercial distribution, local cluster self-hosting, and zero vendor lock-in.

---

### Trade-offs & Limitations

1. **Text/Code Only:** Completely lacks multimodal vision, audio, or video processing in the base GLM 5.1 release.
2. **Hardware Cluster Requirements:** Deploying a 754B MoE locally requires dedicated enterprise multi-GPU or Ascend cluster infrastructure.
3. **200K Context vs 1M Tiers:** While 200K is ample for most codebases, it is smaller than modern 1M+ token frontier models.

---

### Pricing & Value Matrix

- **Self-Host License:** MIT (Free open weights)
- **Official API Input:** ~$0.97 – $1.05 per million tokens (Cached: ~$0.205/1M)
- **Official API Output:** ~$3.04 – $3.50 per million tokens
- **Architecture:** 754B total / 40B active MoE (DeepSeek Sparse Attention)
- **Context Capacity:** 204,800 tokens (up to 128,000 output tokens)
- **Speed Tier:** Enterprise agentic MoE tier

---

### Benchmark Reference Summary

| Benchmark | Score | Context / Configuration |
| :--- | :--- | :--- |
| **SWE-bench Pro** | 58.4% | Autonomous software engineering benchmark |
| **Terminal-Bench 2.0** | 63.5% | Terminus-2 autonomous CLI execution harness |
| **NL2Repo** | 42.7% | Whole repository architecture generation |
| **AIME 2026** | 95.3% | Mathematics competition |
| **GPQA Diamond** | 86.2% | Graduate-level STEM reasoning |

---

### Evaluation Sources

- Zhipu AI / Z.ai Technical Report: [GLM-5.1 Architecture & Benchmark Disclosures](https://z.ai)
- OpenRouter & NVIDIA NIM Model Cards: [GLM 5.1 Specifications & Pricing](https://openrouter.ai)
- Autonomous Agent Evaluation Studies: MorphLLM & SiliconFlow Trackers.
