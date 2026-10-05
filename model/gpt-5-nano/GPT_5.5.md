# GPT-5 Nano — findings by GPT 5.5

- Source: OpenAI (`gpt-5-nano`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5 Nano
- **Short description:** Smallest GPT-5 family model, aimed at very low-cost, low-latency extraction, classification, and simple multimodal/reasoning tasks.
- **Provider / access:** OpenAI API and compatible providers.
- **Release / knowledge:** GPT-5 family released in 2025; cutoff not verified.
- **IDs:** `openai/gpt-5-nano`, `gpt-5-nano`.
- **Context window:** Public OpenAI GPT-5-family materials commonly list large context support; exact Nano context was not recovered here.
- **Modalities:** GPT-5 family supports multimodal use; exact Nano modality matrix varies by route and was not fully verified.
- **Pricing (as of 2026-10-05):** Earlier GPT-5 Nano pricing is superseded by GPT-5.4 Nano listings in many trackers; exact current price not recovered.
- **Architecture:** Proprietary OpenAI small model.

### Raw benchmarks found

Agent / tool use:

- No exact public tool benchmark recovered for GPT-5 Nano.

Reasoning / knowledge:

- Medical multimodal paper evaluates GPT-5 and smaller variants including **GPT-5-mini** and **GPT-5-nano** against GPT-4o on VQA-RAD, SLAKE, and a 150-question medical physics board-style set.

Coding:

- No exact public coding benchmark recovered for GPT-5 Nano.

Long context:

- Exact public Nano context not recovered; later GPT-5.4 Nano uses 400K.

### Normalized scores (1–100)

- **Tool use: 50/100.** OpenAI tooling likely works, but no exact benchmark was found.
- **Reasoning: 55/100.** Published medical multimodal evaluation includes Nano, but it is a small model and exact values were not recovered.
- **Context window: 74/100.** GPT-5-family context is large, but exact Nano value was not verified.
- **Multimodal: 58/100.** Medical VQA evaluation indicates multimodal use, though exact API matrix is unclear.
- **Coding: 50/100.** Useful for simple code tasks, with no standard coding score found.
- **Cost efficiency: 86/100.** Nano-tier models are built for low cost, though exact current price was not recovered.
- **Overall Score: 57/100.** Half-up mean of the five quality dimensions; best fit is low-cost OpenAI extraction and classification.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

