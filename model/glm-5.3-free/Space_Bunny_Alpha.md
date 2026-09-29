# GLM 5.3 Free — findings by Space Bunny Alpha

- Source: OpenCode Zen (`glm-5.3-free`; free route)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3 Free
- **Short description:** A free OpenCode Zen route historically associated with the GLM-5.3 family, positioned for agentic software development and tool-heavy coding. On re-check the exact Zen ID is still absent from both the Zen model table and the live `/v1/models` catalog, so this report does not silently substitute `glm-5.3` or `glm-5.3-flash`.
- **Provider / access:** Repository metadata records `opencode/glm-5.3-free`. The OpenCode Zen model table and the `https://opencode.ai/zen/v1/models` response were both re-checked on 2026-09-29 and **do not contain `glm-5.3-free`**. The documented Zen IDs in the GLM family are `glm-5.3`, `glm-5.3-flash`, `glm-5.2`, `glm-5.1`, and `glm`; the free-tier list contains no GLM entry. Third-party router indexes that still track a GLM free route now flag it as **sunset**, i.e. the promotion appears to have ended.
- **Release / knowledge:** The underlying GLM-5.3 family is listed by BenchLM as released August 14, 2026; Artificial Analysis lists GLM-5.3-Flash as released 2026-08-26. No knowledge cutoff was found for the free route.
- **IDs:** Repository ID `opencode/glm-5.3-free`; exact current Zen API ID **not found** in the catalog.
- **Context window:** Repository metadata says 204K for this route; this exact-route limit was not independently verified and should be treated as stale. The underlying GLM-5.3-Flash is reported at 1M by Artificial Analysis, but that value is not transferred to the unresolved free route.
- **Modalities:** Repository metadata says text input/output. Exact Zen route modality support was not independently verified; no image/video/audio support is claimed.
- **Pricing (as of 2026-09-29):** The documented Zen rates for the real GLM endpoints are **GLM 5.3 at $1.40 in / $4.40 out** per 1M tokens (cached read $0.26) and **GLM 5.3 Flash at $0.15 in / $0.50 out** (cached read $0.03), per the Zen pricing table. There is no documented $0 `glm-5.3-free` row, so the free pricing claim is unverifiable and is treated as retired.
- **Architecture:** OpenCode route; underlying model not resolved. Z.AI GLM-5.3-Flash weights are open-weight (Artificial Analysis: 320B total / 18B active, MIT), but the exact free-route identity and deployment configuration could not be verified.

### Raw benchmarks found

Agent / tool use:

- No exact verified public benchmark found for the `glm-5.3-free` route.
- Underlying GLM-5.3 proxy rows, **not used as exact-route scores**: Terminal-Bench 2.1 **88.2%**, Toolathlon Verified **73.0%**, and FrontierSWE **78.1%** (BenchLM/Z.AI GLM-5.3 model-card rows).
- For the mapped GLM-5.3-Flash, Artificial Analysis measures an **Intelligence Index of 42** (rank **#4/116** in class) and **48.0 tok/s** output on Z.AI's API — these describe the Flash model, not the free route.

Reasoning / knowledge:

- No exact verified public benchmark found for `glm-5.3-free`.
- Underlying GLM-5.3 proxy rows, **not used as exact-route scores**: GPQA Diamond **88.1%** and MMLU-Pro **86.8%** (Vals AI rows on BenchLM).

Coding:

- No exact verified public benchmark found for `glm-5.3-free`.
- Underlying GLM-5.3 proxy rows, **not used as exact-route scores**: DeepSWE **66.9%** and LiveCodeBench Vals **80.5%** (BenchLM/Z.AI GLM-5.3 model-card rows).
- GLM-5.3-Flash DeepSWE: **63.4%** (BenchLM/Z.AI GLM-5.3-Flash model-card row; Flash model, not the free route).

Long context:

- No exact verified retrieval-at-length result for `glm-5.3-free`.
- The underlying GLM-5.3 family is reported with 1M context by BenchLM, but the free route's 204K metadata is kept separate and is itself unverified.

Sources consulted: [OpenCode Zen documentation](https://opencode.ai/docs/zen/), [OpenCode Zen model catalog](https://opencode.ai/zen/v1/models), [BenchLM GLM-5.3](https://benchlm.ai/models/glm-5-3), [Artificial Analysis GLM-5.3-Flash](https://artificialanalysis.ai/models/glm-5-3-flash), and the [Z.AI GLM-5.3 model card](https://huggingface.co/zai-org/GLM-5.3), accessed 2026-09-29. Underlying-model numbers are explicitly labeled proxies and are not presented as route-specific evidence.

### Normalized scores (1–100)

- **Tool use: 78/100 (provisional route estimate).** The underlying GLM-5.3 model has strong Terminal-Bench/Toolathlon evidence, but the exact free route is absent from the current catalog and third-party indexes flag it as sunset; the score is capped and must be revalidated if the route ever returns.
- **Reasoning: 82/100 (provisional route estimate).** Underlying GLM-5.3 GPQA/MMLU rows are strong, but no exact free-route result was found.
- **Context window: 65/100.** Repository metadata reports 204K, which is above 200K but below the 500K tier; exact route verification is missing and no retrieval result was found.
- **Multimodal: 15/100.** Exact route metadata says text-only; no multimodal capability is claimed.
- **Coding: 80/100 (provisional route estimate).** Underlying GLM-5.3 DeepSWE and LiveCodeBench rows are solid, but they are not exact-route measurements.
- **Cost efficiency: 55/100.** Downgraded from 100. The $0 claim cannot be verified: `glm-5.3-free` is not in the Zen model table or the live `/v1/models` response, no $0 pricing row exists in Zen's published pricing, and third-party routers flag the route as sunset. The score reflects the real, documented cost of the nearest actual endpoints — **GLM 5.3 at $1.40/$4.40** and **GLM 5.3 Flash at $0.15/$0.50** per 1M — rather than an unverifiable free entitlement. It is not 0 because the underlying family is genuinely inexpensive, and it is not 100 because the free access itself cannot be shown to exist.
- **Overall Score: 64.0/100.** (78 + 82 + 65 + 15 + 80) / 5 = 320 / 5 = 64.0. Cost efficiency is excluded from this mean, so the unverifiable free claim does not inflate the quality score. Best fit: users who can independently confirm the route still exists; otherwise choose the documented `glm-5.3` or `glm-5.3-flash` endpoint and compare the underlying model directly.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-09-29
- Method: Public web research of OpenCode Zen's current model table, the live Zen `/v1/models` catalog, Zen's published pricing, BenchLM, Artificial Analysis, and the underlying Z.AI model card; scores are normalized 1–100 interpretations. Proxy rows are labeled and excluded from exact-route evidence claims, and third-party "sunset" labels are recorded as third-party signals rather than vendor statements. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `GLM_5_3_Free_Revival.md`, using the same headings.
