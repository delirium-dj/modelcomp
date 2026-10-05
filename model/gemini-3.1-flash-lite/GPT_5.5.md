# Gemini 3.1 Flash-Lite — findings by GPT 5.5

- Source: Google DeepMind (`gemini-3.1-flash-lite`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Flash-Lite
- **Short description:** Google's most cost-efficient Gemini 3.1 developer model, optimized for high-volume low-latency multimodal work.
- **Provider / access:** Google AI Studio, Gemini API, and Vertex AI.
- **Release / knowledge:** Public model card and coverage report release on **2026-03-03**; cutoff not verified.
- **IDs:** `google/gemini-3.1-flash-lite`; exact API alias may vary by Google endpoint.
- **Context window:** BenchLM and public coverage report **1M tokens** and up to **64K output**.
- **Modalities:** Text, image, video, audio, and PDF input; text output.
- **Pricing (as of 2026-10-05):** Public Google/coverage pricing reports **$0.25/M input**, **$0.025/M cached input**, **$1.50/M output**.
- **Architecture:** Proprietary Gemini Flash-Lite model.

### Raw benchmarks found

Agent / tool use:

- BenchLeader reports lowest category as agents/tools **43**.

Reasoning / knowledge:

- BenchLM reports **10 source-displayable benchmark rows** and strongest eligible category **Knowledge at #79**.
- BenchLeader reports strongest category **long context 63**.

Coding:

- No exact SWE-bench/LiveCodeBench value found in accessible snippets.

Long context:

- Google DeepMind model-card snippet reports MRCR v2 8-needle at 128K average: **60.1%** for Gemini 3.1 Flash-Lite in the visible row.
- Context window: **1M**.

### Normalized scores (1–100)

- **Tool use: 50/100.** Google tool support exists, but BenchLeader agents/tools 43 keeps this moderate.
- **Reasoning: 64/100.** Knowledge category and model-card benchmark coverage are solid for a Lite model.
- **Context window: 92/100.** 1M context plus MRCR evidence earns very strong context credit.
- **Multimodal: 82/100.** Broad text/image/video/audio/PDF input support is a major strength.
- **Coding: 55/100.** Useful for lightweight coding, but no direct coding benchmark was found.
- **Cost efficiency: 92/100.** $0.25/$1.50 with 1M multimodal context is excellent.
- **Overall Score: 69/100.** Half-up mean of the five quality dimensions; best fit is high-volume multimodal summarization and extraction.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

