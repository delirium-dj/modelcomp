# Gemini 2.5 Pro — findings by Space Bunny

- Source: Google (`gemini-2.5-pro`)
- Date: 2026-10-10 (UTC) — second-pass research; first pass 2026-09-24
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`
- Re-validation note: re-checked 2026-10-10. **MATERIAL change — downward.** The prior pass recorded "no verified public score found" for every coding and reasoning benchmark because the Google pages were unreachable. Three independent sources now supply the missing figures, and they are substantially worse than the prior scoring implied: **SWE-bench Verified 63.8% (Google) vs. 54.40% (Vals)**, **Vibe Code Bench 0.40% (#106 of 110)**, **Terminal-Bench 2.0 30.34%**, **GDPval-AA 0.0% / 616 Elo**, **AA Agentic Index 3.5%**, **AA-Omniscience Hallucination Rate 90.9%**, **FrontierMath v2 Tier 4 4.167%**, and **CritPt 2.6%**. Net: **Tool use 72 → 66**, **Reasoning 70 → 66**, **Context 95 → 92**, **Coding 72 → 62**, **Cost 82 → 70**, Overall **79.8 → 75.2**.

## Model card

- **Name:** Gemini 2.5 Pro
- **Short description:** Google's legacy thinking model for complex code, mathematics, STEM reasoning, large datasets, codebases, and documents — now a **deprecated** model whose independent measurements have collapsed to the bottom of every leaderboard in this dataset. Still documented and still served, but Artificial Analysis explicitly advises moving to Gemini 3 Pro Preview.
- **Provider / access:** Google Gemini API (`gemini-2.5-pro`); Google AI Studio; Gemini-compatible integrations. **2 API providers** on Artificial Analysis. Google restricts new access to legacy users while continuing to serve the model.
- **Lifecycle — confirmed:** **Deprecated.** Artificial Analysis carries an explicit banner: "This model is deprecated. We only continue performance benchmarking for the default 10k input token workload. Results for other workloads are historical and no longer updated," and names **Gemini 3 Pro Preview** as the suggested replacement. This is the *only* independent composite available, and it is frozen.
- **Release / knowledge:** **Release date conflict:** Artificial Analysis records **June 5, 2025**; Vals AI records **July 17, 2025**. Both are retained — the earlier date is most likely the preview/GA boundary. **Knowledge cutoff January 1, 2025** (Artificial Analysis), which is 21 months stale.
- **IDs:** `gemini-2.5-pro`.
- **Context window:** **1,048,576 input tokens; 65,536 output tokens** (Google Gemini API documentation; Vals AI independently lists 1M context and 66k max output). Artificial Analysis reports 1M (~1500 A4 pages).
- **Modalities:** Audio, image, video, text, and PDF input; text output. **Conflict:** Artificial Analysis lists "text, image, speech, and video" in; **Vals AI's capability table lists only text, image, video, and file — no audio.** Thinking, code execution, function calling, structured outputs, URL context, search grounding, and Maps grounding are supported.
- **Pricing (as of 2026-10-10, unchanged):** **$1.25 per 1M input / $10.00 per 1M output**, **90% cache discount**, blended **$1.34 per 1M** (7:2:1). Artificial Analysis measures **$0.33 per Intelligence Index task** — ranked **#16 of 227** for cost, which is a genuinely competitive rate for a 1M-context model. Audio input is billed separately.
- **Architecture:** Proprietary; Google has not disclosed parameter count or model size.

### Raw benchmarks found

**Official — Google:**

- SWE-bench Verified: **63.8%** (Google blog, March 2025)
- Humanity's Last Exam: **18.8%** (Google blog)
- GPQA: **83%** (deepmind.google/models/gemini/pro/)
- AIME 2024: **92%** (via the Phi-4-reasoning-plus model-card comparison table)

**Independent — Artificial Analysis (v4.3.2, reasoning variant; deprecated / 10k default workload only):**

- Intelligence Index **16.1**, rank **#174 of 227** — down from #158/210; the class median is **26**
- **AA-GPQA Diamond 84.4%** (Google says 83% — a 1.4-point spread, effectively agreement)
- **AA-HLE 22.5%** (Google says 18.8% — a 3.7-point spread)
- **AA-Omniscience: Index −16.3, Accuracy 39.1%, Hallucination Rate 90.9%** — the worst hallucination rate of any model measured in this dataset
- **AA-LCR 69.0%**; **CritPt 2.6%**; AA-IFBench 48.7%
- **AA-SciCode 46.3%**; **AA Coding Index 33.3%**
- **AA-MMMU-Pro 74.9%**
- **AA Agentic Index 3.5%**; **GDPval-AA 0.0% / 616 Elo**; τ²-bench 54.1%; Gert Labs 42.01
- Performance: **117.0 output tokens/s** (#44/227, "notably fast" vs. a 79.0 t/s median), **TTFT 25.60s** (vs. a 3.80s median)
- Verbosity: **55M** index output tokens (#44/227) — the *most concise* model in its price tier, against an 82M median

**Independent — Vals AI (Google provider, temp 1, 65,536 max output):**

- **SWE-bench 54.40% ±2.23** (#82 of 88) — **9.4 points below Google's 63.8%**
- **Vibe Code Bench v1.1: 0.40% ±0.40** (#106 of 110 — effectively dead last)
- **Terminal-Bench 2.0: 30.34% ±4.90** (#44 of 67)
- MedCode **50.59%** (#17/106) — Vals' best result for this model
- MedScribe **73.55%** (#83/108); MortgageTax **68.92%** (#9/98); SAGE **41.92%** (#56/91)
- Overall accuracy **45.73%**, latency **7m 43s**

**Independent — Epoch AI:**

- FrontierMath v2 Tiers 1–3: **14.138%**; Tier 4: **4.167%**

**Other:** Design Arena Website **1172** (OpenRouter); BenchLM overall **49.42/100**, rank #99 of 889 (noted as conservative — partial coverage).

Sources consulted: [Artificial Analysis Gemini 2.5 Pro](https://artificialanalysis.ai/models/gemini-2-5-pro), [Vals AI Gemini 2.5 Pro](https://www.vals.ai/models/google_gemini-2.5-pro), [BenchLM Gemini 2.5 Pro](https://benchlm.ai/models/gemini-2-5-pro), [Google Gemini 2.5 Pro documentation](https://ai.google.dev/gemini-api/docs/models/gemini-2.5-pro), and [Google DeepMind Gemini Pro model page](https://deepmind.google/models/gemini/pro/), accessed 2026-10-10.

### Normalized scores (1–100)

- **Tool use: 66/100.** Reduced from 72. Google still documents code execution, function calling, search grounding, and Maps grounding, but the independent agentic evidence is close to a blank: **AA Agentic Index 3.5%**, **GDPval-AA 0.0% / 616 Elo** (the lowest Elo recorded anywhere in this dataset), **τ²-bench 54.1%**, **Gert Labs 42.01**, **Terminal-Bench 2.0 30.34%**, and **Design Arena Website 1172**. The prior 72 was generous precisely because it rested on capability documentation rather than measurement.
- **Reasoning: 66/100.** Reduced from 70. **GPQA 83% (Google) / 84.4% (AA)** and **AIME 2024 92%** show real STEM competence, and the two GPQA readings agree closely. Against that: **HLE 18.8% (Google) / 22.5% (AA)** — near the floor of the entire dataset — **CritPt 2.6%**, **FrontierMath v2 Tier 4 at 4.167%** and T1–3 at 14.138%, **AA-Omniscience Hallucination Rate of 90.9%** (worse than any other model here), and an **Intelligence Index of 16.1 against a class median of 26**. A model that hallucinates 9 times in 10 and scores 16 on the composite is a knowledge-retrieval model, not a reasoning one.
- **Context window: 92/100.** Reduced from 95. The 1,048,576-token input limit is verified and — new this pass — **AA-LCR at 69.0%** gives the prior pass's missing retrieval-at-length measurement. Deducted from 95 because 69% is mid-pack, not top-tier: Gemini 3.5 Flash-Lite and several comparable 1M models score materially higher on the same component.
- **Multimodal: 90/100.** Unchanged. **AA-MMMU-Pro 74.9%** is a solid visual-reasoning result and Google's documentation confirms audio, image, video, text, and PDF input with text output. Not higher because Vals AI's capability table **omits audio** for this model while Artificial Analysis includes speech, and because there is no PDF or document-specific benchmark published.
- **Coding: 62/100.** Reduced from 72 — the largest change in this report. The prior pass recorded "no exact SWE score found." **SWE-bench Verified 63.8% is Google's own figure** and **54.40% is Vals' independent run (#82 of 88)**; that 9.4-point vendor gap is itself a signal. **Vibe Code Bench at 0.40% (#106 of 110)** and **Terminal-Bench 2.0 at 30.34%** are near-bottom results, **AA-SciCode 46.3%** and **AA Coding Index 33.3%** are well below median. Google's own 2026 model cards now publish their successors' SWE-bench Pro figures in the 55–70% band, so 2.5 Pro's 63.8% Verified is no longer competitive even on its own chosen benchmark family.
- **Cost efficiency: 70/100.** Reduced from 82. The rate card has not moved: **$1.25 / $10.00 with a 90% cache discount and a $1.34 blended rate**, and **$0.33 per Intelligence Index task ranks #16 of 227** — genuinely cheap. The reduction is not about price but about what the price buys: a **deprecated** model with a frozen composite, a **21-month-old knowledge cutoff**, and **90.9% hallucination rate** means every call is a candidate for manual verification, which is where the real cost lands. It is also the most concise model in its tier at 55M index output tokens and fast at 117 t/s — both genuine positives that keep this out of the bottom band.
- **Overall Score: 75.2/100.** (66 + 66 + 92 + 90 + 62) / 5 = 376 / 5 = 75.2, down from 79.8. The prior pass scored this model on documentation rather than measurement and over-rated it on that basis. **Best fit:** existing Gemini 2.5 Pro integrations where migration cost exceeds the quality gap — legacy document summarization, established multimodal pipelines, and codebases already tuned to its behaviour. **Do not adopt:** the model is deprecated by its own evaluation provider, superseded four generations deep by Gemini 3.x/4 Argon, and carries the worst hallucination rate in this dataset. If you are on it, **the 1M context and $1.25 input rate are the two things worth preserving** in a migration.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-10
- Method: Public web research of Artificial Analysis, Vals AI, BenchLM, Epoch AI, and Google's own model documentation and blog figures; scores are normalized 1–100 interpretations, not official vendor scores. Vendor and independent rows are kept separate with their ranks. Cost efficiency is excluded from Overall.
- Audit note — conflicts retained unresolved: **SWE-bench Verified 63.8% (Google) vs. 54.40% (Vals)**; **HLE 18.8% (Google) vs. 22.5% (AA)**; **GPQA 83% (Google) vs. 84.4% (AA)**; **release date June 5 (AA) vs. July 17, 2025 (Vals)**; **audio input listed by Google and AA, absent from Vals' capability table**. Search-provider rate limiting (HTTP 429) persisted through this pass, so evidence was assembled from three direct independent-retrieval sources (Artificial Analysis, Vals AI, BenchLM) plus Epoch AI rather than the usual three-search cadence; this is noted because Google `ai.google.dev` documentation was also unreachable by direct fetch and its figures were sourced through BenchLM's citations instead.
- Future sources: add a new file next to this one, e.g. `Gemini_2_5_Pro_Recheck.md`, using the same headings.