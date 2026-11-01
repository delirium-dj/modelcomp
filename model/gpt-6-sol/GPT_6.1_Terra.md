# GPT-6 Sol — findings by GPT-6.1 Terra

- Source: OpenAI `gpt-6-sol`
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Sol
- **Short description:** OpenAI's model for complex coding and agentic workflows; GPT-6.1 Sol is its newer successor.
- **Provider / access:** OpenAI Responses API `gpt-6-sol`; Chat Completions function calling requires reasoning effort `none` per the model documentation.
- **Release / knowledge:** Vals reports 2026-09-22 release; OpenAI lists 2026-04-20 knowledge cutoff.
- **IDs:** OpenAI `gpt-6-sol`; OpenRouter `openai/gpt-6-sol`.
- **Context window:** OpenAI lists 1,050,000 total, 922,000 maximum input, and 128,000 maximum output tokens.
- **Modalities:** Text and image input, text output; reasoning and Responses API tool use supported.
- **Pricing (2026-11-01):** OpenAI standard $2 input / $10 output / $0.20 cached input per million; prompts over 272K input cost $4/$15 with doubled cache rates. Cache writes and tools can add charges.
- **Architecture:** Proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- Vals reports Terminal-Bench 2.1 **83.15%**, max effort, and Terminal-Bench 4.0 **44.44% ± 3.54** on its current benchmark table. A historical Vals update lists a separate 4.0 result of **34.34%**; do not combine the runs.
- Tau3-Banking, GDPval-AA and Claw-Eval: no verified public score found.

Reasoning / knowledge:

- Vals ProofBench v1.1 **83.00% ± 3.77** and BioMysteryBench **74.81% ± 2.43**; neither is GPQA or HLE.
- GPQA Diamond and HLE: no verified public score found.

Coding:

- Vals Vibe Code Bench v1.1 **87.82% ± 2.53**, Code Migration **57.20% ± 4.21**, IOI **82.61% ± 9.24**.
- SWE-bench Verified and LiveCodeBench: no verified public score found.

Long context:

- OpenAI lists a 1.05M total window; no verified 512K-plus retrieval score found.

### Normalized scores (1–100)

- **Tool use: 88/100.** Vals TB 2.1 and 4.0 support strong agent coding; benchmark versions and historical run variation cap comparison.
- **Reasoning: 87/100.** ProofBench and BioMysteryBench support capable reasoning; provisional without verified GPQA or HLE.
- **Context window: 96/100.** OpenAI documents 1.05M total but no verified long-context retrieval result.
- **Multimodal: 65/100.** OpenAI documents text and image input and text output; built-in image generation is a tool, not native image output.
- **Coding: 91/100.** Vals Vibe Code and IOI results indicate strong coding, with missing SWE-bench evidence noted.
- **Cost efficiency: 70/100.** $2/$10 standard paid rate, with long-input surcharges and additional tool/cache-write fees.
- **Overall Score: 85/100.** Half-up mean of five quality dimensions; suited to agentic coding and visual input workflows.

---

## Signature

- Provided by: **GPT 6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-01
- Method: OpenAI documentation and independent Vals evaluation; normalized scores are interpretations, not vendor scores.
- Reference URLs:
  - [OpenAI model documentation and pricing](https://developers.openai.com/api/docs/models/gpt-6-sol)
  - [Vals evaluation](https://www.vals.ai/models/openai_gpt-6-sol)
  - [OpenRouter route](https://openrouter.ai/openai/gpt-6-sol)
- Future sources: add a separate signed findings file alongside this one.
