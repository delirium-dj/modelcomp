# Qwen 3.6 Plus — findings by GPT-6.1 Terra

- Source: Alibaba `qwen3.6-plus`
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.6 Plus
- **Short description:** Alibaba's previous-generation hosted Qwen model for reasoning, coding and agents; now listed as legacy.
- **Provider / access:** Alibaba Model Studio `qwen3.6-plus`; OpenRouter Chat Completions `qwen/qwen3.6-plus`.
- **Release / knowledge:** Vals reports 2026-04-02 release; knowledge cutoff not verified.
- **IDs:** `qwen3.6-plus`.
- **Context window:** Alibaba lists 1M context; Vals reports 984K context and 66K output on its deployment.
- **Modalities:** Vals reports MMMU Pro evaluation confirming image understanding; text output. Exact additional input modalities not verified in the cited provider catalog.
- **Pricing (2026-11-01):** Vals lists $0.50 input / $3 output per million; provider and long-context prices may differ.
- **Architecture:** Vals lists private weights; exact parameter count not independently verified.

### Raw benchmarks found

Agent / tool use:

- Vals Terminal-Bench 2.1 **53.18% ± 1.63**. Tau3-Banking, GDPval-AA and Claw-Eval: no verified public score found.

Reasoning / knowledge:

- Vals GPQA Diamond **87.37% ± 1.67** and MMLU Pro **87.67% ± 0.32**.
- HLE: no verified public score found.

Coding:

- Vals LiveCodeBench **85.95% ± 0.98**, Vibe Code Bench v1.1 **25.57% ± 3.91**, SWE-bench **73.40% ± 1.98**; the displayed SWE result does not identify its variant.

Long context:

- Alibaba lists 1M; no verified long-context retrieval result found.

### Normalized scores (1–100)

- **Tool use: 71/100.** Vals TB 2.1 supports moderate agent performance; broader tool benchmarks are missing.
- **Reasoning: 86/100.** Vals GPQA and MMLU are strong, with no HLE verified here.
- **Context window: 95/100.** Alibaba lists 1M; Vals's deployment reports 984K and retrieval accuracy is unverified.
- **Multimodal: 65/100.** Vals MMMU Pro confirms visual evaluation, but broader modalities are not established here.
- **Coding: 75/100.** Strong LiveCodeBench is tempered by lower Vibe Code and an unidentified SWE variant.
- **Cost efficiency: 92/100.** Vals reports $0.50/$3 per million for its deployment.
- **Overall Score: 78/100.** Half-up mean of five quality dimensions; useful for inexpensive visual reasoning with task-specific agent tests.

---

## Signature

- Provided by: **GPT 6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-01
- Method: Alibaba catalog and independent Vals evaluation; normalized scores are interpretations, not vendor scores.
- Reference URLs:
  - [Alibaba text-generation catalog](https://www.alibabacloud.com/help/en/model-studio/text-generation-model)
  - [Vals evaluation](https://www.vals.ai/models/alibaba_qwen3.6-plus)
  - [OpenRouter route](https://openrouter.ai/qwen/qwen3.6-plus)
- Future sources: add a separate signed findings file alongside this one.
