# Gemini 3.5 Flash — findings by Space Bunny Alpha

- Source: Google (`gemini-3.5-flash`; high reasoning mode)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash (high)
- **Short description:** Google's fast, multimodal reasoning model for sub-agent deployment, multi-step workflows, long-horizon tasks, and rapid coding iterations; now superseded by Gemini 3.7 Flash.
- **Provider / access:** Google Gemini API (`gemini-3.5-flash`); Google AI Studio. High is a reasoning configuration.
- **Release / knowledge:** Google lists May 2026 as the latest update; no public knowledge cutoff was shown on the official model page.
- **IDs:** `gemini-3.5-flash`; repository family metadata identifies `google/gemini-3.5-flash`.
- **Context window:** 1,048,576 input tokens; 65,536 output tokens (Google Gemini API documentation, verified 2026-09-24).
- **Modalities:** Text, image, video, audio, and PDF input; text output; thinking, code execution, computer use (preview), function calling, structured outputs, URL context, and search grounding supported.
- **Pricing (as of 2026-09-24):** Artificial Analysis reports $1.50 per 1M input and $9.00 per 1M output tokens, with a 90% cache discount. The official page reviewed did not display price.
- **Architecture:** Proprietary; Google has not disclosed parameter count.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index: **33/100**, rank **#72/210** (Artificial Analysis, accessed 2026-09-24; composite benchmark)
- Output speed: **207.8 tokens/s**; time to first token **14.18s** (Artificial Analysis, accessed 2026-09-24)
- Terminal-Bench 4.0, Tau3-Banking, GDPval-AA, Claw-Eval, Toolathon, MCP-Atlas, and SWE Atlas: **no verified public score found** in the reviewed sources

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **33** (Artificial Analysis, accessed 2026-09-24)
- GPQA Diamond, HLE, LCR/MLCR, CritPt, and hallucination metrics: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- No public retrieval-at-length result for this exact model was found. Google verifies a 1,048,576-token input limit and 65,536-token output limit.

Sources consulted: [Google Gemini 3.5 Flash documentation](https://ai.google.dev/gemini-api/docs/models/gemini-3.5-flash) and [Artificial Analysis Gemini 3.5 Flash](https://artificialanalysis.ai/models/gemini-3-5-flash), accessed 2026-09-24.

### Normalized scores (1–100)

- **Tool use: 79/100.** Google documents computer use, code execution, function calling, and sub-agent workflow support; exact Terminal-Bench, Tau, GDPval, and tool-call values were not found.
- **Reasoning: 79/100.** AA Index 33 is above the compared-model median of 25; exact GPQA, HLE, CritPt, and hallucination values were unavailable.
- **Context window: 95/100.** Google verifies 1,048,576 input tokens, meeting the top context tier; no retrieval-at-length result was published.
- **Multimodal: 95/100.** Google verifies text, image, video, audio, and PDF input with text output.
- **Coding: 76/100.** The model is designed for rapid coding iterations and supports code execution, but no exact SWE, DeepSWE, LiveCodeBench, or SciCode score was found.
- **Cost efficiency: 78/100.** The independent $1.50/$9.00 price and 90% cache discount are reasonable, though materially higher than Gemini 3.6/3.7.
- **Overall Score: 84.8/100.** (79 + 79 + 95 + 95 + 76) / 5 = 84.8. Best fit: high-volume multimodal sub-agents and coding workflows; prefer Gemini 3.7/3.8 for newer deployments.

---

## Signature

- Provided by: **Space Bunny Alpha (space-bunny/alpha)** — 2026-09-24
- Method: Public web research of Google model documentation and Artificial Analysis metadata; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
