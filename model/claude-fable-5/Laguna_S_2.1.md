# Claude Fable 5 — findings by Laguna S 2.1

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: Anthropic (`claude-fable-5`)
- Date: 2026-10-08 (UTC)
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
- **Pricing (as of 2026-10-08):** $10.00 per 1M input tokens, $50.00 per 1M output tokens; cache discount 90%; $8.75 average cost per Intelligence Index task.
- **Architecture:** Proprietary; parameter count not disclosed by Anthropic.

### Raw benchmarks found

> Sources: BenchLM.ai (42 of 623 benchmarks, Overall 78.84/100, #8/887), Artificial Analysis (Intelligence Index 50, #19/225), Anthropic system card, ARC Prize, Vals AI, OpenRouter, Cognition.

Agent / tool use:

- Artificial Analysis Intelligence Index (**AA**): 50 (#19/225, median: 26)
- BenchLM Overall Score: 78.84/100 (#8/887, 42 of 623 benchmarks)
- Terminal-Bench 3.0: 34.0% (source: FrontierBench leaderboard)
- Terminal-Bench 2.1: 84.3% (source: Anthropic system card / Vals AI)
- OSWorld-Verified: 85% (source: Anthropic system card)
- GDPval-AA Elo: 1747 (source: Anthropic system card)
- τ²-bench: 98.5% (source: AA leaderboard)
- AA EnterpriseOps-Gym: 51.1% (source: AA leaderboard)
- AA Harvey LAB: 93.6% (source: AA leaderboard)
- terminalBenchHard: 62.9% (source: AA leaderboard)
- AA Agentic Index: 51.0% (source: AA)
- AA-AnalystAgent: 48.8% (source: AA leaderboard)
- ApprenticeBench: 34% (source: NeoCognition)

Reasoning / knowledge:

- GPQA Diamond: 92.6% (source: AA; 93.2% via Vals AI)
- MMLU-Pro: 91.5% (source: Vals AI)
- HLE: 55.5% (source: AA leaderboard)
- AA-LCR (Long Context Reasoning): 82.3% (source: AA)
- MLCR-AA: 64.4% (source: AA leaderboard)
- CritPt: 28.6% (source: AA)
- ARC-AGI-1: 98.50% (source: ARC Prize verified results)
- ARC-AGI-2: 89.2% (source: ARC Prize verified results)
- AA-Omniscience Index: 43.3% (source: AA leaderboard)
- AA-Omniscience Accuracy: 65.4% / Hallucination Rate: 63.6% (source: AA)
- AA-IFBench: 63.5% (source: AA)

Coding:

- SWE-bench Verified: 95% (source: Anthropic system card; 95.0% via Vals AI)
- SWE-bench Pro: 80% (source: Anthropic system card)
- LiveCodeBench (Vals): 89.8% (source: Vals AI)
- AA-SciCode: 61.0% (source: AA leaderboard)
- AA Coding Index: 76.5% (source: AA)
- FrontierSWE v2: 47.0% (source: Proximal leaderboard)
- FrontierCode 1.1: 53.5% (source: Cognition)
- cursorBench3.1: 70.6% (source: Cursor evals)
- CursorBench 3.2: 70.5% (source: Cursor evals)
- VulcanBench v3: 89.5% (source: VulcanBench technical report)

Long context:

- Context window: 1M+ tokens (verified from AA and meta.json).
- MRCR: no direct benchmark score found; AA-LCR 82.3% serves as long-context reasoning proxy.

Multimodal:

- MMMU-Pro: no direct score found for Claude Fable 5 specific results
- OfficeQA Pro: 57.9% (source: Anthropic system card)
- Design Arena Website: 1302 (source: OpenRouter)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`.

- **Tool use: 88/100.** Exceptional agentic performance across all benchmarks: Terminal-Bench 2.1 84.3%, OSWorld-Verified 85%, τ²-bench 98.5%, Harvey LAB 93.6%, GDPval-AA Elo 1747. Among the top-tier agentic performers.
- **Reasoning: 85/100.** Strong reasoning: AA Intelligence Index 50, GPQA 92.6%, ARC-AGI-1 98.5%, LCR 82.3%, HLE 55.5%. However, CritPt 28.6% and Omniscience Index 43.3% indicate some reasoning weaknesses on physics and hallucination control.
- **Context window: 95/100.** 1M+ context tokens places in the 1M tier (score 95 per methodology) with verified measurement.
- **Multimodal: 70/100.** Text and image input supported with strong vision capabilities (OfficeQA Pro 57.9%), but no audio or video input. Score reflects partial multimodal coverage.
- **Coding: 88/100.** Outstanding coding performance: SWE-bench Verified 95%, Pro 80%, LiveCodeBench 89.8%, AA Coding Index 76.5%. Among top coding models across all vendors.
- **Cost efficiency: 40/100.** $10.00/$50.00 per 1M tokens — expensive (median: $2.00/$10.00). Cost efficiency scored independently; not factored into Overall.
- **Overall Score: 85/100.** Mean of five non-cost dims: (88+85+95+70+88)/5 = 426/5 = 85.2, rounded down to 85. BenchLM Overall 78.84 (#8/887) and AA Intelligence Index 50 (#19/225) confirm top-tier positioning. **Best-fit recommendation:** High-intelligence agentic coding and enterprise workloads where budget permits; exceptional tool use and coding capabilities with top-tier 1M context window.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-08
- Method: public web research (Artificial Analysis model page, BenchLM.ai, Anthropic system card, ARC Prize, Vals AI, OpenRouter); scores are normalized 1–100 interpretations per model-comparison.md v4.
- Sources: Artificial Analysis model page (Intelligence Index 50, #19/225); BenchLM.ai model page (Overall 78.84/100, #8/887); Anthropic system card (claude-fable-5 and claude-mythos-5); ARC Prize verified results; Vals AI leaderboards; OpenRouter benchmarks.
- Future sources: add a new file next to this one, e.g. `Gemini_3.md`, using the same headings.

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/claude-fable-5/Laguna_S_2.1.md`.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve.
4. No benchmark invented; all benchmark values from verified sources (AA, BenchLM, Anthropic system card, ARC Prize, Vals AI, OpenRouter).

---
