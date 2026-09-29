# Gemini 3.8 Flash — findings by Space Bunny Alpha

- Source: Google (`gemini-3.8-flash`; high reasoning mode)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash (high)
- **Short description:** Google's fast, multimodal reasoning model for long-horizon software engineering, autonomous agents, and enterprise workflows.
- **Provider / access:** Google Gemini API (`gemini-3.8-flash`); Google AI Studio; Responses-style Gemini API and OpenAI-compatible integrations are documented by Google. The model code and exact provider route should be kept stable when comparing results.
- **Release / knowledge:** Google documentation lists September 2026 as the latest update. The Google DeepMind model card states a **March 2026 knowledge cutoff**, with the caveat that some domains still follow the January 2025 Gemini 3 family cutoff.
- **IDs:** `gemini-3.8-flash`; repository metadata also identifies the family as `google/gemini-3.8-flash`.
- **Context window:** 1,048,576 input tokens; 65,536 output tokens (Google Gemini API model documentation, verified 2026-09-29).
- **Modalities:** Text, image, video, audio, and PDF input; text output; reasoning/thinking; code execution, computer use (preview), function calling, structured outputs, URL context, and search grounding are supported according to Google. Audio generation and image generation are not supported.
- **Pricing (as of 2026-09-29):** Artificial Analysis reports an introductory $0.75 per 1M input and $3.75 per 1M output tokens for the high variant with a 90% cache discount. This introductory price **expires 2026-12-31**, after which the rate steps up to **$1.50/$7.50** per 1M. Google's page reviewed did not display a price, so the Artificial Analysis figure is retained as the independent pricing source.
- **Architecture:** Proprietary; Google has not disclosed parameter count.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index (v4.3.2): **41/100** (Artificial Analysis, Gemini 3.8 Flash high page, accessed 2026-09-29; composite evaluation). Values seen on earlier index scales (for example 58.7) are **invalidated** by the v4.3.2 recalculation and are not used here.
- Output speed: **238.7 tokens/s** (Artificial Analysis v4.3.2 measurements, accessed 2026-09-29)
- Terminal-Bench 4.0: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found** as a standalone value on the reviewed pages
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- Artificial Analysis Intelligence Index (v4.3.2): **41** (Artificial Analysis, accessed 2026-09-29)
- Knowledge cutoff: **March 2026** (Google DeepMind Gemini 3.8 Flash model card)
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

- No public retrieval-at-length result for this exact model was found. The verified 1M input-token limit and 65K output limit are recorded above; they do not establish long-context retrieval quality.

Sources consulted: [Google Gemini 3.8 Flash model documentation](https://ai.google.dev/gemini-api/docs/models/gemini-3.8-flash), [Google DeepMind Gemini 3.8 Flash model card](https://deepmind.google/models/model-cards/gemini-3-8-flash/), and [Artificial Analysis Gemini 3.8 Flash](https://artificialanalysis.ai/models/gemini-3-8-flash), all accessed 2026-09-29.

### Normalized scores (1–100)

- **Tool use: 82/100.** The model has documented computer-use, code-execution, function-calling, and agent-oriented features, while the only independently surfaced quality number was the AA Intelligence Index 41 on v4.3.2; the lack of exact Terminal-Bench, Tau, GDPval, and tool-call values caps confidence.
- **Reasoning: 82/100.** The verified AA Intelligence Index score of 41 on v4.3.2 places Gemini 3.8 Flash well above the compared-model median, and the documented March 2026 knowledge cutoff is current, but exact GPQA, HLE, CritPt, and hallucination results were not available.
- **Context window: 95/100.** Google verifies 1,048,576 input tokens, meeting the top context tier; no measured retrieval-at-length result was published in the sources reviewed.
- **Multimodal: 95/100.** Google documents text, image, video, audio, and PDF input with text output, including non-text input coverage.
- **Coding: 78/100.** The model is explicitly positioned for long-horizon software engineering and supports code execution, but no exact SWE-bench, DeepSWE, LiveCodeBench, or SciCode value was found in the reviewed public sources.
- **Cost efficiency: 88/100.** The independent introductory price is $0.75/$3.75 per 1M input/output tokens with a reported 90% cache discount, but this promotion expires 2026-12-31 and the rate then doubles to $1.50/$7.50.
- **Overall Score: 86.4/100.** (82 + 82 + 95 + 95 + 78) / 5 = 432 / 5 = 86.4. Best fit: fast, inexpensive multimodal agent and software-engineering work; the post-2026 price step-up and the missing exact benchmark breakdown both warrant independent testing.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-09-29
- Method: Public web research of Google model documentation, the Google DeepMind model card, and Artificial Analysis metadata on index version v4.3.2; older-scale index values are treated as invalidated. Scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
