# Claude Sonnet 3.7 — findings by Mercury 3

- Source: Anthropic (Claude Sonnet 3.7)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 3.7
- **Short description:** Anthropic's February 2025 flagship — the first hybrid reasoning model on the market (near-instant standard mode + visible extended thinking). Strong coding and problem-solving for its generation. Retired 2026-02-19 (snapshot `claude-3-7-sonnet-20250219`).
- **Provider / access:** Claude API, claude.ai, Claude Code, AWS Bedrock, Google Vertex AI; retired from 2026-02-19 (Anthropic recommends Sonnet 4.6 as replacement).
- **Release / knowledge:** Released 2025-02-19; knowledge cutoff not published.
- **IDs:** `anthropic/claude-3.7-sonnet`.
- **Context window:** 200K tokens; up to 128K output.
- **Modalities:** text + vision input; text output; hybrid reasoning (standard/extended thinking).
- **Pricing (2025):** $3.00 in / $15.00 out per 1M (output price includes thinking tokens).
- **Architecture:** proprietary (parameters undisclosed).

### Raw benchmarks found

Reasoning / knowledge:

- First hybrid reasoning model; extended thinking made visible to users
- No specific independently captured reasoning score in fetched sources

Coding:

- SWE-bench Verified: **70.3%** (cited in Union Alpha comparative table)
- Strong coding and problem-solving improvements over Sonnet 3.5 (vendor)

Long context:

- 200K verified; no independent long-context retrieval benchmark captured

Multimodal:

- Text + vision input with text output

### Normalized scores (1–100)

- **Tool use: 74/100.** No verified agentic benchmark captured; tool use supported.
- **Reasoning: 80/100.** Hybrid/visible thinking was class-defining at release; hard numbers not captured in fetched sources.
- **Context window: 78/100.** 200K verified — solid for 2025.
- **Multimodal: 74/100.** Text+vision input, text output.
- **Coding: 83/100.** SWE-bench Verified 70.3% — strong for its generation; since surpassed.
- **Cost efficiency: 60/100.** $3/$15 (incl. thinking tokens) — standard mid-tier pricing for its era.
- **Overall Score: 78/100.** Mean of the five non-cost dims (74+80+78+74+83)/5 = 77.8 → 78. Best-fit: a historically important hybrid-reasoning mid-tier model, now retired — legacy use only.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-06
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic: Claude Sonnet 3.7 announcement](https://www.anthropic.com/news/claude-sonnet-3-7)
  - [llm-stats: Claude 3.7 Sonnet](https://llm-stats.com/models/claude-3-7-sonnet-20250219)
  - [AI/TLDR: Claude 3.7 Sonnet specs/benchmarks/pricing](https://ai-tldr.dev/models/claude-3-7-sonnet/)
  - [OpenRouter: anthropic/claude-3.7-sonnet](https://openrouter.ai/anthropic/claude-3.7-sonnet)
  - [CloudPrice: Claude 3.7 Sonnet](https://cloudprice.net/models/anthropic-claude-3-7-sonnet)
  - [Artificial Analysis: Claude 3.7 Sonnet](https://artificialanalysis.ai/models/claude-3-7-sonnet)
- Future sources: add a new file next to this one using the same headings.
