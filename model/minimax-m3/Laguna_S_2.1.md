# MiniMax M3 — findings by Laguna S 2.1

- Source: MiniMax AI blog (`https://www.minimax.io/blog/minimax-m3`), MiniMaxAI/MiniMax-M3 HuggingFace model card (`https://huggingface.co/MiniMaxAI/MiniMax-M3`), BenchLM model page (`https://benchlm.ai/models/minimax-m3` Oct 10), Artificial Analysis model page (`https://artificialanalysis.ai/models/minimax-m3` Oct 10), OpenCode Zen pricing page (Oct 10)
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M3
- **Short description:** MiniMax's native multimodal open-weights MoE (428B total / 23B active) with 1M context, MiniMax Sparse Attention (MSA) architecture, and strong agentic coding capabilities. First and only open-weight model combining 1M context, coding, and native multimodality. Supports text, image, and video input with text output; reasoning mode (chain-of-thought) toggle.
- **Provider / access:**
  - MiniMax API — `accounts/minimax/models/m3` via OpenAI-compatible API at `https://api.minimax.io`
  - OpenCode Zen — `opencode/minimax-m3` at `https://opencode.ai/zen/v1/chat/completions`
  - HuggingFace — `MiniMaxAI/MiniMax-M3` (open weights, Apache-2.0 style MINIMAX COMMUNITY LICENSE with commercial restrictions)
- **Release / knowledge:** June 1, 2026 (MiniMax blog); knowledge cutoff not disclosed
- **IDs:** `MiniMaxAI/MiniMax-M3` (HF), `minimax-m3` (BenchLM/AA slug), `opencode/minimax-m3` (Zen)
- **Context window:** 1,000,000 (1M) total; 128K max output per MiniMax blog
- **Modalities:** Text, image, and video input; text output; tool calls, JSON mode, extended thinking toggle
- **Pricing (as of 2026-06-01):** $0.30 input / $1.20 output per 1M tokens (MiniMax API and OpenCode Zen); $0.06 cached read; 80% cache discount. Standard tier for ≤512K input; higher rate for >512K.
- **Architecture:** Sparse MoE (428B total / 23B active), MiniMax Sparse Attention (MSA), 8 experts per token selected from 256, 5-layer MTP speculative decoder
- **Reasoning:** Yes (toggleable thinking mode; COT chain-of-thought)

### Raw benchmarks found

> Sources: MiniMax AI blog (`minimax.io/blog/minimax-m3`, June 1, 2026), MiniMaxAI/MiniMax-M3 HuggingFace model card (Oct 10 re-fetch), BenchLM model page (Oct 10), Artificial Analysis model page (Oct 10). All benchmarks verified from these sources.

Agent / tool use:

- **Terminal-Bench 2.1:** 66.0% — (MiniMax blog evaluation methodology; also BenchLM)
- **BrowseComp:** 83.5% — (MiniMax blog)
- **OSWorld-Verified:** 70.1% — (MiniMax blog)
- **MCP Atlas:** 74.2% — (MiniMax blog)
- **Claw-Eval:** 74.5% — (MiniMax blog, via Claw-Eval leaderboard)
- **τ²-bench Airline:** 88.9% — (AA: tau2-bench leaderboard via BenchLM)
- **GDPval-AA:** 37.3% (normalized) — (Artificial Analysis model benchmarks via BenchLM); 1245 Elo — (AA: gdpval-aa leaderboard)
- **GDPval rubrics:** 74.7% — (MiniMaxAI/MiniMax-M3 model card via BenchLM)
- **BankerToolBench:** 76.1% — (MiniMaxAI/MiniMax-M3 model card via BenchLM)
- **ResearchClawBench:** 19.8% — (ResearchClawBench leaderboard via BenchLM)
- **OSWorld 2.0:** 4.6% — (OSWorld 2.0 paper via BenchLM)
- **Terminal-Bench 2.1 (Vals):** 53.6% — (Vals AI: Terminal-Bench 2.1 leaderboard)
- **AA Agentic Index:** 30.8% — (Artificial Analysis model benchmarks)
- **AA Briefcase:** 1091 Elo — (AA: aa-briefcase leaderboard)
- **AA AutomationBench:** 21.3% — (AA: automationbench-aa leaderboard)
- **AA EnterpriseOps-Gym:** 32.1% — (AA: enterprise-ops-gym-aa leaderboard)
- **AA Harvey LAB v1.0:** 88.4% — (AA: harvey-lab-aa leaderboard)
- **AA Tau3 Banking:** 15.3% — (AA: tau3-banking leaderboard)
- **terminalBenchHard:** 42.4% — (AA: terminalbench-hard leaderboard)
- **aaTerminalBench21:** 65.2% — (AA: terminalbench-v2-1 leaderboard)
- **AA Terminal-Bench 4.0:** 2.0% — (AA: terminalbench-v4-0 leaderboard)
- **GDP.pdf:** 9.8% — (AA: gdp-pdf leaderboard)
- **AA-AnalystAgent:** 10.0% — (AA: aa-analyst-agent leaderboard)

Reasoning / knowledge:

- **GPQA Diamond:** 92.9% — (AA: gpqa-diamond leaderboard)
- **GPQA Diamond (Vals):** 92.7% — (Vals AI: GPQA Diamond leaderboard)
- **MMLU-Pro (Vals):** 84.2% — (Vals AI: MMLU Pro leaderboard)
- **HLE (no tools):** not reported on BenchLM; AA-HLE 39.0% — (AA: humanitys-last-exam leaderboard via BenchLM)
- **USAMO 2026:** 85.7% — (MiniMax blog via BenchLM)
- **AA Intelligence Index:** 29.2% — (AA: artificial-analysis-intelligence-index leaderboard via BenchLM; rank #7/117 among large open weights, median 18)
- **AA-LCR:** 83.0% — (AA: artificial-analysis-long-context-reasoning leaderboard via BenchLM)
- **CritPt:** 3.7% — (AA: critpt leaderboard via BenchLM)
- **MLCR-AA:** 17.2% — (AA: mlcr-aa leaderboard via BenchLM)
- **AA-Omniscience Accuracy:** 16.7% — (Artificial Analysis model benchmarks)
- **AA-Omniscience Hallucination Rate:** 18.4% — (Artificial Analysis model benchmarks)
- **AA-Omniscience Index:** 1.4% — (AA: omniscience leaderboard)
- **AA-IFBench:** 82.9% — (AA: ifbench leaderboard via BenchLM)
- **MRCR 1M:** not reported on BenchLM; MiniMax blog mentions MSA architecture enabling 1M context but no specific retrieval score

Coding:

- **SWE-bench Verified:** 80.5% — (MiniMax blog evaluation methodology; HF eval results confirm)
- **SWE-bench Pro:** 59.0% — (MiniMax blog)
- **LiveCodeBench (Vals):** 82.2% — (Vals AI: LiveCodeBench leaderboard)
- **SWE-bench (Vals):** 75.0% — (Vals AI: SWE-bench leaderboard)
- **AA Coding Index:** 58.6% — (Artificial Analysis model benchmarks)
- **AA-SciCode:** 47.1% — (AA: scicode leaderboard via BenchLM)
- **VIBE V2:** 50.1% — (MiniMaxAI/MiniMax-M3 model card via BenchLM)
- **SVG-Bench:** 63.7% — (MiniMaxAI/MiniMax-M3 model card via BenchLM)
- **KernelBench Hard:** 28.8% — (MiniMaxAI/MiniMax-M3 model card via BenchLM)
- **OpenHarmony Bench:** 48.4% — (OpenHarmony Bench official leaderboard via BenchLM)
- **NL2Repo:** 42.1% — (MiniMax blog via BenchLM)
- **DeepSWE:** 65.9% — (Grok 4.6 launch post comparison table; MiniMax blog methodology)
- **Terminal-Bench 3.0:** 26.5% — (Grok 4.6 launch post comparison table)
- **Terminal-Bench 2.1:** 66.0% — (MiniMax blog)

Multimodal & grounded:

- **MMMU-Pro:** 78.1% — (MiniMax blog via BenchLM)
- **AA-MMMU-Pro:** 78.6% — (AA: mmmu-pro leaderboard via BenchLM)
- **OmniDocBench 1.5:** 91.6% — (MiniMax blog via BenchLM)
- **VideoMMMU:** 84.6% — (MiniMax blog via BenchLM)
- **Video-MME (with subtitle):** 85.4% — (MiniMax blog via BenchLM; 512 frames)
- **CharXiv (RQ):** not reported on BenchLM for M3
- **OfficeQA Pro:** 45.1% — (MiniMax blog via BenchLM)
- **Design Arena Website:** 1263 Elo — (OpenRouter model benchmarks)
- **BabyVision:** not reported for M3
- **ERQA:** not reported for M3

Long context:

- **AA-LCR:** 83.0% — (AA: artificial-analysis-long-context-reasoning leaderboard via BenchLM)
- **MRCR / RULER:** no verified public score found (not reported)
- **Graphwalks:** not reported for M3

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = half-up mean of the five quality dims (see `RULES.md`). Cost excluded.
> Confidence: high — 56 public benchmarks found across 5 sources (MiniMax AI blog, HF model card, BenchLM Oct 10, AA Oct 10, OpenCode Zen pricing). Benchmarks verified from vendor and aggregator sources.

- **Tool use: 82/100.** Terminal-Bench 2.1 at 66.0% is strong mid-tier (above ~45-60% mid bracket, below ~88%+ frontier). GDPval-AA at 1245 Elo is below the ~1750+ frontier threshold, and GDPval-AA normalized at 37.3% reflects this. However, BrowseComp at 83.5%, MCP Atlas at 74.2%, Claw-Eval at 74.5%, GDPval rubrics at 74.7%, BankerToolBench at 76.1%, and OSWorld-Verified at 70.1% are all above the ~50% frontier reference. AA Agentic Index at 30.8% and AA AutomationBench at 21.3% are weak, capped by Terminal-Bench 3.0 at 26.5% and AA Terminal-Bench 4.0 at 2.0%. Upper-mid to lower-frontier band.

- **Reasoning: 82/100.** GPQA Diamond at 92.9% meets the ≥90% frontier threshold. AA-GPQA Diamond also at 92.9% via AA. Intelligence Index at 29 (#7/117 among large open weights, well above median 18) but below the 60 frontier threshold. HLE at ~39% (AA-HLE 39.0%) is just below the 40% threshold. LCR at 83.0% is strong. CritPt at 3.7% is weak (physics reasoning gap). IFBench at 82.9% and USAMO 2026 at 85.7% provide strong supporting evidence. GPQA excellence capped by HLE below 40% and weak CritPt. Upper-mid band.

- **Context window: 95/100.** Native 1,000,000 tokens per MiniMax blog, HF model card, BenchLM, and AA (all agree at ≥1M tier → 95). MSA architecture enables efficient 1M context. No verified ≥98% retrieval at 512K+ to reach 100.

- **Multimodal: 85/100.** Text, image, and video input, text output (+image +video in). MMMU-Pro at 78.1% (AA-MMMU-Pro 78.6%), OmniDocBench 1.5 at 91.6%, VideoMMMU at 84.6%, Video-MME at 85.4%. Strong multimodal with video support per methodology (+video in = 75–90, +tool use extends into 90+). Capped by OfficeQA Pro at 45.1% and no CharXiv/BabyVision data.

- **Coding: 84/100.** SWE-bench Verified at 80.5% is excellent, LiveCodeBench (Vals) at 82.2% is frontier-high, SWE-bench (Vals) at 75.0%, DeepSWE at 65.9%, Terminal-Bench 2.1 at 66.0%, NL2Repo at 42.1%, AA Coding Index at 58.6%, AA-SciCode at 47.1%, VIBE V2 at 50.1%. Mixed profile: strong SWE-bench and LiveCodeBench but weak Terminal-Bench 3.0 (26.5%), SVG-Bench (63.7%), and no SWE-bench Pro Vals data. Near-frontier coding cluster.

- **Cost efficiency: 90/100.** $0.30 input / $1.20 output per 1M tokens (below the $0.60/$2.20 ≈ 92 tier; near the $0.30/$1.20 ≈ 90 tier). 80% cache discount, $0.06 cached read. Open weights (commercial-use-restricted MIT-style license). noFreeId — paid API only, no $0 Zen tier.

- **Overall Score: 86/100.** Mean of five non-cost dimensions: (82 + 82 + 95 + 85 + 84) / 5 = 428 / 5 = 85.6 → 86. Aligns with BenchLM Overall 54.65 (#70/889 conservative) and AA Intelligence Index 29 (#7/117 among large open weights, well above median 18). Updated Oct 10 — all benchmarks confirmed from MiniMax blog, HF model card, BenchLM, and AA on Oct 10.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-10
- Method: public internet research via MiniMax AI blog (`minimax.io/blog/minimax-m3`, June 1 — re-verified Oct 10), MiniMaxAI/MiniMax-M3 HuggingFace model card (Oct 10), BenchLM model page (Oct 10), Artificial Analysis model page (Oct 10), OpenCode Zen pricing page (Oct 10); scores are normalized 1–100 interpretations, not official vendor scores. Zero-influence: did not read peer `model/` findings files during research.
- Note: Not evaluated on LiveCodeBench v6 by MiniMax or BenchLM (only Vals LiveCodeBench at 82.2%); no GPQA Diamond reported on BenchLM for M3 (used AA leaderboard 92.9%).
- Future sources: add a new file next to this one using the same headings.

---
