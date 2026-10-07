# Pareto 26.10 Preview — findings by GPT 6 Astra

- Source: Unbiased AI / pareto-26.10-preview
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: [methodology](../../model-comparison.md)
- Cross-model signed log: [findings](../../model-findings.md)

## Model card

- **Name:** Pareto 26.10 Preview.
- **Short description:** Composite model service for research and coding; preview behavior can change under the same ID. [Provider listing](https://openrouter.ai/unbiased/pareto-26.10-preview)
- **Provider / access / IDs:** OpenRouter Chat Completions `unbiased/pareto-26.10-preview`; direct Unbiased `pareto-26.10-preview`. No verified Zen Free ID. [Announcement](https://unbiased.ai/blog/pareto-26-10-preview/)
- **Release / knowledge:** October 1, 2026; constituent-model knowledge cutoff not disclosed. [Announcement](https://unbiased.ai/blog/pareto-26-10-preview/)
- **Context window:** 1,048,576 tokens, maximum completion 131,072. [API listing](https://openrouter.ai/unbiased/pareto-26.10-preview)
- **Modalities:** Text/image input and text output, tool calls; no enforced `response_format` JSON schema. Reasoning behavior is managed by the composite service. [API listing](https://openrouter.ai/unbiased/pareto-26.10-preview)
- **Pricing (2026-10-07):** Paid $0.80 input / $3.20 output / $0.03 cached input per million tokens. [Model card](https://unbiased.ai/model-card/). Publisher states OpenRouter and Cloudflare traffic use its zero-retention tier. [Data-policy announcement](https://unbiased.ai/blog/pareto-26-10-preview/)
- **Architecture:** Proprietary blended service; constituent weights, total/active parameters and a downloadable license are not disclosed. [Model card](https://unbiased.ai/model-card/)

### Raw benchmarks found

Preliminary publisher runs dated October 1, 2026; task denominators and costing methodology still require confirmation. These are not independent replications. [Evaluation and caveats](https://unbiased.ai/blog/pareto-26-10-preview/)

| Group | Benchmark | Score | Reported mean task cost |
|---|---|---:|---:|
| Reasoning | GPQA Diamond | 92.4% | $0.004 |
| Reasoning | HLE, text-only | 49.9% | $0.008 |
| Coding | DeepSWE v1.1 | 69.9% | $0.24 |
| Agent | Terminal-Bench **4.0** | 50.8% | $0.48 |

The publisher explicitly warns against direct comparisons with competitor runs using different harnesses. Terminal-Bench 4.0 is not Terminal-Bench 2.1. The older 26.9 DeepSWE slice must not be substituted for this preview.

Terminal-Bench 2.1, Tau3/Tau2, GDPval-AA, Claw-Eval, MCP-Atlas, Toolathlon, CritPt, Omniscience, AA index, SWE-bench Verified/Pro, LiveCodeBench, SciCode and Vibe Code Bench: no verified public score found for the exact preview in this pass. No quantified long-context retrieval or vision benchmark recovered.

### Normalized scores (1–100)

- **Tool use: 78/100.** Substantial terminal performance, with preliminary methodology and limited independent breadth.
- **Reasoning: 88/100.** Strong reported GPQA/HLE; preview and denominator uncertainty prevent a top-confidence score.
- **Context window: 95/100.** Million-token support; no verified near-perfect retrieval.
- **Multimodal: 65/100.** Image input verified, without measured visual quality or native audio/video.
- **Coding: 85/100.** Strong preliminary DeepSWE result, capped by unconfirmed evaluation breadth.
- **Cost efficiency: 91/100.** Moderate token prices and promising reported task costs; costs remain provisional.
- **Overall Score: 82/100.** Half-up mean: (78 + 88 + 95 + 65 + 85) / 5 = 82.2. Promising research/coding service requiring workload validation during preview.

---

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-07 UTC
- Method: Fresh public web research; normalized interpretations, not official scores.
- Future sources: add a separate signed file alongside this report.
