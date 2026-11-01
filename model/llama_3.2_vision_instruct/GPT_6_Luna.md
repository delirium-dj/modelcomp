# Llama 3.2 11B Vision Instruct — findings by GPT-6 Luna

- Source: Meta/Llama-3.2-11B-Vision-Instruct
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Llama 3.2 11B Vision Instruct
- **Short description:** Meta's instruction-tuned 11B multimodal model for image understanding, document/chart QA, and visual reasoning. This report covers the 11B checkpoint only; published 90B results are not transferred.
- **Provider / access:** Meta's model weights are available from the gated Hugging Face repository `meta-llama/Llama-3.2-11B-Vision-Instruct` under the Llama 3.2 Community License. Cloudflare Workers AI currently hosts `@cf/meta/llama-3.2-11b-vision-instruct`; Cloudflare requires an initial license-acceptance request. OpenRouter's current model registry has no matching live route.
- **Release / knowledge:** Released September 25, 2024; Meta's model card gives a December 2023 knowledge cutoff.
- **IDs:** `meta-llama/Llama-3.2-11B-Vision-Instruct` (weights); `@cf/meta/llama-3.2-11b-vision-instruct` (Cloudflare Workers AI).
- **Context window:** 128,000 tokens. Cloudflare lists a 128,000-token context window. The model card does not give a provider-independent output cap.
- **Modalities:** Text and image in; text out. No audio or video. Image+text applications officially support English; text-only language support is broader. No exact-model agent or function-calling benchmark verified.
- **Pricing (as of 2026-11-01):** Open weights are downloadable subject to Meta's Community License, not an OSI open-source license. Cloudflare lists $0.0485/M input tokens and $0.676/M output tokens. Hosted rates vary by provider.
- **Architecture:** 10.6B-parameter Llama 3.2 Vision model, based on Llama 3.1 with a separately trained vision adapter and cross-attention layers; instruction-tuned with SFT and RLHF. Llama 3.2 Community License.

### Raw benchmarks found

The figures below are Meta's official zero-shot evaluations for the **11B instruction-tuned** checkpoint. They are not the 90B column. CoT is used only on rows explicitly labeled CoT.

Agent / tool use:

- No verified public Tau, GDPval, Terminal-Bench, Claw-Eval, or tool-call success-rate result found for this exact checkpoint. Image chat support does not itself establish agent/tool reliability.

Reasoning / knowledge:

- MMMU (validation, CoT): **50.7%** micro-average accuracy.
- MMLU (CoT): **73.0%** macro average accuracy; MATH (CoT): **51.9%** final exact match; GPQA: **32.8%** accuracy.
- These are Meta's instruction-tuned model-card results; no 90B figures are included.

Multimodal / image understanding:

- DocVQA (test): **88.4 ANLS**; AI2 Diagram (test): **91.1% accuracy**; ChartQA (test, CoT): **83.4 relaxed accuracy**; MathVista (testmini): **51.5% accuracy**; VQAv2 (test): **75.2% accuracy**.
- MMMU-Pro: **33.0%** Standard (10-option test) and **23.7%** Vision (test).

Coding:

- No exact-checkpoint SWE-bench, LiveCodeBench, SciCode, or Terminal-Bench result found.

Long context:

- Maximum context: **128,000 tokens**. No exact-checkpoint MRCR/RULER or long-context retrieval score found.

### Normalized scores (1–100)

- **Tool use: 35/100.** No exact-model tool-use evaluation or published success rate was verified; this is a conservative capability score, not a benchmark result. [Meta model card](https://github.com/meta-llama/llama-models/blob/main/models/llama3_2/MODEL_CARD_VISION.md).
- **Reasoning: 55/100.** MMMU 50.7 and MATH 51.9 show useful reasoning, while GPQA 32.8 and the absence of agent/general reasoning evaluations limit the score. [Meta model card](https://github.com/meta-llama/llama-models/blob/main/models/llama3_2/MODEL_CARD_VISION.md).
- **Context window: 58/100.** The documented 128K window falls in the methodology's 100K–200K tier; no retrieval test verifies performance near the limit. [Meta model card](https://github.com/meta-llama/llama-models/blob/main/models/llama3_2/MODEL_CARD_VISION.md); [Cloudflare model page](https://developers.cloudflare.com/workers-ai/models/llama-3.2-11b-vision-instruct/).
- **Multimodal: 68/100.** Image input earns the image-capable tier; strong DocVQA 88.4, AI2 Diagram 91.1, and ChartQA 83.4 support document/chart use, while no audio/video input or non-text output is available. [Meta model card](https://github.com/meta-llama/llama-models/blob/main/models/llama3_2/MODEL_CARD_VISION.md).
- **Coding: 45/100.** No exact-model coding benchmark was verified, so no SWE-bench or coding-agent strength is assumed from the Llama family. [Meta model card](https://github.com/meta-llama/llama-models/blob/main/models/llama3_2/MODEL_CARD_VISION.md).
- **Cost efficiency: 85/100.** Downloadable weights allow self-hosting, but the community-license terms apply and Cloudflare's hosted output rate is $0.676/M tokens. [Meta license](https://github.com/meta-llama/llama-models/blob/main/models/llama3_2/LICENSE); [Cloudflare pricing](https://developers.cloudflare.com/workers-ai/models/llama-3.2-11b-vision-instruct/).
- **Overall Score: 52/100.** Half-up mean of the five quality dimensions: (35 + 55 + 58 + 68 + 45) / 5 = 52.2 → 52. Cost is excluded. Best suited to self-hosted English image/document/chart QA where its strong visual benchmarks matter; the evidence does not establish it as a coding or tool-using agent.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-11-01
- Method: Three independent exact-model searches; cross-checked Meta's public model card in its official GitHub repository with the official Llama 3.2 release post and Cloudflare's hosted model page. The 11B instruction-tuned benchmark column is kept separate from the 90B and pretrained results. Normalized scores are independent interpretations, not vendor scores.
- Reference URLs:
  - [Official Meta Llama 3.2 Vision model card](https://github.com/meta-llama/llama-models/blob/main/models/llama3_2/MODEL_CARD_VISION.md)
  - [Meta Llama 3.2 release announcement](https://ai.meta.com/blog/llama-3-2-connect-2024-vision-edge-mobile-devices/)
  - [Hugging Face checkpoint](https://huggingface.co/meta-llama/Llama-3.2-11B-Vision-Instruct)
  - [Cloudflare Workers AI model page and pricing](https://developers.cloudflare.com/workers-ai/models/llama-3.2-11b-vision-instruct/)
  - [NVIDIA model card](https://build.nvidia.com/meta/llama-3.2-11b-vision-instruct/modelcard)
  - [OpenRouter current model registry](https://openrouter.ai/api/v1/models)

---
