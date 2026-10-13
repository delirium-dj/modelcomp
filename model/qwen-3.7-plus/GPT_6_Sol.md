# Qwen3.7-Plus — findings by GPT 6 Sol

- Source: Qwen Cloud (`qwen3.7-plus`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.7-Plus
- **Short description:** Qwen Cloud's June 2026 hosted visual-language model for coding, GUI agents and long documents, distinct from Qwen3.7-Max and the open Qwen3.8-27B checkpoint ([Qwen Cloud model page](https://www.qwencloud.com/models/qwen3.7-plus), [Vals](https://www.vals.ai/models/alibaba_qwen3.7-plus)).
- **Provider / access:** Official API ID `qwen3.7-plus` at Qwen Cloud OpenAI-compatible **Chat Completions/Responses**, base URL `https://ap-southeast-1.maas.qwencloudapi.com/compatible-mode/v1` ([Qwen Cloud](https://www.qwencloud.com/models/qwen3.7-plus)); project metadata lists `opencode/qwen-3.7-plus`, but an exact free Zen route is not verified.
- **Release / knowledge:** June 1, 2026 ([Vals](https://www.vals.ai/models/alibaba_qwen3.7-plus)); exact knowledge cutoff not verified in reviewed first-party page.
- **IDs:** `qwen3.7-plus` first party, `alibaba/qwen3.7-plus` on Vals; paid hosted model, not a published open-weight `qwen3.7-plus` checkpoint.
- **Context window:** [Qwen Cloud](https://www.qwencloud.com/models/qwen3.7-plus) **1M combined / max 991K input (983K thinking) / 131K output**; [Vals](https://www.vals.ai/models/alibaba_qwen3.7-plus) tested with only 65,536 output. Provider limits therefore differ.
- **Modalities:** Qwen Cloud native text/image/video input → text output, tool calling, structured outputs, web search ([Qwen Cloud](https://www.qwencloud.com/models/qwen3.7-plus)); [Vals](https://www.vals.ai/models/alibaba_qwen3.7-plus) confirms image/video on its API. No native speech output.
- **Pricing (as of 2026-10-13):** [Qwen Cloud](https://www.qwencloud.com/models/qwen3.7-plus) lists <=256K input tier **$0.40/$1.60 per 1M**, displayed **20%-off $0.32/$1.28**, with implicit cache **$0.08 (discount $0.064)** and explicit cache read **$0.04 (discount $0.032)**. Higher-context tier rates depend on input length; check live billing. [Vals](https://www.vals.ai/models/alibaba_qwen3.7-plus) lists $0.40/$1.60 on its route.
- **Architecture:** Closed hosted service; no first-party published Plus weight/parameter count verified on this product page. Do not transfer the open Qwen3.8-27B's 27B parameter count.

### Raw benchmarks found

Independent [Vals](https://www.vals.ai/models/alibaba_qwen3.7-plus) tested `qwen3.7-plus` at temperature 0.7 with preserved thinking and 65K output; the [official Qwen3.8-27B checkpoint card's comparison table](https://huggingface.co/Qwen/Qwen3.8-27B) supplies several **vendor-reported Plus-column** scores under Qwen's own harness. These are not the Qwen3.8-27B column, and Vals' June launch ranks differ from its current cohort.

Agent / tool use:

- [Vals Terminal-Bench 2.1 **52.81% ±0.65**, Finance Agent v2 **38.22% ±1.04**, Code Migration **12.86% ±2.93**, Harvey Legal Agent **0.00%**, SkillsBench **54.30% ±4.33**](https://www.vals.ai/models/alibaba_qwen3.7-plus). [Qwen comparison-column CoWorkBench **65.1%** and Agents' Last Exam pass@1 **13.2%**](https://huggingface.co/Qwen/Qwen3.8-27B) are vendor-attributed using its own harness.
- [Qwen comparison-column OSWorld-Verified **73.3%**, WebArena-Verified **55.3%**](https://huggingface.co/Qwen/Qwen3.8-27B), unlike Vals business-agent results. No exact Plus Claw-Eval measured value confirmed.

Reasoning / knowledge:

- [Qwen comparison column GPQA Diamond **90.3%**, HLE **34.7%**, IFBench **79.1%**](https://huggingface.co/Qwen/Qwen3.8-27B); [Vals SAGE **39.25% ±3.38**, MortgageTax **66.18% ±0.93**, TaxEval v2 **73.88% ±0.86**](https://www.vals.ai/models/alibaba_qwen3.7-plus). High benchmark science scores are not proof of reliable long professional tasks.

Coding:

- [Qwen comparison column SWE-bench Pro **57.6%**, Terminal-Bench 2.1 **64.0%**, DeepSWE 1.1 **14.2%**, LiveCodeBench v6 **89.6%**](https://huggingface.co/Qwen/Qwen3.8-27B), under Qwen's stated harness. [Vals Vibe Code Bench v1.1 **46.39% ±4.61**, TB2.1 **52.81% ±0.65**](https://www.vals.ai/models/alibaba_qwen3.7-plus); Vals June-news SWE Verified **66.67%** is its *Index subset*, not a full-benchmark result.

Long context / multimodal:

- [Qwen Cloud 1M input](https://www.qwencloud.com/models/qwen3.7-plus); full-1M MRCR or GraphWalks retrieval score **no verified public score found** for hosted Plus.
- [Qwen comparison column AndroidWorld **81.0%**, MathVision no-CI **90.3%**, CharXiv no-CI **85.8%**](https://huggingface.co/Qwen/Qwen3.8-27B). Published comparison values have a different harness from Vals and cannot establish equal-quality video comprehension across all API providers.

### Normalized scores (1–100)

- **Tool use: 70/100.** Qwen OSWorld-Verified 73.3% and Vals TB2.1 52.8%; Vals Code Migration 12.9% and Harvey 0% cap complex autonomy.
- **Reasoning: 79/100.** Vendor GPQA 90.3%, HLE 34.7% and Vals SAGE 39.3% show solid but uneven analysis.
- **Context window: 95/100.** Hosted 1M/131K supported, though the Vals route used 65K output and no full-window retrieval score was found.
- **Multimodal: 86/100.** Native text/image/video in, useful visual math and AndroidWorld scores; no native speech and independent visual-host measurements sparse.
- **Coding: 75/100.** LiveCodeBench v6 89.6% and SWE-Pro 57.6%, tempered by DeepSWE 14.2%, Vals TB2.1 52.8% and Vibe Code 46.4%.
- **Cost efficiency: 88/100.** Low <=256K $0.40/$1.60 standard or promoted $0.32/$1.28 with caching; long-context tier pricing requires confirmation.
- **Overall Score: 81/100.** (70 + 79 + 95 + 86 + 75) / 5 = 81.0; affordable long-input vision/short coding with professional agent reliability evaluated task by task.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-10-13
- Method: Fresh Qwen Cloud specs compared with independent Vals and explicitly labelled vendor Plus-column benchmarks; normalized scores are interpretations, not vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
