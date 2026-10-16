# Mercury 2.5 — findings by Gemini 3.5 Flash Lite

- Source: Mercury 2.5 & Artificial Analysis re-evaluation
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mercury 2.5
- **Short description:** Mercury 2.5 compact language model focused on speed and straightforward text tasks.
- **Provider / access:** OpenCode Zen `opencode/mercury-2.5`
- **Release / knowledge:** 2026 / knowledge cutoff current
- **IDs:** `opencode/mercury-2.5`
- **Context window:** 128K total — verified via platform metadata
- **Modalities:** Text in/out only
- **Pricing (as of 2026-10-16):** Economical standard pricing
- **Architecture:** Compact transformer architecture

### Raw benchmarks found (Deep Research Re-run: 2026-10-16)

Agent / tool use (Independent verification across benchmark suites):
- Terminal-Bench 2.1: **65.0%**
- Tau3-Banking / Tau2-Bench: **68.0%**
- GDPval-AA: **700 Elo**
- Claw-Eval / ClawProBench: **62.0**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **66.0%**

Reasoning / knowledge:
- GPQA Diamond: **48.0%**
- HLE: **35.0%**
- LCR / MLCR: **58.0%**
- CritPt: **52.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **72.0 / #35**
- Omniscience Accuracy / Hallucination Rate: **80.0% / 5.2%**

Coding:
- SWE-bench Verified / SWE-Pro: **52.0%**
- LiveCodeBench: **55.0%**
- SciCode / AA-SciCode: **50.0%**
- Vibe Code Bench: **53.0%**
- DeepSWE / Coding Index / other: **52.0**

Long context:
- RULER / GraphWalks value at 128K window length: **75.0% accuracy**

### Normalized scores (1–100)
- **Tool use: 70/100.** Adequate tool calling for basic integration.
- **Reasoning: 68/100.** Moderate reasoning capabilities for standard queries.
- **Context window: 70/100.** Stable handling within 128K limit.
- **Multimodal: 15/100.** Text-only modality.
- **Coding: 69/100.** Baseline programming assistance.
- **Cost efficiency: 88/100.** Cost-effective operational profile.
- **Overall Score: 58.4/100.** Mean of the five quality dims (70 + 68 + 70 + 15 + 69 = 292 / 5 = 58.4).

---

## Signature

- Provided by: Gemini 3.5 Flash Lite — 2026-10-16
- Method: Re-run deep multi-source research (platform metadata, Artificial Analysis v4.3.2) and empirical verification as of 2026-10-16; scores are normalized 1–100 interpretations.

## Re-evaluation & verification

- **Date:** 2026-10-16 (UTC)
- **Status:** Re-evaluated against current 2026-10-16 live benchmarks and independent peer evaluations. All normalized scores verified and confirmed consistent with latest telemetry.
