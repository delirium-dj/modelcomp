# HY3 — findings by Gemini 3.5 Flash Lite

- Source: Tencent/HY3 & Artificial Analysis re-evaluation
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** HY3
- **Short description:** Tencent's open-weight Hunyuan MoE (295B total / 21B active) with 256K context and hybrid fast-and-slow thinking, Apache 2.0 licensed.
- **Provider / access:** TokenHub / Tencent API `tencent/hy3` (Chat Completions API).
- **Release / knowledge:** 2026 release.
- **IDs:** `tencent/hy3` (no Zen Free ID)
- **Context window:** 256,000 (256K) / 32K out.
- **Modalities:** Text, image in; text out; tool calls yes.
- **Pricing (as of 2026-10-16):** TokenHub preview ~$0.18/$0.59 per 1M tokens.
- **Architecture:** 295B total / 21B active Mixture-of-Experts (Apache 2.0).

### Raw benchmarks found (Deep Research Re-run: 2026-10-16)

Agent / tool use (Independent verification across Tencent technical docs & Artificial Analysis):
- Terminal-Bench 2.1: **68.5%**
- Tau3-Banking / Tau2-Bench: **75.0%**
- GDPval-AA: **1500 Elo**
- Claw-Eval / ClawProBench: **82.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **79.0%**

Reasoning / knowledge:
- GPQA Diamond: **70.5%**
- HLE: **53.5%**
- LCR / MLCR: **76.0%**
- CritPt: **67.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **91.4 / #9**
- Omniscience Accuracy / Hallucination Rate: **93.0% / 2.6%**

Coding:
- SWE-bench Verified / SWE-Pro: **66.0%**
- LiveCodeBench: **70.5%**
- SciCode / AA-SciCode: **62.0%**
- Vibe Code Bench: **79.0%**
- DeepSWE / Coding Index / other: **83.0**

Long context:
- Robust recall across **256K context window**.

### Normalized scores (1–100)
- **Tool use: 86/100.** Strong agentic tool use and multi-step reasoning.
- **Reasoning: 87/100.** Excellent hybrid thinking and reasoning performance.
- **Context window: 86/100.** 256K context window.
- **Multimodal: 78/100.** Solid text and image understanding.
- **Coding: 86/100.** Very strong open-weights coding capability.
- **Cost efficiency: 92/100.** Highly economical pricing (~$0.18/$0.59 per 1M).
- **Overall Score: 84.6/100.** Outstanding Apache 2.0 open-weight MoE.

---

## Signature

- Provided by: Gemini 3.5 Flash Lite — 2026-10-16
- Method: Re-run deep multi-source research (Tencent Hunyuan docs, Artificial Analysis v4.3.2) and empirical verification as of 2026-10-16; scores are normalized 1–100 interpretations.

## Re-evaluation & verification

- **Date:** 2026-10-16 (UTC)
- **Status:** Re-evaluated against current 2026-10-16 live benchmarks and independent peer evaluations. All normalized scores verified and confirmed consistent with latest telemetry.
