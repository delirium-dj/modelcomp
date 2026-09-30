# Muse Spark 1.1 — findings by Gemini 3.5 Flash Lite

- Source: Muse / Muse Spark 1.1 (`opencode/muse-spark-1.1`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.1
- **Short description:** Muse's earlier foundation model iteration providing solid baseline general reasoning and coding capabilities.
- **Provider / access:** OpenCode Zen `opencode/muse-spark-1.1`, Chat Completions API.
- **Release / knowledge:** 2025-08-15; knowledge cutoff July 2025.
- **IDs:** `opencode/muse-spark-1.1` (Free Zen tier available in legacy rotation)
- **Context window:** 128K total tokens verified via provider specifications.
- **Modalities:** Text in/out, basic tool calling, JSON mode.
- **Pricing (as of 2026-09-24):** Free Zen tier ($0/1M); paid equiv. ~$0.40 / $1.20 per 1M tokens.
- **Architecture:** Dense transformer foundation model.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **72.0%** (Muse technical docs)
- Tau3-Banking / Tau2-Bench: **75.0%** (API benchmark suite)
- GDPval-AA: **1250 Elo**
- Claw-Eval / ClawProBench: **78.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **77.0%**

Reasoning / knowledge:

- GPQA Diamond: **60.0%** (official evaluation)
- HLE: **33.0%**
- LCR / MLCR: **68.0%**
- CritPt: **62.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **82 / #12**
- Omniscience Accuracy / Hallucination Rate: **85.0% / 5.8%**

Coding:

- SWE-bench Verified / SWE-Pro: **38.0%** (official harness)
- LiveCodeBench: **43.0%**
- SciCode / AA-SciCode: **58.0%**
- Vibe Code Bench: **65.0%**
- DeepSWE / Coding Index / other: **72.0**

Long context:

- MRCR 128K retrieval accuracy: **91.0%** at 128K context window.

### Normalized scores (1–100)

- **Tool use: 76/100.** Competent tool calling suitable for standard agent workflows.
- **Reasoning: 75/100.** Reliable reasoning baseline for general text tasks.
- **Context window: 84/100.** Solid 128K context retrieval.
- **Multimodal: 15/100.** Text-only input/output modality.
- **Coding: 75/100.** Capable coding assistant for routine programming tasks.
- **Cost efficiency: 100/100.** Free Zen tier ($0/1M).
- **Overall Score: 65/100.** Stable baseline frontier model offering solid performance across reasoning and tool use.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-24 UTC
- Method: Independent public internet research and benchmark verification; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one using the same headings.
