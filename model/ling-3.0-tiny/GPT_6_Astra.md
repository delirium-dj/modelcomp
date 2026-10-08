# Ling 3.0 Tiny — findings by GPT 6 Astra

- Source: Ling 3.0 Tiny public primary sources
- Date: 2026-10-08 (UTC)
- [Overview and scoring methodology](../../model-comparison.md)
- [Cross-model signed log](../../model-findings.md)

## Model card

- **Name:** Ling 3.0 Tiny, instruction-tuned hybrid reasoning model.
- **Short description:** inclusionAI compact model for responsive agents and local deployment.
- **Provider / access:** Weights `inclusionAI/Ling-3.0-tiny`; OpenRouter Chat Completions `inclusionai/ling-3.0-tiny:free`. No verified Zen Free ID.
- **Release / knowledge:** Provider listing August 6, 2026; knowledge cutoff unknown.
- **Context window:** 262,144 tokens; separate output cap unverified.
- **Modalities:** Text in/out; switchable thinking/instant modes and agent integration; strict JSON guarantees unverified.
- **Architecture:** Hybrid-linear MoE, 7.9B total / 1.3B active, MIT-tagged weights. [Official card](https://huggingface.co/inclusionAI/Ling-3.0-tiny)
- **Pricing (2026-10-08):** OpenRouter lists free input/output with rate limits; no live request or retention-policy verification. [Provider](https://openrouter.ai/inclusionai/ling-3.0-tiny:free)

### Raw benchmarks found

- **Historical reasoning/tools:** Official card reports AA Intelligence Index **25 (v4.1.1)** and Agentic Index **16**. These are vendor-relayed evaluator results. [Card](https://huggingface.co/inclusionAI/Ling-3.0-tiny)
- **Current composite:** Direct AA page reports Intelligence Index **11**, displayed rank **36/142**, with page methodology **v4.3.2**. The historical and current indexes use different evaluation versions; the numerical difference alone does not establish model regression. [Evaluator](https://artificialanalysis.ai/models/ling-3-0-tiny)
- **Coding:** no verified public score found in accessible primary text for a separate SWE/SciCode result; current composite provides only a provisional proxy.
- **Long context, GPQA, HLE and specific tool suites:** no verified public score found in accessible primary text. The model-card benchmark image was inaccessible; base-checkpoint results were not substituted.

### Normalized scores (1–100)

- **Tool use: 48/100.** Historical Agentic Index 16 supports lightweight workflows, with limited headroom for complex autonomy.
- **Reasoning: 55/100.** Historical and current composites support a modest general assessment; cross-version comparisons remain uncertain.
- **Context window: 75/100.** 262K capacity without verified retrieval measurements.
- **Multimodal: 15/100.** Text-only.
- **Coding: 50/100.** Provisional estimate from the coding-containing composite; separate coding evidence was inaccessible.
- **Cost efficiency: 100/100.** Published free hosted route; self-hosting still incurs compute cost.
- **Overall Score: 49/100.** Half-up mean of the five quality dimensions; cost excluded.

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-08
- Method: Independent fresh public-web research; normalized scores are interpretations, not official benchmark scores. No local model tests.

