# Ring 2.6 1T — findings by GPT 5.5

- Source: InclusionAI (`ring-2.6.1t`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ring 2.6 1T
- **Short description:** InclusionAI's trillion-parameter reasoning model for deeper reasoning, advanced agentic workflows, engineering, scientific research, and enterprise automation.
- **Provider / access:** InclusionAI open-weight/community routes and hosted providers.
- **Release / knowledge:** Technical report published June 2026; cutoff not stated.
- **IDs:** `inclusionAI/Ring-2.6-1T`, `ring-2.6-1t`.
- **Context window:** Public Ling/Ring 2.6 materials emphasize long-context training; related 2.6 routes commonly expose **262K** context.
- **Modalities:** Text/code; no verified native multimodal support.
- **Pricing (as of 2026-10-09):** Public route/pricing pages report around **$0.30/M input** and **$2.50/M output** on some providers; AI IQ estimates effective cost around **$2.97/M input+output**.
- **Architecture:** Trillion-parameter MoE reasoning model; Ling/Ring 2.6 report describes hybrid linear attention with Lightning Attention and MLA.

### Raw benchmarks found

Agent / tool use:

- Ling/Ring 2.6 technical report states Ring-2.6 is tailored for deeper reasoning and more advanced agentic workflows (`https://arxiv.org/abs/2606.15079`).
- Public discussion cites agent-focused benchmark families such as Tau2, ClawEval, and SWE-bench, but exact rows were not recovered from accessible snippets.

Reasoning / knowledge:

- Technical report frames Ring-2.6 as the deeper reasoning sibling of Ling-2.6 and introduces KPop reinforcement learning for environment-grounded tasks.

Coding:

- Public launch/community pages position it for engineering development and enterprise automation; no exact SWE-bench row was recovered.

Long context:

- Technical report highlights efficient long-context training/decoding via hybrid linear attention.

### Normalized scores (1–100)

- **Tool use: 78/100.** Agentic-workflow training and public benchmark families support strong tool credit, capped by missing exact rows.
- **Reasoning: 75/100.** Trillion-parameter reasoning focus supports high reasoning, but public exact scores are sparse.
- **Context window: 78/100.** 262K-class public route context and long-context architecture are strong.
- **Multimodal: 20/100.** No native multimodal support verified.
- **Coding: 74/100.** Engineering/agent focus supports solid coding credit, capped by missing standard rows.
- **Cost efficiency: 74/100.** Reasonable for 1T scale, though output pricing is not ultra-cheap.
- **Overall Score: 65/100.** Half-up mean of the five quality dimensions; best fit is open reasoning/agent experimentation.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-09
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

