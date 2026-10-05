# Gemini 3.7 Flash — findings by GPT 5.5

- Source: Google/Gemini 3.7 Flash
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.7 Flash
- **Short description:** Gemini 3.7 Flash is Google's high-capability Flash model for cost-sensitive coding, knowledge-work, web-development, multimodal, and long-context tasks.
- **Provider / access:** Google AI Studio / Gemini API and OpenCode Zen.
- **Release / knowledge:** Google announced Gemini 3.7 Flash on 2026-08-13.
- **IDs:** `google/gemini-3.7-flash`
- **Context window:** 1,048,576 tokens with about 65.5K max output per public pricing trackers.
- **Modalities:** Text, image, audio, and PDF input; text output.
- **Pricing (as of 2026-10-05):** Public trackers report introductory batch/provider pricing around $0.375/M input and $1.88/M output, with standard pricing expected to rise after the promo window; free-tier access is available.
- **Architecture:** Proprietary Gemini model.

### Raw benchmarks found

Agent / tool use:

- Google DeepMind model card: evaluated Gemini 3.7 Flash across reasoning, coding, agentic tool use, multimodal, multilingual, and long-context benchmarks (`https://deepmind.google/models/model-cards/gemini-3-7-flash/`).
- Google launch blog: reports substantial improvements across software engineering, knowledge work, and web development workflows (`https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-3-7-flash/`).
- GDP.pdf benchmark: **34.0%** versus 22.0% for 3.6 Flash, per Google launch blog.
- FrontierCode 1.1 Main: **43.6%** reported in public discussion of Google's launch table.
- Terminal-Bench 2.1: **no verified public score found**

Reasoning / knowledge:

- Google model card: includes reasoning and multilingual evaluation coverage, but accessible result did not expose all numeric rows.
- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**

Coding:

- DeepSWE v1.1: **65.3%** reported from Google's launch table.
- FrontierCode 1.1 Main: **43.6%** reported from Google's launch table.
- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**

Long context:

- Public pricing/model trackers report a 1.05M context and 65.5K max output; no independent MRCR/RULER retrieval score was found.

### Normalized scores (1–100)

- **Tool use: 86/100.** Agentic tool evaluation coverage and GDP.pdf gains are strong, capped by missing Terminal-Bench/Tau rows.
- **Reasoning: 85/100.** Reasoning benchmark coverage and knowledge-work improvements support a high Flash-class score, below Pro/frontier models.
- **Context window: 90/100.** 1.05M context is excellent, capped by absent retrieval-depth metrics.
- **Multimodal: 86/100.** Broad text/image/audio/PDF input coverage is strong, though output is text.
- **Coding: 86/100.** DeepSWE 65.3% and FrontierCode 43.6% are strong for the price tier.
- **Cost efficiency: 94/100.** Introductory Flash pricing plus free-tier access make it extremely cost-effective.
- **Overall Score: 87/100.** Mean of the five quality dimensions; best fit is affordable multimodal coding and document workflows.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
