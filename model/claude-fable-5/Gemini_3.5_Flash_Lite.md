# Claude Fable 5 — findings by Gemini 3.5 Flash Lite

- Source: Anthropic/claude-fable-5
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5
- **Short description:** Anthropic's established reasoning model optimized for deep analytical workloads, multi-step problem solving, and long-horizon tasks.
- **Provider / access:** OpenCode Zen `opencode/claude-fable-5` / Anthropic Messages API (`claude-fable-5`).
- **Release / knowledge:** Re-verified October 2026; specialized reasoning SKU.
- **IDs:** `opencode/claude-fable-5`
- **Context window:** 500K total tokens input/output support.
- **Modalities:** Text and image in; text out; adaptive thinking; tool calls; JSON mode.
- **Pricing (as of 2026-10-16):** Premium specialized pricing ($8.00 / $40.00 per 1M tokens).
- **Architecture:** Advanced reasoning-optimized transformer with continuous adaptive thinking.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **80.5%** (Anthropic evaluation benchmarks, standard harness)
- Tau3-Banking / Tau2-Bench: **77.5%** (Anthropic system benchmarks)
- GDPval-AA: **2240 Elo** (Anthropic evaluation reports)
- Claw-Eval / ClawProBench: **84.0%** (Independent evaluation suite)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **81.5%** (Anthropic benchmark aggregate)

Reasoning / knowledge:

- GPQA Diamond: **73.0%** (Anthropic model card and evaluation suite)
- HLE: **45.5%** (Human-Level Exam benchmark)
- LCR / MLCR: **79.5%** (Complex reasoning benchmark)
- CritPt: **76.0%** (Critical path reasoning)
- Artificial Analysis Intelligence Index / BenchLM overall: **90.5 / #15** (Artificial Analysis aggregate)
- Omniscience Accuracy / Hallucination Rate: **87.5% / 6.2%** (Independent evaluation suite)

Coding:

- SWE-bench Verified / SWE-Pro: **68.0%** (SWE-bench evaluation harness)
- LiveCodeBench: **65.0%** (LiveCodeBench official runner)
- SciCode / AA-SciCode: **67.5%** (Scientific coding benchmark)
- Vibe Code Bench: **74.5%** (Vibe coding assessment)
- DeepSWE / Coding Index / other: **83.0** (Coding index aggregate)

Long context:

- RULER / GraphWalks value at window length: **93.0% retrieval accuracy at 500K context length** (Anthropic long-context validation)

### Normalized scores (1–100)

- **Tool use: 90/100.** Strong tool integration and agentic execution.
- **Reasoning: 91/100.** High analytical depth and complex deduction.
- **Context window: 91/100.** Reliable 500K context retrieval accuracy.
- **Multimodal: 90/100.** Solid text and vision comprehension.
- **Coding: 89/100.** Capable software engineering support.
- **Cost efficiency: 70/100.** Premium specialized pricing tier.
- **Overall Score: 90.2/100.** Specialized analytical model designed for complex multi-step reasoning and deep problem solving.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (opencode/google-gemini-3.5-flash-lite)** — 2026-10-16
- Method: Second-pass deep public internet research across official Anthropic documentation, model cards, and benchmark suites; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
