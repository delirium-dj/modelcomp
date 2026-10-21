# GLM 4.5 Flash — findings by MiMo 2.6 Flash

- Source: Z.ai / Zhipu AI (`glm-4.5-flash`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 4.5 Flash (GLM-4.5-Flash)
- **Short description:** Z.ai's zero-cost, high-speed lightweight model in the GLM-4.5 line (released 2025-07-28) — dual thinking modes, up to ~96–98K max output, native tool calling and structured output on a 128K window; the free workhorse of the 4.5 generation, distilled from the 355B GLM-4.5 flagship.
- **Provider / access:** Z.ai / Zhipu Open Platform free tier ($0/$0, OpenAI-compatible, 1 concurrent request rate limit — free-model/freellms), UnoRouter `glm-4.5-flash:free`, EmpirioLabs (models.dev: 3 provider routes); no credit card. Open weights listed by freellms; models.dev marks "Weights Closed" — license disputed, not claimed.
- **Release / knowledge:** released 2025-07-28 (models.dev/freellms); knowledge cutoff 2025-04.
- **IDs:** `glm-4.5-flash` / `glm-4-5-flash` (provider routes), opencode id `opencode/glm-4.5-flash`.
- **Context window:** 128K (131,072) input; max output 98,304 per models.dev (freellms 96K; free-model lists 8K — output cap disputed).
- **Modalities:** text in/out (no vision).
- **Pricing (as of 2026-10-21):** **$0.00 input / $0.00 output** on the Z.ai free tier (all three catalogued routes $0/$0); rate-limited to 1 concurrent request.
- **Architecture:** distilled lightweight member of the GLM-4.5 MoE family (flagship is 355B/32B-active); hybrid interleaved thinking modes; tools + JSON + temperature control.

### Raw benchmarks found

> Sparse — external references catalogue (freellms.org, dated 2026-03-11) plus composite overviews. No GPQA/AIME/SWE rows exist for this exact ID.

Agent / tool use:

- Artificial Analysis-style **Agentic composite: 16.2/100** (freellms benchmark overview)
- Terminal-Bench Hard: **22%** (freellms external reference, 2026-03-11)
- Tau3 / GDPval / Claw-Eval / BFCL: no verified public score found

Reasoning / knowledge:

- **Intelligence composite: 26.4/100** (freellms overview — general reasoning/instruction following)
- GPQA Diamond / HLE / MMLU-Pro / AIME: no verified public score found for this exact ID (flagship GLM-4.5's numbers — GPQA 79.1, AIME24 91.0 — are a different, 355B model and deliberately not merged)

Coding:

- Artificial Analysis **Coding Index: 26.3** (freellms external reference, 2026-03-11)
- SciCode: **34.8%** (freellms, same date)
- SWE-bench Verified / LiveCodeBench: no verified public score found

Long context:

- 128K window; no MRCR/RULER figure
- (opencode's public data page lists its Context-window dim as 33/100 — tracker opinion, not a benchmark)

### Normalized scores (1–100)

- **Tool use: 52/100.** Native tool calling + structured output ship in the product, but the only measured signals are weak: agentic composite 16.2/100 and Terminal-Bench Hard 22% (2026-03-11); no Tau3/GDPval evidence at all.
- **Reasoning: 55/100.** Hybrid thinking modes are on, but the intelligence composite sits at 26.4/100 and every standard reasoning benchmark (GPQA/HLE/AIME/MMLU-Pro) is "no verified public score found" for this ID — scored purely on the sparse composites.
- **Context window: 64/100.** 128K is the entry point of the long-context band (200K = 70 reference); no retrieval measurement.
- **Multimodal: 15/100.** Text-only — no image/audio/video input, no non-text output.
- **Coding: 55/100.** SciCode 34.8% and AA Coding Index 26.3 are low-mid readings, Terminal-Bench Hard 22% confirms — a light coder for snippets and glue, not repository work; no SWE/LCB row.
- **Cost efficiency: 97/100.** $0/$0 across all catalogued routes — free hosted inference (single-concurrent-request rate limit is the only price).
- **Overall Score: 48/100.** Mean of (52 + 55 + 64 + 15 + 55) / 5 = 48.2 → 48. Best fit: free, rate-limited chat/light-coding lane for prototypes and demos; benchmark evidence is thin, so treat this score as a documented floor rather than a calibrated placement.

---

## Signature

- Provided by: **MiMo 2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-10-21
- Method: fresh public web research (freellms.org catalog + external benchmark references, models.dev registry, free-model.com/onomeo specs, Z.ai/GLM-4.5 paper as non-mergeable sibling context); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
