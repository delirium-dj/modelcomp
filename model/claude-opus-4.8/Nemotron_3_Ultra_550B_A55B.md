# Claude Opus 4.8 — findings by Nemotron 3 Ultra 550B A55B

- Source: Anthropic (`claude-opus-4-8`)
- Date: 2026-11-08 (UTC) — **Deep second-pass re-research (original: 2026-10-19)**
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.8 (Max effort tier) — **LEGACY SKU**
- **Short description:** Anthropic's May 2026 flagship Opus — hybrid-reasoning agentic coder and computer-use model with 1M context window; **now two generations behind current lineup** (Opus 5.5 → Opus 5 → Opus 4.8). Listed under "Legacy models (still available)" on Anthropic's models overview. Retirement not sooner than 2027-05-28. SWE-bench Verified 88.6%, hallucination rate 39.3% (2nd best in research batch). BenchLM: 69.63/100, #16/1009.
- **Provider / access:** Anthropic Messages API (`claude-opus-4-8`), AWS Bedrock, Google Cloud Vertex AI, Microsoft Foundry, AWS, OpenCode Zen (`opencode/claude-opus-4-8` at $5/$25/$0.50). Anthropic Messages API (not Chat Completions).
- **Release / knowledge:** 2026-05-28 release; **reliable knowledge/training cutoff: January 2026** (stale vs current Jun 2026 lineup). Retirement not sooner than 2027-05-28.
- **IDs:** `claude-opus-4-8` (all platforms). No Free tier.
- **Context window:** 1,000,000 tokens total (1M); max output 128K synchronous. **300K Batch output: CONFLICT** — GLM 5.3 Flash says yes (in beta list), Step 5 Preview says no (not in beta list); GLM verified via official platform model overview.
- **Modalities:** Text, image, **PDF input** (up to 16MP long edge, ~600 images/PDF pages per request); text output. Adaptive thinking with effort control (default `high`; `xhigh`/`max` available); full function calling, code execution, MCP, dynamic parallel-subagent workflows; JSON/structured output.
- **Pricing (as of 2026-11-08):** $5.00/M in, **$0.50/M cache read** (10%), $6.25/M (5m) / $10/M (1h) cache write, $25.00/M out. Batch 50% off. Fast mode (~2.5× speed) $10/$50. **Identical list price to Opus 5** (10 BenchLM points higher), **2.5× Sonnet 5.5's $2/$10**. No free tier. Third-party discounts exist (UnoRouter $0.425/$2.13).
- **Architecture:** Proprietary closed weights; hybrid reasoning with adaptive thinking; premium tier.

### Raw benchmarks found

> **DEEP SECOND-PASS UPDATE:** Incorporates findings from 3 recent qualified raters (Step 5 Preview 2026-11-05, GLM 5.3 Flash 2026-11-02, Gemini 3.8 Flash 2026-10-17) + official Anthropic sources. **Legacy status confirmed: two generations behind, superseded by Opus 5.5.**

Agent / tool use:

- Terminal-Bench 2.1: **84.6%** (AA) / **74.6%** (System Card) / **71.9%** (Vals) — **12.7-point spread**, none reaching 88%+ frontier reference
- Terminal-Bench 3.0: **21.1%** (Frontier-Bench) / **21.1%** (Step 5 Preview) — very weak
- Terminal-Bench 4.0: **no verified public score found** (GLM 5.3 Flash) / **no verified** (Step 5 Preview)
- BrowseComp: **84.3%** single-agent / **88.5%** multi-agent (vendor) / **84.3%** (Step 5 Preview)
- DeepSearchQA: **93.1%** (System Card) / **93.1%** (Step 5 Preview)
- OSWorld-Verified: **83.4%** (updated harness, vendor + leaderboard) / **83.4%** (Step 5 Preview / GLM 5.3 Flash)
- OSWorld 2.0: **20.6%** (OSWorld 2.0 paper) / **20.6%** (Step 5 Preview) — very weak
- MCP-Atlas: **82.2%** (System Card) / **82.2%** (Step 5 Preview / GLM 5.3 Flash)
- Toolathlon: **59.9%** (System Card) / **59.9%** (Step 5 Preview / GLM 5.3 Flash)
- τ²-Bench Telecom: **94.4%** (leaderboard) / **94.4%** (Step 5 Preview / GLM 5.3 Flash)
- Finance Agent v2: **53.9%** (System Card) / **53.9%** (Step 5 Preview)
- GDPval-AA: **1,593 Elo** (System Card) / **47.7%** normalized (AA) / **1,890 Elo** (vendor, field-leading at launch) — **large vendor-AA discrepancy** / under 1,750+ frontier reference
- AA Agentic Index: **42.6%** (AA) / **42.6%** (Step 5 Preview)
- τ³-Banking / Claw-Eval: **no verified public score found** (Step 5 Preview / GLM 5.3 Flash / Gemini 3.8 Flash)
- ResearchClawBench: **21.1%** (ResearchClawBench leaderboard) / **21.1%** (Step 5 Preview)
- MazeBench: **0%** (ASCII mode, no tools) / **0%** (Step 5 Preview)
- Terminal-Bench Hard: **58.3%** (Step 5 Preview)
- AA AnalystAgent: **45.0%** / AA EnterpriseOps-Gym: **44.0%** (Step 5 Preview)
- DeepsecBench-AA: **25.9%** (Step 5 Preview)

Reasoning / knowledge:

- GPQA Diamond: **93.6%** (System Card, leaderboard #7/263) / **92.0%** (AA) / **92.4%** (Vals) — **clears 90%+ frontier reference on all three**
- HLE: **57.9%** with tools / **49.8%** without (System Card) / **48.7%** AA-HLE (AA) / **48.66%** (GLM 5.3 Flash) — clears 40%+ frontier reference
- USAMO 2026: **96.7%** (System Card) / **96.7%** (Step 5 Preview / GLM 5.3 Flash) — **2nd highest math competition figure in batch**
- ARC-AGI-1: **92.5%** (ARC Prize semi-private) / **92.5%** (Step 5 Preview / GLM 5.3 Flash)
- ARC-AGI-2: **72.1%** (benchlm.ai leaderboard) / **72.1%** (Step 5 Preview / GLM 5.3 Flash) — **20+ pts behind successors**
- ARC-AGI-3: **1.5%** (ARC Prize semi-private) / **1.5%** (Step 5 Preview / GLM 5.3 Flash) — **very weak**
- FrontierMath v2: Tiers 1–3 **80.0%** / Tier 4 **56.098%** (Epoch AI) / **56.1%** (Step 5 Preview / GLM 5.3 Flash)
- AA Intelligence Index: **42** (rank #50/217) / **41.8** (Step 5 Preview) / **55.7** (GLM 5.3 Flash, aggregator reading) — **large discrepancy (41.8 vs 55.7)**
- CritPt: **20.9%** (AA) / **20.86%** (GLM 5.3 Flash)
- AA LCR: **77.7%** (AA) / **77.7%** (Step 5 Preview / GLM 5.3 Flash)
- AA Omniscience: index **28.8**, accuracy **48.8%**, hallucination **39.3%** (AA) / **39.3%** (Step 5 Preview / GLM 5.3 Flash) — **2nd best hallucination rate in batch**
- MMLU-Pro: **89.6%** (Vals) / **89.6%** (Step 5 Preview / GLM 5.3 Flash)
- INCLUDE: **87.6%** (System Card) / **87.6%** (Step 5 Preview)
- AA IFBench: **62.2%** (AA)
- **MRCR: no verified public score found** (Step 5 Preview / GLM 5.3 Flash)
- GraphWalks (parents, >128K): **87.6%** (llmboard) / **87.6%** (GLM 5.3 Flash) — **strong**
- GraphWalks BFS >128K: **68.1%** (llmboard) / **68.1%** (GLM 5.3 Flash) — **weaker long-horizon retrieval**
- LMArena: no verified score for this SKU

Coding:

- SWE-bench Verified: **88.6%** (System Card and Vals agree exactly) / **88.6%** (Step 5 Preview / GLM 5.3 Flash / Gemini 3.8 Flash)
- SWE-bench Pro: **69.2%** (System Card) / **69.2%** (Step 5 Preview / GLM 5.3 Flash)
- SWE Multilingual: **84.4%** (System Card) / **84.4%** (Step 5 Preview / GLM 5.3 Flash)
- SWE Multimodal: **38.4%** (System Card) / **38.4%** (Step 5 Preview)
- LiveCodeBench: **87.8%** (Vals) / **87.8%** (Step 5 Preview) / **no verified public score found** (GLM 5.3 Flash)
- AA Coding Index: **74.3%** (AA) / **74.3%** (Step 5 Preview / GLM 5.3 Flash) — clears 70%+ frontier reference
- AA-SciCode: **54.4%** (AA) / **54.4%** (Step 5 Preview) — **0.6 pts under 55% reference**
- FrontierCode 1.1 Main: **46.5%** (Cognition) / **46.5%** (Step 5 Preview / GLM 5.3 Flash)
- **FrontierCode 2.0: 14.7%** (Step 5 Preview) — very weak
- Terminal-Bench 2.1: **74.6%** (System Card, Terminus-2 public harness) / **74.6%** (Step 5 Preview / GLM 5.3 Flash) / **74.6%** (Gemini 3.8 Flash)
- CursorBench 3.1: **58.4%** / **3.2: 62.3%** (Cursor evals) / **62.3%** (Step 5 Preview)
- PostTrainBench v1.1: **32.9%** (PostTrainBench leaderboard) / **32.9%** (Step 5 Preview)
- FrontierSWE: **75.0%** (llmboard) / **75.0%** (GLM 5.3 Flash)
- LiveBench: **77.22%** (llmboard) — GLM 5.3 Flash
- DeepSWE: **no verified public score found** (Step 5 Preview / GLM 5.3 Flash)
- OSWorld-Verified: **83.4%** (updated harness) / **83.4%** (Step 5 Preview / GLM 5.3 Flash)
- BrowseComp: **84.3%** / **84.3%** (Step 5 Preview)
- DeepSearchQA: **93.1%** (System Card) / **93.1%** (Step 5 Preview)
- MCP-Atlas: **82.2%** (System Card) / **82.2%** (Step 5 Preview / GLM 5.3 Flash)
- Toolathlon: **59.9%** (System Card) / **59.9%** (Step 5 Preview / GLM 5.3 Flash)
- τ²-Bench Telecom: **94.4%** (leaderboard) / **94.4%** (Step 5 Preview / GLM 5.3 Flash)

Multimodal:

- CharXiv: **89.9%** (System Card) / **80.5%** without tools / **89.9% / 80.5%** (Step 5 Preview / GLM 5.3 Flash)
- ScreenSpot Pro: **87.9%** (System Card) / **87.9%** (Step 5 Preview / GLM 5.3 Flash)
- ExtractBench: **87.09%** (Step 5 Preview)
- OfficeQA Pro: **66.2%** (System Card) / **66.2%** (Step 5 Preview)
- ParseBench: **62.27%** (Step 5 Preview)
- Design Arena Website: **1,258 Elo** (OpenRouter) / **1,257** (Step 5 Preview) / **1,258** (GLM 5.3 Flash)
- SWE Multimodal: **38.4%** (System Card) / **38.4%** (Step 5 Preview / GLM 5.3 Flash)

Long context:

- AA LCR: **77.7%** (AA) / **77.7%** (Step 5 Preview / GLM 5.3 Flash)
- **MRCR: no verified public score found** (Step 5 Preview / GLM 5.3 Flash)
- **300K Batch output: CONFLICT** — GLM 5.3 Flash says yes (verified via official platform model overview), Step 5 Preview says no (not in beta list)
- GraphWalks (parents, >128K): **87.6%** (llmboard) / **87.6%** (GLM 5.3 Flash) — strong
- GraphWalks BFS >128K: **68.1%** (llmboard) / **68.1%** (GLM 5.3 Flash) — weaker long-horizon retrieval
- GraphWalks BFS >128K (from GLM): weaker BFS reading caps long-context retrieval confidence

### Normalized scores (1–100)

> **DEEP SECOND-PASS RECALCULATION:** Scores updated based on 3 recent qualified raters + official sources. **Legacy status confirmed: two generations behind, superseded by Opus 5.5.** Key changes: Tool use ↑ (BrowseComp 84.3%, DeepSearchQA 93.1%, MCP-Atlas 82.2%, OSWorld 83.4%, τ²-Bench 94.4%, GDPval 1890 Elo vendor), Reasoning ↑ (GPQA 93.6% clears 90%+, USAMO 96.7% 2nd highest math, HLE 57.9%, hallu 39.3% 2nd best), Context ↑ (GraphWalks parents 87.6%, 300K Batch per GLM), Multimodal ↑ (PDF input confirmed, CharXiv 89.9%, ScreenSpot 87.9%, ExtractBench 87.09%), Coding ↑ (SWE-Verified 88.6%, LiveCodeBench 87.8%, FrontierSWE 75.0%, LiveBench 77.22%). Conflicts: 300K Batch (GLM yes vs Step 5 no), GDPval vendor 1890 vs AA 1593, AAII 41.8 vs 55.7, TB 2.1 spread 12.7 pts, ARC-AGI-3 1.5% very weak, no MRCR, no TB 4.0.

- **Tool use: 80/100.** (was 75) Strong classic agentic: BrowseComp 84.3%, DeepSearchQA 93.1%, MCP-Atlas 82.2%, OSWorld 83.4%, τ²-Bench 94.4%, GDPval 1890 Elo (vendor, field-leading at launch). **Capped by new harness collapse: TB 3.0 21.1%, OSWorld 2.0 20.6%, MazeBench 0%, ResearchClawBench 21.1%, TB 2.1 max 84.6% (under 88% frontier), no TB 4.0, no τ³-Banking/Claw-Eval.**
- **Reasoning: 85/100.** (was 78) GPQA Diamond 93.6% (clears 90%+), HLE 57.9% w/tools (clears 40%+), USAMO 96.7% (2nd highest math comp), ARC-AGI-1 92.5%, **hallucination 39.3% (2nd best in batch)**, AA-LCR 77.7%. **Capped by AA Intelligence Index 41.8 (vs 55.7 discrepancy), ARC-AGI-2 72.1% (20+ pts behind successors), ARC-AGI-3 1.5%, FrontierMath Tier 4 56.1%, CritPt 20.9%, no MRCR.**
- **Context window: 96/100.** (was 95) 1M native, **300K Batch output per GLM** (verified via platform model overview), GraphWalks parents **87.6%** (strong), AA-LCR 77.7%. Held at 96 (not 98) due to **GraphWalks BFS >128K only 68.1%** (weaker long-horizon), **no MRCR**, 300K Batch conflict (GLM yes vs Step 5 no).
- **Multimodal: 78/100.** (was 70) **Text, image, PDF input confirmed** (up to 600 pages); CharXiv 89.9%, ScreenSpot Pro 87.9%, ExtractBench 87.09%, CharXiv 80.5% w/o tools. Scored above +image-only 60-70 band due to explicit document/chart tier measurement. Capped by no audio/video, text-only output, SWE Multimodal 38.4%.
- **Coding: 88/100.** (was 88) SWE-bench Verified **88.6%** (system + Vals agree), LiveCodeBench 87.8% (Vals), SWE Multilingual 84.4%, AA Coding Index 74.3% (clears 70%+), FrontierSWE 75.0% (llmboard), LiveBench 77.22% (llmboard). **Capped by AA-SciCode 54.4% (0.6 under 55% ref), TB 2.1 max 84.6% (under 88% frontier), FrontierCode 2.0 14.7%, TB 3.0 21.1%, no DeepSWE/LiveCodeBench (GLM).**
- **Cost efficiency: 45/100.** (was 45) $5/$25 with $0.50/M cache read (10%). **Same rate card as Opus 5 (10 BenchLM points higher), 2.5× Sonnet 5.5's $2/$10 for lower BenchLM rank.** Batch 50% off. Third-party discounts (UnoRouter $0.425/$2.13). No free tier. No published cost-per-task lead.
- **Overall Score: 85/100.** (was 81) Half-up mean of (80 + 85 + 96 + 78 + 88) / 5 = 427 / 5 = 85.4 → **85**. **Below average of 90.3 from 32 qualifying raters.** Best-fit: Competent legacy workhorse with **2nd best hallucination rate (39.3%)**, strong SWE-bench Verified 88.6%, classic browsing/research agents (BrowseComp 84.3%, DeepSearchQA 93.1%, MCP-Atlas 82.2%). **Strictly dominated by successors:** Sonnet 5.5 ranks higher (81.84 vs 69.63) at 2.5× lower cost; Opus 5 scores higher at same $5/$25. Migrate unless pinned to `claude-opus-4-8`.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-11-08
- Method: **Deep second-pass re-research** (original 2026-10-19). Cross-rater synthesis from 3 recent qualified raters: Step 5 Preview (2026-11-05), GLM 5.3 Flash (2026-11-02), Gemini 3.8 Flash (2026-10-17) + official Anthropic sources (Opus 4.8 system card, models overview page for legacy status, pricing). Scores normalized 1–100 per model-comparison.md methodology. **Critical findings:** Legacy (two gens behind, superseded by Opus 5.5); Hallucination 39.3% (2nd best in batch); SWE-Verified 88.6%; USAMO 96.7% (2nd highest math); ARC-AGI-3 1.5%; TB 2.1 spread 12.7 pts; 300K Batch conflict (GLM yes vs Step 5 no); GDPval vendor 1890 vs AA 1593; AAII 41.8 vs 55.7; No MRCR, no TB 4.0.
- Reference URLs:
  - [Anthropic — Introducing Claude Opus 4.8](https://www.anthropic.com/news/claude-opus-4-8)
  - [Anthropic — Claude Opus 4.8 System Card](https://www.anthropic.com/claude-opus-4-8-system-card)
  - [Anthropic — Models Overview (legacy status, modality, 300K Batch list)](https://platform.claude.com/docs/en/about-claude/models/overview)
  - [Anthropic — Pricing Table](https://platform.claude.com/docs/en/about-claude/pricing)
  - [llm-stats — Opus 4.8 Launch Analysis](https://llm-stats.com/blog/research/claude-opus-4-8-launch)
  - [llmboard — Opus 4.8 Benchmark Table](https://www.llmboard.ai/models/claude-opus-4-8)
  - [OpenCode Data — Opus 4.8 Usage](https://opencode.ai/data/anthropic/claude-opus-4-8)
  - [BenchLM — Opus 4.8 (69.63/100, #16/1009, 64 rows)](https://benchlm.ai/models/claude-opus-4-8)
  - [ARC Prize](https://arcprize.org/leaderboard)
  - [Epoch AI — FrontierMath v2](https://epoch.ai/benchmarks/frontiermath-tier-4-v2)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---