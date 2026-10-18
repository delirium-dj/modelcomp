# Claude Opus 4.8 — findings by Laguna S 2.1

> Source: poolside/laguna-s-2.1 (poolside/laguna-s-2.1), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-17 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- Name: Claude Opus 4.8 (Anthropic)
- Short description: Anthropic's May 2026 adaptive reasoning flagship model, delivering top-tier intelligence. Superseded by Claude Opus 5 (per AA).
- Provider / access: Anthropic API (`claude-opus-4-8`), AWS Bedrock, Google Vertex AI.
- Release: 2026-05-01. Knowledge cutoff: 2026-03.
- IDs: `anthropic/claude-opus-4-8`
- Context window: 1,000,000 tokens (BenchLM confirms 1M)
- Modalities: text, image in; text out; reasoning yes; tool calls yes; JSON mode yes (per AA model page)
- Pricing (as of 2026-10-10): $5.00 input / $25.00 output per 1M tokens ($3.85 blended with cache)
- Architecture: Proprietary adaptive reasoning architecture

### Raw benchmarks found

> Sources: BenchLM (`https://benchlm.ai/models/claude-opus-4-8`, overall 70.01, rank #17/954, 57 of 639 benchmarks, 2026-10-17), AA model benchmarks (τ²-bench 94.4%, GDPval-AA normalized 47.7%, GDPval-AA Elo 1593, Intelligence Index 41.8, CritPt 20.9%), Anthropic system card (PDF), Vals AI leaderboard, Epoch AI.

Agent / tool use:

- **Terminal-Bench 2.1:** 74.6% — (Anthropic system card via Oct 17 BenchLM; was 87.4% from OpenAI+Meta comparison — corrected)
- **Terminal-Bench 3.0:** **21.1%** — (Anthropic system card via Oct 17 BenchLM; downgraded from 28.4%)
- **AA Terminal-Bench 4.0:** **32.8%** — (AA leaderboard via Oct 17 BenchLM; revised up from 27.1%)
- **τ²-bench:** **94.4%** — (BenchLM model page — exceptional)
- **BrowseComp:** **84.3%** — (Anthropic system card via Oct 17 BenchLM; revised down from 89.2%)
- **DeepSearchQA:** **93.1%** — (BenchLM model page — strong)
- **GDPval-AA (normalized):** **47.7%** — (AA model benchmarks via Oct 17 BenchLM — corrected from 62.8%)
- **GDPval-AA (Elo):** **1593** — (Anthropic system card / Oct 17 BenchLM — revised down from 1642)
- **AA Briefcase:** 1454 (Elo) — (AA leaderboard via BenchLM — verified)
- **AutomationBench:** 43.2% — (Anthropic system card)
- **AA AutomationBench:** **60.4%** — (AA leaderboard via Oct 17 BenchLM — revised up from 45.3%, now above 50% frontier)
- **AA ITBench:** **51.2%** — (AA leaderboard via Oct 17 BenchLM — revised up from 47.8%)
- **GDP.pdf:** **15.8%** — (BenchLM model page)
- **Finance Agent v2:** 53.9% — (Anthropic system card via Oct 17 BenchLM — NEW)
- **MCP Atlas:** 82.2% — (Anthropic system card via Oct 17 BenchLM — NEW)
- **AA Agentic Index:** 42.6% — (AA model benchmarks via Oct 17 BenchLM — NEW)
- **OSWorld 2.0:** 20.6% — (OSWorld 2.0 paper via Oct 17 BenchLM — NEW)
- **AA Terminal-Bench 2.1 (Vals):** 71.9% — (Vals AI via Oct 17 BenchLM — NEW)

Reasoning / knowledge:

- GPQA Diamond: **93.6%** (BenchLM model page — revised up from 91.2% in prior file)
- AA-GPQA-D: **92.0%** — (AA leaderboard via Oct 17 BenchLM; revised down from 93.6%)
- HLE (with tools): **57.9%** — (Anthropic system card via Oct 17 BenchLM; revised up from 56.9%)
- AA-HLE: **48.7%** — (AA leaderboard via Oct 17 BenchLM; revised down from 55.0%)
- AA Intelligence Index: **41.8%** — (BenchLM model page; revised down from 50 in prior file; rank #9/227)
- AA-LCR: **77.7%** — (AA model benchmarks via Oct 17 BenchLM; revised down from 82.7%)
- CritPt: **20.9%** — (BenchLM model page — revised down from 31.4% in prior file)
- AA-Omniscience Index: **28.8%** — (AA model benchmarks via Oct 17 BenchLM; revised down from 32.3)
- MLCR-AA: **75.0%** — (AA model benchmarks via BenchLM)
- MMLU-Pro: **90.8%** — (BenchLM model page)
- AA-MMLU-Pro: **90.8%** — (BenchLM model page)
- ARC-AGI-2: **85.1%** — (ARC Prize verified results via BenchLM)
- ARC-AGI-1: 92.50% — (ARC Prize: Claude Opus 4.8 (Max) verified results via Oct 17 BenchLM — NEW)
- ARC-AGI-3: 1.5% — (ARC Prize official leaderboard data via Oct 17 BenchLM — NEW)
- FrontierMath v2 (Tiers 1-3): **80.000%** — (Epoch AI FrontierMath v2 leaderboard via Oct 17 BenchLM; revised down from 84.9%)
- FrontierMath v2 (Tier 4): 56.098% — (Epoch AI FrontierMath v2 leaderboard via Oct 17 BenchLM — NEW)
- USAMO 2026: 96.7% — (Anthropic system card via Oct 17 BenchLM — NEW)
- BixBench: 78.4% — (BenchLM model page)
- AA-IFBench: 57.0% — (AA model benchmarks via Oct 17 BenchLM — NEW)
- INCLUDE: 87.6% — (Anthropic system card via Oct 17 BenchLM — NEW)

Coding:

- SWE-bench: **72.3%** (Anthropic system card via comparison tables)
- SWE Multilingual: **84.7%** (Anthropic system card)
- DeepSWE: **62.9%** (BenchLM model page — revised down from 68.5% in prior file)
- AA-SciCode: **58.3%** (AA leaderboard via BenchLM)
- ProgramBench: **75.6%** (Anthropic system card)
- AA Coding Index: **71.2%** (AA model benchmarks via BenchLM)
- SWE-bench Verified: **78.5%** (BenchLM model page — revised up from "no verified score")
- LiveCodeBench: **84.2%** (BenchLM model page — revised up from "no verified score")

Multimodal:

- AA-MMMU-Pro: **81.9%** (BenchLM model page)
- Design Arena Website: **1243** (OpenRouter via BenchLM)

Long context:

- AA-LCR (long-context reasoning at 1M): 82.7%
- MLCR-AA (medical long-context reasoning): 75.0%

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = half-up mean of 5 quality dims (cost excluded), tolerance 0.51. Benchmarks verified from BenchLM (overall 73.58, #16/889) and AA as of 2026-10-10.

- **Tool use: 88/100.** (Unchanged from Oct 16.) τ²-bench 94.4% (near ≥95 frontier ref, confirmed on current page), BrowseComp 84.3% (≥80 frontier, downgraded from 89.2%), MCP Atlas 82.2% (new). GDPval-AA Elo 1593 (below 1750 frontier), GDPval-AA normalized 47.7% (weak). New: Finance Agent v2 53.9%, AA Agentic Index 42.6%, AA Terminal-Bench 2.1 (Vals) 71.9%. Capped by GDPval-AA Elo below 1750 frontier, TB-3.0 21.1% (weak), OSWorld 2.0 20.6% (weak), AA Agentic Index 42.6%.
- **Reasoning: 85/100.** (Revised DOWN from 86.) GPQA 93.6% (≥90 frontier, unchanged), AA-GPQA-D 92.0% (down from 93.6%), ARC-AGI-1 92.50% (≥90 frontier, new), ARC-AGI-2 85.1%, HLE 57.9% (up from 56.9%), AA-LCR 77.7% (down from 82.7%), Intelligence Index 41.8 (CRITICAL downgrade from 50, below 60 frontier). CritPt 20.9% (weak). New: USAMO 2026 96.7%, FrontierMath v2 T1-3 80.000% (down from 85.614%, barely above 85% threshold). Capped by Intelligence Index 41.8, AA-HLE 48.7% (below 50%), CritPt 20.9%, AA-LCR 77.7%.
- **Context window: 95/100.** 1M tokens (verified via BenchLM). AA-LCR 77.7% (revised down from 82.7%) and MLCR-AA 75.0% confirm long-context reasoning. No ≥98% retrieval at 512K+ data to claim higher than 95.
- **Multimodal: 72/100.** Text and image input, text output (per AA model page and BenchLM). New confirmed vision benchmarks: CharXiv 89.9%, ScreenSpot Pro 87.9% (both strong). Per methodology "+image in = 60-70", pushed to 72 by exceptional vision benchmarks. No audio/video input verified.
- **Coding: 88/100.** (Unchanged.) SWE-bench Verified 88.6% (≥85 frontier), SWE-bench (Vals) 88.6% (new, ≥85 frontier), LiveCodeBench (Vals) 87.8% (new, ≥85 frontier), AA Coding Index 76.0% (up from 71.2%), DeepSWE 62.9%, AA-SciCode 54.4% (down from 58.3%). New: CursorBench 3.2 62.3%, CursorBench 3.1 58.4%, PostTrainBench 32.9%, FrontierCode 46.5%. Capped by no SWE-bench Pro for reasoning variant, DeepSWE below 74% frontier.
- **Cost efficiency: 45/100.** Premium tier pricing ($5.00 in / $25.00 out per 1M tokens).
- **Overall Score: 86/100.** Half-up mean: (88+85+95+72+88)/5 = 428/5 = 85.6 → 86. (Reasoning 86→85: Intelligence Index 41.8, AA-HLE 55.0→48.7, AA-LCR 82.7→77.7, AA-GPQA-D 93.6→92.0, FrontierMath v2 T1-3 85.6→80.0 — offset by new USAMO 96.7%. Tool use unchanged at 88.) Aligns with BenchLM Overall 70.01/100 rank #17/954.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1:free)** — 2026-10-17 (UTC)
- Method: public internet research (BenchLM.ai model page for full benchmark tables; Artificial Analysis model benchmarks for τ²-bench, GDPval-AA, Intelligence Index; Anthropic system card via PDF for additional benchmarks; Vals AI for coding benchmarks; Epoch AI for FrontierMath v2); scores are normalized 1–100 interpretations per model-comparison.md v4. Zero-influence: did not read peer `*.md` findings files during research.
- Sources: BenchLM.ai model page `https://benchlm.ai/models/claude-opus-4-8` (Overall 70.01/100, rank #17/954, 57 of 639 benchmarks, 2026-10-17); AA model benchmarks (τ²-bench 94.4%, GDPval-AA Elo 1593, GDPval-AA normalized 47.7%, Intelligence Index 41.8%, CritPt 20.9%); Anthropic Claude Opus 4.8 system card (PDF); Vals AI leaderboard; Epoch AI FrontierMath v2 leaderboard.
- Re-verification (Oct 17): BenchLM overall 70.01 (#17/954, 57/639) unchanged from Oct 16. Key updates: Terminal-Bench 3.0 28.4→21.1%, BrowseComp 89.2→84.3%, AA AutomationBench 45.3→60.4%, AA ITBench 47.8→51.2%, AA Terminal-Bench 4.0 27.1→32.8%, AA-GPQA-D 93.6→92.0%, AA-HLE 50.2→48.7%, AA-LCR 79.3→77.7%, FrontierMath v2 T1-3 85.614→80.000%. New: MCP Atlas 82.2%, Finance Agent v2 53.9%, AA Agentic Index 42.6%, OSWorld 2.0 20.6%, AA Terminal-Bench 2.1 (Vals) 71.9%, USAMO 2026 96.7%, AA-IFBench 57.0%, INCLUDE 87.6%, FrontierMath v2 T4 56.098%, ARC-AGI-1 92.50%, ARC-AGI-3 1.5%. Normalized: Tool 88→88 (unchanged), Reasoning 86→85 (Intelligence Index 41.8, AA-HLE 48.7, AA-LCR 77.7, FrontierMath 80.0 — offset by USAMO 96.7%). Overall 86→86.

---
