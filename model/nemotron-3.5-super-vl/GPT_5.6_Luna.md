# Nemotron 3.5 Super VL — findings by GPT 5.6 Luna

- Source: NVIDIA / `NVIDIA-Nemotron-3.5-Super-VL-120B-A12B`
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Super VL 120B A12B
- **Short description:** NVIDIA's open-weight vision-language reasoning model for text, image, and video understanding, coding, tool use, document analysis, and agentic workflows. The tracked short name resolves to the 120B-total/12B-active BF16 or equivalent serving family, not to the separate NVFP4 quantization.
- **Provider / access:** Self-host through vLLM or SGLang with an OpenAI-compatible endpoint; the official model card uses served name `nemotron-3.5-super-vl`. Models.dev lists NVIDIA, OpenRouter, Together AI, Vercel AI Gateway, OpenCode, and other providers. OpenCode's listed free route is `nemotron-3.5-super-vl-free`.
- **Release / knowledge:** NVIDIA's Hugging Face model card lists release 2026-10-15. The model card says training data collection runs through December 2025; it does not state a conventional knowledge cutoff.
- **IDs:** `nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16` (full-precision weights), served API name `nemotron-3.5-super-vl`; OpenCode free route `nemotron-3.5-super-vl-free`.
- **Context window:** Up to 1M tokens. Models.dev lists 1,048,576 tokens; provider output limits vary materially, from 8,192 on NVIDIA to 131,072 on the OpenCode free listing.
- **Modalities:** Text, images, and video in; text out. Configurable reasoning, tool calling, function calling, and structured output are supported by the official serving examples and provider listings. The card documents MP4 video up to two minutes and image/document-page inputs.
- **Pricing (as of 2026-10-23):** OpenCode free route $0/$0. Paid providers vary: Models.dev lists approximately $0.15/$0.50 per 1M input/output tokens on OpenRouter and $0.20/$0.50 on Vercel; self-hosting requires substantial GPU infrastructure. OpenMDW-1.1 license permits commercial and non-commercial use subject to its terms.
- **Architecture:** Open-weight Mamba-2/Transformer hybrid sparse MoE with 120B total and 12B active parameters, 512 routed experts per MoE layer, C-RADIO vision encoder, vision-language connector, and native Multi-Token Prediction for speculative decoding. License: OpenMDW-1.1.

### Raw benchmarks found

> The official NVIDIA/Hugging Face card supplies the primary benchmark table and describes NeMo Gym recipes. BenchLM independently reproduces most of the table and adds a conservative aggregate; Artificial Analysis has no exact variant page but is cited by BenchLM for a family-level GDPval/AA result. Values below are kept labelled by harness and source.

Agent / tool use:

- Terminal-Bench 2.1: **60.67%** (NVIDIA model card, NeMo Gym; BenchLM lists 66.7% from a separate harness/card entry, so this is a material harness conflict).
- Tau2-bench retail / airline / telecom: **69.24% / 76.50% / 73.19%** (NVIDIA model card).
- Tau3-bench banking: **18.88%** (NVIDIA model card).
- GDPval-AA v2: **1211 Elo** (NVIDIA model card).
- BrowseComp: **78%** (NVIDIA model card).
- OSWorld-Verified: **51.14%**; WebVoyager offline: **77.72%** (NVIDIA model card).

Reasoning / knowledge:

- GPQA Diamond: **89.52%** (NVIDIA model card; BenchLM reports 89.5%).
- HLE: **29.20% full set**, **31.79% text-only/no tools** (NVIDIA model card; BenchLM reports 29.2% and 31.8%).
- CritPt: **10.86%** (NVIDIA model card; BenchLM reports 10.9%).
- AA-Omniscience accuracy / hallucination rate / index: **26.20% / 30.0% / 4.03** (NVIDIA model card).
- Artificial Analysis Intelligence Index: **26.5%** and AA-HLE **30.7%** as cited by BenchLM from the family-level Artificial Analysis page; the exact variant Artificial Analysis URL returned 404 during the search, so these are secondary/family-labelled evidence.
- APEX shortlist: **88.36%**; GraphWalks: **89.71%** (NVIDIA model card).

Coding:

- LiveCodeBench v6: **88.22%** (NVIDIA model card; BenchLM reports 88.2%).
- SWE-bench Verified: **71.10%**; SWE-bench Multilingual **67.72%**; SWE-bench Pro **51.78%** (NVIDIA model card).
- SciCode: **47.13%** (NVIDIA model card; BenchLM reports 47.8% for an AA-SciCode presentation, a small harness/source discrepancy).
- DeepSWE offline: **24.65%** (NVIDIA model card).
- Terminal-Bench 4 offline: **1%** (NVIDIA model card; not comparable to Terminal-Bench 2.1).

Multimodal:

- BabyVision: **29.60%**; MMLongBench-Doc **62.82%**; V* **85.60%**; MathVision **78.16%**; CharXiv reasoning **80.82%** (NVIDIA model card).
- Video-MME v2: **32.85%**; OCRBench v2 English/Chinese **68.12% / 59.15%**; OCR-Reasoning **65.08%** (NVIDIA model card).

Long context:

- Advertised context is **1M tokens**. AA-LCR v1.1: **68.62%** and GraphWalks: **89.71%** (NVIDIA model card). No independent full-window MRCR/RULER result was verified.

### Normalized scores (1–100)

- **Tool use: 78/100.** Tau2 retail/airline/telecom results of 69.24–76.50%, BrowseComp 78%, and OSWorld 51.14% establish capable agent/tool behavior; Tau3 banking at 18.88% and the 60.67–66.7% Terminal-Bench disagreement cap it.
- **Reasoning: 81/100.** GPQA Diamond 89.52%, APEX 88.36%, and GraphWalks 89.71% are strong, but HLE 29.20%, AA-Omniscience accuracy 26.20%, and the low AA aggregate show uneven frontier knowledge reliability.
- **Context window: 93/100.** The official card and independent registry agree on 1M context, with AA-LCR 68.62%; no full-window retrieval benchmark prevents a higher score.
- **Multimodal: 82/100.** Native image/video input and many verified vision/document scores support broad coverage. BabyVision 29.60%, Video-MME v2 32.85%, and OCR language variation cap practical multimodal reliability.
- **Coding: 80/100.** LiveCodeBench v6 88.22% is excellent, while SWE-bench Verified 71.10%, Pro 51.78%, DeepSWE 24.65%, and Terminal-Bench 4 offline 1% show meaningful weakness on agentic production coding.
- **Cost efficiency: 91/100.** OpenCode and some gateways list a free route, and paid inference is inexpensive relative to the capability; self-hosting hardware requirements reduce the score from 100.
- **Overall Score: 83/100.** Half-up mean of the five quality dimensions: (78 + 81 + 93 + 82 + 80) / 5 = 82.8. Best fit is low-cost multimodal and long-context agent work where open weights and video support matter more than absolute coding consistency.

---

## Signature

- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-10-23
- Method: Four independent web searches plus direct comparison of NVIDIA's official Hugging Face model card, BenchLM's independent benchmark aggregation, Models.dev provider/spec registry, and Bing/NVIDIA searches. The Terminal-Bench and SciCode discrepancies were retained as harness/source conflicts rather than averaged away; scores are normalized interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
