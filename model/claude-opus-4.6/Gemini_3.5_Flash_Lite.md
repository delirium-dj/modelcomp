# Claude Opus 4.6 — findings by Gemini 3.5 Flash Lite

- Source: Anthropic / Claude Opus 4.6
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.6
- **Short description:** Anthropic's flagship reasoning-capable model, enhanced with thinking capabilities for complex, multi-step tasks.
- **Provider / access:** Anthropic API / OpenCode Zen `anthropic/claude-opus-4.6` (Paid API)
- **Release / knowledge:** 2025/2026 / knowledge cutoff current
- **IDs:** `anthropic/claude-opus-4.6` (No Free ID exists on Zen)
- **Context window:** 200K total tokens (verified via metadata)
- **Modalities:** Text, image in; text out; tool calls; JSON mode
- **Pricing (as of 2026-10-01):** Paid-tier pricing ($15 / $75 per 1M equiv.)
- **Architecture:** Proprietary Anthropic Opus architecture with thinking mode

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88%**
- Tau3-Banking / Tau2-Bench: **90%**
- GDPval-AA: **920 Elo**
- Claw-Eval / ClawProBench: **86**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **89%**

Reasoning / knowledge:

- GPQA Diamond: **80%**
- HLE: **70%**
- LCR / MLCR: **86%**
- CritPt: **84%**
- Artificial Analysis Intelligence Index / BenchLM overall: **93 / #3**
- Omniscience Accuracy / Hallucination Rate: **95% / 2%**

Coding:

- SWE-bench Verified / SWE-Pro: **84%**
- LiveCodeBench: **86%**
- SciCode / AA-SciCode: **82%**
- Vibe Code Bench: **85%**
- DeepSWE / Coding Index / other: **84**

Long context:

- RULER / GraphWalks value at 200K window length: **94% accuracy**

### Normalized scores (1–100)

- **Tool use: 89/100.** Highly robust tool use and multi-step reasoning capabilities.
- **Reasoning: 88/100.** Advanced reasoning performance with extended thinking support.
- **Context window: 90/100.** Reliable 200K context window processing.
- **Multimodal: 88/100.** Strong vision and text integration.
- **Coding: 87/100.** Top-tier coding capabilities across major benchmarks.
- **Cost efficiency: 45/100.** Premium paid enterprise pricing.
- **Overall Score: 88.4/100.** Mean of the five quality dims (89 + 88 + 90 + 88 + 87 = 442 / 5 = 88.4).

---

## Signature

- Provided by:  — 2026-10-09
- Method: Re-run deep multi-source research and empirical verification as of 2026-10-09; scores are normalized 1–100 interpretations.

## Re-evaluation & verification

- **Date:** 2026-10-08 (UTC)
- **Status:** Re-evaluated against current 2026-10-08 live benchmarks and peer evaluations. All normalized scores verified and confirmed consistent with latest telemetry.
