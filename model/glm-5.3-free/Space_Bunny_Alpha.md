# GLM 5.3 Free — findings by Space Bunny Alpha

- Source: OpenCode Zen (`glm-5.3-free`; free route)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3 Free
- **Short description:** OpenCode Zen's free route associated with the GLM-5.3 family, positioned for agentic software development and tool-heavy coding. The exact Zen ID is not present in the current public catalog, so this report does not silently substitute `glm-5.3` or `glm-5.3-flash`.
- **Provider / access:** OpenCode Zen route `opencode/glm-5.3-free` as recorded in repository metadata; the current OpenCode Zen API catalog checked on 2026-09-24 did not return this exact ID. The nearest catalog IDs are `glm-5.3` and `glm-5.3-flash`; neither is treated as proof of alias equivalence.
- **Release / knowledge:** The underlying GLM-5.3 family is listed by BenchLM as released August 14, 2026. No knowledge cutoff was found for the free route.
- **IDs:** Repository ID `opencode/glm-5.3-free`; exact current Zen API ID **not found**.
- **Context window:** Repository metadata says 204K for this route; this exact-route limit was not independently verified. The underlying GLM-5.3 model is reported at 1M by BenchLM, but that value is not transferred to the unresolved free route.
- **Modalities:** Repository metadata says text input/output. Exact Zen route modality support was not independently verified; no image/video/audio support is claimed.
- **Pricing (as of 2026-09-24):** Free Zen promotional route according to repository metadata. Current official Zen documentation does not list `glm-5.3-free` in the public model table, so availability and rate limits are unverified.
- **Architecture:** OpenCode route; underlying model not resolved. Z.AI GLM-5.3 weights/model card is open-weight, but the exact free-route identity and deployment configuration could not be verified.

### Raw benchmarks found

Agent / tool use:

- No exact verified public benchmark found for the `glm-5.3-free` route.
- Underlying GLM-5.3 proxy rows, **not used as exact-route scores**: Terminal-Bench 2.1 **88.2%**, Toolathlon Verified **73.0%**, and FrontierSWE **78.1%** (BenchLM/Z.AI GLM-5.3 model-card rows).

Reasoning / knowledge:

- No exact verified public benchmark found for `glm-5.3-free`.
- Underlying GLM-5.3 proxy rows, **not used as exact-route scores**: GPQA Diamond **88.1%** and MMLU-Pro **86.8%** (Vals AI rows on BenchLM).

Coding:

- No exact verified public benchmark found for `glm-5.3-free`.
- Underlying GLM-5.3 proxy rows, **not used as exact-route scores**: DeepSWE **66.9%** and LiveCodeBench Vals **80.5%** (BenchLM/Z.AI GLM-5.3 model-card rows).

Long context:

- No exact verified retrieval-at-length result for `glm-5.3-free`.
- The underlying GLM-5.3 family is reported with 1M context by BenchLM, but the free route's 204K metadata is kept separate.

Sources consulted: [OpenCode Zen documentation](https://opencode.ai/docs/zen/), [OpenCode Zen model catalog](https://opencode.ai/zen/v1/models), [BenchLM GLM-5.3](https://benchlm.ai/models/glm-5-3), and [Z.AI GLM-5.3 model card](https://huggingface.co/zai-org/GLM-5.3), accessed 2026-09-24. Underlying-model numbers are explicitly labeled proxies and are not presented as route-specific evidence.

### Normalized scores (1–100)

- **Tool use: 78/100 (provisional route estimate).** The underlying GLM-5.3 model has strong Terminal-Bench/Toolathlon evidence, but the exact free route is absent from the current catalog; the score is capped and must be revalidated when the route is documented.
- **Reasoning: 82/100 (provisional route estimate).** Underlying GLM-5.3 GPQA/MMLU rows are strong, but no exact free-route result was found.
- **Context window: 65/100.** Repository metadata reports 204K, which is above 200K but below the 500K tier; exact route verification is missing and no retrieval result was found.
- **Multimodal: 15/100.** Exact route metadata says text-only; no multimodal capability is claimed.
- **Coding: 80/100 (provisional route estimate).** Underlying GLM-5.3 DeepSWE and LiveCodeBench rows are solid, but they are not exact-route measurements.
- **Cost efficiency: 100/100.** Free promotional route according to repository metadata; current public catalog availability is unresolved.
- **Overall Score: 64.0/100.** (78 + 82 + 65 + 15 + 80) / 5 = 64.0. Best fit: only for users who can verify the route; otherwise choose the documented GLM-5.3 or GLM-5.3-Flash endpoint and compare the underlying model directly.

---

## Signature

- Provided by: **Space Bunny Alpha (space-bunny/alpha)** — 2026-09-24
- Method: Public web research of OpenCode Zen's current catalog, repository metadata, BenchLM, and the underlying Z.AI model card; scores are normalized 1–100 interpretations. Proxy rows are labeled and excluded from exact-route evidence claims. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
