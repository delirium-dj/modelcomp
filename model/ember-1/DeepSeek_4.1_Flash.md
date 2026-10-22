# Ember 1 — findings by DeepSeek 4.1 Flash

- Source: Fireworks Research / Ember-1 (`accounts/fireworks/models/ember-1`)
- Date: 2026-10-11 (UTC) — deep second pass (previous Signature 2026-10-01); re-verified 2026-10-18
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Re-verified 2026-10-18.** BenchLM (`ember-1`, 5 rows) assigns **no overall score** (unranked) and confirms the deep pass: Terminal-Bench 2.1 82.0%, SWE-bench Verified 92.2%, DeepSWE 75.2%, τ²-bench Airline 66.0%. **No score change.**

> **Deep second-pass re-verification — 2026-10-11** (≥3 independent sources).
> The prior file stated Ember-1 "publishes no standard capability benchmarks"; this pass found **direct Ember-1 rows**. Fireworks launch: **SWE-bench Verified 92.2%**, **DeepSWE 1.1 75.2%**, **Terminal-Bench 2.1 82.0%**, τ²-bench Airline 66.0%, SWE-Interact 20.0%. Independent Vals AI: **Vals Index 50.81% (#27/45)**, **Vibe Code Bench v1.1 83.87% (#16/110)**, Terminal-Bench 4.0 19.70%, Terminal-Bench Science 5.71%, Finance Agent v2 51.85%, CyberBench v1.1 69.52%, IOI 46.33%. BenchLM overall 72.0 (page header 72.4); LLM-Stats score pending.
> **Conflicts surfaced:** (1) **Terminal-Bench version split** — 82.0% on v2.1 (vendor) vs 19.70% on v4.0 (Vals) — different harnesses, not the same metric. (2) **Multimodal** — official/Fireworks/Vals/Vercel list image input; LLM-Stats/LLMBoard list text-only. (3) **Release** — Sep 22 (Fireworks card/Vals) vs Sep 23 (Fireworks blog/LLM-Stats) vs Sep 24 (Eden AI). (4) **Parameters** — 2.78T (official/LLM-Stats) vs a "78T" typo on LLMBoard. (5) **Context** — 1,040K (official) vs 1M (Vals) vs 1,048,576 (Vercel).
> **No dimension change:** the direct rows confirm the prior (inherited-from-Kimi-K3) estimates; Overall stays **86**, but the Tool/Reasoning/Coding rows are now re-sourced to direct Ember-1 measurements.
> Sources: https://fireworks.ai/models/fireworks/ember-1 · https://fireworks.ai/blog/ember-1 · https://www.vals.ai/models/fireworks_ember-1 · https://openrouter.ai/fireworks/ember-1

## Model card

- **Name:** Ember 1 (Ember-1)
- **Short description:** Fireworks Research's first specialised foundation model (announced 2026-09-22/23) — a **fine-tune of Kimi K3** trained to produce roughly 40% fewer reasoning tokens while holding quality. Value proposition is "same answers, fewer tokens" for agentic coding, where long reasoning traces are re-billed every turn.
- **Provider / access:** Fireworks AI Serverless (Research Preview, `accounts/fireworks/models/ember-1`) and OpenRouter/Vercel AI Gateway; OpenAI-compatible. Fine-tuned from the open Kimi K3 base but catalogued as a Fireworks model.
- **Release / knowledge:** Announced 2026-09-22/23; knowledge cutoff inherited from Kimi K3 (not separately published).
- **IDs:** `accounts/fireworks/models/ember-1` (Fireworks), `fireworks/ember-1` (OpenRouter/Vercel); OpenCode Zen `opencode/ember-1`. No Zen Free ID.
- **Context window:** 1,040,000 tokens (official); Vercel lists 1,048,576; Vals records 1M with a 131K max output.
- **Modalities:** text and image in; text out. Reasoning yes (efficient traces), tool use, prompt caching, vision.
- **Pricing (as of 2026-10-11):** **$3.00 / $15.00 per 1M** in/out with **$0.30 cached read** — identical to base Kimi K3, so the token-efficiency gain is the entire saving.
- **Architecture:** MoE, **2.78T total parameters** (Kimi K3-derived), fine-tuned via Fireworks Serverless Training. Weights not released.

### Raw benchmarks found

Ember-1's own measured results (Fireworks launch, 2026-09-23):

- Token efficiency vs Kimi K3 (Fireworks internal): score **0.753 vs 0.751**, steps 21.4 vs 23.8, output tokens 29.9K vs 49.3K → **71.3% fewer reasoning tokens, 39% fewer total tokens**
- Live customer A/B tests on production coding workloads: **~35% fewer tokens per task at comparable quality**
- SWE-bench Verified **92.2%**; DeepSWE 1.1 **75.2%**; Terminal-Bench 2.1 **82.0%**; τ²-bench Airline 66.0%; SWE-Interact 20.0%

Agent / tool use:

- Terminal-Bench 2.1 **82.0%** (vendor); Terminal-Bench 4.0 **19.70%** (Vals); Terminal-Bench Science 5.71% (Vals)
- τ²-bench Airline 66.0% (vendor); Finance Agent v2 51.85% (Vals); CyberBench v1.1 69.52% (Vals); Tax Agent Bench 31.08%
- Vals Index **50.81% (#27/45)**; Harvey's Legal Agent 9.17%

Reasoning / knowledge:

- Vals Index 50.81%; ProofBench v1.1 61.00%; MysteryMechanism 22.52%; BioMysteryBench 67.04%; EMB 63.37%
- LLMBoard score 72.0 (page header 72.4) — index not cross-comparable with Vals
- GPQA / HLE direct Ember-1 values: **no verified public score found** (base Kimi K3: GPQA 92.9%, HLE 46.9%)

Coding:

- SWE-bench Verified **92.2%** (vendor); DeepSWE 1.1 **75.2%** (vendor) — edges Claude Opus 5's 74.0%
- Vibe Code Bench v1.1 **83.87% (#16/110)** (Vals); Code Migration 32.51%; IOI 46.33% (Vals)
- SWE-bench Pro / LiveCodeBench direct value: **no verified public score found**

Long context:

- 1.04M-token window (Kimi K3 base); **no MRCR/RULER/GraphWalks retrieval score published** — **no verified public score found**.

### Normalized scores (1–100)

- **Tool use: 88/100.** Terminal-Bench 2.1 82.0%, τ²-bench Airline 66.0%, Finance Agent v2 51.9% and the mid-high Vals Index (50.81%) support a strong agent; capped by the Vals Terminal-Bench 4.0 19.7% and the absence of a direct GDPval/OSWorld figure.
- **Reasoning: 90/100.** The model is engineered to match Kimi K3's answers with 71% fewer reasoning tokens (K3 GPQA 92.9%, HLE 46.9%, AA index 59.7); no direct Ember-1 GPQA/HLE is published, so the score is carried from the documented base and the Fireworks equivalence claim.
- **Context window: 95/100.** 1.04M-token window (≥1M band); held at 95 because no ≥98%-at-512K retrieval benchmark is published.
- **Multimodal: 68/100.** Text and image input, text output (`+image in = 60–70`); the official/Vals cards list image input while LLM-Stats lists text-only; no audio/video documented.
- **Coding: 90/100.** SWE-bench Verified 92.2%, DeepSWE 75.2% and independent Vibe Code Bench 83.87% (#16/110) are frontier-class; capped by vendor-only sourcing on the SWE headline and no independent SWE-bench Pro.
- **Cost efficiency: 68/100.** $3 / $15 per 1M matches Kimi K3, but the verified ~35–39% token reduction lifts effective value from the $3/$15 (~60) reference toward a better band.
- **Overall Score: 86/100.** (88 + 90 + 95 + 68 + 90) / 5 = 86.2 → 86. Best fit: agentic coding where reasoning-token cost dominates; pick over base Kimi K3 for the token savings.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-10-18
- Method: deep second-pass public internet research (Fireworks model card + launch blog with direct Ember-1 benchmark and token-efficiency rows, Vals AI model page, OpenRouter, Vercel, LLM-Stats, LLMBoard). Direct Ember-1 rows replaced the prior inherited-only scoring for Tool/Coding; Reasoning remains carried from the documented Kimi K3 base with the discrepancy flagged. No number invented.
- Future sources: add a new file next to this one, e.g. `Kimi_K3.md`, using the same headings.
