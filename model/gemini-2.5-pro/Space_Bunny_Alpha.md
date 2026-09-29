# Gemini 2.5 Pro — findings by Space Bunny Alpha

- Source: Google (`gemini-2.5-pro`), Artificial Analysis v4.3.2
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Pro
- **Short description:** Google's legacy but still documented thinking model for complex code, mathematics, STEM reasoning, large datasets, codebases, and documents. Now a hard-dated retirement candidate.
- **Provider / access:** Google Gemini API (`gemini-2.5-pro`); Google AI Studio and Gemini-compatible integrations. Google restricts new access to legacy users but continues serving the model.
- **Release / knowledge:** Google lists June 2025 as the latest update; knowledge cutoff January 2025.
- **IDs:** `gemini-2.5-pro`.
- **Context window:** 1,048,576 input tokens; 65,536 output tokens (Google Gemini API documentation, verified 2026-09-29).
- **Modalities:** Audio, image, video, text, and PDF input; text output; thinking, code execution, function calling, structured outputs, URL context, search grounding, and Maps grounding supported.
- **Pricing (as of 2026-09-29):** Artificial Analysis reports $1.25 per 1M input and $10.00 per 1M output tokens, with a 90% cache discount; the official model page reviewed did not show price.
- **Lifecycle:** Artificial Analysis now flags Gemini 2.5 Pro as **deprecated** and names **Gemini 3 Pro Preview** as the successor. Provider deprecation trackers list a hard retirement date of **2026-10-20** for `gemini-2.5-pro` on Vertex AI, with a parallel first-party October 2026 shutdown reported elsewhere; either way the model is roughly three weeks from end of service. New projects should not start on it.
- **Architecture:** Proprietary; Google has not disclosed parameter count.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index v4.3.2: **16/100**, rank **#158/216** (Artificial Analysis, accessed 2026-09-29; composite benchmark)
- Output speed: **125.3 tokens/s**; time to first token **23.94s** (Artificial Analysis, accessed 2026-09-29)
- Artificial Analysis Intelligence Index v4.3.2 component values now exposed for this model (Artificial Analysis, accessed 2026-09-29):
  - AutomationBench-AA: **2%** — near-total failure on the agentic workflow-automation evaluation added in v4.3
  - Terminal-Bench 4.0: **0%** — no passes on the upgraded terminal evaluation, which is a much harsher signal than the model's 2025-vintage terminal results
  - The Intelligence Index v4.3.2 component set is AA-Briefcase v1.1, GDPval-AA v2.1, AutomationBench-AA, Terminal-Bench 4.0, SciCode, Humanity's Last Exam, GDP.pdf, CritPt, AA-Omniscience, and AA-LCR v1.1
- Tau3-Banking, GDPval-AA, Claw-Eval, Toolathon, MCP-Atlas, and SWE Atlas: **no verified public exact value found**

Reasoning / knowledge:

- Artificial Analysis Intelligence Index v4.3.2: **16** (Artificial Analysis, accessed 2026-09-29)
- AA-Omniscience: **-16** — a negative delta versus the prior index run, indicating the model fabricates more than it gets right on the faithfulness probe (Artificial Analysis component, accessed 2026-09-29)
- GPQA Diamond, HLE, LCR/MLCR, CritPt, and hallucination metrics outside AA: **no verified public score found**

Coding:

- SciCode (Artificial Analysis v4.3.2 component) and SWE-bench Verified / SWE-Pro, LiveCodeBench, Vibe Code Bench, DeepSWE: **no verified public exact value found**

Long context:

- No public retrieval-at-length result for this exact model was found. Google verifies a 1,048,576-token input limit and 65,536-token output limit, and AA-LCR v1.1 is part of the index component set without a separately published per-model figure.

Sources consulted: [Google Gemini 2.5 Pro documentation](https://ai.google.dev/gemini-api/docs/models/gemini-2.5-pro), [Gemini deprecations](https://ai.google.dev/gemini-api/docs/deprecations), provider deprecation trackers, and [Artificial Analysis Gemini 2.5 Pro](https://artificialanalysis.ai/models/gemini-2-5-pro), accessed 2026-09-29. Google's current documentation recommends newer models for new projects.

### Normalized scores (1–100)

- **Tool use: 60/100.** Down from 72. Google documents code execution, function calling, search grounding, and structured outputs, but the newly exposed v4.3.2 components are damning for agentic use: AutomationBench-AA at 2% and Terminal-Bench 4.0 at 0% mean the model essentially cannot complete multi-step terminal or workflow-automation tasks under the current harness.
- **Reasoning: 60/100.** Down from 70. The model is designed for complex reasoning, but the AA Index of 16 is well below the compared-model median and the AA-Omniscience delta of -16 is a direct faithfulness regression signal, so general reasoning credit is reduced alongside the agentic score.
- **Context window: 95/100.** Google verifies 1,048,576 input tokens, meeting the top context tier; no retrieval-at-length result was published.
- **Multimodal: 90/100.** Google verifies audio, image, video, text, and PDF input with text output.
- **Coding: 72/100.** Google explicitly positions the model for code, codebases, and documents, but no exact SWE, DeepSWE, LiveCodeBench, or SciCode score was found and the 0% Terminal-Bench 4.0 row is a negative coding signal.
- **Cost efficiency: 82/100.** The reported $1.25/$10 price and 90% cache discount are competitive for a 1M-context Pro model, though this is paid pricing and the model is weeks from retirement.
- **Overall Score: 75.4/100.** (60 + 60 + 95 + 90 + 72) / 5 = 377 / 5 = 75.4. Best fit: existing Gemini 2.5 integrations that need continuity until the 2026-10-20 retirement; do not start new work on it.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-09-29
- Method: Public web research of Google model documentation, Google/Vertex deprecation schedules, and Artificial Analysis v4.3.2 measurements including exposed index components; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
