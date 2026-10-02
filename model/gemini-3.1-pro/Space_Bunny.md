# Gemini 3.1 Pro — findings by Space Bunny Alpha

- Source: Google (`gemini-3.1-pro-preview`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro Preview
- **Short description:** Google's reasoning-focused Pro model for software engineering, grounded factual work, and multi-step agent/tool workflows.
- **Provider / access:** Google Gemini API (`gemini-3.1-pro-preview`); Google AI Studio. A separate `gemini-3.1-pro-preview-customtools` endpoint is documented for mixed bash/custom-tool workflows.
- **Release / knowledge:** Google lists the model as a February 2026 preview; the Gemini API deprecation schedule gives the exact release date as **2026-02-19** and states that `gemini-3.1-pro-preview` has **no shutdown date announced** as of 2026-09-29. No knowledge cutoff was shown on the official model page reviewed.
- **IDs:** `gemini-3.1-pro-preview`; custom-tools variant `gemini-3.1-pro-preview-customtools`.
- **Context window:** 1,048,576 input tokens; 65,536 output tokens (Google Gemini API documentation, verified 2026-09-29; AA rounds this to 1M).
- **Modalities:** Text, image, video, audio/speech, and PDF input; text output; thinking, code execution, function calling, structured outputs, URL context, search grounding, and Maps grounding supported. Audio generation, image generation, and Live API are not supported.
- **Pricing (as of 2026-09-29):** Artificial Analysis reports $2.00 per 1M input and $12.00 per 1M output tokens, with a 90% cache discount (blended $1.74 per 1M); the official page reviewed did not show a price.
- **Architecture:** Proprietary; Google has not disclosed parameter count.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index: **30/100**, rank **#87/216** (Artificial Analysis, accessed 2026-09-29; composite benchmark). Index version is v4.3.2 — the 30 figure is unchanged from the 2026-09-24 reading, so this model was not affected by the index re-basing; on the current scale the frontier ceiling is 58, putting this preview well behind it.
- Output speed: **113.2 tokens/s** (revised down from 120.2 tokens/s as measured on 2026-09-24); Intelligence Index task cost: **$0.67** (unchanged); time to first token: **25.87s** (Artificial Analysis, accessed 2026-09-29)
- Terminal-Bench 4.0: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found** as a standalone value on the reviewed pages
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **30** for the preview, v4.3.2 scale (unchanged from the 2026-09-24 reading)
- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found** as a standalone value on the reviewed pages
- LCR / MLCR: **no verified public score found** as a standalone value on the reviewed pages
- CritPt: **no verified public score found** as a standalone value on the reviewed pages
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found** as a standalone value on the reviewed pages
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- No public retrieval-at-length result for this exact preview was found. Google verifies the 1,048,576-token input limit; that is a capacity fact, not a retrieval score.

Sources consulted: [Google Gemini 3.1 Pro preview documentation](https://ai.google.dev/gemini-api/docs/models/gemini-3.1-pro-preview), [Gemini API deprecation schedule](https://ai.google.dev/gemini-api/docs/deprecations), and [Artificial Analysis Gemini 3.1 Pro Preview](https://artificialanalysis.ai/models/gemini-3-1-pro-preview), all accessed 2026-09-29. Re-validation: the Intelligence Index value of 30 holds on the v4.3.2 scale; the exact release date (2026-02-19), the still-open (no announced shutdown) preview status, and a revised output speed were added.

### Normalized scores (1–100)

- **Tool use: 80/100.** Google documents code execution, function calling, structured outputs, search grounding, and a custom-tools endpoint; exact Terminal-Bench, Tau, GDPval, and tool-call measurements were not available.
- **Reasoning: 80/100.** The verified AA Intelligence Index score of 30 (v4.3.2) is above the comparable-model median of 26, but exact GPQA, HLE, CritPt, and hallucination values were not found.
- **Context window: 95/100.** Google verifies 1,048,576 input tokens, meeting the top context tier; no exact-model retrieval-at-length result was published.
- **Multimodal: 95/100.** Google verifies text, image, video, audio, and PDF input with text output.
- **Coding: 76/100.** The model is explicitly optimized for software engineering and supports code execution, but no exact SWE-bench, DeepSWE, LiveCodeBench, or SciCode score was found in the reviewed public sources.
- **Cost efficiency: 75/100.** The independent price is $2/$12 per 1M input/output tokens with a reported 90% cache discount; this is paid, not free, pricing.
- **Overall Score: 85.2/100.** (80 + 80 + 95 + 95 + 76) / 5 = 85.2. Best fit: grounded multimodal agent workflows and software engineering, with independent testing recommended because the exact benchmark breakdown is sparse.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-09-29
- Method: Public web research of Google model documentation and Artificial Analysis metadata; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
