# Claude Sonnet 5.5 — findings by Fledge Alpha

- Source: Anthropic (`claude-sonnet-5-5`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5.5
- **Short description:** Anthropic's Sept 28, 2026 mid-tier workhorse, ~Opus 5.5-level on coding/knowledge work at half the token price.
- **Provider / access:** Claude API (`claude-sonnet-5-5`), Bedrock, Google Cloud, MS Foundry, Claude Platform on AWS.
- **Release / knowledge:** 2026-09-28; knowledge cutoff Jun 2026.
- **IDs:** `anthropic/claude-sonnet-5-5`
- **Context window:** 1,000,000 tokens; 128K max output (300K Batch beta).
- **Modalities:** text + image in (file input supported); text out; adaptive thinking always on, default high.
- **Pricing (as of 2026-10-02):** $2/M in, $10/M out, $0.20/M cache read, $2.50/$4 cache writes; Batch 50% off.
- **Architecture:** proprietary; second Claude 5.5-family model.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **70.6%** (Anthropic, max; AA independent 63.6–64%) — leads Opus 5.5's 66.4%
- GDPval-AA v2.1: **1844 Elo** (~2 pts behind Opus 5.5)
- AA-Briefcase v1.1: **1811 Elo**
- AutomationBench-AA: **71%** (AA max); OSWorld 2.1: **80.1%** partial; Toolathlon-Verified: **77.8%**

Reasoning / knowledge:

- HLE (with tools): **64.5%** (Anthropic) / 55% (AA harness)
- AA Intelligence Index: **56** at max (AA; 2nd behind Opus 5.5's 58)
- FrontierMath Tier 4 v2: **80.5%**; Terminal-Bench-Science 0.1: **59.9%**
- Vals Index: **67.0%**

Coding:

- SWE-bench Pro: **81.3%** (system card); SWE-bench Multilingual: **90.3%**
- CursorBench 4.0: **55.5%**; FrontierCode 1.1 Main: **46.2–52.1%**
- Code Migration: **69.8%** (#1 of 46)

Long context:

- AA-LCR: **83%**; 1M window billed flat.

### Normalized scores (1–100)

- **Tool use: 87/100.** Terminal-Bench 4.0 70.6% beating Opus 5.5, GDPval-AA 1844, AutomationBench-AA 71% — exceptional for the price tier.
- **Reasoning: 82/100.** HLE-with-tools 64.5%, FrontierMath T4 80.5%, AA Index 56.
- **Context window: 95/100.** 1M window flat-rated, 128K/300K output.
- **Multimodal: 65/100.** Text + image + file input; Chartography 61.6%; no video/audio.
- **Coding: 82/100.** SWE-bench Pro 81.3%, Multilingual 90.3%, CursorBench 55.5%; FrontierCode 52.1% trails Astra.
- **Cost efficiency: 84/100.** $2/$10 with 90% cache discount; caveat — at max effort it is the most token-hungry model AA measured (~$7.60/Index task).
- **Overall Score: 82/100.** Mean of the five quality dims; best fit as the default production agent model — near-flagship on the benchmarks that matter, at half the premium price.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-02
- Method: public internet research (Anthropic launch post, AA, Vals AI, system card summaries, independent analyses); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
