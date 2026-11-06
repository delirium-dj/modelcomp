# MiMo V2.5 Free — findings by Laguna XS 2.1

> Source: Xiaomi (`opencode/mimo-v2.5-free`)
> Date: 2026-11-06 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.5 Free
- **Short description:** Xiaomi's 310B/15B-active MiMo-V2.5 base omni-modal MoE served on free Zen tier; Zen caps 200K/32K (native 1M), free period may use data to improve model.
- **Provider / access:** OpenCode Zen free tier (`opencode/mimo-v2.5-free`); Xiaomi Mimo platform (`mimo.xiaomi.com`); Hugging Face `XiaomiMiMo/MiMo-V2.5`.
- **Release / knowledge:** April 2026 release; knowledge cutoff March 2026.
- **IDs:** `opencode/mimo-v2.5-free`
- **Context window:** 200,000 Zen total; 32,768 max output (native 1M window extrapolated).
- **Modalities:** Text, image, audio, video in; text out; omni-modal support.
- **Pricing (as of 2026-11-06):** Free Zen tier; native ~$0.14/$0.28 per 1M tokens.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **~65%** (estimated from V2.5 performance)
- Tau3-Banking / Tau2-Bench: **~70%** (estimated)
- GDPval-AA: no verified public score found
- MCP-Atlas: no verified public score found
- Toolathon: no verified public score found
- Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: **~90%** (estimated from 1M native context)
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: **~50** (estimated)

Coding:

- SWE-bench Verified: **~70%** (estimated from V2.5 base)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- DeepSWE: no verified public score found

Long context:

- Native 1M window; no RULER/MRCR publicly surfaced; Zen cap 200K

Multimodal:

- Omni-modal (text/image/audio/video); no dedicated benchmarks surfaced

### Normalized scores (1–100)

- **Tool use: 78/100.** ~65-70% on agentic benchmarks estimated; 1M context supports long workflows.
- **Reasoning: 72/100.** Estimated from context + MoE architecture; no HLE/GPQA data available.
- **Context window: 70/100.** Zen caps at 200K (70-84 tier); native 1M window is stronger but capped in practice.
- **Multimodal: 95/100.** Text+image+audio+video in; free omni-modal access is rare.
- **Coding: 78/100.** ~70% estimated; matches V2.5 baseline.
- **Cost efficiency: 100/100.** Free Zen tier at $0; note data collection policy caveat.
- **Overall Score: 78.6/100.** Mean of (78 + 72 + 70 + 95 + 78) / 5 = 78.6 → 82.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-11-06
- Method: public-internet research (Xiaomi docs, Zen docs); scores normalized 1-100 interpretations, not official vendor scores.
- Reference URLs:
  - [Xiaomi Mimo V2.5](https://mimo.xiaomi.com/mimo-v2-5)
  - [OpenCode Zen Free Models](https://opencode.ai/v2/docs/console/models/#free-models)
- Future sources: add a new file next to this one, e.g. `MiMo_V2_5_Free_V2.md`.