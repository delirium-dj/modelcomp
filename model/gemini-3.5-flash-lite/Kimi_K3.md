# Gemini 3.5 Flash-Lite — findings by Kimi K3

- Source: Google / Gemini 3.5 Flash-Lite (`gemini-3.5-flash-lite`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash-Lite
- **Short description:** Google's fastest, most cost-effective 3.5-class model — "best for low-latency and high throughput agentic tasks" (deepmind.google), ~350 output tokens/sec per the Artificial Analysis Index. Keeps the 1M window but trading away front-line reasoning (CritPt 0%, HLE 18.8%). Successor to 3.1 Flash-Lite, which it beats across the board.
- **Provider / access:** Google Gemini API (`gemini-3.5-flash-lite`), AI Studio, Gemini app, Gemini Enterprise Agent Platform. Status: General availability (deepmind.google model information).
- **Release / knowledge:** 2026 (exact date not verified in my sources); cutoff not verified.
- **IDs:** `google/gemini-3.5-flash-lite`; listed on OpenCode Zen as `gemini-3.5-flash-lite` at $0.30/$2.50 (no Free-tier ID verified).
- **Context window:** 1M tokens input / 64K max output (deepmind.google model information).
- **Modalities:** text/image/video/audio/PDF in (deepmind.google); text out; reasoning with selectable thinking levels; tool use: function calling, Search as a tool, Computer use; JSON mode.
- **Pricing (as of 2026-09-29):** $0.30/M input, $2.50/M output, no caching tier noted (deepmind.google performance table — verified this pass).
- **Architecture:** proprietary (Google DeepMind).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 (Terminus-2 harness): **54.0%** (deepmind.google; Vals 50.2% per benchlm.ai)
- OSWorld-Verified: **74.0%** (deepmind.google — above GPT-5.4 mini's 72.1% and Claude Haiku 4.5's 50.7% in the same table)
- GDPval-AA v2: **1140 Elo** (deepmind.google; benchlm.ai snapshot 1139 Elo / 23.5% normalized)
- MLE-Bench: **39.2%** (deepmind.google)
- AA EnterpriseOps-Gym: **42.3%**; AA Agentic Index: **15.9%** (benchlm.ai)
- Tau2/Tau3 / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **83.8%** (AA and Vals agree) (benchlm.ai)
- HLE (AA-HLE): **18.8%** (benchlm.ai)
- CharXiv Reasoning: **74.5%** no-tools / **76.5%** with tools (deepmind.google)
- MRCR v2 (8-needle): **72.2%** at 128k average, **21.3%** at 1M pointwise (deepmind.google); AA-LCR: **76.0%**; CritPt: **0.0%** (benchlm.ai)
- Artificial Analysis Intelligence Index: **22.2**; BenchLM overall **50.96/100, #70 of 507**
- AA-Omniscience Accuracy / Hallucination Rate: **29.5% / 34.4%**; MMLU-Pro (Vals): **85.8%** (benchlm.ai)

Coding:

- SWE-bench Pro (Public): **54.2%** (deepmind.google — above Claude Haiku 4.5's 39.5%, ~tied with GPT-5.4 mini's 54.4%)
- SWE-bench (Vals): **75.0%**; SWE-bench Verified: no separate verified public score found (benchlm.ai)
- LiveCodeBench (Vals): **79.0%** (benchlm.ai)
- AA-SciCode: **41.3%**; AA Coding Index: **49.3** (benchlm.ai)

Long context:

- MRCR v2 (8-needle): 72.2% at 128k average but **21.3% at 1M pointwise** (deepmind.google) — strong mid-window retrieval, heavy decay at max window; AA-LCR 76.0% (benchlm.ai).

Multimodal:

- AA-MMMU-Pro: **79.0%** (benchlm.ai); CharXiv 74.5–76.5% (deepmind.google); image/video/audio/PDF input confirmed by deepmind.google model information.

### Normalized scores (1–100)

- **Tool use: 68/100.** OSWorld-Verified 74% and TB 2.1 54% are decent for the tier; capped by GDPval 1140 and Agentic Index 15.9%; τ scores unverified.
- **Reasoning: 62/100.** GPQA 83.8% and MMLU-Pro 85.8% fine; capped hard by CritPt 0.0%, HLE 18.8%, AA Index 22.2 — below the 30–45% HLE band.
- **Context window: 75/100.** Verified 1M/64K window with MRCR 72.2% at 128k, but 21.3% at 1M pointwise forces a band (95–100) exception — effective window is mid-range.
- **Multimodal: 78/100.** Full image/video/audio/PDF input stack verified this pass, but measured vision rows (MMMU-Pro 79.0%, CharXiv ~75%) sit below the 90–95 band; text-only output caps it further.
- **Coding: 72/100.** SWE-bench Pro 54.2% and LiveCodeBench 79.0% beat Haiku 4.5 class at a fraction of the price; capped by Coding Index 49.3 and SciCode 41.3%.
- **Cost efficiency: 93/100.** Verified $0.30/$2.50 — the exact cheap-tier anchor (≈93); Google's cheapest 3.x tier.
- **Overall Score: 71/100.** Mean of (68+62+75+78+72)/5 = 71.0. Best fit: massive-volume cheap summarization/RAG with up to ~128K effective context where deep reasoning is unnecessary.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-29
- Method: fresh public web research (deepmind.google flash-lite model page & performance table, benchlm.ai scorecard); scores are normalized 1–100 interpretations, not official vendor scores. Reverified 2026-09-29: verified pricing ($0.30/$2.50), GA status, 1M/64K window and full input-modality stack against deepmind.google; added CharXiv (74.5/76.5), MLE-Bench (39.2%) and MRCR 1M pointwise (21.3%) rows — the latter replaces the overstated prior claim of 72.2% "across the 1M window" (that figure is the 128k average); adjusted scores to band-compliant values, Context lowered to reflect measured 1M decay.
- Future sources: add a new file next to this one using the same headings.
