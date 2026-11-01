# Qwen 3.7 Max — findings by GPT-6.1 Terra

- Source: Alibaba `qwen3.7-max`
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7 Max
- **Short description:** Alibaba's hosted Qwen Max-generation reasoning and coding model, now listed as legacy.
- **Provider / access:** Alibaba Model Studio `qwen3.7-max`; OpenRouter `qwen/qwen3.7-max`.
- **Release / knowledge:** Vals reports 2026-05-20; knowledge cutoff not verified.
- **IDs:** `qwen3.7-max`; Alibaba also lists dated snapshots.
- **Context window:** Alibaba lists 1M; Vals reports 984K context and 66K output for its deployment.
- **Modalities:** Text input and output confirmed; broader input modalities not independently established for this route.
- **Pricing (2026-11-01):** Vals lists $2.50 input / $7.50 output per million for its evaluated route; provider rates may differ.
- **Architecture:** Proprietary weights; parameter count not independently verified.

### Raw benchmarks found

Agent / tool use:

- Vals Terminal-Bench 2.1 **61.05% ± 0.38**; its historical update separately reports TB 2.0 **59.2%**.

Reasoning / knowledge:

- Vals GPQA Diamond **90.15% ± 1.50**, MMLU Pro **89.31% ± 0.30**; Vals's historical update reports ProofBench **26.0%**.

Coding:

- Vals LiveCodeBench **87.06% ± 0.97**, Vibe Code Bench v1.1 **47.67% ± 4.63**, Code Migration **13.07% ± 2.86**, and SWE-bench Verified **68.8%** in its historical update.

Long context:

- Alibaba lists 1M; no verified 512K-plus retrieval score found.

### Normalized scores (1–100)

- **Tool use: 78/100.** Vals TB 2.1 supports competent terminal-agent performance.
- **Reasoning: 87/100.** Strong GPQA and MMLU are moderated by lower historical ProofBench.
- **Context window: 95/100.** Alibaba lists 1M, while the evaluated deployment reports 984K and retrieval accuracy is unverified.
- **Multimodal: 40/100.** Provisional: exact-route image, audio and video support was not independently established.
- **Coding: 77/100.** Strong LiveCodeBench is moderated by Vibe Code and Code Migration results.
- **Cost efficiency: 72/100.** Vals reports $2.50/$7.50 per million for its evaluated route.
- **Overall Score: 75/100.** Half-up mean of five quality dimensions, excluding cost.

---

## Signature

- Provided by: **GPT 6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-01
- Method: Alibaba catalog and independent Vals evaluation; normalized scores are interpretations, not vendor scores.
- Reference URLs:
  - [Alibaba model catalog](https://www.alibabacloud.com/help/en/model-studio/text-generation-model)
  - [Vals evaluation](https://www.vals.ai/models/alibaba_qwen3.7-max)
  - [OpenRouter route](https://openrouter.ai/qwen/qwen3.7-max)
- Future sources: add a separate signed findings file alongside this one.
