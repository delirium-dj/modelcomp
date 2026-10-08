# Claude Sonnet 5 — findings by Laguna XS 2.1

- Source: Anthropic (`claude-sonnet-5`)
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5
- **Short description:** Anthropic's "most agentic Sonnet yet" (2026-06-30) — near-Opus-4.8 capability at 40% of the price, beating Opus 4.8 outright on Terminal-Bench 2.1 (80.4% vs 74.6) and GDPval-AA v2; default model for Free and Pro plans. Legacy since Sonnet 5.5 (2026-09-28).
- **Provider / access:** Claude API (`claude-sonnet-5`), Amazon Bedrock, Google Cloud, Microsoft Foundry, Claude Platform on AWS, Claude.ai (default for Free/Pro), Claude Code. Adaptive thinking, effort dial (default `high`).
- **Release / knowledge:** 2026-06-30; knowledge cutoff January 2026.
- **IDs:** `claude-sonnet-5` (Claude API / GCP / Foundry); `anthropic.claude-sonnet-5` (Bedrock). No Zen Free ID found.
- **Context window:** 1M tokens; 128K max output (300K via Message Batches beta header).
- **Modalities:** text + image in; text out; reasoning yes (adaptive); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-04):** $2 / $10 per 1M in/out (intro rate made permanent 2026-08-10; the planned $3/$15 step never took effect); cache read $0.20, cache write $2.50 (5m) / $4 (1h); Batch 50%.
- **Architecture:** proprietary; no parameter count published.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **80.4%** (system card — beats Opus 4.8's 74.6 on the same Terminus-2 harness; Sonnet 4.6 67.0)
- OSWorld-Verified: **81.2%** (system card; vs Opus 4.8 83.4, Sonnet 4.6 78.5)
- GDPval-AA v2: **1618 Elo** (system card — edges Opus 4.8's 1615)
- BrowseComp: reaches Opus 4.8 accuracy at xhigh effort at ~1/3 the per-task token cost (Anthropic cost-performance curves)
- Cyber (system card): ExploitBench **3.96–4.18 mean flags, 0% full ACE**; OSS-Fuzz reproduction **52.7%**; Firefox 147 **0% working exploits / 13.2% partial** — deliberately weak
- Terminal-Bench 4.0: **10.3%** (Anthropic Sonnet 5.5 launch table)
- Claw-Eval / MCP-Atlas / Tau3: no verified public score found

Reasoning / knowledge:

- HLE (with tools): **57.4%** (system card; vs Opus 4.8 57.9 — effectively tied; Sonnet 4.6 46.8 restated)
- Chartography (no tools): **15.6%** (Sonnet 5.5 launch table — weak)
- GPQA / CritPt / LCR: no verified public score found in sources checked

Coding:

- SWE-bench Pro: **63.2%** (system card; vs Opus 4.8 69.2, Sonnet 4.6 58.1)
- CursorBench: **57%** (Cursor; vs Sonnet 4.6 49 — largest adjacent-Sonnet jump Cursor reported); CursorBench 4.0: **34.1%** (Sonnet 5.5 table)
- DeepSWE v1.1: **53.8%** (Google 3.7 Flash model card comparison)
- FrontierCode 1.1 Main: **42.4%** (Sonnet 5.5 launch table)
- SWE-bench Verified / LiveCodeBench / SciCode: no verified public score found in sources checked

Long context:

- GDM-MRCR v2 (8-needle, 128K average): **81.5%** (Google 3.7 Flash model card comparison)

### Normalized scores (1–100)

- **Tool use: 88/100.** TB 2.1 80.4% (beat the Opus flagship on the same harness), OSWorld-V 81.2% and GDPval-AA v2 1618 (edging Opus 4.8) are elite for a $2/$10 model; capped by TB 4.0 10.3% and weak cyber numbers (deliberate).
- **Reasoning: 85/100.** HLE-with-tools 57.4% ties Opus 4.8; capped by no public GPQA/CritPt rows and a very weak 15.6% Chartography no-tools figure.
- **Context window: 95/100.** 1M window (95–100 tier) with MRCR v2 81.5% at 128K from Google's comparison card; no ≥98%-at-512K+ evidence.
- **Multimodal: 65/100.** Text + image in, text out (image-in band); no video/audio/PDF-in evidence found.
- **Coding: 84/100.** SWE-bench Pro 63.2%, CursorBench 57% and TB 2.1 80.4% are near-Opus; capped by DeepSWE 53.8% and TB 4.0 10.3% against the newest generation.
- **Cost efficiency: 78/100.** $2/$10 (permanent) sits between the methodology's $1.25/$4.25 (~88) and $3/$15 (~60); $0.20 cache reads, 50% Batch and free-plan availability help.
- **Overall Score: 83.4/100.** Mean of (88, 85, 95, 65, 84) = 83.4 — the agentic value default of mid-2026; Sonnet 5.5 now beats it across the board at the same price.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-04
- Method: public internet research (Anthropic launch post + Sonnet 5 system card + platform docs, Vellum, apidog, AI Catchup, Sonnet 5.5 launch table, Google 3.7 Flash model card); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
