# Claude Sonnet 5.5 — findings by Mercury 3

- Source: Anthropic/Claude Sonnet 5.5
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5.5
- **Short description:** Second model in Anthropic's Claude 5.5 family (2026-09-28): a faster (+30%), cheaper (up to −30% per task) complement to Opus 5.5, strongest at well-scoped everyday tasks, bug fixing, documents/slides, and design. Posts the best public Terminal-Bench 4.0 score (70.6%).
- **Provider / access:** Anthropic Claude Platform API (`claude-sonnet-5-5`), Claude.ai, AWS/GCP/Azure; 9 API providers tracked by Artificial Analysis.
- **Release / knowledge:** Released 2026-09-28; knowledge cutoff not published.
- **IDs:** `claude-sonnet-5-5` (Claude API; max/high/medium effort tiers, default High on Platform).
- **Context window:** 1,000,000 tokens (1M) total included at standard pricing; max output not disclosed.
- **Modalities:** text + image input, text output; reasoning (extended thinking); tool calls; behind-tools setting; preserved thinking; cyber safeguards with fallback to Sonnet 5; zero data retention option.
- **Pricing (as of 2026-11-03):** $2.00 input / $10.00 output per 1M tokens; cache reads $0.10 (halved from Sonnet 5's $0.20 since 2026-10-07), cache writes $2.50 (5-min)/$4.00 (1-hour); Batch $1/$5.
- **Architecture:** proprietary; parameter count undisclosed; not open-weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **70.6%** (Anthropic) vs **63.6%** (Artificial Analysis — conflicting harnesses; both top-of-field)
- GDPval-AA v2.1: **1844 Elo** (Anthropic; AA normalized 66.9%); AA-Briefcase v1.1: **1811 Elo** (pre-release deployment note: structured-output bug may understate)
- OSWorld 2.1: **80.1%** (partial); DRACO: **87.0%**; Terminal-Bench-Science 0.1: **59.9%**
- AutomationBench: **44.7%** (Zapier 1.0.6) vs **71.8%** (AA); Toolathlon-Verified: **77.8%** (Pass@3 85.2%); AA Harvey LAB v1.0: **93.1%**
- AA-AnalystAgent: **57.5%**; Hermes Index 53.1% / Bench 73.5% (Nous); MazeBench ASCII: 8%

Reasoning / knowledge:

- HLE: **64.5%** with tools (Anthropic) vs **55.0%** (AA); 56.9% without tools (system card)
- AA-LCR: **82.7%**; CritPt: **31.4%**; MLCR-AA: **41.7%**
- Artificial Analysis Intelligence Index: **54/100**, #9 of 60 (max, default fallback)
- FrontierMath v2: Tiers 1–3 **88.77%**, Tier 4 **80.49%** (Epoch AI); ArXivMath Aug-2026 **95.2%** with tools (system card)
- AA-Omniscience: accuracy **51.5%**, hallucination rate **43.3%**; GMMLU 92.1%, MILU 91.6%

Coding:

- SWE-bench Pro: **81.3%**; SWE Multilingual: **90.3%**; SWE Multimodal: **54.3%**; DeepSWE: **71.0%**; ProgramBench: **79.7%** (system card)
- FrontierCode v1.1 Main: **46.2%** Max / **52.1%** Xhigh; Extended: **59.1%**; FrontierCode 2.0: **41.0%** (Cognition)
- CursorBench 4.0: **55.5%** (Cursor); FrontierSWE v2: **61.9%** (Proximal); AA-SciCode: **61.0%**; Bug Hunt Bench: 51.3 fixes

Long context:

- 1M window; AA-LCR 82.7%; MLCR-AA 41.7% (strong for class).

Multimodal:

- text/image in, text out; Chartography 90.2% (tools) / 61.6% (no tools); BenchCAD Vision2Code 0.963 (tools); OfficeQA 76.9%; biomedical image analysis 72.2%; ExtractBench 94.68%.

### Normalized scores (1–100)

- **Tool use: 95/100.** Best public TB4.0 (70.6%), GDPval 1844, Briefcase 1811, OSWorld 80.1% — a hair behind Opus 5.5 only on the hardest long-horizon work; AutomationBench harness variance (44.7% vs 71.8%) noted.
- **Reasoning: 94/100.** HLE 64.5% with tools, II 54 (#9), FrontierMath T1–3 88.77%, T4 80.49%; capped by hallucination rate 43.3% and missing ARC-AGI-2/GPQA published figures in sources reviewed.
- **Context window: 95/100.** 1M with strong LCR 82.7% and MLCR 41.7%; no ≥98%-retrieval figure at depth holds it below the top band.
- **Multimodal: 82/100.** image input with excellent chart/vision grounding (Chartography 90.2% tools, ExtractBench 94.68%); no video/audio input, text-only output.
- **Coding: 94/100.** SWE-Pro 81.3%, SWE Multilingual 90.3%, DeepSWE 71%, TB4.0 70.6%, FrontierSWE v2 61.9%; capped by FrontierCode 2.0 41% and SWE Multimodal 54.3%.
- **Cost efficiency: 84/100.** $2/$10 with $0.10 cache reads (30%+ faster, up to 30% cheaper per task than Sonnet 5); verbosity (340M tokens on II) keeps it from a higher cost score.
- **Overall Score: 92/100.** Mean of (95+94+95+82+94)/5 = 92.0 → 92. The best value-per-dollar Claude 5.5-family model; near-Opus capability on well-scoped work at half the price.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-03
- Method: public internet research (Anthropic announcement + system card, Artificial Analysis model page/leaderboards, BenchLM aggregation, Cursor/Cognition/Proximal, Epoch AI); scores are normalized 1–100 interpretations, not official vendor scores. Conflicting harness results (TB4.0, HLE, AutomationBench) listed side by side.
- Reference URLs:
  - [Introducing Claude Sonnet 5.5 (Anthropic, 2026-09-28)](https://www.anthropic.com/claude-sonnet-5-5)
  - [Claude Sonnet 5.5 System Card (Anthropic)](https://www-cdn.anthropic.com/870c8f525702625d2c62fc6dd04c857e3250bec1/Claude%20Sonnet%205.5%20System%20Card.pdf)
  - [Claude API pricing (Anthropic)](https://platform.claude.com/docs/en/about-claude/pricing)
  - [Claude Sonnet 5.5 — Artificial Analysis model page (II 54 #9/60, 1M, $2/$10, 140 t/s)](https://artificialanalysis.ai/models/claude-sonnet-5-5)
  - [Claude Sonnet 5.5 — BenchLM benchmark aggregation](https://benchlm.ai/models/claude-sonnet-5-5)
  - [CursorBench 4.0 (Cursor evals)](https://cursor.com/cursorbench)
  - [FrontierMath v2 leaderboards (Epoch AI)](https://epoch.ai/benchmarks/frontiermath-tiers-1-3-v2)
