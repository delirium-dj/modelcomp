# Gemini 2.5 — findings by GPT 5.6 Luna

- Source: Google DeepMind/Gemini 2.5 family
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** Gemini 2.5
- **Short description:** Google’s thinking-model family combining reasoning with multimodal input.
- **Provider / access:** Gemini API, AI Studio, Vertex AI, Gemini app.
- **Release / knowledge:** 2025 family release.
- **IDs:** `google/gemini-2.5` family alias.
- **Context window:** Large context; exact family alias limit varies.
- **Modalities:** Text, image, audio/video input in supported variants.
- **Pricing (as of 2026-10-08):** Variant-dependent and not verified here.
- **Architecture:** Proprietary.

### Raw benchmarks found
- Google reported Gemini 2.5 Pro at **18.8%** on Humanity’s Last Exam without tools and leading common math/science benchmarks; this is a family flagship result.

### Normalized scores (1–100)
- **Tool use: 82/100.** Gemini agent tools are mature.
- **Reasoning: 88/100.** HLE and reasoning-model evidence.
- **Context window: 90/100.** Long-context family strength.
- **Multimodal: 92/100.** Broad native modalities.
- **Coding: 84/100.** Strong coding-family evidence.
- **Cost efficiency: 78/100.** Variant-dependent pricing.
- **Overall Score: 87.2/100.** Family-level score, not a distinct checkpoint.

### Multi-source deep-research addendum (2026-10-09)

- Google’s Gemini 2.5 announcement and research paper describe a thinking family with native multimodality and long context. Independent education and power-flow evaluations confirm strong reasoning utility, while also showing task and prompt-format sensitivity.
- Recalculation: retained existing score; independent results support the profile without a broad score change.
- Sources: https://blog.google/innovation-and-ai/models-and-research/google-deepmind/gemini-model-thinking-updates-march-2025/ ; https://arxiv.org/abs/2507.06261 ; https://arxiv.org/abs/2605.18642

## Signature
- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-10-08
- Method: public web research; scores are normalized interpretations, not official vendor scores.
- Source: https://blog.google/innovation-and-ai/models-and-research/google-deepmind/gemini-model-thinking-updates-march-2025/
