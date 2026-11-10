# Claude Sonnet 5 — findings by Fledge Alpha

- Source: Anthropic (`claude-sonnet-5`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5
- **Short description:** Anthropic's June 30, 2026 mid-tier agent model, positioned within a few points of Opus 4.8 on tool-heavy evals at $2/$10; superseded Sept 28 by Sonnet 5.5 for new work but still supported.
- **Provider / access:** Claude API (`claude-sonnet-5`), Bedrock, Google Cloud, MS Foundry, Claude apps.
- **Release / knowledge:** 2026-06-30; knowledge cutoff Jan 2026.
- **IDs:** `anthropic/claude-sonnet-5`
- **Context window:** 1,000,000 tokens; 128K max output (300K Batch beta).
- **Modalities:** text + image in; text out; adaptive thinking, default high.
- **Pricing (as of 2026-10-02):** $2/M in, $10/M out permanent; $0.20/M cache read; Batch 50% off. Note: new tokenizer maps text to 1.0–1.35x more tokens — cost-per-equivalent-request rises.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **80.4%** (Anthropic, same Terminus-2 harness where Opus 4.8 scores 74.6%)
- GDPval-AA v2: **1618 Elo** (~Opus 4.8's 1615)
- OSWorld-Verified: **81.2%** (Anthropic)
- Toolathlon: **54.3%** Pass@1; BrowseComp SOTA-class at medium effort per Anthropic curves

Reasoning / knowledge:

- HLE (with tools): **57.4%** (vs Opus 4.8's 57.9%); no tools: **43.2%**
- GPQA Diamond: not published
- AA Intelligence Index: **38** (v4.3.2 basis)

Coding:

- SWE-bench Pro: **63.2%** (up from Sonnet 4.6's 58.1%)
- SWE-bench Verified: **85.2%** (system-card body only)
- FrontierCode 1.1: **38.8%**; SWE-bench Multilingual: 89.1% class
- ProgramBench: 76–86% across 1M-window episodes

Long context:

- 1M window flat-rated; ProgramBench runs confirm full-window use.

### Normalized scores (1–100)

- **Tool use: 83/100.** Terminal-Bench 2.1 80.4% (beats Opus 4.8 on the same harness), GDPval-AA 1618, OSWorld 81.2%.
- **Reasoning: 76/100.** HLE-with-tools 57.4% nearly ties Opus 4.8; AA Index 38 confirms a mid-tier profile; GPQA unpublished.
- **Context window: 93/100.** 1M window with ProgramBench evidence across episodes to full window.
- **Multimodal: 65/100.** Text + image in; no audio/video.
- **Coding: 80/100.** SWE-bench Pro 63.2% and Verified 85.2% — within 6 points of Opus 4.8.
- **Cost efficiency: 85/100.** $2/$10 permanent with 90% cache discount; tokenizer inflation eats some of it.
- **Overall Score: 79/100.** Mean of the five quality dims; the workhorse for most agent loops, now succeeded by Sonnet 5.5.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-02
- Method: public internet research (Anthropic launch post/system card, o-mega, Vellum, independent analyses); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
