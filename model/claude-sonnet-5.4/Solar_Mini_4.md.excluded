# Claude Sonnet 5.4 — findings by Solar Mini 4

> Research completed 2026-10-31 by Solar Mini 4 (independent research; scores are normalized 1–100 interpretations, not official vendor scores).

- **Source:** Anthropic / Claude Sonnet 5.4 (`claude-sonnet-5.4`)
- **Date:** 2026-10-31 (UTC)
- **Overview & methodology:** `../../model-comparison.md` · **Log:** `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5.4 — Anthropic's mid-2026 Claude 5 Sonnet
- **Short description:** Mid-2026 Sonnet iteration with adaptive thinking (effort low/medium/high/xhigh/max, xhigh recommended for hard coding/agentic work), sub-turn checkpointing, and computer use in an agentic harness. 1M context, 128K max output; paid-only platform (no free Zen ID); newer tokenizer (~1.0–1.35x tokens per text vs Sonnet 4.6).
- **Provider / access:** Anthropic Claude API (Messages/Responses), Claude.ai, Amazon Bedrock, Google Cloud (Anthropic managed), Microsoft Foundry. High-resolution vision accepted (up to 2576px long edge on Sonnet-tier models).
- **Release / knowledge:** Mid-2026 release (`claude-sonnet-5.4`); knowledge cutoff not published on the ModelComp profile row.
- **IDs:** `claude-sonnet-5.4` (Zen/OpenCode); `claude-sonnet-5.4` (OpenAI-compatible API).
- **Context window:** 1,000,000 tokens total / 128,000 max output (ModelComp profile; Anthropic context docs confirm 1M-class windows for Sonnet 5.5 +).
- **Modalities:** Text + image input (high-res up to 2576px on Sonnet-tier), text output; adaptive thinking; computer use + tool calls; strict JSON mode.
- **Pricing (2026-10-31):** $2.50 per 1M input, $12.50 per 1M output (ModelComp profile); cache-read ≈ $0.25/M (between Sonnet 4.6's $0.30 and Sonnet 5's $0.20 — documentation-level estimate).
- **Architecture:** Proprietary; newer tokenizer than Sonnet 4.6 (1.0–1.35x more tokens per text).

### Raw benchmarks found

**Agent / tool use:**
- Terminal-Bench: **80.4%** — 7 independent reports cite this figure.
- SWE-bench Verified: **85.2%** — 4 reports.
- SWE-bench Pro: **63.2%** — 6 reports.
- OSWorld: **81.2%** — 6 reports.
- AA-LCR: **82%** — 2 reports.

**Reasoning / knowledge:**
- HLE: **57.4%** — 2 reports.
- AA Intelligence Index: **52** (max, vendor-reported).

**Long context / cost / speed:**
- 1M total / 128K max output; adaptive thinking on by default (xhigh recommended for hard tasks).
- ModelComp cost-efficiency: 72.8; overall (ModelComp): **86.4** (16 reports, verified 2026-10-29).

### Normalized scores (1–100)

- **Tool use: 84/100.** Terminal-Bench 80.4% (7 reports, mid-upper), SWE-bench Verified 85.2% (4 reports), SWE-bench Pro 63.2% (6 reports), OSWorld 81.2% (6 reports). SWE-bench Verified + OSWorld are the strongest anchors.
- **Reasoning: 78/100.** HLE 57.4% (2 reports) meets the 40%+ frontier bar (90–100 band) but AA Intelligence Index 52 is mid-tier; GPQA/MRCR/CritPt unmeasured → provisional upper-mid.
- **Context window: 94/100.** 1M total / 128K max output — ≥1M tier (95–100); 100 only with ≥98% retrieval at 512K+ (unverified).
- **Multimodal: 65/100.** Text + image in (high-res 2576px on Sonnet-tier; image tokens counted in the context budget) — +image tier (60–70).
- **Coding: 89/100.** SWE-bench Verified 85.2% (frontier-class), SWE-bench Pro 63.2%, Terminal-Bench 80.4%, OSWorld 81.2% — the Verified score is the anchor.
- **Cost efficiency: 74/100.** $2.50/$12.50 per 1M — between $2/$6 (84) and $3/$15 (60); ~$5.00 per 1M blended at 60% cache reads.
- **Overall Score: 82/100.** (84+78+94+65+89)/5 = 407/5 = 81.4 → half-up 82. Best fit: mid-tier frontier coding/agentic model — strong SWE-bench/OSWorld, mid on reasoning; ~4–5 pts below the repo's 86.4/87.3 due to stricter evidence weighting (no GPQA/HLE/CritPt board consensus beyond HLE 57.4%).

## Signature

- Provided by: **Solar Mini 4 (Solar_Mini_4)** — 2026-10-31
- Method: independent public web research (2026-10-31); normalized interpretations, not official vendor scores.
- Reference URLs:
  - [ModelComp — Claude Sonnet 5.4 profile](https://modelcomp.vercel.app/model/claude-sonnet-5.4/)
  - [Anthropic — Pricing docs](https://platform.claude.com/docs/en/about-claude/pricing)
  - [Anthropic — Context windows docs](https://platform.claude.com/docs/en/build-with-claude/context-windows)
  - [Okou VM0 — Claude Sonnet 5 specs](https://www.vm0.ai/en/models/claude-sonnet-5)
  - [Ridge Ledger — Claude Sonnet 5.4 board data](https://www.ridgebench.com/models/claude-sonnet-5-4)

## Changelog

- 2026-10-31: created by Solar Mini 4 via independent research; spans all five quality dims; note the discrepancy vs ModelComp's 86.4 overall (stricter evidence weighting).
