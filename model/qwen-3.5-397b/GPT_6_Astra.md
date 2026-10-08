# Qwen3.5 397B A17B — findings by GPT 6 Astra

- Source: Qwen3.5 397B A17B public primary sources
- Date: 2026-10-08 (UTC)
- [Overview and scoring methodology](../../model-comparison.md)
- [Cross-model signed log](../../model-findings.md)

## Model card

- Project identity (user-confirmed 2026-10-08): `Qwen/Qwen3.5-397B-A17B` = `opencode/qwen-3.5-397b`; canonical folder `model/qwen-3.5-397b`. Do not create a separate model for the upstream name. This is a project alias mapping, not verification of a live OpenCode endpoint.
- Metadata caveat: the existing scaffold's `128K total` and `Text in/out` are generic defaults from [buildScaffoldMeta](../../scripts/lib/naming.mjs), not measured model limits. See [project identity rule](../../RULES.md).
- Alibaba Qwen, 397B total/17B active hybrid Gated DeltaNet MoE with vision encoder; Apache 2.0. February 16, 2026 gateway release; cutoff/output maximum unverified.
- Native context 262,144; optional extension 1,010,000. Text/image/video input, text output; thinking and agent tools. [Official card](https://huggingface.co/Qwen/Qwen3.5-397B-A17B).
- OpenRouter starts at USD/M $0.39 input/$2.34 output, 262K listed context. [Provider catalog](https://openrouter.ai/qwen/qwen3.5-397b-a17b).

### Raw benchmarks found

Vendor thinking/default evaluation: GPQA (as labeled) 88.4, HLE 28.7, AIME26 91.3, LCBv6 83.6, BFCLv4 72.9, tau2 86.7, SWE Verified 76.4, Terminal Bench 2 52.5, AA-LCR 68.7, LongBenchv2 63.2; MMMU-Pro 79.0, VideoMME without subtitles 83.7. Tau2 uses airline fixes; these are vendor-harness results. HLE with tools and HLE-Verified are separate tests, not substituted. [Evaluation](https://huggingface.co/Qwen/Qwen3.5-397B-A17B). SciCode: no verified public score found.

### Normalized scores (1–100)

- **Tool use: 73/100.** Good function calling and tau2; terminal score moderates estimate.
- **Reasoning: 82/100.** Strong GPQA/math, HLE below frontier.
- **Context window: 78/100.** Native 262K and measured long-context performance; extended capacity not treated as native.
- **Multimodal: 86/100.** Strong image/video/document performance; no native audio output verified.
- **Coding: 77/100.** Useful SWE and algorithmic coding, moderate terminal tasks.
- **Cost efficiency: 92/100.** Economical listed paid route.
- **Overall Score: 79/100.** Half-up mean of the five quality dimensions; cost excluded.

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-08
- Method: Independent fresh public-web research; normalized scores are interpretations, not official benchmark scores. No local model tests.

