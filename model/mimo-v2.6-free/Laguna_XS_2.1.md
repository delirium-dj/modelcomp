# MiMo V2.6 Free — findings by Laguna XS 2.1

> Source: Xiaomi (`opencode/mimo-v2.6-free`)
> Date: 2026-11-06 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 Free
- **Short description:** Xiaomi's MIT 309B/15B-active Flash MoE via OpenCode Zen's $0 free tier (200K/32K cap) for agentic coding; SWE-bench Verified 92.0%; omni-modal (text/image/video/audio).
- **Provider / access:** OpenCode Zen free tier (`opencode/mimo-v2.6-free`); Xiaomi Mimo platform; Hugging Face `XiaomiMiMo/MiMo-V2.6-Flash`.
- **Release / knowledge:** May 2026 release; knowledge cutoff April 2026.
- **IDs:** `opencode/mimo-v2.6-free`; HF search: `mimo-v2.6-free`
- **Context window:** 1,048,576 total (1M); 131,072 max output (Zen cap: 200K/32K).
- **Modalities:** Text, image, video, audio in; text out; omni-modal support.
- **Pricing (as of 2026-11-06):** Free Zen tier $0 in/out; paid fallback $0.14/$0.28 per 1M tokens.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **~85%** (estimated from SWE-bench 92% + omni-modal focus)
- Tau3-Banking / Tau2-Bench: **~85%** (estimated from V2.5 Pro performance)
- GDPval-AA: no verified public score found
- MCP-Atlas: no verified public score found
- Toolathon: no verified public score found
- Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: **~97%** (estimated from 1M native window + agentic training)
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: **~55** (estimated from tier)

Coding:

- SWE-bench Verified: **92.0%** (Xiaomi/MiMo claim)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- DeepSWE: no verified public score found

Long context:

- Native 1M window; no RULER/MRCR publicly surfaced

Multimodal:

- Omni-modal (text/image/video/audio); WebVoyager-type benchmarks estimated

### Normalized scores (1–100)

- **Tool use: 89/100.** SWE-bench 92% and Terminal-Bench ~85% estimated; 1M context enables complex workflows.
- **Reasoning: 89/100.** 1M window + agentic training; estimated from V2.5 Pro tier; no HLE/GPQA data caps higher placement.
- **Context window: 95/100.** Native 1M tokens (948,576) places in top tier; 131K max output structural limit.
- **Multimodal: 92/100.** Text+image+video+audio; omni-modal capability rare at this tier.
- **Coding: 90/100.** SWE-bench Verified 92% anchors elite coding tier; LiveCodeBench/DeepSWE unavailable for higher cap.
- **Cost efficiency: 100/100.** Free Zen tier $0; paid fallback $0.14/$0.28 is highly competitive.
- **Overall Score: 91/100.** Mean of (89 + 89 + 95 + 92 + 90) / 5 = 90.8 → 91.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-11-06
- Method: public-internet research (Xiaomi docs, Zen docs); scores normalized 1-100 interpretations, not official vendor scores.
- Reference URLs:
  - [Xiaomi Mimo V2.6](https://mimo.xiaomi.com/mimo-v2-6-flash)
  - [OpenCode Zen Free Models](https://opencode.ai/v2/docs/console/models/#free-models)
- Future sources: add a new file next to this one, e.g. `MiMo_V2_6_Free_V2.md`.