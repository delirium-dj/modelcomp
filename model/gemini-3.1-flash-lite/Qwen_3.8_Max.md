# Gemini 3.1 Flash-Lite — findings by Qwen 3.8 Max

- Source: Google (`gemini-3.1-flash-lite`)
- Date: 2026-10-27 (UTC)
- Re-researched: 2026-11-03 (UTC) — original draft preserved below; independent sources added.
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Verdict (2026-11-03):** **Premise correction (two-part) — (1) status: now DEPRECATED (superseded by Gemini 3.5 Flash-Lite); (2) modality lift: Multimodal 80→82 — AA independently confirms VIDEO input the draft excluded. Overall 76→77.** AA page **exists** as `gemini-3-1-flash-lite-preview` (the draft’s `gemini-3-1-flash-lite` 404 was a **wrong-slug artifact**, not a missing model), but it now carries the **deprecation banner** (“Google has launched a newer release, Gemini 3.5 Flash-Lite”) and its **Intelligence Index reads N/A** (deprecated — v5.0 basket not run). So the draft’s “no AA Index” conclusion stands (Vals remains the neutral anchor for Reasoning/Tool/Coding → **HOLD**), but two facts change: **AA Technical specs list “Input modality: text, image, speech, and video”** (draft said “no video”) → **Multimodal lifts 80→82**; and the model is **deprecated, not current**. AA confirms **speed 394.4 tok/s (#5/144, 4/4 “notably fast”)**, **$0.25/$1.50 / 90% cache**, **1M context**, **knowledge Jan 1 2025**.
>
> **Curated reference updated:** queue L109 = **77.5** (draft cited 76.9 — stale). With my Multimodal lift (76→77), the gap narrows from **−0.9** to **−0.5**.

## Model card

- **Name:** Gemini 3.1 Flash-Lite
- **Short description:** Google's **Lite-tier bulk-processing model** (March 2026) — "**swallows volume, not difficulty**." A **1M-context**, very fast (**361 tok/s**), cheap (**$0.25/$1.50**, free tier) multimodal fire-hose for text+image+audio+PDF, but its **coding and reasoning sit well below the full Flash line** (Vals Index 22/31; SWE-bench Verified 28th; **Vibe Code Bench 0%**). **[2026-11-03: draft said “Current, not deprecated” — now DEPRECATED** per AA `gemini-3-1-flash-lite-preview` (superseded by Gemini 3.5 Flash-Lite). AA also lists **text+image+speech+video** input (draft wrongly excluded video → **Multimodal 80→82**); speed **394 tok/s (#5/144, 4/4)**; AA Index N/A (deprecated). **Overall 76→77**. Curated 76.9→**77.5** (L109), gap −0.9→**−0.5**.]**
- **Provider / access:** Google Gemini API / AI Studio (`google/gemini-3.1-flash-lite`), Vertex AI. **Free tier on Google AI Studio *and* OpenCode Zen** (unusually, this model *does* carry a Zen ID). Proprietary / closed weights.
- **Release / knowledge:** Released **March 3, 2026** (Preview); **[2026-11-03: now DEPRECATED — AA `gemini-3-1-flash-lite-preview` superseded by Gemini 3.5 Flash-Lite**]. Knowledge cutoff not published in the sources reviewed.
- **IDs:** `google/gemini-3.1-flash-lite`; Vals `google_gemini-3.1-flash-lite-preview`.
- **Context window:** **1,048,576 (1M)** native — a genuine strength for a Lite tier.
- **Modalities:** **Text, image, audio/speech, video, and PDF in → text out** ([2026-11-03: AA `gemini-3-1-flash-lite-preview` independently lists **text, image, speech, and video** — the draft’s “No video” was wrong; video input confirmed → Multimodal 80→82].) (Vals confirms multimodal via SAGE 5th and Mortgage-Tax 7th). Text-only output. "High" thinking level supported (Vals ran at thinking=high, temp 1.0).
- **Pricing (as of 2026-10-27):** **$0.25 / $1.50** per 1M in/out; **free tier** available. Vals measured it **5–20× cheaper per test** than Gemini 3-series / 2.5 models at comparable accuracy (e.g. Finance Agent $0.072/test vs $0.370 for Gemini 3 Flash).
- **Architecture:** Proprietary; parameters undisclosed. A throughput/cost-optimized Lite variant of the Gemini 3.1 Flash line.

### Raw benchmarks found

> Primary independent anchor: **Vals AI** (full benchmark suite, run via the official Google API at thinking=high). **AA's model page 404'd** for `gemini-3-1-flash-lite`, so no Artificial Analysis Intelligence Index is cited here [2026-11-03: **wrong-slug** — the page exists as `gemini-3-1-flash-lite-preview`, but its Index is now **N/A** (deprecated), so still no AA composite; Vals remains the neutral anchor] — Vals provides the neutral composite. Vendor SWE-bench (62.8%) is Google-reported; MMLU-Pro also appears at 77.95% on LayerLens (a different harness) vs Vals' 86.2%.

Independent (Vals AI, March 2026):

- **Vals Index: 22nd / 31** (lower-mid overall composite); **Vals Multimodal Index: 15th / 20**.
- **Multimodal strengths:** **SAGE 5th (49.5% accuracy)**; **Mortgage Tax 7th (67.8%)** — "does well on two of our multimodal benchmarks."
- **MMLU-Pro: 86.2% (14th)** — respectable knowledge/reasoning breadth.
- **Coding (weak):** **Live Code Bench 29th**, **Terminal-Bench 2.0 29th**, **SWE-bench Verified 28th**, **Vibe Code Bench 0%** — "on coding tasks the model still has room for improvement."
- Cost: **5–20× cheaper per test** than Gemini 3-series / 2.5 at comparable accuracy; "fast and quite cost-efficient … a good choice for applications that demand scale, speed, or cost-efficiency."

Vendor (Google):

- **SWE-bench Verified 62.8%** (meta/Google-reported) — higher than Vals' 28th-place run implies (harness/scaffold difference); **361 tok/s** serving.

> Provenance: **Vals AI** (Index 22/31, Multimodal 15/20, SAGE 5th, MMLU-Pro 86.2%, SWE-bench Verified 28th, Vibe Code Bench 0%) is the independent anchor and consistently shows a **fast/cheap but lower-difficulty** profile. The AA page 404'd, so no AA Index is claimed. Vendor SWE-bench 62.8% and 361 tok/s are Google's.
> Meta verification: **accurate** — 1M context ✓, **$0.25/$1.50** ✓, **361 tok/s** ✓, **text+image+audio+PDF in / text out** ✓ (Vals confirms multimodal), **free tier on AI Studio and OpenCode Zen** ✓ (this model *does* carry a Zen ID, unlike most of the roster), "**SWE-bench 62.8%**" ✓ (vendor), "coding and reasoning sit well below the full Flash line" ✓ (Vals: Vibe Code Bench 0%, SWE-bench 28th, Index 22/31). Enriched from Vals: released **March 3, 2026**, **Vals Index 22/31**, **Vals Multimodal 15/20**, **MMLU-Pro 86.2% (14th)**, **SAGE 5th (49.5%)**.

> **Independent (added 2026-11-03, AA):** **Two premise corrections.** (a) The AA page **does exist** — slug `gemini-3-1-flash-lite-preview` (the draft’s bare `gemini-3-1-flash-lite` 404 was a wrong-slug artifact). (b) It now shows the **deprecation banner** (“Google has launched a newer release, Gemini 3.5 Flash-Lite”) and **Intelligence Index N/A** (v5.0 not run on deprecated models) — so no AA composite is available and the draft’s **Vals-anchored Reasoning/Tool/Coding HOLD**. **New from AA:** **Input modality “text, image, speech, and video” → text out** — the draft excluded video, which AA independently confirms → **Multimodal 80→82**. Also **speed 394.4 tok/s (#5/144, 4/4)**, **$0.25/$1.50, 90% cache**, **1M context**, **knowledge Jan 1 2025**, proprietary/closed weights. Net: Overall **76→77** (Multimodal lift; the rest HOLD), and the “current, not deprecated” status is corrected to **deprecated**.

### Normalized scores (1–100)

- **Tool use: 72/100.** Function calling is supported and the 1M context + 361 tok/s suit high-volume tool loops, but the independent agentic evidence is **weak** — **Terminal-Bench 2.0 29th** and **Vibe Code Bench 0%** (Vals). It's a volume tier, "not difficulty," so it's held to the lower-mid band. [2026-11-03: **HOLD at 72** — AA Index now N/A (deprecated); no new agentic data beyond Vals (Terminal-Bench 2.0 29th / Vibe Code 0%). Deprecation noted, band unchanged.]
- **Reasoning: 74/100.** Mixed: **MMLU-Pro 86.2% (14th)** is respectable, but the **Vals Index 22/31** is lower-mid and the meta/Vals both place **reasoning well below the full Flash line**. No AA Index was available (page 404'd). A Lite-tier reasoner — adequate breadth, limited depth. [2026-11-03: **HOLD at 74** — the draft’s “no AA Index (page 404’d)” is refined: the AA page exists (`gemini-3-1-flash-lite-preview`) but its Index is **N/A** (deprecated); Vals Index 22/31 lower-mid stays the neutral anchor → no lift.]
- **Context window: 85/100.** **1M native** (proven tier) and current (not deprecated) — a standout for a Lite model and the main reason the mean holds up despite weak coding/reasoning. [2026-11-03: **HOLD at 85** — AA independently confirms **1M** context ✓; model now deprecated (3.5 Flash-Lite successor) but the window tier is unchanged.]
- **Multimodal: 82/100.** Broad input — **text + image + audio/speech + video + PDF** — AA `gemini-3-1-flash-lite-preview` **independently confirms video input** (the draft wrongly listed “no video”), alongside genuine multimodal capability (**Vals Multimodal Index 15/20; SAGE 5th at 49.5%; Mortgage Tax 7th at 67.8%**). [2026-11-03: **LIFT 80→82 — PREMISE CORRECTION.** The draft capped at 80 “below the video-capable tier (no video)”; AA now lists **text, image, speech, and video** input, directly falsifying that cap → it enters the video-input tier. Held to **+2** (not more) because output is still text-only and Vals rates multimodal *quality* mid (15/20).]
- **Coding: 70/100.** The clear weak point: **Vals ranks it 28th on SWE-bench Verified, 29th on both Live Code Bench and Terminal-Bench 2.0, and 0% on Vibe Code Bench**. Vendor SWE-bench 62.8% is more flattering but harness-dependent; the independent picture is a Lite tier that "swallows volume, not difficulty." [2026-11-03: **HOLD at 70** — no new independent coding row (AA Index N/A); Vals SWE-bench 28th / Live-Code 29th / Vibe Code 0% unchanged.]
- **Cost efficiency: 92/100.** Exceptional — **$0.25/$1.50**, a **free tier (AI Studio + Zen)**, **361 tok/s**, and Vals-measured **5–20× cheaper per test** than its Gemini siblings at comparable accuracy. The defining selling point. Not counted toward Overall. [2026-11-03: **HOLD at 92 (excluded)** — AA confirms $0.25/$1.50 + 90% cache and even faster **394 tok/s**; deprecation (3.5 Flash-Lite is the current pick) mildly dents longevity, value tier holds.]
- **Overall Score: 77/100.** *(2026-11-03: Multimodal 80→82 premise-lift (AA confirms video input) + deprecation status correction; Tool/Reasoning/Context/Coding HOLD; Overall 76→77.)* Mean of Tool 72 + Reasoning 74 + Context 85 + Multimodal 82 + Coding 70 = 383 / 5 = 76.6 → 77. Best fit: a **fast, cheap, 1M-context bulk multimodal processor** — ideal for high-volume text/image/audio/PDF ingestion at scale where cost and throughput dominate and task *difficulty* is modest; step up to Gemini 3.1/3.5 Flash (or a coding-tier model) for hard reasoning or agentic coding. **Divergence note:** curated queue **77.5** (L109) vs my 77 → **−0.5** (tightly aligned; 2026-11-03: draft’s stale 76.9/−0.9 refreshed, and my Multimodal lift moves my score 76→77). The genuine strengths (**1M context 85**, **broad multimodal 80**, free/cheap/fast) are offset by the independently-verified **weak coding (Vals SWE-bench 28th, Vibe Code Bench 0% → 70)** and **Lite-tier reasoning (Vals Index 22/31 → 74)**; the curated 76.9 and my 76 land in the same place — a volume-not-difficulty Lite model.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-27; re-researched **2026-11-03** by Qwen 3.8 Max (PREMISE CORRECTION: AA page exists as `gemini-3-1-flash-lite-preview` (draft’s 404 was wrong-slug); now **DEPRECATED** (superseded by Gemini 3.5 Flash-Lite); AA lists **text+image+speech+video** → **Multimodal 80→82** lift; AA Index N/A so Reasoning/Tool/Coding HOLD on Vals; speed 394 tok/s #5/144; Overall 76→77; curated L109 76.9→77.5, gap −0.9→−0.5).
- Method: public internet research (Vals AI `google_gemini-3.1-flash-lite-preview` full-suite evaluation for the Vals Index 22/31, Multimodal 15/20, SAGE 5th, MMLU-Pro 86.2%, SWE-bench Verified 28th, Vibe Code Bench 0%, and cost-per-test analysis; Google Gemini API pricing docs for $0.25/$1.50 and the free/Zen tier; LayerLens for a second MMLU-Pro reading; Artificial Analysis `gemini-3-1-flash-lite` page 404'd so no AA Index is cited); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max.md`, using the same headings.
