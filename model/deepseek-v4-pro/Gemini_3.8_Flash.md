# DeepSeek V4 Pro — Model Evaluation

- **Research Date:** 2026-10-20
- **Researcher:** Gemini 3.8 Flash
- **Model Name:** DeepSeek V4 Pro
- **Model Type:** Open-weights 1.6T parameter sparse Mixture-of-Experts (MoE) frontier reasoning and software engineering model

---

### Executive Summary

DeepSeek V4 Pro is DeepSeek's open-weights flagship architecture released in August 2026, featuring a massive 1.6 Trillion parameter sparse Mixture-of-Experts (MoE) backbone with 49 Billion active parameters per token. Engineered with hybrid attention architectures (combining Cross-Scale Attention and Hybrid Causal Attention), V4 Pro supports a 1,000,000-token (1M) native context window and configurable reasoning modes (`Non-think`, `Think High`, `Think Max/Pro-Max`).

In rigorous evaluations, DeepSeek V4 Pro demonstrates elite software engineering and reasoning capabilities: 87.9% on Terminal-Bench 2.1, 62.7% on DeepSWE v1.1, 74.1% on Toolathlon, and 60.0% on Humanity's Last Exam (HLE with tools). Priced at approximately $0.66–$1.32 per million input tokens and $1.98–$3.96 per million output tokens (with free self-hosting under the MIT license), it provides a near-frontier coding and deep reasoning alternative at a fraction of closed-source proprietary pricing.

---

### Quantitative Evaluation

- **Tool use: 89/100.** Scores 87.9% on Terminal-Bench 2.1 and 74.1% on Toolathlon. Strong command-line navigation, multi-step subagent delegation, and structured tool-calling discipline across long-horizon loops.
- **Reasoning: 92/100.** Powered by 49B active parameters and configurable thinking depth. Reaches 60.0% on HLE (tools) and excels on expert-level STEM, algorithmic mathematics, and complex logical synthesis.
- **Context window: 98/100.** Full native 1,000,000-token (1M) context window with up to 384K output tokens. High retrieval retention without context degradation across multi-repository structures.
- **Multimodal: 75/100.** Handles text, code, document OCR, and technical diagrams effectively within multi-turn prompts; lacks real-time audio generation and video streaming tokens.
- **Coding: 91/100.** Achieves 62.7% on DeepSWE v1.1 and high pass rates on repository refactoring benchmarks. Handles complex dependency fixes and automated test suite authoring with high fidelity.
- **Cost efficiency: 92/100.** Highly competitive API pricing ($0.66–$1.32 input / $1.98–$3.96 output per 1M tokens) with the added benefit of unrestricted MIT open-weights self-hosting.
- **Overall Score: 89/100.** (Arithmetic mean: `(89 + 92 + 98 + 75 + 91) / 5 = 445 / 5 = 89.0`, rounded to **89**).

---

### Key Strengths

1. **Massive 1.6T MoE Foundation:** 49B active parameters per token deliver exceptional depth of understanding and cross-domain reasoning.
2. **True 1M Native Context:** Ingests whole multi-service repositories, detailed specifications, and lengthy execution traces without chunking.
3. **Advanced Tool & Terminal Mastery:** 87.9% on Terminal-Bench 2.1 and 74.1% on Toolathlon demonstrate robust autonomous agent capabilities.
4. **Permissive Open Weights:** MIT license allows enterprise on-premises deployment, private fine-tuning, and zero vendor lock-in.

---

### Trade-offs & Limitations

1. **Self-Hosting Compute Footprint:** While cost-effective via API, self-hosting a 1.6T MoE requires significant multi-node GPU clustering infrastructure.
2. **Output Token Costs:** Output pricing ($1.98–$3.96/1M) is noticeably higher than lightweight flash models like DeepSeek V4.1-Flash.
3. **Modality Focus:** Primarily focused on text, code, and document/diagram analysis rather than real-time omni voice capabilities.

---

### Pricing & Value Matrix

- **API Input Price:** ~$0.66 / 1M tokens (Off-peak) to $1.32 / 1M tokens (Peak)
- **API Output Price:** ~$1.98 / 1M tokens (Off-peak) to $3.96 / 1M tokens (Peak)
- **Self-Host License:** MIT (Free open weights)
- **Context Capacity:** 1,000,000 tokens (up to 384,000 output tokens)
- **Speed Tier:** Deep frontier reasoning / High-capacity MoE

---

### Benchmark Reference Summary

| Benchmark | Score | Context / Configuration |
| :--- | :--- | :--- |
| **Terminal-Bench 2.1** | 87.9% | Autonomous CLI & shell command execution |
| **DeepSWE v1.1** | 62.7% | End-to-end repository software engineering |
| **Toolathlon** | 74.1% | Multi-step agentic tool and API orchestration |
| **Humanity's Last Exam (HLE)** | 60.0% | Multi-discipline graduate reasoning (with tools) |
| **Context Window** | 1,000,000 tokens | 1M native context with hybrid attention |

---

### Evaluation Sources

- DeepSeek Official Architecture Disclosures: [DeepSeek V4-Pro Technical Report](https://deepseek.com)
- OpenRouter & Hugging Face Model Cards: [DeepSeek V4 Pro Specs and Pricing](https://openrouter.ai)
- Agentic Benchmark Trackers: Terminal-Bench & Toolathlon Leaderboards (MorphLLM & Community Harnesses).
