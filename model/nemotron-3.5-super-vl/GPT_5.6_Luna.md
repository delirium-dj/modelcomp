# Nemotron 3.5 Super VL 120B A12B — findings by GPT 5.6 Luna

- Source: NVIDIA (`nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B`)
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Super VL 120B A12B
- **Short description:** NVIDIA's open-weight multimodal MoE for reasoning, coding, tool use, document understanding, and video understanding. The tracked hosted route is the exact `nemotron-3.5-super-vl` model; NVIDIA publishes both BF16 reference weights and an NVFP4 deployment release.
- **Provider / access:** OpenCode Zen `opencode/nemotron-3.5-super-vl`; OpenRouter `nvidia/nemotron-3.5-super-vl` via Chat Completions. NVIDIA's developer page links the same exact OpenRouter demo and NVIDIA NIM route: [NVIDIA Nemotron page](https://developer.nvidia.com/nemotron), [OpenRouter model page](https://openrouter.ai/nvidia/nemotron-3.5-super-vl).
- **Release / knowledge:** 2026-10-15 release on Hugging Face; knowledge cutoff not stated. Sources: [BF16 model card](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16), [NVFP4 model card](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-NVFP4).
- **IDs:** `opencode/nemotron-3.5-super-vl`; exact vendor checkpoint IDs are `nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16` and `nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-NVFP4`. No OpenCode Zen Free ID was found in the fresh provider search.
- **Context window:** 1,000,000 native tokens; the exact hosted listing reports a 262,144-token shared window and 16,384-token maximum output. The distinction is documented by [NVIDIA's NVFP4 card](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-NVFP4) and the independent [NanoGPT listing](https://nano-gpt.com/models/text/nvidia/nemotron-3.5-super-vl).
- **Modalities:** Text, RGB images, sampled MP4 video, documents/pages in; text out; configurable reasoning; tool calling and structured output supported. Source: [NVIDIA NVFP4 card](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-NVFP4).
- **Pricing (as of 2026-10-23):** NanoGPT lists $0.15 input / $0.50 output / $0.020 cached per 1M tokens; the same listing marks the endpoint unavailable at the time checked. OpenMDW-1.1 open weights are available for self-hosting. Source: [NanoGPT pricing and availability](https://nano-gpt.com/models/text/nvidia/nemotron-3.5-super-vl), [OpenMDW license](https://openmdw.ai/license/1-1/).
- **Architecture:** 120B total / 12B active parameters; hybrid Mamba-2/Transformer MoE with 512 routed experts per MoE layer, C-RADIO vision encoder, vision-language connector, and native Multi-Token Prediction. License: OpenMDW-1.1. Source: [NVIDIA NVFP4 card](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-NVFP4).

### Raw benchmarks found

> NVIDIA's NVFP4 column is used for the served deployment where available. BF16 figures are retained as an explicitly labeled reference, not silently merged with NVFP4. Independent NanoGPT/Artificial Analysis measurements are shown separately because their harness/version and checkpoint-serving conditions are not identical.

Agent / tool use:

- Tau2-bench retail: **69.30%**; airline: **75.75%**; telecom: **73.19%**; tau3-bench banking: **17.78%** (NVIDIA NVFP4 evaluation, [model card](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-NVFP4)).
- GDPval-AA v2: **1206 Elo** (NVIDIA NVFP4 evaluation, [model card](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-NVFP4)). Independent current AA listing: **1162 Elo** on GDPval-AA v2.1 ([NanoGPT listing](https://nano-gpt.com/models/text/nvidia/nemotron-3.5-super-vl)).
- AutomationBench-AA: **32.30%** (NVIDIA NVFP4 offline evaluation, [model card](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-NVFP4)); independent current listing: **14.8%**, with **2.0%** fully completed workflows ([NanoGPT listing](https://nano-gpt.com/models/text/nvidia/nemotron-3.5-super-vl)). This is a material harness/version conflict, so neither result is treated as a universal production success rate.
- OSWorld-Verified: **52.30%**; WebVoyager offline: **66.31%**; BrowseComp offline: **77.5%** (NVIDIA NVFP4 evaluation, [model card](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-NVFP4)).
- Tool calling is supported through the `qwen3_coder` parser in the NVIDIA deployment recipe, but no independently reproduced exact-model tool-call success rate was found ([NVIDIA Dynamo recipe](https://docs.nvidia.com/dynamo/dev/recipes/nemotron-3-5-super-vl)).
- Terminal-Bench 2.1: **62.78%** (NVIDIA NVFP4 evaluation, [model card](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-NVFP4)).

Reasoning / knowledge:

- GPQA Diamond: **89.90%** (NVFP4) and **89.52%** (BF16) ([NVFP4 card](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-NVFP4), [BF16 card](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)).
- HLE: **31.44%** text-only and **29.00%** full set (NVFP4, [model card](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-NVFP4)); independent current HLE listing: **30.7%** ([NanoGPT listing](https://nano-gpt.com/models/text/nvidia/nemotron-3.5-super-vl)).
- AA-LCR v1.1: **67.69%** (NVFP4, [model card](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-NVFP4)); independent current listing: **69.0%** ([NanoGPT listing](https://nano-gpt.com/models/text/nvidia/nemotron-3.5-super-vl)).
- CritPt: **10.86%** (NVFP4, [model card](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-NVFP4)); independent current listing: **10.6%** ([NanoGPT listing](https://nano-gpt.com/models/text/nvidia/nemotron-3.5-super-vl)).
- Artificial Analysis Intelligence Index: **26.5** (independent current listing, [NanoGPT](https://nano-gpt.com/models/text/nvidia/nemotron-3.5-super-vl)).
- AA-Omniscience accuracy / hallucination rate: **25.86% / 27.7%** (NVFP4, [model card](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-NVFP4)); independent current listing: **23.3% / 35.8%** ([NanoGPT listing](https://nano-gpt.com/models/text/nvidia/nemotron-3.5-super-vl)).

Coding:

- SWE-bench Verified: **71.07%**; SWE-bench Multilingual: **67.00%**; SWE-bench Pro: **51.30%** (NVIDIA NVFP4, [model card](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-NVFP4)).
- LiveCodeBench v6: **87.41%**; SciCode subtask: **46.61%** (NVIDIA NVFP4, [model card](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-NVFP4)); independent current SciCode listing: **47.8%** ([NanoGPT listing](https://nano-gpt.com/models/text/nvidia/nemotron-3.5-super-vl)).
- Terminal-Bench 4 offline: **1.5** (NVIDIA NVFP4, [model card](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-NVFP4)); independent current Terminal-Bench v4 listing: **0.0%** ([NanoGPT listing](https://nano-gpt.com/models/text/nvidia/nemotron-3.5-super-vl)).
- DeepSWE offline: **18.2** (NVIDIA NVFP4, [model card](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-NVFP4)).

Long context:

- GraphWalks: **90.34%** (NVFP4); AA-LCR v1.1: **67.69%** (NVFP4); native context: **1M tokens** ([NVIDIA NVFP4 card](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-NVFP4)).
- Independent hosted listing reports a **262,144-token** shared context and **69.0%** AA-LCR ([NanoGPT listing](https://nano-gpt.com/models/text/nvidia/nemotron-3.5-super-vl)). No verified public MRCR or RULER score for this exact model was found.

Multimodal:

- BabyVision: **29.51%**; MMLongBench-Doc: **62.82%**; V*: **85.95%**; OCR-Reasoning: **65.09%**; MathVision: **77.79%** (NVIDIA NVFP4, [model card](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-NVFP4)).
- OCRBench v2 EN / ZH: **68.34% / 59.03%**; CharXiv reasoning: **79.88%**; Video-MME v2: **32.54%** (NVIDIA NVFP4, [model card](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-NVFP4)).

### Normalized scores (1–100)

- **Tool use: 75/100.** Tau2 retail/airline/telecom results are solid and the deployment exposes tool calling, but tau3 banking (17.78%), OSWorld (52.30%), and the independent AutomationBench result (14.8%) cap confidence.
- **Reasoning: 82/100.** GPQA Diamond is 89.90%, while HLE is about 29–31%, CritPt is about 10.6–10.86%, and the independent Intelligence Index is 26.5; strong advanced science performance does not generalize to frontier-level overall reasoning.
- **Context window: 90/100.** The native model supports 1M tokens and GraphWalks reaches 90.34%, but the exact hosted listing exposes 262,144 shared tokens, so the self-host/native maximum cannot receive the full score for this route.
- **Multimodal: 85/100.** Image, document, and video input are all verified and V*/MathVision/OCR results are useful, but BabyVision (29.51%) and Video-MME v2 (32.54%) show substantial task variance.
- **Coding: 77/100.** LiveCodeBench v6 is 87.41% and SWE-bench Verified is 71.07%, but SWE-bench Pro is 51.30%, Terminal-Bench 2.1 is 62.78%, and DeepSWE is 18.2.
- **Cost efficiency: 90/100.** The exact independent hosted listing reports $0.15/$0.50 per 1M tokens with $0.020 cache reads, while the OpenMDW-1.1 weights permit self-hosting; availability and GPU requirements reduce practical value.
- **Overall Score: 82/100.** Half-up mean of the five quality dimensions `(75 + 82 + 90 + 85 + 77) / 5 = 81.8`, rounded to 82; best fit is a self-hosted or controlled hosted multimodal agent where broad inputs and long context matter more than uniform benchmark leadership.

---

## Signature

- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-10-23
- Method: seven-plus independent fresh web searches followed by direct official NVIDIA/Hugging Face, NVIDIA deployment documentation, OpenRouter, and independent NanoGPT/Artificial Analysis page checks; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
