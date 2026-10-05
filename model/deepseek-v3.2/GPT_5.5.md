# DeepSeek V3.2 — findings by GPT 5.5

- Source: DeepSeek (`deepseek-v3.2`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V3.2
- **Short description:** DeepSeek open large language model generation using DeepSeek Sparse Attention for efficient long-context processing.
- **Provider / access:** DeepSeek API and third-party/open-weight routes.
- **Release / knowledge:** Technical paper published December 2025; cutoff not stated.
- **IDs:** `deepseek-v3.2`.
- **Context window:** Public paper excerpt says maximum context length **128K**.
- **Modalities:** Text/code model; no verified native multimodal support.
- **Pricing (as of 2026-10-05):** Public token.app/model pages track pricing, but exact current route price was not recovered in snippets.
- **Architecture:** DeepSeek V3.2 model with DeepSeek Sparse Attention (DSA) to reduce context processing complexity.

### Raw benchmarks found

Agent / tool use:

- Paper/source snippets report improvements over DeepSeek-V3.2-SFT on **Tau2Bench**, **MCP-Mark**, and **MCP-Universe**.

Reasoning / knowledge:

- DeepSeek-V3.2 paper describes pushing the frontier of open large language models; guide tables compare V3 to V3.2 and show training/RL improvements.

Coding:

- No exact SWE-bench/LiveCodeBench values recovered from snippets for base V3.2.

Long context:

- Maximum context length **128K**.
- DSA reduces complexity while preserving long-context performance.

### Normalized scores (1–100)

- **Tool use: 68/100.** Tau2Bench and MCP benchmark improvements support strong agent/tool credit.
- **Reasoning: 70/100.** Strong open-model generation with RL improvements, though exact GPQA/HLE rows were not recovered.
- **Context window: 66/100.** 128K context is useful but behind 200K-1M models.
- **Multimodal: 15/100.** No native multimodal support verified.
- **Coding: 66/100.** DeepSeek code capability is likely strong, but no exact V3.2 coding row was recovered.
- **Cost efficiency: 84/100.** DeepSeek models are usually cost-effective, but exact current price was not recovered.
- **Overall Score: 57/100.** Half-up mean of the five quality dimensions; best fit is open text/code workloads with efficient 128K context.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

