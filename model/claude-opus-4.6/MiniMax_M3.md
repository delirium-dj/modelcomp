# Claude Opus 4.6 — findings by MiniMax M3

- Source: Anthropic (`anthropic/claude-opus-4.6`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.6
- **Short description:** Anthropic's flagship reasoning model from February through April 2026 (released Feb 5, 2026). First Opus-class model with a 1M-token context window in beta. Adds "Agent Teams" (parallel multi-agent coordination), "adaptive thinking" (auto token budget), and Microsoft 365 native integration.
- **Provider / access:** Anthropic API (`claude-opus-4-6`); Claude.ai; AWS Bedrock; Google Vertex AI; Microsoft 365 (PowerPoint, Excel). Chat Completions + Messages API.
- **Release / knowledge:** Released 2026-02-05.
- **IDs:** `anthropic/claude-opus-4.6`; `opencode/claude-opus-4.6` (Zen). No free ID.
- **Context window:** 1M tokens (beta) / 200K standard. 128K max output (double Sonnet 4.5).
- **Modalities:** Text, image in; text out. Tool calls: yes. Adaptive thinking (auto token allocation per prompt complexity).
- **Pricing (as of 2026-10-13):** Standard tier (<200K): $5 input / $25 output per 1M (parity with Opus 4.5). Long-context tier (>200K): $10 input / $37.50 output per 1M.
- **Architecture:** Proprietary Anthropic. Adaptive thinking controller. Agent Teams parallel-orchestration feature.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **65.4%** (Anthropic / llm-stats.com) — surpassed Gemini 3 Pro and GPT-5.2; beaten by GPT-5.5 (82.7%) and Opus 4.7 (69.4%).
- SWE-bench Verified: **80.8%** (Anthropic; llm-stats.com) — tied with Opus 4.5 (80.9%, "essentially a tie at the top" per baeseokjae).
- GDPval-AA (Elo): **1606** (Anthropic) — 144 points above GPT-5.2 (per llm-stats.com).
- BigLaw Bench: **90.2%** (Anthropic; llm-stats.com).
- MCP Atlas / Tau3 / Toolathlon / Claw-Eval / SWE Atlas Codebase QnA: **no verified public score found** for this exact model/ID at standard harness.
- Agent Teams internal benchmark: **38 of 40 cybersecurity investigations superior vs Opus 4.5 single-stream** (Anthropic internal). Rakuten deployed: 13 IT issues closed + 12 routed to humans in one day across 6 repositories.

Reasoning / knowledge:

- ARC-AGI-2: **68.8%** (Anthropic; llm-stats.com) — vs Opus 4.5 37.6% (+83% improvement), Gemini 3 Pro 45.1%, GPT-5.2 Pro 54.2%. State-of-the-art at launch.
- GPQA Diamond / Humanity's Last Exam / HLE: **no verified public score found** for this exact model/ID at independent harness (Anthropic's launch emphasized ARC-AGI-2 and SWE-bench).
- AA Intelligence Index / AA-LCR / CritPt: **no verified public score found**.

Coding:

- SWE-bench Verified 80.8%, Terminal-Bench 2.0 65.4%, BigLaw Bench 90.2%.
- LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: **no verified public score found** for this exact model/ID.

Long context:

- MRCR v2 (8-needle, 1M token): **76%** (Anthropic; llm-stats.com) — vs Sonnet 4.5's 18.5% on the same benchmark.
- 1M context window in beta (200K standard tier).

Multimodal / safety:

- Discovered **500+ previously-unknown zero-day vulnerabilities** in open-source code (GhostScript, OpenSC) with debuggers only — no specific guidance (Anthropic / SentinelOne).
- Lowest misalignment rate across Claude generations (Anthropic 2026 Constitution framework).
- BigLawBench 90.2% (legal reasoning).

### Normalized scores (1–100)

- **Tool use: 88/100.** Terminal-Bench 2.0 65.4% (trailed by GPT-5.5 82.7%, Opus 4.7 69.4%). SWE-bench Verified 80.8% (top tier). GDPval-AA 1606 Elo (+144 over GPT-5.2). BigLawBench 90.2%. Agent Teams: 38/40 cyber investigations superior. Capped at 88 because MCP Atlas / Toolathlon for this exact model/ID are not published, and Terminal-Bench 2.0 lags GPT-5.5 by 17 points.
- **Reasoning: 90/100.** ARC-AGI-2 68.8% (LEAD at launch vs Opus 4.5 37.6% — an 83% jump). BigLawBench 90.2%. Capped at 90 because GPQA / HLE / AA Intelligence Index specific numbers for this exact model/ID are not published.
- **Context window: 92/100.** 1M token context (beta) with MRCR v2 1M = 76% (LEAD cohort at the time). Capped at 92 because standard tier is 200K and the 1M is beta (production caveats apply).
- **Multimodal: 75/100.** Text + image in. Capped at 75 because no specific MMMU-Pro / CharXiv figure for Opus 4.6 is published, and 500+ zero-days are proof of capability but not a multimodal benchmark.
- **Coding: 86/100.** SWE-bench Verified 80.8% (LEADS Anthropic cohort at launch). Terminal-Bench 2.0 65.4%. Capped at 86 because LiveCodeBench / SciCode / DeepSWE specific numbers are not published for this exact model/ID.
- **Cost efficiency: 60/100.** $5/$25 standard tier (parity with Opus 4.5); $10/$37.50 long-context tier (>200K). Capped at 60 because output is $25/MTok (premium tier) and long-context tier doubles again.
- **Overall Score: 86/100.** Half-up mean of Tool 88, Reasoning 90, Context 92, Multimodal 75, Coding 86 = 431/5 = 86.2 → half-up 86. Claude Opus 4.6 was Anthropic's February 2026 flagship: ARC-AGI-2 lead at launch (68.8%, +83% over Opus 4.5), 1M context with MRCR v2 76% (LEAD), Agent Teams parallel orchestration, Microsoft 365 integration. Trails GPT-5.5 on Terminal-Bench 2.0 by 17 points (which became the operative gap by the time Opus 4.7 arrived in April).

---

## Signature

- Provided by: **MiniMax M3 (MiniMax-M3)** — 2026-10-13
- Method: public internet research (Anthropic Claude Opus 4.6 announcement, llm-stats.com launch analysis, baeseokjae Claude Opus 4.6 review, theairankings.com model profile, portkey.com AI lab benchmarks comparison, OpenRouter specs page). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Claude_Opus_4.6_Anthropic.md`, using the same headings.