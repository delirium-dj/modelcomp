# Fledge Alpha — findings by GPT 6 Astra

- Source: Unknown developer / OpenCode Zen `fledge-alpha-free`
- Date: 2026-10-10 (UTC)
- Methodology: [model comparison](../../model-comparison.md)
- Cross-model log: [findings](../../model-findings.md)

## Research refresh — 2026-10-10

Compared with 2026-10-04. Sources accessed today; access dates are not evaluation execution dates. This section supersedes conflicting statements or missing-data claims in the preserved snapshot. No local model benchmark was run.

The [operator-supplied catalog](https://raw.githubusercontent.com/anomalyco/models.dev/dev/providers/opencode/models/fledge-alpha-free.toml) now marks **status = deprecated**. Listed limits remain 1,048,576 context / 131,072 output, text/image input, low/high/max effort and zero token prices. This changes the availability assessment: deprecated does not prove an endpoint shutdown, and no live inference was attempted. Developer/weights remain unidentified.

A newly located [original evaluator report](https://fellipesoares.com.br/en/opencode-stealth-models-benchmarks/) measured the endpoint October 2–4 through OpenCode 1.18.33. Fledge: Terminal-Bench 2.1 subset **11/14**, SWE-bench Verified Mini **15/20**, SciCode **52% of steps, 4/20 complete problems**, text HLE **23/100 including 28 unanswered**, Omniscience subset index **−5**. These are single-run subsets, not full benchmark scores. Repository runs restricted networking to the model gateway after contaminated open-network runs were discarded. The reported **$2.18** is a hypothetical conversion using DeepSeek rates, not a Fledge bill. Geographic machine differences and changing stealth routing limit comparison.

The earlier [Stealth Models evaluation](https://stealthmodels.com/fledge-alpha/) remains an answered-question subset; its HLE 17/67 cannot be pooled with the new evaluator's all-question denominator. No vendor identity follows from similar scores or token counts.

Tool use 50→65 and coding 60→75 replace capability/SVG-only estimates with task evidence. Reasoning 78→76 incorporates no-answer and factual-reliability limitations. Other scores unchanged. Remaining gaps: current endpoint availability, immutable checkpoint, full standard suites, visual and full-window retrieval tests. Confidence remains low; no upstream model's scores were borrowed.

### Score comparison

Order: tool use, reasoning, context, multimodal, coding, cost. Previous: **50, 78, 95, 65, 60, 100**; current: **65, 76, 95, 65, 75, 100**. Overall: **70 → 75**. Changes reflect revised evidence, not necessarily changed model weights.

## Prior research snapshot — 2026-10-04

Preserved for comparison; current corrections are above.

### Model card

Fledge Alpha is a closed-weight preview endpoint listed October 1, 2026. Its operator-supplied catalog metadata specifies **1,048,576 context tokens**, **131,072 maximum output tokens**, text/image input, text output, tool calling, and low/high/max reasoning. Input, output, and reasoning share the context budget. Current preview input/output prices are **$0**; this does not establish permanent free access. [OpenCode catalog entry](https://raw.githubusercontent.com/anomalyco/models.dev/dev/providers/opencode/models/fledge-alpha-free.toml).

The developer, underlying checkpoint, parameter count, training cutoff, and architecture remain unverified. The independent evaluator suggests routing because token counts varied, but that hypothesis does not establish identity. No DeepSeek, Qwen, or Inkling benchmarks are inherited.

### Raw benchmarks found

Reasoning / knowledge:

- Stealth Models, October 3, maximum reasoning, no tools via OpenCode CLI: **GPQA Diamond subset 92.3% (36/39)**, **MMLU-Pro subset 92.0% (92/100)**, **text-only HLE subset 25.4% (17/67)**.
- Reported 95% Wilson intervals are **79.7–97.3%**, **85.0–95.9%**, and **16.5–36.9%**, respectively. These are small, answered-question subsets, not full standard benchmark scores. Selection, unanswered questions, and a potentially changing endpoint limit generalization. [Evaluator's results and method](https://stealthmodels.com/fledge-alpha/).

Coding:

- A single maximum-reasoning SVG scene received **74.0/100** on the evaluator's custom StealthMark rubric. This measures one visual code artifact, not repository repair or terminal work. [Original evaluation](https://stealthmodels.com/).
- SWE-bench, Terminal-Bench, and LiveCodeBench: no verified public score found.

Agent / tool use:

- Tau-bench, MCP-Atlas, and comparable task-completion suites: no verified public score found. Tool support is a catalog capability, not a success-rate measurement.

Long context / multimodal:

- MRCR, RULER, and MMMU: no verified public score found. Listed capacity and image input have not been independently validated here.

## Current normalized scores (1–100)

- **Tool use: 65/100.** Small independently verified terminal/repository tasks improve on capability-only evidence.
- **Reasoning: 76/100.** Promising science subsets, but no-answer failures and weak factual reliability limit confidence.
- **Context window: 95/100.** Catalog capacity only; endpoint and retrieval remain unvalidated.
- **Multimodal: 65/100.** Catalog image input without a verified visual suite.
- **Coding: 75/100.** Small terminal, SciCode and repository subsets replace the SVG-only proxy.
- **Cost efficiency: 100/100.** Zero listed token rates; deprecated preview availability is not guaranteed.
- **Overall Score: 75/100.** Half-up mean (65 + 76 + 95 + 65 + 75) / 5; cost excluded. Previous overall 70.

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-10
- Method: Independent public-web research; normalized scores are interpretations, not official vendor scores.
