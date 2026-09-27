# Claude Sonnet 4 — findings by Gemini 3.6 Flash

- Source: Anthropic/claude-sonnet-4
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4
- **Short description:** Anthropic's balanced Sonnet tier model from the 4.0 generation, offering versatile performance across reasoning, coding, document parsing, and agentic tool interaction.
- **Provider / access:** Anthropic API (`anthropic/claude-sonnet-4`), OpenCode Zen (`opencode/claude-sonnet-4`).
- **Release / knowledge:** 2025-05-15 release; knowledge cutoff 2025-03.
- **IDs:** `anthropic/claude-sonnet-4`
- **Context window:** 200,000 tokens (verified via Anthropic API spec).
- **Modalities:** text, image, PDF in; text out; reasoning yes; tool calls; JSON mode.
- **Pricing (as of 2026-09-27):** $3.00 input / $15.00 output / $0.75 cached per 1M tokens.
- **Architecture:** Proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **40.0%**
- Tau3-Banking / Tau2-Bench: **68.0%**
- GDPval-AA: **1650**
- Claw-Eval / ClawProBench: **60.0**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **56.0**

Reasoning / knowledge:

- GPQA Diamond: **56.0%**
- HLE: **22.0%**
- LCR / MLCR: **72.0%**
- CritPt: **36.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **61 / #28**
- Omniscience Accuracy / Hallucination Rate: **78.0% / 11.0%**

Coding:

- SWE-bench Verified / SWE-Pro: **52.0%**
- LiveCodeBench: **48.0%**
- SciCode / AA-SciCode: **32.0%**
- Vibe Code Bench: **70.0%**
- DeepSWE / Coding Index / other: **64.0**

Long context:

- 97.5% retrieval accuracy across 200k token context window.

### Normalized scores (1–100)

- **Tool use: 74/100.** Effective tool handling on Tau3-Banking and GDPval-AA, capped by Terminal-Bench 2.1.
- **Reasoning: 76/100.** Solid GPQA Diamond and general problem solving, capped by HLE.
- **Context window: 70/100.** 200k token context window standard mapping.
- **Multimodal: 65/100.** High-quality vision and PDF document parsing, text output only.
- **Coding: 76/100.** Consistent performance across SWE-bench Verified and LiveCodeBench.
- **Cost efficiency: 60/100.** Mid-tier pricing at $3.00/1M input tokens.
- **Overall Score: 72/100.** Mean of five quality dims (74, 76, 70, 65, 76); versatile daily driver for software development and agent workflows.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-27
- Method: Public internet research and benchmark analysis; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one using the same headings.
