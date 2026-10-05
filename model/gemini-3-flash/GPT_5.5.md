# Gemini 3 Flash — findings by GPT 5.5

- Source: Google/Gemini 3 Flash
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Flash
- **Short description:** Gemini 3 Flash is Google's Flash-speed Gemini 3 model, advertised as Pro-level intelligence at Flash speed and pricing.
- **Provider / access:** Google AI Studio / Gemini API / Vertex AI.
- **Release / knowledge:** Gemini 3 Flash model-card material is dated around December 2025.
- **IDs:** `google/gemini-3-flash`
- **Context window:** Public Gemini 3 Flash pages report 1.05M context.
- **Modalities:** Text, image, file, audio, and video input; text output per third-party model metadata and Gemini API family docs.
- **Pricing (as of 2026-10-05):** Google DeepMind page lists $0.50/M input for Gemini 3 Flash in a comparison table; pricing pages list current Gemini 3 Flash Preview terms.
- **Architecture:** Proprietary Gemini model.

### Raw benchmarks found

Agent / tool use:

- Google Gemini 3 developer guide: calls Gemini 3 Flash the latest 3-series model with Pro-level intelligence at Flash speed/pricing (`https://ai.google.dev/gemini-api/docs/gemini-3`).
- DeepMind Flash page: includes benchmark table against Gemini 3 Pro, Gemini 2.5 Flash/Pro, Claude Sonnet 4.5, GPT-5.2, and Grok 4.1 Fast (`https://deepmind.google/technologies/gemini/flash/`).
- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**

Reasoning / knowledge:

- DeepMind Flash page: MRCR v2 8-needle at 128K average **67.2%** for Gemini 3 Flash Thinking.
- Tom's Guide: Gemini 3 Flash performed highly on most major benchmark tests, trailing top Gemini/competitor models by only a few percent (`https://www.tomsguide.com/ai/google-gemini/gemini-3-vs-gemini-3-flash-whats-the-difference-and-which-should-you-use`).
- GPQA Diamond: **no verified public score found in accessible text**
- HLE: **no verified public score found**

Coding:

- Public algorithmic programming study includes Gemini Flash 3 among cost-efficient models evaluated on 992 programming tasks (`https://arxiv.org/abs/2609.18052`).
- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**

Long context:

- MRCR v2 8-needle at 128K: **67.2%**; public metadata reports 1.05M context.

### Normalized scores (1–100)

- **Tool use: 83/100.** Pro-level-at-Flash positioning and benchmark tables support strong tool capability, capped by missing dedicated agent rows.
- **Reasoning: 83/100.** Strong for its tier, below later 3.6/3.7/3.8 Flash.
- **Context window: 90/100.** 1.05M context and MRCR evidence are strong.
- **Multimodal: 88/100.** Text/image/file/audio/video input support is broad.
- **Coding: 82/100.** Good Flash coding model, included in programming-task research, but not top frontier.
- **Cost efficiency: 92/100.** Flash pricing is strong for the capability level.
- **Overall Score: 85/100.** Mean of the five quality dimensions; best fit is cheap multimodal long-context tasks with fast turnaround.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
