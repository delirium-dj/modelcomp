# Nemotron 3.5 Lightning Free — findings by Mimo v2.6 Flash

- Source: NVIDIA/`opencode/nemotron-3.5-lightning-free` (Nemotron-3.5-Lightning-30B-A3B)
- Date: 2026-10-09 (UTC; original research 2026-09-22, re-researched 2026-10-09)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Lightning Free (Zen free tier of Nemotron 3.5 Lightning 30B A3B)
- **Short description:** NVIDIA's 2026-08-11 open **30B / 3B-active** hybrid **Mamba-2 + MoE + Attention** execution-layer model for always-on agent sub-tasks — accuracy/speed Pareto claim on AA Index, up to ~4× output speed of peers, single-GPU (DGX Spark/H100/RTX 5090); OpenMDW-1.1 with weights/data/recipes; **Free Zen / NVIDIA trial**.
- **Provider / access:** OpenCode Zen `opencode/nemotron-3.5-lightning-free` (**Free**); NVIDIA build.nvidia.com / NGC / HF `nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16` (+NVFP4); NeMo Gym eval recipes; DSpark/DFlash/MTP speculative decoding.
- **Release / knowledge:** **2026-08-11** (NVIDIA blog + model card). Supported langs: EN (+coding), ES, FR, DE, IT, JA. Knowledge cutoff not published.
- **IDs:** `opencode/nemotron-3.5-lightning-free` (Zen); `nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16` / `-NVFP4` (HF).
- **Context window:** meta **262,144 native**; NVIDIA model card says **up to 1M tokens** — conflict noted (score on **262K** served/meta with 1M hardware claim flagged). Second-pass (2026-10-09): **AA lists 1M** as the context window while **OpenRouter lists 262K** — the split persists across catalogs; no retrieval measurement exists for either.
- **Modalities:** **text only** (meta "Text-only"); EN/ES/FR/DE/IT/JA; tool calls yes; reasoning via chat template `thinking`.
- **Pricing (as of 2026-10-09):** **Free** OpenCode Zen + NVIDIA trial — **free endpoint re-confirmed live on OpenRouter 2026-10-09** (NVIDIA trial terms: logged sessions, no identity linkage); paid routes $0.025–$0.06 / $0.12–$0.20 per 1M; open weights → self-host free after download.
- **Architecture:** LatentMoE hybrid **30B total / 3B active**; interleaved Mamba-2 + MoE + select Attention; MTP heads; OpenMDW-1.1; release 2026-08-11.

### Raw benchmarks found

> Measured numbers with (source, rank, harness). NVIDIA model card BF16 vs NVFP4 (NeMo Gym / NeMo Evaluator — vendor harness); AA independent rows where marked. Prefer BF16 unless noted; NVFP4 is deploy checkpoint.

Agent / tool use:

- Terminal-Bench 2.1: **24.58** BF16 / **23.46** NVFP4 (NVIDIA); AA independent TB2.1 row **~24.3%** (AI Atlas) — consistent
- Terminal-Bench v4.0: **0.51%** (AA via AI Atlas — essentially zero on harder variant)
- BrowseComp: **36.97** BF16 / 36.81 NVFP4 (NVIDIA)
- τ³-Bench (Banking): **9.28** BF16 / 9.48 NVFP4 (NVIDIA — weak)
- GDPval-AA v2: **832** BF16 / **865** NVFP4 Elo (NVIDIA; peer Qwen3.6-35B 1015)
- PinchBench (OpenClaw real-world agent tasks): **85.37** BF16 / **83.43** NVFP4 (NVIDIA — bright spot)
- Toolathlon / MCP-Atlas / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond (no tools): **75.44** BF16 / 75.57 NVFP4 (NVIDIA); AA independent **74.3%** (AI Atlas)
- MMLU Pro: **81.94** BF16 / 81.62 NVFP4 (NVIDIA)
- Humanity's Last Exam (text, no tools): **11.72** BF16 / 10.47 NVFP4 (NVIDIA); AA ~10.6%
- AA-Omniscience: **17.50** BF16 / 16.63 NVFP4 (NVIDIA)
- Artificial Analysis Intelligence Index: **~13.6** (AA via AI Atlas — low absolute; NVIDIA claims accuracy-vs-speed **Pareto** at this speed class, not high absolute Index). **Re-checked 2026-10-09 (AA page + OpenRouter AA block):** Index **12.9 / 13** (#28/142, median 8) — consistent with the ~13.6 reading; **Coding Index 26.8**, **Agentic Index 3.5**, **CritPt 0.0%** (fill), **AA-LCR 60.3%** (independent, above the NVIDIA 52 figure), τ-Banking 8.9%, GDPval-AA 7.1%; **speed #1/142 at 303.2 t/s**, TTFT 0.58s; **31.6B total / 3.6B active** precise counts (marketing 30B/3B); 5 API providers at $0.06/$0.20 median (OpenRouter as low as **$0.025/$0.12**)
- SciCode: **32.60** BF16 / 31.38 NVFP4 (NVIDIA); AA ~32.1

Coding:

- SWE-bench Verified: **51.56** BF16 / **52.80** NVFP4 (NVIDIA — solid for 3B active)
- SWE-bench Multilingual: **39.33** BF16 / 36.47 NVFP4 (NVIDIA)
- IFBench (loose): **71.88** BF16 (NVIDIA — instruction following)
- LiveCodeBench / DeepSWE / SWE-Pro: no verified public score found

Long context:

- Card claims **up to 1M**; meta **262,144** served; **AA-LCR: 52.00** BF16 / 49.19 NVFP4 (NVIDIA) — mid long-context quality

Multimodal:

- **Text-only** (meta + card langs are text) — template: 15

### Normalized scores (1–100)

- **Tool use: 50/100.** PinchBench 85 and BrowseComp 37 are decent execution signals, but **TB2.1 ~24**, TB4.0 ~0.5, Tau3 9.5, GDPval 832–865 are low — fine for high-volume sub-agent steps, weak as a standalone long-horizon planner.
- **Reasoning: 65/100.** GPQA ~75 and MMLU-Pro ~82 are strong for 3B active; HLE ~11 and AA Index ~14 cap absolute frontier reasoning (Pareto-on-speed narrative, not intelligence leadership).
- **Context window: 75/100.** Meta **262K** native (scored); NVIDIA "up to 1M" not credited without served-window confirmation; LCR ~52 is mid.
- **Multimodal: 15/100.** Text-only (template rule: 15).
- **Coding: 60/100.** SWE-Verified **~52 at 3B active** is the standout efficiency win; Multilingual 39 and TB2.1 24 keep general coding-agent depth mid.
- **Cost efficiency: 100/100.** **Free Zen** (meta) + OpenMDW-1.1 weights + 3B active single-GPU (RTX 5090 class) → maximum.
- **Overall Score: 53/100.** Mean of five quality dims (50+65+75+15+60)/5 = 53 → 53.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-10-09 (original: 2026-09-22; user-approved second pass)
- Method: public internet research (build.nvidia.com model card, HF NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16/NVFP4, developer.nvidia.com launch blog, DataCamp 2026-08-12 overview, AI Atlas AA rows); second pass 2026-10-09 re-checked [AA Nemotron 3.5 Lightning](https://artificialanalysis.ai/models/nemotron-3-5-lightning) (Index 13, **speed #1/142 at 303 t/s**, 31.6B/3.6B, AA lists 1M) and the [OpenRouter nvidia/nemotron-3.5-lightning page](https://openrouter.ai/nvidia/nemotron-3.5-lightning) (free endpoint still live, $0.025/$0.12, AA block fills: CritPt 0.0, Agentic 3.5, Coding 26.8, LCR 60.3); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

### Deep-research addendum (2026-10-09)

- **Gaps closed:** CritPt **0.0%**, Agentic Index **3.5**, Coding Index **26.8**, AA-LCR **60.3%** (above NVIDIA's own 52), GDPval-AA 7.1%, τ-bank 8.9%, Index pinned at **12.9/13**.
- **Speed crown:** AA ranks it **#1/142 in output speed (303.2 t/s**, TTFT 0.58s) — the Pareto claim holds on the speed axis.
- **Free tier:** NVIDIA free endpoint re-confirmed live on OpenRouter (trial terms displayed 2026-10-09); paid from $0.025/$0.12.
- **Context conflict update:** AA lists **1M**, OpenRouter **262K**, meta 262K — still unmeasured at depth; Context score held at 75 on the served 262K.
- **Scores:** no dimension changed; Overall held at 53.
