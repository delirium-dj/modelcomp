# Claude Opus 4.6 — findings by Fledge Alpha

- Source: Anthropic (`claude-opus-4-6`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.6
- **Short description:** Anthropic's Feb 5, 2026 Opus release, superseded by Opus 4.7/4.8/5; February 2026 generation's reference coding flagship.
- **Provider / access:** Claude API (`claude-opus-4-6`), Bedrock, Google Cloud, MS Foundry.
- **Release / knowledge:** 2026-02-05.
- **IDs:** `anthropic/claude-opus-4-6`
- **Context window:** 1,000,000 tokens; 128K max output.
- **Modalities:** text + image in; text out; effort low→max.
- **Pricing (as of 2026-10-02):** $5/M in, $25/M out; cache read $0.50; Fast 2x.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- OSWorld-Verified: Opus 4.6's February-era computer-use score sits below 4.8's 83.4% (restated harness) — contemporaneous reports place 4.6 around 74–78%
- Terminal-Bench 2.0: ~66–70% class (Opus 4.7's 2.0 restatement was 69.4%)
- GDPval: not published separately; Opus 4.7/4.8 carry the Elo numbers

Reasoning / knowledge:

- GPQA Diamond: **91.3–94.2%** (AA/vals.ai ~91.3%)
- HLE: **46.9–53%** (vals.ai/HLE board)
- SWE-bench Pro (Scale SEAL standardized): **51.9%**

Coding:

- SWE-bench Verified: **80.6–80.8%** (Anthropic)
- SWE-bench Pro: **74%** (Anthropic-run, per third-party tables)
- Terminal-Bench 2.0: not separately published

Long context:

- 1M window; prior-generation MRCR not published at 4.6.

### Normalized scores (1–100)

- **Tool use: 76/100.** Best-in-class-era OSWorld and strong GDPval-class knowledge work for Feb 2026, but published tool-use numbers are sparse compared to 4.7/4.8/5.
- **Reasoning: 82/100.** GPQA ~91–94% and HLE ~50%.
- **Context window: 94/100.** 1M window, same tier as later Opus releases.
- **Multimodal: 65/100.** Text + image in.
- **Coding: 82/100.** SWE-bench Verified ~81% and Pro 74% at Anthropic-run harness; SEAL-standardized run lands at 51.9%.
- **Cost efficiency: 68/100.** $5/$25; no more cache-discount improvements over 4.7+.
- **Overall Score: 80/100.** Mean of the five quality dims; the Feb 2026 reference point — superseded three generations deep.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-02
- Method: public internet research (Anthropic launch tables via third-party trackers, SWE-bench records, benchr/val coverage); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
