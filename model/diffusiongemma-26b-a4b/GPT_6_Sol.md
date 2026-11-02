# DiffusionGemma 26B A4B — findings by GPT 6 Sol

- Source: Google DeepMind (`google/diffusiongemma-26B-A4B-it`)
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DiffusionGemma 26B A4B.
- **Short description:** Google's experimental open-weight, discrete text-diffusion model fine-tuned from Gemma 4 26B A4B for fast parallel generation, with image/video-frame comprehension. **Different trained weights and decoding** from autoregressive Gemma 4 26B A4B; benchmark rows must not be merged ([Google card](https://ai.google.dev/gemma/docs/diffusiongemma/model_card), [technical report](https://arxiv.org/html/2608.00146)).
- **Provider / access:** Instruction weights `google/diffusiongemma-26B-A4B-it` for Transformers `DiffusionGemmaForBlockDiffusion` and dedicated serving; NVIDIA Build has a free **trial** model route `google/diffusiongemma-26b-a4b-it` with NIM trial terms. One hosted commercial route, VLM Run, uses OpenAI-compatible `https://gateway.vlm.run/openai/chat/completions`, but imposes an **80K** host cap and only accepts images rather than video uploads ([Google HF card](https://huggingface.co/google/diffusiongemma-26B-A4B-it), [host](https://vlm.run/gateway/models/google-diffusiongemma-26b-a4b-it)). No verified unlimited Free API ID.
- **Release / knowledge:** Developer guide / model publication **2026-06-10**; the report appeared later in July. NVIDIA's card says training-data cutoff **January 2025**; fixed knowledge cutoff not separately specified in Google's public model card ([Google developer guide](https://developers.googleblog.com/diffusiongemma-the-developer-guide/), [NVIDIA deployment card](https://build.nvidia.com/google/diffusiongemma-26b-a4b-it/modelcard)).
- **IDs:** `google/diffusiongemma-26B-A4B-it` post-trained; underlying `google/gemma-4-26b-a4b-it` is the AR starting model, not a serving alias.
- **Context window:** Weights **up to 256K**; vendor **MRCR v2 8-needle at 128K only 32.0%** with diffusion/thinking. VLM Run's **80K** is provider-specific ([Google card](https://ai.google.dev/gemma/docs/diffusiongemma/model_card), [VLM Run](https://vlm.run/gateway/models/google-diffusiongemma-26b-a4b-it)).
- **Modalities:** Text and images in; video understanding via a **sequence of frames** per Google, not verified raw-video acceptance at every API host. Text out, native tools and configurable thinking; no audio or generated images/videos ([Google card](https://ai.google.dev/gemma/docs/diffusiongemma/model_card)).
- **Pricing (as of 2026-11-02):** Apache-2.0 weights have no per-token license fee but require compute; [Hugging Face dedicated endpoint example](https://endpoints.huggingface.co/catalog/collection/gemma?accelerator=gpu) is **$5/hour H200**. [VLM Run's own route](https://vlm.run/gateway/models/google-diffusiongemma-26b-a4b-it) lists **$0.35 input/$1.50 output/$0.05 cached input per million** at its 80K cap. A trial inference endpoint is not a permanent $0 tariff, and vendor's >1,000 output tokens/s H100 FP8 benchmark is **not** an API price or universal speed.
- **Architecture:** **25.2B total / 3.8B active**, 128 experts (8 selected and 1 shared), 256-token denoising canvas; Apache-2.0 weights. Quantized 18GB-class deployment is a particular precision/hardware recipe, not BF16 weight size ([Google model card](https://ai.google.dev/gemma/docs/diffusiongemma/model_card), [developer guide](https://developers.googleblog.com/diffusiongemma-the-developer-guide/)).

### Raw benchmarks found

- **Agent/tool use:** Vendor diffusion-with-thinking [τ² average **56.2%**; component retail **71.5%**, airline **69.0%**, telecom **28.1%**](https://arxiv.org/html/2608.00146). Independent [AA τ³ Banking **6.6%**, GDPval-AA **554 Elo**, Terminal-Bench 2.1 **12.4%**](https://benchmarklist.com/models/diffusiongemma-26b-a4b/); these are other tasks/harnesses, not direct τ² replications.
- **Reasoning:** Vendor diffusion/thinking [GPQA Diamond **73.2%**, AIME 2026 **69.1%**, HLE no-tools **11.0%**](https://ai.google.dev/gemma/docs/diffusiongemma/model_card), versus independent [AA GPQA **66.9%**, HLE **10.8%**, CritPt **0.3%**](https://vascend.it/en/benchmark/diffusiongemma-26b-a4b). Sampling mode and prompt differences plausibly explain GPQA's gap; Google reports AR-mode **79.8%** GPQA with the **same diffusion-trained weights**, and **82.3%** for the **different Gemma 4 AR starting weights** ([technical table](https://arxiv.org/html/2608.00146)).
- **Coding:** Vendor [LiveCodeBench v6 **69.1%**, HumanEval **94.5%**, BigCodeBench **46.0%** in diffusion/thinking](https://arxiv.org/html/2608.00146); independent [AA SciCode **34.3%** and Terminal-Bench 2.1 **12.4%**](https://benchmarklist.com/models/diffusiongemma-26b-a4b/). No independently verified exact-model SWE-bench Verified rate; code contest and repository repair are different capabilities.
- **Long context:** Vendor [MRCR v2 8-needle at 128K **32.0%**](https://ai.google.dev/gemma/docs/diffusiongemma/model_card); independent [AA-LCR v1.1 **19.7%**](https://vascend.it/en/benchmark/diffusiongemma-26b-a4b). Both indicate that nominal 256K capacity is not proof of reliable retention.
- **Vision:** Vendor [MMMU-Pro **54.3%**, MATH-Vision **70.5%**, OmniDocBench 1.5 edit distance **0.319** (lower is better)](https://ai.google.dev/gemma/docs/diffusiongemma/model_card); independent [AA MMMU-Pro **66.5%**](https://vascend.it/en/benchmark/diffusiongemma-26b-a4b), a sizable variant/settings gap. The vendor's **66.0% MMMU-Pro** is specifically **no-think diffusion**; don't silently compare it with thinking 54.3 or label it a weight update ([four-mode report table](https://arxiv.org/html/2608.00146)).
- **Throughput:** Vendor reports **1,479 output tokens/s** for H100 FP8 batch-one diffusion on its seven-task subset versus **303** for autoregressive Gemma 4 with MTP ([report](https://arxiv.org/html/2608.00146)); hardware/mode-specific, not independent hosted API throughput.

### Normalized scores (1–100)

- **Tool use: 53/100.** τ² average 56 vendor but independent terminal 12.4 and banking 6.6.
- **Reasoning: 67/100.** Independent GPQA 66.9 and HLE ~11, with stronger vendor math.
- **Context window: 58/100.** 256K capacity, only 32% vendor MRCR at 128K and independent LCR ~20.
- **Multimodal: 67/100.** Image and frame-sequence input with independent MMMU-Pro, but text-only output and host-specific video limits.
- **Coding: 62/100.** Good vendor LiveCodeBench/HumanEval, weak independent terminal and no SWE replication.
- **Cost efficiency: 80/100.** Open weights and unusually high FP8 decode throughput, tempered by host/accelerator cost.
- **Overall Score: 61/100.** Half-up mean (53 + 67 + 58 + 67 + 62) / 5 = 61.4; compelling fast multimodal experiments, less proven as a durable code agent.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-11-02 UTC
- Method: Three successful exact-model, independent-evaluation and access/pricing searches; separate diffusion/AR, think/no-think, vendor/independent and host-specific limits. Scores are normalized judgments.
- Reference URLs:
  - [Google DiffusionGemma official model card](https://ai.google.dev/gemma/docs/diffusiongemma/model_card)
  - [Google research report, four decoding modes and performance table](https://arxiv.org/html/2608.00146)
  - [Google exact instruction weights and inference example](https://huggingface.co/google/diffusiongemma-26B-A4B-it)
  - [Artificial Analysis independent benchmark digest](https://vascend.it/en/benchmark/diffusiongemma-26b-a4b)
  - [BenchmarkList independently sourced agent/coding figures](https://benchmarklist.com/models/diffusiongemma-26b-a4b/)
  - [VLM Run host-specific API and tariff](https://vlm.run/gateway/models/google-diffusiongemma-26b-a4b-it)
- Future sources: add a new file next to this one using the same headings.
