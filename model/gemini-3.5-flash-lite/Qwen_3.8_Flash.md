# Gemini 3.5 Flash Lite — findings by Qwen 3.8 Flash

- Source: Google DeepMind / Gemini 3.5 Flash Lite (`google/gemini-3-5-flash-lite`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash Lite
- **Short description:** Google's high-efficiency, natively multimodal reasoning tier of the Gemini 3.5 Flash family — an inexpensive omni-input workhorse with upgraded agentic capability versus 3.1 Flash-Lite, but materially below the full Flash/Pro on deep reasoning. Flagged as a variant/iteration of Gemini 3.5 Flash.
- **Provider / access:** Google AI Studio / Vertex AI (`gemini-3.5-flash-lite`), also OpenRouter (`google/gemini-3.5-flash-lite`). Chat/generateContent; reasoning; tool calls.
- **Release / knowledge:** announced via blog.google alongside Gemini 3.6 Flash and 3.5 Flash Cyber (mid/late 2026); exact day not independently confirmed.
- **IDs:** `google/gemini-3-5-flash-lite`.
- **Context window:** 1M input (BenchLM/OpenRouter) — max output not separately published; verified via BenchLM model card.
- **Modalities:** text + image + video + audio in; text out (natively multimodal); reasoning on; tool calls. No image/audio/video *output* on this endpoint (TTS/Live are separate variants).
- **Pricing (as of 2026-10-02):** $0.30 in / $2.50 out per 1M; cached read $0.03. Paid; a free tier exists on AI Studio with rate limits.
- **Architecture:** proprietary multimodal MoE; params not disclosed.

### Raw benchmarks found

> Verified against BenchLM (24 of 618 rows; overall 51.53/100, #85 of 645), citing Google's launch blog, Artificial Analysis, and Vals AI (fetched 2026-10-02). BenchLM flags partial coverage → conservative overall.

Agent / tool use:

- OSWorld-Verified: **74%**; Terminal-Bench 2.1: **54.0%** (Vals 50.2%)
- GDPval-AA: **1139** Elo (AA-normalized 23.5%); AA Agentic Index: **15.9%**

Reasoning / knowledge:

- AA-GPQA Diamond: **83.8%**; AA-HLE: **18.8%** (well under the 40% bar)
- AA-LCR: **76.0%**; MRCRv2: **72.2%**; CritPt: **0.0%**; MMLU-Pro (Vals): **85.8%**
- Artificial Analysis Intelligence Index: **22.2** — Lite-tier aggregate
- Omniscience: Index **5.2** / Accuracy 29.5% / Hallucination 34.4% (weak factuality)

Coding:

- SWE-bench Pro: **54.2%**; SWE-bench (Vals): **75.0%**; LiveCodeBench (Vals): **79.0%**
- AA-SciCode: **41.3%**; AA Coding Index: **49.3%**

Multimodal / long context:

- AA-MMMU-Pro: **79.0%** (the only published visual row)
- 1M window; MRCR 72.2 / LCR 76.0 — no ≥98% retrieval at 512K+ reported.

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 62/100.** OSWorld-Verified 74% is strong for computer use, but Terminal-Bench 2.1 54%, GDPval-AA 1139 (23.5% normalized) and a low AA Agentic Index of 15.9 are Lite-tier mid — capped well below the ~88 frontier band.
- **Reasoning: 60/100.** GPQA Diamond 83.8% and MMLU-Pro 85.8% are respectable, but HLE 18.8% is far under the 40% bar, the AA Intelligence Index is only 22.2, CritPt 0.0%, and a weak Omniscience profile (5.2 index, 34.4% hallucination) keep this squarely mid.
- **Context window: 95/100.** 1M input meets the ≥1M tier; retrieval evidence (MRCR 72.2 / LCR 76.0) is supportive but not ≥98% at 512K+, so the band floor.
- **Multimodal: 85/100.** text+image+video+audio in / text out is the 75–90 omni-input band; strong natively multimodal design, but only one published visual row (MMMU-Pro 79.0) and no non-text output hold it at the top rather than 90+.
- **Coding: 72/100.** LiveCodeBench 79.0% and SWE-bench (Vals) 75.0% are good, but SWE-bench Pro 54.2%, AA-SciCode 41.3% (under the 55 ref) and AA Coding Index 49.3% are mid, capping it below the frontier 90s.
- **Cost efficiency: 90/100.** $0.30 / $2.50 per 1M with $0.03 cache read is cheap for an omni model (methodology places ~$0.60/$2.20 ≈ 92; this sits just under on output). Cost is excluded from Overall.
- **Overall Score: 75/100.** Mean of Tool 62, Reasoning 60, Context 95, Multimodal 85, Coding 72 = 74.8 → 75. Best fit: high-volume, cost-sensitive multimodal and computer-use work where 1M omni context and speed matter more than deep reasoning; the low HLE/AA-Index/Omniscience profile makes it a poor choice for hard unaided reasoning or factual recall — escalate to full Gemini 3.5/3.7/3.8 Flash or Pro for that.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (BenchLM rows citing Google launch blog, Artificial Analysis and Vals AI; OpenRouter pricing; fetched 2026-10-02); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
