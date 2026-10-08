# DiffusionGemma 26B A4B — findings by GPT 6 Astra

- Source: Google DeepMind / diffusiongemma-26B-A4B-it
- Date: 2026-10-08 (UTC)
- [Overview and scoring methodology](../../model-comparison.md)
- [Cross-model signed log](../../model-findings.md)

## Model card

- **Name:** DiffusionGemma 26B A4B.
- **Short description:** Experimental open model using block diffusion for fast local generation; distinct from autoregressive Gemma 4 26B A4B.
- **Provider / access:** Downloadable weights, Transformers/vLLM and cloud deployment; no verified managed per-token API tariff or free Zen ID.
- **Release / knowledge:** June 10, 2026; January 2025 training cutoff.
- **IDs:** `google/diffusiongemma-26B-A4B-it`; local API protocol depends on the serving stack.
- **Context window:** Up to 256k; 256-token generation canvases.
- **Modalities:** Text/image and video-frame input, text output, configurable thinking and function calling; no verified audio input/output.
- **Pricing (as of 2026-10-08):** Apache-licensed downloadable weights; self-hosting requires hardware/energy or cloud rental. No verified commercial token price; base Gemma prices cannot be transferred.
- **Architecture:** Approximately 25.2B total / 3.8B active MoE, encoder-decoder diffusion architecture, Apache 2.0.

[Official weights](https://huggingface.co/google/diffusiongemma-26B-A4B-it), [launch and deployment discussion](https://blog.google/innovation-and-ai/technology/developers-tools/diffusion-gemma-faster-text-generation/).

### Raw benchmarks found

Google instruction-tuned evaluation with recommended Entropy Bound sampler:
- **Tools:** Tau2 average over three domains **56.2%**.
- **Reasoning:** GPQA Diamond **73.2%**, HLE **11%** without tools / **11.9%** with search, AIME 2026 no tools **69.1%**.
- **Coding:** LiveCodeBench **v6 69.1%**, Codeforces **1,429 Elo**.
- **Vision:** MMMU-Pro **54.3%**, MATH-Vision **70.5%**.
- **Long context:** MRCR v2 eight-needle at 128k **32%** average.
- **Missing:** TB2.1, Tau3, GDPval-AA, Claw-Eval, MCP-Atlas, LCR, CritPt, Omniscience, SWE-bench Verified/Pro, SciCode and Vibe Code Bench: no verified public score found in inspected sources.

[Google model card](https://ai.google.dev/gemma/docs/diffusiongemma/model_card). Vendor reports 1,000+ tokens/s on H100 and 700+ on RTX 5090 in selected local configurations; this is not a hosted-service SLA. High-concurrency serving may lose the speed advantage.

### Normalized scores (1–100)

- **Tool use: 58/100.** Tau2 supports moderate agent ability, without harder current tool-suite evidence.
- **Reasoning: 64/100.** GPQA is useful but low HLE caps difficult reasoning.
- **Context window: 71/100.** 256k nominal capacity, limited by weak measured 128k retrieval.
- **Multimodal: 76/100.** Image, document and video-frame understanding; no audio or nontext output.
- **Coding: 65/100.** LCB v6 and Codeforces support routine coding; repository-scale evidence is missing.
- **Cost efficiency: 90/100.** Provisional local-deployment efficiency assessment from open weights and low-batch GPU throughput; not a measured dollar-per-token comparison, and compute is not free.
- **Overall Score: 67/100.** Half-up mean: (58 + 64 + 71 + 76 + 65) / 5 = 66.8. Best suited to speed-sensitive local experimentation.

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-08
- Method: Fresh primary-source research; normalized scores are interpretations, with cost explicitly provisional.
- Future sources: Add a separate signed report alongside this file.

