# Gemini 3.5 Flash-Lite — findings by GLM 5.3

- Source: Google (`gemini-3.5-flash-lite`)
- Date: 2026-10-12 (UTC) — second-pass re-research of the 2026-09-24 report
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash-Lite
- **Short description:** Google's ultra-cheap Lite tier of the Gemini 3.5 Flash generation — released **2026-07-21** (the first pass's "May 2026" was wrong), 1,048,576-token context, full multimodal input, and **415 tok/s output — the fastest quarter measured this cycle**. Reviewers position it exactly as the data suggests: "replaces Gemini 2.5 Flash and simpler Gemini 3 Flash workloads for teams running high-volume subagents, document parsing, and agentic search" (hokai); it even "beats the bigger Gemini 3 Flash on SWE-Bench Pro" (buildfastwithai). Second pass fills the τ/HLAB/Vibe gaps (they landed weak) and finds a cheaper serving tier. Top use case: very high-volume multimodal processing where intelligence can be mid.
- **Provider / access:** OpenCode Zen `https://opencode.ai/zen/v1/models/gemini-3.5-flash-lite` (Google AI SDK; $0.30/$2.50); Google AI Studio / Vertex — **eight provider rows, cheapest $0.15 in / $1.25 out** (Google AI Studio + one Vertex route), standard $0.30/$2.50, Vertex $0.33/$2.75, and a $0.54/$4.50 long-prompt tier.
- **Release / knowledge:** **2026-07-21** (BenchLeader; hokai/buildfastwithai concur); knowledge cutoff not publicly disclosed.
- **IDs:** `opencode/gemini-3.5-flash-lite` (Zen; no Free ID — paid but very cheap).
- **Context window:** 1M tokens (1,048,576 — confirmed).
- **Modalities:** text/image/speech/video in; text out; reasoning (not-stated config measures best — 54.7; the high config reads 43.9, an inverted ladder); tool calls; JSON mode.
- **Pricing (as of 2026-10-12):** Zen $0.30 in / $2.50 out (cached read $0.03); **Google AI Studio tier at $0.15/$1.25**; blended $0.85/M, mid-priced; $0.193 per Intelligence Index run; $0.028 per agentic session; 7.4 s first answer.
- **Architecture:** proprietary; parameter count undisclosed.

### Raw benchmarks found

> Second pass adds the BenchLeader ladder (best = not-stated **54.7 #228/760**, trend 35→49→62 rising fast — settling, last measured 2026-10-09). Category scores: **Human preference 65 (best)**, Knowledge 64, Long context 63, Multimodal 61, Maths 54, Composite 54, Coding 51, Reasoning 49, **Agents & tools 40 (worst)**.

Agent / tool use:

- Terminal-Bench 2.1: Vals **50.2% #57** / AA 53.6% #107 (confirms the ~52-54% band); **TB 4.0 (AA): 1.0% #121** — the 2026 terminal suite is a wall
- **τ³-Banking: 17.5% #103** — gap filled; weak. **HLAB: 0.0% #53** — gap filled; floor. **GDPval-AA: 24.2% #160** (confirms weak); APEX-Agents (Mercor) 29.3% #46; Legal Research 13.9% #56; Tax Agent 37.5% #48; Finance 47.4% #45; LiveBench Agentic 45.3% #53
- Bright spots: OSWorld-Verified **74.0%** (retained — strong computer use for the tier); **CyberBench 59.1% #31**; **FACTS Search 63.4% #17**; EnterpriseOps-Gym 42.3% (retained); Claw-Eval / τ² / MCP-Atlas: still unmeasured

Reasoning / knowledge:

- GPQA Diamond: Epoch 83.3% #99 (high) / AA 83.8% #150 / Vals 83.8% #54 — below the 90% bar on every harness (hokai's "86.9% GPQA" is a vendor-claim outlier — flagged)
- HLE: **18.8% #216** (weak, confirmed); **CritPt: 0.0% #302** (floor); ARC-AGI-2 10.3% #141; ARC-AGI-1 53.5% #154; ProofBench 13.0% #60; FrontierMath T1-3 26.0% #74 / **T4 0.0% #67**; OTIS 71.1% #130 (high); LiveBench Reasoning 60.2% #66, Math 73.7% #66
- **Honesty decent for the tier: AA-Omniscience non-hallucination 65.6% #60** (accuracy 29.5% #178 — honest but knows little; index 5.2 #104); MMLU-Pro 85.8% #51 (good); LegalBench 84.1% #38; TaxEval 72.6% #59; CorpFin 60.7% #65; MedScribe 70.9% #86; EMB 43.2% #50; MedCode 43.5% #42; Public Benefits 51.8% #37; GDP.pdf 10.0% #46
- AA Intelligence Index 22.2 #197 (confirms); ECI 145.1 #82; LiveBench global 63.9% #65; IF: LiveBench Language 71.8% #57, IF 67.2% #35

Coding:

- SWE-bench Verified (Vals) **75.0% #42**; LiveCodeBench (Vals) **79.0% #72**; LiveBench Coding **76.1% #46** — all confirmed; SWE-bench Pro 54.2% (retained — the beats-Gemini-3-Flash claim)
- **Vibe Code v1.1: 37.2% #58** — gap filled; mid-weak. **Code Migration: 6.2% #59** (dreadful); ProgramBench 0.0% #23; SciCode 41.3% #146 (weak); WeirdML 39.0% #112 (weak); ALE-Bench 765.3 #73; LMArena Coding 1502 #73 / WebDev 1440 #70 (decent preference for the tier)

Long context:

- 1M window confirmed; **AA-LCR 76.0% #142** (mid); MRCR v2 72.2% (retained); Long context category 63.

Multimodal:

- **MMMU-Pro (Vals): 83.6% #30** (better than the AA 79.0% read); LMArena Vision 1268 #45; **MortgageTax 68.7% #12** (good); SAGE 47.3% #32; full text+image+speech+video input per the Flash family.

Preference:

- **Human preference 65 is its best category** — LMArena Text 1455 #70, Hard Prompts 1475 #74, Creative 1436 #61, Multi-turn 1467 #66, Longer Queries 1463 #70 — genuinely good ranks for the price tier.

### Normalized scores (1–100)

- **Tool use: 52/100.** Lowered from 58: the gaps filled in weak — τ³ 17.5% #103, HLAB 0.0% #53, GDPval 24.2% #160, TB 4.0 1.0% #121, APEX 29.3% #46 — offset by the surprising OSWorld 74.0%, CyberBench #31, FACTS #17, and mid TB 2.1. Agents & tools 40 is its worst category; it is not an agent engine.
- **Reasoning: 54/100.** Lowered from 60: GPQA 83.3-83.8% sits below the bar on every measured harness, HLE 18.8%, CritPt 0.0%, FrontierMath T4 0.0%, and ARC-AGI-2 10.3% are the caps — offset by good-for-the-tier MMLU-Pro 85.8% #51, honest behavior (65.6% non-hall #60), and LiveBench Reasoning 60.2%.
- **Context window: 92/100.** Lowered from 95: 1M confirmed, but measured retrieval is mid (AA-LCR 76.0% #142, MRCR 72.2%).
- **Multimodal: 84/100.** Lowered from 88: Vals MMMU-Pro 83.6% #30 and MortgageTax 68.7% #12 are strong, with full omni input — but SAGE 47.3% #32 grounds it below the Flash tier.
- **Coding: 60/100.** Lowered from 62: SWE-V 75.0% #42, LCB 79.0% #72 and LiveBench Coding 76.1% #46 hold — but Vibe 37.2% (gap filled), Code Migration 6.2%, ProgramBench 0.0%, SciCode 41.3% and WeirdML 39.0% confirm the open-ended floor.
- **Cost efficiency: 96/100.** Raised from 94: the $0.15/$1.25 Google AI Studio tier discovered this pass is the cheapest 1M-context omni-model rate found this cycle; 415 tok/s (fastest quarter), $0.03 cached reads, $0.028/agentic session.
- **Overall Score: 68/100.** (52 + 54 + 92 + 84 + 60) / 5 = 68.4 → 68, down from 72.6. Best-fit: bulk high-volume multimodal input processing and preference-friendly chat at the lowest Gemini price and fastest speed — its reasoning/agent floors (CritPt 0.0%, HLAB 0.0%, TB 4.0 1.0%) disqualify it from anything frontier; route agent work to Gemini 3.5 Flash proper.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-12
- Method: public internet research, second pass over the 2026-09-24 report (BenchLeader ladder as of 2026-10-09 aggregating Epoch AI Benchmarking Hub, Artificial Analysis, Vals AI, LiveBench, LMArena, Mercor APEX, Kaggle FACTS Search; eight Google AI Studio/Vertex provider rows incl. the $0.15/$1.25 tier; DDG-lite searches surfacing the buildfastwithai review — beats Gemini 3 Flash on SWE-Bench Pro — and hokai.io's positioning note incl. the 86.9% vendor-claim GPQA flagged against measured 83.3-83.8%; release-date correction to 2026-07-21); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
