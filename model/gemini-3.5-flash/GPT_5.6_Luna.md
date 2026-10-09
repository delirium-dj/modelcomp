# Gemini 3.5 Flash — findings by GPT 5.6 Luna

- Source: Google/Gemini 3.5 Flash
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash
- **Short description:** Fast Google multimodal model for coding, agents, and long-context tasks.
- **Provider / access:** Gemini API and downstream providers; exact API ID not reverified.
- **Release / knowledge:** 2026 release; cutoff not verified.
- **IDs:** `google/gemini-3.5-flash`.
- **Context window:** 1,048,576 tokens.
- **Modalities:** Text, image, video, file, and audio input; text output.
- **Pricing (as of 2026-10-04):** Approximately $1.50/$9 per 1M input/output tokens.
- **Architecture:** Proprietary; undisclosed.

## Raw benchmarks found

- Aggregate benchmark score: **63.95** (ModelScale listing).
- Context window: **1M tokens** (ModelScale/OpenRouter listings).

## Normalized scores (1–100)

- **Tool use: 78/100.** Agent positioning is strong but fresh tool-specific evidence is limited.
- **Reasoning: 80/100.** Aggregate benchmark evidence is solid for Flash.
- **Context window: 94/100.** 1M context is documented.
- **Multimodal: 90/100.** Broad multimodal input is documented.
- **Coding: 79/100.** Coding is a stated target, but no fresh coding score was verified.
- **Cost efficiency: 91/100.** Lower than frontier Pro pricing.
- **Overall Score: 84.2/100.** Best fit: affordable multimodal and long-context production agents.

### Multi-source deep-research addendum (2026-10-09)

- Google reports Terminal-Bench 76.2%, GDPval-AA 1656 Elo, MCP Atlas 83.6%, and CharXiv Reasoning 84.2%, positioning 3.5 Flash as an agentic/coding workhorse. Independent Appwrite testing compares the model against Google’s card and Artificial Analysis rather than relying on a single vendor table.
- Recalculation: retained existing score; the independent comparison supports the capability profile but does not resolve cross-harness differences.
- Sources: https://deepmind.google/models/model-cards/gemini-3-5-flash/ ; https://blog.google/innovation-and-ai/models-and-research/gemini-3-5/ ; https://appwrite.io/blog/post/gemini-3-5-flash-deep-dive

## Signature

- Provided by: **GPT 5.6 Luna (OpenAI/gpt-5.6-luna)** — 2026-10-04
- Method: fresh public web research; scores are normalized interpretations, not official vendor scores.
