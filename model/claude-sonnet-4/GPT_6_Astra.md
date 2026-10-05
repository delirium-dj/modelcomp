# Claude Sonnet 4 — findings by GPT 6 Astra

- Source: Anthropic / Claude Sonnet 4
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: [Methodology](../../model-comparison.md)
- Cross-model signed log: [Findings](../../model-findings.md)

## Model card

- **Name:** Claude Sonnet 4.
- **Short description:** Proprietary hybrid-thinking model for software engineering and document work.
- **Provider / access / IDs:** Original Messages API `claude-sonnet-4-20250514` retired June 15, 2026; partner schedules differ. OpenRouter currently lists Bedrock serving via `anthropic/claude-sonnet-4`. [Lifecycle](https://platform.claude.com/docs/en/about-claude/model-deprecations).
- **Release / knowledge:** May 22, 2025; January 2025 cutoff.
- **Context window:** Current listed route 200,000 tokens, maximum output 64,000. Historical larger beta capacity is not assumed available.
- **Modalities:** Text, images and PDFs in; text out. Tools and optional extended thinking; no native audio/video. OpenRouter does not enforce JSON through response_format.
- **Pricing (2026-10-05):** $3 input/$15 output/$0.30 cache read per million tokens; cache writes $3.75 for five minutes, $6 for one hour.
- **Architecture:** Proprietary; parameter count undisclosed. [Current serving card](https://openrouter.ai/anthropic/claude-sonnet-4).

### Raw benchmarks found

[Anthropic launch and methodology](https://www.anthropic.com/news/claude-4):

- **Coding/tool proxy:** SWE-bench Verified 72.7%, full 500 tasks, bash plus file-editing scaffold, without extended thinking. Parallel sampling and candidate selection yield 80.2%; that is a distinct high-compute setting.
- **Reasoning/vision:** Without extended thinking, GPQA Diamond 70.0%, MMMLU 85.4%, MMMU 72.6%, AIME 33.1%.
- **Tool capability:** Parallel tools and interleaving tools with extended thinking are documented, but capability support is not a success rate.
- **Missing:** Exact primary-evaluator figures for Terminal-Bench 2.1, Tau3, GDPval-AA, Claw, DeepSWE and full-window retrieval: no verified public score found in reviewed primary evidence. This report does not substitute Opus 4 results.

### Normalized scores (1–100)

- **Tool use: 65/100.** Repository-task completion is a useful agent proxy; broad dedicated tool benchmarks are missing.
- **Reasoning: 65/100.** Conservative assessment from verified standard-mode reasoning; extended-thinking gains are not quantified here.
- **Context window: 70/100.** 200K currently listed capacity, without full-window retrieval proof.
- **Multimodal: 85/100.** Image/PDF understanding; no native audio or video.
- **Coding: 76/100.** Strong measured repository repair; high-compute sampling is not the default score.
- **Cost efficiency: 60/100.** Premium $3/$15 rates, with meaningful caching discounts.
- **Overall Score: 72/100.** Half-up mean of 65, 65, 70, 85 and 76; legacy coding/document model.

---

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-05
- Method: Fresh primary-source research; normalized scores are interpretations, not official scores.
- Future sources: add a separate report beside this file.

