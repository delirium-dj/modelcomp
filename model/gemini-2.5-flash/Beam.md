# Gemini 2.5 Flash — findings by Beam

- Source: Google/Gemini 2.5 Flash, `google/gemini-2.5-flash`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Flash
- **Short description:** Google's workhorse model (Apr 2025, retires Oct 20, 2026): 1M context, 65K output, thinking capabilities, multimodal. BenchLM 42.14. Cheap ($0.30/$2.50 per 1M).
- **Provider / access:** Google AI Studio / Vertex AI `gemini-2.5-flash` (retiring Oct 20, 2026); OpenRouter.
- **Release / knowledge:** Released 2025-04-17; knowledge cutoff not stated.
- **IDs:** `google/gemini-2.5-flash`
- **Context window:** 1,048,576 tokens; max output 65,535.
- **Modalities:** text, image, audio, video, file in; text out; reasoning yes (thinking); tool calling yes; structured output yes.
- **Pricing (as of 2026-10-17):** $0.30 / 1M input, $2.50 / 1M output, $0.03 / 1M cached; paid.
- **Architecture:** proprietary; params not published.

### Raw benchmarks found

Agent / tool use:

- Agentic: not individually reported (BenchLM overall 42.14)
- LiveCodeBench: **71.3%**
- TerminalBench Hard: **16.7%**
- LCR: **71.0%**
- IFBench: **52.3%**

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): **60.1** (unranked, 2 rows)
- GPQA: not reported
- HLE: not reported
- MMLU-Pro: not reported
- AA Intelligence Index: not reported

Coding:

- Coding: not individually reported (BenchLM overall 42.14)
- LiveCodeBench: **71.3%**
- TerminalBench Hard: **16.7%**

Long context:

- 1M window; LCR 71.0%.

Multimodal:

- Multimodal public-lane (BenchLM): **61** (unranked, 1 row)

### Normalized scores (1–100)

- **Tool use: 62/100.** TerminalBench Hard 16.7%, IFBench 52.3%; caps at no published agentic benchmarks.
- **Reasoning: 64/100.** LCR 71.0%; caps at no published GPQA/HLE/ARC-AGI.
- **Context window: 78/100.** 1M window; LCR 71.0%.
- **Multimodal: 76/100.** Text/image/audio/video/PDF in; multimodal lane 61.
- **Coding: 62/100.** LiveCodeBench 71.3%, TerminalBench Hard 16.7%.
- **Cost efficiency: 94/100.** Very cheap $0.30/$2.50 per 1M.
- **Overall Score: 68/100.** Mean of five quality dims (BenchLM aggregate 42.14); best-fit for high-volume cheap multimodal (retiring Oct 20).

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (Kilo, BenchLM, BenchGecko); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.<|end|><|start|>2>