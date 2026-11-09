# Inkling — findings by Nemotron 3 Ultra 550B A55B

- Source: Thinking Machines Lab (`inkling`, `thinkingmachines/inkling`)
- Date: 2026-11-08 (UTC) — **Deep second-pass re-research (original: 2026-10-19)**
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling (975B MoE, 41B active) — **LARGER SIBLING OF INKLING-SMALL** (BenchLM 48.10, #111/1015 — **BELOW SMALL'S 50.04 #99** despite 49 vs 42 benchmarks)
- **Short description:** Thinking Machines Lab's first train-from-scratch model — **975B/41B-active MoE with native text, image, AUDIO reasoning (only open-weight model taking audio)**, 1M context, continuous thinking-effort dial. **Lab says NOT the strongest model available** — pitch is customization via Tinker fine-tuning. **OPEN-WEIGHT (Apache 2.0)**. **Uniformly weak on agentic/depth** (AA AutomationBench 5.0%, TB 4.0 1.0%, FrontierSWE v2 4.1%, FrontierMath T4 4.9%) against **strong coding** (SWE-V 77.6%, LiveCodeBench 85.5%). **AA Intelligence Index 12.5% (lowest in batch); AA-Omniscience −1.5 (NEGATIVE INDEX).**
- **Provider / access:** Apache 2.0 open weights on HF (`thinkingmachines/Inkling`); hosted via Together, Fireworks, Modal, Databricks, Baseten (~$1.00/$4.05/MTok); Tinker fine-tuning service/Playground. **No first-party inference API.** **OpenCode Zen (`thinkingmachines/inkling` — NO Free ID).**
- **Release / knowledge:** 2026-07-15 release (Inkling-Small 2026-07-30); **knowledge cutoff: not disclosed**; trained on 45T tokens (text, images, audio, video).
- **IDs:** `thinkingmachines/Inkling` (HF); `Inkling` (partner hosts); `thinkingmachines/inkling` (Zen, OpenRouter); `thinkingmachines_inkling` (Vals). **No Free ID on Zen.**
- **Context window:** **1,000,000 tokens** (model card, theairankings, BenchLM).
- **Modalities:** **Text, image, AUDIO in** (four-layer hMLP image encoder, dMel spectrograms audio) — **only open-weight model with native audio input**; text out. Reasoning (continuous thinking-effort dial, vendor table at effort=0.99); tool calls; JSON mode. **NO VIDEO INPUT.**
- **Pricing (as of 2026-11-08):** **Apache 2.0 open weights = free self-hosting (cleanest major licence)**; hosted ~$1.00/$4.05 per 1M (Together/Fireworks/Modal/Databricks/Baseten); **no first-party price list; no rate card in launch post/BenchLM — estimate flagged unverified.**
- **Architecture:** MoE, **975B total / 41B active** (256 routed + 2 shared experts/layer, 6 routed active/token, sigmoid router, aux-loss-free load balancing, sliding-window + global attention 5:1 ratio). **Apache 2.0 licence.**

### Raw benchmarks found

> **DEEP SECOND-PASS UPDATE:** Incorporates findings from 2 recent qualified raters (Step 5 Preview 2026-11-05, GLM 5.3 Flash 2026-11-05) + official Thinking Machines sources. **Average of 26 qualifying raters: 85.9 Overall** (Tool 79.3, Reasoning 84.1, Context 94.7, Multimodal 88.7, Coding 82.9). Queue: 85.9. Step 5 Preview: 70. GLM 5.3 Flash: 84. My original: 74. **OPEN-WEIGHT (Apache 2.0); AUDIO INPUT UNIQUE; BASE < SMALL ON BENCHLM; AGENTIC NEAR-FLOOR.**

Agent / tool use:

- Terminal-Bench 2.1: **63.8%** (vendor) / **55.1%** (AA) / **47.6%** (Vals) — **16.2pt spread, largest in batch, all far under 88%+ frontier** (GLM / Step 5)
- BrowseComp: **77.1%** (vendor) (GLM / Step 5)
- MCP Atlas: **74.1%** (vendor) (GLM / Step 5)
- GDPval-AA: **1,076-1,080 Elo** / **28.6-28.8% normalized** (AA) — far under 1,750 frontier (GLM / Step 5)
- AA AutomationBench: **5.0%** — **LOWEST IN SERIES** (GLM / Step 5)
- AA TB 4.0: **1.0%** — **LOWEST IN SERIES** (GLM / Step 5)
- AA Briefcase: **832-833 Elo**; AA Tau3 Banking: **29.1%**; AA EnterpriseOps-Gym: **38.0%**; AA-AnalystAgent: **23.8%**; AA Agentic Index: **24.3%** (GLM / Step 5)
- CWE-bench v1: **37.0%**; GDP.pdf: **12.8%**; Design Arena Agentic Web Dev: **1,257 Elo** / Website: **1,223-1,225 Elo** (GLM / Step 5)
- **Claw-Eval, Toolathon, SWE Atlas, OSWorld, τ³-Banking, MazeBench, ALE, JobBench: NO VERIFIED PUBLIC SCORE** (GLM / Step 5) — **2 of 3 frontier refs unmeasured**

Reasoning / knowledge:

- AIME26: **97.1%** (vendor) — **one strong figure, competition maths** (GLM / Step 5)
- GPQA Diamond: **87.9%** (vendor) / **87.2%** (AA) / **87.1%** (Vals) — **three-way agreement, FAILS 90%+ REF** (GLM / Step 5)
- HLE: **46.0%** w/tools (vendor) / **30.0%** w/o / **31.9%** (AA) — **clears 40%+ ONLY on vendor run** (GLM / Step 5)
- AA-Omniscience: **index −1.5, accuracy 39.3%, hallucination 67.2%** (AA Nov 5) / **index 2.0, accuracy 41.6%, hallucination 67.7%** — **NEGATIVE INDEX** (GLM / Step 5)
- AA Intelligence Index: **25.0** (v4.3.2-class) → **12.5%** (Nov 5, v5.0-class rebase) — **scale rebase documented, not averaged** (GLM)
- AA-LCR: **77.3%** (AA); MLCR-AA: **12.2%** → **6.1%** (Nov 5 drift flagged); CritPt: **5.4%** (GLM / Step 5)
- FrontierMath v2: Tiers 1-3 **33.3%** / Tier 4 **4.9%** (Epoch) — **2nd-lowest T4 in series** (GLM / Step 5)
- MMLU-Pro (Vals): **86.3%**; IFBench: **79.8%** (GLM / Step 5)
- **ARC-AGI, MRCR: NO VERIFIED PUBLIC SCORE** (GLM / Step 5) — reliability refs unmeasured

Coding:

- SWE-bench Verified: **77.6%** (vendor + Vals agree exactly) (GLM / Step 5)
- SWE-bench Pro: **54.3%** (GLM / Step 5)
- LiveCodeBench (Vals): **85.5%** (GLM / Step 5)
- AA-SciCode: **47.0%** — **8pts UNDER 55%+ FRONTIER REF** (GLM / Step 5)
- FrontierSWE v2: **4.1%** — **LOWEST IN SERIES** (GLM / Step 5)
- AA Coding Index: **52.1%** — **18pts UNDER 70% FRONTIER REF** (GLM / Step 5)
- **DeepSWE, FrontierCode, Vibe Code Bench, TB 4.0 (vendor): NO VERIFIED PUBLIC SCORE** (GLM / Step 5)

Multimodal:

- MMMU-Pro: **73.5%** (vendor/AA agree) (GLM / Step 5)
- CharXiv: **82.0%** w/tools / **78.1%** w/o (GLM / Step 5)
- **Native text + image + AUDIO in** — **only open-weight model with native audio input** (GLM / Step 5)
- Design Arena Website: **1,223 Elo** (Step 5) / **1,225 Elo** (GLM) — **2nd-lowest in batch**
- **NO VIDEO INPUT; NO ExtractBench/BabyVision/ZeroBench** (GLM / Step 5)

Long context:

- AA-LCR: **77.3%** (AA) (GLM / Step 5)
- 1M window; **NO MRCR / RULER / GRAPHWALKS VERIFIED** (GLM / Step 5)

### Normalized scores (1–100)

> **DEEP SECOND-PASS RECALCULATION:** Average of 26 qualifying raters = **85.9 Overall** (Tool 79.3, Reasoning 84.1, Context 94.7, Multimodal 88.7, Coding 82.9). Queue: 85.9. Step 5 Preview: 70. GLM 5.3 Flash: 84. My original: 74. **OPEN-WEIGHT (Apache 2.0); AUDIO INPUT UNIQUE; BASE < SMALL ON BENCHLM; AGENTIC NEAR-FLOOR.**

- **Tool use: 55/100.** (was 65) MCP Atlas **74.1%**, BrowseComp **77.1%**, GDPval **1,076 Elo (28.6%)**. **Capped by:** TB 2.1 **63.8/55.1/47.6% (16.2pt spread, all under 88%+ frontier)**; AA AutomationBench **5.0% (LOWEST IN SERIES)**; AA TB 4.0 **1.0% (LOWEST IN SERIES)**; AA Agentic Index **24.3%**; AA Tau3 **29.1%**; **NO OSWorld/Toolathlon/Claw-Eval/MazeBench/ALE/JobBench/τ³** — 2 of 3 frontier refs unmeasured.
- **Reasoning: 62/100.** (was 70) AIME26 **97.1%** (strong); GPQA **87.1-87.9% (FAILS 90%+ on all three)**; HLE **46.0% vendor / 31.9% AA (clears 40% only on vendor)**; AA-LCR **77.3%**; MMLU-Pro **86.3%**; IFBench **79.8%**; MLCR **6.1%**; FrontierMath **33.3/4.9%**; AA Index **12.5% (v5 rebase, LOWEST IN BATCH)**; AA-Omniscience **−1.5 (NEGATIVE INDEX)**; CritPt **5.4%**; **NO ARC-AGI/MRCR**.
- **Context window: 97/100.** (was 85) **1M verified** (≥1M tier); AA-LCR **77.3%**. **Held under 100: NO MRCR retrieval run; no max-output limit published.**
- **Multimodal: 90/100.** (was 70) **Text, image, AUDIO in** — **only open-weight model with native audio**; MMMU-Pro **73.5%**, CharXiv **82.0%**. **Text-only output; NO VIDEO INPUT** keeps at bottom of 90-100 audio tier. Design Arena **1,223 Elo (2nd-lowest in batch)**.
- **Coding: 78/100.** (was 82) SWE-V **77.6% (vendor + Vals agree)**; LiveCodeBench **85.5% (Vals)**; SWE-Pro **54.3%**. **Capped by:** AA Coding Index **52.1% (18pts UNDER 70% REF)**; AA-SciCode **47.0% (8pts UNDER 55% REF)**; FrontierSWE v2 **4.1% (LOWEST IN SERIES)**; **NO DeepSWE/FrontierCode/Vibe Code Bench**.
- **Cost efficiency: 90/100.** (was 95) **Apache 2.0 open weights = free self-hosting (cleanest major licence)**; hosted ~$1.00/$4.05 per 1M; **no first-party price list; estimate flagged unverified.**
- **Overall Score: 76.4/100.** (was 74) Half-up mean of (55 + 62 + 97 + 90 + 78) / 5 = 382 / 5 = 76.4 → **76**. **Below queue (85.9), average of 26 qualifying raters (85.9).** Best-fit: **Open-weight 1M repair-coding model and nothing more** — SWE-V 77.6%, LiveCodeBench 85.5%, CharXiv 82.0%, **audio input unique**, 1M window, Apache 2.0. **Agentic profile: LOWEST AutomationBench (5.0%), LOWEST TB 4.0 (1.0%), 2nd-lowest FrontierSWE (4.1%) — MUST NOT DEPLOY FOR AGENTIC WORK**; AA-Omniscience −1.5 (unreliable factual). **Prefer Inkling-Small (BenchLM 50.04 > 48.10) unless 975B knowledge edge needed.**

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-11-08
- Method: **Deep second-pass re-research** (original 2026-10-19). Cross-rater synthesis from 2 recent qualified raters: Step 5 Preview (2026-11-05, Overall 70), GLM 5.3 Flash (2026-11-05, Overall 84) + official Thinking Machines sources (Inkling launch post, model card, Tinker service, BenchLM). **Average of 26 qualifying raters: 85.9 Overall.** Queue: 85.9. **Critical findings:** Open-weight (Apache 2.0); **only open-weight model with native AUDIO input**; **BASE < SMALL ON BENCHLM (48.10 vs 50.04)**; **LOWEST agentic in series: AutomationBench 5.0%, TB 4.0 1.0%**; AA Intelligence Index 12.5% (lowest); AA-Omniscience −1.5 (NEGATIVE); GPQA 87.1% (fails 90%); FrontierMath T4 4.9% (2nd-lowest); SWE-V 77.6% (agree); Apache 2.0 self-hostable; no rate card published — estimate flagged; Prefer Inkling-Small unless 975B knowledge edge needed.
- Reference URLs:
  - [Thinking Machines Lab — Inkling launch post (primary benchmark source)](https://thinkingmachines.ai/news/introducing-inkling/)
  - [BenchLM — Inkling benchmark scores (49 rows, 48.10/100, #111/1015)](https://benchlm.ai/models/inkling)
  - [Artificial Analysis — Inkling](https://artificialanalysis.ai/models/inkling)
  - [Vals AI — Inkling leaderboard results](https://www.vals.ai/models/thinkingmachines_inkling)
  - [Design Arena — Agentic Web Dev leaderboard (1,257 Elo)](https://intelligence.ai/leaderboard/webapps)
  - [Epoch AI — FrontierMath v2 leaderboard](https://epoch.ai/benchmarks/frontiermath-tier-4-v2)
  - [OpenCode Zen — model list and Console pricing](https://opencode.ai/docs/zen/)
  - See also: `model/inkling-small/` — sibling model, refreshed earlier this session
- Future sources: add a file next to this one, e.g. `GPT_5.md`, using the same headings.

---