# Nemotron 3.5 Lightning Free — findings by Big Pickle

- Source: Big Pickle (`opencode/big-pickle`)
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** NVIDIA Nemotron 3.5 Lightning (Free tier on Zen)
- **Short description:** Compact open 30B MoE (3B active) built as the **execution layer for always-on agents** (tool calls, result validation, subagent delegation); routes plans up to frontier planners (e.g., Nemotron 3 Ultra) via NeMo Switchyard. Not a frontier reasoner.
- **Provider / access:** OpenCode Zen free (`opencode/nemotron-3.5-lightning-free`); NVIDIA NIM (`nvidia/nemotron-3.5-lightning-30b-a3b`); Ollama (`nemotron-3.5-lightning:30b-a3b-*`); OpenRouter `:free`; many partners. Weights BF16 + NVFP4 on HF.
- **Release / knowledge:** 2026-08-11 (GA); dev Dec 2025–May 2026; pretrain cutoff Sep 2025; post-train cutoff May 2026.
- **IDs:** `opencode/nemotron-3.5-lightning-free`; NIM `nvidia/nemotron-3.5-lightning-30b-a3b`
- **Context window:** native up to **1M** per NVIDIA card; **Zen/NIM served at 262,144** (models.dev); OpenAI router 1M in / 65,536 out.
- **Modalities:** text-only. Reasoning toggleable (`enable_thinking`); tool calling via `qwen3_coder` parser.
- **Pricing (as of 2026-09-17):** Zen Free $0/$0; NIM free endpoint; OpenRouter `:free` $0. Paid refs: Fireworks $0.05/$0.20, Nebius $0.06/$0.24.
- **Architecture:** 30B total / 3B active; hybrid Mamba-2 + MoE + select Attention (LatentMoE); MTP; DSpark + DFlash drafters; NVFP4 recipe; OpenMDW-1.1. Runs single-GPU (DGX Spark / 1x H100).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **24.58 / 23.46** (NVIDIA card); Tau3-Banking **9.28 / 9.48**; GDPval-AA v2 Elo **832 / 865**
- PinchBench **85.37 / 83.43**; BrowseComp **36.97 / 36.81**
- Claw-Eval / ClawProBench: **no verified public score found**

Reasoning / knowledge:

- MMLU Pro **81.94 / 81.62**; GPQA (no tools) **75.44 / 75.57**; HLE **11.72 / 10.47**; SciCode **32.6 / 31.38**; IFBench **71.88 / 72.88**; AA-LCR **52.0 / 49.19**
- AA Intelligence Index: **24** in launch article (2026-08-11) → **14** current (2026-09, v4.3); AA-Omniscience Index 17.5/16.63 (BenchLM: −17.7, Acc 14.4, Hallu 37.6)
- BenchLM overall **21.02/100, #220/486**; Agentic lane 31.9 (or 26.4 — conflicting leaderboard rows), Coding lane 36.2

Coding:

- SWE-bench Verified **51.56 / 52.80**; SWE Multilingual **39.33 / 36.47**

Long context:

- No dedicated long-context retrieval SOTA published; native 1M claim per NVIDIA, served 262K.

### Normalized scores (1–100)

- **Tool use: 45/100.** Pinch 85 is good for size but TB ~24% and Tau3 ~9% are clearly execution-tier.
- **Reasoning: 60/100.** GPQA 75/MLLU-Pro 82 strong for 3B-active; HLE 11.7 caps.
- **Context window: 72/100.** 262K served.
- **Multimodal: 15/100.** Text-only.
- **Coding: 52/100.** SWE ~52% solid for size, but not mid-frontier coding.
- **Cost efficiency: 100/100.** $0 free; fastest/cheapest execution by design.
- **Overall Score: 57/100.** Use as routed executor + local single-GPU fallback, not as primary planner/coder.

---

## Signature

- Provided by: **Big Pickle (`opencode/big-pickle`)** — 2026-09-17
- Method: public web research (NVIDIA blog + model cards, Ollama library, Artificial Analysis, BenchLM, models.dev); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1.3.md`, using the same headings.