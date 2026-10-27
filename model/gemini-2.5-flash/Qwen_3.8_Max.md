# Gemini 2.5 Flash — findings by Qwen 3.8 Max

- Source: Google (`gemini-2.5-flash`)
- Date: 2026-10-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Flash
- **Short description:** Google's **May-2025 1M-context multimodal workhorse** for high-throughput input processing — the **broadest input modality set** in this roster (**text + image + audio/speech + video + PDF in**), very fast (**226 tok/s**), with a **free AI Studio tier**. But it is now **deprecated**: its current rebased intelligence is **low** (AA reasoning Index 13, *below* median; non-reasoning 10), independent coding is weak (**mini-SWE-agent SWE-bench Verified 28.73%**), and its **shutdown date (Oct 16, 2026) has already passed** as of this writing.
- **Provider / access:** Google Gemini API / AI Studio (`google/gemini-2.5-flash`), Vertex AI, and third-party hosts. **Free tier on Google AI Studio** (standard rate limits). **NOT on OpenCode Zen** — Zen's Gemini catalogue starts at Gemini 3 Flash and carries no 2.5 route. Proprietary / closed weights.
- **Release / knowledge:** Released **May 2025** (GA June 2025); **knowledge cutoff Jan 1, 2025**. **Deprecated** (AA banner → "Gemini 2.5 Flash Preview (Sep '25)"); superseded by Gemini 3.6 / 3.8 Flash, with a **shutdown scheduled for Oct 16, 2026** (already elapsed) — ⚠ see meta correction.
- **IDs:** `google/gemini-2.5-flash`; AA `gemini-2-5-flash` (non-reasoning) + `gemini-2-5-flash-reasoning` (thinking).
- **Context window:** **1,048,576 (1M)** native (~1,500 A4 pages) — proven at GA, a genuine strength.
- **Modalities:** **Text, image, audio/speech, video, and PDF in → text out** (AA independently confirms text + image + speech + video; PDF/document input is Google-API-documented). **Text-only output** (native audio *output* is the separate 2.5 Flash Native-Audio/Live variant, not this model). Reasoning: optional **thinking** mode + non-reasoning.
- **Pricing (as of 2026-10-27):** **$0.30 / $2.50** per 1M in/out, **90% cache discount**; **free tier** on AI Studio. AA rates the input "somewhat expensive" (median $0.24) and the output "expensive" (median $0.71–$0.82) versus comparable Flash/non-reasoning models.
- **Architecture:** Proprietary; parameters undisclosed. A throughput-optimized Flash-tier model with an optional thinking budget.

### Raw benchmarks found

> Independent anchors: **Artificial Analysis** (both non-reasoning and reasoning pages, deprecation-flagged → **Estimated** Indices) and **swebench.com** (mini-SWE-agent SWE-bench Verified). AA stops full benchmarking on deprecation, so both Indices are weak-signal estimates (2/4- and 3/4-unit). Launch-era vendor figures (AIME/GPQA from mid-2025) are not re-verified here because the model has been rebased down and shut down.

Independent (current, rebased):

- **AA Intelligence Index (Reasoning): 13 (Estimated), #91/172 — *below* the comparable median of 14** ("below average in intelligence"); only **2 of 4** units.
- **AA Intelligence Index (Non-reasoning): 10 (Estimated), #28/71 — above its median of 9**; **3 of 4** units.
- **AA speed: 225.6 tok/s (reasoning, #19/149) / 195.6 tok/s (non-reasoning, #9/59)** — "**notably fast**" (4/4 units); a real, current strength.
- **swebench.com mini-SWE-agent SWE-bench Verified: 28.73%** (2025-07-26, harness v1.0.0, $0.13/run) — an independent but **weak** coding signal.

Vendor / launch-era (context only, not re-verified):

- At its mid-2025 launch Gemini 2.5 Flash (thinking) posted competitive AIME/GPQA/SWE-bench-Verified numbers for a Flash-tier model, but those are **launch-peak** figures; the current rebased AA Indices (10 / 13) and mini-SWE 28.73% are the honest Oct-2026 standing, and Google has since shipped Gemini 3 / 3.6 / 3.8 Flash far above it.

> Provenance: AA Indices (reasoning 13 below median, non-reasoning 10 above median) and mini-SWE-agent 28.73% are **independent but deprecation-limited estimates** — weak signals that place the model mid-to-low in Oct 2026. Speed (226 tok/s, 4/4 units) and the 1M context + broadest-modality input are the durable strengths. No Vals SWE row or Epoch ECI entry was located.
> Meta verification: **mostly accurate** — 1M context ✓, **text+image+audio+video+PDF in / text out** ✓ (AA confirms text/image/speech/video; PDF is Google-documented), $0.30/$2.50 + 90% cache ✓ (AA), free AI Studio tier ✓, "NOT on Zen" ✓, "superseded by 3.6/3.8 Flash" ✓. **One correction flagged:** the meta short says "**not deprecated**," but **AA carries an explicit deprecation banner** and the model's **shutdown date (Oct 16, 2026) has already passed** (today is Oct 27, 2026) — the meta's own `tradeoff` field ("Shutdown is scheduled … plan the migration now") already contradicts its `short`. Treated as **deprecated/shut-down**, not current. Enriched from AA: reasoning Index **13 (est, #91/172, below median 14)**, non-reasoning **10 (est, #28/71)**, **225.6 tok/s**, knowledge cutoff **Jan 2025**.

### Normalized scores (1–100)

- **Tool use: 75/100.** Function calling / structured output are supported and the 1M context + fast throughput suit high-volume tool loops, but there is **no strong independent agentic benchmark** and the model is deprecated/shut down; the weak mini-SWE-agent result (28.73%) is the closest agentic-coding proxy. Held to the lower-mid band.
- **Reasoning: 74/100.** Current rebased signals are **weak**: **AA reasoning Index 13 is *below* the median 14** (2/4-unit estimate) and non-reasoning is 10 (above its median 9). It's a Flash speed-tier with an optional thinking budget, not a deep reasoner, and it's deprecated — speed-tier/limited-reasoning band.
- **Context window: 85/100.** **1M native** (proven at GA, ~1,500 A4 pages) — the proven-1M tier. Not pushed higher because the model is deprecated and there's no fresh independent long-context *retrieval* re-validation post-deprecation.
- **Multimodal: 84/100.** The **broadest input modality set in this roster** — **text + image + audio/speech + video + PDF** in (AA confirms four; PDF Google-documented) — as a native omni-input model. Capped below the 90+ tier because **output is text-only** (native audio output is a separate Live variant). Top of the input-breadth scale.
- **Coding: 73/100.** The independent **mini-SWE-agent SWE-bench Verified 28.73%** is genuinely **weak**, there is no Vals/neutral-harness row, and the model is deprecated/shut down. Respectable for a mid-2025 Flash tier at launch, but low by Oct-2026 standards.
- **Cost efficiency: 84/100.** **$0.30/$2.50** with a **90% cache discount**, a **free AI Studio tier**, and very fast 226 tok/s — strong value for high-throughput multimodal ingestion. Docked because AA rates the $2.50 output "expensive" versus comparable Flash models (median $0.71–$0.82) and the shutdown removes it as a going concern. Not counted toward Overall.
- **Overall Score: 78/100.** Mean of Tool 75 + Reasoning 74 + Context 85 + Multimodal 84 + Coding 73 = 391 / 5 = 78.2 → 78. Best fit: a **fast, cheap, 1M-context, broadest-modality input workhorse** — historically ideal for high-volume multimodal ingestion (audio/video/PDF) at Flash prices with a free tier — but now **deprecated and past its Oct 16, 2026 shutdown**, with low rebased intelligence and weak independent coding. **Migrate to Gemini 3.6 / 3.8 Flash** (or another current model) for anything new. **Divergence note:** curated queue 77.7 vs my 78 → **+0.3** (tightly aligned). The mean is propped up by the genuine, durable strengths (**1M context 85**, **broadest-modality multimodal 84**, fast/cheap) which balance the weak current-rebased **Reasoning 74** (AA 13 below median), **Coding 73** (mini-SWE 28.73%), and deprecation. The curated 77.7 already reflects the same fast-but-superseded multimodal workhorse reality I measured — hence the near-exact match, unlike the wide launch-peak gaps on some deprecated flagships.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-27
- Method: public internet research (Artificial Analysis `gemini-2-5-flash` non-reasoning + `gemini-2-5-flash-reasoning` pages, both deprecation-flagged with Estimated Indices; swebench.com mini-SWE-agent SWE-bench Verified leaderboard for 28.73%; Google AI developer forum for the Oct 16 2026 shutdown date; Google Gemini API docs / AI Studio for pricing, free tier, and PDF input); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max.md`, using the same headings.
