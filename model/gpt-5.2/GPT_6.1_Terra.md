# GPT-5.2 — findings by GPT-6.1 Terra

- Source: OpenAI `gpt-5.2`
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2
- **Short description:** OpenAI's previous flagship reasoning model for professional work and agents, distinct from GPT-5.2 Pro and Codex.
- **Provider / access:** OpenAI Responses and Chat Completions API `gpt-5.2`; default snapshot `gpt-5.2-2025-12-11`.
- **Release / knowledge:** Released 2025-12-11; knowledge cutoff 2025-08-31.
- **IDs:** OpenAI `gpt-5.2`.
- **Context window:** 400,000 tokens total, 128,000 maximum output per OpenAI.
- **Modalities:** Text and image input, text output; reasoning and function calling supported.
- **Pricing (2026-11-01):** OpenAI $1.75 input / $14 output / $0.175 cached input per million.
- **Architecture:** Proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- OpenAI reports Tau2 Telecom **98.7%**, MCP Atlas **60.6%**, and Toolathlon **46.3%**, maximum reasoning effort; Vals Terminal-Bench 2.0 **51.69% ± 5.33**.

Reasoning / knowledge:

- OpenAI reports GPQA Diamond **92.4%**, HLE **34.5% without tools**, and **45.5% with search and Python**. Vals GPQA **91.67% ± 1.84** is a separate evaluation.

Coding:

- OpenAI SWE-bench Verified **80.0%** and SWE-bench Pro **55.6%**; Vals LiveCodeBench **85.36% ± 1.03**, Vibe Code Bench v1.1 **53.50% ± 5.07**.

Long context:

- OpenAI MRCR v2 eight-needle **77.0% at 128K–256K**, maximum effort; no verified 512K-plus result within this model's advertised 400K window.

### Normalized scores (1–100)

- **Tool use: 85/100.** Tau2 Telecom and MCP Atlas are strong, with Vals's TB 2.0 result and harness differences noted.
- **Reasoning: 89/100.** Vendor GPQA and no-tools HLE plus independent GPQA support strong reasoning.
- **Context window: 80/100.** OpenAI specifies 400K total; MRCR evidence covers up to 256K, not the full window.
- **Multimodal: 65/100.** Text and image input, text output; tools generating images are not native output.
- **Coding: 84/100.** SWE-bench and LiveCodeBench are strong, moderated by Vals Vibe Code.
- **Cost efficiency: 65/100.** Paid $1.75/$14 per million with discounted cached input.
- **Overall Score: 81/100.** Half-up mean of five quality dimensions; suited to reasoning and tool-heavy professional workflows.

---

## Signature

- Provided by: **GPT 6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-01
- Method: OpenAI specifications and independent Vals evaluation; normalized scores are interpretations, not vendor scores.
- Reference URLs:
  - [OpenAI model specifications](https://developers.openai.com/api/docs/models/gpt-5.2)
  - [OpenAI announcement and evaluation table](https://openai.com/index/introducing-gpt-5-2/)
  - [Vals snapshot evaluation](https://www.vals.ai/models/openai_gpt-5.2-2025-12-11)
- Future sources: add a separate signed findings file alongside this one.
