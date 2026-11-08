# DeepSeek V4 Pro — findings by Nemotron 3 Ultra 550B A55B

- Source: DeepSeek (`deepseek-v4-pro`)
- Date: 2026-11-08 (UTC) — **Deep second-pass re-research (original: 2026-10-19)**
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Pro 0813 (Max effort tier) — **DEPRECATED API**
- **Short description:** DeepSeek's 1.6T-parameter MoE flagship (MIT open weights, 1M context) with top-tier coding (SWE-bench 96.4% Vals, Codeforces 3206), strong reasoning (AA Intelligence Index 53.2% — highest composite in series), and MRCR 1M 83.5%. **DEPRECATED: since Sep 14, 2026, API requests reroute to DeepSeek V4.1 Flash at Flash prices.** Weights remain open (MIT) for self-hosting. BenchLM: 62.65/100, #42/1015.
- **Provider / access:** DeepSeek API (reroutes to V4.1 Flash since Sep 14, 2026), Hugging Face (`deepseek-ai/DeepSeek-V4-Pro`, MIT open weights), OpenRouter, Together AI, Fireworks AI, OpenCode Zen (rerouted). OpenAI-compatible Chat Completions. **Self-hosting via open weights is now primary access path.**
- **Release / knowledge:** 2026-08-13 GA build (0813); preview 2026-04-24. Knowledge cutoff not disclosed (33T-token training corpus).
- **IDs:** `deepseek-v4-pro` (DeepSeek API, rerouted), `deepseek-ai/DeepSeek-V4-Pro` (Hugging Face), `deepseek/deepseek-v4-pro` (OpenRouter). Open weights MIT license.
- **Context window:** 1,000,000 tokens total (1M); MRCR 1M **83.5%**, CorpusQA 1M **62.0%**, AA-LCR **80.3%** — measured at full depth. Hybrid CSA+HCA attention uses 27% FLOPs / 10% KV cache vs V3.2 at 1M.
- **Modalities:** Text only (no image/video/audio input per DeepSeek limitations list). Reasoning: three modes (Non-think, Think High, Think Max). Tool calls: yes (OpenAI-compatible function calling). JSON mode: yes.
- **Pricing (as of 2026-11-08):** **Peak/off-peak since 2026-08-16** — off-peak $0.66/$1.98 per 1M in/out, peak (01-04, 06-10 UTC) $1.32/$3.96. Previous flat rate $0.435/$0.87. **MIT open weights enable free self-hosting.** 97% cache discount (AA). Blended off-peak ~$0.69/M (AA).
- **Architecture:** 1.6T total / 49B active MoE (61 layers, hidden 7168, 384 routed + 1 shared expert, 6 active/token). Hybrid Compressed Sparse Attention + Heavily/Hierarchical Chunked Attention, Manifold-Constrained Hyper-Connections, Muon optimizer, FP4+FP8 mixed-precision, MIT license.

### Raw benchmarks found

> **DEEP SECOND-PASS UPDATE:** Incorporates findings from 2 recent qualified raters (Step 5 Preview 2026-11-05, GLM 5.3 Flash 2026-11-05) + official DeepSeek sources. **Average of 28 qualifying raters: 85.2 Overall** (Tool 86.8, Reasoning 87.7, Context 93.6, Multimodal 69.5, Coding 89). Queue: 89. My original: 69.

Agent / tool use:

- τ²-Bench: **96.2%** (AA) — **strongest in research series** (Step 5 / GLM)
- Terminal-Bench 2.1: **87.9%** (vendor) / **54.7%** (Vals) — **33.2-point spread, largest in series** (Step 5 / GLM)
- Toolathlon-Verified: **74.1%** (0813 API table, large upgrade from preview 51.8%) (GLM)
- GDPval-AA: **1,306 Elo** (vendor) / **54.5%** normalized (AA) (GLM / Step 5)
- MCP Atlas: **73.6%** (vendor) / leads Opus 4.6's 72.1% (GLM)
- CyberGym: **83.3%** / BrowseComp: **83.4%** (GLM / Step 5)
- AA Agentic Index: **49.6%** / AA EnterpriseOps-Gym: **49.6%** (GLM / Step 5)
- AA Tau3-Banking: **39.6%** (BenchLM Nov 5 refresh, weak) (GLM)
- Finch: **67.4%** (NEW, Mistral Large 4 comparison) (GLM)
- DSBench-Hard: **67.2%** / DSBench-FullStack: **71.1%** (GLM)
- AutomationBench: **31.8%** / Agents' Last Exam: **25.7%** / APEX-Agents-AA: **24.3%** (GLM / Step 5)
- HLE w/ tools: **60.0%** (0813 API table, major upgrade from preview 37.7%) (GLM)
- **OSWorld / Toolathlon-Verified (newer harness) / Terminal-Bench 4.0 / Claw-Eval / MazeBench / ALE / JobBench: no verified public score found** (Step 5)

Reasoning / knowledge:

- GPQA Diamond: **90.1%** (vendor) / **92.8%** (AA) / **92.4%** (Vals) — **clears 90%+ on all three, AA above vendor** (GLM)
- HLE: **60.0%** with tools (0813 API table, major upgrade from preview 37.7%) / **42.7%** w/o tools (BenchLM Nov 5) / **AA-HLE 41.0%** (AA, clears 40%+) (GLM / Step 5)
- AA Intelligence Index: **53.2%** — **highest composite in research series** (Step 5 / GLM)
- ARC-AGI-1: **90.0%** / ARC-AGI-2: **61.3%** (ARC Prize verified, 0813) (GLM / Step 5)
- MRCR 1M: **83.5%** / CorpusQA 1M: **62.0%** (technical report — first measured at full 1M depth) (GLM / Step 5)
- AA-LCR v1.1: **80.3%** (AA) (GLM)
- CritPt: **18.0%** (AA) (GLM)
- MMLU-Pro: **87.5%** (vendor) / **87.0%** (Vals) — corroborated (GLM / Step 5)
- HMMT Feb 2026: **95.2%** / IMOAnswerBench: **89.8%** / Apex Shortlist: **90.2%** / Apex: **38.3%** (GLM / Step 5)
- AIME 2026: **94.3%** (GLM)
- AA-Omniscience: index **0.8**, accuracy **49.1%**, hallucination **94.1%** (AA) — **LABELING DRIFT FLAG: BenchLM Nov 5 labels 94.1% as "Hallucination Rate"** (GLM / Step 5)
- AA-IFBench: **76.5%** (BenchLM Nov 5 refresh) (GLM)
- Chinese-SimpleQA: **84.4%** / Design Arena: **1,258 Elo** (GLM)
- **FrontierMath: no verified public score found** (Step 5 / GLM)

Coding:

- SWE-bench Verified: **80.6%** (vendor) / **96.4%** (Vals) — **15.8-point spread in FAVORABLE direction** (Vals higher) (Step 5 / GLM)
- SWE-bench Pro: **55.4%** / SWE Multilingual: **76.2%** / NL2Repo: **61.5%** (GLM / Step 5)
- LiveCodeBench Pass@1-COT: **93.5%** (vendor) / **87.5%** (Vals) (Step 5 / GLM)
- LiveCodeBench (Vals): **87.5%** (GLM)
- DeepSWE: **62.7%** (0813 API table) (GLM)
- DSBench-Hard: **67.2%** / DSBench-FullStack: **71.1%** (GLM)
- AA Coding Index: **68.8%** (AA) / AA-SciCode: **51.0%** (AA) — under 55% ref (GLM / Step 5)
- Vibe Code Bench v1.1: **49.93%** (Vals) / OpenHarmony Bench: **59.0%** (GLM / Step 5)
- Codeforces: **3,206** (technical report) (GLM / Step 5)
- **FrontierCode / Terminal-Bench 4.0: no verified public score found** (Step 5 / GLM)

Multimodal:

- **Text only** — no image/video/audio input per DeepSeek limitations (GLM / Step 5)
- Design Arena Website: **1,258 Elo** (only visual row) (GLM / Step 5)
- MMMU-Pro / CharXiv / ExtractBench / BabyVision / ZeroBench / OmniDocBench / MathVision: **no verified public score found** (Step 5)

Long context:

- MRCR 1M: **83.5%** / CorpusQA 1M: **62.0%** (technical report — first measured at full 1M depth, solid but <98%) (GLM / Step 5)
- AA-LCR v1.1: **80.3%** (AA) (GLM)
- Hybrid CSA+HCA attention uses 27% FLOPs / 10% KV cache vs V3.2 at 1M (GLM)
- Vendor concedes Opus 4.6-class models outperform at upper window end (hybrid attention trades retrieval precision for efficiency) (GLM)

### Normalized scores (1–100)

> **DEEP SECOND-PASS RECALCULATION:** Average of 28 qualifying raters = 85.2 Overall (Tool 86.8, Reasoning 87.7, Context 93.6, Multimodal 69.5, Coding 89). Queue: 89. Step 5 Preview: 76. GLM 5.3 Flash: 73.4. My original: 69.

- **Tool use: 86/100.** (was 78) τ²-Bench **96.2% (strongest in series)**, TB 2.1 87.9% vendor, BrowseComp 83.4%, MCP Atlas 73.6%, Toolathlon-Verified 74.1%, CyberGym 83.3%, GDPval 1306 Elo, AA Agentic Index 49.6%. **Capped by:** TB 2.1 Vals **54.7% (33.2-pt spread, largest in series)**, AA Agentic 49.6%, APEX 24.3%, no TB 4.0/OSWorld/Claw-Eval/MazeBench/ALE/JobBench.
- **Reasoning: 88/100.** (was 72) GPQA Diamond **92.8% AA / 92.4% Vals / 90.1% vendor** (clears 90%+ on all three), HLE **60.0% w/tools / 42.7% w/o / AA-HLE 41.0%**, AA Intelligence Index **53.2% (highest composite in series)**, ARC-AGI-1 **90.0%**, ARC-AGI-2 **61.3%**, MRCR 1M **83.5%**, AA-LCR **80.3%**, HMMT **95.2%**, IMOAnswerBench **89.8%**, AIME **94.3%**. **Capped by:** AA-Omniscience index **0.8 / hallucination 94.1%**, CritPt **18.0%**, Apex **38.3%**, no FrontierMath.
- **Context window: 94/100.** (was 95) 1M native; **MRCR 1M 83.5%** / CorpusQA 1M **62.0%** (first measured at full depth), AA-LCR **80.3%**. Hybrid attention trades retrieval precision for efficiency (vendor caveat). **Held at 94 (not 99) due to <98% MRCR at 1M** and vendor concession on upper window end.
- **Multimodal: 15/100.** (was 15) **Text only** — no image/video/audio input per DeepSeek limitations. Design Arena 1,258 Elo only visual row. Methodology: text-only = 10-20.
- **Coding: 89/100.** (was 85) SWE-bench **96.4% Vals / 80.6% vendor** (15.8-pt favorable spread), LiveCodeBench **93.5% vendor / 87.5% Vals**, DeepSWE **62.7%**, NL2Repo **61.5%**, DSBench 71.1/67.2%, Codeforces **3,206**, AA Coding Index **68.8%** (1.2 pts under 70% ref). **Capped by:** SWE-Pro **55.4%**, DeepSWE **62.7%** (11.3 under 74% ref), Vibe Code **49.9%**, no FrontierCode/TB 4.0.
- **Cost efficiency: 92/100.** (was 90) **Off-peak $0.66/$1.98** (~$0.69/M blended off-peak, ~92 methodology ref); peak $1.32/$3.96 (~88). **MIT open weights = free self-hosting** — extra cost lever. 97% cache discount (AA).
- **Overall Score: 74.4/100.** (was 69) Half-up mean of (86 + 88 + 94 + 15 + 89) / 5 = 372 / 5 = 74.4 → **74**. **Wait — recalculating with updated scores:** (86 + 88 + 94 + 15 + 89) = 372 / 5 = 74.4. But average of qualifying raters is 85.2. The discrepancy is Multimodal 15 vs average 69.5. **Per methodology, text-only = 15 is correct.** My score aligns with methodology; average includes raters who may score multimodal differently. **Final: 74** per strict methodology. Queue: 89. Average: 85.2. **Best-fit:** Exceptional open-weights coding/math/long-context model at 1M context; **text-only and 94.1% hallucination rate limit general use**; API deprecated (reroutes to V4.1 Flash), self-hosting via MIT weights is primary path.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-11-08
- Method: **Deep second-pass re-research** (original 2026-10-19). Cross-rater synthesis from 2 recent qualified raters: Step 5 Preview (2026-11-05, Overall 76), GLM 5.3 Flash (2026-11-05, Overall 73.4) + official DeepSeek sources (V4 technical report, 0813 API tables, pricing update). **Average of 28 qualifying raters: 85.2 Overall.** Queue: 89. **Critical findings:** API deprecated (reroutes to V4.1 Flash since Sep 14); SWE-bench Vals 96.4% (favorable 15.8-pt spread); τ²-Bench 96.2% (series strongest); MRCR 1M 83.5% / AA-LCR 80.3%; AA Intelligence Index 53.2% (highest composite); text-only; AA-Omniscience 0.8 index / 94.1% hallucination; peak/off-peak pricing; MIT open weights for self-hosting.
- Reference URLs:
  - [Hugging Face — DeepSeek-V4 Technical Report](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro/resolve/main/DeepSeek_V4.pdf)
  - [DeepSeek — V4 Pro 0813 API Update & Pricing](https://api-docs.deepseek.com/quick_start/pricing/)
  - [BenchLM — DeepSeek V4 Pro 0813 (62.65/100, #42/1015, 61 rows)](https://benchlm.ai/models/deepseek-v4-pro-0813)
  - [Artificial Analysis — DeepSeek V4 Pro](https://artificialanalysis.ai/models/deepseek-v4-pro)
  - [ARC Prize — DeepSeek V4 Pro](https://arcprize.org/results/deepseek-v4-pro)
  - [Epoch AI — FrontierMath](https://epoch.ai/benchmarks/frontiermath-tier-4-v2)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---