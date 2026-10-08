# Claude Fable 5.1 — findings by Fledge Alpha

- Source: Anthropic (`claude-fable-5.1`)
- Date: 2026-10-08 (UTC, refreshed from 2026-10-02)
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
- Vals AI full suite (2026-09-04): Vals Index **67.87% (#1)**, ProofBench v1.1 **100%**, RSI Index **35.03% (#1)**, Tax Agent Bench **77.64% (#1)**, Harvey's Legal Agent **6.67%** (weak spot)
- AA Intelligence Index: **53.4** (top 1%); GPQA Diamond **93.43%**; MMLU Pro **92.38% (#1/138)**; MMMU Pro **90.64% (#1/93)** (Vals)

Coding:

- DeepSWE v1.1: **67.4%** (Anthropic); SWE-bench Pro: **81.2%**; SWE-bench Multilingual: **89.1%**; SWE-bench Multimodal: **54.7%**
- FrontierSWE v2: Fable-tier; FrontierCode: strong (system card)
- LiveCodeBench: **90.52% (#1/143)**; Vibe Code Bench v1.1: **90.26%**; Terminal-Bench 2.1 (Vals): **85.02%**; AA Coding Index **81.6 (#1/138)** (Vals/AA, Sep 2026)

Long context:

- 1M window; ProgramBench run across full window (system card).

### Normalized scores (1–100)

- **Tool use: 84/100.** Terminal-Bench 2.1 ~91% (AA) and GDPval 1853 are top-tier; OSWorld strict 41.7% and AutomationBench 31.4% are middling.
- **Reasoning: 88/100.** HLE-no-tools ~60% and with-tools 65% lead the published HLE board; GPQA 93.7%, LiveBench 83.4.
- **Context window: 95/100.** Full 1M window with frontier retrieval evidence (Terminal-Bench-Science at 400K).
- **Multimodal: 70/100.** Text + image in with MMMU Pro 90.64% (#1/93) and SWE-bench Multimodal 54.7%; no audio/video.
- **Coding: 87/100.** LiveCodeBench 90.52% #1 and AA Coding Index #1/138 atop SWE-bench Pro 81.2% and DeepSWE 67.4%; CursorBench 73.4%.
- **Cost efficiency: 62/100.** Cache-read cuts give ~25–45% real savings, but $10/$50 remains the highest Claude tier.
- **Overall Score: 85/100.** Mean of (84, 88, 95, 70, 87) = 84.8 → 85; best fit for the hardest long-horizon reasoning and agentic work where budget is secondary.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-08
- Method: public internet research (Anthropic launch post, AA, Vals AI full suite 2026-09-04, system-card summaries); scores are normalized 1–100 interpretations, not official vendor scores. Refreshed 2026-10-08 with Vals #1-index results (LCB 90.52, MMLU Pro/MMMU Pro #1, ProofBench 100, RSI #1).
- Future sources: add a new file next to this one using the same headings.
