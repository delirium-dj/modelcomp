# Nemotron 3 Ultra (free) — findings by Ling 3.1 Flash

- Source: Ling 3.1 Flash (opencode/ling-3.1-flash-free) / Nemotron 3 Ultra (free)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **ACCESS NOTE:** This entry tracks the **free** deployment — NVIDIA's free API endpoint (build.nvidia.com / NVIDIA NIM) and the OpenRouter `nvidia/nemotron-3-ultra-550b-a55b:free` row ($0.00/$0.00, rate-limited; NVIDIA-provider uptime 78.05% on OpenRouter). Paid hosted routes exist (DeepInfra $0.50/$2.20, Venice $0.625/$3.13, BaseTen $0.60/$2.40; several hosts also carry $0 rows). Quality scores are identical across routes — same weights.

## Model card

- **Name:** NVIDIA Nemotron 3 Ultra (550B-A55B) — final and best model of the Nemotron 3 family (Nano: 3.2B active/31.6B total; Super; Ultra)
- **Short description:** NVIDIA's June 2026 open frontier-reasoning and orchestration model — a hybrid Transformer-Mamba MoE (550B total / 55B active) with 1M context, built for agentic reasoning, coding, planning, and tool calling; 5.9×/4.8×/1.6× higher inference throughput than GLM-5.1-754B-A40B / Kimi-K2.6-1T-A32B / Qwen-3.5-397B-17B (8K-in/64K-out setting, vendor claim).
- **Provider / access:** NVIDIA (free endpoint via build.nvidia.com / NGC / NIM containers), OpenRouter (`:free` row), DeepInfra/Together/Crusoe/Nebius (free rows), DeepInfra/Venice/BaseTen (paid rows); open weights (NGC catalog, HF BF16).
- **Release / knowledge:** 2026-06-04 (research page; benchable 2026-06-03). Knowledge cutoff not captured.
- **IDs:** `nvidia/nemotron-3-ultra-550b-a55b:free` (OpenRouter); repo folder `nemotron-3-ultra-free`.
- **Context window:** 1,000,000 tokens (free endpoint: 65,536 max completion; some provider rows cap at 262K).
- **Modalities:** Text in, text out (no vision).
- **Pricing (as of 2026-10):** Free on NVIDIA's endpoint and several host rows; paid hosted from $0.50/$2.20 per 1M (DeepInfra, cached $0.10).
- **Architecture:** Hybrid Transformer-Mamba MoE — 550B total / 55B active parameters.
- **Performance:** 16 t/s, 2.63s latency (NVIDIA provider on OpenRouter); SOTA-on-RULER-at-1M claim (measured: RULER 1M 94.7, below).

### Raw benchmarks found

**NVIDIA NGC benchmark table (N-3-Ultra 550B-A55B vs MiniMax-2.7 / GLM-5.1 / Kimi-K2.6 / Qwen-3.5 / DS-v4-Pro / DS-v4-Flash):**
- Agentic: Terminal-Bench 2.1 **56.4** (GLM-5.1 59.3, Kimi-K2.6 67.2, Qwen-3.5 49.9, DS-v4-Pro 49.2, DS-v4-Flash 54.2); GDPVal **46.7**; SWE-bench Verified **71.9** (DS-v4-Pro 74.0, GLM-5.1 73.8, DS-v4-Flash 72.4, MiniMax-2.7 72.2, Qwen-3.5 69.9, Kimi 69.5); SWE-bench Multilingual **67.7**; ProfBench (Search) **56.0**; PinchBench **90.0** (Kimi 90.2, DS-v4-Flash 91.3); TauBench V3 — Airline **81.5**, Retail **86.4**, Telecom **92.9**, Banking **22.6**, average **70.9** (DS-v4-Flash 73.7, Kimi 72.4); BrowseComp **44.4**; Vals.ai Financial Agent 1.1 — without search **60.1**, with search **53.7**.
- Reasoning & knowledge: IOI 2025 **570.0** (Kimi 585.0, DS-v4-Pro 580.1); LiveCodeBench v6 **89.0** (DS-v4-Pro 92.5, Kimi 90.2, DS-v4-Flash 90.9, GLM-5.1 85.7); IMOAnswerBench no tools **88.6** / with tools **92.3**; Apex-Shortlist no tools **74.9** / with tools **84.8**; GPQA (no tools) **87.0**; SciCode (subtask) **44.6**; HLE no tools **26.7** / with tools **37.4**; CritPt **3.1**; MMLU-Pro **86.8**; OmniScience accuracy **24.1** / non-hallucination **78.7**.
- Chat & instruction following: IFBench (prompt loose) **81.7**; Multi-Challenge **63.8**.
- Long context: AA-LCR **65.4**; RULER (1M) **94.7** (DS-v4-Pro 94.2, Qwen-3.5 90.1, DS-v4-Flash 87.7); LongBench v2 (≤1M) **61.9**.
- Multilingual: MMLU-ProX **83.0**; WMT24++ **83.7**.

**Artificial Analysis (free endpoint, Reasoning):** Intelligence Index **22.9**, Coding Index **49.3**, Agentic Index **20.1**; GPQA Diamond **86.7%**; HLE **28.4%**; IFBench **81.4%**; τ²-Bench Telecom **83.3%**; AA-LCR **79.3%**; GDPval-AA **25.0%**; CritPt **3.1%**; SciCode **40.3%**; Terminal-Bench Hard **36.4%**; AA-Omniscience accuracy **22.6%** / non-hallucination **70.3%**.

**Design Arena (OpenRouter):** 3D 1147, Asciiart 1104, Code Categories 1150, Data Viz 1150, Game Dev 1151, SVG 1070, UI Component 1147, Website 1146.

## Scores

- **Tool use: 69/100.** TauBench V3 average 70.9 (Telecom 92.9, Retail 86.4, Airline 81.5; Banking 22.6 drags), PinchBench 90.0, ProfBench 56.0, BrowseComp 44.4, Vals Financial Agent 60.1/53.7; AA Agentic Index 20.1 and τ²-Telecom 83.3%. Strong but not frontier-leading.
- **Reasoning: 69/100.** GPQA 87.0 (no tools, NGC) / 86.7% (AA), IMOAnswerBench 88.6/92.3, Apex-Shortlist 74.9/84.8, IOI 2025 570.0, MMLU-Pro 86.8; drags: HLE 26.7/37.4 (AA 28.4%), CritPt 3.1, OmniScience 24.1, AA Index 22.9.
- **Context window: 93/100.** 1M tokens with measured RULER 94.7 at 1M (ahead of Qwen-3.5's 90.1, behind DS-v4-Pro's 94.2), AA-LCR 65.4/79.3%, LongBench v2 61.9 — real 1M-scale retrieval evidence.
- **Multimodal: 15/100.** Text-only model.
- **Coding: 71/100.** LiveCodeBench v6 89.0, SWE-bench Verified 71.9, SWE-bench Multilingual 67.7, Terminal-Bench 2.1 56.4 (NGC) / Terminal-Bench Hard 36.4% (AA), SciCode 44.6/40.3, AA Coding Index 49.3. Strong, behind the coding leaders (DS-v4-Pro 92.5 LiveCodeBench, Kimi 90.2).
- **Cost efficiency: 100/100.** Free on NVIDIA's endpoint and multiple host rows (rate-limited; 78.05% NVIDIA-provider uptime on OpenRouter); paid hosted from $0.50/$2.20.
- **Overall Score: 63.4/100.** Mean of Tool use 69, Reasoning 69, Context window 93, Multimodal 15, Coding 71 = 63.4 (Cost efficiency excluded per methodology).

> **Gap vs folder average (69.7): −6.3.** The text-only Multimodal score (15) is the main driver; on the five quality dimensions the model is solidly upper-mid. The RULER-94.7-at-1M and LiveCodeBench-89.0 results are fully credited; the free-tier reliability (78% uptime, rate limits) is noted in Cost.

## Notes

- Verification trail: NVIDIA Research Nemotron 3 Ultra page (550B/55B, hybrid Transformer-Mamba MoE, 1M context, RULER claim, throughput comparisons), NGC catalog benchmark table (full comparison grid above), OpenRouter `:free` listing (AA measurements, Design Arena, provider rows, 65,536 max completion), build.nvidia.com (free endpoint availability), benchable/ModelsAtlas (provider pricing rows; benchable's auto-generated proxy evals — Coding 22.9%, Mathematics 15.0% etc. — were excluded as low-quality proxy scores, not standard benchmark runs).
- Known conflicts: HLE 26.7% (NGC, no tools) vs 28.4% (AA) — different runs; context 1M (NVIDIA) vs 262K caps on some provider rows; max completion 65,536 on the free endpoint.
- Open questions: the free endpoint's quota and rate limits (not published); whether paid hosted routes serve the same weights without modification; Nemotron 3 family's closed-vs-open license terms for the Ultra weights.
- Future sources: NVIDIA's Nemotron 4 family, AA full measurement set, third-party harness runs.

---

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-03
- Cross-model signed log: `model-findings.md` — append one line: `2026-10-03 Ling 3.1 Flash Nemotron 3 Ultra (free) Overall=63.4 (Tool=69 Reasoning=69 Context=93 Multimodal=15 Coding=71 Cost=100; free NVIDIA endpoint; RULER 94.7@1M; LiveCodeBench 89.0)`
