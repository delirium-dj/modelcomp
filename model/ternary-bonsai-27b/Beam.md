# Ternary Bonsai 27b — findings by Beam

- Source: Prism ML (`prism-ml/Ternary-Bonsai-27B-gguf`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ternary Bonsai 27b
- **Short description:** Prism ML's ternary-quantized open-weights derivative of Qwen3.6-27B (~27.3B params, 1.71 bits/weight, ~7.2GB) retaining 94.6% of FP16 intelligence; Apache 2.0, runs on a single laptop/GPU with 262K context.
- **Provider / access:** Open weights on Hugging Face (`prism-ml/Ternary-Bonsai-27B-gguf`); self-host via llama.cpp (CUDA/Metal/CPU); optional Together AI inference; DSpark speculative decoding drafter included.
- **Release / knowledge:** Published 2026 (Prism ML whitepaper, July 2026); base Qwen3.6-27B.
- **IDs:** `prism-ml/Ternary-Bonsai-27B-gguf` (GGUF Q2_0_g128). No OpenCode Console route.
- **Context window:** 262,144 tokens (full-context on-device via hybrid attention + 4-bit KV cache). Verified via Hugging Face model card.
- **Modalities:** Text in/out (default); optional image input via HQQ 4-bit vision tower (~0.63GB mmproj, loaded only on image arrival).
- **Pricing (as of 2026-11-10):** Open weights, Apache 2.0 — $0 self-host; hosted via Together AI (provider-dependent). No standing free tier; inference cost is compute.
- **Architecture:** Ternary transformer weights {-1,0,+1} with FP16 group-wise scaling (g=128) on Qwen3.6-27B hybrid-attention backbone (~75% linear / ~25% full attention), SwiGLU MLP, RoPE, RMSNorm; ~27.3B ternary language weights + ~0.46B vision tower.

### Raw benchmarks found

Evaluated with EvalScope + vLLM on NVIDIA H100, thinking mode, 15 benchmarks across 6 skill categories (Prism ML whitepaper + Hugging Face model card):

Knowledge & reasoning (MMLU-Redux, MuSR): **76.96** (FP16 83.15)
Math (GSM8K, MATH-500, AIME25, AIME26): **93.40** (FP16 95.33)
Coding (HumanEval+, MBPP+, LiveCodeBench): **85.96** (FP16 88.74)
Instruction following (IFEval, IFBench): **71.77** (FP16 78.47)
Agentic / tool calling (BFCL v3, τ²-Bench): **74.01** (FP16 80.00)
Vision (MMMU-Pro, OCR Bench v2): **65.19** (FP16 72.61)
Overall (15 benchmarks): **80.49** (FP16 85.07; IQ2_XXS 72.73; 1-bit Bonsai 76.11)

Hugging Face eval results:
- GSM8K: **96.06**
- MMMU-Pro (vision): **68.96**
- AIME 2026: **87.5**

Cross-model comparison (Prism ML): Ternary Bonsai 27B at 5.9GB outscores conventional sub-4-bit builds (IQ2_XXS 72.73 at 9.4GB, Q2_K_XL 73.31 at 11.8GB) while retaining 94.6% of FP16 intelligence.

### Normalized scores (1–100)

- **Tool use: 74/100.** Agentic/tool-calling category 74.01 (BFCL v3, τ²-Bench); caps include instruction-following 71.77 and absence of Terminal-Bench/SWE-bench agentic-coding rows.
- **Reasoning: 85/100.** Math 93.40 and knowledge/reasoning 76.96; strong chain-of-thought retention at sub-4-bit; caps include MuSR/knowledge gap vs FP16.
- **Context window: 72/100.** 262K tokens (200K–500K tier); hybrid attention + 4-bit KV cache enables full 262K on-device; max output not separately capped.
- **Multimodal: 65/100.** Text + optional image input via vision tower; vision category 65.19 (MMMU-Pro 68.96, OCR Bench v2); text-only serving never loads vision tower.
- **Coding: 86/100.** Coding category 85.96 (HumanEval+, MBPP+, LiveCodeBench); caps include note that long-horizon agentic coding is not yet a strong target of this release.
- **Cost efficiency: 100/100.** Open weights, Apache 2.0, $0 self-host (compute cost only); no hosted free tier but instantaneous price is $0.
- **Overall Score: 76/100.** Mean of [Tool 74 + Reasoning 85 + Context 72 + Multimodal 65 + Coding 86] / 5 = 76.4 → 76. Best fit: laptop-local 27B reasoning/coding where footprint and on-device privacy matter.

---

## Signature

- Provided by: **Beam (Reflection AI — opencode/beam-free)** — 2026-11-10
- Method: fresh public web research (Hugging Face model card + Prism ML whitepaper referenced on card); scores are normalized 1–100 interpretations, not official vendor scores; every number carries a source line.
- Reference URLs:
  - [Hugging Face: prism-ml/Ternary-Bonsai-27B-gguf (model card)](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)
  - [Prism ML: Bonsai 27B whitepaper (GitHub)](https://github.com/PrismML-Eng/Bonsai-demo/blob/main/bonsai-27b-whitepaper.pdf)
  - [BenchLM: Ternary Bonsai 27B (tracking page)](https://benchlm.ai/models/ternary-bonsai-27b)
- Future sources: add a new file next to this one, e.g. `Beam_Alt.md`, using the same headings.
