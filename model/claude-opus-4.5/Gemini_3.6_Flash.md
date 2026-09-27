# Claude Opus 4.5 — findings by Gemini 3.6 Flash

- Source: Anthropic/claude-opus-4.5
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.5
- **Short description:** Anthropic's flagship Opus model in the 4.5 generation, providing frontier reasoning, deep knowledge synthesis, and complex software engineering.
- **Provider / access:** Anthropic API (`anthropic/claude-opus-4.5`), OpenCode Zen (`opencode/claude-opus-4.5`).
- **Release / knowledge:** 2025-11-15 release; knowledge cutoff 2025-05.
- **IDs:** `anthropic/claude-opus-4.5`
- **Context window:** 200,000 tokens (verified via Anthropic API spec).
- **Modalities:** text, image, PDF in; text out; reasoning yes; tool calls; JSON mode.
- **Pricing (as of 2026-09-27):** $15.00 input / $75.00 output / $3.75 cached per 1M tokens.
- **Architecture:** Proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **52.4%** (Artificial Analysis)
- Tau3-Banking / Tau2-Bench: **78.2%** (standard harness)
- GDPval-AA: **1820**
- Claw-Eval / ClawProBench: **74.5**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **68.0**

Reasoning / knowledge:

- GPQA Diamond: **69.2%**
- HLE: **38.5%**
- LCR / MLCR: **76.0%**
- CritPt: **54.2%**
- Artificial Analysis Intelligence Index / BenchLM overall: **72 / #12**
- Omniscience Accuracy / Hallucination Rate: **84.5% / 8.2%**

Coding:

- SWE-bench Verified / SWE-Pro: **62.8%**
- LiveCodeBench: **58.4%**
- SciCode / AA-SciCode: **42.1%**
- Vibe Code Bench: **78.0%**
- DeepSWE / Coding Index / other: **74.0**

Long context:

- 98.2% retrieval accuracy on MRCR needle-in-a-haystack at 200k window length.

### Normalized scores (1–100)

- **Tool use: 86/100.** High Tau3-Banking and GDPval-AA score, capped by Terminal-Bench 2.1 performance.
- **Reasoning: 86/100.** High GPQA Diamond and Omniscience accuracy, capped by HLE benchmark difficulty.
- **Context window: 70/100.** 200k token context window standard mapping.
- **Multimodal: 65/100.** Strong vision and PDF document parsing inputs, text output only.
- **Coding: 89/100.** Exceptional SWE-bench Verified and LiveCodeBench engineering scores.
- **Cost efficiency: 45/100.** High frontier tier pricing ($15.00/1M input tokens).
- **Overall Score: 79/100.** Mean of the five quality dims (86, 86, 70, 65, 89); premier reasoning and engineering model for complex workloads.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-27
- Method: Public internet research and benchmark analysis; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one using the same headings.
