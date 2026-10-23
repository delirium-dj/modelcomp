# Exo Free — findings by Nemotron 3.5 Super VL 120B A12B

- Source: modelbenchmark.io (`modelbenchmark.io/models/exo-free`, specs/pricing/lifecycle), modelcompare.dev (`modelcompare.dev/models/opencode/exo-free`, capability/fit scores), freeaiapi.org (`freeaiapi.org/articles/opencode-exo-free-guide`, hands-on review + lm.ikale.io fingerprint match), OpenCode Zen API (`opencode.ai/zen/v1/models`, model registration)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Exo Free
- **Short description:** Anonymous free model on OpenCode Zen, released 2026-10-06; fingerprint analysis (lm.ikale.io) matches Claude Opus 5.5 at 99.4% confidence; text+image input, text output, tool calling supported; proprietary, not open weights.
- **Provider / access:** OpenCode Zen (`opencode/exo-free`, Chat Completions); registered at `opencode.ai/zen/v1/models`.
- **Release / knowledge:** Released 2026-10-06; knowledge cutoff not stated.
- **IDs:** `exo-free` (OpenCode Zen). Free tier confirmed ($0 input/$0 output).
- **Context window:** 1,050,000 tokens declared (modelcompare.dev); max output 131K tokens; no public long-context retrieval score.
- **Modalities:** Text and image in; text out; tool calling yes (confirmed); structured output/JSON not confirmed; reasoning not explicitly stated.
- **Pricing (as of 2026-10-20):** Free — $0 input / $0 output per 1M tokens (modelbenchmark.io, modelcompare.dev). No per-token price published; likely gated behind invite/enterprise access.
- **Architecture:** Proprietary (parameter count not disclosed); fingerprint evidence suggests possible Opus 5.5 lineage or distillation; weights not public.

### Raw benchmarks found

Agent / tool use:

- Tool calling: **confirmed** (modelcompare.dev capabilities)
- Structured output / JSON: **not confirmed**

Reasoning / knowledge:

- Fingerprint match to Claude Opus 5.5: **99.4% confidence** (lm.ikale.io via freeaiapi.org) — proxy for Opus 5.5-level reasoning, NOT a standardized benchmark
- No GPQA, HLE, MMLU, ARC-AGI, or Intelligence Index scores found in any source checked.

Coding:

- Hands-on code generation tests passed (freeaiapi.org): Pelican on a Bicycle spatial test, Blender convenience store modeling — NOT standardized coding benchmarks
- No SWE-bench, LiveCodeBench, HumanEval, or other standardized coding scores found.

Multimodal:

- Native image understanding confirmed via hands-on tests (freeaiapi.org): microservice architecture diagrams, mobile error screenshots
- No MMMU, MMMU-Pro, or other standardized vision benchmark scores found.

Long context:

- Declared 1.05M-token context; no LCR/MRCR/RULER retrieval score found.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores. Where no standardized benchmark exists, scores are derived from capability declarations and fingerprint proxy evidence, marked provisional.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):** Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`. **NEVER include Cost efficiency** — scored independently.

- **Tool use: 65/100.** Tool calling confirmed (modelcompare.dev); no agent benchmark scores (Terminal-Bench, BrowseComp, OSWorld, etc.) found. Score reflects declared capability only.
- **Reasoning: 75/100.** 99.4% fingerprint match to Claude Opus 5.5 (lm.ikale.io) strongly suggests frontier-level reasoning; however, this is a proxy, not a measured benchmark. No GPQA/HLE/MMLU scores found to corroborate.
- **Context window: 85/100.** Verified 1.05M-token context with 131K max output; no long-context retrieval score found.
- **Multimodal: 70/100.** Text+image in, text out; hands-on vision tests passed (architecture diagrams, error screenshots); no standardized vision benchmarks (MMMU, etc.) found.
- **Coding: 70/100.** Hands-on code tests passed (Pelican on a Bicycle, Blender modeling); Opus 5.5 fingerprint proxy suggests strong coding; no standardized coding benchmarks (SWE-bench, LiveCodeBench, etc.) found.
- **Cost efficiency: 100/100.** Free API ($0/$0 per 1M) — maximum cost efficiency score.
- **Overall Score: 73/100.** Half-up mean of (65 + 75 + 85 + 70 + 70) / 5 = 73.0 → 73. Best-fit recommendation: free model with Opus 5.5-class fingerprint; strong context and vision; treat all scores as provisional pending standardized benchmark confirmation.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-20
- Method: public internet research (modelbenchmark.io specs/pricing + modelcompare.dev capabilities + freeaiapi.org hands-on review + lm.ikale.io fingerprint + OpenCode Zen API); scores are normalized 1–100 interpretations, not official vendor scores; reasoning/coding/multimodal scores derived from fingerprint proxy and hands-on tests due to absence of standardized benchmarks.
- Future sources: add a new file next to this one, using the same headings.