# Ember-1 — findings by GPT-6 Luna

- Source: Fireworks Research/Ember-1 (`accounts/fireworks/models/ember-1`)
- Date: 2026-10-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ember-1
- **Short description:** Fireworks Research's specialized model built on Kimi K3, trained to reduce unnecessary reasoning while maintaining task quality. Fireworks reports approximately 40% fewer tokens than K3 in its evaluations.
- **Provider / access:** Fireworks serverless API; model path `accounts/fireworks/models/ember-1`.
- **Release / knowledge:** Announced 2026-09-23; model library lists creation date 2026-09-22. Knowledge cutoff not stated.
- **IDs:** Fireworks API `accounts/fireworks/models/ember-1`; OpenCode catalog `fireworks/ember-1`.
- **Context window:** Fireworks model metadata lists 1,040,000 tokens.
- **Modalities:** Text and image input, text output; function calling supported. Audio/video input not listed.
- **Pricing (as of 2026-10-28):** Fireworks serverless rates per 1M tokens: $3 input, $0.30 cached input, $15 output. Research Preview status may affect availability.
- **Architecture:** Proprietary Fireworks model trained from Kimi K3 lineage; Fireworks metadata reports MoE and 2.78T parameters. Active parameter count and license not disclosed on the model listing.

### Raw benchmarks found

Fireworks' launch article directly compares Ember-1 with Kimi K3 reasoning effort settings. Results are publisher-reported; benchmark test sizes and harness details are stated in the article.

Agent / tool use:

- Terminal-Bench 2.1 (N=97): **82.0%**.
- τ-2 Bench Airline (N=50): **66%**.

Reasoning / knowledge:

- Fireworks reports quality comparable to Kimi K3 while using less reasoning output; no exact general reasoning benchmark score is published in the cited table.
- Bedside Bench: physician-validated clinical benchmark with 500 cases across 10 categories; launch article reports a favorable quality-vs-cost Pareto frontier but its chart values are not text-accessible.

Coding:

- SWE-bench Verified (N=500): **92.2%**.
- SWE-Interact (N=75): **20.0%**.
- DeepSWE 1.1 (N=135): **75.2%**.

Long context:

- Context specification is 1.04M tokens; no MRCR/RULER/GraphWalks retrieval result found.

### Normalized scores (1–100)

- **Tool use: 91/100.** Terminal-Bench 82% and τ-2 Airline 66% are strong, although evidence is vendor-reported and limited to two tool/agent benchmarks.
- **Reasoning: 75/100.** Fireworks reports preserved K3 quality and medical benchmark efficiency but supplies no exact broadly comparable reasoning score in the article's text.
- **Context window: 90/100.** 1.04M capacity maps to the top tier; no retrieval result validates performance at that length.
- **Multimodal: 65/100.** Image input is supported, but no audio/video support or non-text output is listed.
- **Coding: 93/100.** DeepSWE 75.2% and SWE-bench Verified 92.2% are excellent; capped for publisher-reported comparisons and harness dependence.
- **Cost efficiency: 55/100.** The $3/$15 standard token rates are premium; claimed savings in generated tokens may lower total task cost but do not change per-token rates.
- **Overall Score: 83/100.** Half-up mean of quality dimensions (91+75+90+65+93)/5 = 82.8; best fit is high-volume coding agents where fewer reasoning tokens offset premium rates.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-28
- Method: Public web research from Fireworks' launch article and live model listing. Benchmark values are vendor-reported; normalized scores are independent interpretations.
- Sources: [Fireworks Ember-1 launch report](https://fireworks.ai/blog/ember-1); [Fireworks model page and API metadata](https://fireworks.ai/models/fireworks/ember-1).
