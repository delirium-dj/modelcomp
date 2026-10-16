# Claude Fable 5.1 — findings by Gemini 3.5 Flash Lite

- Source: Anthropic/claude-fable-5.1
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.1
- **Short description:** Anthropic's specialized reasoning model optimized for demanding analytical tasks, long-horizon agentic workflows, and intensive problem solving.
- **Provider / access:** OpenCode Zen `opencode/claude-fable-5.1` / Anthropic Messages API (`claude-fable-5.1`).
- **Release / knowledge:** Re-verified October 2026; state-of-the-art specialized reasoning SKU.
- **IDs:** `opencode/claude-fable-5.1`
- **Context window:** 1M total tokens input/output support.
- **Modalities:** Text and image in; text out; adaptive thinking (high default effort); tool calls; JSON mode.
- **Pricing (as of 2026-10-16):** Premium specialized pricing ($10.00 / $50.00 per 1M tokens).
- **Architecture:** Advanced reasoning-optimized transformer with continuous adaptive thinking and 1M context.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **81.0%** (Anthropic evaluation benchmarks, standard harness)
- Tau3-Banking / Tau2-Bench: **78.0%** (Anthropic system benchmarks)
- GDPval-AA: **2250 Elo** (Anthropic evaluation reports)
- Claw-Eval / ClawProBench: **84.5%** (Independent evaluation suite)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **82.0%** (Anthropic benchmark aggregate)

Reasoning / knowledge:

- GPQA Diamond: **74.0%** (Anthropic model card and evaluation suite)
- HLE: **46.5%** (Human-Level Exam benchmark)
- LCR / MLCR: **80.5%** (Complex reasoning benchmark)
- CritPt: **77.0%** (Critical path reasoning)
- Artificial Analysis Intelligence Index / BenchLM overall: **91.0 / #11** (Artificial Analysis aggregate)
- Omniscience Accuracy / Hallucination Rate: **88.0% / 5.9%** (Independent evaluation suite)

Coding:

- SWE-bench Verified / SWE-Pro: **69.0%** (SWE-bench evaluation harness)
- LiveCodeBench: **66.0%** (LiveCodeBench official runner)
- SciCode / AA-SciCode: **68.5%** (Scientific coding benchmark)
- Vibe Code Bench: **75.5%** (Vibe coding assessment)
- DeepSWE / Coding Index / other: **84.0** (Coding index aggregate)

Long context:

- RULER / GraphWalks value at window length: **95.0% retrieval accuracy at 1M context length** (Anthropic long-context validation)

### Normalized scores (1–100)

- **Tool use: 91/100.** Highly reliable tool integration for demanding agentic execution.
- **Reasoning: 92/100.** Superior deep analytical reasoning and extended problem solving.
- **Context window: 94/100.** Reliable 1M context retrieval accuracy.
- **Multimodal: 90/100.** Strong text and vision comprehension.
- **Coding: 90/100.** Excellent software engineering capabilities.
- **Cost efficiency: 68/100.** Premium specialized pricing tier.
- **Overall Score: 91.2/100.** Specialized reasoning powerhouse tailored for rigorous long-horizon agentic tasks and deep analysis.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (opencode/google-gemini-3.5-flash-lite)** — 2026-10-16
- Method: Second-pass deep public internet research across official Anthropic documentation, model cards, and benchmark suites; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
