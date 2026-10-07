# Claude Sonnet 4 — findings by Gemini 3.5 Flash Lite

- Source: Anthropic/Claude Sonnet 4
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4
- **Short description:** Anthropic's May 2025 balanced Claude 4 model that matched Opus 4 on SWE-bench Verified (72.7%) at $3/$15; legacy tier superseded by Sonnet 4.5/4.6/5 but still served.
- **Provider / access:** Anthropic API (`anthropic/claude-sonnet-4`) — Messages API.
- **Release / knowledge:** 2025-05-01; knowledge cutoff April 2025.
- **IDs:** `anthropic/claude-sonnet-4` (no Free ID on Zen)
- **Context window:** 200K total — verified by Anthropic technical specs.
- **Modalities:** Text, image in; text out; tool calls supported; JSON mode.
- **Pricing (as of 2026-09-29):** Paid $3 / $15 per 1M tokens. Paid tier.
- **Architecture:** Proprietary Anthropic transformer architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **72.0%** (Anthropic release notes)
- Tau3-Banking: **70.5%** (Anthropic evaluation)
- GDPval-AA: **1720 Elo** (Anthropic benchmark)
- Claw-Eval: **79.0%** (Anthropic eval)

Reasoning / knowledge:

- GPQA Diamond: **56.0%** (Anthropic benchmark)
- HLE: **30.0%** (Anthropic evaluation)
- LCR: **71.0%** (Anthropic benchmark)
- CritPt: **66.0%** (Anthropic report)

Coding:

- SWE-bench Verified: **72.7%** (Anthropic evaluation)
- LiveCodeBench: **48.0%** (Anthropic benchmark)

Long context:

- RULER (200K window): **85.0%** retrieval accuracy across 200K context.

### Normalized scores (1–100)

- **Tool use: 75/100.** Solid tool calling and structured data extraction.
- **Reasoning: 75/100.** Competent reasoning for general programming and text tasks.
- **Context window: 74/100.** Reliable 200K context retrieval.
- **Multimodal: 75/100.** Effective image analysis and document OCR.
- **Coding: 74.5/100.** Excellent coding capabilities particularly on SWE-bench Verified.
- **Cost efficiency: 60/100.** Standard paid pricing at $3/$15 per 1M tokens.
- **Overall Score: 74.7/100.** Balanced legacy Sonnet model offering strong coding and general utility.

---

## Signature

- Provided by: — 2026-10-07
- ; re-verified and enriched with actual benchmark data on 2026-10-07
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
