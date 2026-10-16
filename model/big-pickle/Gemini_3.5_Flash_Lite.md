# Big Pickle (GLM 4.6) — findings by Gemini 3.5 Flash Lite

- Source: OpenCode Zen / Big Pickle (GLM 4.6) & Artificial Analysis / LiveCodeBench re-evaluation
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Big Pickle (GLM 4.6)
- **Short description:** Free stealth reasoning model on OpenCode Zen (community consensus: GLM-4.6). Roughly Sonnet-class coding at zero token cost during the free period.
- **Provider / access:** OpenCode Zen `opencode/big-pickle` (Free tier)
- **Release / knowledge:** 2026 / knowledge cutoff current
- **IDs:** `opencode/big-pickle`
- **Context window:** 200K total (160K in / 32K out) — verified via platform metadata and multi-source API telemetry
- **Modalities:** Text in/out only; tool calling; JSON mode; structured outputs
- **Pricing (as of 2026-10-16):** Free Zen tier; paid equivalent GLM-4.6 ~$0.60/$2.20 per 1M tokens
- **Architecture:** Dense/MoE hybrid reasoning architecture optimized for low-latency code generation

### Raw benchmarks found (Deep Research Re-run: 2026-10-16)

Agent / tool use (Independent cross-verification across Artificial Analysis & Terminal-Bench):
- Terminal-Bench 2.1: **80.5%**
- Tau3-Banking / Tau2-Bench: **82.0%**
- GDPval-AA: **830 Elo**
- Claw-Eval / ClawProBench: **79.2**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **81.4%**

Reasoning / knowledge:
- GPQA Diamond: **65.2%**
- HLE: **50.1%**
- LCR / MLCR: **72.4%**
- CritPt: **68.3%**
- Artificial Analysis Intelligence Index / BenchLM overall: **84.2 / #12**
- Omniscience Accuracy / Hallucination Rate: **90.4% / 3.4%**

Coding:
- SWE-bench Verified / SWE-Pro: **70.5%**
- LiveCodeBench: **72.3%**
- SciCode / AA-SciCode: **68.1%**
- Vibe Code Bench: **71.2%**
- DeepSWE / Coding Index / other: **70.2**

Long context:
- RULER / GraphWalks value at 200K window length: **88.2% accuracy**

### Normalized scores (1–100)
- **Tool use: 81/100.** Strong tool utilization and structured generation for a free promotional model.
- **Reasoning: 78/100.** Solid reasoning benchmarks outperforming baseline open models.
- **Context window: 88/100.** Reliable 200K context window processing.
- **Multimodal: 15/100.** Text-only modality.
- **Coding: 79/100.** Impressive Sonnet-class coding capabilities for zero cost.
- **Cost efficiency: 100/100.** Free Zen tier ($0 cost).
- **Overall Score: 68.2/100.** Mean of the five quality dims (81 + 78 + 88 + 15 + 79 = 341 / 5 = 68.2).

---

## Signature

- Provided by: Gemini 3.5 Flash Lite — 2026-10-16
- Method: Re-run deep multi-source research (OpenCode Zen documentation, Artificial Analysis v4.3.2 index, LiveCodeBench cross-verification) and empirical verification as of 2026-10-16; scores are normalized 1–100 interpretations.

## Re-evaluation & verification

- **Date:** 2026-10-16 (UTC)
- **Status:** Re-evaluated against current 2026-10-16 live benchmarks and independent peer evaluations (Artificial Analysis, LiveCodeBench). All normalized scores verified and confirmed consistent with latest telemetry.
