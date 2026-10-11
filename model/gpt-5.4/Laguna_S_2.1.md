# GPT-5.4 — findings by Laguna S 2.1

- Source: OpenAI blog (`https://openai.com/index/introducing-gpt-5-4/`, March 5, 2026), BenchLM model page (`https://benchlm.ai/models/gpt-5-4` Oct 10), Artificial Analysis model page (`https://artificialanalysis.ai/models/gpt-5-4` Oct 10), OpenCode Zen pricing page (Oct 10)
- Date: 2026-10-10 (UTC)
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

> Sources: OpenAI blog (`openai.com/index/introducing-gpt-5-4/`, March 5 — re-verified Oct 10), BenchLM model page (Oct 10), Artificial Analysis model page (Oct 10), OpenCode Zen pricing page (Oct 10). GPT-5.4 benchmarks from OpenAI blog; cross-referenced with BenchLM and AA where available.

Agent / tool use:

- **GDPval:** 83.0% — (OpenAI blog, knowledge work across 44 occupations, xhigh reasoning)
- **GDPval-AA:** 1307 Elo — (Artificial Analysis model benchmarks via BenchLM); 37.4% normalized — (AA model benchmarks)
- **SWE-bench Pro:** 57.7% — (OpenAI blog; BenchLM confirms)
- **OSWorld-Verified:** 75.0% — (OpenAI blog; exceeds human 72.4%)
- **BrowseComp:** 82.7% — (OpenAI blog; GPT-5.4 Pro reaches 89.3%)
- **MCP Atlas:** 67.2% — (OpenAI blog; 250 tasks, tool search config vs 47% without)
- **Toolathlon:** 54.6% — (OpenAI blog)
- **τ²-bench Telecom:** 98.9% — (OpenAI blog)
- **Terminal-Bench 2.0:** 75.1% — (OpenAI blog)
- **Terminal-Bench 2.1:** not reported directly (TB 2.0 used instead)
- **APEX-Agents-AA:** 33.3% — (Artificial Analysis model benchmarks via BenchLM)
- **AA AutomationBench:** not reported for GPT-5.4 directly
- **AA Agentic Index:** not reported
- **GDP.pdf:** not reported for GPT-5.4 on BenchLM
- **ApprenticeBench:** 11% — (NeoCognition via BenchLM)
- **ExploitGym:** 6.0% — (ExploitGym paper via BenchLM)
- **JobBench:** 38.9% — (JobBench paper via BenchLM)

Coding:

- **SWE-bench Pro (Public):** 57.7% — (OpenAI blog)
- **Terminal-Bench 2.0:** 75.1% — (OpenAI blog)
- **VIBE V2:** not reported on BenchLM for GPT-5.4 (listed as no verified public score found)
- **AA Coding Index:** 71.0% — (Artificial Analysis model benchmarks)
- **AA-SciCode:** not reported for GPT-5.4
- **PostTrainBench v1.1:** 19.0% — (PostTrainBench public leaderboard via BenchLM)
- **React Native Evals:** 85.3% — (React Native Evals leaderboard via BenchLM)
- **LiveCodeBench (Vals):** not reported for GPT-5.4
- **SWE-bench (Vals):** not reported for GPT-5.4

Reasoning / knowledge:

- **GPQA Diamond:** 92.8% — (OpenAI blog)
- **AA-GPQA Diamond:** 92.0% — (Artificial Analysis: gpqa-diamond leaderboard via BenchLM)
- **GPQA Diamond (Vals):** not reported for GPT-5.4
- **HLE (no tools):** 39.8% — (OpenAI blog)
- **HLE (with tools):** 52.1% — (OpenAI blog; GPT-5.4 Pro reaches 58.7%)
- **AA-HLE:** 43.7% — (AA: humanitys-last-exam leaderboard via BenchLM)
- **AA Intelligence Index:** 39.0% — (Artificial Analysis model benchmarks via BenchLM; estimated #62/227)
- **AA-Omniscience Index:** 5.8% — (AA: omniscience leaderboard)
- **AA-Omniscience Accuracy:** 50.8% — (Artificial Analysis model benchmarks)
- **AA-Omniscience Hallucination Rate:** 91.7% — (Artificial Analysis model benchmarks)
- **AA-LCR:** 82.0% — (AA: artificial-analysis-long-context-reasoning leaderboard via BenchLM)
- **CritPt:** 23.4% — (AA: critpt leaderboard via BenchLM)
- **AA-IFBench:** 73.9% — (AA: ifbench leaderboard via BenchLM)
- **FrontierMath v2 (Tiers 1-3):** 47.6% — (Epoch AI FrontierMath v2 leaderboard via BenchLM)
- **FrontierMath v2 (Tier 4):** 27.1% — (Epoch AI FrontierMath v2 leaderboard via BenchLM)
- **ARC-AGI-1 (Verified):** 93.67% — (ARC Prize: GPT-5.4 (XHigh) verified results)
- **ARC-AGI-2 (Verified):** 73.3% — (ARC Prize: GPT-5.4 (XHigh) verified results)
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
- **Design Arena Website:** 1226 Elo — (OpenRouter model benchmarks)
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
> Confidence: high — 44+ public benchmarks found across 4 sources (OpenAI blog re-verified Oct 10, BenchLM Oct 10, AA Oct 10, Zen pricing). Scores derived from vendor-direct + independent aggregator data.

- **Tool use: 86/100.** GDPval at 83.0% is above ~80%+ knowledge-work threshold and well above ~50% general agent reference. BrowseComp at 82.7% is strong (Pro reaches 89.3%). τ²-bench at 98.9% is near-frontier. MCP Atlas at 67.2% improved from 60.6% vs GPT-5.2. GDPval-AA at 1307 Elo is below ~1750+ frontier but above median. Terminal-Bench 2.0 at 75.1% is solid. Toolathlon at 54.6% improved from 45.7%. Capped by APEX-Agents-AA at 33.3%, ExploitGym at 6.0%, and ApprenticeBench at 11%. Strong tool-use and agentic profile, upper-mid to frontier-adjacent.

- **Reasoning: 89/100.** GPQA Diamond at 92.8% (AA-GPQA 92.0%) meets the ≥90% frontier threshold. HLE with tools at 52.1% exceeds the 40% threshold. AA Intelligence Index at 39 (estimated #62/227) is below the 60 frontier threshold but above median 26. CritPt at 23.4% is below the ~30% mid bracket, indicating physics reasoning weakness. AA-LCR at 82.0% is decent. ARC-AGI-1 at 93.67% is excellent. AA-Omniscience Index at 5.8% is low. IFBench at 73.9%. Strong general reasoning with GPQA excellence, capped by low CritPt and Intelligence Index. Upper-mid to near-frontier.

- **Context window: 92/100.** 1,050,000 tokens total per OpenAI blog, AA, and Zen docs (≥1M tier → 95). However, MRCR degrades significantly at 256K+ (57.5% at 256K-512K, 36.6% at 512K-1M) and Graphwalks BFS 256K-1M at 21.4%, indicating effective context performance degrades at the extremes. Capped below 95 due to sub-70% retrieval at 128K+ range.

- **Multimodal: 78/100.** Text + image input, text output (+image-in only, no video/audio/PDF). MMMU-Pro (no tools) at 81.2% is strong. AA-MMMU-Pro at 78.4%. OmniDocBench at 0.109 error (improved from 0.140). ScreenSpot Pro at 85.4%. Capped below 85 due to no video/audio/PDF input and modest AA-MMMU-Pro score. Strong image-understanding, capped by modality limitations.

- **Coding: 84/100.** Terminal-Bench 2.0 at 75.1% is strong. SWE-bench Pro at 57.7% matches/grows from GPT-5.2's 55.6%. AA Coding Index at 71.0%. MCP Atlas at 67.2% (tool search efficiency improvement). React Native Evals at 85.3%. Capped by no SWE-bench Verified, LiveCodeBench (Vals), or AA-SciCode data, and PostTrainBench at 19.0%. Strong coding agent profile, near-frontier on Terminal-Bench.

- **Cost efficiency: 67/100.** $2.50 input / $15.00 output per 1M tokens (≤272K tier) falls in the methodology's ~$1.25/$4.25 = ~88 tier adjusted, but $2.50/$15.00 is above that — placing in the ~$3/$15 = ~60 tier range. Higher than $1.25/$4.25 (~88) and approaching $10/$50 (~30). At $2.50/$15.00, cost efficiency is ~67. Cached input at $0.25 (90% discount) provides some reduction.

- **Overall Score: 85.8/100.** Mean of five non-cost dimensions: (86 + 89 + 92 + 78 + 84) / 5 = 429 / 5 = 85.8 → 86. GPT-5.4 is OpenAI's March-2026 professional-work reasoning flagship with SOTA GDPval (83.0%), elite GPQA Diamond (92.8%), strong OSWorld-Verified (75.0%), and 1M context. Caps: weak CritPt (23.4%), ExploitGym (6.0%), sub-40% HLE without tools (39.8%), and $2.50/$15 pricing. Updated Oct 10 — OpenAI blog and BenchLM/AA data confirmed unchanged.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-10
- Method: public internet research via OpenAI blog (`openai.com/index/introducing-gpt-5-4/`, March 5 — re-verified Oct 10), BenchLM model page (Oct 10), Artificial Analysis model page (Oct 10), OpenCode Zen pricing page (Oct 10); scores are normalized 1–100 interpretations, not official vendor scores. Zero-influence: did not read peer `model/` findings files during research.
- Note: GPT-5.4 is deprecated (AA notes "We only continue performance benchmarking for the default 10k input token workload"). Knowledge cutoff: August 31, 2025.
- Future sources: add a new file next to this one using the same headings.

---
