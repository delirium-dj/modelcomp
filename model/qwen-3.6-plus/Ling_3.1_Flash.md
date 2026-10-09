# Qwen 3.6 Plus — findings by Ling 3.1 Flash

- Source: Alibaba (`opencode/qwen-3.6-plus`; snapshot `qwen3.6-plus-2026-04-02`, Alibaba Cloud Model Studio / DashScope)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.6 Plus
- **Short description:** Alibaba's April-2026 multimodal agentic Plus model ("Towards Real World Agents") — hybrid architecture (efficient linear attention + sparse MoE routing), 1M context, thinking mode with `preserve_thinking`; strong at SWE-bench Verified (78.8%), LiveCodeBench v6 (87.1%) and τ²-bench (97.7%), weaker on Terminal-Bench 2.x (~61%) and HLE (28.8% no-tools).
- **Provider / access:** Alibaba Cloud Model Studio (DashScope) — Beijing, Frankfurt, US-Virginia, Tokyo, Hong Kong endpoints; OpenAI-compatible APIs; OpenRouter; function calling, structured outputs, web search, prefix completion, context caching, batch inference; fine-tuning unsupported.
- **Release / knowledge:** 2026-04-02; knowledge cutoff not stated in the launch materials reviewed.
- **IDs:** `opencode/qwen-3.6-plus`.
- **Context window:** 1M tokens (≤256K and 256K–1M pricing tiers). NOTE: the repo `meta.json` stub says "128K total" — stale; Alibaba docs report 1M.
- **Modalities:** image, text, video in; text out (native vision-language; visual coding from UI screenshots, video understanding). NOTE: `meta.json` says "Text in/out" — stale.
- **Pricing (as of 2026-10-02):** $0.50/$3.00 per 1M input/output for ≤256K requests (international list; thinking-mode output also $3.00), $2.00/$6.00 for 256K–1M; explicit cache creation $0.625/M, cache read $0.05/M; batch file $0.138/$0.825; China/other regions $0.276/$1.651 (≤256K), $1.101/$6.602 (>256K); discounted reseller rate $0.325/$1.95.
- **Architecture:** hybrid MoE (linear attention + sparse MoE routing); parameters undisclosed.

### Raw benchmarks found

Agent / tool use (Qwen official table unless noted):

- τ²-bench: **97.7%** (#7 of 321, Sophon) — exceptional
- MCP Atlas: **74.1%** (per the detailed methodology writeup; MCPMark: **48.2%**; MCP-Tasks: **74.1%** per BenchLM — naming conflict across trackers flagged)
- WideResearch: **74.3%**; τ³-bench: **70.7%**
- Claw-Eval: **58.8%**; QwenClawBench: **57.2%** (internal real-user-distribution Claw agent benchmark)
- VITA-Bench: **44.3%**; DeepPlanning: **41.5%**; Toolathlon: **39.8%**
- GDPval-AA: **1066 Elo** / **28.3%** (AA's own run) — mid-tier
- Gert Labs: **50.60%**; ResearchClawBench: **18.0%**; SkillsBench: **45.7%** (#10 of 12); SaaSBench: **6.0%** (#8 of 8); SaaS-Bench: **29.9%** (#6 of 15)
- Terminal-Bench 2.0: **61.6%** (Harbor/Terminus-2, 3h timeout, avg of 5 runs; #15 of 68); Terminal-Bench 2.1: **61.4%** (#51 of 182) / Vals: **53.2%**; Terminal-Bench Hard: **43.9%**
- Agents' Last Exam / GDPval-AA v2: no verified public score found

Reasoning / knowledge:

- GPQA: **90.4%** (official) / AA-GPQA Diamond: **88.2%** / Vals: **87.4%**
- Humanity's Last Exam (no tools): **28.8%** (official; AA: 27.8%; essentially flat vs Qwen 3.5-397B-A17B's 28.7%); **HLE w/ tool: 50.6%**
- SuperGPQA: **71.6%**; MMLU-Pro: **88.5%** (Vals: 87.7%); MMLU-Redux: **94.5%**; C-Eval: **93.3%**
- FrontierMath Tier 4: **41%** (AA)
- AA Intelligence Index: **27.0** (new TB4.0/AutomationBench-heavy revision); AA-Omniscience: Index **0.9%**, Accuracy **26.4%**, Hallucination Rate **34.6%** — very weak
- AIME 2026 (full I & II): reported by Qwen but figure not captured

Coding:

- SWE-bench Verified: **78.8%** (#18-19; vs GPT-5.4 xhigh 78.2%, Opus 4.6 80.8%, Gemini 3.1 Pro 80.6%); SWE-bench (Vals): **73.4%**
- SWE-bench Pro: **56.6%** (#34 of 49); SWE Multilingual: **73.8%** (#22 of 46)
- LiveCodeBench v6: **87.1%** (#13 of 49) / Vals: **86.0%** (#18 of 123; field leader Fable 5: 89.8%)
- AA Coding Index: **54.5%**; AA-SciCode: **40.7–41.4%** (#5 of 12)
- Vibe Code Bench: **25.56%** (#36 of 71); NL2Repo: **37.9%**; OpenHands Index: **52.9%** (#12 of 26)
- PBT-Bench: **78.0%** (#2 of 8); CUDABeaver: **23.0%** (#2 of 6); PerfCodeBench: **56.5%**; WebDev Arena: **1460** (#46); ALE-Bench: **670**; Code Migration: **11.1%**; FrontierSWE: **13.82**; Kernel Bench L3: **48.0%**
- DeepSWE: no verified public score found

Long context / multimodal:

- 1M-token window; no MRCR / RULER / LCR score published
- MMMU: **86.0%**; MMMU-Pro: **78.8%**; SimpleVQA: **67.3%**; QwenWebBench (internal front-end codegen): **1501.7** BT/Elo

### Normalized scores (1–100)

- **Tool use: 71/100.** τ²-bench 97.7% (#7 of 321), MCP Atlas 74.1% and WideResearch 74.3% are strong, but Terminal-Bench 2.1 61.4% (just above the mid band, under the 88% frontier bar), GDPval-AA 1066 Elo (mid-tier), Toolathlon 39.8% and SaaSBench 6.0% cap the score.
- **Reasoning: 73/100.** GPQA 90.4% (official) clears the 90%+ frontier bar and HLE-with-tools 50.6% clears the 40%+ bar, but HLE no-tools 28.8%, the AA Intelligence Index of 27.0, FrontierMath T4 41% and AA-Omniscience (0.9% index, 26.4% accuracy) cap the score; MMLU-Pro 88.5% supports.
- **Context window: 95/100.** 1M-token window with `preserve_thinking` for multi-turn agent sessions; no ≥98% retrieval-at-512K+ figure, so 100 is not justified.
- **Multimodal: 82/100.** image/text/video in with text out — the +video/PDF band (75–90), with MMMU 86.0% and MMMU-Pro 78.8% near the top of the band.
- **Coding: 74/100.** SWE-bench Verified 78.8% and LiveCodeBench v6 87.1% are strong, but Terminal-Bench 2.1 61.4% (under the 85% bar), AA-SciCode 40.7–41.4% (under the 55% reference), AA Coding Index 54.5% (under the 70% reference) and Vibe Code Bench 25.6% cap the score; SWE-bench Pro 56.6% is mid-tier and DeepSWE is unpublished.
- **Cost efficiency: 92/100.** $0.50/$3.00 per 1M (≤256K international list; $0.276/$1.651 in other regions, $0.325/$1.95 discounted) interpolates to ~92 between the ~97 ($0.10/$0.20) and ~88 ($1.25/$4.25) anchors; the 256K–1M tier ($2/$6) is the caveat.
- **Overall Score: 79/100.** (71+73+95+82+74)/5 = 79.0 — a cheap multimodal agent with elite τ²-bench (97.7%) and strong SWE-bench Verified/LiveCodeBench, held down by mid-tier Terminal-Bench 2.x (~61%), weak GDPval-AA (1066) and a low composite intelligence index (27.0).

---

## Update 2026-10-08 (6-day re-research)

BenchmarkList, Shawn Hack and AA's comparison pages filled the gaps; **no score changes** — the new rows corroborate the existing bands:

- **AA-LCR 78.3%** (AA's own run) — fills the "no MRCR/RULER/LCR score" gap; good but not ≥98%, so Context 95 stands. CritPt 2.9% (AA) and IFBench 75.2% (AA) also fill.
- New agentic rows (BenchmarkList): Agents' Last Exam **8.6%** (rank 38 of 41 — very weak, a new cap), OSWorld-Verified **62.5%** (rank 4 of 4, small field), AndroidWorld **67.2%** (rank 12 of 22), ScreenSpot-Pro **68.2%** (rank 22 of 59), MCPMark **48.2%** (rank 10 of 41), VitaBench **42.8%** (rank 5 of 25), STT-Arena **31.4%** (rank 6 of 24), ClawProBench **60.2** (rank 14 of 48), Claw-Eval-Live **50.5%** (rank 10 of 13), Workspace-Bench **55.6%** (rank 9 of 16), GDPval-AA **1137** (rank 86 of 352), τ³-Banking **20.8%** (rank 55 of 176), AutomationBench **4.3%** (rank 40 of 48 — very weak), PinchBench **63.9%** (rank 66 of 73), plus long-tail rows (Vending-Bench 2 5114.87, RankJudge 1671, Hack-Verifiable TextArena 22.7%, AutoBench 3.07, CalBench 0.53, SearchGEO 14.4%, ATRBench 20.3%, EgoBench 36.6%, InterLV-Search 37.5%, Long-Horizon Terminal-Bench 0.31, SGR-Bench 36.9%, TERMS-Bench 60.4%, ChildAgentEval 0.37, AgentWorldBench 50.81, SkillGenBench 13.8%, ClawEval-MM 49.1%, AutoLab 0.27).
- Coding-side fills: SciCode **41.4%** (rank 5 of 12 — small field, under the 55% reference), SWE-bench Verified **78.8%** (rank 19 of 50) with a second read at **73.4%** (rank 38 of 72, different harness), LiveCodeBench **86.0%** (rank 18 of 123) / **87.1%** (rank 14 of 50), SWE-bench Pro **56.6%** (rank 40 of 58), SWE-bench Multilingual **73.8%** (rank 25 of 49), OpenHands Index **52.9%** (rank 12 of 26), Code Migration **11.1%** (rank 27 of 33), FrontierSWE v1 **13.82** (rank 14 of 15), Kernel Bench L3 **48.0%** (rank 7 of 7), CUDABeaver **23.0%** (rank 2 of 6), PBT-Bench **78.0%** (rank 2 of 8), EvoCode-Bench **29.4%**, PDEAgent-Bench **23.4%**, RoadmapBench **16.5%**, Cookie-Bench **75.2**.
- Independent confirmation (Shawn Hack / Model Beat): SWE-bench 78.8% (#8 of 39), Terminal-Bench 61.6% (#13 of 58), Arena Elo 1470 (#17 of 51), LiveCodeBench 86% (#21 of 62), MMLU-Pro 87.7% (#24 of 61), MMMU 84.2% (#25 of 51), GPQA 88.2% (#50 of 95), HLE 27.8% (#68 of 97).
- Score impact: none — ALE 8.6%, AutomationBench 4.3% and τ³-Banking 20.8% confirm the Tool-use caps; AA-LCR 78.3% confirms Context 95; SciCode 41.4% and the second SWE-bench Verified read (73.4%) confirm the Coding caps. Tool 71 / Reasoning 73 / Context 95 / Multimodal 82 / Coding 74 / Cost 92, Overall 79 all stand.

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-02 (updated 2026-10-08)
- Method: public internet research (Alibaba Cloud Model Studio docs, Qwen launch blog + methodology, BenchLM, BenchmarkList, Sophon, Together, Vector Wire); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3_6_Plus.md`, using the same headings.
