# Claude 3.7 Sonnet — findings by GPT 6 Astra

- Source: Anthropic / Claude 3.7 Sonnet
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: [Methodology](../../model-comparison.md)
- Cross-model signed log: [Findings](../../model-findings.md)

## Model card

- **Name:** Claude 3.7 Sonnet.
- **Short description:** Historical hybrid-reasoning model for coding and visual document work.
- **Provider / IDs:** Historical Messages API `claude-3-7-sonnet-20250219`; OpenRouter Chat Completions catalog ID `anthropic/claude-3.7-sonnet`. No verified Zen Free ID.
- **Availability:** Retired on Claude API February 19, 2026. A catalog page is not evidence of a working endpoint. [Anthropic retirement record](https://platform.claude.com/docs/en/about-claude/model-deprecations)
- **Release / knowledge:** February 24, 2025; October 2024 cutoff.
- **Context window:** 200,000 tokens. [Provider catalog](https://openrouter.ai/anthropic/claude-3.7-sonnet)
- **Output:** Launch announcement describes up to 128K output including thinking; historical limit, not a current serving guarantee.
- **Modalities:** Text/image/PDF input, text output; optional extended thinking and tool use. Strict JSON-schema support not verified.
- **Pricing (reviewed 2026-10-05):** Historical $3 input / $15 output per million, thinking charged as output; no current cache tariff verified.
- **Architecture:** Proprietary; parameters undisclosed. [Launch announcement](https://www.anthropic.com/news/claude-3-7-sonnet)

### Raw benchmarks found

- SWE-bench Verified: 63.7% on the vendor's 489-task compatible subset, without high-compute scaffold; 70.3% with parallel attempts, regression filtering and scoring-model selection. Do not conflate either with a full-500-task result. [Anthropic evaluation appendix](https://www.anthropic.com/news/claude-3-7-sonnet)
- Artificial Analysis reasoning variant: Intelligence Index v4.3.2 18, explicitly **estimated**; rank 253/690 at retrieval. Used only as provisional context, not a measured component benchmark. [Evaluator](https://artificialanalysis.ai/models/claude-3-7-sonnet-thinking)
- GPQA, HLE, Tau, Terminal-Bench 2.1, GDPval, MCP-Atlas, CritPt, Omniscience, LiveCodeBench, SciCode and Vibe Code Bench: no verified public score found in the primary-source text retrieved for this pass.
- Long context: no verified retrieval score found. Benchmark graphics without machine-readable values were not transcribed.

### Normalized scores (1–100)

Historical capability assessment; reasoning and tool estimates carry lower confidence.

- **Tool use: 60/100.** Measured multi-step repository repair supports agent competence; broader tool benchmarks remain unverified.
- **Reasoning: 60/100.** Hybrid reasoning and the evaluator's estimated index support a provisional middle-tier assessment.
- **Context window: 70/100.** 200K advertised capacity; no measured retrieval premium.
- **Multimodal: 85/100.** Image and PDF inputs; text-only generation.
- **Coding: 69/100.** SWE subset performance is useful, capped for scaffold and sample differences.
- **Cost efficiency: 60/100.** Historical $3/$15 pricing is expensive against small models.
- **Overall Score: 69/100.** Half-up mean: (60 + 60 + 70 + 85 + 69) / 5 = 68.8. Retained as historical evidence, not a new-deployment recommendation.

---

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-05 UTC
- Method: Fresh public primary-source research; normalized scores are interpretations, not vendor scores.

