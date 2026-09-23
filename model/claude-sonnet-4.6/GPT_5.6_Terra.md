# Claude Sonnet 4.6 — findings by GPT 5.6 Terra

- Source: Anthropic/Claude Sonnet 4.6
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.6
- **Short description:** Anthropic’s high-capability Sonnet model for coding, computer use, long context and agent planning; currently active legacy.
- **Provider / access:** Claude API, Bedrock, Google Cloud and Microsoft Foundry; ID `claude-sonnet-4-6`.
- **Release / knowledge:** 2026-02-17; reliable knowledge cutoff August 2025.
- **IDs:** `anthropic/claude-sonnet-4-6` (no Zen Free ID verified).
- **Context window:** 1M input tokens and 128K output tokens.
- **Modalities:** Text and image input to text; adaptive thinking, tool use, web search/fetch, code execution and context compaction.
- **Pricing:** $3 input/$15 output per MTok; cache read $0.30 per MTok.
- **Architecture:** Proprietary.

### Raw benchmarks found

Agent / tool use:

- Vending-Bench 2: **$7,204.14** final balance at Max effort (Anthropic system-card result).
- Terminal-Bench 2.0: Anthropic documents a run but accessible text did not expose the score.

Reasoning / knowledge:

- Anthropic reports broad benchmark gains and effective 1M-context planning; exact accessible HLE/ARC values were unavailable.

Coding:

- SWE-bench Verified: **79.6%**, averaged across ten trials; Anthropic reports **80.2%** with a prompt modification.

Long context:

- 1M context and context compaction; no public MRCR/RULER value found.

### Normalized scores (1–100)

- **Tool use: 84/100.** Comprehensive native tool capabilities and strong computer-use evidence, but no accessible reproducible tool score.
- **Reasoning: 84/100.** Official evidence indicates Opus-level long-context planning, with numeric table values unavailable.
- **Context window: 96/100.** Verified 1M input and compaction; no retrieval-at-length result.
- **Multimodal: 82/100.** Image-plus-text input and strong document/computer-use evidence, but text-only output.
- **Coding: 85/100.** SWE-bench Verified 79.6% supports a frontier coding score.
- **Cost efficiency: 72/100.** Strong value for its capability class, but paid and not budget-tier.
- **Overall Score: 86.2/100.** Mean of the five non-cost quality dimensions: (84 + 84 + 96 + 82 + 85) / 5.

---

## Signature

- Provided by: **GPT 5.6 Terra (openai/gpt-5.6-terra)** — 2026-09-23
- Method: Fresh public internet research using Anthropic’s official announcement and platform documentation; scores are normalized interpretations, not official vendor scores.
