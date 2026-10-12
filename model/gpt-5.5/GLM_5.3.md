# GPT-5.5 — findings by GLM 5.3

- Source: OpenAI (`gpt-5.5`)
- Date: 2026-10-12 (UTC) — second-pass re-research of the 2026-09-24 report
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5 (codename "Spud" per Wikipedia)
- **Short description:** OpenAI's April 2026 flagship reasoning model — the first fully retrained base since the GPT-4 era — predecessor to the GPT-5.6/6 lines; still served. Second-pass composite trackers: BenchLeader **65.9, #34 of 760 at xhigh** (full 6-setting effort ladder measured: no-reasoning 53.0 #282 → xhigh 65.9 #34; trend 58→71 rising), BenchLM **67.79, #24 of 889** (45 rows), AA II **38 at xhigh** (AA's own release page — the launch-era press claims of 59-60 are pre-settling noise, discarded). Top use case: terminal/research agents with standout computer-use — with a documented knowledge-honesty problem.
- **Provider / access:** OpenCode Zen `https://opencode.ai/zen/v1/responses` (OpenAI Responses API, `@ai-sdk/openai`); OpenAI API (Responses + Chat Completions); 9 providers (modelindex/cloudprice); Azure Global Standard $5/$30, Data Zone $5.50/$33; Microsoft Foundry parity. Codex serves it at 400K with a "Fast" mode (1.5x speed at 2.5x cost).
- **Release / knowledge:** 2026-04-23; knowledge cutoff not publicly disclosed.
- **IDs:** `opencode/gpt-5.5` (Zen; no Free ID — paid only)
- **Context window:** 922K tokens total (AA technical specs; listings round to 1M-1.1M — vendor pages say 1M API window).
- **Modalities:** text/image in; text out (AA listing; one press piece calls it "natively omnimodal" — marketing language, not verified by AA's spec); reasoning yes (none→xhigh, xhigh default); tool calls; JSON mode.
- **Pricing (as of 2026-10-12):** Zen $5.00 in / $30.00 out per 1M ≤272K tokens ($10.00/$45.00 above 272K; cached read $0.50); BenchLeader blended $11.25/M — among the most expensive; 88 tok/s, ~39 s first answer at xhigh, **$2.63 per Intelligence-Index run**; xhigh costs 2.9x medium for +2.9 index points.
- **Architecture:** proprietary; parameter count undisclosed; co-designed for NVIDIA GB200/GB300 NVL72 serving.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench (public tbench.ai board): **84.7% #1** (effort not stated — the board's best); Terminal-Bench 2.0: **82.7%** (official, SOTA at release) / **73.2% #1** (Vals); Terminal-Bench 2.1: ladder 61.0→**84.3% #30** (AA, xhigh) / **76.4% #16** (Vals); Terminal-Bench Hard: **60.6% #7** (AA, xhigh)
- Terminal-Bench 4.0: ladder 5.0%→**14.7% #66** (AA, xhigh) — the hard new board humbles it; Terminal-Bench Science: no row found this pass
- Tau2-Bench Telecom: ladder 69.3%→**93.9% #39** (AA, xhigh); τ³-Banking: ladder 14.8%→**39.0% #34** (AA, xhigh — found this pass, resolving the 2026-09-24 gap; mid-weak)
- GDPval-AA: **1396 Elo** vendor / normalized ladder 23.5%→**42.7% #84** (AA, xhigh — bottom-third rank); AA Agentic Index 37.3%; Analyst Agent **50.0% #7**; AA-APEX-Agents 37.7% #6; APEX (Mercor) 55.1% #19
- OSWorld-Verified: **78.7%** (vendor, above the 72.4% human rate) vs **OSWorld-Verified 2.0: 13.0% #9** (OSWorld paper board) — protocol split, both retained; Remote Labor Index 6.3% #5
- MCP-Atlas **75.3% #18** (Scale SEAL); ITBench SRE **45.8% #13**; Toolathlon 55.6%; BrowseComp **84.4%**; CyberGym 81.8%; ExploitBench **47.4% #2**; HiL-Bench 39.7% #7; GBAEval 53.2% #6; DeepResearch Bench **54.0% #4** (high); Vending-Bench 7523.8 #13
- Vals professional agents (xhigh): SkillsBench **62.2% #5**, Tax Agent 60.5% #30, Finance Agent 51.8% #32, Legal Research 40.4% #24, Harvey HLAB 3.8% #33, SREBench 3.8% #11, Time Horizon KSP 8.3% #8
- LMArena Agent 4.4 #14; LiveBench Agentic Coding 54.0% #33; Gert Labs 72.93%; AA-Briefcase: no row found this pass
- Claw-Eval / ClawProBench: no verified public score found (unchanged)

Reasoning / knowledge:

- GPQA Diamond: **93.6%** (official) / **93.5% #14** (AA, xhigh) / **93.2% #10** (Vals) / 90.7% #38 (Epoch, low)
- HLE: **45.8% #45** (AA, xhigh) / **52.2%** w/ tools / **41.4%** w/o tools (official)
- **Math cluster (the second-pass headline): AIME 2026 100.0% #1, HMMT Feb 2026 98.5% #1, MathArena Apex 80.2% #2, Kagi LLM Benchmark 88.8% #2, BTF-3 14.3% #3 (high), CL-bench Life 22.2% #1 (high), LiveBench Reasoning 89.7% #14, LiveBench Mathematics 95.9% #13, SimpleBench 69.0% #15, Mystery Game 56.0% #8, DTBench 96.0% #22, ProofBench 50.0% #28, LMArena Maths 1500 #15**
- FrontierMath — CONFLICT: official launch values **51.7% (Tiers 1-3) / 35.4% (Tier 4)** (Wikipedia/announcement, canonical as reported) vs Epoch-hub current xhigh re-run **85.3% #12 / 72.5% #18** (BenchLeader) — same later-re-run pattern flagged across the OpenAI 5.x files; both retained
- ARC-AGI-2: ladder 33.3% (low) → **85.0% #28** (xhigh, ARC Prize verified); ARC-AGI-1 95.0% #33; ARC-AGI-3 **0.4% #38** (near-total miss)
- CritPt: ladder 1.4%→**27.1% #31** (AA, xhigh); LMCA 54.3% #33; ForecastBench 60.6% #25; EnigmaEval: no row found this pass
- Knowledge: SimpleQA Verified **63.0% #13**; LiveBench Data Analysis **81.6% #4**; LiveBench Language **87.4% #9**; IFBench 75.8% #26 (xhigh); MMLU-Pro 88.1% #21; LegalBench 86.5% #12; CorpFin 68.4% #8; TaxEval 75.0% #24; CaseLaw 66.2% #7; EMB 64.5% #23; MedScribe 86.9% #18; MedCode 49.1% #24; Public Benefits 60.9% #27; DrugDiscoveryBench 51.6% #5; EBR-bench 34.3% #9; GDP.pdf 26.0% #12
- **Omniscience (the defining weakness, confirmed): accuracy 58.0% #28 (record-high at launch) with hallucination rate ~89%** (launch-era press: 86%; current AA fields at xhigh: non-hallucination **11.0% #388**, index 20.5 #63) — "the most overconfident flagship model tested" (stackfutures, ai2.work, stack-archive; 2.4x Claude Opus 4.7's 36%). OpenAI's internal counter-claim — "52.5% reduction in hallucinated claims on high-stakes prompts" (chatforest) — is retained as a flagged vendor/independent conflict
- MRCR v2: 83.1% (64K-128K) / 87.5% (128K-256K) (official); AA-LCR **84.3%**; ARC-AGI-adjacent long-context: none new
- LMArena: Text ~1501, Hard Prompts 1501 #29 (high), IF (truncated rows), preference cluster mid-elite

Coding:

- SWE-bench Verified (Vals): **82.6% #19**; LiveCodeBench (Vals): **85.3% #33**; LiveBench Coding **82.2% #10**; WeirdML **84.9% #14** (xhigh); Code Migration 45.2% #15
- **DeepSWE v1.1: 67.0% #22** (Epoch, xhigh — found this pass, resolving the 2026-09-24 gap; effort ladder 27.0% low → 67.0% xhigh; just under the 74% frontier reference)
- SciCode: ladder 47.3%→**56.1% #37** (xhigh — clears the 55% reference); AA Coding Index 74.9%; SWE-bench Pro 58.6%; Vibe Code 69.8% #33; GSO-Bench 40.2% #9; ALE-Bench **1943.0 #9**; Surface Evolver 88.1% #5 (high); SWE Atlas Refactoring 44.8% #6 / Test Writing 42.6% #9; ProgramBench 0.5% #13; MirrorCode 10.0% #8 (high); React Native Evals 84.7%; FrontierCode 43.0% #16; CursorBench 3.1 59.2% / 3.2 58.4%
- LMArena Coding 1519 #37 (high) / WebDev 1513 #52 (xhigh) — mid
- Terminal-Bench rows double as coding-agent evidence (see agent section)

Long context:

- 922K window (AA); MRCR v2 verified to 256K (87.5%); AA-LCR 84.3%; no 512K-1M figure published (unchanged).

Multimodal (grounding):

- MMMU-Pro **81.2%** / w/ Python 83.2% (AA 79.9%); OfficeQA Pro 54.1% — image-in band; no audio/video verified.

### Normalized scores (1–100)

- **Tool use: 84/100.** Held: the second pass revealed the terminal/research-agent cluster at its true strength — Terminal-Bench 84.7% **#1** (public), TB 2.0 Vals **#1**, TB Hard #7, ExploitBench #2, DeepResearch #4, Analyst #7, Skills #5, τ² 93.9% — against bottom-third professional aggregates (GDPval 42.7% #84, OSWorld-Verified 2.0 13.0% #9, HLAB 3.8%, SREBench 3.8%, RLI 6.3%) and a weak TB 4.0 (14.7% #66). A terminal/research specialist, not a general professional agent.
- **Reasoning: 86/100.** Raised from 84: the competition-math cluster is the best measured in this entire batch — AIME 2026 100% #1, HMMT 98.5% #1, MathArena Apex 80.2% #2, Kagi #2, BTF-3 #3 — with GPQA 93.5% #14, ARC-AGI-2 85.0% #28, HLE 45.8% #45, CritPt 27.1% #31, and LiveBench Reasoning #14 corroborating. The caps are unchanged and severe: ARC-AGI-3 0.4%, the ~89% hallucination rate (non-hallucination #388 — the worst flagship honesty measured), and Omniscience index 20.5.
- **Context window: 90/100.** Held: 922K total (top of the 500K-1M band); retrieval verified only to 256K.
- **Multimodal: 70/100.** Held: text+image in, text out; MMMU-Pro 81.2% keeps the top of the image-in band; the "natively omnimodal" press claim is not verified by AA's spec.
- **Coding: 84/100.** Held: SWE-bench V 82.6% #19, LiveCodeBench 85.3% #33, LiveBench Coding #10, WeirdML #14, SciCode 56.1% #37 (clears the 55% ref), ALE #9 — capped by the newly found DeepSWE 67.0% #22 (below the 74% ref), SWE-bench Pro 58.6%, FrontierCode 43%, TB 4.0 14.7%, and mid LMArena coding rows.
- **Cost efficiency: 45/100.** Held: $5/$30 (doubling above 272K), blended $11.25/M among the most expensive, $2.63/II run at xhigh with 2.9x effort-cost scaling.
- **Overall Score: 82.8/100.** (84 + 86 + 90 + 70 + 84) / 5 = 82.8, up from 82.4 via the Reasoning correction. Best-fit: a legacy flagship that remains the terminal/research-agent king (TB #1) with the batch's best competition math — pair it with retrieval grounding for any factual work (89% hallucination rate when wrong), and note the GPT-5.6/6 lines beat it on value at every turn.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-12
- Method: public internet research, second pass over the 2026-09-24 report (OpenAI GPT-5.5 announcement rows via Wikipedia and BenchLM, Artificial Analysis model benchmarks and its GPT-5.5 release page — pinning the settled AA II at 38 xhigh, BenchLeader data as of 2026-10-12 with the full effort ladder, Vals AI, LiveBench, LMArena, Epoch hub, ARC Prize, Scale SEAL, Mercor APEX, MathArena, OSWorld paper board, Kaggle/Google FACTS, Azure pricing via BenchLM; three successful web searches; independent reviews: agentbreaking, buildfastwithai, stack-archive, ai2.work, chatforest, stackfutures, developersdigest, theairankings, modelindex, tokenmix, gate, aicortexo); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
