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

> Sources: BenchLM.ai (Overall 78.84/100, #8/887), Artificial Analysis (Intelligence Index 50, #19/225), Anthropic system card, ARC Prize, Vals AI, OpenRouter, Cognition.

Agent / tool use:

- AA Intelligence Index: 50 (#19/225, median: 26)
- BenchLM Overall Score: 78.84/100 (#8/887, 42 of 623 benchmarks)
- Terminal-Bench 2.1: 84.3% (source: Anthropic system card / Vals AI)
- OSWorld-Verified: 85% (source: Anthropic system card)
- GDPval-AA Elo: 1747 (source: Anthropic system card)
- AA Terminal-Bench 4.0: 56.1% (source: AA leaderboard)
- AA AutomationBench: 64.9% (source: AA leaderboard)
- AA Briefcase (Elo): 1564 (source: AA leaderboard)
- GDP.pdf: 31.0% (source: AA leaderboard)
- Terminal-Bench 2.0: 75.1% (source: OpenAI GPT-5.4 announcement, cross-ref BenchLM)
- Toolathlon-Verified: 73.6% (source: BenchLM)
- AutomationBench: 52.3% (source: BenchLM)
- JobBench: 61.2% (source: BenchLM)
- CyberGym: 95.1% (source: BenchLM)
- GDPval-AA: 53.8% (source: AA leaderboard)

Reasoning / knowledge:

- GPQA Diamond: 92.6% (source: AA)
- MMLU-Pro: 91.5% (source: Vals AI)
- HLE: 55.5% (source: AA leaderboard)
- AA-LCR: 83.0% (source: AA leaderboard)
- MLCR-AA: 64.4% (source: AA leaderboard)
- AA-HLE: 52.9% (source: AA leaderboard)
- AA Intelligence Index: 50 (#11/223 among reasoning models)
- AA-Omniscience Accuracy: 62.1% (source: AA model page)
- AA-IFBench: 63.5% (source: AA)
- ARC-AGI-1: 98.50% (source: ARC Prize verified results)
- ARC-AGI-2: 89.2% (source: ARC Prize verified results)

Coding:

- SWE-bench Verified: 95% (source: Anthropic system card)
- SWE-bench Pro: 80% (source: Anthropic system card)
- LiveCodeBench: 89.8% (source: Vals AI)
- AA-SciCode: 61.0% (source: AA leaderboard)
- AA Coding Index: 76.5% (source: AA)
- DeepSWE: 71.9% (source: OpenAI GPT-5.4 announcement reference)
- VulcanBench v3: 89.5% (source: VulcanBench technical report)

Multimodal:

- AA-MMMU-Pro: 86.0% (source: AA leaderboard)
- OfficeQA Pro: 57.9% (source: Anthropic system card)
- Design Arena Website: 1302 (source: OpenRouter)

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = round((Tool + Reasoning + Context + Multimodal + Coding) / 5); Cost excluded.

- **Tool use: 88/100.** Exceptional agentic performance: Terminal-Bench 2.1 84.3%, Terminal-Bench 2.0 75.1%, OSWorld-Verified 85%, GDPval-AA Elo 1747, TB-4.0 56.1%, AutomationBench 64.9%, Briefcase Elo 1564, plus Toolathlon 73.6%+, CyberGym 95.1%. Among top-tier agentic performers.
- **Reasoning: 85/100.** Strong reasoning: AA Intelligence Index 50, GPQA 92.6%, ARC-AGI-1 98.5%, AA-LCR 83.0%, HLE 55.5%, AA-HLE 52.9%. Capped by CritPt 28.6% and Omniscience Index 43.3%.
- **Context window: 95/100.** 1M+ context tokens places in the 1M tier (score 95 per methodology) with verified measurement.
- **Multimodal: 70/100.** Text and image input supported with strong vision capabilities (OfficeQA Pro 57.9%, AAA-MMMU-Pro 86.0%), but no audio or video input.
- **Coding: 88/100.** Outstanding coding: SWE-bench Verified 95%, Pro 80%, LiveCodeBench 89.8%, DeepSWE 71.9%, AA Coding Index 76.5%. Among top coding models.
- **Cost efficiency: 40/100.** $10.00/$50.00 per 1M tokens — expensive (median: $2.00/$10.00). Cost efficiency scored independently; not factored into Overall.
- **Overall Score: 85/100.** Mean of five quality dims: (88+85+95+70+88)/5 = 426/5 = 85.2, rounded down to 85. BenchLM Overall 78.84 (#8/887) and AA Intelligence Index 50 (#19/225) confirm top-tier positioning. **Best-fit recommendation:** High-intelligence agentic coding and enterprise workloads where budget permits; exceptional tool use and coding capabilities with top-tier 1M context window.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-10
- Method: public web research (Artificial Analysis model page, BenchLM.ai, Anthropic system card, ARC Prize, Vals AI, OpenRouter); scores are normalized 1–100 interpretations per model-comparison.md v4.
- Sources: Artificial Analysis model page (Intelligence Index 50, #19/225); BenchLM.ai model page (Overall 78.84/100, #8/887, 42 of 623 benchmarks); Anthropic system card; OpenAI GPT-5.4 launch blog (cross-ref benchmarks); ARC Prize verified results; Vals AI leaderboards; OpenRouter benchmarks.
- Future sources: add a new file next to this one, e.g. `Gemini_3.md`, using the same headings.

---

