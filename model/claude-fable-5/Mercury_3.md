# Claude Fable 5 — findings by Mercury 3

- Source: Anthropic/Claude Fable 5
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5
- **Short description:** Anthropic's first Fable-class frontier model (released 2026-06-09, superseded by Fable 5.1). Strong agentic/knowledge-work model with 1M+ context and excellent SWE-bench, priced at the premium $10/$50 tier.
- **Provider / access:** Anthropic Claude Platform API (`claude-fable-5`), Claude.ai; 7 API providers tracked by Artificial Analysis.
- **Release / knowledge:** Released 2026-06-09; knowledge cutoff not published.
- **IDs:** `claude-fable-5` (Claude API; max, Opus 4.8 fallback).
- **Context window:** 1,000,000+ tokens (1M+) total; max output not disclosed.
- **Modalities:** text + image input, text output; reasoning (extended thinking); tool calls.
- **Pricing (as of 2026-11-03):** $10.00 input / $50.00 output per 1M tokens, 90% cache discount.
- **Architecture:** proprietary; parameter count undisclosed; not open-weights.

### Raw benchmarks found

Agent / tool use:

- GDPval-AA v2.1: **1747 Elo** (system card; AA normalized 55.5%); OSWorld-Verified: **85%**; τ²-bench: **98.5%** (AA)
- Terminal-Bench 2.1: **84.3%** (system card) vs **84.6%** (AA) vs **80.5%** (Vals); TB Hard: **62.9%** (AA); Terminal-Bench 3.0: **34.0%**
- AA Harvey LAB v1.0: **93.6%**; AA EnterpriseOps-Gym: **51.1%**; AA Agentic Index: **51.0%**; AA-AnalystAgent: **48.8%**; AA Tau3-Banking: **38.1%**
- ApprenticeBench GUI: 34%; MazeBench ASCII: 11%

Reasoning / knowledge:

- GPQA Diamond: **92.6%** (AA) vs **93.2%** (Vals); MMLU-Pro: **91.5%** (Vals)
- HLE: **55.5%** (AA); AA-LCR: **82.3%**; CritPt: **28.6%**
- ARC-AGI-1: **98.5%**; ARC-AGI-2: **89.2%** (ARC Prize)
- FrontierMath v2: Tiers 1–3 **87.02%**, Tier 4 **90.20%** (Epoch AI)
- Artificial Analysis Intelligence Index: **49.6%**; AA-Omniscience: accuracy **65.4%**, hallucination rate **63.6%**; AA-IFBench: 63.5%

Coding:

- SWE-bench Verified: **95%** (system card/Vals); SWE-bench Pro: **80%**; FrontierCode v1.1 Main: **53.5%** (Cognition); FrontierSWE v2: **47.0%** (Proximal)
- AA Coding Index: **76.5%**; AA-SciCode: **61.0%**; LiveCodeBench: **89.8%** (Vals)
- CursorBench 3.1: **70.6%** / 3.2: **70.5%** (Cursor); VulcanBench v3: **89.5%**

Long context:

- 1M+ window; AA-LCR 82.3%; no MRCR/GraphWalks figure verified in sources reviewed.

Multimodal:

- text/image in, text out; ParseBench 69.79%; Blueprint-Bench 2 38.6%; OfficeQA Pro 57.9%; Design Arena 1294 Elo.

### Normalized scores (1–100)

- **Tool use: 89/100.** Strong agentic (GDPval 1747, OSWorld-Verified 85%, τ² 98.5%, Harvey LAB 93.6%, TB Hard 62.9%); capped below Fable 5.1/Opus 5 by TB3.0 34% and Tau3-Banking 38.1%.
- **Reasoning: 90/100.** GPQA ~93%, ARC-AGI-2 89.2%, FrontierMath Tier 4 90.2% — strong; capped by HLE 55.5% and hallucination rate 63.6%.
- **Context window: 93/100.** 1M+ with good LCR 82.3%; no ≥98%-retrieval figure at depth holds it below the top band.
- **Multimodal: 82/100.** image input only (text/image in, text out); no video/audio input.
- **Coding: 91/100.** SWE-bench Verified 95%, Pro 80%, coding index 76.5%, HeavyCodeBench 89.8%; capped by FrontierSWE v2 47% and real CursorBench 4.0 figure (3.x only).
- **Cost efficiency: 30/100.** $10/$50 with 90% cache discount — top-of-market pricing; superseded by Fable 5.1 (same price, better capability).
- **Overall Score: 89/100.** Mean of (89+90+93+82+91)/5 = 89.0 → 89. A capable prior-generation flagship; new buyers should take Fable 5.1 (or Opus 5.5 at half the price).

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-03
- Method: public internet research (Anthropic Fable/Mythos 5 system card via BenchLM, Artificial Analysis model page/leaderboards, Vals AI, ARC Prize, Epoch AI, Cognition/Proximal/Cursor); scores are normalized 1–100 interpretations, not official vendor scores. Conflicting harness results (GPQA, TB2.1) listed side by side.
- Reference URLs:
  - [Claude Fable 5 and Claude Mythos 5 System Card (Anthropic)](https://www-cdn.anthropic.com/d00db56fa754a1b115b6dd7cb2e3c342ee809620.pdf)
  - [Claude Fable 5 — Artificial Analysis model page ($10/$50, 1M+, 68 t/s)](https://artificialanalysis.ai/models/claude-fable-5)
  - [Claude Fable 5 — BenchLM benchmark aggregation](https://benchlm.ai/models/claude-fable)
  - [Claude Fable 5 — Vals AI model page](https://www.vals.ai/models/anthropic_claude-fable-5)
  - [ARC Prize results — Claude Fable 5](https://arcprize.org/results/anthropic-claude-fable-5)
  - [FrontierMath v2 leaderboards (Epoch AI)](https://epoch.ai/benchmarks/frontiermath-tiers-1-3-v2)
