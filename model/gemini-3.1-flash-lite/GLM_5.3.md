# Gemini 3.1 Flash-Lite — findings by GLM 5.3

- Source: Google (`gemini-3.1-flash-lite`)
- Date: 2026-10-13 (UTC) — second-pass re-research of the 2026-09-24 report
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Flash-Lite
- **Short description:** Google's Lite tier of the 3.1 generation — released in preview **2026-03-03** (resolving the first pass's "early 2026"), "the fastest and most cost-efficient model in the Gemini 3 series" (win-tk), "roughly one-eighth the cost of Gemini [3.1] Pro" (awesomeagents/modelslab), pitched as "the performance profile of a frontier reasoning model at ~1/8 the price." Second pass resolves the pricing unknown (**$0.25/$1.50 with a $0.125/$0.75 economy tier; 361 tok/s — the fastest quarter measured this cycle**) and fills the thin 8-row dossier. Top use case: bulk high-volume multimodal processing where reasoning can be minimal.
- **Provider / access:** Google AI Studio / Gemini API; Vertex AI — **seven OpenRouter provider rows**: standard $0.25/$1.50, an economy tier at **$0.125/$0.75**, and a $0.45/$2.70 tier (long prompts); **no OpenCode Zen ID** (Zen's Lite tier moved to 3.5 Flash-Lite).
- **Release / knowledge:** **2026-03-03** (preview — aimlapi/llm-stats/win-tk/awesomeagents concur); knowledge cutoff not publicly disclosed.
- **IDs:** `google/gemini-3.1-flash-lite` (no Zen ID, no Free ID).
- **Context window:** 1M tokens (confirmed — every provider row).
- **Modalities:** text/image in; text out (no audio/video rows confirmed for this exact ID); reasoning settings minimal→high measured (the high config reads best: GPQA 81.8% #113, ARC-AGI-1 61%, FrontierMath 27.7%); tool calls; JSON mode.
- **Pricing (as of 2026-10-13):** **$0.25 in / $1.50 out per 1M** standard; **economy tier $0.125/$0.75**; $0.45/$2.70 long-prompt tier; cached read $0.025; blended $0.563/M; **361 tok/s** (fastest quarter), 5.1 s first answer; **$0.060 per full Intelligence Index run** — among the cheapest measured.
- **Architecture:** proprietary; parameter count undisclosed.

### Raw benchmarks found

> Second pass replaces the thin 8-row picture with the full BenchLeader profile (best = not-stated **53.9 #250/760**, last measured 2026-10-09). Category scores: **Long context 62 / Instruction following 62 / Human preference 62 / Maths 62 (tied best)**, Knowledge 53, Multimodal 58, Reasoning 48, Coding 47, **Agents & tools 43 (worst)**.

Agent / tool use:

- **MCP Atlas: 57.1% #29** — gap filled; the one decent agent row. Terminal-Bench: 2.1 AA **31.1% #148** / Vals 34.1% #68 (confirms weak); TB 2.0 (Vals) 24.7% #51; TB Hard 24.2% #142; **TB 4.0 (AA): 0.5% #132** — floor
- **τ²-Bench: 31.3% #251** (weak); **τ³-Banking: 9.7% #143** (dreadful); **GDPval-AA: 0.0% #210** (floor — gap filled); Analyst Agent 8.8% #35; APEX-AA 12.2% #27; **HLAB 0.0% #53**; Legal Research 3.4% #64; Tax 20.1% #58; Finance 30.0% #62
- DeepResearch Bench 36.4-37.3% #36-37; BrowseComp 1.1% #15; Gert Labs 38.46% (retained); Claw-Eval / Toolathlon: still unmeasured

Reasoning / knowledge:

- GPQA Diamond: Epoch 73.7-81.8% #113-153 / AA 82.2% #169 / Vals 81.1% #63 — below the bar on every harness (confirmed)
- HLE: AA **17.2% #227** / Scale-CAIS 8.6% #29 — weak; **CritPt: 1.1% #211** (dreadful — gap filled)
- **IFBench: 77.2% #17** (good — the standout row); MultiChallenge 60.6% #12; TutorBench 51.5% #15
- Math: OTIS 80.0% #109 (high) / 37.8% (minimal); AIME (Vals) 83.3% #43 (high); FrontierMath T1-3 21.4-27.7% #72-81 / **T4 0.0% #67**; LiveBench Math 73.7% #66
- Honesty poor: **AA-Omniscience non-hallucination 17.3% #310**; index −16.4 #219; MultiNRC 25.0% #29
- **AA II 15.6 #268**; ECI 144.5 #85; **MMLU-Pro 86.2% #43** (good — confirmed); LegalBench 83.8% #46; TaxEval 71.8% #70; MedCode 47.6% #30; MedScribe 63.9% #95; CaseLaw 55.0% #35; CorpFin 59.4% #76; EMB 8.6% #65 (weak)

Coding:

- SWE-bench Verified (Vals) **62.8% #72** and LiveCodeBench (Vals) **80.1% #68** (both confirmed); WeirdML 52.2% #68
- **Vibe Code v1.1: 0.0% #99** (confirmed dreadful); **Code Migration: 4.6% #62** (dreadful — gap filled); ProgramBench 0.0%; SciCode 41.9-43.4% #145 (weak); ALE-Bench 797.7 #67; LMArena Coding 1458 #133 / WebDev 1256 #117 (weak preference)

Long context:

- 1M window confirmed; **AA-LCR: 74.3% #156** — mid; LMArena Document 1449 #34; no MRCR/RULER rows.

Multimodal:

- **MMMU-Pro (Vals): 82.5% #37** (good) / AA 75.5% #93; **Vals MM Index 41.4% #29**; LMArena Vision 1240 #72; VISTA 46.9% #19; MortgageTax 68.0% #20; SAGE 49.5% #20; CharXiv 73.2% (retained). Text+image in, text out.

Preference/safety:

- Preference weak-mid (Text 1433 #104, Multi-turn 1436 #104, Longer 1429 #121, Creative 1414 #85, Hard 1445 #114) — Human preference 62 tied-best category; FORTRESS 51.0% #12; Mask 48.4% #57.

### Normalized scores (1–100)

- **Tool use: 46/100.** Raised from 42: MCP Atlas 57.1% #29 and DeepResearch #36-37 fill the dossier with a couple of decent rows — against τ³ 9.7% #143, GDPval 0.0% #210, HLAB 0.0% #53, Analyst 8.8% #35, TB 4.0 0.5% #132, and Agents & tools 43 as its worst category.
- **Reasoning: 56/100.** Lowered from 58: GPQA 81.1-82.2% below the bar, HLE 17.2%, CritPt 1.1%, FrontierMath T4 0.0%, AA II 15.6 #268, and poor honesty (17.3% #310) — offset by MMLU-Pro 86.2% #43, IFBench 77.2% #17, and decent high-effort math (AIME 83.3% #43, OTIS 80% #109).
- **Context window: 92/100.** Lowered from 95: 1M confirmed but measured retrieval is mid (AA-LCR 74.3% #156).
- **Multimodal: 80/100.** Lowered from 82: MMMU-Pro 82.5% #37 (Vals) is good and MortgageTax 68.0% #20 decent — but Vals MM Index 41.4% #29 and Vision 1240 #72 temper it; text+image only.
- **Coding: 50/100.** Lowered from 52: SWE-V 62.8% #72 and LCB 80.1% #68 hold as passable — but Vibe 0.0% #99, Code Migration 4.6% #62, ProgramBench 0.0%, SciCode ~43%, and ALE #67 confirm the Lite floor.
- **Cost efficiency: 93/100.** Raised from 90 (pricing resolved): **$0.25/$1.50 with a $0.125/$0.75 economy tier**, $0.025 cached reads, 361 tok/s, and **$0.060 per II-run** — "the cheapest model in [Google's] production lineup" at ~1/8 of Pro's price.
- **Overall Score: 65/100.** (46 + 56 + 92 + 80 + 50) / 5 = 64.8 → 65, essentially unchanged from 65.8. Best-fit: bulk high-volume text+image processing at the cheapest verified Gemini rate and fastest speed — its reasoning, agent, and open-ended-coding floors (CritPt 1.1%, GDPval 0.0%, Vibe 0.0%) disqualify it from anything frontier; the 3.5 Flash-Lite successor supersedes it on Zen, and this generation's remaining value is the $0.125 economy tier on AI Studio.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-13
- Method: public internet research, second pass over the 2026-09-24 report (BenchLeader full profile as of 2026-10-09 aggregating Epoch AI Benchmarking Hub, Artificial Analysis, Vals AI, Scale AI SEAL incl. MCP Atlas/VISTA/FORTRESS/Mask, LiveBench, LMArena — the page fetched during this cycle's gemini-3.1-flash sibling pass; seven Google AI Studio/Vertex provider rows resolving the pricing unknown incl. the $0.125/$0.75 economy tier; DDG-lite search coverage from the same sibling pass — aimlapi/llm-stats/modelslab/win-tk/awesomeagents/binaryverse launch reviews confirming the 2026-03-03 preview date, $0.25/$1.50 pricing, ~380 tok/s-class speed, and the cheapest-in-lineup positioning; first-pass rows retained where not contradicted); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
