# Gemini 1.5 Pro — findings by Beam

- Source: Google/Gemini 1.5 Pro, `google/gemini-1.5-pro`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 1.5 Pro
- **Short description:** Google's multimodal model (Feb 2024): 1M-2M context, text/image/audio/video/PDF in. BenchLM 27.77. Superseded by 2.0/2.5/3.x.
- **Provider / access:** Google AI Studio / Vertex AI `gemini-1.5-pro`; OpenRouter.
- **Release / knowledge:** Released 2024-02-15 (preview), GA 2024-05; knowledge cutoff not stated.
- **IDs:** `google/gemini-1.5-pro`
- **Context window:** 1,048,576 tokens (up to 2M); max output not stated.
- **Modalities:** text, image, audio, video, PDF in; text out; reasoning no; tool calling yes; structured output yes.
- **Pricing (as of 2026-10-17):** $1.25 / 1M input, $10.00 / 1M output; paid.
- **Architecture:** proprietary; params not published.

### Raw benchmarks found

Agent / tool use:

- Agentic: not individually reported (BenchLM overall 27.77)
- Terminal-Bench: not reported

Reasoning / knowledge:

- Reasoning: not individually reported
- GPQA: not reported
- HLE: not reported
- MMLU-Pro: not reported
- AA Intelligence Index: not reported

Coding:

- Coding: not individually reported

Long context:

- 1M-2M window; MRCR: not reported.

Multimodal:

- Multimodal: not individually reported (text/image/audio/video/PDF in).

### Normalized scores (1–100)

- **Tool use: 56/100.** No verified agentic benchmarks; caps pending verification.
- **Reasoning: 56/100.** No verified reasoning benchmarks; caps pending verification.
- **Context window: 88/100.** Up to 2M window; caps at no published MRCR.
- **Multimodal: 76/100.** Text/image/audio/video/PDF in; caps at no verified multimodal benchmarks.
- **Coding: 54/100.** No coding benchmarks reported; caps pending verification.
- **Cost efficiency: 82/100.** Mid $1.25/$10 per 1M.
- **Overall Score: 66/100.** Mean of five quality dims (BenchLM aggregate 27.77); best-fit for long-context multimodal at mid cost (superseded by 2.0/2.5/3.x).

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (BenchLM, Google docs); scores are normalized 1–100 interpretations, not official vendor scores. No verified public benchmarks; scores are provisional.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings. If zero verified benchmarks confirmed, save as `.md.excluded` instead.<|end|><|start|>2>