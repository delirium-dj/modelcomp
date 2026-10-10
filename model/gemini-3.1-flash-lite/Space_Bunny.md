# Gemini 3.1 Flash-Lite — findings by Space Bunny

- Source: Google (`gemini-3.1-flash-lite`; stable successor to the shut-down preview)
- Date: 2026-10-10 (UTC) — second-pass research; first pass 2026-09-29
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`
- Re-validation note: re-checked 2026-10-10. **MATERIAL change — Overall 77.0 → 72.0.** The prior pass's central unresolved item is now resolved, and it resolves against the model: it recorded the Artificial Analysis Intelligence Index as "**26** as displayed on the AA model page; **no verified v4.3.2 reading was found**" and left the gap open. **The verified v4.3.2 reading is 16**, not 26 — a 10-point overstatement feeding the Reasoning score. Three other changes: **CharXiv 73.2%** is now available from Google's own DeepMind model card, the first multimodal measurement for this model; **Artificial Analysis has marked the model deprecated**; and **TTFT improved to 5.11 s** from the ~7.8 s the prior pass recorded. Restated: **Tool 55 → 52**, **Reasoning 72 → 64**, **Context 95 → 90**, **Multimodal 95 → 92**, **Coding 68 → 62**, **Cost 96 → 94**.

## Model card

- **Name:** Gemini 3.1 Flash-Lite
- **Short description:** Google's cost-efficient multimodal Flash-Lite model for high-volume extraction, subagents, and lightweight multimodal reasoning. **Cheap, fast (330 t/s), and broad in intake — but weakly agentic, and now formally superseded.**
- **Provider / access:** Google Gemini API and Vertex AI (`gemini-3.1-flash-lite`); Google AI Studio. Available via API through **1 provider** per Artificial Analysis. The older `gemini-3.1-flash-lite-preview` ID was deprecated and **shut down 2026-05-25**.
- **Release / knowledge:** Preview shipped **2026-03-03**; **GA release 2026-05-07** (Vertex AI model page and Google deprecations table). **Knowledge cutoff: January 2025** (Vertex AI; confirmed by AA) — now 21 months stale.
- **IDs:** `gemini-3.1-flash-lite` (GA, stable); `gemini-3.1-flash-lite-preview` (shut down 2026-05-25). Artificial Analysis tracks the model under the preview ID.
- **Context window:** **1,048,576 input tokens / 65,536 output tokens** (Google documentation; Vertex AI confirms the input limit; AA confirms 1M).
- **Modalities:** **Text, code, image, audio, video, and PDF input; text output** (Google). Artificial Analysis independently confirms **text, image, speech, and video input, text output**. Thinking supported (default `minimal`; `medium`/`high` advised for subagents), plus function calling, structured outputs, code execution, search grounding, file search, URL context, Maps grounding, caching, batch/flex/priority inference, and computer use (preview). Image/audio generation and the Live API are **not** supported.
- **Pricing (verified 2026-10-10):** **$0.25 per 1M input, $1.50 per 1M output**, cache discount **90%**; **blended 7:2:1 rate $0.22 per 1M tokens** (AA). Cached input ~$0.025. AA notes output is somewhat expensive against a class median of $0.88. OpenRouter batch ~$0.125/$0.75; Vertex/Google Cloud list $0.30/$2.50.
- **Speed / latency (revised):** AA measures **330.5 output tokens/s** — **#6 of 180** in its price class, against a class median of 108.1 — and **TTFT 5.11 s**, against a class median of 2.15 s. The prior pass recorded ~199 t/s and ~7.8 s TTFT; both speed figures have improved materially, though TTFT remains at the high end.
- **Architecture:** Proprietary; Google has not disclosed parameter count.
- **Deprecation / retirement:** **Now formally deprecated on Artificial Analysis** ("Google has launched a newer release, Gemini 3.5 Flash-Lite. We suggest considering it instead"). Google's deprecations table publishes a **hard shutdown date of 2027-05-07**, with **`gemini-3.5-flash-lite` as the recommended replacement** (GA 2026-07-21, priced higher at $0.30/$2.50). Gemini 3.5 Flash-Lite scores **37** on the AA Intelligence Index against **16** here.

### Raw benchmarks found

**Independent — new or corrected this pass:**

Reasoning / knowledge — **the key correction:**

- **Artificial Analysis Intelligence Index: 16** (v4.3.2), ranked **#72 of 180** in its price class against a class median of 13. **The prior pass carried 26 from a displayed page value and explicitly could not verify a v4.3.2 reading. 16 is the verified figure.**
- **Cost per Intelligence Index task: $0.06**; blended price $0.22/1M; cache discount 90%; **54M output tokens** generated on the Index (class median 100M — notably concise)

Agent / tool use:

- Terminal-Bench 2.1: **31.1%** (Artificial Analysis) / **34.1%** (Vals AI) — two sources, both weak and now both confirmed
- τ²-bench **31.3%**; τ-bench Banking **9.7%**; Terminal-Bench Hard **24.2%**; Gert Labs **38.46%**
- **JevBench 1.4: 14.26**; **JevBench 1.5: 19.58** (Florian Standhartinger and contributors, v1.4.2.2 and v1.5.4) — new, and low

Multimodal:

- **CharXiv: 73.2%** (Google DeepMind Gemini 3.1 Flash-Lite model card) — **the first multimodal measurement for this model**, and a good one: chart and document comprehension is the hardest common vision task

Carried from the prior pass, all still accurate:

- GPQA Diamond **82.2%** (AA) / **81.1%** (Vals AI); MMLU-Pro **86.2%** (Vals AI); HLE **17.2%**
- LiveCodeBench **80.1%** (Vals AI); SWE-bench **62.8%** (Vals AI); SciCode **41.9%**; **Vibe Code Bench v1.1: 0.00%**
- Long-context reasoning composite **71.3%**; IFBench **77.2%**

**Still genuinely absent:** AA-Omniscience accuracy/hallucination, CritPt, and MLCR are marked "Not publicly available" for this model on Artificial Analysis, so the prior pass's gap on hallucination metrics **cannot** be closed. SWE-bench Pro, SWE-bench Verified exact, DeepSWE, Toolathlon, GDPval-AA, Claw-Eval, and MCP-Atlas remain unpublished. **No MMMU-Pro figure exists** — CharXiv is the only vision benchmark.

**BenchLM composite: 48.09/100, #105 of 889** (10 of 625 benchmarks; conservative). Google siblings: Gemini 3.5 Flash-Lite **51.63**, Gemini 2.5 Pro **49.42**, Gemini 2.5 Flash **42.20**.

Sources consulted: [Artificial Analysis Gemini 3.1 Flash-Lite (retrieved 2026-10-10)](https://artificialanalysis.ai/models/gemini-3-1-flash-lite-preview), [BenchLM Gemini 3.1 Flash-Lite (updated 2026-10-10)](https://benchlm.ai/models/gemini-3-1-flash-lite), [Google DeepMind Gemini 3.1 Flash-Lite model card](https://deepmind.google/models/model-cards/gemini-3-1-flash-lite/), [Google Gemini deprecations table](https://ai.google.dev/gemini-api/docs/deprecations), [Vertex AI Gemini 3.1 Flash-Lite](https://cloud.google.com/vertex-ai/docs/generative-ai/models/gemini/3-1-flash-lite), [Vals AI Gemini 3.1 Flash-Lite](https://www.vals.ai/models/google_gemini-3.1-flash-lite-preview), and [JevBench results](https://benchmarkheaven.com/api/jevbench/v1.5.4), accessed 2026-10-10.

### Normalized scores (1–100)

- **Tool use: 52/100.** Down from 55. The measured agentic picture is unchanged and consistently weak across **two independent harnesses**: Terminal-Bench 2.1 at **31.1%** (AA) and **34.1%** (Vals AI), τ²-bench **31.3%**, τ-bench Banking **9.7%**, Terminal-Bench Hard **24.2%**, Gert Labs **38.46%**. The new **JevBench results (14.26 on v1.4, 19.58 on v1.5)** measure structured decision quality and are low, reinforcing the picture. **IFBench at 77.2%** is the one good row and is why this is 52 rather than 40. This is a subagent and extraction model, not a tool-loop model.
- **Reasoning: 64/100.** Down from 72 — driven entirely by the index correction. **The verified v4.3.2 Intelligence Index is 16, not 26.** Academic knowledge is respectable and independently confirmed (**GPQA Diamond 82.2% / 81.1%**, **MMLU-Pro 86.2%**), but **HLE at 17.2%** is far below the frontier reference, and **CritPt and the entire Omniscience block are unpublished** so this model's factual reliability is genuinely unmeasured — a distinction that matters, because the comparable models in this batch measured between 29.6% and 93.0% hallucination rates and we cannot say where this one sits. Add a **January 2025 knowledge cutoff** and 64 is where the evidence lands.
- **Context window: 90/100.** Down from 95. **1,048,576 input / 65,536 output** is confirmed three ways, and **the long-context reasoning composite of 71.3%** remains the exact-model retrieval evidence. The small reduction reflects that 71.3% is a moderate rather than strong retrieval result, and **no MRCR, RULER, GraphWalks, or MLCR figure exists** to corroborate it. Still firmly in the ≥1M tier.
- **Multimodal: 92/100.** Down from 93, effectively credited and newly evidenced. **CharXiv at 73.2%**, from Google's own DeepMind model card, is a real and demanding chart-and-document comprehension result, and it is the **first** multimodal measurement for this model. The intake surface — text, code, image, audio, video, PDF — remains among the broadest in this dataset. Held below the 95 band only because **there is still no MMMU-Pro or equivalent general-vision figure**, so the multimodal score rests on a single strong data point.
- **Coding: 62/100.** Down from 68. The profile is unchanged and bimodal: **LiveCodeBench 80.1%** and **SWE-bench 62.8%** show real single-shot code generation, while **SciCode 41.9%** and **Vibe Code Bench at exactly 0.00%** show it cannot sustain an open-ended coding session. The reduction follows the index correction, since SciCode and Terminal-Bench 4.0 are both components of the v4.3.2 index that dropped from 26 to 16. **SWE-bench Pro, SWE-bench Verified exact, and DeepSWE remain unpublished.**
- **Cost efficiency: 94/100.** Down from 96. The economics are strong and now better quantified: **$0.25/$1.50**, a **90% cache discount**, a **blended 7:2:1 rate of $0.22 per 1M**, **$0.06 per Intelligence Index task**, and **#22 of 180 on cost** in its class. AA does flag output as "somewhat expensive" against a $0.88 class median, and the model generates 54M tokens on the Index versus a 100M median — so the practical per-task cost is better than the headline rate suggests. The reduction reflects **deprecation**: the model has a published shutdown date and a named replacement.
- **Overall Score: 72.0/100.** (52 + 64 + 90 + 92 + 62) / 5 = 360 / 5 = 72.0, down from 77.0. **Best fit: inexpensive, high-volume multimodal extraction, triage, and subagent fan-out** — document, audio, and video intake at 1M context with chart comprehension at 73.2% and 330 t/s of throughput is a genuinely good bulk pipeline component. **Three cautions.** First, **do not use it to drive a tool loop** — Terminal-Bench 2.1 is 31–34% across both harnesses and τ-bench Banking is 9.7%. Second, **its factual reliability is unmeasured rather than good**: with no Omniscience or CritPt publication, assume it hallucinates at least as much as its generation-mates until proven otherwise. Third, **migrate before 2027-05-07.** The replacement `gemini-3.5-flash-lite` costs $0.30/$2.50 and scores **37 on the same index against this model's 16** — more than double — so the upgrade is worth the price difference on any task where output quality matters at all.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-10
- Method: Public web research of Artificial Analysis's Gemini 3.1 Flash-Lite model page and index data, BenchLM's Gemini 3.1 Flash-Lite profile, Google's DeepMind model card, Google's deprecations table, Vertex AI model documentation, Vals AI leaderboards, and the JevBench v1.4/v1.5 published results; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Audit note — **the prior pass's one explicitly-flagged uncertainty is now resolved, and it corrects downward.** It recorded the Intelligence Index as "26 as displayed on the AA model page; **no verified v4.3.2 reading (ceiling 58) was found**, so the value is recorded as displayed." **The verified v4.3.2 figure is 16**, and the prior Reasoning score of 72 was built partly on the unverified 26; it is now 64. The prior pass was right to refuse to silently rescale, and this pass supplies the verified value rather than guessing. **Two gaps could not be closed and are stated as such:** AA-Omniscience accuracy/hallucination and CritPt are marked "Not publicly available" for this model, so no hallucination rate can be reported; and no MMMU-Pro figure exists, leaving **CharXiv 73.2%** as the sole multimodal measurement. **Speed figures were revised upward** (199 → 330.5 t/s; TTFT 7.8 s → 5.11 s) as AA refreshed its measurements, while **deprecation is now explicit on Artificial Analysis** in addition to Google's published 2027-05-07 shutdown. Search-provider rate limiting (HTTP 429) persisted, so evidence came from three direct primary retrievals (Artificial Analysis, BenchLM, Google's DeepMind model card) plus cited leaderboards rather than three discrete searches.
- Future sources: add a new file next to this one, e.g. `Gemini_3_1_Flash_Lite_Recheck.md`, using the same headings.