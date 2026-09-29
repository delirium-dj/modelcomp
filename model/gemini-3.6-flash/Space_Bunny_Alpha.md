# Gemini 3.6 Flash — findings by Space Bunny Alpha

- Source: Google (`gemini-3.6-flash`; high reasoning mode)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.6 Flash (high)
- **Short description:** Google's fast, multimodal reasoning model for agentic loops, code generation, spatial reasoning, and long-horizon tasks; superseded by Gemini 3.7 Flash and Gemini 3.8 Flash, and now marked deprecated by Google.
- **Provider / access:** Google Gemini API (`gemini-3.6-flash`); Google AI Studio. High is a reasoning configuration. The model remains resolvable but is no longer a recommended deployment target.
- **Release / knowledge:** Google lists July 2026 as the latest update; no public knowledge cutoff was shown on the official model page reviewed.
- **IDs:** `gemini-3.6-flash`; repository family metadata identifies `google/gemini-3.6-flash`.
- **Context window:** 1,048,576 input tokens; 65,536 output tokens (Google Gemini API documentation, verified 2026-09-29).
- **Modalities:** Text, image, video, audio, and PDF input; text output; thinking, code execution, computer use (preview), function calling, structured outputs, URL context, and search grounding supported.
- **Pricing (as of 2026-09-29):** Artificial Analysis reports $0.75 per 1M input and $3.75 per 1M output tokens with a large cache discount; third-party catalogs now also show the successor Flash tier at $1.50/$7.50 after introductory pricing. The official page reviewed did not display a price, so the independent figures are retained with this caveat.
- **Architecture:** Proprietary; Google has not disclosed parameter count.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index (v4.3.2): **34/100**, rank **#69** (Artificial Analysis, accessed 2026-09-29; composite benchmark). Earlier index versions rendered a higher number for this model; the v4.3.2 value is the one used here and earlier-scale values are not comparable.
- Output speed: **182.4 tokens/s** (Artificial Analysis v4.3.2 measurements, accessed 2026-09-29).
- Terminal-Bench 4.0, Tau3-Banking, GDPval-AA, Claw-Eval, Toolathon, MCP-Atlas, and SWE Atlas: **no verified public score found** in the reviewed sources

Reasoning / knowledge:

- Artificial Analysis Intelligence Index (v4.3.2): **34** (Artificial Analysis, accessed 2026-09-29)
- GPQA Diamond, HLE, LCR/MLCR, CritPt, and hallucination metrics: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- No public retrieval-at-length result for this exact model was found. Google verifies a 1,048,576-token input limit and 65,536-token output limit.

Sources consulted: [Google Gemini 3.6 Flash documentation](https://ai.google.dev/gemini-api/docs/models/gemini-3.6-flash), [Artificial Analysis Gemini 3.6 Flash](https://artificialanalysis.ai/models/gemini-3-6-flash), and the Google current Gemini model index, accessed 2026-09-29.

### Normalized scores (1–100)

- **Tool use: 80/100.** Google documents computer use, code execution, function calling, and agent-oriented features; exact Terminal-Bench, Tau, GDPval, and tool-call values were not found, and the model is now deprecated.
- **Reasoning: 80/100.** AA Intelligence Index 34 on index version v4.3.2 is above the compared-model median; exact GPQA, HLE, CritPt, and hallucination values were unavailable.
- **Context window: 95/100.** Google verifies 1,048,576 input tokens, meeting the top context tier; no retrieval-at-length result was published.
- **Multimodal: 95/100.** Google verifies text, image, video, audio, and PDF input with text output.
- **Coding: 76/100.** The model is designed for rapid agentic coding loops and supports code execution, but no exact SWE, DeepSWE, LiveCodeBench, or SciCode score was found.
- **Cost efficiency: 88/100.** The independent $0.75/$3.75 price and large cache discount are strong for a 1M-context multimodal model, though this is paid pricing and the tier is scheduled to move to the higher Flash price.
- **Overall Score: 85.2/100.** (80 + 80 + 95 + 95 + 76) / 5 = 426 / 5 = 85.2. Best fit: fast multimodal agents and software workflows where low latency and low cost matter; because the model is deprecated, use Gemini 3.7/3.8 for new deployments.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-09-29
- Method: Public web research of Google model documentation and Artificial Analysis metadata on index version v4.3.2; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
