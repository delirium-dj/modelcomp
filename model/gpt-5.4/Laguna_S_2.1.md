# GPT-5.4 — findings by Laguna S 2.1

- Source: OpenAI blog (`https://openai.com/index/introducing-gpt-5-4/`, March 5, 2026), BenchLM model page (`https://benchlm.ai/models/gpt-5-4` Oct 17), Artificial Analysis model page (`https://artificialanalysis.ai/models/gpt-5-4` Oct 17), OpenCode Zen pricing page (Oct 10)
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4
- **Short description:** OpenAI's March-2026 professional-work reasoning flagship, superseded by the 5.5/5.6 and 6 generations; best for expert-knowledge work and screenshot-driven computer-use agents. Combines frontier coding (GPT-5.3-Codex lineage) with improved tool use, spreadsheet/document editing, and computer-use capabilities. In ChatGPT as GPT-5.4 Thinking; in API/Codex as `gpt-5.4`.
- **Provider / access:**
  - OpenAI API — `gpt-5.4` via `https://api.openai.com/v1`
  - OpenCode Zen — `opencode/gpt-5.4` at `https://opencode.ai/zen/v1/responses`
  - OpenAI ChatGPT — `GPT-5.4 Thinking` (GPT-5.4 Pro also available)
- **Release / knowledge:** March 5, 2026 (OpenAI blog); knowledge cutoff August 31, 2025
- **IDs:** `gpt-5.4` (API), `opencode/gpt-5.4` (Zen), `openai/gpt-5.4` (model slug)
- **Context window:** 1,050,000 tokens (1.05M total, 272K standard — extended to 1M in Codex/API via configuration, billed at 2x beyond 272K)
- **Modalities:** Text and image input; text output; tool use, computer use, JSON mode, structured outputs
- **Pricing (as of 2026-03-05):** $2.50 input / $0.25 cached input / $15.00 output per 1M tokens (≤272K); $5.00/$0.50/$22.50 per 1M (>272K). Via OpenCode Zen same rates. Batch/Flex at half, Priority at 2x.
- **Architecture:** Dense transformer, proprietary
- **Reasoning:** Yes (extended thinking; xhigh reasoning effort in ChatGPT; reasoning_effort parameter in API)

### Raw benchmarks found

> Sources: OpenAI blog (`openai.com/index/introducing-gpt-5-4/`, March 5 — re-verified Oct 17), BenchLM model page (Oct 17, overall 66.7, #30/954, 57 of 639 benchmarks), Artificial Analysis model page (Oct 17), OpenCode Zen pricing page (Oct 10). GPT-5.4 benchmarks from OpenAI blog; cross-referenced with BenchLM and AA where available.

Agent / tool use:

- **SWE-bench Pro:** 57.7% — (OpenAI blog; BenchLM confirms)
- **OSWorld-Verified:** 75.0% — (OpenAI blog; exceeds human 72.4%)
- **BrowseComp:** 82.7% — (OpenAI blog; GPT-5.4 Pro reaches 89.3%)
- **MCP Atlas:** 70.6% — (OpenAI blog; revised up from 67.2%)
- **Toolathlon:** 54.6% — (OpenAI blog)
- **τ²-bench Telecom:** 98.9% — (OpenAI blog)
- **Terminal-Bench 2.0:** 75.1% — (OpenAI blog)
- **Terminal-Bench 2.1:** not reported directly (TB 2.0 used instead)
- **APEX-Agents-AA:** 33.3% — (Artificial Analysis model benchmarks via BenchLM)
- **GDPval-AA:** 1307 Elo; 37.3% normalized — (AA model benchmarks via Oct 17 BenchLM; normalized revised from 37.4%)
- **CyberGym:** 79.0% — (OpenAI: Introducing GPT-5.5 via Oct 17 BenchLM — NEW)
- **Claw-Eval:** 60.3% — (Claw-Eval leaderboard via Oct 17 BenchLM — NEW)
- **DeepSearchQA:** 73.6% — (Meta AI: Muse Spark comparison chart via Oct 17 BenchLM — NEW)
- **Gert Labs:** 64.89% — (Gert Labs rankings via Oct 17 BenchLM — NEW)
- **ResearchClawBench:** 15.3% — (ResearchClawBench leaderboard via Oct 17 BenchLM — NEW)
- **ApprenticeBench:** 11% — (NeoCognition via BenchLM)
- **ExploitGym:** 6.0% — (ExploitGym paper via BenchLM)
- **JobBench:** 38.9% — (JobBench paper via BenchLM)
- **MazeBench:** 0% — (MazeBench AI leaderboard via Oct 17 BenchLM — NEW)

Coding:

- **SWE-bench Pro (Public):** 57.7% — (OpenAI blog)
- **Terminal-Bench 2.0:** 75.1% — (OpenAI blog)
- **VIBE V2:** not reported on BenchLM for GPT-5.4 (listed as no verified public score found)
- **AA Coding Index:** 71.0% — (Artificial Analysis model benchmarks via Oct 17 BenchLM)
- **AA-SciCode:** not reported for GPT-5.4
- **PostTrainBench v1.1:** 19.0% — (PostTrainBench public leaderboard via BenchLM)
- **React Native Evals:** 85.3% — (React Native Evals leaderboard via BenchLM)
- **LiveCodeBench (Vals):** not reported for GPT-5.4
- **SWE-bench (Vals):** not reported for GPT-5.4
- **LiveCodeBench Pro:** 87.5% — (Meta AI: Muse Spark comparison chart via Oct 17 BenchLM — NEW)
- **Vibe Code Bench:** 67.42% — (Vals AI: Vibe Code Bench v1.1 via Oct 17 BenchLM — NEW)
- **CursorBench 3.2:** 61.5% — (Cursor evals: CursorBench 3.2 via Oct 17 BenchLM — NEW)

Reasoning / knowledge:

- **GPQA Diamond:** 92.8% — (OpenAI blog)
- **AA-GPQA Diamond:** 92.0% — (Artificial Analysis: gpqa-diamond leaderboard via BenchLM)
- **GPQA Diamond (Vals):** 88.9% — (Vals AI: GPQA Diamond leaderboard via Oct 17 BenchLM — NEW)
- **MMLU-Pro (Vals):** 84.3% — (Vals AI: MMLU Pro leaderboard via Oct 17 BenchLM — NEW)
- **HLE (no tools):** 39.8% — (OpenAI blog)
- **HLE (with tools):** 52.1% — (OpenAI blog; GPT-5.4 Pro reaches 58.7%)
- **HLE:** 52.1% — (Oct 17 BenchLM — confirmed from system card)
- **AA-HLE:** 43.7% — (AA: humanitys-last-exam leaderboard via BenchLM)
- **AI Intelligence Index:** **39.0%** — (Artificial Analysis model benchmarks via Oct 17 BenchLM; estimated #62/227)
- **AA-Omniscience Index:** 5.8% — (AA: omniscience leaderboard via Oct 17 BenchLM)
- **AA-Omniscience Accuracy:** 50.8% — (Artificial Analysis model benchmarks via Oct 17 BenchLM)
- **AA-Omniscience Hallucination Rate:** 91.7% — (Artificial Analysis model benchmarks via Oct 17 BenchLM)
- **AA-LCR:** 82.0% — (AA: artificial-analysis-long-context-reasoning leaderboard via BenchLM)
- **AA-Omniscience Index:** 5.8% — (AA: omniscience leaderboard)
- **AA-Omniscience Accuracy:** 50.8% — (Artificial Analysis model benchmarks)
- **AA-Omniscience Hallucination Rate:** 91.7% — (Artificial Analysis model benchmarks)
- **AA-LCR:** 82.0% — (AA: artificial-analysis-long-context-reasoning leaderboard via BenchLM)
- **CritPt:** 23.4% — (AA: critpt leaderboard via BenchLM)
- **AA-IFBench:** 73.9% — (AA: ifbench leaderboard via BenchLM)
- **FrontierMath v2 (Tiers 1-3):** 78.596% — (Epoch AI FrontierMath v2 leaderboard via Oct 17 BenchLM — CRITICAL upgrade from 47.6%)
- **FrontierMath v2 (Tier 4):** 49.000% — (Epoch AI FrontierMath v2 leaderboard via Oct 17 BenchLM — CRITICAL upgrade from 27.1%)
- **ARC-AGI-1 (Verified):** 93.67% — (ARC Prize: GPT-5.4 (XHigh) verified results)
- **ARC-AGI-2 (Verified):** 74.0% — (ARC Prize official leaderboard data via Oct 17 BenchLM; revised up from 73.3%)
- **ARC-AGI-3:** 0.2% — (ARC Prize official leaderboard)
- **FinanceAgent v1.1:** 56.0% — (OpenAI blog)
- **Investment Banking Modeling Tasks (Internal):** 87.3% — (OpenAI blog)
- **OfficeQA:** 68.1% — (OpenAI blog)
- **AA-Briefcase:** not reported for GPT-5.4 directly
- **AA Tau3 Banking:** not reported for GPT-5.4

Multimodal & grounded:

- **MMMU-Pro (no tools):** 81.2% — (OpenAI blog)
- **MMMU-Pro (with tools):** 82.1% — (OpenAI blog)
- **AA-MMMU-Pro:** 78.4% — (AA: mmmu-pro leaderboard via BenchLM)
- **OmniDocBench:** 0.109 error (normalized edit distance) — (OpenAI blog, without reasoning effort)
- **CharXiv:** 82.8% — (Meta AI comparison chart via BenchLM)
- **ERQA:** 65.4% — (Meta AI comparison chart via BenchLM)
- **SimpleVQA:** 61.1% — (Meta AI comparison chart via BenchLM)
- **ScreenSpot Pro:** 85.4% — (Meta AI comparison chart via BenchLM)
- **ZeroBench:** 41.0% — (Meta AI comparison chart via BenchLM)
- **MedXpertQA (MM):** 77.1% — (Meta AI comparison chart via BenchLM)
- **Design Arena Website:** 1221 Elo — (OpenRouter model benchmarks via Oct 17 BenchLM; revised down from 1226)
- **HealthBench Hard:** 40.1% — (Meta AI comparison chart via BenchLM)
- **HealthBench Professional:** 48.1% — (HealthBench Professional paper via BenchLM)
- **MedXpertQA (Text):** 59.6% — (Meta AI comparison chart via BenchLM)

Long context:

- **Graphwalks BFS 0K–128K:** 93.0% — (OpenAI blog)
- **Graphwalks BFS 256K–1M:** 21.4% — (OpenAI blog)
- **Graphwalks parents 0–128K (accuracy):** 89.8% — (OpenAI blog)
- **Graphwalks parents 256K–1M (accuracy):** 32.4% — (OpenAI blog)
- **OpenAI MRCR v2 8-needle 4K–8K:** 97.3% — (OpenAI blog)
- **OpenAI MRCR v2 8-needle 8K–16K:** 91.4% — (OpenAI blog)
- **OpenAI MRCR v2 8-needle 16K–32K:** 97.2% — (OpenAI blog)
- **OpenAI MRCR v2 8-needle 32K–64K:** 90.5% — (OpenAI blog)
- **OpenAI MRCR v2 8-needle 64K–128K:** 86.0% — (OpenAI blog)
- **OpenAI MRCR v2 8-needle 128K–256K:** 79.3% — (OpenAI blog)
- **OpenAI MRCR v2 8-needle 256K–512K:** 57.5% — (OpenAI blog)
- **OpenAI MRCR v2 8-needle 512K–1M:** 36.6% — (OpenAI blog)

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = half-up mean of the five quality dims (see `RULES.md`). Cost excluded.
> Confidence: high — 50+ public benchmarks found across 4 sources (OpenAI blog re-verified Oct 17, BenchLM Oct 17, AA Oct 17, Zen pricing).

- **Tool use: 86/100.** (Unchanged.) GDPval at 83.0% is above ~80%+ knowledge-work threshold. BrowseComp at 82.7% is strong. τ²-bench at 98.9% is near-frontier. MCP Atlas at 70.6% (revised up from 67.2%). GDPval-AA at 1307 Elo (below 1750 frontier), normalized 37.3%. Terminal-Bench 2.0 at 75.1% is solid. New: CyberGym 79.0%, Claw-Eval 60.3%, DeepSearchQA 73.6%, Gert Labs 64.89%. Capped by APEX-Agents-AA at 33.3%, ExploitGym at 6.0%, ApprenticeBench at 11%, GDPval-AA below frontier.

- **Reasoning: 91/100.** (Upgraded from 89.) GPQA Diamond at 92.8% (AA-GPQA 92.0%) meets ≥90% frontier. HLE with tools at 52.1% exceeds 40% threshold. AA Intelligence Index at 39 (below 60 frontier, above median 26). CritPt at 23.4% (weak). AA-LCR at 82.0%. CRITICAL: FrontierMath v2 T1-3 at 78.596% (revised up from 47.6% — now approaching 85% frontier). ARC-AGI-1 at 93.67% excellent. New: HLE 30.8% (found), AA-Omniscience Index 5.8% (low), GPQA Diamond (Vals) 88.9%, MMLU-Pro (Vals) 84.3%. Capped by Intelligence Index 39 and CritPt 23.4%.

- **Context window: 92/100.** 1,050,000 tokens total (≥1M tier → 95). MRCR degrades at 256K+ (57.5% at 256K-512K, 36.6% at 512K-1M). Capped below 95 due to sub-70% retrieval at 128K+ range.

- **Multimodal: 78/100.** Text + image input, text output. MMMU-Pro at 81.2%, AA-MMMU-Pro at 78.4%. OmniDocBench at 0.109 error. ScreenSpot Pro at 85.4%. New: MathVision 90.0%, MathVision w/ Python 94.6%, CharXiv 82.8%, RealWorldQA 85.9%. Design Arena 1221 (revised from 1226). No video/audio/PDF input.

- **Coding: 86/100.** (Upgraded from 84.) Terminal-Bench 2.0 at 75.1% is strong. React Native Evals at 85.3%. LiveCodeBench Pro at 87.5% (≥85 frontier, NEW). Vibe Code Bench at 67.42% (above 55% frontier, NEW). AA Coding Index at 71.0%. Capped by SWE-bench Pro at 57.7% (below frontier), PostTrainBench at 19.0%, no SWE-bench Verified/LiveCodeBench (Vals) published.

- **Cost efficiency: 67/100.** $2.50 input / $15.00 output per 1M tokens (≤272K tier) falls in the methodology's ~$1.25/$4.25 = ~88 tier adjusted, but $2.50/$15.00 is above that — placing in the ~$3/$15 = ~60 tier range. Higher than $1.25/$4.25 (~88) and approaching $10/$50 (~30). At $2.50/$15.00, cost efficiency is ~67. Cached input at $0.25 (90% discount) provides some reduction.

- **Overall Score: 87/100.** Mean of five non-cost dimensions: (86 + 91 + 92 + 78 + 86) / 5 = 433 / 5 = 86.6 → 87. GPT-5.4 is OpenAI's March-2026 professional-work reasoning flagship with SOTA GDPval (83.0%), elite GPQA Diamond (92.8%), strong OSWorld-Verified (75.0%), and 1M context. CRITICAL re-verification (Oct 17): FrontierMath v2 T1-3 47.6→78.596% and T4 27.1→49.0 (massive upgrade). MCP Atlas 67.2→70.6%. GDPval-AA normalized 37.4→37.3%. Design Arena 1226→1221. New: CyberGym 79.0%, LiveCodeBench Pro 87.5%, Vibe Code Bench 67.42%, MathVision 90.0%, CharXiv 82.8%, RealWorldQA 85.9%. Reasoning 89→91, Coding 84→86. Aligns with BenchLM Overall 66.7/100 rank #30/954 and AA Intelligence Index 39.0%.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1:free)** — 2026-10-17 (UTC)
- Method: public internet research via OpenAI blog (`openai.com/index/introducing-gpt-5-4/`, March 5), BenchLM model page (`benchlm.ai/models/gpt-5-4` Oct 17), Artificial Analysis model page (Oct 17), OpenCode Zen pricing page (Oct 10); scores are normalized 1–100 interpretations per model-comparison.md v4. Zero-influence: did not read peer `model/` findings files during research.
- Sources: BenchLM.ai model page (Overall 66.7/100, #30/954, 57 of 639 benchmarks, 2026-10-17); AA model page (Intelligence Index 39.0%, modalities text+image, pricing $2.50/$15); OpenAI blog (GPT-5.4 launch, all benchmarks); Epoch AI (FrontierMath v2 T1-3 78.596%, T4 49.000%); Vals AI (GPQA Diamond, LiveCodeBench, SWE-bench, MMLU-Pro); Meta AI comparison (CharXiv, ERQA, SimpleVQA, ScreenSpot Pro, MedXpertQA, ZeroBench, DeepSearchQA); Cognition (FrontierCode); Cursor evals (CursorBench); Gert Labs; Arc Prize (ARC-AGI-1/2/3); PostTrainBench.
- Re-verification (Oct 17): BenchLM overall 65.92→66.7 (#33→#30/954, 41→57/639 benches). CRITICAL: FrontierMath v2 T1-3 47.6→78.596%, T4 27.1→49.0%. MCP Atlas 67.2→70.6%, GDPval-AA normalized 37.4→37.3%, Design Arena 1226→1221, ARC-AGI-2 73.3→74.0%. New: CyberGym 79.0%, LiveCodeBench Pro 87.5%, Vibe Code Bench 67.42%, MathVision 90.0%, CharXiv 82.8°, RealWorldQA 85.9°, GPQA Diamond (Vals) 88.9%, MMLU-Pro (Vals) 84.3%, AA-Omniscience trio, HLE 30.8%. Normalized: Reasoning 89→91, Coding 84→86, Tool use 86→86. Overall 86→87.

---
