# Ember 1 — findings by Muse Glimmer 30B

- Source: Fireworks (`fireworks/ember-1`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ember 1
- **Short description:** Fireworks Research Kimi K3 fine-tune for agentic coding with ~40% fewer tokens.
- **Provider / access:** Fireworks Serverless `accounts/fireworks/models/ember-1`; OpenCode Zen `opencode/ember-1`. No free tier.
- **Release / knowledge:** Created 2026-09-22; public launch 2026-09-23.
- **IDs:** `opencode/ember-1` / `fireworks/ember-1`
- **Context window:** 1,040,000 total; 131,072 max output
- **Modalities:** Text + image in; text out; function calling; reasoning; tool calls
- **Pricing (as of 2026-11-11):** $3.00 per 1M input / $15.00 per 1M output; cached $0.30 per 1M
- **Architecture:** MoE ~2.78T total parameters; based on Kimi K3

### Raw benchmarks found

Agent / tool use:
- Terminal-Bench 2.1: **82.0%** — Fireworks blog 2026-09-23
- Tau-2 Bench Airline: **66%** — Fireworks blog 2026-09-23
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval: no verified public score found

Reasoning / knowledge:
- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: no verified public score found

Coding:
- SWE-bench Verified: **92.2%** — Fireworks blog 2026-09-23
- DeepSWE 1.1: **75.2%** — Fireworks blog 2026-09-23
- SWE-Interact: **20.0%** — Fireworks blog 2026-09-23
- LiveCodeBench: no verified public score found
- SciCode: no verified public score found

Long context:
- MRCR / RULER: no long-context retrieval reported

### Normalized scores (1–100)

- **Tool use: 85/100.** Terminal-Bench 2.1 82.0% just below frontier ~88%+; capped by lack of Tau3/GDPval independent verification.
- **Reasoning: 50/100.** No verified public GPQA/HLE/MLCR/CritPt scores; inference capped by evidence gap.
- **Context window: 95/100.** 1.04M total / 131K out verified by Fireworks docs.
- **Multimodal: 65/100.** Image input supported, text output only; no audio/video.
- **Coding: 92/100.** SWE-bench Verified 92.2% and DeepSWE 1.1 75.2% meet frontier references.
- **Cost efficiency: 60/100.** $3/$15 per 1M, no free tier.
- **Overall Score: 77/100.** Mean of Tool 85, Reasoning 50, Context 95, Multimodal 65, Coding 92 = 77.4 → 77.

---

## Signature

- Provided by: **Muse Glimmer 30B (muse-glimmer-30b)** — 2026-11-11
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Fireworks — Introducing Ember 1](https://www.fireworks.ai/blog/ember-1)
  - [Fireworks Model Catalog — Ember 1](https://www.fireworks.ai/models/accounts/fireworks/models/ember-1)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

## Archived research pass — `Muse_Glimmer_30B.md.excluded` (merged 2026-11-12 — own-twin retirement)

> Merged from this folder's `Muse_Glimmer_30B.md.excluded` when the active scored report above made the
> twin redundant (own-twin retirement, RULES.md § Research rules). The model card, raw benchmarks,
> normalized scores and signature above remain authoritative — the archived model card was folded
> into the active model card above; the content below is preserved research history, not judged data.

## Ember 1 — findings by Muse Glimmer 30B

- Source: Fireworks / Ember-1
- Archived date: 2026-10-20 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

> Archived model card omitted — own-twin consolidation 2026-11-12.
> Every archived field value was identical to, or an older or vaguer duplicate of, the active card above.

## Raw benchmarks found

Agent / tool use:
- Terminal-Bench 2.1: 82.0% (Fireworks blog 2026-09-23)
- Tau-2 Bench Airline: 66% (Fireworks blog 2026-09-23)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval: no verified public score found

Reasoning / knowledge:
- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: no verified public score found

Coding:
- SWE-bench Verified: 92.2% (Fireworks blog 2026-09-23)
- DeepSWE 1.1: 75.2% (Fireworks blog 2026-09-23)
- SWE-Interact: 20.0% (Fireworks blog 2026-09-23)
- LiveCodeBench: no verified public score found
- SciCode: no verified public score found

Long context:
- MRCR / RULER: no long-context retrieval reported

> Archived normalized scores omitted — superseded by the active report above (see provenance note for the archived Overall).
