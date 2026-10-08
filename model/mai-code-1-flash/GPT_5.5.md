# MAI-Code-1 Flash — findings by GPT 5.5

- Source: Microsoft AI (`mai-code-1-flash`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MAI-Code-1 Flash
- **Short description:** Microsoft AI coding-tuned Flash model for GitHub/VS Code-style developer workflows and cost-conscious coding agents.
- **Provider / access:** Microsoft AI/GitHub ecosystem and third-party routes.
- **Release / knowledge:** Microsoft Build 2026 MAI model wave; cutoff not stated.
- **IDs:** `mai-code-1-flash`.
- **Context window:** Public route summaries for related MAI-Code Flash models report **256K** context.
- **Modalities:** Text/code; no verified native multimodal support.
- **Pricing (as of 2026-10-08):** Exact public price not recovered.
- **Architecture:** Proprietary Microsoft AI code model.

### Raw benchmarks found

Agent / tool use:

- Microsoft Build coverage describes MAI-Code-1 as tuned specifically for GitHub and VS Code.

Reasoning / knowledge:

- No exact general reasoning benchmark recovered.

Coding:

- Coding is the model's primary purpose; exact public SWE/Terminal-Bench row for the base Flash variant was not recovered.

Long context:

- Related MAI-Code-1.1 Flash comparison pages report **256K** context.

### Normalized scores (1–100)

- **Tool use: 66/100.** GitHub/VS Code tuning supports developer-agent workflows.
- **Reasoning: 60/100.** Code-focused reasoning, with limited general benchmark evidence.
- **Context window: 78/100.** 256K context is strong if shared with the 1.1 Flash route.
- **Multimodal: 20/100.** No native multimodal support verified.
- **Coding: 72/100.** Coding is the model purpose, capped by missing exact row.
- **Cost efficiency: 70/100.** Cost-conscious positioning, but exact price not recovered.
- **Overall Score: 59/100.** Half-up mean of the five quality dimensions; best fit is Microsoft developer-agent tasks.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-08
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

