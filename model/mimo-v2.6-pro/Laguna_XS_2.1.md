# MiMo V2.6 Pro — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-01 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 Pro
- **Short description:** Xiaomi's flagship MIT open-weights omnimodal MoE model (1.02T total / 42B active), released September 2026, positioned as the #1 open-weights model on Artificial Analysis Intelligence Index.
- **Provider / access:** Xiaomi MiMo API (`xiaomi/mimo-v2.6-pro`); OpenRouter; Chat Completions-compatible API.
- **Release / knowledge:** Released September 2026; knowledge cutoff not publicly disclosed.
- **IDs:** `xiaomi/mimo-v2.6-pro` (no Free-tier ID on OpenCode Zen).
- **Context window:** 1,048,576 tokens (1M) input / 128,000 max output.
- **Modalities:** Text, image, video, audio in; text out; native tool calling; JSON mode.
- **Pricing (as of 2026-10-01):** $0.435 input / $0.87 output per 1M tokens; cached input $0.0036. Paid-tier only.
- **Architecture:** Open-weights sparse MoE; 1.02T total / 42B active per token; MIT license.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **87.6%** (Xiaomi harness; Flash sibling score)
- OSWorld-Verified: **80.8%** (llm-stats)
- Toolathlon-Verified: **73.6%** (llm-stats)
- GDPval-AA v2.1: **55.0%** (Artificial Analysis via OpenRouter)
- AI Intelligence Index: **46** (#1 open-weights model, AA v4.3.2)

Reasoning / knowledge:

- HLE: **35.1%** (Artificial Analysis)
- AA-LCR v1.1: **74.3%** (Artificial Analysis)
- CritPt: **12.0%** (Artificial Analysis)
- AA-Omniscience Accuracy: **27.0%** / Hallucination: **45.6%**

Coding:

- SciCode: **51.3%** (Artificial Analysis)
- DeepSWE, SWE-bench Verified, LiveCodeBench: **no verified public scores found** (correlated to Flash sibling data)

Multimodal:

- Native omnimodal (text/image/video/audio); AI Index validates text+image input.

Long context:

- 1M window documented; no public MRCR/RULER retrieval benchmarks found.

### Normalized scores (1-100)

Derived from benchmarks above using methodology in `model-comparison.md`:

- **Tool use: 85/100.** Terminal-Bench 87.6% just under frontier refs; OSWorld 80.8% and Toolathlon 73.6% solid; GDPval 55% moderate; capped by missing Tau3/Claw-Eval numbers.
- **Reasoning: 72/100.** HLE 35.1% approaches 40%+ tier; AA-LCR 74.3% above mid-tier; AA Index 46 #1 open-weights indicates strong reasoning; CritPt 12% and missing GPQA cap it.
- **Context window: 95/100.** Full 1M verified; no retrieval benchmarks means not full 100; stable implementation.
- **Multimodal: 92/100.** Native audio/video input + text output; omnimodal capability places at 90-100 tier; independent validation of text+image from AA.
- **Coding: 82/100.** Flash sibling TB 87.6% and SciCode 51.3% show strong coding; missing verified SWE-V/LiveCode/DeepSWE caps the top tier.
- **Cost efficiency: 97/100.** $0.435/$0.87 competitive pricing with 98% cache discount; excellent value for open-weights model.
- **Overall Score: 85/100.** Mean of (85 + 72 + 95 + 92 + 82) / 5 = 85.2 → 85. #1 open-weights model on AA Intelligence Index with strong multimodal and coding capabilities.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-01
- Method: public-internet research (Xiaomi MiMo technical report, llm-stats, Artificial Analysis, sibling Flash benchmark data); scores normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.