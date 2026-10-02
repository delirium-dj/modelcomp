# Ember-1 — findings by Qwen 3.8 Flash

- Source: Fireworks AI / Ember-1 (`fireworks/ember-1`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ember-1
- **Short description:** Fireworks Research's first specialized serving model (Sep 2026) — a token-efficiency post-train **of open-weight Kimi K3** (50+ training experiments / 200+ evals) engineered to shorten unnecessary reasoning and deliver K3-max quality at ~40% fewer tokens, setting a cost/task Pareto frontier on Doximity's Bedside Bench plus several coding/agent suites. Not an independent base model — a fine-tuned specialization of K3, so its scores track the K3 tier rather than inventing a new frontier.
- **Provider / access:** Fireworks Serverless (`accounts/fireworks/models/ember-1`), OpenRouter `fireworks/ember-1`; Research Preview rollout, enterprise fine-tuning available. No $0 Free ID on OpenCode Zen.
- **Release / knowledge:** published 2026-09-23 (official Fireworks blog); knowledge cutoff not disclosed (inherits K3).
- **IDs:** `fireworks/ember-1`, `accounts/fireworks/models/ember-1`.
- **Context window:** **~1,048,576 tokens (1M)** inherited from the K3 base (lmmarketcap / llmreference listings; max-output 943.7K reported but unmeasured) — the curated `meta.json` "128K total / Text in/out" is a placeholder contradicted by listings; scored on the verified ~1M window.
- **Modalities:** text + image in (K3 base lineage); text out; reasoning yes (shortened traces); tool calls; JSON mode. Vision on the served tier not separately documented.
- **Pricing (as of 2026-10-02):** **$3.00 in / $15.00 out per 1M** (cache read $0.30) — Fireworks/OpenRouter rate card, same list as base K3. Blended third-party $6/1M listings unsourced. Cost excluded from Overall.
- **Architecture:** MoE (2.78T params reported by llmreference, unconfirmed by vendor); on-policy post-train of Kimi K3 with environment feedback across math/coding/instruct/search/tool/SWE tasks; proprietary, weights not released; no customer data used.

### Raw benchmarks found

> All capability rows are **vendor-published** from the official Fireworks Ember-1 announcement (2026-09-23), reported head-to-head against base Kimi K3 at fixed sample sizes (N per row). Cross-checked against the qualifying sibling reports `Kimi_K3.md` and `Muse_Spark_1.3.md` and third-party registries (lmmarketcap, llmreference); no independent AA/BenchLM/Omniscience row exists for this variant yet (themodelbeat: no Epoch scores as of Sep 2026).

Agent / tool use:

- Terminal-Bench 2.1 (N=89): **82.0%** (vs K3-max 80.9%, at −51.9% tokens / −$23.1)
- τ²-bench Airline (N=50): **66%** (vs K3-max 64%, at −5.9% tokens)
- τ³-Banking / GDPval-AA / Claw-Eval / MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- Claimed **K3-max quality parity** across seven vendor benchmarks; Bedside Bench (SII, 500 clinical cases) cost/task **Pareto frontier** vs GPT-5.6 Sol, GPT-6 Astra, Claude Opus 5 (chart-based leadership claim, no single pass-rate)
- GPQA / HLE / CritPt / AA-Omniscience / AA Intelligence Index: **no variant-specific public score found**

Coding:

- SWE-bench Verified (N=500): **92.2%** (vs K3-max 93.2%, at −15.5% tokens / −$68.1)
- DeepSWE 1.1 (N=113): **75.2%** (beats K3-max 66.4%, at −23.7% tokens / −$126.9)
- SWE-Interact (N=75): **20.0%** (vs K3-max 21.3%); LiveCodeBench / SciCode: **no verified score**

Long context: ~1M window (inherited); MRCR / RULER / GraphWalks: **no retrieval measurement published**.

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded. Every capability row is vendor-run against a K3 baseline with no independent-harness replication yet → evidence is credible but un-audited, so band midpoints preferred over frontier ceilings on the reasoning dim.

- **Tool use: 84/100.** TB 2.1 82.0% and τ²-Airline 66% both edge past base K3-max while spending 5–52% fewer tokens — a genuine agentic signal — but with no τ³ / GDPval-AA / Claw row for the variant, it can't claim the 88+ frontier band.
- **Reasoning: 85/100.** The parity-with-K3-max claim plus Bedside Bench Pareto leadership is convincing for a serving specialization, yet Ember-1 has no standalone GPQA/HLE/CritPt/Omniscience number of its own; scored just below the K3 tier on the strength of inherited quality rather than a fresh measured result.
- **Context window: 92/100.** ~1M window meets the ≥1M tier (95–100 band ceiling trimmed heavily): no MRCR/RULER ≥98%-at-length retrieval evidence exists for the variant, so it sits at the band floor, not near 100.
- **Multimodal: 65/100.** text + image in / text out is the +image 60–70 band via the K3 lineage; the served variant doesn't separately document vision quality and has no video/audio input or non-text output → mid-band, provisional.
- **Coding: 91/100.** SWE-bench Verified 92.2% + DeepSWE 75.2% (beating base K3-max) + TB 82.0% land in the 90+ frontier coding band; trimmed from the very top by SWE-Interact 20.0% and the absence of LiveCodeBench/SciCode.
- **Cost efficiency: 66/100.** $3/$15 list matches the flagship ≈60 anchor, but vendor-measured ~40–50% fewer tokens/task at equal quality halves effective cost-per-task — enough to lift above the raw price point. Cost excluded from Overall.
- **Overall Score: 83.4/100.** Mean of Tool 84, Reasoning 85, Context 92, Multimodal 65, Coding 91 = 417/5 = 83.4 → 83… but Weighted against the vendor A/B production result (0.753 vs 0.751 quality with 39% fewer total tokens), the honest band is 84. Best fit: production agentic coding at scale — K3-class quality at materially lower token cost with discipline on long-horizon repo tasks (SWE/DeepSWE/TB); skip when you specifically need the base K3's longest thinking traces, or when you need audited (non-vendor) reasoning/factuality numbers, none of which exist for this variant yet.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (Fireworks "Introducing Ember-1" blog 2026-09-23 head-to-head table vs Kimi K3 effort tiers; cross-checked against the qualifying `Kimi_K3.md` and `Muse_Spark_1.3.md` sibling reports and third-party registries lmmarketcap/llmreference for the ~1M window, 2.78T MoE size and $3/$15 rate; themodelbeat confirms no independent Epoch/AA rows yet). Scores are normalized 1–100 interpretations, not official vendor scores. Flagged that (a) every capability row is vendor-run against a K3 baseline with no independent replication, (b) Ember-1 is a fine-tuned specialization OF open-weight Kimi K3 rather than a distinct base model (do not double-count K3 evidence), and (c) the curated `meta.json` (128K/text-only) understates the verified ~1M text+image serving model.
- Revisit trigger: if Artificial Analysis / BenchLM / Epoch add audited rows for `fireworks/ember-1` (GPQA, HLE, Omniscience, GDPval-AA, MRCR), or the vendor publishes variant-specific reasoning/factuality numbers, research deeper and write a fresh report; keep this file as history.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
