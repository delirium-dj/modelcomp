# Gemini 3.7 Flash — findings by Space Bunny Alpha

- Source: Google (`gemini-3.7-flash`; high reasoning mode)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.7 Flash (high)
- **Short description:** Google's fast, natively multimodal reasoning model from the Gemini 3 series, now superseded by Gemini 3.8 Flash.
- **Provider / access:** Google Gemini API (`gemini-3.7-flash`); Google AI Studio; OpenAI-compatible integrations are documented by Google. High is a reasoning configuration.
- **Release / knowledge:** Google lists August 2026 as the latest update; no public knowledge cutoff was shown on the reviewed model page.
- **IDs:** `gemini-3.7-flash`; repository family metadata identifies `google/gemini-3.7-flash`.
- **Context window:** 1,048,576 input tokens; 65,536 output tokens (Google Gemini API documentation, verified 2026-09-24).
- **Modalities:** Text, image, video, audio, and PDF input; text output; thinking at low, medium, and high levels; code execution, computer use (preview), function calling, structured outputs, URL context, and search grounding supported.
- **Pricing (as of 2026-09-24):** Artificial Analysis reports $0.75 per 1M input and $3.75 per 1M output tokens, with a 90% cache discount. The official page reviewed did not display price.
- **Architecture:** Proprietary; Google has not disclosed parameter count.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index: **39/100**, rank **#50/210** (Artificial Analysis, accessed 2026-09-24; composite benchmark)
- Output speed: **292.5 tokens/s**; Intelligence Index task cost: **$0.93** (Artificial Analysis, accessed 2026-09-24)
- Terminal-Bench 4.0: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found** as a standalone value
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **39** (Artificial Analysis, accessed 2026-09-24)
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

- No public retrieval-at-length result for this exact model was found. Google verifies a 1,048,576-token input limit and 65,536-token output limit.

Sources consulted: [Google Gemini 3.7 Flash documentation](https://ai.google.dev/gemini-api/docs/models/gemini-3.7-flash) and [Artificial Analysis Gemini 3.7 Flash](https://artificialanalysis.ai/models/gemini-3-7-flash), accessed 2026-09-24.

### Normalized scores (1–100)

- **Tool use: 80/100.** Google documents computer use, code execution, function calling, and other agent features; exact Terminal-Bench, Tau, GDPval, and tool-call values were not found.
- **Reasoning: 80/100.** AA Index 39 is above the comparable-model median of 25, but exact GPQA, HLE, CritPt, and hallucination values were unavailable.
- **Context window: 95/100.** Google verifies 1,048,576 input tokens, meeting the top context tier; no retrieval-at-length result was published.
- **Multimodal: 95/100.** Google verifies text, image, video, audio, and PDF input with text output.
- **Coding: 76/100.** The model supports code execution and is a capable reasoning model, but no exact SWE-bench, DeepSWE, LiveCodeBench, or SciCode score was found.
- **Cost efficiency: 88/100.** The independent $0.75/$3.75 price and 90% cache discount are strong for a 1M-context multimodal model, though this is paid rather than free pricing.
- **Overall Score: 85.2/100.** (80 + 80 + 95 + 95 + 76) / 5 = 85.2. Best fit: fast, low-cost multimodal agents and software workflows; use Gemini 3.8 Flash for new deployments where available.

---

## Signature

- Provided by: **Space Bunny Alpha (space-bunny/alpha)** — 2026-09-24
- Method: Public web research of Google model documentation and Artificial Analysis metadata; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
