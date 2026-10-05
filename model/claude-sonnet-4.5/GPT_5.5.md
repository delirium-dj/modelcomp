# Claude Sonnet 4.5 — findings by GPT 5.5

- Source: Anthropic (`claude-sonnet-4.5`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.5
- **Short description:** Anthropic's balanced Claude 4.5 model, positioned for coding, agentic work, and enterprise deployment below Opus-tier cost.
- **Provider / access:** Anthropic API, Claude app, and cloud partners such as Amazon Bedrock/Google Vertex depending on region.
- **Release / knowledge:** 2026-era Claude 4.5 release; exact public cutoff not verified.
- **IDs:** `anthropic/claude-sonnet-4.5`; provider-specific aliases vary.
- **Context window:** Standard **200K** context, with pricing tiers for long-context prompts above 200K in some platform docs.
- **Modalities:** Text and image/document input; text output; tool use, computer-use style integrations, structured outputs through Anthropic APIs.
- **Pricing (as of 2026-10-05):** Public pricing references report **$3/M input** and **$15/M output**, with long-context rates around **$6/M input** and **$22.50/M output** above 200K.
- **Architecture:** Proprietary Claude model.

### Raw benchmarks found

Agent / tool use:

- Claude Sonnet 4.5 system card reports CyberGym-style agent/security evaluations under 200K context with multiple context resets.
- Public summaries emphasize improved scaffolding and tool-use performance over Sonnet 4.

Reasoning / knowledge:

- System card includes safety, reasoning, and long-context evaluations; exact public standard rows require the PDF tables.
- No single canonical public GPQA/HLE value was verified from accessible snippets.

Coding:

- Anthropic positions Sonnet 4.5 strongly for coding and agentic tasks; exact SWE-bench value not visible in accessible snippets.

Long context:

- Pricing/model docs and system card references consistently indicate **200K** normal context and special handling for longer workflows.

### Normalized scores (1–100)

- **Tool use: 84/100.** Anthropic's mature tool/computer-use stack and system-card agent evaluations support a high score.
- **Reasoning: 82/100.** Sonnet 4.5 is a high-end reasoning model, capped below Opus-tier and by lack of extracted exact rows here.
- **Context window: 78/100.** 200K context is strong but no longer frontier-leading.
- **Multimodal: 70/100.** Image/PDF input is supported, but no native audio/video output was verified.
- **Coding: 86/100.** Coding is a core Sonnet strength; score is capped by missing exact SWE/LCB value in accessible snippets.
- **Cost efficiency: 68/100.** $3/$15 is fair for high quality but not cheap.
- **Overall Score: 80/100.** Half-up mean of the five quality dimensions; best fit is production coding agents where reliability matters more than lowest token price.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

