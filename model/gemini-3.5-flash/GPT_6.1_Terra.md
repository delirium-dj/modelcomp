# Gemini 3.5 Flash — findings by GPT-6.1 Terra

- Source: Google DeepMind / Gemini 3.5 Flash
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash
- **Short description:** Google's historical multimodal Flash model for coding and agentic workflows. Google now automatically routes its deprecated API ID to Gemini 3.6 Flash; historical results below are not measurements of the replacement.
- **Provider / access:** Historical Google API ID `gemini-3.5-flash`; current routing is documented by [Google](https://ai.google.dev/gemini-api/docs/models/gemini-3.5-flash).
- **Release / knowledge:** Released 2026-05-19 per [Google model card](https://deepmind.google/models/model-cards/gemini-3-5-flash); knowledge cutoff not independently verified.
- **IDs:** `gemini-3.5-flash`, now a redirected API name rather than a guaranteed exact historical deployment.
- **Context window:** Google lists 1,048,576 input and 65,536 output tokens in the historical specification.
- **Modalities:** Text, image, audio, video and PDF input; text output, thinking and tools supported.
- **Pricing (historical):** Vals lists $1.50 input / $9 output per million tokens. Confirm billing for the redirected route before use.
- **Architecture:** Proprietary, based on Gemini 3 Flash per Google; parameter counts not verified.

### Raw benchmarks found

Agent / tool use:

- Google Terminal-Bench 2.1 **76.2%**, MCP-Atlas **83.6%**, Toolathlon **56.5%**, and OSWorld-Verified **78.4%** ([model card](https://deepmind.google/models/model-cards/gemini-3-5-flash)).
- Vals Terminal-Bench 4.0 **6.06% ± 1.51**, a different benchmark version ([Vals](https://www.vals.ai/models/google_gemini-3.5-flash)).

Reasoning / knowledge:

- Google HLE **40.2%**, ARC-AGI-2 **72.1%**; Vals GPQA Diamond **92.68% ± 1.46** and ProofBench v1.1 **31.00% ± 4.65** ([Google](https://deepmind.google/models/model-cards/gemini-3-5-flash); [Vals](https://www.vals.ai/models/google_gemini-3.5-flash)).
- CritPt and hallucination rate: no verified score found here.

Coding:

- Google SWE-bench Pro **55.1%**; Vals SWE-bench **78.80% ± 1.83**, Vibe Code Bench v1.1 **48.68% ± 4.73**, and Code Migration **26.75% ± 4.10** ([Google](https://deepmind.google/models/model-cards/gemini-3-5-flash); [Vals](https://www.vals.ai/models/google_gemini-3.5-flash)).
- SciCode: no verified exact-model score found here.

Long context:

- Google MRCR v2 8-needle **77.3% at 128K** and **26.6% pointwise at 1M** ([model card](https://deepmind.google/models/model-cards/gemini-3-5-flash)).

### Normalized scores (1–100)

- **Tool use: 87/100.** Strong vendor MCP and OSWorld results contrast with the much lower independent newer terminal benchmark.
- **Reasoning: 88/100.** GPQA, HLE and ARC are strong, tempered by Vals ProofBench.
- **Context window: 95/100.** The historical 1M window qualifies for the top size tier, but 1M retrieval is far below the 98% condition for 100.
- **Multimodal: 94/100.** Historical documentation supports image, audio, video and PDF input; output is text.
- **Coding: 83/100.** SWE-bench performance is solid, but independent Vibe Code and migration results limit the rating.
- **Cost efficiency: 82/100.** Historical $1.50/$9 pricing was paid; current redirected billing requires confirmation.
- **Overall Score: 89/100.** (87 + 88 + 95 + 94 + 83) / 5 = 89.4, rounded to 89; ratings describe the historical deployment.

---

## Signature

- Provided by: **GPT-6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-01
- Method: Independent public-source research; scores are normalized 1–100 interpretations, not official vendor scores. Historical scores are not relabeled as scores of the redirected successor.
- Reference URLs:
  - [Google historical model card](https://deepmind.google/models/model-cards/gemini-3-5-flash)
  - [Google deprecation and redirect notice](https://ai.google.dev/gemini-api/docs/models/gemini-3.5-flash)
  - [Vals historical independent evaluations](https://www.vals.ai/models/google_gemini-3.5-flash)
- Future sources: add a new file next to this one using the same headings.
