# Jev 1.13 — findings by Ernie 5.5 Flash

- Source: TypeSafe AI/Jev 1.13 (`jev-1.13`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Jev 1.13 (the launch release of TypeSafe AI's System One model; 1.14 is current)
- **Short description:** The first "System One" typed-decision model (launched 2026-09-15): it reads a `state` and answers Choice / Score / Noul questions with calibrated probabilities, returning no prose. Built for high-volume triage, routing, moderation, extraction and real-time control — not a chat model.
- **Provider / access:** TypeSafe API (`POST https://api.typesafe.ai/v1/systemone`, `jev-1.13` / `jev-latest`), OpenRouter (`typesafe/jev-1.13` via its Decisions API), OpenCode Console (`jev-1.13`, `jev-1.13-free`); Python/TypeScript SDKs.
- **Release / knowledge:** 2026-09-15 (1.13.0); knowledge cutoff not published (trained on synthetic data per TechCrunch).
- **IDs:** `jev-1.13`, `typesafe/jev-1.13`, `jev-1.13-free` (OpenCode free route).
- **Context window:** 65,536 tokens (64K; 32K state budget) on TypeSafe; OpenRouter lists 262,144 (danger-zone long context).
- **Modalities:** text state in; typed JSON decision + probability out (Choice/Score/Noul). PNG/JPEG images accepted behind an opt-in danger-zone header (not production-ready). No text generation.
- **Pricing (as of 2026-11-13):** $0.042 in / $0 out per 1M tokens; `jev-1.13-free` free for a limited time on OpenCode.
- **Architecture:** proprietary TypeSafe System One model trained with "reinforcement learning for calibrated decisions" (RLCD); no parameter count, weights or paper published. Rate limits 100K tok/s + 40 req/s.

### Raw benchmarks found

> Independent rows from the Artificial Analysis Decision Index (v1.0, October 2026 — the version that scored Jev 1.13) plus JevBench 1.7.46 (Jev 1.13 row). Inception's own claims are not reproduced here.

Agent / tool use:

- Not applicable — decision endpoint, no tool calling or chat completions

Reasoning / knowledge (AA Decision Index v1.0, 2026-10-13/16):

- AA Decision Index: **57.5** (13 Oct) → **57.1** (16 Oct) — **1st of 11 decision models at launch**
- Sub-scores (v1.0): Omniscience accuracy **34.6**, non-hallucination **35.2**, HLE-MultiChoice **20.9**, When2Call **80.7**, WildGuardTest F1 **93.6**
- Expected calibration error: **0.1174** (13 Oct) → **0.0952** (16 Oct)
- Cost per 1M tasks: **$42**; time per task **127 ms** (13 Oct) → **78 ms** (16 Oct)

Other boards:

- JevBench 1.7.46 (Benchmark Heaven, 2026-10-12): **77.1 Capability** (intelligence 63.6, calibration 90.6); 1.7.47 re-measure: 1.13 keeps its own row (reference, not ranked)
- Microsoft 36-benchmark comparison (vendor-run, 147,137 questions): average accuracy **82.3%**, calibration **93.7** — 1st of 7 on calibration, 2nd of 8 on accuracy

Coding / long context:

- Not applicable — the 64K context is the only window figure; no MRCR/RULER row.

### Normalized scores (1–100)

- **Tool use: 40/100.** Not applicable by design (no tool calling); scored low because the dimension cannot be exercised.
- **Reasoning: 65/100.** AA Decision Index 57.5 led the 11-model field at launch; When2Call 80.7 and WildGuardTest F1 93.6 are strong, but HLE-MultiChoice 20.9 and Omniscience 34.6 are mid. JevBench 77.1 (intelligence 63.6) supports the mid-band.
- **Context window: 60/100.** 65,536 tokens — tier 100K–200K band (50–64).
- **Multimodal: 40/100.** Text-only in production; image input exists only behind an opt-in danger-zone header (not production-ready), no vision benchmark row.
- **Coding: 15/100.** Not a code model — no code generation by design.
- **Cost efficiency: 95/100.** $0.042/$0 per 1M with free output — among the cheapest decision endpoints; $42 per 1M AA tasks.
- **Overall Score: 44/100.** Best fit for high-volume typed classification/routing where calibrated probabilities gate the next step at 78–127 ms per task; the non-generative design keeps the overall low by construction, and 1.14 has since taken the lead on the AA board.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-13
- Method: public internet research (Artificial Analysis Decision Index v1.0 rows, JevBench hosted-API board, systemonemodels.org spec sheet and Jev 1.13/1.14 version history, TypeSafe docs, OpenCode Console pricing); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Jev — System One Models (specs, AA/JevBench rows, version history)](https://systemonemodels.org/models/jev/)
  - [Artificial Analysis Decision Index](https://artificialanalysis.ai/evaluations/artificial-analysis-decision-index)
  - [OpenCode Console docs — Jev 1.13 and the System One endpoint](https://opencode.ai/docs/zen)
  - [TypeSafe AI documentation](https://docs.typesafe.ai/)
- Future sources: add a new file next to this one, e.g. `Ernie_5.5_Flash_v2.md`, using the same headings.