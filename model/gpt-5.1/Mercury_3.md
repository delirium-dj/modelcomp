# GPT-5.1 — findings by Mercury 3

- Source: OpenAI/GPT-5.1
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1
- **Short description:** OpenAI's November 2025 sharpened GPT-5 generation (released 2025-11-13, superseded by GPT-5.2/5.4/5.5): coding/product/tool-assisted focus, 400K context, Sep 2024 cutoff, $1.25/$10, fast (137.9 t/s) — a capable older-generation model now well behind the GPT-5.6/6 line.
- **Provider / access:** OpenAI API (`gpt-5.1`), ChatGPT; 33 providers per models.dev.
- **Release / knowledge:** Released 2025-11-13; knowledge cutoff Sep 30, 2024.
- **IDs:** `gpt-5.1` (OpenAI API; high reasoning; sibling GPT-5.1-Codex).
- **Context window:** 400,000 tokens total; max output 128,000.
- **Modalities:** text + image input, text output; reasoning (extended thinking); tool calls.
- **Pricing (as of 2026-11-03):** $1.25 input / $10.00 output per 1M tokens, 90% cache discount.
- **Architecture:** proprietary; parameter count undisclosed; not open-weights.

### Raw benchmarks found

Agent / tool use:

- τ²-bench: **81.9%** (AA); TB Hard: **45.5%**; GERT Labs: 41.24%; GDPval-AA: **930 Elo** (16.3% normalized — weak)
- No strong agentic/coding rows in modern harnesses (Nov 2025-era model)

Reasoning / knowledge:

- GPQA Diamond: **87.3%** (AA); HLE: **28.5%** (AA); MMLU-Pro: 87.0% (AA); AIME 2025: **94.0%**; Global-MMLU-Lite: 90.6%; IFBench: 72.9%
- ARC-AGI-1: **72.83%** (thinking high); AA-LCR: **80.0%**; CritPt: **4.9%**; AA II: 24.7; hallucination rate 51.9%

Coding:

- LiveCodeBench: **86.8%** (AA); AA Coding Index: 49.4%; Vibe Code Bench: 24.61% (Vals)

Long context:

- 400K window; AA-LCR 80.0%; no MRCR/GraphWalks figure verified.

Multimodal:

- text/image in, text out; MMMU-Pro 75.5% (AA); Design Arena 1185 Elo.

### Normalized scores (1–100)

- **Tool use: 70/100.** τ² 81.9% decent; capped by GDPval 930 (16.3%), TB Hard 45.5%, and GERT 41.24%.
- **Reasoning: 76/100.** AIME 94%, GPQA 87.3%, LCR 80%; capped by HLE 28.5%, II 24.7, CritPt 4.9%, and ARC-AGI-1 72.83%.
- **Context window: 78/100.** 400K (below the 1M class) with moderate LCR 80%.
- **Multimodal: 81/100.** image input with MMMU-Pro 75.5%; text-only output.
- **Coding: 77/100.** LiveCodeBench 86.8%; capped by Coding Index 49.4% and Vibe 24.61%.
- **Cost efficiency: 78/100.** $1.25/$10 with 90% cache discount — fair; 137.9 t/s fast, TTFT 35.5s.
- **Overall Score: 76/100.** Mean of (70+76+78+81+77)/5 = 76.4 → 76. A capable late-2025 model, now far behind the GPT-5.6/6 line — the queue average leans optimistic.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-03
- Method: public internet research (Artificial Analysis model page/leaderboards, BenchLM aggregation, Vals AI, ARC Prize, models.dev); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [GPT-5.1 — Artificial Analysis model page ($1.25/$10, 400K, cutoff Sep 2024)](https://artificialanalysis.ai/models/gpt-5-1)
  - [GPT-5.1 — BenchLM benchmark aggregation](https://benchlm.ai/models/gpt-5-1)
  - [GPT-5.1 — models.dev registry (33 providers)](https://models.dev/models/openai/gpt-5.1)
  - [ARC Prize — GPT-5.1 verified results](https://arcprize.org/leaderboard)
