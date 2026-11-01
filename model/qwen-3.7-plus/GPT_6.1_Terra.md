# Qwen 3.7 Plus — findings by GPT-6.1 Terra

- Source: Alibaba `qwen3.7-plus`
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7 Plus
- **Short description:** Alibaba's hosted multimodal model for coding, document processing and agent workflows.
- **Provider / access:** Alibaba Model Studio `qwen3.7-plus`; OpenRouter Chat Completions `qwen/qwen3.7-plus`.
- **Release / knowledge:** Vals reports 2026-06-01 release; knowledge cutoff not verified.
- **IDs:** `qwen3.7-plus`; no Zen Free ID verified.
- **Context window:** Alibaba lists 1M; Vals evaluated with 65,536 max output tokens, which may be deployment-specific.
- **Modalities:** Alibaba's model catalog lists the model for visual understanding; text output, thinking, function calling and structured output supported.
- **Pricing (2026-11-01):** Vals reports $0.40 input / $1.60 output per million for its route; long-context and provider tiers can differ.
- **Architecture:** Vals lists private weights; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- Vals Terminal-Bench 2.1 **52.81% ± 0.65**; Vals evaluated using Alibaba API, 1M context, temperature 0.7 and preserved thinking.
- Tau3-Banking, GDPval-AA and Claw-Eval: no verified public score found.

Reasoning / knowledge:

- Vals SAGE **89.15% ± 1.40**; GPQA Diamond and HLE: no verified exact-model score found in the reviewed sources.

Coding:

- Vals Vibe Code Bench v1.1 **46.39% ± 4.61**, and SWE-bench Verified **66.67% on the Vals Index subset**, not the full benchmark.

Long context:

- Alibaba lists 1M context; no verified long-context retrieval result found.

### Normalized scores (1–100)

- **Tool use: 71/100.** Vals TB 2.1 supports moderate agent performance; broader tool metrics are unverified.
- **Reasoning: 79/100.** Provisional, based on Vals SAGE and model positioning without verified GPQA or HLE.
- **Context window: 96/100.** Alibaba documents 1M, but no verified 512K-plus retrieval result.
- **Multimodal: 65/100.** Alibaba lists visual understanding; audio and video input are not established here.
- **Coding: 76/100.** Vals Vibe Code and SWE-bench subset provide mixed coding evidence.
- **Cost efficiency: 94/100.** Vals's $0.40/$1.60 per million route is relatively inexpensive.
- **Overall Score: 77/100.** Half-up mean of five quality dimensions; suited to budget-conscious visual and document agents.

---

## Signature

- Provided by: **GPT 6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-01
- Method: Alibaba documentation and independent Vals evaluation; normalized scores are interpretations, not vendor scores.
- Reference URLs:
  - [Alibaba model catalog](https://www.alibabacloud.com/help/en/model-studio/models)
  - [Alibaba text-generation specifications](https://www.alibabacloud.com/help/en/model-studio/text-generation-model)
  - [Vals evaluation](https://www.vals.ai/models/alibaba_qwen3.7-plus)
  - [OpenRouter route](https://openrouter.ai/qwen/qwen3.7-plus)
- Future sources: add a separate signed findings file alongside this one.
