# Gemini 2.5 Flash Lite — findings by Space Bunny

- Source: Google DeepMind (`gemini-2.5-flash-lite`; canonical `google/gemini-2.5-flash-lite`)
- Date: 2026-10-10 (UTC) — second-pass research; first pass 2026-09-27
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`
- Re-validation note: re-checked 2026-10-10. **Small net change — Overall 57.8 → 54.8.** This is the most thoroughly evidenced report in the dataset and most of it holds. The one substantive correction is a sourcing one:

> **CORRECTION: the Artificial Analysis Intelligence Index of 7 is an *estimate*, not a measurement.** Artificial Analysis's page displays the index with an explicit asterisk and the note "**Estimate (independent evaluation forthcoming)**" — AA has never actually run this model. **The prior pass cited "7" alongside a verified Epoch AI figure as though both were measured.** They are not. AA's per-benchmark rows for this model are all "Not publicly available," and BenchLM has **no page for Gemini 2.5 Flash-Lite at all** — `benchlm.ai/models/gemini-2-5-flash-lite` silently redirects to Gemini 2.5 Flash (the non-Lite model), which the prior pass correctly noted as absent.

Restated on that basis: **Tool 30 → 28**, **Reasoning 45 → 40**, **Context 92 → 88**, **Multimodal 90 → 88**, **Coding 32 → 30**, **Cost 98 → 96**.

## Model card

- **Name:** Gemini 2.5 Flash-Lite (non-reasoning variant)
- **Short description:** Google's smallest and cheapest 2.5-family model, built for at-scale, high-frequency, low-complexity work — classification, extraction, summarization, routing — where latency and unit cost dominate. Genuinely multimodal (text, image, video, audio, PDF in) at 1M context and ~266 output tokens/second, but near the bottom of the field on reasoning, agentic work and coding. **It is legacy and formally deprecated.**
- **Provider / access:** Google Gemini API (`gemini-2.5-flash-lite`, stable), Google Vertex AI, and third-party clouds under the provider-qualified name (e.g. Oracle OCI as `google.gemini-2.5-flash-lite`). Google-native request/response schema. Also via Requesty and OpenRouter. **Artificial Analysis lists availability through only 1 API provider.** *Carried caveat from the prior pass:* one aggregator states Google has scheduled Gemini API retirement for **2026-10-16** with the model remaining on Vertex AI — verify against Google's own deprecation notices before any production migration.
- **Release / knowledge:** **released 2025-06-17** (confirmed by AA). Google docs list the stable version's latest update as July 2025; a model-card aggregator dates the GA announcement 2025-07-22. **Knowledge cutoff: January 2025** (Google and AA) — now 21 months stale.
- **IDs:** `gemini-2.5-flash-lite` (Gemini API / Vertex); `google/gemini-2.5-flash-lite` (canonical); `google.gemini-2.5-flash-lite` (OCI). `gemini-2.5-flash-lite-preview-09-2025` — **shut down 2026-03-31**. No Free-tier Zen ID.
- **Context window:** **1,048,576 input tokens / 65,536 output tokens** (Google Gemini API model page, exact figures; AA and Vertex independently confirm 1M).
- **Modalities:** **text, image, video, audio and PDF in; text out** — independently confirmed by AA as "text, image, speech, and video input, text output." Thinking supported. Function calling, structured outputs, code execution, file search, search grounding, Google Maps grounding, URL context, caching, Batch API and Flex inference all supported. **Not supported: audio generation, image generation, and the Live API** — so it is multimodal-in / text-out, and the correct routing home for real-time voice is `models_voice/`.
- **Pricing (verified 2026-10-10):** **$0.10 / 1M input, $0.40 / 1M output**, confirmed as the standard rate by AA, which classifies both as "very competitive" against class medians of $0.25 and $0.80. **90% cache discount; blended 7:2:1 rate $0.07/1M** — among the cheapest capable APIs in existence. No free tier.
- **Architecture:** proprietary. Google has **not** disclosed a parameter count or architecture. (One aggregator mislabels it "Open Source" — it is not; Google and AA both list it as proprietary with no public weights.)
- **Deprecation:** **AA now carries an explicit deprecation banner** — "Google has launched a newer release, Gemini 2.5 Flash-Lite Preview (Sep '25). We suggest considering it instead," with benchmarking limited to the default 10k-token workload. The prior pass recorded AA marking it "deprecated"; that is now confirmed with a named successor.

### Raw benchmarks found

**Carried from the prior pass — all still valid, and this remains the most thoroughly sourced report in the dataset:**

Agent / tool use:

- **Epoch AI Agentic Index: 0.0, 0th percentile** (Model Beat) — *the sharpest negative in the dataset*
- Terminal-Bench Hard **4.5%** (rank 207/326, 37th pct); **τ²-bench 18.4%**; Tau2-Bench Telecom **19.0%**
- **BFCL-V4 36.9%** (rank 55/103); **BFCL_v3_MultiTurn 13.5%** (rank 49/87) — *multi-turn tool use is the damning one*
- VerdictBench **52.9%**; OmniGAIA **8.6%**; Omni-DeepSearch **2.2%**
- Terminal-Bench 2.1, GDPval-AA, Claw-Eval, Toolathon, MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- **GPQA Diamond 62.5%** (BenchmarkList rank 235/443, corroborated by Requesty and Model Beat/Epoch); a separate aggregator's plain "GPQA 64.6%" is a different, easier variant, not Diamond
- **HLE 6.8%** (BenchmarkList rank 218/446; Model Beat/Epoch 6.8%, with a changelog entry recording 6.4% → 6.8% on 2026-08-06)
- **FrontierMath v2 Tiers 1–3 4.844% / Tier 4 4.167%** (Epoch AI)
- **CAIS Text Capabilities Index 5.1 — 0th percentile of 42** (BenchmarkList)
- **Epoch AI Intelligence Index 3.0 — 3rd percentile** (Model Beat)
- **Artificial Analysis Intelligence Index: 7 — *estimated*, #56/75 against a class median of 9**; AA publishes **no per-benchmark rows** for this model
- **LCR/MLCR, CritPt, Omniscience Accuracy and Hallucination Rate: still no verified public value** after two passes
- **Vectara HHEM 96.7%** (rank 3/85) and **Facts Grounding 84.1%** — grounding/consistency rows, *not* correctness measurements, and must not be read as anti-hallucination results
- MMLU-Pro **75.9%**; Global-MMLU-Lite **81.1%**; WeirdML **35.2%**; AIME 2024/2025 **53.3%**

Coding:

- **SWE-bench Verified 31.6%** (single aggregator source); SciCode **19.3%** (rank 336/439, 24th pct); Aider Polyglot **26.7%**
- **Epoch AI Coding Index 6.0 — 6th percentile** (Model Beat)
- **LiveCodeBench: 59.3% (Model Beat / Epoch) vs 33.7% (anotherwrapper)** — *a large disagreement, most likely different LiveCodeBench versions and/or thinking budgets; both are carried and neither is treated as settled*
- No SWE-bench Pro, Vibe Code Bench, or DeepSWE row

Long context:

- **Still no long-context retrieval measurement** — no MRCR, RULER, GraphWalks, or AA-LCR. The only long-context-family row is **LisanBench 122.33** (rank 100/126, 21st pct), which is not a needle-retrieval-at-length test.

Performance — **its actual selling point, and it remains excellent:**

- **266.4 output tokens/second, #2 of 75**, against a class median of 88.4 t/s; **TTFT 0.32 s** against a median of 1.81 s (Artificial Analysis). *Prior pass recorded 283.6 t/s and 0.30 s; both are now revised slightly downward on refreshed measurement.* This remains the one axis where the model is elite.

Sources consulted: [Artificial Analysis Gemini 2.5 Flash-Lite (deprecated page, retrieved 2026-10-10)](https://artificialanalysis.ai/models/gemini-2-5-flash-lite), [BenchLM Gemini 2.5 Flash-Lite](https://benchlm.ai/models/gemini-2-5-flash-lite) (**404 / redirects to the non-Lite model — absence confirmed**), Google Gemini API model documentation, BenchmarkList model page and benchmark leaderboards, Model Beat / Epoch AI standardized evaluations, the Requesty Vertex provider card, and anotherwrapper. Scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.

### Normalized scores (1–100)

- **Tool use: 28/100.** Down from 30. The evidence is unchanged and still the weakest agentic profile in this dataset: **Epoch AI Agentic Index 0.0 at the 0th percentile**, **Terminal-Bench Hard 4.5%**, **τ²-bench 18.4%**, **BFCL_v3_MultiTurn 13.5%**, **Omni-DeepSearch 2.2%**. **BFCL-V4 36.9%** and documented function-calling support keep it off the floor — it can *emit* a valid tool call — but nothing suggests it can *drive* a multi-step agent loop. No new measurement exists in either direction, and the model is deprecated, so none will.
- **Reasoning: 40/100.** Down from 45. **GPQA Diamond 62.5% and MMLU-Pro 75.9% are respectable in absolute terms**, but the composite picture is unchanged and near-floor: **Epoch AI Intelligence Index 3.0 at the 3rd percentile**, **HLE 6.8%**, **CAIS Text Capabilities Index 5.1 at the 0th percentile of 42**, and **FrontierMath Tier 4 at 4.167%**. The specific reduction is the sourcing correction: **the AA Intelligence Index of 7 is an estimate AA has not actually measured**, so the one number that appeared to corroborate the low reading cannot carry that weight. **Thinking is supported**, which is why this sits at 40 rather than lower. **No hallucination rate exists after two passes** — and given the 0th-percentile agentic and 6th-percentile coding readings, the absence should not be read as favourable.
- **Context window: 88/100.** Down from 92. The **1,048,576-token input limit with 65,536 output** is verified by Google with exact figures and independently confirmed by AA at 1M — a genuine top-tier window. The reduction is unchanged from the prior pass's own reasoning and is worth restating: **there is still no retrieval-at-length measurement of any kind.** No MRCR, RULER, GraphWalks, or AA-LCR row exists; **LisanBench 122.33 at the 21st percentile** is not a needle-in-a-haystack test. The methodology's "100 if ≥98% retrieval at 512K+" condition remains unverified. **A 1M window on a model with a 0th-percentile agentic index is capacity, not competence.**
- **Multimodal: 88/100.** Down from 90. **Text, image, video, audio and PDF in with text out** puts this in the methodology's "+audio in or any non-text out" band (90–100) and is now **independently confirmed by AA** rather than asserted from documentation alone. The small reduction reflects two facts: **output is text-only** — audio generation, image generation and the Live API are all explicitly unsupported — and **no video- or audio-input benchmark row has ever been published** for this model, so the capability is documented but entirely unmeasured. That is the same evidence-quality issue that costs the Context score.
- **Coding: 30/100.** Down from 32. **SWE-bench Verified 31.6%**, **SciCode 19.3% (24th percentile)**, **Aider Polyglot 26.7%**, **Terminal-Bench Hard 4.5%**, and an **Epoch AI Coding Index of 6.0 at the 6th percentile** are floor-adjacent across the board. The one genuine unresolved conflict is **LiveCodeBench at 59.3% vs 33.7%** across two sources; even taking the higher figure, no coding dimension lifts this model out of the low 30s. It is a router and extractor, not a coder.
- **Cost efficiency: 96/100.** Down from 98. **$0.10 in / $0.40 out, a 90% cached-input discount, and a $0.07/1M blended rate** — AA now independently classifies both the input and output rates as "very competitive" against medians of $0.25 and $0.80, which is strong corroboration of the prior pass's pricing. The reduction from 98 reflects **deprecation**: AA carries an explicit banner steering users to Gemini 2.5 Flash-Lite Preview (Sep '25), and an aggregator-reported **Gemini API retirement date of 2026-10-16** — six days from this report — means this price is not durable for new commitments.
- **Overall Score: 54.8/100.** (28 + 40 + 88 + 88 + 30) / 5 = 274 / 5 = 54.8, down from 57.8. **The clearest cost/context/multimodal-versus-capability trade in the dataset, and best read as a profile rather than a ranking.** **Best fit: high-volume classification, extraction, routing and summarization** where a $0.07/1M blended rate, a 1M window, 266 t/s and 0.32 s TTFT genuinely are the design targets — for triage pipelines where the output is checked by a human or a downstream model, and never where the model must plan or write. **Four hard limits.** First, **a 0th-percentile agentic index and 6th-percentile coding index mean it must never be the model that plans, decides, or writes.** Second, **GPQA 62.5% with a January 2025 knowledge cutoff** means it knows almost nothing recent. Third, **no hallucination measurement exists** — assume it fabricates freely and verify everything. Fourth, **it is deprecated with a reported API retirement on 2026-10-16** — verify against Google's deprecation notices before committing anything. **If you are starting new work, use Gemini 3.5 Flash-Lite** (BenchLM 51.63, AA index 16, shutdown not until 2027-05-07) or **Gemini 3.1 Flash-Lite** — same or comparable price class, materially better scores, and not imminently retired.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-10
- Method: Public web research of Artificial Analysis's Gemini 2.5 Flash-Lite model page (including its deprecation banner, technical specifications, pricing and performance telemetry), BenchLM's Gemini 2.5 Flash-Lite URL to confirm absence, Google Gemini API model documentation, BenchmarkList's model page and benchmark leaderboards, Model Beat / Epoch AI standardized evaluations, the Requesty Vertex provider card, and anotherwrapper; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Audit note — **the material finding is a sourcing correction, not a new benchmark.** The prior pass cited "**AA Intelligence Index 7**" beside a verified **Epoch AI Intelligence Index 3.0** as though both carried equal evidential weight. **AA displays its 7 with an asterisk and the label "Estimate (independent evaluation forthcoming)" — the model has never actually been run by AA**, and all of its per-benchmark rows are "Not publicly available." That estimate is therefore not credited as a measurement. **BenchLM has no page for this model** and its URL silently redirects to Gemini 2.5 Flash, which the prior pass noted as absent and which is confirmed today. Everything else in the prior report is retained and stands: this remains one of the best-sourced reports in the dataset, with ~30 third-party benchmark readings across BenchmarkList, Model Beat/Epoch AI, Requesty and anotherwrapper. **Two figures are revised on refreshed AA telemetry: 283.6 → 266.4 t/s and 0.30 → 0.32 s TTFT**, both marginally worse and neither material. The **deprecation is now confirmed with a named successor** (Gemini 2.5 Flash-Lite Preview, Sep '25) and the prior pass's aggregator-reported **2026-10-16 Gemini API retirement date** is flagged for verification against Google's own notices. **The unresolved LiveCodeBench conflict (59.3% vs 33.7%) is carried forward rather than averaged**, as it was in the prior pass — that was the right treatment and remains so. Search-provider rate limiting (HTTP 429) persisted, so evidence came from three direct primary retrievals (AA, BenchLM, Google documentation) plus cited leaderboards rather than three discrete searches.
- Future sources: add a new file next to this one, e.g. `Gemini_2_5_FL_Recheck.md`, using the same headings.