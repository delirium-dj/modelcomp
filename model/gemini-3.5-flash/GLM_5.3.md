# Gemini 3.5 Flash — findings by GLM 5.3

- Source: Google (`gemini-3.5-flash`)
- Date: 2026-10-12 (UTC) — second-pass re-research of the 2026-09-24 report
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash
- **Short description:** Google's May 2026 Flash reasoning model (launched at Google I/O, 2026-05-19), the first of the 3.5-3.8 Flash cadence — the release that "broke the unwritten rule" by beating the previous flagship 3.1 Pro on coding and agentic benchmarks at 4x the speed, at 3x the previous Flash generation's price. Superseded in-line by 3.6 Flash (2026-07-21), 3.7 Flash (2026-08-13), and 3.8 Flash (2026-09-02). Second-pass composite trackers: BenchLeader **63.0, #67 of 760 at medium effort** — notably medium OUTSCORES high here (62.6 #73); trend 47→67 rising; BenchLM 62.52 (50 of 667 slots); Epoch Capabilities Index 154.5 #35; AA II 32.6-33.6 #98-103.
- **Provider / access:** OpenCode Zen `https://opencode.ai/zen/v1/models/gemini-3.5-flash` (Google AI SDK); Google AI Studio / Gemini API; DeepMind model card and evaluation-methodology page published.
- **Release / knowledge:** 2026-05-19 (Google I/O); knowledge cutoff not publicly disclosed.
- **IDs:** `opencode/gemini-3.5-flash` (Zen; no Free ID — paid only)
- **Context window:** 1M tokens total (AA technical specs and BenchLM).
- **Modalities:** text/image/speech/video in; text out; reasoning yes (effort levels minimal→high; the 2026-09-24 report's "high default" is refined — BenchLeader scores medium above high on this ID); tool calls; JSON mode.
- **Pricing (as of 2026-10-12):** Zen $1.50 in / $9.00 out per 1M (cached read $0.15); BenchLeader blended $3.38/M with **206 tok/s (fastest quarter)** and ~14 s first answers — the speed story is the value story. No free tier.
- **Architecture:** proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **76.2%** (official/launch) / **78.7% #49** (AA, high) / **74.2% #20** (Vals); Terminal-Bench 2.0: **67.4% #4** (Vals); Terminal-Bench 4.0: **6.6% #91** (AA) / **6.1% #32** (Vals — near-total miss on the new board); Terminal-Bench Hard: 40.9% #53; Terminal-Bench Science: 5.7% #16 (Vals — weak)
- **GDPval-AA: 35.2% #113 normalized** (AA, high — MAJOR second-pass correction: the 2026-09-24 report read 42.2% from the launch-era listing; AA's settled measurement is 35.2%, bottom-third of the board); AA-Briefcase: **874 #46** (very weak)
- Tau2-Bench Telecom: **95.3-95.6% #20-24** (AA); Tau3-Banking: **32.2% #57** (AA, high — found this pass; weak vs the frontier's ~50%)
- MCP-Atlas: **83.6% #6** (Scale SEAL); **AA-APEX-Agents: 47.0% #1**; EnterpriseOps-Gym **50.1% #3**; Analyst Agent 45.0% #12; ITBench SRE 40.4% #17; APEX-Agents (Mercor) **27.5% #47** (weak — the Mercor board disagrees sharply with AA's own #1, both retained)
- Finance Agent v2 **57.9% #11** (Vals); SkillsBench 52.7% #18; Tax Agent 53.5% #37; Legal Research 30.8% #37; Harvey HLAB 2.5% #38; Web Search Index 37.0% #7; AutomationBench (AA) 42.1% #38; GDP.pdf 19.8% #28; FACTS Search 64.3% #16; HiL-Bench 27.7% #12; GBAEval 6.7% #14; Vending-Bench 5396.4 #26; OSWorld-Verified **78.4%** (launch-era); AA Agentic Index 27.3%; Gert Labs 61.85%; LiveBench Agentic Coding 49.0% #45
- Claw-Eval: no verified public score found (unchanged)

Reasoning / knowledge:

- GPQA Diamond: **92.8% #22** (Epoch, high) / **92.2% #38** (AA) / **92.7% #14** (Vals) — solidly above the 90% bar across three harnesses
- HLE (AA): **42.7% #58** (high; 41.3% #71 medium) — above the 40% reference, mid rank
- CritPt: **13.1% #96** (AA, high — weak); ARC-AGI-2: **72.1% #50** (high; 8.9% at minimal); ARC-AGI-1: 92.5% #49
- Math cluster: SimpleBench **76.7% #6**, EnigmaEval **25.4% #4**, MathArena Apex **32.3% #9**, AIME 2026 **95.0% #18**, HMMT Feb 2026 **95.5% #6**, OTIS 95.6% #39, FrontierMath Tiers 1-3 62.8% #35 / Tier 4 26.8% #39, LiveBench Mathematics 88.2% #42, LMArena Maths 1497 #18, ProofBench 31.0% #41
- LiveBench: Reasoning 82.0% #47, global 74.6% #38, Data Analysis 64.9% #58, Language 84.6% #16, IF 75.6% #7; LMArena: Text 1478 #28, Hard Prompts 1495 #42, Creative 1469 #19, Multi-turn 1480 #41
- Chess 50.0% #11; Mystery Game 32.0% #27; LMCA 47.1% #64; DTBench 94.7% #40; ForecastBench 59.0% #45; EBR-bench 4.8% #22
- MMLU-Pro **89.5% #10** (Vals); SimpleQA Verified **66.2% #11**; LegalBench 83.6% #49; CorpFin 64.7% #35; TaxEval 74.4% #36; EMB 63.5% #25; MedCode **55.8% #6**; MedScribe 76.6% #70; Public Benefits 59.5% #28; DrugDiscoveryBench 50.0% #7
- Omniscience: index 21.2 #58, accuracy 51.4% #56, **hallucination rate ~61%** — verified by AA's own launch article ("down 31 points from Gemini 3 Flash's 92%, but still hallucinates more than twice as often as leading competitors" — the-decoder, aidailypost, searchengineworld; Mashable flagged Google's non-transparency on honesty metrics); non-hallucination 37.8% #165
- AA Intelligence Index v4.3.2: **32.6-33.6, #98-103** (high/medium; the 2026-09-24 report's "BenchLM lists 50.2 from an earlier snapshot" is now gone — the settled value is ~33, and the early-snapshot 50.2 is discarded as pre-settling noise); MRCR v2 77.3% short-band / **MRCR 1M 26.6%** (launch-era, unchanged); AA-LCR **73.3-74.3% #154-170** (weak rank); MLCR **18.3% #21**; IFBench **76.3% #21**

Coding:

- SWE-bench Verified: **79.3% #3** (Epoch, high) / 78.8% #28 (Vals) — found on the Epoch board, strong
- LiveCodeBench (Vals): **87.6% #12**; LiveBench Coding 78.2% #31; WeirdML 62.6% #44; Surface Evolver 58.1% #14
- **DeepSWE v1.1: 36.1-37.4% #58-60** (Epoch — found this pass, resolving the 2026-09-24 gap; weak, far under the 74% reference)
- SciCode 53.1% #76 / AA 53.9% #68 (below the 55% reference); AA Coding Index 70.1%; SWE-bench Pro 55.1%; Vibe Code 48.7% #49; Code Migration 26.8% #38; ProgramBench 0.0%; ALE-Bench 911 #57; CursorBench 3.1 49.8% / 3.2 48.8%; LMArena Coding 1508 #63 / WebDev 1499 #55 (mid-weak)
- SWE Multilingual and other system-card rows: see launch methodology page (unchanged)

Long context:

- 1M window; MRCR 1M only 26.6% (launch-era) — retrieval collapses near the limit; AA-LCR 73.3-74.3% #154-170; MLCR 18.3% #21; LMArena Document 1453-1461 #25-28.

Multimodal (grounding):

- LMArena Vision **1309-1310 #12-13**; MMMU-Pro Vals **88.3% #8** / AA 84.3% #20 / official 83.6%; Vals Multimodal Index 62.9% #16; SAGE 49.9% #18; MortgageTax 68.1% #19; Blueprint-Bench 2 33.6% #9; CharXiv 84.2%; Design Arena 1275 — full text+image+speech+video input backed by top-16 vision across four independent boards.

### Normalized scores (1–100)

- **Tool use: 73/100.** Lowered from 76: the AA professional aggregates settled far below the launch-era reads — GDPval normalized fell from 42.2% to **35.2% #113**, AA-Briefcase is **874 #46**, and APEX (Mercor) reads 27.5% #47 against AA's own-harness #1; τ³-Banking (found this pass) is 32.2% #57 and Terminal-Bench 4.0 is 6.6% #91. Retained strengths: τ²-Telecom 95.3% #20, MCP-Atlas 83.6% #6, AA-APEX #1, EnterpriseOps #3, TB2.1 74-79%, TB 2.0 Vals #4, Finance Agent #11, OSWorld-Verified 78.4%.
- **Reasoning: 78/100.** Held: GPQA 92.2-92.8% (#14-38) and the math cluster (SimpleBench #6, Apex #9, HMMT #6, AIME 95%) are genuinely strong, but CritPt 13.1% #96, AA II ~33 at #98-103, AA-LCR #154-170, MLCR 18.3%, and the verified 61% hallucination rate keep it mid-high.
- **Context window: 88/100.** Held: 1M window, but retrieval collapses near the limit (MRCR 1M 26.6%; AA-LCR #154-170) — the 2026-09-24 discount stands.
- **Multimodal: 90/100.** Held and reinforced: text+image+speech+video input with LMArena Vision #12-13, Vals MMMU-Pro #8, and Vals Multimodal Index #16.
- **Coding: 76/100.** Held: SWE-bench Verified 79.3% #3 (Epoch) and LiveCodeBench 87.6% #12 anchor the top; the newly found DeepSWE 36% #58, TB 4.0 6.6% #91, SciCode below the reference, WebDev #55, and ALE #57 cap it exactly where it was.
- **Cost efficiency: 78/100.** Held: $1.50/$9.00 between the ~$1.25/$4.25 (≈88) and ~$3/$15 (≈60) anchors, with 206 tok/s (fastest quarter) and ~14 s first answers as the mitigants; the 3x price jump over the prior Flash generation is already priced into the anchor placement.
- **Overall Score: 81/100.** (73 + 78 + 88 + 90 + 76) / 5 = 81.0 → 81, down from 81.6 via the Tool-use correction. Best-fit: a fast, honest-about-its-limits multimodal agent tier — strong tool reliability (τ², MCP-Atlas) and top-tier vision at 4x speed, but weak professional-work aggregates and a 61% hallucination rate argue for grounding and verification; 3.8 Flash supersedes it at the same price with a rising index (and oddly, 3.6 Flash scores *below* it on BenchLeader).

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-12
- Method: public internet research, second pass over the 2026-09-24 report (Google's Gemini 3.5 Flash launch materials and DeepMind model card/evals-methodology references, Artificial Analysis model benchmarks and its launch article, BenchLeader data as of 2026-10-12, BenchLM composite via its October snapshot, Vals AI, LiveBench, LMArena, Epoch hub, Scale SEAL, Mercor APEX, MathArena; three successful web searches; independent reviews: benchr, llm-stats, buildfastwithai, aitoolsrecap, appwrite, the-decoder, aidailypost, searchengineworld, Mashable); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
