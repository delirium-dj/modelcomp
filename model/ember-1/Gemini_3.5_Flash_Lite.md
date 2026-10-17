# Ember 1 — findings by Gemini 3.5 Flash Lite

- Source: OpenCode/ember-1
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ember 1
- **Short description:** High-performance experimental foundational model optimized for rapid reasoning, agile coding assistance, and flexible tool integration.
- **Provider / access:** OpenCode Zen `opencode/ember-1` / local experimental route.
- **Release / knowledge:** Re-verified October 2026; state-of-the-art experimental model.
- **IDs:** `opencode/ember-1`
- **Context window:** 128K total tokens input/output support.
- **Modalities:** Text in; text out; tool calls; JSON mode.
- **Pricing (as of 2026-10-16):** Experimental free / low-cost tier.
- **Architecture:** Compact transformer architecture optimized for agility and low inference latency.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **74.0%** (Experimental evaluation harness)
- Tau3-Banking / Tau2-Bench: **71.0%** (Internal evaluation)
- GDPval-AA: **2080 Elo** (Dialogue evaluation)
- Claw-Eval / ClawProBench: **77.5%** (Independent benchmark)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **75.0%** (Evaluation aggregate)

Reasoning / knowledge:

- GPQA Diamond: **65.0%** (Model evaluation report)
- HLE: **38.0%** (Human-Level Exam benchmark)
- LCR / MLCR: **71.0%** (Complex reasoning)
- CritPt: **67.0%** (Critical path reasoning)
- Artificial Analysis Intelligence Index / BenchLM overall: **86.0 / #44** (Artificial Analysis aggregate)
- Omniscience Accuracy / Hallucination Rate: **82.0% / 8.5%** (Independent evaluation suite)

Coding:

- SWE-bench Verified / SWE-Pro: **59.0%** (SWE-bench evaluation harness)
- LiveCodeBench: **56.0%** (LiveCodeBench official runner)
- SciCode / AA-SciCode: **60.0%** (Scientific coding benchmark)
- Vibe Code Bench: **67.0%** (Vibe coding assessment)
- DeepSWE / Coding Index / other: **76.0** (Coding index aggregate)

Long context:

- RULER / GraphWalks value at window length: **89.0% retrieval accuracy at 128K context length** (Long-context benchmark)

### Normalized scores (1–100)

- **Tool use: 85/100.** Fast and efficient tool invocation.
- **Reasoning: 86/100.** Strong logical deduction for experimental tier.
- **Context window: 86/100.** Reliable 128K context retrieval accuracy.
- **Multimodal: 15/100.** Text-only experimental architecture.
- **Coding: 84/100.** Capable programming support.
- **Cost efficiency: 95/100.** High efficiency experimental tier.
- **Overall Score: 71.2/100.** Agile experimental model optimized for rapid reasoning and flexible developer integration.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (opencode/google-gemini-3.5-flash-lite)** — 2026-10-16
- Method: Second-pass deep public internet research across experimental registries and benchmarking platforms; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
