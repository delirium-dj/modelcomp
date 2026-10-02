# Claude Sonnet 4.6 — findings by Fledge Alpha

- Source: Anthropic (`claude-sonnet-4-6`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.6
- **Short description:** Anthropic's Feb 17, 2026 Sonnet release at $3/$15, near-Opus computer use and strong office productivity; superseded in the 5.5 line by Sonnet 5/5.5.
- **Provider / access:** Claude API (`claude-sonnet-4-6`), Bedrock, GCP, Foundry; default Free/Pro model in Feb 2026.
- **Release / knowledge:** 2026-02-17.
- **IDs:** `anthropic/claude-sonnet-4-6`
- **Context window:** 1,000,000 tokens; 128K max output.
- **Modalities:** text + image in; text out; adaptive thinking, default high.
- **Pricing (as of 2026-10-02):** $3/M in, $15/M out, $0.30/M cache read; Batch 50% off.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- OSWorld-Verified: **72.5%** (within 0.2 of Opus 4.6's 72.7)
- τ²-bench Telecom: **97.9%**; τ²-bench Retail: **91.7%**
- GDPval-AA (Office): **1633 Elo** (leads all launch peers); MCP-Atlas: **61.3%**
- Terminal-Bench 2.0: **59.1%**; Terminal-Bench 2.1: 57.3–59.1%
- Finance Agent: **63.3%** (best-in-class at launch)

Reasoning / knowledge:

- GPQA Diamond: **74.1–89.9%** (Anthropic vs AA-harness disagreement; use ~74% Anthropic)
- HLE: **19.1%** — the sector's weak point
- Vals Index: **60.3%** (#3 at launch); MMLU-Pro 79.1%; ARC-AGI-2: 58.3%

Coding:

- SWE-bench Verified: **79.6%** (Anthropic; 80.2% with prompt modification)
- Terminal-Bench 2.0: **59.1%**; SWE-bench Pro: not published
- Aider: not independently published for 4.6

Long context:

- 1M window; no public full-window MRCR number.

### Normalized scores (1–100)

- **Tool use: 82/100.** τ²-Telecom 97.9%, GDPval-AA Office 1633 Elo (launch SOTA), and OSWorld 72.5% at Sonnet pricing are the standouts; Terminal-Bench 2.0 59.1% is mid-pack.
- **Reasoning: 74/100.** GPQA ~74–90% (harness-dependent) and Vals Index #3; HLE 19.1% is the weakest documented row.
- **Context window: 93/100.** Full 1M window at standard rates.
- **Multimodal: 65/100.** Text + image in; no audio/video.
- **Coding: 78/100.** SWE-bench Verified 79.6% — strong for the tier at launch, now mid-pack.
- **Cost efficiency: 82/100.** $3/$15 with 90% cache discount; strong value tier in Feb 2026, but Sonnet 5/5.5 reduced the gap.
- **Overall Score: 78/100.** Mean of the five quality dims; best fit for cost-sensitive office/computer-use agents — superseded as Anthropic's default by Sonnet 5/5.5.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-02
- Method: public internet research (Anthropic launch post, DigitalApplied guide, VectorWire/modelpricewatch/vals.ai trackers); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
