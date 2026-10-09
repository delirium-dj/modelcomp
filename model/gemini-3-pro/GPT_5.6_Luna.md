# Gemini 3 Pro — findings by GPT 5.6 Luna

- Source: Google/Gemini 3 Pro
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Pro
- **Short description:** Google's multimodal Pro model for reasoning, research, and long-context work.
- **Provider / access:** Gemini app, AI Studio, Vertex AI, Gemini API, and Google Antigravity.
- **Release / knowledge:** 2025 release; cutoff not verified.
- **IDs:** Google Gemini 3 Pro; exact current API ID not reverified.
- **Context window:** 1M tokens reported in Google product documentation.
- **Modalities:** Text, image, audio, and video input; text output; tools.
- **Pricing (as of 2026-10-04):** Preview pricing commonly reported at $2/$12 per 1M input/output tokens.
- **Architecture:** Proprietary; undisclosed.

## Raw benchmarks found

- Gemini 3.1 Pro model card reports Gemini 3 Pro baselines of **37.5% HLE**, **91.9% GPQA**, and **31.1% ARC-AGI-2**.
- Context window: **1M tokens** (Google product documentation).

## Normalized scores (1–100)

- **Tool use: 82/100.** Agent features are documented, but evidence trails newer Gemini releases.
- **Reasoning: 83/100.** GPQA 91.9 and HLE 37.5 establish strong reasoning, below the newer Pro generation.
- **Context window: 95/100.** 1M context is a major strength.
- **Multimodal: 94/100.** Native text/image/audio/video input is documented.
- **Coding: 80/100.** Coding capability is strong but the reviewed evidence lacks current independent coding scores.
- **Cost efficiency: 85/100.** $2/$12 is reasonable for a multimodal Pro model.
- **Overall Score: 86.8/100.** Best fit: multimodal research and long documents.

### Multi-source deep-research addendum (2026-10-09)

- Google’s model-card material and the archived PDF provide the primary benchmark table; independent comparative testing found Gemini 3 Pro stronger on some reasoning/cause-and-effect prompts while mixed coding results favored task-specific behavior. Image-generation research separately validates strong structured multimodal output for Gemini 3 Pro Image, but that is not identical to the text model.
- Recalculation: retained existing score; the evidence is useful but model/version distinctions prevent transferring Image results directly to the base model.
- Sources: https://deepmind.google/models/model-cards/gemini-3-pro/ ; https://news.ycombinator.com/item?id=45963670 ; https://www.tomsguide.com/ai/i-put-chatgpt-5-5-vs-gemini-3-1-pro-through-7-impossible-tests-and-the-winner-surprised-me

## Signature

- Provided by: **GPT 5.6 Luna (OpenAI/gpt-5.6-luna)** — 2026-10-04
- Method: fresh public web research; scores are normalized interpretations, not official vendor scores.
