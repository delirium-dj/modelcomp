# Claude Fable 5 — findings by Laguna S 2.1

- Source: Anthropic (`claude-fable-5`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5 (Max, Opus 4.8 Fallback)
- **Short description:** Anthropic's proprietary high-intelligence reasoning model with 1M+ context, supporting text and image input with chain-of-thought extended thinking; positioned as an agentic coding and enterprise model. Ranks #6 of 954 on BenchLM.
- **Provider / access:** Anthropic API; 7 providers listed on AA.
- **Release / knowledge:** Released June 9, 2026.
- **IDs:** `claude-fable-5` (also known as "Max, Opus 4.8 Fallback")
- **Context window:** 1M+ tokens, verified from AA and meta.json.
- **Modalities:** Text and image input; text output; reasoning yes (extended thinking); tool calls supported.
- **Pricing (as of 2026-10-10):** $10.00 per 1M input tokens, $50.00 per 1M output tokens; cache discount 90%; $8.75 average cost per Intelligence Index task.
- **Architecture:** Proprietary; parameter count not disclosed by Anthropic.

### Raw benchmarks found

> Sources: BenchLM.ai (`https://benchlm.ai/models/claude-fable-5`, overall 81.27, rank #6/954, 45 of 639 benchmarks); Artificial Analysis; Anthropic system card; Vals AI; ARC Prize; Epoch AI. Re-verified 2026-10-16.

Agent / tool use:

- BenchLM Overall Score: 81.27/100 (#6/954, 45 of 639 benchmarks)
- Terminal-Bench 2.1: 84.3% (source: Vals AI leaderboard)
- τ²-bench (AA): 98.5% (source: BenchLM)
- TB-3.0: 34.0% (source: BenchLM)
- Terminal-Bench 3.0: 42.7% (source: BenchLM)
- terminalBenchHard: 62.9% (source: Vals AI leaderboard)
- GDPval (normalized): 55.5% (source: BenchLM; revised up from 46.2%)
- GDPval (Elo): 1747 (source: AA leaderboard)
- OSWorld-Verified: 85% (source: BenchLM)
- aaTB21: 91.4% (source: BenchLM)
- Toolathlon-Verified: 77.8% (source: BenchLM; revised up from 73.6%)
- AA Agentic Index: 51.0% (source: BenchLM)
- AA Intelligence Index: 49.6 (#, median: 26) (source: AA model page, v4.3.2)

Reasoning / knowledge:

- GPQA Diamond: 92.6% (source: AA leaderboard via BenchLM)
- GPQA (Vals): 93.2% (source: BenchLM)
- AA Intelligence Index: 49.6 (source: AA model page, v4.3.2)
- HLE: 64.7% (source: Anthropic system card; revised up from 55.5%)
- AA-HLE: 54.9% (source: AA leaderboard via BenchLM)
- AA-LCR: 82.3% (source: AA leaderboard via BenchLM)
- AA-I-FBench: 63.5% (source: AA model page)
- AA-MMLU-Pro: 89.8% (source: AA model page)
- AA-Omniscience Accuracy: 62.1% (source: AA model page)
- MLCR-AA: 66.7% (source: AA leaderboard via BenchLM)
- MMLU-Pro (Vals): 91.5% (source: BenchLM)
- GMMLU: 92.5% (source: BenchLM)
- MILU: 92.1% (source: BenchLM)
- INCLUDE: 89.8% (source: BenchLM)
- ARC-AGI-1: 98.50% (source: ARC Prize verified results)
- ARC-AGI-2: 89.2% (source: ARC Prize verified results)
- FrontierMath v2 (Tiers 1-3): 87.018% (source: Epoch AI)
- FrontierMath v2 (Tier 4): 90.200% (source: Epoch AI)
- CritPt: 28.6% (source: BenchLM)

Coding:

- SWE-bench Verified: 95% (source: Anthropic system card)
- SWE-bench (Vals): 95.0% (source: BenchLM)
- SWE Multilingual: 89.1% (source: BenchLM)
- SWE-bench Pro: 80% (source: Anthropic system card)
- LiveCodeBench (Vals): 89.8% (source: BenchLM)
- AA Coding Index: 76.5% (source: AA model page)
- AA-SciCode: 61.0% (source: AA leaderboard via BenchLM)
- DeepSWE: 71.9% (source: BenchLM)
- AA EnterpriseOps-Gym: 51.1% (source: BenchLM)
- ProgramBench: 93.0% (source: BenchLM)
- VulcanBench CII v1: 96.4% (source: VulcanBench technical report)

Multimodal:

- AA-MMMU-Pro: 86.0% (source: AA leaderboard via BenchLM)
- AA-MMMU-Pro (revised): 84.7% (source: BenchLM)
- OfficeQA Pro: 57.9% (source: Anthropic system card)
- Design Arena Website: 1302 (source: OpenRouter)
- SpatialBench: 72.5% (source: BenchLM)

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = half-up mean of 5 quality dims (cost excluded), tolerance 0.51.

- **Tool use: 98/100.** τ²-bench 98.5% (≥90 frontier threshold), TB-2.1 84.3%, OSWorld-Verified 85%, GDPval-AA normalized 55.5% (increased from 46.2%), GDPval-AA Elo 1747 (below ~1750 frontier), aaTB21 91.4%, Toolathlon-Verified 77.8%, AA Harvey LAB 93.6%, TB-2.1 (Vals) 80.5%, AA Agentic Index 51.0%. Exceptional agentic cluster led by τ²-bench 98.5%. Capped by GDPval-AA Elo below 1750 frontier, TB-3.0 34.0%, ApprenticeBench 34%, Terminal-Bench 3.0 42.7%.
- **Reasoning: 86/100.** (Revised up from 85.) GPQA Diamond 92.6% (≥90 frontier), GPQA (Vals) 93.2%, HLE 64.7% (increased from 55.5%, above 40% frontier), AA-HLE 54.9%, AA-LCR 82.3%, AA Intelligence Index 49.6% (decreased from 50, below ~60 frontier ref), ARC-AGI-1 98.50%, MMLU-Pro (Vals) 91.5%, AA-MMLU-Pro 89.8%, GMMLU 92.5%, MILU 92.1%, INCLUDE 89.8%, AA-I-FBench 63.5%, FrontierMath v2 (Tiers 1-3) 87.018%, FrontierMath v2 (Tier 4) 90.200% (NEW, ≥90 frontier!). Capped by CritPt 28.6%, Intelligence Index 49.6.
- **Context window: 95/100.** 1M+ tokens verified; placed in the ≥1M tier per methodology (score 95, with retrieval ≥98% at 512K+ needed for 100; no such curve published for this model).
- **Multimodal: 70/100.** Text and image input supported with strong vision (AA-MMMU-Pro 86.0%, OfficeQA Pro 57.9%, Design Arena 1302), but no audio or video input.
- **Coding: 89/100.** (Revised up from 88.) SWE-bench Verified 95%, SWE-bench (Vals) 95.0% (NEW), SWE Multilingual 89.1%, SWE-bench Pro 80%, LiveCodeBench (Vals) 89.8%, DeepSWE 71.9%, AA Coding Index 76.5%, AA-SciCode 61.0%, VulcanBench 89.5% (NEW), VulcanBench CII v1 96.4% (NEW, elite), ProgramBench 93.0%, CursorBench 3.2 70.5%. Capped by DeepSWE 71.9% (below 74% frontier), SWE-bench Pro 80% (below 85% threshold), FrontierSWE v2 47.0% (NEW, low).
- **Cost efficiency: 40/100.** $10.00/$50.00 per 1M tokens — expensive (median: $2.00/$10.00). Cost efficiency scored independently; not factored into Overall.
- **Overall Score: 88/100.** (Revised up from 87.) Half-up mean: (98+86+95+70+89)/5 = 438/5 = 87.6 → 88. BenchLM Overall 81.27 (#6/954) confirms top-tier positioning. **Best-fit recommendation:** High-intelligence agentic coding and enterprise workloads where budget permits; exceptional tool use (τ²-bench 98.5%) and coding capabilities (SWE-bench Verified 95%, VulcanBench CII 96.4%) with top-tier 1M context window.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1:free)** — 2026-10-16 (UTC)
- Method: public web research (BenchLM.ai model page for τ²-bench 98.5%, TB-3.0 34.0%, GDPval-AA 55.5% normalized/1747 Elo, TB-2.1 84.3%, OSWorld-Verified 85%, terminalBenchHard 62.9%; Vals AI leaderboard for terminalBenchHard; AA model page for Intelligence Index 50, GPQA 92.6%, AA-HLE 52.9%, Omniscience 62.1%, LiveCodeBench 89.8%; ARC Prize; VulcanBench; Anthropic system card). Scores are normalized 1–100 interpretations per model-comparison.md v4.
- Sources: BenchLM.ai model page (Overall 81.27/100, #6/954, 45 of 639 benchmarks); AA model benchmarks; Vals AI leaderboard; ARC Prize verified results; VulcanBench technical report; Anthropic system card.
- Key revisions from Oct 10 to Oct 16 re-verification: BenchLM overall increased 78.84→81.27 (#8/887→#6/954, benchmarks 42→45 as model pool grew from 887 to 954). GDPval-AA (normalized) increased 46.2%→55.5%; AA Intelligence Index 50→49.6%; HLE 55.5%→64.7% (corrected from Anthropic system card); CritPt 17.7%→28.6%; GPQA Diamond 92.6% confirmed; new benchmarks: FrontierMath v2 (87.018%/90.200%), GMMLU 92.5%, MILU 92.1%, INCLUDE 89.8%, AA-I-FBench 63.5%, VulcanBench CII v1 96.4%, SWE-bench (Vals) 95.0%, AA AutomationBench 59.4%, AA EnterpriseOps-Gym 51.1%, HealthBench suite, BioMysteryBench, SpatialBench, Protein benchmarks, RiemannBench, ArXivMath, Gray Swan IPI, INCLUDE, AA-MMMU-Pro 84.7%, AA HLE 54.9%, GMMLU, MILU. Normalized scores revised: Tool 98→98 (GDPval normalized improved but Elo still below frontier), Reasoning 85→86 (FrontierMath v2 90.200% + HLE 64.7%), Coding 88→89 (VulcanBench CII 96.4% + SWE-bench (Vals) 95.0%), Overall 87→88.

---
