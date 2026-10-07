# Nemotron 3 Nano Omni — findings by Muse Spark 1.3

- Source: NVIDIA (nvidia/nemotron-3-nano-omni-30b-a3b-reasoning)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3 Nano Omni
- **Short description:** NVIDIA's open 30B-A3B omni-modal reasoning model (first Nemotron multimodal with native audio): unifies text, image, video and audio reasoning in one efficient hybrid Mamba-Transformer MoE for document, media and agentic computer-use workloads.
- **Provider / access:** NVIDIA Build API (`nvidia/nemotron-3-nano-omni-30b-a3b-reasoning`, free endpoint, OpenAI-compatible); checkpoints on Hugging Face (BF16/FP8/NVFP4); OpenCode Zen ID unconfirmed at research time.
- **Release / knowledge:** 2026-04-28 release (NVIDIA developer blog + Build model card, verified); knowledge cutoff undisclosed; English-only per model card
- **IDs:** `nvidia/nemotron-3-nano-omni-30b-a3b-reasoning` (Build/NIM)
- **Context window:** 262,144 (256K nominal) total; 65,536 max output (Build model card, verified); trained on a 16K→49K→262K progressive schedule
- **Modalities:** Text, image, video, audio in (C-RADIOv4-H vision + Parakeet-TDT audio encoders, early-fusion training); text out; reasoning on with budget control; tool calling + JSON mode + transcription timestamps (Build card, verified)
- **Pricing (as of 2026-10-07):** $0 via NVIDIA Build free API endpoint (verified); open checkpoints for self-host (NVIDIA Nemotron Open Model License — enterprise-friendly, on-prem allowed); no verified per-token paid price found
- **Architecture:** Hybrid Mamba + Transformer MoE, 30B total / 3B active, unified text decoder, Conv3D + Efficient Video Sampling token reduction (technical report arXiv:2604.24954, verified); open weights (Nemotron license, not Apache)

### Raw benchmarks found

> All numbers vendor-reported (NVIDIA technical report + developer blog, Apr 2026) unless marked otherwise. Reasoning-on scores cited where both modes published.

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found** (closest: **42.2% TauBench V2 Telecom**, vendor table)
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
- OSWorld (agentic computer use): **47.4%** (reasoning on; vs Nano V2 VL 11.1, Qwen3-Omni 29.0); **ScreenSpot 90.3 / v2 93.4 / Pro 57.8–59.3** (vendor tables)

Reasoning / knowledge:

- GPQA Diamond: **73.1% GPQA (no tools)** (vendor text-benchmark table)
- HLE: **no verified public score found**
- LCR / MLCR: **35.9% AA-LCR** (vendor table — weak)
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **77.3% MMLU-Pro, 82.1% AIME25 (no tools), 74.2% IFBench** (vendor table); AA Index proper: no verified public score found
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **63.2%** (vendor text-benchmark table)
- SciCode / AA-SciCode: **32.0%** (vendor table — weak)
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- No verified MRCR / RULER / GraphWalks retrieval score found; 262K window verified via spec only (MMLongBench-Doc 57.5 exercises long-document reasoning but is an accuracy, not a retention, number).

### Normalized scores (1–100)

- **Tool use: 68/100.** OSWorld 47.4 + ScreenSpot-Pro ~58 show genuine computer-use ability for a 30B model; capped by no Terminal-Bench/Tau3/GDPval/Claw rows anywhere.
- **Reasoning: 74/100.** GPQA 73.1 + AIME 82.1 + MMLU-Pro ~77 keep the text backbone respectable; capped by no HLE number and weak AA-LCR 35.9.
- **Context window: 74/100.** 262K verified (256K nominal) with a staged long-context recipe; capped with no measured retention and no 1M path.
- **Multimodal: 92/100.** Full text/image/video/audio input — the only 30B-class open model covering all four — with VoiceBench 89.4, DailyOmni 74.1, Video-MME 72.2, MMMU 70.8 and DocVQA 95.6 measured; capped by text-only output.
- **Coding: 66/100.** LiveCode 63.2 is serviceable; capped by SciCode 32.0 and zero SWE-bench/Terminal-Bench rows — a media/document agent, not a code flagship.
- **Cost efficiency: 95/100.** $0 Build endpoint plus open weights for self-host; capped for English-only coverage and free-tier rate limits rather than a durable $0 Zen-style tier.
- **Overall Score: 75/100.** Mean of the five quality dims (68+74+74+92+66)/5 = 74.8 → 75; best fit as the open omni-modal subagent — documents, video/audio understanding and computer use at 30B cost, paired with a stronger coder for engineering loops.

---

## Signature

- Provided by: **Muse Spark 1.3 (meta/muse-spark-1.3)** — 2026-10-07
- Method: public internet research (NVIDIA developer blog 2026-04-28, Nemotron 3 Omni technical report arXiv:2604.24954, HF release blog, NVIDIA Nemotron docs training recipe + architecture pages, Build/NIM model cards); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
