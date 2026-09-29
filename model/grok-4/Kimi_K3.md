# Grok 4 — findings by Kimi K3

- Source: SpaceXAI — post-July-2026 branding of xAI / Grok 4 (`grok-4`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4
- **Short description:** SpaceXAI's July 2025 flagship — the first Grok trained with reinforcement learning at Colossus scale (200K GPUs), with native tool use and real-time search. Reasoning model; paired with the parallel test-time-compute Grok 4 Heavy variant (first model past 50% on Humanity's Last Exam). Now legacy/deprecated: dropped from the official pricing table and superseded by the 4.2/4.20 → 4.7 line.
- **Provider / access:** SpaceXAI API (`grok-4`), X/Grok consumer apps, SuperGrok / SuperGrok Heavy subscription tiers. As of 2026-09 no longer in the docs.x.ai pricing table; Artificial Analysis marks the model **deprecated** (only default 10k-input workload still benchmarked; AA suggests Grok 4.20 0309 instead).
- **Release / knowledge:** Released 2025-07-09 (x.ai/news launch post; AA lists July 10, 2025 — timezone split). Knowledge cutoff not verified.
- **IDs:** `grok-4` (SpaceXAI API; no Free-tier ID verified on OpenCode Zen). Grok 4 Heavy = subscription/API companion variant.
- **Context window:** 256K tokens (x.ai/news launch post: "256,000 context window"; AA lists 256k / ~260K). Third-party BenchLM figure of 128K contradicted by two authoritative sources.
- **Modalities:** text + image input; text output. Reasoning: yes (extended chain-of-thought; AA shows the reasoning version). Native tool calls (code interpreter, web search, X search); JSON mode. Voice/vision (camera) in consumer app voice mode.
- **Pricing (as of 2026-09-29):** Historical launch pricing **$3.00 in / $15.00 out** per 1M tokens (AA median across providers; blended ~$4.20). No current official price — deprecated.
- **Architecture:** proprietary (SpaceXAI); params undisclosed.

### Raw benchmarks found

Agent / tool use:

- Vending-Bench: **$4,694.15 net worth, 4,569 units sold** (avg of 5 runs) — dominated Claude Opus 4 ($2,077.41/1,412) and human baseline ($844.05/344) (x.ai/news, 2025-07-09)
- τ²-bench (Tau2-Bench): **74.9%** (benchlm.ai)
- Gert Labs: **42.3%** (benchlm.ai)
- τ³-Banking / Terminal-Bench 4.0 / GDPval-AA: part of AA's current v4.3.2 index suite, but no standalone public value is text-retrievable for this model — no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index **v4.3.2**: **22** (estimated; #135/216, median 26) — current basis. Historical v3 reading at launch: **73** (July 2025) — pre-rebase, not comparable
- GPQA Diamond (AA): **87.7%** (benchlm.ai)
- HLE (AA-HLE): **26.7%** (base, benchlm.ai); **Grok 4 Heavy 50.7%** on text-only subset — first model above 50% (x.ai/news)
- ARC-AGI-2: **15.9%** — new SOTA for closed models (vs Claude Opus ~8.6%, +8pp over previous high) (x.ai/news)
- USAMO'25: **61.9%** (Grok 4 Heavy, x.ai/news)
- AA-LCR: **68.0%**; CritPt: **2.0%** (benchlm.ai)
- AA-Omniscience Accuracy / Hallucination Rate: **40.5% / 64.5%** (benchlm.ai)
- FrontierMath v2: **19.7%** T1–3 / **2.1%** T4; AA-IFBench: **53.7%** (benchlm.ai)
- BenchLM overall **52.72/100, #65 of 507**

Coding:

- React Native Evals: **72.6%** (benchlm.ai)
- SWE-bench / LiveCodeBench / SciCode: launch-post charts exist (LiveCodeBench Jan–May) but values are image-only — no verified public score found at this ID

Long context:

- AA-LCR 68.0% within 256K window (benchlm.ai); no MRCR/RULER rows.

Multimodal:

- AA-MMMU-Pro: **68.8%** (benchlm.ai)

### Normalized scores (1–100)

- **Tool use: 68/100.** Native tool use (code interpreter, web/X search) verified at launch, τ²-bench 74.9%, and a dominant Vending-Bench run ($4,694 net worth vs Opus 4's $2,077); capped by absent modern agentic rows (TB4/τ³/GDPval) and true long-horizon unreliability.
- **Reasoning: 72/100.** 2025-era Grok 4 sits in the 70s by 2026 standards: GPQA 87.7% retains depth, HLE 26.7% (Heavy 50.7%), ARC-AGI-2 15.9% SOTA at launch; capped by current AA Index v4.3.2 of 22 (#135/216) showing the generation gap.
- **Context window: 72/100.** Verified 256K window (launch post + AA) lands in the 70s band; AA-LCR 68.0% shows workable in-window retrieval.
- **Multimodal: 68/100.** MMMU-Pro 68.8% image input; text-only output caps it (image-in band 60–75).
- **Coding: 60/100.** Only React Native Evals 72.6% measured; no standalone verified SWE-bench/LiveCodeBench/SciCode numbers; Launch-era LiveCodeBench chart not text-retrievable.
- **Cost efficiency: 60/100.** Verified $3/$15 per 1M matches the methodology's ~60 anchor exactly; deprecated status means no current-value pricing.
- **Overall Score: 68/100.** (68+72+72+68+60)/5 = 68.0 → 68. Best fit: legacy Grok integrations pinned to 2025 behavior; new work should target Grok 4.20/4.7 as AA itself recommends.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-29
- Method: public internet research (x.ai/news Grok 4 launch post, docs.x.ai pricing table, Artificial Analysis model page, benchlm.ai scorecard); scores are normalized 1–100 interpretations, not official vendor scores. Reverified 2026-09-29: corrected release date to 2025-07-09, context to 256K, pricing to verified $3/$15; added Vending-Bench/ARC-AGI-2/HLE-Heavy 50.7% launch numbers; switched AA Index to current v4.3.2 (22) with v3 (73) kept as historical; marked deprecated; xAI rebranded SpaceXAI.
- Future sources: add a new file next to this one using the same headings.
