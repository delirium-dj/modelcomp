# Ternary Bonsai 2 27B — Claude Sonnet 4.6 Research

Ternary Bonsai 2 27B (PrismML, September 2026) is a 1.58-bit ternary-quantized model derived from Qwen3.8-27B. Using blockwise Hadamard rotation folded into stored weights before ternary assignment ({-1, 0, +1} with group-wise FP16 scale factors), it compresses a 54 GB full-precision model to 5.9 GB (GGUF PTQ1_0) or 8.6 GB (MLX), enabling 27B-class capability on 8–16 GB VRAM consumer hardware or Apple Silicon. Context: 262K in / 32K out. Text only. Requires specialized runtime (PrismML llama.cpp fork or MLX with ternary kernel support).

Benchmarks (verified):
- Average across 14 thinking-mode benchmarks: 84.78 / 100 (Prism ML model card)
- Full-precision (FP16) baseline: 86.32 — ternary retains 98.2% of FP16 performance
- MMLU (zero-shot subsets): ~78–80%+ (near parity with FP16 Qwen3.8-27B)
- HumanEval pass@1: ~89–96% (depending on reasoning budget; matches baseline closely in isolation)
- Footprint: ~5.9 GB (GGUF PTQ1_0) / 8.6 GB (MLX) vs 54 GB FP16 — ~9× compression
- Pricing: ~$0.07/$0.50 per 1M hosted; $0 self-hosted (open weights, Apache 2.0 / Qwen licence)

## Scores

- **Tool use: 68/100.** Inherits Qwen3.8-27B's tool-call schema support; ternary quantization retains 98.2% of FP16 capability on average. Multi-step agentic tool chaining can degrade under tight reasoning token budgets — a known limitation of the ternary format with constrained context.
- **Reasoning: 72/100.** 84.78/100 average across 14 thinking-mode benchmarks (98.2% of FP16 baseline). MMLU ~78–80% confirms solid academic reasoning for a compressed 27B model; competitive with mid-tier hosted models at a fraction of the cost.
- **Context window: 78/100.** 262K in / 32K out. Tier: 256K = 78 points; 262K rounds to this tier. The 32K output cap is a practical limitation for long-form generation tasks.
- **Multimodal: 15/100.** Text in/out only. No image, audio, or video capability.
- **Coding: 72/100.** HumanEval pass@1 ~89–96% (benchmark-configuration dependent) is strong for a consumer-hardware model; Qwen3.8-27B baseline is well-regarded for coding. Complex multi-file refactoring may degrade under tight token budgets.
- **Cost efficiency: 97/100.** $0 self-hosted on hardware that fits a standard gaming GPU or Apple MacBook; hosted API ~$0.07/$0.50 per 1M is among the lowest in the dataset for a 27B-class model. Exceptional cost efficiency story.
- **Overall Score: 61/100.** Mean of Tool use (68) + Reasoning (72) + Context (78) + Multimodal (15) + Coding (72) = 305 / 5 = 61.0. Best positioned for local or low-budget deployments requiring 27B-class reasoning in a sub-9 GB footprint; multimodal absence limits overall score.

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21

