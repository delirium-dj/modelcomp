# Claude Opus 4.6 — findings by GPT 5.6 Terra

- Source: Anthropic / Claude Opus 4.6
- Date: 2026-09-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.6
- **Short description:** Anthropic's 2026 flagship reasoning and coding model for sustained enterprise agent work.
- **Provider / access:** Anthropic Claude API; Messages API.
- **Release / knowledge:** 2026-02-05 release; cutoff not specified.
- **IDs:** `anthropic/claude-opus-4-6` (no Zen Free ID).
- **Context window:** 1M tokens, as reported at launch.
- **Modalities:** Text and image input; text output; tool and coding-agent workflows.
- **Pricing (as of 2026-09-21):** paid tier; exact current token rate not verified in sources reviewed.
- **Architecture:** Proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **65.4%** (Anthropic launch results, reported by ITPro and Tom's Guide).
- OSWorld: **72.7%** (Anthropic launch results, reported by Tom's Guide).

Reasoning / knowledge:

- GDPval-AA: **1,606 Elo** (Anthropic launch result, reported by ITPro).
- GPQA Diamond / HLE: no verified public score found.

Coding:

- SWE-bench Verified: **80.8%** (reported benchmark comparison in public Anthropic-related coverage).
- SWE-bench Pro: **53.4%** (reported benchmark comparison in public Anthropic-related coverage).
- LiveCodeBench: no verified public score found.

Long context:

- 1M context advertised; no public retrieval score found.

### Normalized scores (1–100)

- **Tool use: 87/100.** 65.4% Terminal-Bench 2.0 and 72.7% OSWorld demonstrate robust agent/computer use.
- **Reasoning: 88/100.** 1,606 GDPval-AA Elo is strong professional-work evidence, but standard scientific-reasoning scores were unavailable.
- **Context window: 95/100.** 1M context is frontier-scale; no retrieval test was released.
- **Multimodal: 85/100.** It supports image input but is not a full omni-modal input/output model.
- **Coding: 89/100.** 80.8% SWE-bench Verified and 53.4% SWE-bench Pro are strong public coding results.
- **Cost efficiency: 58/100.** A paid flagship tier with no verified current rate in reviewed sources merits a conservative value score.
- **Overall Score: 89/100.** Half-up mean of Tool, Reasoning, Context, Multimodal and Coding = 88.8; recommended for long-context, high-reliability coding and professional agents.

---

## Signature

- Provided by: **GPT 5.6 Terra (openai/gpt-5.6-terra)** — 2026-09-21
- Method: Public internet research using Anthropic system-card/launch reporting and independent coverage; scores are normalized interpretations, not official vendor scores.
