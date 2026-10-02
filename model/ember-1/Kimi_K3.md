# Ember-1 — findings by Kimi K3

- Source: Fireworks AI (`fireworks/ember-1`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ember-1
- **Short description:** Fireworks Research's first specialized model (Sep 2026): Kimi K3 post-trained through 50+ training experiments / 200+ evaluations to cut unnecessary reasoning — delivering K3-max quality at ~40% fewer tokens, and setting a cost/task Pareto frontier on Doximity's Bedside Bench and multiple industry coding/agent benchmarks. Flagging clearly: this is a fine-tuned specialization OF open-weight Kimi K3, not an independent base model.
- **Provider / access:** Fireworks Serverless, rolling out as a Research Preview (two-week serverless access initially, made permanent on demand); fine-tuning support available for enterprises; API at `fireworks/ember-1`.
- **Release / knowledge:** Published 2026-09-23 (official Fireworks blog).
- **IDs:** `fireworks/ember-1`. No Free ID exists on OpenCode Zen.
- **Context window:** 1,048,576 tokens (1M; third-party registry lmmarketcap, matches K3 base).
- **Modalities:** Same K3 base stack (text + image input lineage); vendor's published evals are coding/agent/clinical text workloads — vision support on the serving tier not separately documented here. Explicit reasoning mode with shortened traces.
- **Pricing (as of 2026-10-01):** Costed like the base Kimi K3 API in all vendor comparisons: $3/M input ($0.30 cached), $15/M output (Fireworks blog); ~40–50% lower token consumption per task at equal quality per vendor A/B tests. Third-party $6.00/1M listings (runfreetools) are blended/unsourced — treat the $3/$15 figure as the vendor-referenced rate.
- **Architecture:** Post-trained Kimi K3 (open-weight base), proprietary serving by Fireworks; on-policy training with environment feedback across math/coding/instruction-following/conversation/search/tool-use/software-engineering tasks; no customer data used.

### Raw benchmarks found

All from the official Fireworks announcement (2026-09-23), Ember-1 vs base Kimi K3 at same sample sizes (N listed per row; "vs K3 Max" = tokens/cost delta, USD on the same harness run):

Agent / tool use:

- Terminal-Bench 2.1: **82.0%** (N=89; beats K3 max 80.9% at −51.9% tokens / −$23.1)
- τ2-bench Airline: **66%** (N=50; K3 64% at −5.9% tokens)
- Specialized Intelligence Index — Doximity Bedside Bench (500 clinical cases, 10 categories): sets the cost/task Pareto frontier vs GPT-5.6 Sol, GPT-6 Astra, Claude Opus 5 (vendor-reported, chart-based)

Reasoning / knowledge:

- K3-max quality parity across seven benchmarks per vendor (no new GPQA/HLE numbers published for Ember-1 specifically; parity claim is the evidence)
- GPQA / HLE / CritPt: **no verified public score found** for this variant

Coding:

- SWE-bench Verified: **92.2%** (N=500; K3 max 93.2% at −15.5% tokens / −$68.1)
- DeepSWE 1.1: **75.2%** (N=113; beats K3 max 66.4% at −23.7% tokens / −$126.9)
- SWE-Interact: **20.0%** (N=75; K3 max 21.3% at −32.5% tokens)

Production validation (vendor-published): live customer A/B on coding workloads — 0.753 vs 0.751 quality score, **71.3% fewer reasoning tokens**, **39% fewer total tokens**, ~35% fewer tokens/task at comparable quality; internal rollout invisible to Fireworks' own developers.

Long context: 1M window (inherited from K3); no new retrieval benchmarks.

### Normalized scores (1–100)

- **Tool use: 85/100.** TB 2.1 82.0% and τ2-Airline 66% (beating base K3 while spending ~5–52% fewer tokens) sit between the mid band and full frontier references; capped by no Claw-Eval/GDPval-AA for the variant.
- **Reasoning: 88/100.** K3-max parity (within ~1 point across SWE-V/SWE-Interact/τ2) at radically shorter thinking traces; scored just below the K3-tier top because no standalone GPQA/HLE was run for Ember-1.
- **Context window: 92/100.** 1M window inherited from the K3 base; no variant-specific retrieval-depth numbers cap it below the tier top.
- **Multimodal: 65/100.** K3 image-input lineage but vision undocumented on the served variant; scored at the "+image in" band provisionally, pending Fireworks modality confirmation.
- **Coding: 93/100.** SWE-bench Verified 92.2% + DeepSWE 75.2% (beating base K3 max) + TB 2.1 82% land squarely in the 90–100 frontier coding band.
- **Cost efficiency: 72/100.** $3/$15 list (≈60 methodology anchor) but vendor-measured ~40–50% token reduction per task makes effective cost-per-task roughly half of K3-max — good enough to lift well above the raw price point.
- **Overall Score: 85/100.** Half-up mean of the five quality dims: (85 + 88 + 92 + 65 + 93) / 5 = 84.6 → 85. Best fit: production agentic coding at scale — K3-class quality at meaningfully lower token cost; skip when you specifically need the base model's longest thinking traces.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-01
- Method: public internet research (Fireworks "Introducing Ember-1", 2026-09-23, incl. the head-to-head benchmark table vs K3 effort tiers; third-party registry cross-checks); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Claude_Sonnet_4.md`, using the same headings.
