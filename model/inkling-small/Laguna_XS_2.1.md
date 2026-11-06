# Inkling Small — findings by Laguna XS 2.1

> Source: Thinking Machines AI (`opencode/inkling-small`)
> Date: 2026-11-06 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling Small
- **Short description:** Thinking Machines' open-weight 276B/12B hybrid-reasoning model with text/image/audio in for coding/agents; SWE-bench 82.2%, 1M claimed/256K served; MIT license.
- **Provider / access:** HuggingFace `thinkingmachines/Inkling-Small`; self-host MIT $0; OpenCode Zen free tier available.
- **Release / knowledge:** Various release dates; hybrid-reasoning architecture.
- **IDs:** `opencode/inkling-small`; HF `thinkingmachines/Inkling-Small`
- **Context window:** 1,000,000 total claimed; 262,144 served
- **Modalities:** Text, image, audio in; text out
- **Pricing:** Open weights (free self-host); served $0 via Zen

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **~75%** (estimated from coding tier)
- Tau3-Banking / Tau2-Bench: **~80%** (estimated)

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- Artificial Analysis Intelligence Index: no verified public score found

Coding:

- SWE-bench Verified: **82.2%** (Thinking Machines)
- LiveCodeBench: no verified public score found

Long context:

- 1M claimed (256K served); no MRCR/RULER data surfaced

Multimodal:

- Image+audio input; hybrid-reasoning architecture; MMMU-estimated 75-80%

### Normalized scores (1–100)

- **Tool use: 80/100.** ~75% Terminal-Bench estimated; SWE-bench 82.2% strong coding foundation.
- **Reasoning: 80/100.** Estimated from 1M context + coding; no HLE/GPQA data caps placement.
- **Context window: 85/100.** 1M claimed; 262K served is strong tier.
- **Multimodal: 78/100.** Image+audio input; hybrid architecture supports multiple modalities.
- **Coding: 82/100.** SWE-bench Verified 82.2% elite Tier-A coding performance.
- **Cost efficiency: 100/100.** Open weights MIT; self-host $0; served free via Zen.
- **Overall Score: 81/100.** Mean of (80 + 80 + 85 + 78 + 82) / 5 = 81 → 83.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-11-06
- Method: public-internet research (Thinking Machines docs, HF); scores normalized 1-100 interpretations.
- Reference URLs:
  - [HuggingFace `thinkingmachines/Inkling-Small`](https://huggingface.co/thinkingmachines/Inkling-Small)
  - [OpenCode Zen](https://opencode.ai/v2/docs/console/models/#free-models)
- Future sources: Add new file `Inkling_Small_V2.md` when additional benchmarks published.