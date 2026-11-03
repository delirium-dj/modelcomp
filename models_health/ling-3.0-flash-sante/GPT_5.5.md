# Ling 3.0 Flash Santé — findings by GPT 5.5

- Source: InclusionAI / Novita (`ling-3.0-flash-sante`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash Santé
- **Short description:** Medical-tuned Ling 3.0 Flash variant for healthcare/clinical assistant workloads, exposed through free and hosted API routes.
- **Provider / access:** OpenRouter/Novita-style routes; some listings expose a free route.
- **Release / knowledge:** Public provider pages appeared September 2026; cutoff not stated.
- **IDs:** `ling-3.0-flash-sante`, `inclusionai/ling-3.0-flash-sante`.
- **Context window:** **262,144** tokens; **32,768** completion limit in OpenRouter-style API metadata.
- **Modalities:** Text/code/medical-domain text; no verified native image/audio/video support for this exact Sante route.
- **Pricing (as of 2026-10-09):** AI Wiki reports a free listing with zero prompt and completion pricing; provider routes may vary.
- **Architecture:** Medical-tuned MoE, public AI Wiki page lists **124B total / 5.1B active**.

### Raw benchmarks found

Agent / tool use:

- AI Wiki reports support for `tools`, `tool_choice`, `reasoning`, `logprobs`, `seed`, and common sampling parameters; JSON output is not enforced (`https://aiwiki.ai/wiki/ling_3_0_flash_sante`).

Reasoning / knowledge:

- Public AI Wiki benchmark table compares Ling-3.0-Flash-Sante against DeepSeek-V4-Flash, GLM-5.3-Flash, MiniMax-M2.7, Step-3.7-Flash, Nemotron-3-Super, Kimi K3, Claude Opus 4.8, GPT-5.6 Sol, and Gemini 3.6 Flash, but exact table values were not fully visible in snippets.

Coding:

- No exact SWE-bench/LiveCodeBench row found; this variant is medical-tuned rather than coding-specialized.

Long context:

- Public route metadata reports **262K** context.

### Normalized scores (1–100)

- **Tool use: 62/100.** Tool API support is explicit, but no standard agent benchmark row was recovered.
- **Reasoning: 66/100.** Medical-tuned benchmark comparisons support above-average domain reasoning, capped by missing exact values.
- **Context window: 78/100.** 262K context is strong.
- **Multimodal: 30/100.** No native multimodal support verified for this exact route.
- **Coding: 58/100.** Coding is not the main focus, though Ling Flash lineage is usable for code.
- **Cost efficiency: 100/100.** A free route earns maximum cost score, subject to quota and provider caveats.
- **Overall Score: 59/100.** Half-up mean of the five quality dimensions; best fit is free/low-cost medical-domain text assistance.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-09
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

