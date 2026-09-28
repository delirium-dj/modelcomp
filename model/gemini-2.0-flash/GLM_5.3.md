# Gemini 2.0 Flash — findings by GLM 5.3

- Source: Google/Gemini 2.0 Flash (`gemini-2.0-flash`, Feb 2025 GA)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.0 Flash
- **Short description:** Google's workhorse multimodal model of the 2.0 generation (GA 2025-02-05, first previewed Dec 2024) — text/image/speech/video in, text + image out. Deprecated: superseded by Gemini 2.5 Flash (and later 3.x Flash generations).
- **Provider / access:** Google Gemini API / Vertex AI (`gemini-2.0-flash`); AA no longer tracks active provider benchmarking for it.
- **Release / knowledge:** 2025-02-05 (GA; `gemini-2.0-flash-exp` preview since 2024-12); knowledge cutoff Jun 2024 (AA).
- **IDs:** `gemini-2.0-flash`. No Zen Free ID; not listed on OpenCode Zen at all now.
- **Context window:** 1M tokens (AA).
- **Modalities:** text + image + speech + video in; text AND image out; function calling, JSON mode; non-reasoning (no thinking mode).
- **Pricing (as listed Sep 2026):** AA lists $0.00 in / $0.00 out per 1M for the deprecated listing (likely free-tier/deprecated artifact); launch-era paid pricing was in the cheapest frontier-lab class (median class price $0.05/$0.15 per AA). Not re-verifiable this pass — Google's current pricing pages no longer list the model.
- **Architecture:** proprietary; parameter count undisclosed.

### Raw benchmarks found

> Source: Artificial Analysis model page (Sep 2026, deprecated listing). Google's 2.0-generation launch pages are retired; no text-verified per-benchmark table could be retrieved.

Agent / tool use:

- Terminal-Bench 2.x / Tau3-Banking / Tau2-Bench / GDPval-AA / Claw-Eval / Toolathon: **no verified public score found** for this exact ID.

Reasoning / knowledge:

- Artificial Analysis Intelligence Index v4.3.2: **9 (estimated, non-reasoning)** — above the class median of 7 (AA, Sep 2026).
- GPQA Diamond / HLE / LCR / CritPt: **no verified public score found**

Coding:

- SWE-bench / LiveCodeBench / SciCode: **no verified public score found**

Long context:

- 1M context verified (AA); no MRCR/RULER rows for this ID. "No long-context retrieval reported."

### Normalized scores (1–100)

> Derived per `model-comparison.md` methodology. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 35/100.** Function calling supported, but zero verified agentic-benchmark rows for this ID and an AA Index of 9 near the bottom of the 2026 distribution; long deprecated.
- **Reasoning: 42/100.** AA Index 9 vs class median 7 — slightly above its cheap-class peers, but a non-reasoning 2024-cutoff model against a 2026 frontier.
- **Context window: 95/100.** Verified 1M-token window (≥1M band = 95–100); no verified retrieval percentage.
- **Multimodal: 93/100.** Text + image + audio + video in, and text **plus image** output (audio in + non-text out = 90–100 band; dual output).
- **Coding: 40/100.** No verified coding benchmarks for this ID; AA Index coding components marginally above class median.
- **Cost efficiency: 95/100.** Cheapest price class (AA lists $0.00/$0.00 on the deprecated page; class median $0.05/$0.15) — historically among the best cost/performance in the Flash tier.
- **Overall Score: 61/100.** (35+42+95+93+40)/5 = 61. A retired budget-multimodal workhorse; its 1M context and dual text/image output still have niche value, but every later Flash generation strictly dominates it.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-09-27
- Method: public internet research (Artificial Analysis deprecated listing; Google launch pages no longer reachable); no peer report files read; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
