# Gemini 1.5 Pro — findings by GPT 6.1 Sol

- Source: Google DeepMind / September2024 `gemini-1.5-pro-002`; historical, partially provisional assessment.
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: [model-comparison.md](../../model-comparison.md)
- Cross-model signed log: [model-findings.md](../../model-findings.md)

## Model card

- **Name:** Gemini1.5 Pro, assessed as **002 September2024**. Earlier001/experimental revisions and chat-optimized variants are not silently interchangeable.[1][2]
- **Short description:** Historical long-context multimodal model for document/audio/video understanding and code generation; not a modern thinking model.[1][2][3]
- **Provider / IDs / lifecycle:** Native **`gemini-1.5-pro-002`**, formerly moving `gemini-1.5-pro`. **Cloud002 retired2025-09-24**, while **Gemini API changelog says1.5 family shut down2025-09-29**. These are different services/dates. Current **`google/gemini-pro-1.5`** gateway record has no endpoints; its older metadata is not a verified current002 deployment. No authenticated inference or current free Zen ID verified.[4][5][6]
- **Release / cutoff:** Exact002 **2024-09-24**, distinct from initial1.5 family announcements. AA reports August2024 knowledge cutoff but no exact primary002 cutoff was established; not treated as independently verified or copied from earlier family cards.[1][2]
- **Context / output:** Primary release confirms **2M tokens**, both exact evaluators agree; Vals **8,192 max output**. No surviving native API cap test after retirement. Capacity/output are distinct; do not add a full2M prompt and unlimited generation.[1][2][3]
- **Modalities / tools:** **Text/image/audio/video/PDF understanding → text**, with functions, structured generation, external code tools/caching in the historical product. Cloud's September24 notes explicitly document multimodal input with function calling in preview. No native audio/image generation or later adaptive-thinking features credited.[1][5][7]
- **Pricing:** Primary historical tariff effective **2024-10-01**: **≤128K prompts $1.25 input/$5 output per1M; >128K $2.50/$10**. Free developer launch access is historical, not a current$0 endpoint. No exact verified current cache/storage tariff; AA current price/runtime fields null. Vals' retained$1.25/$5 is the short-context historical rate, not a universal2M tariff.[1][2][3][8]
- **Architecture:** Proprietary; exact002 parameter/active count and open weights unverified. Family-level architectural descriptions are not parameter disclosures for this revision.

### Raw benchmarks found

**Provenance:** Exact **September Pro column** of original release image and pricing image directly inspected. AA selected **Sep'24 non-reasoning UUID `2ac96b67-f4f8-4c8c-ac08-c7510faa7bb9`**, current composite **estimated**. Vals exact002 Google/default sampling/**8,192 output**.[2][3][7][8]

Agent / tool use:

- Native function/structured-input capability verified in primary service release notes; **no verified exact002 task-success benchmark** for TB2.1/TB4, Tau2/Tau3, GDPval-AA, Claw-Eval/ClawProBench, Toolathlon/MCP-Atlas/SWE Atlas QnA found. Current BFCL official overall CSV has no1.5 Pro family row. Missing evidence is not measured failure; tool normalization is explicitly low-confidence/provisional.[2][5][9]
- No automated workflow success inferred from demonstrations of document processing, codebase Q&A or tool API support.[1]

Reasoning / knowledge:

- Vendor September002 **MMLU-Pro75.8% /GPQA Diamond59.1% /MATH86.5% /HiddenMath52.0%**. HiddenMath is a private competition-style holdout, not an AIME score.[7]
- Independent AA **GPQA58.89% /HLE4.64%**, **Index7.906 estimated**. CritPt/AIME/Omniscience absent, not zero. Vals **GPQA58.33% /MMLU-Pro75.29% /LegalBench69.08% /TaxEval59.48%**.[2][3]
- Vals displayed **60.88% aggregate** is its scoped suite, not this report's Overall or a universal intelligence percentage.[3]

Coding / multimodal / long context:

- Vendor **Natural2Code85.4%**, private HumanEval-like held-out Python/Java/C++/JS/Go benchmark. It is neither SWE repair nor independent HumanEval.[7]
- Independent AA **LiveCodeBench31.64%**, Vals **41.72%**, different evaluations. No verified exact SWE Verified/Pro, DeepSWE, SciCode, Vibe Code or persistent-app score found.[2][3]
- Vendor **MMMU65.9% /MathVista68.1% /Vibe-Eval53.9%**, the last is visual understanding with a Gemini Flash judge, **not Vibe Code**. Independent **MMMU-Pro55.03% AA /65.51% Vals**, MortgageTax56.76% Vals.[2][3][7]
- Vendor **FLEURS55-language WER6.7%, lower better /Video-MME78.6% /WMT23 score75.1**, not75.1% translation accuracy. Native media understanding does not imply non-text output.[7]
- Vendor **MRCR at1M82.6%**, older diagnostic benchmark, not MRCR v2 eight-needle or proof of near-perfect recall across2M. AA selected LCR null; no verified ≥98% complex maximum-window retention found.[2][7]
- Vals historical workload latency **10.53s**. Primary “2x output/3x lower latency” describes a dated service improvement, not current exact throughput. AA current runtime/task-cost fields empty.[1][2][3]

### Normalized scores (1–100)

- **Tool use: 35/100.** **Provisional, low confidence:** primary functions/structured workflows established, but no exact002 multi-step success figure found. This conservative editorial coverage assessment is not a measured35% failure/success rate.[1][5][9]
- **Reasoning: 57/100.** Useful bounded knowledge/math, capped by~59%GPQA,4.64%HLE and estimated low broad index.[2][3][7]
- **Context window: 95/100.** Verified2M capacity tier, capped by82.6% older1M MRCR,8K output and no near-perfect maximum-window complex retrieval.[1][2][3][7]
- **Multimodal: 87/100.** Quantified image/audio/video/document understanding, capped by older hard-vision performance and text-only output.[2][3][7]
- **Coding: 52/100.** Useful private bounded code and independent contest generation, capped by modest LCB and absent repair/full-project verification.[2][3][7]
- **Cost efficiency: 83/100.** Historical paid rates improved substantially, but long prompts double tariff; not a current purchase/free-service recommendation.[1][3][8]
- **Overall Score: 65/100.** Half-up mean `(35 + 57 + 95 + 87 + 52) / 5 = 65.2`; cost excluded. Provisional historical assessment, particularly tool axis; strongest evidence concerns long-context/media processing rather than autonomous engineering.

### Research trail and sources

Fresh Bing RSS exact002 benchmark query returned generic Gemini links; Google independent-benchmark query an interstitial; DuckDuckGo002 lifecycle/pricing supplied leads. A fourth exact002 BFCL query returned no results; official BFCL overall CSV independently checked with no1.5Pro row, not converted to zero. September24 primary release/full benchmark and tariff images, exact AA/Vals, native September29 shutdown changelog, Cloud September24 retirement table/release notes and empty gateway inspected. Guessed archived native model page404; current deprecation page omits1.5, so primary changelog used. No peer/001/successor results filled missing002 measurements.

[1]: https://developers.googleblog.com/en/updated-gemini-models-reduced-15-pro-pricing-increased-rate-limits-and-more/ "Exact002 September24 launch,2M input, historical free access and October1 price reduction"
[2]: https://artificialanalysis.ai/models/gemini-1-5-pro "Exact selected Sep'24 non-reasoning, estimated composite, independent metrics and absent current prices/runtime"
[3]: https://www.vals.ai/models/google_gemini-1.5-pro-002 "Exact002/default Google8K settings and independent code/knowledge/vision/latency"
[4]: https://ai.google.dev/gemini-api/docs/changelog?hl=en "Primary September29,2025 Gemini API1.5 shutdown entry"
[5]: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/release-notes?hl=en "September24,2024 multimodal functions/controlled generation; September24,2025 Cloud access discontinued"
[6]: https://openrouter.ai/api/v1/models/google/gemini-pro-1.5/endpoints "Historical family record, zero present endpoints; not a current002 pin"
[7]: https://storage.googleapis.com/gweb-developer-goog-blog-assets/images/image1_jBYRI1Z.original.png "Directly inspected September002 benchmark column, WER/visual/private-code/old-MRCR metric distinctions"
[8]: https://storage.googleapis.com/gweb-developer-goog-blog-assets/images/Gemini_Pro_Price_Chart_GRHV7Tk.original.png "Directly inspected ≤128K versus>128K tariff, effective October1,2024"
[9]: https://gorilla.cs.berkeley.edu/data_overall.csv "Successful current official BFCL overall-table check found no1.5Pro row; no unsupported numeric score imported"
[10]: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/learn/model-versions?hl=en "Primary exact002 September24,2025 Cloud retirement, distinct from Gemini API shutdown"

---

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-21 UTC
- Method: Independent fresh searches, primary exact002 release/images and service-specific lifecycle inspection, exact independent historical evaluators; tool-axis uncertainty explicitly retained. Scores are provisional historical normalized1–100 interpretations, not official vendor scores or current availability claims.
- Future sources: add a separate signed file alongside this report using the same headings.
