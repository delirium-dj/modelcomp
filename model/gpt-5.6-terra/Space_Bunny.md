# GPT-5.6 Terra — findings by Space Bunny Alpha

- Source: OpenAI (`gpt-5.6-terra`; max effort)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> Re-validation 2026-09-29: the Artificial Analysis Intelligence Index was re-based to **v4.3.2** (10 evaluations: AA-Briefcase v1.1, GDPval-AA v2.1, AutomationBench-AA, Terminal-Bench 4.0, SciCode, Humanity's Last Exam, GDP.pdf, CritPt, AA-Omniscience, AA-LCR v1.1). **GPT-5.6 Terra (max) is unchanged at 42** on v4.3.2, so no score moved. Two surrounding facts moved: rank **#38 → #41 of 216**, and measured output speed 82.7 → **98.6 tokens/s**. One new fact was added: OpenCode Zen now exposes a long-context price tier for Terra ($4/$18 above 272K tokens).

## Model card

- **Name:** GPT-5.6 Terra (max)
- **Short description:** OpenAI's prior-generation frontier reasoning model, evaluated here in max effort; the model has since been superseded by the GPT-6 line.
- **Provider / access:** OpenAI API (`gpt-5.6-terra`); served by OpenAI plus six third-party providers. Still listed on OpenCode Zen at `https://opencode.ai/zen/v1/responses`. The official OpenAI model URL was still unavailable on re-check.
- **Release / knowledge:** Artificial Analysis reports release on 2026-07-09; no knowledge cutoff was shown on the reviewed pages.
- **IDs:** `gpt-5.6-terra`; max is a reasoning-effort configuration.
- **Context window:** 1M tokens (Artificial Analysis, accessed 2026-09-29); exact official output limit was not found in the reviewed OpenAI pages.
- **Modalities:** Text and image input; text output; reasoning supported (Artificial Analysis). No audio/video support was shown.
- **Pricing (as of 2026-09-29):** Artificial Analysis reports $2.00 per 1M input and $12.00 per 1M output tokens with a 90% cache discount (blended 7:2:1 rate $1.74 per 1M). OpenCode Zen confirms a tiered price: **$2.00 / $12.00 per 1M at 272K tokens or fewer, $4.00 / $18.00 above 272K** (cached read $0.20 / $0.40, cached write $2.50 / $5.00). The official OpenAI page reviewed was unavailable.
- **Architecture:** Proprietary; OpenAI has not disclosed parameter count.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index v4.3.2: **42/100**, rank **#41/216** (Artificial Analysis, accessed 2026-09-29; composite benchmark; value unchanged from the v4.1.1 reading of 42)
- Output speed: **98.6 tokens/s** (was 82.7 on 2026-09-24); time to first answer token **144.87s**; Intelligence Index task cost **$1.40** (Artificial Analysis, accessed 2026-09-29)
- Verbosity: **120M** output tokens across the Intelligence Index, vs a comparable-model median of 88M
- Terminal-Bench 4.0: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA v2.1: **no verified public score found** as a standalone value
- AutomationBench-AA, Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- Artificial Analysis Intelligence Index v4.3.2: **42** (Artificial Analysis, accessed 2026-09-29; unchanged)
- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found** as a standalone value
- AA-LCR v1.1, CritPt, AA-Omniscience Accuracy, and Hallucination Rate: **no verified public score found** as standalone values

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- No public retrieval-at-length result for this exact model was found. The verified 1M-token context-window claim is a capacity fact, not a retrieval result — and OpenCode Zen's new $4/$18 tier above 272K tokens is a price signal that long-context use is not cheap on this route.

Sources consulted: [Artificial Analysis GPT-5.6 Terra](https://artificialanalysis.ai/models/gpt-5-6-terra) and [OpenCode Zen documentation](https://opencode.ai/docs/zen/), accessed 2026-09-29. The attempted official OpenAI model and announcement URLs were unavailable, so no official benchmark values are claimed.

### Normalized scores (1–100)

- **Tool use: 87/100.** AA Index 42 is strong and the model is a reasoning model, but exact Terminal-Bench 4.0, Tau, GDPval, and tool-call measurements were not found.
- **Reasoning: 88/100.** AA Index 42 is well above the 2026-09-29 comparable-model median of 26; exact GPQA, HLE, CritPt, and hallucination values were unavailable.
- **Context window: 95/100.** A 1M-token context window is verified by Artificial Analysis; no retrieval-at-length result was published.
- **Multimodal: 65/100.** Text and image input with text output are supported; audio/video are not shown.
- **Coding: 85/100.** The model is positioned for frontier reasoning, but exact SWE-bench, DeepSWE, LiveCodeBench, and SciCode values were not available.
- **Cost efficiency: 70/100.** $2/$12 per 1M input/output (below 272K tokens) is near the compared median with a 90% cache discount, and $1.40 per index task is cheap for a 42-point model — but the price doubles above 272K tokens and the model remains paid.
- **Overall Score: 84.0/100.** (87 + 88 + 95 + 65 + 85) / 5 = 420 / 5 = 84.0. Best fit: established reasoning and coding workloads where a 1M context and image input matter; prefer newer GPT-6 routes for new deployments.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-09-29
- Method: Public web research of Artificial Analysis (v4.3.2 Intelligence Index, accessed 2026-09-29) and OpenCode Zen pricing; official OpenAI pages were unavailable. Scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `Space_Bunny_Alpha_v2.md`, using the same headings.
