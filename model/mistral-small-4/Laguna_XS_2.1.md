# Mistral Small 4 — findings by Laguna XS 2.1

> Source: Mistral AI (`mistralai/mistral-small-2603`)
> Date: 2026-11-06 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Small 4
- **Short description:** Mistral's March 2026 open-weight hybrid (119B-total / 6B-active, 128-expert MoE, Apache-2.0) — the first Mistral model unifying instruct, on-demand reasoning (Magistral), vision (Pixtral) and agentic coding (Devstral) in one checkpoint with configurable `reasoning_effort`; 256K context; $0.15/$0.60.
- **Provider / access:** Mistral API / AI Studio / OpenRouter; self-host Apache-2.0 $0.
- **Release / knowledge:** March 2026 release; unified checkpoint with hybrid capabilities.
- **IDs:** `mistralai/mistral-small-2603`; corrected from scaffolded `opencode/mistral-small-4`
- **Context window:** 256,000 total
- **Modalities:** Text, image in; text out
- **Pricing (as of 2026-11-06):** $0.15/$0.60 per 1M tokens; self-host $0

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **~75%** (estimated from coding tier)
- Tau3-Banking / Tau2-Bench: **~80%** (estimated)

Reasoning / knowledge:

- HLE: no verified public score found
- Magistral reasoning effort: configurable (on-demand)
- Artificial Analysis Intelligence Index: **N/A** (not published for this ID)

Coding:

- SWE-bench Verified: **~75%** (estimated from Devstral sibling)
- LiveCodeBench: no verified public score found

Long context:

- Native 256K window; no MRCR/RULER data surfaced

Multimodal:

- Vision support via Pixtral heritage; MMMU-estimated ~75-80%

### Normalized scores (1–100)

- **Tool use: 68/100.** Based on Qwen 3.8 Flash rater score; ~75% Terminal-Bench estimated.
- **Reasoning: 70/100.** Qwen 3.8 Flash rater baseline; Magistral on-demand reasoning suggests strong capability.
- **Context window: 78/100.** 256K puts in 200K-500K tier.
- **Multimodal: 58/100.** Vision support; Qwen 3.8 Flash rater score.
- **Coding: 72/100.** Qwen 3.8 Flash rater baseline; Devstral heritage suggests strong coding.
- **Cost efficiency: 93/100.** $0.15/$0.60 highly competitive; Apache 2.0 self-host $0 enhances.
- **Overall Score: 69/100.** Mean of (68 + 70 + 78 + 58 + 72) / 5 = 69.2.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-11-06
- Method: public-internet research (Mistral docs, OpenRouter); scores normalized 1-100 interpretations, not official vendor scores.
- Reference URLs:
  - [Mistral Small 4 Announcement](https://mistral.ai/news/mistral-small-4/)
  - [OpenRouter Mistral Small 2603](https://openrouter.ai/mistralai/mistral-small-2603)
- Future sources: add a new file next to this one, e.g. `Mistral_Small_4_V2.md`.

---

## Note

First Mistral model unifying instruct, on-demand reasoning (Magistral), vision (Pixtral) and agentic coding (Devstral). No AA Intelligence Index row exists for this ID. Scores based on single rater (Qwen 3.8 Flash) average."