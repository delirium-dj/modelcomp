# Gemini 2.0 Flash — findings by GPT 6.1 Sol

- Source: Google DeepMind / stable `gemini-2.0-flash-001`, historical February2025 model.
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: [model-comparison.md](../../model-comparison.md)
- Cross-model signed log: [model-findings.md](../../model-findings.md)

## Model card

- **Name:** Gemini2.0 Flash stable/001, not Flash Thinking Experimental, Flash-Lite, Image or Live.[1][2]
- **Short description:** Low-latency multimodal input model, now retired. Planned/experimental generation features do not establish native non-text output for this stable SKU.[1][2]
- **Provider / IDs / lifecycle:** Native `gemini-2.0-flash` and **`gemini-2.0-flash-001`**, historically GenerateContent and compatible clients. Primary docs explicitly confirm **shutdown2026-06-01** for both stable IDs. Current gateway **`google/gemini-2.0-flash-001`** retains metadata but has **no endpoints**. No present free Zen ID or authenticated inference verified.[1][3][4]
- **Release / cutoff:** GA **2025-02-05**, distinct from December2024 experimental launch. Native page says cutoff **August2024**, AA recordsJune2024; primary August date retained, discrepancy explicit.[1][2][5]
- **Context / output:** Primary **1,048,576 input /8,192 output**; AA/Vals round1M. Output cap is separate from nominal input capacity and must not be replaced with2.5's64K.[1][5][6]
- **Modalities / tools:** Native **text/image/audio/video/PDF understanding → text**. Functions, code execution, search/Maps grounding, caching, structured output and Batch documented; no native image/audio generation or Live. Primary page marks thinking experimental, while selected stable AA profile is **non-reasoning**; no Thinking Experimental results inherited. File search/URL context unsupported on the archived native page.[1][2]
- **Pricing:** Historical native paid per1M **$0.10 text/image/video input/$0.40 text output**, **$0.70 audio input effective2025-02-20**; before then audio at other-input rate. Launch image lists planned cache rates **$0.025 media/$0.175 audio**, explicitly “coming soon,” not proof of launch availability or current charges. Historical free tier is not current free service after shutdown. Vals retains$0.10/$0.40; AA current tariff/runtime fields null.[2][5][6][8]
- **Architecture:** Proprietary; exact parameter/active counts and open weights unverified.[5]

### Raw benchmarks found

**Attribution:** Primary **February5 GA column** and historical pricing image both directly inspected. AA exact **Feb'25 non-reasoning UUID `bcca0e70-7e80-4c07-b1fa-b33bcfb19e51`**, current composite **estimated**. Vals exact stable001, Google/default sampling/**8,192 output**.[5][6][7][8]

Agent / tool use:

- Independent AA **Tau2 29.53% /IFBench40.20%**. Primary **FACTS Grounding84.6%** concerns supplied-document factual grounding, not84.6% end-to-end agent completion.[5][7]
- No verified exact TB2.1/TB4, Tau3-Banking, GDPval-AA, Claw-Eval/ClawProBench, Toolathlon/MCP-Atlas/SWE Atlas QnA found. Nulls not measured zeros.[5]

Reasoning / knowledge:

- Vendor **GPQA Diamond60.1% /MMLU-Pro77.6% /MATH90.9% /HiddenMath63.5% /Global MMLU-Lite83.4% /SimpleQA29.9%**. HiddenMath is held-out competition-style math, not AIME.[7]
- Independent AA **GPQA62.32% /HLE4.26% /AIME2025 21.67% /CritPt0.00% measured**, **Index8.941 estimated**. Vals **GPQA65.15% /MMLU-Pro77.38% /LegalBench78.36% /TaxEval65.25%**; displayed65.60% suite aggregate is not general intelligence.[5][6]
- AA **Omniscience accuracy23.47% /hallucination86.24% /reliability−42.5333**; different denominators, limited factual coverage/calibration.[5]

Coding / multimodal / long context:

- Vendor **LiveCodeBench v5 34.5%**, UI dates2024-10-01–2025-02-01, **BIRD-SQL Dev58.7%**. Independent AA **LiveCodeBench33.44%**, Vals **43.61%**, different suites/settings. No verified exact SWE Verified/Pro, DeepSWE, SciCode or Vibe Code result found.[5][6][7]
- Vendor **MMMU71.7% /EgoSchema test71.1% /CoVoST2(21 languages)39.0 BLEU**; BLEU is not39% audio accuracy. Vals **MMMU-Pro69.79% /MortgageTax59.66%**. No native image/audio output credited from family-wide promises.[6][7]
- Vendor **MRCR at1M70.5%**, older benchmark—not later MRCR v2 eight-needle. AA **LCR31.33%**. No verified ≥98% maximum-window retention, RULER or GraphWalks;1M capacity does not imply reliable full-window reasoning.[5][7]
- Vals historical workload latency **9.80s**. No current exact throughput/task-cost evidence in selected AA record; a surviving marketing speed claim is not a contemporary measurement after retirement.[5][6]

### Normalized scores (1–100)

- **Tool use: 40/100.** Real historical tools/grounding, capped by low independent Tau2/IFBench and missing broader agent verification.[1][5][7]
- **Reasoning: 59/100.** Useful bounded knowledge/math, capped by HLE4.26%, CritPt0, poor calibration and estimated low broad index.[5][6][7]
- **Context window: 95/100.** Verified million-token input tier, capped by ordinary older-MRCR/LCR and8K output; no near-perfect retention.[1][5][7]
- **Multimodal: 87/100.** Native audio/video/image/document input with quantitative evidence, capped by text-only output, older visual quality and no stable Live/media generation.[1][6][7]
- **Coding: 52/100.** Useful SQL/contest-code generation, capped by modest independent results and absent repair/full-project verification.[5][6][7]
- **Cost efficiency: 97/100.** Very low verified historical paid tariff; legacy economics only, not current purchasability or a verified surviving$0 endpoint.[2][3][6][8]
- **Overall Score: 67/100.** Half-up mean `(40 + 59 + 95 + 87 + 52) / 5 = 66.6`; cost excluded. Historical high-volume multimodal processor, not a current native API recommendation.

### Research trail and sources

Fresh Bing RSS exact-model official benchmarks returned generic Gemini links; Google independent-benchmark query an interstitial; DuckDuckGo stable/retirement query found current primary sources and conflicting secondary dates. Direct English native model/deprecations pages, February5 GA announcement, both primary chart/pricing images, selected AA stable and exact Vals001/gateway inspected. Unsuffixed Vals candidate404; correct001 resolved. Current native pricing omits2.0; archived Cloud URL redirects to a current-model index and supplies no2.0 metrics. No peer/Thinking Experimental/successor results used.

[1]: https://ai.google.dev/gemini-api/docs/models/gemini-2.0-flash?hl=en "Archived primary stable1M/8K, August cutoff, native modalities and June1 shutdown"
[2]: https://developers.googleblog.com/en/gemini-2-family-expands/ "February5 GA, text-only output versus future generation/Live plans and historical pricing"
[3]: https://ai.google.dev/gemini-api/docs/deprecations?hl=en "Explicit stable/001 June1,2026 shutdown dates"
[4]: https://openrouter.ai/api/v1/models/google/gemini-2.0-flash-001/endpoints "Exact stable record, no current endpoints"
[5]: https://artificialanalysis.ai/models/gemini-2-0-flash "Exact selected Feb'25 non-reasoning, estimated index and independent metrics/null current prices"
[6]: https://www.vals.ai/models/google_gemini-2.0-flash-001 "Exact stable Google/default8K benchmark profile and historical rates/latency"
[7]: https://storage.googleapis.com/gweb-uniblog-publish-prod/original_images/gemini_benchmarks_cropped_light1x.gif "Primary GA image directly inspected: exact stable column, v5 coding dates, old MRCR and BLEU"
[8]: https://storage.googleapis.com/gweb-developer-goog-blog-assets/images/Gemini-family-pricing-comparison-2.0-flash-lite.original_ndNIfQR.png "Primary historic tariff image inspected: audio effective date and cache-coming-soon footnote"

---

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-21 UTC
- Method: Independent fresh searches, full primary archived spec/lifecycle and chart/pricing-image inspection, exact stable independent evaluator comparison. Scores are historical normalized1–100 interpretations, not official vendor scores or current availability claims.
- Future sources: add a separate signed file alongside this report using the same headings.
