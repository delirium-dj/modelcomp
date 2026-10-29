# Pareto 26.10 Preview — findings by GPT-6 Luna

- Source: Unbiased/Pareto 26.10 Preview
- Date: 2026-10-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Pareto 26.10 Preview
- **Short description:** Unbiased's compositional AI product, not a single fixed-weight checkpoint: it selects frontier and open models per request and blends their outputs behind one API. This is the 26.10 preview identity, not the separate Pareto 26.9 / Union Alpha composite.
- **Provider / access:** Unbiased API, also routed through OpenRouter. The preview route is `pareto-26.10-preview` (OpenRouter: `unbiased/pareto-26.10-preview`); Unbiased's release hub now lists stable model ID `pareto-26.10`. The preview launched October 1; Unbiased's October 16 update says 26.10 is generally available / out of preview. No fixed underlying provider/model is promised for every request, which is intrinsic to the product.
- **Release / knowledge:** Preview released **October 1, 2026**; general availability announced **October 16, 2026**. A training-data cutoff is not meaningful for the changing composite and was not published.
- **IDs:** `pareto-26.10-preview` (preview API/OpenRouter route); `pareto-26.10` (current stable Unbiased API ID).
- **Context window:** 1,048,576 tokens (1M), documented by Unbiased and OpenRouter. No retrieval-quality benchmark at 512K+ was found.
- **Modalities:** Text and image input, text output; built-in tool calling. No video/audio input or non-text output verified.
- **Pricing (as of 2026-10-29):** Unbiased API per 1M tokens: **$0.80 input / $0.03 cached input / $3.20 output**. Actual spend depends on usage and cache hits; preview and stable routes have the same published token rates. The vendor also advertises subscription plans, which are separate from API token pricing.
- **Architecture:** No single parameter count or model architecture applies. Unbiased describes Pareto as a routing/blending layer over selected frontier and open models; the individual component set and routing may change, and weights/parameters are not published.

### Raw benchmarks found

Three independent public searches were followed by checks of Unbiased's October 1 [launch notes](https://unbiased.ai/blog/pareto-26-10-preview/), current [26.10 model card](https://unbiased.ai/model-card/), [release hub](https://unbiased.ai/pareto-26-10/), OpenRouter's exact preview route, and BenchLM's exact-model ledger. Unbiased says the scored preview runs are preliminary October 1, 2026 results from a serving stack that was still settling; its model card says results may change and denominator/cost methodology need confirmation. These are product-level composite results, not scores for a single underlying model. BenchLM independently tracks the product but says three sourced rows do not yet support a public rank.

Agent / tool use:

- Terminal-Bench 4.0: **50.8%**, reported mean cost **$0.48/task** (Unbiased October 1 preview run). The vendor labels this agentic terminal use. This is TB4.0, not the TB2.1 rubric metric.
- No exact-product Tau3-Banking, GDPval-AA, OSWorld, or Claw-Eval result verified.

Reasoning / knowledge:

- GPQA-Diamond: **92.4%**, reported mean cost **$0.004/task** (Unbiased October 1 preview run).
- Humanity's Last Exam, text-only: **49.9%**, reported mean cost **$0.008/task** (same run).

Coding:

- DeepSWE v1.1: **69.9%**, reported mean cost **$0.24/task** (Unbiased October 1 preview run). No detailed denominator/harness report was verified; the vendor flags denominator and task-cost methodology for confirmation.
- No exact-product SciCode, SWE-bench Verified/Pro, or Coding Agent Index score verified.

Multimodal and long context:

- Unbiased and OpenRouter document text/image input and text output; no exact-product image benchmark score verified.
- Context is 1M, but no exact-product MRCR/RULER retrieval result found.

### Normalized scores (1–100)

- **Tool use: 81/100.** TB4.0 is 50.8% at $0.48/task, but it is a different version from TB2.1, and no Tau3/GDPval-AA/OSWorld/Claw result was found; the preliminary vendor run lacks confirmed denominators.
- **Reasoning: 89/100.** GPQA-Diamond 92.4% and text-only HLE 49.9% are frontier-level preliminary results; caveats are the vendor's unsettled serving stack and the unconfirmed task/denominator methodology.
- **Context window: 95/100.** The documented 1M limit reaches the methodology's highest tier; no retrieval-quality result supports 100.
- **Multimodal: 65/100.** Text and image input fit the methodology's image-input range, but no exact-product vision result or video/audio/non-text output was verified.
- **Coding: 84/100.** DeepSWE v1.1 at 69.9% is strong and close to the rubric's frontier range; there is no second exact-product coding benchmark, and Unbiased marks the preview run/methodology preliminary.
- **Cost efficiency: 93/100.** Published API rates of $0.80/$3.20 per million input/output tokens plus $0.03 cached input are low relative to many frontier APIs; its claimed task costs are attractive but remain preliminary and methodologically unconfirmed.
- **Overall Score: 82.8/100.** Half-up mean of the five quality dimensions (81, 89, 95, 65, 84 = 82.8), excluding cost; promising 1M-context composite for reasoning and coding, with image input, but its changing routes and preliminary vendor-run scores limit reproducibility.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna-fast)** — 2026-10-29
- Method: Three independent public search queries, followed by primary-source checks of Unbiased's exact preview launch notes/model card/release hub, OpenRouter's exact route, and BenchLM's product record. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
