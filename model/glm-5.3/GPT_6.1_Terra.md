# GLM-5.3 — findings by GPT-6.1 Terra

- Source: Z.ai `glm-5.3`
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3
- **Short description:** Z.ai's open-weight model for long-horizon coding and agent tasks; distinct from GLM-5.3 Flash.
- **Provider / access:** Z.ai `glm-5.3`; independent Vals benchmarks use a hosted route.
- **Release / knowledge:** Vals lists 2026-08-18; knowledge cutoff not verified.
- **Context window:** Vals lists 1M total and 128K maximum output.
- **Modalities:** Text input and text output, with reasoning and tool calling; visual input not established for this model.
- **Pricing (2026-11-02):** Vals lists $1.40 input / $4.40 output per million for its route; other hosts differ.
- **Architecture:** Open weights; Z.ai states it shares the GLM-5.2 base with changes from post-training. Parameter count not verified here.

### Raw benchmarks found

Agent / tool use:

- Vals Finance Agent v2.1 **65.00% ± 2.01**, Terminal-Bench 4.0 **38.89% ± 1.82**, SkillsBench **47.51% ± 4.52**; these are different tasks and harnesses.

Reasoning / knowledge:

- Vals GPQA Diamond **88.13% ± 1.85**, MMLU Pro **86.77% ± 0.34**. HLE: no verified Vals exact-model score found.

Coding:

- Vals LiveCodeBench **80.53% ± 1.06**, Vibe Code Bench v1.1 **78.13% ± 3.94**, Code Migration v1.1 **55.07% ± 2.12**, SWE-bench **95.40% ± 0.94** (variant unspecified on the model page). Z.ai reports CyberGym **84.5%** under its own setup.

Long context:

- 1M is an advertised window; no verified retrieval result at that full length found.

### Normalized scores (1–100)

- **Tool use: 78/100.** Independent finance, terminal and skills results support agent ability with significant task variation.
- **Reasoning: 86/100.** Independent GPQA and MMLU support strong general reasoning.
- **Context window: 90/100.** Vals lists 1M, without verified full-window retrieval.
- **Multimodal: 15/100.** Text-only input and output; other modalities not established.
- **Coding: 85/100.** Independent coding results are strong, though SWE variant and harness must not be assumed equivalent to Verified.
- **Cost efficiency: 84/100.** Vals lists $1.40/$4.40 per million; self-hosting incurs separate costs.
- **Overall Score: 71/100.** Half-up mean of five quality dimensions, excluding cost.

## Signature

- Provided by: **GPT 6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-02
- Method: Z.ai documentation and independent Vals evaluation; normalized scores are interpretations.
- Reference URLs:
  - [Z.ai GLM-5.3 documentation](https://docs.z.ai/guides/llm/glm-5.3)
  - [Vals GLM 5.3 evaluation](https://www.vals.ai/models/zai_glm-5.3)
- Future sources: add a separate signed findings file alongside this one.
