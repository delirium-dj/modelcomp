# Mistral Medium 3.5 — findings by GPT 6 Sol

- Source: Mistral AI (`mistral-medium-3-5`; `mistralai/Mistral-Medium-3.5-128B`)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name / description:** Mistral Medium 3.5 is Mistral's unified instruct/reasoning/coding model, replacing earlier Medium, Magistral and Devstral deployments in its apps. **One set of weights** serves `reasoning_effort=none` and `high`; those settings are not separate models ([official weights card](https://huggingface.co/mistralai/Mistral-Medium-3.5-128B)).
- **Access / lifecycle:** Mistral Chat Completions and Conversations API `mistral-medium-3-5` plus downloadable `mistralai/Mistral-Medium-3.5-128B`; **deprecated October 31, 2026**, but scheduled to retire April 30, 2027, not already shut down. The April 2026 release and Modified MIT license have large-revenue exceptions ([model page](https://docs.mistral.ai/models/mistral-medium-3-5-26-04), [weights card](https://huggingface.co/mistralai/Mistral-Medium-3.5-128B)).
- **Architecture / modalities:** **128B dense**, **256K context**; text and image input, text output, native function calls and structured JSON. No substantiated native audio or video input/output. Local inference requires substantial hardware; Mistral warns that an [early incorrect Transformers configuration](https://huggingface.co/mistralai/Mistral-Medium-3.5-128B/commit/c4be198050fb5789774a55b92ed697becfbf20ae) damaged long-context performance; use fixed weights/configuration.
- **Pricing (2026-11-01):** [Artificial Analysis historical Mistral API rate](https://artificialanalysis.ai/models/mistral-medium-3-5) **$1.50 input / $7.50 output per million tokens**, reported cache discount 90%; deprecated model absent from Mistral's [current featured tariff table](https://docs.mistral.ai/inference/pricing), so verify live availability and charges before committing. Local deployment has hardware costs.

### Raw benchmarks found

- **Agent / tool use:** Mistral reports [τ³-Telecom **91.4%**](https://huggingface.co/mistralai/Mistral-Medium-3.5-128B) with native function calling. This vendor telecom result cannot be read as τ²-Bench or as general agent reliability. No independently reproduced exact-ID τ³ or Terminal-Bench figure established.
- **Coding:** Vendor [SWE-bench Verified **77.6%**](https://huggingface.co/mistralai/Mistral-Medium-3.5-128B). The agent scaffold, budget and effort are not specified in the short card; don't compare this raw number to another model's bare pass@1. No verified independent same-harness SWE-Pro or LiveCodeBench figure found.
- **Reasoning:** [Independent Land-on-Earth geography task **82.0%** with reasoning off](https://huggingface.co/datasets/solalzana/land-on-earth) is a narrow domain, not GPQA or HLE. The vendor card graphs other reasoning results as images without machine-readable values; no GPQA/HLE number extracted or invented.
- **Context:** 256K documented, but no exact-model 128K+ MRCR/RULER score established. [Mistral's config correction](https://huggingface.co/mistralai/Mistral-Medium-3.5-128B/commit/c4be198050fb5789774a55b92ed697becfbf20ae) makes old self-hosted long-context evaluations potentially non-comparable.
- **Multimodal:** Vision encoder and variable image resolutions confirmed in the [official card](https://huggingface.co/mistralai/Mistral-Medium-3.5-128B); no verified exact-ID MMMU-Pro or audio/video score found.

### Normalized scores (1–100)

- **Tool use: 80/100.** Strong vendor telecom agent score and function calling, tempered by missing independent general-agent results.
- **Reasoning: 74/100.** Configurable reasoning and narrow independent geography result; standard cross-model reasoning evidence missing.
- **Context window: 72/100.** 256K capacity but no measured long-window accuracy and a known early configuration defect.
- **Multimodal: 63/100.** Image and text in, text out; no audio/video or verified vision benchmark.
- **Coding: 78/100.** Vendor SWE Verified 77.6 supports strong code repair; no independent matching run.
- **Cost efficiency: 68/100.** $1.50/$7.50 API rate and 128B self-hosting cost offset the open weights.
- **Overall Score: 73/100.** Half-up mean (80 + 74 + 72 + 63 + 78) / 5 = 73.4; promising coding/vision model with deprecated API and limited independent replication.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-11-01 UTC
- Method: Fresh Hugging Face model, model-content and dataset searches, official API lifecycle and weights-card checks, independent task and price cross-check. Normalized scores are interpretations, not vendor scores.
- Reference URLs:
  - [Mistral official model and lifecycle page](https://docs.mistral.ai/models/mistral-medium-3-5-26-04)
  - [Mistral official 128B model card and benchmarks](https://huggingface.co/mistralai/Mistral-Medium-3.5-128B)
  - [Mistral long-context config fix](https://huggingface.co/mistralai/Mistral-Medium-3.5-128B/commit/c4be198050fb5789774a55b92ed697becfbf20ae)
  - [Independent Land-on-Earth evaluation](https://huggingface.co/datasets/solalzana/land-on-earth)
  - [Artificial Analysis Mistral Medium 3.5 price and specifications](https://artificialanalysis.ai/models/mistral-medium-3-5)
- Future sources: add a new file next to this one using the same headings.
