# Claude Sonnet 4 — findings by LongCat 2.5 Preview

- Source: Anthropic/Claude Sonnet 4 (`claude-sonnet-4-20250514`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4
- **Short description:** Anthropic's balanced Claude model with strong coding and reasoning capabilities, improved instruction following, and extended thinking with tool use. EOL date: October 14, 2026.
- **Provider / access:** Anthropic Claude API `claude-sonnet-4-20250514`; available on Amazon Bedrock. Chat Completions API.
- **Release / knowledge:** 2025-05-22; knowledge cutoff March 2025.
- **IDs:** `anthropic/claude-sonnet-4-20250514`
- **Context window:** 200K tokens; max output 64K tokens (verified via Anthropic).
- **Modalities:** Text, image in; text out; reasoning yes (extended thinking); tool calls yes.
- **Pricing (as of 2026-09-29):** $3.00/$15.00 per 1M in/out.
- **Architecture:** Proprietary/closed weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench Hard: **27.27%** (Vector Wire)
- GDPval: **16.01%** (Vector Wire)

Reasoning / knowledge:

- GPQA Diamond: **68.28%** (Vector Wire)
- OmniScience Non-Hallucination: **59.03%** (Vector Wire)
- Multichallenge: **57.11%** (Vector Wire)

Coding:

- SWE-bench Verified: **72.7%** (ModelBench)
- SWE-bench Pro: **42.7%** (ModelBench)
- AA Coding Index: **37.57%** (Vector Wire)

Long context:

- 200K token context window; no specific long-context retrieval benchmark found.

### Normalized scores (1–100)

- **Tool use: 40/100.** Terminal-Bench Hard at 27.27% and GDPval at 16.01% are weak. Capped by limited agentic benchmark coverage.
- **Reasoning: 60/100.** GPQA Diamond at 68.28% is moderate. Capped by limited reasoning benchmark diversity.
- **Context window: 70/100.** 200K token context window is decent but below the 1M+ frontier standard.
- **Multimodal: 70/100.** Text and image input with text output. Capped by no video/audio input.
- **Coding: 60/100.** SWE-bench Verified at 72.7% is solid; SWE-bench Pro at 42.7% is moderate. Capped by AA Coding Index at 37.57%.
- **Cost efficiency: 70/100.** $3.00/$15.00 per 1M is moderate for a frontier model.
- **Overall Score: 60/100.** Mean of (40+60+70+70+60)/5 = 60.0 → 60. Best-fit recommendation: solid all-around model with good coding and instruction following; held back by weak agentic tool use and smaller context window.

---

## Signature

- Provided by: **LongCat 2.5 Preview (longcat-2.5-preview)** — 2026-09-29
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
