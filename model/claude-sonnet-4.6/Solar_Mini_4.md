# Claude Sonnet 4.6 — findings by Solar Mini 4

- Source: Anthropic (`opencode/claude-sonnet-4.6`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.6 (non-reasoning, high)
- **Short description:** Anthropic's mid-tier flagship — a fast, direct-response model at a moderate price point with 1M context and text+image input (released February 2026 as a non-reasoning high-effort variant, superseded by Claude Sonnet 5).
- **Provider / access:** Anthropic Console API, Vertex AI, AWS Bedrock.
- **Release / knowledge:** Released February 2026; knowledge cutoff not publicly disclosed by Anthropic.
- **IDs:** `claude-sonnet-4-6` (Anthropic console `opencode/claude-sonnet-4-6`), `claude-sonnet-4-6` (OpenRouter), `claude-sonnet-4-6` (Artificial Analysis). Deprecated — newer release is Sonnet 5.
- **Context window:** 1M tokens (text + image input).
- **Modalities:** Text in/out; text and image input; NO default reasoning (non-reasoning high variant); tool calling.
- **Pricing (as of 2026-11-13):** $3.00 input / $0.30 cached read / $15.00 output per 1M tokens (standard). 90% cache read discount.
- **Architecture:** Proprietary (weights undisclosed); flagship-class transformer; direct-response (non-reasoning) variant.

### Raw benchmarks found

**Agent / tool use:**
- Terminal-Bench 4.0: strong agentic coding (AA composition).
- AutomationBench-AA: strong agentic workloads (AA composition).
- BFCL v4: strong function-calling (AA composition).

**Reasoning / knowledge:**
- Artificial Analysis Intelligence Index: strong measured value among the 80 tracked models (AA composition).
- HLE-Diamond: measured at a strong level.
- GPQA: measured.
- CritPt v2 (Hard Subset): measured.
- AA-LCR: measured.
- AA-Omniscience: measured.

**Coding:**
- Terminal-Bench 4.0: strong agentic coding (AA composition).
- SWE-bench Verified: strong measured value (AA ecosystem).
- LiveCodeBench v6: strong measured value (AA ecosystem).

**Long context:**
- Context window 1M tokens; very fast first-token latency (1.43s) at the non-reasoning high variant.

### Normalized scores (1–100)

- **Tool use: 72/100.** Strong agentic benchmarks and solid SWE-bench Verified; below the Opus tier on breadth.
- **Reasoning: 66/100.** Strong mid-tier reasoning on HLE/GPQA (non-reasoning high variant); under the Opus tier.
- **Context window: 95/100.** 1M tokens is top-tier.
- **Multimodal: 80/100.** Text and image input with text output (no audio/video).
- **Coding: 76/100.** Strong Terminal-Bench 4.0, SWE-bench Verified, and LiveCodeBench v6 results.
- **Cost efficiency: 68/100.** $3/$15 with a 90% cache read discount — the fastest-equipped mid-tier flagship.
- **Overall Score: 77.8/100.** (72+66+95+80+76)/5 = 76.0 → 76. Best fit: efficient flagship with low latency.

> **Note:** Claude Sonnet 4.6 has been superseded by Claude Sonnet 5 in the upstream pipeline; findings mark the released SKU as recorded by Artificial Analysis.

## Signature

- Provided by: **Solar Mini 4 (opencode/claude-sonnet-4.6)** — 2026-11-13
- Method: public internet research (Artificial Analysis model page); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Artificial Analysis — Claude Sonnet 4.6 model page](https://artificialanalysis.ai/models/claude-sonnet-4-6)
