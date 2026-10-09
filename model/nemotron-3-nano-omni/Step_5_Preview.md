# Nemotron 3 Nano Omni — findings by Step 5 Preview

- Source: NVIDIA (`nvidia/nemotron-3-nano-omni-30b-a3b-reasoning`; technical report arXiv:2604.24954)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** NVIDIA Nemotron 3 Nano Omni (30B-A3B Reasoning)
- **Short description:** The first Nemotron with native audio input — an omni-modal model that unifies video, audio, image and text understanding in a single 31B Mamba2–Transformer hybrid MoE (~3B active per token), designed to replace fragmented vision+speech+language stacks as the "perception and context sub-agent" inside agentic systems. It pairs the Nemotron 3 Nano 30B-A3B backbone with a C-RADIOv4-H vision encoder and the Parakeet-TDT audio encoder, adds dynamic image resolution and Conv3D temporal video compression (2× fewer video tokens), and stretches context from 128K to 256K. NVIDIA claims best-in-class document intelligence (MMLongBench-Doc, OCRBench-V2), leading video/audio understanding (WorldSense, DailyOmni, VoiceBench), and a big efficiency story: 3× Qwen3-Omni's single-stream output throughput, ~9.2× effective system capacity for video reasoning at fixed interactivity, and the lowest inference cost for video-level tagging on MediaPerf. It runs on a single RTX 5090 at NVFP4.
- **Provider / access:** Open weights (BF16 / FP8 / NVFP4 + training data and code) on Hugging Face; NVIDIA Nemotron Open Model License (enterprise-friendly, on-prem); NVIDIA build.nvidia.com API; docs.nvidia.com NIM.
- **Release:** 2026-04-27 (report), GA checkpoint `…-Reasoning-BF16`.
- **Context window:** 256K tokens (262,144); progressive training schedule 16K → 49K → 262K.
- **Modalities:** Video (mp4 ≤2 min; 1 FPS/128 frames at 1080p, 2 FPS/256 at 720p), audio (wav/mp3 ≤1 hour; ~12.5 tokens/sec), image (jpeg/png), text in → text out. Reasoning on by default (`enable_thinking` toggle).
- **Pricing (as of 2026-10-09):** open weights — BF16 62 GB (1× H100), FP8 33 GB (1× L40S), NVFP4 21 GB (1× RTX 5090 32 GB); hosted API on build.nvidia.com.
- **Architecture:** Hybrid MoE Mamba2 + Transformer, 31B/3B active, C-RADIOv4-H + Parakeet encoders with MLP projectors.

### Raw benchmarks found

NVIDIA report / model card (reasoning-off unless noted; vs Nemotron Nano V2 VL):

- Grounding: **CVBench2D 83.95** (78.3)
- Document: **OCRBench-V2 (EN) 67.04** (54.8); MMLongBench-Doc **57.5** (38.0); OCR_Reasoning 54.14 (33.9)
- Computer use: **OSWorld 47.4** (11.1 — a 4.2× jump)
- Chart reasoning: CharXiv Reasoning 63.6 (41.3); Math: MathVista_MINI 82.8 (75.5)
- Video QA: VideoMME **72.2**; Video+Audio QA: DailyOmni **74.52** (74.1 reasoning-on), WorldSense **55.4** (vs Qwen3-Omni 54.0, Qwen3.5-Omni Flash 57.8)
- Speech instruction following: VoiceBench **89.39** avg (IFEval 88.7, BBH 91.1, AdvBench 100, AlpacaEval 95.0, CommonEval 91.3, WildVoice 91.7, OpenBookQA 93.0, MMSU 82.3, SD-QA 71.4)
- ASR: OpenASR avg **5.95 WER** (Qwen3-Omni 6.55); TED-LIUM long-form 3.11 WER; LibriSpeech clean 1.57; GigaSpeech 9.66
- Audio understanding: MMAU **74.6** avg (music 74.2, audio 76.9, speech 72.8)
- Quantization: FP8/NVFP4 within 0.4 points of BF16 across 9 multimodal benchmarks

Text-side benchmarks (MMLU, GPQA, SWE-bench, Terminal-Bench) for this Omni checkpoint: **no verified public score found** in the release materials.

### Normalized scores (1–100)

- **Tool use: 55/100.** OSWorld-Verified 47.4% is strong agentic computer use for a 3B-active model (4.2× its predecessor), and the whole design targets GUI/document agent sub-agents — but no Terminal-Bench, τ³, MCP Atlas, Toolathlon or GDPval number exists, so the dimension rests on one eval.
- **Reasoning: 55/100.** Reasoning-mode multimodal scores are good for its class (CharXiv 63.6, MathVista 82.8, VoiceBench BBH 91.1, MMSU 82.3) but the release publishes no GPQA, HLE, ARC-AGI or text-reasoning figure for this checkpoint, so mid-band on evidence.
- **Context window: 72/100.** 256K (262,144) is the 200K–500K band (65–84); the long context is explicitly trained for (progressive 16K→262K schedule) and handles 5+ hours of audio context, but no RULER/MRCR/AA-LCR curve is published.
- **Multimodal: 90/100.** Text + image + video + audio in → text out is the 90–100 band, and it backs it: best-in-class document intelligence (OCRBench-V2 67.0, MMLongBench-Doc 57.5), DailyOmni 74.5, VoiceBench 89.4, OpenASR 5.95 WER and Conv3D-compressed video — a complete omni stack at 3B active. Docked within the band because WorldSense 55.4 and MMAU 74.6 trail Qwen3.5-Omni on the same tests.
- **Coding: 40/100.** No SWE-bench, LiveCodeBench or Terminal-Bench score is published for the Omni checkpoint — a genuine gap (its text backbone Nemotron 3 Nano's numbers are not in this release), so a structural low-mid score with "no verified public score found" noted.
- **Cost efficiency: 97/100.** Open weights under an enterprise-friendly license at 21 GB (NVFP4) on a single RTX 5090, MediaPerf's lowest inference cost for video-level tagging, and ~9.2× effective video-reasoning capacity vs comparable open omni models — the methodology's top tier for a 30B-class model.
- **Overall Score: 62/100.** Best-fit recommendation: the cheapest single-model replacement for a vision+speech+text pipeline — document intelligence, meeting/video understanding and GUI agents on one 5090; pair it with a frontier text/coding model since it publishes none of those evals.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-09
- Method: public internet research (arXiv:2604.24954 technical report, NVIDIA research page and developer blog, Hugging Face model cards, NVIDIA Nemotron docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Nemotron_3_Nano.md`, using the same headings.
