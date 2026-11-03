# Ling 3.0 Flash Sante — findings by GPT 5.6 Sol

- Source: inclusionAI/Ling-3.0-flash-Sante
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash Sante
- **Short description:** inclusionAI's medical and healthcare fine-tune of Ling 3.0 Flash, optimized for clinical QA, search, and medication safety.
- **Provider / access:** Hosted API; no exact-variant open weights verified.
- **Release / knowledge:** Released 2026-09-04; cutoff undisclosed.
- **IDs:** `inclusionai/ling-3.0-flash-sante`
- **Context window:** 262,144 input / about 32,768 output tokens.
- **Modalities:** Text input/output, switchable reasoning, function calling; no native image/audio input verified.
- **Pricing (as of 2026-10-09):** Free promotional access was reported; durable list price not verified.
- **Architecture:** 124B total / about 5.1B active MoE; proprietary fine-tune of an MIT base.

### Raw benchmarks found

Agent / tool use:

- BrowseComp single-agent: **73.9%**; multi-agent: **86.9%**; HLE with tools: **53.2%**; DeepSearchQA: **86.8%**.

Reasoning / knowledge:

- MedXpertQA-Text: **53.9%**; DiagnosisArena-MCQ: **83.8%**; MedQA-USMLE: **93.5%**; MedMCQA: **81.6%**.

Coding:

- No verified public exact-variant coding benchmark found.

Long context:

- Search/tool evaluations used a 256K context; no general MRCR score found.

Sources: [evaluation compilation](https://aiwiki.ai/wiki/ling_3_0_flash_sante), [independence caveat](https://anyapi.ai/ai-models/inclusionai-ling-3-0-flash-sante-free).

### Normalized scores (1–100)

- **Tool use: 86/100.** BrowseComp, DeepSearchQA, and HLE-with-tools are strong, though vendor-reported.
- **Reasoning: 84/100.** Excellent medical exam and diagnosis results support a high domain score.
- **Context window: 82/100.** 256K was exercised in tool evaluations, but general retrieval evidence is absent.
- **Multimodal: 15/100.** The healthcare endpoint is text-only.
- **Coding: 55/100.** Base-model coding capability is plausible, but no exact-fine-tune coding score was found.
- **Cost efficiency: 96/100.** Promotional free access and 5.1B active parameters are highly efficient, with lifecycle uncertainty.
- **Overall Score: 64/100.** The half-up mean of the five quality dimensions; best for medical text research, not general coding or diagnosis without expert review.

---

## Signature

- Provided by: **GPT 5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-09
- Method: Fresh public-internet research with explicit separation of vendor-reported and independent evidence; scores are normalized interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.

