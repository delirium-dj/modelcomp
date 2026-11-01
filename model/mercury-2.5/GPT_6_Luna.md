# Mercury 2.5 — findings by GPT-6 Luna

- Source: Inception/Mercury 2.5 (`mercury-2.5`)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mercury 2.5
- **Short description:** Inception's proprietary diffusion language model for fast reasoning, chat, tool use, and structured workflows. It generates/refines tokens in parallel rather than using conventional autoregressive decoding; this is the production model, not Mercury 2.5 Preview or the distinct Mercury 3 successor.
- **Provider / access:** Inception API `https://api.inceptionlabs.ai/v1/chat/completions`, OpenAI-compatible Chat Completions; exact API ID `mercury-2.5`. Inception's current model page says Mercury 2.5 is no longer available to new accounts; customers with usage before October 19, 2026 retain access through November 15, with enterprise agreements handled separately.
- **Release / knowledge:** Vals AI and the models.dev catalog list September 8, 2026 as the release date. Inception's current launch article carries an October 29, 2026 publication stamp, a date discrepancy the sources do not explain. No knowledge cutoff disclosed.
- **IDs:** Inception API `mercury-2.5`; OpenRouter `inception/mercury-2.5`. Do not confuse with the separate `mercury-2.5-preview` evaluation entry or Mercury 3.
- **Context window:** 260,000 tokens total; official Inception docs list a 65,536-token maximum output. The API example requests up to 8,192 completion tokens, which is an example setting, not the model's stated maximum.
- **Modalities:** Text input and text output only. Reasoning effort, parallel tool calls, and schema-aligned JSON are supported. No image/audio/video input or non-text generation documented.
- **Pricing (as of 2026-11-01):** Inception's official API docs list $0.20/M input, $0.02/M cached input, and $0.75/M output. The launch article also records an 80%-off introductory rate of $0.04/M input and $0.15/M output; availability of that promotion is not established for existing accounts. New users can no longer access Mercury 2.5 through Inception directly.
- **Architecture:** Proprietary diffusion LLM; weights and parameter count are undisclosed. Inception says the model was trained on NVIDIA AI infrastructure and claims 1,107 tokens/second on widely available NVIDIA GPUs; this is a vendor speed claim, not an independently replicated benchmark.

### Raw benchmarks found

The official Inception launch article includes benchmark charts, and BenchLM transcribes several figures from that chart. The publicly accessible text of the article does not expose the chart's run configuration; treat those values as vendor-reported, with incomplete methodology. Vals AI provides separate measured results with ranks and confidence intervals.

Agent / tool use:

- τ³-Bench: **96.0%** and DeepSearchQA: **34.0%** (BenchLM transcription of Inception's launch chart; detailed harness/configuration not available in the article text).
- Terminal-Bench 4.0: **0.00% ± 0.00**, displayed by Vals AI at rank **59/59**. This is the Vals result as currently shown, and differs from Terminal-Bench 2.1 records elsewhere; benchmark versions must not be merged.
- BenchLM separately lists Terminal-Bench 2.1 (Vals attribution) at **34.5%**. The current Vals page now shows Terminal-Bench 4.0 rather than a TB 2.1 result, so the older score is recorded as secondary-only and not used to normalize the tool score.

Reasoning / knowledge:

- GPQA Diamond: **79.0%**; IFBench: **77%**; AA-LCR: **68.0%**; AA-Omniscience accuracy: **22.0%** and hallucination rate: **67.0%** (BenchLM records these with references to Inception's launch chart and Artificial Analysis).
- LegalBench: **83.06% ± 0.48**, rank **61/151** (Vals AI).
- BenchLM lists AA-HLE at **11.8%**; its accessible Artificial Analysis model page has no publicly displayed model-specific Intelligence Index score, so this is retained as an aggregator-attributed value rather than a directly verified AA table entry.

Coding:

- SciCode: **38%** and AA-SciCode: **38.5%** (BenchLM transcription / attribution to Inception's chart and Artificial Analysis).
- Vibe Code Bench v1.1: **3.68% ± 1.41**, rank **111/123**; Terminal-Bench 4.0: **0.00% ± 0.00**, rank **59/59** (Vals AI).
- Inception describes coding-subagent and coding-assistant use cases, but those product examples are not benchmark results.

Long context:

- AA-LCR: **68.0%** (BenchLM's record of the launch-chart figure). The test window is not specified in the accessible chart text; this is not evidence of 68% retrieval accuracy at the full 260K limit.

### Normalized scores (1–100)

- **Tool use: 64/100.** The vendor-reported τ³-Bench result of 96% is strong, but Vals AI's Terminal-Bench 4.0 result is 0%, and the older 34.5% Terminal-Bench 2.1 entry is secondary-only; this mixed, version-sensitive evidence caps confidence. [Inception launch article](https://www.inceptionlabs.ai/blog/introducing-mercury-2-5); [Vals AI results](https://www.vals.ai/models/inception_mercury-2.5); [BenchLM benchmark record](https://benchlm.ai/models/mercury-2-5).
- **Reasoning: 68/100.** GPQA Diamond 79%, IFBench 77%, and LegalBench 83.06% indicate solid reasoning/instruction performance, while AA-Omniscience accuracy 22% and hallucination rate 67% temper the result; chart setup details are incomplete. [Inception launch article](https://www.inceptionlabs.ai/blog/introducing-mercury-2-5); [Vals AI results](https://www.vals.ai/models/inception_mercury-2.5); [BenchLM benchmark record](https://benchlm.ai/models/mercury-2-5).
- **Context window: 74/100.** The verified 260K maximum falls in the 200K–500K tier, and the vendor-chart AA-LCR value is 68%, but the tested window length is not published in the accessible text. [Official Inception model docs](https://docs.inceptionlabs.ai/get-started/models); [BenchLM benchmark record](https://benchlm.ai/models/mercury-2-5).
- **Multimodal: 15/100.** This is a text-in/text-out model with no documented image, audio, or video input. [Official Inception model docs](https://docs.inceptionlabs.ai/get-started/models); [Artificial Analysis](https://artificialanalysis.ai/models/mercury-2-5).
- **Coding: 48/100.** SciCode at 38% and AA-SciCode at 38.5% show some scientific coding ability, but Vibe Code Bench v1.1 is 3.68% and Terminal-Bench 4.0 is 0%; no verified SWE-bench result was found. [Vals AI results](https://www.vals.ai/models/inception_mercury-2.5); [BenchLM benchmark record](https://benchlm.ai/models/mercury-2-5).
- **Cost efficiency: 95/100.** The official $0.20/$0.75 list price is inexpensive relative to many reasoning APIs, and an 80%-off launch rate was advertised; however, discounted access is not verified as current and new Inception accounts cannot access Mercury 2.5. [Official Inception model docs](https://docs.inceptionlabs.ai/get-started/models); [Inception launch article](https://www.inceptionlabs.ai/blog/introducing-mercury-2-5).
- **Overall Score: 54/100.** Half-up mean of the five quality dimensions: (64 + 68 + 74 + 15 + 48) / 5 = 53.8 → 54. Cost is excluded. Best suited to text-only, latency-sensitive reasoning or tool workflows for users who still have access; its zero Terminal-Bench 4.0 result makes it a poor choice for unsupervised terminal coding.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-11-01
- Method: Three independent exact-name web searches, then direct checks of Inception's API documentation, current model catalog, and Mercury 2.5 launch article; Vals AI's independently measured benchmark page; and Artificial Analysis/BenchLM records. Where a current source supersedes an older benchmark version, the versions are reported separately. Vendor-chart values transcribed by BenchLM are labelled as such, and its unverified older Terminal-Bench 2.1 entry is not used in score normalization. No data from Mercury 2, Mercury 2.5 Preview, or Mercury 3 is transferred. Normalized scores are independent interpretations, not vendor scores.
- Reference URLs:
  - [Official Inception Mercury 2.5 launch article](https://www.inceptionlabs.ai/blog/introducing-mercury-2-5)
  - [Official Inception model/API documentation](https://docs.inceptionlabs.ai/get-started/models)
  - [Official current model availability and pricing page](https://www.inceptionlabs.ai/models)
  - [Vals AI Mercury 2.5 results](https://www.vals.ai/models/inception_mercury-2.5)
  - [BenchLM benchmark transcription and source links](https://benchlm.ai/models/mercury-2-5)
  - [Artificial Analysis Mercury 2.5 page](https://artificialanalysis.ai/models/mercury-2-5)
  - [Models.dev Mercury 2.5 catalog record](https://models.dev/models/inception/mercury-2.5)

---
