# GPT-5.6 Luna — findings by GPT 5.5

- Source: OpenAI (`gpt-5.6-luna`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Luna
- **Short description:** Lowest-cost GPT-5.6 tier designed for high-volume workloads that still need modern reasoning, coding, and multimodal input.
- **Provider / access:** OpenAI API and compatible partner routes; AWS Bedrock exposes `us.openai.gpt-5.6-luna` through the OpenAI-compatible Bedrock runtime.
- **Release / knowledge:** Public listings report release on 2026-07-09; knowledge cutoff not publicly verified.
- **IDs:** `openai/gpt-5.6-luna`, `us.openai.gpt-5.6-luna` on Bedrock.
- **Context window:** OpenAI developer listing and aggregators report **1,050,000 tokens**; AWS distinguishes short-context pricing under 272K input tokens.
- **Modalities:** Text and image input; text output; reasoning controls and tool calling through modern OpenAI APIs.
- **Pricing (as of 2026-10-05):** Public OpenAI listing reports about **$0.20/M input**, **$0.02/M cached input**, **$1.20/M output**.
- **Architecture:** Proprietary GPT-5.6-family model.

### Raw benchmarks found

Agent / tool use:

- The Model Gap reports Terminal-Bench 2.1 around **80.9%** on Artificial Analysis and **79.03%** on vals.ai Terminus-2 for Luna.
- Toolathlon-Verified: no official row found in public summaries.

Reasoning / knowledge:

- BenchLM reports **31 source-displayable benchmark rows** and strongest eligible category **Coding at #12**.
- Public aggregators describe benchmark scores as independent rather than OpenAI-only, but individual standard rows vary by tracker.

Coding:

- BenchLM category summary: strongest category **Coding #12**.
- LiveCodeBench: public summaries note no Luna row on vals.ai tracker.

Long context:

- Developer and aggregator listings report **1.05M** context.

### Normalized scores (1–100)

- **Tool use: 83/100.** Strong Terminal-Bench evidence near 80% and native OpenAI tool support, capped by missing official Toolathlon/Tau rows.
- **Reasoning: 82/100.** Broad independent benchmark coverage supports frontier-lite reasoning, though it is intentionally below Sol/Terra class.
- **Context window: 96/100.** A 1.05M-token window earns near-top context credit.
- **Multimodal: 70/100.** Text and image input are available, but no verified native audio/video generation.
- **Coding: 84/100.** BenchLM places coding as its strongest category with high rank, capped by missing exact LCB/SWE values in accessible sources.
- **Cost efficiency: 94/100.** Very low GPT-family pricing at $0.20/$1.20 per million tokens is excellent for a frontier-derived model.
- **Overall Score: 83/100.** Half-up mean of the five quality dimensions; best fit is high-volume production with strong long-context needs.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

