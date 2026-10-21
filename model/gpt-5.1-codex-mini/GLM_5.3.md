# GPT-5.1 Codex Mini — findings by GLM 5.3

- Source: OpenAI (`openai/gpt-5.1-codex-mini`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1 Codex Mini
- **Short description:** OpenAI's fast, small coding model of the GPT-5.1 Codex line (November 2025), designed for steerability, front-end development, interactivity, quick code completion, simple refactoring, and routine programming tasks. DEPRECATED: the publisher shut it down on 2026-07-23 (recommended replacement: `gpt-5.6-terra`).
- **Provider / access:** OpenAI API `openai/gpt-5.1-codex-mini` (shut down 2026-07-23 per Vertical Tabs' publisher notice); was still served on OpenCode Zen as of 2026-10-17 (deprecation table: deprecated 2026-07-23); Microsoft Foundry catalog listing existed; 16 hosted providers listed on models.dev.
- **Release / knowledge:** released 2025-11-13 (models.dev, OminiGate; llm-stats lists 2025-11-12); knowledge cutoff not stated.
- **IDs:** `openai/gpt-5.1-codex-mini` (models.dev canonical), `gpt-5.1-codex-mini` (Microsoft Foundry catalog).
- **Context window:** 400,000 in / 128,000 max output (llm-stats, models.dev; OminiGate lists 100K max output — lane discrepancy noted); verified across three catalogs.
- **Modalities:** text + image in, text out (llm-stats, Vertical Tabs); reasoning yes; tool calling yes; structured output yes (Vertical Tabs); genuinely the fastest-tier Codex variant on latency while live (TTFT p95 1.00s, ~200 char/s, llm-stats live traffic).
- **Pricing (as of 2026-10-21, deprecation-era lanes):** $0.25 in / $2.00 out per 1M with $0.025 cached read (OpenCode Zen pricing table, OminiGate concordant); cheapest lane $0.22 / $1.80 (models.dev).
- **Architecture:** proprietary; no parameter count or structure disclosed by OpenAI (a fast distillation within the GPT-5.1 Codex family).

### Raw benchmarks found

> Independent measurements, primarily Artificial Analysis data mirrored by OminiGate (updated 2025-11-13) plus the Terminal-Bench v2 official leaderboard (tbench.ai) and Vertical Tabs' Epoch AI compilation. No official OpenAI eval table exists for the Mini. Missing rows say "no verified public score found".

Agent / tool use:

- Terminal-Bench Hard: **33.3%** (Artificial Analysis via OminiGate)
- Terminal-Bench v2 (official leaderboard, agent-dependent): **43.1%** (Codex CLI agent), **43.1%** (Crux agent), **61.6%** (hookele agent) — tbench.ai; harness variance is large
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench / Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- MMLU-Pro: **82.0%** (AA via OminiGate)
- GPQA Diamond: **81.3%** (AA via OminiGate)
- HLE: **16.9%** (AA via OminiGate)
- AIME 2025: **91.7%** (AA via OminiGate)
- Artificial Analysis Intelligence Index: **rank #69 of 148** (OminiGate leaderboard panel; index value not displayed); Math Index **#9 of 66**
- LCR / MLCR / CritPt: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- LiveCodeBench: **83.6%** (AA via OminiGate)
- SciCode: **42.6%** (AA via OminiGate)
- Terminal-Bench v2: **43.1%** (Codex CLI; listed under Tool use)
- SWE-bench Verified / SWE-Pro: no verified public score found
- DeepSWE: **not evaluated** in DeepSWE 1.1 as of 2026-09-22 (Vertical Tabs, official dataset — no Mini entry)
- Vibe Code Bench / Coding Index: no verified public score found

Long context:

- 400,000-token window (spec-verified); no MRCR / RULER / GraphWalks retrieval score reported.

### Normalized scores (1–100)

- **Tool use: 52/100.** Terminal-Bench Hard 33.3% and the Codex-CLI Terminal-Bench v2 run at 43.1% sit at the bottom of the mid band, with a 61.6% outlier under the hookele agent showing harness sensitivity; capped by zero Tau/GDPval coverage.
- **Reasoning: 68/100.** GPQA 81.3%, MMLU-Pro 82.0%, and AIME 91.7% are strong for a mini, but HLE at only 16.9% and an AA Intelligence Index rank of #69/148 (just above median) cap it below the full-size Codex tier.
- **Context window: 80/100.** 400,000 tokens verified across three catalogs — upper end of the 200K–500K tier (200K = 70), with no long-context retrieval score to push it higher.
- **Multimodal: 65/100.** Text + image in, text out — image-in band; capped by no audio/video and text-only output.
- **Coding: 68/100.** LiveCodeBench 83.6% is excellent, SciCode 42.6% is mid, Terminal-Bench v2 43.1% middling, and SWE-bench Verified / DeepSWE have no Mini-attributed rows at all; capped by the missing repo-repair evidence for this exact ID.
- **Cost efficiency: 92/100.** $0.25/$2.00 with $0.025 cached reads matched the ~$0.60/$2.20 value class, and it was the fastest-latency Codex variant — deprecated status is the only caveat.
- **Overall Score: 67/100.** Half-up mean of the five quality dims (52 + 68 + 80 + 65 + 68 = 333, 333/5 = 66.6 → 67); best fit: a deprecated fast/cheap coding mini — pick `gpt-5.6-terra` (the publisher's own recommended replacement) or a current-tier model for anything live.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-21
- Method: public internet research (Artificial Analysis measurements via OminiGate, Terminal-Bench v2 official leaderboard via Vertical Tabs, models.dev catalog, Microsoft Foundry listing, deprecation notices); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
