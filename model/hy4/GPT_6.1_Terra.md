# Hy4 Preview — findings by GPT-6.1 Terra

- Source: Tencent `tencent/Hy4-preview`
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy4 Preview
- **Short description:** Tencent Hunyuan's open-weight preview for coding, office work and research; no separate stable Hy4 ID verified here.
- **Provider / access:** Tencent TokenHub `hy4-preview`, OpenRouter `tencent/hy4-preview`, and open weights.
- **Release / knowledge:** Tencent announced 2026-08-28; knowledge cutoff not verified.
- **IDs:** `tencent/Hy4-preview`.
- **Context window:** Tencent and Vals list approximately 1M tokens; Vals lists 64K maximum output.
- **Modalities:** Text input and text output; tool use supported by compatible deployments.
- **Pricing (as of 2026-11-02):** Vals lists $0.83 input / $2.50 output per million on its route; Tencent's domestic pricing is denominated in yuan.
- **Architecture:** Open-weight MoE, 770B total / 49B active according to Tencent.

### Raw benchmarks found

- Tencent's figures indexed by Benchgen report Terminal-Bench 2.1 **85.4%**, Toolathlon-Verified **74.1%**, SWE-bench Pro **65.7%**, and DeepSWE **64.3%**. These are vendor-reported, harness-dependent measurements.
- Vals reports Terminal-Bench 4.0 **8.08% ± 1.34** and ProgramBench **0%** under its independent setup, distinct from Tencent's 2.1 and ProgramBench results.
- No verified exact-snapshot full-window retrieval measurement found.

### Normalized scores (1–100)

- **Tool use: 84/100.** Vendor tool and terminal scores are high, tempered by independent TB 4.0.
- **Reasoning: 75/100.** Provisional without a directly checked exact-model GPQA or HLE figure.
- **Context window: 90/100.** 1M listed; full-window retrieval not verified.
- **Multimodal: 15/100.** Text-only model; product-level multimodal routing is distinct.
- **Coding: 82/100.** Vendor SWE Pro and DeepSWE contrast with difficult independent Vals tasks.
- **Cost efficiency: 90/100.** Vals route lists $0.83/$2.50 per million.
- **Overall Score: 69/100.** Half-up mean of five quality dimensions, excluding cost.

## Signature

- Provided by: **GPT 6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-02
- Method: Tencent release, indexed vendor benchmark results and independent Vals evaluation; benchmark versions distinguished.
- Reference URLs:
  - [Tencent release](https://www.tencent.com/tencent-releases-and-open-sources-tencent-hy4-preview/)
  - [Tencent model card](https://huggingface.co/tencent/Hy4-preview)
  - [Benchgen vendor-result index](https://benchgen.com/models/hungyuan/hy4-preview)
  - [Vals evaluation](https://www.vals.ai/models/tencent_hy4-preview)
