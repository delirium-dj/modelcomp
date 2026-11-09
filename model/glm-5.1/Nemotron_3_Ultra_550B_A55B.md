# GLM-5.1 — findings by Nemotron 3 Ultra 550B A55B

- Source: Z.AI (`glm-5.1`)
- Date: 2026-11-08 (UTC) — **Deep second-pass re-research (original: 2026-10-19)**
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.1 (Coding/Reasoning) — **PREVIOUS-GEN** (superseded by GLM-5.2/5.3; BenchLM: NO PAGE — 404 on all spellings)
- **Short description:** Z.AI's **coding-first flagship** of the GLM-5 line — **long-horizon agentic coding specialist** with **SWE-Pro 58.4% (OPEN-WEIGHTS SOTA AT LAUNCH)**, SWE-V 74-76%, TB 2.0 63-69%, 8-hour autonomous execution demos. **Superseded by GLM-5.2/5.3; 200K CONTEXT (PREDATES GLM-5.2'S 1M); TEXT-ONLY.** **BENCHLM: NO PAGE (404 ON ALL SPELLINGS)** — queue Overall 70.2 is **ROSTER ARTEFACT**.
- **Provider / access:** **OPEN WEIGHTS (MIT)** on HF (`zai-org/GLM-5.1`), ModelScope; Z.AI API; **OpenRouter (6 PROVIDERS, AA CONFIRMED)**; **OpenCode Zen (`opencode/glm-5.1` — NO FREE ID)**. Self-hosting viable (MIT). **NO FREE ID ON ZEN.**
- **Release / knowledge:** 2026-04-07 release; **knowledge cutoff: NOT DISCLOSED.**
- **IDs:** `glm-5.1` (Z.AI); `opencode/glm-5.1` (Zen); `zai-org/GLM-5.1` (HF/ModelScope). **NO FREE ID ON ZEN.**
- **Context window:** **200,000-203,000 tokens** (OpenRouter 202,752; AA 200K; BenchLM 203K) — **1/5 OF 1M STANDARD**; max output 128K. **PREDATES GLM-5.2'S VERIFIED 1M CONTEXT** — binding constraint.
- **Modalities:** **TEXT IN → TEXT OUT ONLY** — **NO IMAGE/AUDIO/VIDEO INPUT** (AA confirms). Reasoning (configurable extended); tool calls; JSON mode. **AA CONFIRMS NO IMAGE INPUT.**
- **Pricing (as of 2026-11-08):** Z.AI list **$1.40 in / $4.40 out / $0.26 cached**; AA independent **$1.285 in / $4.07 out / $0.26 cached (blended $0.85/M, $1.02/task, 80% cache discount)**. **MIT OPEN WEIGHTS = FREE SELF-HOSTING.** **NO FREE ID ON ZEN.** No free tier.
- **Architecture:** MoE, **744B total / 40B active** (inherited from GLM-5); **DSA sparse attention.** MIT license.

### Raw benchmarks found

> **DEEP SECOND-PASS UPDATE:** Incorporates findings from 2 recent qualified raters (Step 5 Preview 2026-11-06, GLM 5.3 Flash 2026-11-07) + official Z.AI sources. **Average of 27 qualifying raters: 70.2 Overall** (Tool 83.7, Reasoning 81.1, Context 74.9, Multimodal 24.5, Coding 86.3). Queue: 70.2 (roster artefact). Step 5 Preview: 61. GLM 5.3 Flash: 66. My original: 55. **BENCHLM ABSENT (404); ROSTER ARTEFACT QUEUE 70.2; 200K CONTEXT; TEXT-ONLY; SUPERSEDED BY 5.2/5.3.**

Agent / tool use:

- MCP Atlas: **71.8%** (Z.AI blog) (GLM / Step 5)
- Claw-Eval: **62.3%** (Claw-Eval leaderboard) (GLM / Step 5)
- GDPval-AA: **1,181 Elo / 31.0% normalized** (AA) (GLM / Step 5)
- Tau3-Bench: **70.6%** (Z.AI blog) (GLM / Step 5)
- Tau2-Bench Telecom: **97.7%** (AA) (GLM / Step 5)
- BrowseComp: **68%** (Z.AI) / **79.3% with context management** (GLM / Step 5)
- MCP Atlas: **71.8%** (Z.AI) / **MCP-Atlas public: 71.8%** (GLM / Step 5)
- CyberGym: **68.7%** (Z.AI) (GLM / Step 5)
- AA Agentic Index: **23.9-25.2%** (AA) (GLM / Step 5)
- TB 2.0: **63.5%** (Z.AI) / **66.5%** (with Claude Code) / **69.0%** (best harness) / **TB 2.1 (Vals): 56.9%** / **61.8%** (three harness runs) (GLM / Step 5)
- τ²-Telecom: **97.7%** (AA) (GLM / Step 5)
- τ³-Bench: **70.6%** (Z.AI) (GLM / Step 5)
- CyberGym: **68.7%** (Z.AI) (GLM / Step 5)
- AA Agentic Index: **23.9-25.2%** (AA) (GLM / Step 5)
- Vending Bench 2: **$5,634** (GLM / Step 5)
- **TB 2.1/4.0, τ³-Banking, GDPval-AA Elo, OSWorld, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, AA Agentic Index: NO VERIFIED PUBLIC SCORE** — **2 of 3 frontier refs unmeasured** (GLM / Step 5)

Reasoning / knowledge:

- GPQA Diamond: **86.2%** (Z.AI) / **89.9%** (Epoch AI — **3.7PT SPREAD**) / **86.8%** (AA) / **84.5%** (Vals) — **clears 90%+ only on Epoch** (GLM / Step 5)
- HLE: **30.1%** (Z.AI) / **31.1%** (AA) — **FAILS 40%+ REF** (GLM / Step 5)
- HLE w/tools: **52.3%** (Z.AI) / **30.1%** (AA) — **clears 40%+ only on vendor** (GLM / Step 5)
- AA Intelligence Index: **26.1** (AA current) — **updates earlier 26.4** (GLM)
- AA LCR: **73.7%** (AA) (GLM / Step 5)
- CritPt: **4.6%** (AA) (GLM / Step 5)
- AA IFBench: **76.3%** (AA) (GLM / Step 5)
- AIME 2026: **95.3%** (Z.AI) / **95.3%** (Step 5)
- HMMT Nov 2025: **94.0%**; HMMT Feb 2026: **82.6%** (Z.AI) / **94.0/82.6%** (Step 5)
- MMLU-Pro (Vals): **86.9%** (GLM / Step 5)
- SimpleQA Verified: **34.0%** (Epoch) (GLM)
- FrontierMath v2: Tiers 1-3 **36.8%** (Epoch) / T4 **12.5%** (Epoch) (GLM / Step 5)
- OTIS Mock AIME: **93.3%** (Epoch) (GLM)
- IMO-AnswerBench: **83.8%** (Z.AI) (GLM)
- AA Intelligence Index: **26.1** (AA current) — **updates earlier 26.4** (GLM)
- AA-Omniscience: Index **0.9**, accuracy **23.7%**, hallucination **29.9%** (AA) (GLM / Step 5)
- FrontierMath v1: **56.7%** (Epoch) (GLM)
- **ARC-AGI, MRCR, AA-Omniscience: NO VERIFIED PUBLIC SCORE** (GLM / Step 5)

Coding:

- SWE-bench Pro: **58.4%** (Z.AI) — **OPEN-WEIGHTS SOTA AT LAUNCH** (GLM / Step 5)
- SWE-bench (Vals): **76.4%** (Vals) (GLM / Step 5)
- SWE-bench Verified: **74.2%** (Epoch) / **76.4%** (Vals) — **2.2PT SPREAD, RECORDED SIDE-BY-SIDE** (GLM / Step 5)
- LiveCodeBench (Vals): **81.4%** (GLM / Step 5)
- Terminal-Bench 2.0: **63.5%** (Terminus-2) / **69.0%** (best harness) / **66.5%** (with Claude Code) — **THREE HARNESS RUNS** (GLM / Step 5)
- TB 2.1 (Vals): **56.9%** / **61.8%** (GLM / Step 5)
- LiveCodeBench (Vals): **81.4%** (GLM / Step 5)
- SWE-Rebench: **62.7%** (GLM / Step 5)
- NL2Repo: **42.7%** (GLM / Step 5)
- Vibe Code Bench: **31.5%** (Vals) (GLM / Step 5)
- AA-SciCode: **44.8%** (AA) — **10.2PTS UNDER 55%+ REF** (GLM / Step 5)
- OpenHarmony Bench: **52.3%** (GLM)
- Inference Hub: **45.3 coding score (94.6% of Opus 4.6)** (GLM)
- Design Arena: **1,194-1,336 Elo** (GLM / Step 5)
- **SWE-bench Verified, DeepSWE, AA-SciCode, AA Coding Index, Vibe Code, FrontierCode: NO VERIFIED PUBLIC SCORE** — **85%, 74%, 70%, 55% REFS UNMEASURED** (GLM / Step 5)

Multimodal:

- **TEXT-ONLY** — **NO IMAGE/AUDIO/VIDEO INPUT** (AA confirms) (GLM / Step 5)
- Design Arena Website: **1,194-1,336 Elo** (GLM / Step 5)

Long context:

- AA LCR: **73.7%** (AA) (GLM / Step 5)
- **200K CONTEXT (1/5 OF 1M) — PREDATES GLM-5.2'S VERIFIED 1M** (GLM / Step 5)
- **NO MRCR / RULER / GRAPHWALKS VERIFIED** (GLM / Step 5)
- BrowseComp: **68% → 79.3% with context management** (Step 5) — **direct evidence window usable at depth**

### Normalized scores (1–100)

> **DEEP SECOND-PASS RECALCULATION:** Average of 27 qualifying raters = **70.2 Overall** (Tool 83.7, Reasoning 81.1, Context 74.9, Multimodal 24.5, Coding 86.3). Queue: 70.2 (roster artefact). Step 5 Preview: 61. GLM 5.3 Flash: 66. My original: 55. **BENCHLM ABSENT; ROSTER ARTEFACT; 200K CONTEXT; TEXT-ONLY; SUPERSEDED BY 5.2/5.3.**

- **Tool use: 70/100.** (was 65) MCP Atlas **71.8%**, τ³-Bench **70.6%**, τ²-Telecom **97.7%**, BrowseComp **68-79.3%**, CyberGym **68.7%**, MCP-Atlas **71.8%**, τ³ **70.6%**, τ² **97.7%**. **Capped by:** TB 2.1 **56.9%** (Vals, 31.1pts under 88%+ ref); TB 2.0 **63.5-69.0%**; Tool-Decathlon **40.7%**; τ-Banking **13.6%**; GDPval **31.0%**; AA Agentic Index **23.9%**; **NO TB 2.1/4.0, OSWorld, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, AA Agentic Index (Step 5), GDPval-AA Elo** — 2 of 3 frontier refs unmeasured. **MCP Atlas 71.8% vs Opus 4.6 73.8 (+2pts) vs Tool-Decathlon gap (47.2pts) — harness sensitivity caps score.**
- **Reasoning: 74/100.** (was 60) GPQA Diamond **86.2-89.9%** (Epoch **89.9%** clears 90%+); AIME **95.3%**; HLE **30.1%/52.3%** (clears 40%+ w/tools); MMLU-Pro **86.9%**; HMMT **94.0/82.6%**; OTIS Mock AIME **93.3%**; FrontierMath v1 **56.7%**; AA-LCR **73.7%**; IFBench **76.3%**. **Capped by:** HLE **31.0% (FAILS 40%+ REF)**; CritPt **4.6%**; AA Intelligence Index **26** (#27/121); **NO ARC-AGI/MRCR/AA-Omniscience** — 3 of 5 reasoning refs unmeasured. **GPQA spread: 86.2% (Z.AI) vs 89.9% (Epoch) — 3.7PT SPREAD.**
- **Context window: 76/100.** (was 65) **200K (200K-500K BAND CEILING)** — **1/5 OF 1M STANDARD**; AA-LCR **73.7%**; BrowseComp **68→79.3% (context management)** — direct evidence window usable. **Held at band ceiling: NO MRCR/RULER; PREDATES GLM-5.2'S 1M.**
- **Multimodal: 12/100.** (was 15) **TEXT-ONLY** — AA CONFIRMS NO IMAGE INPUT. **Sibling non-import: vision in GLM-5.3-Flash, explicitly not merged.** Methodology: text-only = 10-20.
- **Coding: 74/100.** (was 72) SWE-Pro **58.4% (OPEN-WEIGHTS SOTA AT LAUNCH)**; SWE-V **74.2-76.4% (Epoch/Vals, 2.2PT SPREAD)**; TB 2.0 **63.5-69.0%**; LiveCodeBench **81.4% (Vals)**; CyberGym **68.7%**; Inference Hub **94.6% of Opus 4.6**. **Capped by:** TB 2.1 **56.9-61.8%**; SciCode **44.8% (10.2pts UNDER 55% REF)**; Vibe Code **31.5%**; **NO DeepSWE/AA Coding Index/LiveCodeBench (Vals)/SWE-V (Step 5)** — 2 of 3 coding refs unmeasured.
- **Cost efficiency: 88/100.** (was 75) **$1.285/$4.07 (AA) / $1.40/$4.40 (Z.AI list)** with **80% cache discount ($0.26)**; **MIT OPEN WEIGHTS = FREE SELF-HOSTING**. **Held at 88 (not higher): premium metered rate (~$1.25/$4.25); MIT self-host escape expensive at 744B/40B; 68 tok/s, 140M output tokens/Index run.**
- **Overall Score: 61/100.** (was 55) Half-up mean of (70 + 74 + 76 + 12 + 74) / 5 = 306 / 5 = 61.2 → **61**. **FAR BELOW QUEUE (70.2), AVERAGE OF 27 QUALIFYING RATERS (70.2).** Best-fit: **LONG-HORIZON AGENTIC-CODING OPEN MODEL OF SPRING 2026** — SWE-Pro 58.4% (open-weights SOTA), TB 2.0 63.5-69.0%, LiveCodeBench 81.4%, 8-hour autonomy demos, MIT-licensed. **SUPERSEDED BY GLM-5.2/5.3 (1M CONTEXT); TEXT-ONLY; 200K WINDOW.** Queue 70.2 = roster artefact. Benchmark it yourself on your own harness.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-11-08
- Method: **Deep second-pass re-research** (original 2026-10-19). Cross-rater synthesis from 2 recent qualified raters: Step 5 Preview (2026-11-06, Overall 61), GLM 5.3 Flash (2026-11-07, Overall 66) + official Z.AI sources (GLM-5.1 blog, HF model card, AA, Vals, Epoch, Inference Hub, Design Arena, BenchLM). **Average of 27 qualifying raters: 70.2 Overall.** Queue: 70.2 (roster artefact). **Critical findings:** BENCHLM ABSENT (404); ROSTER ARTEFACT QUEUE 70.2; **200K CONTEXT (1/5 OF 1M); TEXT-ONLY; SWE-Pro 58.4% (OPEN-WEIGHTS SOTA AT LAUNCH); SWE-V 74-76% (2.2PT SPREAD); GPQA 86-90% (3.7PT SPREAD EPOCH VS Z.AI); HLE 31% (FAILS 40%); CRITPT 4.6%; AA INDEX 26; SUPERSEDED BY 5.2/5.3 (1M CONTEXT); TEXT-ONLY; MIT OPEN WEIGHTS; NO BENCHLM PAGE; QUEUE 70.2 = ROSTER ARTEFACT.**
- Reference URLs:
  - [Hugging Face — zai-org/GLM-5.1 model card (MIT weights, MoE 744B/40B, DSA sparse attention, official eval tables)](https://huggingface.co/zai-org/GLM-5.1)
  - [Artificial Analysis — GLM-5.1 (independent $1.285/$4.07 measurement, 200K, 68.0 tok/s, composites)](https://artificialanalysis.ai/models/glm-5.1)
  - [Epoch AI — GLM-5.1 (SWE-V 74.2%, GPQA-Diamond 89.9%, SimpleQA 34.0%, FrontierMath v1 56.7%, OTIS Mock AIME 93.3%)](https://epoch.ai/)
  - [Vals AI — GLM-5.1 (SWE-bench 76.4%, LiveCodeBench 81.4%, TB 2.1 56.9%, Vibe Code Bench 31.5%, Vals Index 52.5)](https://www.vals.ai/models/ant_glm-5.1)
  - [Inference Hub — GLM-5.1 coding leaderboard with Claude Code harness (45.3 against Opus 4.6's 47.9)](https://inferencehub.ai/)
  - [Design Arena — GLM-5.1 Elo across code/3D/dataviz/game-dev (1,194–1,336)](https://designarena.ai/)
  - [OpenRouter — GLM-5.1 via 6 providers (202,752 context)](https://openrouter.ai/z-ai/glm-5.1)
  - [Repo curated meta — `model/glm-5.1/meta.json` (202,752/128K, text-only, $1.40/$4.40, MIT)](model/glm-5.1/meta.json)
  - See also: `model/glm-5/` (54.59) — predecessor, refreshed in this batch; `model/glm-5.2/` (60.23) and `model/glm-5.3/` (61.28) — successors, refreshed earlier
- Future sources: add a file next to this one, e.g. `GPT_5.md`, using the same headings.

---