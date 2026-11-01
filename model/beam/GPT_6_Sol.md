# Beam 1.0 — findings by GPT 6 Sol

- Source: Reflection (`reflection/Beam-1.0-501B-A23B`)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Beam 1.0.
- **Short description:** Reflection's 501B/23B-active open-weight reasoning MoE for coding and long-horizon tool use. Former stealth name `cat-jam` resolves to this released model; the October 5 **preview** benchmarks and October 16 **final weight-card** results are different snapshots and should retain their labels ([launch](https://reflection.ai/blog/introducing-beam), [final card](https://reflection.ai/beam-model-card)).
- **Provider / access:** Apache-2.0 weights `reflection/Beam-1.0-501B-A23B` (BF16 plus FP8/NVFP4 quantizations); OpenRouter Chat Completions ID `reflection/beam-1.0-501b-a23b` at `https://openrouter.ai/api/v1/chat/completions`; Reflection's own API has a beta, with conditions varying by account ([HF weights](https://huggingface.co/reflection/Beam-1.0-501B-A23B), [OpenRouter route](https://openrouter.ai/reflection/beam-1.0-501b-a23b)). No separate model weights for the old stealth route or numeric formats.
- **Release / knowledge:** Announced October 5, 2026 in preview; [weights and final model card released October 16](https://reflection.ai/blog/beam-is-available). **June 30, 2026** knowledge cutoff ([final card](https://reflection.ai/beam-model-card)).
- **IDs:** Weight repo `reflection/Beam-1.0-501B-A23B`; OpenRouter `reflection/beam-1.0-501b-a23b`; stealth `cat-jam` is an earlier alias, not another checkpoint.
- **Context window:** Vendor **1M**; [OpenRouter catalog](https://openrouter.ai/api/v1/models) lists **1,048,576 context and 131,072 maximum completion** for its route, not 1M input plus 131K output.
- **Modalities:** **Text in, text out.** Tool calls, search and code generation operate over text; no native image/audio/video I/O ([Reflection final card](https://reflection.ai/beam-model-card)).
- **Pricing (as of 2026-11-01):** OpenRouter's [live catalog](https://openrouter.ai/api/v1/models) gives **$0.25 input / $1.00 output / $0.05 cached input per million tokens** for this specific route. [Artificial Analysis](https://artificialanalysis.ai/models/reflection-beam) quotes a **$0.40/$1.20 median across providers**, not a contradiction or Reflection's list rate. Self-hosting has no API token fee but requires serving a 501B-weight model; beta free allowances are not a guaranteed unlimited free API.
- **Architecture:** 501.3B total / 23.4B active, 256 experts, 52 layers, gated grouped-query/sliding attention; BF16, FP8, NVFP4 are precision formats of the same instruction-tuned model ([vendor card](https://reflection.ai/beam-model-card)).

### Raw benchmarks found

- **Agent/tool use (vendor final BF16):** [Terminal-Bench 2.1 **80.1%**, MCP Atlas **80.8%**, τ3 Banking **36.1%**, AutomationBench public **39.3%**](https://reflection.ai/beam-model-card). Independent [Vals Terminal-Bench **4.0 4.04% ±1.34**](https://www.vals.ai/models/reflection_Beam-1.0) and [Artificial Analysis Terminal-Bench 4.0 **3.0%**, AutomationBench-AA **48.5%** at launch](https://artificialanalysis.ai/articles/reflection-beam). Terminal-Bench 2.1 and 4.0 are **different task sets**, so the gulf does not by itself establish checkpoint regression.
- **Reasoning (vendor final BF16):** [AIME 2026 **97.7%**, GPQA Diamond **90.6%**, HLE **36.0% without tools / 51.1% with tools**](https://reflection.ai/beam-model-card). Independent [Vals ProofBench v1.1 **18.00% ±3.86**, IOI **22.83% ±8.01**](https://www.vals.ai/models/reflection_Beam-1.0) probe other, harder domains. [AA launch HLE ~34.66%](https://themodelgap.com/models/beam-1-0) is close to the vendor no-tools figure but not the same run.
- **Coding (vendor final BF16):** [SWE-bench Verified **81.6%**, SWE-bench Pro v1 **66.1%**, DeepSWE v1.1 **43.3%**, LiveCodeBench **88.3%**](https://reflection.ai/beam-model-card). **81.6 belongs to the released BF16 card**; the [earlier preview](https://reflection.ai/blog/introducing-beam) reported **80.9** and did not measure the exact final card snapshot. Independently [Artificial Analysis Mirror coding-agent index **28**](https://artificialanalysis.ai/articles/reflection-beam) and [Vals Code Migration v1.1 **22.85% ±3.28**, Vibe Code Bench v1.1 **66.44% ±4.06**](https://www.vals.ai/models/reflection_Beam-1.0) show substantial benchmark/harness sensitivity.
- **Long context:** Vendor [AA-LCR **78.2%** and LongBench v2 **67.5%**](https://reflection.ai/beam-model-card); no independent exact-checkpoint 1M-token retrieval test located. Large advertised context does not establish near-limit fidelity.
- **Independent applied analytics:** [Plotly's 43-question synthetic-warehouse exam: **36/43 (84%)**, **$8.29** total, approximately **15 model calls/question**](https://plotly.com/blog/reflection-beam-1-0-plotly-data-analytics-bench/). This is a small domain-specific tool-enabled exam, not a broad model IQ percentage; caching inefficiency increased observed spend.
- **Independent Vals composite:** [Vals Index **43.42% ±1.06**, 29/32 at the viewed snapshot](https://www.vals.ai/models/reflection_Beam-1.0). Artificial Analysis's independently rerun index changed versions: its [dated launch article says 30](https://artificialanalysis.ai/articles/reflection-beam), while the [current v5 profile says 18](https://artificialanalysis.ai/models/reflection-beam); **do not** conflate different index cohorts.

### Normalized scores (1–100)

- **Tool use: 70/100.** Good vendor MCP/terminal 2.1 and Plotly task success, discounted for τ3 36 and hard Terminal-Bench 4.0 ~3–4.
- **Reasoning: 75/100.** High vendor AIME/GPQA, but independent ProofBench 18 and HLE no-tools ~35 limit the claim.
- **Context window: 85/100.** 1M offered with 131K output host cap; no independent limit-depth retrieval test.
- **Multimodal: 15/100.** Text-only I/O, with no native image, audio or video.
- **Coding: 70/100.** SWE Verified 81.6 vendor versus independent 28 coding-agent index and 22.85 Code Migration; significant task/harness dependence.
- **Cost efficiency: 79/100.** Cheap OpenRouter text tariff and Apache weights, offset by self-hosting scale and substantial observed uncached agent spend.
- **Overall Score: 63/100.** Half-up mean (70 + 75 + 85 + 15 + 70) / 5 = 63.0; capable long-context text specialist with uneven independent agent results.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-11-01 UTC
- Method: Three fresh release, official-card and independent-evaluation searches; final BF16 rows separated from preview, FP8/NVFP4 precision variants and later AA index versions. Scores are normalized judgments.
- Reference URLs:
  - [Reflection final Beam model card and precision-specific benchmarks](https://reflection.ai/beam-model-card)
  - [Reflection October 16 release and weight availability](https://reflection.ai/blog/beam-is-available)
  - [Reflection October 5 preview, distinct preliminary results](https://reflection.ai/blog/introducing-beam)
  - [Vals independent Beam 1.0 benchmark suite](https://www.vals.ai/models/reflection_Beam-1.0)
  - [Artificial Analysis independent Beam release evaluation](https://artificialanalysis.ai/articles/reflection-beam)
  - [Plotly independently run analytics evaluation and cost audit](https://plotly.com/blog/reflection-beam-1-0-plotly-data-analytics-bench/)
  - [OpenRouter exact route/pricing catalog](https://openrouter.ai/api/v1/models)
- Future sources: add a new file next to this one using the same headings.
