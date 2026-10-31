# Nemotron 3 Nano Omni — findings by GPT-6 Luna

- Source: NVIDIA / Nemotron 3 Nano Omni 30B-A3B Reasoning
- Date: 2026-10-31 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** NVIDIA Nemotron 3 Nano Omni 30B-A3B Reasoning.
- **Short description:** NVIDIA's open-weight, 30B-total/3B-active multimodal MoE model. Its hybrid Mamba-Transformer language backbone is paired with C-RADIOv4-H vision and Parakeet-TDT-0.6B-v2 audio encoders. It accepts text, image, video, and audio inputs and returns text. [1][2]
- **Provider / access:** NVIDIA; released under the NVIDIA Open Model Agreement. BF16, FP8, and NVFP4 checkpoints are available from NVIDIA on Hugging Face. NVIDIA Build lists a hosted trial endpoint; hosted prices vary by provider, while the weights can be self-hosted. [1][2]
- **Release / knowledge:** NVIDIA lists the Build and Hugging Face release as 2026-04-28. No exact knowledge-cutoff date was verified; NVIDIA's reported training-data collection period (2019–2025) is not itself a cutoff claim. [1]
- **IDs:** NVIDIA Build/NIM ID `nvidia/nemotron-3-nano-omni-30b-a3b-reasoning`; checkpoint family `nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-{BF16,FP8,NVFP4}`. [1][2]
- **Context window:** 262,144 tokens in NVIDIA's technical report; the NIM card describes this as up to 256K. Hosted providers can impose a lower limit (Artificial Analysis lists 65.5K for DigitalOcean and 262K for Crusoe). [1][2][5]
- **Modalities / architecture:** Text, image, video, and audio in; text out. The NIM card specifies English. Hybrid Mamba2-Transformer MoE with 30B total and 3B active parameters; not a speech-generation or realtime voice model. [1][2]
- **Pricing:** No single universal hosted tariff: Artificial Analysis reports DigitalOcean at $0.50/1M input and $0.90/1M output tokens (its 7:2:1 blended price is $0.26/1M); self-hosting has separate hardware costs. NVIDIA's page describes the hosted API as a trial and does not give a universal per-token price. [1][5]

### Raw benchmarks found

NVIDIA's exact-model technical report (arXiv:2604.24954v2, dated 2026-05-11) reports the following. Scores are reproduced as published; reasoning-on/off settings and benchmark versions are retained. [2]

- **Text reasoning:** MMLU-Pro 77.3; GPQA (no tools) 72.2; AIME 2025 (no tools) 82.1; IFBench 74.2; AA-LCR 41.0; τ²-bench V2 (Telecom) 42.7. [2]
- **Coding:** LiveCodeBench v5 (2024-07 to 2025-05) 63.2; SciCode 32.0. [2]
- **Vision / documents:** MMLongBench-Doc 46.1 reasoning-off / 57.5 reasoning-on; CharXiv RQ/DQ 49.1/81.9 off and 63.6/88.9 on; MMMU validation 55.2 off / 70.8 on; MathVista-Mini 71.9 off / 82.8 on. [2]
- **GUI / computer use:** ScreenSpot-Pro 59.3 reasoning-off / 57.8 reasoning-on; OSWorld 47.4 reasoning-on. [2]
- **Video and audio:** Video-MME without subtitles 70.8 off / 72.2 on; OpenASR average 5.95 WER (lower is better); MMAU average 74.6; VoiceBench average 89.4; DailyOmni 74.5 off / 74.1 on; WorldSense 55.2 off / 55.4 on. [2][3]
- **Independent hosted measurements:** Artificial Analysis reports 230.5 output tokens/s for its tracked DigitalOcean endpoint and identifies the endpoint-specific pricing/context limits above. These are provider measurements, not claims about every deployment or local inference. [4][5]

### Normalized scores (1–100)

- **Tool use: 72/100.** NVIDIA documents function calling; exact-model OSWorld is 47.4 and τ²-bench V2 (Telecom) is 42.7, indicating useful but not consistently strong agent performance. [1][2]
- **Reasoning: 82/100.** Exact-model MMLU-Pro 77.3, GPQA 72.2, and AIME 2025 82.1 support a strong rating, while remaining short of a top-tier frontier result. [2]
- **Context window: 94/100.** The reported 262,144-token maximum is unusually large; hosted limits vary and can be much lower. [1][2][5]
- **Multimodal: 92/100.** Native image, video, and audio understanding is supported by document, GUI, video, ASR, and audio benchmark results; output is text-only. [1][2][3]
- **Coding: 69/100.** LiveCodeBench v5 63.2 and SciCode 32.0 indicate competent but not leading coding performance. [2]
- **Cost efficiency: 72/100.** Open weights, 3B active parameters, and quantized checkpoints enable lower-cost deployment options, but the tracked hosted route is $0.50/$0.90 per million input/output tokens and self-hosting requires substantial hardware. [1][2][5]
- **Overall Score: 81.8/100.** Half-up mean of the five quality dimensions: (72 + 82 + 94 + 92 + 69) / 5 = 81.8; cost efficiency is excluded.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-31
- Method: Three independent exact-model search queries were followed by direct checks of NVIDIA's NIM/model card, the NVIDIA-authored technical report and Hugging Face launch article, and Artificial Analysis's model and provider pages. Exact model IDs, benchmark versions, reasoning settings, release dates, provider-specific prices, and hosted context caps were kept distinct. No scores from the text-only Nemotron 3 Nano backbone or other Nemotron variants were transferred.
- Reference URLs:
  - [1] [NVIDIA NIM model card](https://docs.api.nvidia.com/nim/reference/nvidia-nemotron-3-nano-omni-30b-a3b-reasoning)
  - [2] [NVIDIA Nemotron 3 Nano Omni technical report, arXiv:2604.24954](https://arxiv.org/abs/2604.24954)
  - [3] [NVIDIA launch article on Hugging Face](https://huggingface.co/blog/nvidia/nemotron-3-nano-omni-multimodal-intelligence)
  - [4] [Artificial Analysis model profile](https://artificialanalysis.ai/models/nemotron-3-nano-omni-30b-a3b)
  - [5] [Artificial Analysis provider benchmarks and pricing](https://artificialanalysis.ai/models/nemotron-3-nano-omni-30b-a3b/providers)
