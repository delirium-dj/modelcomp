# Grok 4.3 — findings by GLM 5.3

- Source: xAI (`grok-4.3`)
- Date: 2026-10-12 (UTC) — second-pass re-research of the 2026-09-24 report
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.3
- **Short description:** xAI's spring-2026 Grok 4-series reasoning model — beta on grok.com/SuperGrok **2026-04-17**, API GA **2026-04-30 with a 40% API price cut** (felloai; AA's launch article covered the cut). Second pass resolves both first-pass unknowns: release date and pricing ($1.25/$2.50 — now cheaper than every later Grok, which all dropped to 500K context at $2/$6: "Grok 4.3 is still the cheaper, longer-context option" — codersera). Elite at instruction following (**IFBench 83.3% #1 of 415**) and best-in-class honesty, weak on 2026 agent suites. No longer on the Zen list.
- **Provider / access:** xAI API (docs.x.ai); four SpaceXAI OpenRouter endpoints ($1.25/$2.50 ×2, $2.50/$5.00 ×2 — the latter presumably long-prompt tiers); **no OpenCode Zen ID** (Zen carries Grok 4.5/4.6/4.7 only).
- **Release / knowledge:** beta **2026-04-17**, API GA **2026-04-30** (theairankings/benchable/BenchLM; BenchLeader records 17 Apr); knowledge cutoff not publicly disclosed.
- **IDs:** `grok-4.3` (xAI API; no Zen ID, no Free ID).
- **Context window:** 1M tokens (confirmed — the only ≥1M Grok).
- **Modalities:** text/image in; text out (plus PDF/PPTX document generation per felloai); reasoning (medium is its best config); tool calls; JSON mode.
- **Pricing (as of 2026-10-12):** **$1.25 in / $2.50 out per 1M** (OpenRouter SpaceXAI; cached read $0.20; a $2.50/$5.00 tier also serves); blended $1.56/M; 110 tok/s, 12 s first answer; $0.085 per agentic session.
- **Architecture:** proprietary; parameter count undisclosed.

### Raw benchmarks found

> Second pass adds the full BenchLeader effort ladder (best = medium **58.8 #130/760**, trend 38→53→68 rising, last measured 2026-10-11). Category scores (medium): **Instruction following 80 (best)**, Knowledge 69, Agents & tools 60, Composite 58, Long context 63, Multimodal 59, **Reasoning 49 (worst)**. Correction: AA II is **24.9 #158 (high)** — the first pass's 37.6 was a stale listing.

Agent / tool use:

- **τ²-Bench: 97.7% #9 (high — elite, confirmed)**; **τ³-Banking: 12.4% #129 (high)** — gap filled; weak, the τ² story does not carry to the 2026 suite
- **GDPval-AA: 22.0-22.3% #164-165** (weak — confirms the first-pass 29.2% was generous); TB 2.1: Vals **42.0% #64** / AA 39.7% #135 (weak, confirmed); **TB 4.0 (AA): 0.0% #144**; TB Hard 37.9% #63; TB 2.0 (Vals) 43.5% #28
- ITBench SRE 32.7% #30; Analyst Agent 8.8% #34; APEX-AA 17.0% #21; Finance 37.7% #56; **HLAB 0.4% #50**; Legal Research 15.4% #52; Skills 40.6% #28; Tax 34.4% #51; LiveBench Agentic Coding **18.5% #66** (weak); Vending-Bench 2 **35.3 #61** (weak); LMArena Search 1193 #17 (good); Claw-Eval / MCP-Atlas: still unmeasured

Reasoning / knowledge:

- GPQA Diamond: Epoch 88.8% #55 (high) / AA 90.1% #63 (high) / Vals **91.4% #22** — Vals clears the bar, Epoch just under (spread)
- HLE (AA): **37.2% #100 (high)** — below the 40% reference; **CritPt 8.0% #128** (weak); LiveBench Reasoning 70.8% #63; ProofBench 11.0% #62 (weak); FrontierMath T1-3 42.8% #54 / T4 14.6% #56; OTIS 93.3% #54; LiveBench Math 84.3% #55; LMArena Maths 1419 #120 (weak)
- **Honesty is the standout strength: AA-Omniscience non-hallucination 82.6-83.1% #7-9** (low/medium; 74.2% #25 at high) — best-in-class; the trade is low accuracy (23.7-34.8% #149-239 — honest about not knowing); Omniscience index 13.9-18.0 #72-82; SimpleQA 33.2% #55
- **AA Intelligence Index 24.9 #158** (corrected); ECI 149.2 #59; LiveBench global 62.3% #66; MMLU-Pro 85.8% #51; LegalBench 84.5% #30; **CorpFin 68.5% #7**; **CaseLaw 79.3% #1** (elite); TaxEval 70.8% #83; MedScribe 74.4% #76; MedCode 38.1% #68; EMB 18.4% #60 (weak); GDP.pdf 8.0% #49; ForecastBench 60.3% #28; DTBench 90.7% #64

Coding:

- LiveCodeBench (Vals) **84.5% #37** (good); SWE-bench Verified (Vals) 71.4% #55 (mid); LiveBench Coding 69.9% #61; WeirdML 49.9% #69
- **Vibe Code v1.1: 19.4% #73** (gap filled — weak); **Code Migration 6.8% #57** (dreadful); ProgramBench 0.0% #23; SciCode 47.3-48.3% #114-116 (weak, confirmed); ALE-Bench 944.2 #53; LMArena Coding 1488 #95 / **WebDev 1357 #101** (weak preference); **IFBench 83.3% #1 of 415** (its one elite row)

Long context:

- 1M window confirmed (the only ≥1M Grok); **AA-LCR 73.0-75.0% #149-174 at effort** (up from the first pass's 64.3% base read); no MRCR/RULER rows.

Multimodal:

- **MMMU-Pro (Vals): 83.1% #34** (better than the AA 78.1% read); **Vals Multimodal Index 43.3% #27**; LMArena Vision 1229 #77; MortgageTax 48.3% #81; **SAGE 19.7% #86** (weak grounding); Blueprint-Bench 2 0.0% #27.

### Normalized scores (1–100)

- **Tool use: 55/100.** Lowered from 58: the gaps filled in weak — τ³ 12.4% #129, GDPval 22% #164, HLAB 0.4% #50, Legal Research 15.4% #52, LiveBench Agentic 18.5% #66, TB 4.0 0.0% — against the elite τ² 97.7% #9, decent TB Hard #63, ITBench #30, Skills #28, and Search #17.
- **Reasoning: 66/100.** Lowered from 72: GPQA straddles the bar (88.8-91.4%), HLE 37.2% #100 and CritPt 8.0% #128 miss the references, the AA II corrects down to 24.9 #158, and ProofBench 11% is weak — offset by best-in-class honesty (83% non-hall #7-9), CaseLaw #1, CorpFin #7, ForecastBench #28, and OTIS 93.3% #54.
- **Context window: 90/100.** Lowered from 95: 1M confirmed (unique among Groks), but measured long-context reasoning is mid (AA-LCR 73-75% #149-174).
- **Multimodal: 66/100.** Lowered from 68: Vals MMMU-Pro 83.1% #34 and MM Index 43.3% #27 are decent — but SAGE 19.7% #86, Blueprint 0%, Vision #77, and text-only output temper it.
- **Coding: 60/100.** Lowered from 62: LCB 84.5% #37 stays good and IFBench 83.3% #1 is elite — but Vibe 19.4% #73 (gap filled), Code Migration 6.8%, SciCode ~48%, ProgramBench 0%, and WebDev 1357 #101 confirm the weakness.
- **Cost efficiency: 82/100.** Raised from 70 (pricing was unverified): $1.25/$2.50 with a 40% launch cut, $0.20 cached, 110 tok/s, $0.085/session, and a 1M window — cheaper per token than every later Grok while offering more context.
- **Overall Score: 67/100.** (55 + 66 + 90 + 66 + 60) / 5 = 67.4 → 67, down from 71.0. Best-fit: the honest, long-context budget Grok — best-in-class truthfulness (#1 IFBench, #7-9 non-hallucination, CaseLaw #1) with 1M context at $1.25/$2.50; but its 2026 agent and coding suites measured bottom-tier, and every later Grok beats it on intelligence. Use it where hallucination cost dominates and capability requirements are modest.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-12
- Method: public internet research, second pass over the 2026-09-24 report (BenchLeader full effort-ladder as of 2026-10-11 aggregating Epoch AI Benchmarking Hub, Artificial Analysis, Vals AI, LiveBench, LMArena, Andon Labs; four SpaceXAI OpenRouter provider rows resolving the pricing unknown; DDG-lite searches surfacing AA's launch article incl. the 40% price cut, felloai's hands-on review (PDF/PPTX generation, price-cut date), theairankings/codersera release-date and successor-context confirmations, and benchable/BenchLM listings); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
