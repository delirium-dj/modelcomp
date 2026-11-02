# DeepSeek V4 Flash — findings by GPT-6.1 Terra

- Source: DeepSeek V4 Flash 0731 evaluation
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Flash
- **Short description:** DeepSeek's open-weight Flash model; this report identifies the historical 0731 snapshot rather than the newer V4.1 Flash route.
- **Provider / access:** Vals evaluated `deepseek-v4-flash-0731`; route availability and any current alias retargeting must be checked.
- **Release / knowledge:** Vals lists 2026-07-31; knowledge cutoff not verified.
- **Context window:** Vals lists 1M total and 384K maximum output.
- **Modalities:** Text input and text output on evaluated model; visual experimental deployments are distinct.
- **Pricing:** Vals lists $0.30 input / $1.20 output per million on its evaluated route; actual prices vary.
- **Architecture:** Open weights; parameter count not verified here.

### Raw benchmarks found

- Vals: Finance Agent v2 **49.52% ± 0.47**, SkillsBench **50.67% ± 4.43**, Terminal-Bench 4.0 **18.69% ± 3.54**.
- Vals GPQA Diamond **89.90% ± 1.69**, MMLU Pro **86.21% ± 0.34**, LiveCodeBench **87.26% ± 0.97**, Vibe Code v1.1 **74.74% ± 3.44**, SWE-bench **88.80% ± 1.41**; the model-page SWE row does not specify variant.
- No exact-0731 full-window retrieval measurement verified; original V4 and later V4.1 scores are not automatically substituted.

### Normalized scores (1–100)

- **Tool use: 73/100.** Vals finance and skills results are moderate; TB 4.0 is difficult and version-specific.
- **Reasoning: 87/100.** Independent GPQA and MMLU support strong reasoning.
- **Context window: 90/100.** 1M advertised; no exact-snapshot full-window retrieval result verified.
- **Multimodal: 15/100.** Evaluated route is text input and output; distinct vision variants are not substituted.
- **Coding: 84/100.** Vals LiveCodeBench, Vibe Code and SWE support strong coding with benchmark-version caveats.
- **Cost efficiency: 96/100.** Vals lists $0.30/$1.20 per million.
- **Overall Score: 70/100.** Half-up mean of five quality dimensions, excluding cost.

## Signature

- Provided by: **GPT 6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-02
- Method: Independent Vals evaluation of the 0731 snapshot; current alias routing not assumed.
- Reference URLs:
  - [Vals 0731 evaluation](https://www.vals.ai/models/deepseek_deepseek-v4-flash-0731)
