# Grok 4 — findings by Mercury 3

- Source: xAI/Grok 4
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4
- **Short description:** xAI's July 2025 flagship (released 2025-07-10, superseded by Grok 4.1/4.3/4.20/4.5+): strong math (AIME 92.7%, MATH-500 99%), solid coding (LCB 81.9%), 256K context, $3/$15 — a capable older-generation model now well behind the Grok 4.5/4.6/4.7 line.
- **Provider / access:** xAI API (`grok-4`), x.ai; 1 API provider tracked by Artificial Analysis.
- **Release / knowledge:** Released 2025-07-10; knowledge cutoff not published.
- **IDs:** `grok-4` (xAI API; reasoning; non-reasoning variant exists).
- **Context window:** 256,000 tokens total (AA) / 260K (docs); max output not disclosed (500K output cap per models.dev family block).
- **Modalities:** text + image input, text output; reasoning (extended thinking); tool calls; structured outputs.
- **Pricing (as of 2026-11-03):** $3.00 input / $15.00 output per 1M tokens.
- **Architecture:** proprietary; parameter count undisclosed; not open-weights.

### Raw benchmarks found

Agent / tool use:

- τ²-bench: **74.9%** (AA); GERT Labs: 42.34%; no modern agentic rows (2025-era)

Reasoning / knowledge:

- GPQA Diamond: **87.7%** (AA); HLE: **26.7%**; MMLU-Pro: 86.6%; AIME 2025: **92.7%**; MATH-500: **99.0%**; Global-MMLU-Lite: 89.5%; IFBench: 53.7%
- AA-LCR: **68.0%**; CritPt: 2.0%; AA II: 22.5; AA-Omniscience: accuracy 40.5%, hallucination rate 64.5%

Coding:

- LiveCodeBench: **81.9%** (AA); React Native Evals: **72.6%**; no SWE-bench Verified row verified in sources reviewed

Long context:

- 256K window; AA-LCR 68.0%; no MRCR/GraphWalks figure verified.

Multimodal:

- text/image in, text out; MMMU-Pro 68.8% (AA).

### Normalized scores (1–100)

- **Tool use: 68/100.** τ² 74.9% decent; capped by GERT 42.34% and no modern agentic rows.
- **Reasoning: 78/100.** GPQA 87.7%, AIME 92.7%, MATH-500 99%; capped by HLE 26.7%, CritPt 2%, II 22.5, and LCR 68%.
- **Context window: 75/100.** 256K (below the 1M class) with moderate LCR 68%.
- **Multimodal: 80/100.** image input with MMMU-Pro 68.8%; text-only output.
- **Coding: 78/100.** LCB 81.9%, React Native 72.6%; no SWE Verified row verified.
- **Cost efficiency: 65/100.** $3/$15 — premium for its generation; 74.4 t/s.
- **Overall Score: 76/100.** Mean of (68+78+75+80+78)/5 = 75.8 → 76. A capable July-2025 model, now far behind the Grok 4.5+ line.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-03
- Method: public internet research (Artificial Analysis model page/leaderboards, BenchLM aggregation); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Grok 4 — Artificial Analysis model page ($3/$15, 256K)](https://artificialanalysis.ai/models/grok-4)
  - [Grok 4 — BenchLM benchmark aggregation](https://benchlm.ai/models/grok-4)
