# Ember-1 — findings by LongCat 2.5 Preview

- Source: Fireworks AI/Ember-1
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ember-1
- **Short description:** Fireworks Research's specialized reasoning model built on Kimi K3 (Moonshot AI). Post-trained to produce shorter reasoning traces (~40% fewer tokens) while maintaining comparable quality. First model in the Ember series.
- **Provider / access:** Fireworks AI serverless API — `accounts/fireworks/models/ember-1`. Also available via OpenRouter.
- **Release / knowledge:** 2026-09-23 release.
- **IDs:** `fireworks/ember-1`
- **Context window:** 1,040K tokens (~1M); 943.7K max output.
- **Modalities:** text, image input; text output; reasoning yes; tool calling yes; structured outputs yes.
- **Pricing (as of 2026-10-02):** $3.00/1M input, $0.30/1M cached input, $15.00/1M output.
- **Architecture:** MoE — 2.78T total parameters. Built on Kimi K3; post-trained with 50+ training experiments and 200+ evaluations.

### Raw benchmarks found

Agent / tool use:

- Terminal Bench 2.1: **82.0%** (Fireworks blog; vs K3 max 80.9%)
- τ²-Bench Airline: **66%** (Fireworks blog; vs K3 max 64%)

Reasoning / knowledge:

- No direct GPQA/AIME scores publicly reported. Benchmarks are vendor-reported by Fireworks against Kimi K3.

Coding:

- SWE-bench Verified: **92.2%** (Fireworks blog; vs K3 max 93.2%)
- SWE-Interact: **20.0%** (Fireworks blog; vs K3 max 21.3%)
- DeepSWE 1.1: **75.2%** (Fireworks blog; vs K3 max 66.4%)

Long context:

- No long-context retrieval benchmark (MRCR/RULER/GraphWalks) publicly reported for Ember-1.

Multimodal:

- Text and image input supported. No specific multimodal benchmark scores found for Ember-1.

Efficiency:

- Output tokens per task: **29.9K** (vs Kimi K3 49.3K — 39% reduction)
- Reasoning token reduction: **71.3%** vs Kimi K3
- Total token reduction: **39%** vs Kimi K3
- Customer A/B test score: **0.753** (Ember-1) vs 0.751 (K3)

### Normalized scores (1–100)

- **Tool use: 75/100.** Terminal Bench 2.1 82.0%, τ²-Bench Airline 66%. Strong agentic tool use, leading K3 max on Terminal Bench. Capped by limited benchmark coverage.
- **Reasoning: 75/100.** No direct GPQA/AIME scores publicly reported. Score inferred from K3 comparison, benchmark performance, and vendor claims of comparable quality at lower cost.
- **Context window: 95/100.** 1,040K token context window with 943.7K max output. Among the largest available.
- **Multimodal: 65/100.** Text and image input supported. No specific multimodal benchmark scores found. Capability inferred from input modalities.
- **Coding: 82/100.** SWE-bench Verified 92.2%, DeepSWE 1.1 75.2%. Strong coding performance, leading K3 max on DeepSWE. Slightly below K3 max on SWE-bench Verified.
- **Cost efficiency: 70/100.** $3.00/1M input and $15.00/1M output — moderate per-token pricing. However, ~40% fewer tokens at comparable quality makes it significantly more cost-efficient in practice. Customer A/B test showed 39% total token reduction.
- **Overall Score: 78/100.** Mean of five quality dims (75+75+95+65+82)/5 = 78.4 → 78. Best fit: cost-efficient agentic coding and reasoning workloads where shorter reasoning traces reduce latency and token cost without sacrificing quality.

---

## Signature

- Provided by: **LongCat 2.5 Preview (opencode/longcat-2.5-preview-free)** — 2026-10-02
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
