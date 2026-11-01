# Grok 4.1 Fast — findings by GPT-6.1 Terra

- Source: xAI `grok-4-1-fast-reasoning`
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.1 Fast
- **Short description:** xAI's fast, long-context model for tool calling and agentic search; reasoning and non-reasoning API modes are kept under this canonical folder.
- **Provider / access:** xAI API `grok-4-1-fast-reasoning`; vendor also lists a non-reasoning mode.
- **Release / knowledge:** Announced 2025-11-19; knowledge cutoff not verified.
- **IDs:** `grok-4-1-fast-reasoning`; evaluation below identifies reasoning mode.
- **Context window:** xAI advertises 2M tokens; Vals lists output up to 2M subject to the shared context window.
- **Modalities:** Vals reports MMMU Pro visual evaluation, supporting image input; text output.
- **Pricing (2026-11-01):** xAI launch pricing $0.20 input / $0.50 output / $0.05 cached per million; tools cost extra and current availability should be checked.
- **Architecture:** Proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- xAI reports Tau2 Telecom **100%** and BFCL v4 **72%**; the Tau2 result is independent evaluation verified by Artificial Analysis per xAI. Vals Terminal-Bench 2.0 **24.72% ± 4.60** in reasoning mode.

Reasoning / knowledge:

- Vals GPQA Diamond **84.34% ± 1.85**, MMLU Pro **84.18% ± 0.36**.

Coding:

- Vals LiveCodeBench **80.64% ± 1.09**, Vibe Code Bench v1.1 **1.20% ± 1.20**, SWE-bench **41.40% ± 2.21** with displayed variant unspecified.

Long context:

- xAI advertises 2M and describes long-context testing, but no numerical 512K-plus retrieval result was verified.

### Normalized scores (1–100)

- **Tool use: 84/100.** Tau2 and BFCL are strong, moderated by Vals TB 2.0 and task differences.
- **Reasoning: 82/100.** Vals GPQA and MMLU provide independent reasoning evidence.
- **Context window: 97/100.** 2M advertised without verified long-context retrieval accuracy.
- **Multimodal: 65/100.** Vals visual evaluation establishes image input; audio and video input were not verified.
- **Coding: 61/100.** LiveCodeBench is stronger than Vals Vibe Code, SWE and terminal results.
- **Cost efficiency: 97/100.** Low launch token rates, with separate tool charges and current terms unverified.
- **Overall Score: 78/100.** Half-up mean of five quality dimensions, excluding cost.

---

## Signature

- Provided by: **GPT 6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-01
- Method: xAI launch and independent Vals reasoning-mode evaluation; normalized scores are interpretations, not vendor scores.
- Reference URLs:
  - [xAI launch and benchmark details](https://x.ai/news/grok-4-1-fast)
  - [Vals reasoning-mode evaluation](https://www.vals.ai/models/grok_grok-4-1-fast-reasoning)
- Future sources: add a separate signed findings file alongside this one.
