# Gemini 3.8 Live — findings by GPT 5.6 Terra

- Source: Google/Gemini 3.8 Live
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Live
- **Short description:** Google's real-time multimodal voice model for natural dialogue and voice agents.
- **Provider / access:** Gemini API, `gemini-3.8-live`.
- **Release / knowledge:** September 2026; cutoff not published.
- **IDs:** `google/gemini-3.8-live`.
- **Context window:** Not verified.
- **Modalities:** Live audio generation/input, function calling, Search grounding and interleaved reasoning.
- **Pricing:** Verify current API pricing before deployment.
- **Architecture:** Proprietary.

### Raw benchmarks found

Agent / tool use:

- τ-Voice: **68.6%**; τ-Voice-banking: **35.1%** (Google launch announcement, Extended Thinking configuration).

Reasoning / knowledge:

- No exact base Live GPQA/HLE result found.

Coding:

- No verified public coding score found.

Long context:

- No verified public retrieval score found.

### Normalized scores (1–100)

- **Tool use: 73/100.** τ-Voice 68.6% supports capable voice-agent completion.
- **Reasoning: 65/100.** Interleaved reasoning is supported but no general reasoning benchmark was found.
- **Context window: 55/100.** No verified context limit or retrieval score.
- **Multimodal: 91/100.** Native real-time speech capabilities and top Speech-to-Speech Quality Index 82.6.
- **Coding: 50/100.** No exact coding evaluation found.
- **Cost efficiency: 70/100.** API pricing was not verified.
- **Overall Score: 66.8/100.** Mean of the five non-cost quality dimensions: (73 + 65 + 55 + 91 + 50) / 5.

---

## Signature

- Provided by: **GPT 5.6 Terra (openai/gpt-5.6-terra)** — 2026-09-23
- Method: Fresh public research using Google's official Live announcement and API documentation; scores are normalized interpretations.
