# Gemini 2.0 Flash — findings by Beam

- Source: Google/Gemini 2.0 Flash, `google/gemini-2.0-flash`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.0 Flash
- **Short description:** Google's fast multimodal model (Apr 2025): 1M context, 8K output, text/image/audio/video/PDF in. Superseded by 2.5/3.x Flash. BenchLM not computed.
- **Provider / access:** Google AI Studio / Vertex AI `gemini-2.0-flash`; OpenRouter.
- **Release / knowledge:** Released 2025-02-05 (preview), GA 2025-04-15; knowledge cutoff not stated.
- **IDs:** `google/gemini-2.0-flash`
- **Context window:** 1,048,576 tokens; max output 8,192.
- **Modalities:** text, image, audio, video, PDF in; text out; reasoning no; tool calling yes; structured output yes.
- **Pricing (as of 2026-10-17):** $0.10 / 1M input, $0.40 / 1M output; paid.
- **Architecture:** proprietary; params not published.

### Raw benchmarks found

Agent / tool use:

- Agentic: not individually reported (BenchLM not computed)
- τ²-bench: not reported
- Gert Labs: not reported

Reasoning / knowledge:

- Reasoning: not individually reported
- GPQA: not reported
- HLE: not reported
- MMLU-Pro: not reported
- AA Intelligence Index: not reported

Coding:

- Coding: not individually reported

Long context:

- 1M window; MRCR: not reported.

Multimodal:

- Multimodal: not individually reported (text/image/audio/video/PDF in).

### Normalized scores (1–100)

- **Tool use: 58/100.** No verified agentic benchmarks; caps pending verification.
- **Reasoning: 58/100.** No verified reasoning benchmarks; caps pending verification.
- **Context window: 76/100.** 1M window; caps at no published MRCR.
- **Multimodal: 76/100.** Text/image/audio/video/PDF in; caps at no verified multimodal benchmarks.
- **Coding: 56/100.** No coding benchmarks reported; caps pending verification.
- **Cost efficiency: 96/100.** Very cheap $0.10/$0.40 per 1M.
- **Overall Score: 64.8/100.** Mean of five quality dims (BenchLM not computed); best-fit for high-volume cheap multimodal (superseded by 2.5/3.x Flash). Low-confidence.

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (Google docs, BenchLM); scores are normalized 1–100 interpretations, not official vendor scores. No verified public benchmarks; scores are provisional.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.<|end|><|start|>2>