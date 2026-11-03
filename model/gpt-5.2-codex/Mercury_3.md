# GPT-5.2 Codex — findings by Mercury 3

- Source: OpenAI/GPT-5.2 Codex
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2 Codex
- **Short description:** OpenAI's December 2025 coding-agent model (released 2025-12-11, superseded by GPT-5.3-Codex/5.4 line): strong agentic tool use (τ² 92.1%), coding (LCB 88%), GPQA 89.9%, 400K context, Aug 2025 cutoff, $1.75/$14.
- **Provider / access:** OpenAI API (`gpt-5.2-codex`), Codex; 1 API provider tracked by Artificial Analysis.
- **Release / knowledge:** Released 2025-12-11; knowledge cutoff Aug 31, 2025.
- **IDs:** `gpt-5.2-codex` (OpenAI API; xhigh reasoning).
- **Context window:** 400,000 tokens total; max output 128K (models.dev family block).
- **Modalities:** text + image input, text output; reasoning (extended thinking); tool calls.
- **Pricing (as of 2026-11-03):** $1.75 input / $14.00 output per 1M tokens, 90% cache discount.
- **Architecture:** proprietary; parameter count undisclosed; not open-weights.

### Raw benchmarks found

Agent / tool use:

- τ²-bench: **92.1%** (AA); GERT Labs: 51.79%; JobBench: 26.0%; no GDPval/Agentic-index figure verified in sources reviewed

Reasoning / knowledge:

- GPQA Diamond: **89.9%** (AA); HLE: **35.7%** (AA); AA-LCR: **82.3%**; CritPt: **8.7%**; AA-IFBench: 77.6%; AA II: 28.5
- AA-Omniscience: accuracy 41.1%, hallucination rate 73.4%

Coding:

- LiveCodeBench: **88.0%** (Vals); SWE-bench: **72.4%** (Vals); Vibe Code Bench: **37.91%**; no SWE Verified/Pro row verified in sources reviewed

Long context:

- 400K window; AA-LCR 82.3%; no MRCR/GraphWalks figure verified.

Multimodal:

- text/image in, text out; MMMU-Pro 76.3% (AA).

### Normalized scores (1–100)

- **Tool use: 78/100.** τ² 92.1% strong; capped by GERT 51.79%, JobBench 26%, and missing GDPval.
- **Reasoning: 84/100.** GPQA 89.9%, LCR 82.3%, II 28.5; capped by HLE 35.7%, CritPt 8.7%, and hallucination rate 73.4%.
- **Context window: 80/100.** 400K (below the 1M class) with good LCR 82.3%.
- **Multimodal: 82/100.** image input with solid MMMU-Pro 76.3%; text-only output.
- **Coding: 83/100.** LCB 88%, SWE 72.4%; capped by Vibe 37.91% and missing SWE Verified.
- **Cost efficiency: 78/100.** $1.75/$14 with 90% cache discount — fair; 103.8 t/s, high TTFT (166s).
- **Overall Score: 81/100.** Mean of (78+84+80+82+83)/5 = 81.4 → 81. A strong coding-agent model; the 400K cap and thin coding-verified rows date it.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-03
- Method: public internet research (Artificial Analysis model page/leaderboards, BenchLM aggregation, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [GPT-5.2 Codex — Artificial Analysis model page ($1.75/$14, 400K, cutoff Aug 2025)](https://artificialanalysis.ai/models/gpt-5-2-codex)
  - [GPT-5.2-Codex — BenchLM benchmark aggregation](https://benchlm.ai/models/gpt-5-2-codex)
  - [GPT-5.2 Codex — Vals AI model page](https://www.vals.ai/models/openai_gpt-5.2-codex)
