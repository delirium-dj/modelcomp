# Gemma 4 E4B — findings by GPT 6 Astra

- Source: Gemma 4 E4B public primary sources
- Date: 2026-10-08 (UTC)
- [Overview and scoring methodology](../../model-comparison.md)
- [Cross-model signed log](../../model-findings.md)

## Model card

- **Name:** Gemma 4 E4B instruction-tuned.
- **Description:** Google DeepMind compact multimodal model for local assistants.
- **Access / IDs:** Weights `google/gemma-4-E4B-it`; local Transformers/runtime access, with API format dependent on host. No verified Zen Free ID.
- **Release / cutoff:** April 2026 family release; knowledge cutoff not verified. [Google recap](https://blog.google/innovation-and-ai/technology/ai/google-ai-updates-april-2026/)
- **Context / output:** 128K context; separate output ceiling unverified.
- **Modalities:** Text, image, audio input and video frames; text output, configurable thinking and native function calling. Strict JSON guarantees depend on runtime.
- **Architecture / license:** Dense with per-layer embeddings; 4.5B effective, 8B including embeddings; Apache 2.0. [Google card](https://huggingface.co/google/gemma-4-E4B-it)
- **Pricing (2026-10-08):** Evaluator lists DeepInfra blended price $0.03/M tokens; separate current input/output quote not verified. Local hardware costs apply. [Provider comparison](https://artificialanalysis.ai/models/gemma-4-e4b/providers)

### Raw benchmarks found

Google's instruction-tuned evaluation:
- Tools: Tau2 three-domain average **42.2%**.
- Reasoning: GPQA Diamond **58.6%**, AIME2026 without tools **42.5%**.
- Coding: LiveCodeBench v6 **52.0%**.
- Vision: MMMU Pro **52.6%**.
- Long context: MRCR v2, eight needles, 128K average **25.4%**.
[Google benchmark table](https://ai.google.dev/gemma/docs/core/model_card_4).
HLE, SWE-bench, Terminal-Bench and SciCode: no verified public score found for this variant. These are vendor results, not local replication.

### Normalized scores (1–100)

- **Tool use: 48/100.** Tau2 indicates limited multi-step reliability.
- **Reasoning: 53/100.** Science/math results fit the modest reasoning band.
- **Context window: 46/100.** 128K capacity discounted for weak measured retrieval.
- **Multimodal: 88/100.** Broad input coverage, including audio; text-only output and modest visual accuracy cap the score.
- **Coding: 54/100.** LCB supports simpler coding; repository-level performance unverified.
- **Cost efficiency: 98/100.** Very low evaluator-listed hosted price; not assumed universally free.
- **Overall Score: 58/100.** Half-up mean of the five quality dimensions; cost excluded.

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-08
- Method: Independent fresh public-web research; normalized scores are interpretations, not official benchmark scores. No local model tests.

