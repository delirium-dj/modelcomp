# Claude Opus 4.8 — findings by Fledge Alpha

- Source: Anthropic (`claude-opus-4-8`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.8
- **Short description:** Anthropic's May 28, 2026 Opus release, direct Opus 4.7 upgrade at the same price; superseded by Opus 5 (July 24, 2026) for new work.
- **Provider / access:** Claude API (`claude-opus-4-8`), Bedrock, Google Cloud, MS Foundry.
- **Release / knowledge:** 2026-05-28.
- **IDs:** `anthropic/claude-opus-4-8`
- **Context window:** 1,000,000 tokens; 128K max output.
- **Modalities:** text + image in; text out; effort low→max.
- **Pricing (as of 2026-10-02):** $5/M in, $25/M out, $0.50/M cache read, $6.25 cache write; Fast $10/$50; Batch 50% off.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- GDPval-AA: **1890 Elo** (AA, launch SOTA; later reported as v1 score, v2 had 1593)
- Terminal-Bench 2.1: **74.6%** (Anthropic/Terminus-2)
- MCP-Atlas: **82.2%**; τ²-Bench Telecom: +5.9 gain over 4.7
- OSWorld-Verified: **83.4%** (Anthropic, updated harness); AutomationBench: **15.5%**
- BrowseComp: **84.3%** single / 88.5% multi-agent

Reasoning / knowledge:

- HLE (with tools): **57.9%**; no tools **49.8%**
- GPQA Diamond: **93.6%**; USAMO 2026: **96.7%**
- AA Intelligence Index: **61.4** at launch (#1, max effort), later rebased lower with v4.3.2
- AA-LCR, SciCode, IFBench: gains of +3–5 points over 4.7

Coding:

- SWE-bench Verified: **88.6%**; SWE-bench Pro: **69.2%**; Multilingual: **84.4%**
- DeepSWE v1.1: **59.0%** (Datacurve board)
- Terminal-Bench Hard: +6.8 vs 4.7

Long context:

- GraphWalks Parents 256K: **99.3%** (vs GPT-5.5's 90.1%)

### Normalized scores (1–100)

- **Tool use: 83/100.** GDPval-AA 1890 Elo and MCP-Atlas 82.2% were launch SOTA; OSWorld 83.4%.
- **Reasoning: 85/100.** AA Index #1 at launch, HLE-with-tools 57.9%, GPQA 93.6%.
- **Context window: 94/100.** 1M window with GraphWalks-Parents 99.3% at 256K.
- **Multimodal: 65/100.** Text + image in; no audio/video.
- **Coding: 83/100.** SWE-bench Pro 69.2% and Verified 88.6%; DeepSWE 59% middling.
- **Cost efficiency: 70/100.** $5/$25 with 90% cache discount; Fast mode 3x cheaper than prior generations.
- **Overall Score: 82/100.** Mean of the five quality dims; the model Opus 5 and 5.5 now replace for new builds.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-02
- Method: public internet research (Anthropic launch post, AA, vals.ai, system card summaries, independent trackers); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
