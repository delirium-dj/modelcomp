# Qwen3.7-Max — findings by GPT 6 Sol

- Source: Qwen Cloud (`qwen3.7-max`)
- Date: 2026-10-15 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.7-Max
- **Short description:** Alibaba's May 2026 Max-tier proprietary model for text-only agentic coding and office work, distinct from Qwen3.7-Plus's image/video service and later Qwen3.8-Max ([Qwen Cloud model page](https://www.qwencloud.com/models/qwen3.7-max)).
- **Provider / access:** First-party `qwen3.7-max` via Qwen Cloud OpenAI-compatible **Chat Completions/Responses**, [OpenCode Console](https://opencode.ai/docs/zen/) paid `qwen3.7-max` via Anthropic-compatible Messages endpoint. Provider protocol differs; there is no verified free Zen ID.
- **Release / knowledge:** May 20, 2026 per [Vals](https://www.vals.ai/models/alibaba_qwen3.7-max). Knowledge cutoff for this closed Max model not verified in the reviewed first-party product page.
- **IDs:** `qwen3.7-max` first party, Vals `alibaba/qwen3.7-max`; no public downloadable Max weights confirmed.
- **Context window:** [Qwen Cloud](https://www.qwencloud.com/models/qwen3.7-max) **1M combined / 991K max input (983K thinking) / 131K max output**; [Vals](https://www.vals.ai/models/alibaba_qwen3.7-max) used a ~984K/65K route, so limits vary by provider/harness.
- **Modalities:** [Qwen Cloud](https://www.qwencloud.com/models/qwen3.7-max) explicitly says **public text-only input → text output**, with reasoning/tool functions, cached prompts and built-in web/code tools. No native image, video or audio modality is credited despite other Qwen3.7 variants having vision.
- **Pricing (as of 2026-10-15):** [Qwen Cloud](https://www.qwencloud.com/models/qwen3.7-max) and [OpenCode Console](https://opencode.ai/docs/zen/) **$2.50 input / $7.50 output per 1M**, explicit cache read **$0.25**, implicit cache $0.50, cache creation $3.125 (first-party); project metadata's $1.48/$4.43 via another provider is not the first-party/Console rate.
- **Architecture:** Hosted proprietary Max release; exact parameters/weights not independently disclosed on official [Qwen Cloud product page](https://www.qwencloud.com/models/qwen3.7-max).

### Raw benchmarks found

[Qwen's release results attributed by BenchLM](https://benchlm.ai/models/qwen3-7-max) are compared with independent [Vals](https://www.vals.ai/models/alibaba_qwen3.7-max) and [AA-attributed](https://artificialanalysis.ai/models/qwen3-7-max) values. Qwen's blog at the cited `qwen.ai/blog?id=qwen3.7` was not readable in this fetch; figures below clearly identify their *index attribution* rather than claim a first-hand rerun. Vals' original May index ranks used a smaller cohort.

Agent / tool use:

- [BenchLM vendor-attributed TB2.0 **69.7%**, Claw-Eval **65.2%**, MCP Atlas **76.4%**, BFCL v4 **75.0%**](https://benchlm.ai/models/qwen3-7-max). [Vals TB2.1 **61.05% ±0.38**, Finance Agent v2 **47.78% ±0.73**, Code Migration **13.07% ±2.86**, Harvey Legal Agent **1.67%**](https://www.vals.ai/models/alibaba_qwen3.7-max). TB2.0 and TB2.1 are distinct, not conflicting repeated trials.

Reasoning / knowledge:

- [Vendor-attributed GPQA Diamond **92.4%**, HLE **41.4% without tools / 53.5% with tools**, CritPt **13.4%**](https://benchlm.ai/models/qwen3-7-max); [Vals GPQA **90.15% ±1.50**, MMLU-Pro **89.31% ±0.30**](https://www.vals.ai/models/alibaba_qwen3.7-max). [AA-attributed Index **29.5**, HLE **40.5%**](https://benchlm.ai/models/qwen3-7-max) uses separate test conditions.

Coding:

- [Vendor-attributed SWE Verified **80.4%**, SWE-Pro **60.6%**, LiveCodeBench v6 **91.6%**, NL2Repo **47.2%**](https://benchlm.ai/models/qwen3-7-max); [Vals SWE-bench **68.80% ±2.07**, LiveCodeBench **87.06% ±0.97**, Vibe Code Bench v1.1 **47.67% ±4.63**, Code Migration **13.07%**](https://www.vals.ai/models/alibaba_qwen3.7-max). Vendor vs Vals SWE difference requires harness/version labels.

Long context / multimodal:

- [Vendor-attributed MRCR v2 **90.4%**](https://benchlm.ai/models/qwen3-7-max) without a clear window length in the index; [AA-LCR **79.0%**](https://benchlm.ai/models/qwen3-7-max) under a separate suite. Nominal 1M does not imply measured 1M retrieval without the MRCR length.
- Qwen Cloud **text-only public interface** ([Qwen Cloud](https://www.qwencloud.com/models/qwen3.7-max)); MMMU-Pro, image/video/audio benchmarks for this Max API ID **no verified public score found**. Do not import Qwen3.7 Plus vision scores.

### Normalized scores (1–100)

- **Tool use: 75/100.** Vendor MCP 76.4% and Vals TB2.1 61.1% show useful tools, but migration 13% and Harvey 1.7% limit complex autonomy.
- **Reasoning: 84/100.** GPQA ~90–92%, HLE ~41% no tools and CritPt 13.4%, lower confidence from AA Index 29.5.
- **Context window: 94/100.** 1M/131K first-party capacity and AA-LCR 79%, tempered by a Vals 65K route and unknown MRCR window length.
- **Multimodal: 15/100.** Public Max endpoint is text-only in and text out; adjacent Plus capabilities are not inherited.
- **Coding: 78/100.** Vendor SWE-Pro 60.6%/Verified 80.4% against Vals SWE 68.8%, Vibe Code 47.7% and migration 13.1%.
- **Cost efficiency: 63/100.** $2.50/$7.50 first-party/Console with cache and no verified free tier; provider-specific discounts must be checked.
- **Overall Score: 69/100.** (75 + 84 + 94 + 15 + 78) / 5 = 69.2, half-up 69; long-input text research/coding where vision is unnecessary and provider settings are known.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-10-15
- Method: Fresh Qwen Cloud specs and independent Vals checked against source-attributed BenchLM vendor/AA outcomes; normalized scores are interpretations, not vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
