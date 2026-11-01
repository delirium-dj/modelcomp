# Gemini 2.0 Flash — findings by GPT 6 Sol

- Source: Google (`gemini-2.0-flash`, `gemini-2.0-flash-001`)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name / availability:** Gemini 2.0 Flash, Google's February 2025 low-latency general model; **both standard IDs shut down June 1, 2026** ([Google API model card](https://ai.google.dev/gemini-api/docs/models/gemini-2.0-flash), [deprecations](https://ai.google.dev/gemini-api/docs/deprecations)). Historical scores only. Do not merge separate experimental thinking or image-generation endpoints into this standard model.
- **Specifications:** Proprietary, **1,048,576 input / 8,192 output** tokens; text, image, audio and video input, **text output only**. Function calling, code execution and search/Maps grounding were supported ([Google](https://ai.google.dev/gemini-api/docs/models/gemini-2.0-flash)). [Artificial Analysis's historical profile](https://artificialanalysis.ai/models/gemini-2-0-flash) confusingly lists image output and June 2024 knowledge cutoff; the specific standard-ID Google card explicitly says **image generation not supported**, **August 2024** cutoff. Prefer the vendor's exact API ID over an aggregated catalog entry; do not give this route image-output credit. Size undisclosed.
- **Cost:** No presently billable first-party tariff for a shut-down endpoint. Historical price may vary with tokens or channel; no current Gemini rate should be silently copied here.

### Raw benchmarks found

- **Tool use:** Google confirms the feature set above; the historical independent [AA τ²-Bench **29.5%**](https://benchlm.ai/models/gemini-2-0-flash) suggests a weak complex-agent baseline despite function-call support. Separate 2025 [Google technical report](https://arxiv.org/abs/2507.06261) evaluates Flash as a comparison baseline for successor models; it is vendor rather than independent evidence.
- **Reasoning:** Google 2.5 report comparison [Gemini 2.0 Flash GPQA Diamond **65.2%**, SimpleQA **29.9%**, AIME 2025 **29.7%**](https://arxiv.org/abs/2507.06261). [AA historical GPQA **62.3%**, HLE **4.3%**, Omniscience accuracy **23.5%** and hallucination **86.2%**](https://benchlm.ai/models/gemini-2-0-flash). AA's live v5 Index **N/A** denotes a deprecated, no-longer-tested API, *not* 0 performance. Different GPQA protocols/versions explain why both 65.2 and 62.3 are retained without averaging them.
- **Coding:** Vendor comparison [SWE-bench Verified **21.4%**](https://arxiv.org/abs/2507.06261). In a small independent [optillmbench exact-`-001` evaluation](https://huggingface.co/datasets/codelion/optillmbench), base **51.0%** on its separate problem set improved to **57.0%** with tool/code execution; this is *not* SWE-bench and cannot be used to inflate repository-repair accuracy.
- **Context / multimodal:** [AA historical AA-LCR **31.3%**](https://benchlm.ai/models/gemini-2-0-flash) does not validate 1M multi-hop retrieval. Google's successor report comparison [MMMU **69.3%**](https://arxiv.org/abs/2507.06261) demonstrates image understanding; separately published [VisTW MCQ `gemini-2.0-flash-001` **0.6596**](https://huggingface.co/datasets/miulab/vistw-mcq) is a traditional-Chinese visual dataset on its own scale, not a direct MMMU replication. Audio and video comprehension are API-supported but no independent exact-ID audio/video score verified in reviewed sources.

### Normalized scores (1–100)

- **Tool use: 54/100.** Tools supported, but historical independent τ² 29.5 and limited longer-task results.
- **Reasoning: 61/100.** GPQA 62–65 and AIME 29.7, constrained by HLE and factual calibration.
- **Context window: 69/100.** 1M input but AA-LCR 31.3, 8K output and no near-cap proof.
- **Multimodal: 70/100.** Audio/video/image in, text only out, vendor MMMU 69.3; no standard-ID image generation.
- **Coding: 57/100.** SWE Verified 21.4 and modest independent code-set result.
- **Cost efficiency: 50/100.** Formerly efficiency-oriented but route is shut down; no fabricated current price.
- **Overall Score: 62/100.** Half-up mean (54 + 61 + 69 + 70 + 57) / 5 = 62.2; cost excluded.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-11-01 UTC
- Method: Separate model/dataset/full-text searches, exact-ID Google specification and retirement check, Google successor-study baseline and independent historical AA, optillmbench and VisTW results. Reconciled misleading catalog image-output claim against the standard API card.
- Reference URLs:
  - [Google Gemini 2.0 Flash model card](https://ai.google.dev/gemini-api/docs/models/gemini-2.0-flash)
  - [Google Gemini API retirement table](https://ai.google.dev/gemini-api/docs/deprecations)
  - [Google Gemini 2.5 technical report, 2.0 Flash comparison](https://arxiv.org/abs/2507.06261)
  - [Artificial Analysis historical profile](https://artificialanalysis.ai/models/gemini-2-0-flash)
  - [BenchLM source-linked historical benchmark archive](https://benchlm.ai/models/gemini-2-0-flash)
  - [Independent optillmbench exact-ID record](https://huggingface.co/datasets/codelion/optillmbench)
- Future sources: add a new file next to this one using the same headings.
