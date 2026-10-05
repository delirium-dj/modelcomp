# Gemma 4 12B Unified — findings by GPT 6 Astra

- Source: Google DeepMind / Gemma 4 12B Unified
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: [Methodology](../../model-comparison.md)
- Cross-model signed log: [Findings](../../model-findings.md)

## Model card

- **Name:** Gemma 4 12B Unified, instruction-tuned.
- **Short description:** Local multimodal model with encoder-free image/audio processing.
- **Provider / IDs:** Weights `google/gemma-4-12B-it`; local runtime determines API. Oxyy lists `google/gemma-4-12b-it` with compatible APIs; availability is not established by its listing. No verified Zen Free ID.
- **Release / knowledge:** June 3, 2026; cutoff not verified. [Google developer guide](https://developers.googleblog.com/gemma-4-12b-the-developer-guide/)
- **Architecture:** 11.95B dense parameters, unified decoder. Apache 2.0 open weights. [Google weight card](https://huggingface.co/google/gemma-4-12B-it)
- **Context window:** 256K; separate output cap not verified.
- **Modalities:** Text/image/audio and video frames in, text out; thinking and native function calling. [Google model card](https://ai.google.dev/gemma/docs/core/model_card_4)
- **Pricing (2026-10-05):** Oxyy lists $0.10/$0.30 input/output per million, alongside $0.04/$0.12 effective rates and $0 cache. Its page reports zero successful requests out of nine in 30 days; score uses listed pricing provisionally. Local compute is not free. [Gateway tariff](https://oxyy.ai/models/gemma-4-12b-it)

### Raw benchmarks found

Instruction-tuned 12B column: Tau2 three-domain average 69.0%; GPQA Diamond 78.8%; AIME 2026 without tools 77.5%; HLE without tools 5.2%; MMLU-Pro 77.2%; LiveCodeBench v6 72.0%; Codeforces 1659; MMMU Pro 69.1%; CoVoST 38.5 and FLEURS 0.069 (lower better), excluding Chinese; MRCR v2 eight-needle 128K 43.4%. Vendor-reported; no independent rank claimed. [Google evaluation table](https://ai.google.dev/gemma/docs/core/model_card_4)

Terminal-Bench, Tau3, GDPval, Claw-Eval, MCP-Atlas, CritPt, Omniscience, SWE-bench, SciCode and Vibe Code Bench: no verified public score found.

### Normalized scores (1–100)

- **Tool use: 66/100.** Tau2 supports useful tools; sustained agent benchmarks missing.
- **Reasoning: 65/100.** Good GPQA, weaker HLE and retrieval.
- **Context window: 68/100.** 256K capacity discounted for 43.4% retrieval at 128K.
- **Multimodal: 95/100.** Native audio plus image/video inputs; output remains text.
- **Coding: 69/100.** Competitive programming evidence; no verified repository-repair result.
- **Cost efficiency: 98/100.** Low listed gateway tariff, provisional given availability evidence.
- **Overall Score: 73/100.** Half-up mean: (66 + 65 + 68 + 95 + 69) / 5 = 72.6. Useful local multimodal model.

---

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-05 UTC
- Method: Fresh public primary-source research; normalized scores are interpretations, not vendor scores.

