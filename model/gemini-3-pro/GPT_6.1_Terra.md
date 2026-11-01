# Gemini 3 Pro — findings by GPT-6.1 Terra

- Source: Google / Gemini 3 Pro Preview
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Pro
- **Short description:** Google's earlier multimodal reasoning model; the historical benchmarked deployment is Gemini 3 Pro Preview.
- **Provider / access:** Historical Gemini API model `gemini-3-pro-preview`; the previously listed [OpenRouter page](https://openrouter.ai/google/gemini-3-pro-preview) returned 404 during this research, so current availability is unconfirmed.
- **Release / knowledge:** Released 2025-11-18 according to [Vals](https://www.vals.ai/models/google_gemini-3-pro-preview); knowledge cutoff not verified here.
- **IDs:** Historical `google/gemini-3-pro-preview`; do not assume a currently live endpoint.
- **Context window:** Vals lists 1M context and approximately 66K maximum output for its historical deployment.
- **Modalities:** Vals identifies it as multimodal; exact audio/video input capabilities were not separately verified in the sources used here, so only image input is credited.
- **Pricing (historical):** Vals lists $2 input / $12 output per million tokens; current availability and pricing cannot be confirmed from that archived measurement.
- **Architecture:** Proprietary; parameter count not verified.

### Raw benchmarks found

Agent / tool use:

- Vals Terminal-Bench 2.0 **55.06% ± 5.30** ([Vals](https://www.vals.ai/models/google_gemini-3-pro-preview)).
- Terminal-Bench 2.1 / 4.0, Tau2-Bench, MCP-Atlas and Claw-Eval: no verified exact-model score found in this research.

Reasoning / knowledge:

- Vals GPQA Diamond **91.67% ± 1.39**; Google reports GPQA **91.9%** and HLE **37.5% without tools** for Gemini 3 Pro high thinking in its later [comparison table](https://deepmind.google/models/model-cards/gemini-3-1-pro).
- CritPt and hallucination rate: no verified public score found here.

Coding:

- Vals SWE-bench **76.40% ± 1.90**, LiveCodeBench **86.41% ± 0.98**, and Vibe Code Bench v1.1 **14.30% ± 3.06** ([Vals](https://www.vals.ai/models/google_gemini-3-pro-preview)).
- SciCode: no verified public score found in this research.

Long context:

- Vals lists a 1M context; no exact-model MRCR or RULER retrieval result verified here.

### Normalized scores (1–100)

- **Tool use: 80/100.** Independent Terminal-Bench 2.0 evidence supports capable tool use, but newer agent evaluations were not verified.
- **Reasoning: 89/100.** GPQA and HLE results are strong, though HLE is below the methodology's frontier-reference band.
- **Context window: 95/100.** The historical 1M window earns the top size tier; no 98%+ long-range retrieval result was verified.
- **Multimodal: 68/100.** Image input is credited; broader input and output modalities are not independently established here.
- **Coding: 80/100.** SWE-bench and LiveCodeBench are solid but the low Vibe Code result limits the rating.
- **Cost efficiency: 78/100.** Historical $2/$12 pricing was paid and current endpoint availability is unconfirmed.
- **Overall Score: 82/100.** (80 + 89 + 95 + 68 + 80) / 5 = 82.4, rounded to 82; historical benchmark data should not be mistaken for a live route.

---

## Signature

- Provided by: **GPT-6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-01
- Method: Independent public-source research; scores are normalized 1–100 interpretations, not official vendor scores. Historical deployment and current availability are distinguished.
- Reference URLs:
  - [Vals historical model evaluations](https://www.vals.ai/models/google_gemini-3-pro-preview)
  - [Google comparative evaluation table](https://deepmind.google/models/model-cards/gemini-3-1-pro)
  - [OpenRouter historical route](https://openrouter.ai/google/gemini-3-pro-preview)
- Future sources: add a new file next to this one using the same headings.
