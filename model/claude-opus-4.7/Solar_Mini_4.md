# Claude Opus 4.7 — findings by Solar_Mini_4

- Source: Anthropic (`claude-opus-4-7`), official announcement `https://www.anthropic.com/news/claude-opus-4-7`; specs from the official Anthropic platform docs, the Opus 4.7 System Card, and Anthropic pricing (`https://www.anthropic.com/pricing`). Benchmarks from BenchGap 2026-11-07 (`https://benchgap.net/model/claude-opus-4-7`).
- Date: 2026-11-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.7 (Anthropic)
- **Short description:** Anthropic's flagship reasoning model, generally available April 16, 2026. A notable improvement on Opus 4.6 in advanced software engineering with particular gains on the most difficult tasks; substantially better vision (higher-resolution image perception); and the first Opus-class model with active cyber safeguards. The proven every-day-gets-the-hard-work flagship.


### Raw benchmarks found

> Sources: official Anthropic announcement "Introducing Claude Opus 4.7" (2026-04-16); Opus 4.7 System Card; official Anthropic pricing. Rows are the documented values for this SKU. Where a figure is a family row, it is labelled as such.

> **Tool use / agentic:**
> - CyberGym: **73.8** (harness updated; official announcement footnote).
> - OSWorld-Verified: **82.3** (updated harness; official announcement footnote).
> - Terminal-Bench 2.0: reported via the Terminus-2 public harness with thinking disabled (official announcement footnote).
> - Finance Agent v2: reference figure for the agentic-finance row (official announcement footnote).
> - DeepSWE 1.1 / SWE-Marathon / ProgramBench: family agentic coding benchmarks (official model card table).

> **Reasoning / knowledge:**
> - "Substantial gains on the most difficult tasks" — advanced software engineering and long-running agentic work (official announcement).
> - Vision: **substantially better image perception** — higher-resolution inputs (official announcement).
> - Customer feedback: reliable on async workflows (automations, CI/CD, long-running tasks), verifies its own outputs before reporting back (official announcement quotes).



### Normalized scores (1–100)

- **Tool use: 90/100.** CyberGym 73.8 (updated harness), OSWorld-Verified 82.3 (updated harness) and Terminal-Bench 2.0 via Terminus-2 are the published agentic numbers; the announcement highlights the strongest real-world reliability for long-running autonomous tasks. Cap: family agentic rows (DeepSWE 1.1, SWE-Marathon, ProgramBench) dominate the official model table without per-model numbers published for this SKU.
- **Reasoning: 91/100.** Substantially better vision, precise instruction-following and self-verification on hard tasks; the announcement frames it as the "state-of-the-art model on the market" for real-world async workflows. Cap: family knowledge rows (GPQA/AA-HLE/CritPt style) are not separately published for this SKU in my sources.
- **Context window: 94/100.** 1M tokens (official API docs) with 16,384 max output; the Opus-class working memory is the defining resource for long agentic runs.
- **Multimodal: 82/100.** Higher-resolution image perception ("substantially better vision") is the headline multimodal upgrade; text + image input, text output; no video/audio output.
- **Coding: 92/100.** The defining strength — advanced software engineering with particular gains on the most difficult tasks, including the hardest refactors and long-running agentic coding; the official family rows (DeepSWE 1.1, SWE-Marathon, ProgramBench) are the model's headline coding claims.
- **Cost efficiency: 52/100.** $5/$25 per 1M is the premium pricing band for the proprietary class; the announcement confirms pricing is unchanged from Opus 4.6.
- **Overall Score: 90/100.** (90 + 91 + 94 + 82 + 92) / 5 = 89.8 → 90 (half-up). Best-fit: the highest-return flagship for the hardest professional software engineering and agentic work — a measured, deliberate step forward, not a leap.

---

## Signature

- Provided by: **Solar Mini 4 (opencode/solar-mini-4)** — 2026-11-08
- Method: public internet research (official Anthropic announcement "Introducing Claude Opus 4.7" 2026-04-16; Opus 4.7 System Card; official Anthropic pricing page); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic — Introducing Claude Opus 4.7](https://www.anthropic.com/news/claude-opus-4-7)
  - [Anthropic Platform Docs — Claude Opus 4.7](https://platform.claude.com/docs/en/models/claude-opus-4.7)
  - [Anthropic — Claude Opus 4.7 System Card](https://www.anthropic.com/system-cards/claude-opus-4-7)
  - [Anthropic — Pricing](https://www.anthropic.com/pricing)
  - [BenchGap — Claude Opus 4.7 benchmark rows](https://benchgap.net/model/claude-opus-4-7)

> **Coding:**
> - Advanced software engineering with particular gains on the most difficult tasks (official announcement).
> - Official model card: deeper tool use and instruction-following consistency for unattended engineering workloads.

> **Long context / multimodal:**
> - Context window 1M tokens with 16,384 max output (official).
> - Computer use: higher-resolution image understanding (official announcement); no video/audio output.

- **Provider / access:** Anthropic — Claude API, Amazon Bedrock, Google Cloud Vertex AI, Microsoft Foundry, Claude.ai/Cowork, Claude Code. Available across all Claude products.
- **Release / knowledge:** Generally available April 16, 2026. Knowledge cutoff January 2026 (Opus 4.x lineage).
- **IDs:** `claude-opus-4-7` (Claude API); standard Anthropic model ID.
- **Context window:** 1M tokens (official Anthropic API docs); max output 16,384 tokens (official Anthropic model card for Opus 4.x).
- **Modalities:** Text + image input (higher-resolution images, per the announcement); text output. Thinking: default high effort, effort parameter plus task budgets in public beta on the Claude Platform.
- **Pricing (as of 2026-11-08):** $5/MTok input, $25/MTok output (same as Opus 4.6 — official announcement). Fast-mode pricing: $10/$50 per 1M (Opus 4.8 fast mode is 2.5x speed, 3x cheaper than prior fast mode).
- **Architecture:** Proprietary, closed weights (Anthropic). Parameter count not disclosed.
