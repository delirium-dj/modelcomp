# Grok 4.7 — findings by Muse Glimmer 30B

- Source: xAI / SpaceXAI (`grok-4.7`)
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Grok 4.7
- **Short description:** SpaceXAI flagship released 21 September 2026, iterative upgrade over Grok 4.6 on a larger base with Cursor training data. Marketed for long-running agentic, coding and knowledge work; same $2/$6 pricing as 4.6 with higher token use on equal tasks.
- **Provider / access:** Grok API `xai/grok-4.7`; also available via Cursor and Grok Build. Chat Completions style, reasoning low–xhigh tiers.
- **Release / knowledge:** 2026-09-21; knowledge cutoff not publicly disclosed.
- **IDs:** `xai/grok-4.7`. No OpenCode Zen Free ID found.
- **Context window:** 500,000 tokens total per vendor/Artificial Analysis notes; unchanged vs 4.6. Verified via AA model page and xAI release notes.
- **Modalities:** Input text, image; Output text. Reasoning yes, tool calls yes, JSON mode supported.
- **Pricing (as of 2026-10-25):** $2.00 / 1M input, $6.00 / 1M output, cached $0.50 / 1M. Fast variant $4/$12. Same list price as 4.6; effective cost per task higher due to increased token consumption.
- **Architecture:** proprietary; new larger base vs 4.6, parameters undisclosed.

### Raw benchmarks found

> Sources: Wikipedia Grok article § Grok 4.7, Artificial Analysis capability index and Intelligence Index pages, xAI news coverage.

Agent / tool use:

- Terminal-Bench 4.0: no verified public numeric score found; AA article cites ~26% at xhigh for Grok 4.7 in aggregate coding/agent coverage.
- GDPval-AA v2: **1695 Elo** xhigh, +90 vs Grok 4.6 high — Artificial Analysis article
- AA-Briefcase v1.1: **1657 Elo** xhigh, +111 vs 4.6 high — Artificial Analysis article
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index v4.3: **46** xhigh — Artificial Analysis model page / capability index
- GPQA Diamond / HLE / LCR / CritPt: no verified public % found independently of Index membership
- Artificial Analysis Intelligence Index overall: 46 xhigh vs 61 for 4.6 on older Index v4.3 cluster; not directly comparable
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- DeepSWE v1.1: **71.0%** vendor reported vs Grok 4.6 65.2% — VentureBeat citing xAI comparison; high-effort asterisk noted
- CursorBench 4.0: vendor “around 46%” top score at ~$6/task — OfficeChai reading of xAI chart
- Coding Agent Index: **56** — Artificial Analysis article, +9 vs 4.6
- SWE-bench Verified / LiveCodeBench / SciCode / Vibe Code Bench: no verified public score found

Long context:

- 500K native window; AA-LCR v1.1 included in Intelligence Index. MRCR / RULER / GraphWalks: no verified public score found.

### Normalized scores (1–100)

- **Tool use: 82/100.** GDPval-AA 1695 Elo and Briefcase 1657 Elo show strong agent-knowledge uplift vs 4.6. Capped by lack of independent Terminal-Bench 4.0 % and Tau3/Claw scores.
- **Reasoning: 83/100.** Intelligence Index 46 xhigh places it in mid-2026 v4.3 cohort. Gains in DeepSWE and agent Elo offset absence of public GPQA/HLE numbers.
- **Context window: 88/100.** 500K verified native window, competitive for 2026 flagship. No 1M+ retrieval benchmark published.
- **Multimodal: 65/100.** Text + image in, text out. No public multimodal benchmark numbers.
- **Coding: 87/100.** DeepSWE 71% vendor and Coding Agent Index 56 indicate solid coding-agent uplift vs 4.6. Capped by CursorBench ~46% and missing SWE-bench Verified.
- **Cost efficiency: 73/100.** Sticker $2/$6 unchanged vs 4.6 but token consumption rose on same tasks and AA cost/task ~$3.74 xhigh. Fast/Cursor surcharges reduce efficiency.
- **Overall Score: 81/100.** Mean of five quality dims (82+83+88+65+87)/5 = 81.0. Best-fit: coding/knowledge upgrade with higher verbosity and same sticker price; not a Terminal-Bench leader.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-25
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
