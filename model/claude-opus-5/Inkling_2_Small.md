# Claude Opus 5 — findings by Fledge Alpha

- Source: Anthropic (`claude-opus-5`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5
- **Short description:** Anthropic's July 24, 2026 Opus flagship at unchanged Opus 4.8 pricing, positioned at ~Fable 5 intelligence for half the price.
- **Provider / access:** Claude API (`claude-opus-5`), Bedrock, Vertex/Google Cloud, MS Foundry; Messages API.
- **Release / knowledge:** 2026-07-24; knowledge cutoff May 2026 (per gradually.ai roundup; Anthropic's published card states May 2026 — treated as indicative).
- **IDs:** `anthropic/claude-opus-5`
- **Context window:** 1,000,000 tokens; 128K max output (300K via Batches beta).
- **Modalities:** text + image in; text out; effort low→max, default high.
- **Pricing (as of 2026-10-02):** $5/M in, $25/M out, $0.50/M cache read; Fast mode 2x; Batch 50% off.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **89.1%** (AA, adaptive/max)
- Agents' Last Exam: **27.0%** (Snorkel)
- AutomationBench: next-best-to-Fable-tier per Anthropic (1.5x next-best cost-adjusted)
- OSWorld 2.0: best cost-adjusted result at any effort (Anthropic); vals.ai 70.2% offline
- GDPval-AA v2: SOTA per Anthropic

Reasoning / knowledge:

- HLE (no tools): **54.9%** (AA); with tools **63.6%** (Anthropic)
- GPQA Diamond: **93.4–94.1%** (AA/vendor)
- ARC-AGI-2: **90.4%** (arcprize.org, max)
- LiveBench: **80.1**
- AA Intelligence Index: **~63.1** tier per launch comparison tables (v4.1.1 63.1)

Coding:

- SWE-bench Verified: **97.0%** (vals.ai; vendor 96.0%)
- SWE-bench Pro: **79.2%** (Anthropic)
- DeepSWE v1.1: **74.0%** (DeepSWE board)
- CursorBench 3.2: within 0.5% of Fable 5 peak at half the cost (Anthropic, max)
- Frontier-Bench v0.1: **43.3%** (leads; doubles Opus 4.8)

Long context:

- 1M window; no public full-length MRCR figure.

### Normalized scores (1–100)

- **Tool use: 86/100.** Terminal-Bench 2.1 89.1% and best-in-class OSWorld cost-performance; Agents' Last Exam 27% is mid-pack.
- **Reasoning: 86/100.** HLE-no-tools 54.9%, GPQA 94.1%, LiveBench 80.1 — strong; AA Index ~63 below Fable 5.1.
- **Context window: 95/100.** 1M window, 128K output, 300K batch output.
- **Multimodal: 65/100.** Text and image input; no audio/video.
- **Coding: 86/100.** SWE-bench Verified 97% (board top), SWE-Pro 79.2%, DeepSWE 74% tied for the lead.
- **Cost efficiency: 70/100.** $5/$25 with 90% cache discount is fair for the tier, but an order of magnitude above flash models.
- **Overall Score: 84/100.** Mean of the five quality dims; best fit for high-quality long-running agentic coding without Fable-tier pricing.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-02
- Method: public internet research (Anthropic launch posts, vals.ai, AA, DeepSWE board, independent reviews); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
