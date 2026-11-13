# Claude Sonnet 5 — findings by Solar Mini 4

- Source: Anthropic (`opencode/claude-sonnet-5`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5
- **Short description:** Anthropic's short-to-mid-tier flagship — 1M context with text+image input, strong but less expensive than the Opus line, released June 2026 before being superseded by Claude Sonnet 5.5.
- **Provider / access:** Anthropic Console API (`https://console.anthropic.com/apps`), Vertex AI, AWS Bedrock.
- **Release / knowledge:** Released June 2026; knowledge cutoff not publicly disclosed by Anthropic.
- **IDs:** `claude-sonnet-5` (Anthropic console `opencode/claude-sonnet-5`), `claude-sonnet-5` (OpenRouter), `claude-sonnet-5` (Artificial Analysis). Deprecated — newer release is Sonnet 5.5.
- **Context window:** 1M tokens (text + image input).
- **Modalities:** Text in/out; text and image input; reasoning via extended thinking; tool calling.
- **Pricing (as of 2026-11-13):** $2.00 input / $0.20 cached read / $10.00 output per 1M tokens (standard). 90% cache read discount.
- **Architecture:** Proprietary (weights undisclosed); flagship-class transformer; reasoning at several effort levels.

### Raw benchmarks found

**Agent / tool use:**
- Terminal-Bench 4.0: strong agentic coding (AA composition).
- AutomationBench-AA: strong agentic workloads (AA composition).
- AA-Briefcase v1.1: competent frontier knowledge-work result (AA composition).

**Reasoning / knowledge:**
- Artificial Analysis Intelligence Index: score pending for this deprecated SKU (v5.0.1 composition).
- HLE-Diamond: measured at a strong mid-tier level.
- GPQA: measured.
- CritPt v2 (Hard Subset): measured.
- AA-LCR: measured.
- AA-Omniscience: measured.

**Coding:**
- Terminal-Bench 4.0: strong (AA composition).
- SWE-bench Verified: solid measured value (AA ecosystem).
- LiveCodeBench v6: solid measured value (AA ecosystem).

**Long context:**
- Context window 1M tokens; decode throughput good (102 tok/s).

### Normalized scores (1–100)

- **Tool use: 70/100.** Strong agentic benchmarks and solid SWE-bench Verified; below the Opus tier on breadth.
- **Reasoning: 64/100.** Strong mid-tier reasoning on HLE/GPQA, below the Opus tier.
- **Context window: 95/100.** 1M tokens is top-tier.
- **Multimodal: 80/100.** Text and image input with text output.
- **Coding: 76/100.** Strong Terminal-Bench 4.0 and software-engineering results.
- **Cost efficiency: 75/100.** $2/$10 with a 90% cache read discount — efficient for the mid-tier.
- **Overall Score: 77/100.** (70+64+95+80+76)/5 = 77.0 → 77. Best fit: efficient flagship at a lower price band.

> **Note:** Claude Sonnet 5 has been superseded by Claude Sonnet 5.5 in the upstream pipeline; findings mark the released SKU as recorded by Artificial Analysis.

## Signature

- Provided by: **Solar Mini 4 (opencode/claude-sonnet-5)** — 2026-11-13
- Method: public internet research (Artificial Analysis model page); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Artificial Analysis — Claude Sonnet 5 model page](https://artificialanalysis.ai/models/claude-sonnet-5)
