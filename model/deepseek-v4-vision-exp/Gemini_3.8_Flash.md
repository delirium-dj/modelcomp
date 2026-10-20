# DeepSeek V4 Vision Exp — Model Evaluation

- **Research Date:** 2026-10-20
- **Researcher:** Gemini 3.8 Flash
- **Model Name:** DeepSeek V4 Vision Exp (DeepSeek-V4-Flash-Vision-Exp)
- **Model Type:** Sparse Mixture-of-Experts (MoE) multimodal vision-language foundation model

---

### Executive Summary

DeepSeek V4 Vision Exp (DeepSeek-V4-Flash-Vision-Exp) is DeepSeek's experimental multimodal foundation model released in August 2026, combining a 284B total parameter sparse Mixture-of-Experts (MoE) backbone with 13B active parameters per token and a specialized 32-layer Vision Transformer (ViT) aligner. Built with a native 1,000,000-token (1M) context window and up to 384,000 output tokens, it was designed specifically to bridge visual interface understanding, UI layout reasoning, and image-to-code synthesis with low-latency agentic execution.

In benchmark evaluations, DeepSeek V4 Vision Exp achieves 83.9% on Terminal-Bench 2.1, 59.3% on DeepSWE, 75.9% on Toolathlon-Verified, 27.3% on Agents' Last Exam, and 36.5% on ApexBench (Pass@1, marking a 39% jump over text-only baselines). Serving as the direct precursor to the unified DeepSeek-V4.1-Flash architecture (which now absorbs legacy requests automatically), it remains available via open weights on Hugging Face/vLLM and cloud aggregators with off-peak pricing of $0.15/$0.60 per million tokens and $0.003/1M cache hits.

---

### Quantitative Evaluation

- **Tool use: 87/100.** Scores 83.9% on Terminal-Bench 2.1 and 75.9% on Toolathlon-Verified. Demonstrates robust multi-step API execution, command-line tool use, and parameter adherence under realistic agent scaffolds.
- **Reasoning: 87/100.** Incorporates ViT visual tokens into high-level MoE reasoning. Achieves 27.3% on Agents' Last Exam and 64.3% on Chartography, demonstrating competent visual-spatial problem solving and multi-step deduction.
- **Context window: 95/100.** Native 1,000,000-token (1M) context window with up to 384K output tokens. Ingests high-resolution screenshots, multi-page PDFs, and repository files simultaneously with high recall.
- **Multimodal: 85/100.** Native 32-layer ViT vision processing with 384-token image budget. Delivers 36.5% on ApexBench and 64.3% on Chartography for diagram, chart, and UI parsing; lacks real-time audio generation.
- **Coding: 87/100.** Reaches 59.3% on DeepSWE and 57.7% on NL2Repo. Highly adept at UI-to-code generation, CSS/frontend layout authoring from mockups, and bug fixes.
- **Cost efficiency: 96/100.** Off-peak pricing at $0.15/1M input and $0.60/1M output (cache hits at $0.003/1M), providing exceptional economy for multimodal vision workloads.
- **Overall Score: 88/100.** (Arithmetic mean: `(87 + 87 + 95 + 85 + 87) / 5 = 441 / 5 = 88.2`, rounded to **88**).

---

### Key Strengths

1. **Native Visual UI & Agentic Synergy:** Integrated 32-layer ViT enables direct screenshot analysis and visual bug resolution in agent environments.
2. **True 1M Multimodal Context:** Ingests expansive visual asset libraries, full application screenshots, and system documentation in a single pass.
3. **Strong Agentic Benchmarks:** 83.9% on Terminal-Bench 2.1 and 75.9% on Toolathlon-Verified confirm robust multi-turn execution.
4. **Disruptive Economics:** Sub-$1/1M token pricing for full multimodal agent capabilities with open-weights deployment via vLLM.

---

### Trade-offs & Limitations

1. **Superseded by V4.1:** DeepSeek has officially unified multimodal workflows into DeepSeek-V4.1-Flash; endpoints now route forward to V4.1-Flash.
2. **Fixed Image Token Budget:** Compressed 384-token image representations can occasionally lose micro-text details on ultra-dense architectural blueprints.
3. **No Voice/Audio:** Modality support is strictly vision and text/code without speech tokens.

---

### Pricing & Value Matrix

- **Off-Peak Input Price:** $0.15 per million tokens (Cache Hit: $0.003/1M)
- **Off-Peak Output Price:** $0.60 per million tokens
- **Peak Input Price:** $0.30 per million tokens (Cache Hit: $0.006/1M)
- **Peak Output Price:** $1.20 per million tokens
- **Context Capacity:** 1,000,000 tokens (up to 384,000 output tokens)
- **Speed Tier:** Real-time / Vision MoE Flash tier

---

### Benchmark Reference Summary

| Benchmark | Score | Context / Configuration |
| :--- | :--- | :--- |
| **Terminal-Bench 2.1** | 83.9% | Autonomous CLI navigation & tool use |
| **Toolathlon-Verified** | 75.9% | Multi-step agentic automation |
| **DeepSWE** | 59.3% | Repository software engineering |
| **ApexBench (Pass@1)** | 36.5% | Multimodal agentic visual reasoning |
| **Chartography** | 64.3% | Visual chart and layout comprehension |
| **Agents' Last Exam** | 27.3% | Multimodal agentic problem solving |

---

### Evaluation Sources

- DeepSeek Hugging Face Repository: [DeepSeek-V4-Flash-Vision-Exp Model Card](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp)
- DeepSeek Platform Migration Notes: [DeepSeek Multimodal Architecture Unification](https://deepseek.com)
- OpenRouter & vLLM Documentation: [DeepSeek V4 Vision Exp Endpoints & Benchmarks](https://openrouter.ai)
