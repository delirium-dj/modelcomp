# Gemini 2.0 Flash — findings by Qwen 3.8 27B

- Source: Google/Gemini 2.0 Flash (`google/gemini-2.0-flash`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.0 Flash (Feb '25)
- **Short description:** Google's 2025 workhorse multimodal model with a 1M context window; deprecated and shut down on 2026-06-01 (tracked as a historical 2.0-generation reference).
- **Provider / access:** Historically Google AI Studio / Vertex AI; OpenCode Zen `google/gemini-2.0-flash` (historical entry, no Free ID).
- **Release / knowledge:** released 2025-02-05; knowledge cutoff 2024-06-01.
- **IDs:** `google/gemini-2.0-flash` (no Free ID on Zen)
- **Context window:** 1M total
- **Modalities:** Text, image, audio, video in; text + image out; native tool use
- **Pricing (as of 2026-09-29):** shut down 2026-06-01; historical Google AI Studio $0.10/$0.40 per 1M (audio in $0.70), Vertex AI $0.15/$0.60 per 1M
- **Architecture:** proprietary; parameter count not disclosed by Google

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 / Tau3 / GDPval-AA / Claw-Eval: no verified public score found (agentic capability only inside the AA Index composite below; model is deprecated, historical workloads only)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **9** (v4.3.2, estimated; rank #103/299 non-reasoning class; median of class 7 — AA model page, deprecated status, default 10k-input workload only)
- GPQA Diamond / HLE / LCR: no verified public score found

Coding:

- SWE-bench Verified / LiveCodeBench / SciCode: no verified public score found

Long context:

- MRCR / RULER: no verified public score found (1M window served; no independent retrieval figure found)

Cost / speed:

- Output speed / cost-per-task: N/A on AA (deprecated)

### Normalized scores (1–100)

- **Tool use: 55/100.** AA Index 9 is below the class median-adjacent tier for agentic composites; native tool use existed but no dedicated TB/Tau numbers verified; deprecation ends any live agent evaluation.
- **Reasoning: 58/100.** Index 9 (estimated) with a June-2024 knowledge cutoff places it mid-pack for its 2025 release year but below today's frontier by a wide margin.
- **Context window: 95/100.** 1M window (≥1M band = 95–100); no verified ≥98% retrieval-at-512K figure, so the band floor applies.
- **Multimodal: 90/100.** Full omni-class input (text/image/speech/video) plus image output — the "+audio in / non-text out = 90–100" band; capped for the model's age.
- **Coding: 50/100.** No verified public SWE-bench/LiveCodeBench/SciCode number found; derived from Index 9 composite; deprecation precludes current coding relevance.
- **Cost efficiency: 95/100.** Historical $0.10/$0.40 per 1M was at the ~$0.10/$0.20 ≈ 97–99 reference; scored 95 accounting for service shutdown (no longer purchasable) and audio-input surcharge.
- **Overall Score: 70/100.** (55 + 58 + 95 + 90 + 50) / 5 = 69.6 → 70 — a historical reference for cheap omni multimodal at 1M; superseded by Gemini 2.5/3.x Flash generations for active work.

---

## Signature

- Provided by: **Qwen 3.8 27B (openrouter/qwen/qwen3.8-27b:free)** — 2026-09-29
- Method: public internet research (Artificial Analysis model page `gemini-2-0-flash` checked 2026-09-29; curated project meta.json for shutdown date/historical pricing); scores are normalized 1–100 interpretations, not official vendor scores.
