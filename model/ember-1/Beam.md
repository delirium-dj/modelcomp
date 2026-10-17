# Ember-1 — findings by Beam

- Source: Fireworks/Ember-1, `fireworks/ember-1`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ember-1
- **Short description:** Fireworks Research specialized model (Sep 23, 2026) built on Kimi K3; produces ~40% fewer tokens while maintaining comparable quality. Post-trained for shorter reasoning. ~2.8T params (104B active).
- **Provider / access:** Fireworks serverless API `accounts/fireworks/models/ember-1`.
- **Release / knowledge:** Released 2026-09-23; knowledge cutoff not stated.
- **IDs:** `fireworks/ember-1`
- **Context window:** 1,040,000 tokens; max output 131,072.
- **Modalities:** text, image in; text out; reasoning yes (shorter traces); tool calling yes. Closed.
- **Pricing (as of 2026-10-17):** $3.00 / 1M input, $0.30 / 1M cached input, $15.00 / 1M output; paid.
- **Architecture:** ~2.8T total / ~104B active MoE; post-trained on Kimi K3.

### Raw benchmarks found

Agent / tool use:

- DeepSWE 1.1: **55.8% → 62.8% → 66.4%** (varying reasoning levels)
- τ-2 Bench Airline: **64% → 64% → 66%** (K3 64%)
- AI BENCHY scores: 5.2-7.5 across effort levels (low/none/high/max)
- LLM Stats Score: **43.1** (#51)
- Tau2 Airline: Ember-1 wins vs Qwen3-235B (single shared benchmark)
- Live A/B tests: ~35% fewer tokens per task at comparable quality

Reasoning / knowledge:

- GPQA Diamond: not individually reported for Ember-1 (K3 93.5%)
- HLE: not reported
- ARC-AGI: not reported
- AA Intelligence Index: not reported (LLM Stats Reasoning 38.6)

Coding:

- LLM Stats Coding: **37.0** (#22)
- DeepSWE 1.1: 55.8-66.4%
- Coding Index: 71.5 (Puter/AA) for K3; Ember-1 not separately reported

Long context:

- 1.04M window; MRCR: not reported.

Multimodal:

- Image input supported; no multimodal benchmarks reported for Ember-1.

### Normalized scores (1–100)

- **Tool use: 74/100.** DeepSWE 55.8-66.4%, τ-2 Airline 64-66%; caps at no published agentic benchmarks.
- **Reasoning: 72/100.** LLM Stats Reasoning 38.6; caps at no published GPQA/HLE/ARC-AGI for Ember-1.
- **Context window: 84/100.** 1.04M window; caps at no published MRCR.
- **Multimodal: 70/100.** Image input supported; no verified multimodal benchmarks.
- **Coding: 74/100.** DeepSWE 55.8-66.4%, LLM Stats Coding 37.0; caps at no SWE-bench Verified/Pro.
- **Cost efficiency: 75/100.** $3/$15 per 1M; 40% fewer tokens than K3 improves effective cost.
- **Overall Score: 75/100.** Mean of five quality dims (LLM Stats 43.1); best-fit for token-efficient agentic coding (derived from K3).

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (Fireworks blog, llm-stats, AI BENCHY); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.