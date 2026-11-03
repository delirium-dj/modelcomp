# Claude Fable 5.1 — findings by Mercury 3

- Source: Anthropic/Claude Fable 5.1
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.1
- **Short description:** Anthropic's frontier "Fable" flagship (released 2026-09-01), the reference model for Opus 5.5's capability level, with 1M context and strong knowledge-work/agentic coding. Top use case: high-ceiling knowledge work and coding at a premium price. Sibling of Claude Mythos 5.1 (biology/cyber-tuned).
- **Provider / access:** Anthropic Claude Platform API (`claude-fable-5-1`), Claude.ai, plus 6 API providers tracked by Artificial Analysis.
- **Release / knowledge:** Released 2026-09-01; knowledge cutoff not published.
- **IDs:** `claude-fable-5-1` (Claude API; max/adaptive-thinking tiers).
- **Context window:** 1,000,000 tokens (1M) total; max output not disclosed.
- **Modalities:** text + image input, text output; reasoning model (extended thinking); tool calls; preserved-thinking anti-distillation; EU AI Act watermarking.
- **Pricing (as of 2026-11-03):** $10.00 input / $50.00 output per 1M tokens; cache reads $0.25 (Anthropic estimates this cuts typical Fable usage costs ~25%, highly agentic workloads up to ~45%). No free tier.
- **Architecture:** proprietary; parameter count undisclosed; not open-weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **55.8%** (system card) vs **52.0%** (Artificial Analysis — conflicting harnesses)
- GDPval-AA v2.1: **1764 Elo** (AA leaderboard; normalized 62.7%); AA-Briefcase Elo 1669; AA Harvey LAB v1.0: **93.0%**
- AA Tau3-Banking: **47.2%**; AA Agentic Index: **58.0%**; AA AutomationBench: **59.4%** (Zapier AutomationBench 31.4% per system card)
- Toolathlon-Verified: **77.8%** (Pass@3 81.5%); OSWorld 2.1: **80.7%** (partial, per Opus 5.5 card); OSWorld 2.0: 41.7% (system card)
- Terminal-Bench 2.1: **91.4%** (AA) vs **85.0%** (Vals AI — conflicting)
- ApprenticeBench GUI: **72%** (NeoCognition); AA ITBench 49.5%; CWE-bench v1 58.0% (Collinear)

Reasoning / knowledge:

- HLE: **65.0%** with tools (system card) vs **59.1%** (AA)
- GPQA Diamond: **93.7%** (AA; Vals 93.4%); MMLU-Pro: **92.4%** (Vals)
- ARC-AGI-1: **97.5%**; ARC-AGI-2: **90%** (system card)
- Artificial Analysis Intelligence Index: **49/100**, #19 of 60 (max, default fallback)
- AA-LCR: **85.3%**; CritPt: **29.7%**; MLCR-AA: **15.6%**; GraphWalks BFS 256K–1M: **65.0%**
- FrontierMath v2: Tiers 1–3 **90.18%**, Tier 4 **87.81%** (Epoch AI)
- AA-Omniscience: accuracy **68.4%**, hallucination rate **70.0%** (high — honesty caveat); Gray Swan IPI (15 attempts): **1.0%** (very robust to prompt injection)

Coding:

- SWE-bench Pro: **81.2%**; SWE Multilingual: **89.1%**; SWE Multimodal: **54.7%**; DeepSWE: **67.4%**; ProgramBench: **87.6%** (system card)
- AA Coding Index: **81.6%**; AA-SciCode: **63.1%**; LiveCodeBench: **90.5%** (Vals)
- CursorBench 3.2: **73.4%** vs 4.0: **51.8%** (Cursor evals); FrontierSWE v2: **56.3%** (Proximal); FrontierCode 2.0: **32.4%** (Cognition); PostTrainBench v1.1: 40.2%

Long context:

- 1M window; AA-LCR 85.3% (excellent); MLCR-AA 15.6% and GraphWalks 256K–1M 65.0% show mixed deep-retrieval depth.

Multimodal:

- text/image in, text out; ParseBench 78.12%; Design Arena Website 1312 Elo (OpenRouter); no video/audio input verified.

### Normalized scores (1–100)

- **Tool use: 91/100.** Strong agentic suite (GDPval 1764, Tau3 47.2%, Agentic Index 58%, Toolathlon 77.8%, OSWorld 2.1 80.7%); capped below Opus 5.5 by TB4.0 ~53–56% and the low Zapier AutomationBench 31.4%.
- **Reasoning: 92/100.** HLE 65% (with tools), GPQA 93.7%, ARC-AGI-2 90%, LCR 85.3% — elite; capped by the 70% AA hallucination rate and II 49 (#19).
- **Context window: 95/100.** 1M with best-in-class AA-LCR 85.3%; deep-retrieval metrics (MLCR 15.6%, GraphWalks 65%) keep it below the perfect-retrieval band.
- **Multimodal: 82/100.** image input with solid document/parse performance (ParseBench 78.12%); no video/audio input, text-only output.
- **Coding: 94/100.** SWE-bench Pro 81.2%, Multilingual 89.1%, LiveCodeBench 90.5%, coding index 81.6% — frontier; capped by FrontierCode 2.0 32.4% and SWE Multimodal 54.7%.
- **Cost efficiency: 30/100.** $10/$50 with $0.25 cache reads — very expensive; $12.99 per Intelligence Index task (AA #58/58, worst in class) despite the cache-read discount.
- **Overall Score: 91/100.** Mean of (91+92+95+82+94)/5 = 90.8 → 91. Capability flagship, but worth it only when the job justifies the highest price tier.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-03
- Method: public internet research (Anthropic Fable/Mythos 5.1 system card, Artificial Analysis model page/leaderboards, BenchLM aggregation, Vals AI, Cursor evals, Collinear, Epoch AI, NeoCognition); scores are normalized 1–100 interpretations, not official vendor scores. Conflicting harness results (HLE, TB4.0, TB2.1, AutomationBench) listed side by side.
- Reference URLs:
  - [Claude Fable 5.1 and Claude Mythos 5.1 launch (Anthropic)](https://www.anthropic.com/claude-fable-and-mythos-5-1)
  - [Claude Fable 5.1 and Claude Mythos 5.1 System Card (Anthropic)](https://www-cdn.anthropic.com/0339e6a7c5c7b87f5c07798616dc32c215d14235/Claude%20Fable%205.1%20&%20Claude%20Mythos%205.1%20System%20Card.pdf)
  - [Claude Fable 5.1 — Artificial Analysis model page (II 49 #19/60, 1M, $10/$50)](https://artificialanalysis.ai/models/claude-fable-5-1)
  - [Claude Fable 5.1 — BenchLM benchmark aggregation (81.08/100, #7/1004)](https://benchlm.ai/models/claude-fable-5-1)
  - [Claude Fable 5.1 — Vals AI leaderboards (TB2.1, GPQA, LiveCodeBench)](https://www.vals.ai/models/anthropic_claude-fable-5-1)
  - [CursorBench evals (Cursor)](https://cursor.com/cursorbench)
  - [ApprenticeBench GUI results (NeoCognition)](https://neocognition.io/blog/apprentice-bench/)
  - [FrontierMath v2 leaderboards (Epoch AI)](https://epoch.ai/benchmarks/frontiermath-tiers-1-3-v2)
