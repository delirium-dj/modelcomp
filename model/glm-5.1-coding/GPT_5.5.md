# GLM-5.1 Coding — findings by GPT 5.5

- Source: Z.ai (`glm-5.1-coding`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.1 Coding
- **Short description:** Coding-oriented GLM-5.1 route/profile for agentic engineering, IDE workflows, and code generation.
- **Provider / access:** Z.ai/open-weight ecosystem, coding plans, OpenRouter-style providers, and local/hosted deployments.
- **Release / knowledge:** GLM-5 family paper published 2026-02; GLM-5.1 public listings active in 2026.
- **IDs:** `glm-5.1-coding`, related `z-ai/glm-5.1`.
- **Context window:** BenchLM reports GLM-5.1 at **203K** context; public route listings vary around 200K.
- **Modalities:** Text/code; code execution support appears in local metadata, not necessarily native model output modality.
- **Pricing (as of 2026-10-05):** Public benchmark/pricing reports vary by plan and provider; low-cost coding-plan anecdotes exist, but exact route pricing is not stable.
- **Architecture:** Open-weight GLM-5.1 family model, commonly described around **744B total / 40B active** in comparative reports.

### Raw benchmarks found

Agent / tool use:

- BenchLeader GLM-5.1 tracks provider speed/pricing and benchmark categories as of 2026-10-02.
- GLM-5 paper evaluates agentic/tool tasks for the family, including tau2-Bench, MCP-Atlas, and Tool-Decathlon.

Reasoning / knowledge:

- BenchLM reports GLM-5.1 as open weight with public category tracking.

Coding:

- BenchLM: GLM-5.1 ranks **#42 of 144** eligible models for coding/programming with public category score **50.7/100**.
- Public coding benchmark claim: GLM-5.1 scored **58.4 on SWE-Bench Pro** and reached **#3 on Code Arena**, but that source is community-posted and should be treated as secondary.

Long context:

- BenchLM reports **203K** context.

### Normalized scores (1–100)

- **Tool use: 68/100.** GLM family agentic evaluations and coding-route metadata are strong, capped by limited exact route rows.
- **Reasoning: 70/100.** GLM-5.1 is capable but now behind 5.2/5.3 successors.
- **Context window: 76/100.** Roughly 200K context is solid.
- **Multimodal: 20/100.** No native multimodal support verified for this coding route.
- **Coding: 76/100.** BenchLM coding score and SWE-Bench Pro claim support strong coding, reduced for source uncertainty.
- **Cost efficiency: 82/100.** Public plans/routes appear cost-competitive, though exact current pricing varies.
- **Overall Score: 62/100.** Half-up mean of the five quality dimensions; best fit is budget coding-agent work on the GLM stack.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

