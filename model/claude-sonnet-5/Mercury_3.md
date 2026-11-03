# Claude Sonnet 5 — findings by Mercury 3

- Source: Anthropic/Claude Sonnet 5
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5
- **Short description:** Anthropic's most agentic Sonnet to date (released 2026-06-30, superseded by Sonnet 5.5), priced at $2/$10 with 1M context and 128K output. Close to Opus 4.8-level agentic performance at lower cost; the default model for Free/Pro Claude plans.
- **Provider / access:** Anthropic Claude Platform API (`claude-sonnet-5`), Claude.ai, AWS/GCP/Azure; 9 API providers tracked by Artificial Analysis.
- **Release / knowledge:** Released 2026-06-30; knowledge cutoff not published; updated tokenizer (~1.0–1.35× tokens for same text).
- **IDs:** `claude-sonnet-5` (Claude API; max/high/medium/low effort).
- **Context window:** 1,000,000 tokens (1M) total; max output 128K.
- **Modalities:** text + image input, text output; reasoning (extended thinking); tool calls; cyber safeguards (same class as Opus 4.7/4.8).
- **Pricing (as of 2026-11-03):** $2.00 input / $10.00 output per 1M tokens (intro price made permanent 2026-08-10), 90% cache discount.
- **Architecture:** proprietary; parameter count undisclosed; not open-weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **80.4%** (system card/AA) vs **74.5%** (Vals — conflicting harnesses); TB3.0: **14.6%**
- BrowseComp: **84.7%**; OSWorld-Verified: **81.2%**; OSWorld 2.1: 57.0% (partial); GDPval-AA v2: **1603 Elo** (system card; AA normalized 48.2%)
- AA Agentic Index: **44.3%**; AA Tau3-Banking: **37.3%**; AA-AnalystAgent: **46.3%**; AA EnterpriseOps-Gym: **44.7%**; ApprenticeBench GUI: 16%; MazeBench ASCII: 0%

Reasoning / knowledge:

- HLE: **57.4%** with tools (system card) vs **31.0%** verified (DeepMind card) vs **41.3%** (AA)
- GPQA Diamond: **91.1%** (AA) vs **88.9%** (Vals); MMLU-Pro: **87.5%** (Vals)
- AA-LCR: **82.0%**; CritPt: **16.9%**; Artificial Analysis Intelligence Index: **38.2%**
- LABBench2: **80.1%**; FrontierMath v2 Tiers 1–3 **65.61%**, Tier 4 **29.27%** (Epoch AI)
- AA-Omniscience: accuracy 40.1%, hallucination rate 39.4%

Coding:

- SWE-bench Verified: **85.2%**; SWE-bench Pro: **63.2%**; SWE Multilingual: **78.3%**; SWE Multimodal: **28.1%** (system card)
- FrontierCode v1.1 Main: **42.7%** (Cognition); CursorBench 3.2: **61.5%** / 4.0: **34.1%**; AA-SciCode: **54.3%**; VulcanBench CII v1: 89.2%
- LiveCodeBench: **82.4%** (Vals); SWE-bench: 79.6% (Vals); AA Coding Index: **71.5%**

Long context:

- 1M window; AA-LCR 82.0%; no MRCR/GraphWalks figure verified in sources reviewed.

Multimodal:

- text/image in, text out; CharXiv 88.3% (tools)/77% (no tools); MMMU-Pro 77.3%; ParseBench 61.16%.

### Normalized scores (1–100)

- **Tool use: 87/100.** BrowseComp 84.7%, OSWorld-Verified 81.2%, TB2.1 80.4% — strong Sonnet-class; capped by TB3.0 14.6%, Tau3 37.3%, and the 16% GUI-apprentice score.
- **Reasoning: 84/100.** HLE 57.4% with tools, GPQA 91.1%, LCR 82% — good; capped by CritPt 16.9%, II 38.2, and FrontierMath T4 29.3%.
- **Context window: 92/100.** 1M with 128K output and solid LCR 82%; no ≥98%-retrieval figure at depth holds it below the top band.
- **Multimodal: 82/100.** image input with strong chart reasoning (CharXiv 88.3% tools); no video/audio input.
- **Coding: 85/100.** SWE-bench Verified 85.2%, Multilingual 78.3%, coding index 71.5%; capped by CursorBench 4.0 34.1%, SWE Multimodal 28.1%, and FrontierCode main 42.7%.
- **Cost efficiency: 84/100.** $2/$10 with 90% cache discount — solid value for a near-Opus-class model; slower (84.5 t/s) than Sonnet 5.5.
- **Overall Score: 86/100.** Mean of (87+84+92+82+85)/5 = 86.0 → 86. A strong agentic value pick; Sonnet 5.5 is the clear upgrade at the same price.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-03
- Method: public internet research (Anthropic Sonnet 5 announcement + system card, Artificial Analysis model page/leaderboards, BenchLM aggregation, Vals AI, Epoch AI, Cognition/Cursor); scores are normalized 1–100 interpretations, not official vendor scores. Conflicting harness results (TB2.1, HLE, GPQA) listed side by side.
- Reference URLs:
  - [Introducing Claude Sonnet 5 (Anthropic, 2026-06-30)](https://www.anthropic.com/news/claude-sonnet-5)
  - [Claude Sonnet 5 System Card (Anthropic)](https://www-cdn.anthropic.com/d9bb04416ffe1352af84721476c1fa9994c07fde/Claude%20Sonnet%205%20System%20Card.pdf)
  - [Claude Sonnet 5 — Artificial Analysis model page ($2/$10, 1M, 84.5 t/s)](https://artificialanalysis.ai/models/claude-sonnet-5)
  - [Claude Sonnet 5 — BenchLM benchmark aggregation](https://benchlm.ai/models/claude-sonnet-5)
  - [Claude Sonnet 5 — Vals AI model page](https://www.vals.ai/models/anthropic_claude-sonnet-5)
  - [FrontierMath v2 leaderboards (Epoch AI)](https://epoch.ai/benchmarks/frontiermath-tiers-1-3-v2)
