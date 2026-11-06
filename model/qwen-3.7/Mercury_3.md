# Qwen3.7 — findings by Mercury 3

- Source: Alibaba / Qwen (Qwen3.7 family — flagship: Qwen3.7-Max)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`
- Note: the Qwen3.7 series comprises **Qwen3.7-Max** (text-only flagship, closed-weight, API-only) and **Qwen3.7-Plus** (multimodal sibling, researched separately). This report covers the 3.7 generation flagship (Max). The open Qwen line skipped 3.7 and resumed with Qwen3.8 open weights.

## Model card

- **Name:** Qwen3.7-Max (Qwen3.7 flagship)
- **Short description:** Alibaba's flagship Qwen model, announced 2026-05-20 at the Alibaba Cloud Summit (API live 2026-05-19) — a reasoning-native agent model with a 1M-token context, built for long-horizon agentic coding and tool use. First Qwen flagship shipped **closed-weight and API-only** (a break from Alibaba's open tradition; open line resumed with Qwen3.8).
- **Provider / access:** Alibaba Cloud Model Studio API (`qwen3.7-max`, OpenAI-/Anthropic-compatible), Together AI, OpenRouter (launch promo $1.25/$3.75); no open weights; China-hosted (regional routing via Singapore).
- **Release / knowledge:** API live 2026-05-19, announced 2026-05-20; knowledge cutoff not published.
- **IDs:** `qwen/qwen3.7-max`.
- **Context window:** 1,000,000 tokens.
- **Modalities:** text in / text out (text-only; vision sits in Qwen3.7-Plus); reasoning-native (thinking on by default); function calling; MCP integration; external agent harnesses (35-hour autonomous runs demonstrated).
- **Pricing (as of 2026-05+):** $2.50 in / $7.50 out per 1M (cached $0.25); OpenRouter launch promo $1.25/$3.75.
- **Architecture:** proprietary; params undisclosed (dense vs MoE unconfirmed).

### Raw benchmarks found

Reasoning / knowledge:

- GPQA Diamond: **92.4%** (vendor)
- AA Intelligence Index (independent): **56.6** at launch (v4.0, #5) → 46 (mid-2026 revision) → **30** on re-based v4.3 (68th/200; $1.15/task)
- LMArena Text Elo: ~1,475 (~#13 preview)

Coding:

- SWE-bench Verified: **80.4%** (vendor; near DeepSeek V4-Pro 80.6 and Claude Opus 80.8)
- LiveCodeBench: **91.6%** (vendor); Terminal-Bench 2.0: **69.7%** (vendor agentic terminal)

Agent / tool use:

- Function calling, MCP and external harnesses; 35-hour autonomous runs (vendor demo)

Long context:

- 1M verified; no independent long-context retrieval benchmark captured

### Normalized scores (1–100)

- **Tool use: 86/100.** Terminal-Bench 2.0 69.7% and strong agentic/tool focus; vendor-reported.
- **Reasoning: 86/100.** GPQA 92.4% and launch AA #5; re-based v4.3 (30) and verbosity temper the picture.
- **Context window: 92/100.** 1M verified.
- **Multimodal: 15/100.** Text-only (vision is in the Plus sibling).
- **Coding: 89/100.** SWE-bench Verified 80.4% and LCB 91.6% — frontier-adjacent at launch.
- **Cost efficiency: 62/100.** $2.50/$7.50 with high verbosity (~4x median output tokens in AA evaluation) — headline price is modest but real task cost rises; closed API.
- **Overall Score: 74/100.** Mean of the five non-cost dims (86+86+92+15+89)/5 = 73.6 → 74. Best-fit: the strongest closed Chinese text flagship of mid-2026 for agentic coding; text-only and closed-weight limit scope.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-06
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Qwen blog: Qwen3.7 announcement](https://qwen.ai/blog?id=qwen3.7)
  - [The AI Rankings: Qwen3.7-Max review](https://theairankings.com/alibaba/qwen-3-7-max/)
  - [Artificial Analysis: Qwen3.7-Max](https://artificialanalysis.ai/models/qwen3-7-max)
  - [OpenRouter: qwen/qwen3.7-max](https://openrouter.ai/qwen/qwen3.7-max)
  - [MarkTechPost: Qwen3.7-Max launch](https://www.marktechpost.com/2026/05/21/qwen-introduces-qwen3-7-max-a-reasoning-agent-model-with-a-1m-token-context-window/)
  - [VentureBeat: 35-hour autonomous runs](https://venturebeat.com/technology/alibabas-proprietary-qwen3-7-max-can-run-for-35-hours-autonomously-and-supports-external-harnesses-like-anthropics-claude-code)
  - [DataCamp: Qwen3.7-Max guide](https://www.datacamp.com/blog/qwen3-7-max)
- Future sources: add a new file next to this one using the same headings.
