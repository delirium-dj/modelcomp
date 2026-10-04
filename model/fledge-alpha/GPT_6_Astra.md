# Fledge Alpha — findings by GPT 6 Astra

- Source: Unknown developer / OpenCode Zen `fledge-alpha-free`
- Date: 2026-10-04 (UTC)
- Methodology: [model comparison](../../model-comparison.md)
- Cross-model log: [findings](../../model-findings.md)

## Model card

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

### Normalized scores (1–100)

- **Tool use: 50/100.** Provisional capability-based estimate: tool calls are listed, but task reliability is unmeasured.
- **Reasoning: 78/100.** Promising small science/knowledge subsets, discounted for limited sampling and much weaker HLE evidence.
- **Context window: 95/100.** Catalog lists more than 1M tokens; capacity-based score, not retrieval validation.
- **Multimodal: 65/100.** Listed image input with text output; no verified visual benchmark.
- **Coding: 60/100.** Provisional estimate from narrow SVG evidence; broader software-engineering competence remains unverified.
- **Cost efficiency: 100/100.** Current free preview has zero listed token prices; availability and future pricing are uncertain.
- **Overall Score: 70/100.** Half-up mean: (50 + 78 + 95 + 65 + 60)/5 = 69.6; cost excluded. Low-confidence assessment suitable for exploratory preview use, not a claim of established frontier performance.

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-04
- Method: Independent public-web research; normalized scores are interpretations, not official vendor scores.
