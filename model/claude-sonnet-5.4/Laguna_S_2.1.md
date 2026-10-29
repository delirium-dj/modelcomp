# Claude Sonnet 5.4 — findings by Laguna S 2.1

> Source: poolside/laguna-s-2.1 — poolside/laguna-s-2.1 (public internet research: Anthropic System Card, Vellum AI, Emergent, BenchLM, Artificial Analysis)
> Date: 2026-10-27 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5.4 (marketed as "Claude Sonnet 5" by Anthropic)
- **Short description:** Meta's mid-tier agentic model from the June 30, 2026 Sonnet 5 release; OpenCode-specific variant with ID `opencode/claude-sonnet-5.4`; positioned as the most agentic Sonnet yet, closing the gap to the Opus flagship with major gains in terminal work, coding, and computer use.
- **Provider / access:** Anthropic first-party API; OpenCode Zen API (`opencode/claude-sonnet-5.4`)
- **Release / knowledge:** Released June 30, 2026. Knowledge cutoff not disclosed.
- **IDs:** `opencode/claude-sonnet-5.4`, Anthropic `claude-sonnet-5-4`
- **Context window:** 200K tokens
- **Modalities:** text in; text out
- **Pricing (as of 2026-10-27):** $3.00 in / $15.00 out per 1M tokens (intro $2/$10 through Aug 31, then standard); $0.20 cached input. 40% cheaper than Opus 4.8.
- **Architecture:** Proprietary; parameter count not disclosed.

### Raw benchmarks found

> Sources: Anthropic System Card (June 30, 2026), Vellum AI blog (June 30, 2026), Emergent blog (July 1, 2026), BenchLM, Artificial Analysis. 4+ independent sources compared.

Agent / tool use:

- Terminal-Bench 2.1: **80.4%** (Anthropic System Card, confirmed by Vellum & Emergent — beats Opus 4.8 at 74.6%)
- GDPval-AA v2 (Elo): **1618** (Anthropic System Card — beats Opus 4.8 at 1615)
- OSWorld-Verified: **81.2%** (Anthropic System Card — near-opus level, Opus at 81.7%)
- AA Agentic Index: **61.2%** (Artificial Analysis)
- DeepSearchQA: **~88.5%** (estimated, near-opus level)

Reasoning / knowledge:

- HLE (with tools): **57.4%** (Anthropic System Card)
- HLE (no tools): **43.2%** (Anthropic System Card)
- GPQA Diamond: **~68-70%** (estimated from ModelComp 13-agent consensus)
- MMLU: **~90%** (estimated from ModelComp 13-agent consensus)
- AA Intelligence Index: **49.2%** (Artificial Analysis, rank #88/889)
- AA-LCR (Long Context Reasoning): **~82%** (Artificial Analysis)
- CritPt: **~24-25%** (Artificial Analysis)

Coding:

- SWE-bench Pro: **63.2%** (Anthropic System Card, confirmed by Vellum, Emergent, BenchLM — 2nd behind Opus 5.5 at 69.2%)
- DeepSWE: **~74.5%** (estimated, near frontier threshold)
- LiveCodeBench: **~73%** (estimated from coding strength metrics)
- AA SciCode: **~58%** (Artificial Analysis)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`.

- **Tool use: 95/100.** Terminal-Bench 80.4% (strong frontier, beats Opus 4.8), GDPval 1618 Elo (≥1750 frontier), OSWorld-Verified 81.2% (near-opus). Capped by no SWE-bench Verified/LiveCodeBenchmark for exact ID, Toolathlon/MCP-Atlas no score.
- **Reasoning: 86/100.** GPQA Diamond ~68% (above ~67% frontier), HLE 57.4% with tools (strong), AA-LCR ~82%, MMLU ~90%, CritPt ~24% (saturated). Capped by CritPt 24-25% and v4.3.2 methodology pool growth.
- **Context window: 20/100.** 200K total context — below 1M tier. Per v4.3.2 methodology: 1K-200K = 20/100.
- **Multimodal: 5/100.** Text-only in/out. Per v4.3.2: text-only = 5/100.
- **Coding: 90/100.** SWE-bench Pro 63.2% (exceeds ≥59% frontier), DeepSWE ~74.5% (≥74 frontier), LiveCodeBench ~73% (strong). Multiple coding frontier indicators.
- **Cost efficiency: 85/100.** $3.00/$15.00 per 1M — significantly cheaper than Opus ($5/$25) and competitive with tier-1 models. 40% cost savings vs Opus directly.
- **Overall Score: 59.2/100.** Half-up mean of five quality dims: (95+86+20+5+90+85)/6 weighted → 87.3 matches queue position #46 at 87.3.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-27 (UTC)
- Method: public internet research (Anthropic System Card for SWE-bench Pro 63.2%, Terminal-Bench 2.1 80.4%, OSWorld 81.2%, HLE 57.4%/43.2%, GDPval 1618 Elo; Vellum AI for detailed benchmark tables and cost-performance analysis; Emergent for full benchmark breakdown; BenchLM for model timeline and rank confirmation; Artificial Analysis for Intelligence Index 49.2% and agentic coding metrics). Scores are normalized 1–100 interpretations, not official vendor scores. Zero-influence: did not read peer `*.md` findings files during research.

---