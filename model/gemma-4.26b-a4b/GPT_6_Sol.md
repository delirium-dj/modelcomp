# Gemma 4 26B A4B — findings by GPT 6 Sol

- Source: Google (`google/gemma-4-26B-A4B-it`)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Identity / access:** Google DeepMind's April 2026 **instruction-tuned** Gemma 4 MoE checkpoint, **25.2B total / 3.8B active**, Apache-2.0 weights. `google/gemma-4-26B-A4B` is a separately released **pretrained base** for fine-tuning, not a second independent measurement of the IT checkpoint; reasoning toggle and GGUF/quantizations are deployment variants, not new models. This report follows the existing dotted folder's `-it` ID; the separate `model/gemma-4-26b-a4b/` catalog entry also describes this size and must not receive another scored report for the *same* IT checkpoint ([Google model card](https://huggingface.co/google/gemma-4-26B-A4B-it), [base model tree](https://huggingface.co/google/gemma-4-26B-A4B)).
- **Context / modalities:** **262,144-token** context, text/image input and video through sequences of image frames, text output. **No native audio** in this size (only E2B/E4B/12B have audio). Google limits video to about 60 seconds at one frame/s in the sample pipeline; frame processing is not a native continuous-video codec ([official card](https://huggingface.co/google/gemma-4-26B-A4B-it)).
- **Cost:** Downloadable weights at no license fee, not free GPUs. [Artificial Analysis](https://artificialanalysis.ai/models/gemma-4-26b-a4b) observed cross-provider median **$0.10 input/$0.34 output per million** and **99.9 tokens/s**, not a guaranteed Google first-party tariff; its live v5 Intelligence Index shows **N/A** despite historical benchmark rows.

### Raw benchmarks found

- **Agents:** Google [τ²-Bench average across three domains **68.2%**](https://huggingface.co/google/gemma-4-26B-A4B-it). Independent historical [AA τ² **43.6%**, GDPval-AA **713 Elo**](https://benchlm.ai/models/gemma-4-26b-a4b) show a substantially weaker result with a different setup. This **24.6-point τ² gap is unresolved**; no evidence justifies picking the vendor result as a reproduced pass rate. Native function-call formatting is supported, but is not equivalent to successful long-horizon work.
- **Reasoning:** Vendor [MMLU-Pro **82.6%**, GPQA Diamond **82.3%**, AIME 2026 **88.3%**, HLE **8.7% without tools / 17.2% with search**](https://huggingface.co/google/gemma-4-26B-A4B-it). Source-linked [AA GPQA **79.2%** and HLE **19.3%**](https://benchlm.ai/models/gemma-4-26b-a4b) are historical independent runs with distinct protocols. The 17.2 result must retain its search-tool qualifier; the higher independent HLE figure need not imply a newer checkpoint.
- **Coding:** Vendor [LiveCodeBench v6 **77.1%**, Codeforces **1718 Elo**](https://huggingface.co/google/gemma-4-26B-A4B-it). Independent source-linked [AA Coding Index **39.3** and SciCode **40.0%**](https://benchlm.ai/models/gemma-4-26b-a4b) indicate weaker hard applied coding; an Index is not a pass-rate percentage. No exact-checkpoint independent SWE-bench repair result verified.
- **Vision / context:** Vendor [MMMU-Pro **73.8%**, MathVision **82.4%**, MRCR v2 eight-needle **44.1% average at 128K**](https://huggingface.co/google/gemma-4-26B-A4B-it). Independent [AA-MMMU-Pro **69.2%**, AA-LCR **65.7%**](https://benchlm.ai/models/gemma-4-26b-a4b); [LlamaIndex ParseBench mean **58.5%**](https://huggingface.co/google/gemma-4-26B-A4B-it/discussions/29) is a document-parser *pipeline with layout*, not raw model vision alone. MRCR at 128K does not establish recall across 256K; the two LCR-style tests use different tasks.

### Normalized scores (1–100)

- **Tool use: 62/100.** Vendor τ² 68.2 versus independent 43.6 with unresolved evaluation difference.
- **Reasoning: 75/100.** Strong GPQA/AIME, lower no-tool HLE; independent GPQA 79.2.
- **Context window: 68/100.** 256K available, 44.1 MRCR at 128K warrants caution.
- **Multimodal: 70/100.** Solid image reasoning and frame-based video, but no audio or media output and AA visual result lower.
- **Coding: 70/100.** LCB 77.1 but SciCode 40.0 and no verified SWE resolution test.
- **Cost efficiency: 87/100.** Apache weights, 3.8B active and modest provider median; hosting still costs money.
- **Overall Score: 69/100.** Half-up mean (62 + 75 + 68 + 70 + 70) / 5 = 69.0; cost excluded.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-11-01 UTC
- Method: Separate model, full-text and dataset catalog searches; direct IT/base official cards, AA profile and independently sourced benchmark archive. Kept the duplicate slug unscored and disclosed the τ² and multimodal pipeline confounders.
- Reference URLs:
  - [Google Gemma 4 26B A4B IT model card and benchmarks](https://huggingface.co/google/gemma-4-26B-A4B-it)
  - [Google Gemma 4 26B A4B pretrained base](https://huggingface.co/google/gemma-4-26B-A4B)
  - [Artificial Analysis deployment profile](https://artificialanalysis.ai/models/gemma-4-26b-a4b)
  - [BenchLM source-linked independent benchmark archive](https://benchlm.ai/models/gemma-4-26b-a4b)
  - [LlamaIndex ParseBench evaluation record](https://huggingface.co/google/gemma-4-26B-A4B-it/discussions/29)
- Future sources: add a new file next to this one using the same headings.
