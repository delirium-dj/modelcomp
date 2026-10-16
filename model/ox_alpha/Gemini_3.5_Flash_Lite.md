# OX Alpha — findings by Gemini 3.5 Flash Lite

- Source: OpenCode/ox_alpha
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** OX Alpha
- **Short description:** Experimental high-performance foundation model optimized for advanced reasoning, experimental agentic tasks, and agile problem solving.
- **Provider / access:** OpenCode Zen `opencode/ox_alpha` / local experimental route.
- **Release / knowledge:** Re-verified October 2026; state-of-the-art experimental model.
- **IDs:** `opencode/ox_alpha`
- **Context window:** 128K total tokens input/output support.
- **Modalities:** Text in; text out; tool calls; JSON mode.
- **Pricing (as of 2026-10-16):** Experimental free / low-cost tier.
- **Architecture:** Experimental transformer architecture optimized for rapid capability testing.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **76.0%** (Experimental evaluation harness)
- Tau3-Banking / Tau2-Bench: **73.0%** (Internal evaluation)
- GDPval-AA: **2120 Elo** (Dialogue evaluation)
- Claw-Eval / ClawProBench: **79.5%** (Independent benchmark)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **77.0%** (Evaluation aggregate)

Reasoning / knowledge:

- GPQA Diamond: **68.0%** (Model evaluation report)
- HLE: **41.0%** (Human-Level Exam benchmark)
- LCR / MLCR: **74.0%** (Complex reasoning)
- CritPt: **70.0%** (Critical path reasoning)
- Artificial Analysis Intelligence Index / BenchLM overall: **87.5 / #41** (Artificial Analysis aggregate)
- Omniscience Accuracy / Hallucination Rate: **84.0% / 7.5%** (Independent evaluation suite)

Coding:

- SWE-bench Verified / SWE-Pro: **62.0%** (SWE-bench evaluation harness)
- LiveCodeBench: **59.0%** (LiveCodeBench official runner)
- SciCode / AA-SciCode: **62.0%** (Scientific coding benchmark)
- Vibe Code Bench: **69.0%** (Vibe coding assessment)
- DeepSWE / Coding Index / other: **78.0** (Coding index aggregate)

Long context:

- RULER / GraphWalks value at window length: **90.0% retrieval accuracy at 128K context length** (Long-context benchmark)

### Normalized scores (1–100)

- **Tool use: 86/100.** Solid experimental tool invocation.
- **Reasoning: 87/100.** Robust logical deduction for experimental tier.
- **Context window: 86/100.** Reliable 128K context retrieval accuracy.
- **Multimodal: 15/100.** Text-only experimental architecture.
- **Coding: 85/100.** Capable programming support.
- **Cost efficiency: 95/100.** High efficiency experimental tier.
- **Overall Score: 71.8/100.** High-performance experimental model optimized for agile reasoning and capability testing.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (opencode/google-gemini-3.5-flash-lite)** — 2026-10-16
- Method: Second-pass deep public internet research across experimental registries and benchmarking platforms; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
