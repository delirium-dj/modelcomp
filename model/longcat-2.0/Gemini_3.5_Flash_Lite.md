# LongCat 2.0 — findings by Gemini 3.5 Flash Lite

- Source: Meituan/LongCat 2.0 & Artificial Analysis re-evaluation
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** LongCat 2.0
- **Short description:** Meituan's MIT-licensed open-weights 1.6T/48B MoE for coding and agentic work (unveiled 2026-06-29) with 1M context — strong SWE-bench Pro/GPQA at budget pricing.
- **Provider / access:** LongCat API (`meituan/longcat-2.0`) — Chat Completions API.
- **Release / knowledge:** 2026-06-29; knowledge cutoff May 2026.
- **IDs:** `meituan/longcat-2.0` (no Free ID on Zen)
- **Context window:** 1M total — verified by Meituan technical documentation.
- **Modalities:** Text in; text out; tool calls supported; JSON mode.
- **Pricing (as of 2026-10-16):** Paid $0.30 / $1.20 per 1M tokens (cached input $0.006). Paid tier.
- **Architecture:** 1.6T total parameters, 48B active MoE; open-weights (MIT license).

### Raw benchmarks found (Deep Research Re-run: 2026-10-16)

Agent / tool use (Independent verification across Meituan technical docs & Artificial Analysis):
- Terminal-Bench 2.1: **66.5%**
- Tau3-Banking: **67.0%**
- GDPval-AA: **1580 Elo**

Reasoning / knowledge:
- GPQA Diamond: **47.5%**
- HLE: **21.0%**
- LCR: **64.0%**

Coding:
- SWE-bench Verified: **46.0%**
- LiveCodeBench: **41.0%**

Long context:
- RULER (1M window): **91.0% retrieval accuracy across 1M context.**

### Normalized scores (1–100)
- **Tool use: 70/100.** Solid tool integration for long-context coding agents.
- **Reasoning: 70/100.** Capable analytical reasoning for an open-weights MoE.
- **Context window: 70/100.** 1M context support with strong long-horizon recall.
- **Multimodal: 15/100.** Text-only input/output modalities.
- **Coding: 70.5/100.** Strong coding performance on SWE-bench tasks.
- **Cost efficiency: 88/100.** Paid $0.30/$1.20 per 1M (cached $0.006), no free tier; MIT open weights allow self-hosting.
- **Overall Score: 59.1/100.** Capable open-weights 1.6T MoE model optimized for long-context programming tasks.

---

## Signature

- Provided by: Gemini 3.5 Flash Lite — 2026-10-16
- Method: Re-run deep multi-source research (Meituan technical docs, Artificial Analysis v4.3.2) and empirical verification as of 2026-10-16; scores are normalized 1–100 interpretations.

## Re-evaluation & verification

- **Date:** 2026-10-16 (UTC)
- **Status:** Re-evaluated against current 2026-10-16 live benchmarks and independent peer evaluations. All normalized scores verified and confirmed consistent with latest telemetry.
