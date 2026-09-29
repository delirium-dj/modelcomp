# Google Gemini 2.5 Flash-Lite — findings by GLM 5.3

- Source: Google/Gemini 2.5 Flash-Lite (`gemini-2.5-flash-lite`)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Google Gemini 2.5 Flash-Lite
- **Short description:** Google's cheapest, fastest Gemini 2.5-class model (released 2025-06-17), designed for high-frequency, high-volume tasks. Variant/alias of the `gemini-2.5-flash-lite` entry (same underlying model; this folder exists for the "Google"-prefixed name). Now deprecated — superseded by the Sep 2025 refresh and the 3.1/3.5 Flash-Lite generations.
- **Provider / access:** Google Gemini API / Vertex AI (`gemini-2.5-flash-lite`); 1 API provider tracked by Artificial Analysis at deprecation.
- **Release / knowledge:** 2025-06-17; knowledge cutoff Jan 2025 (AA).
- **IDs:** `gemini-2.5-flash-lite`. No Zen Free ID; paid only (Zen lists only Gemini 3.x Flash/Lite generations now).
- **Context window:** 1M tokens (AA; Gemini API docs).
- **Modalities:** text + image + speech (audio) + video in; text out; function calling / search grounding; JSON mode; non-reasoning (no thinking mode on this ID).
- **Pricing (at deprecation):** $0.10 in / $0.40 out per 1M; 90% cache discount (cache read ≈ $0.01); blended ≈ $0.07/1M (AA) — among the cheapest frontier-lab APIs ever shipped.
- **Architecture:** proprietary; parameter count undisclosed.

### Raw benchmarks found

> Sources: Artificial Analysis model page (Sep 2026, incl. deprecation notice), Google DeepMind current Flash-Lite page (generation context). Google's original launch post and per-benchmark tables are no longer reachable (404) — text-verified numbers only.

Agent / tool use:

- Terminal-Bench 2.x: **no verified public score found** for this exact ID.
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- OSWorld: **no verified public score found** (for scale: its 2026 successor 3.5 Flash-Lite scores 74.0% OSWorld-Verified, per Google's current model page).

Reasoning / knowledge:

- Artificial Analysis Intelligence Index v4.3.2: **7 (estimated, non-reasoning)** — below the non-reasoning-class median of 9; the model was retired from active benchmarking as deprecated (AA, Sep 2026).
- GPQA Diamond / HLE / LCR / CritPt: **no verified public score found** for this exact ID.
- Output speed: **293.9 tokens/s** (2nd fastest of 75 in its class), TTFT **0.29s** (AA) — the model's defining strength.

Coding:

- SWE-bench Verified / LiveCodeBench / SciCode: **no verified public score found** (for scale: 3.5 Flash-Lite, its 2026 successor, scores 54.2% SWE-Bench Pro / 54.0% TB 2.1 per Google's current page).

Long context:

- 1M context verified (AA); no MRCR/RULER rows published for this ID. "No long-context retrieval reported."

### Normalized scores (1–100)

> Derived per `model-comparison.md` methodology. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 32/100.** A non-reasoning throughput model with function calling, but zero verified agentic-benchmark rows for this ID and an AA Index of 7 that places it near the bottom of its class; its own successors (3.5 Flash-Lite at TB 54%) show how far the lite tier has moved.
- **Reasoning: 35/100.** AA Intelligence Index 7 vs class median 9; no thinking mode; no verified GPQA/HLE numbers. Capped by missing verification and by design (high-frequency tasks, not deep reasoning).
- **Context window: 95/100.** Verified 1M-token window (≥1M band = 95–100); no verified long-context retrieval percentage, so not 100.
- **Multimodal: 90/100.** Text + image + audio + video input, text out (audio input qualifies for the 90–100 band); text-only output.
- **Coding: 38/100.** No verified coding benchmark for this ID; AA Index coding components are very low; positioned by Google for high-volume tasks, explicitly not as a coding agent.
- **Cost efficiency: 96/100.** $0.10/$0.40 (blended ≈ $0.07/1M) — just above the v1 "~$0.10/$0.20 = 97–99" anchor with slightly higher output price; among the best price/performance for raw throughput ever measured by AA.
- **Overall Score: 58/100.** (32+35+95+90+38)/5 = 58. Still a niche pick for ultra-cheap, ultra-fast multimodal input processing at scale; outclassed on intelligence by every later Flash-Lite generation — use 3.5 Flash-Lite instead.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-09-27
- Method: public internet research (Artificial Analysis + Google DeepMind current/legacy pages); no peer report files read; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
