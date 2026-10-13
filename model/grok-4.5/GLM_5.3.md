# Grok 4.5 — findings by GLM 5.3

- Source: xAI (`grok-4.5`)
- Date: 2026-10-12 (UTC) — second-pass re-research of the 2026-09-24 report
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.5
- **Short description:** SpaceXAI's mid-2026 Grok reasoning model — **co-trained with Cursor** on trillions of tokens of coding data ("the first model the Cursor-SpaceXAI team built for more than software engineering" — digitalapplied), positioned at launch as "Opus-class intelligence, faster, more token-efficient, cheaper" (Musk). Second pass resolves the release date (**launched 2026-07-08** per jexcloud/agentpedia/ai.cc/digitalapplied; BenchLeader records 2026-07-16 — likely API-GA vs launch-event timing) and fills the Claw/τ³/MCP-Atlas gaps. Between Grok 4.3 and 4.6; still served on Zen. Top use case: high-volume agentic coding at Grok mid pricing.
- **Provider / access:** OpenCode Zen `https://opencode.ai/zen/v1/responses` (OpenAI Responses API, `@ai-sdk/openai`); xAI API; two SpaceXAI OpenRouter endpoints; Cursor integration.
- **Release / knowledge:** **2026-07-08** (launch; BenchLeader lists 16 Jul 2026 — conflict retained); knowledge cutoff not publicly disclosed.
- **IDs:** `opencode/grok-4.5` (Zen; no Free ID — paid only).
- **Context window:** 500K tokens total (confirmed by BenchLeader + provider rows).
- **Modalities:** text/image in; text out; reasoning (high is its best config); tool calls; JSON mode.
- **Pricing (as of 2026-10-12):** Zen $2.00 in / $6.00 out per 1M ≤200K tokens ($4.00/$12.00 above 200K; cached read $0.30); blended $3.00/M ("pricier than most" per BenchLeader, but ~$2.49/agent-task vs ~$11.80 for Opus-class — novakvm); 52 tok/s, 18 s first answer.
- **Architecture:** proprietary MoE (digitalapplied); parameter count undisclosed.

### Raw benchmarks found

> Second pass adds the full BenchLeader effort ladder (best = high **59.5 #119/760**, trend 49→58→68 rising, last measured 2026-09-29). Category scores (high): **Composite 74 (best)**, Multimodal 64, Long context 65, Knowledge 63, Reasoning 60, Coding 57, Maths 54, **Agents & tools 50 (worst)**.

Agent / tool use:

- **τ³-Banking: 42.1% #23** (gap filled — good rank); **HLAB: 12.9% #7** (gap filled — legal-agent strength); **SkillsBench: 66.0% #2** (elite); CyberBench 71.0% #17; GBAEval 65.4% #4; APEX-Agents (Mercor) 56.2% #18; **LMArena Search 1202 #8** / Web Search Index 35.5% #8 / FACTS Search 79.4% #12 — the search/tool axis is genuinely strong
- **GDPval-AA: 44.3% #73** (updated from 1430 Elo / 43.5% — consistent, mid-band); Analyst Agent 35.0% #19; Finance 48.4% #42; Legal Research 38.0% #30; Tax 64.3% #21; Vending-Bench 2 3887.4 #40; LiveBench Agentic Coding 56.5% #26; PostTrainBench 23.4% #10
- Terminal is the collapse: **TB public board 12.4% #78**; **TB 4.0: 8.6% #31 (Vals) / 10.6% #82 (AA)**; TB 2.1: Vals 67.8% #32 / AA **81.7% #40** (the BenchLM 83.3% not reproduced); **SREBench 0.8% #13**; **Time Horizon KSP 6.3% #9** — MCP-Atlas and Claw-Eval still unmeasured

Reasoning / knowledge:

- GPQA Diamond: Epoch **93.4% #16** / AA 93.1% #24 / Vals **92.9% #12** — elite, clears the frontier bar (confirmed)
- HLE: AA **42.7% #58** — clears the 40% reference (confirmed); **SimpleBench 70.0% #14; Kagi 83.5% #6** (new, strong); LiveBench Reasoning 87.2% #28
- Math: FrontierMath T1-3 **57.2% #40** / T4 24.4% #45; **OTIS 97.8% #26**; LiveBench Math 90.8% #33; ProofBench 31.0% #41 (weak)
- CritPt **15.4% #83** (weak); ARC-AGI-2 52.6% #97; **ARC-AGI-3 0.3% #41** (dreadful); Chess 36.0% #39; LMCA 45.2% #72; DTBench 96.5% #17
- **Honesty weakness independently confirmed: non-hallucination 45.9% #134** (Omniscience index 25.3 #49, accuracy 51.5% #54) — layer3labs' hands-on: "its factual reliability regressed from Grok 4.3"; SimpleQA 48.3% #30
- AA Intelligence Index **38.8 #69** (confirmed); ECI 153.9 #38; LiveBench global 75.8% #34; **Vals Index 44.7 #32**; MMLU-Pro 89.2% #14 (elite); LegalBench 86.0% #17; CorpFin 67.4% #12; MedScribe 86.9% #17; TaxEval 71.7% #72; MedCode 43.3% #44; GDP.pdf 14.0% #38
- Preference/IF (not stated): LMArena Text 1466 #50, Hard 1488 #50, Creative 1452 #36, Multi-turn 1472 #53; LiveBench Language 82.8% #22, IF 71.5% #22

Coding:

- SWE-bench Verified (Vals) **86.6% #13** (confirmed elite); LiveCodeBench (Vals) **87.3% #14**; **Vibe Code v1.1: 69.0% #34** (gap filled — good, removes the "no verified score" gap); **Surface Evolver Bench 74.4% #10**; **FrontierCode 42.4% #18**; SciCode 54.0-55.0% #50-61 (at the 55% reference); **SWE Marathon: 29.0% — leads (vs 26.0%)** (aitoolsrecap)
- Drags: DeepSWE 53.8% #42; WeirdML 46.4% #79; IOI 40.6% #28; Code Migration 36.6% #29; ProgramBench 0.0% #23; ALE 1309.3 #27; TB 4.0 10.6% #82; LiveBench Coding 68.6% #63; LMArena Coding 1514 #47 / WebDev 1553 #38
- Cursor-era rows retained with a caveat: **CursorBench 3.2 66.7% carries a contamination question** (novakvm's "the CursorBench contamination" — co-trained-with-Cursor makes Cursor-run evals non-independent); SWE-bench Pro 64.7%, VulcanBench 89.9%, SWE Multilingual 78% retained

Long context:

- 500K window confirmed; AA-LCR 79.3% #92; **LMArena Document 1464 #22** (good); no MRCR/RULER rows (unchanged).

Multimodal:

- **Vals Multimodal Index 63.4% #15** (good); LMArena Vision 1288 #30; MMMU-Pro: AA 80.4% #46 vs **Vals 61.8% #80** (harness spread, both retained); MortgageTax 61.8% #57; SAGE 35.0% #68 (weak grounding); Blueprint-Bench 2 27.3% #18. Text+image in, text out.

### Normalized scores (1–100)

- **Tool use: 72/100.** Lowered from 78: the gaps filled bipolar — elite search/skills rows (SkillsBench #2, LMArena Search #8, GBAEval #4, τ³ #23, HLAB #7, CyberBench #17) against a terminal collapse (TB public 12.4% #78, TB 4.0 ~9-11%, SREBench 0.8%, KSP 6.3%) and mid GDPval 44.3% #73. BenchLeader's Agents & tools category: 50, its worst.
- **Reasoning: 82/100.** Lowered from 83: GPQA 93.4% #16, HLE 42.7% #58, SimpleBench #14, Kagi #6 and OTIS 97.8% #26 are genuinely elite — but ARC-AGI-3 0.3%, CritPt 15.4% #83, ProofBench 31% #41, and the independently confirmed factual regression (non-hall 45.9% #134; "reliability regressed from 4.3" — layer3labs) hold it under the top band.
- **Context window: 87/100.** Held: 500K confirmed; AA-LCR 79.3% #92 mid, Document #22 good; the ≥200K double price still applies.
- **Multimodal: 74/100.** Raised from 70: the Vals Multimodal Index 63.4% #15 is a strong independent row, Vision #30 decent — offset by the MMMU-Pro harness spread (61.8-80.4%), weak SAGE 35% #68, and text-only output.
- **Coding: 80/100.** Lowered from 82: SWE-bench Verified 86.6% #13, LiveCodeBench 87.3% #14, Vibe Code 69.0% #34 (gap filled), Surface Evolver #10, FrontierCode #18 and the SWE Marathon lead keep the raw strength — but DeepSWE 53.8% #42, WeirdML 46.4% #79, Code Migration 36.6% #29, TB 4.0 10.6% #82 and the CursorBench contamination caveat (co-trained with Cursor) temper the confidence.
- **Cost efficiency: 85/100.** Held: $2/$6 with ~$2.49/agent-task vs ~$11.80 for Opus-class (novakvm), "best intelligence-per-dollar coding model of July 2026" (aitoolsrecap); the offsets are slow decode (52 tok/s vs the 80 TPS launch claim) and the ≥200K doubling.
- **Overall Score: 79/100.** (72 + 82 + 87 + 74 + 80) / 5 = 79.0, down from 80.0. Best-fit: high-volume coding-agent value pick — elite SWE-V/LCB per dollar with strong search-adjacent tool use; but the 2026 terminal suites (TB 4.0, SREBench) broke it, its factual reliability regressed vs 4.3, and Grok 4.6 supersedes it at the same price. Treat Cursor-run benchmarks with contamination caution.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-12
- Method: public internet research, second pass over the 2026-09-24 report (BenchLeader full effort-ladder as of 2026-09-29; Epoch AI Benchmarking Hub; Artificial Analysis; Vals AI; LiveBench; LMArena; Mercor APEX; Andon Labs; Terminal-Bench public board; DDG-lite searches surfacing layer3labs' hands-on verdict incl. the factual-regression finding, aitoolsrecap's SWE Marathon lead and value verdict, jexcloud/agentpedia/digitalapplied/novakvm launch coverage fixing the 2026-07-08 release date, the Cursor co-training fact, and the CursorBench contamination caveat); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
