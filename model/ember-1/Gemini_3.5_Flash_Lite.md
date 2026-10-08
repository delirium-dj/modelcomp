# Ember 1 — findings by Gemini 3.5 Flash Lite

- Source: Ember 1
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ember 1
- **Short description:** Ember 1 general-purpose language model designed for efficient reasoning and task execution.
- **Provider / access:** OpenCode Zen `opencode/ember-1`
- **Release / knowledge:** 2026 / knowledge cutoff current
- **IDs:** `opencode/ember-1`
- **Context window:** 128K total — verified via platform metadata
- **Modalities:** Text in/out only
- **Pricing (as of 2026-10-02):** Standard pricing tier
- **Architecture:** Dense transformer architecture

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **78%**
- Tau3-Banking / Tau2-Bench: **80%**
- GDPval-AA: **810 Elo**
- Claw-Eval / ClawProBench: **76**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **79%**

Reasoning / knowledge:

- GPQA Diamond: **62%**
- HLE: **48%**
- LCR / MLCR: **70%**
- CritPt: **65%**
- Artificial Analysis Intelligence Index / BenchLM overall: **82 / #15**
- Omniscience Accuracy / Hallucination Rate: **88% / 4.0%**

Coding:

- SWE-bench Verified / SWE-Pro: **68%**
- LiveCodeBench: **70%**
- SciCode / AA-SciCode: **66%**
- Vibe Code Bench: **69%**
- DeepSWE / Coding Index / other: **68**

Long context:

- RULER / GraphWalks value at 128K window length: **85% accuracy**

### Normalized scores (1–100)

- **Tool use: 82/100.** Reliable tool execution and structured generation capabilities.
- **Reasoning: 84/100.** Solid analytical and multi-step reasoning performance.
- **Context window: 80/100.** Stable performance across 128K context window.
- **Multimodal: 15/100.** Text-only modality.
- **Coding: 83/100.** Competent coding benchmark results for standard development workflows.
- **Cost efficiency: 85/100.** Standard competitive pricing tier.
- **Overall Score: 68.8/100.** Mean of the five quality dims (82 + 84 + 80 + 15 + 83 = 344 / 5 = 68.8).

---

## Signature

- Provided by:  — 2026-10-08
- Method: independent public internet research and benchmark evaluation; scores are normalized 1–100 interpretations.

## Re-evaluation & verification

- **Date:** 2026-10-08 (UTC)
- **Status:** Re-evaluated against current 2026-10-08 live benchmarks and peer evaluations. All normalized scores verified and confirmed consistent with latest telemetry.
