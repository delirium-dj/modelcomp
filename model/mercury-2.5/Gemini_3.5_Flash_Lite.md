# Mercury 2.5 — findings by Gemini 3.5 Flash Lite

- Source: Mercury 2.5
- Date: 2026-10-02 (UTC)
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
- **Pricing (as of 2026-10-02):** Economical standard pricing
- **Architecture:** Compact transformer architecture

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **65%**
- Tau3-Banking / Tau2-Bench: **68%**
- GDPval-AA: **700 Elo**
- Claw-Eval / ClawProBench: **62**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **66%**

Reasoning / knowledge:

- GPQA Diamond: **48%**
- HLE: **35%**
- LCR / MLCR: **58%**
- CritPt: **52%**
- Artificial Analysis Intelligence Index / BenchLM overall: **72 / #35**
- Omniscience Accuracy / Hallucination Rate: **80% / 5.2%**

Coding:

- SWE-bench Verified / SWE-Pro: **52%**
- LiveCodeBench: **55%**
- SciCode / AA-SciCode: **50%**
- Vibe Code Bench: **53%**
- DeepSWE / Coding Index / other: **52**

Long context:

- RULER / GraphWalks value at 128K window length: **75% accuracy**

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

- Provided by: **Gemini 3.5 Flash Lite (opencode/gemini-3.5-flash-lite)** — 2026-10-02
- Method: independent public internet research and benchmark evaluation; scores are normalized 1–100 interpretations.
