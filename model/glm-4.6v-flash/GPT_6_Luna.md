# GLM-4.6V-Flash — findings by GPT-6 Luna

- Source: Z.ai/GLM-4.6V-Flash
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-4.6V-Flash
- **Short description:** Z.ai's open-weight, lightweight vision-language model for local/edge inference and multimodal agent tasks. It is the 9B-class Flash checkpoint, not the separate 106B GLM-4.6V or the hosted FlashX variant.
- **Provider / access:** Official MIT-licensed weights at Hugging Face `zai-org/GLM-4.6V-Flash`; local inference supported through Transformers, vLLM, and SGLang with an OpenAI-compatible chat-completions server. Hugging Face lists a Novita inference provider. Z.ai's family-level developer guide labels GLM-4.6V-Flash “completely free,” but the current API example calls `glm-4.6v` and does not establish a dedicated hosted API ID for this Flash checkpoint; I do not treat the full-model ID as a Flash endpoint.
- **Release / knowledge:** Checkpoint created December 7, 2025; Hugging Face model card/update is dated December 8–9, 2025. No training-data cutoff verified.
- **IDs:** `zai-org/GLM-4.6V-Flash` (official checkpoint); Z.ai API example uses `glm-4.6v` for the family, not an explicitly identified Flash API ID.
- **Context window:** 128K tokens (`max_position_embeddings: 131072` in the checkpoint config). Z.ai documents 128K for the model family.
- **Modalities:** Text, images, video, and files/documents in; text out. The model card demonstrates image/video tokens and native function calling. Do not infer image generation or other non-text output from the series-level description.
- **Pricing (as of 2026-11-01):** MIT weights can be self-hosted; compute cost depends on hardware. Z.ai describes the Flash variant as free, but current public API examples do not verify a Flash-specific billable model ID or token rate. No exact hosted rate verified.
- **Architecture:** Approximately 10.3B total parameters in the BF16 checkpoint (Atlas rounds it as 10.3B; the Z.ai model card calls it 9B). Vision-language conditional generation, `Glm4vForConditionalGeneration`; the separately named full GLM-4.6V is 106B.

### Raw benchmarks found

Only results explicitly attributed to GLM-4.6V-Flash are included. Results for the 106B GLM-4.6V and earlier GLM-V checkpoints are not transferred.

Agent / tool use:

- Z.ai documents native multimodal function calling but publishes no exact Flash-specific Terminal-Bench, Tau3, GDPval, OSWorld, or Claw-Eval result in the sources reviewed.
- No independent function-call success rate or tool-efficiency evaluation found for the exact Flash checkpoint.

Reasoning / knowledge:

- MATH-Vision: **54.0** (Benchmark Atlas exact-model record; the record does not expose a run configuration).
- No exact-checkpoint GPQA Diamond, HLE, or general Intelligence Index result verified.

Coding:

- No exact-checkpoint SWE-bench, LiveCodeBench, SciCode, or Terminal-Bench coding result verified. Z.ai describes frontend replication and visual editing use cases, but these are capability claims rather than scored benchmark results.

Multimodal/document understanding:

- ExtractBench unified value F1: **45.19 mean** over 370 documents in Hugging Face's evaluation record. The evaluation discussion identifies the metric and dataset size; do not interpret this as a video or general visual-understanding score.
- Benchmark Atlas lists WorldVQA Accuracy **14.8**, WorldVQA F-score **14.8**, and subcategory F-scores from **7.8** (Entertainment) to **20.4** (Sports). These are secondary-catalog entries; the exact benchmark protocol and run configuration are not exposed on the model page.
- Z.ai says its GLM-4.6V series was evaluated on 20+ multimodal benchmarks, but the public chart does not clearly expose a recoverable Flash-only score set in text. No 106B results are used here.

Long context:

- Maximum advertised/training context: **128K**. No exact Flash retrieval/needle-in-haystack result was verified.

### Normalized scores (1–100)

- **Tool use: 55/100.** The checkpoint supports native function calling, including multimodal inputs, but no exact-model agent benchmark or call-success result was found. Feature support alone does not establish reliable long-horizon tool use. [Z.ai model guide](https://docs.z.ai/guides/vlm/glm-4.6v); [Hugging Face model card](https://huggingface.co/zai-org/GLM-4.6V-Flash).
- **Reasoning: 61/100.** MATH-Vision at 54.0 is a positive specialized visual-math result, but there is no verified exact-model GPQA, HLE, or broad reasoning score. This is a cautious estimate, not a reported vendor rating. [Atlas](https://atlas.kevinhu.io/models/glm-4-6v-flash).
- **Context window: 58/100.** 128K sits in the methodology's 100K–200K tier; no retrieval evaluation establishes quality near the limit. [Hugging Face config](https://huggingface.co/zai-org/GLM-4.6V-Flash/resolve/main/config.json); [Z.ai guide](https://docs.z.ai/guides/vlm/glm-4.6v).
- **Multimodal: 82/100.** Text/image/video/document input qualifies for the video/PDF tier; output is text-only, and benchmark coverage is limited. The 45.19 ExtractBench mean and low WorldVQA scores argue against a higher score. [Z.ai guide](https://docs.z.ai/guides/vlm/glm-4.6v); [ExtractBench evaluation](https://huggingface.co/zai-org/GLM-4.6V-Flash/discussions/28); [Atlas](https://atlas.kevinhu.io/models/glm-4-6v-flash).
- **Coding: 50/100.** No exact-model coding benchmark was verified. Z.ai's screenshot-to-frontend and visual-editing demonstrations are relevant product claims, not a substitute for SWE-bench or terminal-agent evidence. [Z.ai guide](https://docs.z.ai/guides/vlm/glm-4.6v).
- **Cost efficiency: 100/100 (self-hosted weights only).** The model is MIT-licensed and Z.ai positions Flash as free; actual inference has hardware/hosting costs. No exact hosted API rate was verified, so this score should not be read as a zero-cost hosted API claim. [Hugging Face model card](https://huggingface.co/zai-org/GLM-4.6V-Flash); [Z.ai guide](https://docs.z.ai/guides/vlm/glm-4.6v).
- **Overall Score: 61/100.** Half-up mean of the five quality dimensions: (55 + 61 + 58 + 82 + 50) / 5 = 61.2 → 61. Cost is excluded. Best suited to locally hosted image/video/document understanding where a compact open checkpoint and multimodal tool-call interface matter; evidence is insufficient to recommend it as a coding or general reasoning specialist.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-11-01
- Method: Three separate exact-model searches plus cross-checks of the official Z.ai guide and Hugging Face checkpoint/config, an independent benchmark catalog (Atlas), and the ExtractBench evaluation record. The 9B-class Flash checkpoint is kept distinct from 106B GLM-4.6V and FlashX. Unpublished benchmarks and hosted pricing are explicitly marked unverified; normalized scores are independent estimates, not vendor scores.
- Reference URLs:
  - [Z.ai GLM-4.6V guide](https://docs.z.ai/guides/vlm/glm-4.6v)
  - [Official GLM-4.6V-Flash model card](https://huggingface.co/zai-org/GLM-4.6V-Flash)
  - [Checkpoint config](https://huggingface.co/zai-org/GLM-4.6V-Flash/resolve/main/config.json)
  - [GLM-V repository and official benchmark chart](https://github.com/zai-org/GLM-V)
  - [GLM-4.6V paper](https://arxiv.org/abs/2507.01006)
  - [Hugging Face ExtractBench evaluation discussion](https://huggingface.co/zai-org/GLM-4.6V-Flash/discussions/28)
  - [ExtractBench dataset card](https://huggingface.co/datasets/llamaindex/ExtractBench)
  - [Atlas exact-model benchmark record](https://atlas.kevinhu.io/models/glm-4-6v-flash)

---
