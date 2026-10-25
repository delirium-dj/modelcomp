# Nemotron 3.5 Lightning Free — findings by Muse Glimmer 30B

- Source: NVIDIA / nemotron-3.5-lightning-free
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Nemotron 3.5 Lightning Free
- **Short description:** NVIDIA open mixture-of-experts model for high-volume specialized agentic execution and long-running sub-agent work. 30B total / 3B active MoE hybrid optimized for tool use, coding and throughput inside multi-agent systems.
- **Provider / access:** OpenRouter `nvidia/nemotron-3.5-lightning:free` Chat Completions; NVIDIA Build `build.nvidia.com/nvidia/nemotron-3.5-lightning-30b-a3b`; Hugging Face `nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4`; NVIDIA NIM microservice. Chat Completions API.
- **Release / knowledge:** 2026-08-11; pre-training cutoff Sep 2025, post-training cutoff May 2026.
- **IDs:** `nvidia/nemotron-3.5-lightning` / `nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4`
- **Context window:** Up to 1M tokens claimed; NIM docs list 262,144 native validated. Measured long-context retrieval AA-LCR reported.
- **Modalities:** Input text; Output text. Reasoning yes, tool calls yes via `qwen3_coder` parser, JSON mode supported. Text-only.
- **Pricing (as of 2026-10-25):** Free tier via OpenRouter/NVIDIA Build trial; $0 per 1M tokens. Trial subject to NVIDIA API Trial Terms; no guaranteed sustained free rate.
- **Architecture:** 30B total / 3B active MoE, Mamba-2 + MoE + Attention hybrid, NVFP4 quantization, OpenMDW-1.1 license.

### Raw benchmarks found

> Sources: NVIDIA blog Nemotron 3.5 Lightning 2026-08-11, Hugging Face model card `NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4`, Build.NVIDIA.com model page.

Agent / tool use:

- Terminal-Bench 2.1: **23.46%** NVFP4 — Hugging Face / Build.NVIDIA.com
- τ³-bench Banking: **9.48%** — Hugging Face
- GDPval-AA-V2: **865 Elo** — Hugging Face
- PinchBench: **83.43** — Hugging Face
- BrowseComp: **36.81** — Hugging Face
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond (no tools): **75.57%** — Hugging Face
- HLE (text-only, no tools): **10.47%** — Hugging Face
- MMLU Pro: **81.62%** — Hugging Face
- AA-Omniscience: **16.63%** — Hugging Face
- AA-LCR v1.1: **49.19%** — Hugging Face
- IFBench (loose): **72.88%** — Hugging Face
- Artificial Analysis Intelligence Index / BenchLM overall: no independent public score found; numbers above from NVIDIA harness

Coding:

- SWE-bench Verified: **52.80%** — Hugging Face
- SWE-bench Multilingual: **36.47%** — Hugging Face
- SciCode: **31.38%** — Hugging Face
- Terminal-Bench 2.1: **23.46%** — Hugging Face
- LiveCodeBench: no verified public score found
- Vibe Code Bench: no verified public score found

Long context:

- AA-LCR 49.19% at 1M window; NIM docs validate 262K native context.

### Normalized scores (1–100)

- **Tool use: 50/100.** Terminal-Bench 2.1 23.46% and τ³-Banking 9.48% are below mid-tier; PinchBench 83.43 and GDPval-AA 865 Elo show usable agentic throughput. Capped by low terminal/tool bench percentages and lack of Claw/Toolathon scores.
- **Reasoning: 62/100.** GPQA Diamond 75.57% and MMLU Pro 81.62% are solid; HLE 10.47% and AA-Omniscience 16.63% limit top-end reasoning. Hybrid MoE design favors execution over deep reasoning.
- **Context window: 72/100.** Advertised 1M tokens with AA-LCR 49% retrieval; NIM docs state 262K native validated context. Tier maps to 200K–500K range.
- **Multimodal: 15/100.** Text-only input/output; no image/audio/video support.
- **Coding: 58/100.** SWE-bench Verified 52.80% is mid-tier; SciCode 31.38% and Terminal-Bench 23.46% pull score down. Strong PinchBench agentic coding signal offsets lack of LiveCodeBench.
- **Cost efficiency: 100/100.** Free trial tier $0 per 1M tokens on evaluated access points.
- **Overall Score: 51/100.** Mean of five quality dims (50+62+72+15+58)/5 = 51.4 → 51. Best-fit: routed executor / local single-GPU sub-agent for high-volume specialized tasks, not primary planner.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-25
- Method: public internet research; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
