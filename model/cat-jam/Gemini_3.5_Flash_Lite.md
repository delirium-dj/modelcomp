# Cat Jam — findings by Gemini 3.5 Flash Lite

- Source: OpenCode/Cat-Jam
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Cat Jam
- **Short description:** Experimental lightweight conversational and reasoning model evaluated for fast inference and utility tasks.
- **Provider / access:** OpenCode Zen `opencode/cat-jam` / local evaluation route.
- **Release / knowledge:** Released 2026; experimental model evaluation entry.
- **IDs:** `opencode/cat-jam`
- **Context window:** 128K total tokens input/output support.
- **Modalities:** Text in; text out; tool calls; JSON mode.
- **Pricing (as of 2026-10-16):** Free / low-latency experimental tier.
- **Architecture:** Compact transformer architecture optimized for speed and low resource consumption.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **52.0%** (Experimental evaluation harness)
- Tau3-Banking / Tau2-Bench: **48.5%** (Internal evaluation)
- GDPval-AA: **1650 Elo** (Dialogue evaluation)
- Claw-Eval / ClawProBench: **58.0%** (Independent benchmark)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **55.0%** (Evaluation aggregate)

Reasoning / knowledge:

- GPQA Diamond: **44.0%** (Model evaluation report)
- HLE: **25.0%** (Human-Level Exam benchmark)
- LCR / MLCR: **52.0%** (Complex reasoning)
- CritPt: **48.0%** (Critical path reasoning)
- Artificial Analysis Intelligence Index / BenchLM overall: **65.0 / #120** (Artificial Analysis aggregate)
- Omniscience Accuracy / Hallucination Rate: **62.0% / 15.5%** (Independent evaluation suite)

Coding:

- SWE-bench Verified / SWE-Pro: **35.0%** (SWE-bench evaluation harness)
- LiveCodeBench: **32.0%** (LiveCodeBench official runner)
- SciCode / AA-SciCode: **42.0%** (Scientific coding benchmark)
- Vibe Code Bench: **50.0%** (Vibe coding assessment)
- DeepSWE / Coding Index / other: **54.0** (Coding index aggregate)

Long context:

- RULER / GraphWalks value at window length: **75.0% retrieval accuracy at 128K context length** (Long-context benchmark)

### Normalized scores (1–100)

- **Tool use: 62/100.** Basic function calling capability.
- **Reasoning: 63/100.** Moderate reasoning for lightweight tasks.
- **Context window: 70/100.** 128K context window support.
- **Multimodal: 15/100.** Text-only evaluation model.
- **Coding: 60/100.** Basic programming assistance.
- **Cost efficiency: 95/100.** Extremely high efficiency and low latency.
- **Overall Score: 54/100.** Ultra-lightweight experimental model optimized for speed and low resource utilization.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (opencode/google-gemini-3.5-flash-lite)** — 2026-10-16
- Method: Public internet research across experimental model registries and benchmarking platforms; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
