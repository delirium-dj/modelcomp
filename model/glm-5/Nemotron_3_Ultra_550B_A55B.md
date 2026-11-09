# GLM-5 — findings by Nemotron 3 Ultra 550B A55B

- Source: Z.AI / Zhipu AI (`glm-5`)
- Date: 2026-11-08 (UTC) — **Deep second-pass re-research (original: 2026-10-19)**
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5 — **PREVIOUS-GEN FLAGSHIP** (superseded by GLM-5.1 56.09, GLM-5.2 60.23, GLM-5.3 61.28; BenchLM 54.59, #78/1016)
- **Short description:** Z.AI's open-weight flagship of the 5th generation — **744B total / 40B active MoE** with **MIT license**. **Strongest τ²-bench in series (98.2%)**, SWE-V 77.8%, GPQA Diamond 86%, AIME 95.8%, HMMT 97.5%, AA-LCR 75.7%. **Non-Reasoning (BenchLM)**. **200K CONTEXT (1/5 OF 1M STANDARD)**. **Text-only**. **MIT OPEN WEIGHTS**.
- **Provider / access:** **OPEN WEIGHTS, MIT LICENSE** on HF (`zai-org/GLM-5`); Z.AI API, chat.z.ai, FriendliAI, Ollama, **OpenCode Zen (`opencode/glm-5` — NO FREE ID)**. Self-hosting viable. **NO FREE ID ON ZEN.**
- **Release / knowledge:** 2026-02-11 release; **knowledge cutoff: NOT DISCLOSED.**
- **IDs:** `glm-5` (Z.AI); `opencode/glm-5` (Zen, paid); `zai-org/GLM-5` (HF). **NO FREE ID ON ZEN.**
- **Context window:** **200,000 tokens total / 128,000 max output** — **1/5 OF 1M STANDARD**.
- **Modalities:** **TEXT IN; TEXT OUT ONLY** — **NO IMAGE/AUDIO/VIDEO INPUT** (BenchLM: Non-Reasoning; repo meta: text-only). Tool calls yes; JSON mode yes. **BenchLM classifies as Non-Reasoning.**
- **Pricing (as of 2026-11-08):** **$1.00 in / $3.20 out per 1M** (Z.AI, FriendliAI, Zen); cached $0.20 (80% discount). **MIT OPEN WEIGHTS = FREE SELF-HOSTING** (no inference bill). **NO FREE HOSTED TIER ON ZEN.**
- **Architecture:** MoE, **744B total / 40B active** (40B widely corroborated; llm-stats 44B outlier); 28.5T tokens pretraining on ~100K Huawei Ascend chips. MIT license.

### Raw benchmarks found

> **DEEP SECOND-PASS UPDATE:** Incorporates findings from 2 recent qualified raters (Step 5 Preview 2026-11-06, GLM 5.3 Flash 2026-10-16) + official Z.AI sources. **Average of 17 qualifying raters: 66.5 Overall** (Tool 78.3, Reasoning 78.7, Context 75.4, Multimodal 18.5, Coding 81.9). Queue: 66.5. Step 5 Preview: 65. GLM 5.3 Flash: 63. My original: 57. **PREVIOUS-GEN: superseded by 5.1/5.2/5.3; 200K CONTEXT; TEXT-ONLY; MIT OPEN WEIGHTS.**

Agent / tool use:

- τ²-bench: **98.2%** — **HIGHEST τ² IN SERIES** (Step 5 / GLM)
- τ³-bench: **65.6%** (Step 5)
- Claw-Eval: **57.7%** (Step 5)
- QwenClawBench: **54.1%** (Step 5)
- WideResearch: **69.8%** (Step 5)
- MCP-Tasks: **60.8%** (Step 5)
- BrowseComp: **62%** (Step 5) / **75.9%** (benchgen) (Step 5 / GLM)
- HLE w/tools: **50.4%** (Step 5)
- MCP-Tasks: **60.8%** (Step 5)
- Toolathlon: **38.0%** (Step 5)
- MCP Atlas: **31.1%** (Step 5)
- APEX-Agents: **14.5%** (Step 5)
- DeepPlanning: **14.6%** (Step 5)
- Gert Labs: **50.99%** (Step 5)
- Terminal-Bench 2.0: **56.2%** (Z.AI) / **43.2%** (Step 5 TB Hard) (GLM / Step 5)
- CyberGym: **43.2%** (Step 5 / GLM)
- APEX-Agents: **14.5%** (Step 5)
- Gert Labs: **50.99%** (Step 5)
- Tau2-bench: **98.2%** (AA) / **98.2%** (Step 5) — **HIGHEST τ² IN SERIES** (GLM / Step 5)
- CyberGym: **43.2%** (GLM / Step 5)
- APEX-Agents: **14.5%** (Step 5)
- GDPval-AA: **NO VERIFIED PUBLIC SCORE** (GLM / Step 5)
- OSWorld: **NO VERIFIED PUBLIC SCORE** (Step 5)
- AA Agentic Index: **NO VERIFIED PUBLIC SCORE** (Step 5)
- MazeBench, ALE, JobBench: **NO VERIFIED PUBLIC SCORE** (Step 5) — **1 of 3 frontier refs unmeasured**

Reasoning / knowledge:

- GPQA Diamond: **86.0%** (Z.AI) / **86%** (Qwen3.6-Plus) / **82.0%** (AA) — **4PTS UNDER 90%+ FRONTIER** (GLM / Step 5)
- HLE: **30.5%** (Z.AI) / **29.3%** (AA) — **FAILS 40%+ REF BY 9.5-10.7PTS** (GLM / Step 5)
- HLE w/tools: **50.4%** (Z.AI) — **clears 40%+ ref** (Step 5)
- AA Intelligence Index: **27.9** (AA) (Step 5 / GLM)
- AA LCR: **75.7%** (AA) (GLM / Step 5)
- CritPt: **2.0%** (AA) — **LOWEST MEASURED IN SERIES** (GLM / Step 5)
- AA HLE: **29.3%** (AA) (GLM / Step 5)
- AA Omniscience Index: **0.3%** (AA) (GLM / Step 5)
- AA Omniscience Accuracy: **26.3%** (AA) (GLM / Step 5)
- AA Omniscience Hallucination Rate: **35.3%** (AA) (GLM / Step 5)
- MMLU-Pro: **85.7%** (Z.AI) / **85.8%** (Arcee) / **83.1%** (MMLU-ProX) (GLM / Step 5)
- AIME 2026: **95.8%** (Z.AI) / **95.8%** (Step 5)
- HMMT Feb 2025: **97.5%** (Z.AI) / **97.5%** (Step 5)
- HMMT Nov 2025: **96.9%** (Z.AI) / **96.9%** (Step 5)
- HMMT Feb 2026: **86.4%** (Z.AI) / **86.4%** (Step 5)
- AA IFBench: **72.3%** (AA) (GLM / Step 5)
- SuperGPQA: **66.8%** (Step 5)
- MMLU-ProX: **83.1%** (Step 5)
- NOVA-63: **55.1%** (Step 5)
- **ARC-AGI, MRCR, MMLU-Pro (Arcee), FrontierMath: NO VERIFIED PUBLIC SCORE** (GLM / Step 5)

Coding:

- SWE-bench Verified: **77.8%** (Z.AI) / **72.8%** (Arcee) — **TWO HARNESS RUNS: 77.8% AND 72.8% (5PT SPREAD)** (GLM / Step 5)
- SWE-bench Pro: **55.1%** (Step 5)
- SWE Multilingual: **73.3%** (Step 5)
- NL2Repo: **35.9%** (Step 5)
- SWE-Rebench: **62.8%** (Step 5)
- React Native Evals: **74.8%** (Step 5)
- Terminal-Bench 2.0: **56.2%** (Z.AI) (GLM / Step 5)
- **LiveCodeBench, AA-SciCode, AA Coding Index, DeepSWE, Vibe Code Bench, FrontierCode: NO VERIFIED PUBLIC SCORE** — **2 of 3 coding frontier refs unmeasured** (GLM / Step 5)

Multimodal:

- **TEXT IN; TEXT OUT ONLY** — **NO IMAGE/AUDIO/VIDEO INPUT** (GLM / Step 5)
- Design Arena Website: **1,246 Elo** (Step 5) / **1,247 Elo** (original) — **BENCHLM MISFILES AS MULTIMODAL** (Step 5)
- **NO MMMU-PRO, CHARXIV, EXTRACTBENCH, BABYVISION, ZEROBENCH, OMNIDOCBENCH, MATHVISION** (GLM / Step 5)

Long context:

- LongBench v2: **60.8%** (Step 5)
- AI-Needle: **63.3%** (Step 5)
- AA LCR: **75.7%** (AA) / **75.7%** (Step 5)
- **NO MRCR / GRAPHWALKS / RULER VERIFIED** (GLM / Step 5)

### Normalized scores (1–100)

> **DEEP SECOND-PASS RECALCULATION:** Average of 17 qualifying raters = **66.5 Overall** (Tool 78.3, Reasoning 78.7, Context 75.4, Multimodal 18.5, Coding 81.9). Queue: 66.5. Step 5 Preview: 65. GLM 5.3 Flash: 63. My original: 57. **PREVIOUS-GEN: superseded by 5.1/5.2/5.3; 200K CONTEXT; TEXT-ONLY; MIT OPEN WEIGHTS.**

- **Tool use: 70/100.** (was 65) τ²-Bench **98.2% (HIGHEST IN SERIES)**; τ³-Bench **65.6%**; Claw-Eval **57.7%**; QwenClawBench **54.1%**; WideResearch **69.8%**; MCP-Tasks **60.8%**; BrowseComp **62-75.9%**; HLE w/tools **50.4%**; MCP-Tasks **60.8%**. **Capped by:** Toolathlon **38%**; MCP Atlas **31.1%**; APEX-Agents **14.5%**; DeepPlanning **14.6%**; Gert Labs **51%**; TB 2.0 **56.2%**; **NO GDPval-AA/OSWorld/AA Agentic Index/MazeBench/ALE/JobBench** — 1 of 3 frontier refs unmeasured. **INTERNAL SPREAD: τ² 98.2% vs APEX 14.5% (83.7PT GAP).**
- **Reasoning: 75/100.** (was 65) GPQA Diamond **86.0%/82.0%** (4pts under 90%+ frontier); MMLU-Pro **85.7-85.8%**; AIME **95.8%**; HMMT **97.5/96.9/86.4%**; AA-LCR **75.7%**; IFBench **72.3%**; SimpleBench **76.9%** (Step 5). **Capped by:** HLE **30.5% (FAILS 40%+ BY 9.5-10.7PTS)**; CritPt **2.0% (LOWEST IN SERIES)**; AA Intelligence Index **27.9**; AA-Omniscience **0.3% index / 26.3% accuracy / 35.3% hallucination**; **NO ARC-AGI/MRCR/FrontierMath/MMLU-Pro (Arcee)** — 4 of 5 reasoning refs unmeasured.
- **Context window: 85/100.** (was 65) **200K/128K (200K-500K BAND CEILING)**; AA-LCR **75.7%**; LongBench v2 **60.8%**; AI-Needle **63.3%**. **Held at band ceiling (not ≥1M tier): 200K = 1/5 of 1M standard; NO MRCR/GraphWalks/RULER.**
- **Multimodal: 15/100.** (was 15) **TEXT-ONLY** — methodology text-only = 10-20. Design Arena **1,246 Elo** is website-gen, NOT image input (Step 5 flagged misclassification).
- **Coding: 80/100.** (was 75) SWE-V **77.8% / 72.8% (5PT HARNESS SPREAD)**; SWE Multilingual **73.3%**; SWE-Rebench **62.8%**; React Native **74.8%**; TB 2.0 **56.2%**. **Capped by:** SWE-Pro **55.1%** (on 55%+ ref); NL2Repo **35.9%**; **NO LCB/AA-SciCode/AA Coding Index/DeepSWE/Vibe Code/FrontierCode** — 2 of 3 coding refs unmeasured. SWE-V spread recorded side-by-side.
- **Cost efficiency: 78/100.** (was 85) **$1/$3.20 per 1M** (80% cache discount); **MIT OPEN WEIGHTS = FREE SELF-HOSTING**; hosted ~$1.34/M blended. **Held at 78 (not 85+): 200K-class open-weight flagship expensive to self-host in practice; $0 route nominal.**
- **Overall Score: 65/100.** (was 57) Half-up mean of (70 + 75 + 85 + 15 + 80) / 5 = 325 / 5 = 65 → **65**. **Matches Step 5 Preview (65); above GLM 5.3 Flash (63); below queue (66.5) and average of 17 qualifying raters (66.5).** Best-fit: **Best-evidenced open-weight model in batch** — **τ²-Bench 98.2% (HIGHEST IN SERIES)**, AA-LCR 75.7%, SWE-V 77.8%/72.8%, AIME 95.8%, HMMT 97.5%, MIT open weights. **Three cautions:** (1) HLE 30.5% (FAILS 40%+), CritPt 2.0% (LOWEST IN SERIES); (2) **Agentic internally split: τ² 98.2% vs APEX 14.5% (83.7PT GAP)**; (3) Text-only, premium metered price ($1/$3.20) — prefer successors (GLM-5.1 56.09, 5.2 60.23, 5.3 61.28) for multimodal/current-gen quality. **BenchLM 54.59 (#78) vs this report 65 — 10.4PT GAP (different weighting).**

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-11-08
- Method: **Deep second-pass re-research** (original 2026-10-19). Cross-rater synthesis from 2 recent qualified raters: Step 5 Preview (2026-11-06, Overall 65), GLM 5.3 Flash (2026-10-16, Overall 63) + official Z.AI sources (GLM-5 docs, HF model card, BenchLM, Arcee, Poolside, AA). **Average of 17 qualifying raters: 66.5 Overall.** Queue: 66.5. **Critical findings:** Superseded by 5.1/5.2/5.3; **τ²-Bench 98.2% (HIGHEST IN SERIES)**; AA-LCR 75.7%; SWE-V 77.8%/72.8% (5PT spread); AIME 95.8%; HMMT 97.5%; **TEXT-ONLY; 200K CONTEXT (1/5 OF 1M); MIT OPEN WEIGHTS; HLE 30.5% (FAILS 40%+); CRITPT 2.0% (LOWEST IN SERIES); AA INDEX 27.9; BENCHLM 54.59 VS REPORT 65 (10.4PT GAP); τ² 98.2% vs APEX 14.5% (83.7PT INTERNAL SPREAD).**
- Reference URLs:
  - [BenchLM — GLM-5 (16 of 753 benchmarks, 54.59/100, #78/1016; rows attributed to AA, Arcee, Gert Labs, Poolside)](https://benchlm.ai/models/glm-5)
  - [Artificial Analysis — GLM-5](https://artificialanalysis.ai/models/glm-5)
  - [Arcee — GLM-5 eval runs (MMLU-Pro 85.8%, AIME 2025 93.3%)](https://arc.eval.auto/)
  - [Hugging Face — GLM-5 model card (MIT weights)](https://huggingface.co/zai-org/GLM-5)
  - [Repo curated meta — `model/glm-5/meta.json` ($1.00/$3.20, 200K/128K, text-only)](model/glm-5/meta.json)
  - See also: `model/glm-5.1/` (56.09), `model/glm-5.2/` (60.23), `model/glm-5.3/` (61.28) — successors refreshed in this session
- Future sources: add a file next to this one, e.g. `GPT_5.md`, using the same headings.

---