# Nemotron 3 Nano Omni — findings by Beam

- Source: NVIDIA/Nemotron 3 Nano Omni, `nvidia/nemotron-3-nano-omni`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3 Nano Omni
- **Short description:** NVIDIA's omni-modal model (Apr 28, 2026): 30B / 3B active MoE, 256K context. Text/image/audio/video in. BenchLM 32.22 (#173 of 954). Open weights (Apache 2.0). 3x higher throughput than Qwen3-Omni.
- **Provider / access:** NVIDIA build.nvidia.com; OpenRouter; HuggingFace.
- **Release / knowledge:** Released 2026-04-28; knowledge cutoff not stated.
- **IDs:** `nvidia/nemotron-3-nano-omni`
- **Context window:** 256,000 tokens; max output not stated.
- **Modalities:** text, image, audio, video in; text out; reasoning yes; tool calling yes. Open weights (Apache 2.0).
- **Pricing (as of 2026-10-17):** Free (open weights); self-host.
- **Architecture:** 30B total / 3B active, hybrid MoE (Conv3D, EVS), 256K context, Apache 2.0. Vision: C-RADIOv4-H; Audio: Parakeet-TDT-0.6B-v2.

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): Coming soon (not computed)
- OSWorld: **47.4%** (NVIDIA technical report)
- τ²-bench: **45.3%** (NVIDIA technical report)
- GDPval-AA: **0.0%** / **416** (Artificial Analysis)
- AA Agentic Index: not reported

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): **53.1** (Unranked · 2 rankable rows)
- GPQA: **72.2%** (NVIDIA technical report)
- GPQA-D: **72.2%** (NVIDIA technical report)
- MMLU-Pro: **77.3%** (NVIDIA technical report)
- HLE: not reported
- AA Intelligence Index: **10.3%** (Artificial Analysis)
- CritPt: not reported
- AIME 2025: **82.1%** (NVIDIA technical report)
- AA-IFBench: **63.2%** (Artificial Analysis)
- IFBench: **74.2%** (NVIDIA technical report)

Coding:

- Coding public-lane (BenchLM): **15.4** (Estimated · #132/150)
- LiveCodeBench v5: **63.2%** (NVIDIA technical report)
- SciCode: **32%** (NVIDIA technical report)
- AA Coding Index: **13.8%** (Artificial Analysis)
- Terminal-Bench: not reported

Long context:

- 256K window; MRCR: not reported.

Multimodal:

- Multimodal public-lane (BenchLM): **43.8** (#50/54)
- MMMU: **70.8%** (NVIDIA technical report)
- MMLongBench-Doc: **57.5%** (NVIDIA technical report)
- CharXiv: **76.3%** (NVIDIA technical report)
- ScreenSpot Pro: **57.8%** (NVIDIA technical report)
- Video-MME (w/o subtitle): **72.2%** (NVIDIA technical report)
- AI2D_TEST: **88.5%** (NVIDIA technical report)
- RefCOCO (avg): **90.5%** (NVIDIA technical report)
- AA-MMMU-Pro: **53.2%** (Artificial Analysis)
- OCRBench-V2: leading (NVIDIA claim)
- WorldSense: leading (NVIDIA claim)
- DailyOmni: leading (NVIDIA claim)

### Normalized scores (1–100)

- **Tool use: 58/100.** OSWorld 47.4%, τ²-bench 45.3%, GDPval-AA 0.0%/416; caps at GDPval-AA 0.0%.
- **Reasoning: 62/100.** GPQA 72.2%, MMLU-Pro 77.3%, AIME 82.1%, AA Intelligence 10.3%, AA-IFBench 63.2%; caps at AA Intelligence 10.3%.
- **Context window: 64/100.** 256K window; caps at no published MRCR.
- **Multimodal: 78/100.** Text/image/audio/video in; MMMU 70.8%, CharXiv 76.3%, Video-MME 72.2%, ScreenSpot Pro 57.8%, AI2D 88.5%, RefCOCO 90.5%; caps at ScreenSpot Pro 57.8%.
- **Coding: 56/100.** LiveCodeBench v5 63.2%, SciCode 32%, AA Coding 13.8%, coding lane #132/150 (15.4); caps at SciCode 32%.
- **Cost efficiency: 100/100.** Free (open weights).
- **Overall Score: 63.6/100.** Mean of five quality dims (BenchLM 32.22); best-fit for local omni-modal at zero cost.

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (NVIDIA official blog, technical report, BenchLM, Artificial Analysis via OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.<|end|>>