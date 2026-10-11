# Grok 4.6 — findings by Laguna S 2.1

- Source: xAI launch blog (`https://x.ai/news/grok-4-6`, August 12, 2026), BenchLM model page (`https://benchlm.ai/models/grok-4-6` Oct 10), Artificial Analysis model page (`https://artificialanalysis.ai/models/grok-4-6` Oct 10), OpenCode Zen pricing page (Oct 10)
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.6
- **Short description:** xAI's August-2026 flagship reasoning model, released as "Grok 4.6 (High)" on AA and OpenCode Zen. Builds on Grok 4.5 with improved long-running agents and visual/interactive work. Available via xAI API, OpenCode Zen (as `grok-4.6`), Cursor, and Grok Build. Proprietary, no open weights.
- **Provider / access:**
  - xAI API — `grok-4.6` via `https://api.x.ai/v1`
  - OpenCode Zen — `opencode/grok-4.6` at `https://opencode.ai/zen/v1/responses`
  - Cursor / Grok Build — integrated
- **Release / knowledge:** August 12, 2026 (xAI launch post); knowledge cutoff not disclosed
- **IDs:** `grok-4.6` (API), `opencode/grok-4.6` (Zen)
- **Context window:** 500,000 tokens total
- **Modalities:** Text and image input; text output; tool calls, JSON mode, extended thinking
- **Pricing (as of 2026-08-12):** $2.00 input / $0.50 cached input / $6.00 output per 1M tokens (≤200K); $4.00 / $1.00 / $12.00 per 1M (>200K). Fast variant 2x price. Cache discount 75%. noFreeId.
- **Architecture:** Proprietary dense transformer; parameter count not disclosed
- **Reasoning:** Yes (extended thinking / chain-of-thought, "High" reasoning on AA)

### Raw benchmarks found

> Sources: xAI launch blog (`x.ai/news/grok-4-6`, August 12 — re-verified Oct 10), BenchLM model page (Oct 10), Artificial Analysis model page (Oct 10), OpenCode Zen pricing page (Oct 10). Grok 4.6 launch post includes direct comparison table vs GPT-5.6 Sol, GPT-5.5, Claude Fable 5.

Agent / tool use:

- **AA Intelligence Index:** 44 — (xAI launch blog, matches GPT-5.6 Sol 44, exceeds Grok 4.5 6); also AA leaderboard shows 44.3% — (Artificial Analysis model benchmarks via BenchLM, #36/227)
- **GDPval-AA:** 56.1% (normalized) — (Artificial Analysis model benchmarks via BenchLM); 1643 Elo — (AA: gdpval-aa leaderboard)
- **GDPVal-AA v2.1:** 56.1% — (xAI launch blog, from AA)
- **APEX-Agents:** 57.5% — (xAI launch blog)
- **Terminal-Bench 3.0:** 26.5% — (Terminal-Bench 3.0 leaderboard via BenchLM); also 26% — (xAI launch blog)
- **aaTerminalBench21:** 78.3% — (Vals AI: Terminal-Bench 2.1 leaderboard)
- **AA AutomationBench:** 66.7% — (AA: automationbench-aa leaderboard via BenchLM)
- **AA Agentic Index:** 53.4% — (Artificial Analysis model benchmarks)
- **AA EnterpriseOps-Gym:** 48.3% — (AA: enterprise-ops-gym-aa leaderboard via BenchLM)
- **AA Tau3 Banking:** 50.7% — (AA: tau3-banking leaderboard via BenchLM)
- **AA Terminal-Bench 4.0:** 2.0% — (xAI launch blog, from AA); also 25.8% — (AA: terminalbench-v4-0 leaderboard via BenchLM)
- **GDP.pdf:** 15.3% — (AA: gdp-pdf leaderboard via BenchLM)
- **AA-AnalystAgent:** not reported for Grok 4.6
- **ApprenticeBench:** 13% — (NeoCognition via BenchLM)
- **CWE-bench v1:** 57.0% — (Collinear: CWE-bench v1 leaderboard via BenchLM)
- **AA Briefcase:** 1643 Elo — (xAI launch blog); 1577 Elo — (BenchLM)

Coding:

- **DeepSWE v1.1:** 65.9% — (xAI launch blog, from xAI)
- **CursorBench v3.2:** 69.9% — (xAI launch blog; Cursor evals: CursorBench 3.2)
- **FrontierCode 1.1 (Extended):** 61.3% — (xAI launch blog)
- **AA Coding Index:** 76.8% — (Artificial Analysis model benchmarks via BenchLM)
- **AA-SciCode:** 56.5% — (AA: scicode leaderboard via BenchLM)
- **VulcanBench v3:** 87.0% — (VulcanBench Eval Suite 3 leaderboard via BenchLM)
- **FrontierSWE v2:** 25.3% — (Proximal: FrontierSWE v2 leaderboard via BenchLM)
- **Bug Hunt Bench:** 27.0 fixes — (Bug Hunt Bench public data via BenchLM)
- **LiveCodeBench (Vals):** 88.2% — (Vals AI: LiveCodeBench leaderboard)
- **SWE-bench (Vals):** 95.6% — (Vals AI: SWE-bench leaderboard)
- **CursorBench 4.0:** 41.4% — (Cursor evals: CursorBench 4.0 via BenchLM)
- **ExploitGym:** not reported

Reasoning / knowledge:

- **AA-LCR:** 80.3% — (AA: artificial-analysis-long-context-reasoning leaderboard via BenchLM)
- **CritPt:** 17.1% — (AA: critpt leaderboard via BenchLM)
- **ARC-AGI-1 (Verified):** 87.00% — (ARC Prize: Grok 4.6 verified results)
- **ARC-AGI-2 (Verified):** 67.1% — (ARC Prize: Grok 4.6 verified results)
- **ARC-AGI-3:** 2.1% — (ARC Prize: Grok 4.6 verified results)
- **AA-GPQA Diamond:** 94.9% — (AA: gpqa-diamond leaderboard)
- **GPQA Diamond (Vals):** 94.7% — (Vals AI: GPQA Diamond leaderboard)
- **MMLU-Pro (Vals):** 89.4% — (Vals AI: MMLU Pro leaderboard)
- **AA-HLE:** 42.9% — (AA: humanitys-last-exam leaderboard)
- **AA-Omniscience Index:** 30.5% — (AA: omniscience leaderboard)
- **AA-Omniscience Accuracy:** 48.2% — (Artificial Analysis model benchmarks)
- **AA-Omniscience Hallucination Rate:** 34.3% — (Artificial Analysis model benchmarks)
- **Gray Swan IPI (15 attempts):** 51.8% — (Google: Gemini 4 Argon launch chart via BenchLM)

Multimodal:

- **Design Arena Website:** 1296 Elo — (OpenRouter model benchmarks)
- **MMMU-Pro:** not reported for Grok 4.6
- **Image understanding:** text + image in, text out (AA confirms)
- No video/audio/PDF input support

Long context:

- **AA-LCR:** 80.3% — (AA: artificial-analysis-long-context-reasoning leaderboard)
- **AA MLCR-AA:** not reported for Grok 4.6

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = half-up mean of the five quality dims (see `RULES.md`). Cost excluded.
> Confidence: high — 37 public benchmarks found across 4 sources (xAI launch blog re-verified Oct 10, BenchLM Oct 10, AA Oct 10, Zen pricing Oct 10). Grok 4.6 launch post includes direct comparison table.

- **Tool use: 87/100.** AA Intelligence Index at 44 (#36/227, above median 26) and GDPval-AA at 1643 Elo show strong agentic knowledge work capability. GDPval-AA normalized at 56.1% is above ~50% frontier reference. APEX-Agents at 57.5% improved from Grok 4.5's 47.1%. aaTerminalBench21 at 78.3% (Vals) is solid. AA AutomationBench at 66.7% and AA Agentic Index at 53.4% are decent. AA EnterpriseOps-Gym at 48.3% and AA Tau3 Banking at 50.7% are moderate. Capped by Terminal-Bench 3.0 at 26.5% (weak), AA Terminal-Bench 4.0 at 25.8%, GDP.pdf at 15.3%, and ApprenticeBench at 13%. Strong overall tool-use profile with notable agentic benchmarks, capped by weak terminal/evals performance.

- **Reasoning: 89/100.** GPQA Diamond (Vals) at 94.7% and AA-GPQA at 94.9% (both excellent, near-frontier ≥90%). AA-HLE at 42.9% exceeds the 40% threshold. ARC-AGI-1 at 87.0% is strong. AA-LCR at 80.3% shows good long-context reasoning. AA-Omniscience Index at 30.5% is moderate. CritPt at 17.1% is weak (physics gap), but not as weak as some peers. MMLU-Pro (Vals) at 89.4%. Strong reasoning with GPQA excellence, capped by weak CritPt and no HLE without tools data. Upper-mid to near-frontier.

- **Context window: 88/100.** 500,000 tokens per xAI docs and AA (500K–1M = 85–94 tier → 88 for 500K). AA-LCR at 80.3% confirms reasonable long-context reasoning. No 1M context (falls below the 95+ ≥1M tier).

- **Multimodal: 65/100.** Text + image input, text output (+image-in only, no video/audio/PDF per AA specs). No verified multimodal benchmarks for Grok 4.6 (no MMMU-Pro, no visual reasoning benchmarks found). Design Arena Website at 1296 Elo (OpenRouter). Falls in the "+image in only" band (60–70), at 65.

- **Coding: 89/100.** VulcanBench v3 at 87.0% is excellent. LiveCodeBench (Vals) at 88.2% and SWE-bench (Vals) at 95.6% are near-frontier. DeepSWE at 65.9% (from xAI, exceeds GPT-5.4's 65.9% and GPT-5.2's 54%). AA Coding Index at 76.8% is strong. CursorBench v3.2 at 69.9% (from xAI) is solid. AA-SciCode at 56.5% is below the 55% threshold. CursorBench 4.0 at 41.4% is weak. Capped by weak CursorBench 4.0 and no SWE-bench Verified data. Near-frontier coding cluster.

- **Cost efficiency: 79/100.** $2.00 input / $6.00 output per 1M tokens (≤200K tier) falls in the methodology's ~$2-$6 = ~79 tier. Cached input $0.50 (75% discount). Fast variant 2x price. noFreeId. $0.50 input tier with 80% cache discount provides some cost reduction.

- **Overall Score: 84/100.** Mean of five non-cost dimensions: (87 + 89 + 88 + 65 + 89) / 5 = 418 / 5 = 83.6 → 84. Grok 4.6 is xAI's August-2026 flagship reasoning model, released as "Grok 4.6 (High)" on AA and Zen. It matches GPT-5.6 Sol on Intelligence Index (44), leads on DeepSWE (65.9%), and achieves 95.6% on SWE-bench (Vals). Caps: weak Terminal-Bench 3.0 (26.5%), weak CritPt (17.1%), text+image-only modalities, and $2/$6 pricing with no free tier. Updated Oct 10 — xAI blog and BenchLM/AA data confirmed.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-10
- Method: public internet research via xAI launch blog (`x.ai/news/grok-4-6`, August 12 — re-verified Oct 10), BenchLM model page (Oct 10), Artificial Analysis model page (Oct 10), OpenCode Zen pricing page (Oct 10); scores are normalized 1–100 interpretations, not official vendor scores. Zero-influence: did not read peer `model/` findings files during research.
- Note: AA notes Grok 4.6 is deprecated; only default 10k input token workload continues to be benchmarked. GPT-5.5 is the newer recommended release.
- Future sources: add a new file next to this one using the same headings.

---
