# Gemini 2.5 Pro — findings by GPT 5.6 Terra

- Source: Google/Gemini 2.5 Pro
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Pro
- **Short description:** Google's Gemini 2.5 flagship for deep reasoning, coding and multimodal long-context work.
- **Provider / access:** Gemini API and Vertex AI, `gemini-2.5-pro`.
- **Release / knowledge:** GA 2025-06-17; knowledge cutoff January 2025.
- **IDs:** `google/gemini-2.5-pro` (no Zen Free ID verified).
- **Context window:** 1,048,576-token input limit.
- **Modalities:** Text, image, audio, video and PDF input; text output; thinking, function calling and Search grounding.
- **Pricing:** GA-era $1.25 input/$10 output per MTok to 200K, with higher long-context pricing.
- **Architecture:** Proprietary.

### Raw benchmarks found

Agent / tool use:

- No exact-model public tool-use score found.

Reasoning / knowledge:

- Google reports Gemini 2.5 Pro led GPQA and AIME 2025 without majority voting; exact accessible values were unavailable.

Coding:

- Google reports Gemini 2.5 Pro led LiveCodeBench; no exact accessible value was found.

Long context:

- 1,048,576-token context; no verified MRCR/RULER result found.

### Normalized scores (1–100)

- **Tool use: 74/100.** Function calling and grounding are documented, but no direct agent score was found.
- **Reasoning: 89/100.** Google reports leading GPQA/AIME performance.
- **Context window: 95/100.** Verified 1,048,576-token capacity without a retrieval-at-length result.
- **Multimodal: 90/100.** Native text/image/audio/video/PDF ingestion.
- **Coding: 87/100.** Google reports LiveCodeBench leadership, though no exact GA score was accessible.
- **Cost efficiency: 78/100.** Competitive flagship pricing, but paid and long-context use costs more.
- **Overall Score: 87/100.** Mean of the five non-cost quality dimensions: (74 + 89 + 95 + 90 + 87) / 5.

---

## Signature

- Provided by: **GPT 5.6 Terra (openai/gpt-5.6-terra)** — 2026-09-23
- Method: Fresh public research using Google model cards, API documentation and official announcements; scores are normalized interpretations, not official vendor scores.
