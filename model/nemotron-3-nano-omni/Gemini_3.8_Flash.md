# Nemotron 3 Nano Omni — findings by Gemini 3.8 Flash

- Source: opencode/nemotron-3-nano-omni
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Nemotron 3 Nano Omni
- **Short description:** NVIDIA's open 30B-A3B omni-modal reasoning model (officially *Nemotron-3-Nano-Omni-30B-A3B-Reasoning*) built on a hybrid Mamba-2/Transformer Mixture-of-Experts architecture (31.6B total, ~3.2B–3.6B active) with native audio, vision, video, and text support.
- **Provider / access:** opencode/nemotron-3-nano-omni, NVIDIA Build API endpoint, Hugging Face open weights, and OpenRouter.
- **Release / knowledge:** April 2026 release; knowledge cutoff mid-2026.
- **IDs:** `opencode/nemotron-3-nano-omni` (Zen tier available)
- **Context window:** 262,144 total tokens (256K context window; 65,536 max output).
- **Modalities:** Text, image, video, audio in; text and structured reasoning out (with toggleable thinking mode).
- **Pricing (as of 2026-11-06):** Free open weights / $0 via NVIDIA Build free API tier; hosted inference routes average ~$0.20–$0.25 / 1M input tokens, ~$0.80 / 1M output tokens.
- **Architecture:** Hybrid Mamba-2/Transformer Mixture-of-Experts (128 experts, 6 active per token; 30B total / 3.2B active) with integrated C-RADIOv4-H vision encoder and Parakeet-TDT-0.6B-v2 speech recognition encoder.

### Raw benchmarks found

> NVIDIA's official technical report supplies baseline architectural and evaluation figures; Artificial Analysis and BenchLM provide independent evaluations. Unusually for this family, benchmarks diverge on GPQA Diamond (72.2% vendor report with reasoning traces vs 46.9% independent evaluation, a 25.3-point delta). VoiceBench and DailyOmni contribute owner-published speech and audio-visual evaluations.

Agent / tool use:

- **OSWorld: 47.4%** ([NVIDIA Nemotron 3 Omni technical report](https://research.nvidia.com/labs/nemotron/files/NVIDIA-Nemotron-3-Omni-report.pdf)) — full OS GUI perception and automation
- **τ²-bench (Tau-Bench): 45.3%** (NVIDIA technical report)
- GDPval-AA: **416 Elo** / **0.0%** normalized ([Artificial Analysis](https://artificialanalysis.ai/models/nemotron-3-nano-omni-30b-a3b))
- Terminal-Bench, MCP-Atlas: no verified public score found

Reasoning / knowledge:

- MMLU-Pro: **77.3%**; **GPQA Diamond: 72.2%** (NVIDIA report with reasoning) vs **AA-GPQA Diamond 46.9%** (Artificial Analysis independent), a 25.3-point delta
- AIME 2025: **82.1%** (NVIDIA report)
- **IFBench: 74.2%** (NVIDIA) / **AA-IFBench 63.2%** (Artificial Analysis)
- AA-HLE: **4.8%**; AA-LCR: **39.7%**; **CritPt: 0.0%** (Artificial Analysis)
- Artificial Analysis Intelligence Index: **10.3**; BenchLM overall **33.93/100**
- AA-Omniscience: Index **−57.4**, Accuracy **15.2%**, **Hallucination Rate 85.7%**
- VoiceBench: **IF-Eval 88.66** and **AdvBench 100.00** (safety refusal)

Coding:

- LiveCodeBench v5: **63.2%**; SciCode: **32%** (NVIDIA report)
- AA Coding Index: **13.8%** (Artificial Analysis)
- SWE-bench Verified / Pro, Terminal-Bench: no verified public score found

Multimodal & Audio/Video Grounding:

- **RefCOCO (average): 90.5%** (NVIDIA report) — referring-expression grounding
- **AI2D_TEST: 88.5%** (NVIDIA report) — diagram understanding
- **MMLongBench-Doc: 57.5%** (NVIDIA report) — long-document multimodal understanding and complex multi-page layout OCR
- **OCRBenchV2 & ParseBench:** Leading tier for open models (~48.51% parse fidelity via vLLM pipeline)
- **ScreenSpot Pro: 57.8%** (NVIDIA report) — GUI grounding
- **Video-MME (without subtitles): 72.2%** (NVIDIA report) — native video comprehension evaluated without subtitle aids
- **DailyOmni & WorldSense:** Leading open tier for everyday audio-visual comprehension and cross-modal reasoning
- **VoiceBench: overall score 89.39, owner rank #4 of 44** ([VoiceBench](https://matthewcym.github.io/VoiceBench/))
- **MediaPerf:** Exceptional throughput reaching ~224 tokens/sec, yielding up to 9x higher throughput for video tagging and multimodal parsing

Long context:

- 256K native context window; **MMLongBench-Doc 57.5%** measures multi-page document recall; **AA-LCR 39.7%** indicates modest long-context reasoning retention.

### Normalized scores (1–100)

- **Tool use: 62/100.** Normalized assessment of autonomous tool execution, GUI automation (47.4% OSWorld), and function calling.
- **Reasoning: 65/100.** Normalized assessment of multi-step reasoning, reconciling vendor 72.2% GPQA vs independent 46.9% and MMLU-Pro 77.3%.
- **Context window: 74/100.** Effective retrieval fidelity across 256K context capacity (262,144 total tokens, 65,536 max output).
- **Multimodal: 90/100.** Industry-leading omni capability across text, images, video, and audio with integrated Parakeet and C-RADIOv4 encoders, leading VoiceBench (#4) and MediaPerf throughput.
- **Coding: 55/100.** Moderate code generation capability (63.2% LiveCodeBench, 13.8% AA Coding Index).
- **Cost efficiency: 96/100.** Outstanding value proposition with free open weights, free NVIDIA Build tier, and ~224 tok/s high-throughput MoE execution.
- **Overall Score: 69/100.** Arithmetic mean of five quality dimensions: (62 + 65 + 74 + 90 + 55) / 5 = 69.2 → 69. Highly efficient omni-modal engine excelling in video, document parsing, and audio workflows.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-11-06
- Method: Public internet research into NVIDIA technical reports ("Nemotron-3-Nano-Omni-30B-A3B-Reasoning"), Artificial Analysis, VoiceBench, and BenchLM; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
