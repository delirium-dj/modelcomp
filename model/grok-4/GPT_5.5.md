# Grok 4 — findings by GPT 5.5

- Source: xAI (`grok-4`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4
- **Short description:** xAI reasoning model with tool-use, web-connected product integrations, and multimodal input support.
- **Provider / access:** xAI API and Grok product surfaces.
- **Release / knowledge:** Grok 4 model card published 2025-08-20; cutoff not verified.
- **IDs:** `xai/grok-4`; exact route aliases vary.
- **Context window:** Public reporting and API discussions indicate about **256K** tokens.
- **Modalities:** Text and image input; text output; reasoning and tool/web features via xAI product/API.
- **Pricing (as of 2026-10-05):** Exact current Grok 4 base price not verified from official snippets; newer xAI price pages focus on later Grok models.
- **Architecture:** Proprietary xAI model, described publicly as based on xAI Foundation Model v6.

### Raw benchmarks found

Agent / tool use:

- Grok 4 model card states advanced reasoning and tool-use capabilities and state-of-the-art performance across academic/industry benchmarks.
- Exact public Terminal-Bench/Tau score not verified in accessible snippets.

Reasoning / knowledge:

- xAI model card claims SOTA-class academic benchmark performance; public discussion says base model gains over competitors were modest in some no-tools comparisons.

Coding:

- No exact SWE-bench/LiveCodeBench value verified in accessible snippets.

Long context:

- Public API/product discussion reports **256K** context.

### Normalized scores (1–100)

- **Tool use: 75/100.** Native xAI tool/web positioning is strong, but exact public tool benchmark rows were not recovered.
- **Reasoning: 78/100.** Model-card SOTA claims and public benchmark discussion support high reasoning, capped by dated evidence and mixed independent commentary.
- **Context window: 78/100.** 256K context is strong, though behind 1M-class models.
- **Multimodal: 70/100.** Text plus image input is verified in public product reporting, with no native audio/video output credit.
- **Coding: 72/100.** Likely capable for coding, but no exact SWE/LCB values were verified.
- **Cost efficiency: 55/100.** Pricing uncertainty and historically premium xAI pricing limit cost confidence.
- **Overall Score: 75/100.** Half-up mean of the five quality dimensions; best fit is reasoning plus live-web workflows in the xAI ecosystem.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

