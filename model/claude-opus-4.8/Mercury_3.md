# Claude Opus 4.8 — findings by Mercury 3

- Source: Anthropic/Claude Opus 4.8
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.8
- **Short description:** Anthropic's May 2026 Opus flagship (released 2026-05-28, superseded by Opus 5/5.5), built on Opus 4.7 with strong honesty improvements (~4× less likely to let flaws pass unremarked) and the best agentic/knowledge profile of the Opus 4 series. $5/$25 with 1M context.
- **Provider / access:** Anthropic Claude Platform API (`claude-opus-4-8`), Claude.ai, AWS/GCP/Azure; 7 API providers tracked by Artificial Analysis.
- **Release / knowledge:** Released 2026-05-28; knowledge cutoff not published.
- **IDs:** `claude-opus-4-8` (Claude API; low→max effort, default high; fast mode 2.5× at $10/$50).
- **Context window:** 1,000,000 tokens (1M) total; max output not disclosed (128K per models.dev family block).
- **Modalities:** text + image input, text output; reasoning (extended thinking); tool calls; dynamic workflows (Claude Code research preview).
- **Pricing (as of 2026-11-03):** $5.00 input / $25.00 output per 1M tokens, 90% cache discount; fast mode $10/$50.
- **Architecture:** proprietary; parameter count undisclosed; not open-weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **84.6%** (AA) vs **74.6%** (system card) vs **71.9%** (Vals — conflicting harnesses); TB Hard: 58.3%; TB3.0: 21.1%
- BrowseComp: **84.3%**; DeepSearchQA: **93.1%**; OSWorld-Verified: **83.4%**; MCP Atlas: **82.2%**; GDPval-AA: **1593 Elo**; Finance Agent v2: 53.9%
- τ²-bench: **94.4%** (AA); Toolathlon: 59.9%; GERT Labs: 72.97%; AA Agentic Index: 42.6%; AA-AnalystAgent: 45.0%

Reasoning / knowledge:

- GPQA Diamond: **93.6%** (system card) vs **92.0%** (AA) vs **92.4%** (Vals); HLE: **57.9%** with tools (system card) vs 48.7% (AA)
- ARC-AGI-1: **92.5%**; ARC-AGI-2: **72.1%**; ARC-AGI-3: 1.5% (ARC Prize)
- AA-LCR: **77.7%**; CritPt: **20.9%**; Artificial Analysis Intelligence Index: **41.8%**
- USAMO 2026: **96.7%**; FrontierMath v2 Tiers 1–3 **80.0%**, Tier 4 **56.1%** (Epoch AI)
- AA-Omniscience: accuracy 48.8%, hallucination rate 39.3%; INCLUDE: 87.6%

Coding:

- SWE-bench Verified: **88.6%**; SWE-bench Pro: **69.2%**; SWE Multilingual: **84.4%**; SWE Multimodal: **38.4%** (system card)
- CursorBench 3.1: 58.4% / 3.2: 62.3%; FrontierCode v1.1 Main: **46.5%**; FrontierCode 2.0: **14.7%**; AA-SciCode: 54.4%; AA Coding Index: 74.3%
- LiveCodeBench: **87.8%**; SWE-bench: 88.6% (Vals)

Long context:

- 1M window; AA-LCR 77.7%; MRCR/GraphWalks not verified in sources reviewed.

Multimodal:

- text/image in, text out; ScreenSpot Pro 87.9%; CharXiv 89.9% (tools)/80.5% (no tools); OfficeQA Pro 66.2%; ExtractBench 87.09%.

### Normalized scores (1–100)

- **Tool use: 87/100.** OSWorld-Verified 83.4%, DeepSearchQA 93.1%, MCP Atlas 82.2%, τ² 94.4% — strong; capped by Toolathlon 59.9%, TB3.0 21.1%, and TB2.1 harness variance.
- **Reasoning: 88/100.** GPQA 93.6%, HLE 57.9% with tools, ARC-AGI-2 72.1%, USAMO 96.7% — excellent; capped by CritPt 20.9% and II 41.8.
- **Context window: 91/100.** 1M with solid LCR 77.7%; no ≥98%-retrieval figure at depth.
- **Multimodal: 82/100.** image input with strong grounding (ScreenSpot Pro 87.9%, CharXiv 89.9% tools); no video/audio input.
- **Coding: 87/100.** SWE-bench Verified 88.6%, Multilingual 84.4%, coding index 74.3%; capped by FrontierCode 2.0 14.7% and SWE Multimodal 38.4%.
- **Cost efficiency: 60/100.** $5/$25 with 90% cache discount (fast mode 3× cheaper than before); superseded by Opus 5 at the same price.
- **Overall Score: 87/100.** Mean of (87+88+91+82+87)/5 = 87.0 → 87. A dependable pre-Opus-5 flagship; most buyers should now take Opus 5/5.5.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-03
- Method: public internet research (Anthropic Opus 4.8 announcement + system card, Artificial Analysis model page/leaderboards, BenchLM aggregation, Vals AI, ARC Prize, Epoch AI, Cursor/Cognition); scores are normalized 1–100 interpretations, not official vendor scores. Conflicting harness results (TB2.1, GPQA, HLE) listed side by side.
- Reference URLs:
  - [Introducing Claude Opus 4.8 (Anthropic, 2026-05-28)](https://www.anthropic.com/news/claude-opus-4-8)
  - [Claude Opus 4.8 System Card (Anthropic)](https://cdn.sanity.io/files/4zrzovbb/website/c886650a2e96fc0925c805a1a7ca77314ccbf4a6.pdf)
  - [Claude Opus 4.8 — Artificial Analysis model page ($5/$25, 1M, 65.9 t/s)](https://artificialanalysis.ai/models/claude-opus-4-8)
  - [Claude Opus 4.8 — BenchLM benchmark aggregation](https://benchlm.ai/models/claude-opus-4-8)
  - [Claude Opus 4.8 — Vals AI model page](https://www.vals.ai/models/anthropic_claude-opus-4-8)
  - [ARC Prize leaderboard](https://arcprize.org/leaderboard)
