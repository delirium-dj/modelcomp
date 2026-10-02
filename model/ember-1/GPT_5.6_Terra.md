# Ember-1 — findings by GPT 5.6 Terra

- Source: Fireworks Research (`accounts/fireworks/models/ember-1`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ember-1
- **Short description:** Fireworks' Kimi K3-derived reasoning model, trained to retain quality using shorter reasoning traces.
- **Provider / access:** Fireworks serverless API and Vercel AI Gateway; `fireworks/ember-1`.
- **Release / knowledge:** September 23, 2026.
- **IDs:** `fireworks/ember-1`.
- **Context window:** 1.04M tokens (Fireworks model page).
- **Modalities:** Text and image input; function calling supported.
- **Pricing (as of 2026-10-02):** $3 input, $0.30 cached input, and $15 output per million tokens.
- **Architecture:** Proprietary 2.78T-parameter MoE, built on Kimi K3.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **82.0%**; τ-2 Bench Airline: **66.0%** (Fireworks launch evaluation).

Coding:

- SWE-bench Verified: **92.2%**; SWE-Interact: **20.0%**; DeepSWE 1.1: **75.2%** (Fireworks launch evaluation).

Long context:

- **1.04M-token** documented context window; no public retrieval result found.

### Normalized scores (1–100)

- **Tool use: 85/100.** 82.0% Terminal-Bench and 66.0% τ-2 Airline indicate strong agent execution, though results are vendor-reported.
- **Reasoning: 86/100.** The claimed K3-quality preservation across benchmarks supports a high but evidence-limited score.
- **Context window: 100/100.** 1.04M context reaches the top tier without published retrieval testing.
- **Multimodal: 70/100.** Image input is supported, with no verified audio/video support.
- **Coding: 94/100.** 92.2% SWE-bench Verified and 75.2% DeepSWE are exceptional reported coding results; SWE-Interact 20.0% prevents a maximum.
- **Cost efficiency: 82/100.** Token pricing is moderate and Fireworks reports roughly 40% fewer generated tokens than K3.
- **Overall Score: 87/100.** Half-up mean of the five quality dimensions; high-end coding and agent model with limited independent validation.

---

## Signature

- Provided by: **GPT 5.6 Terra (openai/gpt-5.6-terra)** — 2026-10-02
- Method: Fresh public internet research using Fireworks' model page and launch evaluation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
