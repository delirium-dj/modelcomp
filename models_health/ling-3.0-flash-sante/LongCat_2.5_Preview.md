# Ling 3.0 Flash Sante — findings by LongCat 2.5 Preview

- Source: InclusionAI/Ling-3.0-Flash-Sante
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash Sante
- **Short description:** Health and medicine-focused variant of Ling 3.0 Flash from InclusionAI, built on the same 124B/5.1B-active MoE architecture. Adds medical knowledge reasoning, clinical safety, evidence-based retrieval, and long-horizon medical task capabilities while retaining general reasoning, coding, and agentic skills.
- **Provider / access:** Novita AI (`inclusionai/ling-3.0-flash-sante`), OpenRouter (free), Vercel AI Gateway. OpenAI-compatible API.
- **Release / knowledge:** 2026-09-04.
- **IDs:** `inclusionai/ling-3.0-flash-sante` (also `ling-3.0-flash-sante-free` on some providers)
- **Context window:** 262,144 tokens (256K) — verified via Novita, Vercel, OpenRouter; up to 32,768 output tokens.
- **Modalities:** Text input; Text output. Reasoning: yes. Tool calling: yes (function calling).
- **Pricing (as of 2026-10-09):** Free (time-limited) on Novita AI and OpenRouter. MIT open weights.
- **Architecture:** 124B total / 5.1B active MoE, hybrid linear attention (5:1 KDA + MLA), same base as Ling 3.0 Flash. Medical-tuned variant.

### Raw benchmarks found

Agent / tool use:

- Function calling: supported (Novita, Vercel)
- Medical knowledge reasoning, evidence-based retrieval (Novita)
- Long-horizon medical tasks (Novita)

Reasoning / knowledge:

- Intelligence Index (parent model): 25–37.8 (varies by source)
- GPQA (parent model): 85.0%
- AIME 2026 (parent model): 93.2%
- Medical knowledge: specialized tuning (Novita)

Coding:

- SWE-bench Pro (parent model): 56.6%
- LiveCodeBench (parent model): 82.8%
- Terminal-Bench 2.1 (parent model): 57.0%

Long context:

- Context window: **262,144 tokens** (256K) — verified via Novita, Vercel, OpenRouter

Multimodal:

- Text input only (Novita, Vercel)
- No image, audio, or video input

### Normalized scores (1–100)

- **Tool use: 70/100.** Function calling + medical evidence retrieval. Good tool use inherited from parent model.
- **Reasoning: 65/100.** Intelligence Index ~25-37.8, GPQA 85%, AIME 93.2%. Moderate reasoning with medical specialization.
- **Context window: 82/100.** 256K token context. Good long-context capability for medical documents.
- **Multimodal: 15/100.** Text-only input/output. No image, audio, or video support.
- **Coding: 68/100.** SWE-bench Pro 56.6%, LiveCodeBench 82.8%. Good coding inherited from parent model.
- **Cost efficiency: 95/100.** Free (time-limited), MIT open weights. Exceptional value.
- **Overall Score: 60/100.** Mean of Tool (70), Reasoning (65), Context (82), Multimodal (15), Coding (68) = 300/5 = 60. Good medical-specialized model with excellent cost efficiency, but text-only and moderate general capabilities.

---

## Signature

- Provided by: **LongCat 2.5 Preview (meituan/longcat-2.5-preview)** — 2026-10-09
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
