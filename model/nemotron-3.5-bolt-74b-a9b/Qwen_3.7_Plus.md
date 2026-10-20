# Nemotron 3.5 Bolt 74B A9B — findings by Qwen 3.7 Plus

- Source: NVIDIA (`nemotron-3.5-bolt-74b-a9b`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Bolt 74B A9B
- **Short description:** NVIDIA's open-weight 74B/9B-active Mamba-2 hybrid vision-language MoE designed to run local agentic tasks in 24GB VRAM. Compressed from Nemotron 3.5 Super VL (120B-A12B) via Star Elastic with native 2-bit quantization. Released October 15, 2026.
- **Provider / access:** Open weights on Hugging Face (`nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB`); self-host via llama.cpp or vLLM; NVIDIA NIM. No public API — OpenCode Zen `opencode/nemotron-3.5-bolt-74b-a9b`.
- **Release / knowledge:** 2026-10-15; knowledge cutoff May 2026.
- **IDs:** `opencode/nemotron-3.5-bolt-74b-a9b` (OpenCode Zen). No free ID (open-weight, self-hosted).
- **Context window:** 262,144 tokens (256K) (per Artificial Analysis and BenchLM).
- **Modalities:** Text and image in; text out; reasoning mode enabled; tool calling supported.
- **Pricing (as of 2026-10-20):** Open weights (OpenMDW-1.1) — self-host / NVIDIA NIM; no per-token list price. Runs on single RTX 24GB card.
- **Architecture:** Sparse MoE hybrid Mamba-Transformer, 74B total / 9B active per token; compressed from 120B-A12B parent via Star Elastic; native 2-bit quantization (IQ2_XXS) with quantization-aware distillation; LiLiCorr 1.13B speculative drafter achieving 84 TPS on RTX Spark.

### Raw benchmarks found

> Sources: NVIDIA research page (research.nvidia.com, 2026-10-15), BenchLM (benchlm.ai/models/nemotron-3-5-bolt-74b-a9b, 2026-10-20), Artificial Analysis (artificialanalysis.ai, 2026-10-20), llm-stats.com. Coverage note: BenchLM covers 17 of 666 benchmarks — partial coverage.

Agent / tool use:

- PinchBench: **87.8%** (NVIDIA model card via BenchLM — #1 among 24GB-class models)
- BrowseComp: **66.8%** (NVIDIA model card via BenchLM — #2 among 24GB-class models)
- WebArena: **50.9%** (NVIDIA model card via BenchLM — #2 among 24GB-class models)
- MCP Atlas: **52.2%** (NVIDIA model card via BenchLM)
- τ³-bench: **17.0%** (NVIDIA model card via BenchLM)
- GDPval-AA: **24.0%** (Artificial Analysis via BenchLM)

Reasoning / knowledge:

- GPQA Diamond: **86.4%** (NVIDIA model card via BenchLM — strong graduate-level reasoning)
- HLE w/o tools: **25.3%** (NVIDIA model card via BenchLM)
- AA-HLE: **24.7%** (Artificial Analysis via BenchLM)
- AA-LCR: **69.7%** (Artificial Analysis via BenchLM — decent long-context reasoning)
- CritPt: **4.3%** (Artificial Analysis via BenchLM — very weak)
- AA Intelligence Index: **21.4%** (Artificial Analysis — #4 of 672 similar-size open models)
- AA-Omniscience Accuracy: **17.1%** (Artificial Analysis via BenchLM)
- AA-Omniscience Hallucination Rate: **43.7%** (Artificial Analysis via BenchLM)
- AA-Omniscience Index: **-19.2%** (Artificial Analysis via BenchLM — negative = more wrong than right)

Coding:

- Terminal-Bench 2.1: **51.0%** (NVIDIA model card via BenchLM — #2 among 24GB-class models)
- AA-SciCode: **39.7%** (Artificial Analysis via BenchLM)

Multimodal & Grounded:

- No dedicated multimodal benchmark scores found on BenchLM or Artificial Analysis (model is VLM but benchmarks not yet reported).

Long context:

- AA-LCR: **69.7%** at 256K context (Artificial Analysis via BenchLM)

Inference speed:

- AIPerf SPEED-Bench-Coding: **84 TPS** (NVIDIA — with LiLiCorr speculative decoding on RTX Spark)
- AA-AgentPerf Local replay duration: **600.80s** (NVIDIA — vs Qwen3.6 35B-A3B at 453.97s)

### Normalized scores (1–100)

> Derived from the raw numbers above using the methodology in `model-comparison.md`. Note: BenchLM covers 17 of 666 benchmarks — partial coverage means scores carry uncertainty.

- **Tool use: 70/100.** PinchBench 87.8% (#1 in class), BrowseComp 66.8% (#2 in class), WebArena 50.9% (#2 in class) are excellent for a 24GB local model. MCP Atlas 52.2% is moderate. However, τ³-bench 17.0% and GDPval-AA 24.0% are weak. Capped by poor τ³-bench and GDPval-AA performance.
- **Reasoning: 55/100.** GPQA Diamond 86.4% is frontier-competitive and exceptional for a 9B-active model. AA-LCR 69.7% is decent. However, HLE 24.7-25.3%, CritPt 4.3%, AA Intelligence Index 21.4%, and Omniscience Accuracy 17.1% are all weak. Omniscience Index -19.2% is negative (more wrong than right). Capped by very poor performance on hardest reasoning benchmarks and high knowledge unreliability.
- **Context window: 80/100.** 256K tokens — solid mid-range. AA-LCR 69.7% confirms decent effective long-context reasoning. Docked 20 for not reaching 1M tier and moderate LCR score.
- **Multimodal: 35/100.** Vision-language model (text + image input) but no multimodal benchmark scores found on BenchLM or Artificial Analysis. Score reflects VLM capability with uncertainty due to lack of independent verification.
- **Coding: 58/100.** Terminal-Bench 2.1 51.0% is strong for a 24GB local model (#2 in class). However, AA-SciCode 39.7% is moderate-to-weak. AA-AgentPerf Local replay duration 600.80s is slower than Qwen3.6 35B-A3B (453.97s). Capped by weak SciCode and slower end-to-end agent performance vs competitors.
- **Cost efficiency: 95/100.** Open weights, self-hosted, runs on single 24GB RTX card at 84 TPS. No per-token API cost. Extremely cost-effective for local deployment.
- **Overall Score: 59.6/100.** Mean of five non-cost dims: (70 + 55 + 80 + 35 + 58) / 5 = 59.6, half-up = 60. Best-in-class 24GB local agentic model: #1 PinchBench (87.8%), #2 Terminal-Bench 2.1 (51.0%), #2 BrowseComp (66.8%), GPQA Diamond 86.4%, 256K context, 84 TPS — all on a single consumer GPU. However, held back by weak reasoning breadth (CritPt 4.3%, HLE 25%), poor Omniscience (-19.2%), no multimodal benchmark verification, and moderate SciCode (39.7%). Best fit for: local agentic coding, web browsing, and tool use on constrained hardware.

---

## Signature

- Provided by: **Qwen 3.7 Plus (opencode/qwen-3.7-plus)** — 2026-10-20
- Method: public internet research across NVIDIA research page, BenchLM, Artificial Analysis, llm-stats.com, ModelScope, explainx.ai, and Reddit r/LocalLLaMA; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
