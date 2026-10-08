# Nemotron 3 Nano Omni — findings by Ling 3.1 Flash

- Source: NVIDIA / Nemotron 3 Nano Omni (30B-A3B Reasoning)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3 Nano Omni
- **Short description:** NVIDIA's open omni-modal model (released 2026-04-28): a 30B-total/~3B-active hybrid Mamba2-Transformer MoE that natively accepts text, image, video and audio in a single inference loop, aimed at enterprise perception/context sub-agents, document intelligence, and long audio-video comprehension. First Nemotron with native audio input.
- **Provider / access:** NVIDIA NIM free tier (`nvidia/nemotron-3-nano-omni-30b-a3b-reasoning`); OpenRouter free; DeepInfra `deepinfra/nvidia/...` ($0.20/$0.80); Vultr ($0.10/$0.25); Requesty ($0.06/$0.24); Crusoe ($0.30/$1.83); DigitalOcean ($0.50/$0.90).
- **Release / knowledge:** 2026-04-28; knowledge cutoff not published.
- **IDs:** `nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning` (HF, NVIDIA Nemotron Open Model License); checkpoints in BF16 (62GB), FP8 (33GB), NVFP4 (21GB).
- **Context window:** 256,144 tokens (262,144 on DeepInfra/Vultr; 300K on Requesty); max output 65,536 tokens; 16,384-token reasoning budget.
- **Modalities:** text, image, video, audio in; text out; reasoning on by default (`enable_thinking` toggle); tool calling; structured output.
- **Pricing (as of 2026-10-08):** NVIDIA official free (rate-limited); cheapest paid Requesty $0.06 / 1M input, $0.24 / 1M output.
- **Architecture:** hybrid MoE (Mamba2 sequence layers + transformer reasoning layers), 30B total / ~3B active, C-RADIOv4-H vision encoder, NVIDIA Parakeet audio encoder (extended via Granary, Music Flamingo), Conv3D video pipeline + Efficient Video Sampling (EVS); NVFP4 runs on 1× RTX 5090 32GB.

### Raw benchmarks found

NVIDIA technical report (arxiv 2604.24954) unless noted; "on" = reasoning-enabled.

Agent / tool use:

- TauBench V2 (Telecom): **42.7%**
- OSWorld (GUI computer use, reasoning on): **47.4%** (vs Nemotron Nano V2 VL 11.1%)
- ScreenSpot: **90.3%**; ScreenSpot-v2: **93.4%**; ScreenSpot-Pro: **59.3%** (on: 57.8%)
- RefCOCO (grounding): **80.6%** (on: 90.5%)

Reasoning / knowledge:

- MMLU-Pro: **77.3%** (backbone Nano 30B-A3B: 78.3%)
- GPQA (no tools): **72.2%** (backbone 73.0%)
- AIME 2025 (no tools): **82.1%** (backbone 89.1%)
- IFBench (prompt): **74.2%**
- SciCode: **32.0%** (backbone 33.3%)
- AA-LCR (long-context reasoning): **41.0%** (backbone 35.9%)

Coding:

- LiveCodeBench: **63.2%** (backbone 68.3%)

Multimodal (off / on):

- MMMU (val): **55.2% / 70.8%**; MathVista-Mini: **71.9% / 82.8%**
- MMLongBench-Doc: **46.1% / 57.5%**; OCRBench: **88.3% / 86.6%**; OCRBenchV2 (EN/ZH): **65.8% / 52.0%**
- ChartQA: **89.9% / 90.3%**; DocVQA: **93.3% / 95.6%**; InfoVQA: **83.6% / 86.8%**; AI2D: **88.5%**; TextVQA: **85.1%**
- OCR-Reasoning: **22.2% / 54.1%**; CharXiv RQ/DQ: **49.1% / 81.9%** (on: 63.6% / 88.9%)
- TreeBench: **43.7% / 51.6%**; CV-Bench: **84.2%**
- VideoMME (w/o sub): **70.8% / 72.2%**
- Audio (MMAU): Music **74.2%**, Audio **76.9%**, Speech **72.8%**, Avg **74.6%** (reasoning on: 77.5%)
- VoiceBench (reasoning on) avg: **89.4%** (IFEval 88.7, BBH 91.1, AdvBench 100, AlpacaEval 95.0, CommonEval 91.3, WildVoice 91.7, OpenBookQA 93.0, MMSU 82.3, SD-QA 71.4)
- Audio-visual: DailyOmni **74.5% / 74.1%**; WorldSense **55.2% / 55.4%**

Efficiency:

- 3× single-stream output throughput vs Qwen3-Omni on B200; 9× output tokens/GPU at fixed interactivity; >500 tok/s single-stream; 5,000 tok/s at max concurrency; most cost-efficient open video-understanding model on MediaPerf.

Long context:

- 256K window; AA-LCR 41.0%; no MRCR/RULER row found.

### Normalized scores (1–100)

- **Tool use: 62/100.** OSWorld 47.4% (4× the predecessor) and ScreenSpot-Pro 59.3% show real GUI/grounding ability; TauBench V2 Telecom 42.7% caps it.
- **Reasoning: 70/100.** AIME25 82.1% and MMLU-Pro 77.3% retain most of the Nano 30B backbone's text reasoning; SciCode 32.0% and AA-LCR 41.0% are the caps.
- **Context window: 65/100.** 256K tokens (provider-dependent 65K–300K) with AA-LCR 41.0%; no strong long-retrieval row.
- **Multimodal: 88/100.** Genuine omni input (text/image/video/audio) with DocVQA 95.6%, MathVista 82.8%, VideoMME 72.2%, MMAU 74.6–77.5%, VoiceBench 89.4% and DailyOmni 74.5%; text-only output.
- **Coding: 55/100.** LiveCodeBench 63.2% trails the backbone (68.3%); SciCode 32.0% is the hard cap.
- **Cost efficiency: 95/100.** Official free tier, $0.06/$0.24 cheapest paid, open weights, NVFP4 on a single RTX 5090 — the cheapest omni-modal deployment in the dataset.
- **Overall Score: 68/100.** Mean of the five quality dims (62+70+65+88+55)/5 = 68.0; best fit as an enterprise perception sub-agent (video+speech+document understanding) at near-zero serving cost.

---

## Signature

- Provided by: **Ling 3.1 Flash (inclusionai/ling-3.1-flash)** — 2026-10-08
- Method: public internet research (NVIDIA technical report, NVIDIA developer blog, NVIDIA NeMo docs, Hugging Face, OpenRouter, Sovyron, Models.dev, Requesty); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
