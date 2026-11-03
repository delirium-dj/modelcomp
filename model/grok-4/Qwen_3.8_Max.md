# Grok 4 — findings by Qwen 3.8 Max

- Source: xAI (`grok-4`)
- Date: 2026-10-26 (UTC)
- Re-researched: 2026-11-02 (UTC) — original draft preserved below; independent sources added.
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

 **Verdict (2026-11-02):** **Partial premise correction — Coding lift 72→73; Overall stays 76 (381/5=76.2).** AA page **DEPRECATED** (“SpaceXAI has launched a newer release, Grok 4.20 0309”) with **Intelligence composite N/A** (deprecated→N/A pattern; v4.3.2 Index 22 estimated 2/4 units superseded). Speed 77.0 (#113/195), 256K, text+image, $3/$15 all confirmed. **BenchLM 51.27 / #97/1004, 18/724:** the draft’s Coding 72 cap was “the ONE independent coding signal (Vals 76/52/17/0) is POOR — scored below the no-coding-bench floor.” NEW independent anchor: **AA LiveCodeBench 81.9%** (AA-sourced) is a STRONG second coding benchmark — the “one signal only / poor” framing is falsified. However: the Vals >4h=0 (catastrophic agentic-coding collapse) remains valid and bounds the lift to **one step (72→73)**. τ²-bench 74.9% (AA-sourced) is mid-tier agentic; AA AIME 2025 **92.7% independently confirms** the draft’s vendor “91.7%” — elite math validated. **AA GPQA 87.7%, MMLU-Pro 86.6%, LCR 68.0%, MMMU-Pro 68.8%, Omniscience halluc 64.5%** — consistent with a below-median composite (reasoning HOLD 76). Tool 75 HOLD (Vals >4h=0 still caps). Context 78 / Multimodal 79 HOLD.
>
> **Curated reference verified:** queue L95 = **80.6** — matches the draft’s citation exactly. Gap stays **−4.6** (76 vs 80.6).

## Model card

- **Name:** Grok 4
- **Short description:** xAI’s July-2025 flagship reasoner — the **original X-native model** with live X/web search woven into native tool use, and elite launch-era math (**AIME 2025 91.7%, HMMT 2025 90.0%**). **Now deprecated**: Artificial Analysis carries a deprecation banner and xAI itself points to Grok 4.20; the meta’s own verdict is “outclassed by the 4.5–4.7 line on every axis — migrate rather than build.” [2026-11-02 re-research: **partial premise correction; Coding 72→73, Overall stays 76.** AA composite N/A (deprecated). BenchLM: AA LCB 81.9% (independent) falsifies “only signal is poor” Coding cap → +1 step; AA AIME 92.7% independently confirms math. τ² 74.9% mid. Vals >4h=0 bounds lift. Curated 80.6 verified; gap −4.6.]
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

> **Independent (added 2026-11-02, Artificial Analysis + BenchLM):** **Partial premise correction for Coding; other dimensions confirmed.** AA `grok-4` **DEPRECATED** (Grok 4.20 0309 successor), Intelligence composite **N/A** (v4.3.2 22 est. superseded), Speed 77.0 (#113/195), Cost $3/$15, Verbosity N/A; 256K, text+image. BenchLM **51.27 / #97/1004, 18/724**: **τ²-bench 74.9% (AA-sourced, independent)** — mid-tier agentic; doesn’t override the Vals >4h=0 tool ceiling. **AA LiveCodeBench 81.9% (independent)** — strong algorithmic coding signal the draft lacked; the “only independent coding signal is poor” cap is falsified, but Vals >4h=0 bounds the lift to one step. **AA AIME 2025 92.7%** (AA-verified!) independently confirms the draft’s vendor “91.7%”. **AA GPQA 87.7%, MMLU-Pro 86.6%, LCR 68.0%, MMMU-Pro 68.8%** — above-median for individual evals but composite remains below-median (HLE 26.7, CritPt 2.0 drag it). Omniscience halluc 64.5%. AA IFBench 53.7%. Global-MMLU-Lite 89.5% (strong multilingual). Gert Labs 42.34%. React Native Evals 72.6% (niche). No Vals SWE-bench update (draft’s Vals 76/52/17/0 remains the agentic-coding picture). Coding 72→73 (LCB 81.9 removes below-floor penalty by one step); all other dimensions HOLD.

### Normalized scores (1–100)

- **Tool use: 75/100.** Native tool use with **live X/web search** was a genuine launch differentiator for research-style queries. Capped well below current agentic leaders because the model is deprecated and the **Vals >4h band collapses to 0** — it cannot sustain long-horizon multi-step tool work against today’s field. [2026-11-02: **HOLD at 75** — BenchLM τ²-bench 74.9% (AA-sourced) is mid-tier agentic (not exceptional); the Vals >4h=0 collapse remains the defining ceiling. Deprecated + long-horizon failure = 75 unchanged.]
- **Reasoning: 76/100.** Launch-elite math (**AIME 91.7%, HMMT 90.0%**) earns real credit for absolute capability, but the **current AA Index of 22 sits below the median 28** and the model has been comprehensively surpassed by the Grok 4.5–4.7 line and the wider frontier. The Index is only a 2/4-unit estimate, so I don’t over-penalize — landing at above-mid rather than low. [2026-11-02: **HOLD at 76** — AA composite now **N/A** (deprecated); v4.3.2 Index=22 superseded by absence. **AA AIME 92.7% independently confirms** elite math; GPQA 87.7/MMLU-Pro 86.6 are strong. But HLE 26.7, CritPt 2.0 confirm breadth weakness. N/A composite + launch-peak pattern cap at 76.]
- **Context window: 78/100.** AA-confirmed **256K**, with a long-context price surcharge above 128K. Solidly in my 256K band; short of the 400K/1M tiers. [2026-11-02: **HOLD at 78** — AA confirms 256K. No change.]
- **Multimodal: 79/100.** AA verifies **text + image**; meta adds **PDF** (vendor-claimed, not AA-confirmed). Strong research/document orientation via search + PDF, but no video/audio and text-only output — image(+file) tier. [2026-11-02: **HOLD at 79** — AA “supports: text and image” only; **AA MMMU-Pro 68.8%** confirms mid-tier image reasoning. PDF remains vendor-claimed. No new modality.]
- **Coding: 73/100.** **AA LiveCodeBench 81.9% (independent)** provides a strong algorithmic-coding signal, but the independent **Vals SWE-bench (76/52/17/0)** with a full **>4h collapse to 0** remains the dominant agentic-coding picture — deprecated, and the mixed profile (good algorithmic, terrible long-horizon repo) nets a below-floor score. [2026-11-02: **lifted 72 → 73** — the draft’s cap (“the ONE independent coding signal we have is poor → scored below the no-coding-bench floor”) is partially falsified: **AA LCB 81.9% (independent)** is a STRONG second signal; the “only signal is poor” framing no longer holds, removing one step of the below-floor discount. Vals >4h=0 + deprecation prevent further lift.]
- **Cost efficiency: 60/100.** **$3/$15** ($0.75 cached, higher above 128K) is premium pricing for a deprecated model that xAI’s own 4.5–4.7 line and Grok 4.20 outclass at similar cost — “migrate rather than build.” Not counted toward Overall. [2026-11-02: **HOLD at 60 (excluded)** — AA confirms $3/$15; cost/task N/A. Deprecated premium pricing unchanged.]
- **Overall Score: 76/100.** Mean of the five quality dimensions = (75 Tool + 76 Reasoning + 78 Context + 79 Multimodal + 73 Coding) / 5 = **381 / 5 = 76.2 → 76**. Best fit: a **historically significant but now-deprecated reasoner** — the original X-native search+tool model with elite 2025 math; do not adopt it new (xAI points to Grok 4.20 / the 4.5–4.7 line, and current open-weight leaders beat its coding at a fraction of the cost). *(2026-11-02: Coding lifted 72→73 via AA LCB 81.9%; Overall stays 76.)* **Divergence note (2026-11-02):** curated queue **80.6** (verified, matches draft) vs my **76** → **−4.6**. The launch-peak-vs-current-rebased gap remains wide: the curated score reflects July-2025 frontier standing (AIME 91.7%, HLE-leading Heavy), while my read uses Oct-2026 reality — N/A composite (deprecated), Vals >4h=0 coding collapse, and below-median breadth. The one-step Coding lift narrows the evidence gap but doesn’t move the Overall.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-26
- Re-researched: **Qwen 3.8 Max** — 2026-11-02. AA: DEPRECATED (Grok 4.20 0309), composite N/A; speed 77.0 #113/195; 256K/text+image/$3-/$15. BenchLM (51.27, #97/1004, 18/724): τ² 74.9% AA-sourced, **AA LCB 81.9%** (independent, falsifies “only signal poor” cap → Coding +1), AA AIME 92.7% (confirms math), GPQA 87.7, MMLU-Pro 86.6, LCR 68.0, MMMU-Pro 68.8, halluc 64.5%. Curated 80.6 verified. Overall 76 unchanged.
- Method: public internet research (Artificial Analysis `grok-4` page with deprecation banner and estimated Index; Vals AI SWE-bench Verified leaderboard; xAI “Grok 4” launch announcement; kingy.ai and nexos.ai launch-benchmark analyses); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max.md`, using the same headings.
