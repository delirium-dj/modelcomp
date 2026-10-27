# Qwen 3.5 35B — findings by Qwen 3.8 Max

- Source: Alibaba / Qwen (`qwen-3.5-35b-a3b`)
- Date: 2026-10-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 35B (Qwen3.5-35B-A3B)
- **Short description:** Alibaba's **February-2026 open-weight MoE** (**36B total / 3B active**, Apache 2.0) built for **cheap always-on multimodal agents** — the "3B-active sweet spot" of the Qwen3.5 family. Fast (**152 tok/s**) and inexpensive, with vendor **GPQA 84.2% / SWE-bench Verified 69.2% / LiveCodeBench v6 74.6%**. Now **deprecated** — superseded by **Qwen3.6 35B A3B** (Apr 2026). Handles breadth cheaply, not frontier difficulty.
- **Provider / access:** Open weights on **Hugging Face** (`Qwen/Qwen3.5-35B-A3B`, **Apache 2.0**); hosted on **OpenRouter** and **Alibaba Model Studio**. **Not on OpenCode Zen**; **no free tier** (`noFreeId: true`).
- **Release / knowledge:** Released **February 2026**. **Deprecated** (AA banner → Qwen3.6 35B A3B, launched Apr 2026).
- **IDs:** `qwen/qwen3.5-35b-a3b`; AA `qwen3-5-35b-a3b` (reasoning variant). ⚠ The AA slug is `qwen3-5-...` (no hyphen after "qwen"); `qwen-3-5-35b-a3b` 404s.
- **Context window:** **262,144 native** (extensible to **~1,010,000 via YaRN**); **65,536 max output**. AA lists the 262K native window.
- **Modalities:** **Text + image in → text out** (AA-confirmed). ⚠ **Meta claims "text, image, video in" but AA confirms only text + image** — video input is **not independently confirmed**; I score the verified text+image tier and flag the discrepancy.
- **Pricing (as of 2026-10-27):** **$0.14 / $1.00** per 1M in/out (OpenRouter); **$0.25 / $2.00** (Model Studio); **$0 self-host** (Apache 2.0 weights). AA notes it's "particularly expensive when comparing to other open weight models of similar size" (median $0.12/$0.30) — the $2.00 output is high for a 3B-active model, though absolute cost is low.
- **Architecture:** Open-weight **Mixture-of-Experts, 36B total / 3B active per token**, Apache 2.0. Reasoning + non-reasoning variants.

### Raw benchmarks found

> Independent anchor: **Artificial Analysis** (`qwen3-5-35b-a3b`, reasoning variant, deprecation-flagged but with a **full 4/4-unit** Estimated Index under **v4.3.2**). AA's **April-2026 "Sub-32B Open Weights" article** provides a prior-basket ranking. GPQA/SWE-bench/LiveCodeBench figures are **vendor** (Qwen) launch claims; no independent Vals/Epoch/swebench row was located for this exact SKU.

Independent (current, rebased — AA v4.3.2):

- **AA Intelligence Index (Reasoning): 19 (Estimated), #12/141 — "well above average"** among comparable open-weight Small-class models (**median 8**), with a **full 4 of 4 units** for Intelligence (a relatively strong estimate despite deprecation). AA: "amongst the leading models in intelligence, but particularly expensive when comparing to other open weight models of similar size." Index v4.3.2 = 10 evals (AA-Briefcase v1.1, GDPval-AA v2.1, AutomationBench-AA, Terminal-Bench 4.0, SciCode, HLE, GDP.pdf, CritPt, AA-Omniscience, AA-LCR v1.1).
- **AA Speed: 152.2 output tok/s, #13/63 — "notably fast"** (4/4 units), a direct benefit of the 3B-active MoE.
- **AA prior-basket context (April 2026 article, NOT convertible to v4.3.2):** Qwen3.5 35B A3B (Reasoning) scored **37** on the then-current Intelligence Index and **led the ~3–4B-active-parameter tier** (ahead of Gemma 4 26B A4B at 31, GLM-4.7-Flash at 30, Nemotron Cascade 2 30B A3B at 28). The article also notes the family's **weak AA-Omniscience** (Qwen3.5 27B = −42; larger 397B sibling = −30) — small sub-32B models can't close the knowledge/hallucination gap with reasoning alone.

Vendor (Qwen, launch):

- **GPQA 84.2%**, **SWE-bench Verified 69.2%**, **LiveCodeBench v6 74.6%** — Alibaba's Feb-2026 claims, positioned for cheap multimodal agents. Slightly below the dense Qwen3.5-27B sibling (GPQA 85.5%, SWE-Verified 72.4%) and the 122B-A10B MoE (SWE-Verified 72.0%), consistent with its smaller 3B-active depth.

> Provenance: AA Index 19 (full 4/4-unit estimate, well above the open-weight Small-class median 8) and the 152 tok/s speed are neutral; the April-2026 "37 / tier-leader" figure is from an **earlier, non-convertible basket** (documented for lineage, not mixed with the current 19). GPQA/SWE-bench/LiveCodeBench are vendor-only — no independent harness row was located for this exact SKU, so coding is plausible but uncorroborated. **AA Index baskets are version-specific and not convertible** (v4.3.2 now; the article's 37 was pre-rebase).
> Meta verification: **mostly accurate** — Feb 2026 ✓, 36B total / 3B active MoE ✓ (AA), Apache 2.0 ✓ (AA), 262K native → ~1.01M YaRN + 65,536 out ✓, $0.14/$1.00 (OpenRouter) + $0.25/$2.00 (Model Studio) ✓ (AA shows the $0.25/$2.00 Model Studio rates), GPQA 84.2% / SWE-Verified 69.2% / LiveCodeBench v6 74.6% ✓ (vendor), "not on Zen" ✓. **Two flags:** (1) **modality** — meta says "text, image, **video** in" but **AA confirms only text + image**; video input is unverified. (2) **deprecation** — meta presents it as current, but AA carries a **deprecation banner → Qwen3.6 35B A3B** (launched Apr 2026); this model is now superseded.

### Normalized scores (1–100)

- **Tool use: 76/100.** Built for cheap always-on agents (the "3B-active sweet spot"), and the Qwen3.5 family posts strong agentic numbers (the 27B sibling scored AA Agentic Index 55). But this is the **small-active budget variant**, now **deprecated**, and no independent agentic harness row (Terminal-Bench/τ²/AutomationBench) was located for this exact SKU. Below the 27B (80) and 122B-A10B (83) siblings.
- **Reasoning: 78/100.** **AA Index 19 (full 4/4 units) is "well above average"** for its open-weight Small class (median 8), and it led the ~3–4B-active tier in the prior basket (37). But the **absolute** Index is modest (frontier open-weight models score 42–51), the 3B-active depth limits hard reasoning, the family's **AA-Omniscience is weak (−42 for the 27B)**, and it's deprecated. Modest/small-active band; below the 27B and 122B siblings (both 82).
- **Context window: 78/100.** **262K native → ~1.01M via YaRN**, 65,536 max output — the same 262K/1M-YaRN tier as the Qwen3.5-27B and 122B-A10B siblings. Native 262K is what's scored (YaRN extension is opt-in).
- **Multimodal: 78/100.** **Text + image in → text out** (AA-confirmed) — the verified image-input tier. ⚠ **Meta claims video input, but AA confirms only text + image**, so video is **not credited** (unverified). Below the 122B-A10B sibling (83, native VL text+image+video) which has confirmed video.
- **Coding: 77/100.** Vendor **SWE-bench Verified 69.2%**, **LiveCodeBench v6 74.6%**, **GPQA 84.2%** — plausible for a budget agent but **vendor-only** (no independent Vals/Epoch/swebench corroboration located), slightly below the siblings' verified 72%, and deprecated. Vendor-only/weak-independent band.
- **Cost efficiency: 90/100.** **$0.14/$1.00** (OpenRouter), **$0 self-host** (Apache 2.0 weights), and **152 tok/s** — genuinely cheap always-on economics, the model's whole point. AA does flag it as "particularly expensive" *relative to other open-weight models of its size* (the $2.00 Model Studio output), but absolute cost + open weights + speed make it strong value. Not counted toward Overall.
- **Overall Score: 77/100.** Mean of Tool 76 + Reasoning 78 + Context 78 + Multimodal 78 + Coding 77 = 387 / 5 = 77.4 → 77. Best fit: the **budget 3B-active multimodal agent** of the Qwen3.5 open-weight family — fast (152 tok/s), cheap ($0.14/$1.00 or $0 self-host), Apache 2.0, with a full-4/4-unit AA Index 19 (well above its class median) — but **small-active depth, video input unverified, vendor-only coding numbers, and now deprecated (→ Qwen3.6 35B A3B)**. Use it for high-volume cheap agents where breadth matters more than frontier difficulty; pick the **Qwen3.5-27B (80) / 122B-A10B (81)** siblings or **Qwen3.6** for harder work. **Divergence note:** curated queue 76.2 vs my 77 → **+0.8** (tightly aligned). The full-4/4-unit well-above-median AA Index, tier-leading prior-basket rank (37), speed, and open-weight value nudge it just above the curated score; small-active depth, deprecation, unverified video, and vendor-only coding keep it below its 27B (80) and 122B-A10B (81) siblings.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-27
- Method: public internet research (Artificial Analysis `qwen3-5-35b-a3b` reasoning page — deprecation-flagged, full 4/4-unit Estimated Index 19 #12/141 well above median 8, 152.2 tok/s, 262K, text+image, 36B/3B Apache 2.0, $0.25/$2.00; AA "Sub-32B Open Weights" article, Apr 13 2026 — prior-basket Index 37 leading the ~3–4B-active tier, family AA-Omniscience −42; Qwen3.5-35B-A3B Hugging Face card + OpenRouter for Apache 2.0 weights and $0.14/$1.00 pricing; vendor GPQA 84.2% / SWE-bench Verified 69.2% / LiveCodeBench v6 74.6%); scores are normalized 1–100 interpretations, not official vendor scores. AA Index baskets are version-specific and not cross-converted.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max.md`, using the same headings.
