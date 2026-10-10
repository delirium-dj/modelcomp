# Gemini 3.5 Flash-Lite — findings by Space Bunny

- Source: Google (`gemini-3.5-flash-lite`; stable)
- Date: 2026-10-10 (UTC) — second-pass research; first pass 2026-09-24
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`
- Re-validation note: re-checked 2026-10-10. **MATERIAL change, downward on capability.** The prior pass recorded "no verified public exact value found" for HLE, CritPt, hallucination metrics, GDPval-AA, Tau3-Banking, and MCP-Atlas. Those are now sourced, and most are poor: **AA-HLE 18.8%**, **CritPt 0.0%**, **AA Agentic Index 15.9%**, **AA Coding Index 49.3%**, **AA-SciCode 41.3%**, **AA-Omniscience Accuracy 29.5%**, and an **Intelligence Index of 22.2**. Positively, **GDPval-AA 1140 Elo** and **AA-LCR 76.0%** resolve two prior gaps, and Google's own launch cites **350 output tokens/s** — the fastest model in the 3.5 series. Net: **Tool use 78 → 74**, **Reasoning 80 → 76**, **Coding 78 → 74**, **Context 95 → 96**, **Cost 93 → 94**, Overall **85.2 → 83.0**.

## Model card

- **Name:** Gemini 3.5 Flash-Lite
- **Short description:** Google's low-latency, cost-effective multimodal model for high-throughput subagents, document parsing, and simple data extraction — the fastest and cheapest model in the Gemini 3.5 series, released 2026-07-21 alongside Gemini 3.6 Flash and Gemini 3.5 Flash Cyber.
- **Provider / access:** Google Gemini API (`gemini-3.5-flash-lite`); Google AI Studio; OpenAI-compatible integrations and supported Gemini endpoints.
- **Lifecycle:** **Active, not deprecated.** Google's deprecations table carries no shutdown date for this model (its sibling `gemini-3.1-flash-lite` is listed as retiring no sooner than 2027-05-07). **Superseded in practice:** Gemini 3.7 Flash and 3.8 Flash have both shipped since.
- **Release / knowledge:** Released **2026-07-21** (BenchLM; Google model documentation gives July 2026 as the latest update). **No knowledge cutoff was published** — a real gap for a 2026 model.
- **IDs:** `gemini-3.5-flash-lite`.
- **Context window:** **1,048,576 input tokens; 65,536 output tokens** (Google model documentation).
- **Modalities:** **Text, image, video, audio, and PDF input; text output.** Thinking, function calling, structured outputs, code execution, search grounding, file search, URL context, and computer use (preview) supported. **Image and audio generation are not supported.**
- **Pricing (verified 2026-10-10):** **$0.30 per 1M input / $2.50 per 1M output**, cached input **$0.03**. Google's launch explicitly positions this as the **"strongest price-to-performance ratio for developers and customers dealing with high throughput production traffic."** Tier and batch/Flex pricing still varies.
- **Speed:** **350 output tokens/s** per Artificial Analysis, as cited in Google's own launch post — **the fastest model in the Gemini 3.5 series** and the single most important operational fact about it.
- **Architecture:** Proprietary; Google has not disclosed parameter count.

### Raw benchmarks found

**Official — Google, "Introducing Gemini 3.6 Flash, 3.5 Flash-Lite, and Gemini 3.5 Flash Cyber" (2026-07-21):**

| Benchmark | Score |
| --- | --- |
| Terminal-Bench 2.1 | **54.0%** |
| OSWorld-Verified | **74.0%** |
| SWE-bench Pro | **54.2%** |
| **GDM-MRCR v2 (long context)** | **72.2%** |
| **GDPval-AA v2** | **1140 Elo** |
| Output speed | **350 tokens/s** (Artificial Analysis, cited by Google) |
| Pricing | $0.30 / $2.50 per 1M |

Google's framing: Flash-Lite is *"a significant step up on agentic and coding evals... including on SWE-Bench Pro (54.2% vs. 49.6%) and OSWorld-Verified (74.0% vs. 65.1%)"* against **Gemini 3 Flash** — i.e. the comparison set is its own predecessor, not the 3.6 Flash released alongside it.

**Independent — Artificial Analysis:**

- **Intelligence Index 22.2**
- GDPval-AA **24.3%**
- **AA Agentic Index 15.9%**
- **AA-SciCode 41.3%**; **AA Coding Index 49.3%**
- **AA-MMMU-Pro 79.0%**
- **AA-LCR 76.0%**; **CritPt 0.0%**
- GPQA Diamond **83.8%**; **AA-HLE 18.8%**
- **AA-Omniscience: Index 5.2%, Accuracy 29.5%, Hallucination Rate 34.4%**

**Independent — Vals AI:**

- **Terminal-Bench 2.1: 50.2%** (vs. Google's 54.0% — a 3.8-point gap, unusually tight)
- **SWE-bench 75.0%**
- **LiveCodeBench 79.0%**
- **GPQA Diamond 83.8%** — **exact agreement with Artificial Analysis**; MMLU-Pro 85.8%

**Other:** BenchLM overall **51.63/100**, rank **#91 of 889** (conservative — partial coverage); related earlier model **Gemini 3.1 Flash-Lite 48.09**.

**Still absent:** SWE-bench Verified, DeepSWE, Vibe Code Bench, Tau3-Banking, MCP-Atlas, Claw-Eval, Toolathlon.

Sources consulted: [Introducing Gemini 3.6 Flash, 3.5 Flash-Lite, and 3.5 Flash Cyber (Google, 2026-07-21)](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-6-flash-3-5-flash-lite-3-5-flash-cyber/), [BenchLM Gemini 3.5 Flash-Lite (updated 2026-10-10)](https://benchlm.ai/models/gemini-3-5-flash-lite), [Artificial Analysis Gemini 3.5 Flash-Lite](https://artificialanalysis.ai/models/gemini-3-5-flash-lite), [Vals AI Gemini 3.5 Flash-Lite](https://www.vals.ai/models/google_gemini-3.5-flash-lite), [Google Gemini 3.5 Flash-Lite model documentation](https://ai.google.dev/gemini-api/docs/models/gemini-3.5-flash-lite), and [Google Gemini API deprecations](https://ai.google.dev/gemini-api/docs/deprecations), accessed 2026-10-10.

### Normalized scores (1–100)

- **Tool use: 74/100.** Reduced from 78. **OSWorld-Verified 74.0%** and the documented computer-use / code-execution surface are genuine strengths, and **Terminal-Bench 2.1 at 54.0%** is a real Google number. But the independent agentic evidence is now visible and weak: **AA Agentic Index 15.9%** and **GDPval-AA 1140 Elo / 24.3%** — the lowest GDPval Elo recorded in this dataset. Google's launch compares Flash-Lite only to *Gemini 3 Flash*, not to the 3.6 Flash shipped the same day, which is the more relevant comparison and the one Google does not make.
- **Reasoning: 76/100.** Reduced from 80. **GPQA Diamond 83.8%** is an **exact match between Artificial Analysis and Vals**, and **MMLU-Pro 85.8%** is solid. Deducted hard for the newly visible rows: **AA-HLE 18.8%** (near the floor of the dataset), **CritPt 0.0%**, **AA-Omniscience Accuracy 29.5%** with an Index of 5.2%, and an **Intelligence Index of 22.2**. A 34.4% hallucination rate is respectable; knowing only 29.5% of the answer is not. This is a fast model, not a reasoning model.
- **Context window: 96/100.** Raised from 95. The prior pass had Google's **MRCR v2 at 72.2%**; **AA-LCR at 76.0%** is now a second, fully independent measurement, and the two agree closely. A 1,048,576-token window with two independent retrieval confirmations is the top of this dataset's context tier.
- **Multimodal: 95/100.** Unchanged. **AA-MMMU-Pro 79.0%** now backs the previously documentation-only claim, and **native text / image / video / audio / PDF input** is confirmed. Held at 95 because output is text-only with no image or audio generation, and no video- or audio-specific benchmark is published.
- **Coding: 74/100.** Reduced from 78. **Vals AI's SWE-bench 75.0%** and **LiveCodeBench 79.0%** are respectable independent numbers, and Google's **SWE-bench Pro 54.2%** beats Gemini 3 Flash's 49.6%. Deducted for **AA-SciCode 41.3%**, an **AA Coding Index of 49.3%**, **Vals' Terminal-Bench 2.1 at 50.2%**, and the complete absence of SWE-bench Verified, DeepSWE, or Vibe Code Bench figures.
- **Cost efficiency: 94/100.** Raised from 93. **$0.30 / $2.50 with a $0.03 cache read** is among the cheapest 1M-context multimodal rates available, and the decisive fact is **350 output tokens/s** — roughly 3.6× Gemini 3.5 Flash's 96 t/s. At that speed the *wall-clock* cost of an agent loop is dramatically lower than the per-token price alone suggests, which is the whole argument for this model. Small deduction for unpublished knowledge cutoff and unspecified tier pricing.
- **Overall Score: 83.0/100.** (74 + 76 + 96 + 95 + 74) / 5 = 415 / 5 = 83.0, down from 85.2. The prior pass scored this model on capability documentation plus three strong figures and did not know that **AA-HLE is 18.8%, CritPt 0.0%, and the Agentic Index 15.9%**. **Best fit — and this is a narrow one: high-throughput subagent fan-out, document and media extraction, classification, routing, and any latency-bound workload where 350 tokens/s and $0.30/$2.50 dominate the decision.** **Do not use it for:** reasoning, knowledge work, coding agents, or anything where output quality is checked. If you need a Gemini 3.5-family model that can *think*, Gemini 3.6 Flash at $1.50/$7.50 scores 22 points higher on Artificial Analysis.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-10
- Method: Public web research of Google's official Gemini 3.6/3.5-Flash-Lite launch post, Artificial Analysis and its component rows, Vals AI, Google's Gemini API deprecations page, and BenchLM; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Audit note: **GPQA Diamond 83.8% is an exact Artificial Analysis / Vals agreement** and is recorded as such. **Terminal-Bench 2.1 54.0% (Google) vs. 50.2% (Vals)** is the narrowest harness gap recorded for this model. **CritPt 0.0%** is treated as a hard result, not a harness artifact — unlike Claude Opus 4.5's 0.3%, this model is listed on the CritPt leaderboard. Google's launch frames Flash-Lite against Gemini 3 Flash rather than against the 3.6 Flash released the same day; that framing choice is noted. Search-provider rate limiting (HTTP 429) persisted, so evidence came from four direct retrievals rather than three discrete searches.
- Future sources: add a new file next to this one, e.g. `Gemini_3_5_Flash_Lite_Recheck.md`, using the same headings.