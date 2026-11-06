# Claude Sonnet 4 — findings by Mercury 3

- Source: Anthropic (Claude Sonnet 4)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4
- **Short description:** Anthropic's May 2025 mid-tier flagship, a significant upgrade over Claude Sonnet 3.7 with state-of-the-art (at release) coding and improved reasoning precision/controllability. Part of the Claude 4 family; superseded by Sonnet 4.5/4.6/5.
- **Provider / access:** Claude API (`claude-sonnet-4`), claude.ai, Claude Code, plus AWS Bedrock and Google Vertex AI.
- **Release / knowledge:** Released 2026-05-22 (llm-stats; family launch 2025-05-14); knowledge cutoff not published.
- **IDs:** `anthropic/claude-sonnet-4`.
- **Context window:** 200K input (64K output via Anthropic API; 128K via Bedrock/Vertex) per llm-stats; some providers list 1M — treat 200K as the verified operational standard.
- **Modalities:** text + image input; text output; no video/audio input, no multimodal output.
- **Pricing (as of 2025-05):** $3.00 in / $15.00 out per 1M (Anthropic/Bedrock/Vertex); cache terms vary by provider.
- **Architecture:** proprietary (parameters undisclosed).

### Raw benchmarks found

Agent / tool use:

- No verified agentic/terminal benchmark numbers captured for this release (tool use supported, unquantified)

Reasoning / knowledge:

- Vendor highlights improved reasoning precision and controllability vs Sonnet 3.7; no specific independently captured score in fetched sources

Coding:

- SWE-bench Verified: **72.7%** (vendor, llm-stats/OpenRouter cited) — state-of-the-art at release for its class

Long context:

- 200K verified (llm-stats provider listing); no independent long-context retrieval benchmark captured

Multimodal:

- Text+image input with text output

### Normalized scores (1–100)

- **Tool use: 74/100.** No verified agentic benchmark data captured; API tool use exists.
- **Reasoning: 76/100.** Vendor-reported reasoning gains over 3.7; no independently captured reasoning score in fetched sources.
- **Context window: 78/100.** 200K verified — solid for 2025, below the later 1M-generation.
- **Multimodal: 72/100.** Text+image input, text output only.
- **Coding: 85/100.** SWE-bench Verified 72.7% — class-leading at release; since surpassed.
- **Cost efficiency: 62/100.** $3/$15 per 1M — standard mid-tier pricing for its era, no free tier.
- **Overall Score: 77/100.** Mean of the five non-cost dims (74+76+78+72+85)/5 = 77.0. Best-fit: a strong 2025 mid-tier coder with balanced reasoning; superseded — prefer current Sonnet generations for new work.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-06
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic: Claude 4 family announcement](https://www.anthropic.com/news/claude-4)
  - [Anthropic docs: all models (Sonnet 4)](https://docs.anthropic.com/en/docs/about-claude/models/all-models)
  - [llm-stats: Claude Sonnet 4](https://llm-stats.com/models/claude-sonnet-4-20250514)
  - [OpenRouter: anthropic/claude-sonnet-4](https://openrouter.ai/anthropic/claude-sonnet-4)
  - [AI/ML API: Claude-Sonnet-4 pricing/benchmarks](https://aimlapi.com/models/claude-4-sonnet)
  - [CloudPrice: Claude 4 Sonnet](https://cloudprice.net/models/anthropic-claude-4-sonnet)
- Future sources: add a new file next to this one using the same headings.
