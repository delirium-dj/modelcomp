# GLM 5.3 Flash X — findings by Qwen 3.8 Max

- Source: Z.ai / Zhipu (`glm-5.3-flash-x`)
- Date: 2026-10-26 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3 Flash X
- **Short description:** The **speed-optimized serving route** of Z.ai's GLM-5.3-Flash (codenamed "Ox Alpha") — the *same* 320B-total / 18B-active MIT MoE weights, tuned for high-throughput agentic coding (the FlashX tier is rated up to ~200 tok/s vs the base route's ~75 tok/s). A near-frontier open-weight model: **#6/121 on the AA Intelligence Index** with an **elite, independently-verified Vals SWE-bench row (93/92/83/100 — no >4h collapse)**. **Current** (base released Aug 26, 2026).
- **Provider / access:** OpenCode Zen `opencode/glm-5.3-flash-x`; Z.ai / Zhipu official API (`open.zhipuai.cn`); open weights (MIT, native FP8) on Hugging Face. The FlashX/flash-x tier itself is an API/serving route over the same weights (self-hosting the MIT checkpoint reproduces the base capability).
- **Release / knowledge:** GLM-5.3-Flash base released **August 26, 2026**; knowledge cutoff not published.
- **IDs:** `opencode/glm-5.3-flash-x`. **Distinct dataset entry** from the sibling `glm-5.3-flashx` route (both are speed/latency-tuned servings of the *same* GLM-5.3-Flash weights; this one adds a `file` input modality in meta and emphasizes MIT self-hosting).
- **Context window:** 1,048,576 tokens total (AA-confirmed 1M, ~1500 A4 pages); 131,072 max output per meta (the sibling route lists 128K).
- **Modalities:** AA independently confirms **text + image in → text out**; reasoning yes. Meta additionally claims **video + file** input, but this is **not AA-verified** (AA lists text+image only) — treated as vendor-claimed. No audio; text-only output.
- **Pricing (as of 2026-10-26):** Route card **$0.37 / $1.25** per 1M in/out ($0.075 cached) per meta; the underlying Z.ai base API is cheaper at **$0.15 / $0.50** (AA, both "competitively priced" vs open-weight medians $0.43/$1.45) with an **80% cache discount** and **$0.28 per Intelligence-Index task** (#25/46). MIT weights are free to self-host.
- **Architecture:** 320B total / **18B active** MoE, native FP8, **MIT license**, weights on Hugging Face. Same weights as GLM-5.3-Flash / GLM-5.3-FlashX.

### Raw benchmarks found

> Independent anchors: Artificial Analysis (full workload set — base GLM-5.3-Flash page; the dashed flash-x route has no separate AA page, 404) and the Vals AI SWE-bench Verified leaderboard. Per-benchmark numbers below marked (vendor) are from Z.ai's model card as tabulated by LLMCheck / local-ai-zone.

Independent:

- **AA Intelligence Index v4.3.2: 42, #6/121** open-weight (median 19 → "well above average"; **4 of 4** intelligence units). Sixth-highest open-weight score on the current index — a strong neutral corroboration; the AA basket independently runs Terminal-Bench 4.0 + SciCode + AutomationBench-AA + GDPval-AA.
- **Vals AI SWE-bench Verified: 93 / 92 / 83 / 100** across the <15min / 15m–1h / 1–4h / **>4h** bands (bash-tool-only, mini-swe-agent). Elite: the **100 in the >4h band means no long-horizon collapse** — a tier shared only with the very best (DeepSeek V4 Pro, GLM 5.3, GPT-5.6 Sol/Terra, Claude Opus 5).
- AA speed **74.7 tok/s** for the *base* route (#45/78, "slower than average" vs 84; 2/4 units) — the flash-x/FlashX serving tier is the **speed-optimized** variant rated up to **~200 tok/s** (prompt20). AA verbosity **180M** Index tokens (#37/47, "**very verbose**" vs median 140M); AA cost/task **$0.28** (#25/46).

Vendor (Z.ai model card, tabulated by LLMCheck / local-ai-zone):

- Agentic/coding: **Terminal-Bench 2.1 84.3** (model card — very strong); **DeepSWE v1.1 63.4**; **SWE-bench Pro 51.2**; Z.ai Code Bench +50% over GLM-5.2 (in-house).
- Reasoning: **AIME 94.7**; **GPQA 83.5** (vendor — below the 90%+ frontier band).
- Positioning: outperforms GLM-5.2 across benchmarks at ~1/10th the price; one head-to-head notes GLM-5.3-Flash leads Kimi K3 on HLE, ACB, and vision while Kimi leads the shared coding tests.

> Provenance: the AA Index (42, #6/121) and the Vals SWE-bench row (93/92/83/100) are independent and decision-critical; the Terminal-Bench 2.1 / DeepSWE / AIME / GPQA figures are vendor model-card numbers, not independently replicated as standalone rows, though the AA composite (which runs Terminal-Bench 4.0) corroborates the agentic/coding direction.
> Meta verification: mostly accurate — 320B/18B-active ✓ (AA), 1M context ✓ (AA), MIT ✓ (AA), `$0.37/$1.25` route card ✓ (Z.ai). **Two flags:** (1) meta lists **video + file** input, but **AA confirms only text + image** — video/file treated as vendor-claimed, not verified; (2) base Z.ai API is **$0.15/$0.50** (AA), materially cheaper than the $0.37/$1.25 route card. Enriched from AA: Index **42 (#6/121)**, base **74.7 tok/s** (flash-x route ~200 tok/s), **$0.28/task**, **80% cache**, **180M verbosity (very verbose)**, released **Aug 26 2026**.

### Normalized scores (1–100)

- **Tool use: 85/100.** Elite independent agentic endurance — **Vals >4h band = 100** (no long-horizon collapse) plus a vendor **Terminal-Bench 2.1 of 84.3** and an AA Index (#6/121) whose basket runs Terminal-Bench 4.0 / AutomationBench-AA. Held just below the absolute frontier (88) because the standout TB2.1 figure is vendor-model-card-only and this is an 18B-active Flash-tier model, not a full frontier flagship.
- **Reasoning: 82/100.** AA Index **42 (#6/121 open-weight, well above the median 19)** is a near-frontier composite for an open model. Vendor AIME 94.7 is strong, but GPQA 83.5 sits below the 90%+ frontier band and the model is very verbose (180M) — solidly strong-open-weight, not top-of-band.
- **Context window: 85/100.** AA-confirmed **1M** with a 131,072-token max-output allowance and MIT self-hostability, at very low base cost ($0.15/$0.50, 80% cache). In my proven-1M band; held at 85 (not 86+) absent an independent long-context *retrieval* validation (MRCR/RULER at 512K+).
- **Multimodal: 79/100.** AA independently verifies **text + image** with strong vision (one head-to-head has it beating Kimi K3 on vision); meta additionally claims **video + file**, but that breadth is *not* independently confirmed, so I score just above the verified image-only tier (78) rather than the native-video tier (82). Text-only output.
- **Coding: 86/100.** The model's headline strength ("for agentic coding"), and the best-verified dimension: an **elite independent Vals SWE-bench row (93/92/83/100)** with no >4h collapse, echoed by vendor DeepSWE v1.1 63.4 / SWE-Pro 51.2 / TB2.1 84.3. Elite-Vals tier; not the absolute #1 open-weight (DeepSeek V4 Pro 97/95/100/100 and GLM 5.3 base 97/95/90/100 sit higher).
- **Cost efficiency: 90/100.** MIT open weights (free to self-host; 320B/18B-active is tractable), a very cheap base API ($0.15/$0.50, 80% cache, $0.28/task), and a speed-optimized route. Docked from the low-90s by **very verbose** output (180M vs median 140M) and the pricier $0.37/$1.25 route card. Not counted toward Overall.
- **Overall Score: 83/100.** Mean of Tool 85 + Reasoning 82 + Context 85 + Multimodal 79 + Coding 86 = 417 / 5 = 83.4 → 83. Best fit: a **near-frontier open-weight speed route** — the #6/121 AA Index model with elite, independently-verified agentic coding (Vals 93/92/83/100), 1M context, and MIT self-hosting; pick it for high-throughput long-horizon coding/tool use, and reach for a full flagship (Opus 5, GLM 5.3 base, DeepSeek V4 Pro) when raw reasoning (GPQA/HLE) or repo-scale generation is the priority. **Divergence note:** curated queue 81.7 vs my 83 → **+1.3**. I nudge above the queue because the *independent* evidence (AA #6/121 + an elite Vals SWE-bench row with no >4h collapse) is stronger than a mid-pack Flash-tier placement implies; offset by the very-verbose output, the slower base route (the ~200 tok/s figure is route-specific), vendor-only TB2.1, and video/file modality claims that AA does not confirm. Note the sibling `glm-5.3-flashx` route carries a much higher curated 87.9 despite being the *same weights* — my independent read scores the shared capability once, at 83.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-26
- Method: public internet research (Artificial Analysis model page for the base `glm-5-3-flash`; Vals AI SWE-bench Verified leaderboard; Z.ai blog/model card as tabulated by LLMCheck and local-ai-zone; prompt20 serving-tier notes; Hugging Face MIT checkpoint); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max.md`, using the same headings.
