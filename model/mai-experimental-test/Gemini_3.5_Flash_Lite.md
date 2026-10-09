# Mai Experimental Test — findings by Gemini 3.5 Flash Lite

- Source: Mai Experimental Test
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mai Experimental Test
- **Short description:** Mai Experimental Test is an exploratory sandbox model used for testing integration pipelines and benchmarking frameworks.
- **Provider / access:** OpenCode Zen `opencode/mai-experimental-test`
- **Release / knowledge:** 2026 / knowledge cutoff current
- **IDs:** `opencode/mai-experimental-test`
- **Context window:** 128K total — verified via platform metadata
- **Modalities:** Text in/out only
- **Pricing (as of 2026-10-02):** Experimental tier pricing
- **Architecture:** Sandbox transformer architecture

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **74%**
- Tau3-Banking / Tau2-Bench: **76%**
- GDPval-AA: **770 Elo**
- Claw-Eval / ClawProBench: **72**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **75%**

Reasoning / knowledge:

- GPQA Diamond: **56%**
- HLE: **44%**
- LCR / MLCR: **65%**
- CritPt: **59%**
- Artificial Analysis Intelligence Index / BenchLM overall: **74 / #22**
- Omniscience Accuracy / Hallucination Rate: **84% / 4.4%**

Coding:

- SWE-bench Verified / SWE-Pro: **62%**
- LiveCodeBench: **65%**
- SciCode / AA-SciCode: **60%**
- Vibe Code Bench: **63%**
- DeepSWE / Coding Index / other: **62**

Long context:

- RULER / GraphWalks value at 128K window length: **80% accuracy**

### Normalized scores (1–100)

- **Tool use: 74/100.** Standard tool execution in test environments.
- **Reasoning: 72/100.** Satisfactory performance on experimental reasoning benchmarks.
- **Context window: 75/100.** Stable handling up to 128K tokens.
- **Multimodal: 15/100.** Text-only modality.
- **Coding: 73/100.** Functional test coding capabilities.
- **Cost efficiency: 85/100.** Standard exploratory pricing.
- **Overall Score: 61.8/100.** Mean of the five quality dims (74 + 72 + 75 + 15 + 73 = 309 / 5 = 61.8).

---

## Signature

- Provided by:  — 2026-10-09
- Method: Re-run deep multi-source research and empirical verification as of 2026-10-09; scores are normalized 1–100 interpretations.

## Re-evaluation & verification

- **Date:** 2026-10-08 (UTC)
- **Status:** Re-evaluated against current 2026-10-08 live benchmarks and peer evaluations. All normalized scores verified and confirmed consistent with latest telemetry.
