# Gemini 3.5 Flash Lite — findings by Beam

- Source: Google/Gemini 3.5 Flash Lite, `google/gemini-3.5-flash-lite`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash Lite
- **Short description:** Google's lightest 3.5 model (Jul 21, 2026): 1M context, 66K output. Text/image/video/audio/PDF in. BenchLM 49.62 (#98 of 954). AA Intelligence Index not reported. Vals Index 50.48%. $0.30/$2.50 per 1M.
- **Provider / access:** Google AI Studio / Vertex AI `gemini-3.5-flash-lite`; OpenRouter.
- **Release / knowledge:** Released 2026-07-21; knowledge cutoff not stated.
- **IDs:** `google/gemini-3.5-flash-lite`
- **Context window:** 1,048,576 tokens; max output 65,536.
- **Modalities:** text, image, video, audio, PDF in; text, audio out; reasoning yes; tool calling yes; structured output yes.
- **Pricing (as of 2026-10-17):** $0.30 / 1M input, $2.50 / 1M output; paid.
- **Architecture:** proprietary; params not published.

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): **35.6** (Supported · #79/128)
- Terminal-Bench 2.1: **54.0%** (Google)
- OSWorld-Verified: **74%** (Google)
- GDPval-AA: **1139** (Google)
- SWE-bench Pro: **54.2%** (Google)
- AA-SciCode: **41.3%** (Artificial Analysis)
- LiveCodeBench (Vals): **79.0%** (Vals AI)

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): **71.8** (Unranked · 3 rankable rows)
- GPQA Diamond (Vals): **83.84%** (Vals AI)
- MMLU Pro (Vals): **85.84%** (Vals AI)
- MMMU Pro (Vals): **83.58%** (Vals AI)
- HLE: not reported
- AA Intelligence Index: not reported
- MRCRv2: **72.2%** (Google)
- AA-LCR: **76.0%** (Artificial Analysis)
- CritPt: **0.0%** (Artificial Analysis)

Coding:

- Coding public-lane (BenchLM): **35.8** (Supported · #76/150)
- LiveCodeBench (Vals): **79.0%** (Vals AI)
- SWE-bench (Vals): **75.00%** (Vals AI)
- SWE-bench Pro: **54.2%** (Google)
- AA-SciCode: **41.3%** (Artificial Analysis)
- Vibe Code Bench v1.1: **37.16%** (Vals AI)

Long context:

- 1M window; MRCRv2 **72.2%** (Google); AA-LCR **76.0%** (Artificial Analysis).

Multimodal:

- Multimodal public-lane (BenchLM): **80.9** (#? of 54)
- Text/image/video/audio/PDF in; AA-MMMU-Pro not reported.

### Normalized scores (1–100)

- **Tool use: 68/100.** Agentic lane #79/128 (35.6), Terminal-Bench 2.1 54.0%, OSWorld 74%, GDPval-AA 1139, SWE-bench Pro 54.2%; caps at no published OSWorld-Verified for Lite specifically.
- **Reasoning: 72/100.** GPQA 83.84%, MMLU Pro 85.84%, MMMU Pro 83.58%, MRCRv2 72.2%, AA-LCR 76.0%, CritPt 0.0%; caps at CritPt 0.0%.
- **Context window: 76/100.** 1M window; MRCRv2 72.2%, AA-LCR 76.0%.
- **Multimodal: 76/100.** Text/image/video/audio/PDF in; caps at no verified multimodal benchmarks (AA-MMMU-Pro not reported).
- **Coding: 64/100.** LiveCodeBench 79.0%, SWE-bench 75.0%, SWE-bench Pro 54.2%, AA-SciCode 41.3%, Vibe Code 37.16%; caps at Vibe Code 37.16%.
- **Cost efficiency: 88/100.** $0.30/$2.50 per 1M.
- **Overall Score: 71.2/100.** Mean of five quality dims (BenchLM 49.62); best-fit for high-volume agentic at mid cost.

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (Google official, BenchLM, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings. Gemini 3.5 Flash Lite is the lightest in the 3.5 series. Superseded by Gemini 3.6/3.8 Flash.<|end|>>2>