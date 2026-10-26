# Grok 4 — findings by Qwen 3.8 Max

- Source: xAI (`grok-4`)
- Date: 2026-10-26 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4
- **Short description:** xAI's July-2025 flagship reasoner — the **original X-native model** with live X/web search woven into native tool use, and elite launch-era math (**AIME 2025 91.7%, HMMT 2025 90.0%**). **Now deprecated**: Artificial Analysis carries a deprecation banner and xAI itself points to Grok 4.20; the meta's own verdict is "outclassed by the 4.5–4.7 line on every axis — migrate rather than build."
- **Provider / access:** xAI API `xai/grok-4` (`opencode/grok-4` in this dataset); X / Grok app. **No free tier** (`noFreeId: true`). Proprietary / closed weights.
- **Release / knowledge:** Released **July 9, 2025**; knowledge cutoff not published.
- **IDs:** `xai/grok-4`. Distinct from the larger multi-agent **Grok 4 Heavy** variant (some launch records below are Heavy's, flagged as such) and from Grok 4 Fast.
- **Context window:** **256,000** tokens (AA-confirmed, ~384 A4 pages).
- **Modalities:** AA independently confirms **text + image in → text out**; meta additionally lists **PDF** input. Reasoning yes. No audio/video; text-only output.
- **Pricing (as of 2026-10-26):** **$3.00 / $15.00** per 1M in/out (**$0.75 cached** input), with **higher pricing above 128K tokens** (long-context surcharge). AA calls this "somewhat expensive" vs the proprietary medians ($2.00/$10.00).
- **Architecture:** Closed weights; parameters undisclosed. Distinguished by native tool use with real-time X (Twitter) and web search for research-style queries.

### Raw benchmarks found

> Independent anchors: Artificial Analysis (current, deprecation-flagged) and the Vals AI SWE-bench Verified leaderboard. Launch-era figures are xAI vendor claims (July 2025) as reported by kingy.ai / nexos.ai. Grok 4 is deprecated, so AA now runs only the default 10k-token workload and the Intelligence Index is an **estimate (2 of 4 units)**.

Independent (current, rebased):

- **AA Intelligence Index v4.3.2: 22 (Estimated), #149/221** — **below the comparable median of 28** ("below average in intelligence"). **Caveat:** this is an *estimate* from only **2 of 4** units (AA stopped full benchmarking on deprecation), so it is a weaker signal than a 4/4 Index — but it still places Grok 4 in the bottom half of the current field.
- **Vals AI SWE-bench Verified: 76 / 52 / 17 / 0** across <15min / 15m–1h / 1–4h / **>4h** bands — a steep long-horizon **collapse to 0 in the >4h band**, and low-mid overall (well below current leaders at 90+/95+).
- AA speed **77.8 tok/s** (#113/188, "slower than average" vs 83; 2/4 units); AA cost "particularly expensive" for its price band.

Vendor (xAI launch, July 2025 — standard Grok 4 unless noted):

- **AIME 2025: 91.7%** (without tools); **HMMT 2025: 90.0%** — elite launch-era math.
- **Grok 4 Heavy** (larger multi-agent variant, *not* this checkpoint): **USAMO'25 61.9%** (lead) and **HLE text-only 50.7%** (first to 50%+).
- One launch analysis (nexos) reports an **88% all-time-high** on an R&D/due-diligence benchmark, beating Gemini 2.5 Pro's prior 84% record.

> Provenance: the AA Index (22, estimated 2/4 units) and the Vals row (76/52/17/0) are independent and current; the AIME/HMMT/USAMO/HLE figures are xAI launch claims, and the HLE 50.7% / USAMO 61.9% belong to **Grok 4 Heavy**, not the standard `grok-4` scored here. This is the classic **launch-peak-vs-current-rebased** gap: frontier-competitive in July 2025, bottom-half and deprecated by Oct 2026.
> Meta verification: accurate — 256K ✓ (AA), `$3/$15` + `$0.75 cached` + higher above 128K ✓ (AA/xAI), native tool use + X/web search ✓, `noFreeId` ✓, "deprecated and superseded by 4.5–4.7 line" ✓ (AA banner suggests Grok 4.20). **One flag:** meta lists **PDF** input, but AA confirms only **text + image** — PDF treated as vendor-claimed. Enriched from AA: Index **22 (est, 2/4 units) #149/221 below median 28**, **77.8 tok/s**, released **Jul 9 2025**.

### Normalized scores (1–100)

- **Tool use: 75/100.** Native tool use with **live X/web search** was a genuine launch differentiator for research-style queries. Capped well below current agentic leaders because the model is deprecated and the **Vals >4h band collapses to 0** — it cannot sustain long-horizon multi-step tool work against today's field.
- **Reasoning: 76/100.** Launch-elite math (**AIME 91.7%, HMMT 90.0%**) earns real credit for absolute capability, but the **current AA Index of 22 sits below the median 28** and the model has been comprehensively surpassed by the Grok 4.5–4.7 line and the wider frontier. The Index is only a 2/4-unit estimate, so I don't over-penalize — landing at above-mid rather than low.
- **Context window: 78/100.** AA-confirmed **256K**, with a long-context price surcharge above 128K. Solidly in my 256K band; short of the 400K/1M tiers.
- **Multimodal: 79/100.** AA verifies **text + image**; meta adds **PDF** (vendor-claimed, not AA-confirmed). Strong research/document orientation via search + PDF, but no video/audio and text-only output — image(+file) tier.
- **Coding: 72/100.** Not a coding specialist, and the independent **Vals SWE-bench (76/52/17/0)** is weak with a full **>4h collapse**. Deprecated and far behind the current Vals leaders (90+/95+); scored below the no-coding-bench floor because the one independent coding signal we have is poor.
- **Cost efficiency: 60/100.** **$3/$15** ($0.75 cached, higher above 128K) is premium pricing for a deprecated model that xAI's own 4.5–4.7 line and Grok 4.20 outclass at similar cost — "migrate rather than build." Not counted toward Overall.
- **Overall Score: 76/100.** Mean of Tool 75 + Reasoning 76 + Context 78 + Multimodal 79 + Coding 72 = 380 / 5 = 76.0 → 76. Best fit: a **historically significant but now-deprecated reasoner** — the original X-native search+tool model with elite 2025 math; do not adopt it new (xAI points to Grok 4.20 / the 4.5–4.7 line, and current open-weight leaders beat its coding at a fraction of the cost). **Divergence note:** curated queue 80.6 vs my 76 → **−4.6**. A wide negative gap driven by the launch-peak-vs-current-rebased pattern: the curated 80.6 still reflects Grok 4's July-2025 frontier standing (AIME 91.7%, HLE-leading Heavy variant), while my read normalizes against Oct-2026 — a **below-median AA Index (22, #149/221)**, a **Vals >4h coding collapse to 0**, and formal deprecation. The gap is not as extreme as qwen-3.7-max (−8.5) because Grok 4's launch math was genuinely elite, it retains 256K + text/image/PDF multimodality, and its AA Index is only a 2/4-unit estimate rather than a full rebased measurement.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-26
- Method: public internet research (Artificial Analysis `grok-4` page with deprecation banner and estimated Index; Vals AI SWE-bench Verified leaderboard; xAI "Grok 4" launch announcement; kingy.ai and nexos.ai launch-benchmark analyses); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max.md`, using the same headings.
