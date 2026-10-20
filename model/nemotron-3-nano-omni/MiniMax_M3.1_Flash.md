# Nemotron 3 Nano Omni — findings by MiniMax M3.1 Flash

- Source: NVIDIA (Nemotron 3 Nano Omni 30B A3B), `nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16`
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3 Nano Omni 30B A3B (Reasoning)
- **Short description:** NVIDIA's small multimodal omni model — a 31B/3B-active Mamba2-Transformer hybrid with a CRADIO v4-H vision encoder and a Parakeet speech encoder, taking text, image, video and audio input at $0 on NVIDIA Build, with 237 tok/s and a VoiceBench #4 placement.
- **Provider / access:** Hugging Face `nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16` (plus `-FP8`, `-NVFP4`), NVIDIA Build endpoint `nvidia/nemotron-3-nano-omni-30b-a3b-reasoning` (**$0/$0**), OpenRouter free route `nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free`, DeepInfra ($0.20/$0.80), Vultr ($0.10/$0.25), Crusoe ($0.30/$1.83). **ID note:** the upstream id is `-Nano-Omni-…`, not the `-Nano-30B-A3B-Omni` form; `nvidia/NVIDIA-Nemotron-3-Nano-30B-A3B-BF16` is the separate **text-only** backbone. **Not on OpenCode Zen** — Zen's closest omni slot is `nemotron-3.5-super-vl-free` (text+image, not audio/video).
- **Release / knowledge:** **2026-04-28** (NVIDIA Build card, NGC, models.dev) vs **2026-04-29** (AA) — conflict noted. Knowledge cutoff not published.
- **IDs:** `nvidia/nemotron-3-nano-omni-30b-a3b-reasoning` (NVIDIA Build / OpenRouter), `nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16` (HF).
- **Context window:** **262,144** tokens (NVIDIA spec block) vs **256,000 / 256k** (endpoint registry, AA) — conflict flagged. Max output 65,536 on hosted routes; NVIDIA recommends 20,480 output in thinking mode (up to 131,072 for hard reasoning).
- **Modalities:** input video (≤2 min, ≤128 frames @1 fps for 1080p), audio (≤1 hour), image and text; output text; English only; function calling supported.
- **Pricing (as of 2026-10-20):** **$0/M in and out on NVIDIA Build** and on the OpenRouter `:free` route; paid routes $0.10–$0.30 in and $0.25–$1.83 out.
- **Architecture:** Mamba2-Transformer hybrid MoE, `NemotronH_Nano_Omni_Reasoning_V3`; 31B total / ~3B active (33.0B including encoders per the card's specification block); CRADIO v4-H vision encoder + Parakeet speech encoder.

### Raw benchmarks found

> NVIDIA's own build card plus BenchLM's independent composite; Artificial Analysis adds the low-end independent rows.

Agent / tool use:

- Tau2-bench: **45.3%** (NVIDIA technical report) vs **45.32%** (AA) · OSWorld: **47.4%** (NVIDIA card) · Terminal-Bench 2.1: **6.7%** (AA) · Terminal-Bench Hard: **8.3%** (AA)
- GDPval-AA: **229.86** (AA) · Bench Tool-Agent-User Evaluation: no verified public score found
- Tool calling: supported per the NVIDIA capabilities table

Reasoning / knowledge:

- GPQA Diamond: **46.9%** (AA) vs **72.2%** (BenchLM, its own row) — conflict flagged
- HLE: **4.8%** (AA) · MMLU-Pro: **77.3%** (BenchLM) · AIME 2025: **82.1%** (BenchLM) · IFBench: **63.2%** (AA) / **74.2%** (BenchLM)
- Artificial Analysis Intelligence Index: **10 (estimated)** · CritPt: **0%** (AA) · AA-LCR: **39.7%** (AA) · Omniscience Accuracy / Hallucination Rate: **15.2% / 85.7%** (AA) · Output speed **237.6 tok/s** (#5/64), TTFT 0.74s

Coding:

- LiveCodeBench v5: **63.2%** (BenchLM) · SciCode: **32%** (BenchLM) · SWE-bench Verified: no verified public score found (named in the card's metric list with no number)

Multimodal:

- MMMU-Pro: **53.2%** (AA) · MMMU: **70.8%** (BenchLM) · MathVista-MINI: **82.8%** · CVBench2D: **83.95** · OCRBenchV2 (EN): **67.04** · ScreenSpot Pro: **57.8%** (BenchLM) · Video-MME: **72.2%** (NVIDIA card) / **72.2%** (BenchLM) · CharXiv Reasoning: **63.6%** (NVIDIA) / **76.3%** (BenchLM) · OmniDocBench: **75.8%**
- VoiceBench: **89.39 overall, #4 of 44**; IF-Eval **88.66**, AdvBench **100** (BenchLM)

Long context:

- No MRCR / RULER measurement published for this model.

### Normalized scores (1–100)

- **Tool use: 40/100.** τ²-bench 45.3% and OSWorld 47.4% are low-mid, Terminal-Bench 2.1 is 6.7% and GDPval-AA normalizes to just 229.9 — this is a perception-first model, not an agent finisher.
- **Reasoning: 48/100.** GPQA 46.9% (AA) / 72.2% (BenchLM), HLE 4.8%, AA-LCR 39.7% and an AA Intelligence Index of 10 place it in the lower band; MMLU-Pro 77.3% and AIME 2025 82.1% come from a single ledger that disagrees with AA on GPQA.
- **Context window: 68/100.** 256K–262K is a mid-tier window and no retrieval measurement was published, so the 200K–500K band midpoint applies.
- **Multimodal: 92/100.** Text, image, **video and audio** input with text out — the top multimodal tier by construction, with VoiceBench #4 of 44 and Video-MME 72.2% backing the audio/video path.
- **Coding: 42/100.** LiveCodeBench v5 63.2% and SciCode 32% are low-mid, and no SWE-bench figure exists at all.
- **Cost efficiency: 100/100.** The evaluated route is $0 on NVIDIA Build and on the OpenRouter free route — with the caveat that NVIDIA's trial terms log usage for product improvement, so no confidential data.
- **Overall Score: 58/100.** Mean of the five quality dims = (40 + 48 + 68 + 92 + 42) / 5 = 58.0 → **58**. Best fit: free, fast on-device or edge perception pipelines (video, audio, screenshot understanding) — not reasoning or coding work.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-20
- Method: public internet research (NVIDIA Build model card and capabilities table, NVIDIA Hugging Face model card, Artificial Analysis, BenchLM, models.dev, OpenRouter API, OpenCode Zen catalogue); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Nemotron_3_Nano_30B_A3B.md`, using the same headings.
