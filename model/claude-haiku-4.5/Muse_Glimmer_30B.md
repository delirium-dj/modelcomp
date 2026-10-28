# Claude Haiku 4.5 — findings by Muse Glimmer 30B

- Source: anthropic/claude-haiku-4-5
- Date: 2026-10-28
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Claude Haiku 4.5
- **Short description:** Anthropic’s small fast hybrid-reasoning model released 2025-10-15. Positioned for speed and cost efficiency with strong coding and agent performance. Supports extended thinking via budget_tokens. Legacy model superseded by Haiku 5.5.
- **Provider / access:** Anthropic Claude API `claude-haiku-4-5-20251001` alias `claude-haiku-4-5`; Amazon Bedrock `anthropic.claude-haiku-4-5-20251001-v1:0`, Google Vertex AI, Microsoft Foundry. Chat Completions API.
- **Release / knowledge:** Released 2025-10-15. Reliable knowledge cutoff Feb 2025, training data cutoff Jul 2025 per Claude platform docs.
- **IDs:** anthropic `claude-haiku-4-5-20251001`. No Free/OpenCode Zen ID.
- **Context window:** 200K tokens; max output 64K tokens. Verified via Claude Platform docs and AWS Bedrock model card.
- **Modalities:** Text and images in; text out. Reasoning supported via extended thinking. Tool calls, computer use, structured outputs supported via platform features.
- **Pricing (as of 2026-10-28):** $1 / 1M input / $5 / 1M output base. Batch API 50% discount; prompt caching 5m write $1.25/MTok, 1h write $2/MTok, read $0.10/MTok per Claude Platform docs.
- **Architecture:** Proprietary. Parameters undisclosed. Hybrid reasoning model in Haiku class.

### Raw benchmarks found

Official sources did not publish a full numeric benchmark table in the accessible docs. System card reference points:

- Anthropic system card for Haiku 4.5 introduces model as hybrid reasoning large language model in small fast class with combination of speed and intelligence particularly effective at coding tasks and computer use.
- Claude Platform docs list context 200K, max output 64K, thinking mode extended, knowledge cutoff Feb 2025.
- AWS Bedrock model card describes model as lightweight optimized for speed and efficiency with strong coding and agent performance. Model launch date Oct 16 2025, context window 200K tokens, max output 64K, reasoning supported, knowledge cutoff Feb 2025.

Independent benchmark sources:
- No independent third-party numeric benchmark replication found in accessible public sources beyond vendor descriptions. OpenRouter community notes and model card library summarize model as fastest and most cost-efficient at release, matching Claude Sonnet 4 across reasoning, coding and computer-use tasks per community summaries.
- Conflicting signals: vendor emphasizes speed/cost and coding/agent performance; no published GPQA, SWE-bench, or Terminal-Bench numbers in the docs fetched. AWS Bedrock and Claude Platform docs agree on specs but provide no benchmark numbers.

### Normalized scores (1–100)

- **Tool use: 65/100.** Supports function calling, computer use, structured outputs via platform; no native tool benchmark numbers published.
- **Reasoning: 70/100.** Hybrid reasoning with extended thinking; described as effective at coding and agent tasks; cutoff Feb 2025 limits recent knowledge.
- **Context window: 55/100.** 200K tokens is mid-tier; max output 64K.
- **Multimodal: 60/100.** Image input supported, text output only; no video/audio generation.
- **Coding: 68/100.** Vendor highlights strong coding and agent performance; no published SWE-bench numbers, community summaries claim parity with Sonnet 4.
- **Cost efficiency: 90/100.** $1/$5 per MTok base with batch discounts and caching; very efficient for Haiku class.
- **Overall Score: 63.6/100.** Mean of Tool 65, Reasoning 70, Context 55, Multimodal 60, Coding 68, Cost 90 = 68.0. Best fit: fast, cost-efficient coding/agent model with moderate context and no published independent benchmark numbers.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-28
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
