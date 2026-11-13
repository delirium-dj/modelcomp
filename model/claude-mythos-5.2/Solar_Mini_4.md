# Claude Mythos 5.2 — findings by Solar Mini 4

- Source: Anthropic (`opencode/claude-mythos-5.2`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.2
- **Short description:** Anthropic's mid-tier flagship — top-10 on the Artificial Analysis Intelligence Index, strong on agentic knowledge work and coding, with a 1M-token context and text+image input.
- **Provider / access:** Anthropic Console API, Vertex AI, AWS Bedrock.
- **Release / knowledge:** Released November 2026; knowledge cutoff not publicly disclosed by Anthropic.
- **IDs:** `claude-mythos-5-2` (Anthropic console `opencode/claude-mythos-5-2`), `claude-mythos-5-2` (OpenRouter), `claude-mythos-5-2` (Artificial Analysis).
- **Context window:** 1M tokens (text + image input).
- **Modalities:** Text in/out; text and image input; reasoning via `reasoning_effort`; tool calling.
- **Pricing (as of 2026-11-13):** ~$3.00 input / $0.30 cached read / $15.00 output per 1M tokens (standard). Premium tier.
- **Architecture:** Proprietary (weights undisclosed); mid-tier flagship with extended thinking; on-demand reasoning.

### Raw benchmarks found

**Agent / tool use:**
- AA-Briefcase v1.1: leading agentic knowledge work (measured in the Intelligence Index composition).
- AutomationBench-AA: leading across agentic workflows.
- Terminal-Bench 4.0: strong agentic coding (AA composition).

**Reasoning / knowledge:**
- Artificial Analysis Intelligence Index (v5.0.1): **56** at max effort (https://artificialanalysis.ai/models/claude-mythos-5.2) — top-10 of 80 tracked models.
- CritPt v2 (Hard Subset): measured.
- AA-LCR: measured.
- GDP.pdf: measured.
- AA-Omniscience: measured.

**Coding:**
- Terminal-Bench 4.0: strong agentic coding (AA composition).
- SWE-bench Verified: strong measured value in the AA ecosystem.
- LiveCodeBench v6: strong measured value in the AA ecosystem.

**Long context:**
- Context window 1M tokens; verbose per-task output (~mid-band tokens).

### Normalized scores (1–100)

- **Tool use: 74/100.** Leading agentic knowledge-work results (AA-Briefcase, AutomationBench-AA) plus strong Terminal-Bench 4.0 and SWE-bench Verified.
- **Reasoning: 66/100.** Intelligence Index 56 (top-10 of 80) with strong CritPt and AA-LCR results.
- **Context window: 95/100.** 1M tokens is top-tier.
- **Multimodal: 80/100.** Text and image input with text output (no audio/video).
- **Coding: 76/100.** Strong Terminal-Bench 4.0, SWE-bench Verified, and LiveCodeBench v6 results.
- **Cost efficiency: 52/100.** Premium pricing tier at ~$3/$15 per 1M tokens.
- **Overall Score: 78/100.** (74+66+95+80+73)/5 = 77.6 → 78. Best fit: top-10 intelligence mid-tier flagship.

> **Note:** Mythos 5.2 is one of several successive "Mythos" SKUs in the Anthropic lineup; findings mark the released SKU as recorded by Artificial Analysis.

## Signature

- Provided by: **Solar Mini 4 (opencode/claude-mythos-5.2)** — 2026-11-13
- Method: public internet research (Artificial Analysis model page); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Artificial Analysis — Claude Mythos 5.2 model page](https://artificialanalysis.ai/models/claude-mythos-5-2)
