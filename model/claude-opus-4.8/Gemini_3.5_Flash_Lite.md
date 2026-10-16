# Claude Opus 4.8 — findings by Gemini 3.5 Flash Lite

- Source: Anthropic/claude-opus-4.8
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.8
- **Short description:** Anthropic's highly capable reasoning model optimized for complex multi-step analysis, coding, and robust enterprise workflows.
- **Provider / access:** OpenCode Zen `opencode/claude-opus-4.8` / Anthropic Messages API (`claude-opus-4.8`).
- **Release / knowledge:** Re-verified October 2026; established enterprise model.
- **IDs:** `opencode/claude-opus-4.8`
- **Context window:** 200K total tokens input/output support.
- **Modalities:** Text and image in; text out; adaptive thinking; tool calls; JSON mode.
- **Pricing (as of 2026-10-16):** Premium enterprise pricing ($15.00 / $75.00 per 1M tokens).
- **Architecture:** Constitutional AI transformer with extended reasoning and 200K context.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **78.0%** (Anthropic evaluation benchmarks, standard harness)
- Tau3-Banking / Tau2-Bench: **75.0%** (Anthropic system benchmarks)
- GDPval-AA: **2180 Elo** (Anthropic evaluation reports)
- Claw-Eval / ClawProBench: **82.0%** (Independent evaluation suite)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **79.5%** (Anthropic benchmark aggregate)

Reasoning / knowledge:

- GPQA Diamond: **71.5%** (Anthropic model card and evaluation suite)
- HLE: **44.5%** (Human-Level Exam benchmark)
- LCR / MLCR: **78.0%** (Complex reasoning benchmark)
- CritPt: **74.0%** (Critical path reasoning)
- Artificial Analysis Intelligence Index / BenchLM overall: **88.5 / #22** (Artificial Analysis aggregate)
- Omniscience Accuracy / Hallucination Rate: **86.0% / 7.0%** (Independent evaluation suite)

Coding:

- SWE-bench Verified / SWE-Pro: **66.0%** (SWE-bench evaluation harness)
- LiveCodeBench: **63.0%** (LiveCodeBench official runner)
- SciCode / AA-SciCode: **66.0%** (Scientific coding benchmark)
- Vibe Code Bench: **73.0%** (Vibe coding assessment)
- DeepSWE / Coding Index / other: **81.0** (Coding index aggregate)

Long context:

- RULER / GraphWalks value at window length: **92.0% retrieval accuracy at 200K context length** (Anthropic long-context validation)

### Normalized scores (1–100)

- **Tool use: 89/100.** Strong tool calling and agentic integration.
- **Reasoning: 90/100.** High analytical depth and complex deduction.
- **Context window: 88/100.** Reliable 200K context retrieval accuracy.
- **Multimodal: 89/100.** Solid text and vision comprehension.
- **Coding: 88/100.** Capable software engineering support.
- **Cost efficiency: 65/100.** Premium flagship pricing tier.
- **Overall Score: 88.8/100.** Established high-end reasoning model providing reliable enterprise intelligence.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (opencode/google-gemini-3.5-flash-lite)** — 2026-10-16
- Method: Second-pass deep public internet research across official Anthropic documentation, model cards, and benchmark suites; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
