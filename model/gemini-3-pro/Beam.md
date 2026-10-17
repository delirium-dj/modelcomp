# Gemini 3 Pro — findings by Beam

- Source: Google/Gemini 3 Pro, `google/gemini-3-pro`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Pro
- **Short description:** Google's advanced multimodal reasoning model (Nov 2025) with Deep Think mode; basis for the Gemini 3 family (3.1 Pro, 3 Flash, etc.). Comprehends text, audio, images, video, and code repos.
- **Provider / access:** Google AI Studio / Vertex AI `gemini-3-pro`; Gemini app.
- **Release / knowledge:** Released November 2025; knowledge cutoff January 2025.
- **IDs:** `google/gemini-3-pro`
- **Context window:** 1,000,000 tokens (per family); max output not stated.
- **Modalities:** text, image, video, audio, file (PDF) in; text out; reasoning yes (Deep Think); tool calling yes; structured output yes.
- **Pricing (as of 2026-10-17):** $2.00 / 1M input, $12.00 / 1M output (family tier); paid.
- **Architecture:** sparse MoE transformer, native multimodal; params not published.

### Raw benchmarks found

Agent / tool use:

- Agentic lane: not individually reported (BenchLM overall 61.17)
- Terminal-Bench 2.0: not reported for 3 Pro
- τ²-bench: not reported for 3 Pro

Reasoning / knowledge:

- ARC-AGI-2: **31.1%** (vs 3.1 Pro 77.1%)
- HLE: not reported for 3 Pro
- GPQA Diamond: not reported for 3 Pro
- MMLU-Pro: not reported for 3 Pro
- FrontierMath: not reported for 3 Pro

Coding:

- SWE-bench Verified: **76.2%**
- LiveCodeBench: not reported for 3 Pro
- Coding lane: **43** (estimated #59/150)

Long context:

- 1M window; MRCR: not reported for 3 Pro.

Multimodal:

- MMMU-Pro: **81%** (vs 3.1 Pro 83.9%)
- CharXiv: **81.4%** (vs 3.1 Pro 80.2%)
- ERQA: **70.5%** (vs 3.1 Pro 69.4%)
- SimpleVQA: **73.2%** (vs 3.1 Pro 72.4%)

### Normalized scores (1–100)

- **Tool use: 65/100.** Agentic benchmarks not individually reported for 3 Pro; caps pending verification.
- **Reasoning: 72/100.** ARC-AGI-2 31.1% (weak vs 3.1 Pro 77.1%); caps at no published GPQA/HLE/FrontierMath.
- **Context window: 80/100.** 1M window; caps at no published MRCR retrieval.
- **Multimodal: 85/100.** Text/image/video/audio/PDF in; MMMU-Pro 81%, CharXiv 81.4%, ERQA 70.5%.
- **Coding: 65/100.** SWE-bench Verified 76.2%; caps at no published LiveCodeBench/SWE-bench Pro.
- **Cost efficiency: 80/100.** Mid-tier $2/$12 per 1M (family pricing).
- **Overall Score: 73/100.** Mean of five quality dims (BenchLM aggregate 61.17); superseded by Gemini 3.1 Pro.

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (Google DeepMind model card, BenchLM); scores are normalized 1–100 interpretations, not official vendor scores. Many 3 Pro figures are inferred from 3.1 Pro comparisons where 3 Pro-specific numbers were not published.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.