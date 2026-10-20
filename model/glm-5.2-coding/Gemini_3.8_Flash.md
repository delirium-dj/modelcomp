# GLM 5.2 Coding — Model Evaluation

- **Research Date:** 2026-10-20
- **Researcher:** Gemini 3.8 Flash
- **Model Name:** GLM 5.2 Coding (`opencode/glm-5.2-coding`)
- **Model Type:** Open-weights 753B parameter Mixture-of-Experts (MoE) coding agent foundation model (MIT)

---

### Executive Summary

GLM 5.2 Coding (`opencode/glm-5.2-coding`) is Zhipu AI / Z.ai's specialized open-weights Mixture-of-Experts (MoE) coding foundation model released under the MIT license, specifically optimized for autonomous software engineering, full-stack code authoring, and drop-in integration with coding agent harnesses like OpenCode and Claude Code. Built on a 753B parameter backbone (40B active parameters per token) utilizing IndexShare sparse attention and speculative Multi-Token Prediction (MTP), it supports dual reasoning levels (`High` and `Max`).

Operating across a native 1,048,576-token (1M) context window (with gateway configurations supporting up to 131K output tokens), GLM 5.2 Coding achieves top-tier open-weights developer benchmarks: **62.1% on SWE-bench Pro**, **74.4% on FrontierSWE** (evaluating multi-hour repository tasks), **81.0% on Terminal-Bench 2.1**, and 74.3% on LiveCodeBench. Delivering enterprise software engineering resilience without licensing fees, it represents one of the strongest open-source foundation models for autonomous development pipelines.

---

### Quantitative Evaluation

- **Tool use: 82/100.** Scores 81.0% on Terminal-Bench 2.1 and 77.0% on MCP-Atlas. Exceptional shell tool resilience, autonomous error correction, and multi-turn subagent delegation in CLI environments like OpenCode.
- **Reasoning: 85/100.** Scores 91.2% on GPQA Diamond, 99.2% on AIME 2026, and 54.7% on HLE (tools). Dual thinking modes (`High`, `Max`) allocate extended test-time compute to untangle subtle distributed race conditions and complex architectural refactors.
- **Context window: 90/100.** Full 1M native context capability with IndexShare sparse attention. Supports full-repository monorepo ingestion and extensive documentation with minimal FLOP scaling overhead.
- **Multimodal: 20/100.** Text and code inputs/outputs only; lacks native image, video, and audio ingestion.
- **Coding: 87/100.** Reaches 62.1% on SWE-bench Pro and 74.4% on FrontierSWE. Demonstrates outstanding multi-file code editing, test generation, and bug remediation.
- **Cost efficiency: 90/100.** Fully permissive MIT open weights for free self-hosting; API access via Z.ai Coding Plans ($18/mo) or standard pay-as-you-go (~$1.40 / $4.40 per 1M tokens with $0.26/1M cached reads).
- **Overall Score: 73/100.** (Arithmetic mean: `(82 + 85 + 90 + 20 + 87) / 5 = 364 / 5 = 72.8`, rounded to **73**).

---

### Key Strengths

1. **Top-Tier Open-Weights Coding:** 62.1% on SWE-bench Pro and 74.4% on FrontierSWE challenge leading closed proprietary flagships.
2. **Terminal-Bench 2.1 Leadership:** 81.0% on Terminal-Bench ensures dependable command execution, tool chaining, and bash recovery.
3. **True 1M Native Context:** Ingests expansive enterprise monorepos and comprehensive documentation without manual chunking.
4. **MIT Open-Weights License:** Completely free for commercial distribution, private on-premise deployment, and fine-tuning.

---

### Trade-offs & Limitations

1. **Text/Code Only:** Modality support is strictly text and code without native visual OCR or diagram parsing.
2. **Compute Infrastructure Demands:** Self-hosting a 753B parameter MoE requires multi-node GPU clusters or massive unified memory arrays.
3. **Max Thinking Latency:** Deep "Max" reasoning passes can introduce noticeable latency during interactive agent turns.

---

### Pricing & Value Matrix

- **Self-Host License:** MIT (Free open weights)
- **Official API Input:** ~$1.40 per million tokens (Cached: $0.26/1M)
- **Official API Output:** ~$4.40 per million tokens
- **Subscription Option:** Z.ai Coding Plans from ~$18/month
- **Context Capacity:** 1,048,576 tokens (up to 131,072 output tokens)
- **Speed Tier:** Enterprise agentic MoE coding tier

---

### Benchmark Reference Summary

| Benchmark | Score | Context / Configuration |
| :--- | :--- | :--- |
| **SWE-bench Pro** | 62.1% | Autonomous repository software engineering |
| **FrontierSWE** | 74.4% | Long-horizon open-ended technical projects |
| **Terminal-Bench 2.1** | 81.0% | Terminus-2 autonomous CLI execution harness |
| **GPQA Diamond** | 91.2% | Graduate-level scientific reasoning |
| **MCP-Atlas** | 77.0% | Model Context Protocol agent tool calling |

---

### Evaluation Sources

- Zhipu AI / Z.ai Technical Report: [GLM 5.2 Architecture & Coding Plan Releases](https://z.ai)
- Emergent Mind & OpenCode Documentation: [GLM-5.2-Coding Benchmarks & Harnesses](https://emergent.sh)
- Scale AI SEAL & OpenRouter Model Tracking: [GLM-5.2 Performance Index](https://openrouter.ai)
