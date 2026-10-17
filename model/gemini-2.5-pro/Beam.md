# Gemini 2.5 Pro — findings by Beam

- Source: Google/Gemini 2.5 Pro, `google/gemini-2.5-pro`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Pro
- **Short description:** Google's multimodal model (Jun 2025): 1M context, 65K output. Text/image/audio/video/PDF in. BenchGecko 58.6. SWE-bench Verified 63.8%. GPQA Diamond 84.0%. AIME 2025 86.7%. $1.25/$10.00 per 1M (now $0.625/$5.00 on AI Studio).
- **Provider / access:** Google AI Studio / Vertex AI `gemini-2.5-pro`; OpenRouter.
- **Release / knowledge:** Released 2025-06-17 (GA); knowledge cutoff not stated.
- **IDs:** `google/gemini-2.5-pro`
- **Context window:** 1,048,576 tokens; max output 65,536.
- **Modalities:** text, image, audio, video, PDF in; text out; reasoning yes (thinking); tool calling yes; structured output yes.
- **Pricing (as of 2026-10-17):** $1.25 / 1M input, $10.00 / 1M output (standard); $0.625/$5.00 (AI Studio). Paid.
- **Architecture:** proprietary; params not published.

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): **25.7** (Estimated · #102/128)
- Terminal-Bench 2.0: not reported for 2.5 Pro
- OSWorld-Verified: not reported for 2.5 Pro
- Gert Labs: **42.01%** (BenchLM)

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): **73.3** (Unranked · 2 rankable rows)
- GPQA: **83%** / **84.0%** (BenchLM/TechTarget)
- HLE: **18.8%** (BenchLM)
- MMLU-Pro: not reported for 2.5 Pro
- AIME 2025: **86.7%** (TechTarget)
- AA Intelligence Index: not reported
- LiveBench Reasoning: not reported

Coding:

- Coding public-lane (BenchLM): **22.3** (Supported · #115/150)
- SWE-bench Verified: **63.8%** (TechTarget)
- Aider polyglot: **84.7%** (BenchGecko)
- LiveCodeBench: not reported for 2.5 Pro
- Vibe Code Bench: **0.40%** (BenchLM)

Long context:

- 1M window; MRCR: not reported.

Multimodal:

- Multimodal public-lane (BenchLM): **74.8** (Unranked · 1 rankable row)
- Text/image/audio/video/PDF in; no verified multimodal benchmarks from sources.

### Normalized scores (1–100)

- **Tool use: 56/100.** Agentic lane #102/128 (25.7), Gert Labs 42.01%; caps at no published Terminal-Bench/OSWorld.
- **Reasoning: 68/100.** GPQA 84.0%, HLE 18.8%, AIME 86.7%; caps at HLE 18.8%.
- **Context window: 76/100.** 1M window; caps at no published MRCR.
- **Multimodal: 74/100.** Text/image/audio/video/PDF in; caps at no verified multimodal benchmarks.
- **Coding: 62/100.** SWE-bench 63.8%, Aider polyglot 84.7%, Vibe Code 0.40%; caps at Vibe Code 0.40%.
- **Cost efficiency: 86/100.** $1.25/$10.00 per 1M (standard); $0.625/$5.00 (AI Studio).
- **Overall Score: 67.2/100.** Mean of five quality dims (BenchGecko 58.6, BenchLM 49.13); best-fit for mid-cost multimodal reasoning at mid cost. (Superseded by Gemini 3.x.)

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (Google docs, BenchGecko, BenchLM, TechTarget, pricepertoken); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings. Gemini 2.5 Pro is superseded by Gemini 3.x (3.0/3.1/3.5/3.6/3.7/3.8). Multimodal (text/image/audio/video/PDF).<|end|>>2>