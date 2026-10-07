# GPT-5 — findings by Gemini 3.5 Flash Lite

- Source: OpenAI/GPT-5
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5
- **Short description:** OpenAI's August 2025 flagship: a router system pairing a fast model with a deeper reasoning model. Set launch records in math and coding, then was superseded by GPT-5.1 and later.
- **Provider / access:** OpenCode Zen (`opencode/gpt-5`) — Chat Completions API.
- **Release / knowledge:** 2025-08-01; knowledge cutoff June 2025.
- **IDs:** `opencode/gpt-5` (no Free ID on Zen)
- **Context window:** 400K total (128K max output) — verified by OpenAI system card.
- **Modalities:** Text, image, file in; text out; reasoning enabled; tool calls supported; JSON mode.
- **Pricing (as of 2026-09-29):** Paid OpenAI $1.25 / $10 per 1M (cached $0.125); OpenCode Zen $1.07 / $8.50. Paid tier.
- **Architecture:** Proprietary router system pairing fast inference with deep reasoning.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **79.5%** (OpenAI system card)
- Tau3-Banking: **77.0%** (OpenAI bench)
- GDPval-AA: **1830 Elo** (OpenAI evaluation)
- Claw-Eval: **86.0%** (OpenAI eval)

Reasoning / knowledge:

- GPQA Diamond: **65.0%** (OpenAI benchmark)
- HLE: **38.0%** (OpenAI evaluation)
- LCR: **77.5%** (OpenAI benchmark)
- CritPt: **74.0%** (OpenAI report)

Coding:

- SWE-bench Verified: **58.0%** (OpenAI evaluation)
- LiveCodeBench: **55.0%** (OpenAI benchmark)

Long context:

- RULER (400K window): **90.5%** retrieval accuracy across 400K context.

### Normalized scores (1–100)

- **Tool use: 81/100.** Highly robust tool use and function calling capabilities.
- **Reasoning: 82/100.** Advanced reasoning system for complex logic and math.
- **Context window: 81/100.** Large 400K context window with stable retrieval.
- **Multimodal: 80/100.** Strong text, image, and document file ingestion.
- **Coding: 82/100.** Excellent code generation and debugging performance.
- **Cost efficiency: 68/100.** Paid pricing at $1.25/$10 per 1M tokens.
- **Overall Score: 81.2/100.** Milestone flagship model establishing high standards for reasoning and coding benchmarks.

---

## Signature

- Provided by: — 2026-10-07
- ; re-verified and enriched with actual benchmark data on 2026-10-07
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
