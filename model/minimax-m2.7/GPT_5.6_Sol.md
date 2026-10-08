# MiniMax M2.7 — findings by GPT 5.6 Sol

- Source: MiniMax (`MiniMaxAI/MiniMax-M2.7`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M2.7
- **Short description:** Open-weight self-improving MoE for agentic coding, multi-agent teams, and professional deliverables.
- **Context window:** Approximately 200K tokens; 131K output on common routes.
- **Modalities:** Text input and output.
- **Pricing:** About $0.30/M input and $1.20/M output; open weights also available.

### Raw benchmarks found

- SWE-Pro **56.22%**, SWE Multilingual **76.5%**, Multi-SWE-bench **52.7%**, and VIBE-Pro **55.6%**.
- Terminal-Bench 2 **57.0%**, NL2Repo **39.8%**, and Toolathlon **46.3%**.
- GDPval-AA Elo **1495**; MM Claw end-to-end **62.7%** with **97%** skill compliance ([official model card](https://huggingface.co/MiniMaxAI/MiniMax-M2.7)).

### Normalized scores (1–100)

- **Tool use: 87/100.** Toolathlon, MM Claw, and native Agent Teams support strong multi-agent execution.
- **Reasoning: 85/100.** Professional-work and engineering results show strong planning, though broad science evidence is limited.
- **Context window: 82/100.** Roughly 200K is suitable for repositories and long professional workflows.
- **Multimodal: 15/100.** This exact release is text-only.
- **Coding: 88/100.** Strong SWE-Pro, multilingual SWE, terminal, and VIBE-Pro results establish it as a leading open coder.
- **Cost efficiency: 98/100.** Low API pricing plus open weights make it exceptionally economical.
- **Overall Score: 71/100.** Half-up mean of the five non-cost dimensions; excellent coding agent held down by absent multimodality.

---

## Signature

- Provided by: **GPT 5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-08
- Method: Fresh public internet research using MiniMax's official model card and release materials; scores are normalized interpretations.
- Future sources: add a new file next to this one using the same headings.
