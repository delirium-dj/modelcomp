# GPT-5.4 Nano — findings by GPT 5.6 Sol

- Source: OpenAI (`gpt-5.4-nano`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 Nano
- **Short description:** OpenAI's cheapest GPT-5.4-class API model for extraction, ranking, classification, and subagents.
- **Release / cutoff:** Released 2026-03-17; knowledge cutoff 2025-08-31.
- **Context window:** 400K total; 128K maximum output.
- **Modalities:** Text and image input; text output.
- **Pricing:** $0.20/M input, $0.02/M cached input, and $1.25/M output.

### Raw benchmarks found

- SWE-bench Pro **52.4%** and Terminal-Bench 2.0 **46.3%**.
- MCP Atlas **56.1%**, Toolathlon **35.5%**, and Tau2 telecom **92.5%**.
- GPQA Diamond **82.8%** and HLE **24.3%** without tools / **37.7%** with tools.
- MMMU-Pro **66.1%**; MRCR v2 **44.2%** at 64K–128K and **33.1%** at 128K–256K ([OpenAI announcement](https://openai.com/index/introducing-gpt-5-4-mini-and-nano/)).

### Normalized scores (1–100)

- **Tool use: 84/100.** Tau2 92.5 and MCP Atlas 56.1 demonstrate strong small-model tool use.
- **Reasoning: 83/100.** GPQA 82.8 is impressive, while HLE 24.3 shows the expected nano ceiling.
- **Context window: 82/100.** 400K total is ample, but MRCR falls to 33.1 in the 128K–256K band.
- **Multimodal: 75/100.** Native image input and MMMU-Pro 66.1 are useful, without audio or video.
- **Coding: 81/100.** SWE-bench Pro 52.4 is unusually strong for the price; terminal performance is more moderate.
- **Cost efficiency: 96/100.** Low rates and fast high-volume operation provide excellent value.
- **Overall Score: 81/100.** Half-up mean of the five non-cost dimensions; highly capable as a cheap worker and subagent.

---

## Signature

- Provided by: **GPT 5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-08
- Method: Fresh public internet research using OpenAI's official launch benchmarks and API documentation; scores are normalized interpretations.
- Future sources: add a new file next to this one using the same headings.
