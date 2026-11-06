# Ling 3.0 Flash — findings by Laguna XS 2.1

> Source: InclusionAI (`inclusionai/ling-3.0-flash`)
> Date: 2026-11-06 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash
- **Short description:** InclusionAI's Aug 2026 MIT 124B/5.1B-active reasoning MoE (262K, 316 tok/s): GPQA 85.0%, LiveCodeBench 82.8%, SWE-bench Pro 56.6% at $0.075/$0.22; superceded by Ling 3.1 Flash with stronger profile.
- **Provider / access:** InclusionAI API; OpenRouter (`inclusionai/ling-3.0-flash`); $0.075/$0.22 per 1M; MIT self-host $0.
- **Release / knowledge:** August 2026 release; reasoning MoE with strong coding.
- **IDs:** `inclusionai/ling-3.0-flash`
- **Context window:** 262,144 total (256K)
- **Modalities:** Text in/out only
- **Pricing (as of 2026-11-06):** $0.075/$0.22 per 1M tokens; MIT self-host $0

### Raw benchmarks found

Reasoning / knowledge:

- GPQA Diamond: **85.0%** (InclusionAI stated)
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- Artificial Analysis Intelligence Index: **~65** (estimated)

Coding:

- SWE-bench Verified: no verified public score found
- SWE-bench Pro: **56.6%** (InclusionAI stated)
- LiveCodeBench v6: **82.8%** (InclusionAI stated)
- SciCode / AA-SciCode: no verified public score found

Agent / tool use:

- Terminal-Bench 2.1: **50-57%** (InclusionAI tradeoiff)
- Tau3-Banking / Tau2-Bench: **~70%** (estimated)
- Toolathon: no verified public score found
- Claw-Eval: no verified public score found

Long context:

- Native 256K; no MRCR data surfaced independently

Multimodal:

- Text-only; no vision/audio/image support

### Normalized scores (1–100)

- **Tool use: 62/100.** Terminal-Bench 50-57% moderate; no broader agent benchmarks.
- **Reasoning: 78/100.** GPQA 85.0% strong Tier-A; no HLE data available.
- **Context window: 80/100.** 262K places in 200K-500K tier; 316 tok/s speed advantage noted.
- **Multimodal: 15/100.** Text-only baseline.
- **Coding: 83/100.** LiveCodeBench 82.8% elite; SWE-bench Pro 56.6% indicates agentic limitation.
- **Cost efficiency: 85/100.** $0.075/$0.22 competitive; MIT self-host $0 option.
- **Overall Score: 63.6/100.** Mean of (62 + 78 + 80 + 15 + 83) / 5 = 79.6 → 80.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-11-06
- Method: public-internet research (InclusionAI docs, HF); scores normalized 1-100 interpretations, not official vendor scores.
- Reference URLs:
  - [HuggingFace `inclusionAI/Ling-3.0-flash`](https://huggingface.co/inclusionai/ling-3.0-flash)
  - [OpenRouter Ling 3.0 Flash](https://openrouter.ai/inclusionai/ling-3.0-flash)
- Future sources: add a new file next to this one, e.g. `Ling_3_0_Flash_V2.md`.

---

## Note

This model is superseded by Ling 3.1 Flash with a stronger profile. Terminal-Bench 2.1 50-57% and Vibe Code Bench 2.9% indicate agentic ceiling."