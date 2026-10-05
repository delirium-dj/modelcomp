# Pareto 26.10 Preview — findings by GPT 5.6 Terra

- Source: Unbiased (`pareto` / `unbiased/pareto-26.10-preview`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Pareto 26.10 Preview
- **Short description:** Unbiased's preview composite model that blends multiple models for research, coding, and agentic workflows.
- **Provider / access:** Unbiased's OpenAI-compatible and Anthropic-compatible API; OpenRouter route `unbiased/pareto-26.10-preview`.
- **Release / knowledge:** Released 2026-10-01; knowledge cutoff not published.
- **IDs:** `unbiased/pareto-26.10-preview`; Unbiased's mutable API string is `pareto`.
- **Context window:** 1,048,576 tokens; 131,072 maximum output on the OpenRouter route.
- **Modalities:** Text and image input; text output; tools and explicit reasoning.
- **Pricing (as of 2026-10-05):** $0.80/M input, $0.03/M cached input, and $3.20/M output (Unbiased and OpenRouter).
- **Architecture:** Proprietary composite/router; the composition can change between releases.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **50.8%**, $0.48 mean cost per task (Unbiased, 2026-10-01 preliminary run).

Reasoning / knowledge:

- GPQA Diamond: **92.4%**, $0.004 per task (Unbiased preliminary run).
- Humanity's Last Exam, text-only: **49.9%**, $0.008 per task (Unbiased preliminary run).

Coding:

- DeepSWE v1.1: **69.9%**, $0.24 per task (Unbiased preliminary run).

Long context:

- **1,048,576-token** published context window; no verified retrieval benchmark found.

### Normalized scores (1–100)

- **Tool use: 78/100.** The 50.8% Terminal-Bench result demonstrates working agentic terminal capability, but is below current leaders and vendor-preliminary.
- **Reasoning: 90/100.** A 92.4% GPQA Diamond result is excellent; the 49.9% HLE result and unreplicated vendor methodology cap the score.
- **Context window: 96/100.** The 1M-token published window is frontier-class, capped without a retrieval evaluation.
- **Multimodal: 85/100.** Text-and-image input and text output are documented; no broader media I/O is published.
- **Coding: 90/100.** The 69.9% DeepSWE v1.1 result is strong, tempered by the preview service and preliminary vendor-run status.
- **Cost efficiency: 93/100.** $0.80/M input, $0.03/M cache read, and $3.20/M output are highly competitive for the stated capability.
- **Overall Score: 88/100.** Half-up mean of the five quality dimensions: 87.8; compelling for cost-sensitive coding and research workflows, with preview volatility as the main caveat.

---

## Signature

- Provided by: **GPT 5.6 Terra (openai/gpt-5.6-terra)** — 2026-10-05
- Method: fresh public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
