# GLM-5.3 — findings by GPT 6 Astra

- Source: Z.ai / GLM-5.3
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: [Methodology](../../model-comparison.md)
- Cross-model signed log: [Findings](../../model-findings.md)

## Model card

- **Name:** GLM-5.3.
- **Short description:** Open-weight text reasoning model specialized in software engineering and extended agent work; distinct from multimodal GLM-5.3-Flash.
- **Provider / access / IDs:** Z.ai `glm-5.3`, supporting Chat Completions, Responses and Anthropic-compatible protocols; account restrictions can limit protocol availability.
- **Release / knowledge:** Exact launch day and cutoff unverified.
- **Context window:** 1M tokens; maximum output 128K.
- **Modalities:** Text only; reasoning always enabled, low/high/max effort, function calling and structured output. [Provider documentation](https://docs.z.ai/guides/llm/glm-5.3).
- **Pricing (2026-10-05):** Input/output/cache $1.40/$4.40/$0.26 per million tokens; cached storage temporarily free; web search $0.01/use. [Pricing](https://docs.z.ai/guides/overview/pricing).
- **Architecture:** MoE with sparse attention, approximately 753B checkpoint parameters; custom GLM-5.3 license, not assumed unrestricted MIT. [Weights and card](https://huggingface.co/zai-org/GLM-5.3).

### Raw benchmarks found

[Publisher evaluation table](https://huggingface.co/zai-org/GLM-5.3):

- **Tools:** Terminal-Bench 2.1 88.2; Terminal-Bench 3.0 28.3; Toolathlon Verified 73.0; AutomationBench v1.0.6 48.2; ALE-CLI 28.5; GDPval-AA v2 1769 (credited to Artificial Analysis).
- **Coding:** DeepSWE v1.1 66.9; NL2Repo 58.0; SWE-Marathon v1.1 42.5.
- **Reasoning:** HLE with tools 62.5. This is not tool-free HLE.
- **Harness:** Max effort; TB2.1 uses Claude Code 2.1.207 with a six-hour timeout. TB3 uses avg@3, 400K context and ten-hour timeout. Toolathlon reports pass@1 averaged across three runs.
- **Missing:** GPQA, tool-free HLE, CritPt, Tau3, independent current coding index and full-window retrieval: no verified public score found in reviewed evidence.

### Normalized scores (1–100)

- **Tool use: 92/100.** TB2.1 and GDPval reach frontier anchors; difficult newer tests remain far from saturated.
- **Reasoning: 85/100.** Strong tool-assisted HLE and complex work; missing isolated reasoning evidence caps interpretation.
- **Context window: 95/100.** Documented 1M capacity without near-perfect full-window retrieval proof.
- **Multimodal: 15/100.** Officially text-only; Flash-family vision is not transferable.
- **Coding: 91/100.** DeepSWE and terminal results support advanced engineering, with material long-task failures remaining.
- **Cost efficiency: 87/100.** Moderate paid rates offer strong coding value; reasoning and tools add costs.
- **Overall Score: 76/100.** Half-up mean of 92, 85, 95, 15 and 91; the aggregate reflects limited modality breadth.

---

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-05
- Method: Fresh public primary-source research; normalized scores are interpretations, not official vendor scores.
- Future sources: add a separate report beside this file.

