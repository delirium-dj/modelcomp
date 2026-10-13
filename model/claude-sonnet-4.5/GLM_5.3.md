# Claude Sonnet 4.5 — findings by GLM 5.3

- Source: Anthropic (`claude-sonnet-4.5`)
- Date: 2026-10-13 (UTC) — second-pass re-research of the 2026-09-24 report
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.5
- **Short description:** Anthropic's September-2025 Sonnet workhorse (released **2025-09-29** — resolving the first pass's wrong "July 2025"), launched as "the best coding model in the world… best model at using computers" (Anthropic). Second pass fills the thin 12-row dossier with a year of measurement: elite-era tool-calling credentials (**BFCL 73.2% #2, Cybench 60% #3, GDPval-original 42.5% #4, METR 67.4% #12, DeepResearch #7**) against 2026-suite collapses (τ³ 24.5% #82, TB 4.0 0.0%, GDPval-AA v2.1 20.4% #170). **Context correction — the opposite of its 4.6 sibling: the 1M beta header was RETIRED on 2026-04-30**; requests >200K are now rejected, so this is a 200K model (the OpenRouter provider rows still listing 1M are stale metadata — flagged). Three generations behind Sonnet 5.5.
- **Provider / access:** OpenCode Zen `https://opencode.ai/zen/v1/messages` (Anthropic Messages API, `@ai-sdk/anthropic`); Anthropic API (`claude-sonnet-4-5-20250929` / alias `claude-sonnet-4-5`); Amazon Bedrock, Google Vertex, AWS Claude Platform.
- **Release / knowledge:** **2025-09-29**; knowledge cutoff not publicly disclosed.
- **IDs:** `opencode/claude-sonnet-4.5` (Zen ID `claude-sonnet-4-5`; no Free ID — paid only); a Thinking sibling is measured separately.
- **Context window:** **200K tokens** — the 1M beta (context-1m-2025-08-07 header, Tier 4+, 2× input pricing) **was retired 2026-04-30** (claudelab/riptide migration guides); >200K requests now rejected. Provider rows listing 1M are stale.
- **Modalities:** text/image in; text out; base non-reasoning, thinking/high efforts measured (high is best); tool calls; JSON mode.
- **Pricing (as of 2026-10-13):** $3.00 in / $15.00 out per 1M (all four providers agree; Zen ≤200K same, $6/$22.50 above 200K, cached read $0.30); blended $6.00/M — "among the most expensive ranked"; 38-42 tok/s (slowest quarter).
- **Architecture:** proprietary; parameter count undisclosed.

### Raw benchmarks found

> Second pass adds the full BenchLeader ladder (best = high **58.3 #143/760**, trend 44→55→65 rising, last measured 2026-10-08). Category scores (high): **Reasoning 66 (best)**, Human preference 65, Maths 64, **Coding 56 (worst)**.

Agent / tool use:

- **BFCL Overall: 73.2% #2** (elite function calling); **Cybench: 60.0% #3**; **τ²-bench: 76.4% #7 (official) / 78.1% #130 (AA)** — but **τ³-Banking: 24.5% #82** (weak)
- **GDPval split: original 42.5% #4 (elite for its era) vs GDPval-AA v2.1 20.4% #170** (the 2026 rerun sinks it)
- **METR Time Horizons: 67.4% #12**; **DeepResearch Bench: 52.6% #7 (not stated) / 47.5% #23**; MCP Atlas 59.5% #27; Terminal-Bench public 46.5% #39; TB 2.1 (AA) 55.8% #102; TB 2.0 (Vals) 41.6% #29; TB Hard 28.8-35.6% #74-118; **TB 4.0 (AA): 0.0% #146**
- Remote Labor Index 2.1% #11 (weak); Vending-Bench 2 3838.7 #41; Poker 1055.5% #7; DeepSearchQA 16.0% #11; OSWorld-Verified 61.4% (retained); Claw-Eval / Toolathlon: still unmeasured

Reasoning / knowledge:

- GPQA Diamond: Epoch 82.3% #109 / AA 83.4% #156 (thinking) / Vals 81.6% #61 — below the 90% bar on every harness
- HLE: Scale-CAIS 13.7% #25 / AA 17.8% #224 — far below the 40% reference; **CritPt 1.1% #211** (very weak); ARC-AGI-2 13.6% #134; SimpleBench 54.3% #40
- Math: **AIME (Vals) 88.2% #30; MGSM 94.3% #4; MATH Level 5 97.7% #6**; OTIS 77.8% #117; FrontierMath T1-3 23.9% #78 / **T4 2.4% #63** (weak); ProofBench 19.0% #50; Apex 1.6% #33
- **ForecastBench 61.9% #4 (elite); SciPredict 22.6% #3**; Kagi 57.9% #55; DTBench 83.2% #96; HELM mean 76.2% #12
- **Honesty decent: non-hallucination 47.3-50.9% #107-129**; Omniscience −0.1 #132 (thinking); accuracy 28.4-32.9% #161-190 (honest, knows little); SimpleQA 30.7% #62 (weak)
- AA II 19.3-20.7 #216-233 (weak); ECI 146.8 #67; MMLU-Pro 87.4% #28; **MedQA 94.7% #15**; LegalBench 84.1% #37; TaxEval 73.3% #49; MedScribe 84.1% #36; CaseLaw 62.2% #19; CorpFin 62.0% #49; MedCode 44.1% #40; EBR 2.4% #24

Coding:

- **SWE-bench Verified: bash-only 71.4% #10 (high) / Epoch 71.3% #24 / Vals 70.0% #58 / board 70.6% #12** — the independent cluster sits at ~71% (the first pass's 77.2% was the vendor-era read); SWE-Bench Pro 43.6% #7 (Scale)
- LiveCodeBench (Vals) 73.0% #80; **LMArena Coding 1519 #35** (good preference); WeirdML 47.7% #75; OSWorld-computer-use rows retained
- Caps: **Vibe Code 22.6% #67**; SciCode 44.7-45.7% #131-133 (below the reference); GSO-Bench 14.7% #18; ALE 796.1 #68; AlgoTune 1.5 #9; TB 4.0 0.0%; WebDev 1385-1393 #88-92

Long context:

- **200K standard (1M beta retired 2026-04-30)**; AA-LCR 72.3% #182 (thinking) / 54.0% #293 (no-reasoning); LMArena Document 1449 #33; no MRCR/RULER rows.

Multimodal:

- MMMU-Pro: Vals 79.3% #47 / AA 65.2-68.7% / official 68.9% #10; MMMU 77.8% #11; VISTA 48.8% #14; MortgageTax 64.0% #48; SAGE 36.1% #64 (weak); **VTB 6.2% #11** (weak video); VPCT 39.8% #18. Text+image in, text out.

Preference/IF/safety:

- Preference solid: Text 1456 #64, Creative 1450-1454 #33-38, Multi-turn 1472-1478 #45-54, **Longer Queries 1482-1486 #33-39**, IF 1462-1464 #45-47, Hard 1483-1487 #54-59
- IF weak: IFBench 42.6% #234 (no-reasoning) / 57.3% #136 (thinking); HELM IFEval 85.0% #19, WildBench 85.4% #9
- Safety: FORTRESS 12.8% #62 (weak — over-refusal); **Mask 96.1% #2**

### Normalized scores (1–100)

- **Tool use: 66/100.** Raised from 58: the year confirmed elite-era credentials — BFCL #2, Cybench #3, τ² #7, METR #12, DeepResearch #7, GDPval-original #4, MCP Atlas #27 — against τ³ 24.5% #82, GDPval-v2.1 20.4% #170, Remote Labor 2.1%, TB 4.0 0.0%, and TB Hard ~30%.
- **Reasoning: 68/100.** Raised from 62: still below-bar on GPQA (81.6-83.4%), HLE ~14-18%, and CritPt 1.1% — but ForecastBench #4, SciPredict #3, AIME 88.2% #30, MGSM 94.3% #4, MATH L5 97.7% #6, decent honesty (50.9% #107), and Reasoning-as-best-category hold the mid-high band.
- **Context window: 70/100.** Held at 200K — and the discovery cuts the other way from its 4.6 sibling: the 1M beta was **retired 2026-04-30**, so no large-window option exists anymore; AA-LCR 72.3% #182 at thinking is decent within the window.
- **Multimodal: 66/100.** Raised from 65: MMMU-Pro 79.3% #47 (Vals) and MMMU 77.8% #11 measure better than the first pass's no-data picture — SAGE 36.1% and VTB 6.2% cap it; image-in/text-out.
- **Coding: 68/100.** Lowered from 70: the independent SWE-V cluster is ~71% (good ranks — board #10-12 — but not the 77.2% vendor read); Vibe 22.6%, SciCode ~45%, GSO 14.7%, ALE #68, and TB 4.0 0.0% are the caps; LMArena Coding #35 preference helps.
- **Cost efficiency: 60/100.** Held: $3/$15 matches the ≈60 anchor, blended $6/M is "among the most expensive," 38 tok/s is the slowest quarter, and every Sonnet successor (4.6 → 5 → 5.5) beats it at equal or lower price.
- **Overall Score: 68/100.** (66 + 68 + 70 + 66 + 68) / 5 = 67.6 → 68, up from 65. Best-fit: a legacy workhorse whose era-elite tool-calling (BFCL #2, Cybench #3, METR #12) and solid coding preference still serve existing pipelines — but its 2026 agent suites collapsed, its 1M beta is dead, and Sonnet 4.6/5 dominate it at the same price; migrate for anything new.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-13
- Method: public internet research, second pass over the 2026-09-24 report (BenchLeader full effort-ladder as of 2026-10-08 aggregating the SWE-bench official board, Terminal-Bench public board, METR, τ²-bench official, BFCL, Cybench, Epoch AI Benchmarking Hub, Artificial Analysis, Vals AI, Scale AI SEAL, HELM Capabilities, Andon Labs, Kaggle; four provider rows (stale 1M listings flagged); DDG-lite searches surfacing the Anthropic launch post (2025-09-29), the claudelab/riptide 1M-beta retirement guides (2026-04-30 cutoff), the aiwiki header history, and intuitionlabs/llm-stats/theairankings coverage; first-pass rows retained where not contradicted); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
