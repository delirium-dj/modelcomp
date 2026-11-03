# Claude Opus 5 — findings by Mercury 3

- Source: Anthropic/Claude Opus 5
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5
- **Short description:** Anthropic's prior flagship (released 2026-07-24), superseded by Opus 5.5 (2026-09-22). Still a frontier-tier agentic/knowledge model with 1M context, excellent SWE-bench and knowledge-work scores, but slower (54 t/s) and pricier than its successor.
- **Provider / access:** Anthropic Claude Platform API (`claude-opus-5`), Claude.ai, plus 8 API providers tracked by Artificial Analysis.
- **Release / knowledge:** Released 2026-07-24; knowledge cutoff not published.
- **IDs:** `claude-opus-5` (Claude API; max/adaptive thinking).
- **Context window:** 1,000,000 tokens (1M) total; max output not disclosed.
- **Modalities:** text + image input, text output; reasoning (extended thinking); tool calls; 1M context.
- **Pricing (as of 2026-11-03):** $5.00 input / $25.00 output per 1M tokens, 90% cache discount (deprecated in favor of Opus 5.5 at $4/$20).
- **Architecture:** proprietary; parameter count undisclosed; not open-weights.

### Raw benchmarks found

Agent / tool use:

- GDPval-AA v2.1: **1862 Elo** (system card; AA normalized 61.1%)
- BrowseComp: **90.8%** (93.6% 10-agent prerelease); DeepSearchQA: **95.0%**; OSWorld 2.0: **70.6%** / 2.1: **74.0%**
- MCP Atlas: **85.8%** (claim coverage 89.1%); Toolathlon-Verified: **80.6%** (Pass@3 87.0%); DRACO: **88.6%**
- Terminal-Bench 2.1: **89.1%** (AA) vs **84.6%** (Vals); Terminal-Bench 3.0: **42.7%**; AutomationBench: **26.0%** (system card)
- LAB criterion-pass: **93.74%** (Anthropic harness) / 94.1% (Harvey held-out); AA Harvey LAB v1.0: **93.5%**; AA-Briefcase Elo 1720
- AA Agentic Index: **56.2%**; AA-AnalystAgent: **53.8%**; AA EnterpriseOps-Gym: **47.5%**; ApprenticeBench GUI: 36%

Reasoning / knowledge:

- HLE: **64.7%** with tools / 56.3% without (system card) vs **54.9%** (AA)
- GPQA Diamond: **93.2%** (AA) vs **93.4%** (Vals); MMLU-Pro: **91.6%** (Vals)
- IMO 2026: **42/42** (perfect, system card); FrontierMath v2 Tiers 1–3 **85.61%**, Tier 4 **73.17%** (Epoch AI); ArXivMath Jun-2026 **91.3%** with tools
- ARC-AGI-1: **97.5%**; ARC-AGI-2: **90.4%**; ARC-AGI-3: **30.2%** (ARC Prize)
- Artificial Analysis Intelligence Index: **50.8%**; AA-LCR: **79.3%**; CritPt: **29.1%**
- AA-Omniscience: accuracy **60.9%**, hallucination rate **60.8%**; GMMLU 92.5%, MILU 92.1%, INCLUDE 89.8% (system card)

Coding:

- SWE-bench Verified: **96%** (system card) vs **97.0%** (Vals); SWE-bench Pro: **79.2%**; SWE Multilingual: **89.5%**; SWE Multimodal: **59.4%**
- DeepSWE: **68.8%**; ProgramBench: **93.0%**; FrontierCode v1.1 Main: **53.4%** / Extended: **63.6%**; FrontierSWE v2: **52.0%** (Proximal)
- AA Coding Index: **78.0%**; AA-SciCode: **56.4%**; LiveCodeBench: **89.0%** (Vals); CursorBench 3.2: **70.0%** vs 4.0: **46.6%**; VulcanBench v3: 87.0%
- FrontierCode 2.0: **26.7%** (Cognition)

Long context:

- 1M window; AA-LCR 79.3%; no MRCR/GraphWalks figure verified in sources reviewed.

Multimodal:

- text/image in, text out; GDP.pdf 85.5% (tools), Chartography 83.0% (tools), OfficeQA 78.1%, AA-MMMU-Pro 84.7%, BenchCAD Vision2Code 0.821 (tools).

### Normalized scores (1–100)

- **Tool use: 94/100.** Frontier agentic: GDPval 1862, BrowseComp 90.8%, MCP Atlas 85.8%, Toolathlon 80.6%; capped below Opus 5.5 by TB3.0 42.7%, AutomationBench 26%, and lower TB4.0-era harness coverage.
- **Reasoning: 95/100.** HLE 64.7% with tools, IMO 2026 42/42, FrontierMath T1–3 85.6%, ARC-AGI-2 90.4% — elite; capped by AA hallucination rate 60.8% and II 50.8.
- **Context window: 94/100.** 1M with solid LCR 79.3%; no ≥98%-retrieval figure at depth holds it below the top band.
- **Multimodal: 82/100.** image input with strong document/chart reasoning (GDP.pdf 85.5%, Chartography 83%); no video/audio input, text-only output.
- **Coding: 92/100.** SWE-bench Verified 96%, ProgramBench 93%, coding index 78%; capped by DeepSWE 68.8%, FrontierCode 2.0 26.7%, and CursorBench 4.0 46.6%.
- **Cost efficiency: 65/100.** $5/$25 with 90% cache discount — premium, and now out-priced by Opus 5.5 ($4/$20, faster).
- **Overall Score: 91/100.** Mean of (94+95+94+82+92)/5 = 91.4 → 91. A formidable prior-generation flagship; most buyers should now take Opus 5.5 instead.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-03
- Method: public internet research (Anthropic Opus 5 system card via BenchLM, Artificial Analysis model page/leaderboards, Vals AI, ARC Prize, Epoch AI, Cursor/Cognition/Proximal); scores are normalized 1–100 interpretations, not official vendor scores. Conflicting harness results (HLE, SWE-bench, TB2.1) listed side by side.
- Reference URLs:
  - [Introducing Claude Opus 5 (Anthropic)](https://www.anthropic.com/news/claude-opus-5)
  - [Claude Opus 5 System Card (Anthropic)](https://www-cdn.anthropic.com/c5fbac3f0b1280a933ebd26d3cb8bb9f5bdeaf48/Claude%20Opus%205%20System%20Card.pdf)
  - [Claude Opus 5 — Artificial Analysis model page ($5/$25, 1M, 54 t/s)](https://artificialanalysis.ai/models/claude-opus-5)
  - [Claude Opus 5 — BenchLM benchmark aggregation](https://benchlm.ai/models/claude-opus-5)
  - [Claude Opus 5 — Vals AI model page](https://www.vals.ai/models/anthropic_claude-opus-5)
  - [ARC Prize results — Claude Opus 5](https://arcprize.org/results/anthropic-claude-opus-5)
  - [FrontierMath v2 leaderboards (Epoch AI)](https://epoch.ai/benchmarks/frontiermath-tiers-1-3-v2)
