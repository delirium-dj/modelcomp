# Gemini 2.5 Flash Lite — findings by Beam

- Source: Google/Gemini 2.5 Flash Lite, `google/gemini-2.5-flash-lite`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Flash Lite
- **Short description:** Google's lightest 2.5 model (Jul 2025): 1M context, 65K output. Text/image/video/audio/PDF in. BenchGecko 32.5. Vals Index 42.49%. Superseded by 3.5 Flash-Lite.
- **Provider / access:** Google AI Studio / Vertex AI `gemini-2.5-flash-lite`; OpenRouter.
- **Release / knowledge:** Released 2025-07-22; knowledge cutoff Jan 2025.
- **IDs:** `google/gemini-2.5-flash-lite`
- **Context window:** 1,048,576 tokens; max output 65,536.
- **Modalities:** text, image, video, audio, PDF in; text out; reasoning yes (thinking); tool calling yes; structured output yes.
- **Pricing (as of 2026-10-17):** $0.10 / 1M input, $0.40 / 1M output; paid.
- **Architecture:** proprietary; params not published.

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): not individually reported (BenchLM not computed for Flash-Lite)
- τ²-bench: **14.9%** (Artificial Analysis, for Gemini 2.5 Flash; Flash-Lite not separately reported)
- BenchLeader: Agents & tools 49 (best config)

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): not individually reported
- GPQA: not reported for Flash-Lite
- HLE: not reported
- MMLU-Pro: **53.7%** (HELM, BenchGecko)
- AIME 2025: **53.3%** (OpenRouter)
- BenchLeader: Reasoning 39 (best config), Maths 58

Coding:

- Coding public-lane (BenchLM): not individually reported
- BenchLeader: Coding 40 (best config)

Long context:

- 1M window; MRCR: not reported. BenchLeader: not reported.

Multimodal:

- Multimodal lane not reported; text/image/video/audio/PDF in.

### Normalized scores (1–100)

- **Tool use: 54/100.** τ²-bench 14.9% (for 2.5 Flash, not Flash-Lite); BenchLeader agents 49; caps at no verified Flash-Lite-specific agentic benchmarks.
- **Reasoning: 56/100.** MMLU-Pro 53.7%, AIME 2025 53.3%, BenchLeader reasoning 39/maths 58; caps at no published GPQA/HLE/ARC-AGI.
- **Context window: 76/100.** 1M window; caps at no published MRCR.
- **Multimodal: 76/100.** Text/image/video/audio/PDF in; caps at no verified multimodal benchmarks.
- **Coding: 54/100.** BenchLeader coding 40; caps at no published SWE-bench/LiveCodeBench.
- **Cost efficiency: 96/100.** Very cheap $0.10/$0.40 per 1M.
- **Overall Score: 63.2/100.** Mean of five quality dims (BenchGecko 32.5, Vals Index 42.49); best-fit for high-volume cheap multimodal (superseded by 3.5 Flash-Lite).

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (Google docs, BenchGecko, Vals AI, BenchLeader, OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.