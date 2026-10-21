# Nemotron 3.5 Bolt 74B A9B — findings by MiniMax M3.1 Flash

- Source: NVIDIA (Nemotron 3.5 Bolt 74B A9B), `nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB`
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Bolt 74B A9B
- **Short description:** NVIDIA's October 2026 open-weight (OpenMDW 1.1) Mamba-2 hybrid MoE — 74B total / 9B active with a C-RADIO vision encoder, IQ2-quantised to fit a **24 GB** card, 83.99 tok/s on RTX Spark and Terminal-Bench 2.1 50.98% — the point of the line is running a frontier-shaped local model on a desktop.
- **Provider / access:** Hugging Face `nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB` (IQ2, the 24 GB build), plus `-BF16`, `-24GB-GGUF` and a `-24GB-LiLiCorr` speculative-decoding drafter; local serving with vLLM/SGLang. **No hosted API route** — local and self-host only. **Not on OpenCode Zen.**
- **Release / knowledge:** **2026-10-15** (HF "Release Date", NVIDIA research blog, AA); HF repos created 2026-10-07 (24 GB) and 2026-10-09 (BF16). Knowledge cutoff not published.
- **IDs:** `nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB` (HF, 24 GB IQ2), `nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-BF16` (HF).
- **Context window:** up to **262,144** tokens (`--max-model-len 262144`).
- **Modalities:** image, video (≤2 min) and text input; text output; reasoning; function calling.
- **Pricing (as of 2026-10-20):** no per-token list price — open weights under OpenMDW-1.1, run locally on consumer hardware (24 GB target footprint, batch 1 / 128K context; 83.99 tok/s on the AIPerf SPEED-Bench-Coding with the LiLiCorr drafter).
- **Architecture:** Mamba-2–Transformer hybrid **LatentMoE** with routed-expert top-9 (parent 22) plus a C-RADIO v4-H vision encoder; **74B total / 9B active**; IQ2_XXS (2.0625 bits/element) for the routed/shared FFNs, NVFP4 for Mamba layers, Q8_0 elsewhere, with quantization-aware distillation.

### Raw benchmarks found

> NVIDIA's technical-report table for the IQ2 24 GB build and the BF16 build side by side, with the AA independent row and BenchLM's ledger.

Agent / tool use:

- Terminal-Bench 2.1: **50.98%** (IQ2 24 GB, confirmed by BenchLM at 51.0) vs **53.93%** (BF16) — and **12.36%** on AA's own run — a three-way spread, flagged
- MCP-Atlas: **52.2%** (IQ2) / **55.6%** (BF16) · BrowseComp: **66.75%** (IQ2) / **70.0%** (BF16) · τ³-Banking: **17.01%** (both) · GDPval-AA v2: **28.47** (IQ2) / **31.13** (BF16)
- Bench Tool-Agent-User Evaluation: **17.0%** (BenchLM) · AA GDPval-AA: **979.03** · AutomationBench partial: **15.5%** (AA) · Terminal-Bench 4.0: **0%** (AA)
- WebArena (vision): **50.86%** (IQ2) / **50.25%** (BF16)

Reasoning / knowledge:

- GPQA Diamond: **86.43%** (IQ2) / **88.83%** (BF16) · HLE (no tools): **25.30%** (IQ2) / **28.73%** (BF16) / **24.65%** (AA)
- AA-LCR: **64.06%** (IQ2) / **67.38%** (BF16) / **69.7%** (AA) · CritPt: **4.29%** (AA)
- Omniscience accuracy / non-hallucination: **16.90% / 61.27%** (IQ2) / **21.80% / 56.14%** (BF16) / **43.7% hallucination** (AA) · IFBench (loose): **66.17%** (IQ2) / **68.71%** (BF16)
- Artificial Analysis Intelligence Index: **21** (#4/67 in the open-weights class) · output speed 230M tokens on the index

Coding:

- SciCode: **41.02%** (IQ2) / **44.49%** (BF16) / **39.7%** (AA) · PinchBench: **87.82%** (IQ2) / **90.35%** (BF16)
- SWE-bench / SWE-bench Verified / LiveCodeBench / DeepSWE / MMMU-Pro: **no verified public score found** — none of these appear in NVIDIA's technical report or on any tracker for this model

Long context:

- No MRCR / RULER measurement published for the Bolt family, despite the 262K window.

### Normalized scores (1–100)

- **Tool use: 52/100.** Terminal-Bench 2.1 51.0% (card) against AA's 12.4% is a wide spread, MCP-Atlas 52.2%, τ³-Banking 17.0%, Bench Tool-Agent-User 17.0% and AutomationBench 15.5% keep the agentic evidence mid at best.
- **Reasoning: 66/100.** GPQA 86.4–88.8%, AA-LCR 64.1–69.7% and IFBench 66.2% are mid-band, capped by HLE 24.7–28.7%, CritPt 4.3% and an AA Intelligence Index of 21.
- **Context window: 68/100.** 262,144 tokens is a 200K–500K window and no retrieval measurement was published, so the tier midpoint applies.
- **Multimodal: 80/100.** Image and video input with text output through the C-RADIO encoder — WebArena 50.9% and the vision rows put it in the "+image/video in" band.
- **Coding: 45/100.** SciCode 41.0% and PinchBench 87.8% with **no SWE-bench, LiveCodeBench or DeepSWE figure at all** leaves coding largely unproven.
- **Cost efficiency: 97/100.** OpenMDW-1.1 weights with a 24 GB footprint: no token bill, no hosted markup, and a drafter that triples local throughput.
- **Overall Score: 62/100.** Mean of the five quality dims = (52 + 66 + 68 + 80 + 45) / 5 = 62.2 → **62**. Best fit: private, fully local agentic work on a single desktop GPU — the 24 GB quantisation is the whole point, not the benchmark sheet.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-21
- Method: public internet research (NVIDIA Hugging Face model cards and the 24 GB technical report, NVIDIA research blog, Artificial Analysis, BenchLM, models.dev); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Nemotron_3.5_Bolt_E4B.md`, using the same headings.
