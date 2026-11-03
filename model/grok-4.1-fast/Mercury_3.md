# Grok 4.1 Fast — findings by Mercury 3

- Source: xAI/Grok 4.1 Fast
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.1 Fast (queue slug `grok-4.1-fast`; `grok-4.1-fast-reasoning` is a docs.x.ai alias of the same checkpoint — merged, never a second folder)
- **Short description:** xAI's fast high-volume variant of the Grok 4.1 generation: 2M context, very strong agentic tool use (τ² 93.3%), competitive coding (LCB 82.2%), mid-tier reasoning (GPQA 85.3%) — a speed-price-oriented workhorse.
- **Provider / access:** xAI API (`grok-4.1-fast`; reasoning is system-prompt steering of the same checkpoint), x.ai.
- **Release / knowledge:** Grok 4.1 era (2025–2026); knowledge cutoff not published.
- **IDs:** `grok-4.1-fast` (canonical; `grok-4.1-fast-reasoning` alias).
- **Context window:** 2,000,000 tokens (2M) total; max output not disclosed.
- **Modalities:** text + image input, text output; reasoning (system-prompt steering); tool calls.
- **Pricing (as of 2026-11-03):** not verified in sources reviewed for this variant (family Grok 4.1-class); flagged.
- **Architecture:** proprietary; parameter count undisclosed; not open-weights.

### Raw benchmarks found

Agent / tool use:

- τ²-bench: **93.3%** (AA); no other agentic rows verified in sources reviewed

Reasoning / knowledge:

- GPQA Diamond: **85.3%** (AA); HLE: **19.3%**; MMLU-Pro: 85.4%; AA-IFBench: 52.7%
- AA-LCR: **74.0%**; CritPt: 2.9%; AA II: 20.4; AA-Omniscience: accuracy 25.1%, hallucination rate 73.4%

Coding:

- LiveCodeBench: **82.2%** (AA); Vibe Code Bench: 1.20% (Vals); no SWE row verified

Long context:

- 2M window; AA-LCR 74.0%; no MRCR/GraphWalks figure verified.

Multimodal:

- text/image in, text out; MMMU-Pro 63.3% (AA).

### Normalized scores (1–100)

- **Tool use: 70/100.** τ² 93.3% strong; no other agentic rows verified — capped by missing evidence.
- **Reasoning: 75/100.** GPQA 85.3%, LCR 74%; capped by HLE 19.3%, CritPt 2.9%, II 20.4, and Omniscience accuracy 25.1%.
- **Context window: 88/100.** 2M (top class) with moderate LCR 74%.
- **Multimodal: 80/100.** image input with MMMU-Pro 63.3%; text-only output.
- **Coding: 77/100.** LCB 82.2%; capped by Vibe 1.20% and missing SWE rows.
- **Cost efficiency: 72/100.** Fast-variant pricing unverified; speed-oriented profile.
- **Overall Score: 78/100.** Mean of (70+75+88+80+77)/5 = 78.0 → 78. A fast 2M workhorse; thin verified agentic/coding coverage flagged.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-03
- Method: public internet research (Artificial Analysis model page/leaderboards, BenchLM aggregation, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores. Identity note: `grok-4.1-fast-reasoning` is an alias of this checkpoint (repo rules) — scored here.
- Reference URLs:
  - [Grok 4.1 Fast (Reasoning) — BenchLM benchmark aggregation](https://benchlm.ai/models/grok-4-1-fast-reasoning)
  - [Grok 4.1 Fast — Vals AI model page](https://www.vals.ai/models/grok_grok-4.1-fast-reasoning)
