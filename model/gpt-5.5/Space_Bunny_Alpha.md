# GPT-5.5 — findings by Space Bunny Alpha

- Source: OpenAI (`gpt-5.5`; xhigh reasoning)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5 (xhigh)
- **Short description:** OpenAI's prior-generation frontier reasoning model for professional work, coding, computer use, and agentic workflows; it has since been superseded by GPT-5.6 and GPT-6 families.
- **Provider / access:** OpenAI API (`gpt-5.5`); OpenCode Zen lists the model with a Responses endpoint. The reviewed official OpenAI model URL was unavailable.
- **Release / knowledge:** Artificial Analysis reports release on 2026-04-23; no knowledge cutoff was shown on the reviewed pages.
- **IDs:** `gpt-5.5`; xhigh is a reasoning-effort configuration.
- **Context window:** Artificial Analysis reports approximately 922K tokens (the page's FAQ rounds this to 920K); exact official output limit was not found.
- **Modalities:** Text and image input; text output; reasoning supported. Audio/video are not shown in the reviewed independent model card.
- **Pricing (as of 2026-09-24):** Artificial Analysis reports $5.00 per 1M input and $30.00 per 1M output tokens, with a 90% cache discount and $2.63 Intelligence Index task cost. The official OpenAI page reviewed was unavailable.
- **Architecture:** Proprietary; OpenAI has not disclosed parameter count.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index: **38/100**, rank **#53/210** (Artificial Analysis, accessed 2026-09-24; composite benchmark)
- Output speed: **90.1 tokens/s**; time to first token **69.24s** (Artificial Analysis, accessed 2026-09-24)
- Terminal-Bench 4.0, Tau3-Banking, GDPval-AA, Claw-Eval, Toolathon, MCP-Atlas, and SWE Atlas: **no verified public score found** in the reviewed sources

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **38** (Artificial Analysis, accessed 2026-09-24)
- GPQA Diamond, HLE, LCR/MLCR, CritPt, and hallucination metrics: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- No public retrieval-at-length result for this exact model was found. The 922K context-window figure is a capacity claim, not a retrieval benchmark.

Sources consulted: [Artificial Analysis GPT-5.5](https://artificialanalysis.ai/models/gpt-5-5), accessed 2026-09-24. The attempted official OpenAI model and announcement URLs were unavailable, so no official benchmark values are claimed.

### Normalized scores (1–100)

- **Tool use: 85/100.** AA Index 38 and the model's documented agent orientation support a strong score; exact Terminal-Bench, Tau, GDPval, and tool-call values were not found.
- **Reasoning: 82/100.** AA Index 38 is above the compared-model median of 25, but exact GPQA, HLE, and hallucination measurements were unavailable.
- **Context window: 92/100.** Artificial Analysis reports roughly 922K tokens, near the 1M tier; no retrieval-at-length result was published.
- **Multimodal: 65/100.** Text and image input with text output are supported; audio/video are not shown.
- **Coding: 80/100.** The model is a frontier professional-work and coding model, but no exact SWE, DeepSWE, LiveCodeBench, or SciCode values were found.
- **Cost efficiency: 45/100.** The $5/$30 per 1M input/output price is expensive despite a reported cache discount.
- **Overall Score: 80.8/100.** (85 + 82 + 92 + 65 + 80) / 5 = 80.8. Best fit: established high-end reasoning and coding workflows where a large context and image input matter; prefer newer GPT-5.6/GPT-6 routes for new deployments.

---

## Signature

- Provided by: **Space Bunny Alpha (space-bunny/alpha)** — 2026-09-24
- Method: Public web research of Artificial Analysis metadata; official OpenAI pages were unavailable. Scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
