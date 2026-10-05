# Claude Sonnet 4 — findings by GPT 5.5

- Source: Anthropic (`claude-sonnet-4`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4
- **Short description:** Anthropic's balanced Claude 4 model for coding, agents, analysis, and enterprise workloads, positioned below Opus in cost and latency.
- **Provider / access:** Anthropic API, Claude app, Amazon Bedrock, Google Vertex AI, and partner routes.
- **Release / knowledge:** Claude 4 generation released in 2025; knowledge cutoff not verified.
- **IDs:** `anthropic/claude-sonnet-4`, `claude-sonnet-4`; platform aliases vary.
- **Context window:** Standard **200K** context in most platform pricing; later Anthropic API support for Sonnet 4 reportedly expanded to **1M** context in some routes.
- **Modalities:** Text and image/PDF input; text output; tool use, code execution, MCP connectors, Files API, and structured outputs.
- **Pricing (as of 2026-10-05):** Anthropic pricing documents list Sonnet-class standard pricing at **$3/M input** and **$15/M output**, with cache write/hit rates and batch discounts.
- **Architecture:** Proprietary Claude model.

### Raw benchmarks found

Agent / tool use:

- Claude 4 system card includes agentic/task evaluations; Sonnet 4.5 system-card text references Sonnet 4 as a baseline in CyberGym-style experiments.
- Public pricing/model listings track Claude Sonnet 4 on full benchmark leaderboards, but exact rows were not all visible in snippets.

Reasoning / knowledge:

- Claude 4 family was released as a high-end reasoning generation; no exact GPQA/HLE value was recovered in accessible snippets for Sonnet 4.

Coding:

- Anthropic launched Claude 4 with developer tooling such as code execution, MCP connectors, and Files API; exact SWE-bench value was not recovered here.

Long context:

- Standard context is **200K**; public API discussions report **1M** context availability for Sonnet 4 on Anthropic API.

### Normalized scores (1–100)

- **Tool use: 82/100.** Mature Claude tool/computer-use ecosystem and agentic evaluations support a high score, capped by limited exact extracted rows.
- **Reasoning: 80/100.** Sonnet 4 is a strong frontier-era reasoning model, though no longer the newest Sonnet.
- **Context window: 84/100.** 200K is strong and some routes support 1M, but availability/pricing can vary.
- **Multimodal: 70/100.** Image/PDF input is supported, but no native audio/video output was verified.
- **Coding: 84/100.** Claude Sonnet models are strong coding agents with deep tooling, capped by missing exact SWE row here.
- **Cost efficiency: 70/100.** $3/$15 is reasonable for quality but not cheap.
- **Overall Score: 80/100.** Half-up mean of the five quality dimensions; best fit is reliable coding and enterprise agent workflows.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

