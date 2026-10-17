# Nemotron 3.5 Bolt 74B-A9B 24GB — findings by Space Bunny

- Source: NVIDIA (`nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB`)
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Bolt 74B-A9B 24GB
- **Short description:** NVIDIA's edge vision-language agent model — Nemotron 3.5 Super VL 120B-A12B structurally compressed to 74B/9B-active and then quantized to an aggressive 2.0625 bits per element so it fits in **24 GB** and runs on consumer RTX Spark / DGX Spark boxes. The thesis is that compressing a larger model down beats training a smaller one: at equal memory, Bolt beats Qwen 3.6 35B-A3B and Gemma 4 26B-A4B at 4-bit across agentic, browsing and terminal benchmarks. Not an alias — a distinct architecture, license artifact and release line from Super VL.
- **Provider / access:** Hugging Face `nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB` (IQ2), `-24GB-GGUF` (IQ2 GGUF), `-BF16` (unquantized, for post-training), plus `-24GB-LiLiCorr` / `-LiLiCorr-GGUF` speculative drafters. Also `nemotron-3.5-bolt:74b-a9b` in the Ollama registry (22 GB). Served by llama.cpp on Windows ARM / RTX Spark and by vLLM on DGX Spark, Ampere A100, Hopper H100-80GB and Blackwell. **No hosted API pricing exists** — BenchLM and Artificial Analysis both list pricing as unavailable; this is a self-host-only release.
- **Release / knowledge:** published 2026-10-15 with the Nemotron 3.5 family (Bolt E4B 4GB followed on 2026-10-23). Knowledge cutoff not published for this checkpoint; it inherits the Super 3.5 VL lineage.
- **IDs:** `nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB`, `...-24GB-GGUF`, `...-BF16`, `...-24GB-LiLiCorr`. No Free tier ID on any aggregator.
- **Context window:** **up to 256K tokens** (262,144 per Artificial Analysis) — explicitly half the 1M of its own Super VL parent, a deliberate trade for the 24 GB memory budget.
- **Modalities:** text, image and video in; **text out**. C-RADIO v4-H vision encoder retained from the parent. Reasoning toggled by chat template (`enable_thinking`), recommended sampling temperature 1.0 / top_p 0.95. Tool calling supported. No audio.
- **Pricing (as of 2026-10-17):** **no per-token price — this is a local-deployment model.** Weights are free under **OpenMDW-1.1** (commercial use permitted). The economic argument is hardware: a 22.01 GB weight file plus 0.87 GB cache/activations = ~22.87 GB, so the whole agent runs on a single 24 GB consumer box with no API bill and no data leaving the machine.
- **Architecture:** Mamba-2–Transformer hybrid **LatentMoE VLM**, **74B total / 9B active**, derived from Super VL 120B-A12B via **Star Elastic** router-guided joint architecture search and end-to-end compression (expert top-K cut from 22 to 9); expert FC1/FC2 weights quantized to **IQ2_XXS at 2.0625 bits**, Mamba linear layers to NVFP4, lm_head/embeddings/attention/Latent-MoE weights to Q8_0. 148 GB BF16 → **22.1 GB, an 85.1% size reduction**, quantization-aware distillation used to recover accuracy. LiLiCorr drafter (1.13B) gives mean acceptance lengths 4.68 greedy / 4.25 probabilistic at 7 drafted tokens, concurrency 64.

### Raw benchmarks found

> All accuracy figures below are the **24GB IQ2 quantized** checkpoint from Table 7 of NVIDIA's technical report — the artifact people actually run. The BF16 pre-quantization column is given alongside where the quantization loss is material.

Agent / tool use:

- Terminal-Bench 2.1: **50.98%** (IQ2) / 53.93% (BF16) / 61.94% (parent Super VL BF16) — still ahead of Qwen 3.6 35B-A3B (44.38) and Gemma 4 26B-A4B (37.22)
- MCP-Atlas: **52.20%** (IQ2) / 55.60% (BF16) — reasoning-on, official eval repo, public 500 tasks. Note NVIDIA explicitly could **not** reproduce Qwen 3.6 35B-A3B's published 62.8 and measured 51.2 instead
- Tau3 banking: **17.01%** (IQ2 and BF16) / 19.85% (parent) — a weak spot shared with the parent line
- GDPval-AA-V2: **28.47%** (IQ2) / 31.13% (BF16) / 34.48% (parent)
- BrowseComp: **66.75%** (IQ2) / 70.00% (BF16) / 71.50% (parent) — **#2 among open models in its memory class** (NVIDIA), using the Exa search API
- WebArena (vision, 812-task public set, screenshot-driven, 100 agent steps max): **50.86%** (IQ2) / 50.25% (BF16) — **#2 in class**
- PinchBench: **87.82%** (IQ2) / 90.35% (BF16) / 90.25% (parent) — **#1 open model in its class**, and remarkably the quantization *gains* here
- Artificial Analysis Intelligence Index: **21** (independent) — above the open-weight class median of 8, but five points behind its own Super VL parent (26)
- IFBench (instruction-loose): **66.17%** (IQ2) / 68.71% (BF16)

Reasoning / knowledge:

- GPQA Diamond: **86.43%** (IQ2) / 88.83% (BF16) / 90.78% (parent) — a clean 4.4-point quantization cost, and still above Qwen 3.6 35B-A3B (83.40) and Gemma 4 26B-A4B (79.61)
- HLE (no tools): **25.30%** (IQ2) / 28.73% (BF16) / 31.84% (parent)
- SciCode: **41.02%** (IQ2) / 44.49% (BF16) / 47.27% (parent)
- AA-Omniscience: **16.90% accuracy / 61.27% non-hallucination rate** (IQ2) — accuracy falls hardest under 2-bit quantization (21.80% BF16 → 16.90%), but the non-hallucination rate is the best in the whole comparison table (vs Gemma 4 26B-A4B's alarming 14.22% and Nemotron 3 Super's 14.64%)
- Artificial Analysis verbosity: 230M output tokens on the Intelligence Index, **2.3× the class median of 100M** — the model is notably chatty compared with its parent

Coding:

- **No SWE-bench (Verified, Pro or Multilingual) figure is published for any Bolt checkpoint** — a genuine evidence gap for a coding-adjacent agent model
- Terminal-Bench 2.1: **50.98%** (see above) — the primary coding proxy
- PinchBench: **87.82%**
- SciCode (scientific coding): **41.02%**
- DeepSWE: no verified public score found for this model
- LiveCodeBench: no verified public score found for this model

Long context:

- AA-LCR v1.1: **64.06%** (IQ2) / 67.38% (BF16) / 68.81% (parent)
- No MRCR / RULER / GraphWalks figure published for Bolt
- **256K ceiling**, with no published retrieval-degradation curve

Multimodal:

- WebArena (vision-driven browser tasks): **50.86%** — the only published multimodal number, and notably strong given 2-bit weights
- C-RADIO v4-H encoder + retained vision functionality post-compression
- No MMMU-Pro / MMMU / DocVQA / OCR figure published for this checkpoint

Speed / efficiency (NVIDIA-measured, RTX Spark 128GB, llama.cpp on Windows ARM):

- AIPerf SPEED-Bench-Coding: **83.99 TPS** (with LiLiCorr) — target was ≥80 TPS. For comparison: Qwen 3.6 35B-A3B **96.63**, Gemma 4 26B-A4B **100.56**, Qwen 3.8 27B **28.26**
- AA-AgentPerf Local replay duration: **600.80 s** — *slower* end-to-end than Qwen 3.6 35B-A3B (453.97 s) and Gemma 4 26B-A4B (480.68 s), far faster than Qwen 3.8 27B (1043.28 s). **This is an important nuance: Bolt wins on raw tokens/sec but loses on real agent task duration**, because the local models it is compared against produce fewer tokens per unit of work.

### Normalized scores (1–100)

- **Tool use: 72/100.** A credible local agentic tool profile: Terminal-Bench 2.1 50.98%, MCP-Atlas 52.20%, BrowseComp 66.75% (#2 in class), WebArena 50.86% (#2 in class), PinchBench 87.82% (#1 in class), GDPval-AA 28.47%. Capped by **Tau3 banking at 17.0%** — the same cliff the Super VL parent shows, and a direct warning against using Bolt for transactional agents — and by the fact that its class-leading titles are all "among models that fit in 24 GB," not against the frontier.
- **Reasoning: 72/100.** GPQA Diamond 86.43% is genuinely strong for a 2-bit 74B model and beats every comparator in the table, but the ceiling is real: HLE at 25.30% and an AA Intelligence Index of 21 sit five points below Super VL and well below every proprietary peer. The **61.27% non-hallucination rate is the standout** — it knows when it does not know — even though 2-bit quantization costs it 4.9 points of raw Omniscience accuracy (21.80 → 16.90).
- **Context window: 68/100.** A real 256K (262,144) window, but in a dataset where the sibling Nemotron 3.5 Super VL, Opus 4.7, Beam and Kimi K3 all run at 1M, this is a genuine downgrade the vendor made on purpose. AA-LCR 64.06% is mid-pack, and no retrieval curve at depth is published.
- **Multimodal: 72/100.** Genuinely multimodal — text, image and video in via a retained C-RADIO v4-H encoder — and the standout evidence is **WebArena (vision) at 50.86%, second in its memory class**, which is a real screenshot-and-browse workload, not a toy VQA. Held below 75 because 2-bit weights are a hard ceiling on fine-grained visual detail (no chart/document/OCR numbers exist) and there is no audio path.
- **Coding: 70/100.** Adequate-to-good for a local model: Terminal-Bench 2.1 50.98% beats both Qwen 3.6 35B-A3B and Gemma 4 26B-A4B, PinchBench 87.82% is #1 in class, SciCode 41.02%. Capped mainly by an **evidence gap — no SWE-bench score of any kind is published for Bolt**, so real repository-level performance is unverifiable — and by 2-bit quantization's visible cost on terminal work (50.98 vs 53.93 BF16 vs 61.94 parent).
- **Cost efficiency: 85/100.** Exceptional on the metric that matters for this model: OpenMDW-1.1 weights are free, the whole 24 GB footprint runs on a single consumer RTX/DGX Spark, and no prompt ever leaves the machine — for privacy-sensitive enterprise agent work that is a decisive advantage no API price can match. Marked down because there is **no hosted option at all** (so you must own the hardware), the model is **verbose** (230M tokens on the AA Index, 2.3× class median), and its agent-task replay duration (600.8 s) is actually slower than the smaller local models it outranks on accuracy.
- **Overall Score: 71/100.** Mean of the five non-cost dims (72 + 72 + 68 + 72 + 70) / 5 = 70.8, half-up to 71. Best-fit recommendation: the pick for **on-premise, privacy-critical agents that must run on a single 24 GB workstation** — document Q&A, local code review, internal web research — and a poor fit for anyone needing SWE-bench-grade autonomous coding, sub-256K context is fine but 1M is required, or transactional tool use (Tau3 17%).

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-17
- Method: public internet research across NVIDIA's Nemotron 3.5 Bolt 74B-A9B 24GB technical report (2026-10-15, including Table 7's full per-precision accuracy comparison and Table 8's performance measurements), the NVIDIA Nemotron project page for Bolt, the NVIDIA corporate blog announcing the Nemotron 3.5 family, all four Hugging Face model cards (24GB IQ2, GGUF, BF16, LiLiCorr) with their architecture/precision/deployment specs, Artificial Analysis's independent model page (index 21, verbosity, context), BenchLM's Bolt profile and cross-model comparison pages, the Ollama registry manifest (22 GB, IQ2_XXS tensor dtypes), and the NVIDIA developer forum release thread. NVIDIA's own failed reproduction of Qwen 3.6 35B-A3B's published MCP-Atlas score (62.8 claimed vs 51.2 measured) and the tokens/sec-vs-task-duration inversion are both recorded rather than smoothed over; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.