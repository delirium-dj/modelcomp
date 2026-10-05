# GLM-5.2 Coding — findings by GPT 5.5

- Source: Z.ai (`glm-5.2-coding`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.2 Coding
- **Short description:** Coding-oriented GLM 5.2 route/model profile for agentic software engineering and IDE workflows.
- **Provider / access:** Z.ai ecosystem and coding-tool/router integrations.
- **Release / knowledge:** GLM-5 generation paper published 2026-02; GLM-5.2 coding public guides appeared before GLM-5.3.
- **IDs:** `glm-5.2-coding`; exact provider route not fully verified.
- **Context window:** GLM-5.2 family public comparisons report **1M** context.
- **Modalities:** Text/code in and text/code out; tool use depends on IDE/agent scaffolding.
- **Pricing (as of 2026-10-05):** Public coding guide references cache hits around **$0.26/M** and points to GLM-5.2 pricing; exact full route price not recovered.
- **Architecture:** GLM-5 family model designed around agentic, reasoning, and coding capabilities with DSA for long-context efficiency.

### Raw benchmarks found

Agent / tool use:

- GLM-5 technical paper describes agentic engineering focus and evaluates tool-use/agentic tasks including tau2-Bench, MCP-Atlas, and Tool-Decathlon.
- Exact GLM-5.2 Coding standalone public rows were not verified.

Reasoning / knowledge:

- GLM-5 family evidence supports strong reasoning, but exact GLM-5.2 Coding GPQA/HLE rows were not found.

Coding:

- Public GLM-5.2 coding guides focus on Terminal-Bench v2.1 as relevant to engineering workflows, but exact standalone score was not recovered.
- GLM-5.3 successor evidence suggests the same family is strong at coding, but that is a successor proxy.

Long context:

- GLM-5 family uses long-context fidelity mechanisms; GLM-5.2/5.3 comparisons report **1M** context.

### Normalized scores (1–100)

- **Tool use: 70/100.** Family-level tool-use design is strong, but exact GLM-5.2 Coding rows are missing.
- **Reasoning: 72/100.** GLM-5 family reasoning is strong, capped by proxy evidence.
- **Context window: 94/100.** 1M context earns near-top context credit.
- **Multimodal: 25/100.** No exact multimodal support was verified for this coding route.
- **Coding: 78/100.** Coding is the model's purpose and family strength, capped by missing exact benchmark rows.
- **Cost efficiency: 78/100.** Pricing appears below many frontier coding models, but the exact route price was not verified.
- **Overall Score: 68/100.** Half-up mean of the five quality dimensions; best fit is GLM-based coding agents where long context matters.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

