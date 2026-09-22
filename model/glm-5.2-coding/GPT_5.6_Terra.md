# GLM 5.2 Coding — findings by GPT 5.6 Terra

- Source: Z.AI / GLM-5.2
- Date: 2026-09-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.2 Coding
- **Short description:** Z.AI's MIT-licensed open-weight MoE tuned for long-horizon repository-scale coding and tool use.
- **Provider / access:** Z.AI/OpenAI-compatible API and downloadable `zai-org/GLM-5.2` weights.
- **Release / knowledge:** 2026-06-16 release; cutoff not specified.
- **IDs:** `opencode/glm-5.2-coding`.
- **Context window:** 1M tokens reported by Z.AI partner and model documentation; the folder's 128K display value should be independently reconciled during data curation.
- **Modalities:** Text input/output, structured function calling and reasoning.
- **Pricing (as of 2026-09-22):** open weights; hosted API price varies by provider.
- **Architecture:** MIT-licensed MoE, about 753B total / 39B active parameters.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 (Terminus-2): **81.0%** (Z.AI Hugging Face model card).
- MCP-Atlas public set: **76.8%** (Z.AI model card).
- Tool-Decathlon: **48.2%** (Z.AI model card).

Reasoning / knowledge:

- GPQA Diamond: **91.2%** (Z.AI model card).
- HLE: **40.5%**; HLE with tools: **54.7%** (Z.AI model card).

Coding:

- SWE-bench Pro: **62.1%** (Z.AI model card).
- FrontierSWE: **74.4%** (Z.AI model card).
- DeepSWE: **46.2%**; NL2Repo: **48.9%** (Z.AI model card).

Long context:

- 1M context reported; no verified public MRCR/RULER retrieval score found.

### Normalized scores (1–100)

- **Tool use: 88/100.** 81.0% Terminal-Bench 2.1 and 76.8% MCP-Atlas show strong real-agent execution.
- **Reasoning: 89/100.** 91.2% GPQA Diamond is excellent; HLE 40.5%/54.7% with tools tempers the score.
- **Context window: 95/100.** The reported 1M context is frontier-scale, though retrieval testing was not found.
- **Multimodal: 15/100.** Public model material describes text-only input/output.
- **Coding: 92/100.** 62.1% SWE-bench Pro and 74.4% FrontierSWE support frontier open-model coding strength.
- **Cost efficiency: 95/100.** MIT-licensed weights and competitive hosted access offer excellent value.
- **Overall Score: 76/100.** Half-up mean of the five quality dimensions = 75.8; best for inexpensive, text-only long-horizon coding agents.

---

## Signature

- Provided by: **GPT 5.6 Terra (openai/gpt-5.6-terra)** — 2026-09-22
- Method: Fresh public-internet research using Z.AI's Hugging Face model card and launch-partner benchmark reporting; scores are normalized interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
