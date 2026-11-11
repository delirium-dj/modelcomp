# Claude Mythos 5 — findings by GPT-5.6 Terra

- Source: Anthropic (`claude-mythos-5`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5
- **Short description:** Anthropic's restricted-access Mythos-class model for cybersecurity and biology research. It shares Fable 5's underlying weights but removes selected safeguards for verified trusted-access users.
- **Provider / access:** Claude API, Amazon Bedrock, Google-managed Claude Models, and Microsoft Foundry; active with verification required.
- **Release / knowledge:** Released 2026-06-09; reliable/training cutoff January 2026.
- **IDs:** `anthropic/claude-mythos-5`, `anthropic.claude-mythos-5` on Bedrock.
- **Context window:** 1M tokens; maximum output 128K tokens.
- **Modalities:** Text and image input; text output; adaptive thinking always enabled; tool-enabled agent workflows are measured in public evaluations.
- **Pricing (as of 2026-11-11):** $10/M input, $50/M output, $12.50/M five-minute cache write, $20/M one-hour cache write, and $1/M cache read; Batch API halves input/output prices.
- **Architecture:** Proprietary; the same underlying model weights as Claude Fable 5, with access controls/safeguards distinguishing the products.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.0%** (Anthropic, mini-SWE-agent, high effort, five attempts across 89 tasks). Secondary benchmark catalogues agree that this is provider-reported rather than independent.
- OSWorld-Verified: **85.0%** (Anthropic system-card result).
- BrowseComp: **88.0%** single-agent and **93.3%** multi-agent (Anthropic system-card result).

Reasoning / knowledge:

- HLE: **59.0%** without tools and **64.5%** with tools (Anthropic system-card results).
- GPQA Diamond: **94.1%** (system-card result indexed by an independent benchmark catalogue).
- USAMO 2026: **99.8%** (system-card result indexed by an independent benchmark catalogue).

Coding:

- SWE-bench Verified: **95.5%** (Anthropic; independently listed as measured by a leaderboard catalogue).
- SWE-bench Pro: **80.3%** (Anthropic).
- FrontierCode (Diamond, xhigh): **29.3%** (reported by DataCamp from the system card).
- Terminal-Bench 2.1: **88.0%** (same harness details as above).

Long context:

- GraphWalks Parents at 256K: **100.0%** (system-card result indexed by an independent benchmark catalogue); API context capacity is 1M tokens.

Multimodal:

- CharXiv reasoning with tools: **93.5%** and FigQA: **88.9%** (system-card results indexed by an independent benchmark catalogue). The API is limited to text/image input and text output.

### Normalized scores (1–100)

- **Tool use: 95/100.** Terminal-Bench 2.1 at 88.0%, OSWorld-Verified at 85.0%, and BrowseComp at 88.0% single-agent demonstrate exceptional agent use; the principal cap is that these results are provider-reported rather than independently rerun.
- **Reasoning: 93/100.** HLE at 59.0%/64.5% with tools, GPQA Diamond at 94.1%, and USAMO at 99.8% show frontier reasoning; HLE remains materially below the near-ceiling specialist figures.
- **Context window: 99/100.** The documented 1M-token context and 100.0% GraphWalks Parents result at 256K support near-top long-context capability; public verification does not establish a 1M retrieval replication.
- **Multimodal: 84/100.** Strong chart/figure scores support image understanding, but the documented interface accepts only text and images and emits only text, excluding native audio/video input or generated media.
- **Coding: 98/100.** SWE-bench Verified at 95.5%, SWE-bench Pro at 80.3%, and Terminal-Bench at 88.0% are outstanding; provider-run harnesses and the lower 29.3% FrontierCode result prevent a perfect score.
- **Cost efficiency: 37/100.** $10/M input and $50/M output make it expensive despite cache and batch discounts, and restricted access further reduces practical value.
- **Overall Score: 94/100.** Half-up mean of the five quality dimensions: (95 + 93 + 99 + 84 + 98) / 5 = 93.8. Best fit for verified, high-stakes cyber, biology, and long-horizon engineering work.

---

## Signature

- Provided by: **GPT-5.6 Terra (OpenAI/gpt-5.6-terra)** — 2026-11-11 UTC
- Method: Public web research across Anthropic documentation, benchmark catalogues, and independent technical coverage; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic Claude Mythos 5 API documentation](https://platform.claude.com/docs/en/models/mythos-5/overview)
  - [Anthropic Fable 5 and Mythos 5 announcement](https://www.anthropic.com/news/claude-fable-5-mythos-5)
  - [Independent benchmark summary from DataCamp](https://www.datacamp.com/blog/claude-mythos-5)
  - [System-card benchmark index](https://malob.github.io/ai-system-cards/anthropic/claude-fable-5/)
  - [SWE-bench Verified catalogue](https://benchgap.net/b/swe-bench-verified/current)
