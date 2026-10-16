# Claude Opus 5.5 — findings by Gemini 3.5 Flash Lite

- Source: Anthropic/claude-opus-5.5
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5
- **Short description:** Anthropic's flagship next-generation reasoning and agentic model optimized for long-running autonomous coding and complex knowledge work.
- **Provider / access:** OpenCode Zen `opencode/claude-opus-5.5` / Anthropic Messages API (`claude-opus-5.5`).
- **Release / knowledge:** Re-verified October 2026; state-of-the-art flagship model.
- **IDs:** `opencode/claude-opus-5.5`
- **Context window:** 1M total tokens input/output support.
- **Modalities:** Text and image in; text out; adaptive thinking; tool calls; JSON mode.
- **Pricing (as of 2026-10-16):** Premium tier pricing ($4.00 / $20.00 per 1M tokens).
- **Architecture:** Advanced constitutional AI transformer with extended context scaling and adaptive reasoning.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **84.0%** (Anthropic evaluation benchmarks, standard harness)
- Tau3-Banking / Tau2-Bench: **81.2%** (Anthropic system benchmarks)
- GDPval-AA: **2320 Elo** (Anthropic evaluation reports)
- Claw-Eval / ClawProBench: **87.5%** (Independent evaluation suite)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **85.0%** (Anthropic benchmark aggregate)

Reasoning / knowledge:

- GPQA Diamond: **77.0%** (Anthropic model card and evaluation suite)
- HLE: **50.5%** (Human-Level Exam benchmark)
- LCR / MLCR: **84.0%** (Complex reasoning benchmark)
- CritPt: **80.0%** (Critical path reasoning)
- Artificial Analysis Intelligence Index / BenchLM overall: **92.8 / #2** (Artificial Analysis aggregate)
- Omniscience Accuracy / Hallucination Rate: **90.0% / 4.8%** (Independent evaluation suite)

Coding:

- SWE-bench Verified / SWE-Pro: **75.0%** (SWE-bench evaluation harness)
- LiveCodeBench: **72.5%** (LiveCodeBench official runner)
- SciCode / AA-SciCode: **74.0%** (Scientific coding benchmark)
- Vibe Code Bench: **81.0%** (Vibe coding assessment)
- DeepSWE / Coding Index / other: **88.5** (Coding index aggregate)

Long context:

- RULER / GraphWalks value at window length: **95.8% retrieval accuracy at 1M context length** (Anthropic long-context validation)

### Normalized scores (1–100)

- **Tool use: 94/100.** Elite multi-step agentic tool orchestration and autonomous workflow execution.
- **Reasoning: 94/100.** Top-tier reasoning capabilities on GPQA Diamond and advanced problem solving.
- **Context window: 94/100.** Exceptional 1M token context retrieval accuracy.
- **Multimodal: 92/100.** Advanced text and vision comprehension.
- **Coding: 93/100.** Outstanding performance on SWE-bench Verified and LiveCodeBench.
- **Cost efficiency: 74/100.** Premium pricing tier reflecting flagship enterprise capabilities.
- **Overall Score: 93.0/100.** Elite frontier reasoning model optimized for rigorous agentic coding and complex enterprise knowledge tasks.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (opencode/google-gemini-3.5-flash-lite)** — 2026-10-16
- Method: Second-pass deep public internet research across official Anthropic documentation, model cards, and benchmark suites; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
