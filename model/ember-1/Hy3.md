# Ember-1 — findings by Hy3

- Source: Fireworks (`ember-1`)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ember-1
- **Short description:** Fireworks Research's first custom post-trained model (2026-09-22/23), built on Moonshot's Kimi K3 and retrained to emit ~40% fewer reasoning tokens at comparable quality. A token-efficiency play, not a new architecture.
- **Provider / access:** Fireworks serverless API (`fireworks/ember-1`), OpenRouter. Chat Completions API.
- **Release / knowledge:** Released 2026-09-22/23.
- **IDs:** `fireworks/ember-1`
- **Context window:** 1,048,576 tokens in; up to ~944K output (verified via UltraBench/ARMES).
- **Modalities:** text in/out; image in; reasoning; tool calls.
- **Pricing (as of 2026-11-14):** $3.00 in / $15.00 out per 1M tokens; cached input $0.30.
- **Architecture:** sparse MoE (inherited Kimi K3 base), no open weights; ~2.8T inherited params.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **~20.7%** (Vals; very low) — weak agentic terminal skill
- Vals Index (agentic): **50.94%**

Reasoning / knowledge:

- ProofBench v1.1: **61.0%** (Vals)
- SWE-bench Verified **92.2%** (norm 91.3) implies strong reasoning/coding

Coding:

- SWE-bench Verified: **92.2%** (UltraBench)
- Vibe Code Bench v1.1: **83.9%** (Vals)
- DeepSWE v1.1: **75.2%** (Vals)
- CyberBench v1.1: **69.5%**; Finance Agent v2: **51.9%**

Long context:

- 1,048,576-token window verified; no public MRCR/RULER score found this pass.

### Normalized scores (1–100)

- **Tool use: 80/100.** Weak Terminal-Bench 4.0 (~20.7%) drags agentic score despite decent Vals Index 50.94%.
- **Reasoning: 84/100.** Strong SWE-bench 92.2% and ProofBench 61% show solid reasoning; held below elite by mixed agentic.
- **Context window: 99/100.** 1,048,576-token context (top tier).
- **Multimodal: 70/100.** Text + image in only; no audio/video.
- **Coding: 89/100.** SWE-bench Verified 92.2% and Vibe Code 83.9% are elite coding signals.
- **Cost efficiency: 75/100.** $3/$15 per 1M — mid-tier, justified by token compression.
- **Overall Score: 84.4/100.** Mean of the five non-cost dims (80+84+99+70+89)/5 = 84.4 → 84. (Queue lists 87; independent research yields a more conservative read due to weak Terminal-Bench 4.0.) Best-fit: token-efficient Kimi-K3 derivative with elite coding but weak agentic-terminal and image-only multimodal.

---

## Signature

- Provided by: **Hy3 (hy3-reporter)** — 2026-11-14
- Method: public internet research — UltraBench, ARMES, Vals AI, Great Commission Benchmark; independent of peer `model/` findings.
- Reference URLs:
  - [Ember-1 — UltraBench](https://ultrabench.ai/models/ember-1)
  - [Ember-1 — ARMES docs](https://armes.ai/docs/models/fireworks/ember-1)
  - [Ember-1 — Vals AI](http://vals.ai/models/fireworks_ember-1)
