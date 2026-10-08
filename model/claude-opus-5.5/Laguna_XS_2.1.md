# Claude Opus 5.5 — findings by Laguna XS 2.1

- Source: Anthropic (`claude-opus-5-5`)
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5
- **Short description:** Anthropic's first Claude 5.5-family release (2026-09-22), an Opus-class model matching Claude Fable 5.1 on most work at ~40% lower running cost than Opus 5; built for long-running agentic coding and knowledge work.
- **Provider / access:** Claude API (`claude-opus-5-5`), Amazon Bedrock, Google Cloud, Microsoft Foundry, Claude Platform on AWS. Messages API; adaptive thinking always on (cannot be disabled).
- **Release / knowledge:** 2026-09-22; knowledge cutoff June 2026 (training data cutoff June 2026, per system card).
- **IDs:** `claude-opus-5-5` (Claude Platform); `anthropic/claude-opus-5.5` on OpenRouter. No Zen Free ID found.
- **Context window:** 1M tokens total; 128K max output (300K via Message Batches beta header `output-300k-2026-03-24`).
- **Modalities:** text + image in; text out; reasoning yes (adaptive, always on, effort tiers medium/high/xhigh/max); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-04):** $4 / $20 per 1M input/output; cache read $0.20, cache write $5 (5m) / $8 (1h); Batch API 50% off; fast mode $8 / $40 (up to 2.5x faster); US-only inference 1.1x.
- **Architecture:** proprietary; no parameter count published.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **66.4%** (xhigh, Anthropic launch, SOTA vs Fable 5.1 55.8 / GPT-6 Astra 57.9 / Opus 5 52.3)
- Terminal-Bench 2.1: **87.6%** (thinking high; LLMLearner, rank 11/55)
- FrontierCode v1.1 (Main): **54.4% max / 54.6% default medium** (Anthropic; rank 1/11 per LLMLearner)
- GDPval-AA v2.1: **1846 Elo** (Anthropic launch; vs Fable 5.1 1735, Opus 5 1708)
- AutomationBench (Zapier): **40.0%** (Zapier run, no fallback; behind GPT-6 Astra 41.4); AutomationBench-AA: **69.5** (rank 1/11, LLMLearner)
- OSWorld 2.0/2.1: **81.8% partial** (Anthropic launch; rank 1/4 per LLMLearner)
- Agents' Last Exam: **38.2** (rank 2/16, LLMLearner)
- Toolathlon-Verified: **~77.8** (rank 2/35, LLMLearner)
- WANDR (Perplexity): outperforms Fable 5.1 and Opus 5 at lower cost per task (Anthropic, modified offline setup — not cross-comparable)
- Tau3-Banking / Tau2-Bench: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- HLE (with tools): **67.7%** (max; Anthropic launch; rank 1/131 per LLMLearner)
- GPQA Diamond: no verified public score found in sources checked
- CritPt (no tools): **31.7** (rank 3/124, LLMLearner)
- ARC-AGI-1 / ARC-AGI-2: **98.5 / 93.3** (thinking high; ranks 1/69 and 3/63, LLMLearner)
- FrontierMath v2 / Tier 4 v2 (with tools): **91.2 / 95.0** (LLMLearner)
- Global MMLU: **94.3** (LLMLearner)
- AA Intelligence Index v4.3: **57.6** (rank 1/13, LLMLearner)
- AA-Omniscience: **46.4** (LLMLearner)
- SimpleBench: **88.4** (historical, LLMLearner)

Coding:

- SWE-bench Pro (Public): **89.9%** (rank 1/60, LLMLearner)
- SWE-bench Multilingual: **93.9%** (rank 1/29, LLMLearner); SWE-bench Multimodal: **61.4%** (rank 1/3)
- CursorBench 4.0: **57.8% max / 52.5% default** (Anthropic launch)
- SciCode: **66.9** (no tools; rank 1/89, LLMLearner)
- Vibe Code Bench v1.1: **90.3** (rank 4/62, LLMLearner)
- IOI (Vals v2): **95.1** (rank 4/28, LLMLearner)
- Terminal-Bench-Science 0.1: **58.7%** (Anthropic; 63.3 per LLMLearner, rank 2/20)
- LiveCodeBench: no verified public score found in sources checked

Long context:

- AA-LCR (long reasoning): **84.7** (rank 4/17, LLMLearner); EBR-bench memory/persistence **71.4** (rank 2/23)

### Normalized scores (1–100)

- **Tool use: 95/100.** TB 4.0 66.4% SOTA, GDPval-AA 1846 Elo, OSWorld 81.8% and AutomationBench-AA 69.5 (rank 1) are all frontier-topping; capped by the Zapier AutomationBench run (40.0%, behind GPT-6 Astra's 41.4) and missing Tau3/Claw-Eval rows.
- **Reasoning: 95/100.** HLE 67.7% (#1 of 131), CritPt 31.7 (#3/124), ARC-AGI-2 93.3 and AA Index 57.6 (#1) are at or near the top of every board found; capped slightly by no independent GPQA Diamond row.
- **Context window: 96/100.** 1M window (top tier 95–100) with AA-LCR 84.7 — strong but below the ≥98% retrieval-at-512K mark required for 100.
- **Multimodal: 68/100.** Text + image in, text out only (image-in band 60–70); strong vision evidence (Chartography 89.0%, SWE-bench Multimodal 61.4% #1) pushes to the top of the band; capped by no video/PDF-in evidence and text-only output.
- **Coding: 96/100.** SWE-bench Pro 89.9% (#1/60), Multilingual 93.9% (#1/29), FrontierCode #1, CursorBench 57.8% and TB 4.0 SOTA meet or exceed every coding frontier ref; capped only by reliance on vendor-run tables for some rows.
- **Cost efficiency: 65/100.** $4/$20 sits between the methodology's $3/$15 (~60) and cheaper tiers; lifted by $0.20 cache reads (60% below Opus 5) and ~40% lower cost per task, but still a premium paid model.
- **Overall Score: 90/100.** Mean of (95, 95, 96, 68, 96) = 90 — the best paid pick for long-horizon agentic coding and knowledge work when budget allows.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-04
- Method: public internet research (Anthropic launch page + system card, Claude Platform docs, LLMLearner, ModelCap, llm-stats, CosmicJS); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
