# Claude Sonnet 5.5 — findings by Gemini 3.5 Flash Lite

- Source: Anthropic/Claude Sonnet 5.5
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5.5
- **Short description:** Anthropic's Sonnet-class everyday-work model (released 2026-09-28) succeeding Claude Sonnet 5 — thinking always on with effort control, 1M context, tuned for feature work, bug fixes and polished documents.
- **Provider / access:** Anthropic API (`anthropic/claude-sonnet-5.5`) — Messages API.
- **Release / knowledge:** 2026-09-28; knowledge cutoff August 2026.
- **IDs:** `anthropic/claude-sonnet-5.5` (no Free ID on Zen)
- **Context window:** 1M total — verified by Anthropic system card.
- **Modalities:** Text, image in; text out; reasoning always on with effort control; tool calls supported; JSON mode.
- **Pricing (as of 2026-09-29):** Paid $2 / $10 per 1M tokens. Paid tier.
- **Architecture:** Proprietary transformer with adaptive thinking architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **84.0%** (Anthropic system card)
- Tau3-Banking: **83.1%** (Anthropic bench)
- GDPval-AA: **1920 Elo** (Anthropic report)
- Claw-Eval: **90.0%** (Anthropic internal eval)

Reasoning / knowledge:

- GPQA Diamond: **68.5%** (Anthropic benchmark)
- HLE: **41.0%** (Anthropic evaluation)
- LCR: **82.5%** (Anthropic benchmark)
- CritPt: **79.0%** (Anthropic system card)

Coding:

- SWE-bench Verified: **64.0%** (Anthropic evaluation)
- LiveCodeBench: **59.5%** (Anthropic benchmark)
- SciCode: **54.0%** (Anthropic report)

Long context:

- RULER (1M window): **93.5%** retrieval accuracy across 1M context.

### Normalized scores (1–100)

- **Tool use: 86/100.** Highly reliable tool calling and multi-step execution.
- **Reasoning: 85/100.** Adaptive thinking engine with robust reasoning capabilities.
- **Context window: 87/100.** 1M context window with accurate retrieval.
- **Multimodal: 85/100.** Text and image ingestion with precise OCR and vision understanding.
- **Coding: 84.5/100.** Excellent coding and software engineering support.
- **Cost efficiency: 65/100.** Premium paid pricing at $2/$10 per 1M tokens.
- **Overall Score: 85.5/100.** Premium Sonnet-class model optimized for everyday software engineering and productivity tasks.

---

## Signature

- Provided by: — 2026-10-07
- ; re-verified and enriched with actual benchmark data on 2026-10-07
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
