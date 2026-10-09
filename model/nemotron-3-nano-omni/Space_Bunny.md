# Nemotron 3 Nano Omni — findings by Space Bunny

- Source: NVIDIA (`nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3 Nano Omni (Nemotron-3-Nano-Omni-30B-A3B)
- **Short description:** NVIDIA's **first natively audio-capable Nemotron multimodal model** — the first in the Nemotron series to accept audio alongside text, images and video. A 30B-total / 3B-active hybrid MoE (Mamba-2 + Transformer) built on the Nemotron 3 Nano 30B-A3B backbone with a C-RADIOv4-H vision encoder and a Parakeet-TDT-0.6B-v2 audio encoder. Top use cases per NVIDIA: **real-world document understanding, long audio-video comprehension, and agentic computer use**, plus multimodal sub-agent reasoning. NVIDIA calls it the most cost-efficient open video-understanding model on MediaPerf and the highest-throughput model in its class.

> **Routing note (`RULES.md` voice check — model stays under `model/`):** this model's modalities say "audio", but it is **not** a voice/speech model. Audio is **input-only, and one of four co-equal input modalities** (text, image, video, audio); **output is text only**. It is not a realtime voice API, not TTS/STT-first, and has no voice-assistant audio I/O. It therefore correctly belongs under `model/`, not `models_voice/`.

- **Provider / access:** Hugging Face `nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-{BF16,FP8,NVFP4}` (open weights + released training data, pipelines and code: Nemotron-Image-Training-v3, ~6.9M samples; Megatron-Bridge training code; NeMo-RL guide). NVIDIA NIM API. **OpenRouter `nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free`** — a zero-cost free variant accepting text, image, video and audio input. Self-hostable via vLLM. No OpenCode Zen ID found.
- **Release / knowledge:** Technical report **arXiv:2604.24954v1, 27 Apr 2026**. Knowledge cutoff: not disclosed.
- **IDs:** `nvidia/nemotron-3-nano-omni-30b-a3b-reasoning` (OpenRouter); `Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16` (HF)
- **Context window:** **262,144 tokens max** (raised from 128K on the Nemotron Nano V2 VL predecessor). Verified in NVIDIA's own architecture documentation and in the technical report's Stage 6 SFT schedule. Note the sibling **text-only** Nemotron 3 Nano 30B-A3B LLM reaches 1M — that figure does **not** transfer to this Omni variant, whose context is 262K.
- **Modalities:** **Text, image, video, and audio in → text out.** Vision: C-RADIOv4-H encoder with **dynamic resolution** (native aspect ratio preserved; 1,024–13,312 visual tokens per image, i.e. 512×512 to 1840×1840 for square images) plus Conv3D temporal compression (every 2 frames fused → 2× token reduction) and optional Efficient Video Sampling. Audio: Parakeet-TDT-0.6B-v2 FastConformer, 16 kHz mono, ~12.5 tokens/second (~80 ms/token), 30-second clip segmentation; **trained on 0.5 s to 20 min audio**, with the 262K context able to hold **over 5 hours** of audio. Visual, audio and text tokens are **interleaved in temporal order** for joint cross-modal reasoning. Reasoning: on/off modes plus an adjustable reasoning budget (measured gains, e.g. MathVista-Mini 80.3 → 82.8). Tool calls / function calling: supported (per the OpenRouter/NVIDIA listing).
- **Pricing (as of 2026-10-09):** **Free tier: $0** via the OpenRouter `:free` variant (`nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free`) and third-party listings advertising zero-cost inference across all four input modalities. Treat as **time-limited and rate-limited**, with the usual inference-provider privacy caveat. **No sustained paid per-token rate was verified** in this research; cost is therefore scored primarily on the free tier plus NVIDIA's own hardware-cost efficiency numbers.
- **Architecture:** Hybrid MoE, **30B total / 3B active**, Mamba-2 sequence/memory layers interleaved with Transformer reasoning layers; a single unified text decoder is the reasoning core for all modalities. Vision encoder C-RADIOv4-H (high-res variant) → MLP vision adaptor; audio encoder Parakeet-TDT-0.6B-v2 (extended via Granary ASR and Music Flamingo) → MLP audio adaptor; text tokenizer. Trained in 7 SFT stages (16K → 48K → 256K progressive context scaling) then RL: MPO (DPO + BCO), Text-RL, Image-RL, Omni-RL, Text-RL-2 using GSPO on NVIDIA B200/H100 clusters. **466.9B training tokens across 434.1M samples.** Released in **BF16 (61.5 GB, 16.00 bpw), FP8 (32.8 GB, 8.5 bpw), and NVFP4 (20.9 GB, 4.98 bpw)** — median accuracy drop **under 1%** vs BF16 for both FP8 and NVFP4.

### Raw benchmarks found

> All figures are from NVIDIA's own technical report (arXiv:2604.24954v1, 27 Apr 2026). Where the report gives both reasoning-off and reasoning-on numbers, both are listed. The comparison columns are NVIDIA's own selection (Nemotron Nano V2 VL, Qwen3-Omni, Qwen3.5-Omni).

Agent / tool use:

- TauBench V2 (Telecom): **42.7%** (vs its own text LLM backbone 42.2%; Qwen3-Omni not reported). This is the *only* agentic-tool benchmark in the report.
- OSWorld: **47.4%** with reasoning on (vs Nemotron Nano V2 VL 11.1%, Qwen3-Omni 29.0%) — genuine agentic computer-use capability
- ScreenSpot-Pro: **59.3% / 57.8%** (reasoning off/on; vs Qwen3-Omni 59.7%)
- ScreenSpot: **90.3% / 89.3%**; ScreenSpot-v2: **93.4% / 92.8%** (both far above Qwen3-Omni's 39.4% / 41.7%)
- IFBench (prompt): **74.2%** (text; vs text LLM backbone 71.5%)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found
- AA Harvey LAB / AA-Briefcase / AA Agentic Index: no verified public score found

Reasoning / knowledge:

- GPQA Diamond (no tools): **72.2%** (avg of 4 runs; vs its own text backbone 73.0%, Qwen3-Omni 73.1%)
- MMLU-Pro: **77.3%** (vs text backbone 78.3%, Qwen3-Omni 61.6%)
- AIME 2025 (no tools): **82.1%** (Pass@1 avg of 8 runs; vs text backbone 89.1%, Qwen3-Omni 73.7%)
- **AA-LCR: 41.0%** (vs its own text backbone 35.9%) — the only long-context retrieval measurement, and notably weak
- HLE / HLE w/ tools: no verified public score found
- CritPt / Omniscience / MLCR: no verified public score found
- Artificial Analysis Intelligence Index: no verified public score found. (benchlm.ai independently scores Nemotron 3 Nano Omni 30B-A3B at **44.58/100, #172 of 228**, marked Estimated across 16 rows.)

Coding:

- LiveCodeBench v5 (07/24–05/25): **63.2%** (vs its own text backbone 68.3%) — the report is explicit that adding modalities *reduced* coding score
- SciCode: **32.0%** (vs text backbone 33.3%, Qwen3-Omni 33.3%)
- SWE-bench Verified / SWE-bench Pro / DeepSWE / Vibe Code Bench: no verified public score found
- Terminal-Bench: no verified public score found
- Coding Index: no verified public score found

Long context:

- **262,144 tokens** max (up from 128K on the predecessor). Stage 6 SFT targeted **ultra-long documents spanning 10 to 100+ pages**, including reasoning over text, charts and complex tables (academic papers, financial reports, presentations) — 34.0B tokens of long-context data.
- Retrieval evidence is thin and **disappointing**: **AA-LCR only 41.0%**, barely above its own 30B text backbone's 35.9% and well below the ~68–82% posted by frontier models.
- Long-form audio: **TED-LIUM Longform WER 3.11%**; audio context capacity stated as **over 5 hours** within the 262K window.
- No MRCR / RULER / GraphWalks numbers.

Multimodal — vision (Table 7, reasoning off / reasoning on):

- MMMU (val): **55.2% / 70.8%** (vs Qwen3-Omni 55.3/67.8, Qwen3.5-Omni 75.6/76.9)
- MathVista-Mini: **71.9% / 82.8%** (vs Qwen3-Omni 69.0/75.5, Qwen3.5-Omni 80.0/82.9)
- MMLongBench-Doc: **46.1% / 57.5%** (vs Qwen3-Omni 32.1/38.0, Qwen3.5-Omni 49.5/53.6) — **best in NVIDIA's comparison set**
- OCRBench: **88.3% / 86.6%**; OCRBenchV2 (EN/ZH): **65.8/52.0 → 67.0/52.7**
- ChartQA (Test) **89.9% / 90.3%**; DocVQA (Test) **93.3% / 95.6%**; AI2D **88.5% / 88.5%**; TextVQA **85.1% / 81.0%**; InfoVQA **83.6% / 86.8%**
- OCR-Reasoning: **22.2% / 54.14%** (reasoning off is very low)
- CharXiv (RQ/DQ): **49.1/81.9 → 63.6/88.9** (vs Qwen3-Omni 41.7/76.5, Qwen3.5-Omni 61.1/-)
- RefCOCO: **80.6% / 90.5%**; TreeBench **43.7% / 51.6%**; CV-Bench **84.2% / 84.0%**
- VideoMME (w/o sub): **70.8% / 72.2%** (vs Qwen3-Omni 66.0/63.0, Qwen3.5-Omni 70.5/77.0)

Multimodal — audio (Table 8; ASR measured in word error rate, lower is better):

- **OpenASR average WER: 5.95%** (vs Qwen3-Omni 6.55% — NVIDIA's ASR is better). Per-corpus: AMI 11.09, Earnings22 11.27, GigaSpeech 9.66, LibriSpeech clean 1.57, LibriSpeech other 2.96, SPGISpeech 1.98, TED-LIUM 3.44, VoxPopuli 5.60
- TED-LIUM Longform WER: **3.11%** (Qwen3-Omni 2.4%, Qwen3.5-Omni –)
- MMAU average: **74.6%** (Music 74.2, Audio 76.9, Speech 72.8; vs Qwen3-Omni 77.5, Qwen3.5-Omni 80.4 — NVIDIA trails here)
- **VoiceBench average: 89.4%** (reasoning on; vs Qwen3-Omni 88.8, Qwen3.5-Omni 87.8 — best in set). Sub-scores: IFEval 88.7, BBH 91.1, AdvBench 100, AlpacaEval 95.0, CommonEval 91.3, WildVoice 91.7, OpenBookQA 93.0, MMSU 82.3, SD-QA 71.4

Multimodal — audio-visual (Table 9):

- DailyOmni: **74.5%** reasoning off / **74.1%** reasoning on (vs Qwen3-Omni 71.9, Qwen3.5-Omni 81.8 — NVIDIA trails Qwen3.5-Omni)
- WorldSense: **55.2% / 55.4%** (vs Qwen3-Omni 54, Qwen3.5-Omni 57.8)

Efficiency (NVIDIA-measured, NVIDIA B200):

- **>500 output tokens/s** single-stream at concurrency 1; **5,000 output tokens/s** at maximum concurrency on a single B200 for a multi-document workload
- TTFT ~**1.3 s** on multi-document workloads (vs **>2.5 s** for Qwen3-Omni)
- **3×** single-stream output throughput vs Qwen3-Omni; **9×** output tokens/s per GPU at fixed interactivity
- vs predecessor Nemotron Nano V2 VL: **3×** throughput at same interactivity, **2×** single-stream output throughput
- Token reduction: a 512-frame video produces ~**141k** input tokens baseline → ~**75k** with Conv3D (−47%) → ~**42k** with Conv3D + EVS at q=0.5 (−70%); TTFT 7969 ms → 5984 ms (Conv3D) → 5313 ms (Conv3D+EVS), a 33% cut for ~0.5 pt average accuracy
- NVIDIA reports ~9.2× greater effective system capacity vs comparable open omni models on video reasoning, ~7.4× on multi-document workloads, "highest throughput across every task" in MediaPerf, and "most cost-efficient open video understanding model on MediaPerf"
- Semaphore/qualitative: NVIDIA notes this was the **cheapest open video-understanding model on MediaPerf**

### Normalized scores (1–100)

- **Tool use: 55/100.** Genuine and verifiable agentic computer use — OSWorld 47.4%, ScreenSpot-v2 93.4%, ScreenSpot-Pro 59.3% — plus TauBench V2 Telecom 42.7% and IFBench 74.2%. But the published agentic surface is very thin: **one** tau-bench domain, **no** GDPval-AA, no Terminal-Bench, no Claw-Eval/Toolathlon/MCP-Atlas, and no AA agentic index. Mid-band, not frontier.
- **Reasoning: 68/100.** GPQA Diamond 72.2%, MMLU-Pro 77.3%, AIME25 82.1% and IFBench 74.2% are competent mid-tier numbers — and notably this is an *omni* model whose text scores **slightly trail its own text-only backbone** (LiveCodeBench 63.2 vs 68.3; AIME25 82.1 vs 89.1), which is the honest cost of adding modalities. No HLE, CritPt or Omniscience data; benchlm's independent 44.58 overall supports the mid-band read.
- **Context window: 78/100.** **262,144 tokens** verified — upper-mid tier, trained on 10–100+ page documents with 34B tokens of long-context data. Not higher because the one measured retrieval benchmark, **AA-LCR at 41.0%**, is weak, and there is no MRCR/RULER/GraphWalks evidence. The >5-hour audio capacity is a genuine asset but is not a text-retrieval score.
- **Multimodal: 88/100.** The standout dimension and the reason to pick this model: **text + image + video + audio in, text out**, with interleaved cross-modal token ordering. Best-in-comparison-set document understanding (MMLongBench-Doc 57.5%), best VoiceBench (89.4%) and best OpenASR WER (5.95%) in NVIDIA's set, plus DailyOmni 74.5% and WorldSense 55.2%. Capped just below the top by MMAU 74.6%, DailyOmni and WorldSense trailing Qwen3.5-Omni, and text-only output.
- **Coding: 55/100.** LiveCodeBench v5 63.2% and SciCode 32.0% are the only coding numbers, both **below** the model's own text-only backbone (68.3% and 33.3%). No SWE-bench, no DeepSWE, no Terminal-Bench, no Coding Index. This is a perception model, not a coding model.
- **Cost efficiency: 95/100.** A genuine **$0 free tier** (OpenRouter `:free`, zero-cost inference advertised across all four input modalities), plus NVIDIA's hardware-level numbers — >500 tok/s single-stream, 5,000 tok/s at full concurrency on one B200, 1.3 s multi-document TTFT, 3×/9× Qwen3-Omni throughput, -70% video token reduction, and "most cost-efficient open video understanding model on MediaPerf". NVFP4 at 20.9 GB with <1% accuracy drop also makes cheap self-hosting practical. Held at 95 rather than 100 because the free tier is **time-limited and rate-limited** with inference-provider data-retention caveats, and no sustained paid per-token rate was verified.
- **Overall Score: 69/100.** Best fit: **single-model multimodal perception agents** — document intelligence, long audio-video comprehension, GUI/computer-use sub-agents, and multimodal sub-agent reasoning inside a larger agent loop — where one 3B-active model replacing a separate vision, video and ASR stack is worth more than any text-benchmark score. Do not pick it for hard coding or frontier reasoning; use a dedicated model for those.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-09
- Method: public internet research centered on the **official technical report** `arXiv:2604.24954v1` (NVIDIA, 27 Apr 2026) — full architecture spec, complete training-recipe tables, all four benchmark tables (visual, audio, audio-visual, text-only), the Conv3D/EVS ablations and the quantization study — cross-checked against NVIDIA's own Nemotron 3 Nano Omni architecture documentation hub, the NVIDIA Developer Nemotron model index, the OpenRouter model page for the free variant and input/output modality list, and benchlm.ai's independent profile. Applied the `RULES.md` voice-routing test explicitly and documented why this audio-input model stays under `model/`. Reported NVIDIA's own finding that multimodal training slightly *reduced* its text and coding scores rather than hiding it. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Nemotron_3_Nano_Omni_Retest.md`, using the same headings — worth re-scoring once AA publishes a full Intelligence Index row and independent tau-bench / Terminal-Bench / SWE-bench numbers exist, since the published agentic and coding surface is currently almost entirely missing.