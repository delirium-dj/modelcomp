# Claude Opus 4.6 — findings by Mercury 3

- Source: Anthropic/Claude Opus 4.6
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.6
- **Short description:** Anthropic's Feb 2026 flagship (released 2026-02-05, superseded by Opus 4.7/4.8/5), notable as the first Opus-class model with 1M context (beta), 128K output, adaptive thinking/effort controls. State-of-the-art at launch on TB2.0, BrowseComp, GDPval-AA; a strong mid-2026 frontier model.
- **Provider / access:** Anthropic Claude Platform API (`claude-opus-4-6`), Claude.ai, AWS/GCP/Azure; 4 API providers tracked by Artificial Analysis.
- **Release / knowledge:** Released 2026-02-05; knowledge cutoff not published.
- **IDs:** `claude-opus-4-6` (Claude API; adaptive thinking/effort: low→max; non-reasoning variant exists).
- **Context window:** 1,000,000 tokens (1M) total (beta on Claude Platform); premium pricing above 200K ($10/$37.50); max output 128K.
- **Modalities:** text + image input, text output; reasoning (adaptive extended thinking); tool calls; context compaction; US-only inference at 1.1×.
- **Pricing (as of 2026-11-03):** $5.00 input / $25.00 output per 1M tokens, 90% cache discount; >200K prompts $10/$37.50.
- **Architecture:** proprietary; parameter count undisclosed; not open-weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **65.4%** (system card, Terminus-2 harness — highest at launch); TB Hard (AA): **48.5%**
- BrowseComp: **83.7%** (86.8% multi-agent); OSWorld-Verified: **72.7%**; DeepSearchQA: **73.7%**; CyberGym: **66.6%**; AndroidWorld: **62.0%**; Claw-Eval: **70.4%**
- GDPval-AA: **~1472 Elo** (announcement: +144 over GPT-5.2, +190 over Opus 4.5); τ²-bench: **84.8%** (AA)
- JobBench: **36.7%**; ResearchClawBench: 19.9%; ApprenticeBench GUI: 5%; GERT Labs: 61.85%

Reasoning / knowledge:

- GPQA Diamond: **91.3%** (system card) vs **84.0%** (AA, non-reasoning variant) — conflicting variants
- HLE: **53.0%** with tools (system card) vs **40%** without (Meta chart) vs **19.1%** (AA non-reasoning)
- MRCR v2 8-needle @1M: **76%** (system card); AA-LCR: **67.0%**; CritPt: **2.8%** (AA non-reasoning)
- ARC-AGI-2: **~40%** (per announcement, 120K thinking budget — not in BenchLM table); ARC-AGI-3: 0.5%
- SuperGPQA: **95%**; MMLU-Pro: 82–89.1% (Qwen/Arcee tables); AIME25: **99.8%** (Arcee); FrontierMath v2 Tiers 1–3 **65.97%**, Tier 4 **26.83%** (Epoch AI)
- Artificial Analysis Intelligence Index: **26.4%** (AA, non-reasoning); AA-Omniscience: accuracy 45.8%, hallucination rate **80.1%**

Coding:

- SWE-bench Verified: **80.8%** (system card); SWE-bench Pro: **53.4%**; LiveCodeBench Pro: **70.7%**; SWE-Rebench: **65.3%**; React Native Evals: **84.1%**
- Vibe Code Bench: **57.57%** (Vals); FrontierCode 1.1 Main: **26.9%** (Cognition); MCP Atlas high: 62.7% (industry-leading at launch)

Long context:

- 1M window; MRCR 76% @1M (8-needle) — strong for its era; AA-LCR 67%.

Multimodal:

- text/image in, text out; MMMU-Pro 77.3% (system card)/72.5% (AA); ScreenSpot Pro 83.1%; ERQA 51.6%; MedXpertQA (MM) 64.8%; ParseBench 54.07%.

### Normalized scores (1–100)

- **Tool use: 85/100.** Strong launch-era agentic suite (TB2.0 65.4%, OSWorld-Verified 72.7%, τ² 84.8%, CyberGym 66.6%); capped by ApprenticeBench 5%, JobBench 36.7%, and no TB4.0 published.
- **Reasoning: 82/100.** GPQA 91.3%, HLE 53% with tools, SuperGPQA 95% — good; capped by CritPt 2.8%, MRCR @1M 76%, and the low AA Index on the non-reasoning variant.
- **Context window: 90/100.** 1M with 128K output and MRCR 76% @1M — solid for Feb 2026; below the 2026 autumn ≥98%-retrieval leaders.
- **Multimodal: 80/100.** image input with moderate visual reasoning (MMMU-Pro 77.3%, ScreenSpot Pro 83.1%); no video/audio input.
- **Coding: 84/100.** SWE-bench Verified 80.8%, Vibe 57.57%, React Native 84.1%; capped by FrontierCode main 26.9% and SWE-Pro 53.4%.
- **Cost efficiency: 62/100.** $5/$25 with 90% cache discount, premium >200K — expensive by today's standards; superseded by Opus 5/5.5 pricing.
- **Overall Score: 84/100.** Mean of (85+82+90+80+84)/5 = 84.2 → 84. A strong early-2026 flagship; most buyers should now prefer Opus 5/5.5.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-03
- Method: public internet research (Anthropic Opus 4.6 announcement + system card, Artificial Analysis model page/leaderboards, BenchLM aggregation, ARC Prize, Epoch AI, Cursor/Qwen/Arcee tables); scores are normalized 1–100 interpretations, not official vendor scores. Conflicting variant results (reasoning vs non-reasoning HLE/GPQA/II) listed side by side.
- Reference URLs:
  - [Introducing Claude Opus 4.6 (Anthropic, 2026-02-05)](https://www.anthropic.com/news/claude-opus-4-6)
  - [Claude Opus 4.6 System Card (Anthropic)](https://www-cdn.anthropic.com/14e4fb01875d2a69f646fa5e574dea2b1c0ff7b5.pdf)
  - [Claude Opus 4.6 — Artificial Analysis model page ($5/$25, 1M, 40.9 t/s non-reasoning)](https://artificialanalysis.ai/models/claude-opus-4-6)
  - [Claude Opus 4.6 — BenchLM benchmark aggregation](https://benchlm.ai/models/claude-opus-4-6)
  - [ARC Prize leaderboard](https://arcprize.org/leaderboard)
  - [FrontierMath v2 leaderboards (Epoch AI)](https://epoch.ai/benchmarks/frontiermath-tiers-1-3-v2)
