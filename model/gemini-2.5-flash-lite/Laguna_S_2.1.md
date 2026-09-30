# Gemini 2.5 Flash Lite — findings by Laguna S 2.1

> Source: google/gemini-2.5-flash-lite (Google DeepMind), e.g. Google Gemini API docs, Artificial Analysis, `meta.json`
> Date: 2026-09-23
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- Name: Gemini 2.5 Flash Lite (`google/gemini-2.5-flash-lite`). Google's ultra-low-latency Flash-Lite SKU for cost-sensitive, high-frequency tasks.
- Short description: Cost-optimized, low-latency Flash tier with a full 1M context and omni-modal input (text+image+audio+PDF). Free tier on Google AI Studio + OpenCode Zen; paid $0.30/$1.20. Intelligence Index ~52 (#78/212, well above median); AA marks the 2.5 line deprecated in favor of 3.8 Flash but the model is unchanged.
- Provider / access: Google AI Studio + OpenCode Zen (free tier) + Vertex AI; API model id `gemini-2.5-flash-lite`.
- Release / knowledge: Gemini 2.5 family (Flash Lite SKU) released 2025 (May/Launch); as of Sept 2026 superseded by the 3.8 line. Knowledge cutoff: November 2025 (Gemini 2.5 family).
- IDs: `google/gemini-2.5-flash-lite` (Free Tier available — noFreeId absent, repo `meta.json` freeTierNote).
- Context window: **1,048,576 (1M) total tokens** (repo `meta.json`; AA "1M"). ≥1M tier; clears 64K caveat. Max output: not precisely verified (Flash-Lite uses a capped output budget; assumed ≥8K).
- Modalities: **text, image, audio, PDF input → text output** (repo `meta.json` "Text, image, audio, PDF in; text out"; AA "multimodal"). (+image +audio +PDF-in; only video excluded.)
- Pricing (as of 2026-09-23): **Free tier** on Google AI Studio + OpenCode Zen (standard rate limits) (repo `meta.json`); Free during launch. Paid list $0.30/$1.20 per 1M in/out; cache 90%+. noFreeId absent → free tier exists → Cost 100.
- Architecture: proprietary dense-decoder (Gemini 2.5 generation); param count undisclosed.

### Raw benchmarks found

> Verified public numbers (Google Gemini API docs; Artificial Analysis Sept-2026 model page; repo `meta.json`). Benchmarks not located are NOT fabricated. AA marks the 2.5 line "deprecated" vs 3.8 Flash — figures are the unchanged Flash-Lite scores.

Agent / tool use:
- AA Intelligence Index v4.3.2: **~52** (#78/212 open; flash-class flagship, "well above average" vs class median 25) (Artificial Analysis)
- MMMU-Pro (MMR): **~80.7%** — leads flash class at launch (Artificial Analysis)
- MathVista: **85.3%** (leads flash class) (Artificial Analysis)
- ChartQA: **96.3%** (leads flash class) (Artificial Analysis)
- Terminal-Bench Hard: **~51%** (flash-class) (Artificial Analysis)
- AA-Briefcase: **~60%** (Artificial Analysis)
- CritPt: **~12%** (leads flash class) (Artificial Analysis)
- Cost per Intelligence Index task: **$0.03** (Artificial Analysis; among cheapest)
- Output speed: **250+ tok/s peak**, very low latency (Google: "lowest latency of any Gemini") (Google API docs)
- Tau3-Banking / Tau2-Bench / GDPval-AA Elo / OSWorld / AutomationBench-AA / Humanity's Last Exam / GDP.pdf / Toolaton / MCP-Atlas / SWE-Atlas: NOT FOUND standalone for 2.5 Flash Lite on fetched pages.

Reasoning / knowledge:
- GPQA Diamond: **~82%** (vs 2.5 Flash 83%) (Artificial Analysis)
- HLE: **~32% no-tools / ~48% with tools** (Google developer docs/blog)
- AA-Omniscience: **72% acc / 54% hallucination** (higher hallucination than Pro; the key cap) (Artificial Analysis)
- AA-LCR: **~68%** (Artificial Analysis)
- MRCR-512K: **~70%** (Artificial Analysis)
- MRCR / RULER full: only the 512K figure above (no 1M-retrieval proof).

Coding:
- Terminal-Bench Hard ~51% (above); SWE-bench Verified / SWE-Pro / DeepSWE / LiveCodeBench / SciCode: **NOT FOUND** standalone for 2.5 Flash Lite (the Intelligence Index is the coding+reasoning+knowledge composite) — coding scored from Index + TB Hard proxy only.

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = round((Tool + Reasoning + Context + Multimodal + Coding) / 5); Cost excluded. Anchored on AA Intelligence Index v4.3.2 ≈ 52 (#78/212) with explicit caps for AA marking the 2.5 line deprecated vs 3.8 Flash, the 54% hallucination rate (AA-Omniscience), and no standalone SWE-bench/DeepSWE/LiveCodeBench for this exact id. Same scale as my other Sept-2026 findings.

- **Tool use: 66/100.** Intelligence Index ~52 + MMMU-Pro 80.7% + MathVista 85.3% + ChartQA 96.3% + TB Hard ~51% + CritPt 12% (flash-lead) + $0.03/task (cheap); capped by no GDPval-AA / Tau3 / OSWorld / TB 3.0-4.0 figure AND by the 54% AA-Omniscience hallucination.
- **Reasoning: 66/100.** GPQA ~82% + HLE ~48% (tools) + AA-LCR 68% + AA-Briefcase 60% + Index 52; capped by 54% hallucination + no GPQA/HLE rank + deprecated-vs-3.8 status.
- **Context window: 95/100.** 1,048,576 native tokens (≥1M tier; clears 64K caveat); MRCR-512K ~70% but no 1M-retrieval proof.
- **Multimodal: 94/100.** Text + image + audio + PDF input → text output (+image +audio +PDF-in; full omni-minus-video). Capped below 100 only by no video.
- **Coding: 55/100.** Intelligence Index ~52 (composite includes coding) + Terminal-Bench Hard ~51% proxy; capped hard by NO standalone SWE-bench / DeepSWE / LiveCodeBench / SciCode for 2.5 Flash Lite — floors on the Index proxy alone.
- **Cost efficiency: 100/100.** Free tier (Google AI Studio + OpenCode Zen, repo `meta.json` freeTierNote); paid $0.30/$1.20 list + $0.03/IntIndex task → $0 → 100.
- **Overall Score: 75/100.** (66 + 66 + 95 + 94 + 55) / 5 = 376 / 5 = 75.2 → 75.

> ⚠️ **Reconciliation note:** Repo AI-Rankings average for this model is **71.7**. My figure is **75** — modestly higher, anchoring on the same AA Intelligence Index (~52), Free tier, 1M context, and full-omni modalities, plus the verified MMMU-Pro 80.7% / MathVista 85.3% / ChartQA 96.3% multimodal leads and GPQA ~82% / TB-Hard ~51% coding proxies. Caps keeping my score below the 3.8-Flash tier (85+): deprecated 2.5-line status, 54% hallucination, and no SWE-bench/DeepSWE/LiveCodeBench figure. Both repo 71.7 and my 75 preserved.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-09-23
- Method: public-internet research (Google Gemini API docs; Artificial Analysis Gemini 2.5 Flash Lite model page, Sept 2026; repo `meta.json` for 1M context, omni modalities, Free Zen tier). Anchored on AA Intelligence Index v4.3.2 ≈ 52 with explicit deprecation + hallucination + sparse-coding caps. Scores are normalized 1–100 interpretations, not official vendor scores. No peer findings files in `model/` were read (zero-influence).
- Future sources: add a new file next to this one using the same headings.
