# Ling 3.0 Flash Sante — findings by GPT-6 Luna

- Source: InclusionAI/Ling-3.0-flash-Sante
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash Sante
- **Short description:** InclusionAI's healthcare-specialized Ling 3.0 Flash model for medical reasoning, evidence synthesis, and tool-assisted research. The exact Sante checkpoint is now published as open weights; it should not be confused with the general Ling 3.0 Flash checkpoint.
- **Provider / access:** Official MIT weights at Hugging Face `inclusionAI/Ling-3.0-flash-Sante` and ModelScope. Official SGLang/vLLM serving recipes expose an OpenAI-compatible chat-completions endpoint. Vercel AI Gateway and Novita catalogs currently list the hosted model as `inclusionai/ling-3.0-flash-sante`; no current OpenRouter registry entry was verified.
- **Release / knowledge:** Vercel/Novita catalogs give September 4, 2026 as the hosted-model release date. The official Hugging Face checkpoint appeared October 19, 2026 and was last modified October 22. No training-data cutoff found.
- **IDs:** `inclusionAI/Ling-3.0-flash-Sante` (official checkpoint); `inclusionai/ling-3.0-flash-sante` (Vercel AI Gateway / Novita hosted ID).
- **Context window:** 256K in the official launch recipe; provider catalog limits are 256,000 tokens on Vercel and 262,144 on Novita. Maximum output is provider-specific: 32,000 tokens (Vercel) and 32,768 (Novita).
- **Modalities:** Text in/text out. Thinking is enabled by default and can be disabled; compatible serving frameworks support tool calls. No image/audio/video input or non-text output documented.
- **Pricing (as of 2026-11-01):** MIT weights are available for self-hosting, but 124B total parameters require substantial compute. Vercel AI Gateway and Novita list $0.075/M input, $0.22/M output, and $0.015/M cached input. These are gateway rates, not a first-party InclusionAI price guarantee.
- **Architecture:** 124B total / 5.1B active MoE with hybrid linear attention (Kimi Delta Attention), gated MLA, and sparse MoE layers. MIT license. The model card warns that this research model is not a medical device and is not a substitute for professional care.

### Raw benchmarks found

The scores below are from InclusionAI's official evaluation figure in the exact Sante model card. The vendor says all models in the comparison use its highest reasoning-effort tier unless otherwise specified. Internal tests are marked as such; they should not be treated as standard public benchmarks. Tool-style evaluations use distinct, vendor-described harnesses.

Medical knowledge / reasoning / safety:

- HealthBench Professional: **54.3**; DiagnosisArena-MCQ: **79.2**; ReDisQA: **89.7**.
- AFUMED-ComplexReasoning (internal): **76.9**; MedXpertQA-Text: **51.0**; MedQA-USMLE: **94.2**; MedMCQA: **80.3**.
- AFUSAFE-MedSCE (internal safety): **80.1**; AFUMED-Drug (internal medication-safety evaluation): **90.6**.

Agent / tool use / research:

- BrowseComp, single agent with context: **80.2**; DeepSearchQA: **90.8**; HLE with tools: **57.1**.
- GDPVal-V2-AA: **1,288**; Tau3-Banking: **44.3**; MCP Atlas: **75.6**. The vendor figure does not print units for these rows, so the displayed values are preserved without converting them to percentages.
- BrowseComp used 256K context, up to 1,000 turns, and a discard-all context strategy triggered at 40% context use. The vendor's multi-agent setting allows up to 64 subagents, but the figure row cited here is explicitly single-agent.

Long context:

- AA-LCR: **70.5**; advertised/training context: **256K**. No needle-in-a-haystack result was found.

Coding:

- No exact-model SWE-bench, Terminal-Bench, LiveCodeBench, or other coding-specific result verified.

### Normalized scores (1–100)

- **Tool use: 77/100.** MCP Atlas 75.6, HLE-with-tools 57.1, Tau3-Banking 44.3, and single-agent BrowseComp 80.2 show meaningful tool/research capability; benchmarks are vendor-reported and use distinct task setups. [Official Sante model card](https://huggingface.co/inclusionAI/Ling-3.0-flash-Sante).
- **Reasoning: 81/100.** MedQA-USMLE 94.2, MedMCQA 80.3, and several medical safety/reasoning results are strong for the specialty, but MedXpertQA-Text is 51.0 and several headline results are internal; no standard GPQA result was verified. [Official Sante model card](https://huggingface.co/inclusionAI/Ling-3.0-flash-Sante).
- **Context window: 74/100.** The 256K window falls in the 200K–500K tier and AA-LCR is 70.5, but no retrieval curve or needle test establishes performance near the limit. [Official Sante model card](https://huggingface.co/inclusionAI/Ling-3.0-flash-Sante); [Vercel model catalog](https://models.dev/api.json).
- **Multimodal: 15/100.** This Sante checkpoint accepts and returns text only; the healthcare domain does not imply image or audio input. [Official Sante model card](https://huggingface.co/inclusionAI/Ling-3.0-flash-Sante).
- **Coding: 50/100.** No exact-model coding benchmark was found; no results from general Ling 3.0 Flash are transferred to this medical specialization. [Official Sante model card](https://huggingface.co/inclusionAI/Ling-3.0-flash-Sante).
- **Cost efficiency: 90/100.** The hosted gateway rate is low and MIT weights are available, although local serving a 124B model has substantial hardware cost. [Vercel AI Gateway catalog](https://models.dev/api.json); [official model card](https://huggingface.co/inclusionAI/Ling-3.0-flash-Sante).
- **Overall Score: 59/100.** Half-up mean of the five quality dimensions: (77 + 81 + 74 + 15 + 50) / 5 = 59.4 → 59. Cost is excluded. Best suited to medical-research assistance and evidence retrieval with expert review; the vendor explicitly cautions against using it as a substitute for diagnosis or treatment, and the evidence does not support coding-specialist claims.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-11-01
- Method: Three independent exact-model searches; cross-checked InclusionAI's official model card and checkpoint metadata with live Vercel/Novita catalogs. The model-card evaluation chart was inspected directly because its benchmark table is embedded as an image. Internal, public-standard, and tool-use metrics are identified separately; no results from general Ling 3.0 Flash or other siblings are transferred. Normalized scores are independent interpretations, not vendor scores.
- Reference URLs:
  - [Official Ling 3.0 Flash Sante model card](https://huggingface.co/inclusionAI/Ling-3.0-flash-Sante)
  - [Official Sante model card source](https://huggingface.co/inclusionAI/Ling-3.0-flash-Sante/raw/main/README.md)
  - [Official checkpoint metadata](https://huggingface.co/api/models/inclusionAI/Ling-3.0-flash-Sante)
  - [Vercel AI Gateway model catalog](https://models.dev/api.json)
  - [Novita model catalog](https://models.dev/api.json)
  - [OpenRouter live model registry](https://openrouter.ai/api/v1/models)

---
