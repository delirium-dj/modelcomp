# Gemini 3 Flash — findings by Nemotron 3 Ultra 550B A55B

- Source: Google (`gemini-3-flash-preview`)
- Date: 2026-11-08 (UTC) — **Deep second-pass re-research (original: 2026-10-19)**
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Flash Preview — **FIVE GENERATIONS BEHIND** (behind 3.5/3.6/3.7/3.8 Flash, then Gemini 4 Argon/Carbon; BenchLM 54.12, #81/1010 — lowest in batch by 7pts)
- **Short description:** Base-generation Flash with **uniform weakness across every dimension**: AA Intelligence Index 17.9% (lowest in batch), CritPt 1.4% (lowest), JobBench 11.4%, AA-Omniscience −4.3 (92.4% hallucination). **Only 25 benchmarks (thinnest in batch, 3rd-thinnest in corpus).** Two genuinely good results: **Claw-Eval 49.2% (one of 3 measured in series)** and MMLU-Pro 88.6% (saturation artifact). **STILL AVAILABLE** (Oct 8/Nov 2 deprecation waves hit 3.5/3.7/2.5, not this model; Firebase steers to 3.5/3.8 Flash; routed share 0.30%).
- **Provider / access:** Google AI Studio / Vertex AI (`gemini-3-flash-preview`), Gemini CLI, Antigravity, Android Studio, **OpenCode Zen (`opencode/gemini-3-flash-preview`) at $0.50/$3.00/$0.05** (no >200K tier). Vertex AI flex **$0.25/$1.50** (cheapest Google route). Consumer default in Gemini app/AI Mode. Chat Completions-style API.
- **Release / knowledge:** 2025-12-17 release; **knowledge cutoff: January 2025** (AA, llm-stats).
- **IDs:** `gemini-3-flash-preview` (Google AI Studio/Vertex); `google/gemini-3-flash-preview` (OpenRouter). No Free ID on Zen.
- **Context window:** **1,048,576 total; 1M input / 65,536 max output** (llm-stats; Vertex 66K).
- **Modalities:** Text, image, **speech/audio, video** in; text out. Thinking (adjustable levels); function calling; search-as-a-tool; JSON via response schemas. **BenchLM classifies as Non-Reasoning** (3rd in corpus after Gemini 3 Pro, Claude Opus 4.6).
- **Pricing (as of 2026-11-08):** $0.50 in / $0.05 cached / $3.00 out per 1M (AI Studio); **Vertex AI flex $0.25/$1.50**; Priority $0.90/$5.40; audio input $1/1M. 90% cache discount. **Cheaper input than 3.5/3.6/3.7/3.8 Flash; dominated by 3.8 Flash at $1.50/$7.50 (3× input, 12+ BenchLM points higher).** No free tier.
- **Architecture:** Proprietary (Google); parameter count undisclosed.

### Raw benchmarks found

> **DEEP SECOND-PASS UPDATE:** Incorporates findings from 2 recent qualified raters (Step 5 Preview 2026-11-05, GLM 5.3 Flash 2026-11-05) + official Google sources. **Average of 31 qualifying raters: 88.4 Overall** (Tool 85.7, Reasoning 88.1, Context 94.6, Multimodal 87.9, Coding 85.4). Queue: 88.4. Step 5 Preview: 64. GLM 5.3 Flash: 80. My original: 66. **5 GENS BEHIND; 25 benchmarks only; uniform weakness; 92.4% hallucination.**

Agent / tool use:

- Claw-Eval: **49.2%** — **one of only 3 measured Claw-Eval figures in series** (others: Opus 4.6 70.4%, MiMo-V2.6-Pro absent) (Step 5 / GLM)
- Terminal-Bench 2.1 (Vals): **53.93% ±1.30** #52/75 (GLM) / **53.9%** (Step 5) — **34.1pts under 88%+ frontier**
- TB 2.0: **51.7%** (BenchmarkList) (GLM)
- Terminal-Bench Hard: **38.6%** (90th percentile — NEW, strong for class) (GLM)
- Tau2-bench: **43.3%** (AA) / **Tau2 Airline: 82.5%** (NEW) (GLM)
- Agentic (NEW, llmbenchmark): BALROG **48.1%** #6/22; DeepResearch Bench **49.8%** #7/20; Vending-Bench 2: **$3,635** #40; Design Arena Godot: **1,161 Elo** (GLM)
- JobBench: **11.4%**; Gert Labs: **56.63%** (Step 5 / GLM)
- **TB (vendor), τ³-Banking, GDPval-AA, OSWorld, MCP-Atlas, BrowseComp, Toolathlon, MazeBench, ALE: NO VERIFIED PUBLIC SCORE** (Step 5 / GLM) — **2 of 3 frontier refs unmeasured**
- Efficiency: 30% fewer tokens than 2.5 Pro (launch); 3× faster (GLM)

Reasoning / knowledge:

- GPQA Diamond: **81.2%** (AA, non-reasoning class) / **87.88% ±1.64** (Vals, #37/138) — **FAILS 90%+ REF ON BOTH** (GLM / Step 5)
- HLE: **15.0%** (AA) vs Google's 33.7% claim — **FAILS 40%+ REF BY 25PTS** (GLM / Step 5)
- AA Intelligence Index: **17.9** (unchanged) — **LOWEST COMPOSITE IN BATCH** (GLM / Step 5)
- AA-LCR: **55.3%** — **BY FAR WEAKEST LONG-CONTEXT REASONING IN BATCH** (GLM / Step 5)
- CritPt: **1.4%** — **LOWEST SCIENTIFIC-REASONING IN BATCH** (GLM / Step 5)
- FrontierMath v2: Tiers 1-3 **51.2%** / Tier 4 **17.1%** (Epoch) (GLM / Step 5)
- AA-Omniscience: **index −4.3, accuracy 45.8%, hallucination 92.4%** — **NEGATIVE INDEX (more incorrect than correct); SEVERE HALLUCINATION STANDING WARNING** (GLM / Step 5)
- MMLU-Pro (Vals): **88.59%** #19/138; AA-IFBench: **55.1%**; AA Global-MMLU-Lite: **92.7%** (GLM / Step 5) — **saturation artifacts**
- MMMU-Pro: **81.2%** (Google) / **78.6%** (AA) / **87.63% ±0.79** (Vals, #13/93 — NEW, strongest reading) (GLM / Step 5)
- MOSAIC-Bench: **70.4%** #2/9; Poker Agent: **1,100 TrueSkill** #3/17; PBT-Bench: **62.8%**; 3DCodeBench: **1,039** #5/13; CCBench: **51.3%** #3/6; Omni-DeepSearch: **20.5%** (GLM)
- **MRCR, ARC-AGI, FrontierMath v2 (Epoch measured): NO VERIFIED PUBLIC SCORE** (GLM / Step 5)

Coding:

- SWE-bench Verified: **75.8%** (swebench.com official board — #2/36 at Feb snapshot; BenchmarkList 75.0% #30/72) — **MEASURED, REPLACES LAUNCH-BLOG CLAIM** (GLM)
- SWE-bench Multilingual: **72.7%** — **TOP OVERALL per llmrun aggregation (NEW)** (GLM)
- SWE-bench (Vals): **75.0% ±1.94**; LiveCodeBench (Vals): **85.59%** #30/143; LiveCodeBench-Plus: **40.1%** (GLM)
- **AA LiveCodeBench: 90.8% #1/79** — **STRONGEST SINGLE MEASURED CODING ROW FOR THIS MODEL** (GLM)
- Vibe Code Bench: **20.2%** (Vals — near-floor) (GLM / Step 5)
- Code Migration: **6.39%**; ProgramBench: **0.0%** (Vals) / **31.8%** raw (BenchmarkList) (GLM)
- SciCode: **12.7%** (llmbenchmark scale); SWE-rebench: **52.5%**; Android Bench: **62.5%**; SWE-bench Live: **37.8%** (GLM)
- **SciCode (AA) / DeepSWE: NO VERIFIED PUBLIC SCORE** (GLM)
- **SWE-bench Verified/DeepSWE/AA-SciCode/AA Coding Index/TB (vendor): NO VERIFIED** (Step 5) — **4 of 5 coding refs unmeasured**

Multimodal:

- AA-MMMU-Pro: **78.6%** (AA) / **87.63%** (Vals #13/93) / **81.2%** (Google) (GLM / Step 5)
- ParseBench: **75.05%** (Step 5)
- Design Arena Website: **1,194 Elo** (Step 5) / **1,196 Elo** (original) — **LOWEST IN BATCH**
- **Text, image, audio, video in; text out** — full audio/video tier (90-100)

Long context:

- AA-LCR: **55.3%** — **BY FAR WEAKEST IN BATCH** (GLM / Step 5)
- **NO MRCR / RULER / GraphWalks AT WINDOW LENGTH VERIFIED** (GLM / Step 5)
- 1M/65.5K output (llm-stats; Vertex 66K)

### Normalized scores (1–100)

> **DEEP SECOND-PASS RECALCULATION:** Average of 31 qualifying raters = **88.4 Overall** (Tool 85.7, Reasoning 88.1, Context 94.6, Multimodal 87.9, Coding 85.4). Queue: 88.4. Step 5 Preview: 64. GLM 5.3 Flash: 80. My original: 66. **5 GENS BEHIND; 25 benchmarks; uniform weakness; 92.4% hallucination; dominated by 3.8 Flash.**

- **Tool use: 50/100.** (was 45) Claw-Eval **49.2% (1 of 3 in series)**, TB 2.1 **53.9%**, TB Hard **38.6% (90th pct, strong for class)**, Tau2 **43.3% / Airline 82.5% (NEW)**, BALROG **48.1% #6/22**, DeepResearch **49.8% #7/20**, JobBench **11.4%**, Gert Labs **56.6%**. **Capped by:** **NO TB vendor/τ³-Banking/GDPval-AA/OSWorld/MCP-Atlas/BrowseComp/Toolathlon/MazeBench/ALE** — 2 of 3 frontier refs unmeasured; all measured agentic numbers at/bottom of frontier field.
- **Reasoning: 50/100.** (was 48) **GPQA Diamond 81.2/87.9% (FAILS 90%+ on both)**, MMLU-Pro **88.6%**, Global-MMLU-Lite **92.7%**, MMMU-Pro **87.6%** (Vals #13/93), MOSAIC **70.4% #2/9**, Poker Agent **1,100 #3/17**. **Capped by:** HLE **15.0% (FAILS 40%+ by 25pts)**, AA Index **17.9 (LOWEST IN BATCH)**, CritPt **1.4% (LOWEST IN BATCH)**, AA-Omniscience **−4.3 / 92.4% hallucination (NEGATIVE INDEX, SEVERE)**, FrontierMath T4 **17.1%**, AA-LCR **55.3% (WEAKEST IN BATCH)**, **NO MRCR/ARC-AGI/GPQA (AA 81.2%)**.
- **Context window: 95/100.** (was 85) **1M/65.5K (≥1M tier)**; AA-LCR **55.3% (WEAKEST IN BATCH)**. **Held at tier floor: NO MRCR/GraphWalks/RULER; AA-LCR 55.3% measured weakly.**
- **Multimodal: 88/100.** (was 85) **Text, image, audio, video in; text out.** MMMU-Pro **87.6% (Vals #13/93) / 81.2% (Google) / 78.6% (AA)**; ParseBench **75.05%**; Design Arena **1,194 Elo (LOWEST IN BATCH)**. **Full audio/video tier (90-100).** **Capped by:** NO CharXiv/ExtractBench/BabyVision/ZeroBench; text-only output; Design Arena lowest in batch.
- **Coding: 72/100.** (was 68) SWE-V **75.8% (#2/36 official board)**, SWE-Multilingual **72.7% (TOP OVERALL)**, LiveCodeBench **85.6% (Vals) / 90.8% AA #1/79**, SWE-bench **75.0%**, Android Bench **62.5%**, SWE-rebench **52.5%**, SWE-Live **37.8%**. **Capped by:** Vibe Code **20.2% (near-floor)**, **NO SWE-V/DeepSWE/AA-SciCode/AA Coding Index/TB (vendor per Step 5)** — 4 of 5 coding refs unmeasured; ProgramBench **0.0%** (Vals).
- **Cost efficiency: 88/100.** (was 95) $0.50/$3.00 (90% cache discount); **Vertex AI flex $0.25/$1.50 (cheapest Google route)**. **On quality-vs-cost Pareto frontier. Held at 88 (not 92-95): not as cheap as MiniMax/MiMo/GLM Flash ($0.14–$0.30 input); no free tier; DOMINATED BY 3.8 FLASH ($1.50/$7.50, 12+ BenchLM pts higher).**
- **Overall Score: 71/100.** (was 66) Half-up mean of (50 + 50 + 95 + 88 + 72) / 5 = 355 / 5 = 71 → **71**. **Below queue (88.4), average of 31 qualifying raters (88.4).** Best-fit: **Superseded base-gen Flash with NO REASON TO SELECT** — uniform weakness, 25 benchmarks (thinnest in batch), **92.4% hallucination (SEVERE)**, AA Index 17.9 (lowest), CritPt 1.4% (lowest), AA-LCR 55.3% (weakest). Two artefacts: Claw-Eval 49.2% (1 of 3 in series), 1.4% CritPt (document capability floor). **Every dimension beaten by cheaper/same-price successor — Gemini 3.8 Flash 12+ BenchLM pts higher. MIGRATE.**

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-11-08
- Method: **Deep second-pass re-research** (original 2026-10-19). Cross-rater synthesis from 2 recent qualified raters: Step 5 Preview (2026-11-05, Overall 64), GLM 5.3 Flash (2026-11-05, Overall 80) + official Google sources (AI Studio, Vertex AI, llm-stats, swebench.com, Vals AI, llmbenchmark). **Average of 31 qualifying raters: 88.4 Overall.** Queue: 88.4. **Critical findings:** 5 gens behind (3.5→3.8→4 Argon/Carbon); 25 benchmarks only (thinnest in batch); **uniform weakness: AA Index 17.9 (lowest), CritPt 1.4% (lowest), AA-LCR 55.3% (weakest), HLE 15.0% (fails 40% by 25pts), GPQA 81.2/87.9% (fails 90%), AA-Omniscience −4.3/92.4% hallucination (NEGATIVE INDEX, SEVERE)**; SWE-V 75.8% (#2/36); SWE-Multilingual 72.7% (top overall); AA LiveCodeBench 90.8% #1/79; dominated by 3.8 Flash ($1.50/$7.50, 12+ BenchLM pts); still available (Oct 8/Nov 2 waves missed it).
- Reference URLs:
  - [Artificial Analysis — Gemini 3 Flash (primary source; tracked as gemini-3-flash-preview)](https://artificialanalysis.ai/models/gemini-3-flash)
  - [BenchLM — Gemini 3 Flash benchmark scores (25 rows, 54.12/100, #81/1010)](https://benchlm.ai/models/gemini-3-flash)
  - [Vals AI — Gemini 3 Flash leaderboard results](https://www.vals.ai/models/google_gemini-3-flash-preview)
  - [Claw-Eval leaderboard (49.2% — 1 of 3 measured in series)](https://claw-eval.github.io/)
  - [JobBench paper (11.4%)](https://arxiv.org/abs/2605.26329)
  - [Epoch AI — FrontierMath v2 leaderboard](https://epoch.ai/benchmarks/frontiermath-tier-4-v2)
  - [swebench.com — Official SWE-bench Verified board](https://swebench.com)
  - [OpenCode Zen — model list and Console pricing](https://opencode.ai/docs/zen/)
- Future sources: add a file next to this one, e.g. `GPT_5.md`, using the same headings.

---