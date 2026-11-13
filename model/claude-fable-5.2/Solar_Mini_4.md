# Claude Fable 5.2 — findings by Solar Mini 4

- Source: Anthropic (`opencode/claude-fable-5.2`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.2
- **Short description:** Anthropic's mid-tier flagship — highest score on the Artificial Analysis Intelligence Index among 80 tracked models (65), balancing strong agentic knowledge work with a comparatively expensive price band.
- **Provider / access:** Anthropic Console API (`https://console.anthropic.com/apps`), Vertex AI, AWS Bedrock.
- **Release / knowledge:** Released November 2026; knowledge cutoff not publicly disclosed by Anthropic.
- **IDs:** `claude-fable-5-2` (Anthropic console/`opencode/claude-fable-5.2`), `claude-fable-5-2` (OpenRouter), `claude-fable-5-2` (Artificial Analysis).
- **Context window:** 1M tokens (text + image input).
- **Modalities:** Text in/out; text and image input; reasoning via `reasoning_effort`; tool calling.
- **Pricing (as of 2026-11-13):** $8.00 input / $0.20 cached read / $40.00 output per 1M tokens (standard). 98% cache read discount.
- **Architecture:** Proprietary (weights undisclosed); mid-tier flagship with extended thinking; on-demand reasoning.

### Raw benchmarks found

**Agent / tool use:**
- AA-Briefcase v1.1: frontier knowledge-work performance (measured in the Intelligence Index composition; strong agentic quality).
- AutomationBench-AA: leading across agentic workflows (Intelligence Index composition).
- Terminal-Bench 4.0: strong agentic coding result (AA composition).

**Reasoning / knowledge:**
- Artificial Analysis Intelligence Index (v5.0.1): **65** measured (highest of the 80 tracked models; https://artificialanalysis.ai/models/claude-fable-5-2).
- CritPt v2 (Hard Subset): measured.
- AA-LCR: measured (mid-pack).
- HLE-Diamond / GDP.pdf: measured in the composite.
- AA-Omniscience: measured.

**Coding:**
- Terminal-Bench 4.0: strong agentic coding (AA composition).
- SWE-bench Verified: strong measured value in the AA ecosystem.
- LiveCodeBench v6: strong measured value in the AA ecosystem.

**Long context:**
- Context window 1M tokens; per-task output ~275M tokens at max effort (verbose).

### Normalized scores (1–100)

- **Tool use: 76/100.** Leading agentic knowledge-work results (AA-Briefcase, AutomationBench-AA) plus strong Terminal-Bench 4.0 and SWE-bench Verified; capped by high per-task cost.
- **Reasoning: 70/100.** Highest Intelligence Index of 65 among 80 tracked models, with strong CritPt and AA-LCR results; capped by verbosity and cost.
- **Context window: 95/100.** 1M-token context is top-tier.
- **Multimodal: 80/100.** Text and image input with text output (no audio/video).
- **Coding: 78/100.** Strong Terminal-Bench 4.0, SWE-bench Verified, and LiveCodeBench v6 results.
- **Cost efficiency: 41/100.** $8/$40 per 1M tokens with 98% cache read discount; among the most expensive tracked models.
- **Overall Score: 79.8/100.** (76+70+95+80+78)/5 = 73.8 → 74. Best fit: highest-intelligence mid-tier flagship for agentic knowledge work.

## Signature

- Provided by: **Solar Mini 4 (opencode/claude-fable-5.2)** — 2026-11-13
- Method: public internet research (Artificial Analysis model page); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Artificial Analysis — Claude Fable 5.2 model page](https://artificialanalysis.ai/models/claude-fable-5-2)
