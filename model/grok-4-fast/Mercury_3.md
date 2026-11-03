# Grok 4 Fast — findings by Mercury 3

- Source: xAI/Grok 4 Fast
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4 Fast (queue slug `grok-4-fast`; `grok-4-fast-reasoning` is a docs.x.ai alias of the same checkpoint — merged, never a second folder)
- **Short description:** xAI's fast variant of the base Grok 4 generation: 2M context, competitive coding (LCB 83.2%), mid-tier reasoning (GPQA 84.7%, AIME 89.7%) — a speed-oriented workhorse behind the 4.1/4.3+ line.
- **Provider / access:** xAI API (`grok-4-fast`; reasoning is system-prompt steering of the same checkpoint), x.ai.
- **Release / knowledge:** Grok 4 era (2025–2026); knowledge cutoff not published.
- **IDs:** `grok-4-fast` (canonical; `grok-4-fast-reasoning` alias; same 2M window and price).
- **Context window:** 2,000,000 tokens (2M) total; max output not disclosed.
- **Modalities:** text + image input, text output; reasoning (system-prompt steering); tool calls.
- **Pricing (as of 2026-11-03):** not verified in sources reviewed for this variant; flagged.
- **Architecture:** proprietary; parameter count undisclosed; not open-weights.

### Raw benchmarks found

Agent / tool use:

- τ²-bench: **65.8%** (AA); no other agentic rows verified in sources reviewed

Reasoning / knowledge:

- GPQA Diamond: **84.7%** (AA); HLE: **19.1%**; MMLU-Pro: 85.0%; AIME 2025: **89.7%**; AA-IFBench: 50.5%
- AA-LCR: **73.7%**; CritPt: 2.9%; AA II: 17.9; AA-Omniscience: accuracy 22.8%, hallucination rate 68.3%

Coding:

- LiveCodeBench: **83.2%** (AA); Vibe Code Bench: 0.00% (Vals); no SWE row verified

Long context:

- 2M window; AA-LCR 73.7%; no MRCR/GraphWalks figure verified.

Multimodal:

- text/image in, text out; MMMU-Pro 61.8% (AA).

### Normalized scores (1–100)

- **Tool use: 66/100.** τ² 65.8% moderate; no other agentic rows verified — capped by missing evidence.
- **Reasoning: 74/100.** GPQA 84.7%, AIME 89.7%; capped by HLE 19.1%, CritPt 2.9%, II 17.9, and Omniscience accuracy 22.8%.
- **Context window: 88/100.** 2M (top class) with moderate LCR 73.7%.
- **Multimodal: 79/100.** image input with MMMU-Pro 61.8%; text-only output.
- **Coding: 76/100.** LCB 83.2%; capped by Vibe 0.00% and missing SWE rows.
- **Cost efficiency: 72/100.** Fast-variant pricing unverified; speed-oriented profile.
- **Overall Score: 77/100.** Mean of (66+74+88+79+76)/5 = 76.6 → 77. A fast 2M workhorse; weak agentic and thin verified coverage flagged.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-03
- Method: public internet research (Artificial Analysis model page/leaderboards, BenchLM aggregation, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores. Identity note: `grok-4-fast-reasoning` is an alias of this checkpoint (repo rules) — scored here.
- Reference URLs:
  - [Grok 4 Fast (Reasoning) — BenchLM benchmark aggregation](https://benchlm.ai/models/grok-4-fast-reasoning)
  - [Grok 4 Fast — Vals AI model page](https://www.vals.ai/models/grok_grok-4-fast-reasoning)
