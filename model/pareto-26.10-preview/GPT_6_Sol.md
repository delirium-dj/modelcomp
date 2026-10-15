# Pareto 26.10 Preview — findings by GPT 6 Sol

- Source: Unbiased AI / Circuit & Chisel (`pareto` preview)
- Date: 2026-10-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Pareto 26.10 Preview
- **Short description:** Unbiased's October 2026 **blended multi-engine service** delivering one answer from one request. It is a proprietary composite, **not one open-weight base checkpoint**, and differs from Pareto 26.9 ([Unbiased model card](https://unbiased.ai/model-card/), [mechanism](https://unbiased.ai/#how-pareto-works)).
- **Provider / access:** Unbiased Platform, model identifier **`pareto`** on its [model card](https://unbiased.ai/model-card/) and [homepage](https://unbiased.ai/) via the service's API. A live `opencode/pareto-26.10-preview` Zen route was not found at the guessed Pi URL, so the project metadata ID is not verified API access. [Unbiased setup](https://unbiased.ai/start/) requires account/key.
- **Release / knowledge:** Preliminary benchmark runs October 1, 2026, version 26.10 Preview ([model card](https://unbiased.ai/model-card/)); an exact training cutoff is inapplicable/undisclosed for the constituent models and changing blend.
- **IDs:** Public service ID `pareto`, branded release Pareto 26.10 Preview; source-host implementations and weights behind the blend are not identified by Unbiased.
- **Context window:** Project metadata lists 1M input / 131K output, but the reviewed [Unbiased model card](https://unbiased.ai/model-card/) does **not** substantiate this published API limit. Treat context as unverified rather than importing constituent models' capabilities.
- **Modalities:** [Unbiased model card](https://unbiased.ai/model-card/) explicitly accepts **text/image input** and returns one text answer; audio/video or structured format support not verified for this preview.
- **Pricing (as of 2026-10-14):** [Unbiased model card](https://unbiased.ai/model-card/) **$0.80 input / $0.03 cached input / $3.20 output per 1M**; preliminary run task costs **$0.24 DeepSWE / $0.48 TB4 / $0.008 HLE / $0.004 GPQA** are workload/harness results, not fixed token prices. Subscription plans separately start at $10/month ([Unbiased](https://unbiased.ai/)).
- **Architecture:** Unbiased says multiple models run on a request and it keeps the chosen answer. Underlying checkpoint identities, routing and selection methodology not public in a way that establishes single-model weight parameters ([Unbiased](https://unbiased.ai/)).

### Raw benchmarks found

All exact-release numeric figures below are **preliminary, provider self-reported, October 1 runs** ([Unbiased card](https://unbiased.ai/model-card/), [homepage full table](https://unbiased.ai/)). Unbiased says task denominators and cost methodology require confirmation; comparison models use other labs' harnesses, some 30-task slices, and were not rerun by Unbiased. [BenchLM](https://benchlm.ai/models/pareto-26-10-preview) lists only 3 rows and no aggregate. Independent Vals evaluation for this exact release was not found.

Agent / tool use:

- [Unbiased Terminal-Bench **4.0 50.8%**, $0.48 mean per task](https://unbiased.ai/) preliminary; **no verified independently rerun** OSWorld, Toolathlon, MCP Atlas, Claw-Eval or TB2.1 for this blend.

Reasoning / knowledge:

- [Unbiased HLE **49.9% text-only**, GPQA Diamond **92.4%**](https://unbiased.ai/) preliminary, with cited task costs ~$0.008 and ~$0.004 respectively; no independently run CritPt/ARC-AGI result for this exact preview. GPQA/HLE are self-reported under unspecified comparable effort.

Coding:

- [Unbiased DeepSWE v1.1 **69.9%**, ~$0.24 average task cost](https://unbiased.ai/model-card/) on preliminary October 1 run. Card warns other models' September results used a 30-task slice and comparison methodology is not controlled. Exact preview SWE-bench Verified/Pro, LiveCodeBench, SciCode: **no verified public score found**.

Long context / multimodal:

- No verified **published preview API maximum context/output** and no MRCR/GraphWalks score on the service's [public card](https://unbiased.ai/model-card/); project metadata's 1M/131K remains unconfirmed.
- Text/image inputs supported, but no exact release visual MMMU/CharXiv score on reviewed [Unbiased card](https://unbiased.ai/model-card/); it would be invalid to reuse the scores of underlying engines.

### Normalized scores (1–100)

- **Tool use: 79/100.** Provisional: preliminary TB4.0 50.8% is useful evidence, but no independent terminal rerun or GUI/tool benchmark.
- **Reasoning: 85/100.** Provisional: self-reported HLE text-only 49.9% and GPQA 92.4%, without independent evaluation or stable constituent model list.
- **Context window: 70/100.** Unbiased service context/output limits and long-range retrieval not independently specified despite project metadata's claimed 1M.
- **Multimodal: 65/100.** Text/image input → text response confirmed, no native audio/video or verified visual benchmark.
- **Coding: 84/100.** Preliminary DeepSWE 69.9% is promising, discounted for unknown denominator/harness and no second independent code test.
- **Cost efficiency: 80/100.** $0.80/$3.20 with $0.03 cached and low self-reported task spend, tempered by unknown orchestration overhead on other workloads.
- **Overall Score: 77/100.** (79 + 85 + 70 + 65 + 84) / 5 = 76.6, half-up 77; promising preliminary blended service that should be tested on representative coding tasks and API limits before treating the vendor comparison as a controlled head-to-head.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-10-14
- Method: Fresh Unbiased model card and homepage methodology compared with BenchLM attribution; sparse exact-release data labelled provisional, normalized scores are not vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
