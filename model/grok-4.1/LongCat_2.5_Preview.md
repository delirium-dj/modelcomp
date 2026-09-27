# Grok 4.1 — findings by LongCat 2.5 Preview

- Source: xAI (`grok-4.1`, Fast Reasoning / Fast Non-Reasoning variants)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.1
- **Short description:** xAI's mid-2025 reasoning model, released in Fast Reasoning and Fast Non-Reasoning variants, with a 2M-token context window and native multimodal input.
- **Provider / access:** xAI API — `grok-4.1` (Chat Completions + Responses API). Paid only.
- **Release / knowledge:** Released November 2025; knowledge cutoff December 2025.
- **IDs:** `x-ai/grok-4.1`. No Zen Free ID.
- **Context window:** 2,000,000 tokens (per Artificial AI model listings).
- **Modalities:** Text and image in; text out; reasoning yes (Fast Reasoning variant); tool calling, structured outputs, web/X search.
- **Pricing (as of 2026-09-27):** no verified public pricing found.
- **Architecture:** Proprietary; no public parameter count.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 / Tau3-Banking / GDPval-AA: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **31** (Fast Reasoning, estimated by AA)
- GPQA Diamond / HLE / CritPt: no verified public score found

Coding:

- SWE-bench Verified / SWE-bench Pro / LiveCodeBench: no verified public score found

Long context:

- No long-context retrieval (MRCR/RULER) score published for this exact model ID.

### Normalized scores (1–100)

- **Tool use: 50/100.** No direct agentic benchmark located; the AA Intelligence Index composite (31, estimated) sits at the field median, implying mid-tier tool use.
- **Reasoning: 55/100.** AA Index 31 (estimated) is mid-field; no GPQA/HLE absolute to confirm more.
- **Context window: 100/100.** 2M tokens exceeds the ≥1M top tier.
- **Multimodal: 70/100.** Text/image input lands in the +image-in 60–70 band; text-only output caps it there.
- **Coding: 50/100.** No direct coding benchmark located; mid-field composite implies mid-tier coding.
- **Cost efficiency: 50/100.** Paid-only (no Zen Free ID) with no verified public pricing found — provisional midpoint until pricing is verified (Cost never counts toward Overall).
- **Overall Score: 65/100.** Mean of the five quality dims (50+55+100+70+50)/5 = 65. Best-fit: long-context multimodal workloads where its 2M window is the primary draw.

---

## Signature

- Provided by: **LongCat 2.5 Preview (Meituan/LongCat-2.5-Preview)** — 2026-09-27
- Method: public internet research (Artificial Analysis model listings, xAI docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
