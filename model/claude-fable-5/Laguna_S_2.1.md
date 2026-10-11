# Claude Fable 5 — findings by Laguna S 2.1

- Source: Anthropic (`claude-fable-5`)
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5 (Max, Opus 4.8 Fallback)
- **Short description:** Anthropic's proprietary high-intelligence reasoning model with 1M+ context, supporting text and image input with chain-of-thought extended thinking; positioned as an agentic coding and enterprise model.
- **Provider / access:** Anthropic API; 7 providers listed on AA.
- **Release / knowledge:** Released June 9, 2026.
- **IDs:** `claude-fable-5` (also known as "Max, Opus 4.8 Fallback")
- **Context window:** 1M+ tokens, verified from AA and meta.json.
- **Modalities:** Text and image input; text output; reasoning yes (extended thinking); tool calls supported.
- **Pricing (as of 2026-10-10):** $10.00 per 1M input tokens, $50.00 per 1M output tokens; cache discount 90%; $8.75 average cost per Intelligence Index task.
- **Architecture:** Proprietary; parameter count not disclosed by Anthropic.

### Raw benchmarks found

> Sources: BenchLM.ai (Overall 78.84/100, #8/887), Artificial Analysis (Intelligence Index 50, #19/225), Anthropic system card, Vals AI.

Agent / tool use:

- BenchLM Overall Score: 78.84/100 (#8/887, 42 of 623 benchmarks)
- Terminal-Bench 2.1: 84.3% (source: Vals AI leaderboard)
- τ²-bench (AA): 98.5% (source: BenchLM)
- TB-3.0: 34.0% (source: BenchLM)
- terminalBenchHard: 62.9% (source: Vals AI leaderboard)
- GDPval-AA (wins or ties): 46.2% (source: BenchLM)
- GDPval-AA (Elo): 1747 (source: AA leaderboard)
- OSWorld-Verified: 85% (source: BenchLM)
- CyberGym: 95.1% (source: BenchLM)
- GDP.pdf: 31.0% (source: BenchLM)
- AutomationBench: 52.3% (source: BenchLM)
- JobBench: 61.2% (source: BenchLM)
- Toolathlon-Verified: 73.6% (source: BenchLM)
- AA Intelligence Index: 50 (#19/225, median: 26)

Reasoning / knowledge:

- GPQA Diamond: 92.6% (source: AA leaderboard via BenchLM)
- AA Intelligence Index: 50 (source: AA model page, v4.3.2)
- HLE: 55.5% (source: AA leaderboard via BenchLM)
- AA-LCR: 83.0% (source: AA leaderboard via BenchLM)
- AA-HLE: 52.9% (source: AA leaderboard via BenchLM)
- AA-IFBench: 63.5% (source: AA model page)
- AA-Omniscience Accuracy: 62.1% (source: AA model page)
- MLCR-AA: 64.4% (source: AA leaderboard via BenchLM)
- ARC-AGI-1: 98.50% (source: ARC Prize verified results)
- ARC-AGI-2: 89.2% (source: ARC Prize verified results)
- MMLU-Pro: 91.5% (source: AA model page)
- CritPt: 28.6% (source: BenchLM)

Coding:

- SWE-bench Verified: 95% (source: Anthropic system card)
- SWE-bench Pro: 80% (source: Anthropic system card)
- LiveCodeBench: 89.8% (source: AA model page)
- AA-SciCode: 61.0% (source: AA leaderboard via BenchLM)
- AA Coding Index: 76.5% (source: AA model page)
- DeepSWE: 71.9% (source: BenchLM)
- VulcanBench v3: 89.5% (source: VulcanBench technical report)

Multimodal:

- AA-MMMU-Pro: 86.0% (source: AA leaderboard via BenchLM)
- OfficeQA Pro: 57.9% (source: Anthropic system card)
- Design Arena Website: 1302 (source: OpenRouter)

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = half-up mean of 5 quality dims (cost excluded), tolerance 0.51.

- **Tool use: 98/100.** τ²-bench 98.5% (≥90% frontier threshold), TB-2.1 84.3%, OSWorld-Verified 85%, CyberGym 95.1%, GDPval-AA Elo 1747, GDPval-AA wins-or-ties 46.2%, AA Intelligence Index 50, GDP.pdf 31.0%, AutomationBench 52.3%, Toolathlon 73.6%. Exceptional agentic performance cluster; TB-3.0 34.0% and terminalBenchHard 62.9% below frontier cap.
- **Reasoning: 85/100.** GPQA Diamond 92.6%, AA-HLE 52.9% (above 40% frontier), HLE 55.5%, AA-LCR 83.0%, AA Intelligence Index 50, ARC-AGI-1 98.50%, MMLU-Pro 91.5%, AA-IFBench 63.5%, Omniscience Accuracy 62.1%. Capped by CritPt 28.6% and MLCR-AA 64.4%.
- **Context window: 95/100.** 1M+ tokens verified; placed in the ≥1M tier per methodology (score 95, with retrieval ≥98% at 512K+ needed for 100; no such curve published for this model).
- **Multimodal: 70/100.** Text and image input supported with strong vision (AA-MMMU-Pro 86.0%, OfficeQA Pro 57.9%, Design Arena 1302), but no audio or video input.
- **Coding: 88/100.** SWE-bench Verified 95%, SWE-bench Pro 80%, LiveCodeBench 89.8%, DeepSWE 71.9%, AA Coding Index 76.5%, AA-SciCode 61.0%, VulcanBench 89.5%. Among top coding models; capped by no SWE-bench Pro above 85% threshold.
- **Cost efficiency: 40/100.** $10.00/$50.00 per 1M tokens — expensive (median: $2.00/$10.00). Cost efficiency scored independently; not factored into Overall.
- **Overall Score: 87/100.** Half-up mean: (98+85+95+70+88)/5 = 436/5 = 87.2 → 87. BenchLM Overall 78.84 (#8/887) and AA Intelligence Index 50 (#19/225) confirm top-tier positioning. **Best-fit recommendation:** High-intelligence agentic coding and enterprise workloads where budget permits; exceptional tool use (τ²-bench 98.5%) and coding capabilities with top-tier 1M context window.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-10
- Method: public web research (BenchLM.ai model page for τ²-bench 98.5%, TB-3.0 34.0%, GDPval, TB-2.1 84.3%, terminalBenchHard 62.9%; Vals AI leaderboard for terminalBenchHard; AA model page for Intelligence Index 50, GPQA, LCR, coding; ARC Prize; VulcanBench; Anthropic system card). Scores are normalized 1–100 interpretations per model-comparison.md v4.
- Sources: BenchLM.ai model page (Overall 78.84/100, #8/887, 42 of 623 benchmarks); AA model page (Intelligence Index 50, #19/225, GPQA 92.6%, AA-HLE 52.9%, Omniscience 62.1%, LiveCodeBench 89.8%); Vals AI leaderboard (terminalBenchHard 62.9%); ARC Prize verified results; VulcanBench technical report.
- Future sources: add a new file next to this one, e.g. `Claude_Fable_5_1.md`, using the same headings.

---
