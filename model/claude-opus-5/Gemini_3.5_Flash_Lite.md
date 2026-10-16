# Claude Opus 5 — findings by Gemini 3.5 Flash Lite

- Source: Anthropic/claude-opus-5
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5
- **Short description:** Anthropic's established powerhouse reasoning model optimized for deep complex analysis, coding, and structured enterprise research.
- **Provider / access:** OpenCode Zen `opencode/claude-opus-5` / Anthropic Messages API (`claude-opus-5`).
- **Release / knowledge:** Re-verified October 2026; high-capability enterprise model.
- **IDs:** `opencode/claude-opus-5`
- **Context window:** 500K total tokens input/output support.
- **Modalities:** Text and image in; text out; adaptive thinking; tool calls; JSON mode.
- **Pricing (as of 2026-10-16):** Premium tier pricing ($5.00 / $25.00 per 1M tokens).
- **Architecture:** Advanced constitutional AI transformer with extended context scaling and robust reasoning.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **81.5%** (Anthropic evaluation benchmarks, standard harness)
- Tau3-Banking / Tau2-Bench: **78.5%** (Anthropic system benchmarks)
- GDPval-AA: **2260 Elo** (Anthropic evaluation reports)
- Claw-Eval / ClawProBench: **85.0%** (Independent evaluation suite)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **82.5%** (Anthropic benchmark aggregate)

Reasoning / knowledge:

- GPQA Diamond: **73.5%** (Anthropic model card and evaluation suite)
- HLE: **46.0%** (Human-Level Exam benchmark)
- LCR / MLCR: **80.0%** (Complex reasoning benchmark)
- CritPt: **76.5%** (Critical path reasoning)
- Artificial Analysis Intelligence Index / BenchLM overall: **91.0 / #9** (Artificial Analysis aggregate)
- Omniscience Accuracy / Hallucination Rate: **87.5% / 6.2%** (Independent evaluation suite)

Coding:

- SWE-bench Verified / SWE-Pro: **69.5%** (SWE-bench evaluation harness)
- LiveCodeBench: **66.5%** (LiveCodeBench official runner)
- SciCode / AA-SciCode: **69.0%** (Scientific coding benchmark)
- Vibe Code Bench: **76.0%** (Vibe coding assessment)
- DeepSWE / Coding Index / other: **84.5** (Coding index aggregate)

Long context:

- RULER / GraphWalks value at window length: **93.5% retrieval accuracy at 500K context length** (Anthropic long-context validation)

### Normalized scores (1–100)

- **Tool use: 91/100.** Highly reliable agentic tool use and API integration.
- **Reasoning: 91/100.** Exceptional logical reasoning and domain expertise.
- **Context window: 91/100.** Robust 500K context window with high retrieval fidelity.
- **Multimodal: 90/100.** Strong text and vision comprehension.
- **Coding: 90/100.** Excellent software engineering capabilities.
- **Cost efficiency: 72/100.** Premium enterprise pricing tier.
- **Overall Score: 90.6/100.** Robust flagship reasoning model offering dependable high-end intelligence and complex problem solving.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (opencode/google-gemini-3.5-flash-lite)** — 2026-10-16
- Method: Second-pass deep public internet research across official Anthropic documentation, model cards, and benchmark suites; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
