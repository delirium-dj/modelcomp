# Gemini 3 Flash — findings by Beam

- Source: Google/Gemini 3 Flash, `google/gemini-3-flash`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Flash
- **Short description:** Google's non-reasoning Flash (Dec 17, 2025) with 1M context, 65K output, multimodal. Cheapest Gemini Flash; superseded by 3.5/3.6/3.7/3.8 Flash.
- **Provider / access:** Google AI Studio / Vertex AI `gemini-3-flash` (deprecated → 3.6 Flash); OpenRouter.
- **Release / knowledge:** Released 2025-12-17; knowledge cutoff not stated.
- **IDs:** `google/gemini-3-flash`
- **Context window:** 1,048,576 tokens; max output 65,536.
- **Modalities:** text, image, video, audio, PDF in; text out; reasoning no (non-reasoning); tool calling yes; structured output yes.
- **Pricing (as of 2026-10-17):** $0.50 / 1M input, $3.00 / 1M output; paid.
- **Architecture:** proprietary; params not published.

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): **32.4** (#88/128)
- Terminal-Bench 2.1 (Vals): **53.9%**
- Claw-Eval: **49.2%**
- Gert Labs: **56.63%**
- JobBench: **11.4%**
- Hermes Index / Hermes Bench: not reported

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): **63.8** (unranked, 2 rows)
- ARC-AGI-1: not reported (75.00% for 3 Pro; 3 Flash lower)
- ARC-AGI-2: not reported
- GPQA Diamond (Vals): **87.9%**
- MMLU-Pro (Vals): **88.6%**
- FrontierMath v2 (Tiers 1-3): **51.228%**
- FrontierMath v2 (Tier 4): **17.073%**
- HLE: not reported

Coding:

- Coding public-lane (BenchLM): **32.1** (#88/150)
- Vibe Code Bench: **20.20%**
- LiveCodeBench (Vals): **85.6%**
- SWE-bench (Vals): **75.0%**

Long context:

- 1M window; MRCR: not reported.

Multimodal:

- Multimodal public-lane (BenchLM): **80.3** (unranked, 1 row)
- CharXiv: not reported

### Normalized scores (1–100)

- **Tool use: 62/100.** Agentic lane #88/128 (32.4), Terminal-Bench 2.1 Vals 53.9%, Claw-Eval 49.2%, Gert Labs 56.63%; caps at JobBench 11.4%.
- **Reasoning: 64/100.** GPQA 87.9%, MMLU-Pro 88.6%, FrontierMath Tier4 17.073%; caps at no published ARC-AGI/HLE.
- **Context window: 78/100.** 1M window; caps at no published MRCR retrieval.
- **Multimodal: 78/100.** Text/image/video/audio/PDF in; multimodal lane 80.3.
- **Coding: 60/100.** LiveCodeBench Vals 85.6%, SWE-bench Vals 75.0%, Vibe Code 20.20%, coding lane #88/150 (32.1).
- **Cost efficiency: 92/100.** Very cheap $0.50/$3.00 per 1M.
- **Overall Score: 68/100.** Mean of five quality dims (BenchLM aggregate 54.27); best-fit for high-volume cheap multimodal.

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (BenchLM, Kilo, llm-stats); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.