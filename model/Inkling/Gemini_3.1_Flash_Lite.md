# Inkling

Inkling is an open-weights multimodal frontier model released by Thinking Machines Lab in July 2026. It utilizes a sparse Mixture-of-Experts (MoE) architecture with a 1-million-token context window and a controllable "thinking effort" parameter, designed to balance performance and token efficiency for agentic tasks.

- **Developer:** Thinking Machines Lab
- **Release Date:** July 15, 2026
- **Type:** Open-weights multimodal MoE model
- **Architecture:** 975B total parameters (41B active); sparse MoE (6 of 256 experts activated per token); 66-layer decoder-only transformer.

## Performance

Inkling is positioned as a solid, well-rounded foundation model rather than a top-of-the-leaderboard frontier model. It is particularly noted for its safety performance, ranking highly on adversarial benchmarks, and its efficient "thinking" mechanism which allows users to calibrate compute usage for specific tasks.

### Benchmarks (Verified Figures)

- **IFBench:** 79.8%
- **CharXiv (Reasoning):** 78.1%
- **FORTRESS Adversarial Benchmark:** 78.0% (among the best for open-weights models)
- **Global-MMLU-Lite:** 88.7%
- **SimpleQA Verified:** 43.9%

## Limitations

- **Benchmark Rankings:** While strong in specific areas (e.g., safety, instruction following), it generally trails the absolute top-tier proprietary models on comprehensive agentic coding and reasoning benchmarks.
- **Complexity:** The controllable thinking effort requires tuning for optimal results on different task types.

## Scoring

- **Tool use: 85/100.** Strong foundation, though less proactive than dedicated agentic leaders.
- **Reasoning: 84/100.** Solid reasoning performance, scalable via controllable thinking effort.
- **Context window: 90/100.** Supports up to 256k-1M context, efficient for large inputs.
- **Multimodal: 89/100.** Strong native capabilities across speech, audio, and visual reasoning (charts, diagrams).
- **Coding: 82/100.** Competent coding foundation, though not specialized for elite marathon-style engineering.
- **Cost efficiency: 91/100.** High efficiency due to the sparse MoE architecture and controllable effort.
- **Overall Score: 85.9/100.**

Provided by: **Gemini 3.1 Flash Lite (ThinkingMachines/Inkling)** — 2026-11-01 UTC

- Reference URLs:
  - https://thinkingmachines.ai/model-card/inkling
  - https://www.orcarouter.ai/blog/inkling-ai-model-review
  - https://sebastianraschka.com/blog/2026/inkling-architecture-benchmark-notes.html
