# Mistral Large 4 — findings by GPT 6.1 Sol

- Source: Mistral AI / Mistral Large 4 Public Preview (v26.10)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Large 4
- **Short description:** General-purpose hybrid instruct/reasoning multimodal MoE, nicknamed Le Chonk, emphasizing coding and enterprise agents. This is the October2026 public preview, not Large2/3, Medium3.5 or a completed downloadable-weight release [S1,S2].
- **Provider / access:** Mistral Studio and native Chat Completions/Agents/Conversations APIs, with functions, structured output, document QnA and batching [S2]. OpenRouter exact route `mistralai/mistral-large-4-0`, advertised snapshot `mistralai/mistral-large-4-0-20261006` [S5]. Local `opencode/mistral-large-4` is not independently established as a live Zen route.
- **Release / knowledge:** **2026-10-06**, public preview [S1–S4]. No verified pretraining cutoff. Vendor says RL remains in flight and preview behavior can evolve; evaluations need dated snapshot/harness labels [S1].
- **IDs:** Documentation displays `mistral-large-4`; model-specific documentation path `mistral-large-4-0`; gateway route above [S2,S5]. No free Zen ID verified. A cheap promotional route is paid, not free.
- **Context window:** Official **1M**, actual gateway standard/ZDR **1,048,576 total /262,144 output** [S2,S5]. Regional `mistral/eu` lists **524,288 total** at the same output cap. AA evaluates/records **524,288**, Vals rounds its context512K and sets256,000 output [S3,S4]. These provider/evaluator differences do not establish a separate base model. Local131K/32K is unsupported by current exact-model evidence.
- **Modalities:** Text/image input, text output; function calling, structured output, document-QnA and platform agent tools documented [S1,S2,S5]. Vals reports no native file/video input; platform document processing is distinct from raw file modality [S4]. No native audio/video/non-text generation attributed.
- **Pricing (as of 2026-10-20):** Direct official standard **$1.36 input /$4.18 output /$0.14 cached per1M** [S2,S6]. Actual gateway `mistral/zdr` advertises **50% discount: $0.68/$2.09/$0.07**; regional `mistral/eu` **$0.748/$2.299/$0.077**, while standard `mistral` matches official rates [S5]. Promotional/region terms and context caps differ. AA's task costs use standard$1.36/$4.18, not the discounted route [S3].
- **Architecture / weights:** Official **1.05T total /52B active**, granular MoE plus **1.6B vision encoder** [S2]. AA records1000B/49B active [S3]; a review attributes49vs52 to excluded embeddings/output layers, but that definition was not separately confirmed in primary architecture materials [S7]. Vendor promises weights **by end of October** [S1]; no usable weight files/final licence verified as of this run. HF candidate returned401 and broad publisher search found older Large3, neither proof of released Large4 artifacts. Docs/Vals' “Open” labels describe the announced direction, while AA still marks `isOpenWeights:false` [S2–S4].

### Raw benchmarks found

Agent / tool use:

- Official **Terminal-Bench4.0 28.3%**, independent Vals **27.78% ±1.82**, high reasoning, temperature1/top-p0.95/max256,000 [S1,S4]. AA selected-model record gives **26.77%** [S3]; separate runs, not averaged into one accuracy.
- AA AutomationBench **59.90% objective/partial score**, GDPval-AA **1422.17 Elo**, AA-Briefcase **1391.97 Elo**, rubric pass45.15% [S3]. Launch quotes59.9 and rounded1393 [S1]. Objective completion, rubric pass and Elo are distinct metrics.
- Vals Finance Agent **v2.1 61.38% ±2.02**, Harvey's Legal Agent **v1.1 17.50% ±3.22**, rank5/23; EMBv1.1 **68.97% ±2.34**, legal research **31.73% ±3.23**, Tax Agent **30.39% ±3.31** [S4]. Specialist legal rank does not imply high absolute full-task reliability.
- Vendor Cybench **93%** on40 security exercises; CyberGym-E2E **82%** is a vendor attribution to an external evaluator [S1]. Security-competition/proof-and-patch results are not generic terminal or banking scores.
- No verified exact **TB2.1 /Tau3-Banking /Tau2 /Claw-Eval /ClawProBench /MCP-Atlas** score found. AA selected fields are null for these available legacy metrics [S3]; null is not zero.

Reasoning / knowledge:

- AA current **Intelligence Index v4.3.2 38.38**, measured, not estimated; **HLE35.03%**, **CritPt10.57%**, Omniscience accuracy **25.82%** /hallucination **41.95%**, reliability index **−5.3** [S3]. Low factual recall and negative reliability prevent equating coding strength with dependable specialist knowledge.
- Independent Vals ProofBenchv1.1 **10.00% ±3.02**, MysteryMechanism **12.16% ±2.20**, BioMysteryBench **67.04% ±2.67** [S4]. These test different scientific skills; no single frontier-science claim inferred.
- GPQA/AIME: **no verified public score found** in inspected exact-model evidence. AA GPQA field is null; do not import Large3/Medium figures.
- AA serving: **68.13 output tokens/s**, **1.65s first chunk**, approximately **200.10M** index output tokens, **177.80M reasoning**, **$1.134/task** at recorded standard prices [S3]. Short first-chunk latency is not short end-to-end task completion.

Coding:

- Vendor **DeepSWEv1.1 61.7%**, **SWE-Atlas-QnA59.4%**, **Coding Agent Index49.8**, TB4.0 **28.3%** [S1]. The QnA score measures repository questions, not patch resolution.
- AA SciCode **54.17%**, exact selected record [S3]. Vendor additionally cites SciCode-Verified leadership without a numeric prose result; no unviewed image value invented [S1].
- Independent Vals Vibe Code Benchv1.1 **78.40% ±3.55**, VCB1–100 **14.26% ±3.21**, Code Migration **30.56% ±4.22**, IOI **45.28% ±3.78**, SWE-bench Multimodal **33.13% ±2.15** [S4]. Good greenfield app generation does not establish persistent multi-stage engineering success.
- Vendor-commissioned Surge blind coding preference **3.74/5**, second of five, versus4.22 for Opus5 [S1]. Human output preference is not an independently replicated execution score.
- SWE Verified/SWE-Pro/LiveCodeBench: **no verified public score found** in inspected exact-model sources; no proxy substituted.

Long context:

- Primary1M and actual1,048,576 route verified; regional/evaluation524,288 explicitly qualified [S2–S5].
- AA-LCR **81.33%**, independent selected record [S3]. This document-reasoning suite is not proof of full1M retrieval. No verified MRCR/RULER or98%+ retrieval at512K+ found.

Multimodal:

- AA **MMMU-Pro76.42%**, **GDP.pdf18.6% all-pass**, independently measured [S3]. Vendor Dense200 grounding **42%** and image/document demos are separate tasks [S1].
- Independent Vals visual SWE **33.13%**, confirming some visual-engineering competence but substantial headroom [S4]. Document-QnA through the platform is distinguished from native file input; no audio/video credit assigned.

### Research trail and comparison

Fresh searches: [Bing official/card](https://www.bing.com/search?q=%22Mistral+Large+4%22+official+model+card&setlang=en&cc=us) returned no exact results; [Google independent review](https://www.google.com/search?q=%22Mistral+Large+4%22+independent+benchmark+review&hl=en) an interstitial; [DuckDuckGo pricing/context/evaluation](https://html.duckduckgo.com/html/?q=%22Mistral+Large+4%22+pricing+context+evaluation) returned usable official/gateway/evaluator/review leads. Directly inspected official launch/model/pricing, Vals, live provider metadata and AA's public **`currentModel` JSON**, UUID `34fc646a-0174-470e-9e62-d8df452210b3`, slug `mistral-large-4`. Fractions converted to percentages, Elo/index scales preserved.

The independently authored October9 Syntax Dispatch review explicitly disclaims hands-on testing [S7]. It quotes older Vals TB4 **22.73%**, financev2 **54.68%**, legal **15.83%**, and AA116tokens/s, versus current27.78%, newer financev2.1 61.38%, legalv1.1 17.50% and68.13tokens/s. Dates, versions and coverage differ; these are not established controlled model regressions/improvements. Its promotion pricing is corroborated for an actual discounted route, but current direct standard pricing remains double that. The1M-vs512K discrepancy is partly explained by regional routing; the evaluator cap is still separately recorded.

Most material corrections to local metadata: **1M instead of131K**, **image input instead of text-only**, **262K output route instead of32K**, and current standard/discounted price distinction. The future-weight promise is not represented as an already available Apache/MIT checkpoint. No peer findings were consulted.

### Normalized scores (1–100)

- **Tool use: 79/100.** Strong measured AutomationBench59.90% and useful deliverable Elo support enterprise orchestration; TB4~27%, legal full-task17.5 and missing banking/Claw evidence cap general autonomy [S1,S3,S4].
- **Reasoning: 80/100.** Measured AA38.38/HLE35.03/LCR81.33 support substantial reasoning, while CritPt10.57, ProofBench10 and negative Omniscience reliability cap broad scientific/factual claims [S3,S4].
- **Context window: 95/100.** Primary1M and actual1,048,576 route meet the capacity tier;524K regional/evaluator limits and absent full-window retrieval evidence preclude100 [S2–S5].
- **Multimodal: 80/100.** Native image understanding, document-QnA and measured vision/document scores support the image/document band; modest GDP.pdf/visual-SWE reliability, no native audio/video and text output cap breadth [S1–S4].
- **Coding: 85/100.** DeepSWE61.7/Atlas59.4/SciCode54.17 and independent Vibe78.4 establish strong coding; persistent-app14.26, migration30.56 and missing matched SWE-Pro/Verified constrain end-to-end confidence [S1,S3,S4].
- **Cost efficiency: 84/100.** Standard$1.36/$4.18 and verified half-price offer are attractive, but200M eval output tokens and standard$1.13/task show verbosity can erase nominal savings; serving costs/licence remain unverified for future self-hosting [S2,S3,S5,S6].
- **Overall Score: 84/100.** Half-up mean `(79 + 80 + 95 + 80 + 85) / 5 = 83.8 → 84`; cost excluded. Best fit: supervised document/coding and enterprise agents on a verified route, with preview/harness and future-weight status explicit.

### Sources

- [S1] https://mistral.ai/news/mistral-large-4/ — official October6 launch, exact prose benchmarks, ongoing preview and weights-by-end-of-month promise.
- [S2] https://docs.mistral.ai/models/mistral-large-4 and https://docs.mistral.ai/models/mistral-large-4-0 — primary1M/model architecture/native vision/features and standard prices.
- [S3] https://artificialanalysis.ai/models/mistral-large-4 — exact selected-model public hydration record, direct independent index/submetrics/costs/runtime and524,288 evaluation capacity.
- [S4] https://www.vals.ai/models/mistralai_mistral-large-4 — direct independent current results, high settings, uncertainty and512K evaluation context.
- [S5] https://openrouter.ai/api/v1/models/mistralai/mistral-large-4-0/endpoints — live standard/discounted/regional routes, actual context/output and pricing; no inference performed.
- [S6] https://docs.mistral.ai/inference/pricing — direct standard$1.36/$0.14/$4.18 table.
- [S7] https://www.syntaxdispatch.com/blog/mistral-large-4-review — dated secondary review; its historical snapshots compared, not counted as another measured run.
- [S8] https://benchlm.ai/models/mistral-large-4 — secondary discovery only, updated2026-10-20; aggregate61.58 is not this report's normalization.

---

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-20
- Method: Sequential independent research, at least three fresh search queries, primary launch/model/pricing, exact-model AA page-data extraction, Vals, provider API and dated-review comparison. No peer reports read. Scores are editorial normalized interpretations, not official benchmark values.
