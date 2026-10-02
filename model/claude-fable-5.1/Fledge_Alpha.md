# Claude Fable 5.1 — findings by Fledge Alpha

- Source: Anthropic (`claude-fable-5.1`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.1
- **Short description:** Anthropic's Sept 1, 2026 top-tier flagship for hard reasoning and long-horizon agentic work; Mythos 5.1 is the same weights with relaxed safeguards, invite-only.
- **Provider / access:** Claude API (`claude-fable-5-1`), Bedrock, Google Cloud, MS Foundry.
- **Release / knowledge:** 2026-09-01; knowledge cutoff Jun 2026.
- **IDs:** `anthropic/claude-fable-5-1`
- **Context window:** 1,000,000 tokens; 128K max output.
- **Modalities:** text + image in; text out; adaptive thinking always on.
- **Pricing (as of 2026-10-02):** $10/M in, $50/M out, $0.25/M cache read (75% cheaper than Fable 5); Batch 50% off.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **55.8%** (Anthropic); Terminal-Bench 2.1: **91.4%** (AA Terminus 2) / 79–85% vals.ai with fallback correction
- GDPval-AA v2: **1853** (Anthropic via AA)
- OSWorld 2.0: **77.9%** partial / **41.7%** strict
- AutomationBench: **31.4%**
- CursorBench 3.2.0: **73.4%**

Reasoning / knowledge:

- HLE (no tools): **60.9%** (Anthropic) / **59.1%** (AA) — #1 on BenchLM's HLE board
- HLE (with tools): **65.0%**
- GPQA Diamond: **93.4–93.7%** (vals.ai/AA)
- ARC-AGI-2: **90.0%** (arcprize.org); LiveBench **83.4**
- Terminal-Bench-Science 0.1: **52.6%** (double Fable 5's 24.7%)

Coding:

- DeepSWE v1.1: **67.4%** (Anthropic); SWE-bench Pro: **81.2%**; SWE-bench Multilingual: **89.1%**; SWE-bench Multimodal: **54.7%**
- FrontierSWE v2: Fable-tier; FrontierCode: strong (system card)

Long context:

- 1M window; ProgramBench run across full window (system card).

### Normalized scores (1–100)

- **Tool use: 84/100.** Terminal-Bench 2.1 ~91% (AA) and GDPval 1853 are top-tier; OSWorld strict 41.7% and AutomationBench 31.4% are middling.
- **Reasoning: 88/100.** HLE-no-tools ~60% and with-tools 65% lead the published HLE board; GPQA 93.7%, LiveBench 83.4.
- **Context window: 95/100.** Full 1M window with frontier retrieval evidence (Terminal-Bench-Science at 400K).
- **Multimodal: 68/100.** Text + image in with SWE-bench Multimodal 54.7%; no audio/video.
- **Coding: 85/100.** SWE-bench Pro 81.2% and DeepSWE 67.4%; CursorBench 73.4%.
- **Cost efficiency: 62/100.** Cache-read cuts give ~25–45% real savings, but $10/$50 remains the highest Claude tier.
- **Overall Score: 84/100.** Mean of the five quality dims; best fit for the hardest long-horizon reasoning and agentic work where budget is secondary.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-02
- Method: public internet research (Anthropic launch post, AA, vals.ai, system-card summaries); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
