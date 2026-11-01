# Gemma 4 12B Unified — findings by GPT 6 Sol

- Source: Google DeepMind (`google/gemma-4-12B-it`)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name / identity:** Gemma 4 12B Unified, the instruction-tuned **11.95B-parameter** dense, encoder-free checkpoint, not the separately published pre-trained `google/gemma-4-12B` or a new model for each inference provider. The separately spelled `gemma-4-12b-unified` folder denotes this *same* checkpoint, not an additional model ([Google model card](https://huggingface.co/google/gemma-4-12B-it)).
- **Access / license:** Downloadable `google/gemma-4-12B-it` Apache-2.0 weights; local deployment or third-party hosted APIs, whose prices and availability vary. Released June 2026, January 2025 training-data cutoff ([Google card](https://huggingface.co/google/gemma-4-12B-it), [Gemma 4 technical report](https://arxiv.org/abs/2607.02770)).
- **Context / modalities:** **256K** tokens; text, images, audio and video frames in, **text out**. Native function-calling, optional reasoning and system prompts. Google limits demonstrated audio to **30 seconds** and video to **60 seconds at 1 fps**; neither implies generated speech or video ([Google card](https://huggingface.co/google/gemma-4-12B-it)).
- **Pricing (2026-11-01):** Local weights carry no per-token license charge but require compute. [Artificial Analysis](https://artificialanalysis.ai/models/gemma-4-12b) reports a **provider-median $0.10 input / $0.30 output per million**; this is not a first-party Google tariff and varies by host.

### Raw benchmarks found

- **Agent / tool use:** Vendor [τ²-Bench average across three settings **69.0%**](https://huggingface.co/google/gemma-4-12B-it); independent [Artificial Analysis historical τ² **36.3%**, GDPval-AA 591 Elo](https://benchlm.ai/models/gemma-4-12b). These are **different harness/settings**, not agreeing replications; the 32.7-point gap substantially lowers confidence in vendor-level agent reliability. Function-call support is documented, but no verified Terminal-Bench score found.
- **Reasoning / knowledge:** Google [GPQA Diamond **78.8%**, AIME 2026 no tools **77.5%**, MMLU-Pro **77.2%**, HLE no tools **5.2%**](https://huggingface.co/google/gemma-4-12B-it). Independent archive links [AA-GPQA **75.3%**, AA-HLE **15.7%**, AA-IFBench **73.5%**](https://benchlm.ai/models/gemma-4-12b). HLE protocols differ sharply; neither number should be substituted for the other.
- **Coding:** Vendor [LiveCodeBench v6 **72.0%** and Codeforces Elo **1659**](https://huggingface.co/google/gemma-4-12B-it), versus independently recorded [AA Coding Index **31.0%**](https://benchlm.ai/models/gemma-4-12b). These measure unlike tasks; no exact-checkpoint public SWE-bench Verified result established.
- **Long context:** Google's [MRCR v2 eight-needle retrieval at 128K **43.4%**](https://huggingface.co/google/gemma-4-12B-it); independent [AA-LCR **63.7%**](https://benchlm.ai/models/gemma-4-12b) is a different test, not proof of robust 256K retrieval.
- **Multimodal:** Vendor [MMMU-Pro **69.1%**, CoVoST **38.5** (Chinese excluded), FLEURS **0.069** lower-is-better (Chinese excluded)](https://huggingface.co/google/gemma-4-12B-it). Independent [AA-MMMU-Pro **69.7%**](https://benchlm.ai/models/gemma-4-12b) supports visual capability; neither score proves long video comprehension or audio generation.

### Normalized scores (1–100)

- **Tool use: 67/100.** Native calling and vendor τ² 69, discounted by independently observed 36.3 and missing terminal-agent evidence.
- **Reasoning: 76/100.** GPQA 75–79 and AIME 77.5 strong for size, but HLE/protocol uncertainty remains.
- **Context window: 71/100.** 256K advertised; 43.4% eight-needle retrieval at half-window caps reliability.
- **Multimodal: 88/100.** Native text/image/audio/video input with corroborated image score, but text-only output and short audio/video limits.
- **Coding: 72/100.** Vendor LiveCodeBench 72 and independent Coding Index 31 leave repository-level coding unverified.
- **Cost efficiency: 96/100.** Downloadable open weights and ~$0.10/$0.30 median hosted rate; local hardware is not free.
- **Overall Score: 75/100.** Half-up mean (67 + 76 + 71 + 88 + 72) / 5 = 74.8; practical small-scale multimodal local model, not a verified long-horizon agent.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-11-01 UTC
- Method: Independent Hugging Face model, full-text and dataset searches; exact instruction-tuned checkpoint and vendor benchmark audit cross-checked against source-linked third-party evaluations. Scores are normalized judgments, not benchmark percentages.
- Reference URLs:
  - [Google Gemma 4 12B IT model card and benchmark table](https://huggingface.co/google/gemma-4-12B-it)
  - [Gemma 4 technical report](https://arxiv.org/abs/2607.02770)
  - [BenchLM source-linked Gemma 4 12B historical results](https://benchlm.ai/models/gemma-4-12b)
  - [Artificial Analysis model and provider median price](https://artificialanalysis.ai/models/gemma-4-12b)
- Future sources: add a new file next to this one using the same headings.
