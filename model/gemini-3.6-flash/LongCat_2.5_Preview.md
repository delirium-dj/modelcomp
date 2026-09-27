# Gemini 3.6 Flash — findings by LongCat 2.5 Preview

- Source: Google DeepMind (`gemini-3.6-flash`)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.6 Flash
- **Short description:** Google DeepMind's workhorse of the Gemini 3 family — near-Pro agentic coding, knowledge work, and multimodal performance at Flash speed, with better token efficiency and a 17% output-token reduction over 3.5 Flash.
- **Provider / access:** Google Gemini API / Vertex AI — `gemini-3.6-flash` (Chat Completions-style generateContent API; also Google Antigravity). GA since 2026-07-21.
- **Release / knowledge:** Released 2026-07-21; knowledge cutoff ~2026-03 (per third-party catalog records).
- **IDs:** `google/gemini-3.6-flash` (Vertex), `gemini-3.6-flash` (Gemini API / AI Studio). No Zen Free ID — paid only.
- **Context window:** 1,048,576 tokens input; 65,536 max output (verified via Google AI docs + Vertex guide).
- **Modalities:** Text, image, audio, video, PDF in; text out; reasoning yes (minimal/low/medium/high); tool calls, code execution, computer use (preview), structured outputs, caching, search grounding.
- **Pricing (as of 2026-09-27):** $1.50/M in, $7.50/M out standard (output cut from $9.00); temporary discount $0.75/$3.75 through end of 2026 (applied to 3.7 Flash as well). Paid only.
- **Architecture:** Proprietary; based on Gemini 3.5 Flash.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 (Terminus-2): **78.0%** (Google model card); Vals TB2.1: **73.8%**
- OSWorld-Verified: **83%** (BenchLM)
- GDPval-AA / Tau3-Banking: no verified public score found

Reasoning / knowledge:

- GPQA Diamond (Vals): **94.1%**
- Artificial Analysis Intelligence Index: **52** (high; 3.7 Flash's +4 improvement)
- CharXiv: **85.2%** no tools / **89.4%** with tools (Google model card)

Coding:

- SWE-Bench Pro (Public): **58.7%** (Google model card; llm-stats rank 20/55)
- SWE-bench (Vals): **79.6%**; LiveCodeBench (Vals): **88.1%**
- DeepSWE v1.1: **49%** (Google model card)

Long context:

- GDM-MRCR v2 (8-needle): **91.8%** at 128K average; **54.0%** at 1M pointwise (Google model card)

Multimodal extras:

- Multimodal & Grounded public-lane score 82.5 (BenchLM)

### Normalized scores (1–100)

- **Tool use: 82/100.** TB2.1 78.0% and OSWorld-Verified 83% are strong but a notch under the 88%+ frontier TB2.1 mark; no GDPval/Tau3 number to confirm more.
- **Reasoning: 85/100.** GPQA 94.1% is frontier-tier; AA Index 52 (high) is mid-upper (the 60+ band is the top reference), holding the dimension under 90.
- **Context window: 95/100.** 1M tokens with 64K output earns the ≥1M tier; MRCR 91.8% at 128K is strong, with 54% at 1M pointwise showing the expected long-range decay.
- **Multimodal: 90/100.** Text/image/audio/video/PDF input — full non-text input coverage; text-only output keeps it under the 95+ band.
- **Coding: 78/100.** SWE-Bench Pro 58.7%, DeepSWE 49% and LiveCodeBench 88.1% are solid mid-upper band; no SWE-bench Verified/frontier number.
- **Cost efficiency: 85/100.** $1.50/$7.50 standard pricing is near the ~$1.25/$4.25 ≈ 88 reference point; the $0.75/$3.75 promo (through end of 2026) would score ~90.
- **Overall Score: 86/100.** Mean of the five quality dims (82+85+95+90+78)/5 = 86. Best-fit: high-volume agentic coding and multimodal workhorse inside the Gemini ecosystem — strong economics, a step behind the 3.7/3.8 Flash generation.

---

## Signature

- Provided by: **LongCat 2.5 Preview (Meituan/LongCat-2.5-Preview)** — 2026-09-27
- Method: public internet research (Google model card, Artificial Analysis, Vals.ai, BenchLM, llm-stats); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
