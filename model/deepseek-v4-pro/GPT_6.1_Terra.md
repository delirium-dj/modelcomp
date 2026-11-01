# DeepSeek V4 Pro — findings by GPT-6.1 Terra

- Source: DeepSeek `deepseek-ai/DeepSeek-V4-Pro`
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Pro
- **Short description:** Open-weight reasoning and agentic-coding MoE; Max is a reasoning mode, not another checkpoint.
- **Provider / access:** Published `deepseek-ai/DeepSeek-V4-Pro` weights; the current `deepseek-v4-pro` API route serves the later 0813 version.
- **Release / knowledge:** Vals lists 2026-04-23; knowledge cutoff not verified.
- **IDs:** `deepseek-ai/DeepSeek-V4-Pro`; API `deepseek-v4-pro` currently maps to `DeepSeek-V4-Pro-0813`.
- **Context window:** Vendor specifies 1M, with up to 384K output for the current API route.
- **Modalities:** Text input and output; DeepSeek's current Pro API does not support vision.
- **Pricing (2026-11-01):** Current 0813 API: peak $1.32 input / $3.96 output per million; off-peak $0.66/$1.98. These rates apply to the current route, not necessarily historical evaluations.
- **Architecture:** 1.6T total / 49B active MoE; MIT weights.

### Raw benchmarks found

Agent / tool use:

- DeepSeek reports Max-effort Terminal-Bench 2.0 **67.9%**, MCP Atlas public **73.6%**, Toolathlon **51.8%**. Vals reports Terminal-Bench 4.0 **11.11% ± 1.34**; versions and harnesses differ.

Reasoning / knowledge:

- Vendor Max-effort GPQA Diamond **90.1%**, HLE **37.7%**, and HLE with tools **48.2%**. Vals reports GPQA **89.39% ± 1.65** and ProofBench v1.1 **16.00% ± 3.69**.

Coding:

- Vendor Max-effort SWE-bench Verified **80.6%**, SWE-bench Pro **55.4%**, LiveCodeBench **93.5%**. Vals reports LiveCodeBench **87.48% ± 0.95**, Vibe Code Bench v1.1 **49.93% ± 4.77**.

Long context:

- Vendor reports MRCR 1M **83.5 MMR** and CorpusQA 1M **62.0%** at Max effort. MRCR's MMR measure is not automatically equivalent to exact-match retrieval.

### Normalized scores (1–100)

- **Tool use: 84/100.** Vendor MCP and Toolathlon results are strong; Vals's later terminal benchmark uses a different task set.
- **Reasoning: 86/100.** GPQA and HLE support strong reasoning, tempered by independent ProofBench.
- **Context window: 96/100.** Vendor specifies 1M and reports long-context results; MRCR's metric is not assumed equivalent to exact-match thresholds.
- **Multimodal: 40/100.** Original weights and current Pro API are text-only.
- **Coding: 85/100.** Vendor SWE results and independent coding evaluations support capability with meaningful harness variation.
- **Cost efficiency: 85/100.** Current API's peak $1.32/$3.96 per million falls off-peak; historical checkpoint access may differ.
- **Overall Score: 78/100.** Half-up mean of five quality dimensions, excluding cost.

---

## Signature

- Provided by: **GPT 6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-01
- Method: DeepSeek checkpoint documentation and independent Vals evaluation; current API version and benchmark settings are distinguished.
- Reference URLs:
  - [DeepSeek model card](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)
  - [DeepSeek current API and pricing](https://api-docs.deepseek.com/quick_start/pricing)
  - [Vals evaluation](https://www.vals.ai/models/deepseek_deepseek-v4-pro)
- Future sources: add a separate signed findings file alongside this one.
