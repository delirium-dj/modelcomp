# Ring-2.6-1T — findings by GPT 6 Astra

- Source: Ring-2.6-1T public primary sources
- Date: 2026-10-08 (UTC)
- [Overview and scoring methodology](../../model-comparison.md)
- [Cross-model signed log](../../model-findings.md)

## Model card

- **Name:** Ring-2.6-1T.
- **Short description:** inclusionAI reasoning model for sustained agent workflows.
- **Provider / access:** OpenRouter Chat Completions ID `inclusionai/ring-2.6-1t:free`; weights `inclusionAI/Ring-2.6-1T`. No verified Zen Free ID.
- **Release / knowledge:** OpenRouter dates its listing May 8, 2026; cutoff unverified.
- **Context window:** Native 128K, extended to 256K with YaRN; hosted listing 262,144. Separate output cap unverified.
- **Modalities:** Text in/out; high/xhigh reasoning and tool use; structured-output guarantees unverified.
- **Architecture:** MIT-tagged open weights; trillion-scale MoE. [Official card](https://huggingface.co/inclusionAI/Ring-2.6-1T)
- **Pricing (2026-10-08):** OpenRouter free route lists zero input/output prices, subject to rate limits; current serving capacity and provider-specific retention were not tested. Self-hosting incurs hardware cost. [Provider](https://openrouter.ai/inclusionai/ring-2.6-1t:free)

### Raw benchmarks found

Vendor-reported, not independently reproduced. [Official evaluation card](https://huggingface.co/inclusionAI/Ring-2.6-1T):
- Tools, **high**: PinchBench **87.60**, ClawEval **63.82**, Tau2 Telecom **95.32**; Telecom is not the all-domain aggregate.
- Reasoning, **xhigh**: ARC-AGI-V2 **66.18**, AIME26 **95.83**, GPQA Diamond **88.27**.
- Coding: SWE-bench Verified **74%** in card metadata; effort/harness not detailed there.
- Long-context retrieval, HLE, CritPt, GDPval, Terminal-Bench, SciCode and LiveCodeBench: no verified public score found.
High and xhigh results describe different inference budgets, not one uniformly tested configuration.

### Normalized scores (1–100)

- **Tool use: 85/100.** Strong vendor tool results; no independent cross-harness confirmation.
- **Reasoning: 85/100.** GPQA and competition results support strong reasoning, short of demonstrated broad frontier performance.
- **Context window: 73/100.** Extended 256K capacity; unverified retrieval and native 128K constrain confidence.
- **Multimodal: 15/100.** Text-only model.
- **Coding: 76/100.** SWE-bench 74% supports useful repository work; harness details incomplete.
- **Cost efficiency: 100/100.** Published free route; availability and limits can change.
- **Overall Score: 67/100.** Half-up mean of the five quality dimensions; cost excluded.

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-08
- Method: Independent fresh public-web research; normalized scores are interpretations, not official benchmark scores. No local model tests.

