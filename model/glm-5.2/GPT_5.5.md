# GLM-5.2 — findings by GPT 5.5

- Source: Z.ai (`glm-5.2`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.2
- **Short description:** Z.ai GLM-5 generation model for long-context reasoning, coding, and agentic engineering, predecessor to GLM-5.3.
- **Provider / access:** Z.ai API and third-party routers.
- **Release / knowledge:** GLM-5 technical report published 2026-02; GLM-5.2 production listings active before GLM-5.3.
- **IDs:** `z-ai/glm-5.2`, `glm-5.2`.
- **Context window:** Public API index and comparison pages report **1M tokens**.
- **Modalities:** Text/code; exact multimodal support not verified for base GLM-5.2.
- **Pricing (as of 2026-10-05):** Public comparisons place GLM-5.2 above GLM-5 in price and near GLM-5.3-style pricing; exact current route varies by provider.
- **Architecture:** GLM-5 family using DSA for long-context efficiency and agentic/coding capability.

### Raw benchmarks found

Agent / tool use:

- GLM-5 technical report evaluates agentic tasks such as tau2-Bench, MCP-Atlas, and Tool-Decathlon for the GLM-5 family.
- GLM-5.2 exact public benchmark rows were not fully recovered in snippets.

Reasoning / knowledge:

- GLM-5 family is designed around agentic, reasoning, and coding capabilities; exact GLM-5.2 GPQA/HLE rows not recovered.

Coding:

- GLM-5 report frames the family as moving from vibe coding to agentic engineering.
- GLM-5.3 successor benchmarks are stronger and better documented; GLM-5.2 should be scored below it.

Long context:

- API index reports **1M-token** context.

### Normalized scores (1–100)

- **Tool use: 72/100.** GLM-5 family agentic evaluations support a strong score, capped by missing exact GLM-5.2 rows.
- **Reasoning: 74/100.** Strong family-level reasoning, below GLM-5.3's better documented results.
- **Context window: 94/100.** 1M context earns near-top context credit.
- **Multimodal: 25/100.** No exact multimodal support verified.
- **Coding: 78/100.** Coding/agentic engineering is core to the GLM-5 family, but exact rows were limited.
- **Cost efficiency: 76/100.** Generally competitive versus frontier models, but exact current pricing varies.
- **Overall Score: 69/100.** Half-up mean of the five quality dimensions; best fit is long-context coding and agent workflows when GLM-5.3 is unavailable.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

