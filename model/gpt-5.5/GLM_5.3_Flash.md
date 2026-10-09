# GPT-5.5 — findings by GLM 5.3 Flash

- Source: OpenAI (`gpt-5.5`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5 (deprecated flagship — superseded by GPT-5.6 Sol; no Free-tier wording)
- **Short description:** OpenAI's fully retrained agentic model released April 23, 2026, optimized for agentic coding, computer use, knowledge work and early scientific research. Now deprecated: Artificial Analysis flags it historical and points users to GPT-5.6 Sol (xhigh).
- **Provider / access:** OpenAI API (`gpt-5.5`); also OpenRouter, Vercel AI Gateway, AWS Bedrock ($5.50/$33), and 16+ routers/gateways. Not on OpenCode Zen (no Zen Free ID).
- **Release / knowledge:** Released April 23, 2026; deprecated after GPT-5.6 Sol's launch (AA continues benchmarking only the 10K-input workload). Knowledge cutoff December 2025.
- **IDs:** `gpt-5.5` (plus `gpt-5.5-pro` listed as a sibling in comparison indexes).
- **Context window:** 1,050,000 tokens (1.05M) / 128,000 max output (LLMReference; BenchLeader 1.1M); Artificial Analysis measures 922K on the xhigh endpoint. Long-context surcharge above 272K input tokens.
- **Modalities:** Text + image in; text out. Reasoning: yes — effort levels none/low/medium/high/xhigh (full effort sweep measured by BenchLeader/AA).
- **Pricing (as of 2026-10-09):** $5.00 in / $30.00 out per 1M (blended $11.25/M, BenchLeader); cache reads $0.50; Batch $2.50/$15.00. AA cost per full Intelligence Index run $2.63; output speed 88 tok/s (AA-measured, faster than most), first token 2.87s.
- **Architecture:** Proprietary, closed weights; parameters undisclosed. Decoder-only.

### Raw benchmarks found

> xhigh effort unless noted; effort sweep via BenchLeader/AA (data as of 2026-10-09).

Agent / tool use:

- Terminal-Bench: **84.7%** #1 (tbench.ai leaderboard via Epoch AI Benchmarking Hub/BenchLeader); Terminal-Bench 2.1 (AA): **84.3%** #30 at xhigh (sweep 61.0→84.3); TB2.1 (Vals): 76.4%; TB2.0 (Vals): **73.2%** #1
- Terminal-Bench Hard (AA): **60.6%** #7 at xhigh (sweep 49.2→60.6); Terminal-Bench 4.0 (AA): 14.7% #66 (recalibrated, weak)
- Tau2-Bench Telecom (AA): **93.9%** #39 at xhigh (sweep 69.3→93.9); Tau3-Banking (AA): **39.0%** #34
- MCP Atlas (Scale AI SEAL): **75.3%** #18 (fills the previously-missing MCP row)
- APEX-Agents: **55.1%** #19 (Mercor); APEX-Agents-AA: **37.7%** #6
- GDPval-AA v2.1: **42.7%** #84 (AA-normalized); old snapshot: Elo 1494 / 84.9% wins-ties (OpenAI-reported)
- OSWorld-Verified 2.0: 13.0% #9 at xhigh (weak); Remote Labor Index: **6.3%** #5; HiL-Bench: **39.7%** #7
- ITBench SRE (AA): **45.8%** #13; SkillsBench (Vals): **62.2%** #5; Finance Agent v2 (Vals): 51.8%; Tax Agent (Vals): **60.5%**; Legal Research (Vals): 40.4%; Harvey (Vals): 3.8%
- ExploitBench: **47.4%** #2; GBAEval: **53.2%** #6; Vending-Bench 2: 7523.8 #13; Analyst Agent (AA): **50.0%** #7 at xhigh
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **93.5%** #14 (AA, xhigh; sweep 77.3→93.5); Vals: 93.2% #10; earlier LLMReference card: 93.6%
- HLE: **45.8%** #45 (AA, xhigh; sweep 13.7→42.4→45.8 — fills the previously-missing HLE)
- ARC-AGI-2 (verified): **85.0%** #28 at xhigh (sweep 33.3→70.4→83.3→85.0; ARC Prize); ARC-AGI-1: **95.0%** #33; ARC-AGI-3: 0.4% #38 (high)
- FrontierMath Tier 1–3: **85.3%** #12 (Epoch v2); Tier 4: **72.5%** #18 — big updates over the April-announcement-era numbers
- AIME 2026: **100.0%** #1 (MathArena); HMMT February 2026: **98.5%** #1; MathArena Apex: **80.2%** #2; OTIS Mock AIME: 84.4% (low)
- SimpleBench: **69.0%** #15; CritPt: **27.1%** #31 (AA, xhigh); LMCA: **54.3%** #33; DTBench: **96.0%** #22
- LiveBench Reasoning: **89.7%** #14; LiveBench Math: **95.9%** #13; MMLU-Pro (Vals): **88.1%** #21
- AA-Omniscience: Index 20.5 #63, accuracy **58.0%** #28, non-hallucination **11.0%** #388 at xhigh (severe hallucination regression at high effort)
- Artificial Analysis Intelligence Index: composite now represented by BenchLeader Index **65.9 ±3.5** (#35 of 760, xhigh best; Reasoning 76, Coding 61, Agents & tools 62, Maths 70, Knowledge 65, Long context 68) — the older "38 (#42/200)" snapshot predates the index recalibration

Coding:

- SWE-bench Verified: **82.6%** #19 (Vals.ai independent harness)
- SWE-bench Pro: **58.6%** (LLMReference card)
- DeepSWE v1.1: **67.0%** #22 at xhigh (Epoch; sweep 27.0→54.0→64.4→67.0 — fills the previously-missing DeepSWE)
- SciCode: **56.1%** #37 at xhigh (SciCode via Epoch; AA 55.8% — fills the previously-missing SciCode)
- LiveCodeBench: **85.3%** #33 (Vals); Vibe Code Bench v1.1: 69.8% #33 (Vals)
- SWE Atlas: Codebase QnA **45.4%** #8, Refactoring **44.8%** #6, Test Writing **42.6%** #9 (Scale AI SEAL)
- Terminal-Bench 2.1 (coding harness): 84.3% (above); TB2.0 (Codex CLI scaffold): 82.7%
- WeirdML: **84.9%** #14 at xhigh; Surface Evolver Bench: **88.1%** #5; ALE-Bench: **1943.0** #9; GSO-Bench: 40.2% #9; FrontierCode: 43.0% #16; Code Migration: 45.2% #15; MirrorCode: 10.0% #8
- LMArena Coding: 1511 (#58); LMArena WebDev: 1513 (#52); LMArena Hard Prompts: 1499 (#34)

Long context:

- 1.05M window with a long-context surcharge above 272K input; LMCA **54.3%** #33 (Epoch) — first measured long-context number found; no MRCR/RULER retrieval verified

### Normalized scores (1–100)

- **Tool use: 90/100.** Terminal-Bench 84.7% (#1 on tbench.ai), TB2.1 84.3% (AA) and TB2.0 73.2% #1 (Vals) clear the TB ~88%-band edge across three harnesses; Tau2 Telecom 93.9% (#39) and MCP Atlas 75.3% (#18) fill previously-missing rows; APEX 55.1%; the weak TB4.0 14.7% (recalibrated) and OSWorld-2.0 13.0% cap it at the band floor.
- **Reasoning: 88/100.** GPQA 93.5% (#14), HLE 45.8% (#45, now verified), ARC-AGI-2 85.0% verified (#28), FrontierMath 85.3%/72.5% and AIME 2026 100% #1 are frontier-band; the severe AA-Omniscience non-hallucination 11.0% (#388 — ~89% hallucination rate at xhigh) and CritPt 27.1% cap it below 90.
- **Context window: 92/100.** 1.05M window (95–100 tier) with 128K output; LMCA 54.3% (#33) is measured but mid-pack; docked for the >272K surcharge and no ≥98% retrieval verification.
- **Multimodal: 65/100.** Text+image in / text out — middle of the 60–70 image-in band (BenchLeader Multimodal 63).
- **Coding: 86/100.** SWE-bench Verified 82.6% (Vals #19), DeepSWE 67.0% #22 (fills the previously-missing row, below the 74%+ frontier threshold), SciCode 56.1% (clears the 55%+ mark), LiveCodeBench 85.3% and TB2.1 84.3% — strongly corroborated, mid-frontier.
- **Cost efficiency: 45/100.** $5/$30 per 1M (blended $11.25/M) interpolates between the $3/$15→60 and $10/$50→30 anchors; $2.63 per Index run and Batch at 50% soften it slightly. No free tier.
- **Overall Score: 84/100.** Mean of the five quality dims (90 + 88 + 92 + 65 + 86) / 5 = 84.2 → 84. Best fit: a deprecated-but-verified April 2026 flagship — strong terminal/telecom agent work and verified math/coding at premium prices, but GPT-5.6 Sol or GPT-6 Astra supersede it for new work.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-09
- Method: public internet research (BenchLeader full effort-sweep tables data as of 2026-10-09, Artificial Analysis AA rows, LLMReference, Vals AI cross-checked); scores are normalized 1–100 interpretations, not official vendor scores. Second-pass enrichment: adds measured HLE 45.8%, ARC-AGI-2 85.0%, DeepSWE 67.0%, SciCode 56.1%, TB 84.7% #1, Tau2 93.9%, MCP Atlas 75.3%, FrontierMath Epoch v2, AIME 2026 100%, AA-Omniscience hallucination 11% — Tool 76→90, Reasoning 72→88, Coding 82→86, Overall 77→84.
- Future sources: add a new file next to this one, e.g. `GPT_5.6.md`, using the same headings.
