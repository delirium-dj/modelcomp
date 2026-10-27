# Gemini 2.0 Flash — findings by Qwen 3.8 Max

- Source: Google / Google DeepMind (`gemini-2.0-flash`)
- Date: 2026-10-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.0 Flash
- **Short description:** Google's **February-2025 multimodal speed workhorse** — the launch model of Google's **"agentic era"** (native tool use, function calling, and the Project Mariner browser agent) and the first Gemini with **native image + audio output** on top of the broadest input set (**text + image + speech + video**), all on a **1M-token context**. **Deprecated and shut down June 1, 2026**; kept as the historical reference point for the Flash line. Independent signal: **AA Intelligence Index 9 (Estimated, 3/4 units, #105/297 — above the non-reasoning median 7)**; vendor **SWE-bench Verified 51.8%** with code-execution tools. Rock-bottom historical pricing ($0.10/$0.40) now moot post-shutdown.
- **Provider / access:** **Google AI Studio** (historical $0.10/$0.40 per 1M; audio in $0.70) and **Vertex AI** (historical $0.15/$0.60). **No free hosted tier id** (`noFreeId: true`). **Shut down 2026-06-01** — no longer callable; nothing new should target it.
- **Release / knowledge:** Announced **Dec 11, 2024**; released/GA **February 2025** (AA). **Knowledge cutoff June 1, 2024**. **Deprecated** — Google's banner redirects to **Gemini 2.5 Flash**; AA only continues the default 10k-token workload.
- **IDs:** `google/gemini-2.0-flash`; AA `gemini-2-0-flash` (non-reasoning variant; a reasoning variant may exist but the base page is non-reasoning).
- **Context window:** **1,048,576 (1M) total; 8,192 max output** — AA lists 1M (~1500 A4 pages).
- **Modalities:** **Text + image + speech (audio) + video in → text AND image out** (AA-confirmed). ⚠ **Meta lists "text out" only and under-claims the output side** — Gemini 2.0 Flash was Google's **first natively multimodal-output model** (native image generation announced Dec 2024; a Native Audio Dialog variant adds native audio output). I credit the AA-confirmed **text + image output** plus the four-modality input. Native tool use ✓ (meta).
- **Pricing (as of 2026-10-27):** **Shut down** — no live price. Historical: **Google AI Studio $0.10/$0.40** per 1M in/out (audio input $0.70); **Vertex AI $0.15/$0.60**. For reference, Gemini 2.5 Flash-Lite now matches the old $0.10/$0.40 exactly.
- **Architecture:** Proprietary Google multimodal model, **non-reasoning** (speed tier), built for low-latency agentic workloads with native tool use / function calling, native audio + image output, and a 1M-token context. Parameters undisclosed (proprietary).

### Raw benchmarks found

> Independent anchor: **Artificial Analysis** (`gemini-2-0-flash`, non-reasoning, **deprecated** — Estimated Index, 3/4 units). SWE-bench Verified is **vendor** (Google, with code-execution tools). Speed/Cost are **N/A** on AA (deprecated models are no longer benchmarked beyond the default 10k-token workload).

Independent (AA — deprecated, non-convertible estimate):

- **AA Intelligence Index: 9 (Estimated), #105/297** — "**above average**" among comparable **non-reasoning** models (**median 7**), with **3 of 4 units** for Intelligence. Low in absolute terms (a Feb-2025 speed model, pre-reasoning-era). AA: "above average in intelligence when comparing to other non-reasoning models."
- **AA Speed / Cost / Verbosity: N/A** — deprecated; no longer benchmarked for speed or cost-per-task.

Vendor (Google):

- **SWE-bench Verified: 51.8%** — Google's research figure for Gemini 2.0 Flash **equipped with code-execution tools**. Respectable for early-2025 (a speed-tier model), though well below the current frontier (70%+) and **vendor-only** (no independent mini-SWE-agent / Vals / Terminal-Bench row located).
- **Native agentic + multimodal output** — the launch headline: native tool use / function calling, Project Mariner (browser agent), and native image + audio output. No standardized agentic harness number (Terminal-Bench/τ²/AutomationBench) was published for it.

> Provenance: AA Index 9 (3/4-unit **Estimated**, above the non-reasoning median 7, #105/297) is neutral but a weak/low-absolute signal for a deprecated speed model. SWE-bench Verified 51.8% is **vendor** (Google, tool-assisted). Speed/Cost are unavailable (deprecated). **AA Index baskets are version-specific and not convertible**; this estimate is not comparable to current v4.3.2 frontier indices.
> Meta verification: **mostly accurate** — **1M context** ✓ (AA: 1M), **shutdown 2026-06-01** ✓ (confirmed by Google deprecation schedule + multiple 2026 trackers), **historical $0.10/$0.40 (audio $0.70) / Vertex $0.15/$0.60** ✓, **deprecated → 2.5 Flash** ✓, **text/image/audio/video input** ✓ (AA: text, image, speech, video), **native tool use** ✓. **Two flags:** (1) **output modality** — meta says "**text out**" but the model **natively generates images** (AA confirms text + image output; Google announced native image output Dec 2024), so meta **under-claims**; (2) minor — meta's "kept as historical reference" is fair, but note AA still shows a live (deprecated) Index page.

### Normalized scores (1–100)

- **Tool use: 77/100.** Gemini 2.0 Flash was **the** launch model of Google's "agentic era" — **native tool use / function calling, the Project Mariner browser agent, and code execution** — a genuine step up from the pre-agentic Gemini 1.5 Pro (68). But it is **deprecated/shut down**, and **no independent agentic harness row** (Terminal-Bench/τ²/AutomationBench) exists to anchor it against modern agent models. Agentic-pioneer-but-retired band; below current dedicated agentic models.
- **Reasoning: 72/100.** **AA Index 9 (Estimated, 3/4 units) is "above average" among non-reasoning models** (median 7), but the **absolute** value is low — this is a **non-reasoning speed-tier** model with a **June-2024 knowledge cutoff**, not built for hard multi-step reasoning. Above the Gemini 1.5 Pro (70, Index 8) by a hair; well below the reasoning-capable 2.5 Flash line. Speed-tier non-reasoning band.
- **Context window: 85/100.** **1M tokens** (1,048,576) with an 8,192 max output — the 1M-proven tier. Below the Gemini 1.5 Pro's landmark 2M (87) but still very large; the modest 8K output cap and the usual long-context effectiveness taper keep it at 85 rather than higher.
- **Multimodal: 85/100.** **Text + image + speech + video input** (the broadest input tier) **plus native image output** (and native audio output in the Dialog variant) — Gemini 2.0 Flash was Google's **first natively multimodal-output model**, which pushes it a notch above input-only broad multimodality (Gemini 1.5 Pro, 84). One of the most complete multimodal I/O profiles of its generation.
- **Coding: 73/100.** **Vendor SWE-bench Verified 51.8%** (with code-execution tools) — a real, respectable-for-early-2025 coding figure, and native tool use supports agentic coding. But it is **vendor-only** (no independent harness row), **deprecated**, and far below the current frontier (70%+). Vendor-only/deprecated speed-tier band; above the Gemini 1.5 Pro (70).
- **Cost efficiency: 55/100.** Historical **$0.10/$0.40** was rock-bottom for a 1M-context multimodal model, but the model is **shut down (2026-06-01) and uncallable**, so cost efficiency is moot — graded as retired-unavailable. Not counted toward Overall.
- **Overall Score: 78/100.** Mean of Tool 77 + Reasoning 72 + Context 85 + Multimodal 85 + Coding 73 = 392 / 5 = 78.4 → 78. Best fit: **the deprecated multimodal speed landmark** — a 1M-context, four-modality-input / native-image-output model that pioneered Google's native agentic tool use, with an above-median (non-reasoning) AA Index 9 and vendor SWE-bench Verified 51.8%, but **non-reasoning, knowledge-frozen at June 2024, shut down, and low in absolute intelligence**. Ideal historically for cheap fast multimodal/agentic prototyping; **pick Gemini 2.5 Flash (78) or Flash-Lite for a live equivalent**. **Divergence note:** curated queue 75.1 vs my 78 → **+2.9**. I credit the **1M context (85)**, the **broadest-input + native-image-output multimodality (85)** — which the meta under-claims as text-out — and the **agentic-era-pioneer tool use (77)**; the **non-reasoning speed-tier reasoning (72)**, **vendor-only coding (73)**, and shutdown status hold it back. Lands **level with its successor Gemini 2.5 Flash (78)** and two points above the Gemini 1.5 Pro (76) — 2.0 Flash's native agentic + multimodal-output leap offsets 1.5 Pro's larger 2M context.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-27
- Method: public internet research (Artificial Analysis `gemini-2-0-flash` non-reasoning page — **deprecated**, Estimated Intelligence Index **9** (3/4 units, #105/297, above the non-reasoning median 7), Speed/Cost N/A, 1M context, text+image+speech+video in → text+image out, knowledge cutoff Jun 1 2024, released Feb 2025; Google Developers Blog Dec 11 2024 — native image + audio output launch; Google Gemini API deprecation schedule + tokencost.app / morphllm / therouter.ai / metacto trackers — **shutdown June 1 2026**, historical $0.10/$0.40 AI Studio + $0.15/$0.60 Vertex; vendor SWE-bench Verified **51.8%** with code-execution tools, native tool use / Project Mariner. No independent coding/agentic harness row located — flagged and scored conservatively); scores are normalized 1–100 interpretations, not official vendor scores. AA Index baskets are version-specific and not cross-converted.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max.md`, using the same headings.
