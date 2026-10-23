# Qwen 3.5 Flash Lite — findings by Qwen 3.8 Flash

- Source: Alibaba Qwen (`qwen3.5-flash` API family; curated id `opencode/qwen-3.5-flash-lite`), cross-checked against OpenRouter (`qwen/qwen3.5-flash-02-23`), Alibaba Cloud Model Studio's `qwen-flash` card, designforonline's Qwen3.5-Flash review, and morphllm's Qwen 3.5 explainer
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 Flash Lite
- **Short description:** Alibaba's **ultra-low-cost "Lite" serving tier of the Qwen 3.5 Flash line** — a small **MoE (curated meta: ~35B total / ~3B active)** positioned for **very-high-volume, latency/price-sensitive multimodal work**, inheriting the Qwen 3.5 family's thinking/non-thinking fusion and function-calling at the cheapest rate on the menu. It is an **API tier** rather than a separately benchmarked flagship, which matters for scoring (see caveat).
- **Provider / access:** Alibaba Cloud Model Studio / OpenRouter (`qwen3.5-flash` family); commercial hosted tier; the open Qwen3.5 family is Apache-2.0 but the "Flash Lite" tier itself is API-served.
- **Release / knowledge:** Qwen 3.5 family launched **2026-02-15**; the `qwen3.5-flash-02-23` snapshot and `qwen-flash-2025-07-28` baseline are the dated anchors.
- **IDs:** `qwen3.5-flash-lite` (curated) ↔ served as `qwen3.5-flash` / `qwen-flash`; family `qwen-3.5` (397B-A17B), `qwen3.5-plus`, `qwen-3.5-35b-a3b`, `qwen-3.5-flash`.
- **Context window:** **1,000,000 total**; **65,536 max output** (curated meta) — note Alibaba's `qwen-flash` card lists **32,768** output and ~998K max input.
- **Modalities:** **curated meta: text + image + video in**, text out. **Conflict flag:** Alibaba's own `qwen-flash` capability card lists **text-only input**, while the Qwen3.5-Flash OpenRouter listing advertises multimodal — modality truth is *not cleanly established* (scored conservatively).
- **Pricing (as of 2026-10-23):** **~$0.10/M input, ~$0.40/M output** (tiered by context usage; Alibaba CNY card ~¥0.15/¥1.5 ≤128K with ¥0.03 cached); function calling + structured outputs + context caching supported.
- **Architecture:** small MoE, hybrid linear + sparse attention (Qwen 3.5 design), dynamic thinking/non-thinking switching.

### Raw benchmarks found

> **Provenance caveat (decisive here):** designforonline's review of Qwen3.5-Flash states plainly: **"No model-specific benchmarks are provided."** There is **no independent GPQA-Diamond / SWE-bench / AA Intelligence-Index row published for the exact `Flash-Lite`/`Flash` tier.** The capability figures below are therefore **spec- and family-inferred** (Qwen 3.5 class), *not* point-verified — the same treatment applied to `qwen-3.5-flash` — and every quality dimension is discounted for that evidence vacuum.

Coding / reasoning / agents:

- **No flash-lite-specific SWE-bench, AIME, GPQA, or τ² absolute located.** Function calling, structured outputs, and web search are *feature-confirmed* (Alibaba card); the Qwen 3.5 family is strong at reasoning/coding but that is a **lineage** claim, not this tier's measurement.

Long context / multimodal:

- **1M context** confirmed (tiered billing); **no MRCR/RULER retrieval score** published; vision/video support **contradicted** across sources (see card).

### Normalized scores (1–100)

- **Tool use: 70/100.** Function calling, structured outputs, web search and context caching are confirmed features, so orchestration is real — but there's no τ²/agent reproduction for this tier and "Lite" implies a capacity ceiling; mid, evidence-thin.
- **Reasoning: 73/100.** Inherits the Qwen 3.5 thinking/non-thinking fusion design (credible for the class), but with zero tier-specific reasoning absolutes published this is **spec-inferred and discounted** — solid mid, not proven.
- **Context window: 86/100.** A genuine **1M** window is the strongest verified fact about this model; docked for the unproven deep-retrieval quality and the 32K-vs-65K output ambiguity across sources.
- **Multimodal: 64/100.** Curated meta claims text+image+video, but Alibaba's own capability card says **text-only** and no vision eval is published — the unresolved conflict caps this at "likely multimodal, modest" rather than crediting full video-native scoring.
- **Coding: 71/100.** The Qwen 3.5 lineage codes well, so this is plausibly a decent budget coder, but **no code benchmark exists for the exact tier** — scored mid on family inference alone.
- **Cost efficiency: 95/100.** The one unambiguous strength and its entire reason to exist: ~$0.10/$0.40 (cached ¥0.03), tiered for huge contexts — elite price/volume economics.
- **Overall Score: 72.8/100.** Half-up mean of the five quality dims (70+73+86+64+71)/5 = 72.8. Best fit: **mass-volume, cost-critical serving** (extraction, classification, cheap chat/assist, long-document skimming) where the verified 1M window and rock-bottom pricing dominate the decision. Treat the capability score as **provisional and evidence-thin**: no model-specific benchmarks exist for the exact tier, the multimodal claim is internally contradicted, and reasoning/coding are inferred from the Qwen 3.5 family rather than measured here — so a re-measurement could move this in either direction.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-23
- Method: public internet research — OpenRouter (`qwen/qwen3.5-flash-02-23`: 1M context, multimodal input, function calling, very low rates), **designforonline** Qwen3.5-Flash review (explicit: "No model-specific benchmarks are provided"), the **Alibaba Cloud Model Studio `qwen-flash`** card (1M context / 32K output, tiered CNY pricing ~¥0.15/¥1.5 with ¥0.03 cached, **text-only** input modality, function-calling/structured-output/web-search/context-caching), and morphllm's Qwen 3.5 family explainer. Curated `meta.json` supplies the ~35B/3B MoE, $0.10/$0.40 and the text+image+video claim. Scores are normalized 1–100 interpretations; because **no tier-specific benchmark row could be located and the multimodal claim is contradicted by Alibaba's own capability card**, capability dims are **spec/family-inferred and discounted** (mirroring the `qwen-3.5-flash` evidence-vacuum treatment), while the 1M window and rock-bottom cost — both directly verified — anchor the score.
- Revisit trigger: any independent (Artificial Analysis / Vals / OpenRouter benchmark widget) model-specific row for `qwen3.5-flash`/`flash-lite` (GPQA, SWE-bench, MRCR), and a first-party resolution of the text-only-vs-multimodal input contradiction.
- Future sources: add a new file next to this one, e.g. `Gemini_4_Argon.md`, using the same headings.
