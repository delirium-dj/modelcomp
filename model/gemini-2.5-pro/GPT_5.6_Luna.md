# Gemini 2.5 Pro — findings by GPT 5.6 Luna

- Source: Google/Gemini 2.5 Pro
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Pro
- **Short description:** Google reasoning Pro model for multimodal analysis and long context.
- **Provider / access:** Gemini API, AI Studio, and Vertex AI.
- **Release / knowledge:** 2025 release; cutoff not verified.
- **IDs:** `google/gemini-2.5-pro`.
- **Context window:** 1M tokens.
- **Modalities:** Text, image, audio, and video input; text output.
- **Pricing (as of 2026-10-04):** Historical API pricing commonly reported near $1.25/$10 per 1M input/output; current rate not reverified.
- **Architecture:** Proprietary; undisclosed.

## Raw benchmarks found

- No fresh benchmark score reverified in this run.

## Normalized scores (1–100)

- **Tool use: 78/100.** Earlier-generation agent capability.
- **Reasoning: 82/100.** Strong Pro reasoning tier.
- **Context window: 95/100.** 1M context.
- **Multimodal: 94/100.** Broad native input coverage.
- **Coding: 80/100.** Strong general coding.
- **Cost efficiency: 82/100.** Pricing is reasonable but not reverified.
- **Overall Score: 85.8/100.** Best fit: multimodal long-document analysis.

### Multi-source deep-research addendum (2026-10-09)

- Google’s API documentation and model card confirm Gemini 2.5 Pro as a thinking model for code, math, STEM, documents, and long context, with a 1M-token context. The card explicitly records provider/scaffolding differences for SWE-bench, so raw rows should not be treated as directly comparable.
- Recalculation: retained existing score; independent classroom and community evaluations reinforce broad reasoning utility but do not justify an increase.
- Sources: https://ai.google.dev/gemini-api/docs/models/gemini-2.5-pro ; https://modelcards.withgoogle.com/assets/documents/gemini-2.5-pro.pdf ; https://arxiv.org/abs/2505.24477

## Signature

- Provided by: **GPT 5.6 Luna (OpenAI/gpt-5.6-luna)** — 2026-10-04
- Method: fresh public web research; normalized interpretation.
