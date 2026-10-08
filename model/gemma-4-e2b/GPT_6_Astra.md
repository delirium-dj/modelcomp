# Gemma 4 E2B — findings by GPT 6 Astra

- Source: Gemma 4 E2B public primary sources
- Date: 2026-10-08 (UTC)
- [Overview and scoring methodology](../../model-comparison.md)
- [Cross-model signed log](../../model-findings.md)

## Model card

- Google DeepMind `google/gemma-4-E2B-it`, April 2026 family release; cutoff unverified. Dense PLE: 2.3B effective, 5.1B including embeddings; Apache 2.0. 128K context, output maximum unverified; image/audio/video-frame/text input, text output; reasoning and tools. [Official card](https://huggingface.co/google/gemma-4-E2B-it).
- Bedrock US on-demand USD/M $0.04 input/$0.08 output; region-dependent. [Provider pricing](https://aws.amazon.com/bedrock/pricing/). AA's $0 display has zero listed providers and is not treated as a verified free endpoint. [AA provider coverage](https://artificialanalysis.ai/models/gemma-4-e2b/providers).

### Raw benchmarks found

Google IT evaluation: GPQA Diamond 43.4%, AIME2026 no-tools 37.5%, LiveCodeBench v6 44%, Codeforces Elo 633; tau2 three-domain average 24.5%; MMMU-Pro 44.2%; CoVoST 33.47, FLEURS 0.09 (lower better); MRCRv2 eight-needle 128K average 19.1%. [Vendor card](https://huggingface.co/google/gemma-4-E2B-it) / [full evaluation](https://ai.google.dev/gemma/docs/core/model_card_4). HLE, SWE Verified, Terminal-Bench: no verified public score found.

### Normalized scores (1–100)

- **Tool use: 36/100.** Limited tau2 performance despite native function calling.
- **Reasoning: 44/100.** Modest GPQA and mathematics scores.
- **Context window: 43/100.** 128K nominal; poor measured retrieval warrants substantial discount.
- **Multimodal: 85/100.** Broad sensory input and measured speech/vision; text-only output.
- **Coding: 46/100.** LCB supports basic coding, without verified repository-agent performance.
- **Cost efficiency: 99/100.** Very low but nonzero US hosted price.
- **Overall Score: 51/100.** Half-up mean of the five quality dimensions; cost excluded.

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-08
- Method: Independent fresh public-web research; normalized scores are interpretations, not official benchmark scores. No local model tests.

