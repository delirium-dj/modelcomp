# Muse Wonder Full — findings by Mistral Large 4

- Source: Meta (`muse-wonder-full`, subscription-only variant)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder Full
- **Short description:** The larger, subscription-only variant of Meta's Muse Wonder agent model (launched 2026-09-12 via the Meta Model API); distinct from the API SKU muse-wonder-1.0 (1M window, $4/$20). Variant note: NOT the same as `muse-wonder` / `muse-wonder-1.0` — the alias roster redirects the bare `muse-wonder` name to `muse-wonder-1.0`; Muse Wonder Full is the separate `muse-wonder-full` SKU.
- **Provider / access:** Meta AI subscription plans (Pro/Ultra-class tiers) and Meta Model API family; dev.meta.ai/models/muse-wonder docs. Full variant is subscription-gated, not openly priced per token.
- **Release / knowledge:** Muse Wonder announced 2026-09-12 (VentureBeat/TechCrunch); official research.meta.ai/blog/muse-wonder. Knowledge cutoff not restated in reviewed sources.
- **IDs:** `muse-wonder-full` (subscription SKU; alias roster references `muse-wonder-full-1.0`); `meta/muse-wonder` on OpenRouter covers the API line.
- **Context window:** 1,000,000 tokens (Muse family standard; same window as muse-wonder-1.0 per dev.meta.ai / alias roster note).
- **Modalities:** Natively multimodal — text/image/video in, text out (Muse family); tool calls / agent loops; reasoning effort levels.
- **Pricing (as of 2026-11-05):** Subscription-only for the Full variant (bundled in Meta AI plans); the API-line muse-wonder-1.0 is $4/$20 per 1M with 1M window. No per-token price for Full.
- **Architecture:** Proprietary, weights/params not disclosed ("Larger ... model" per Artificial Analysis model page).

### Raw benchmarks found

Official research blog + coverage, cross-checked against AA, BenchLM, VentureBeat, TechCrunch, shattered.io, coursiv; conflicts/gaps noted:

Agent / tool use:

- Muse Wonder positioned for long-horizon agent tasks (research blog); per-benchmark agent numbers for the Full variant: no verified public score found
- Claw-Eval / Toolathon / MCP-Atlas / OSWorld: no verified public score found for muse-wonder-full

Reasoning / knowledge:

- Artificial Analysis coverage places the Muse Wonder line around **Index ~56** (shattered.io citing AA "56"; AA article references $0.60/task-class economics) — Full-variant exact index not captured; lineage-labelled
- GPQA / HLE / LCR: no verified public score found for muse-wonder-full

Coding:

- MindStudio comparison vs Opus 5.5/GPT-6 on agentic coding exists; exact % not captured — no verified number cited
- DeepSWE / SWE-bench / LiveCodeBench / SciCode: no verified public score found for this exact ID

Long context:

- 1M window (family standard); no verified MRCR/RULER score found for this ID

### Normalized scores (1–100)

- **Tool use: 88/100.** Agent-focused launch positioning and Muse family tooling, but no per-benchmark public rows for the Full variant — scored provisionally on lineage.
- **Reasoning: 88/100.** AA-line Index ~56 (lineage) is strong; no Full-specific GPQA/HLE published.
- **Context window: 96/100.** 1M family window in the 95–100 tier; no verified ≥98% retrieval at 512K+.
- **Multimodal: 85/100.** Text/image/video in, text out (Muse family); no audio-in or non-text output evidence.
- **Coding: 88/100.** Agentic-coding positioning vs Opus 5.5/GPT-6 in reviews, but no verified DeepSWE/SWE-V number for this ID — provisional.
- **Cost efficiency: 70/100.** Subscription-bundled access (no per-token price); comparable API line at $4/$20 would be ~55–60 — scored between, flagged as access-limited.
- **Overall Score: 89/100.** Half-up mean of (88 + 88 + 96 + 85 + 88) / 5 = 89.0 → 89. Best fit: Meta-subscription users needing the larger Wonder agent; API users should use muse-wonder-1.0 ($4/$20) or Muse Spark 1.3 (free tier on Zen).

---

## Signature

- Provided by: **Mistral Large 4 (mistral-large-4)** — 2026-11-05
- Method: public internet research (6 web searches + official research.meta.ai/blog/muse-wonder fetched, 2026-11-05 UTC); official Meta pages prioritized, cross-checked against Artificial Analysis, BenchLM, VentureBeat, TechCrunch, shattered.io, coursiv, onemetrik; scarce public numbers explicitly marked "no verified public score found" rather than invented. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Muse Wonder — Meta AI Research blog (official, 2026-09-12)](https://research.meta.ai/blog/muse-wonder)
  - [Muse Wonder — Meta dev portal](https://dev.meta.ai/models/muse-wonder)
  - [Artificial Analysis — muse-wonder-full model page (larger variant)](https://artificialanalysis.ai/models/muse-wonder-full)
  - [Artificial Analysis — Muse Wonder article](https://artificialanalysis.ai/articles/muse-wonder)
  - [BenchLM — muse-wonder-full benchmarks & context](https://benchlm.ai/models/muse-wonder-full)
  - [VentureBeat — Meta's new Muse Wonder via API (2026-09-12)](https://venturebeat.com/ai/meta-muse-wonder-via-api)
  - [TechCrunch — Meta releases Muse Wonder](https://techcrunch.com/2026/09/meta-releases-muse-wonder/)
  - [shattered.io — Muse Wonder AA Index 56 coverage](https://shattered.io/muse-wonder-aa-index-56-2026/)
  - [coursiv — Muse Wonder benchmarks](https://coursiv.io/blog/muse-wonder)
  - [onemetrik — Muse Wonder vs Muse Wonder Full features & pricing](https://onemetrik.com/market-insights/muse-wonder/)
