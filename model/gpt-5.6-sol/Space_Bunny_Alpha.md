# GPT-5.6 Sol — findings by Space Bunny Alpha

- Source: OpenAI (`gpt-5.6-sol`; max effort)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Sol (max)
- **Short description:** OpenAI's prior-generation frontier reasoning model, evaluated here in its max-effort configuration; the model has since been superseded by GPT-6 Sol.
- **Provider / access:** OpenAI API (`gpt-5.6-sol`); OpenAI and multiple providers serve the model. The reviewed pages did not expose a current official model-card URL.
- **Release / knowledge:** Artificial Analysis reports release on 2026-07-09; no knowledge cutoff was shown on the reviewed pages.
- **IDs:** `gpt-5.6-sol`; max is a reasoning-effort configuration.
- **Context window:** 1M tokens (Artificial Analysis, accessed 2026-09-24); exact official output limit was not found in the reviewed OpenAI pages.
- **Modalities:** Text and image input; text output; reasoning supported (Artificial Analysis). No audio/video support was shown in the reviewed source.
- **Pricing (as of 2026-09-24):** Artificial Analysis reports $4.00 per 1M input and $20.00 per 1M output tokens, with a 90% cache discount. The official OpenAI page reviewed was unavailable.
- **Architecture:** Proprietary; OpenAI has not disclosed parameter count.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index: **47/100**, rank **#19/210** (Artificial Analysis, accessed 2026-09-24; composite benchmark)
- Output speed: **76.8 tokens/s**; Intelligence Index task cost: **$1.99** (Artificial Analysis, accessed 2026-09-24)
- Terminal-Bench 4.0: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found** as a standalone value
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **47** (Artificial Analysis, accessed 2026-09-24)
- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found** as a standalone value
- LCR / MLCR: **no verified public score found** as a standalone value
- CritPt: **no verified public score found** as a standalone value
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- No public retrieval-at-length result for this exact model was found. The verified 1M-token context-window claim is a capacity fact, not a retrieval result.

Sources consulted: [Artificial Analysis GPT-5.6 Sol](https://artificialanalysis.ai/models/gpt-5-6-sol), accessed 2026-09-24. The attempted official OpenAI model and announcement URLs were unavailable, so no official benchmark values are claimed.

### Normalized scores (1–100)

- **Tool use: 91/100.** AA Index 47 is frontier-level and the model is a reasoning model, but exact Terminal-Bench, Tau, GDPval, and tool-call measurements were not found.
- **Reasoning: 92/100.** AA Index 47 is well above the comparable-model median of 25; exact GPQA, HLE, CritPt, and hallucination values were unavailable.
- **Context window: 95/100.** A 1M-token context window is verified by Artificial Analysis; no retrieval-at-length result was published.
- **Multimodal: 65/100.** Text and image input with text output are supported; audio/video are not shown.
- **Coding: 88/100.** The model is a frontier reasoning model, but exact SWE-bench, DeepSWE, LiveCodeBench, and SciCode values were not available.
- **Cost efficiency: 55/100.** The reported $4/$20 per 1M input/output price is materially above the compared median despite caching.
- **Overall Score: 86.2/100.** (91 + 92 + 95 + 65 + 88) / 5 = 86.2. Best fit: high-end reasoning and coding when the model is already available; prefer GPT-6 Sol for new deployments where supported.

---

## Signature

- Provided by: **Space Bunny Alpha (space-bunny/alpha)** — 2026-09-24
- Method: Public web research of Artificial Analysis metadata; official OpenAI pages were unavailable. Scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
