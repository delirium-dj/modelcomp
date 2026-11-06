# Claude Sonnet 3.5 — findings by Mercury 3

- Source: Anthropic (Claude 3.5 Sonnet)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude 3.5 Sonnet
- **Short description:** Anthropic's October 2024 flagship — the release widely credited with making coding agents viable (better-than-Opus capabilities at 2x the speed for the same Sonnet price). A historically pivotal mid-tier model; long retired from the frontier.
- **Provider / access:** Claude API (`claude-3-5-sonnet-20241022`), claude.ai, Claude Code, AWS Bedrock, Google Vertex AI, and other providers.
- **Release / knowledge:** Released 2024-10-22 (October update; original June 2024); knowledge cutoff not published.
- **IDs:** `anthropic/claude-3.5-sonnet`.
- **Context window:** 200K tokens.
- **Modalities:** text + vision input; text output; tool use; agentic workflows.
- **Pricing (2024):** $3.00 in / $15.00 out per 1M (same as prior Sonnet tier).
- **Architecture:** proprietary (parameters undisclosed).

### Raw benchmarks found

Reasoning / knowledge:

- Outperforms Claude 3 Opus across critical benchmarks at release (vendor)
- "Better-than-Opus capabilities, faster-than-Sonnet speeds" (OpenRouter listing)

Coding:

- The model that made coding agents viable; strong SWE/agentic coding reputation for its era (independent reviews)
- No exact benchmark number captured in fetched sources

Long context:

- 200K verified; no independent long-context retrieval benchmark captured

Multimodal:

- Text+vision input with text output

### Normalized scores (1–100)

- **Tool use: 78/100.** Agentic tool-use pioneer of 2024; exact numbers not captured here.
- **Reasoning: 80/100.** Surpassed Claude 3 Opus at release — historically strong.
- **Context window: 78/100.** 200K verified.
- **Multimodal: 74/100.** Text+vision input, text output.
- **Coding: 80/100.** Category-defining coding-agent model for its era; since far surpassed.
- **Cost efficiency: 62/100.** $3/$15 — standard mid-tier pricing at release.
- **Overall Score: 78/100.** Mean of the five non-cost dims (78+80+78+74+80)/5 = 78.0. Best-fit: a historically pivotal mid-tier coder, now legacy — use current Sonnet generations for new work.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-06
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic: Introducing Claude 3.5 Sonnet](https://www.anthropic.com/news/claude-3-5-sonnet)
  - [llm-stats: Claude 3.5 Sonnet](https://llm-stats.com/models/claude-3-5-sonnet-20241022)
  - [OpenRouter: anthropic/claude-3.5-sonnet](https://openrouter.ai/anthropic/claude-3.5-sonnet)
  - [CloudPrice: Claude 3.5 Sonnet](https://cloudprice.net/models/anthropic-claude-3-5-sonnet)
  - [What's The Big Data: Claude 3.5 Sonnet review](https://whatsthebigdata.com/ai-model/claude-3-5-sonnet/)
  - [AI Learning Guides: Claude 3.5 Sonnet analysis](https://ailearningguides.com/anthropic-claude-3-5-sonnet-analysis/)
- Future sources: add a new file next to this one using the same headings.
