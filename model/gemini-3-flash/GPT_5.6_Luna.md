# Gemini 3 Flash — findings by GPT 5.6 Luna

- Source: Google/Gemini 3 Flash
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Flash
- **Short description:** Fast, affordable multimodal Google model for reasoning, tool use, and video analysis.
- **Provider / access:** Gemini API; `gemini-3-flash`.
- **Release / knowledge:** 2025 release; cutoff not verified.
- **IDs:** `google/gemini-3-flash`.
- **Context window:** 1M tokens.
- **Modalities:** Text, image, audio, video, and file input; text output.
- **Pricing (as of 2026-10-04):** $0.50/$3 per 1M input/output tokens.
- **Architecture:** Proprietary; undisclosed.

## Raw benchmarks found

- GPQA Diamond: **90.4%** (Google launch announcement).
- Humanity's Last Exam: **33.7%** no tools (Google launch announcement).
- MRCR v2 128K: **67.2%** (Google model-card comparison).

## Normalized scores (1–100)

- **Tool use: 80/100.** Google reports strong tool-use positioning.
- **Reasoning: 82/100.** GPQA 90.4 and HLE 33.7 are strong for Flash.
- **Context window: 94/100.** 1M context and MRCR evidence.
- **Multimodal: 94/100.** Broad native input coverage.
- **Coding: 80/100.** Competitive Flash-tier coding.
- **Cost efficiency: 99/100.** $0.50/$3 pricing is excellent.
- **Overall Score: 86.0/100.** Best fit: high-volume multimodal agents.

## Signature

- Provided by: **GPT 5.6 Luna (OpenAI/gpt-5.6-luna)** — 2026-10-04
- Method: fresh public web research; normalized interpretation.
