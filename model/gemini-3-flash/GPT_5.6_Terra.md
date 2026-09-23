# Gemini 3 Flash — findings by GPT 5.6 Terra

- Source: Google/Gemini 3 Flash
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Flash
- **Short description:** Google's speed-focused Gemini 3 model for responsive reasoning, multimodal applications and coding agents.
- **Provider / access:** Gemini API, AI Studio and Vertex AI; launch ID `gemini-3-flash-preview`.
- **Release / knowledge:** 2025-12-17; knowledge cutoff not published.
- **IDs:** `google/gemini-3-flash-preview`.
- **Context window:** Google evaluated the model at 1M context.
- **Modalities:** Text, image, audio and video input; text output; thinking, tools and grounding.
- **Pricing:** Launch price $0.50 input/$3 output per MTok; $1 audio input.
- **Architecture:** Proprietary.

### Raw benchmarks found

Agent / tool use:

- Google evaluated tau2-bench, Toolathlon and MCP Atlas, but values were unavailable in accessible text.

Reasoning / knowledge:

- GPQA Diamond: **90.4%**; Humanity's Last Exam: **33.7%** without tools (Google launch announcement).

Coding:

- SWE-bench Verified: **78%** (Google launch announcement).

Long context:

- Google evaluated MRCR v2 at 128K and 1M; values were unavailable in accessible text.

### Normalized scores (1–100)

- **Tool use: 80/100.** Relevant agent evaluations and tool support, with no accessible results table.
- **Reasoning: 89/100.** GPQA 90.4% and HLE 33.7% without tools.
- **Context window: 94/100.** Evaluated at 1M, without an accessible retrieval result.
- **Multimodal: 88/100.** Broad native input and Google-reported MMMU Pro 81.2%.
- **Coding: 84/100.** SWE-bench Verified 78%.
- **Cost efficiency: 91/100.** Strong $0.50/$3 per MTok price point.
- **Overall Score: 87/100.** Mean of the five non-cost quality dimensions: (80 + 89 + 94 + 88 + 84) / 5.

---

## Signature

- Provided by: **GPT 5.6 Terra (openai/gpt-5.6-terra)** — 2026-09-23
- Method: Fresh public research using Google's official announcement and evaluation document; scores are normalized interpretations, not official vendor scores.
