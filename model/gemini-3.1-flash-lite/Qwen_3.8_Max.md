# Gemini 3.1 Flash-Lite — findings by Qwen 3.8 Max

- Source: Google (`gemini-3.1-flash-lite`)
- Date: 2026-10-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Flash-Lite
- **Short description:** Google's **Lite-tier bulk-processing model** (March 2026) — "**swallows volume, not difficulty**." A **1M-context**, very fast (**361 tok/s**), cheap (**$0.25/$1.50**, free tier) multimodal fire-hose for text+image+audio+PDF, but its **coding and reasoning sit well below the full Flash line** (Vals Index 22/31; SWE-bench Verified 28th; **Vibe Code Bench 0%**). Current, not deprecated.
- **Provider / access:** Google Gemini API / AI Studio (`google/gemini-3.1-flash-lite`), Vertex AI. **Free tier on Google AI Studio *and* OpenCode Zen** (unusually, this model *does* carry a Zen ID). Proprietary / closed weights.
- **Release / knowledge:** Released **March 3, 2026** (Preview); current, **not deprecated**. Knowledge cutoff not published in the sources reviewed.
- **IDs:** `google/gemini-3.1-flash-lite`; Vals `google_gemini-3.1-flash-lite-preview`.
- **Context window:** **1,048,576 (1M)** native — a genuine strength for a Lite tier.
- **Modalities:** **Text, image, audio, and PDF in → text out** (Vals confirms multimodal via SAGE 5th and Mortgage-Tax 7th). No video; text-only output. "High" thinking level supported (Vals ran at thinking=high, temp 1.0).
- **Pricing (as of 2026-10-27):** **$0.25 / $1.50** per 1M in/out; **free tier** available. Vals measured it **5–20× cheaper per test** than Gemini 3-series / 2.5 models at comparable accuracy (e.g. Finance Agent $0.072/test vs $0.370 for Gemini 3 Flash).
- **Architecture:** Proprietary; parameters undisclosed. A throughput/cost-optimized Lite variant of the Gemini 3.1 Flash line.

### Raw benchmarks found

> Primary independent anchor: **Vals AI** (full benchmark suite, run via the official Google API at thinking=high). **AA's model page 404'd** for `gemini-3-1-flash-lite`, so no Artificial Analysis Intelligence Index is cited here — Vals provides the neutral composite. Vendor SWE-bench (62.8%) is Google-reported; MMLU-Pro also appears at 77.95% on LayerLens (a different harness) vs Vals' 86.2%.

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

### Normalized scores (1–100)

- **Tool use: 72/100.** Function calling is supported and the 1M context + 361 tok/s suit high-volume tool loops, but the independent agentic evidence is **weak** — **Terminal-Bench 2.0 29th** and **Vibe Code Bench 0%** (Vals). It's a volume tier, "not difficulty," so it's held to the lower-mid band.
- **Reasoning: 74/100.** Mixed: **MMLU-Pro 86.2% (14th)** is respectable, but the **Vals Index 22/31** is lower-mid and the meta/Vals both place **reasoning well below the full Flash line**. No AA Index was available (page 404'd). A Lite-tier reasoner — adequate breadth, limited depth.
- **Context window: 85/100.** **1M native** (proven tier) and current (not deprecated) — a standout for a Lite model and the main reason the mean holds up despite weak coding/reasoning.
- **Multimodal: 80/100.** Broad input — **text + image + audio + PDF** — with genuine multimodal capability (**Vals Multimodal Index 15/20; SAGE 5th at 49.5%; Mortgage Tax 7th at 67.8%**). Held below the video-capable tier (no video) and below higher-quality omni models; text-only output.
- **Coding: 70/100.** The clear weak point: **Vals ranks it 28th on SWE-bench Verified, 29th on both Live Code Bench and Terminal-Bench 2.0, and 0% on Vibe Code Bench**. Vendor SWE-bench 62.8% is more flattering but harness-dependent; the independent picture is a Lite tier that "swallows volume, not difficulty."
- **Cost efficiency: 92/100.** Exceptional — **$0.25/$1.50**, a **free tier (AI Studio + Zen)**, **361 tok/s**, and Vals-measured **5–20× cheaper per test** than its Gemini siblings at comparable accuracy. The defining selling point. Not counted toward Overall.
- **Overall Score: 76/100.** Mean of Tool 72 + Reasoning 74 + Context 85 + Multimodal 80 + Coding 70 = 381 / 5 = 76.2 → 76. Best fit: a **fast, cheap, 1M-context bulk multimodal processor** — ideal for high-volume text/image/audio/PDF ingestion at scale where cost and throughput dominate and task *difficulty* is modest; step up to Gemini 3.1/3.5 Flash (or a coding-tier model) for hard reasoning or agentic coding. **Divergence note:** curated queue 76.9 vs my 76 → **−0.9** (tightly aligned, marginally below). The genuine strengths (**1M context 85**, **broad multimodal 80**, free/cheap/fast) are offset by the independently-verified **weak coding (Vals SWE-bench 28th, Vibe Code Bench 0% → 70)** and **Lite-tier reasoning (Vals Index 22/31 → 74)**; the curated 76.9 and my 76 land in the same place — a volume-not-difficulty Lite model.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-27
- Method: public internet research (Vals AI `google_gemini-3.1-flash-lite-preview` full-suite evaluation for the Vals Index 22/31, Multimodal 15/20, SAGE 5th, MMLU-Pro 86.2%, SWE-bench Verified 28th, Vibe Code Bench 0%, and cost-per-test analysis; Google Gemini API pricing docs for $0.25/$1.50 and the free/Zen tier; LayerLens for a second MMLU-Pro reading; Artificial Analysis `gemini-3-1-flash-lite` page 404'd so no AA Index is cited); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max.md`, using the same headings.
