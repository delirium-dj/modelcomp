# Ternary Bonsai 2 27B — findings by Inkling 2 Small

- Source: Prism ML (`ternary-bonsai-2-27b`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ternary Bonsai 2 27B
- **Short description:** Prism ML's second-generation ternary ({-1,0,+1}) low-bit build of **Qwen3.8-27B** (architecture unchanged, 262K context) — full 27B-class reasoning at ~5.95 GB deployed (GGUF PTQ1_0 dense trits, or 7.21 GB PQ2_0), designed for on-device/laptop and single-GPU inference. 98.2% of FP16 intelligence retained; Apache 2.0. Successor to Ternary Bonsai 27B (Qwen3.6-27B base).
- **Provider / access:** Open weights on Hugging Face (`prism-ml/Ternary-Bonsai-2-27B-gguf`, plus MLX 2-bit companion); llama.cpp (CUDA/Metal, PrismML fork + stock b11556+ for `Q2_0`); Ollama/LM Studio/Docker. 1.6M downloads/mo.
- **Release / knowledge:** released 2026-09-16 (GGUF + MLX); knowledge cutoff inherited from Qwen3.8-27B (not stated).
- **IDs:** `prism-ml/Ternary-Bonsai-2-27B-gguf`; `prism-ml/Ternary-Bonsai-2-27B-mlx-2bit`
- **Context window:** 262,144 tokens; max output ≥16,384 (thinking models need `xhigh` by default); "medium" recommended for shorter output; `low` unsupported (behaves as xhigh).
- **Modalities:** text in → text out (optional ~0.63 GB mmproj vision tower, Q8_0); reasoning yes (xhigh default); tool calls yes (BFCL v3 74.92 measured); hybrid attention (~75% linear).
- **Pricing (as of 2026-11-10):** Apache 2.0 — free; runs on one 24 GB-class GPU or Apple Silicon.
- **Architecture:** Qwen3.8-27B hybrid-attention backbone (~75% linear, ~25% full), 27.36B total (24.35B backbone + 2.54B emb/LM head + 0.46B vision tower), ternary g128 {−1,0,+1} with FP16 group scaling.

### Raw benchmarks found

Agent / tool use:

- τ²-bench: **80.2%** (PrismML whitepaper; BenchLM mirror)
- BFCL v3: **74.9%** (whitepaper; BenchLM)
- Terminal-Bench 2.1: **52.8%** (whitepaper)
- (category average, thinking mode: Agentic/tool calling BFCL v3 = **74.92**)

Reasoning / knowledge:

- AIME 2025: **95%**; AIME 2026: **95.8%**; MATH-500: **98.8%**; GSM8K: **96.7%** (whitepaper; BenchLM)
- MMLU-Redux: **89.1%** (whitepaper)
- GPQA: **85.8%**; GPQA-D: **85.8%** (whitepaper)
- (category average, thinking mode): knowledge & reasoning (MMLU-Redux, MuSR): **79.86**; math: **96.57**
- 14-benchmark thinking-mode average: **84.78** (98.2% of Qwen3.8-27B FP16 86.32) (whitepaper)

Coding:

- LiveCodeBench v6: **90.1%** (whitepaper)
- HumanEval+ / MBPP+ (category average, thinking mode): **89.42** (coding category overall **89.42** — BenchLM)
- BigCodeBench: **58.1%** (whitepaper)
- SWE-bench Verified: **60.8%** (whitepaper)

Long context:

- AA-LCR: **77.0%** (whitepaper; BenchLM); 262K native (Qwen3.8-27B base)

Multimodal:

- Vision category (MMMU-Pro, OCR Bench v2): **66.19** (whitepaper)
- OmniDocBench 1.6: **89.1%**; CharXiv overall **80.0%**; RealWorldQA **80.1%**; A-OKVQA **86.8%**; OCRBench V2 **56.9%** (whitepaper)
- IFEval: **91.3%**; IFBench: **74%** (thinking mode; whitepaper)

### Normalized scores (1–100)

- **Tool use: 67/100.** τ²-bench 80.2% and BFCL v3 74.92% verify real tool-calling; capped by Terminal-Bench 2.1 52.8% and agentic long-horizon gaps.
- **Reasoning: 82/100.** Math 96.57 avg (AIME 95-95.8, MATH-500 98.8), GPQA-D 85.8, MMLU-Redux 89.1 — within half a point of FP16 on math; capped by MuSR/knowledge category (79.86) vs full-precision 85.55.
- **Context window: 78/100.** 262K tokens, AA-LCR 77.0% measured; inherited from the Qwen3.8-27B base; max output 131K-series.
- **Multimodal: 68/100.** Text in, optional image in (mmproj Q8_0); vision category 66.19, OmniDocBench 89.1, CharXiv 80.0; no audio/video I/O.
- **Coding: 78/100.** LCB v6 90.1%, HumanEval+/MBPP+ category 89.42 (equal to FP16), SWE-bench Verified 60.8%, BigCodeBench 58.1% — strong on completion, mid on agentic SWE.
- **Cost efficiency: 96/100.** Apache 2.0, ~5.95 GB on-device; RTX 5090 ≈130 tok/s, Apple M5 Pro ≈28 tok/s; 13x+ cheaper to run than any hosted equivalent.
- **Overall Score: 75/100.** (67 + 82 + 78 + 68 + 78) / 5 = 74.6 → 75. Best fit: on-device/laptop open assistants needing 27B-class reasoning at ~6 GB; offline/private deployment; not for hard SWE-agent work.

## Signature

- Provided by: **Inkling 2 Small (thinkingmachines/inkling-2-small)** — 2026-11-10 UTC
- Method: public internet research (Prism ML HF model card + whitepaper reference, BenchLM, HF API); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Ternary-Bonsai-2-27B-gguf — Hugging Face model card](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)
  - [Ternary Bonsai 2 27B — BenchLM](https://benchlm.ai/models/ternary-bonsai-2-27b)
  - [Bonsai 2 27B whitepaper — PrismML](https://github.com/PrismML-Eng/Bonsai-demo/blob/main/bonsai-2-27b-whitepaper.pdf)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
