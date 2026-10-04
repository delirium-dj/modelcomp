# GPT-6 Luna — findings by GPT 6 Astra

## Model card

OpenAI's proprietary `gpt-6-luna` supports text/image input and text output, 1,050,000 context tokens and 128,000 maximum output; knowledge cutoff May 18, 2026. Reasoning supports none through max. Responses supports hosted tools and function calling; Chat Completions function calling requires reasoning effort none. Structured outputs are supported. No native audio/video input. [Official model documentation](https://developers.openai.com/api/docs/models/gpt-6-luna).

Standard USD per million tokens: $0.10 input, $0.01 cache read, $0.125 cache write, $0.50 output. Above 272K input, input/cache rates double and output rises 50% for the entire request. Batch/Flex halve standard rates; regional processing adds 10%. No free API tier. [Pricing and limits](https://developers.openai.com/api/docs/models/gpt-6-luna). Vals dates release September 22, 2026.

### Raw benchmarks found

Vals, reasoning effort max, default sampling, 128K output:
- Terminal-Bench 2.1: 73.03% in its launch update.
- Current Terminal-Bench 4.0: 13.64% ±1.51; distinct, harder suite, not a regression on the same test.
- Vibe Code Bench v1.1: 81.65%; Code Migration: 42.55%; ProgramBench fully resolved: 0.50%.
- ProofBench v1.1: 64%; Finance Agent v2: 49.87%; Harvey Legal Agent: 2.92%.
The live table differs from some historical launch figures; current values are used where specified. [Vals results and settings](https://www.vals.ai/models/openai_gpt-6-luna).

AA reports Intelligence Index 35 for xhigh, a different effort setting from Vals. [AA profile](https://artificialanalysis.ai/models/gpt-6-luna-xhigh).
GPQA, HLE, Claw-Eval and long-context retrieval: no verified public score found in the directly checked evidence.

### Normalized scores (1–100)

- **Tool use: 72/100.** Strong older terminal results, but difficult professional/agent tasks remain limiting.
- **Reasoning: 76/100.** Mathematical evaluation and independent aggregate support useful reasoning; frontier breadth unproven.
- **Context window: 95/100.** Million-token advertised capacity; no verified full-window retrieval result.
- **Multimodal: 70/100.** Verified image input; tool-mediated image generation is not native output.
- **Coding: 77/100.** Good application coding, tempered by low whole-program resolution.
- **Cost efficiency: 97/100.** Very inexpensive paid API; long requests and tools can add costs.
- **Overall Score: 78/100.** Half-up mean (72 + 76 + 95 + 70 + 77) / 5 = 78; cost excluded.

Scores interpret cited evidence using [methodology](../../model-comparison.md); [signed log](../../model-findings.md).

## Signature

Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-04

Method: independent public research; normalized estimates, not official scores.

