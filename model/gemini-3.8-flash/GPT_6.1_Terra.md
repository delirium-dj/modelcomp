# Gemini 3.8 Flash — findings by GPT-6.1 Terra

- Source: Google DeepMind / Gemini 3.8 Flash
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash
- **Short description:** Google's multimodal Flash model for software engineering, agentic and knowledge workflows, with adjustable reasoning effort.
- **Provider / access:** Gemini API, AI Studio and Google Cloud. Stable API model ID `gemini-3.8-flash` ([Google developer documentation](https://ai.google.dev/gemini-api/docs/models/gemini-3.8-flash)).
- **Release / knowledge:** Released 2026-09-02; knowledge cutoff March 2026, with some domains older ([model card](https://deepmind.google/models/model-cards/gemini-3-8-flash)).
- **IDs:** Google `gemini-3.8-flash`; verify free-tier quota and terms in the provider's current pricing page before relying on it.
- **Context window:** Up to 1M tokens, with 64K output according to the Google model card.
- **Modalities:** Text, image, audio and video input; text output. Supports reasoning and tools.
- **Pricing (2026-11-01):** Google introductory $0.75 input / $3.75 output per million tokens through 2026-12-31; regular $1.50 / $7.50 thereafter ([Google](https://ai.google.dev/gemini-api/docs/whats-new-gemini-3.8), [model card](https://deepmind.google/models/model-cards/gemini-3-8-flash)).
- **Architecture:** Proprietary, based on Gemini 3.7 Flash; parameter count not verified.

### Raw benchmarks found

Agent / tool use:

- Google reports Terminal-Bench 2.1 **89.4%**, Terminal-Bench 4.0 **19.1%**, and OSWorld 2.0 **59.0% partial** ([model card](https://deepmind.google/models/model-cards/gemini-3-8-flash)). Benchmark versions differ substantially.
- Vals independently reports Terminal-Bench 4.0 **19.70% ± 2.31** and Vals Index **55.95% ± 1.14** ([Vals](https://www.vals.ai/models/google_gemini-3.8-flash)).
- Tau2-Bench, Claw-Eval and MCP-Atlas: no verified public score found in this research.

Reasoning / knowledge:

- Google HLE-Verified **54.9%**, LABBench2 **86.2%** ([model card](https://deepmind.google/models/model-cards/gemini-3-8-flash)).
- Vals GPQA Diamond **94.44% ± 1.48**, ProofBench v1.1 **48.00% ± 5.02** ([Vals](https://www.vals.ai/models/google_gemini-3.8-flash)).
- CritPt and hallucination rate: no verified public score found in this research.

Coding:

- Google DeepSWE v1.1 **73.7%**; Vals Vibe Code Bench v1.1 **78.65% ± 3.88**, Code Migration v1.1 **38.65% ± 3.65**, and LiveCodeBench **89.48% ± 0.90** ([Google](https://deepmind.google/models/model-cards/gemini-3-8-flash); [Vals](https://www.vals.ai/models/google_gemini-3.8-flash)).
- SWE-bench Pro and SciCode: no verified public score found in this research.

Long context:

- Google documents a 1M window; no exact-model MRCR or RULER retrieval result independently verified here.

### Normalized scores (1–100)

- **Tool use: 87/100.** Strong 2.1 terminal and 59% OSWorld contrast with substantially lower 4.0 results, limiting the score.
- **Reasoning: 91/100.** HLE-Verified and independently evaluated GPQA are strong, though ProofBench is lower and tasks vary.
- **Context window: 95/100.** The documented 1M window enters the top size tier; no 98%+ long-context retrieval result was verified.
- **Multimodal: 94/100.** Image, audio and video inputs are documented; output is text only.
- **Coding: 90/100.** DeepSWE and LiveCodeBench are strong, but code migration and harder terminal tasks temper confidence.
- **Cost efficiency: 91/100.** Introductory paid pricing is low for the documented capabilities, though regular rates double in 2027.
- **Overall Score: 91/100.** (87 + 91 + 95 + 94 + 90) / 5 = 91.4, rounded to 91; useful for cost-conscious multimodal and coding workflows.

---

## Signature

- Provided by: **GPT-6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-01
- Method: Independent public-source research; scores are normalized 1–100 interpretations, not official vendor scores. Vendor and independent benchmarks are differentiated.
- Reference URLs:
  - [Google DeepMind model card](https://deepmind.google/models/model-cards/gemini-3-8-flash)
  - [Google model and price information](https://ai.google.dev/gemini-api/docs/whats-new-gemini-3.8)
  - [Vals independent evaluations](https://www.vals.ai/models/google_gemini-3.8-flash)
- Future sources: add a new file next to this one using the same headings.
