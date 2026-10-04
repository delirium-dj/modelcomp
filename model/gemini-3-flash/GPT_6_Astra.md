# Gemini 3 Flash — findings by GPT 6 Astra

- Source: Google DeepMind / `gemini-3-flash-preview`
- Date: 2026-10-04 (UTC)
- Methodology: [model comparison](../../model-comparison.md)
- Cross-model log: [findings](../../model-findings.md)

## Model card

Gemini 3 Flash is a proprietary reasoning model released December 17, 2025. It accepts text, images, audio, and video and generates text, with **1M context** and **64K output**. Parameters are not disclosed. [Official model card](https://deepmind.google/models/model-cards/gemini-3-flash/).

The developer guide lists a **January 2025** knowledge cutoff and default high thinking. [API guide](https://ai.google.dev/gemini-api/docs/gemini-3?hl=en).

The pricing page now describes this as legacy Flash. Standard rates per million tokens are **$0.50 text/image/video input**, **$1 audio input**, and **$3 output including thinking**. Cached input is $0.05/$0.10 respectively, plus storage charges. A free tier is listed, but paid API rates provide the durable cost comparison. [Official pricing](https://ai.google.dev/gemini-api/docs/pricing).

### Raw benchmarks found

Agent / tool use:

- Launch-era **Tau2-bench 90.2%**, **Toolathlon 49.4%**, **MCP Atlas 57.4%**.

Reasoning / knowledge:

- **GPQA Diamond 90.4%**, **HLE without tools 33.7%**. [Launch results](https://blog.google/products-and-platforms/products/gemini/gemini-3-flash/).

Coding:

- **SWE-bench Verified 78.0%**, single attempt; **Terminal-Bench 2.0 47.6%**, Terminus-2 harness.

Long context:

- **MRCR v2 eight-needle 67.2% at 128K average**, **22.1% at 1M pointwise**. These measurements show that large capacity does not ensure dependable retrieval.

The agent, coding, and retrieval figures above are from Google's [launch-era comparison table](https://deepmind.google/technologies/gemini/flash/?authuser=19), preserved in indexed source text. Later reevaluations may use different scaffolds; they are not merged into these numbers.

Multimodal:

- **MMMU-Pro 81.2%**, reported in the [launch article](https://blog.google/products-and-platforms/products/gemini/gemini-3-flash/?trk=article-ssr-frontend-pulse_little-text-block). Audio and video are verified input modalities; native generated media is not credited.

### Normalized scores (1–100)

- **Tool use: 75/100.** Strong customer-service tools and useful MCP/workflow capability, with weaker terminal agents.
- **Reasoning: 85/100.** Strong science and difficult general reasoning for this model generation.
- **Context window: 95/100.** The methodology's capacity band recognizes 1M tokens; observed 1M retrieval is weak and should constrain usage.
- **Multimodal: 95/100.** Native image, audio, and video input with strong visual reasoning; output remains text.
- **Coding: 77/100.** Good repository repair, tempered by modest terminal success.
- **Cost efficiency: 92/100.** Low $0.50/$3 standard text rates; audio, grounding, and cache storage add cost.
- **Overall Score: 85/100.** Half-up mean: (75 + 85 + 95 + 95 + 77)/5 = 85.4; cost excluded. Best fit is economical multimodal analysis and interactive coding, with retrieval checks for very long prompts.

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-04
- Method: Independent public-web research; normalized scores are interpretations, not official vendor scores.
