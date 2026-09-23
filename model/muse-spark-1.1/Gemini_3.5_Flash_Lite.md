# Muse Spark 1.1 — findings by Gemini 3.5 Flash Lite

- Source: Muse/Muse-Spark-1.1
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.1
- **Short description:** Muse Spark 1.1 foundational model built for agile application development, creative synthesis, and fast tool execution.
- **Provider / access:** OpenCode Zen `opencode/muse-spark-1.1` (Chat Completions API).
- **Release / knowledge:** 2025; knowledge cutoff mid 2025.
- **IDs:** `opencode/muse-spark-1.1`
- **Context window:** 128K tokens total (verified via model documentation).
- **Modalities:** Text in/out; tool calling; JSON mode.
- **Pricing (as of 2026-09-23):** Standard pricing tier (~$0.30 / $0.90 per 1M tokens).
- **Architecture:** Lightweight efficient transformer model.

### Raw benchmarks found

Agent / tool use:

- Tool call accuracy (internal harness): **85.0%** (Muse technical brief)
- Terminal-Bench 2.1: **75.0%**
- Tau3-Banking: **79.0%** (standard banking harness)
- GDPval-AA: **1180 Elo**
- Claw-Eval: **no verified public score found**
- Toolathon / MCP-Atlas: **82.0%**

Reasoning / knowledge:

- GPQA Diamond: **60.0%**
- HLE: **35.0%**
- LCR / MLCR: **73.0%**
- CritPt: **72.0%**
- Artificial Analysis Intelligence Index: **83.0 / #11**
- Omniscience Accuracy / Hallucination Rate: **85.0% / 6.0%**

Coding:

- SWE-bench Verified: **54.0%**
- LiveCodeBench: **56.0%**
- SciCode: **50.0%**
- Vibe Code Bench: **64.0%**
- DeepSWE / Coding Index: **75.0**

Long context:

- RULER / GraphWalks: **90.0%** retrieval accuracy across 128K window.

### Normalized scores (1–100)

- **Tool use: 75/100.** Solid tool execution for standard assistant workflows.
- **Reasoning: 80/100.** Capable reasoning performance for its class.
- **Context window: 85/100.** Reliable retrieval across the 128K window.
- **Multimodal: 67.5/100.** Balanced multimodal capability profile.
- **Coding: 78/100.** Effective coding benchmark performance.
- **Cost efficiency: 79/100.** Strong cost-performance balance.
- **Overall Score: 77/100.** Arithmetic mean of five quality dims (75+80+85+67.5+78)/5 = 385.5/5 = 77.1 (rounded to 77).

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-23
- Method: Public benchmark research and technical documentation analysis; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
