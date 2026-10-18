# Qwen 3.7 Plus — findings by Laguna S 2.1

  - **Source:** QwenCloud/Qwen (`qwen3.7-plus`), Qwen3.8-27B HuggingFace model card (`https://huggingface.co/Qwen/Qwen3.8-27B`), OpenCode Zen (`opencode/qwen-3.7-plus`), BenchLM (`https://benchlm.ai/models/qwen3-7-plus` Oct 17), Artificial Analysis (`https://artificialanalysis.ai/models/qwen3-7-plus`)
- Date: 2026-10-17 (UTC) — re-verification of 2026-10-10 scores
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7 Plus
- **Short description:** Cost-effective multimodal Plus model in the Qwen3.7 series from Alibaba Cloud. Builds on strong text capabilities with upgraded vision-language abilities for hybrid agent tasks (screen reading, visual code generation, mobile app navigation).
- **Provider / access:**
  - OpenCode Zen — `opencode/qwen-3.7-plus` via Anthropic-compatible API at `https://opencode.ai/zen/v1/messages`
  - QwenCloud (Model Studio) — `qwen3.7-plus` via OpenAI-compatible API at `https://maas.qwencloudapi.com/compatible-mode/v1`
- **Release / knowledge:** September 2026
- **IDs:** `opencode/qwen-3.7-plus`, `qwen3.7-plus`
- **Context window:** 1,000,000 (1M) total (QwenCloud shows Max Input 991K, Max Output 131K, Context 1M; thinking mode allows 983K input / 131K output)
- **Modalities:** Image + Text + Video input, Text output; thinking mode, tool calls, JSON mode, structured outputs
- **Pricing (as of 2026-09-30):** OpenCode Zen / QwenCloud: $0.40 input / $1.60 output per 1M tokens; $0.04 cached read / $0.50 cached write
- **Architecture:** Proprietary dense transformer, Qwen3.7 lineage, native vision-language encoder

### Raw benchmarks found

> Sources: Qwen3.8-27B HuggingFace model card comparison table (`huggingface.co/Qwen/Qwen3.8-27B`, August 2026 update with Qwen3.7 Plus row), Qwen Cloud pricing/specs pages, OpenCode Zen docs, BenchLM model page (Oct 17, 71 of 639 benchmarks, overall 53.76, #80/954), Artificial Analysis model benchmarks. Benchmarks verified from the Qwen3.8-27B HF comparison table (14 benchmarks) plus Oct 17 BenchLM re-verification adding 57 new benchmark rows from Alibaba Cloud launch blog and AA leaderboards.

Agent / tool use:

- **Terminal-Bench 2.1 (Terminus):** **64.0%** — (Qwen3.8-27B HF comparison table; also 52.8% on Vals AI via BenchLM Oct 17)
- **SWE-bench Pro:** **57.6%** — (Qwen3.8-27B HF comparison table)
- **SWE-bench Verified:** **77.7%** — (Alibaba Cloud: Qwen3.7-Plus launch benchmarks / BenchLM Oct 17)
- **QwenSWEBench:** **59.2%** — (Qwen3.8-27B HF comparison table)
- **CoWorkBench:** **65.1%** — (Qwen3.8-27B HF comparison table)
- **Agents' Last Exam:** Pass@1 = 13.2 / Score = 33.6 — (Qwen3.8-27B HF comparison table)
- **Terminal-Bench 2.0:** **70.3%** — (Alibaba Cloud: Qwen3.7-Plus launch benchmarks / BenchLM Oct 17)
- **τ²-bench:** **93%** — (Artificial Analysis: tau2-bench leaderboard / BenchLM Oct 17 — near-frontier!)
- **BrowseComp:** **83.5%** — (Alibaba Cloud: Qwen3.7-Plus launch benchmarks / BenchLM Oct 17)
- **MCP Atlas:** **73.2%** — (Alibaba Cloud: Qwen3.7-Plus launch benchmarks / BenchLM Oct 17)
- **OSWorld-Verified:** **73.3%** — (Alibaba Cloud: Qwen3.7-Plus launch benchmarks / BenchLM Oct 17)
- **AndroidWorld:** **81.0%** — (Alibaba Cloud: Qwen3.7-Plus launch benchmarks / BenchLM Oct 17)
- **Claw-Eval:** **62.7%** — (Alibaba Cloud: Qwen3.7-Plus launch benchmarks / BenchLM Oct 17; replaces "not found")
- **QwenClawBench:** **61.8%** — (Alibaba Cloud: Qwen3.7-Plus launch benchmarks / BenchLM Oct 17)
- **QwenWebBench:** **1536** (Elo) — (Alibaba Cloud: Qwen3.7-Plus launch benchmarks / BenchLM Oct 17)
- **BFCL v4:** **72.9%** — (Alibaba Cloud: Qwen3.7-Plus launch benchmarks / BenchLM Oct 17)
- **VITA-Bench:** **45.6%** — (Alibaba Cloud: Qwen3.7-Plus launch benchmarks / BenchLM Oct 17)
- **DeepPlanning:** **62.3%** — (Alibaba Cloud: Qwen3.7-Plus launch benchmarks / BenchLM Oct 17)
- **GDPval-AA (Elo):** **886** — (Artificial Analysis model benchmarks via BenchLM Oct 17 — below ~1750 frontier)
- **GDPval-AA (normalized):** **13.4%** — (Artificial Analysis model benchmarks via BenchLM Oct 17)
- **AA Agentic Index:** **19.7%** — (Artificial Analysis model benchmarks via BenchLM Oct 17)
- **AA Briefcase (Elo):** **1091** — (AA: aa-briefcase leaderboard via BenchLM Oct 17)
- **AA AutomationBench:** **21.3%** — (Artificial Analysis via BenchLM Oct 17)
- **AA EnterpriseOps-Gym:** **32.1%** — (Artificial Analysis via BenchLM Oct 17)
- **AA Harvey LAB v1.0:** **88.4%** — (Artificial Analysis via BenchLM Oct 17)
- **AA Tau3 Banking:** **15.3%** — (Artificial Analysis via BenchLM Oct 17)
- **AA Terminal-Bench 4.0:** **2.0%** — (Artificial Analysis via BenchLM Oct 17)
- **GDP.pdf:** **9.8%** — (Artificial Analysis via BenchLM Oct 17)
- **AA-AnalystAgent:** **10.0%** — (Artificial Analysis via BenchLM Oct 17)
- **terminalBenchHard:** **42.4%** — (Artificial Analysis via BenchLM Oct 17)
- **aaTerminalBench21:** **65.2%** — (AA: terminalbench-v2-1 leaderboard via BenchLM Oct 17)

Reasoning / knowledge:

- **GPQA Diamond:** **90.3%** — (Qwen3.8-27B HF comparison table; also AA-GPQA Diamond **90.0%** via BenchLM Oct 17)
- **HLE:** **34.7%** — (Qwen3.8-27B HF comparison table; also AA-HLE **35.6%** via BenchLM Oct 17)
- **LiveCodeBench v6:** **89.6%** — (Qwen3.8-27B HF comparison table)
- **IFBench:** **79.1%** — (Qwen3.8-27B HF comparison table; also AA-IFBench **78.0%** via BenchLM Oct 17)
- **AA Intelligence Index:** **25.2%** — (Artificial Analysis via BenchLM Oct 17 — bottom quartile)
- **AA-LCR:** **73.0%** — (Artificial Analysis via BenchLM Oct 17)
- **MLCR-AA:** **16.7%** — (Artificial Analysis via BenchLM Oct 17)
- **CritPt:** **9.1%** — (Alibaba Cloud: Qwen3.7-Plus launch benchmarks via BenchLM Oct 17)
- **AA-Omniscience Index:** **1.1%** — (Artificial Analysis via BenchLM Oct 17)
- **AA-Omniscience Accuracy:** **22.5%** — (Artificial Analysis via BenchLM Oct 17)
- **AA-Omniscience Hallucination Rate:** **27.7%** — (Artificial Analysis via BenchLM Oct 17)
- **MMLU-Pro:** **88.5%** — (Alibaba Cloud via BenchLM Oct 17)
- **MMLU-Redux:** **94.5%** — (Alibaba Cloud via BenchLM Oct 17)
- **SuperGPQA:** **71.4%** — (Alibaba Cloud via BenchLM Oct 17)
- **MMMLU:** **89.0%** — (Alibaba Cloud via BenchLM Oct 17)

Coding:

- **Terminal-Bench 2.1:** **64.0%** — (Qwen3.8-27B HF comparison table)
- **SWE-bench Pro:** **57.6%** — (Qwen3.8-27B HF comparison table)
- **SWE-bench Verified:** **77.7%** — (Alibaba Cloud via BenchLM Oct 17)
- **SWE Multilingual:** **75.8%** — (Alibaba Cloud via BenchLM Oct 17)
- **DeepSWE 1.1:** **14.2%** — (Qwen3.8-27B HF comparison table)
- **LiveCodeBench v6:** **89.6%** — (Qwen3.8-27B HF comparison table)
- **NL2Repo-Bench:** **41.1%** — (Qwen3.8-27B HF comparison table)
- **QwenSWEBench:** **59.2%** — (Qwen3.8-27B HF comparison table)
- **SciCode:** **51.3%** — (Alibaba Cloud via BenchLM Oct 17)
- **AA-SciCode:** **46.1%** — (Artificial Analysis via BenchLM Oct 17 — below 55% frontier)
- **AA Coding Index:** **55.9%** — (Artificial Analysis via BenchLM Oct 17)
- **VIBE V2:** **50.1%** — (from Qwen3.8-27B HF comparison table)
- **SWE-bench (Vals):** **75.8%** — (Vals AI via BenchLM Oct 17)

Long context:

- **RealWorldQA:** **86.9%** — (Qwen3.8-27B HF comparison table)
- **OmniDocBench 1.5:** **91.4%** — (Qwen3.8-27B HF comparison table; updated to 91.4% via BenchLM Oct 17)
- **MathVision (Without CI):** **90.3%** — (Qwen3.8-27B HF comparison table)
- **BabyVision (Without CI):** **64.7%**, (With CI): **70.4%** — (Qwen3.8-27B HF comparison table)
- **CharXiv (RQ) (Without CI):** **85.8%**, (With CI): **78.8%** — (Qwen3.8-27B HF comparison table)
- **MRCR v2:** **91.7%** — (Alibaba Cloud via BenchLM Oct 17)

Multimodal & grounded:

- **MMMU-Pro:** **79%** — (Alibaba Cloud via BenchLM Oct 17)
- **AA-MMMU-Pro:** **80.5%** — (Artificial Analysis via BenchLM Oct 17)
- **CharXiv:** **85.9%** — (Alibaba Cloud via BenchLM Oct 17)
- **ERQA:** **69.8%** — (Alibaba Cloud via BenchLM Oct 17)
- **MedXpertQA (MM):** **71.0%** — (Alibaba Cloud via BenchLM Oct 17)
- **ScreenSpot Pro:** **79.0%** — (Alibaba Cloud via BenchLM Oct 17)
- **SimpleVQA:** **81.7%** — (Alibaba Cloud via BenchLM Oct 17)
- **MMSearch-Plus:** **41.4%** — (Alibaba Cloud via BenchLM Oct 17)
- **RealWorldQA:** **86.9%** — (Alibaba Cloud via BenchLM Oct 17)
- **OCRBench V2:** **70.7%** — (Alibaba Cloud via BenchLM Oct 17)
- **ODINW13:** **51.1%** — (Alibaba Cloud via BenchLM Oct 17)
- **Video-MME (with subtitle):** **88.0%** — (Alibaba Cloud via BenchLM Oct 17)
- **VideoMMMU:** **85.4%** — (Alibaba Cloud via BenchLM Oct 17)
- **MLVU (M-Avg):** **87.4%** — (Alibaba Cloud via BenchLM Oct 17)
- **Design Arena Website:** **1271** — (OpenRouter via BenchLM Oct 17)

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = half-up mean of the five quality dims (see `RULES.md`). Cost excluded.
> Confidence: high — 71 public benchmarks found across 4 sources (Qwen3.8-27B HF comparison table, BenchLM Oct 17, Artificial Analysis Oct 17, Alibaba Cloud launch blog).

- **Tool use: 83/100.** Terminal-Bench 2.0 at 70.3% and TB 2.1 at 64.0% are solid mid-tier; τ²-bench at **93%** (near-frontier, ~95.6%) is a strong agentic signal; BrowseComp 83.5%, MCP Atlas 73.2%, OSWorld-Verified 73.3%, AndroidWorld 81.0% provide broad agentic coverage. However, GDPval-AA Elo 886 (below ~1750 frontier), GDPval-AA normalized 13.4% (well below 50% frontier), AA Agentic Index 19.7%, GDP.pdf 9.8%, and AA-AnalystAgent 10.0% are very weak. Mixed profile: excellent on τ²-bench 93% but poor on general agentic capability metrics.

- **Reasoning: 84/100.** GPQA Diamond 90.3% is near-frontier (≥90 threshold); AA-GPQA 90.0%, HLE 34.7% (below 40% threshold), IFBench 79.1%, AA-LCR 73.0%, and MMLU-Redux 94.5% show strong knowledge reasoning. However, AA Intelligence Index 25.2% (bottom quartile), CritPt 9.1% (very weak physics), MLCR-AA 16.7% (weak), and AA-Omniscience Index 1.1% (poor reliability) cap the score. Strong knowledge benchmarks offset by very low general intelligence index.

- **Context window: 95/100.** Native 1M token context (QwenCloud: Max Input 991K, Max Output 131K, Context 1M). Scores in the ≥1M tier per methodology; 95 rather than 100 since no verified retrieval-at-512K+ percentage was found.

- **Multimodal: 85/100.** Image + video input, text output, built-in tools. BenchLM Oct 17 confirms: MMMU-Pro 79%/AA 80.5%, CharXiv 85.9%, ScreenSpot Pro 79.0%, OmniDocBench 91.4%, Video-MME 88.0%, MLVU 87.4%, Design Arena 1271. +video in → 75-90 tier; 85 reflects strong multimodal agent capabilities.
- **Coding: 83/100.** LiveCodeBench v6 at 89.6% is elite; SWE-bench Verified 77.7%, SWE-bench (Vals) 75.8%, SWE-bench Pro 57.6%, QwenSWEBench 59.2% provide strong evidence. However, DeepSWE 14.2% (weak), SciCode 51.3%/AA-SciCode 46.1% (below 55% frontier), AA Coding Index 55.9% (mid-tier), and no Vibe Code Bench data cap the score.
- **Cost efficiency: 93/100.** $0.40 input / $1.60 output per 1M tokens on both OpenCode Zen and QwenCloud. Well below the $0.60/$2.20 tier (~92), placing it at 93.
- **Overall Score: 86/100.** Mean of five non-cost dimensions: (83 + 84 + 95 + 85 + 83) / 5 = 430 / 5 = 86. Strong multimodal reasoning+agent model with 1M context and affordable pricing; τ²-bench 93% demonstrates frontier-capable agentic planning; cap: GDPval-AA 886 (below 1750 frontier), IA 25.2% (bottom quartile), HLE 34.7% (below 40%), DeepSWE 14.2%. Updated Oct 17 — 71 of 639 benchmarks on BenchLM now mapped (was 14 from HF table on Oct 10); new agentic data from Alibaba blog + AA leaderboards integrated.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1:free)** — 2026-10-17 (UTC)
- Method: public internet research via Qwen3.8-27B HuggingFace model card comparison table, Qwen Cloud pricing/specs pages, OpenCode Zen docs, BenchLM model page (Oct 17, 71 of 639 benchmarks), Artificial Analysis model benchmarks, and Alibaba Cloud launch blog; scores are normalized 1–100 interpretations, not official vendor scores. Zero-influence: did not read peer `model/` findings files during research.
- Re-verification (2026-10-17): Oct 17 BenchLM page (overall 53.76, #80/954, 71 of 639 benchmarks) added 57 new benchmark rows from Alibaba blog + AA leaderboards, expanding coverage from 14→71 benchmarks; GDPval-AA added (886 Elo / 13.4% normalized — weak, below frontier), τ²-bench 93% (near-frontier new), new agentic/coding/multimodal/reasoning benchmarks confirmed; normalized scores retained at 86.

---
