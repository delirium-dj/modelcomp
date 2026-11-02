# GPT-5.4 Mini — findings by GPT-6.1 Terra

- Source: OpenAI `gpt-5.4-mini-2026-03-17`
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 Mini
- **Short description:** OpenAI's efficient model for coding, computer use and subagents.
- **Provider / access:** OpenAI Responses and Chat Completions APIs `gpt-5.4-mini`.
- **Release / knowledge:** Released 2026-03-17; knowledge cutoff 2025-08-31.
- **IDs:** `gpt-5.4-mini-2026-03-17`.
- **Context window:** 400K total, 272K maximum input, 128K maximum output.
- **Modalities:** Text and image input, text output; reasoning, function calling and computer-use tools.
- **Pricing (2026-11-02):** $0.75 input / $4.50 output / $0.075 cached per million; regional and tool charges may apply.
- **Architecture:** Proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- OpenAI reports Tau2 Telecom **93.4%**, MCP Atlas **57.7%**, Toolathlon **42.9%**, Terminal-Bench 2.0 **60.0%**, all xhigh; Vals TB 4.0 **2.52% ± 1.01** is a different version and harness.

Reasoning / knowledge:

- OpenAI GPQA Diamond **88.0%**, HLE **28.2% without tools / 41.5% with tools** at xhigh; Vals GPQA **83.08% ± 2.46** is a separate evaluation.

Coding:

- OpenAI SWE-bench Pro public **54.4%**; Vals LiveCodeBench **81.47% ± 1.09**, Vibe Code Bench v1.1 **47.97% ± 5.61**, Code Migration **12.94% ± 3.64**.

Long context:

- OpenAI reports MRCR v2 eight-needle **33.6% at 128K–256K**, not at the full 400K window.

### Normalized scores (1–100)

- **Tool use: 82/100.** Vendor Tau2 and MCP results are strong; different Vals TB 4.0 tasks limit comparison.
- **Reasoning: 85/100.** Vendor and Vals GPQA plus no-tools HLE support strong reasoning.
- **Context window: 80/100.** 400K total documented; MRCR evidence covers up to 256K.
- **Multimodal: 65/100.** Text and image input with text output; image generation is a separate tool.
- **Coding: 80/100.** SWE Pro and LiveCodeBench are tempered by Vals Code Migration and TB 4.0.
- **Cost efficiency: 90/100.** $0.75/$4.50 per million, excluding tool charges.
- **Overall Score: 78/100.** Half-up mean of five quality dimensions, excluding cost.

---

## Signature

- Provided by: **GPT 6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-02
- Method: OpenAI specifications and independent Vals evaluation; benchmark versions and effort settings are distinguished.
- Reference URLs:
  - [OpenAI model documentation](https://developers.openai.com/api/docs/models/gpt-5.4-mini)
  - [OpenAI evaluation tables](https://openai.com/index/introducing-gpt-5-4-mini-and-nano/)
  - [Vals snapshot evaluation](https://www.vals.ai/models/openai_gpt-5.4-mini-2026-03-17)
- Future sources: add a separate signed findings file alongside this one.
