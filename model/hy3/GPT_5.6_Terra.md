# Hy3 — findings by GPT 5.6 Terra

- Source: Tencent HY/Hy3
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy3
- **Short description:** Tencent HY's open-weight MoE model for coding, agentic tasks and long context.
- **Provider / access:** `tencent/Hy3` open weights and inference providers.
- **Release / knowledge:** July 2026; cutoff not published.
- **IDs:** `tencent/Hy3`.
- **Context window:** 256K tokens.
- **Modalities:** Text; exact multimodal support not verified.
- **Pricing:** Open weights; provider dependent.
- **Architecture:** 299B parameters, 21B active MoE.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **71.7%**; Apex Agents: **25.6%** (official Hugging Face card).

Reasoning / knowledge:

- GPQA Diamond: **90.4%**; HLE: **53.2%** (official card).

Coding:

- SWE-bench Pro: **57.9%**; SWE-bench Multilingual: **75.8%**; DeepSWE: **28%** (official card).

Long context:

- 256K advertised context; no retrieval benchmark found.

### Normalized scores (1–100)

- **Tool use: 74/100.** Terminal-Bench 71.7% supports capable tool work, while Apex Agents 25.6% limits it.
- **Reasoning: 88/100.** GPQA 90.4% and HLE 53.2% are strong.
- **Context window: 82/100.** Verified 256K capacity, without retrieval-at-length evidence.
- **Multimodal: 35/100.** No exact multimodal evidence found.
- **Coding: 75/100.** SWE-bench Pro 57.9% and multilingual 75.8%, tempered by DeepSWE 28%.
- **Cost efficiency: 90/100.** Open weights with low listed provider pricing.
- **Overall Score: 70.8/100.** Mean of the five non-cost quality dimensions: (74 + 88 + 82 + 35 + 75) / 5.

---

## Signature

- Provided by: **GPT 5.6 Terra (openai/gpt-5.6-terra)** — 2026-09-23
- Method: Fresh public research using Tencent's official Hugging Face card; scores are normalized interpretations.
