# Grok 4 Fast — findings by GLM 5.3

- Source: xAI (`grok-4-fast`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4 Fast
- **Short description:** xAI's high-speed, low-cost multimodal variant of Grok 4 (released 2025-09-18), positioned for SOTA cost-efficiency with a 2M-token context window and selectable reasoning/non-reasoning modes. Retired 2026-05-15; included here for historical comparison at the same scale.
- **Provider / access:** xAI API (historically also OpenRouter); OpenRouter listing now 404s, consistent with retirement.
- **Release / knowledge:** 2025-09-18; retired 2026-05-15 (llmlearner retirement tracker); knowledge cutoff not disclosed.
- **IDs:** `grok-4-fast` (xAI). No OpenCode Zen listing.
- **Context window:** 2,000,000 tokens (Benchable/xAI author description; one aggregator lists a conflicting 131K — the 2M provider listing wins); higher price tier applied above 128K.
- **Modalities:** text, image, and file (PDF) input; text output; reasoning and non-reasoning modes configurable via API; tools, structured outputs, response format, logprobs, seed.
- **Pricing (listed rates at retirement, as of 2026-09-25):** $0.20 in / $0.50 out / $0.05 cached read per 1M tokens.
- **Architecture:** proprietary; parameter count not disclosed.

### Raw benchmarks found

> Sparse standardized coverage; no GPQA/HLE/SWE-bench rows found for this ID. Aggregator composites carry caveats (the LLMPodium row conflicts with all other sources on context/price, so its composite is treated as low-confidence).

Agent / tool use:

- Benchable suite reliability: **100% success rate** across all its benchmarks (API reliability ranked 10/10-equivalent; reliability ★★★★★)
- Terminal-Bench 2.1 / Tau3-Banking / Tau2-Bench / GDPval-AA / Claw-Eval: no verified public score found

Reasoning / knowledge:

- Benchable Ethics (Baseline): **100%** accuracy (most accurate model at its price point in that suite)
- LLMPodium composite: Intelligence **16.6** (#542 of 700; their scale — low-confidence row given the page's conflicting spec data)
- GPQA Diamond / HLE / LCR / CritPt / AA Intelligence Index: no verified public score found
- Reviewer consensus (designforonline): "limited reasoning results make it better for fast multimodal volume work than complex analysis"

Coding:

- Benchable Coding (Baseline): **94.0%** accuracy, 89th percentile (duration 22nd percentile — slower on coding tasks)
- SWE-bench Verified / DeepSWE / LiveCodeBench / SciCode: no verified public score found

Long context:

- No long-context retrieval reported; 2M is a capacity spec

### Normalized scores (1–100)

> Retired model; scores reflect the evidence gathered (one dated third-party suite plus reviewer coverage).

- **Tool use: 55/100.** Tools, structured outputs, and dual reasoning modes are verified API capabilities with a perfect reliability record in the one third-party suite; zero agentic benchmark rows (TB/Tau3/GDPval) cap it mid-band.
- **Reasoning: 52/100.** Configurable reasoning mode and perfect ethics accuracy, but reviewer consensus is that deep reasoning is limited, no standardized reasoning rows exist, and the one composite index (16.6) is low-confidence — scored just below mid.
- **Context window: 95/100.** 2,000,000 tokens = ≥1M tier (95–100); no measured retrieval quality, so not 100.
- **Multimodal: 72/100.** Text, image, and PDF/file input with text output (image+PDF band, 75–90 floor-weighted: no video/audio).
- **Coding: 62/100.** Benchable Coding baseline 94.0% at the 89th percentile is a strong single-harness signal, but it is an internal suite with slow task durations and no SWE-bench/LiveCodeBench corroboration.
- **Cost efficiency: 97/100.** $0.20/$0.50 with $0.05 cached reads was near-free economics at its tier (xAI marketed it as SOTA cost-efficiency); scored on listed rates — the model is retired, so the price is historical.
- **Overall Score: 67/100.** (55 + 52 + 95 + 72 + 62) / 5 = 67.2 → 67. Best-fit (historical): the ultra-cheap 2M-context volume worker for multimodal extraction and routine coding — superseded in xAI's lineup by Grok 4.7 and Grok Build 0.1.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-09-25
- Method: public internet research (Benchable suite, LLMPodium composite, retirement trackers, pricing aggregators); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
