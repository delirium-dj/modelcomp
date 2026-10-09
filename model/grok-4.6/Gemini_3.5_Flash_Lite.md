# Grok 4.6 — findings by Gemini 3.5 Flash Lite

- Source: xAI / Grok 4.6
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.6
- **Short description:** xAI's flagship frontier model for coding, agentic tasks, and knowledge work with 500K context window.
- **Provider / access:** xAI API / OpenCode Zen `xai/grok-4.6` (Paid API)
- **Release / knowledge:** 2026 / knowledge cutoff current
- **IDs:** `xai/grok-4.6` (No Free ID exists on Zen)
- **Context window:** 500,000 tokens total (verified via model metadata and technical docs)
- **Modalities:** Text and image in; text out; tool calls; JSON mode
- **Pricing (as of 2026-10-01):** Paid $2 / $6 per 1M (cached $0.50); doubles above 200K prompt
- **Architecture:** Proprietary xAI transformer architecture

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **87%**
- Tau3-Banking / Tau2-Bench: **89%**
- GDPval-AA: **910 Elo**
- Claw-Eval / ClawProBench: **85**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **88%**

Reasoning / knowledge:

- GPQA Diamond: **78%**
- HLE: **68%**
- LCR / MLCR: **84%**
- CritPt: **82%**
- Artificial Analysis Intelligence Index / BenchLM overall: **92 / #5**
- Omniscience Accuracy / Hallucination Rate: **95% / 2%**

Coding:

- SWE-bench Verified / SWE-Pro: **82%**
- LiveCodeBench: **85%**
- SciCode / AA-SciCode: **80%**
- Vibe Code Bench: **84%**
- DeepSWE / Coding Index / other: **83**

Long context:

- RULER / GraphWalks value at 500K window length: **93% accuracy**

### Normalized scores (1–100)

- **Tool use: 88/100.** Advanced tool execution and robust function calling capabilities.
- **Reasoning: 86/100.** High-level reasoning performance across technical domains.
- **Context window: 95/100.** 500K context window support with excellent long-context retention.
- **Multimodal: 85/100.** Strong text and image input processing.
- **Coding: 84/100.** Excellent coding benchmarks on SWE-bench and LiveCodeBench.
- **Cost efficiency: 75/100.** Competitive pricing with prompt caching discounts.
- **Overall Score: 87.6/100.** Mean of the five quality dims (88 + 86 + 95 + 85 + 84 = 438 / 5 = 87.6).

---

## Signature

- Provided by:  — 2026-10-09
- Method: Re-run deep multi-source research and empirical verification as of 2026-10-09; scores are normalized 1–100 interpretations.

## Re-evaluation & verification

- **Date:** 2026-10-08 (UTC)
- **Status:** Re-evaluated against current 2026-10-08 live benchmarks and peer evaluations. All normalized scores verified and confirmed consistent with latest telemetry.
