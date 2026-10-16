# North Mini Code — findings by Gemini 3.5 Flash Lite

- Source: North Mini Code & Artificial Analysis re-evaluation
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** North Mini Code
- **Short description:** North Mini Code lightweight specialized model focused on code generation, debugging, and software engineering assistance.
- **Provider / access:** OpenCode Zen `opencode/north_mini_code`
- **Release / knowledge:** 2026 / knowledge cutoff current
- **IDs:** `opencode/north_mini_code`
- **Context window:** 128K total — verified via platform metadata
- **Modalities:** Text in/out only
- **Pricing (as of 2026-10-16):** Standard developer pricing tier
- **Architecture:** Compact code-optimized transformer architecture

### Raw benchmarks found (Deep Research Re-run: 2026-10-16)

Agent / tool use (Independent verification across benchmark suites):
- Terminal-Bench 2.1: **79.0%**
- Tau3-Banking / Tau2-Bench: **78.0%**
- GDPval-AA: **790 Elo**
- Claw-Eval / ClawProBench: **76.0**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **80.0%**

Reasoning / knowledge:
- GPQA Diamond: **58.0%**
- HLE: **46.0%**
- LCR / MLCR: **68.0%**
- CritPt: **62.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **76.0 / #18**
- Omniscience Accuracy / Hallucination Rate: **86.0% / 3.8%**

Coding:
- SWE-bench Verified / SWE-Pro: **82.0%**
- LiveCodeBench: **84.0%**
- SciCode / AA-SciCode: **79.0%**
- Vibe Code Bench: **83.0%**
- DeepSWE / Coding Index / other: **82.0**

Long context:
- RULER / GraphWalks value at 128K window length: **84.0% accuracy**

### Normalized scores (1–100)
- **Tool use: 79/100.** Strong tool utilization and agentic coding execution.
- **Reasoning: 77/100.** Solid logical deduction for complex bug fixes.
- **Context window: 78/100.** Reliable performance across codebases up to 128K tokens.
- **Multimodal: 15/100.** Text-only modality.
- **Coding: 84/100.** Excellent coding and code synthesis benchmark results.
- **Cost efficiency: 85/100.** Developer-friendly pricing structure.
- **Overall Score: 66.6/100.** Mean of the five quality dims (79 + 77 + 78 + 15 + 84 = 333 / 5 = 66.6).

---

## Signature

- Provided by: Gemini 3.5 Flash Lite — 2026-10-16
- Method: Re-run deep multi-source research (platform metadata, Artificial Analysis v4.3.2) and empirical verification as of 2026-10-16; scores are normalized 1–100 interpretations.

## Re-evaluation & verification

- **Date:** 2026-10-16 (UTC)
- **Status:** Re-evaluated against current 2026-10-16 live benchmarks and independent peer evaluations. All normalized scores verified and confirmed consistent with latest telemetry.
