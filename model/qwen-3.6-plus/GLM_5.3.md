# Qwen3.6 Plus — findings by GLM 5.3

- Source: Alibaba (`alibaba/qwen3.6-plus`)
- Date: 2026-10-12 (UTC) — second-pass re-research of the 2026-10-01 report
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.6 Plus
- **Short description:** Alibaba's spring-2026 "Plus" API tier of the Qwen3.6 generation — a hosted-only omni-input reasoning model with a 1M context window, positioned as the agentic-coding upgrade over Qwen3.5 ("Towards Real World Agents", 2026-04-02). Second pass resolves the release date (soft launch on OpenRouter ~2026-03-31, official 2026-04-02), confirms the 1M window, and surfaces two vendor-vs-independent harness conflicts (τ³, SWE-bench Verified) that pull the scores down. Sits between Qwen3.5 Plus and the 3.7/3.8 lines.
- **Provider / access:** Alibaba Model Studio / Qwen API (`qwen.ai/blog?id=qwen3.6`); OpenRouter (Alibaba Cloud Int. at $0.325/$1.95 — cheaper than Zen); OpenCode Zen `https://opencode.ai/zen/v1/messages` (`opencode/qwen3.6-plus`, Anthropic-compatible). Hosted only — no open weights.
- **Release / knowledge:** 2026-03-31 soft launch / 2026-04-02 official (BenchLeader + awesomeagents + Alibaba Cloud blog); knowledge cutoff not published.
- **IDs:** `qwen3.6-plus`; Zen `opencode/qwen3.6-plus`. No Free ID on Zen.
- **Context window:** 1M tokens by default (confirmed); output capped at **65,536 tokens** (awesomeagents); CoT reasoning always on — no toggle.
- **Modalities:** text, image, and video input, text output; reasoning (forced); tool calls; strong instruction following (IFEval 94.3% official, IFBench 75.2% #34).
- **Pricing (as of 2026-10-12):** Zen $0.50 / $3.00 per MTok in/out (cached read $0.05, cached write $0.625); OpenRouter Alibaba Cloud Int. **$0.325/$1.95**. BenchLeader blended $1.13/M. No free tier. Slow: 56 tok/s, ~102 s first answer (CoT always on inflates both).
- **Architecture:** proprietary hosted-only "Plus" tier; per lmmarketcap a **hybrid of linear attention + sparse MoE routing**; size undisclosed.

### Raw benchmarks found

> Second pass adds the full BenchLeader profile (single "not stated" config, 57.7 **#160/760**, trend 48→56→63 rising, last measured 2026-10-08). Category scores: **Instruction following 73 (best)**, Human preference 63, Long context 64, Maths 58, Knowledge 58, Reasoning 57, Multimodal 61, Agents & tools 53, Coding 52, **Composite 46 (worst)** — the weakest composite category measured in this batch.

Agent / tool use:

- **τ³-Banking CONFLICT: official 70.7% vs AA harness 20.8% #91** — a 50-point vendor-vs-independent gap; both retained, scored on the independent read
- **τ²-Bench: 97.7% #9** (AA — elite, confirmed) — the τ³ collapse suggests the 2026 banking-agent suite specifically breaks it
- Terminal-Bench 2.0: official 61.6% vs **Vals 44.9% #24** (conflict retained); TB 2.1: Vals **53.2% #54** / AA 61.4% #91; TB Hard **43.9% #37**
- **GDPval-AA: 24.6% #156** (updated from 1066 raw / 23.8%; weak — bottom quartile for remote-labor-style tasks)
- MCP Atlas 48.2%; MCP-Tasks 74.1%; Toolathlon 39.8% (official); Claw-Eval 58.8%; QwenClawBench 57.2%; ResearchClawBench 18.0%
- **Harvey Legal Agent Benchmark: 1.3% #45** (Vals — dreadful); **Legal Research 14.9% #55**; Tax Agent 32.8% #52; Finance Agent v2 40.9% #53; Vending-Bench 2 **5114.9 #28** (decent); LiveBench Agentic Coding 41.4% #59; Gert Labs 50.60%; DeepPlanning 41.5%; WideResearch 74.3% (official)

Reasoning / knowledge:

- GPQA Diamond: Epoch **88.4% #57** / AA 88.2% #88 / Vals 87.4% #37 — **every independent harness reads below the 90% bar** (the official 90.4% is the outlier); SuperGPQA 71.6% (official)
- HLE: **27.9% #160** (AA; official 28.8%) — well below the 40% reference
- **CritPt: 2.9% #170** (confirmed very weak); LMCA 33.1% #111; Chess 17.0% #101; Mystery Game 12.0% #99 (no-reasoning read); DTBench 81.9% #105
- Math: **AIME (Vals) 94.6% #13**; OTIS 93.3% #54; AIME26 95.3%, HMMT rows (official, retained); **FrontierMath T1-3 38.3% #58** (up from the first pass's 26.2% on the v2 rerun) / T4 8.3%; LiveBench Math 83.7% #57; **CL-bench 20.3% #8** (good rank)
- **Honesty remains its quiet strength: AA-Omniscience non-hallucination 65.4% #59**, hallucination rate ~34.6%, index 0.9 #120 — but accuracy 26.4% #204 is weak (honest about not knowing; doesn't know much); SimpleQA 44.1% #38
- AA Intelligence Index 27.0 #138 (weak composite); MMLU-Pro 87.7% #24; LegalBench 84.2% #35; TaxEval 74.7% #30; CorpFin 61.9% #50; CaseLaw 51.5% #48; **EMB 32.9% #52 (weak)**; MedCode 36.9% #71 (weak); MedScribe 77.0% #68; NOVA-63 57.9% (official)
- Instruction following: IFBench **75.2% #34**, LiveBench Language 75.0% #47, LiveBench IF 58.3% #59, IFEval 94.3% (official) — the IF-73 category score is earned

Coding:

- **SWE-bench Verified three-way spread: vendor 78.8% / Vals 73.4% #50 / Epoch 57.9% #30** — all retained; the independent reads cluster at 58–73%
- LiveCodeBench: official v6 **87.1%** / Vals **86.0% #24** (good rank); LiveBench Coding **78.2% #31**; SWE Multilingual 73.8% (official)
- **SciCode: 40.7% #148** (new — well below the 55% reference); **Vibe Code v1.1: 25.6% #64** (confirmed weak — open-ended/vibe coding is the weakest link); **Code Migration 11.1% #53**; **ProgramBench 0.0% #23**; ALE-Bench 670.1 #82 (weak); SWE-bench Pro 56.6% (official)
- LMArena Coding 1496 #83 / WebDev 1461 #65 (weak preference); Design Arena Website 1248

Long context:

- 1M confirmed (default window; 65,536 output cap); **AA-LCR 78.3% #106** (mid-tier); AI-Needle 68.3%, LongBench v2 62% (official — mid retrieval); MRCR/RULER still unpublished.

Multimodal:

- MMMU-Pro: Vals **84.2% #27** / AA 78.0% #74; **Vals Multimodal Index 51.5% #24**; MortgageTax 68.0% #21; **SAGE 44.9% #42** (weak grounding); no LMArena Vision row — the strong vendor vision set (MMMU 86.0%, V* 96.9%, MathVision 88.0%, VideoMMMU 84.0%) remains vendor-only. Text+image+video in, text out.

### Normalized scores (1–100)

- **Tool use: 64/100.** Lowered from 72: the independent agent rows land bottom-half — τ³ 20.8% #91 (vs the vendor's 70.7%), GDPval 24.6% #156, HLAB 1.3% #45, Legal Research 14.9% #55, Tax 32.8% #52, TB 2.0 Vals 44.9% — against the elite τ² 97.7% #9, decent TB Hard #37 and Vending #28. The vendor's "real-world agents" story does not survive the AA/Vals harnesses.
- **Reasoning: 66/100.** Lowered from 68: all independent GPQA harnesses read below the bar (87.4-88.4%), HLE 27.9% #160 and CritPt 2.9% #170 are confirmed weak, and Omniscience accuracy 26.4% #204 is poor — offset by AIME 94.6% #13, FrontierMath 38.3% #58, CL-bench #8, and the genuinely good honesty (non-hallucination 65.4% #59).
- **Context window: 90/100.** Lowered from 93: the 1M window is confirmed (and now the default), but measured retrieval is mid-tier (AA-LCR 78.3% #106, AI-Needle 68.3%) and the 65,536-token output cap plus forced-CoT latency temper it.
- **Multimodal: 74/100.** Lowered from 85: the independent rows are good-not-elite (MMMU-Pro Vals 84.2% #27, Vals MM Index 51.5% #24, MortgageTax 68.0% #21) with weak grounding (SAGE 44.9% #42) and no arena Vision row; the 85 rested on vendor-only vision numbers.
- **Coding: 70/100.** Lowered from 76: LCB 86.0% #24 and LiveBench Coding 78.2% #31 stay strong, but SWE-bench Verified's independent cluster (57.9-73.4%) sits well under the vendor's 78.8%, and SciCode 40.7% #148, Vibe 25.6% #64, Code Migration 11.1% #53, and ALE #82 confirm the open-ended/repo-scale weakness.
- **Cost efficiency: 92/100.** Held: $0.50/$3.00 on Zen, $0.325/$1.95 on OpenRouter, $0.05 cached reads — excellent price per token for a 1M-context omni model; the catches are speed (56 tok/s, 102 s first answer) and forced-CoT token overhead.
- **Overall Score: 73/100.** (64 + 66 + 90 + 74 + 70) / 5 = 72.8 → 73, down from 79. The first pass credited vendor claims that the independent harnesses (AA τ³ 20.8%, Epoch SWE-bench 57.9%, GDPval 24.6%) now contradict. Best-fit: a cheap 1M-context honest-math generalist with elite instruction following; for agentic coding and deep reasoning, the 3.7/3.8 Plus generations and Claude Sonnet-tier models clear it.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-12
- Method: public internet research, second pass over the 2026-10-01 report (BenchLeader profile as of 2026-10-08 aggregating Epoch AI Benchmarking Hub, Artificial Analysis, Vals AI, LiveBench, LMArena, Andon Labs; official Qwen3.6 blog and Alibaba Cloud "Towards Real World Agents" post; DDG-lite searches surfacing the awesomeagents hosted-only/product-details page, lmmarketcap hybrid-architecture report, agentconn/iweaver/mindstudio reviews — one query returned no results, disclosed); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
