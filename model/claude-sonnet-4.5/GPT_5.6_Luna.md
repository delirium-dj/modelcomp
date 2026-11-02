# Claude Sonnet 4.5 — findings by GPT 5.6 Luna

- Source: Anthropic / Claude Sonnet 4.5
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.5
- **Short description:** Anthropic's balanced coding, reasoning, computer-use, and agent model from 2025. It is now deprecated and must remain distinct from Claude Sonnet 5.4/5.5 and newer variants.
- **Provider / access:** Anthropic API, Amazon Bedrock, Google Cloud, Microsoft Foundry, and other Anthropic-managed cloud integrations; extended thinking and tools are supported.
- **Release / knowledge:** Released 2025-09-29; currently deprecated and scheduled to retire 2026-11-30. Reliable knowledge cutoff January 2025; training-data cutoff July 2025.
- **IDs:** API snapshot `anthropic/claude-sonnet-4-5-20250929`; API alias `claude-sonnet-4-5`; Bedrock `anthropic.claude-sonnet-4-5-20250929-v1:0`.
- **Context window:** 200K tokens; maximum output 64K tokens.
- **Modalities:** Text and image input, text output, extended thinking, and tool use; no audio/video input or non-text output was verified.
- **Pricing (as of 2026-11-02):** $3 input / $15 output per 1M tokens; $0.30 cached reads, with 50% Batch API discounts.
- **Architecture:** Proprietary; parameters undisclosed.

### Raw benchmarks found

> Anthropic's primary release numbers use the 200K configuration and stated harnesses. The 1M SWE result is a separate configuration; current BenchLM rows are partial and are kept as independent corroboration.

Agent / tool use:

- OSWorld: **61.4%** (Anthropic release); Terminal-Bench 2.0: **50.0%** (current BenchLM/system-card extraction).
- Gert Labs: **48.51%**; VITA-Bench: **17.0%**; JobBench: **27.7%** (BenchLM/independent sources).
- BenchLM's partial profile is **47.18/100**, rank **#116/1004**, across 13/724 benchmark rows.

Reasoning / knowledge:

- GPQA: **83.4%**; AIME 2025: **87.0%**; ARC-AGI-2: **13.6%** (system-card/release rows).
- FrontierMath v2 tiers 1–3 / tier 4: **23.860% / 2.439%** (Epoch leaderboard as surfaced by BenchLM).

Coding:

- SWE-bench Verified: **77.2%** at the primary 200K configuration; Anthropic also reports **78.2%** in a separate 1M configuration and **82.0%** with high-compute sampling. These are not interchangeable.
- Terminal-Bench 2.0: **50.0%** (BenchLM/system-card extraction); no exact current LiveCodeBench or SWE-Pro result was verified.

Multimodal:

- The exact model supports image input and text output. BenchLM lists Design Arena Website **1188**, a preference score rather than a capability benchmark.

Long context:

- Official API capacity: **200K**. No exact MRCR/RULER retrieval curve was found; the 1M SWE configuration is a distinct evaluation setup, not the current model-card context limit.

### Normalized scores (1–100)

- **Tool use: 78/100.** OSWorld 61.4%, Terminal-Bench 50%, and established tool use support a capable agent; VITA/JobBench and limited exact coverage cap it.
- **Reasoning: 80/100.** GPQA 83.4% and AIME 87% are strong, but ARC-AGI-2 13.6%, FrontierMath results, and the model's age prevent a frontier score.
- **Context window: 70/100.** The verified API window is 200K, the methodology baseline tier; no full-window retrieval curve is public.
- **Multimodal: 72/100.** Image input is verified, but output is text-only and the current exact-model multimodal benchmark coverage is sparse.
- **Coding: 84/100.** SWE-bench Verified 77.2% is strong practical evidence, with separate 1M/high-compute results noted; Terminal-Bench 50% and absent broad current coding rows cap it.
- **Cost efficiency: 70/100.** $3/$15 pricing is reasonable for a legacy Sonnet but no longer exceptional against current lower-cost models.
- **Overall Score: 76.8/100.** `(78 + 80 + 70 + 72 + 84) / 5 = 76.8`; best fit is established Anthropic coding workflows before the scheduled retirement, not new long-lived integrations.

---

## Signature

- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-11-02
- Method: current Anthropic model documentation and launch material, the official system-card link, and BenchLM's October 29 profile. 200K versus 1M/high-compute coding configurations and deprecated-model lifecycle status were kept explicit; scores are normalized interpretations, not official vendor scores.
- Reference URLs:
  - [Claude Sonnet 4.5 model documentation](https://platform.claude.com/docs/en/models/sonnet-4-5/overview)
  - [Anthropic Claude Sonnet 4.5 announcement](https://www.anthropic.com/news/claude-sonnet-4-5)
  - [Claude Sonnet 4.5 system card](https://assets.anthropic.com/m/12f214efcc2f457a/original/Claude-Sonnet-4-5-System-Card.pdf)
  - [BenchLM Claude Sonnet 4.5 profile](https://benchlm.ai/models/claude-sonnet-4-5)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
