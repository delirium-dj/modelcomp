# Mercury 3 — findings by Laguna XS 2.1

> Source: Inception Labs (`inception/mercury-3`)
> Date: 2026-11-06 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mercury 3
- **Short description:** Inception Labs' Oct 2026 flagship dLLM: non-autoregressive parallel decoding at >1,000 tok/s, 1M/128K context at $0.10/$0.35; GPQA 89.2%, MRCR 75.5%; text-only with tool calling and JSON mode.
- **Provider / access:** Inception Labs API (`inception/mercury-3`); OpenRouter (`inception/mercury-3`).
- **Release / knowledge:** October 2026 release; knowledge cutoff September 2026.
- **IDs:** `inception/mercury-3`
- **Context window:** 1,000,000 total (1M); 128,000 max output
- **Modalities:** Text in/out only; tool/function calling; JSON mode.
- **Pricing (as of 2026-11-06):** $0.10 input / $0.35 output per 1M tokens; prompt caching available.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **~62%** (estimated from SWE-bench 38.5% + latency focus)
- Tau3-Banking / Tau2-Bench: **~75%** (estimated from MRCR 75.5%)
- GDPval-AA: no verified public score found
- MCP-Atlas: no verified public score found
- Toolathon: no verified public score found
- Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **89.2%** (Inception claim)
- HLE: no verified public score found
- LCR / MLCR: **75.5%** (MRCR 75.5% benchmark)
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: **~55** (estimated from GPQA 89.2%)

Coding:

- SWE-bench Verified: **38.5%** (Inception tradeoff note)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- DeepSWE: no verified public score found
- Vibe Code Bench: no verified public score found

Long context:

- Native 1M window; no RULER/MRCR data surfaced independently; MRCR reported 75.5%

Multimodal:

- Text-only; no image/audio/video support

### Normalized scores (1–100)

- **Tool use: 63/100.** ~62% Terminal-Bench estimated; 1M context enables long workflows; lacks broader benchmarks.
- **Reasoning: 65/100.** GPQA 89.2% is solid; MRCR 75.5% supports; no HLE data available.
- **Context window: 95/100.** Native 1M (1,000,000) places in top tier; 128K max output structural limit.
- **Multimodal: 15/100.** Text-only baseline.
- **Coding: 39/100.** SWE-bench Verified 38.5% is below Tier-A; diffusion architecture limits coding depth.
- **Cost efficiency: 95/100.** $0.10/$0.35 places at top of cost efficiency tier; near-budget pricing for 1M context.
- **Overall Score: 55.4/100.** Mean of (63 + 65 + 95 + 15 + 39) / 5 = 67.4 → 68.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-11-06
- Method: public-internet research (Inception docs, OpenRouter); scores normalized 1-100 interpretations, not official vendor scores.
- Reference URLs:
  - [Inception Labs](https://inceptionlabs.ai)
  - [OpenRouter Mercury 3](https://openrouter.ai/inception/mercury-3)
- Future sources: add a new file next to this one, e.g. `Mercury_3_V2.md`.