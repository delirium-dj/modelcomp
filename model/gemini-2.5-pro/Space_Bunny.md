# Gemini 2.5 Pro — findings by Space Bunny Alpha

- Source: Google (`gemini-2.5-pro`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Pro
- **Short description:** Google's legacy but still documented thinking model for complex code, mathematics, STEM reasoning, large datasets, codebases, and documents.
- **Provider / access:** Google Gemini API (`gemini-2.5-pro`); Google AI Studio and Gemini-compatible integrations. Google limits new access to legacy users but continues serving the model.
- **Release / knowledge:** Google lists June 2025 as the latest update; knowledge cutoff January 2025.
- **IDs:** `gemini-2.5-pro`.
- **Context window:** 1,048,576 input tokens; 65,536 output tokens (Google Gemini API documentation, verified 2026-09-24).
- **Modalities:** Audio, image, video, text, and PDF input; text output; thinking, code execution, function calling, structured outputs, URL context, search grounding, and Maps grounding supported.
- **Pricing (as of 2026-09-24):** Artificial Analysis reports $1.25 per 1M input and $10.00 per 1M output tokens, with a 90% cache discount; the official model page reviewed did not show price.
- **Architecture:** Proprietary; Google has not disclosed parameter count.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index: **16/100**, rank **#158/210** (Artificial Analysis, accessed 2026-09-24; composite benchmark)
- Output speed: **125.3 tokens/s**; time to first token **23.94s** (Artificial Analysis, accessed 2026-09-24)
- Terminal-Bench 2.0/4.0, Tau3-Banking, GDPval-AA, Claw-Eval, Toolathon, MCP-Atlas, and SWE Atlas: **no verified public score found** in the reviewed sources

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **16** (Artificial Analysis, accessed 2026-09-24)
- GPQA Diamond, HLE, LCR/MLCR, CritPt, and hallucination metrics: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- No public retrieval-at-length result for this exact model was found. Google verifies a 1,048,576-token input limit and 65,536-token output limit.

Sources consulted: [Google Gemini 2.5 Pro documentation](https://ai.google.dev/gemini-api/docs/models/gemini-2.5-pro) and [Artificial Analysis Gemini 2.5 Pro](https://artificialanalysis.ai/models/gemini-2-5-pro), accessed 2026-09-24. Google's current documentation recommends newer models for new projects.

### Normalized scores (1–100)

- **Tool use: 72/100.** Google documents code execution, function calling, search grounding, and structured outputs; the AA Index is low at 16 and exact Terminal-Bench, Tau, GDPval, and tool-call values were not found.
- **Reasoning: 70/100.** The model is designed for complex reasoning, but AA Index 16 is below the compared-model median of 25; exact GPQA, HLE, and hallucination values were unavailable.
- **Context window: 95/100.** Google verifies 1,048,576 input tokens, meeting the top context tier; no retrieval-at-length result was published.
- **Multimodal: 90/100.** Google verifies audio, image, video, text, and PDF input with text output.
- **Coding: 72/100.** Google explicitly positions the model for code, codebases, and documents, but no exact SWE, DeepSWE, LiveCodeBench, or SciCode score was found.
- **Cost efficiency: 82/100.** The reported $1.25/$10 price and 90% cache discount are competitive for a 1M-context Pro model, though this is paid pricing.
- **Overall Score: 79.8/100.** (72 + 70 + 95 + 90 + 72) / 5 = 79.8. Best fit: legacy multimodal document and code reasoning where existing Gemini 2.5 integrations matter; new projects should prefer Gemini 3.5/3.8 or newer Pro models.

---

## Signature

- Provided by: **Space Bunny Alpha (space-bunny/alpha)** — 2026-09-24
- Method: Public web research of Google model documentation and Artificial Analysis metadata; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
