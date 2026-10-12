# Muse Spark 1.1 — findings by GLM 5.3

- Source: Meta (`muse-spark-1.1`)
- Date: 2026-10-12 (UTC) — second-pass re-research of the 2026-09-24 report
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.1
- **Short description:** Meta's Muse Spark 1.1 agentic model — the generation that opened the Meta Model API public preview (2026-07-09, with $20 free preview credits), a multimodal reasoning model "built for agentic tasks, with major gains in tool and computer use, coding, and multimodal understanding" (official launch). Second-pass profile correction: the independent boards reveal it as **the tool-use board leader of its generation** — #1 on MCP Atlas (36-model board), #1 on MultiNRC, #1 on Scale's VTB, and **#1 on BOTH SWE-bench Pro boards** (61.5% public standardized / 51.5% private commercial) — while the general composites sit mid (BenchLeader 63.1 #65/760). Superseded by 1.2/1.3.
- **Provider / access:** Meta Model API (developer.meta.com; OpenAI-SDK-compatible; **$20 free preview credits** at launch); OpenRouter `meta/muse-spark-1.1` (Meta provider, 202-248 tok/s). **No OpenCode Zen ID** (Zen carries 1.3 and 1.2).
- **Release / knowledge:** **2026-07-09** (official launch blog + Meta Model API public preview — resolves the first-pass "mid-2026, exact date not verified"); knowledge cutoff not publicly disclosed.
- **IDs:** Meta `muse-spark-1.1`; `meta/muse-spark-1.1` (OpenRouter). No Zen ID, no Free ID.
- **Context window:** 1,048,576 tokens (API docs; BenchLM/AA 1M) with active context management that compacts long agentic sessions.
- **Modalities:** **text, image, video, audio, and PDF in; text out** (launch coverage verifies PDF input for this exact generation, matching the 1.2/1.3 family set); reasoning yes (adjustable effort per request); tool calls; JSON mode.
- **Pricing (as of 2026-10-12, VERIFIED):** **$1.25 in / $4.25 out per 1M** ($0.15 cached input) — resolves the first-pass "not published"; "up to 83% below Claude Opus 4.8" (tech-insider), undercutting GPT-5.5-class output 6-7x; blended $2.00/M, 202 tok/s (fastest quarter), 1.9 s first token.
- **Architecture:** proprietary; parameter count undisclosed; Meta's first paid closed-weights model, breaking from the free open-weight Llama lineage.

### Raw benchmarks found

> Second-pass additions: full rank reveals (BenchLeader data as of 2026-10-12; the "not stated" effort config carries most rows). Official launch rows and the Meta evaluation report (including agentic bio-capabilities: Fragment Design, Screening Evasion, Liquid-Handling Robot — reported for 1.1 and 1.0 only owing to high refusal rates from comparison models).

Agent / tool use:

- **MCP Atlas: 88.1% #1** (Scale SEAL — the board leader of 36 models, ahead of Kimi K3; llm-stats leaderboard concurs)
- **SWE-Bench Pro: 61.5% #1 public standardized** (Scale SEAL) — see Coding; tops BOTH boards
- Terminal-Bench 2.1: **80.0%** official / **77.9% #54** (AA) / **69.3% #30** (Vals); Terminal-Bench 4.0: **6.1% #92** (AA — near-total miss)
- OSWorld-Verified **80.8%**; Toolathlon **75.6%**; WebArena-Verified 69%; DeepSearchQA **84.9%**; JobBench **54.7%** (a 1.1 lead row per launch coverage)
- **MultiNRC: 65.6% #1** (Scale SEAL); **VTB: 44.8% #1** (Scale SEAL); PRBench Finance **55.0% #2**; PRBench Legal **57.0% #2**; HLE w/ tools 62.1%
- Vals professional agents: Harvey HLAB **20.0% #4**; Finance Agent **57.2% #14**; SkillsBench **59.2% #10**; Legal Research 38.0% #30; Time Horizon KSP 1.7% #11
- GDPval-AA: **1375 Elo** / **35.7% #111 normalized** (AA — bottom-third rank); τ³-Banking **31.8% #61** (AA — found this pass; weak); AA Agentic Index 27.5%; APEX-Agents 31.8% #45; **LMArena Agent −5 #39** (negative); GBAEval 7.9% #13; Vending-Bench 6520.5 #16
- Claw-Eval: no verified public score found (unchanged)

Reasoning / knowledge:

- GPQA Diamond: **89.8% #67** (AA) / **91.2% #23** (Vals) — straddles the 90% bar
- HLE: **46.2% #42** AA / 52.2% w/o tools / 62.1% w/ tools (official)
- CritPt: **15.1% #87** (AA — weak); AA-LCR: **77.7% #120**; MRCR 1M: **54.1%** (weak at full window)
- AA Intelligence Index v4.3.2: **33.7 #95**; LiveBench Reasoning **87.7% #25**; LMArena Hard Prompts **1511 #16**; LMCA 49.9% #50; DTBench 94.4% #44
- **Professional-knowledge cluster (the standout):** TaxEval **79.7% #2**, CorpFin **71.3% #4**, MultiChallenge **75.3% #3**, LegalBench 85.0% #25, MMLU-Pro 88.7% #17, SimpleQA Verified 57.8% #17, MedScribe 88.9% #8, Public Benefits 61.3% #25, EMB 56.4% #39
- Omniscience: accuracy **52.0% #52**, non-hallucination **50.0% #109** (~50% hallucination — mid); FORTRESS 12.4% #63; ProofBench 39.0% #36

Coding:

- **SWE-Bench Pro: #1 on both Scale boards — 61.5% public standardized / 51.5% private commercial** (contracollective, morphllm — the board leader at launch and still #1 of 24 as of 2026-09-28; NOTE: the llm-stats vendor aggregate separately lists Opus 5.5 at 89.9% via system-card harnesses — a methodology conflict, both retained)
- SciCode: **58.8% #16-17** (clears the 55% reference); SWE-bench (Vals): **82.0% #21**; LiveCodeBench (Vals): **85.9% #27**; LMArena Coding **1533 #17**; LMArena WebDev 1542 #40
- SWE Atlas Test Writing **41.5% #10**; Vibe Code Bench v1.1 **72.2% #30** (found this pass); Code Migration 31.1% #33; ProgramBench 0.0%
- DeepSWE: **53.3% #45** (well under the 74% reference); LiveBench Coding 77.2% #38
- TB4 6.1% #92 (see agent rows)

Long context:

- 1M window (1,048,576 API docs); MRCR 1M only 54.1% — retrieval collapses near the limit; AA-LCR 77.7% #120; LMArena Document 1480 #12.

Multimodal (grounding):

- **Vals Multimodal Index 66.7% #11**; MMMU-Pro (Vals) **86.6% #18**; LMArena Vision 1293 #25; VTB **44.8% #1**; SAGE 45.6% #38 (weak); MortgageTax 66.1% #36; CharXiv 88.4%; BabyVision 76.3%; Design Arena 1280 — full text/image/video/audio/PDF input with good quality.

### Normalized scores (1–100)

- **Tool use: 82/100.** Raised from 80: the second pass revealed board leadership the first pass couldn't see — **MCP Atlas 88.1% #1** (36-model board), **MultiNRC #1**, **VTB #1**, PRBench #2 twice, HLAB #4, Finance #14, Skills #10, OSWorld 80.8%, DeepSearchQA 84.9% — offset by GDPval 35.7% #111 (bottom-third), τ³ 31.8% #61, LMArena Agent −5 (negative), APEX 31.8% #45, and TB 4.0 6.1% #92.
- **Reasoning: 80/100.** Held: the professional-knowledge cluster is elite (TaxEval #2, CorpFin #4, MultiChallenge #3, MMLU-Pro #17) and HLE 46-62% clears the bar, but AA II 33.7 #95, CritPt 15.1% #87, ~50% hallucination, and MRCR-1M 54.1% keep the controlled-composite picture mid.
- **Context window: 88/100.** Held: 1M window but MRCR at 1M is only 54.1% — retrieval collapses near the limit.
- **Multimodal: 90/100.** Held: full text/image/video/audio/PDF input (now verified for this exact generation) with Vals Multimodal Index #11, MMMU-Pro #18, CharXiv 88.4%; no non-text output.
- **Coding: 81/100.** Raised from 78: **#1 on both SWE-bench Pro boards** (public 61.5% / private 51.5%) plus SciCode 58.8% #17, LMArena Coding #17, LiveCodeBench 85.9% #27, SWE-bench (Vals) 82.0% #21 — capped by DeepSWE 53.3% #45, Code Migration 31.1% #33, TB 4.0 6.1% #92, ProgramBench 0%, and the SWE-Pro methodology conflict (vendor-aggregate boards led by Opus 5.5).
- **Cost efficiency: 85/100.** Held: $1.25/$4.25 verified (was provisional at family pricing) at the ≈88 anchor minus verbosity drag; 202 tok/s and $0.0018 chat replies soften it.
- **Overall Score: 84.2/100.** (82 + 80 + 88 + 90 + 81) / 5 = 84.2, up from 83.2 via the Tool and Coding rank corrections. Best-fit updated: the tool-use board leader of its generation — MCP Atlas #1, SWE-bench Pro #1 (both Scale sets), a top-5 professional-agent cluster at 6-7x-under-GPT-5.5 pricing — but a mid controlled composite (AA II #95, GDPval #111) means 1.2/1.3 remain the better Muse picks for general work; route to 1.1 for tool-coordination-heavy jobs on legacy integrations.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-12
- Method: public internet research, second pass over the 2026-09-24 report (Meta's official Muse Spark 1.1 launch blog and evaluation report (bio-capabilities rows), Meta Model API pricing coverage (aireiter, techjacksolutions, aiweekly, the-agent-report, tech-insider, ccleaks), Artificial Analysis model benchmarks, BenchLeader data as of 2026-10-12 with rank reveals, Vals AI, LiveBench, LMArena, Epoch hub, Scale SEAL (MCP Atlas / MultiNRC / VTB / PRBench / MultiChallenge / SWE-Bench Pro boards), swebench.com, contracollective and morphllm SWE-Pro board analyses; three successful web searches; reviews: kingy, kompozy, layer3labs, buildfastwithai, syntaxdispatch, atalupadhyay, benchmarklist, awesomeagents, digitalapplied, llmlearner, evals.report, llm-stats ×2, andrew.ooo); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
