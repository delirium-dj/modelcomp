# Qwen 3.7 Plus — findings by GLM 5.3

- Source: Alibaba Qwen, served on OpenCode Zen (`qwen3.7-plus`)
- Date: 2026-10-12 (UTC) — second-pass re-research of the 2026-09-25 report
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7 Plus
- **Short description:** Alibaba's Qwen3.7 "Plus"-tier cloud model — the **multimodal GUI-agent tier built on the Qwen3.7-Max backbone** ("unifies vision and language into a single agent foundation... screen perception, browser automation, GUI navigation, hybrid GUI+CLI agentic workflows", official launch 2026-06-03), at ~1/6 of Qwen3.7-Max's per-token price. As evaluated via its OpenCode Zen serving: a text-only 128K coding/agent endpoint. Second-pass trackers: BenchLeader **58.7, #134 of 760** (Agents & tools and Coding both 45, IF 76 its best); BenchLM **55.52, #61 of 218** (52 rows, official June-3 launch snapshot); AA II 25.2 #155.
- **Provider / access:** OpenCode Zen `opencode/qwen-3.7-plus` (Anthropic-style Messages endpoint, text-only 128K per meta.json); Qwen Cloud / Aliyun Model Studio natively (snapshot `qwen3.7-plus-2026-05-26`); OpenRouter `qwen/qwen3.7-plus` — "text and image input with text output".
- **Release / knowledge:** **2026-06-01/03** (snapshot 2026-05-26; launch blog 2026-06-03; 12 days after Qwen3.7-Max — resolves the first-pass "exact date not stated"); knowledge cutoff not stated.
- **IDs:** `opencode/qwen-3.7-plus` (meta) / `qwen3.7-plus` (Zen docs). No Zen Free ID.
- **Context window:** **Native model: 1M tokens** (BenchLeader/AA/OpenRouter listings — resolves "native window unverified"); the evaluated Zen endpoint serves 128K (meta.json, unchanged).
- **Modalities:** **Native: text + image + video input, text out** (launch coverage: "adds vision and video understanding"; first-class, not bolted-on) — the evaluated Zen endpoint exposes text in/out only (meta.json, unchanged); thinking/reasoning yes; tool calls yes; hybrid GUI+CLI agent capability is the official differentiator.
- **Pricing (as of 2026-10-12):** **price cut from $0.40/$1.60 to $0.32/$1.28 per 1M** (current OpenRouter/Alibaba; cached ~$0.04); blended $0.70/M, 54 tok/s (slower than most), ~39 s first answers, $0.217/II run.
- **Architecture:** proprietary (closed) Plus-tier Qwen on the Qwen3.7-Max language backbone with vision; parameters undisclosed.

### Raw benchmarks found

> First-pass rows were official Alibaba comparison-table numbers (native model). Second pass adds the independent AA/Epoch/Vals/LMArena rows with rank reveals (BenchLeader data as of 2026-10-12).

Agent / tool use:

- Terminal-Bench 2.1: **64.0%** official / **61.0% #92** (AA) / **52.8% #55** (Vals); Terminal-Bench Hard: **47.0% #27** (AA); **Terminal-Bench 4.0: 1.0% #119** (AA — total miss)
- OSWorld-Verified: **73.3** (official original board) vs **OSWorld-Verified 2.0: 2.8% #14** (2026.08 release — protocol split, both retained); AndroidWorld **81.0**; WebArena-Verified 55.3; ClawEval-MM Pass@3 42.6 / Avg 50.4 (official)
- CoWorkBench **65.1**; JobBench **27.6**; Agents' Last Exam **13.2 / 33.6**; RecreationBench 30.2 (official)
- **GDPval-AA: 13.5% #180 normalized** (AA — found this pass; bottom-tier); **τ³-Banking: 17.5% #103** (AA — found; very weak); **LMArena Agent −7.2 #43** (negative); APEX-Agents (AA) 22.4% #20; Harvey HLAB **0.0%** #53; Legal Research 16.4% #48; Finance Agent 38.2% #54; Tax Agent 38.7% #45
- τ²-Bench Telecom: **93.0% #47** (AA — strong); SkillsBench **54.3% #14** (Vals — top-15)
- Tau3/Tau2 via AA found; GDPval/Claw official rows unchanged; MCP-Atlas/Toolathon: no verified public score found (unchanged)

Reasoning / knowledge:

- GPQA Diamond: **90.3%** official / **90.0% #65** (AA) / 87.9% #61 (Epoch) — clears the 90% bar at mid rank
- HLE: **34.7%** official / **35.6% #109** (AA — under the 40% bar)
- **CritPt: 9.1% #118** (AA — found; weak); **AA Intelligence Index: 25.2 #155** (AA — found; weak); **AA-LCR: 73.0% #174** (found; weak rank)
- IFBench: **79.1** official / **78.0% #14** (AA — top-15, its best independent row); LMArena Hard Prompts 1474 #78; Chess 24.0% #68; Mystery Game 17.0% #72; LMCA 37.6% #97; DTBench 84.0% #93
- Maths: OTIS 93.3% #54 (not stated; 80.0% no-reasoning), FrontierMath T1-3 34.4% #63 (no-reasoning), LMArena Maths 1466 #57
- Omniscience: accuracy **22.5% #259** (weak breadth), **non-hallucination 72.3% #32** (good honesty), index 1.1; EMB 49.4% #46

Coding:

- LiveCodeBench v6: **89.6%** official; SWE-bench Pro: **57.6%** official (Claude Code harness); SWE-bench Verified: official tracker row exists (launch coverage) but no verified independent value found (unchanged)
- **SciCode: 45.5-46.1% #127-129** (AA/SciCode — found; well below the 55% reference); FrontierCode **10.2% #39**; LMArena Coding 1500 #77; Vibe Code v1.1 46.4% #55; Code Migration 12.9% #52; QwenSWEBench 59.2 (in-house); DeepSWE 1.1 **14.2%** (official — weak); NL2Repo 41.1; SWE-MM 30.0
- LMArena WebDev: no row found; SciCode official rows unchanged

Long context:

- Native 1M window (now verified); AA-LCR 73.0% #174 (weak); the evaluated Zen endpoint remains 128K; no MRCR/RULER/GraphWalks value (unchanged).

### Normalized scores (1–100)

- **Tool use: 72/100.** Lowered from 78: the independent rank reveals are decisive — GDPval 13.5% #180, τ³ 17.5% #103, LMArena Agent −7.2 (negative), OSWorld-2.0 2.8%, Harvey HLAB 0.0%, TB 4.0 1.0% — far outweighing the retained strengths (τ² 93.0% #47, Skills 54.3% #14, TB Hard 47.0% #27, AndroidWorld 81, OSWorld 73.3 original board, CoWorkBench 65.1). The official GUI-agent framing does not survive independent professional-agent boards.
- **Reasoning: 76/100.** Lowered from 84: the first pass cleared 84 on GPQA 90.3% with "no AA Index/CritPt found" — those gaps are now filled and they are weak (AA II 25.2 #155, CritPt 9.1% #118, HLE 35.6% #109, LMCA #97, AA-LCR #174). GPQA 90.0% #65 and IFBench #14 keep it from falling further; good honesty (72.3% non-hallucination) partly offsets the thin knowledge breadth.
- **Context window: 56/100.** Held (endpoint-scoped): the evaluated Zen endpoint serves 128K (100K-200K tier = 50-64). The native model's newly verified 1M window is documented above — users needing it should route to Qwen Cloud/OpenRouter.
- **Multimodal: 15/100.** Held (endpoint-scoped): the Zen endpoint is text in/out. The native model's first-class vision + video (MMMU-Pro 80.5% #45, LMArena Vision 1279 #37, Vals Multimodal 53.9% #22, SAGE 39.3% #60) is real but not exposed by this deployment.
- **Coding: 74/100.** Lowered from 80: the newly found SciCode 45.5% #127-129 (below the 55% reference), FrontierCode 10.2% #39, LMArena Coding #77, Vibe Code 46.4% #55, Code Migration 12.9% #52, and TB 4.0 1.0% offset LiveCodeBench v6 89.6% and SWE-bench Pro 57.6%; DeepSWE 14.2% remains weak.
- **Cost efficiency: 94/100.** Held: the price cut to $0.32/$1.28 with ~$0.04 cached reads (~1/6 of Qwen3.7-Max) keeps it under the ~$0.60/$2.20 (≈92) anchor; 54 tok/s is the trade.
- **Overall Score: 58.6/100.** (72 + 76 + 56 + 15 + 74) / 5 = 58.6, down from 62.6 on 2026-09-25 via the Tool/Reasoning/Coding rank corrections. Best-fit: a very cheap text-only coding/agent endpoint on Zen; the native model's real value (1M window, vision+video GUI agents) lives on Qwen Cloud/OpenRouter at $0.32/$1.28 — route there for the full capability, and prefer Qwen3.8-generation tiers for new work.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-12
- Method: public internet research, second pass over the 2026-09-25 report (Qwen's official 3.7-Plus launch blog and QwenCloud/Alibaba Cloud model pages (snapshot 2026-05-26, GUI-agent positioning), Artificial Analysis model benchmarks with rank reveals — filling the AA II/CritPt/GDPval/τ³ gaps, BenchLeader data as of 2026-10-12, BenchLM composite, OpenRouter listing, Vals AI, LMArena, Epoch hub; three successful web searches; reviews: llm-stats ×2, buildfastwithai, atlascloud hands-on, ai-tldr, aiunpacker, wavespeed, atomicbot, qianwenai, benchable, aireleasetracker); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
