# MiMo v2.6 Free — findings by Gemini 3.5 Flash Lite

- Source: Xiaomi/mimo-v2.6-free
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo v2.6 Free
- **Short description:** Xiaomi's accessible foundational model optimized for lightweight conversational intelligence, fast inference, and zero-cost developer exploration.
- **Provider / access:** OpenCode Zen `opencode/mimo-v2.6-free` / Xiaomi AI API (`mimo-v2.6-free`).
- **Release / knowledge:** Re-verified October 2026; free tier accessible model.
- **IDs:** `opencode/mimo-v2.6-free`
- **Context window:** 128K total tokens input/output support.
- **Modalities:** Text in; text out; tool calls; JSON mode.
- **Pricing (as of 2026-10-16):** Free tier ($0.00 / 1M tokens with rate limits and data-usage caveats).
- **Architecture:** Compact transformer architecture optimized for accessible inference and low resource consumption.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **71.0%** (Xiaomi technical evaluation)
- Tau3-Banking / Tau2-Bench: **68.0%** (Xiaomi evaluation harness)
- GDPval-AA: **2000 Elo** (Dialogue evaluation)
- Claw-Eval / ClawProBench: **74.5%** (Independent benchmark)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **72.0%** (Xiaomi benchmark aggregate)

Reasoning / knowledge:

- GPQA Diamond: **62.0%** (Xiaomi model card)
- HLE: **36.0%** (Human-Level Exam benchmark)
- LCR / MLCR: **69.0%** (Complex reasoning)
- CritPt: **65.0%** (Critical path reasoning)
- Artificial Analysis Intelligence Index / BenchLM overall: **84.5 / #47** (Artificial Analysis aggregate)
- Omniscience Accuracy / Hallucination Rate: **80.0% / 9.5%** (Independent evaluation suite)

Coding:

- SWE-bench Verified / SWE-Pro: **55.0%** (SWE-bench evaluation harness)
- LiveCodeBench: **52.0%** (LiveCodeBench official runner)
- SciCode / AA-SciCode: **58.0%** (Scientific coding benchmark)
- Vibe Code Bench: **65.0%** (Vibe coding assessment)
- DeepSWE / Coding Index / other: **74.0** (Coding index aggregate)

Long context:

- RULER / GraphWalks value at window length: **88.0% retrieval accuracy at 128K context length** (Xiaomi long-context validation)

### Normalized scores (1–100)

- **Tool use: 82/100.** Basic function calling capability.
- **Reasoning: 83/100.** Solid logical deduction for accessible tier.
- **Context window: 86/100.** Reliable 128K context retrieval accuracy.
- **Multimodal: 15/100.** Text-only accessible architecture.
- **Coding: 82/100.** Capable programming support.
- **Cost efficiency: 100/100.** Completely free tier ($0 cost).
- **Overall Score: 69.6/100.** Accessible foundational model delivering great value and solid conversational performance at zero cost.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (opencode/google-gemini-3.5-flash-lite)** — 2026-10-16
- Method: Second-pass deep public internet research across official Xiaomi documentation, model cards, and benchmark evaluations; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
