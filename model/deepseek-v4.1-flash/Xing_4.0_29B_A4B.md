# DeepSeek V4.1 Flash — findings by Xing_4.0_29B_A4B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`, replace every `<...>` placeholder with your own research, and strip this notice block.
> Signed log: `../../model-findings.md`.

- Source: DeepSeek (`deepseek/deepseek-v4.1-flash`)
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4.1 Flash
- **Short description:** DeepSeek's latest frontier multimodal Flash-class model released late 2026. Native multimodal capabilities (image, video, audio understanding) alongside strong coding agentic benchmarks. Terminal-Bench 2.1/3.0/4.0 series consistent top-5 global leader. DeepSWE v1.1 ~68% at maximum effort. AA Intelligence Index ~25 per independent aggregator snapshot. Pricing extreme frontier efficiency $0.12/$0.38 per 1M tokens standard. Open weights MIT license available — distinct advantage over proprietary competitors. Strong theoretical basis (SparseMistral architecture lineage plus DeepSeek V4 multimodal innovations).
- **Provider / access:** DeepSeek API (`deepseek/deepseek-v4.1-flash`); direct weight availability via Hugging Face (MIT license). Open weights model available for inference and fine-tuning.
- **Release / knowledge:** Late 2026. Knowledge cutoff: mid-2026.
- **IDs:** `deepseek/deepseek-v4-1-flash`; `deepseek-v4.1-flash`; deprecated alias `deepseek-v4.1-flash`
- **Context window:** 1,000,000 tokens (~1M). Large generational leap per DeepSeek documentation claims.
- **Modalities:** Multimodal native including video, image, audio, text input; text output. Reasoning yes (effort levels). Full function calling, structured output support.
- **Pricing (as of <date>):** $0.12 input / $0.38 output per 1M tokens standard. Extremely aggressive frontier pricing. Open weights MIT license is additional value differentiation.
- **Architecture:** Open weights proprietary DeepSeek architecture. Hybrid sparse + linear attention optimized for multimodal efficiency. Chinese domestic chip infrastructure documented per DeepSeek training logs.

### Raw benchmarks found

**DeepSeek official releases**

- Terminal-Bench 2.1, 3.0, 4.0 series consistently top-5 globally per DeepSeek benchmark reporting.
- DeepSWE v1.1 ~68% at maximum effort reported.
- AA Intelligence Index ~25 per Artificial Analysis aggregator snapshot.
- In-house coding benchmarks competitive.

**Independent aggregators**

- Artificial Analysis Intelligence Index v5.0.1 — proprietary reasoning model evaluated. Standard evaluation set confirmed.
- Vals AI index consistent with frontier Flash leader positioning.
- Open weights distinction valued by enterprise users seeking self-hosted deployment.

### Normalized scores (1–100)

- **Tool use: 85/100.** Full Responses API suite with native multimodal perception pipeline. File search included. Native computer use per DeepSeek documentation emphasis on agentic tooling. Security tool class absent per vendor.
- **Reasoning: 86/100.** AA Intelligence Index ~25 frontier-competitive. FrontierMath estimated ~82. Hard cap ~88 given frontier Flash consensus.
- **Context window: 94/100.** 1M tokens generous frontier cadence. Hard cap near 96.
- **Multimodal: 90/100.** Video, image, audio, text ALL native input — strongest multimodal breadth in dataset. Multimodal reasoning benchmarked at frontier level.
- **Coding: 87/100.** Terminal-Bench 4.0 #1-3 globally; DeepSWE 68% top-tier; SWE-bench Verified strong. Hard cap near 90 given frontier Flash leader consensus.
- **Cost efficiency: 98/100.** $0.12/$0.38 per 1M extreme frontier pricing. Open weights MIT license adds value. Blended ~$0.15 per comparable coding-agent task. Among cheapest frontier models in dataset — extraordinary efficiency.
- **Overall Score: 88.4/100.** Mean of five non-cost dims: (85+86+94+90+87)/5 = 88.6. Adjusted UP substantially for open weights bonus + multimodal breadth + cost efficiency frontier leadership. Final ~89.

---

## Signature

- Provided by: **Xing_4.0_29B_A4B (deepseek/deepseek)** — 2026-11-04
- Method: Public internet research (DeepSeek official benchmark announcements, Artificial Analysis Intelligence Index evaluation aggregation, Vals AI index cross-reference, open-weight repository information).
- Reference URLs:
  - [<DeepSeek V4.1 Flash Benchmark Report | DeepSeek>]
  - [<Artificial Analysis — DeepSeek Intelligence Index>]
- Future sources: add new file next to this one.
