# Gemini 1.5 Pro — findings by GPT 6 Sol

- Source: Google (`gemini-1.5-pro-002`, September 2024 generation)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 1.5 Pro. Historical proprietary Google model; Google's [May 2024 announcement](https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/) distinguishes its upgraded Pro from the lighter Flash. The [Google team technical report](https://arxiv.org/abs/2403.05530) spans several 1.5 revisions, so its record demonstrations must not automatically be assigned to the exact September 2024 endpoint later tested by independent evaluators.
- **Availability / identity:** The historical [Artificial Analysis profile](https://artificialanalysis.ai/models/gemini-1-5-pro) identifies **Gemini 1.5 Pro (Sep '24)** as deprecated, with no current public API for fresh v5 intelligence runs. Do not claim the old route is presently orderable or fold Gemini 1.5 Flash into its scores. No public weights or verified parameter count.
- **Specifications:** **2 million-token** maximum context in the later 1.5 Pro API rollout; text, image, speech/audio and video input with text output, August 2024 knowledge cutoff ([Google](https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/), [AA archival profile](https://artificialanalysis.ai/models/gemini-1-5-pro)). The original February version and initial May public preview had 1M; 2M first arrived as a waitlist option, not a property of every historical deployment.
- **Pricing:** No current first-party tariff for the retired ID was verified; archival pricing, if used, must specify date and input-length bracket. Do not apply current Gemini Pro prices to this model.

### Raw benchmarks found

- **Agents / tools:** Google's [2024 launch](https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/) documents workflow automation through multiple function calls, but reviewed exact-model sources provide **no verified comparable agent/task completion percentage**. A function-calling API is not itself a successful agent benchmark.
- **Reasoning:** Source-linked historical [Artificial Analysis GPQA Diamond **58.9%**, HLE **4.6%**, Intelligence Index **7.9**](https://benchlm.ai/models/gemini-1-5-pro). The index is an index, not 7.9% accuracy; the archive's percent rendering of the index should not be used as a probability. The [AA live page](https://artificialanalysis.ai/models/gemini-1-5-pro) now shows **N/A** under its revised v5 index because it no longer benchmarks the retired model; N/A is not zero or a contradiction of archived scores.
- **Coding:** [Artificial Analysis historical Coding Index **23.6**](https://benchlm.ai/models/gemini-1-5-pro) is a composite scale, not a pass@1 SWE-bench result. Google describes better code generation in its [May update](https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/) but did not publish an exact-match independent repository-repair result in reviewed sources.
- **Context:** Google's [technical report](https://arxiv.org/abs/2403.05530) claims **>99% synthetic needle retrieval to at least 10M** for experimental configurations and strong long-document, video and audio QA. This is vendor research over the family, *not* proof that the September production endpoint accepted 10M, nor that high-fidelity multi-hop understanding persisted to the 2M boundary. The historical accessible limit remained 2M.
- **Multimodal:** Independent [AA-MMMU-Pro **55.0%**](https://benchlm.ai/models/gemini-1-5-pro); a third-party [Molmo evaluation card](https://huggingface.co/allenai/Molmo-7B-D-0924) reports Gemini 1.5 Pro **78.3** on its separate visual-annotation benchmark, with a different question set and possibly earlier version. Keep these distinct rather than interpreting the spread as a direct disagreement. Google documents audio/video comprehension, not native media output.

### Normalized scores (1–100)

- **Tool use: 54/100.** Vendor-confirmed calls and orchestration, without a reliable exact-ID agent completion benchmark.
- **Reasoning: 61/100.** Historical GPQA 58.9 and HLE 4.6, well below newer frontier systems.
- **Context window: 85/100.** Historical 2M accessible and strong family needle research, tempered by deployment and synthesis caveats.
- **Multimodal: 69/100.** Audio/video/image input and independent visual scores; text-only output.
- **Coding: 55/100.** Independent historical Coding Index 23.6 and no verified hard repo benchmark.
- **Cost efficiency: 48/100.** Historical long-input serving was metered and the exact model is unavailable; no invented current price.
- **Overall Score: 65/100.** Half-up mean (54 + 61 + 85 + 69 + 55) / 5 = 64.8; cost excluded. Historical assessment, not a current API recommendation.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-11-01 UTC
- Method: Separate web, full-text and dataset searches, Google launch and Gemini-team technical-report review, independent AA archive and Molmo visual evaluation. Separated family-level experimental retrieval from the September API endpoint and index scores from accuracy percentages.
- Reference URLs:
  - [Google I/O Gemini 1.5 Pro context and modality announcement](https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/)
  - [Gemini team technical report](https://arxiv.org/abs/2403.05530)
  - [Artificial Analysis deprecated September 2024 endpoint](https://artificialanalysis.ai/models/gemini-1-5-pro)
  - [BenchLM source-linked historical benchmark archive](https://benchlm.ai/models/gemini-1-5-pro)
  - [Allen Institute Molmo visual benchmark comparison](https://huggingface.co/allenai/Molmo-7B-D-0924)
- Future sources: add a new file next to this one using the same headings.
