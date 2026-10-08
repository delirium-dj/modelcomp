# Claude Opus 5 — findings by Laguna XS 2.1

- Source: Anthropic (`claude-opus-5`)
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5
- **Short description:** Anthropic's Opus-tier flagship released 2026-07-24 — at launch the state of the art on Frontier-Bench and GDPval-AA at half of Fable 5's price; now legacy (superseded by Opus 5.5 on 2026-09-22) but still fully available.
- **Provider / access:** Claude API (`claude-opus-5`), Amazon Bedrock (`anthropic.claude-opus-5`), Google Cloud, Microsoft Foundry, Claude Platform on AWS. Messages API; adaptive thinking, effort parameter (default `high`).
- **Release / knowledge:** 2026-07-24; knowledge cutoff May 2026.
- **IDs:** `claude-opus-5` (Claude API / Google Cloud); `anthropic.claude-opus-5` (Bedrock). No Zen Free ID found.
- **Context window:** 1M tokens (default and maximum); 128K max output (300K via Message Batches beta header).
- **Modalities:** text + image in; text out; reasoning yes (adaptive thinking; can be disabled only at effort `high` or below); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-04):** $5 / $25 per 1M in/out; cache read $0.50, cache write $6.25 (5m) / $10 (1h); Batch 50% off; Fast mode (research preview, Claude API only) $10 / $50.
- **Architecture:** proprietary; no parameter count published.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **52.3%** (Anthropic's Opus 5.5 launch table; public leaderboard 51.8% with Claude Code harness)
- Terminal-Bench-Science 0.1: **29.0%** (Anthropic table; public leaderboard 30.0%)
- OSWorld 2.0: **74.0% partial** (Anthropic Opus 5.5 table); **70.2%** (OpenAI Astra table)
- AutomationBench (Zapier): **26.9%** (Zapier public leaderboard via Anthropic table)
- Frontier-Bench v0.1: **state of the art at launch** (Anthropic, 2026-07-24; more than doubles Opus 4.8, no absolute number published)
- ARC-AGI-3: **30.2%** (OpenAI Astra table); ARC-AGI-2 **90.4%**, ARC-AGI-1 97.5
- GDPval-AA: new state of the art at launch (Anthropic); AA Intelligence Index v4.1.1 **63.1**, AA Coding Agent Index v1.4 **68.1** (leader on OpenAI's Astra table)
- Tau3 / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- HLE (with tools): **63.6%** (Anthropic Opus 5.5 table; OpenAI table agrees)
- GPQA Diamond: **93.7%** (OpenAI Astra launch table)
- FrontierMath Tier 4 v2: **73.2%** (OpenAI Astra table)
- Cyber: ExploitBench **70%**, SRE-Bench **12.5%** (OpenAI Astra table)
- CritPt / LCR / MLCR: no verified public score found

Coding:

- DeepSWE v1.1: **73.7%** (OpenAI Astra table)
- FrontierCode v1.1 Main: **48.0%** (Anthropic Opus 5.5 table); **53.4%** (OpenAI Astra table)
- CursorBench 3.2: within **0.5%** of Fable 5's peak at max effort, half the cost per task (Anthropic launch, no absolute number published)
- CursorBench 4.0: **46.6%** max (Anthropic Opus 5.5 table)
- SWE-bench Verified / LiveCodeBench / SciCode: no verified public score found in sources checked

Long context:

- 1M window standard (Anthropic docs); MRCR / RULER / GraphWalks: no verified public score found

### Normalized scores (1–100)

- **Tool use: 90/100.** OSWorld 74.0% and the AA Coding Agent Index lead (68.1) plus launch SOTA on Frontier-Bench/GDPval-AA are frontier-grade; capped by TB 4.0 52.3% and AutomationBench 26.9% now trailing GPT-6 Astra (57.9 / 41.4).
- **Reasoning: 92/100.** HLE-with-tools 63.6%, GPQA 93.7% and ARC-AGI-2 90.4% all sit at the frontier band; capped by FrontierMath T4 73.2% well behind Astra (97.6) and no CritPt row.
- **Context window: 95/100.** 1M window (95–100 tier) with consistent instruction following per Anthropic docs, but no public MRCR/RULER retrieval number found to justify above the floor.
- **Multimodal: 65/100.** Text + image in, text out only — image-in band (60–70); no video/PDF-in evidence found, no non-text output.
- **Coding: 92/100.** DeepSWE 73.7% (near the 74% frontier ref), CursorBench 3.2 within 0.5% of Fable 5's peak, Frontier-Bench SOTA at launch; capped by TB 4.0 52.3% and the absence of a public SWE-bench Verified row.
- **Cost efficiency: 55/100.** $5/$25 sits between the methodology's $3/$15 (~60) and $10/$50 (~30) bands; $0.50 cache reads and 50% Batch help but it remains a premium paid model, now undercut by Opus 5.5 ($4/$20).
- **Overall Score: 86.8/100.** Mean of (90, 92, 95, 65, 92) = 86.8 — still an excellent agentic coding model, but new deployments should default to Opus 5.5 (better scores, 20% cheaper).

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-04
- Method: public internet research (Anthropic launch post + platform docs + pricing page, OpenAI GPT-6 Astra launch table, Anthropic Opus 5.5 launch table); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
