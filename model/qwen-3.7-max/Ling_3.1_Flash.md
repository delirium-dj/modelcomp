# Qwen 3.7 Max — findings by Ling 3.1 Flash

- Source: Ling 3.1 Flash (opencode/ling-3.1-flash-free) / Qwen 3.7 Max
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7 Max (Qwen3.7-Max)
- **Short description:** Alibaba's May-2026 Qwen-Max flagship — a proprietary, text-only agent model for coding, office/productivity tasks and long-horizon autonomous execution (35-hour autonomy, 1,000+ tool calls claimed); superseded by Qwen3.8-Max on 2026-08-03.
- **Provider / access:** Alibaba — Alibaba Cloud Model Studio (QwenCloud), OpenRouter, Together AI; OpenAI- and Anthropic-compatible endpoints; explicit prompt caching supported.
- **Release / knowledge:** Released 2026-05-19/21 (Alibaba Cloud Summit); deprecated by Artificial Analysis (only the default 10K-input workload is still benchmarked). Knowledge cutoff not stated in captured sources.
- **IDs:** `opencode/qwen-3.7-max` (repo meta.json); `qwen/qwen3.7-max` (OpenRouter).
- **Context window:** 1M tokens total (991,800 input non-thinking / 983,610 thinking); 131,072 max output (QwenCloud; ModelRegistry and several reviews list 65,536 — conflict kept).
- **Modalities:** Text in; text out; reasoning and tool calls. Pure text-only — no image/video/audio input.
- **Pricing (as of 2026-10):** $2.50 input / $7.50 output per 1M list (Alibaba; $0.50 implicit cache, $3.125 explicit cache write, $0.25 explicit cache read); OpenRouter $1.475/$4.425; 50% launch promo was $1.25/$3.75.
- **Architecture:** proprietary; closed weights (no open-weight release for the Max tier in this generation).

### Raw benchmarks found

Artificial Analysis (via OpenRouter) unless noted:

Agent / tool use:

- MCP-Atlas: **76.4%**.
- τ²-Bench Telecom: **94.7%**.
- Terminal-Bench 2.0 (Terminus): **69.7%** (AI/TLDR); Terminal-Bench Hard: **50.8%** (AA).
- AA-LCR: **79.0%**; CritPt: **13.4%**; GDPval-AA: **30.7** (as listed by AA); Agents Arena Elos: 1146–1294 (Design Arena).
- Tau3-Banking: no verified public score found.
- MCP-Mark: **60.8%** (launch leader); BFCL-V4: **75.0%**; CoWorkBench: **67.2%**; ClawEval: **65.2%**; QwenClawBench: **64.3%** (vendor) / **70.7%** (Hermes harness); SkillsBench: **59.2%**; SpreadSheetBench-v1: **87.0%**; VITA-Bench: **47.9%**; AutomationBench-AA: **23.0%**; AA-Analyst Agent: **18.8%**; Terminal-Bench 4.0 (AA rerun): **1.5%**; LMArena Agent: **-5.5%** (#42/52); YC-Bench: $2.08M revenue / 237 tasks (official simulation); Kernel Bench L3: **1.98x median speedup / 96%** (launch leader); 35-hour autonomous kernel run: 1,158 tool calls, 432 evaluations, 10.0x geometric-mean speedup on unseen T-Head ZW-M890 PPU (GLM-5.1 7.3x, K2.6 5.0x, DS-V4-Pro 3.3x, Qwen3.6-Plus 1.1x)

Reasoning / knowledge:

- GPQA Diamond: **92.3%** (AA) / 92.4% (AI/TLDR) / 90.9±2.0% (Epoch AI).
- HLE: **40.5%** (AA) / 41.4% (AI/TLDR).
- OTIS Mock AIME 2024–2025: **95.6±3.1%** (Epoch AI).
- FrontierMath Tiers 1–3: **64.6±2.8%**; Tier 4: **34.1±7.5%** (Epoch AI).
- SimpleQA Verified: **55.8±1.6%** (Epoch AI); AA-Omniscience Accuracy **31.1%** / Non-Hallucination Rate **74.4%**.
- AA Intelligence Index: **56.6** at launch (v4.0, #5 overall, highest-placed Chinese model then); **29** on AA's current page (Index version changed; model deprecated; 29.5 per ModelCap/17NAS, #108/205).
- LiveCodeBench: **91.6%** (launch table); HMMT 2026 Feb: **97.1%** (launch leader); IMOAnswerBench: **90.0%** (launch leader); Apex: **44.5%** (launch leader); MMLU-Pro: **89.6%**; MMLU-Redux: **95.0%**; SuperGPQA: **73.6%** (launch leader); IFBench: **79.1%** (launch leader); MRCR-v2 128K: **90.4%** (launch leader); Chess Puzzles: **19%**; Mystery Game Puzzles: **32%**; BullshitBench v2: **72%**.
- LMArena (2026-10): **1475.7±9.7** (#23, 3,932 votes; preview-era #13); coding Elo **1524** (#28); Chinese **1528** (#22); software & IT **1514** (#10); creative writing 1439 (#56).
- Hallucination rate **22.9%** (lowest among frontier models at launch) — with an abstention caveat: attempt rate **48.0%** (lowest of the comparison set, per Officechai's analysis), so the low error rate partly reflects refusal.

Coding:

- SWE-bench Verified: **80.4%** (AI/TLDR) / 77.3±1.9% (Epoch AI).
- SWE-bench Pro: **60.6%**.
- SciCode: **49.5%** (AA) / **53.5%** (vendor/ModelRegistry) — conflict kept; AA Coding Index: **66.0**; AA Agentic Index: **22.5** (current page; 66.6 launch-era per Binaryverse).
- DeepSWE: no verified public score found. LiveCodeBench: **91.6%** (launch table). Vibe Code Bench 1.1: **47.7%** (OpenHands, Vals). Terminal-Bench 2.1: **74.5%** (AA run, #65/240) / **61.x%** (Vals Terminus-2) — conflict kept. Code Migration: **13.07** (Vals). NL2Repo: **47.2%** (launch leader, via Claude Code). Kernel Bench L3: **1.98x / 96%**.

Long context:

- MRCR-v2 128K: **90.4%** (launch-table leader); AA-LCR: **79.0%**; third-party reviewers measured solid recall at the 800K mark; no 1M-point MRCR/RULER/GraphWalks read; 1M window with claimed 35-hour / 1,000+-tool-call autonomy.

Multimodal:

- None — text-only model (no image/video/audio input).

### Normalized scores (1–100)

- **Tool use: 74/100.** MCP-Atlas 76.4%, τ²-Telecom 94.7%, MCP-Mark 60.8%, BFCL-V4 75.0%, SpreadSheetBench-v1 87.0% and Kernel Bench L3 1.98x/96% are frontier-tier, but Terminal-Bench Hard 50.8% is mid-band, CritPt 13.4% is weak, and the current-version reads cap the score: AutomationBench-AA 23.0%, AA-Analyst Agent 18.8%, VITA-Bench 47.9%, LMArena Agent -5.5% and the TB 4.0 AA rerun at 1.5%; no τ³ evidence.
- **Reasoning: 79/100.** GPQA 92.3–92.4%, HLE 40.5–41.4%, AIME 95.6%, LiveCodeBench 91.6%, HMMT 2026 Feb 97.1%, IMOAnswerBench 90.0%, MMLU-Redux 95.0% and Apex 44.5% are frontier-tier (several launch-table leads); FrontierMath T4 34.1%, CritPt 13.4%, Chess Puzzles 19%, Mystery Game Puzzles 32% and the deprecated/changed AA Index (56.6 → 29.5) cap it. Revised 77→79 on the LiveCodeBench/HMMT/IMOAnswerBench fills.
- **Context window: 95/100.** 1M tokens confirmed (991K usable input), at the ≥1M anchor.
- **Multimodal: 15/100.** Text-only model — no image, video, audio, or PDF input.
- **Coding: 77/100.** SWE-bench Verified 77.3–80.4%, SWE-Multilingual 78.3%, LiveCodeBench 91.6%, Terminal-Bench 2.0 69.7% (2.1: 74.5% AA / 61.x% Vals), NL2Repo 47.2% and Kernel Bench L3 1.98x/96% support; SWE-bench Pro 60.6%, SciCode 49.5–53.5%, Vibe Code Bench 47.7%, Code Migration 13.07 and the TB 4.0 AA rerun (1.5%) lag. Revised 75→77 on the LiveCodeBench 91.6% and TB 2.1 fills.
- **Cost efficiency: 86/100.** $1.475/$4.425 per 1M (OpenRouter) undercuts the $3/$15 anchor substantially; list $2.50/$7.50 with $0.50 cached input ($0.25 cache read, 90% discount), $1.60 blended and $1.15 per AA Intelligence Index task — the Atomic Bot head-to-head cost $1.32 vs Claude Opus 4.7's $12.15 and GPT-5.5's $2.85 on the same task.
- **Overall Score: 68.0/100.** (74+79+95+15+77)/5 = 68.0 — mean of the five quality dimensions; a strong text-only model whose frontier-grade reasoning, coding and 1M context are offset by the text-only multimodal penalty and mid-tier hard-benchmark evidence. Revised 67.2→68.0 on the Reasoning and Coding revisions.

---

## Update 2026-10-11 (deep second pass, 3 independent searches)

**Revised: Reasoning 77→79, Coding 75→77, Overall 67.2→68.0** — Tool 74 / Context 95 / Multimodal 15 / Cost 86 unchanged. This pass added Alibaba's full launch comparison table (vs Opus-4.6 Max, K2.6 Thinking, GLM-5.1 Thinking, DS-V4-Pro Max, Qwen3.6-Plus), AA/ModelCap/17NAS current reads, LMArena boards, Vals rows and three independent reviews (Atomic Bot, Binaryverse, Codersera/FelloAI):

- **Launch-table fills (vendor-reported, harness-documented):** LiveCodeBench **91.6%**, HMMT 2026 Feb **97.1%**, IMOAnswerBench **90.0%**, Apex **44.5%**, MMLU-Redux **95.0%**, SuperGPQA **73.6%**, IFBench **79.1%**, MRCR-v2 128K **90.4%**, MCP-Mark **60.8%**, BFCL-V4 **75.0%**, CoWorkBench **67.2%**, ClawEval **65.2%**, SkillsBench **59.2%**, SpreadSheetBench-v1 **87.0%**, VITA-Bench **47.9%**, NL2Repo **47.2%**, SciCode **53.5%** (vs AA's 49.5%), Kernel Bench L3 **1.98x/96%**, QwenWebDev 1568, QwenSVG 1608, QwenWorldBench **57.3%**, HLE w/tools **53.5%**, WMT24++ **85.8%**, MAXIFE **89.2%**, PolyMATH **86.5%**.
- **Current/independent reads:** AA Intelligence Index **29.5** (#108/205, ModelCap/17NAS; model deprecated by AA — only the default 10K-input workload is still benchmarked); Terminal-Bench 2.1 **74.5%** (AA run, #65/240) vs **61.x%** (Vals Terminus-2) — conflict kept; TB 4.0 AA rerun **1.5%**; AutomationBench-AA **23.0%**; AA-Analyst Agent **18.8%**; AA Agentic Index **22.5** (current) vs **66.6** (launch-era per Binaryverse) — conflict kept; LMArena Agent **-5.5%** (#42/52); Vibe Code Bench 1.1 **47.7%** (OpenHands); Code Migration **13.07** (Vals); Finance Agent 2 **47.8%** (Vals); Harvey Legal Agent **1.67**; Chess Puzzles **19%**; Mystery Game Puzzles **32%**; BullshitBench v2 **72%**.
- **LMArena (2026-10-11):** **1475.7±9.7** (#23, 3,932 votes; preview-era #13 at 1475); coding Elo **1524** (#28); Chinese **1528** (#22); software & IT **1514** (#10); expert 1506; hard prompts 1496; creative writing 1439 (#56).
- **Long-horizon evidence:** 35-hour autonomous kernel optimization on unseen T-Head ZW-M890 PPU — 1,158 tool calls, 432 kernel evaluations, **10.0x geometric-mean speedup** (GLM-5.1 7.3x, K2.6 5.0x, DS-V4-Pro 3.3x, Qwen3.6-Plus 1.1x); YC-Bench simulation $2.08M revenue / 237 tasks; reward-hacking monitoring (80+ RL hours, 1,618 cheating cases, 13 new heuristic rules); Atomic Bot Tetris head-to-head: **$1.32 total, +56% improvement** vs Opus 4.7's $12.15/+28% and GPT-5.5's $2.85/+7%.
- **Caveats:** the 22.9% hallucination rate (lowest at launch) is partly an abstention artifact — attempt rate **48.0%**, the lowest of the comparison set (Officechai analysis); VectorWire's capability gaps: agentic 34.4% and math 36.2% behind the respective leaders, coding 19.9% behind; max output listed as 131,072 (QwenCloud) vs 65,536 (ModelRegistry/reviews) — conflict kept; the 3.7 generation never got open weights (Qwen3.7-Plus Apache-2.0 was expected June 2026; the open-weight play moved to Qwen 3.8 in August).
- Still open: DeepSWE, a 1M-point MRCR/RULER read, τ³-Banking, the knowledge cutoff, and an independent (non-AA) TB 4.0 run.
- Score impact: Reasoning 77→79 (LiveCodeBench 91.6%, HMMT 97.1%, IMOAnswerBench 90.0%, MMLU-Redux 95.0%, Apex 44.5% fills); Coding 75→77 (LiveCodeBench 91.6%, TB 2.1 74.5% AA, SWE-Multilingual 78.3%, Kernel Bench leader); Overall 67.2→68.0. Tool 74 stands — the launch table's agentic leads (MCP-Atlas 76.4%, MCP-Mark 60.8%) are offset by the current-version caps (AutomationBench-AA 23.0%, LMArena Agent -5.5%, TB 4.0 rerun 1.5%); Context 95 stands (1M + MRCR-v2 128K 90.4% leader); Cost 86 stands ($1.15/AA Index task, $1.60 blended, $0.25 cache reads).

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-03 (updated 2026-10-11)
- Method: public internet research (Qwen launch blog, Artificial Analysis, ModelCap, 17NAS, ModelRegistry, BenchmarkRegistry, VectorWire, Atomic Bot, Binaryverse, Codersera, FelloAI, TheRouter, Tabbit, LMArena, OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
