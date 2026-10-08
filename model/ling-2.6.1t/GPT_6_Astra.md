# Ling-2.6-1T — findings by GPT 6 Astra

- Source: Ling-2.6-1T public primary sources
- Date: 2026-10-08 (UTC)
- [Overview and scoring methodology](../../model-comparison.md)
- [Cross-model signed log](../../model-findings.md)

## Model card

- **Name:** Ling-2.6-1T, instruction-tuned model, not the base checkpoint or Ring reasoning variant.
- **Short description:** inclusionAI fast-response model for coding and tool workflows.
- **Provider / access:** Weights `inclusionAI/Ling-2.6-1T`; OpenRouter Chat Completions `inclusionai/ling-2.6-1t:free`. No verified Zen Free ID.
- **Release / knowledge:** Provider listing April 23, 2026; cutoff unverified.
- **Context window:** 262,144 tokens; separate output cap unverified.
- **Modalities:** Text in/out, tools; instant/instruct behavior rather than Ring's extended reasoning. JSON guarantees unverified.
- **Architecture:** Trillion-scale open MoE, hybrid linear attention/MLA, MIT-tagged weights. [Official card](https://huggingface.co/inclusionAI/Ling-2.6-1T)
- **Pricing (2026-10-08):** Listed free input/output on OpenRouter, rate limited; provider retention and live capacity not established. Self-hosting is not free inference. [Provider listing](https://openrouter.ai/inclusionai/ling-2.6-1t:free)

### Raw benchmarks found

- **Reasoning:** Vendor reports Artificial Analysis Intelligence Index **34**, approximately **16M** output tokens; historical index version not specified in that paragraph.
- **Coding:** Card evaluation metadata reports SWE-bench Verified **72.2%**; linked entry is community-submitted, so provenance is weaker than a fully documented vendor evaluation.
- **Tools:** Named BFCL, Tau2 and Claw claims lack numeric results in retrieved text: no verified public score found.
- **Context:** MRCR evaluation is mentioned, but no verified public score found in retrieved text.
- **Other reasoning/coding:** GPQA Diamond, HLE, CritPt, LiveCodeBench and SciCode: no verified public score found.
[Model card and evaluation metadata](https://huggingface.co/inclusionAI/Ling-2.6-1T). Base-checkpoint numbers were deliberately not transferred.

### Normalized scores (1–100)

- **Tool use: 68/100.** Repository-task performance is a provisional agent proxy; missing dedicated tool results cap the score.
- **Reasoning: 65/100.** Historical Intelligence Index 34 supports the upper middle band, with version uncertainty.
- **Context window: 75/100.** Published 262K capacity; absent numeric retrieval evidence prevents a higher tier.
- **Multimodal: 15/100.** Text-only input/output.
- **Coding: 74/100.** Reported SWE-bench result supports practical coding, discounted for incomplete harness provenance.
- **Cost efficiency: 100/100.** Published zero-token-price route, subject to limits.
- **Overall Score: 59/100.** Half-up mean of the five quality dimensions; cost excluded.

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-08
- Method: Independent fresh public-web research; normalized scores are interpretations, not official benchmark scores. No local model tests.

