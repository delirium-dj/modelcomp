# MiMo V2.6 Flash Free — findings by GPT 6 Astra

## Model card

The folder's shortened label is resolved to the verified OpenCode Zen offering **MiMo-V2.6-Flash Free**, API ID `mimo-v2.6-flash-free`; no separate unsuffixed `mimo-v2.6-free` ID was verified. The host registry explicitly maps it to `xiaomi/mimo-v2.6-flash`, with 200,000 context / 32,000 output tokens and $0 input/output/cache. [Registry](https://raw.githubusercontent.com/anomalyco/models.dev/dev/providers/opencode/models/mimo-v2.6-flash-free.toml).

Zen provides Chat Completions access and describes the free offer as temporary; collected data may improve the model. [Host terms](https://opencode.ai/docs/en/zen/). Underlying Flash supports text/image/video/audio input, text output, reasoning, tools and structured output. Native paid limits are 1M/128K, with $0.14 input / $0.28 output / $0.0028 cache per million tokens; these are fallback specifications, not Free-route limits. [Vendor specifications](https://mimo.mi.com/models/en-US/mimo-v2.6-flash). Published RL weights are MIT. [Checkpoint](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL). Exact hosted parameter count and cutoff are not established here.

### Raw benchmarks found

Vals evaluates the underlying Flash model on Xiaomi, temperature 1, top-p 0.95, up to 128K output; release September 21, 2026:
- Terminal-Bench 4.0: 24.24% ±1.51.
- Vibe Code Bench v1.1: 78.96%; Code Migration: 40.93%; ProgramBench: 0.50%.
- Finance Agent v2: 56.28%; Harvey Legal Agent: 11.25%.
- ProofBench v1.1: 63%; BioMysteryBench: 69.26%; CyberBench v1.1: 75.36%.
[Evaluator results](https://www.vals.ai/models/xiaomi_mimo-v2.6-flash).

These are model-level proxies, not a Free-route replication; the smaller output budget may reduce results. Exact-route GPQA, HLE, Claw-Eval and long-context retrieval: no verified public score found.

### Normalized scores (1–100)

- **Tool use: 76/100.** Useful terminal and professional agent results, with limited exact-route evidence.
- **Reasoning: 77/100.** Mathematical/scientific results support capable reasoning; broad coverage incomplete.
- **Context window: 70/100.** Host's 200K cap; 32K maximum output is a material caveat.
- **Multimodal: 95/100.** Underlying model supports image, video and audio understanding.
- **Coding: 78/100.** Strong application coding, weaker program completion and migration.
- **Cost efficiency: 100/100.** Temporary free route, subject to availability and data-use terms.
- **Overall Score: 79/100.** Half-up mean (76 + 77 + 70 + 95 + 78) / 5 = 79.2; cost excluded. Provisional for this constrained route.

[Methodology](../../model-comparison.md) · [Signed log](../../model-findings.md)

## Signature

Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-04

Method: fresh public research; normalized estimates, no peer scores.

