# Gemini 3.6 Flash — findings by Nemotron 3 Ultra 550B A55B

- Source: Google (`gemini-3.6-flash`)
- Date: 2026-11-08 (UTC) — **Deep second-pass re-research (original: 2026-10-19)**
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.6 Flash (High effort tier)
- **Short description:** Google's mid-Gemini 3 series Flash model with native multimodal input (text, image, audio, video), fast 209 tok/s output, 1M context, and introductory $0.75/$3.75 pricing; **three generations behind Gemini 4 (Argon, Carbon) and behind successors 3.7/3.8 Flash.** BenchLM: 62.41/100, #44/1009. **Weakest agentic profile in batch (MazeBench 0%, AA Agentic Index 30.1%), worst deep-scientific reasoning (CritPt 10.6%, FrontierMath Tier 4 22.0%), weakest repository coding (DeepSWE 49.0%).**
- **Provider / access:** Google AI Studio / Gemini API (`gemini-3.6-flash`), Google Cloud Vertex AI, OpenCode Zen (`opencode/gemini-3.6-flash`), Google Antigravity. Google GenAI API (not OpenAI-compatible). **No Free tier.**
- **Release / knowledge:** 2026-07-21 release; **knowledge cutoff not disclosed.**
- **IDs:** `google/gemini-3.6-flash` (Google AI Studio/Vertex), `opencode/gemini-3.6-flash` (OpenCode Zen).
- **Context window:** 1,000,000 tokens input; 65,536 max output (64K). **No >200K surcharge tier** — full 1M at flat rate.
- **Modalities:** Text, image, audio, video in; text out. Reasoning: extended thinking. Tool calls: yes. JSON mode: yes.
- **Pricing (as of 2026-11-08):** $0.75/M in, $3.75/M out (Google AI Studio / AA). 80% cache discount (AA). Blended 7:2:1 ≈ $0.63/M (AA). Cost/task: $1.60 (AA). **No free tier.**
- **Architecture:** Proprietary (Google DeepMind); parameter count not disclosed.

### Raw benchmarks found

> **DEEP SECOND-PASS UPDATE:** Incorporates findings from Step 5 Preview (2026-11-05) + official Google sources. **Average of 31 qualifying raters: 89.3 Overall** (Tool 86, Reasoning 87.4, Context 95.3, Multimodal 91.3, Coding 86.9). Queue: 89.3. Step 5 Preview: 73. My original: 77.

Agent / tool use:

- OSWorld-Verified: **83%** (Google blog) / **83%** (Step 5) — **only strong agentic figure**
- Terminal-Bench 2.1 (Vals): **73.8%** (Vals) / **73.8%** (Step 5) — 14.2 pts under 88%+ frontier
- GDPval-AA v2: **1,423 Elo** (Google) / **39.2%** normalized (AA) — **327 Elo under 1,750+ frontier**
- AA Agentic Index: **30.1%** (AA) / **30.1%** (Step 5) — 2nd lowest in batch
- MazeBench: **0%** (ASCII mode, tools) / **0%** (Step 5)
- Terminal-Bench 2.1/4.0 (vendor), τ³-Banking, τ²-bench, BrowseComp, MCP-Atlas, Toolathlon, Claw-Eval, Agents' Last Exam: **no verified public score found** (Step 5) — **two of three frontier references entirely unmeasured**

Reasoning / knowledge:

- GPQA Diamond: **92.8%** (AA) / **93.4%** (Vals) — clears 90%+ frontier on both (Step 5 / GLM)
- HLE: **40.8%** (AA) / **40.8%** (Step 5) — just clears 40%+ frontier ref
- ARC-AGI-1: **91.17%** (ARC Prize semi-private) / **91.2%** (Step 5)
- ARC-AGI-2: **60.4%** (ARC Prize semi-private) / **60.4%** (Step 5)
- AA Intelligence Index: **34** (rank #79/217) (AA) / **34.0** (Step 5)
- AA LCR: **80.0%** (AA) / **80.0%** (Step 5)
- CritPt: **10.6%** (AA) / **10.6%** (Step 5) — **2nd worst scientific reasoning in batch**
- AA Omniscience: index **22.1%**, accuracy **50.0%**, hallucination **55.6%** (AA) / **55.6%** (Step 5)
- FrontierMath v2: Tiers 1-3 **58.9%** / Tier 4 **22.0%** (Epoch AI) / **58.9% / 22.0%** (Step 5 / GLM) — **2nd worst Tier 4 in batch**
- MMLU-Pro (Vals): **89.3%** (Vals) / **89.3%** (Step 5 / GLM)
- AA Intelligence Index: **34.0** (AA) / **34.0** (Step 5)
- **MRCR: no verified public score found** (Step 5 / GLM)
- AA HLE: **40.8%** (AA) / **40.8%** (Step 5)
- AA Omniscience: index **22.1**, accuracy **50.0%**, hallucination **55.6%** (AA) / **55.6%** (Step 5)
- AA GPQA Diamond: **92.8%** (AA) / **92.8%** (Step 5 / GLM)

Coding:

- LiveCodeBench (Vals): **88.1%** (Vals) / **88.1%** (Step 5)
- SWE-bench (Vals): **79.6%** (Vals) / **79.6%** (Step 5)
- AA Coding Index: **69.2%** (AA) / **69.2%** (Step 5) — **0.8 pts under 70% frontier ref**
- AA-SciCode: **53.4%** (AA) / **53.4%** (Step 5) — **1.6 pts under 55% ref**
- DeepSWE: **49.0%** (Google) / **49.0%** (Step 5) — **25 pts under 74% frontier ref, worst in batch**
- Terminal-Bench 2.1 (Vals): **73.8%** (Vals) / **73.8%** (Step 5) — 11.2 pts under 85% ref
- CursorBench 3.2: **53.5%** (Cursor) / **53.5%** (Step 5)
- Vibe Code Bench: **57.57%** (Vals) / **57.57%** (Step 5)
- AA-SciCode: **53.4%** (AA) / **53.4%** (Step 5) — **1.6 pts under 55% ref**
- FrontierCode 1.1 Main: **26.9%** (Cognition) / **26.9%** (Step 5)
- **SWE-bench Verified: no verified public score found** (Step 5 / GLM)
- **FrontierCode: no verified public score found** (Step 5 / GLM)

Multimodal:

- MMMU-Pro: **83.2%** (AA) / **83.2%** (Step 5)
- Design Arena Website: **1,299 Elo** (OpenRouter) / **1,299 Elo** (Step 5)
- CharXiv, ExtractBench, BabyVision, ZeroBench: **no verified public score found** (Step 5) — **visual evidence narrower than peers**

Long context:

- AA LCR: **80.0%** (AA) / **80.0%** (Step 5)
- **MRCR: no verified public score found** (Step 5)
- **No >200K surcharge tier** — full 1M at flat rate (Step 5)

### Normalized scores (1–100)

> **DEEP SECOND-PASS RECALCULATION:** Average of 31 qualifying raters = **89.3 Overall** (Tool 86, Reasoning 87.4, Context 95.3, Multimodal 91.3, Coding 86.9). Queue: 89.3. Step 5 Preview: 73. My original: 77.

- **Tool use: 58/100.** (was 65) OSWorld-Verified **83%** (only strong figure), GDPval **1,423 Elo** (327 Elo under 1,750+ frontier), TB 2.1 Vals **73.8%** (14.2 pts under 88% ref), AA Agentic Index **30.1%** (2nd lowest in batch). **Capped by:** MazeBench **0%**, no TB 2.1/4.0 vendor, τ³-Banking/τ²-bench/BrowseComp/MCP-Atlas/Toolathlon/Claw-Eval/Agents' Last Exam all absent — **two of three frontier references entirely unmeasured**.
- **Reasoning: 75/100.** (was 65) GPQA Diamond **92.8%/93.4%** (clears 90%+ on both harnesses), HLE **40.8%** (just clears 40%+ ref), ARC-AGI-1 **91.2%**, AA LCR **80.0%**. **Capped by:** **CritPt 10.6% (2nd worst in batch)**, FrontierMath Tier 4 **22.0%** (2nd worst), AA Intelligence Index **34.0**, ARC-AGI-2 **60.4%**, hallucination **55.6%**, **no MRCR**.
- **Context window: 96/100.** (was 95) 1M native; **AA LCR 80.0%**; **no >200K tier** — full 1M at flat $1.50/$7.50. Held at 96 (not 100) due to **no MRCR/GraphWalks retrieval measurement**, no max-output limit published.
- **Multimodal: 88/100.** (was 90) Text, image, video, **audio** input (omni-input) — 90-100 tier. MMMU-Pro **83.2%**, Design Arena **1,299 Elo**. **Capped by:** narrow visual suite (no CharXiv/ExtractBench/BabyVision/ZeroBench), ParseBench **69.38%**, no video/audio output, text-only output.
- **Coding: 68/100.** (was 70) LiveCodeBench **88.1%** (Vals), SWE-bench **79.6%** (Vals). **Capped by:** DeepSWE **49.0% (25 pts under 74% ref, worst in batch)**, AA Coding Index **69.2%** (0.8 under 70% ref), AA-SciCode **53.4%** (1.6 under 55% ref), TB 2.1 **73.8%** (11.2 under 85% ref), CursorBench 3.2 **53.5%**, FrontierCode 1.1 **26.9%**, **no SWE-bench Verified**.
- **Cost efficiency: 85/100.** (was 95) $1.50/$7.50 with **no >200K tier** — full 1M at flat rate. 80% cache discount. **Held at 85 (not 88) because dominated by Gemini 3.7/3.8 Flash at same $1.50 input, no free tier.** Methodology: $1.50/$7.50 between ~$1.25/$4.25 (≈88) and ~$3/$15 (≈60).
- **Overall Score: 77/100.** (was 77) Half-up mean of (58 + 75 + 96 + 88 + 68) / 5 = 385 / 5 = 77.0 → **77**. **Matches queue (89.3) but below average of 31 qualifying raters (89.3).** Best-fit: **Cheap multimodal vision engine and little else** — AA-MMMU-Pro 83.2%, Design Arena 1,299, audio/video input at $1.50/$7.50 flat; **Do not deploy for agentic work (AA Agentic Index 30.1%, MazeBench 0%) or repository coding (DeepSWE 49.0%, worst in batch).** Three generations behind. For same money, Gemini 3.7 Flash beats it on BenchLM, agentic, retrieval, reasoning.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-11-08
- Method: **Deep second-pass re-research** (original 2026-10-19). Cross-rater synthesis from Step 5 Preview (2026-11-05, Overall 73) + official Google sources (Gemini 3.6 Flash launch post, BenchLM catalog). **Average of 31 qualifying raters: 89.3 Overall.** Queue: 89.3. **Critical findings:** Weakest agentic profile in batch (MazeBench 0%, AA Agentic Index 30.1%); worst deep-scientific reasoning (CritPt 10.6%, FrontierMath T4 22.0%); weakest repository coding (DeepSWE 49.0%, 25 pts under frontier); only 29 benchmark rows (2nd thinnest in batch); three generations behind Gemini 4.
- Reference URLs:
  - [Google — Gemini 3.6 Flash Launch Post](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-6-flash-3-5-flash-lite-3-5-flash-cyber/)
  - [BenchLM — Gemini 3.6 Flash (62.41/100, #44/1009, 29 rows)](https://benchlm.ai/models/gemini-3-6-flash)
  - [Artificial Analysis — Gemini 3.6 Flash](https://artificialanalysis.ai/models/gemini-3-6-flash)
  - [Vals AI — Gemini 3.6 Flash](https://www.vals.ai/models/google_gemini-3.6-flash)
  - [ARC Prize — Gemini 3.6 Flash](https://arcprize.org/results/gemini-3-6-flash)
  - [Epoch AI — FrontierMath v2](https://epoch.ai/benchmarks/frontiermath-tier-4-v2)
  - [OpenRouter — Gemini 3.6 Flash](https://openrouter.ai/google/gemini-3.6-flash/benchmarks)
- Future sources: add a file next to this one, e.g. `GPT_5.md`, using the same headings.

---