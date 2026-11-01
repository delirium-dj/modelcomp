# Ling 3.0 Tiny — findings by GPT-6 Luna

- Source: InclusionAI/Ling-3.0-tiny (`inclusionAI/Ling-3.0-tiny`)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Tiny
- **Short description:** InclusionAI's compact hybrid-reasoning MoE language model for local and resource-constrained inference, with tool-use and coding capabilities. It has 7.9B total parameters but activates 1.3B per token; it is distinct from the larger Ling 3.0 Flash family.
- **Provider / access:** Official weights at Hugging Face `inclusionAI/Ling-3.0-tiny`, served locally with SGLang or vLLM. The official card shows an OpenAI-compatible Chat Completions example (`/v1/chat/completions`); no first-party hosted API was verified. The card links a free OpenRouter route, but that route was not independently confirmed available.
- **Release / knowledge:** Artificial Analysis lists an August 2026 release; BenchLM gives August 6, 2026. The Hugging Face repository was created August 10, 2026 and the card was last updated September 24, 2026. No knowledge cutoff was disclosed.
- **IDs:** `inclusionAI/Ling-3.0-tiny` (official weights); the card links `inclusionai/ling-3.0-tiny:free` on OpenRouter, whose current availability was not verified.
- **Context window:** The published HF config sets 131,072 positions. InclusionAI's official SGLang recipe extends this to 262,144 with YaRN (factor 2); Artificial Analysis lists a 262K context. Thus 262K is a supported extended serving configuration, not the unscaled config limit. The model card's Terminal-Bench test used 256K context.
- **Modalities:** Text input and text output only. Thinking is enabled by default and can be disabled per request. Tool calls are supported with the Ling 3 parser in the documented SGLang/vLLM serving setups; no image, audio, or video input or non-text output was verified.
- **Pricing (as of 2026-11-01):** The weights are downloadable under MIT with no license fee; self-hosting hardware and operation are not free. No stable first-party API price was found. Artificial Analysis displays $0.00/M input and output based on its provider data, but also says no publicly available API on the model page; treat hosted free access as provider-specific and unconfirmed.
- **Architecture:** 7.9B total / 1.3B active parameters; hybrid KDA/MLA attention in a 3:1 layer pattern and sparse MoE with 128 routed experts (8 routed plus 1 shared expert active per token). MIT license.

### Raw benchmarks found

The InclusionAI model card's evaluation chart is explicitly for **Ling-3.0-tiny (Thinking)**; thinking is also the default mode. The source chart provides numeric scores but does not specify units for every row. Do not infer percentages where the chart does not mark them.

Agent / tool use:

- Artificial Analysis Intelligence Index v4.1.1: **25**; Artificial Analysis Agentic Index: **16** (InclusionAI model-card text; index values, not percentages). Artificial Analysis' current page shows no Intelligence Index score and describes its current Index as v5.0, so the card's v4.1.1 value is retained as a dated/versioned vendor claim, not a current v5 score.
- GDPval v2-AA: **772.00** (official chart; unit/scale not stated on the chart). TAU3-Banking-AA: **20.80**; BFCL-v4 (FC): **62.72** (official chart; units not stated).
- Terminal-Bench 2.1: **27.70%** (official chart). InclusionAI says its run used the Artificial Analysis protocol, default Terminus 2 harness, 2-hour task timeout, JSON parser in preserve-thinking mode, three runs per task (mean), temperature 1.0, 32K max new tokens, and 256K context.
- ArtifactsBench: **47.93** (official chart; unit not stated).

Reasoning / knowledge:

- GPQA Diamond: **73.40%**; HLE: **9.30%**; HMMT-Feb26: **70.31**; IMO-AnswerBench: **71.03**; IFBench: **63.61**; LIFEBench: **62.30**; Multi-IF: **83.15** (official chart; percent signs are shown here only where customary percentage scoring is clear, while the chart itself prints bare values).
- AA-Omniscience Accuracy: **8.52**; AA-Omniscience Non-Hallucination Rate: **69.54** (official chart; bare values, not labelled with units).
- **Source disagreement:** BenchLM's October 29, 2026 snapshot, citing Artificial Analysis, lists GDPval-AA **3.0%**, AA-LCR **60.3%**, AA-Omniscience Accuracy **37.9%**, and hallucination rate **86.7%**; GPQA Diamond **73.4%** and HLE **9.3%** match the card chart. These GDPval/Omniscience values do not match the official chart's GDPval v2-AA **772.00**, accuracy **8.52**, or non-hallucination rate **69.54**; the accessible sources do not explain metric/version differences, so both records are preserved rather than combined.

Coding:

- SciCode: **24.20** (official chart; unit not stated). BenchLM's AA-attributed AA-SciCode entry is **24.2%**.
- Terminal-Bench 2.1 is **27.70%** as described above; ArtifactsBench is **47.93** (official chart).
- No verified exact-model SWE-bench Verified, SWE-Pro, LiveCodeBench, or Vibe Code Bench score found.

Long context:

- AA-LCR: **58.70** in the official card chart; BenchLM's current AA-attributed record is **60.3%**. The precise retrieval window is not stated in either accessible source; neither value establishes reliable retrieval at the full 262K extended limit.

### Normalized scores (1–100)

- **Tool use: 57/100.** BFCL-v4 62.72 and TAU3-Banking-AA 20.80 show usable but uneven tool ability; Terminal-Bench 2.1 is 27.70%, and the vendor-reported Agentic Index is only 16. [Official model card and chart](https://huggingface.co/inclusionAI/Ling-3.0-tiny).
- **Reasoning: 64/100.** GPQA Diamond 73.4%, HLE 9.3%, and the vendor-card Intelligence Index v4.1.1 score of 25 support mid-range reasoning; HMMT-Feb26 70.31 and IMO-AnswerBench 71.03 are stronger, but the index is from the older v4.1.1 generation and omniscience evidence conflicts across sources. [Official model card and chart](https://huggingface.co/inclusionAI/Ling-3.0-tiny); [BenchLM](https://benchlm.ai/models/ling-3-0-tiny).
- **Context window: 72/100.** The 262K YaRN-extended configuration falls in the 200K–500K tier; AA-LCR around 59–60 is moderate, and the sources do not establish full-window retrieval reliability. [Official SGLang recipe](https://docs.sglang.io/cookbook/autoregressive/InclusionAI/Ling-3.0-tiny); [Artificial Analysis](https://artificialanalysis.ai/models/ling-3-0-tiny).
- **Multimodal: 15/100.** The verified checkpoint is text-in/text-out only, with no documented image, audio, or video capability. [Artificial Analysis](https://artificialanalysis.ai/models/ling-3-0-tiny); [official model card](https://huggingface.co/inclusionAI/Ling-3.0-tiny).
- **Coding: 50/100.** Terminal-Bench 2.1 at 27.7%, SciCode at 24.2, and ArtifactsBench at 47.93 indicate some coding utility, but no verified repository-repair or competitive-programming score was found. [Official model card and chart](https://huggingface.co/inclusionAI/Ling-3.0-tiny); [BenchLM](https://benchlm.ai/models/ling-3-0-tiny).
- **Cost efficiency: 100/100.** MIT weights are free to download and self-host; this score does not imply that GPU hardware or operation is free, and a stable hosted API price was not verified. [Official model card](https://huggingface.co/inclusionAI/Ling-3.0-tiny); [MIT license](https://opensource.org/license/mit).
- **Overall Score: 52/100.** Half-up mean of the five quality dimensions: (57 + 64 + 72 + 15 + 50) / 5 = 51.6 → 52. Cost is excluded. A low-cost local text model with useful reasoning and function calling, but its modest agent/coding results and weak knowledge-reliability evidence argue against unsupervised high-stakes work.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-11-01
- Method: Three independent exact-model searches followed by direct review of InclusionAI's Hugging Face model card, its embedded benchmark chart, HF config, official SGLang cookbook, Artificial Analysis, and BenchLM. The downloaded official chart was inspected directly; its Thinking-mode values and Terminal-Bench 2.1 protocol are reported separately from the current aggregator snapshot where metrics disagree. No sibling Ling 3.0 results were transferred. Normalized scores are independent interpretations, not vendor scores.
- Reference URLs:
  - [InclusionAI Ling-3.0-tiny model card](https://huggingface.co/inclusionAI/Ling-3.0-tiny)
  - [Official Ling-3.0-tiny benchmark chart](https://cdn-uploads.huggingface.co/production/uploads/6502cf8fbdaeae26417cd3c9/g9Thw4ohjkDGYw0Cq7mKi.png)
  - [Official Hugging Face config](https://huggingface.co/inclusionAI/Ling-3.0-tiny/blob/main/config.json)
  - [Official SGLang serving recipe](https://docs.sglang.io/cookbook/autoregressive/InclusionAI/Ling-3.0-tiny)
  - [Artificial Analysis model page](https://artificialanalysis.ai/models/ling-3-0-tiny)
  - [BenchLM benchmark record](https://benchlm.ai/models/ling-3-0-tiny)
  - [MIT license](https://opensource.org/license/mit)

---
