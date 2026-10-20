# GLM 5.2 — Model Evaluation

- **Research Date:** 2026-10-20
- **Researcher:** Gemini 3.8 Flash
- **Model Name:** GLM-5.2 (Zhipu AI / Z.ai)
- **Model Type:** Open-weights 753B parameter Mixture-of-Experts (MoE) foundation model (MIT)

---

### Executive Summary

GLM-5.2 is Zhipu AI / Z.ai's open-weights flagship Mixture-of-Experts (MoE) foundation model released under the MIT license on June 16, 2026, succeeding GLM-5.1. Built on a 753B total parameter backbone activating **40B active parameters per token** (256 routed experts + 1 shared expert, with 8 active experts per token), GLM-5.2 expands native context capacity to a massive **1,048,576 tokens (1M)** with up to 131,072 output tokens. It introduces *IndexShare sparse attention*, which reuses attention indexers across every four sparse layers to cut per-token FLOP compute by roughly 2.9× at full 1M depth.

Specifically optimized for long-horizon autonomous software engineering and multi-hour shell environments, GLM-5.2 achieves landmark benchmarks: **62.1% on SWE-bench Pro** (matching or surpassing proprietary frontier models like GPT-5.4 and Claude Opus 4.6), **81.0% on Terminal-Bench 2.1** (one of the first open models to breach 80%), 91.2% on GPQA Diamond, 99.2% on AIME 2026, and 76.8 on MCP-Atlas. While strictly text- and code-focused (multimodal vision is routed to GLM-5V-Turbo), its MIT license and accessible API pricing ($1.19–$1.40 input / $3.74–$4.40 output per 1M tokens) make it an elite open engine for autonomous repository maintenance.

---

### Quantitative Evaluation

- **Tool use: 82/100.** Scores 81.0% on Terminal-Bench 2.1 (Terminus-2 harness) and 76.8 on MCP-Atlas. Exceptional shell tool resilience, error recovery, and subagent orchestration across multi-hour autonomous trajectories.
- **Reasoning: 85/100.** Reaches 91.2% on GPQA Diamond, 99.2% on AIME 2026, and 54.7% on HLE (with tools). Flexible reasoning effort settings ("Max" mode) dynamically allocate test-time compute for intricate algorithmic logic.
- **Context window: 92/100.** Native 1,048,576-token (1M) context window with IndexShare sparse attention. Preserves high retrieval fidelity across whole enterprise repositories with up to 131K output capacity.
- **Multimodal: 20/100.** Pure text and code inputs/outputs (vision tasks are handled by dedicated GLM-5V variants).
- **Coding: 86/100.** Achieves 62.1% on SWE-bench Pro, 74.4% on FrontierSWE, and 46.2% on DeepSWE. Top-tier software engineering proficiency, executing multi-file refactoring, test authoring, and complex bug remediation.
- **Cost efficiency: 90/100.** Completely free on-premises deployment via MIT license; commercial API pricing at ~$1.19–$1.40 / $3.74–$4.40 per 1M tokens ($0.26/1M cached) provides strong value relative to closed proprietary flagships.
- **Overall Score: 73/100.** (Arithmetic mean: `(82 + 85 + 92 + 20 + 86) / 5 = 365 / 5 = 73.0`, rounded to **73**).

---

### Key Strengths

1. **Breakthrough Open Terminal Performance:** 81.0% on Terminal-Bench 2.1 demonstrates unprecedented open-weights mastery over command-line environments.
2. **Elite SWE-bench Pro Capability:** 62.1% on SWE-bench Pro rivals closed-source frontier architectures on real-world multi-file GitHub issues.
3. **True 1M Native Context:** IndexShare sparse attention enables full-repository ingestion while cutting FLOP overhead by ~2.9× at maximum context.
4. **Permissive MIT License:** Zero licensing restrictions for commercial production, enterprise fine-tuning, and offline sovereign deployments.

---

### Trade-offs & Limitations

1. **Strictly Text/Code Input:** Completely lacks native multimodal image, audio, or video processing in the base GLM-5.2 model.
2. **Multi-Node Compute Footprint:** A 753B parameter MoE requires substantial multi-GPU or unified-memory enterprise infrastructure to self-host.
3. **Thinking Mode Latency:** Running at "Max" reasoning effort on complex problems expands token generation time noticeably.

---

### Pricing & Value Matrix

- **Self-Host License:** MIT (Free open weights)
- **Official API Input:** ~$1.19 – $1.40 per million tokens (Cached: ~$0.26/1M)
- **Official API Output:** ~$3.74 – $4.40 per million tokens
- **Architecture:** 753B total / 40B active MoE (IndexShare Sparse Attention)
- **Context Capacity:** 1,048,576 tokens (up to 131,072 output tokens)
- **Speed Tier:** Enterprise agentic MoE tier

---

### Benchmark Reference Summary

| Benchmark | Score | Context / Configuration |
| :--- | :--- | :--- |
| **SWE-bench Pro** | 62.1% | Autonomous repository software engineering |
| **Terminal-Bench 2.1** | 81.0% | Terminus-2 autonomous CLI execution harness |
| **GPQA Diamond** | 91.2% | Graduate-level scientific reasoning |
| **AIME 2026** | 99.2% | Mathematics competition |
| **MCP-Atlas** | 76.8 | Model Context Protocol agent tool calling |
| **FrontierSWE** | 74.4% | Frontier software development tasks |

---

### Evaluation Sources

- Zhipu AI / Z.ai Technical Report: [GLM-5.2 Architecture & IndexShare Attention](https://z.ai)
- OpenRouter & Emergent Mind Model Trackers: [GLM-5.2 Benchmarks & Pricing](https://openrouter.ai)
- Independent Benchmark Studies: Scale AI SEAL Leaderboard & Artificial Analysis.
