# Claude Opus 5.5 — findings by GLM 5.3

- Source: Anthropic (`claude-opus-5-5`)
- Date: 2026-10-11 (UTC) — second-pass re-research of the 2026-09-25 report
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5
- **Short description:** Anthropic's flagship and first model of the Claude 5.5 family, released 2026-09-22; performs at the level of Claude Fable 5.1 on most work at 40% lower cost than Opus 5. Top use case: long-horizon agentic coding and knowledge work. Second-pass confirmation: it now ranks #1 of 760 configurations on the BenchLeader Index (max effort, 72.0 ±4.0, data as of 2026-10-11) and #1 of 610 on AA Intelligence Index v4.3.2 (57.6).
- **Provider / access:** Anthropic Claude Platform API `claude-opus-5-5` (Messages API, adaptive thinking that cannot be disabled per Anthropic docs; reasoning effort low→max, medium is the new default), also on Amazon Bedrock, Google Cloud Vertex AI ($4.40/$22), and Microsoft Azure Foundry ($4/$20); Artificial Analysis lists 6+ API providers. Reasoning-effort ladder measured by BenchLeader: low 64.9 #43, medium 66.7 #28, high 70.2 #4, xhigh 69.5 #9, max 72.0 #1.
- **Release / knowledge:** 2026-09-22; knowledge cutoff not disclosed publicly.
- **IDs:** `claude-opus-5-5` (no OpenCode Zen Free ID found — proprietary Anthropic flagship).
- **Context window:** 1M tokens total (Artificial Analysis; verified against the 980k-token WANDR task budget in Anthropic's announcement). Max output split still not stated publicly.
- **Modalities:** text and image in / text out; reasoning yes (adaptive thinking); tool calls yes; JSON mode not separately verified.
- **Pricing (as of 2026-10-11):** $4 in / $20 out per 1M; cache reads $0.20, cache writes $5 per 1M (20%/60% below Opus 5); fast mode $8/$40 with up to 2.5x speed. BenchLeader blended $8.00/M with a full Intelligence-Index run costing $5.98 at max effort — max costs 11x low for +7.1 index points, and the first answer at max effort takes ~662 s (96 tok/s output). Zero data retention available. SonarSource independently measured 40% fewer output tokens than Opus 5 for identical benchmark work — the "token-usage catch" is that the max-effort setting is slow and expensive, not that the model is wasteful per task.
- **Architecture:** proprietary; parameters undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **66.4%** (Anthropic announcement, xhigh effort, ±2.6 pts — highest of compared models); AA's own run: **59.6% #2** (max/xhigh); Vals: **65.2% #1** (effort not stated); effort ladder on AA from 31.3% (low) to 59.6% (max)
- Terminal-Bench (public tbench.ai board): **64.8% #11** (max)
- Terminal-Bench 2.1 (Vals): **87.6% #1** (effort not stated)
- GDPval-AA v2.1: **1846 Elo** raw / **68.3% #1 normalized** (Anthropic announcement; AA normalized ranking — #1 of all measured configurations; Fable 5.1 1735, Opus 5 1708, GPT-6 Astra 1542 at launch)
- AA Briefcase v1.1: **1807 #2** (current AA via BenchLM/BenchLeader; the launch-era listing of 1586 was an early measurement — revised, flagged)
- JobBench: no verified public score found (Anthropic launch table lists 65.7% for Opus 5 max, but no Opus 5.5 JobBench row)
- OSWorld 2.0: **81.8% partial-credit** (Anthropic announcement) / **48.7%** (system card binary; BenchLM listing)
- Toolathlon-Verified: **77.8%** (system card, avg 26.9 turns; Pass@3 82.4%)
- AutomationBench: **40.0%** (Anthropic announcement, Zapier-run without fallbacks) vs AA's own run **69.5% #3** (max) — large harness-dependent gap, both retained
- APEX-Agents (Mercor): **73.5% #3** (max)
- LiveBench Agentic Coding: **71.7% #2** (max)
- Analyst Agent (AA): **56.3% #4**; GDP.pdf: **26.2-26.6%**; Harvey LAB (AA): **4.2% #7** (xhigh) — system card's held-out LAB reads **8.3% all-pass / 91.2% criterion-pass**, a different metric on the same family (flagged, not conflated)
- CWE-bench v1: **67.0%** (Collinear — new this pass; tops Muse Spark 1.3's 55.0%)
- ITBench SRE (AA): **38.2% #23**; CUA-bench (Vals): **14.0% #2** — low absolute on both
- Terminal-Bench-Science 0.1: **58.7%** (Anthropic announcement, ±3.5-5 pts) / Vals **47.1% #2**
- Tau3-Banking / Tau2-Bench / Claw-Eval: **no verified public score found** (still unpublished for this model)
- FACTS Search (Kaggle/Google): **86.5% #3**

Reasoning / knowledge:

- GPQA Diamond: **90.6%** #39 (Epoch AI Benchmarking Hub, max effort) — found this pass, resolving the previous gap; above the 90% frontier bar but mid-field rank (bench is saturated near the top)
- HLE: **67.7% with tools** (Anthropic announcement) / **64.4% without tools** (system card) / AA's own run **61.4% #1** of all models (max effort) — three harnesses, one direction: frontier-best
- ARC-AGI-1: **97.5-98.5%** (#1 at high effort, ARC Prize verified); ARC-AGI-2: **93.3% #3** (high) / **92.5% #5** (xhigh) / **91.7% #9** (max)
- CritPt: **31.7% #2** (max/xhigh, AA) — previous report read the raw 31.7% as a weakness; BenchLeader's rank reveals it is the #2 score of 537 configurations (the bench is simply hard — Muse Spark's 24.9% is #42)
- FrontierMath: Tiers 1-3 **91.2% #3**, Tier 4 **95.0% #6** (max); OTIS Mock AIME **100.0% #1**; ProofBench **100.0% #1** (Vals)
- LiveBench (max): global **83.2% #2**, Reasoning **92.2% #3**, Mathematics **97.1% #1**, Data Analysis **80.3% #7**, Language **86.3% #10**, Instruction Following **65.7% #41**
- LMArena (high effort): Text **1507 #2**, Hard Prompts **1533 #2**, Creative Writing **1517 #2**, Longer Queries **1524 #2**, Instruction Following **1519 #2**, Multi-turn **1498 #10**, Coding **1550 #5**
- Mystery Game Puzzles **71.0% #3**, LMCA **68.2% #1**, DTBench **98.9% #1** (Epoch); MysteryMechanism **49.5% #2** (Vals)
- ArXivMath Aug. 2026: **91.2%** no tools / **96.9%** with tools (system card)
- AA Intelligence Index v4.3.2: **57.6, #1 of 610** (max; previous report's "58, #1/211" is the same leader position on the smaller launch-era cohort)
- AA-Omniscience: index **46.4 #1**, accuracy **66.2% #2** — but hallucination rate **58.6%** (AA; BenchLeader resolves the previous ambiguity: non-hallucination is 41.4% #146, so 58.6% is genuinely the hallucination rate — a notable honesty-calibration weakness, the one soft spot in an otherwise dominant knowledge profile)
- SimpleQA Verified: **72.2% #4**; EBR-bench: **71.4% #2**; HealthBench: **68.1%** raw / **60.6%** length-adjusted / Professional **65.6%** (77.1% raw); BioMysteryBench: **89.3%** human-solvable / **50.0%** human-difficult (system card; Vals lists 79.3% #3)
- GMMLU **94.3%**, MILU **93.1%** (system card); SpatialBench Verified **72.0%**; SingleCellBench **61.2%**; medicinal chemistry **63.5%**; protein design **60.2%** (binder design **82.6%**)
- MRCR v2: no public MRCR run; AA-LCR **84.7% #5** (max); MLCR-AA **66.7% #3** — found this pass

Coding:

- SWE-bench Verified / LiveCodeBench: **no verified public score found** (second search this pass still returns nothing — remains unpublished)
- SWE-bench Pro: **89.9%**; SWE Multilingual **93.9%**; SWE Multimodal **61.4%**; FrontierSWE v2 **62.3% #2**; ProgramBench **91.2%**; DeepSWE **74.2%** (system card / Proximal)
- SciCode: **66.9% #1** of 209 (max — tops every configuration measured; effort ladder 58.6% low → 66.9% max)
- LiveBench Coding: **89.3% #2** (max/xhigh)
- LMArena WebDev: **1813 #1** (max); LMArena Coding: **1550 #5** (high)
- CursorBench 4.0: **57.8% #1** (max; effort ladder 43.7% low → 57.8% max)
- FrontierCode v1.1: **54.4%** #1 Main (medium) / **63.6%** Extended (system card)
- MirrorCode: **77.4% #1** (Epoch); ALE-Bench: **2147.4 #5** (high)
- Vals (effort not stated): IOI **95.1% #4**, Code Migration **66.7% #4**, Vibe Code Bench v1.1 **90.3% #4**, VCB 1-100 **30.4% #1**, ProgramBench **18.5% #1**
- SonarSource independent Java evaluation (544 HumanEval+MBPP tasks): pass rate **87.68%** (vs Opus 5's 88.6%), 27.5% less code, 40% fewer output tokens, total findings **-42%**, code-smell density **-21%**, vulnerability density **-9%**, BLOCKER findings down in all three categories (reliability -41%, security -53%, maintainability -20%) — but bug density **+12%** (644/mLOC) and concurrency findings **+44%**; comment density fell 10.5% → 3.1%
- Bug Hunt Bench: **41.7 fixes**; Design Arena Website: **1339** (OpenRouter)

Long context:

- AA-LCR **84.7% #5** (max) and MLCR **66.7% #3** are the public long-context reasoning numbers; GraphWalks BFS 256K-1M: **66.8%** (listed in Google's Gemini 4 Argon launch chart via BenchLM) — the previous "no retrieval data at 1M" gap is now partially filled: 1M window verified, retrieval good-not-perfect (66.8% GraphWalks, not the ≥98% MRCR bar)

### Normalized scores (1–100)

- **Tool use: 96/100.** GDPval-AA 1846 raw / 68.3% normalized #1, AA Briefcase 1807 #2, TB 4.0 59.6% #2 (AA) / 65.2% #1 (Vals) / 66.4% official, Vals TB2.1 87.6% #1, APEX-Agents 73.5% #3, LiveBench Agentic Coding 71.7% #2, Toolathlon 77.8%, CWE-bench 67.0%, Analyst Agent #4. Capped below 98 by CUA-bench 14.0%, ITBench 38.2% #23, Harvey LAB 4.2%, and the still-missing Tau3/Claw-Eval numbers. No change from 2026-09-25 — the new independent boards corroborate the top-tier agent profile.
- **Reasoning: 97/100.** Raised from 96: both caps cited on 2026-09-25 are resolved by new verified evidence — CritPt 31.7% is actually #2 of 537 (relative strength, not weakness), and GPQA Diamond now has a verified 90.6% (Epoch). Add HLE 61.4% #1 (AA max), ARC-AGI-2 93.3% #3, FrontierMath T1-3 91.2% #3 / Tier 4 95.0% #6, OTIS Mock AIME and ProofBench at 100% #1, LiveBench Reasoning 92.2% #3, AA Intelligence Index 57.6 #1/610, LMCA #1, and LMArena Elo #2 across the board. Remaining cap: the 58.6% Omniscience hallucination rate (non-hallucination 41.4% #146) — an honesty-calibration soft spot in an otherwise dominant profile.
- **Context window: 97/100.** 1M total (≥1M tier = 95-100); AA-LCR 84.7% #5 and the newly found MLCR 66.7% #3 / GraphWalks 66.8% at 256K-1M are good-but-not-98% retrieval values, so 100 is not met; 97 held.
- **Multimodal: 70/100.** Text+image in, text out only (no verified video/audio/PDF input, no non-text output) → image tier cap; confirmed at the very top of that tier: MMMU-Pro 87.7% #1, LMArena Vision 1321 #2, Chartography 89.0% with tools, OfficeQA 78.9% / OfficeQA Pro 67.7%, BenchCAD Vision2Code 0.962 with tools, biomedical image analysis 71.4%.
- **Coding: 96/100.** SciCode 66.9% #1, LiveBench Coding 89.3% #2, LMArena WebDev 1813 #1, CursorBench 57.8% #1, FrontierCode 54.4% #1, MirrorCode 77.4% #1, IOI 95.1% #4, SWE-bench Pro 89.9%, SWE Multilingual 93.9%, ProgramBench 91.2%, plus SonarSource's independent 87.68% pass rate with far fewer blockers. Capped only by missing SWE-bench Verified/LiveCodeBench entries, SWE Multimodal 61.4%, FrontierSWE 62.3%, and SonarSource's +12% per-line bug-density regression. Held at 96.
- **Cost efficiency: 62/100.** $4/$20 per 1M sits between the ~$3/$15 (~60) and ~$10/$50 (~30) methodology anchors; the very cheap $0.20 cache reads, the 40%-lower real workload cost than Opus 5, and SonarSource's independently measured 40% output-token reduction keep it slightly above the 60 anchor; the max-effort setting (11x low cost, $5.98 per Intelligence-Index run, ~662 s to first answer) is the priced-in caveat. Held at 62.
- **Overall Score: 91/100.** Half-up mean of the five quality dims (96+97+97+70+96)/5 = 91.2 → 91 — unchanged from 2026-09-25 despite the Reasoning +1; the second pass confirmed the leading position with three independent composites (#1 BenchLeader of 760, #1 AA Intelligence Index of 610, #1 BenchLM of 889) and an independent SonarSource quality win. Choose it for long-horizon autonomous work where $4/$20 pricing and max-effort latency are acceptable.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-11
- Method: public internet research, second pass over the 2026-09-25 report (Anthropic announcement + Opus 5.5 system card references, BenchLeader data as of 2026-10-11, BenchLM updated 2026-10-10, Artificial Analysis leaderboards, ARC Prize verified results, LiveBench, LMArena, Vals AI, Epoch AI Benchmarking Hub, Kaggle/Google FACTS, Collinear, plus the independent SonarSource Java evaluation); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
