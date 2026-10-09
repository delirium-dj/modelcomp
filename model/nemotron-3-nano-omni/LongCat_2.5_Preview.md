# Nemotron 3 Nano Omni — findings by LongCat 2.5 Preview

- Source: NVIDIA/Nemotron-3-Nano-Omni-30B-A3B
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3 Nano Omni
- **Short description:** NVIDIA's omni-modal open model unifying text, image, video, and audio understanding in a single 30B-A3B hybrid MoE. Designed as a perception sub-agent for enterprise agent systems. Best-in-class on document intelligence (OCRBenchV2, MMlongbench-Doc) and video/audio understanding (WorldSense, DailyOmni, VoiceBench).
- **Provider / access:** NVIDIA NIM (`nvidia/nemotron-3-nano-omni-30b-a3b-reasoning`), Hugging Face (BF16/FP8/NVFP4), OpenRouter (free), Requesty, DigitalOcean. OpenAI-compatible API.
- **Release / knowledge:** 2026-04-28.
- **IDs:** `nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning` (also BF16/FP8/NVFP4 variants)
- **Context window:** 262,144 tokens (256K) — verified via NVIDIA docs, OpenRouter, Serenities AI.
- **Modalities:** Text, Image, Video, Audio input; Text output. Reasoning: yes (thinking mode with budget control). Tool calling: yes (perception sub-agent for agentic workflows).
- **Pricing (as of 2026-10-09):** Free on OpenRouter and NVIDIA. ~$0.05–0.06/1M input, ~$0.20–0.24/1M output (Requesty, DigitalOcean). NVIDIA Nemotron Open Model License.
- **Architecture:** 30B total / 3B active MoE, hybrid Mamba2-Transformer, C-RADIOv4-H vision encoder, Parakeet-TDT-0.6B-v2 speech encoder, 3D convolutions for video with Efficient Video Sampling (EVS). Progressive context scaling 16K → 49K → 262K.

### Raw benchmarks found

Agent / tool use:

- OSWorld: **47.4** (NVIDIA — vs Nemotron Nano V2 VL 11.1, 76.6% improvement)
- CVBench2D: **83.95** (NVIDIA — vs Nemotron Nano V2 VL 78.3)
- Designed as perception sub-agent for enterprise agent systems (NVIDIA docs)
- Computer use agents with 1920×1080 native input resolution (HPCwire)

Reasoning / knowledge:

- Intelligence (PricePerToken): **6.8 / 20th percentile** (standard) / **8.9 / 31st percentile** (thinking)
- MMMU (val): **55.2** (reasoning off) / **70.8** (reasoning on) — vs Qwen3-Omni 75.6/76.9
- GPQA: **39.9 / 17th percentile** (standard) / **75.7 / 50th percentile** (thinking)
- MMLU Pro: **57.9 / 23rd percentile** (standard) / **79.4 / 30th percentile** (thinking)

Coding:

- SciCode: **32.0** (NVIDIA)
- LiveCodeBench: **36.0 / 44th percentile** (standard) / **74.1 / 72nd percentile** (thinking)
- AA Coding Index: **13.8 / #84 of 96**

Long context:

- Context window: **262,144 tokens** (256K) — verified via NVIDIA docs, OpenRouter
- 5000 output tokens/s on multi-document workload (single B200)
- TTFT ~1.3s for multi-document (vs >2.5s for Qwen3-Omni)

Multimodal:

- WorldSense: **55.2** (reasoning off) / **55.4** (reasoning on) — vs Qwen3-Omni 54/57.8
- DailyOmni: **74.5** (reasoning off) / **74.1** (reasoning on) — vs Qwen3-Omni 71.9/73.6
- OCRBenchV2 (EN): **67.04** (NVIDIA — vs Nemotron Nano V2 VL 54.8, 18.26% improvement)
- VoiceBench: leading (NVIDIA)
- Text, Image, Video, Audio input (NVIDIA docs, OpenRouter)
- ~9.2× greater effective system capacity on video reasoning
- ~7.4× greater capacity on multi-document workloads

### Normalized scores (1–100)

- **Tool use: 68/100.** OSWorld 47.4, designed as perception sub-agent for agentic AI. Good computer use and document intelligence. Below frontier on complex agent tasks.
- **Reasoning: 55/100.** Intelligence 6.8/8.9, MMMU 55.2/70.8, GPQA 39.9/75.7. Below average on text reasoning, even in thinking mode. Reasoning is a relative weakness.
- **Context window: 82/100.** 256K token context. Good long-context capability with high throughput (5000 tok/s on B200).
- **Multimodal: 82/100.** Text, Image, Video, Audio input. WorldSense 55.2, DailyOmni 74.5, OCRBenchV2 67.04. Strong omni-modal understanding, best-in-class on document intelligence and video/audio.
- **Coding: 55/100.** SciCode 32.0, LiveCodeBench 36.0/74.1. Below average on coding tasks, trails competitors significantly.
- **Cost efficiency: 95/100.** Free on OpenRouter and NVIDIA. ~$0.05-0.06/$0.20-0.24 per 1M tokens elsewhere. Exceptional value with 9.2× system capacity advantage on video workloads.
- **Overall Score: 68/100.** Mean of Tool (68), Reasoning (55), Context (82), Multimodal (82), Coding (55) = 342/5 = 68.4 → 68. Specialized omni-modal perception sub-agent with best-in-class document/video/audio understanding, but below average on text reasoning and coding.

---

## Signature

- Provided by: **LongCat 2.5 Preview (meituan/longcat-2.5-preview)** — 2026-10-09
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
