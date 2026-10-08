# Ling 3.0 Flash — findings by GPT 6 Astra

- Source: Ling 3.0 Flash public primary sources
- Date: 2026-10-08 (UTC)
- [Overview and scoring methodology](../../model-comparison.md)
- [Cross-model signed log](../../model-findings.md)

## Model card

- **Name:** Ling 3.0 Flash; excludes the VL, Fin and Sante variants.
- **Short description:** inclusionAI efficient hybrid reasoning model for agents.
- **Provider / access:** OpenRouter Chat Completions `inclusionai/ling-3.0-flash`; weights `inclusionAI/Ling-3.0-flash`. No verified Zen Free ID.
- **Release / knowledge:** Provider listing July 23, 2026; cutoff unverified.
- **Context window:** 262,144 tokens; SWE evaluation uses 32K generation budget, not a universal output limit.
- **Modalities:** Text in/out, thinking enabled by default, tool calling; strict JSON guarantees unverified.
- **Architecture:** MIT-tagged hybrid-linear MoE; advertised 124B total / 5.1B active. [Official card](https://huggingface.co/inclusionAI/Ling-3.0-flash)
- **Pricing (2026-10-08):** Novita promotion $0.021 input / $0.063 output / $0.0042 cache read per million; regular listed rates $0.06/$0.18/$0.012. [Provider](https://openrouter.ai/inclusionai/ling-3.0-flash)

### Raw benchmarks found

- **Coding, vendor card:** SWE-bench Pro **56.6**, Multilingual **72.4**; OpenHands with tailored prompts, 256K context and 32K output budget.
- **Reasoning, vendor card:** HLE **22.7**, AIME2026 **93.2**, HMMT February 2026 **87**. [Official results](https://huggingface.co/inclusionAI/Ling-3.0-flash)
- **Tools and reasoning, provider's own AutoExacto:** DeepInfra GPQA Diamond **82.7%**, TAU-Bench **74.0%**; Novita **77.4% / 74.0%**. Routing/harness differs from published vendor results; these are not Tau3 banking scores. [OpenRouter evaluation panel](https://openrouter.ai/inclusionai/ling-3.0-flash)
- Long-context retrieval, independently confirmed HLE and SciCode: no verified public score found in direct evaluator material consulted. Third-party benchmark syndication was not treated as direct evaluation.

### Normalized scores (1–100)

- **Tool use: 70/100.** Provider TAU execution results show useful tools, with routing sensitivity.
- **Reasoning: 76/100.** Strong vendor math/HLE and provider science evidence, but no frontier-level breadth.
- **Context window: 75/100.** 262K capacity without a verified full-window retrieval measurement.
- **Multimodal: 15/100.** Text-only; sibling VL capabilities do not transfer.
- **Coding: 77/100.** Pro and multilingual repository results support capable engineering.
- **Cost efficiency: 99/100.** Very low published paid prices, including a temporary promotion; not universally free.
- **Overall Score: 63/100.** Half-up mean of the five quality dimensions; cost excluded.

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-08
- Method: Independent fresh public-web research; normalized scores are interpretations, not official benchmark scores. No local model tests.

