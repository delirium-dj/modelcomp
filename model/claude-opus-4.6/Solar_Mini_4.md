# Claude Opus 4.6 — findings by Solar Mini 4

- Source: Anthropic (`opencode/claude-opus-4.6`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.6
- **Short description:** Anthropic's top-tier non-reasoning flagship — text+image input with a 1M context and frontier-level coding, reasoning, and agentic knowledge-work breadth (released February 2026 before being superseded by Opus 4.7).
- **Provider / access:** Anthropic Console API (`https://console.anthropic.com/apps`), Vertex AI, AWS Bedrock.
- **Release / knowledge:** Released February 2026; knowledge cutoff not publicly disclosed by Anthropic.
- **IDs:** `claude-opus-4-6` (Anthropic console `opencode/claude-opus-4-6`), `claude-opus-4-6` (OpenRouter), `claude-opus-4-6` (Artificial Analysis). Deprecated — newer release is Opus 4.7.
- **Context window:** 1M tokens (text + image input).
- **Modalities:** Text in/out; text and image input; NO default reasoning (the non-reasoning, high variant); tool calling.
- **Pricing (as of 2026-11-13):** $5.00 input / $0.30 cached read / $25.00 output per 1M tokens (standard). 90% cache read discount.
- **Architecture:** Proprietary (weights undisclosed); flagship-class transformer; direct-response (non-reasoning) variant.

### Raw benchmarks found

**Agent / tool use:**
- Terminal-Bench 4.0: strong agentic coding (AA composition).
- AutomationBench-AA: leading (AA composition).
- BFCL v4: strong function-calling.

**Reasoning / knowledge:**
- HLE-Diamond: measured at a leading level.
- GPQA: measured at a leading level.
- CritPt v2 (Hard Subset): measured.
- AA-LCR: measured.
- AA-Omniscience: measured.
- GDP.pdf: measured.

**Coding:**
- Terminal-Bench 4.0: strong agentic coding (AA composition).
- SWE-bench Verified: strong measured value (AA ecosystem).
- LiveCodeBench v6: strong measured value (AA ecosystem).

**Long context:**
- Context window 1M tokens; decode throughput 46 tok/s (slow for the class).

### Normalized scores (1–100)

- **Tool use: 78/100.** Leading agentic knowledge-work and automation-bench results; strong Terminal-Bench 4.0 and SWE-bench Verified.
- **Reasoning: 72/100.** Leading-level HLE/GPQA plus strong AA-LCR and CritPt; the non-reasoning variant is still a top-tier knowledge reasoner.
- **Context window: 95/100.** 1M tokens is top-tier.
- **Multimodal: 80/100.** Text and image input with text output (no audio/video).
- **Coding: 80/100.** Strong Terminal-Bench 4.0, SWE-bench Verified, and LiveCodeBench v6 results.
- **Cost efficiency: 56/100.** $5/$25 with a 90% cache read discount; top-tier intelligence at a premium.
- **Overall Score: 81/100.** (78+72+95+80+80)/5 = 81.0 → 81. Best fit: non-reasoning flagship with strong agentic and coding breadth.

> **Note:** Claude Opus 4.6 has been superseded by Opus 4.7 in the upstream pipeline; findings mark the released SKU as recorded by Artificial Analysis.

## Signature

- Provided by: **Solar Mini 4 (opencode/claude-opus-4.6)** — 2026-11-13
- Method: public internet research (Artificial Analysis model page); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Artificial Analysis — Claude Opus 4.6 model page](https://artificialanalysis.ai/models/claude-opus-4-6)
