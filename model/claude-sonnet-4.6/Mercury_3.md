# Claude Sonnet 4.6 — findings by Mercury 3

- Source: Anthropic (Claude Sonnet 4.6)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.6
- **Short description:** Anthropic's most capable Sonnet model at release (2026-02-17): near-Opus computer use and coding at Sonnet prices. Legacy as of mid-2026 (superseded by Sonnet 5 on 2026-06-30), but still available and not retiring before 2027-02-17.
- **Provider / access:** Claude API (`claude-sonnet-4-6`), claude.ai (former default for Free/Pro), Claude Code, Claude Cowork, and Amazon Bedrock, Google Cloud Vertex AI, Microsoft Foundry.
- **Release / knowledge:** Released 2026-02-17; knowledge cutoff not published.
- **IDs:** `anthropic/claude-sonnet-4-6`.
- **Context window:** 1M tokens (beta at launch; GA 2026-03-13 at standard pricing); context compaction beta.
- **Modalities:** text + image input; text output; adaptive + extended thinking; computer use; tool use (web search, fetch, code execution, memory, programmatic tool calling, tool search); MCP connectors in Claude in Excel; no video/audio input, no multimodal output.
- **Pricing (as of 2026-03+):** $3 in / $15 out per 1M (40% below Opus 4.6's $5/$25); batch 50% off ($1.50/$7.50); prompt-cache writes $3.75/$6, reads $0.30; launch-era long-context (>200K) rates $6/$22.50 until GA.
- **Architecture:** proprietary (parameters undisclosed).

### Raw benchmarks found

Agent / tool use:

- OSWorld-Verified: **72.5%** (Anthropic) — 0.2pp behind Opus 4.6 (72.7%); GPT-5.2 38.2% (Anthropic's run)
- Vending-Bench Arena final balance: **$5,639** (Andon Labs, won the round) — vs Opus 4.6 $4,053, Sonnet 4.5 $2,125
- MCP-Atlas scaled tool use: **61.3%** (Anthropic) — ahead of Opus 4.6 (59.5%)
- τ²-bench: Retail **91.7%** / Telecom **97.9%** (Anthropic)
- BrowseComp: **74.0%** (Anthropic, revised March 2026; Opus 4.6 83.7%)

Reasoning / knowledge:

- GPQA Diamond: **89.9%** (vs Opus 4.6 91.3%, GPT-5.2 Pro 93.2%)
- ARC-AGI-2: **58.3%** at max effort (60.4% high per ARC Prize Foundation) — 4.3x jump from Sonnet 4.5's 13.6%
- HLE: **33.2%** no tools / **49.0%** with tools (Opus 4.6: 40.0%/53.0%)
- GDPval-AA: **1633 Elo** — top score in Anthropic's launch table (Opus 4.6 1606, GPT-5.2 1462); run by Artificial Analysis
- Finance Agent v1.1: **63.3%** — top score (Opus 4.6 60.1%); run by Vals AI
- Independent signal: Artificial Analysis finds Sonnet 4.6 beats Opus 4.6 on agentic knowledge work and terminal tasks (per AI Rankings)

Coding:

- SWE-bench Verified: **79.6%** (10-trial avg; 80.2% with prompt modification) — vs Opus 4.6 80.8%, GPT-5.2 80.0%
- Terminal-Bench 2.0: **59.1%** (thinking off; Opus 4.6 65.4%, GPT-5.2 64.7% in Codex CLI)
- MMMU-Pro: **74.5%** no tools / **75.6%** with tools

Long context:

- 1M-token window GA since 2026-03-13 with context compaction; no independent long-context retrieval benchmark captured

### Normalized scores (1–100)

- **Tool use: 90/100.** OSWorld-Verified 72.5% (near-Opus), MCP-Atlas 61.3% (ahead of Opus 4.6), τ²-bench 91.7/97.9, and a Vending-Bench Arena win — exceptional for a mid-tier model; all launch-era figures vendor-run.
- **Reasoning: 87/100.** GPQA Diamond 89.9%, HLE 33.2%/49.0%, ARC-AGI-2 58.3% — clearly above Sonnet 4.5 but still behind Opus 4.6/GPT-5.2 Pro on hardest reasoning.
- **Context window: 95/100.** 1M GA at standard pricing with beta compaction — top-tier for its class.
- **Multimodal: 78/100.** Strong vision (MMMU-Pro 74.5%) with text+image input; text-only output and no audio/video input.
- **Coding: 88/100.** SWE-bench Verified 79.6% (1.2pp behind Opus 4.6) and Terminal-Bench 2.0 59.1%; near-Opus coding at 60% of the price.
- **Cost efficiency: 68/100.** $3/$15 with batch 50% off and cache discounts — 40% cheaper than Opus 4.6; still a paid mid-premium tier, no free API.
- **Overall Score: 88/100.** Mean of the five non-cost dims (90+87+95+78+88)/5 = 87.6 → 88. Best-fit: the value pick of the early-2026 Claude lineup — near-Opus computer use/coding at two-thirds the price; legacy now, still effective.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-06
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic: Introducing Claude Sonnet 4.6 (official, full eval table)](https://www.anthropic.com/news/claude-sonnet-4-6)
  - [Anthropic: Claude Sonnet 4.6 system card](https://www.anthropic.com/claude-sonnet-4-6-system-card)
  - [Digital Applied: Claude Sonnet 4.6 benchmarks/pricing/complete guide](https://www.digitalapplied.com/blog/claude-sonnet-4-6-benchmarks-pricing-guide)
  - [The AI Rankings: Claude Sonnet 4.6 review](https://theairankings.com/anthropic/claude-sonnet-4-6/)
  - [Anthropic docs: Sonnet 4.6 model overview (legacy status)](https://platform.claude.com/docs/en/models/sonnet-4-6/overview)
  - [llm-stats: Claude Sonnet 4.6](https://llm-stats.com/models/claude-sonnet-4-6)
- Future sources: add a new file next to this one using the same headings.
