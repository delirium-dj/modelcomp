# Claude Mythos 5.1 — findings by Qwen 3.8 Flash

- Source: Anthropic / Claude Mythos 5.1 (`anthropic/claude-mythos-5.1`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.1
- **Short description:** Anthropic's restricted configuration of Claude Fable 5.1 with cybersecurity and life-sciences safeguards relaxed for vetted enterprise users — leader on Terminal-Bench 4.0, ExploitBench and real bioinformatics work.
- **Provider / access:** Anthropic API (`claude-mythos-5.1`), vetted-enterprise only; no OpenCode Zen free ID (`noFreeId`). Reasoning + tool calls.
- **Release / knowledge:** 2026-09-01 (Fable 5.1 & Mythos 5.1 system card); knowledge cutoff not disclosed.
- **IDs:** `anthropic/claude-mythos-5.1`.
- **Context window:** 1M in / 128K max out (curated meta; LLM Stats confirms 1.0M/128.0K).
- **Modalities:** text, image in; text out; reasoning on; tool calls. No audio/video, no non-text output.
- **Pricing (as of 2026-10-02):** Paid $10 / $50 per 1M (cached input $0.25); no free tier.
- **Architecture:** proprietary, hosted only — same base as Claude Fable 5.1 with restricted-safety configuration.

### Raw benchmarks found

> Independently verified against the Anthropic Fable 5.1 & Mythos 5.1 system card rows surfaced via BenchmarkList (8 matched evals) and BenchLM (Terminal-Bench 4.0; public overall not yet computed), with pricing from LLM Stats (fetched 2026-10-02). Coverage is deliberately thin — Anthropic publishes limited Mythos-line results.

Agent / tool use:

- Terminal-Bench 4.0: **60.9%** (system card; thinking max) — **#1 of 10**, above Fable 5.1's 55.8%
- ExploitBench v8-bench: **AutoNudge mean 12.61 flags; 83.0% capability; 222/410 full ACEs** — #1 (patched-V8 exploitation; restricted-safety line)

Reasoning / knowledge:

- ArxivMath (MathArena): **93.9% with tools / 91.3% without** — #1 of 23
- AA-Omniscience net score: **0.57** (0.77 correct, 0.20 incorrect, 0.02 abstained) — strong factuality
- BioMysteryBench: **90.3% human-solvable** (44.1% human-difficult); LatchBio **SpatialBench 77.6% / SingleCellBench 61.9%** — #1; ProteinGym Hard **49.3%** — #1
- BBQ: 89.9% disambiguated / 100.0% ambiguous accuracy, ~0% bias — #1

Coding:

- Terminal-Bench 4.0 60.9% is the only public coding/agentic row; no SWE-bench/DeepSWE/Coding Index published for this configuration.

Multimodal / long context:

- Text+image input confirmed (LLM Stats); no image-benchmark rows published; 1M window with no ≥98% long-context retrieval metric reported.

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 93/100.** Terminal-Bench 4.0 60.9% leads all tracked models (Fable 5.1, its own base, scores 55.8) and ExploitBench 83.0% capability / 222 full ACEs is #1 — frontier agency; held under 95 only because TB 2.1/GDPval/Toolathlon rows are unpublished.
- **Reasoning: 92/100.** ArxivMath 93.9%, BioMysteryBench 90.3%, LatchBio 77.6% and an Omniscience net score of 0.57 (low hallucination) are elite and unusually grounded; no GPQA/HLE rows keep it from the ceiling.
- **Context window: 95/100.** 1M-token window / 128K output meets the ≥1M tier; no long-context retrieval metric (MRCR/GraphWalks) is published for this configuration, so short of 100.
- **Multimodal: 65/100.** Text+image in / text out only — the +image-in band (60–70); no multimodal benchmark rows published and no audio/video or non-text output.
- **Coding: 85/100.** The #1 Terminal-Bench 4.0 60.9% implies frontier agentic coding, but with no SWE-bench Pro, DeepSWE or AA Coding Index rows the methodology keeps thin-coverage coding at the lower end of the strong band.
- **Cost efficiency: 30/100.** $10 / $50 per 1M matches the $10/$50 ≈ 30 anchor (cached $0.25 helps repetitive prompts); vetted-enterprise access, no free tier. Cost is excluded from Overall.
- **Overall Score: 86/100.** Mean of Tool 93, Reasoning 92, Context 95, Multimodal 65, Coding 85 = 86.0 → 86. Best fit: authorized security research and compute-biology where Fable-class capability plus relaxed guardrails and unusually low hallucination matter; weak value outside those lanes given $10/$50 pricing, restricted access and sparse public coding/multimodal evidence.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (BenchmarkList and BenchLM rows citing the Anthropic Fable 5.1 & Mythos 5.1 system card; pricing/window from LLM Stats); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
