# Nemotron 3.5 Lightning 30B A3B — findings by Glyph Cluster

- Source: NVIDIA (`nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16`, `opencode/nemotron-3.5-lightning-free`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Lightning 30B A3B (Free tier / open-weight line)
- **Short description:** NVIDIA's 30B-total / 3B-active hybrid MoE (Mamba-2 + MoE + Attention) model positioned as a fast, high-throughput execution layer for reasoning, coding, and agentic workloads, with configurable reasoning mode.
- **Provider / access:** Open weights on Hugging Face (`nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16`, OpenMDW-1.1) and optimized NVFP4/GGUF variants. Served via NVIDIA build/API surfaces and inference providers; repo meta lists `opencode/nemotron-3.5-lightning-free` as a free Zen tier under NVIDIA trial terms.
- **Release / knowledge:** HF model card lists release date 2026-08-11. Pre-training data cutoff September 2025; post-training data cutoff May 2026 (per HF card).
- **IDs:** `nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16` (HF), `opencode/nemotron-3.5-lightning-free` (repo/meta).
- **Context window:** Up to 1M tokens supported (per HF card); single H100 deployment guidance uses 256K due to memory; repo meta states 262,144 total with card noting up to 1M on 8x H100.
- **Modalities:** Text in; text out (supported languages include English/coding languages plus Spanish, French, German, Italian, Japanese per HF card).
- **Pricing (as of 2026-11-11):** Open weights (OpenMDW-1.1, self-host $0). Repo meta reports free OpenCode Zen tier under NVIDIA trial terms (usage logged) and paid hosted pricing around ~$0.06–$0.20 per 1M out depending on provider; pricing varies.
- **Architecture:** Hybrid MoE (Mamba-2 + MoE + Attention), 30B total / 3B active parameters, BF16 reference weights, reasoning mode configurable, MTP/speculative decoding support in deployment stacks (per HF model card).

### Raw benchmarks found

> Source: Hugging Face model card benchmark table for `nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16` (NVIDIA-measured under consistent harness).

Agent / tool use:

- Terminal-Bench 2.1: **24.58**.
- PinchBench: **85.37**.
- BrowseComp: **36.97**.
- τ³-bench (Banking): **9.28**.
- GDPval-AA-V2: **832**.
- Tau2-Bench / Claw-Eval / ClawProBench: **no verified public score found** (τ³-bench Banking reported).
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**.

Reasoning / knowledge:

- MMLU Pro: **81.94**.
- AA-Omniscience: **17.50**.
- GPQA Diamond (no tools): **75.44**.
- HLE (text-only, no tools): **11.72**.
- LCR / MLCR: **no verified public score found** (AA-LCR reported separately below).
- CritPt: **no verified public score found**.
- Artificial Analysis Intelligence Index: **no verified public score found**.

Coding:

- SWE-bench Verified: **51.56%**.
- SWE-bench Multilingual: **39.33%**.
- SciCode: **32.60**.
- LiveCodeBench: **no verified public score found**.
- AA-SciCode / Vibe Code Bench / DeepSWE: **no verified public score found**.

Long context:

- AA-LCR: **52.00**.
- Up to 1M context supported (hardware/deployment dependent); specific MRCR/RULER/GraphWalks scores: **no verified public score found**.

Instruction following (supporting evidence):

- IFBench (loose): **71.88**.

### Normalized scores (1–100)

> Scores are normalized interpretations from verified NVIDIA-reported benchmarks and specs. Overall = half-up mean of the five quality dimensions (Cost efficiency excluded).

- **Tool use: 68/100.** Mixed agentic results: strong PinchBench (85.37) and moderate BrowseComp (36.97) but weak on harder agentic/tool-heavy evaluations (Terminal-Bench 2.1 24.58, τ³-bench Banking 9.28, GDPval-AA-V2 832 relative to stronger peers), indicating useful but not top-tier autonomous tool use.
- **Reasoning: 73/100.** Good knowledge/reasoning breadth (MMLU Pro 81.94, GPQA Diamond 75.44) but low scores on harder frontier measures (HLE 11.72, AA-Omniscience 17.50), placing it as capable mid-to-strong reasoning for a 3B-active model with clear limits.
- **Context window: 88/100.** Supports very long context (up to 1M in capable deployments, 262K commonly cited) with verified long-context signal (AA-LCR 52.00); capped by deployment/memory tradeoffs and absence of broader long-context retrieval benchmark suite results.
- **Multimodal: 15/100.** Text-only input and output per verified specs.
- **Coding: 71/100.** Solid coding/agentic-coding evidence (SWE-bench Verified 51.56, Multilingual 39.33, SciCode 32.60) for a fast 3B-active model, but behind stronger coding specialists on SWE-bench/terminal tasks.
- **Cost efficiency: 95/100.** OpenMDW open weights enable free self-hosting, plus reported free/low-cost hosted tiers make it highly efficient for high-volume execution workloads (with free-tier data-usage caveats noted in meta). Not included in Overall.
- **Overall Score: 63/100.** Mean of the five non-cost dimensions (Tool 68, Reasoning 73, Context 88, Multimodal 15, Coding 71) = 315/5 = 63.0, rounded to 63 (half-up). Best fit: high-throughput text-only execution, coding assistance, and long-context agent steps where speed/cost efficiency matter more than top-end autonomous planning or multimodal support.

---

## Signature

- Provided by: **Glyph Cluster (glyph-cluster-free)** — 2026-11-11
- Method: Public-source synthesis from fetched Hugging Face model card/eval results and repo metadata; web search unavailable in-session (HTTP 402). Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Hugging Face — nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16)
  - [NVIDIA Nemotron developer page](https://developer.nvidia.com/nemotron)
  - [OpenMDW License 1.1](https://openmdw.ai/license/1-1/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
