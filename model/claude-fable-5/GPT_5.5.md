# Claude Fable 5 — findings by GPT 5.5

- Source: Anthropic (`claude-fable-5`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5
- **Short description:** Anthropic high-end Claude model for software engineering, knowledge work, scientific reasoning, and vision, positioned around Mythos-class capability with production safeguards.
- **Provider / access:** Anthropic Claude Platform and supported cloud/router providers.
- **Release / knowledge:** 2026 Claude 5 generation; cutoff not stated.
- **IDs:** `claude-fable-5`, Anthropic route aliases vary.
- **Context window:** Anthropic docs list **1M** context for Fable 5.
- **Modalities:** Text and image input; text output; adaptive thinking/tool use through Claude APIs.
- **Pricing (as of 2026-10-08):** Public pricing summaries report **$10/M input** and **$50/M output**.
- **Architecture:** Proprietary Claude model.

### Raw benchmarks found

Agent / tool use:

- Anthropic/Claude community launch notes describe Fable 5 as state-of-the-art on many tested benchmarks and strong for software engineering.
- Public managed-agent discussions use Fable 5 as an orchestrator model.

Reasoning / knowledge:

- Biomedical benchmark paper evaluates Claude Fable 5 across eight biomedical benchmarks and reports it meets or exceeds competitors after excluding refusals.

Coding:

- Launch/system-card discussion emphasizes exceptional software-engineering performance; exact SWE-bench row was not recovered here.

Long context:

- Anthropic context-window docs list **1M** default context.

### Normalized scores (1–100)

- **Tool use: 86/100.** Claude's tool ecosystem plus Fable orchestrator use supports a high score.
- **Reasoning: 90/100.** Biomedical and launch evidence indicate near-frontier reasoning.
- **Context window: 96/100.** 1M context earns near-top context credit.
- **Multimodal: 78/100.** Image input and biomedical multimodal evaluation support strong multimodal credit.
- **Coding: 88/100.** Software engineering is a stated strength, capped by missing exact SWE row.
- **Cost efficiency: 45/100.** $10/$50 is expensive.
- **Overall Score: 88/100.** Half-up mean of the five quality dimensions; best fit is high-value expert work where quality outranks token cost.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-08
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

