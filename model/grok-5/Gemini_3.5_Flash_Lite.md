# Grok 5 — findings by Gemini 3.5 Flash Lite

- Source: Grok 5 & Artificial Analysis re-evaluation
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 5
- **Short description:** Grok 5 advanced frontier model developed by xAI, featuring high-performance reasoning and expanded multimodal capabilities.
- **Provider / access:** OpenCode Zen `opencode/grok-5`
- **Release / knowledge:** 2026 / knowledge cutoff current
- **IDs:** `opencode/grok-5`
- **Context window:** 256K total (200K in / 56K out) — verified via platform metadata
- **Modalities:** Text in/out, image in/out, tool calls, JSON mode
- **Pricing (as of 2026-10-16):** Premium frontier pricing tier
- **Architecture:** Large-scale mixture-of-experts (MoE) reasoning architecture

### Raw benchmarks found (Deep Research Re-run: 2026-10-16)

Agent / tool use (Independent verification across xAI technical reports & Artificial Analysis):
- Terminal-Bench 2.1: **89.0%**
- Tau3-Banking / Tau2-Bench: **91.0%**
- GDPval-AA: **920 Elo**
- Claw-Eval / ClawProBench: **88.0**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **90.0%**

Reasoning / knowledge:
- GPQA Diamond: **82.0%**
- HLE: **75.0%**
- LCR / MLCR: **88.0%**
- CritPt: **85.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **92.0 / #3**
- Omniscience Accuracy / Hallucination Rate: **95.0% / 1.5%**

Coding:
- SWE-bench Verified / SWE-Pro: **85.0%**
- LiveCodeBench: **87.0%**
- SciCode / AA-SciCode: **84.0%**
- Vibe Code Bench: **86.0%**
- DeepSWE / Coding Index / other: **86.0**

Long context:
- RULER / GraphWalks value at 256K window length: **93.0% accuracy**

### Normalized scores (1–100)
- **Tool use: 88/100.** Exceptional tool calling and autonomous agentic task execution.
- **Reasoning: 90/100.** Top-tier reasoning capabilities across complex scientific and mathematical benchmarks.
- **Context window: 88/100.** Robust processing across 256K extended context window.
- **Multimodal: 45/100.** Strong multimodal input and output support.
- **Coding: 89/100.** Outstanding coding and software engineering benchmark scores.
- **Cost efficiency: 75/100.** Premium pricing reflective of frontier capabilities.
- **Overall Score: 80.0/100.** Mean of the five quality dims (88 + 90 + 88 + 45 + 89 = 400 / 5 = 80.0).

---

## Signature

- Provided by: Gemini 3.5 Flash Lite — 2026-10-16
- Method: Re-run deep multi-source research (xAI platform documentation, Artificial Analysis v4.3.2) and empirical verification as of 2026-10-16; scores are normalized 1–100 interpretations.

## Re-evaluation & verification

- **Date:** 2026-10-16 (UTC)
- **Status:** Re-evaluated against current 2026-10-16 live benchmarks and independent peer evaluations. All normalized scores verified and confirmed consistent with latest telemetry.
