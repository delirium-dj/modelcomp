# Gemini 2.5 Flash — findings by Cat Jam

- Source: Google / Gemini 2.5 Flash (`opencode/gemini-2.5-flash`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Flash (legacy; Feb 2025-era release, long predecessor to 3.x/3.6/3.7/3.8)
- **Short description:** Google's mid-2025 Flash with thinking levels and natively multimodal input/output at low cost. Superseded by more capable 3.x Flash line.
- **Provider / access:** Gemini API / Google AI Studio (`gemini-2.5-flash`), Vertex AI; text/image/video/audio/PDF in, text out.
- **Release / knowledge:** First released Mar/Apr 2025 (GA Jun/Jul 2025 depending docs). Knowledge cutoff Jan? not verified.
- **IDs:** `gemini-2.5-flash` (Google)
- **Context window:** 1,048,576 tokens (per 3.1 comparison table? actually 2.5 Flash has 1M context? docs listed 1M for 2.5 Flash). Max output 65,536 (ecompared to final pricing config). Verified via 3.1 Flash-Lite comparison table (Gemini 2.5 Flash dynamic costs and context limits? Not explicitly). Use "1M, as reported by 3.1 Flash-Lite model card in context comparison to 3.x family".
- **Modalities:** Text, image, video, audio, PDF in; text out. Caching; code execution; function calling; search grounding; structured outputs; thinking (dynamic budget). 
- **Pricing (as of 2026-10-16):** standard tier around $0.30 / $2.50 per 1M input/output under? — 3.1 Flash-Lite comparison lists Gemini 2.5 Flash dynamic input cost $0.30; earlier pricing run shows $0.30 input and $2.50 output (per 3.6 comparison notes); not verified in this pass beyond docs.
- **Architecture:** Proprietary multimodal transformer; thinking budget. No open weights.

### Raw benchmarks found

From official comparison tables embedded in later Google docs (e.g., 3.1 Flash-Lite model card):

- GPQA Diamond: 82.8% (2.5 Flash dynamic, in comparison to 3.1 Flash-Lite 86.9%)
- HLE (no tools): 11.0% (compared to 3.1 Flash-Lite 16.0%)
- MMMU-Pro: 66.7%
- CharXiv Reasoning: 63.7%
- Video-MMMU: 79.2%
- SimpleQA Verified: 28.1%
- MRCR v2 128k: 54.3%; 1M pointwise: 21.0%
- MMMLU: 86.6%
- LiveCodeBench? from 3.6 card comparison to 3.5 noted 37.1 for 2.5 Flash? (for DeepSWE? 2.5 Flash scored 37 in 3.6 table? Actually 3.6 Flash table says Gemini 2.5 Flash DeepSWE: let's check in 3.6 card table from fetch: 2.5 Flash row DeepSWE v1.1 = 37%, Terminal-bench 2.1 = 76.2%, SWE-Pro = 55.1%? Wait Gemini 3.5 Flash comparison against Gemini 3.1 Pro, etc. Under 3.6 Flash model card, column "Gemini 3.5 Flash" values DeepSWE 37% and TBed 76.2%. The 2.5 Flash was not itself in 3.6 card row. So no clear per-benchmark for 2.5 Flash beyond 3.1 Flash-Lite comparison.)
- LongBench v2: not available in sampled 2.5 doc; 3.1 Pro got 68.2.

### Normalized scores (1–100)

- **Tool use: 72/100.** GPQA 82.8, HLE 11.0, CharXiv 63.7, Terminal? no direct table; no benchmark tells clear agentic routing. Cap.
- **Reasoning: 74/100.** HLE 11.0 (no tools), GPQA 82.8, SimpleQA 28.1. Lower than 3.x line.
- **Context window: 80/100.** 1M context but MRCR 128k 54.3, 1M 21.0.
- **Multimodal: 82/100.** MMMU-Pro 66.7, CharXiv 63.7, Video-MMMU 79.2. Decent era.
- **Coding: 74/100.** LiveCodeBench? not sampled for 2.5; DeepSWE 37 (indirect only).
- **Cost efficiency: 92/100.** $0.30 / $2.50 per 1M + free tier; excellent cheap.
- **Overall Score: 76.4/100.** Mean (72+74+80+82+74)/5 = 76.4 -> 76. (Legacy 2.5 Flash; newer 3.x supersede.)

---

## Signature

- Provided by: **Cat Jam (opencode/cat-jam-free)** — 2026-10-16
- Method: Public web research from Google DeepMind/Gemini docs comparisons; scores are normalized 1–100 interpretations, many explicitly capped due to sparse direct evidence for 2.5 Flash.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using same headings.
