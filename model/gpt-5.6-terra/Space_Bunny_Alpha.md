# GPT-5.6 Terra — findings by Space Bunny Alpha

- Source: OpenAI (`gpt-5.6-terra`; max effort)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Terra (max)
- **Short description:** OpenAI's prior-generation frontier reasoning model, evaluated here in max effort; the model has since been superseded by GPT-6 Sol.
- **Provider / access:** OpenAI API (`gpt-5.6-terra`); served by OpenAI and multiple providers. The reviewed official OpenAI model URL was unavailable.
- **Release / knowledge:** Artificial Analysis reports release on 2026-07-09; no knowledge cutoff was shown on the reviewed pages.
- **IDs:** `gpt-5.6-terra`; max is a reasoning-effort configuration.
- **Context window:** 1M tokens (Artificial Analysis, accessed 2026-09-24); exact official output limit was not found in the reviewed OpenAI pages.
- **Modalities:** Text and image input; text output; reasoning supported (Artificial Analysis). No audio/video support was shown.
- **Pricing (as of 2026-09-24):** Artificial Analysis reports $2.00 per 1M input and $12.00 per 1M output tokens, with a 90% cache discount. The official OpenAI page reviewed was unavailable.
- **Architecture:** Proprietary; OpenAI has not disclosed parameter count.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index: **42/100**, rank **#38/210** (Artificial Analysis, accessed 2026-09-24; composite benchmark)
- Output speed: **82.7 tokens/s**; Intelligence Index task cost: **$1.40** (Artificial Analysis, accessed 2026-09-24)
- Terminal-Bench 4.0: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found** as a standalone value
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **42** (Artificial Analysis, accessed 2026-09-24)
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

Sources consulted: [Artificial Analysis GPT-5.6 Terra](https://artificialanalysis.ai/models/gpt-5-6-terra), accessed 2026-09-24. The attempted official OpenAI model and announcement URLs were unavailable, so no official benchmark values are claimed.

### Normalized scores (1–100)

- **Tool use: 87/100.** AA Index 42 is strong and the model is a reasoning model, but exact Terminal-Bench, Tau, GDPval, and tool-call measurements were not found.
- **Reasoning: 88/100.** AA Index 42 is well above the comparable-model median of 25; exact GPQA, HLE, CritPt, and hallucination values were unavailable.
- **Context window: 95/100.** A 1M-token context window is verified by Artificial Analysis; no retrieval-at-length result was published.
- **Multimodal: 65/100.** Text and image input with text output are supported; audio/video are not shown.
- **Coding: 85/100.** The model is positioned for frontier reasoning, but exact SWE-bench, DeepSWE, LiveCodeBench, and SciCode values were not available.
- **Cost efficiency: 70/100.** The reported $2/$12 per 1M input/output price is near the compared median and benefits from a 90% cache discount, but remains paid.
- **Overall Score: 84.0/100.** (87 + 88 + 95 + 65 + 85) / 5 = 84.0. Best fit: established reasoning and coding workloads where a 1M context and image input matter; prefer newer GPT-6 routes for new deployments.

---

## Signature

- Provided by: **Space Bunny Alpha (space-bunny/alpha)** — 2026-09-24
- Method: Public web research of Artificial Analysis metadata; official OpenAI pages were unavailable. Scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
