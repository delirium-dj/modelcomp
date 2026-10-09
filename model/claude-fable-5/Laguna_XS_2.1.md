# Claude Fable 5 — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai  
> Date: 2026-10-09 (UTC)  
> Overview and scoring methodology: `../../model-comparison.md`  
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5 (Max, Opus 4.8 Fallback)
- **Short description:** Anthropic's first broadly available Mythos-class model — the tier above Opus, built for long-horizon agentic work and software engineering. Legacy since Claude Fable 5.1 (June 2026).
- **Provider / access:** Anthropic API (`claude-fable-5`); Amazon Bedrock; Google Cloud; Microsoft Foundry/Azure; Claude Platform on AWS. Adaptive thinking always on; default effort `high` (Claude Code) / `medium` (Cowork, claude.ai).
- **Release / knowledge:** June 9, 2026; knowledge cutoff not publicly disclosed.
- **IDs:** `claude-fable-5` (also known as "Max, Opus 4.8 Fallback"); `anthropic/claude-fable-5.1` (OpenRouter).
- **Context window:** 1,000,000 tokens total; 128,000 max output.
- **Modalities:** Text and image input; text output; reasoning yes (extended thinking); tool calls supported.
- **Pricing (as of 2026-10-09):** $10.00 per 1M input tokens, $50.00 per 1M output tokens; cache discount 90% ($1/MTok).
- **Architecture:** Proprietary; parameter count not disclosed by Anthropic.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **84.3%** (Anthropic system card / Vals AI)
- Terminal-Bench 3.0: **34.0%** (FrontierBench leaderboard)
- OSWorld 2.0: **85% partial / 41.7% strict** (Anthropic system card / Vals AI)
- GDPval-AA: **1747 Elo** (Anthropic system card)
- τ²-bench: **98.5%** (AA leaderboard)
- AA EnterpriseOps-Gym: **51.1%** (AA leaderboard)
- AA Harvey LAB: **93.6%** (AA leaderboard)
- terminalBenchHard: **62.9%** (AA leaderboard)
- AA Agentic Index: **51.0%** (AA)
- AA-AnalystAgent: **48.8%** (AA leaderboard)
- ApprenticeBench: **34%** (NeoCognition)

Reasoning / knowledge:

- GPQA Diamond: **92.6%** (AA; 93.2% via Vals AI)
- MMLU-Pro: **91.5%** (Vals AI)
- HLE: **55.5%** (AA leaderboard)
- AA-LCR (Long Context Reasoning): **82.3%** (AA)
- MLCR-AA: **64.4%** (AA leaderboard)
- CritPt: **28.6%** (AA)
- ARC-AGI-1: **98.50%** (ARC Prize verified results)
- ARC-AGI-2: **89.2%** (ARC Prize verified results)
- AA-Omniscience Index: **43.3%** (AA leaderboard)
- AA-Omniscience Accuracy: **65.4%** (AA)
- AA-Omniscience Hallucination Rate: **63.6%** (AA)
- AA-IFBench: **63.5%** (AA)

Coding:

- SWE-bench Verified: **95%** (Anthropic system card; 95.0% via Vals AI)
- SWE-bench Pro: **80%** (Anthropic system card)
- LiveCodeBench: **89.8%** (Vals AI)
- AA-SciCode: **61.0%** (AA leaderboard)
- AA Coding Index: **76.5%** (AA)
- FrontierSWE v2: **47.0%** (Proximal leaderboard)
- FrontierCode 1.1: **53.5%** (Cognition)
- cursorBench3.1: **70.6%** (Cursor evals)
- CursorBench 3.2: **70.5%** (Cursor evals)
- VulcanBench v3: **89.5%** (VulcanBench technical report)

Long context:

- Context window: 1M+ tokens (verified from AA and meta.json).
- AA-LCR: **82.3%** (AA leaderboard via BenchLM); no dedicated MRCR/RULER/GraphWalks retrieval-at-length result found.

Multimodal:

- MMMU-Pro: no direct score found for Claude Fable 5 specific results
- OfficeQA Pro: **57.9%** (Anthropic system card)
- Design Arena Website: **1302** (OpenRouter)

### Normalized scores (1–100)

Derived from the benchmarks above using methodology in `model-comparison.md`:

- **Tool use: 88/100.** Exceptional agentic performance across benchmarks: Terminal-Bench 2.1 84.3%, OSWorld-Verified 85%, τ²-bench 98.5%, Harvey LAB 93.6%, GDPval-AA Elo 1747. Among the top-tier agentic performers.

- **Reasoning: 85/100.** Strong reasoning: AA Intelligence Index 50, GPQA 92.6%, ARC-AGI-1 98.5%, LCR 82.3%, HLE 55.5%. However, CritPt 28.6% and Omniscience Index 43.3% indicate some reasoning weaknesses on physics and hallucination control.

- **Context window: 95/100.** 1M+ context tokens places in the 1M tier (score 95 per methodology) with verified measurement.

- **Multimodal: 70/100.** Text and image input supported with strong vision capabilities (OfficeQA Pro 57.9%), but no audio or video input.

- **Coding: 88/100.** Outstanding coding performance: SWE-bench Verified 95%, Pro 80%, LiveCodeBench 89.8%, AA Coding Index 76.5%. Among top coding models across all vendors.

- **Cost efficiency: 40/100.** $10.00/$50.00 per 1M tokens — expensive (median: ~$2.00/$10.00). Cost efficiency scored independently; not factored into Overall.

- **Overall Score: 85/100.** (88 + 85 + 95 + 70 + 88) / 5 = 85.2 → 85. Best-fit recommendation: High-intelligence agentic coding and enterprise workloads where budget permits; exceptional tool use and coding capabilities with top-tier 1M context window.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-09
- Method: public web research (Artificial Analysis model page, BenchLM.ai, Anthropic system card, ARC Prize verified results, Vals AI leaderboards, OpenRouter benchmarks); scores normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemma_4_31B.md`, using the same headings.