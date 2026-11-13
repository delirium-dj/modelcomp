# Mercury Decide — findings by Ernie 5.5 Flash

- Source: Inception Labs/Mercury Decide (`mercury-decide`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mercury Decide (Inception's System One typed-decision model)
- **Short description:** A diffusion-based decision model (announced 2026-09-30) that reads a state plus typed questions and returns Choice / Score / Noul answers with calibrated probabilities — no prose, no output tokens. Built for high-volume triage, routing, moderation and agent step selection.
- **Provider / access:** Inception API (`POST https://api.inceptionlabs.ai/v1/decisions`, model `mercury-decide`); was on OpenRouter as `inception/mercury-decide` / `:free` (both endpoints gone as of 2026-11-12). Not OpenAI-compatible; no chat completions, streaming or tool calling.
- **Release / knowledge:** 2026-09-30; knowledge cutoff not published.
- **IDs:** `mercury-decide`, `inception/mercury-decide`, `inception/mercury-decide-20260930`.
- **Context window:** 65,536 tokens (Inception `/v1/models`, checked 2026-11-12); max 255 Choice options, 10 Score levels, images (PNG/JPEG/WebP/GIF) in state up to 16 per request / 10 MiB each.
- **Modalities:** text + image in (state); typed decision out (Choice / Score / Noul + probability). Non-reasoning, non-generative.
- **Pricing (as of 2026-11-13):** $0.02 in / $0 out per 1M (50% off a regular $0.04); AA-measured $70 per 1M tasks on v2.1.
- **Architecture:** proprietary Inception diffusion LLM (parallel denoising), weights unpublished; "Typed-decision preview" per Inception's own model API.

### Raw benchmarks found

> Independent rows from the Artificial Analysis Decision Index (v1.0 and v2.1) and JevBench (Benchmark Heaven hosted-API board) — the first and only measured scores for this ID. Inception's launch claims ("most intelligent decision model on JevBench v1.4", "up to 14 decisions/sec") are vendor-run and not independently reproduced.

Agent / tool use:

- Not applicable — decision endpoint, no tool calling or chat completions

Reasoning / knowledge (Decision Index v2.1, 2026-11-12):

- AA Decision Index: **62.1** (12th of 19 decision models; Jev 1.14 = 66.2)
- Sub-scores: When2Call accuracy **78.9**, Omniscience accuracy **35.8**, HLE-MultiChoice accuracy **8.6**
- Expected calibration error: **0.1706** (worst of the 19); non-hallucination rate **20.2** (13th of 19)
- AA Decision Index v1.0 (2026-10-13): **52.7** (5th of 11), ECE 0.2111, $15 per 1M tasks, 500 ms/task

Other boards:

- JevBench 1.7.47 (Benchmark Heaven, 2026-10-07): **73.6 Capability** (intelligence 65.9, calibration 81.3) vs Jev 1.14 = 75.0
- Cost per 1M tasks: **$70** (AA v2.1); time per task **245 ms**

Coding / long context:

- Not applicable — the 65,536-token state window is the only context figure; no MRCR/RULER row.

### Normalized scores (1–100)

- **Tool use: 40/100.** Not applicable by design (no tool calling); scored low because the dimension cannot be exercised, not because of a measured failure.
- **Reasoning: 55/100.** Omniscience accuracy 35.8, HLE-MultiChoice 8.6 and When2Call 78.9 are mid for the decision-model class; JevBench intelligence 65.9 is mid. The 0.1706 calibration error (worst of 19) is the cap.
- **Context window: 60/100.** 65,536 tokens — tier 100K–200K band (50–64).
- **Multimodal: 55/100.** Image input documented in state (up to 16 images/request) but no vision benchmark row; text+image in, typed decision out.
- **Coding: 15/100.** Not a code model — no coding capability by design.
- **Cost efficiency: 90/100.** $0.02/$0 per 1M with no output tokens — extremely cheap per decision, though AA measured $70 per 1M tasks on its evals.
- **Overall Score: 45/100.** Best fit for high-volume typed routing/classification where a calibrated probability gates the next step — but the worst calibration error on the AA board means thresholds need per-case validation; the non-generative design keeps the overall low by construction.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-13
- Method: public internet research (Artificial Analysis Decision Index v1.0/v2.1 rows, JevBench hosted-API board, systemonemodels.org spec sheet, Inception docs and Mercury 3 launch post); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Mercury Decide — System One Models (specs + AA/JevBench rows)](https://systemonemodels.org/models/mercury-decide/)
  - [Artificial Analysis Decision Index](https://artificialanalysis.ai/evaluations/artificial-analysis-decision-index)
  - [Decisions — Inception docs](https://docs.inceptionlabs.ai/capabilities/decisions)
  - [Diffusion at Scale: Introducing Mercury 3 (Mercury Decide mention) — Inception](https://www.inceptionlabs.ai/blog/introducing-mercury-3)
- Future sources: add a new file next to this one, e.g. `Ernie_5.5_Flash_v2.md`, using the same headings.