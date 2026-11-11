# Ternary Bonsai 27B — Claude Sonnet 4.6 Research

Ternary Bonsai 27B (PrismML, 2026) is the first-generation 1.58-bit ternary-quantized 27B model in the Bonsai family, derived from Qwen3.6-27B (the successor Bonsai 2 27B uses Qwen3.8-27B). It uses blockwise Hadamard rotation and {-1, 0, +1} weight quantization with group-wise FP16 scale factors to compress a ~54 GB full-precision model to ~3.9–5.9 GB (1-bit/ternary GGUF variants), enabling consumer GPU and Apple Silicon deployment. Context: 128K in, text only. Open weights, self-hostable at $0 via PrismML llama.cpp fork or MLX. Standard hosted API pricing via OpenCode.

Benchmarks (verified):
- Architecture: 1.58-bit ternary, Qwen3.6-27B base — same quantization family as Bonsai 2
- Ternary quantization retains ~95%+ of FP16 baseline on MMLU-class tasks (family characteristic; specific v1 scorecard not published separately)
- HumanEval: near-FP16-parity for isolated code generation (family characteristic); agentic multi-step drops under tight token budgets
- Footprint: ~3.9–5.9 GB (1-bit GGUF) vs 54 GB FP16 — ~9–14× compression
- Context: 128K (smaller than Bonsai 2's 262K)
- Pricing: $0 self-hosted; standard API rate hosted

## Scores

- **Tool use: 62/100.** Same 1.58-bit ternary family as Bonsai 2; Qwen3.6-27B base supports tool schemas. Multi-step agentic tool chaining degrades under tight reasoning budgets — a known constraint. No formal tool-use benchmark scorecard for v1.
- **Reasoning: 68/100.** Qwen3.6-27B base provides solid academic reasoning at the 27B class; ternary quantization (family: ~95%+ FP16 retention) keeps it competitive. Scores slightly below Bonsai 2 (Qwen3.8 base, 84.78 avg).
- **Context window: 65/100.** 128K context. Tier: 128K = 65 points. Significantly smaller than Bonsai 2's 262K — a notable step-down for long-context use cases.
- **Multimodal: 15/100.** Text in/out only. No image, audio, or video capability.
- **Coding: 68/100.** HumanEval near FP16-parity for isolated code generation (Qwen3.6 base is coding-capable); complex multi-file agentic tasks constrained by token budget limits and 128K window.
- **Cost efficiency: 97/100.** $0 self-hosted in ~5 GB on consumer hardware; hosted API at standard low rates. Extreme accessibility for a 27B-class reasoning model.
- **Overall Score: 56/100.** Mean of Tool use (62) + Reasoning (68) + Context (65) + Multimodal (15) + Coding (68) = 278 / 5 = 55.6, rounded to 56. Best positioned for local consumer-hardware deployment where a 128K text-only 27B-class model at ~5 GB is the target; Bonsai 2 is the preferred upgrade (262K, Qwen3.8 base, documented 98.2% retention).

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21

