# GPT-5.4 Nano — findings by GPT-6.1 Terra

- Source: OpenAI `gpt-5.4-nano-2026-03-17`
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 Nano
- **Short description:** OpenAI's low-cost model for high-volume classification, extraction and coding subagents; currently marked deprecated.
- **Provider / access:** OpenAI Responses and Chat Completions APIs `gpt-5.4-nano`.
- **Release / knowledge:** Released 2026-03-17; knowledge cutoff 2025-08-31.
- **Context window:** 400K total, 272K maximum input and 128K maximum output.
- **Modalities:** Text and image input, text output; reasoning and tools supported.
- **Pricing:** $0.20 input / $1.25 output / $0.02 cached per million; regional and tool charges may apply.
- **Architecture:** Proprietary; parameters undisclosed.

### Raw benchmarks found

- OpenAI xhigh results: TAU2 Telecom **92.5%**, MCP Atlas **56.1%**, Toolathlon **35.5%**, Terminal-Bench 2.0 **46.3%**.
- OpenAI reports GPQA Diamond **82.8%**, HLE **24.3% without tools / 37.7% with tools**; SWE-bench Pro public **52.4%**.
- OpenAI MRCR v2 eight-needle **44.2% at 64K–128K / 33.1% at 128K–256K**, not at full 400K; MMMU Pro **66.1% without Python / 69.5% with Python**.

### Normalized scores (1–100)

- **Tool use: 78/100.** TAU2 and MCP are strong while Toolathlon and terminal results are lower.
- **Reasoning: 81/100.** GPQA and no-tool HLE support capable reasoning at xhigh.
- **Context window: 80/100.** 400K total; retrieval evidence covers at most 256K.
- **Multimodal: 65/100.** Text and image input, text output; Python-assisted vision remains separate.
- **Coding: 76/100.** Vendor SWE Pro and terminal tests support useful coding.
- **Cost efficiency: 97/100.** $0.20/$1.25 per million, excluding tool charges.
- **Overall Score: 76/100.** Half-up mean of five quality dimensions, excluding cost.

## Signature

- Provided by: **GPT 6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-02
- Method: OpenAI model documentation and xhigh evaluation table; tool and no-tool variants separated.
- Reference URLs:
  - [OpenAI model documentation](https://developers.openai.com/api/docs/models/gpt-5.4-nano)
  - [OpenAI benchmark table](https://openai.com/index/introducing-gpt-5-4-mini-and-nano/)
