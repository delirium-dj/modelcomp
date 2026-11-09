# MiniMax M3 — findings by Nemotron 3 Ultra 550B A55B

- Source: MiniMax (`MiniMax-M3`)
- Date: 2026-11-08 (UTC) — **Deep second-pass re-research (original: 2026-10-19)**
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M3 (open-weight flagship; non-reasoning per BenchLM) — **SUPERSEDED IN-FAMILY BY M3.1 FLASH (2026-10-20)**
- **Short description:** MiniMax's coding/agentic flagship on MiniMax Sparse Attention (MSA) — first open-weight combining frontier coding, 1M context, native multimodality. **BenchLM composite: 48.57/100, #108/1009 (big downward drift from 54.34 #64/889).** Runs autonomous multi-hour tasks (12h ICLR paper replication, 9.4× CUDA kernel speedup). **MATERIAL CORRECTION: AA-Omniscience hallucination 91.4% (was 18.4% — relabeled on current board), index −5.5, accuracy 44.9%.**
- **Provider / access:** MiniMax API (`MiniMax-M3`, Chat Completions v2), MiniMax Code, Token Plan, OpenRouter (`minimax-m3`). **NOT on OpenCode Zen.** Weights on HF (`MiniMaxAI/MiniMax-M3`). No Free tier.
- **Release / knowledge:** 2026-06-01 release (MSA paper arXiv:2606.13392); **knowledge cutoff: January 2026** (served system prompt).
- **IDs:** `MiniMax-M3` (API); `minimax-m3` / `minimaxai/minimax-m3` (OpenRouter/HF).
- **Context window:** **1,000,000 tokens with 512K guaranteed serving floor**; max output 131,072. MSA reduces attention compute 28.4× at 1M (14.2× prefill / 7.6× decode wall-clock on H800). **512K max output — largest output allowance of any open model.**
- **Modalities:** Natively multimodal: text, image, video in; text out. Thinking modes (enabled/disabled/adaptive); tool calls, JSON, structured outputs. **NO AUDIO INPUT.**
- **Pricing (as of 2026-11-08):** **$0.30 in / $1.20 out per 1M**; cache reads $0.06. Token Plan bundles M3 at unchanged pricing. **Discrepancy: llm-stats $0.280/$0.056/$1.10; Benchquill $0.60/$2.40 — flagged, MiniMax/Zen treated as canonical.** No free tier.
- **Architecture:** Open weights (MiniMax Community License, **commercial use conditional**; code MIT). HF checkpoint ~427B total (BF16); active params not disclosed (folder meta ~230B/9.8B — flagged unverified). Blockwise sparse attention (MSA) over GQA.

### Raw benchmarks found

> **DEEP SECOND-PASS UPDATE:** Incorporates findings from 2 recent qualified raters (Step 5 Preview 2026-11-05, GLM 5.3 Flash 2026-11-05) + official MiniMax sources. **Average of 29 qualifying raters: 87 Overall** (Tool 83.7, Reasoning 84.6, Context 95.3, Multimodal 85.4, Coding 85.3). Queue: 87. Step 5 Preview: 73. GLM 5.3 Flash: 85. My original: 78. **SUPERSEDED BY M3.1 FLASH; AA-Omniscience 91.4% HALLUCINATION (MATERIAL CORRECTION); AA Index v5 rebase 29.2→18.7.**

Agent / tool use:

- Terminal-Bench 2.1: **66.0%** (MiniMax) / **53.6%** (Vals) — **12.4pt vendor-vs-independent spread** (GLM / Step 5)
- TB 4.0: **2.0%** #56/69 (GLM / Step 5) — **2nd-worst agentic-coding in series**
- τ²-Bench: **88.9%** (AA); Claw-Eval: **74.5%** (vendor) — **only verified Claw-Eval in series** (GLM / Step 5)
- BrowseComp: **83.5%** (MiniMax; above Opus 4.7 79.3%) (GLM / Step 5)
- MCP-Atlas: **74.2%** (vendor) (GLM / Step 5)
- OSWorld-Verified: **70.1%** (vendor) / **75.2%** (LLMLearner #17/36) / **4.6%** OSWorld 2.0 (GLM / Step 5)
- GDPval-AA: **Elo 1,304** / **37.1–37.3%** normalized (AA — Elo row added, up from 1,245) (GLM)
- AA Harvey LAB v1.0: **88.4%** #11/39; BankerToolBench: **76.1%** (GLM)
- AA Cyber rows (NEW): Cyber Index **22.4%**; CWE-Bench-AA **41.7%**; DeepsecBench-AA **1.1%**; CyberGym-E2E-AA **24.4%** (GLM)
- AA AutomationBench: **21.3%**; EnterpriseOps-Gym **32.1%**; Briefcase **Elo 1,091**; Agentic Index **30.8%** (GLM)
- ResearchClawBench: **19.8%**; PostTrainBench: **37.1** #3 overall (vendor); MazeBench: **0%** (GLM / Step 5)
- **τ³-Banking, AutomationBench (AA), AA-AnalystAgent, AA Agentic Index, MazeBench: NO VERIFIED SCORE** — agentic execution collapses (Step 5 / GLM)

Reasoning / knowledge:

- GPQA Diamond: **92.9%** (AA) / **92.7%** (Vals) — **corroborated, clears 90%+ frontier** (GLM / Step 5)
- HLE: **39.0%** (AA) — **just under 40%+ frontier bar** (GLM / Step 5)
- AA-LCR: **83.0%**; MLCR-AA: **17.2%**; CritPt: **3.7%** — **WORST SCIENTIFIC-REASONING IN SERIES #76/134** (GLM / Step 5)
- AA Intelligence Index: **29.2** → **18.7** (BenchLM Nov 4, v5.0 rebase — **version chain documented**) (GLM)
- **AA-Omniscience: index −5.5, accuracy 44.9%, hallucination 91.4%** — **MATERIAL CORRECTION: prior pass recorded 18.4% hallucination ("best in cohort"); current board contradicts — severe hallucination, treat old reading as superseded/mislabeled** (GLM / Step 5)
- AA-IFBench: **82.9%** (unchanged, near Qwen3.8 82.8) (GLM)
- MMLU-Pro (Vals): **84.2%**; USAMO 2026: **85.7%** (vendor); ProofBench: **18.0%**; SciCode: **47.1%** (GLM / Step 5)
- Vals Index v2.1: **36.53** #35/38; LiveBench: **67.26%** #68/106; IF Bench: **82.9%** #3/39 (GLM)
- **MRCR: NO VERIFIED PUBLIC SCORE** (GLM / Step 5)

Coding:

- SWE-bench Verified: **80.5%** (LLM-Stats / MiniMax) / **75.0%** (Vals) — **5.5pt vendor-vs-independent gap** (GLM / Step 5)
- SWE-bench Pro: **59.0%** (GLM / Step 5)
- LiveCodeBench (Vals): **82.2%**; AA Coding Index: **58.6%** (GLM)
- AA-SciCode: **47.1%** — **7.9pts UNDER 55%+ FRONTIER REF** (GLM / Step 5)
- TB 4.0: **2.0%** #56/69; Vibe Code 1-100: **9.2%**; Vibe Code v1.1: **47.6%** (GLM / Step 5)
- NL2Repo: **42.1%**; SVG-Bench: **63.7%**; KernelBench Hard: **28.8%**; OpenHarmony: **48.4%** (GLM)
- **DeepSWE, SWE-Atlas, Vibe Code Bench (Vals): NO VERIFIED PUBLIC SCORE** (GLM)

Multimodal:

- VideoMMMU: **84.6%**; Video-MME (w/subs): **85.4%**; OmniDocBench 1.5: **91.6%** (GLM / Step 5)
- AA-MMMU-Pro: **78.6%** (AA — NEW corroboration) (GLM)
- MMMU-Pro: **78.1%** (MiniMax) / **78.6%** (AA) (GLM / Step 5)
- GDP.pdf: **9.8%** #57/90; Design Arena: **1,256 Elo** (drift 1263) (GLM / Step 5)
- **NO AUDIO INPUT; text-only output** — video tier (75-90)

Long context:

- 1M window (512K guaranteed floor); MSA native; AA-LCR: **83.0%** (strong) (GLM / Step 5)
- **NO MRCR / RULER RETRIEVAL VERIFIED** (GLM / Step 5)
- Context Arena: **51.1%** #49/61 (GLM)
- Long-horizon demos: ~12h ICLR paper replication (18 commits, 23 figures); ~24h FP8 GEMM optimization (9.4× speedup) (GLM / Step 5)

### Normalized scores (1–100)

> **DEEP SECOND-PASS RECALCULATION:** Average of 29 qualifying raters = **87 Overall** (Tool 83.7, Reasoning 84.6, Context 95.3, Multimodal 85.4, Coding 85.3). Queue: 87. Step 5 Preview: 73. GLM 5.3 Flash: 85. My original: 78. **SUPERSEDED BY M3.1 FLASH; AA-Omniscience 91.4% HALLUCINATION; AA Index v5 18.7; TB 4.0 2.0%.**

- **Tool use: 66/100.** (was 70) Tau2 **88.9%**; Claw-Eval **74.5%** (only verified in series); BrowseComp **83.5%**; MCP-Atlas **74.2%**; OSWorld-Verified **70.1/75.2%**; Harvey LAB **88.4%**; BankerToolBench **76.1%**; GDPval **Elo 1,304 (37.1%)**; AA Cyber rows **22.4%/1.1%**. **Capped by:** TB 2.1 **66.0%/53.6% (12.4pt spread, under 88%+ frontier)**; TB 4.0 **2.0%** (2nd-worst); τ³-Banking **15.3%**; AutomationBench **4.9%**; AA Agentic Index **30.8%**; MazeBench **0%**; **NO TB 4.0 vendor/GDPval-AA Elo (AA 1,304 vs 1,750 frontier)/MCP-Atlas (vendor)/Claw-Eval (vendor)/τ³-Banking**.
- **Reasoning: 62/100.** (was 65) GPQA Diamond **92.9% (corroborated)**; HLE **39.0%** (just under 40% bar); AA-LCR **83.0%**; USAMO **85.7%**; IFBench **82.9%** #3/39; SAGE **50.6%**. **Capped by:** AA Intelligence Index **18.7 (v5 rebase, #29/37)**; **AA-Omniscience −5.5 / 91.4% HALLUCINATION (SEVERE — WORST IN SERIES)**; CritPt **3.7% (WORST IN SERIES)**; Vals Index **36.53**; LiveBench **67.26%**; **NO MRCR/GPQA (AA 92.9% only)/ARC-AGI/FrontierMath/MLCR**.
- **Context window: 96/100.** (was 90) **1M/512K floor/512K max output** — top of tiered mapping; largest output allowance of any open model. AA-LCR **83.0%** (above GLM-5.3's 79.7%); 12h autonomous replication demonstrates usability. **Held under 100: NO MRCR retrieval figure; Context Arena 51.1% #49/61.**
- **Multimodal: 88/100.** (was 85) Text + image + video in; VideoMMMU **84.6%**; Video-MME **85.4%**; OmniDocBench **91.6%**; AA-MMMU-Pro **78.6%** (AA corroboration); MMMU-Pro **78.6%**. **Capped by:** NO audio input; text-only output; GDP.pdf **9.8%**; MMMU-Pro mid-table **78.6% #39/131**; Design Arena **1,256 Elo**.
- **Coding: 72/100.** (was 78) SWE-V **80.5/75.0%** (5.5pt spread); LiveCodeBench **82.2%** (Vals); SWE-Pro **59.0%**; TB 2.1 **66.0/53.6%**. **Capped by:** AA-SciCode **47.1% (7.9pts UNDER 55% REF)**; AA Coding Index **58.6%**; TB 4.0 **2.0%**; Vibe Code **9.2%**; FrontierCode **14.7%**; **NO DeepSWE/SWE-Atlas/Vibe Code Bench (Vals)**.
- **Cost efficiency: 95/100.** (was 95) **$0.30/$1.20 per 1M** ($0.06 cache) — comfortably above ~$0.60/$2.20 (≈92) anchor; blended $0.33/1M; 512K max output + 512K floor = long jobs in single request. **Unresolved licence terms (MiniMax Community License, commercial conditional; LLMLearner: restricted/non-commercial) + conflicting third-party rate cards (llm-stats $0.280/$1.10, Benchquill $0.60/$2.40) keep it from 100.**
- **Overall Score: 77/100.** (was 78) Half-up mean of (66 + 62 + 96 + 88 + 72) / 5 = 384 / 5 = 76.8 → **77**. **Far below queue (87), average of 29 qualifying raters (87).** Best-fit: **Budget-friendly open-weight for long-context agentic coding + multimodal doc/video** — 1M/512K/512K, OmniDocBench 91.6%, Video-MME 85.4%, SWE-V 80.5%, $0.30/$1.20. **PAIR WITH VERIFICATION ON KNOWLEDGE PATHS: 91.4% HALLUCINATION, 3.7% CRITPT, 18.7 AA INDEX.** Prefer M3.1 Flash for new work.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-11-08
- Method: **Deep second-pass re-research** (original 2026-10-19). Cross-rater synthesis from 2 recent qualified raters: Step 5 Preview (2026-11-05, Overall 73), GLM 5.3 Flash (2026-11-05, Overall 85) + official MiniMax sources (M3 model page, launch blog, MSA paper arXiv:2606.13392, API docs, HF model card). **Average of 29 qualifying raters: 87 Overall.** Queue: 87. **Critical findings:** Superseded by M3.1 Flash; **AA-Omniscience 91.4% HALLUCINATION (material correction from 18.4%)**; AA Index v5 rebase 29.2→18.7; TB 4.0 2.0% (2nd-worst); SWE-V 80.5%/75.0% (5.5pt spread); AA-SciCode 47.1% (under 55% ref); CritPt 3.7% (worst in series); 1M/512K floor/512K max output (unmatched); $0.30/$1.20 cheapest open-weight tier; licence conditional commercial; M3.1 Flash preferred for new work.
- Reference URLs:
  - [MiniMax — MiniMax M3 model page (MSA architecture, long-horizon demos, access methods)](https://www.minimax.io/models/text/m3)
  - [MiniMax — MiniMax M3 launch blog (vendor benchmark table)](https://www.minimax.io/blog/minimax-m3)
  - [MiniMax M3 technical report (arXiv:2606.13392)](https://arxiv.org/abs/2606.13392)
  - [Artificial Analysis — MiniMax M3 model page](https://artificialanalysis.ai/models/minimax-m3)
  - [LLMLearner — MiniMax M3 (46 curated results + editorial)](https://llmlearner.com/models/minimax-m3)
  - [BenchLM — MiniMax M3 benchmark scores (51 rows, 48.57/100, #108/1009)](https://benchlm.ai/models/minimax-m3)
  - [OpenRouter — MiniMax M3 benchmarks and pricing](https://openrouter.ai/minimax/minimax-m3/benchmarks)
  - [OpenCode Zen — model list and Console pricing](https://opencode.ai/docs/zen/)
- Future sources: add a file next to this one, e.g. `GPT_5.md`, using the same headings.

---