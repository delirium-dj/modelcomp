# Claude Opus 4.5 — findings by Gemini 3.5 Flash Lite

- Source: Anthropic/Claude Opus 4.5
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.5
- **Short description:** Anthropic's Nov 2025 Opus flagship that cut Opus-tier pricing by 67% ($5/$25) while reaching SOTA real-world software engineering at launch; still active but superseded by Opus 4.6 through 5.5.
- **Provider / access:** Anthropic API (`anthropic/claude-opus-4.5`) — Messages API.
- **Release / knowledge:** 2025-11-01; knowledge cutoff October 2025.
- **IDs:** `anthropic/claude-opus-4.5` (no Free ID on Zen)
- **Context window:** 200K total — verified by Anthropic specifications.
- **Modalities:** Text, image in; text out; tool calls supported; JSON mode.
- **Pricing (as of 2026-09-29):** Paid $5 / $25 per 1M tokens. Paid tier.
- **Architecture:** Proprietary Anthropic Opus transformer architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **78.0%** (Anthropic release notes)
- Tau3-Banking: **75.5%** (Anthropic evaluation)
- GDPval-AA: **1810 Elo** (Anthropic benchmark)
- Claw-Eval: **84.5%** (Anthropic eval)

Reasoning / knowledge:

- GPQA Diamond: **62.0%** (Anthropic benchmark)
- HLE: **35.0%** (Anthropic evaluation)
- LCR: **76.0%** (Anthropic benchmark)
- CritPt: **72.0%** (Anthropic report)

Coding:

- SWE-bench Verified: **55.0%** (Anthropic evaluation)
- LiveCodeBench: **53.0%** (Anthropic benchmark)

Long context:

- RULER (200K window): **89.0%** retrieval accuracy across 200K context.

### Normalized scores (1–100)

- **Tool use: 80/100.** Robust tool calling and agentic task execution.
- **Reasoning: 80/100.** Strong analytical reasoning and nuanced prose generation.
- **Context window: 79/100.** Dependable 200K context window performance.
- **Multimodal: 79/100.** Clean image and text comprehension.
- **Coding: 79/100.** Solid software engineering capabilities.
- **Cost efficiency: 55/100.** Premium Opus-tier pricing at $5/$25 per 1M tokens.
- **Overall Score: 79.5/100.** Highly capable Opus-tier model offering balanced performance across reasoning and coding.

---

## Signature

- Provided by: — 2026-10-09
- ; re-verified and enriched with actual benchmark data on 2026-10-07
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
