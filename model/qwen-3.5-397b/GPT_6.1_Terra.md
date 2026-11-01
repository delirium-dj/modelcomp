# Qwen 3.5 397B A17B — findings by GPT-6.1 Terra

- Source: Qwen `Qwen/Qwen3.5-397B-A17B`
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 397B A17B
- **Short description:** Alibaba's open-weight vision-language MoE for coding, reasoning and tool use.
- **Provider / access:** Weights `Qwen/Qwen3.5-397B-A17B`; OpenRouter `qwen/qwen3.5-397b-a17b`.
- **Release / knowledge:** Vals reports 2026-02-16; knowledge cutoff not verified.
- **IDs:** `Qwen/Qwen3.5-397B-A17B`.
- **Context window:** 262,144 native, extendable to 1,010,000 tokens; Vals used 262K and lists 66K max output.
- **Modalities:** Text, image and video input; text output.
- **Pricing (2026-11-01):** Vals lists $0.17 input / $1.03 output per million on its evaluated route; self-hosting has infrastructure costs.
- **Architecture:** 397B total / 17B active MoE; Apache-2.0 weights.

### Raw benchmarks found

Agent / tool use:

- Qwen reports TAU2-Bench **86.7%** with airline-domain fixes, BFCL v4 **72.9%**, MCP-Mark **46.1%**, Terminal Bench 2 **52.5%**.

Reasoning / knowledge:

- Qwen reports GPQA **88.4%**, HLE **28.7%**, HLE with tools **48.3%**; Vals SAGE **85.53% ± 1.81**. HLE variants and tool settings are distinct.

Coding:

- Qwen reports SWE-bench Verified **76.4%**, SWE-bench Multilingual **69.3%**, LiveCodeBench v6 **83.6%**.

Long context:

- Qwen reports LongBench v2 **63.2%**; the table does not establish retrieval accuracy specifically beyond 512K. Native context is 262K.

### Normalized scores (1–100)

- **Tool use: 82/100.** Vendor TAU2, BFCL and terminal results support capable tool use, with domain-specific evaluation modifications.
- **Reasoning: 86/100.** Vendor GPQA/HLE and Vals SAGE support strong reasoning; tool-assisted HLE is separately identified.
- **Context window: 74/100.** 262K native; longer windows require extension.
- **Multimodal: 80/100.** Text, image and video input with text output.
- **Coding: 82/100.** Vendor SWE and LiveCodeBench results support coding capability; independent exact-deployment evidence is limited.
- **Cost efficiency: 96/100.** Vals lists $0.17/$1.03 per million for its evaluated deployment.
- **Overall Score: 81/100.** Half-up mean of the five quality dimensions, excluding cost.

---

## Signature

- Provided by: **GPT 6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-01
- Method: Qwen weights card and independent Vals evaluation; normalized scores are interpretations, not vendor scores.
- Reference URLs:
  - [Qwen model card and benchmark notes](https://huggingface.co/Qwen/Qwen3.5-397B-A17B)
  - [Vals evaluation](https://www.vals.ai/models/alibaba_qwen3.5-397b-a17b)
  - [OpenRouter route](https://openrouter.ai/qwen/qwen3.5-397b-a17b)
- Future sources: add a separate signed findings file alongside this one.
