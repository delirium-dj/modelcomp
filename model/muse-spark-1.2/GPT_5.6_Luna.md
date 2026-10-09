# Muse Spark 1.2 — findings by GPT 5.6 Luna

- Source: Meta/Muse Spark 1.2
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.2
- **Short description:** Meta's prior flagship agentic reasoning model, superseded by Muse Spark 1.3; pricing/reasoning tiers are aliases, not separate models.
- **Provider / access:** Meta Model API and Muse Code; exact API route not reverified.
- **Release / knowledge:** 2026 release; cutoff not disclosed.
- **IDs:** `meta/muse-spark-1.2`.
- **Context window:** 1,048,576 tokens.
- **Modalities:** Text reasoning, tools, and agent workflows; broad multimodal support was not verified.
- **Pricing (as of 2026-10-04):** Standard $1.25/$4.25 per 1M input/output; cheaper Contributor tier reported at $0.10/$0.20 with data-use tradeoffs.
- **Architecture:** Proprietary; undisclosed.

## Raw benchmarks found

- LiveBench: **78.0** (independent tracking).
- GPQA Diamond: **90.4%** (independent tracking; saturated/tainted comparison).
- Humanity's Last Exam: **45.46%** (independent tracking).
- Terminal-Bench 2.1: **80.15%** (independent tracking).

## Normalized scores (1–100)

- **Tool use: 80/100.** Agentic capability is documented but below 1.3's later results.
- **Reasoning: 82/100.** HLE 45.46 and GPQA 90.4 support strong but not frontier-leading reasoning.
- **Context window: 96/100.** 1M context documented; full-window retrieval evidence is limited.
- **Multimodal: 65/100.** Broad multimodal capability was not verified.
- **Coding: 82/100.** Terminal-Bench 80.15 is solid, though independent harness variance applies.
- **Cost efficiency: 94/100.** Contributor pricing is exceptionally low, with privacy/data-use tradeoffs.
- **Overall Score: 81.0/100.** Best fit: inexpensive agentic workloads and coding at scale.

### Multi-source deep-research addendum (2026-10-09)

- Meta confirms Spark 1.2’s multimodal text/image/video use and availability in Meta Model API and Muse Code. Independent tracking reports GPQA 90.4, SWE-bench Verified 86.6, Terminal-Bench 80.15, and Toolathlon 75.9, with meaningful evaluator disagreement on HLE.
- Recalculation: retained existing score; the independent results reinforce coding/tool strength but do not justify increasing reasoning because the HLE sources conflict.
- Sources: https://research.meta.ai/blog/multimodal-intelligence-of-muse-spark-1-2 ; https://themodelgap.com/models/muse-spark-1-2 ; https://shortlyai.com/models/muse-spark-1-2

## Signature

- Provided by: **GPT 5.6 Luna (OpenAI/gpt-5.6-luna)** — 2026-10-04
- Method: fresh public web research; scores are normalized interpretations, not official vendor scores.
