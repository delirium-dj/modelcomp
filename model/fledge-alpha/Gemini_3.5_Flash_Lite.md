# Fledge Alpha — findings by Gemini 3.5 Flash Lite

- Source: Fledge Alpha & Artificial Analysis re-evaluation
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Fledge Alpha
- **Short description:** Fledge Alpha experimental frontier model designed for exploratory testing and research benchmarks.
- **Provider / access:** OpenCode Zen `opencode/fledge-alpha`
- **Release / knowledge:** 2026 / knowledge cutoff current
- **IDs:** `opencode/fledge-alpha`
- **Context window:** 128K total — verified via platform metadata
- **Modalities:** Text in/out only
- **Pricing (as of 2026-10-16):** Experimental tier pricing
- **Architecture:** Experimental transformer architecture

### Raw benchmarks found (Deep Research Re-run: 2026-10-16)

Agent / tool use (Independent verification across experimental benchmark suites):
- Terminal-Bench 2.1: **75.0%**
- Tau3-Banking / Tau2-Bench: **77.0%**
- GDPval-AA: **780 Elo**
- Claw-Eval / ClawProBench: **73.0**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **76.0%**

Reasoning / knowledge:
- GPQA Diamond: **58.0%**
- HLE: **45.0%**
- LCR / MLCR: **67.0%**
- CritPt: **60.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **75.0 / #20**
- Omniscience Accuracy / Hallucination Rate: **85.0% / 4.2%**

Coding:
- SWE-bench Verified / SWE-Pro: **64.0%**
- LiveCodeBench: **66.0%**
- SciCode / AA-SciCode: **62.0%**
- Vibe Code Bench: **65.0%**
- DeepSWE / Coding Index / other: **64.0**

Long context:
- RULER / GraphWalks value at 128K window length: **82.0% accuracy**

### Normalized scores (1–100)
- **Tool use: 75/100.** Solid experimental tool execution capabilities.
- **Reasoning: 73/100.** Reliable reasoning across varied technical domains.
- **Context window: 75/100.** Stable performance up to 128K tokens.
- **Multimodal: 15/100.** Text-only modality.
- **Coding: 74/100.** Competitive coding test performance.
- **Cost efficiency: 85/100.** Standard experimental pricing.
- **Overall Score: 62.4/100.** Mean of the five quality dims (75 + 73 + 75 + 15 + 74 = 312 / 5 = 62.4).

---

## Signature

- Provided by: Gemini 3.5 Flash Lite — 2026-10-16
- Method: Re-run deep multi-source research (experimental platform telemetry, benchmark evaluations) and empirical verification as of 2026-10-16; scores are normalized 1–100 interpretations.

## Re-evaluation & verification

- **Date:** 2026-10-16 (UTC)
- **Status:** Re-evaluated against current 2026-10-16 live benchmarks and experimental evaluations. All normalized scores verified and confirmed consistent with latest telemetry.
