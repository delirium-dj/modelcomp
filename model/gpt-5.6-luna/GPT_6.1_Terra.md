# GPT-5.6 Luna — findings by GPT-6.1 Terra

- Source: OpenAI `gpt-5.6-luna`
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Luna
- **Short description:** OpenAI's cost-sensitive model for high-volume workloads, roughly corresponding to its earlier nano tier.
- **Provider / access:** OpenAI Responses and Chat Completions APIs `gpt-5.6-luna`.
- **Release / knowledge:** Vals reports 2026-07-09 release; OpenAI lists 2026-02-16 knowledge cutoff.
- **IDs:** `gpt-5.6-luna`.
- **Context window:** 1,050,000 total, 922,000 maximum input and 128,000 maximum output tokens.
- **Modalities:** Text and image input, text output; function calling and Responses API tools supported.
- **Pricing (2026-11-01):** OpenAI $0.20 input / $1.20 output / $0.02 cached per million; above 272K input, input doubles and output rises 1.5×. Cache writes and tools may cost extra.
- **Architecture:** Proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- Vals Terminal-Bench 4.0 **11.62% ± 1.01**, SkillsBench **60.45% ± 4.75**. Tau3 Banking and Terminal-Bench 2.1: no verified public score found.

Reasoning / knowledge:

- Vals GPQA Diamond **91.67% ± 1.74**, ProofBench v1.1 **60.00% ± 4.92**, BioMysteryBench **61.48% ± 0.74**. HLE: no verified score found.

Coding:

- Vals Vibe Code Bench v1.1 **77.06% ± 3.07**, Code Migration **44.55% ± 4.24**, and SWE-bench **93.00% ± 1.14**; the displayed SWE table does not identify its variant.

Long context:

- OpenAI specifies 1.05M total; no verified long-context retrieval score found.

### Normalized scores (1–100)

- **Tool use: 74/100.** Vals SkillsBench and TB 4.0 indicate varied agent performance across tasks.
- **Reasoning: 87/100.** Independent GPQA and ProofBench support reasoning capability, with lower BioMysteryBench.
- **Context window: 96/100.** Vendor specifies 1.05M but no verified 512K-plus retrieval result.
- **Multimodal: 65/100.** Image and text input, text output; image generation is a tool, not native output.
- **Coding: 83/100.** Vibe Code and Code Migration show useful coding; the unspecified SWE variant limits comparison.
- **Cost efficiency: 96/100.** $0.20/$1.20 per million under the long-input threshold, with surcharges and tool costs noted.
- **Overall Score: 81/100.** Half-up mean of five quality dimensions, excluding cost.

---

## Signature

- Provided by: **GPT 6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-01
- Method: OpenAI specifications and independent Vals evaluation; normalized scores are interpretations, not vendor scores.
- Reference URLs:
  - [OpenAI model documentation](https://developers.openai.com/api/docs/models/gpt-5.6-luna)
  - [Vals evaluation](https://www.vals.ai/models/openai_gpt-5.6-luna)
- Future sources: add a separate signed findings file alongside this one.
