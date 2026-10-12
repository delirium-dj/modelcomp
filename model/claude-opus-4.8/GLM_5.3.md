# Claude Opus 4.8 — findings by GLM 5.3

- Source: Anthropic (`claude-opus-4.8`)
- Date: 2026-10-12 (UTC) — second-pass re-research of the 2026-09-24 report
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.8
- **Short description:** Anthropic's May 2026 Opus reasoning model (adaptive reasoning, max effort default), predecessor to Opus 5. Second-pass lifecycle fact: Anthropic's platform docs now mark it a **legacy model** ("Claude Opus 5.5 is the current Opus model") — still served, still Anthropic's designated safeguard-routing target for flagged cyber tasks (per the Fable 5.1 launch: cyber work routes to Opus 4.8). Top use case: high-quality agentic coding and computer-use with strong honesty.
- **Provider / access:** OpenCode Zen `https://opencode.ai/zen/v1/messages` (Anthropic Messages API, `@ai-sdk/anthropic`); Anthropic API and cloud partners. Composite trackers: BenchLeader **62.4, #79 of 760** at max effort (±4.7; high 61.0 #95; settled — last measured 25 Jun 2026); BenchLM **69.12, #18 of 889** (56 of 625 rows); Epoch Capabilities Index **158, #14 of 257** (it was #4 of 217 at release).
- **Release / knowledge:** 2026-05-28; knowledge cutoff not publicly disclosed.
- **IDs:** `opencode/claude-opus-4.8` (Zen ID `claude-opus-4-8`; no Free ID — paid only)
- **Context window:** 1M tokens total (AA technical specs and BenchLM).
- **Modalities:** text/image in; text out; reasoning yes (adaptive, effort levels — BenchLeader measured high/max/not-stated plus a thinking row); tool calls; JSON mode.
- **Pricing (as of 2026-10-12):** Zen $5.00 in / $25.00 out per 1M (cached read $0.50); BenchLeader blended $10.00/M, 58 tok/s, first answer ~34 s, **$4.08 per Intelligence-Index run** — among the most expensive tracked.
- **Architecture:** proprietary; parameter count undisclosed. System-card cyber note: without safeguards it is somewhat more capable than Opus 4.7 on cyber evaluations; with safeguards comparable; "substantially behind Mythos Preview" on cyber.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **74.6%** (system card) / **84.6% #28** (AA, max — the independent run reads higher than the card) / **71.9% #25** (Vals); Terminal-Bench 2.0: **70.0% #2** (Vals); Terminal-Bench 3.0: **21.1%**; Terminal-Bench 4.0: **21.7% #54** (AA, max) / **23.2% #17** (Vals); Terminal-Bench Hard: **58.3% #10** (AA, max); Terminal-Bench (public board): 23.6% #66; Terminal-Bench Science: **4.3% #17** (Vals — weak)
- Tau2-Bench: **94.4% #31** (AA, max); Tau3-Banking: **34.2% #53** (AA, max — found this pass, resolving the 2026-09-24 gap; weak relative to the frontier's ~50%)
- GDPval-AA: **1593 Elo** (system card) / **47.8% #56 normalized** (AA, max — updated from 46.9%; mid-field rank)
- MCP-Atlas: **82.2% #9** (Scale SEAL); Toolathlon **59.9%**; BrowseComp **84.3%**; DeepSearchQA **93.1%** (system card)
- OSWorld-Verified: **83.4%** (system card) vs **OSWorld-Verified 2.0: 20.6% #7** (OSWorld 2.0 paper board) — protocol conflict (original verified board vs the 2026.08 binary release), both retained
- AA Agentic Index **42.6%**; AA-AnalystAgent **45.0% #12**; APEX-Agents **48.9% #29**; Remote Labor Index **8.3% #4**; GBAEval **70.9% #3**; HiL-Bench **35.3% #9**; LMArena Search **1195 #13**; LMArena Agent **7.1 #11** (high); FACTS Search **79.6% #11**; DeepResearch Bench **50.2% #10** (high); ResearchClawBench 21.1%; Vending-Bench 2992-5787
- Vals professional agents (effort not stated): Finance Agent 53.9% #23, Tax Agent 64.9% #19, SkillsBench **59.2% #9**, Legal Research 43.8% #17, Harvey HLAB 9.6% #16, Time Horizon KSP 11.8% #6
- Claw-Eval / ClawProBench: no verified public score found (unchanged)

Reasoning / knowledge:

- GPQA Diamond: **93.6%** (system card) / **92.0% #41** (AA, max) / **92.4% #16** (Vals) / **91.0% #31** (Epoch, max)
- HLE: **48.7% #30** AA (max) / **49.8%** w/o tools / **57.9%** w/ tools (system card)
- ARC-AGI-2: **72.1% #50** (ARC Prize, max; ladder 62.2% low → 72.1% max); ARC-AGI-3: **1.5% #28** (high — near-total miss on the new board)
- Math (the standout cluster): **AIME 2026 100.0% #1** (MathArena), **MathArena Apex 81.3% #1** (by a huge margin — GPT-5.6 Sol scores 23.4%), HMMT Feb 2026 **95.5% #6**, USAMO 2026 **96.7%**, OTIS Mock AIME **98.3% #21**, LiveBench Mathematics 94.3% #18, LMArena Maths 1494 #22 (high)
- FrontierMath — CONFLICT: Epoch-hub current values **80.0% #15 (Tiers 1-3)** / **56.1% #22 (Tier 4)** (BenchLeader, max) vs BenchLM's "FrontierMath v2" rows **47.2% / 31.25%** — same Epoch-source pattern seen for GPT-5.5 Pro; Epoch's own model page (ECI 158, #14) corroborates the higher band; both sets retained and flagged
- CritPt: **20.9% #52** (AA, max); AA Intelligence Index v4.3.2: **41.8** (updated from 42; mid-field); Kagi LLM Benchmark **88.8% #2**; EnigmaEval **23.5% #5** (xhigh); SimpleBench 64.8% #17; LiveBench Reasoning **89.2% #18** (max); LMArena Hard Prompts 1513 #14 (high); LMCA 57.5% #26; DTBench 94.9% #34; Mystery Game Puzzles 36.0% #19; Chess Puzzles 34.0% #43; BTF-3 13.2-14.0% #6-11; ForecastBench 59.9% #35
- MMLU-Pro **89.6%** (Vals); SimpleQA Verified **53.0% #20**; Omniscience: accuracy 48.8%, hallucination rate **39.3%** (index 28.8) — low hallucination, good honesty; INCLUDE multilingual **87.6%** (system card); AA-LCR **77.7%**; LiveBench Data Analysis 66.0% #56; IFBench 62.2%

Coding:

- SWE-bench Verified: **88.6%** (system card) / **88.6% #12** (Vals); LiveCodeBench (Vals): **87.8% #11**; SWE-bench Pro **69.2%**; SWE Multilingual **84.4%**; SWE Multimodal **38.4%** (system card)
- DeepSWE v1.1: **59.0% #34** (Epoch, max — found this pass, resolving the 2026-09-24 gap; effort ladder 40.8% low → 59.0% max; below the 74% frontier reference)
- WeirdML **82.9% #17** (max); LiveBench Coding **81.8% #12**; LMArena Coding 1533 #16 (high) / WebDev 1556 #36; Vibe Code Bench v1.1 **82.7% #16**; Code Migration 47.3% #13; GSO-Bench **47.1% #5**; SWE Atlas Refactoring **46.7% #5** / Test Writing 49.6% #6; Surface Evolver 87.5% #6; ALE-Bench 1563.8 #16
- SciCode **53.5-54.4% #58-69** (just under the 55% reference); CursorBench 3.1 58.4% / 3.2 62.3%; FrontierCode 1.1 Main 46.5% #13; ProgramBench 1.0% #11; PostTrainBench v1.1 32.9% #5; AA Coding Index **74.3%**; Design Arena Website **1262** (revised from 1266)
- Claw-Eval-adjacent: no change

Long context:

- 1M window (AA/BenchLM); AA-LCR 77.7% (mid); no MRCR/RULER retrieval number published for this ID (unchanged).

Multimodal (grounding):

- ScreenSpot Pro **87.9%**; CharXiv **89.9%** (w/o tools 80.5%); OfficeQA Pro **66.2%** (system card) — elite document vision within the text+image-in constraint.

### Normalized scores (1–100)

- **Tool use: 84/100.** Held: the second pass added both strengths (TB2.1 AA 84.6% #28, TB 2.0 Vals 70.0% #2, TB Hard 58.3% #10, τ² 94.4% #31, MCP-Atlas 82.2% #9, GBAEval #3, DeepResearch #10, SkillsBench #9) and weaknesses (τ³ 34.2% #53 — gap now filled, weak; GDPval 47.8% #56 mid; APEX 48.9% #29; TB 3.0/4.0 at 21-23%; TB Science 4.3%; RLI 8.3%) — netting out exactly where 2026-09-24 placed it, a notch below the Opus 5 frontier.
- **Reasoning: 87/100.** Held: the competition-math cluster is genuinely elite (MathArena Apex 81.3% #1, AIME 2026 100% #1, HMMT 95.5%, USAMO 96.7%, Epoch-hub FrontierMath 80/56%) and honesty is strong (39.3% hallucination), but ARC-AGI-2 72.1% #50, ARC-AGI-3 1.5%, CritPt 20.9% #52, AA II 41.8, and AA-LCR 77.7% keep it below the 90 tier.
- **Context window: 95/100.** Held: 1M total (≥1M tier); no ≥512K retrieval bar met.
- **Multimodal: 70/100.** Held: text+image in, text out; ScreenSpot Pro 87.9% / CharXiv 89.9% / OfficeQA Pro 66.2% keep it at the top of the image-in band.
- **Coding: 87/100.** Held: SWE-bench V 88.6% #12, LiveCodeBench 87.8% #11, WeirdML 82.9% #17, LiveBench Coding 81.8% #12, Vibe Code 82.7% #16 anchor the top; the newly found DeepSWE 59.0% #34, SciCode #58-69, TB 4.0 21.7%, SWE Multimodal 38.4%, and PostTrainBench 32.9% cap it exactly as before.
- **Cost efficiency: 55/100.** Held: $5/$25 with $4.08 per Intelligence-Index run, 58 tok/s, and heavy verbosity — legacy pricing with no successor discount.
- **Overall Score: 84.6/100.** (84 + 87 + 95 + 70 + 87) / 5 = 84.6 — unchanged from 2026-09-24; the second pass filled two gaps (τ³, DeepSWE) and added the math-arena #1 cluster plus the FrontierMath/OSWorld protocol conflicts, all of which net to the same profile. Best-fit: reliable, low-hallucination Opus agent at legacy status — Opus 5/5.5 supersede it at equal or lower cost, and Anthropic now routes flagged cyber work to it, which makes it the de-facto safeguarded-cyber endpoint of the Claude line.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-12
- Method: public internet research, second pass over the 2026-09-24 report (Anthropic Opus 4.8 system card rows via BenchLM and the system-card landing page, Claude platform docs lifecycle note, Artificial Analysis model benchmarks, BenchLeader data as of 2026-10-12, Epoch AI model page and Benchmarking Hub — resolving the FrontierMath band conflict, ARC Prize verified results, Vals AI, LiveBench, LMArena, Scale SEAL, Mercor APEX, MathArena, OSWorld 2.0 paper board; three successful web searches); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
