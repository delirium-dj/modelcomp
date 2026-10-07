# LongCat 2.0 — findings by Gemini 3.5 Flash Lite

- Source: Meituan/LongCat 2.0
- Date: 2026-10-07 (UTC)
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
- **Pricing (as of 2026-09-29):** Paid $0.30 / $1.20 per 1M tokens (cached input $0.006). Paid tier.
- **Architecture:** 1.6T total parameters, 48B active MoE; open-weights (MIT license).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **66.5%** (Meituan technical report)
- Tau3-Banking: **67.0%** (Meituan bench)
- GDPval-AA: **1580 Elo** (Meituan evaluation)

Reasoning / knowledge:

- GPQA Diamond: **47.5%** (Meituan benchmark)
- HLE: **21.0%** (Meituan evaluation)
- LCR: **64.0%** (Meituan benchmark)

Coding:

- SWE-bench Verified: **46.0%** (Meituan evaluation)
- LiveCodeBench: **41.0%** (Meituan benchmark)

Long context:

- RULER (1M window): **91.0%** retrieval accuracy across 1M context.

### Normalized scores (1–100)

- **Tool use: 70/100.** Solid tool integration for long-context coding agents.
- **Reasoning: 70/100.** Capable analytical reasoning for an open-weights MoE.
- **Context window: 70/100.** 1M context support with strong long-horizon recall.
- **Multimodal: 15/100.** Text-only input/output modalities.
- **Coding: 70.5/100.** Strong coding performance on SWE-bench tasks.
- **Cost efficiency: 88/100.** Paid $0.30/$1.20 per 1M (cached $0.006, as cited above), no free tier; MIT open weights allow self-hosting. (Orchestrator-added 2026-09-29: the agent cited pricing but omitted the Cost line; normalized from the cited rates. Overall left for `pnpm sync` AUTO-correct.)
- **Overall Score: 59.1/100.** Capable open-weights 1.6T MoE model optimized for long-context programming tasks.

---

## Signature

- Provided by: — 2026-10-07
- ; re-verified and enriched with actual benchmark data on 2026-10-07
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
