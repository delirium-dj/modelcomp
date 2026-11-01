# Grok Build 0.1 — findings by GPT 6 Sol

- Source: SpaceXAI / xAI (`grok-build-0.1`)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok Build 0.1.
- **Short description:** xAI's coding-oriented reasoning API model for agentic software engineering. xAI currently lists `grok-code-fast-1`, `grok-code-fast` and `grok-code-fast-1-0825` as **aliases** of `grok-build-0.1`; historical evaluations labeled with the older route remain labeled as measured, since the release-time and current serving versions need not be identical ([exact-model documentation](https://docs.x.ai/developers/models/grok-build-0.1)).
- **Provider / access:** Paid xAI API `grok-build-0.1` through its OpenAI-compatible Chat Completions and Responses endpoints; no verified current free route. xAI's current [model price roster](https://docs.x.ai/docs/models) lists this ID. The 2025 launch partner promotional free access for the old alias was time-limited ([xAI announcement](https://x.ai/blog/grok-code-fast-1)).
- **Release / knowledge:** Current Build 0.1 version date and knowledge cutoff not independently documented. Its historical `grok-code-fast-1` alias was announced **August 28, 2025** ([xAI announcement](https://x.ai/blog/grok-code-fast-1)); do not mislabel this as a verified Build checkpoint date.
- **IDs:** Canonical `x-ai/grok-build-0.1`; vendor-listed aliases above are not separate folders/weights. Proprietary weights; original launch described a new architecture but gave no parameter count.
- **Context window:** **256,000 tokens** total; no independently verified current per-request maximum output on the [Build model page](https://docs.x.ai/developers/models/grok-build-0.1). Historical [Vals alias configuration](https://www.vals.ai/models/grok_grok-code-fast-1) used 40,000 output tokens, not a guaranteed current Build limit.
- **Modalities:** Current Build page lists **text and image input**, text output, function calling, structured output and reasoning. This differs from [Artificial Analysis's historical text-only description of the old alias](https://artificialanalysis.ai/models/grok-code-fast-1); use the vendor's current exact-ID specification for modality, not the old alias's older snapshot.
- **Pricing (as of 2026-11-01):** xAI [current Build tariff](https://docs.x.ai/developers/models/grok-build-0.1) **$1 input / $0.20 cached input / $2 output per million tokens** for prompts under 200K; **$2/$0.40/$4** for prompts of at least 200K (higher rate applies to *all* request tokens). The 2025 `grok-code-fast-1` launch price $0.20/$1.50 is **historical alias pricing**, not this tariff.
- **Architecture:** Proprietary; size undisclosed. No basis to equate a historical old-alias evaluation to a guaranteed fixed current Build snapshot.

### Raw benchmarks found

- **Exact current-ID agent/coding evidence:** [BenchLM's source-linked Build-specific entry](https://benchlm.ai/models/grok-build-0-1) reports **49.15% Gert Labs** from [Gert Labs rankings](https://gertlabs.com/rankings), its only Build-specific public row; the direct ranking was not machine-readable in this review. [Pointerbench's published exact `x-ai/grok-build-0.1` row: **0.0%** on Sheets, Text and Pro screenshot grounding](https://huggingface.co/datasets/WarmwindOS/pointerbench). This narrow absolute-coordinate test measures GUI grounding, **not** general image comprehension or coding; zero should not be presented as a universal vision result.
- **Historical alias-coded agent evidence (not a fresh Build test):** [BenchLM's old-ID `grok-code-fast-1` archive](https://benchlm.ai/models/grok-code-fast-1) links **τ²-bench 75.7%** to its historic AA run. The vendor confirms today's alias mapping, but historical serving continuity is not guaranteed; keep the measured route explicit.
- **Historical alias-coded reasoning:** Archived [AA-GPQA **72.7%**, AA-HLE **8.0%**, AA-LCR **53.0%**](https://benchlm.ai/models/grok-code-fast-1) under `grok-code-fast-1`, *not* newly measured under Build 0.1. No independently verified current Build reasoning/near-window retrieval result found.
- **Historical alias-coded coding:** xAI launch reported [SWE-bench Verified **70.8%** with its internal harness](https://x.ai/blog/grok-code-fast-1); independent [Vals **57.6%** SWE Verified and **61.97% ±1.20** LiveCodeBench](https://www.vals.ai/models/grok_grok-code-fast-1), all measured under historical `grok-code-fast-1`. [PDB's 5,751-task debugging suite](https://huggingface.co/datasets/Precise-Debugging-Benchmarking/PDB-Results) reports **58.5% ±1.3 unit-test pass** for that alias, versus **41.8% ±6.0** on its 256-task PDB-Wild subset. These are not independent replications of current Build's checkpoint.

### Normalized scores (1–100)

- **Tool use: 65/100.** Build-specific Gert 49.15 and old-alias τ² 75.7, heavily discounted for unresolved checkpoint continuity.
- **Reasoning: 62/100.** Old-alias GPQA 72.7 and HLE 8.0, no new Build-specific independent reasoning run.
- **Context window: 69/100.** Vendor 256K total with no exact current-ID near-limit retrieval test; old-alias LCR 53 is provisional lineage.
- **Multimodal: 45/100.** Image input on current ID but 0% in one narrow GUI-coordinate test; no broad image benchmark or media generation.
- **Coding: 73/100.** Historical independent 57.6 SWE and PDB debugging 58.5 support coding lineage; only one current-ID Gert row.
- **Cost efficiency: 78/100.** $1/$2 short-prompt tariff, doubled at 200K, cannot borrow the historical $0.20 input rate.
- **Overall Score: 63/100.** Half-up mean (65 + 62 + 69 + 45 + 73) / 5 = 62.8; cautiously rated current coding model, with historical aliases kept distinct.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-11-01 UTC
- Method: Three fresh model, model-text and dataset searches plus historical-ID benchmark search; current vendor alias, modalities and tariff distinguished from older alias-measured results. Scores are normalized judgments.
- Reference URLs:
  - [xAI Grok Build 0.1 exact-ID specs, aliases and prices](https://docs.x.ai/developers/models/grok-build-0.1)
  - [xAI current model price roster](https://docs.x.ai/docs/models)
  - [BenchLM Build 0.1 source-linked exact-ID row](https://benchlm.ai/models/grok-build-0-1)
  - [Pointerbench exact-ID GUI grounding results](https://huggingface.co/datasets/WarmwindOS/pointerbench)
  - [xAI original Grok Code Fast launch, historical terms and benchmark](https://x.ai/blog/grok-code-fast-1)
  - [Vals independent historical-alias coding results](https://www.vals.ai/models/grok_grok-code-fast-1)
  - [PDB independently run old-alias debugging results](https://huggingface.co/datasets/Precise-Debugging-Benchmarking/PDB-Results)
- Future sources: add a new file next to this one using the same headings.
