# Nemotron 3.5 Super VL 120B A12B — findings by GPT 5.6 Luna

- Source: NVIDIA (`nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B`)
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Super VL 120B A12B
- **Short description:** NVIDIA's open-weight multimodal MoE for reasoning, coding, tool use, document understanding, and video understanding. The tracked hosted route is `nemotron-3.5-super-vl`; NVIDIA publishes separate BF16 reference and NVFP4 deployment checkpoints.
- **Provider / access:** OpenCode Zen `opencode/nemotron-3.5-super-vl`; OpenRouter `nvidia/nemotron-3.5-super-vl`; NVIDIA NIM and self-hosted vLLM/SGLang/TensorRT-LLM routes. No OpenCode Zen Free ID was verified.
- **Release / knowledge:** Released 2026-10-15 on Hugging Face; knowledge cutoff not stated.
- **IDs:** BF16 `nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16`; NVFP4 `nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-NVFP4`; hosted API name `nemotron-3.5-super-vl`.
- **Context window:** Native model capacity up to 1M tokens. The reviewed hosted listing exposes a 262,144-token shared window and 16,384-token maximum output; deployment limits therefore remain route-specific.
- **Modalities:** Text, RGB images, sampled MP4 video, and document/page inputs; text output; configurable reasoning, structured output, and tool calling through the NVIDIA deployment recipes.
- **Pricing (as of 2026-11-02):** NanoGPT lists $0.15 input / $0.50 output / $0.020 cached per 1M tokens but marked the endpoint unavailable when checked. OpenMDW-1.1 weights support self-hosting; practical GPU cost is substantial.
- **Architecture:** 120B total / 12B active parameters; hybrid Mamba-2/Transformer MoE with 512 routed experts, C-RADIO vision encoder, vision-language connector, and native Multi-Token Prediction. License: OpenMDW-1.1.

### Raw benchmarks found

> NVFP4 figures are used for the served deployment where available. BF16 figures remain explicitly labelled. Official-card results, BenchLM's partial profile, and NanoGPT/Artificial Analysis measurements use different harnesses and are not silently merged.

Agent / tool use:

- NVFP4 tau2-bench retail / airline / telecom: **69.30% / 75.75% / 73.19%**; tau3-bench banking: **17.78%**.
- NVFP4 GDPval-AA v2: **1206 Elo**; BrowseComp offline: **77.5%**; WebVoyager offline: **66.31%**; OSWorld-Verified: **52.30%**.
- NVFP4 AutomationBench-AA offline: **32.30%**, while the independent NanoGPT listing reports **14.8%** and **2.0% fully completed workflows**. This is a material harness/version conflict.
- NVFP4 Terminal-Bench 2.1: **62.78%**. The official BF16 table reports **60.67%**; BenchLM's partial BF16 profile displays **66.7%**, so these rows are not interchangeable.

Reasoning / knowledge:

- GPQA-Diamond: **89.90% NVFP4 / 89.52% BF16**; HLE: **31.44% text-only / 29.00% full-set NVFP4**.
- AA-LCR v1.1: **67.69% NVFP4 / 68.62% BF16**; CritPt: **10.86% NVFP4**; independent Intelligence Index: **26.5**.
- NVFP4 AA-Omniscience accuracy / hallucination rate: **25.86% / 27.7%**; independent listing: **23.3% / 35.8%**.
- BenchLM's current BF16 profile is **49.03/100**, rank **#103/1004**, with 28/724 benchmark rows; it is a partial external composite, not an official model score.

Coding:

- NVFP4 SWE-bench Verified / Multilingual / Pro: **71.07% / 67.00% / 51.30%**.
- NVFP4 LiveCodeBench v6: **87.41%**; SciCode subtask: **46.61%**; official Terminal-Bench 4 offline: **1.5**; DeepSWE offline: **18.2**.
- The independent NanoGPT listing reports SciCode **47.8%** and Terminal-Bench v4 **0.0%**; these are retained as separate serving/harness observations.

Multimodal:

- NVFP4 BabyVision **29.51%**, MMLongBench-Doc **62.82%**, V* **85.95%**, OCR-Reasoning **65.09%**, MathVision **77.79%**.
- NVFP4 OCRBench v2 EN / ZH **68.34% / 59.03%**, CharXiv reasoning **79.88%**, and Video-MME v2 **32.54%**.

Long context:

- Native context: **1M tokens**; GraphWalks: **90.34%**; AA-LCR: **67.69%**. The exact hosted listing reports **262,144 shared tokens** and **69.0% AA-LCR**; no exact MRCR/RULER score was verified.

### Normalized scores (1–100)

- **Tool use: 75/100.** Tau2 results and exposed tool calling are solid, but tau3 banking 17.78%, OSWorld 52.30%, and the 14.8% independent AutomationBench result cap reliability.
- **Reasoning: 82/100.** GPQA near 90% is excellent, while HLE around 29–31%, CritPt around 10.9%, and Intelligence Index 26.5 show uneven general reasoning.
- **Context window: 90/100.** Native 1M capacity and GraphWalks 90.34% are strong, but the tracked hosted route exposes 262K and independent retrieval evidence is only moderate.
- **Multimodal: 85/100.** Image, document, and video input are verified with useful V*/MathVision/OCR results; BabyVision and Video-MME show substantial task variance.
- **Coding: 77/100.** LiveCodeBench 87.41% and SWE Verified 71.07% are strong, but SWE-Pro 51.30%, Terminal-Bench 2.1 62.78%, and DeepSWE 18.2 are mixed.
- **Cost efficiency: 90/100.** Low listed hosted prices and open weights are attractive, but availability, 120B deployment requirements, and route-specific limits reduce practical value.
- **Overall Score: 81.8/100.** `(75 + 82 + 90 + 85 + 77) / 5 = 81.8`; best fit is a controlled or self-hosted multimodal agent where broad inputs and long context matter more than uniform benchmark leadership.

---

## Signature

- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-11-02
- Method: current NVIDIA/Hugging Face cards, NVIDIA deployment documentation, OpenRouter/NanoGPT availability checks, and BenchLM's October 29 profile. BF16 versus NVFP4, official versus independent harnesses, and hosted versus native context limits were kept distinct; scores are normalized interpretations, not official vendor scores.
- Reference URLs:
  - [NVIDIA BF16 model card](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)
  - [NVIDIA NVFP4 model card](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-NVFP4)
  - [NVIDIA Dynamo deployment recipe](https://docs.nvidia.com/dynamo/dev/recipes/nemotron-3-5-super-vl)
  - [BenchLM Nemotron 3.5 Super VL profile](https://benchlm.ai/models/nemotron-3-5-super-vl-120b-a12b)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
