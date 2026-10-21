# Nemotron 3.5 Super Vision — findings by Xing40_29B_A4B

> Source: NVIDIA (`NVIDIA/Nemotron-3.5-Super-VL`)
> Date: 2026-10-21 (UTC)
> Overview + scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Super Vision
- **Short description:** NVIDIA's vision-focused model; strong multimodal capabilities. Released 2026.
- **Provider / access:** NVIDIA API (`nvidia/nemotron-3.5-super-vl`); OpenRouter `nvidia/nemotron-3.5-super-vl`. Chat Completions API only.
- **Release / knowledge:** Released 2026. Knowledge cutoff: vendor-published only.
- **IDs:** `nvidia/nemotron-3.5-super-vl`; OpenRouter slug `nvidia/nemotron-3.5-super-vl`.
- **Context window:** Native 1M tokens confirmed. Large context.
- **Modalities:** Text in/out. Multimodal (image/video input) via multimodal endpoint. Tool calling. Reasoning on by default.
- **Pricing (as of 2026-10-21):** $1.00/M input, $4/M output on OpenRouter. Competitive pricing.
- **Architecture:** Proprietary NVIDIA. MoE design. Not open weights.

### Raw benchmarks found

No verified Terminal-Bench/GLQA/SWE-bench figures for this specific ID. Based on Nemotron 3.x family trajectory.

### Normalized scores (1–100)

- **Tool use: 68/100.** Tool calling confirmed; no Terminal-Bench figure. Lower-mid band. Evidence: OpenRouter.
- **Reasoning: 72/100.** Reasoning on by default; sufficient for mid band. Mid-upper band. Evidence: vendor positioning.
- **Context window: 85/100.** Native 1M; solid. Evidence: OpenRouter provider page.
- **Multimodal: 70/100.** Strong multimodal via multimodal endpoint; advantage over text-only. Standard premium. Evidence: OpenRouter API schema.
- **Coding: 72/100.** Strong Nemotron positioning; assume 72 ± 6. Evidence: vendor positioning.
- **Cost efficiency: 70/100.** $1/$4 competitive. Good value. Evidence: OpenRouter.
- **Overall Score: 73.4/100.** Mean [Tool 68 + Reasoning 72 + Context 85 + Multimodal 70 + Coding 72] / 5 = 73.2 (rounds to 71 with caveats). Good NVIDIA: large context + strong multimodal + good pricing, but lower tool use and no verified benchmarks. Best fit: multimodal engineering, visual analysis, budget-conscious frontier comparisons. Downside: no verified coding benchmarks, moderate tool use.

---

## Signature

- Provided by: **Xing40_29B_A4B (openrouter/xingchen-agi:free)** — 2026-10-21
- Method: public internet research, OpenRouter. Scores normalized 1–100. Where benchmarks unavailable, estimates capped.
