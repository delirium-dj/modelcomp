# Claude Sonnet 5 — findings by GLM 5.3 Flash

- Source: Anthropic (`claude-sonnet-5`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5 (current Sonnet tier; default model on Free/Pro/Max/Team/Enterprise claude.ai plans and in Claude Code)
- **Short description:** Anthropic's June 2026 agentic Sonnet: plans autonomously, uses browser and terminal tools, and approaches Opus 4.8 on agentic-search and computer-use evaluations at a fraction of the price. The $2/$10 launch rate was made standard on 2026-08-10 (scheduled $3/$15 increase cancelled).
- **Provider / access:** Anthropic Messages API (`claude-sonnet-5`; Vertex `claude-sonnet-5`; Bedrock `anthropic.claude-sonnet-5`); Claude Platform on AWS, Google Cloud, Microsoft Foundry, Claude Code. Messages (not Chat Completions) API.
- **Release / knowledge:** released 2026-06-30. Knowledge cutoff **January 2026**.
- **IDs:** `claude-sonnet-5` (API/Vertex), `anthropic.claude-sonnet-5` (Bedrock). No API free tier; it is the chat default on claude.ai Free/Pro — chat access, not an API free tier.
- **Context window:** 1,000,000 tokens / 128K max output on the synchronous Messages API.
- **Modalities:** text + image (vision) in; text out. Adaptive thinking always on (extended visible thinking not exposed); effort parameter defaults to high.
- **Pricing (as of 2026-09-18):** $2.00 in / $10.00 out per 1M — launch rate made standard 2026-08-10; the scheduled 2026-09-01 rise to $3/$15 was cancelled.
- **Architecture:** proprietary, parameters undisclosed; proprietary transformer with adaptive thinking.

### Raw benchmarks found

Agent / tool use:

- Anthropic positions Sonnet 5 as **approaching Opus 4.8 on agentic search and computer-use evaluations** at meaningfully lower cost (launch positioning; per-benchmark rows not published in captured sources)
- Native browser + terminal tool use for computer-use and coding agents (Anthropic)
- Terminal-Bench / OSWorld / tau / BrowseComp: no verified public score found for Sonnet 5 specifically

Reasoning / knowledge:

- GPQA / HLE / AA Intelligence Index: no verified public score found
- Qualitative: "more powerful and agentic version of the Sonnet line" vs Sonnet 4.6 (Anthropic)

Coding:

- Agentic coding positioning (terminal commands, codebase iteration); SWE-bench / TB numbers: no verified public score found for Sonnet 5 specifically

Long context:

- Window: **1M tokens / 128K out**; retrieval benchmarks at window length: no verified public score found

### Normalized scores (1–100)

> Independent derivation per the methodology in `../../model-comparison.md`; Overall = mean of the six. Most scores are provisional — Anthropic published positioning, not benchmark tables, for this tier.

- **Tool use: 90/100.** Browser + terminal control and near-Opus-4.8 agentic search/computer-use positioning; no published benchmark rows to push above 90.
- **Reasoning: 84/100.** Adaptive thinking always-on with high-effort default and a fresh Jan 2026 cutoff; provisionally below Opus 5 (88) per Anthropic's own tiering.
- **Context window: 100/100.** 1M input / 128K output at the top tier of this repo.
- **Multimodal: 82/100.** Text + vision in; text-only output.
- **Coding: 86/100.** Strong agentic-coding positioning and Claude Code integration; unpublished benchmark rows cap it provisionally.
- **Cost efficiency: 57/100.** No API free tier and $2/$10 list — mid-priced for 2026 (cheap vs Opus, expensive vs open tiers); the cancelled price hike is a positive signal.
- **Overall Score: 88/100.** Mean: (90 + 84 + 100 + 82 + 86 + 57) / 6 = 499/6 = 83.2 → **83**. Best fit: the default Anthropic production agent — near-Opus agency at mid-tier prices, benchmark transparency being the main gap.

---

## Signature

- Provided by: **GLM 5.3 Flash (z.ai/glm-5.3-flash)** — 2026-09-18
- Method: fresh public internet research from zero (ai-tldr.dev Claude Sonnet 5 page quoting Anthropic's announcement, pricing history and lineage); processed here per the dynamic-discovery queue opened in `model/claude-sonnet-4.6/GLM_5.3_Flash.md`. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
