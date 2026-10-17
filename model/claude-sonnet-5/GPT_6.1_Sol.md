# Claude Sonnet 5 — findings by GPT 6.1 Sol

- Source: Anthropic / `claude-sonnet-5`
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** Claude Sonnet 5
- **Short description:** Agent-focused Sonnet approaching selected Opus4.8 tasks at lower price; active legacy, not Sonnet5.5 [S1,S3].
- **Provider / access:** Claude Messages API, Bedrock, Google Cloud, Foundry and Claude Platform on AWS. Retirement not sooner than June30,2027 on Anthropic-operated platforms [S1].
- **Release / knowledge:** June30,2026; January2026 reliable/training cutoff [S1].
- **IDs:** `claude-sonnet-5`, Bedrock `anthropic.claude-sonnet-5`; consumer Free plan access is not a $0 API route [S1,S3].
- **Context window:** 1M, 128K synchronous output, 300K Message Batches beta [S1].
- **Modalities:** Text/image input, text output, file/tools and adaptive thinking on by default/high effort. Nondefault temperature/top_p/top_k rejected with400 [S1].
- **Pricing (as of 2026-10-16):** $2 input/$10 output per million, cache read $0.20, five-minute/hour writes $2.50/$4, batch half. August10 made introductory rates permanent; planned $3/$15 never took effect [S1,S3].
- **Architecture:** Proprietary; undisclosed size. New tokenizer may use 1.0–1.35× tokens versus previous Sonnet for same input [S3].

### Raw benchmarks found
Agent / tool use:
- Vals current max/128K default: TB4 **10.61% ±1.51**, finance v2 **53.91% ±0.52**, legal-agent **5.00% ±1.65**, SRE **0.38% ±0.38**, SkillsBench **46.48% ±4.49** [S2]. Display temperature1 conflicts with primary nondefault sampling prohibition; dated note says default temperature, do not prescribe copying UI field [S1,S2].
- Historical Vals TB2.1 **74.53% at high**, three runs71.9–78.7. Google comparative TB2.1 **80.4%**, GDPval-AA v2 **1607 Elo**, OSWorld **81.2%** are separate operator/setup [S2,S4]. Tau3/Tau2/Claw-Eval/MCP numeric result not verified.

Reasoning / knowledge:
- Vals GPQA **88.89% ±2.22**, MMLU Pro **87.55% ±0.37**, ProofBench v1.1 **77% ±4.23**, current index **51.90% ±1.10 (#24/49)** [S2]. Historical June Index **68.61%/#3**, not present leadership.
- HLE/CritPt/LCR/MLCR/Omniscience/current AA exact values not verified; updated Sonnet4.6 HLE in launch footnotes is not Sonnet5's score [S3].

Coding:
- Google comparative SWE-Pro **63.2%**, DeepSWE v1.1 **54%**, MLE-Bench **66.9%** [S4].
- Vals SWE **79.60% ±1.80**, LiveCodeBench **82.43% ±1.09**, Vibe v1.1 **81.33% ±3.05**, Vibe1–100 **13.82% ±2.98**, migration **44.39% ±4.25**, ProgramBench **0%**, terminal-science **5.71% ±2.79** [S2]. Exact SciCode not verified.

Long context / multimodal:
- Official1M; Google GDM-MRCR v2 8-needle **71.6% at128K average**, no exact1M retrieval figure [S1,S4].
- Vals MMMU Pro **83.01% ±0.90**; Google CharXiv **77% no tools /88.3% tools** [S2,S4]. No native audio/video/media output verified.

### Evidence comparison and research trail
Three fresh Google queries: `Claude Sonnet 5 official model`, `Claude Sonnet 5 independent benchmark`, `Claude Sonnet 5 review pricing limitations`; all interstitials. Direct exact primary card/launch and independent Vals read; Google3.6 card read during this batch [S4]. Launch main benchmark image not treated as extracted numeric evidence. June Vals subset SWE **75.49%**/Vibe **86.90%** and later full results79.60/81.33 reflect snapshots/subsets, not averaged. Original BrowseComp chart corrected to10M cumulative tool/compaction budget, not10M native context [S3]. Primary rates now permanent despite older comparison charts calling them temporary. Vals **$13.69/index test /54m15s** counters assuming cheap tokens always cheap tasks. It reports15/858 CorpFin refusals mostly flagged bio; no universal refusal rate inferred [S2].

### Normalized scores (1–100)
- **Tool use: 82/100.** Useful finance/terminal/OSWorld evidence, capped by current TB4/SRE/legal completion [S2,S4].
- **Reasoning: 86/100.** Strong ProofBench and useful GPQA/MMLU, capped by current index and missing harder-suite corroboration [S2].
- **Context window: 95/100.** Official1M, no verified perfect-retrieval bonus [S1,S4].
- **Multimodal: 80/100.** Good image/document reasoning, no native audio/video or media output [S1,S2].
- **Coding: 88/100.** Strong Vibe/conventional SWE/DeepSWE, capped by ProgramBench/scientific-terminal weaknesses [S2,S4].
- **Cost efficiency: 73/100.** Permanent$2/$10, caching/batch attractive; task-token usage and tokenizer changes constrain savings [S1–S3].
- **Overall Score: 86/100.** (82 + 86 + 95 + 80 + 88) / 5 = 86.2 → 86. Best fit supervised value-oriented app-building/document workflows; cost excluded.

### Sources
- [S1] https://platform.claude.com/docs/en/models/sonnet-5/overview — exact current primary card/rates/parameters.
- [S2] https://www.vals.ai/models/anthropic_claude-sonnet-5 — independent current/historical setup and results.
- [S3] https://www.anthropic.com/news/claude-sonnet-5 — primary price/chart corrections, tokenizer and deployment context.
- [S4] https://deepmind.google/models/model-cards/gemini-3-6-flash/ — primary cross-vendor comparison, directly inspected in this batch.

---
## Signature
- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-16
- Method: Independent web research, three search attempts and direct primary/evaluator inspection; parameter, rate, metric and snapshot discrepancies explicit. Scores are normalized interpretations, not official vendor scores.
- Future sources: add an independently signed file next to this one using the same headings.
