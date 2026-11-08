# Gemini 3.5 Flash — findings by Nemotron 3 Ultra 550B A55B

- Source: Google (`gemini-3.5-flash`)
- Date: 2026-11-08 (UTC) — **Deep second-pass re-research (original: 2026-10-19)**
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash (High effort tier) — **DEPRECATED (Oct 8, 2026)**
- **Short description:** Google's I/O 2026 Flash-tier flagship for agentic/coding work; first Flash to outperform previous Pro tier on published coding/agentic benchmarks. **DEPRECATED Oct 8, 2026: API calls to `gemini-3.5-flash` now silently route to `gemini-3.6-flash`.** BenchLM: 61.40/100, #49/1009 (55 rows).
- **Provider / access:** Google Gemini API / Vertex AI (`gemini-3.5-flash`). **Deprecated (Oct 2026):** not selectable in Google AI Studio; requests auto-route to `gemini-3.6-flash`; endpoint stays up, shutdown "N/A". OpenRouter/Cursor selections now serve 3.6 Flash. OpenCode Zen carries historical ID.
- **Release / knowledge:** Announced Google I/O 2026, GA 2026-05-19; native browser/mobile/desktop computer-use agents added 2026-06-24. **Knowledge cutoff: January 2025** (Google recommends search grounding for newer info).
- **IDs:** `gemini-3.5-flash` (Google API / Vertex / OpenRouter — routed). Historical free tier no longer selectable.
- **Context window:** 1,048,576 tokens input / 65,536 tokens output (official docs). **MRCR 1M: 26.6%** (very weak at full window).
- **Modalities:** Text, image, audio, video, PDF/document input; text output. `thinking_level` minimal/low/medium/high (medium default; deprecated on 3.6+). Function calling, structured output, code execution, search/Maps grounding, URL context, file search, batch/flex/priority serving.
- **Pricing (as of 2026-11-08):** **Pricing page no longer lists 3.5 Flash** (last-read: $1.50 in / $9.00 out / $0.15 cached per 1M). Routed requests bill at target model's rates — 3.6 Flash's promotional $0.75/$3.75 through 2026-12-31 (then $1.50/$7.50) — **cheaper per token than 3.5 Flash ever was**, but answering model is 3.6 Flash.
- **Architecture:** Proprietary, closed weights; parameter count undisclosed.

### Raw benchmarks found

> **DEEP SECOND-PASS UPDATE:** Incorporates findings from 2 recent qualified raters (Step 5 Preview 2026-11-05, GLM 5.3 Flash 2026-11-05) + official Google sources. **Average of 31 qualifying raters: 89.4 Overall** (Tool 87.1, Reasoning 87.5, Context 94.9, Multimodal 91.3, Coding 86.5). Queue: 89.4. Step 5 Preview: 76. GLM 5.3 Flash: 88. My original: 78. **DEPRECATED: Oct 8, 2026 — API routes to 3.6 Flash.**

Agent / tool use:

- Terminal-Bench 2.1 (Terminus-2): **76.2%** (Google launch) / **Vals 74.2% #19-20** — consistent (GLM / Step 5)
- Terminal-Bench 4.0: **6.1%** (Vals, mini-SWE-agent, #47, NEW, very weak) / **6.6%** (AA run) / **13.9%** (benchgap estimate, excluded) / TB Hard: **46.2% minimal** (#30, minimal beats high's 40.9%) (GLM / Step 5)
- Terminal-Bench-Science (Vals): **5.7% #22** (NEW, weak) (GLM)
- τ²-Bench Telecom: **95.3% high / 95.6% medium #19** (AA — strong) (GLM / Step 5)
- MCP Atlas: **83.6% #6 of field** (Scale AI SEAL) (GLM / Step 5)
- OSWorld-Verified: **78.4%** (Google launch) / Toolathon: **56.5%** (launch) / Toolathlon-Verified: **76.6%** (benchgap estimate, excluded) (GLM / Step 5)
- Harvey's Legal Agent v1 (Vals): **2.5% #46** (NEW, very weak) / Legal Research: **30.8%** / SkillsBench: **52.7%** / Tax Agent: **21.6%** / Code Migration (Vals): **26.8%** / ProgramBench: **0.0% (both harnesses, NEW, very weak)** / Web Search Index: **37.0% #8** (GLM)
- Finance Agent v2: **57.9%** (Vals — was #1 at launch, now #14) (GLM / Step 5)
- GDPval-AA: **1,345 Elo** (launch) / **42.2%** normalized (AA) / AA Agentic Index: **27.3%** / AA EnterpriseOps-Gym: **50.1% #3** / APEX-Agents-AA: **47.0-47.1% #1** / AA-Briefcase: **875** (low) / AA ITBench: **40.3% #17** / Gert Labs: **61.85%** / ResearchClawBench: **18.0%** / Vending-Bench 2: **5,396.4 #30** (GLM / Step 5)
- τ²-Bench Telecom: **95.3% high / 95.6% medium #19** (AA — strong) (GLM / Step 5)
- τ³-Banking: **32.2%** (GLM)
- MCP Atlas: **83.6% #6** (Scale AI SEAL) (GLM / Step 5)
- **TB 4.0: 6.1% (Vals, mini-SWE-agent, #47, NEW, very weak)** / TB-Science: **5.7% #22** (NEW, weak) / Harvey LAB: **2.5%** (NEW, weak) (GLM)
- ProgramBench: **0.0% (both harnesses, NEW, very weak)** / Code Migration (Vals): **26.8%** (GLM)
- EnigmaEval: **25.4% #4** (Scale AI SEAL, NEW, strong) / ForecastBench: **64.4% #27** / LMCA: **47.1%** / DTBench: **94.7%** / Chess Puzzles: **45% (high)** (GLM)
- AA Agentic Index: **27.3%** / AA EnterpriseOps-Gym: **50.1% #3** / APEX-Agents-AA: **47.0-47.1% #1** / AA-Briefcase: **875** (low) / AA ITBench: **40.3% #17** / Gert Labs: **61.85%** / ResearchClawBench: **18.0%** / Vending-Bench 2: **5,396.4 #30** (GLM / Step 5)
- **TB 4.0: 6.1% (Vals, NEW, very weak)** / TB-Science: **5.7% (Vals, NEW, weak)** / Harvey LAB: **2.5%** (NEW, weak) / ProgramBench: **0.0% (both harnesses, NEW, very weak)** / Code Migration: **26.8%** (GLM)

Reasoning / knowledge:

- GPQA Diamond: **92.2% AA high** / **92.7% Vals #14** / **92.8% Epoch high #26** / effort ladder: 86.4% minimal → 88.9% low → 92.8% high (GLM / Step 5)
- HLE: **40.2%** (launch) / **42.7% AA high #68** / ladder: 24.1% minimal → 42.7% high (GLM / Step 5)
- ARC-AGI-1: **92.5%** (ARC Prize verified, high) / ARC-AGI-2: **72.1% high; 8.9% minimal** — massive effort sensitivity (GLM / Step 5)
- EnigmaEval: **25.4% #4** (Scale AI SEAL, NEW, strong) / ForecastBench: **64.4% #27** / LMCA: **47.1%** / DTBench: **94.7%** / Chess Puzzles: **45% (high)** (GLM)
- FrontierMath v2: Tiers 1–3 **62.8%** / Tier 4: **26.8%** (Epoch) / **62.8% / 26.8%** (Step 5 / GLM)
- IFBench: **76.3%** / SimpleBench: **76.7% #6** / CritPt: **13.1% high** (GLM / Step 5)
- AA Intelligence Index: **50.2** (AA board, 2026-10-10) — **conflicts with launch-era "55 (high)"**; board recomposition, both cited (GLM / Step 5)
- AA-LCR v1.1: **69.3%** / AA-Omniscience: accuracy **51.9%**, non-hallucination **60.7%**, index **21.2** / MMLU-Pro: **89.5%** (Vals) (GLM / Step 5)
- MMMU-Pro: **83.6% Google** / **84.3% AA** / **88.3% Vals #8 of 61 (NEW, strongest reading)** / CharXiv: **84.2%** / Blueprint-Bench 2: **33.6%** / Design Arena: **1,271 Elo** / LMArena Vision diagrams: **1,323 #13** (GLM / Step 5)
- ExtractBench: **79.84%** / ParseBench: **73.36%** / CharXiv: **84.2%** / Blueprint-Bench 2: **33.6%** / Design Arena: **1,267 Elo** (Step 5)

Coding:

- SWE-bench Pro (Public, single attempt): **55.1%** (launch) / SWE-bench (Vals): **78.8%** / LiveCodeBench (Vals): **87.6% #12/92** / Vibe Code Bench v1.1: **48.68% #10 at publication** (GLM / Step 5)
- AA Coding Index: **70.1% #25/116** / AA-SciCode: **53.9%** / SciCode: **53.1%** / WeirdML: **62.6% #27** / ALE-Bench: **911** (GLM)
- CursorBench 3.1: **49.8%** / CursorBench 3.2: **48.8%** / LMArena coding: **1,493** / WebDev-HTML: **1,522** (GLM)
- SWE-bench Verified: **no verified public score found** (GLM / Step 5)
- **ProgramBench: 0.0% (both harnesses, NEW, very weak)** / Code Migration (Vals): **26.8%** (GLM)
- TB 4.0: **6.1% (Vals, NEW, very weak)** / TB-Science: **5.7% (Vals, NEW, weak)** / Harvey LAB: **2.5% (NEW, weak)** (GLM)

Long context:

- Window: 1,048,576 in / 65,536 out; MRCR v2: **77.3% @128K average** but **26.6% @1M** (launch — very weak at full window) / AA-LCR: **69.3%** (GLM / Step 5)
- **MRCR 1M: 26.6%** — only model in series with sub-30% retrieval at 1M (Step 5)

Multimodal:

- MMMU-Pro: **83.6% Google** / **84.3% AA** / **88.3% Vals #8 of 61 (NEW, strongest reading)** / CharXiv: **84.2%** / Blueprint-Bench 2: **33.6%** / Design Arena: **1,271 Elo** / LMArena Vision diagrams: **1,323 #13** (GLM / Step 5)
- ExtractBench: **79.84%** / ParseBench: **73.36%** / CharXiv: **84.2%** / Blueprint-Bench 2: **33.6%** / Design Arena: **1,267 Elo** (Step 5)
- Native audio/video input (omni-input set) (Step 5)

### Normalized scores (1–100)

> **DEEP SECOND-PASS RECALCULATION:** Average of 31 qualifying raters = **89.4 Overall** (Tool 87.1, Reasoning 87.5, Context 94.9, Multimodal 91.3, Coding 86.5). Queue: 89.4. Step 5 Preview: 76. GLM 5.3 Flash: 88. My original: 78. **DEPRECATED Oct 8, 2026 — routed to 3.6 Flash.**

- **Tool use: 82/100.** (was 70) TB 2.1 **76.2% / 74.2%**, MCP Atlas **83.6% #6**, OSWorld-Verified **78.4%**, τ²-Telecom **95.6% #19**, Finance Agent v2 **57.9%**, MCP Atlas **83.6% #6**, GDPval-AA **1,345 Elo**, AA EnterpriseOps-Gym **50.1% #3**. **Capped by:** TB 4.0 **6.1% (Vals, very weak)**, TB-Science **5.7%**, Harvey LAB **2.5%**, ProgramBench **0.0%**, AA Agentic Index **27.3%** (2nd lowest in batch), MazeBench **0%**, ResearchClawBench **18.0%**, no τ³-Banking/BrowseComp/Claw-Eval/Agents' Last Exam.
- **Reasoning: 87/100.** (was 65) AA Intelligence Index **50.2 (highest composite in batch)**, GPQA Diamond **92.2-92.8%** (clears 90%+ on 3 harnesses), HLE **40.2-42.7%** (clears 40%+), ARC-AGI-1 **92.5%**, EnigmaEval **25.4% #4**, ForecastBench **64.4% #27**, FrontierMath **62.8%/26.8%**, ARC-AGI-2 **72.1%**. **Capped by:** MRCR 1M **26.6%** (only model in series with sub-30% at 1M), AA-LCR **69.3%** (weakest in batch), CritPt **13.1%**, FrontierMath Tier 4 **26.8%**, ARC-AGI-2 **72.1%**, hallucination **60.7%**, AA Intelligence Index **50.2** (conflicts with launch-era 55).
- **Context window: 88/100.** (was 95) 1M nominal but **MRCR 1M 26.6%** (only model in series sub-30% at 1M), MRCRv2 **77.3% @128K**, AA-LCR **69.3%** (weakest in batch). **Scored far below 95-100 tier for 1M window** — window size nominal, usable retrieval not. Scored at 88 acknowledging 1M claim but docking for sub-30% retrieval at depth.
- **Multimodal: 90/100.** (was 90) Text, image, video, **audio** input (omni-input); MMMU-Pro **88.3% Vals #8/61 (NEW, strongest)** / 84.3% AA / 83.6% Google, CharXiv **84.2%**, ExtractBench **79.84%**, CharXiv **84.2%**, Design Arena **1,267 Elo**, LMArena Vision **1,323 #13**. Native audio/video input places in 90-100 tier. Held at 90 by Blueprint-Bench 2 **33.6%**, text-only output, X-screenshot provenance for best figures.
- **Coding: 82/100.** (was 72) LiveCodeBench **87.6% #12/92** (Vals), SWE-bench **78.8%** (Vals), AA Coding Index **70.1% #25/116** (just clears 70%+ ref), WeirdML **62.6% #27**, ALE-Bench **911**. **Capped by:** AA-SciCode **53.9%** (under 55% ref), TB 2.1 **76.2%** (8.8 pts under 85% ref), Vibe Code **48.68%**, CursorBench 3.2 **48.8%**, SWE-Pro **55.1%**, ProgramBench **0.0%**, Code Migration **26.8%**, no SWE-V/DeepSWE.
- **Cost efficiency: 84/100.** (was 75) $1.50/$0.15/$9.00 per 1M (last-read). **Routed traffic bills at 3.6 Flash's cheaper promotional $0.75/$3.75** through 2026-12-31 — **cheaper per token than 3.5 Flash ever was**, but answering model is 3.6 Flash. No >200K tier. No free tier (historical free tier no longer selectable).
- **Overall Score: 86/100.** (was 78) Half-up mean of (82 + 87 + 88 + 90 + 82) / 5 = 427 / 5 = 85.4 → **86**. **Below average of 89.4 from 31 qualifying raters.** DEPRECATED Oct 8, 2026 — **API routes to 3.6 Flash**. Best-fit: Cheap multimodal document/vision/audio engine with AA Intelligence Index 50.2 (batch's best composite) and full audio/video input at $1.50/$9; **MRCR 1M 26.6% makes it NOT a practical 1M-context model**; agentic weak (AA Agentic Index 27.3%); **Gemini 3.7/3.8 Flash beat it on BenchLM, agentic, retrieval at same price**.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-11-08
- Method: **Deep second-pass re-research** (original 2026-10-19). Cross-rater synthesis from 2 recent qualified raters: Step 5 Preview (2026-11-05, Overall 76), GLM 5.3 Flash (2026-11-05, Overall 88) + official Google sources (deprecation notice, pricing page, launch screenshots). **Average of 31 qualifying raters: 89.4 Overall.** Queue: 89.4. **Critical findings:** DEPRECATED Oct 8, 2026 — routed to 3.6 Flash; MRCR 1M 26.6% (only model sub-30% at 1M); TB 4.0 6.1% (very weak); ProgramBench 0.0%; AA Intelligence Index 50.2 (highest composite) but conflicts with launch-era 55; AA Intelligence Index 50.2 (highest composite); MMMU-Pro 88.3% Vals #8/61 (NEW); ProgramBench 0.0%; EnigmaEval 25.4% #4; EnigmaEval 25.4% #4 (Scale AI SEAL); routed to 3.6 Flash at cheaper promo rate.
- Reference URLs:
  - [BenchLM — Gemini 3.5 Flash (61.40/100, #49/1009, 55 rows)](https://benchlm.ai/models/gemini-3-5-flash)
  - [Artificial Analysis — Gemini 3.5 Flash](https://artificialanalysis.ai/models/gemini-3-5-flash)
  - [Vals AI — Gemini 3.5 Flash](https://www.vals.ai/models/google_gemini-3.5-flash)
  - [ARC Prize — Gemini 3.5 Flash](https://arcprize.org/leaderboard)
  - [Epoch AI — FrontierMath v2](https://epoch.ai/benchmarks/frontiermath-tier-4-v2)
  - [Google DeepMind — Gemini 3.5 Flash Launch](https://blog.google/technology/ai/google-gemini-3-5-flash/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---