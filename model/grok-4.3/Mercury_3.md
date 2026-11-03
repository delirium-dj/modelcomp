# Grok 4.3 — findings by Mercury 3

- Source: xAI/Grok 4.3
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.3
- **Short description:** xAI's April 2026 model (released 2026-04-30, superseded by Grok 4.5/4.6/4.7): fast, reliable tool calling/instruction following at a very competitive $1.25/$2.50, 1M context, 500K-class output; mid-tier reasoning/coding profile.
- **Provider / access:** xAI API (`grok-4.3`), x.ai; 3 API providers tracked by Artificial Analysis; Batch API −20%.
- **Release / knowledge:** Released 2026-04-30; knowledge cutoff not published.
- **IDs:** `grok-4.3` (xAI API; alias `grok-4.3-latest`; reasoning effort none→xhigh, default low).
- **Context window:** 1,000,000 tokens total; max output not disclosed (500K output cap per models.dev family block).
- **Modalities:** text + image input, text output; reasoning (extended thinking); tool calls; structured outputs.
- **Pricing (as of 2026-11-03):** $1.25 input / $2.50 output per 1M tokens (<200K prompts; $2.50/$5.00 above), cached input $0.20.
- **Architecture:** proprietary; parameter count undisclosed; not open-weights.

### Raw benchmarks found

Agent / tool use:

- τ²-bench: **97.7%** (AA); GDPval-AA: **1018 Elo** (AA; normalized 29.2%); GERT Labs: 43.86%
- APEX-Agents-AA: 17.0%; AA Agentic Index: 17.2%; ResearchClawBench: 12.4%; TB2.1 (Vals): 41.9%

Reasoning / knowledge:

- GPQA Diamond: **90.1%** (AA) / 91.4% (Vals); HLE: **35%** (AA; 37.2% AA-HLE); MMLU-Pro: 85.8% (Vals); IFBench: **81.3%**
- AA-LCR: **64.3%**; CritPt: **8.0%**; AA II: 37.6; FrontierMath v2 Tiers 1–3 42.81%, Tier 4 14.63% (Epoch AI)
- AA-Omniscience: accuracy 34.6%, hallucination rate 25.0%

Coding:

- LiveCodeBench: **84.5%** (Vals); SWE-bench: **71.4%** (Vals); AA Coding Index: 42.3%; AA-SciCode: 48.3%
- No SWE Verifed/SWE-Pro/TB row verified in sources reviewed

Long context:

- 1M window; AA-LCR 64.3% (weak); no MRCR/GraphWalks figure verified.

Multimodal:

- text/image in, text out; MMMU-Pro 78.1% (AA); Design Arena 1195 Elo.

### Normalized scores (1–100)

- **Tool use: 70/100.** τ² 97.7% strong; capped by GDPval 1018 (29.2%), APEX 17%, Agentic Index 17.2%, ResearchClawBench 12.4%, and Vals TB2.1 41.9%.
- **Reasoning: 77/100.** GPQA 90.1%, II 37.6; capped by HLE 35%, LCR 64.3%, CritPt 8%, and FrontierMath 42.8%.
- **Context window: 82/100.** 1M but with weak LCR 64.3%.
- **Multimodal: 83/100.** image input with solid MMMU-Pro 78.1%; text-only output.
- **Coding: 78/100.** LiveCodeBench 84.5%, SWE 71.4%; capped by coding index 42.3%, SciCode 48.3%, and missing SWE Verified.
- **Cost efficiency: 88/100.** $1.25/$2.50 with $0.20 cached — very competitive value; 79.4 t/s, high TTFT (27.3s).
- **Overall Score: 78/100.** Mean of (70+77+82+83+78)/5 = 78.0 → 78. A cheap 1M workhorse; weak agentic rows and LCR are the main caveats.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-03
- Method: public internet research (xAI model docs, Artificial Analysis model page/leaderboards, BenchLM aggregation, Vals AI, Epoch AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Grok 4.3 model docs (xAI)](https://docs.x.ai/docs/models/grok-4.3)
  - [Grok 4.3 — Artificial Analysis model page ($1.25/$2.50, 1M)](https://artificialanalysis.ai/models/grok-4-3)
  - [Grok 4.3 — BenchLM benchmark aggregation](https://benchlm.ai/models/grok-4-3)
  - [Grok 4.3 — Vals AI model page](https://www.vals.ai/models/grok_grok-4.3)
  - [FrontierMath v2 leaderboards (Epoch AI)](https://epoch.ai/benchmarks/frontiermath-tiers-1-3-v2)
