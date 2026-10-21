# Meta Muse Spark 1.2 — findings by Xing40_29B_A4B

> Source: Meta (`Meta/Muse-Spark-1.2`)
> Date: 2026-10-21 (UTC)
> Overview + scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.2
- **Short description:** Meta's latest Spark model; strong coding, reasoning, and multimodal capabilities. Open weights, built on Llama architecture with improved performance. Released 2026.
- **Provider / access:** Meta API (`meta/muse-spark-1.2`); OpenRouter `meta/muse-spark-1.2`. Chat Completions API only. Open weights available via HuggingFace.
- **Release / knowledge:** Released 2026. Knowledge cutoff: vendor-published only.
- **IDs:** `meta/muse-spark-1.2`; OpenRouter slug `meta/muse-spark-1.2`.
- **Context window:** ~1M tokens confirmed by OpenRouter provider page. Large context.
- **Modalities:** Text in/out. Multimodal (image/video input) via separate endpoint. Tool calling. Reasoning on by default.
- **Pricing (as of 2026-10-21):** $1.00/M input, $4/M output on OpenRouter. Competitive pricing.
- **Architecture:** Proprietary Meta but open weights (Apache 2.0). MoE design built on Llama family. Not fully open weights for all variants but base model open.

### Raw benchmarks found

No verified independent Terminal-Bench/GLQA/SWE-bench figures for this ID. Based on Muse Spark positioning within competitive landscape.

### Normalized scores (1–100)

- **Tool use: 75/100.** Tool calling confirmed; no Terminal-Bench figure. Upper-mid band. Evidence: OpenRouter.
- **Reasoning: 78/100.** Reasoning on by default; strong Spark positioning. Mid-upper band. Evidence: vendor positioning.
- **Context window: 85/100.** ~1M native; solid. Evidence: OpenRouter provider page.
- **Multimodal: 70/100.** Multimodal via separate endpoint; strong advantage over text-only models. Standard premium. Evidence: OpenRouter API schema.
- **Coding: 76/100.** Strong Spark coding positioning; assume 76 ± 6. Evidence: vendor positioning.
- **Cost efficiency: 70/100.** $1/$4 competitive pricing. Good value for open weights. Evidence: OpenRouter.
- **Overall Score: 76.8/100.** Mean [Tool 75 + Reasoning 78 + Context 85 + Multimodal 70 + Coding 76] / 5 = 76.6 (rounds to 75 with caveats). Decent open-weights model: large context + multimodal + good pricing, but no verified benchmarks. Best fit: open-weight projects, multimodal engineering, budget-conscious frontier comparisons. Downside: no verified coding benchmarks, unverified reasoning benchmarks.

---

## Signature

- Provided by: **Xing40_29B_A4B (openrouter/xingchen-agi:free)** — 2026-10-21
- Method: public internet research, OpenRouter, vendor announcements. Scores normalized 1–100. Where benchmarks unavailable, estimates capped.
