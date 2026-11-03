# Claude Haiku 5.5 — findings by Mercury 3

- Source: Anthropic/Claude Haiku 5.5
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 5.5
- **Short description:** Anthropic's cheapest/fastest/most capable small model (released 2026-10-07): 1M context, adjustable effort, strong knowledge work (GDPval 1620, Briefcase 1578), computer use (OSWorld 2.1 72.4%), HLE 57.4% w/tools, at a remarkably low $0.10/$0.50 (~90% below Haiku 4.5 under 100K prompts).
- **Provider / access:** Anthropic Claude API (`claude-haiku-5-5`), claude.ai, Bedrock/Vertex/Azure; 6 API providers tracked by Artificial Analysis.
- **Release / knowledge:** Released 2026-10-07; reliable knowledge cutoff Jun 2026 (lineage).
- **IDs:** `claude-haiku-5-5` (Claude API; adaptive thinking, adjustable effort, default medium).
- **Context window:** 1,000,000 tokens (1M) total; max output 128K.
- **Modalities:** text + image input, text output; reasoning (adaptive); tool calls; web search/fetch; code execution; browser-use SDK beta.
- **Pricing (as of 2026-11-03):** $0.10 input / $0.50 output per 1M tokens ≤100K prompts ($0.50/$2.50 above), cache reads $0.01/$0.05, cache writes $0.125/$0.625.
- **Architecture:** proprietary; parameter count undisclosed; not open-weights.

### Raw benchmarks found

Agent / tool use (Anthropic launch + AA + BenchLM):

- GDPval-AA v2.1: **1620 Elo** (56.0% normalized); AA Briefcase v1.1: **1578 Elo**; OSWorld 2.1 Offline: **72.4%**; TB4.0: **39.2%** (Anthropic) / 32.8% (AA); FrontierCode 1.1 Main: **46.4%**
- AA Harvey LAB: 89.9%; AutomationBench-AA: 35.4%; AnalystAgent: 53.8%; GDPR.pdf: 20.8%; MazeBench ASCII: 1%; FrontierSWE v2: 43.8%; FrontierCode 2.0: 27.7%

Reasoning / knowledge:

- HLE: **57.4%** with tools / 45.9% without (Anthropic); AA-HLE 44.4%; AA II: **36** (#1/26 in class; AA)
- ARC-AGI-1: **89.00%**; ARC-AGI-2: **61.3%**; ARC-AGI-3: 0.5% (2.82% w/ adapter)
- AA-LCR: **82.7%**; CritPt: 18.9%; MLCR-AA: 35.0%; FrontierMath v2 Tiers 1–3 75.09%, Tier 4 46.34% (Epoch AI)
- AA-Omniscience: accuracy 34.7%, hallucination rate 34.2%

Coding:

- Terminal-Bench 4.0 39.2%; FrontierCode 1.1 Main 46.4%; FrontierSWE v2 43.8%; AA-SciCode: 55.0%; Bug Hunt Bench: 21.5 fixes; no SWE Verified row verified in sources reviewed

Long context:

- 1M window; AA-LCR 82.7%; no MRCR/GraphWalks figure verified.

Multimodal:

- text/image in, text out; Chartography (no tools) 46.4%; ParseBench 56.10%; Design Arena 1262 Elo.

### Normalized scores (1–100)

- **Tool use: 81/100.** GDPval 1620, OSWorld 2.1 72.4%, Briefcase 1578 — excellent for a small model; capped by AutomationBench 35.4%, GDPR.pdf 20.8%, MazeBench 1%, and TB4.0 39.2%.
- **Reasoning: 87/100.** II 36 (#1 in class), HLE 57.4% w/tools, ARC-AGI-2 61.3%, LCR 82.7%, FrontierMath 75.1%; capped by CritPt 18.9% and Omniscience accuracy 34.7%.
- **Context window: 90/100.** 1M with strong LCR 82.7%; no deep-retrieval figure verified.
- **Multimodal: 81/100.** image input with moderate visual rows (Chartography 46.4%); text-only output.
- **Coding: 80/100.** FrontierCode 1.1 46.4%, FrontierSWE 43.8%, SciCode 55%, TB4.0 39.2%; no SWE Verified row verified.
- **Cost efficiency: 98/100.** $0.10/$0.50 with $0.01 cache reads — exceptional value; 235.4 t/s (#12 speed); very verbose on II (300M tokens).
- **Overall Score: 84/100.** Mean of (81+87+90+81+80)/5 = 83.8 → 84. A remarkable small-model value pick; heavy verbosity at max effort is the main caveat.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-03
- Method: public internet research (Anthropic Haiku 5.5 announcement + system card, Artificial Analysis model page/leaderboards, BenchLM aggregation, ARC Prize, Epoch AI); scores are normalized 1–100 interpretations, not official vendor scores. Conflicting harness results (TB4.0 39.2 vs 32.8) listed side by side.
- Reference URLs:
  - [Introducing Claude Haiku 5.5 (Anthropic, 2026-10-07)](https://www.anthropic.com/news/claude-haiku-5-5)
  - [Claude Haiku 5.5 System Card (Anthropic)](https://www.anthropic.com/claude-haiku-5-5-system-card)
  - [Claude Haiku 5.5 — Artificial Analysis model page ($0.10/$0.50, 1M, II 36)](https://artificialanalysis.ai/models/claude-haiku-5-5)
  - [Claude Haiku 5.5 — BenchLM benchmark aggregation](https://benchlm.ai/models/claude-haiku-5-5)
  - [ARC Prize results — Claude Haiku 5.5](https://arcprize.org/results/anthropic-claude-haiku-5-5)
