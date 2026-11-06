# Ember-1 — findings by Mistral Large 4

- Source: Fireworks Research (`fireworks/ember-1`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ember-1
- **Short description:** Fireworks Research's specialized derivative of Moonshot's Kimi K3 (2026-09-23, Research Preview) — post-trained so the model "thinks less": K3-quality answers at ~40% fewer reasoning tokens (35–50% workload-dependent). Serving-profile/derivative of K3, not a new base model. Alias note: unrelated to the "Ember v0.1.5" Slow Lit Labs project (orcarouter warning); an AI Nexus snippet describing a Meituan 1.6T MoE is a different "Ember" — conflict noted.
- **Provider / access:** Fireworks serverless API only (`fireworks/ember-1` on OpenRouter/Vercel Gateway); no weights, no self-hosting; Research Preview label.
- **Release / knowledge:** Published 2026-09-23 (library creation 2026-09-22 — conflict noted); knowledge cutoff inherited from K3 (not restated).
- **IDs:** `fireworks/ember-1` (OpenRouter); Vercel Gateway `vercel-fireworksember-1`.
- **Context window:** 1,040,000 input tokens (llm-stats); K3-family 1M.
- **Modalities:** Text in / text out (K3 lineage, text-only); reasoning; tool calls; agentic.
- **Pricing (as of 2026-11-05):** $3 / $15 per 1M — same sticker as K3, but ~40% fewer reasoning tokens cut effective cost (explainx/saascity). No free tier.
- **Architecture:** Post-trained derivative of Kimi K3 (2.8T MoE); weights not released.

### Raw benchmarks found

Official Fireworks blog cross-checked against OpenRouter, BenchLM, explainx, MarkTechPost, orcarouter, llm-stats, saascity, Vals; conflicts noted:

Agent / tool use:

- Live customer A/B tests + own coding/agent workloads — quality parity with K3 claimed (official blog); BenchLM: provider-reported rows excluded from weighted ranking (harness detail insufficient) — caveat cited
- OSWorld / AutomationBench / Claw-Eval: no verified public score found

Reasoning / knowledge:

- External benchmarks show K3-level quality at fewer tokens (official); exact GPQA/HLE not captured — no verified number cited

Coding:

- Terminal-Bench 2.1: **82.0%** (orcarouter, vs K3's 88.3 — derivative gives up some peak, keeps efficiency; conflict with "identical quality" claim noted)

Long context:

- 1.04M input window; no verified MRCR/RULER for this ID

### Normalized scores (1–100)

- **Tool use: 87/100.** K3-lineage agentic quality with efficiency tuning; provider-reported evidence caveat.
- **Reasoning: 86/100.** K3-level quality claimed at 40% fewer tokens; no independent GPQA/HLE captured.
- **Context window: 96/100.** 1.04M input in the 95–100 tier; no verified 512K+ retrieval.
- **Multimodal: 15/100.** Text-only (K3 lineage); no non-text input evidence.
- **Coding: 90/100.** TB 2.1 82.0% at roughly half the tokens of base K3.
- **Cost efficiency: 60/100.** $3/$15 sticker (the $3/$15 ≈ 60 band) but ~40% fewer reasoning tokens make effective cost materially lower in multi-turn agent loops; no free tier; preview-only access.
- **Overall Score: 75/100.** Half-up mean of (87 + 86 + 96 + 15 + 90) / 5 = 74.8 → 75. Best fit: token-cost optimization for K3-class agent workloads where reasoning verbosity is the bill driver; text-only and preview-only access cap it.

---

## Signature

- Provided by: **Mistral Large 4 (mistral-large-4)** — 2026-11-05
- Method: public internet research (3 web searches, official Fireworks blog cited, 2026-11-05 UTC); cross-checked against OpenRouter, BenchLM, explainx, MarkTechPost, orcarouter, llm-stats, saascity, Vals; conflicts (release 09-22 vs 09-23; TB 82.0 vs "identical quality" claim; unrelated Ember projects; Meituan misattribution) listed side by side. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Introducing Ember-1 — Fireworks AI (official, 2026-09-23)](https://fireworks.ai/blog/ember-1)
  - [OpenRouter — fireworks/ember-1 (released 2026-09-24)](https://openrouter.ai/fireworks/ember-1)
  - [BenchLM — ember-1 (provider-reported rows excluded from ranking — caveat)](https://benchlm.ai/models/ember-1)
  - [explainx — Ember-1: 71% fewer reasoning tokens at K3 price (2026-09-23)](https://www.explainx.ai/blog/fireworks-ember-1-kimi-k3-reasoning-tokens-2026)
  - [MarkTechPost — Fireworks post-trains Kimi K3 to think 40% less](https://www.marktechpost.com/2026/09/28/fireworks-ai-releases-ember-1-a-post-trained-kimi-k3-that-uses-about-40-fewer-tokens/)
  - [orcarouter — Ember-1 release (TB 2.1 82.0%; unrelated Ember-project warning)](https://www.orcarouter.ai/blog/ember-1-release)
  - [orcarouter — Beam 1.0 vs Ember-1 (structural vs trained efficiency)](https://www.orcarouter.ai/blog/beam-1-0-vs-ember-1)
  - [llm-stats — ember-1 (1,040,000 input ctx)](https://llm-stats.com/models/ember-1)
  - [saascity — Ember-1 (40% fewer tokens at same $3/$15)](https://saascity.io/blog/fireworks-ember-1-fewer-tokens-2026)
  - [Vercel AI Gateway — fireworks/ember-1 (serverless, Research Preview)](https://models.sulat.com/models/vercel-fireworksember-1-3352fc5a)
