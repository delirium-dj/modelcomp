# Claude Sonnet 5.5 — findings by Laguna XS 2.1

- Source: Anthropic (`claude-sonnet-5-5`)
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5.5
- **Short description:** Anthropic's second Claude 5.5-family model (2026-09-28) — a mid-tier that beats Opus 5.5 on Terminal-Bench 4.0 (70.6% vs 66.4%) at half the per-token price, 30%+ faster than Sonnet 5 with up to 30% lower cost per task.
- **Provider / access:** Claude API (`claude-sonnet-5-5`), Amazon Bedrock (`anthropic.claude-sonnet-5-5`), Google Cloud, Microsoft Foundry (Global Standard only), Claude Platform on AWS, Claude.ai apps. Efforts low/medium/high/xhigh/max (default `high` API, `medium` apps/Claude Code); thinking on by default, `between_tools` replaces thinking-off.
- **Release / knowledge:** 2026-09-28; knowledge cutoff June 2026.
- **IDs:** `claude-sonnet-5-5` (Claude API / GCP / Foundry); `anthropic.claude-sonnet-5-5` (Bedrock). No Zen Free ID found.
- **Context window:** 1M tokens native (no beta header); 128K max output (300K via Message Batches beta header).
- **Modalities:** text + image in; text out; reasoning yes (adaptive); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-04):** $2 / $10 per 1M in/out; cache read $0.20, cache write $2.50 (5m) / $4 (1h); Batch 50% off; US-only inference 1.1x; zero data retention available.
- **Architecture:** proprietary; no parameter count published.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **70.6%** (Anthropic launch — ahead of Opus 5.5's 66.4); **63.6%** (Artificial Analysis independent, vs Opus 5.5 59.6, GPT-6 Astra 59.1)
- OSWorld 2.1: **80.1% partial** (Anthropic; vs Sonnet 5 57.0, Opus 5.5 81.8)
- GDPval-AA v2.1: **1844 Elo** (Anthropic; effectively tied with Opus 5.5's 1846, +400 over Sonnet 5)
- AA-Briefcase v1.1: **1811** (Anthropic; Opus 5.5 1822)
- Unity multi-step Editor/coding benchmark: **90% task completion** (Unity, launch testimonial)
- Tau3 / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- HLE (with tools): **64.5%** (Anthropic; vs Sonnet 5 54.9, Opus 5.5 67.7)
- Chartography (visual chart recognition): **61.6% no tools** (vs Sonnet 5 15.6; Opus 5.5 64.4)
- GPQA Diamond / CritPt / LCR: no verified public score found in sources checked
- First Sonnet model to beat Pokémon Red working only from screenshots (Anthropic)

Coding:

- CursorBench 4.0: **55.5%** (Anthropic; ~2 points below Opus 5.5's 57.8, "frontier-level" per Cursor's ML director)
- FrontierCode 1.1 Main: **52.1% xhigh / 46.2% max** (Anthropic; at High effort matches GPT-6 Sol's best at ~1/5 the cost per task)
- SWE-bench Verified / LiveCodeBench / SciCode: no verified public score found in sources checked

Long context:

- 1M native window (Anthropic docs); MRCR / RULER / GraphWalks: no verified public score found

Efficiency notes: ~30% fewer tokens per task than Sonnet 5 (Anthropic); AA measured ~193K output tokens per max-effort task ($7.60/task, most verbose it has measured — savings claims hold at Medium/High effort, not max).

### Normalized scores (1–100)

- **Tool use: 94/100.** TB 4.0 70.6% beats every model on Anthropic's own table including Opus 5.5 (confirmed independently by AA at 63.6%); GDPval 1844 ties Opus 5.5, OSWorld 80.1% near-flagship. Capped by missing Tau3/MCP-Atlas rows.
- **Reasoning: 90/100.** HLE-with-tools 64.5% and Chartography 61.6% are near-frontier; capped by no public GPQA/CritPt rows and trailing Opus 5.5 (67.7) on HLE.
- **Context window: 95/100.** 1M native window (95–100 tier) at standard pricing across the full window; no public retrieval-at-length number found, so it stays at the floor.
- **Multimodal: 65/100.** Text + image in, text out (image-in band 60–70); Chartography 61.6% and the Pokémon Red screenshot run show strong vision, but no video/audio/PDF-in evidence found.
- **Coding: 94/100.** TB 4.0 70.6% (top of Anthropic's table), CursorBench 55.5% (second only to Opus 5.5), FrontierCode 52.1% xhigh; capped by missing SWE-bench Verified/LiveCodeBench rows and AA's verbosity caveat at max effort.
- **Cost efficiency: 78/100.** $2/$10 sits between the methodology's $1.25/$4.25 (~88) and $3/$15 (~60) anchors; lifted by ~30% fewer tokens per task than Sonnet 5 and $0.20 cache reads, docked for AA's finding that max effort is the most token-hungry configuration it has measured.
- **Overall Score: 87.6/100.** Mean of (94, 90, 95, 65, 94) = 87.6 — the best price/performance coding model in the Claude lineup; default to it at medium/high effort and escalate to Opus 5.5 only for sustained-judgment work.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-04
- Method: public internet research (Anthropic launch post + platform docs, claude.dev migration guide, Decrypt, The Decoder, heymark, Artificial Analysis via Decrypt); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
