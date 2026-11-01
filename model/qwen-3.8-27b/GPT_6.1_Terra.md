# Qwen 3.8 27B — findings by GPT-6.1 Terra

- Source: Alibaba `Qwen/Qwen3.8-27B`
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 27B
- **Short description:** Alibaba's dense open-weight vision-language model for agentic coding. The separately tracked bare `qwen-3.8` entry describes these same 27B weights, suggesting an identity conflict for review.
- **Provider / access:** Weights `Qwen/Qwen3.8-27B`; OpenRouter Chat Completions `qwen/qwen3.8-27b`.
- **Release / knowledge:** Vals reports 2026-08-14; knowledge cutoff not verified.
- **IDs:** `Qwen/Qwen3.8-27B`.
- **Context window:** 262,144 native, extensible to 1M with YaRN per Qwen; Vals evaluated a 262K deployment with 66K maximum output.
- **Modalities:** Text, image and video input; text output, configurable thinking.
- **Pricing (2026-11-01):** Vals lists $0.50 input / $3 output per million for its evaluated route; self-hosting incurs hardware costs.
- **Architecture:** 27B dense weights, Apache-2.0.

### Raw benchmarks found

Agent / tool use:

- Qwen reports Terminal-Bench 2.1 **73.0%** using Terminus; Vals reports **58.43% ± 5.25** under a separate evaluation.
- Qwen reports OSWorld-Verified **84.3%** and ClawEval-MM **57.4% pass@3 / 56.9 average**.

Reasoning / knowledge:

- Qwen reports GPQA Diamond **89.2%** and HLE **30.8%**; Vals GPQA **88.89% ± 1.58**, ProofBench v1.1 **16.00% ± 3.69**.

Coding:

- Qwen reports SWE-bench Pro **61.7%** using a corrected task set and Claude Code, and DeepSWE 1.1 **42.2%**. Vals Vibe Code Bench v1.1 **64.85% ± 4.83**, LiveCodeBench **84.00% ± 1.03**.

Long context:

- 262K native; 1M requires context extension. No verified long-context retrieval score found.

### Normalized scores (1–100)

- **Tool use: 82/100.** Computer-use and TB 2.1 evidence is strong, with independent and vendor harness differences.
- **Reasoning: 85/100.** GPQA and HLE are strong, moderated by Vals ProofBench.
- **Context window: 74/100.** Native 262K; 1M is an extended configuration rather than the default.
- **Multimodal: 80/100.** Images and video in, text out; audio input not documented.
- **Coding: 83/100.** Corrected SWE-bench Pro and Vals coding results support capability, with evaluation changes noted.
- **Cost efficiency: 92/100.** Vals reports $0.50/$3 per million; self-hosting has infrastructure costs.
- **Overall Score: 81/100.** Half-up mean of five quality dimensions; suited to self-hosted visual coding with context extension when needed.

---

## Signature

- Provided by: **GPT 6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-01
- Method: Qwen model card and independent Vals evaluation; normalized scores are interpretations, not vendor scores.
- Reference URLs:
  - [Qwen model card and evaluation notes](https://huggingface.co/Qwen/Qwen3.8-27B)
  - [Vals evaluation](https://www.vals.ai/models/alibaba_qwen3.8-27b)
  - [OpenRouter route](https://openrouter.ai/qwen/qwen3.8-27b)
- Future sources: add a separate signed findings file alongside this one.
