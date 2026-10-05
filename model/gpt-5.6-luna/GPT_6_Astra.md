# GPT-5.6 Luna — findings by GPT 6 Astra

## Model card

OpenAI's proprietary `gpt-5.6-luna` is a cost-oriented reasoning model supporting text/image input and text output. Context is 1,050,000 tokens, maximum output 128,000, knowledge cutoff February 16, 2026. Reasoning ranges from none to max. Function calling, structured outputs and Responses hosted tools are supported; native audio/video are not.

Standard USD per million tokens: $0.20 input, $0.02 cached input, $1.20 output; cache writes cost 1.25 times input. Requests above 272K input cost twice the input rate and 1.5 times output for the full request. No free API tier. [Official documentation](https://developers.openai.com/api/docs/models/gpt-5.6-luna). Vals dates release July 9, 2026. Parameter count is not disclosed in these sources.

### Raw benchmarks found

Vals results, default provider OpenAI, reasoning max, up to 128K output (individual benchmarks can vary):
- GPQA Diamond: 91.67% ±1.74; MMLU-Pro: 86.04%; MMMU-Pro: 85.03%.
- ProofBench v1.1: 60%; BioMysteryBench: 61.48%.
- SkillsBench: 60.45%; Finance Agent v2: 55.04%; Harvey Legal Agent: 1.25%.
- Terminal-Bench 4.0: 11.62%; Vibe Code Bench v1.1: 77.06%; Code Migration: 44.55%; ProgramBench: 0%.
- SWE-bench row: 93.00%; retained under the evaluator's label, without assuming comparability to vendor SWE-bench Verified harnesses.
[Results and settings](https://www.vals.ai/models/openai_gpt-5.6-luna).

No verified public score found in this research for HLE, exact-model Claw-Eval or full-window retrieval. Missing measurements are not zero; the ProgramBench zero above is a published result.

### Normalized scores (1–100)

- **Tool use: 72/100.** Strong skills and useful professional-task performance, with hard agent tasks limiting reliability.
- **Reasoning: 82/100.** High GPQA supports strong reasoning; wider difficult evaluations are less consistent.
- **Context window: 95/100.** Million-token advertised window, without retrieval evidence to justify 100.
- **Multimodal: 70/100.** Verified image understanding; external generation tools do not establish native output modalities.
- **Coding: 79/100.** Strong application and repair results, tempered by difficult terminal/program evaluations.
- **Cost efficiency: 95/100.** Low paid rates, with higher long-context and optional tool costs.
- **Overall Score: 80/100.** Half-up mean (72 + 82 + 95 + 70 + 79) / 5 = 79.6; cost excluded.

[Methodology](../../model-comparison.md) · [Signed log](../../model-findings.md)

## Signature

Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-05

Method: independent fresh public research; normalized scores are interpretations, not official vendor scores.

