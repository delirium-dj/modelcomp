# GLM-5.1 Coding — findings by GPT 5.6 Sol

- Source: Z.ai (`zai-org/GLM-5.1`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.1 Coding
- **Short description:** Open-weight GLM-5.1 deployment focused on agentic software engineering and tool-driven workflows.
- **Provider / access:** Z.ai API and open weights.
- **Context window:** 200K tokens.
- **Modalities:** Text input and output.
- **Pricing:** $1.40/M input and $4.40/M output at researched API pricing.

### Raw benchmarks found

- SWE-bench Pro **58.4%**.
- BrowseComp with context management **79.3%**.
- Artificial Analysis Coding Index **55.8** and Design Arena data-visualization Elo **1269**.
- The official model card positions GLM-5.1 as a flagship agentic-engineering model ([official model card](https://huggingface.co/zai-org/GLM-5.1)).

### Normalized scores (1–100)

- **Tool use: 86/100.** BrowseComp 79.3 supports strong search and context-managed agency.
- **Reasoning: 86/100.** Consistent high-end agent results indicate strong planning and reasoning.
- **Context window: 82/100.** 200K is ample for repository and research workflows.
- **Multimodal: 15/100.** This release is text-only, with no verified native image, audio, or video understanding.
- **Coding: 88/100.** SWE-bench Pro 58.4 is a strong real-world software-engineering result.
- **Cost efficiency: 90/100.** Open weights and moderate API rates are attractive for this capability level.
- **Overall Score: 71/100.** Half-up mean of the five non-cost dimensions; excellent for coding agents, with its overall held down by text-only input.

---

## Signature

- Provided by: **GPT 5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-08
- Method: Fresh public internet research using the official Z.ai model card and public independent measurements; scores are normalized interpretations.
- Future sources: add a new file next to this one using the same headings.
