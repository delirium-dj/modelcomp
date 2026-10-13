# Kimi K2.6 — findings by GLM 5.3

- Source: Kimi / Moonshot AI (`kimi-k2.6`)
- Date: 2026-10-12 (UTC) — second-pass re-research of the 2026-10-01 report
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.6
- **Short description:** Moonshot AI's open-weights reasoning model (1T MoE, 32B active, native INT4; Modified MIT), built for agentic coding, long-horizon execution and parallel agent orchestration — its **Agent Swarm primitive fans out to 300 sub-agents across ~4,000 coordinated steps, with 12-hour autonomous runs claimed** (thesys/codersera). The first open-weight model to beat GPT-5.4 on SWE-Bench Pro (58.6 vs 57.7 — presenc/aitoolsrecap corroborate). Superseded as flagship by Kimi K3 (2026-07-16; open weights 2026-07-26 at 2.8T/~594GB — impractical to self-host), so K2.6 remains **the practical self-host Kimi**.
- **Provider / access:** Kimi/Moonshot API; **15 OpenRouter providers** (CoreWeave 164 tok/s fp4, Inceptron, Chutes, NovitaAI, Crusoe bf16, DigitalOcean, SiliconFlow, StreamLake, Baidu Qianfan, Cloudflare, Phala, AtlasCloud, Parasail); Hugging Face `moonshotai/Kimi-K2.6` for self-hosting.
- **Release / knowledge:** 2026-04-20; knowledge cutoff not stated publicly.
- **IDs:** `kimi/kimi-k2.6` (no Free ID on Zen; paid only).
- **Context window:** **262K total** (256K on StreamLake; confirmed across all providers).
- **Modalities:** text + image + video in; text out; reasoning (thinking is its best config); tool calls; JSON mode.
- **Pricing (as of 2026-10-12):** Moonshot list $0.95/$4.00 per 1M, but the open-weights floor has fallen — **Inceptron int4 $0.465/$2.45, Chutes $0.500/$2.85, CoreWeave $0.65/$3.41**, ~$0.60/$2.50 commonly quoted (secondtalent 2026-09-10); cache read $0.16; $0.073 per agentic session (BenchLeader estimate).
- **Architecture:** MoE, 1T total / 32B active; native INT4 quantization; open weights, Modified MIT.

### Raw benchmarks found

> Second pass adds the full BenchLeader effort ladder (best = thinking **58.5 #140/760**, trend 48→57→66 rising, last measured 2026-06-25). Category scores (thinking): **Instruction following 74 (best)**, Knowledge 64, Long context 66, Multimodal 63, Maths 57, Agents & tools 58, Reasoning 55, **Composite 49 (worst)**.

Agent / tool use:

- **τ³-Banking: 23.3% #84** (gap filled — weak; the 2026 banking-agent suite sinks the τ² story) vs **τ²-Bench: 95.9% #16** (thinking, elite — confirmed)
- **GDPval-AA: 27.0% #144** (thinking; confirms the first-pass 26.3% — bottom-quartile remote-labor)
- Terminal-Bench: 2.0 Vals **57.3% #13** (good rank; the 66.7% vendor-era figure not reproduced); 2.1 Vals 53.6% #52 / AA 65.9% #78; TB Hard **43.9% #37**; **TB 4.0 (AA): 0.5% #130** — catastrophic on the newest suite
- **Vending-Bench 2: 6204.6 #18** (good); HiL-Bench 18.7% #14; APEX-Agents (AA) 28.5% #13; ITBench SRE 31.2% #32; LiveBench Agentic Coding 46.9% #48; OSWorld-Verified 73.1% / **OSWorld 2.0: 4.6% #12**
- **HLAB: 1.7% #41**; Legal Research 15.9% #49; Tax Agent 45.1% #43; Finance Agent v2 44.9% #47; ExploitBench 18.4% #6; GBAEval 0.9% #17; GDP.pdf 12.0% #44
- BrowseComp 83.2%; DeepSearchQA 92.5%; WideResearch 80.8%; Toolathlon 50%; MCP Atlas 55.9%; Claw-Eval 62.3% (first-pass rows retained); Agent Swarm (300 agents/12 h) remains a vendor claim — no independent measurement yet

Reasoning / knowledge:

- GPQA Diamond: Epoch **90.8% #37** / AA **91.1% #50** (thinking) / Vals 89.1% #30 — straddles the 90% bar, mostly above at thinking
- HLE: AA **37.5% #98** (thinking; 19.6% #207 at no-reasoning) — below the 40% reference; CritPt **8.0% #128** (weak); ProofBench 16.0% #54 (weak)
- Competition math elite: **AIME 2026 95.8% #13; HMMT Feb 2026 94.7% #8**; OTIS 96.1% #35; **FrontierMath T1-3 57.2% #40 (up from the first pass's 38.97%) / T4 25.6% #44 (up from 14.58%)**; LiveBench Math 84.3% #56; MathArena Apex 24.0% #13
- Honesty: Omniscience accuracy 32.6% #160, **non-hallucination 59.5% #75** (thinking — decent), index 5.3 #101; SimpleQA 34.9% #48 (weak short facts); AA II **27.0 #139** (mid-weak)
- Knowledge: MMLU-Pro 87.6% #25; LegalBench 84.7% #28; **CorpFin 66.7% #16**; TaxEval 74.7% #32; CaseLaw 61.2% #22; EMB 57.9% #34; MedScribe 78.2% #61; Public Benefits 56.6% #32; MedCode 40.1% #62 (weak); EBR-bench 2.4% #23
- Instruction following: IFBench **76.0% #23**, LiveBench Language 75.1% #46, LiveBench IF 64.4% #46 — the IF-74 category score is earned
- Preference: LMArena Text 1461 #58, Hard Prompts 1485 #56, Coding 1516 #42, Maths 1480 #39, EQ-Bench 1202 #16, Multi-turn 1461 #74, Longer 1478 #49; Document 1450 #32

Coding:

- **SWE-bench Verified (Epoch): 76.7% #9** — elite rank (Vals 76.2% #39; the first-pass 80.2% was the vendor read)
- **SWE-Bench Pro: 58.6% — the historic open-weights win over GPT-5.4's 57.7%** (independently corroborated by presenc/aitoolsrecap); LiveCodeBench (Vals) **86.8% #19**; LiveBench Coding **78.6% #29**; WeirdML 55.9% #58; SWE Multilingual 76.7%
- SciCode 53.5% #69 / AA 51.5% #90 (just below the 55% reference); **Vibe Code 37.9% #57**; Code Migration 27.8% #36; ProgramBench 0.0% #23; ALE-Bench 1092.7 #44; cursorBench31 47.6%; LMArena WebDev 1509 #53

Long context:

- 262K window; **AA-LCR 81.0% #57** (thinking — good measured retrieval); LMArena Document 1450 #32; no RULER/MRCR rows (unchanged).

Multimodal:

- **MMMU-Pro (Vals): 86.3% #21** / AA 79.4% #58; **Vals Multimodal Index 56.4% #19**; **SAGE 50.2% #17** (good grounding); LMArena Vision 1283 #33; MortgageTax 65.8% #38; Blueprint-Bench 2 3.9% #26 (weak); first-pass vendor vision rows retained (MathVision 87.4%, V* 96.9%, CharXiv 80.4%). Video-in is a vendor/spec claim, not independently verified.

### Normalized scores (1–100)

- **Tool use: 68/100.** Lowered from 75: the gaps filled in weak — τ³ 23.3% #84, GDPval 27.0% #144, HLAB 1.7% #41, Legal Research 15.9% #49, ITBench 31.2% #32, TB 4.0 0.5% #130, OSWorld 2.0 4.6% — against elite τ² 95.9% #16, decent TB 2.0 #13, Vending #18, HiL #14, APEX #13. The Agent Swarm narrative is unmeasured independently; the measured professional-agent profile is bottom-half.
- **Reasoning: 74/100.** Lowered from 80: GPQA ~90-91% only straddles the bar, HLE 37.5% #98 and CritPt 8.0% #128 miss the references, and AA II 27.0 #139 is mid-weak — offset by genuinely elite competition math (AIME #13, HMMT #8, FrontierMath ranks way up on the v2 rerun) and decent honesty (59.5% non-hall #75).
- **Context window: 71/100.** Held: 262K confirmed across 15 providers; AA-LCR 81.0% #57 is good measured retrieval for the tier.
- **Multimodal: 78/100.** Lowered from 82: independent rows are good-not-elite — Vals MM Index 56.4% #19, MMMU-Pro 86.3% #21, SAGE 50.2% #17 — with Blueprint 3.9% #26 weak and video-in unverified; text-only output.
- **Coding: 80/100.** Lowered from 85: SWE-bench Verified lands at 76.7% #9 (Epoch) / 76.2% #39 (Vals) rather than the vendor's 80.2%, and SciCode, Vibe 37.9%, Code Migration 27.8% and TB 4.0 0.5% cap the profile — but the SWE-Pro win over GPT-5.4, LCB 86.8% #19 and LiveBench Coding 78.6% #29 keep it the top practical open-weights coder.
- **Cost efficiency: 92/100.** Raised from 90: the open-weights price war has cut the effective floor to $0.465/$2.45 (Inceptron) / ~$0.60/$2.50 commonly quoted, with 164 tok/s available on CoreWeave fp4 — historically cheap for this capability.
- **Overall Score: 74/100.** (68 + 74 + 71 + 78 + 80) / 5 = 74.2 → 74, down from 79. Best-fit: the practical self-host open-weights coding agent — elite repo-scale coding (SWE-Pro #1 open, SWE-V #9) and competition math at ~$0.05-$0.07 per session; but its professional-agent profile (τ³, GDPval, HLAB, OSWorld 2.0) measured far below the Swarm marketing, so treat it as a coder first, agent second.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-12
- Method: public internet research, second pass over the 2026-10-01 report (BenchLeader full effort-ladder; Epoch AI Benchmarking Hub; Artificial Analysis; Vals AI; LiveBench; LMArena; Scale AI SEAL; MathArena; 15 OpenRouter provider listings; DDG-lite searches surfacing secondtalent/presenc/codersera/theairankings/aitoolsrecap/thesys reviews incl. the K3 succession, Agent Swarm details, the SWE-Bench Pro 58.6-vs-57.7 result, and current street pricing); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
