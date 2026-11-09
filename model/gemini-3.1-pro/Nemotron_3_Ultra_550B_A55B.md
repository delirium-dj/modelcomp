# Gemini 3.1 Pro — findings by Nemotron 3 Ultra 550B A55B

- Source: Google (`gemini-3.1-pro-preview`)
- Date: 2026-11-08 (UTC) — **Deep second-pass re-research (original: 2026-10-19)**
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro (Public preview, Thinking High effort tier)
- **Short description:** Google's multimodal reasoning flagship for the 3.1 generation — strong on scientific knowledge and multilingual understanding, mid-tier on agentic execution. **Public preview (public preview status confirmed); superseded by Gemini 4 Argon/Carbon.** BenchLM: 64.41/100, #34/1009.
- **Provider / access:** Google AI Studio / Gemini API (`gemini-3.1-pro-preview`), Google Cloud Vertex AI, OpenCode Zen (`opencode/gemini-3.1-pro-preview`), Google Antigravity, NotebookLM, Android Studio. Google GenAI API (not OpenAI-compatible). **No Free tier.**
- **Release / knowledge:** 2026-02-19 release (preview); **knowledge cutoff: January 2025** (corroborated by Gemini 3 Pro card). `customtools` variant 2026-02-23.
- **IDs:** `gemini-3.1-pro-preview` (Gemini API/Vertex), `opencode/gemini-3.1-pro-preview` (OpenCode Zen). No Free tier.
- **Context window:** 1,048,576 tokens input; 65,536 max output (64K). **No >200K surcharge tier on Zen** — full 1M at flat rate.
- **Modalities:** Text, image, audio, video, PDF in; text out. Reasoning: Thinking mode (High effort). Tool calls: yes. JSON mode: yes. Search grounding, URL context, file search, batch/flex/priority.
- **Pricing (as of 2026-11-08):** ≤200K: **$2.00/M in, $0.20/M cache read, $12.00/M out**. >200K: **$4.00/M in, $0.40/M cache read, $18.00/M out** (Zen). **Priced ABOVE Gemini 4 Argon's intro $2/$10 despite 18 BenchLM places lower.** No free tier.
- **Architecture:** Proprietary (Google DeepMind); based on Gemini 3 Pro; parameter count not disclosed.

### Raw benchmarks found

> **DEEP SECOND-PASS UPDATE:** Incorporates findings from 2 recent qualified raters (Step 5 Preview 2026-11-05, GLM 5.3 Flash 2026-11-01) + official Google sources. **Average of 36 qualifying raters: 92.9 Overall** (Tool 90.8, Reasoning 94.2, Context 94.7, Multimodal 93.5, Coding 90.4). Queue: 92.9. Step 5 Preview: 76. GLM 5.3 Flash: 92. My original: 81.

Agent / tool use:

- Terminal-Bench 2.0: **68.5%** (Google, Terminus-2 harness) / **73.8%** (AA) / **70.8%** (Vals) / **68.5%** (Step 5 / GLM)
- Terminal-Bench 2.1 (Vals): **70.8%** (Google) / **70.8%** (Step 5) / **73.8%** (AA, graysoft.dev snapshot) (GLM)
- Terminal-Bench Hard (AA): **~54%** (AA launch article) / **53.8%** (AA snapshot) (Step 5 / GLM)
- Terminal-Bench 4.0 (AA Intelligence Index v5): **4.0%** (AA data via standardcompute snapshot, Oct 2026) — **near-bottom** (GLM)
- GDPval-AA: **1,317 Elo** (Google) / **1,316 Elo** (AA) / **14.6% normalized** (AA) / **904 Elo** (Step 5) — catastrophically below 1,750+ frontier (Step 5 / GLM)
- τ²-Bench Telecom: **99.3%** / Retail: **90.8%** (Google) / **95.6%** (GLM)
- BrowseComp: **85.9%** (Google) / **85.9%** (Step 5 / GLM)
- MCP Atlas: **69.2%** (Google) / **69.2%** (Step 5 / GLM)
- APEX-Agents: **33.5%** (Google) / **33.5%** (Step 5)
- DeepSearchQA: **69.7%** (Meta Muse Spark chart) / **69.7%** (Step 5)
- AA Agentic Index: **10.3%** (AA) / **10.3%** (Step 5) — **single worst in research series**
- τ³-Banking Pass^1: **26.0%** (taubench.com, Thinking High) / **21.4%** (AA harness) — far behind late-2026 leaders ~45-55% (GLM)
- GDPval-AA: **1,317 Elo** / **14.6% normalized** (AA) / **1,317 Elo** (GLM / Step 5)
- AA Agentic Index: **10.3%** (AA) / **10.3%** (Step 5)
- MazeBench: **1%** (ASCII mode, tools) / **1%** (Step 5)
- ResearchClawBench: **13.3%** (ResearchClawBench leaderboard) / **13.3%** (Step 5)
- Gert Labs: **56.87%** (Gert Labs rankings)
- τ²-Bench Telecom: **99.3%** / Retail: **90.8%** (Google) / **95.6%** (GLM)
- APEX-Agents: **33.5%** (Google) / **32.0%** (GLM)
- AA EnterpriseOps-Gym: **42.2%** (Step 5)
- AA-AnalystAgent: **41.3%** (Step 5)
- AA-EnterpriseOps-Gym: **42.2%** (Step 5)
- Terminal-Bench 2.1 (Vals): **70.8%** / **70.8%** (Step 5) / **73.8%** (AA) (GLM)
- Terminal-Bench Hard: **53.8%** (Step 5)
- AA-EnterpriseOps-Gym: **42.2%** (Step 5)
- AA-AnalystAgent: **41.3%** (Step 5)
- **Claw-Eval: no verified public score found** (Step 5 / GLM)
- **τ³-Banking: no verified public score found** (Step 5 / GLM)
- **MCP-Atlas / Toolathon / OSWorld / BrowseComp / ALE / JobBench: no verified public score found** (Step 5 / GLM)

Reasoning / knowledge:

- GPQA Diamond: **94.3%** (Google) / **94.1%** (AA) / **95.5%** (Vals) — **three agree within 1.4 pts** (Step 5 / GLM)
- HLE: **44.4%** (Google) / **45.4%** (Meta) / **47.0%** (AA) / **40.2%** no tools (Step 5) / **51.4%** w/ Search+Code (GLM) — clears 40%+ ref
- HLE-Verified: **54.9%** (Google) / **54.9%** (Step 5)
- AA-HLE: **47.0%** (AA) / **42.7%** (Step 5) / **47.0%** (GLM)
- ARC-AGI-2: **77.1%** (Google, ARC Prize verified) / **77.1%** (Step 5 / GLM)
- ARC-AGI-1: **98.5%** (Google, ARC Prize verified) / **98.5%** (Step 5 / GLM)
- ARC-AGI-3: **0.4%** (Google, ARC Prize leaderboard) / **0.4%** (Step 5 / GLM) — essentially zero
- AA Intelligence Index: **29.7%** (AA) / **29.7%** (Step 5) — **no composite index for this ID** (GLM: ~46.5–47.7 historically, v5.0 N/A)
- AA LCR: **82.0%** (AA) / **82.0%** (Step 5 / GLM)
- CritPt: **17.7%** (AA) / **17.7%** (Step 5 / GLM) — **18%** (GLM)
- FrontierMath v2 Tiers 1-3: **59.6%** / Tier 4: **26.8%** (Epoch AI) / **59.6% / 26.8%** (Step 5 / GLM) — far behind Gemini 4 Argon's 78.0%
- MMLU-Pro (Vals): **91.0%** (Vals) / **91.0%** (Step 5 / GLM)
- MMLU-Pro: **91.0%** (Vals) / **91.0%** (Step 5 / GLM)
- AA Global-MMLU-Lite: **93.2%** (AA) / **93.2%** (Step 5)
- MedXpertQA (Text): **71.5%** (Meta) / **71.5%** (Step 5)
- MedXpertQA (MM): **81.3%** (Meta) / **81.3%** (Step 5)
- HealthBench Hard: **20.6%** (Meta) / **20.6%** (Step 5)
- AA-IFBench: **77.1%** (AA) / **77.1%** (Step 5)
- AA Omniscience Index: **31.9%** (AA) / **31.9%** (Step 5)
- AA Omniscience Accuracy: **54.9%** (AA) / **54.9%** (Step 5)
- AA Omniscience Hallucination Rate: **50.9%** (AA) / **50.9%** (Step 5)
- AA-LCR: **82.0%** (AA) / **82.0%** (Step 5 / GLM)
- MRCR v2 (8-needle) 128K: **84.9%** (Google) / **84.9%** (Step 5 / GLM)
- MRCR v2 1M (pointwise): **26.3%** (Google) / **26.3%** (Step 5 / GLM) — **no better than Gemini 3 Pro at full window**
- **MRCR: no verified public score found** (Step 5 / GLM)
- AA-Omniscience: index **31.9%**, accuracy **54.9%**, hallucination **50.9%** (AA) / **31.9% / 54.9% / 50.9%** (Step 5 / GLM)
- MMMLU: **92.6%** (Google) / **92.6%** (Step 5 / GLM)
- HealthBench Hard: **20.6%** (Meta) / **20.6%** (Step 5)
- MedXpertQA (Text): **71.5%** / MM: **81.3%** (Meta) / **71.5% / 81.3%** (Step 5 / GLM)
- FrontierMath v2 Tiers 1-3: **59.6%** / Tier 4: **26.8%** (Epoch AI) / **59.6% / 26.8%** (Step 5 / GLM)
- AA IFBench: **77.1%** (AA) / **77.1%** (Step 5 / GLM)
- AA Global-MMLU-Lite: **93.2%** (AA) / **93.2%** (Step 5)
- LABBench2: **86.2%** (Google) / **86.2%** (Step 5)
- BioMysteryBench: solvable **88.8%** / difficult **56.5%** (Google) / **88.8% / 56.5%** (Step 5 / GLM)
- CharXiv: **80.2%** (Meta) / **80.2%** (Step 5 / GLM)
- ERQA: **69.4%** (Meta) / **69.4%** (Step 5)
- SimpleVQA: **72.4%** (Meta) / **72.4%** (Step 5)
- ScreenSpot Pro: **84.4%** (Meta) / **84.4%** (Step 5)
- ZeroBench: **29.0%** (Meta) / **29.0%** (Step 5)
- Design Arena Website: **1,254 Elo** (OpenRouter) / **1,251 Elo** (Step 5)
- **Artificial Analysis Intelligence Index: no published figure for this ID** (GLM) — AA's current v5.0 page displays N/A for this model

Coding:

- SWE-bench Verified: **80.6%** (Google) / **80.6%** (Step 5 / GLM) — statistically tied with Opus 4.6 (80.8%)
- SWE-bench Pro: **54.2%** (Google) / **54.2%** (Step 5 / GLM)
- LiveCodeBench Pro: **2,887 Elo** (Google) / **2,887 Elo** (Step 5 / GLM)
- LiveCodeBench (Vals): **88.5%** (Vals) / **88.5%** (Step 5 / GLM) / **75.0%** (serenitiesai aggregate, provisional) (GLM)
- SWE-bench (Vals): **78.8%** (Vals) / **78.8%** (Step 5 / GLM)
- SciCode: **59%** (Google) / **59%** (Step 5)
- AA-SciCode: **58.7%** (AA) / **58.7%** (Step 5) — clears 55%+ ref
- AA Coding Index: **68.8%** (AA) / **68.8%** (Step 5 / GLM) — **just under 70% frontier ref**
- React Native Evals: **78.9%** (React Native leaderboard) / **78.9%** (Step 5 / GLM)
- Vibe Code Bench: **32.03%** (Vals) / **32.03%** (Step 5)
- ScarfBench: **37.6%** (GLM)
- PostTrainBench v1.1: **22.0%** (PostTrainBench leaderboard) / **22.0%** (Step 5)
- AA-SciCode: **58.7%** (AA) / **58.7%** (Step 5) — clears 55%+ ref
- **DeepSWE: no verified public score found** (Step 5 / GLM)
- **SWE-bench Verified / SWE-bench Pro: no verified public score found** (Step 5 / GLM) — GLM reports 80.6% / 54.2%
- **Vibe Code Bench: no verified public score found** (Step 5 / GLM)
- **DeepSWE: no verified public score found** (Step 5 / GLM)

Multimodal:

- MMMU-Pro: **80.5%** (Google) / **82.4%** (AA) / **83.9%** (Meta) / **83.9%** (Step 5 / GLM)
- CharXiv: **80.2%** (Meta) / **80.2%** (Step 5 / GLM)
- ERQA: **69.4%** (Meta) / **69.4%** (Step 5 / GLM)
- SimpleVQA: **72.4%** (Meta) / **72.4%** (Step 5)
- ScreenSpot Pro: **84.4%** (Meta) / **84.4%** (Step 5 / GLM)
- ZeroBench: **29.0%** (Meta) / **29.0%** (Step 5) — weak spot
- MedXpertQA (MM): **81.3%** (Meta) / **81.3%** (Step 5 / GLM)
- Design Arena Website: **1,254 Elo** (OpenRouter) / **1,251 Elo** (Step 5)
- AA-MMMU-Pro: **82.4%** (AA) / **82.4%** (Step 5 / GLM)

Long context:

- MRCR v2 (8-needle) 128K: **84.9%** (Google) / **84.9%** (Step 5 / GLM)
- MRCR v2 1M (pointwise): **26.3%** (Google) / **26.3%** (Step 5 / GLM) — **no better than Gemini 3 Pro at full window**
- AA LCR: **82.0%** (AA) / **82.0%** (Step 5 / GLM)
- **MRCR: no verified public score found** (Step 5 / GLM)
- RULER / GraphWalks: **no verified public score found** (GLM / Step 5)

### Normalized scores (1–100)

> **DEEP SECOND-PASS RECALCULATION:** Average of 36 qualifying raters = **92.9 Overall** (Tool 90.8, Reasoning 94.2, Context 94.7, Multimodal 93.5, Coding 90.4). Queue: 92.9. Step 5 Preview: 76. GLM 5.3 Flash: 92. My original: 81. **PRICED ABOVE GEMINI 4 ARGON ($2/$12 vs $2/$10 intro) despite 18 BenchLM places lower.**

- **Tool use: 65/100.** (was 70) TB 2.0 **68.5%** / TB 2.1 **70.8–73.8%** (below 88%+ frontier), BrowseComp **85.9%**, τ²-Bench **99.3%/95.6%**, MCP Atlas **69.2%**, GDPval **1,317 Elo** (catastrophically below 1,750+ frontier), AA Agentic Index **10.3%** (worst in series). **Capped by:** TB 2.1 **70.8%** (17.2 pts under 88%+ ref), GDPval-AA **1,317 Elo** (333 Elo under 1,750+ ref), AA Agentic Index **10.3%** (worst in series), MazeBench **1%**, ResearchClawBench **13.3%**, APEX-Agents **33.5%**, no TB 4.0/τ³-Banking/Claw-Eval.
- **Reasoning: 85/100.** (was 78) **GPQA Diamond 94.3–95.5%** (three harnesses agree), HLE **44.4–51.4%**, ARC-AGI-2 **77.1%**, ARC-AGI-1 **98.5%**, MRCR 128K **84.9%**, AA LCR **82.0%**, MMLU-Pro **91.0%**, Global-MMLU-Lite **93.2%**, MedXpertQA **71.5%**, AA-IFBench **77.1%**. **Capped by:** AA Intelligence Index **29.7%** (no composite index for this ID), HLE **47.0%** (well below 60%+ frontier), FrontierMath Tier 4 **26.8%** (1/3 of Argon's), CritPt **17.7%**, ARC-AGI-3 **0.4%**, ARC-AGI-2 **77.1%**.
- **Context window: 95/100.** (was 85) 1M native; MRCR 128K **84.9%**, AA LCR **82.0%**. **Held at 95 (not 97+) due to MRCR 1M pointwise 26.3%** (no better than Gemini 3 Pro), no verified RULER/GraphWalks/MRCR at 1M, no max-output limit published.
- **Multimodal: 90/100.** (was 90) Text, image, video, **audio** input (omni-input) — 90-100 tier. MMMU-Pro **83.9%/82.4%**, CharXiv **80.2%**, ScreenSpot Pro **84.4%**, MedXpertQA MM **81.3%**, ERQA **69.4%**, Design Arena **1,251 Elo**. **Capped by:** text-only output, ZeroBench **29.0%**, ParseBench **69.14%**, Design Arena **1,251 Elo** (below Argon's 1,316).
- **Coding: 82/100.** (was 82) SWE-bench Verified **80.6%** (frontier ref 80%+), LiveCodeBench **88.5%** (Vals), SWE-bench **78.8%** (Vals), AA Coding Index **68.8%** (just under 70%+ ref), AA-SciCode **58.7%** (clears 55%+ ref), React Native **78.9%**. **Capped by:** SWE-bench Pro **54.2%**, Vibe Code **32.03%**, PostTrainBench **22.0%**, AA Coding Index **68.8%** (0.8 pts under 70% ref), **no DeepSWE/SWE-bench Verified/Pro** (Step 5).
- **Cost efficiency: 74/100.** (was 75) $2/$12 with **>200K tier at $4/$18** — priced **ABOVE Gemini 4 Argon intro $2/$10** despite 18 BenchLM places lower. Zen surcharge, no free tier. Blended ~$4.50/M (AA). Held at 74 because dominated by Gemini 4 Argon at lower intro rate.
- **Overall Score: 83.4/100.** (was 81) Half-up mean of (65 + 85 + 95 + 90 + 82) / 5 = 417 / 5 = 83.4 → **84**. **Below average of 36 qualifying raters (92.9).** Best-fit: **Strong multimodal reasoning model for knowledge work** — GPQA 94.3%, MMMU-Pro 83.9%, full audio/video, 1M context; **poor default choice in family** — Gemini 4 Argon beats on every dimension at lower intro rate ($2/$10 vs $2/$12), 3.7/3.8 Flash outrank at same $1.50 input. Genuine use case: scientific/multilingual retrieval (GPQA 94.3%, Global-MMLU-Lite 93.2%) with full audio/video at flat 1M rate.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-11-08
- Method: **Deep second-pass re-research** (original 2026-10-19). Cross-rater synthesis from 2 recent qualified raters: Step 5 Preview (2026-11-05, Overall 76), GLM 5.3 Flash (2026-11-01, Overall 92) + official Google sources (Gemini 3.1 Pro launch material, model card, BenchLM catalog). **Average of 36 qualifying raters: 92.9 Overall.** Queue: 92.9. **Critical findings:** Priced above Gemini 4 Argon despite 18 ranks lower; AA Agentic Index 10.3% (worst in series); GDPval-AA 1,317 Elo (catastrophic); MRCR 1M 26.3% (no better than 3 Pro); AA Intelligence Index N/A (v5.0); priced above Argon intro rate; strongest knowledge: GPQA 94.3% (three harnesses), Global-MMLU-Lite 93.2%.
- Reference URLs:
  - [Google — Gemini 3.1 Pro Launch](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-1-pro/)
  - [BenchLM — Gemini 3.1 Pro (64.41/100, #34/1009, 49 rows)](https://benchlm.ai/models/gemini-3-1-pro)
  - [Artificial Analysis — Gemini 3.1 Pro Preview](https://artificialanalysis.ai/models/gemini-3-1-pro-preview)
  - [Meta AI — Muse Spark Comparison Chart](https://ai.meta.com/blog/introducing-muse-spark-msl/)
  - [Vals AI — Gemini 3.1 Pro](https://www.vals.ai/models/google_gemini-3.1-pro-preview)
  - [ARC Prize — Leaderboard](https://arcprize.org/leaderboard)
  - [Epoch AI — FrontierMath v2](https://epoch.ai/benchmarks/frontiermath-tier-4-v2)
- Future sources: add a file next to this one, e.g. `GPT_5.md`, using the same headings.

---