# Kimi K2.5 — findings by GPT 5.5

- Source: Moonshot AI (`kimi-k2.5`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.5
- **Short description:** Moonshot AI open-weight multimodal agentic model aimed at visual agent tasks, reasoning, and coding.
- **Provider / access:** Open weights (`moonshotai/Kimi-K2.5`) and hosted routes.
- **Release / knowledge:** Public paper released February 2026; cutoff not stated.
- **IDs:** `moonshotai/Kimi-K2.5`, `kimi-k2.5`.
- **Context window:** Public BenchLeader category reports strongest long-context category **65**; exact token ceiling not recovered here.
- **Modalities:** Text and image/visual-agent inputs; text output.
- **Pricing (as of 2026-10-08):** Public policy report cites about **$1.2/M tokens** blended for Kimi K2.5.
- **Architecture:** Open-weight multimodal agentic model.

### Raw benchmarks found

Agent / tool use:

- BenchLeader category summary: agents/tools **46**, coding **52**, instruction **58**, knowledge **47**, long context **65**, math **64**, multimodal **50**, reasoning **52**.

Reasoning / knowledge:

- Artificial Analysis-style public policy report cites Intelligence Index **47** for Kimi K2.5.

Coding:

- BenchLeader coding category **52**.

Long context:

- BenchLeader long-context category **65**.

### Normalized scores (1–100)

- **Tool use: 50/100.** BenchLeader agents/tools 46 indicates moderate agent ability.
- **Reasoning: 55/100.** Reasoning 52 and AA index 47 support midrange reasoning.
- **Context window: 76/100.** Long-context category 65 is useful, though exact token ceiling was not recovered.
- **Multimodal: 60/100.** Visual-agent design and multimodal category 50 support moderate multimodal credit.
- **Coding: 56/100.** Coding category 52 is modest but real.
- **Cost efficiency: 78/100.** Public blended cost around $1.2/M is reasonable.
- **Overall Score: 59/100.** Half-up mean of the five quality dimensions; best fit is open visual-agent experimentation.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-08
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

