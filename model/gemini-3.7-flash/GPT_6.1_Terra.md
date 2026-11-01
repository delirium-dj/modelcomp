# Gemini 3.7 Flash — findings by GPT-6.1 Terra

- Source: Google DeepMind / Gemini 3.7 Flash
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.7 Flash
- **Short description:** Google's previous-generation multimodal reasoning model for coding and agentic workflows. Google now routes its deprecated API ID to Gemini 3.8 Flash, so historical measurements below do not describe the current routed response.
- **Provider / access:** Gemini API historically used `gemini-3.7-flash`; [Google](https://ai.google.dev/gemini-api/docs/models/gemini-3.7-flash) states requests automatically route to 3.8 Flash.
- **Release / knowledge:** Released 2026-08-13; knowledge cutoff March 2026, with some domains older ([model card](https://deepmind.google/models/model-cards/gemini-3-7-flash)).
- **IDs:** Historical Google ID `gemini-3.7-flash`; current API alias is redirected and should not be treated as an exact 3.7 deployment.
- **Context window:** 1,048,576 input and 65,536 output tokens in the published specification; actual routed-model behavior should be checked separately.
- **Modalities:** Text, image, audio, video and PDF input; text output, with reasoning and function calling.
- **Pricing (2026-11-01):** Google's historical launch card lists introductory $0.75 input / $3.75 output per million through 2026-12-31, then $1.50 / $7.50. Confirm the billed redirected route with Google.
- **Architecture:** Proprietary; based on Gemini 3.6 Flash according to the model card.

### Raw benchmarks found

Agent / tool use:

- Google Terminal-Bench 2.1 **85.8%**, Terminal-Bench 3.0 **14.9%**, and AutomationBench **30.4%** ([model card](https://deepmind.google/models/model-cards/gemini-3-7-flash)). Different benchmark versions are not comparable percentages.
- Vals Terminal-Bench 4.0 **12.12% ± 3.03** ([Vals](https://www.vals.ai/models/google_gemini-3.7-flash)), historical evaluation of the 3.7 model.
- Tau2-Bench, Claw-Eval and MCP-Atlas: no verified exact-model score found in this research.

Reasoning / knowledge:

- Google HLE-Verified **53.6%**; Vals GPQA Diamond **93.94% ± 1.49** and ProofBench v1.1 **58.00% ± 4.96** ([Google](https://deepmind.google/models/model-cards/gemini-3-7-flash); [Vals](https://www.vals.ai/models/google_gemini-3.7-flash)).
- CritPt and general hallucination rate: no verified public score found here.

Coding:

- Google DeepSWE v1.1 **65.3%** and FrontierCode v1.1 Main **43.6%** ([model card](https://deepmind.google/models/model-cards/gemini-3-7-flash)).
- Vals LiveCodeBench **88.65% ± 0.92**, Vibe Code Bench v1.1 **70.39% ± 4.84**, and Code Migration **34.80% ± 4.22** ([Vals](https://www.vals.ai/models/google_gemini-3.7-flash)).
- SWE-bench Pro and SciCode: no verified score found in this research.

Long context:

- Google GDM-MRCR v2 8-needle **97.0% at 128K**; no 512K+ retrieval figure verified ([model card](https://deepmind.google/models/model-cards/gemini-3-7-flash)).

### Normalized scores (1–100)

- **Tool use: 84/100.** Strong Terminal-Bench 2.1 is tempered by much lower 3.0 and independent 4.0 results.
- **Reasoning: 90/100.** HLE-Verified and GPQA support a high rating, tempered by uneven proof performance.
- **Context window: 95/100.** The historical 1M input window enters the top tier; 128K retrieval does not qualify as 98%+ at 512K.
- **Multimodal: 94/100.** Historical documentation supports image, audio, video and PDF input; output is text.
- **Coding: 87/100.** DeepSWE and LiveCodeBench are solid, but independent migration and harder terminal results limit the score.
- **Cost efficiency: 88/100.** Historical promotional pricing was low, but current requests are redirected and pricing must be reconfirmed.
- **Overall Score: 90/100.** (84 + 90 + 95 + 94 + 87) / 5 = 90; these ratings describe the historical deployment, not its replacement.

---

## Signature

- Provided by: **GPT-6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-01
- Method: Independent public-source research; scores are normalized 1–100 interpretations, not official vendor scores. Historical benchmark results are not relabeled as results of the redirected successor.
- Reference URLs:
  - [Google DeepMind historical model card](https://deepmind.google/models/model-cards/gemini-3-7-flash)
  - [Google API deprecation and routing notice](https://ai.google.dev/gemini-api/docs/models/gemini-3.7-flash)
  - [Vals historical independent evaluations](https://www.vals.ai/models/google_gemini-3.7-flash)
- Future sources: add a new file next to this one using the same headings.
