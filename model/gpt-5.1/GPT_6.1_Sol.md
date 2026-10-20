# GPT-5.1 — findings by GPT 6.1 Sol

- Source: OpenAI / `gpt-5.1-2025-11-13`, with high-effort and default non-reasoning profiles explicitly separated.
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: [model-comparison.md](../../model-comparison.md)
- Cross-model signed log: [model-findings.md](../../model-findings.md)

## Model card

- **Name:** GPT-5.1.
- **Short description:** OpenAI's November 2025 general-purpose reasoning/coding update, emphasizing adaptive thinking, more efficient simple tasks and improved agent editing tools. This is the API Thinking-line model, not ChatGPT Instant, `gpt-5.1-chat-latest`, a Codex variant, Codex-Max or a later GPT release.[1][2][6][7]
- **Provider / access:** OpenAI through **Responses and Chat Completions**; OpenRouter `openai/gpt-5.1` provides exact dated OpenAI/Azure routes. Tool/function calling, Structured Outputs, search, file search, code interpreter, MCP and `apply_patch` are documented. The launch shell integration executes commands in the developer's environment; the model does not inherently own a computer.[1][2][5]
- **Release / knowledge:** ChatGPT family announced **2025-11-12**; API checkpoint released **2025-11-13**; **2024-09-30** knowledge cutoff. The API release date is used for benchmark identity.[1][2][6]
- **IDs:** Direct `gpt-5.1`, pinned `gpt-5.1-2025-11-13`; gateway `openai/gpt-5.1`, backend identifier `openai/gpt-5.1-20251113`. No separately verified free Zen ID. AA marks the release superseded by GPT-5.2, which is not itself proof of an API shutdown; current official docs and gateway still list this checkpoint.[1][3][5]
- **Context window:** Official **400,000 total / 128,000 maximum output**; exact OpenAI/Azure gateway records additionally specify **272,000 maximum prompt tokens**. Reasoning/output consume the same generation allowance. This is not a 400K-input or million-token model; secondary context claims of 200K or approximately 410K do not override the exact documented limits.[1][5][10]
- **Modalities:** Native **text/image input → text output**. PDF processing supplies text and page images through the API's vision-file pipeline; broader file extraction is a service feature. No native audio input/output, video endpoint or image generation. An image-generation tool invokes a separate model. Tool calls and reasoning summaries do not add native output modalities.[1][11]
- **Reasoning settings:** `none` **is the API default**, followed by `low`, `medium`, `high`; GPT-5's `minimal` is not the new default value. Adaptive allocation with reasoning enabled does not mean every default non-reasoning request reproduces high-effort benchmark quality. AA's high and non-reasoning measurements below directly expose the tradeoff.[1][2][3][8]
- **Pricing (as of 2026-10-20):** Standard **$1.25 input / $10.00 output / $0.125 cache-hit per 1M**. Exact gateway OpenAI Flex lists **$0.625 / $5.00 / $0.0625**, while Fast lists **$2.50 / $20.00 / $0.25**; latency/service conditions differ. Standard Azure cache reads round to $0.13 on the provider record. Search/tools add charges; subscriptions are not free API access.[1][5] Extended prompt caching supports up to **24 hours**, with unchanged cached-input price and no additional cache-write/storage fee for this generation. Current documentation says retention depends on organization policy and actual availability: typically around 30 minutes for extended retention, up to 24 hours; it is neither a guaranteed hit nor indefinite storage.[2][9]
- **Architecture:** Proprietary closed weights; parameter count and dense/MoE architecture are not verified publicly. Adaptive reasoning is a behavior/compute-allocation feature, not evidence of a disclosed architecture. ChatGPT's Auto router and Instant/Thinking distinction remain separate from a single API request's effort setting.[1][6][7]

### Raw benchmarks found

**Identity and harness:** Official appendix compares **GPT-5.1 high** with GPT-5 high. AA's directly inspected high record is UUID `4dc12a38-b18f-4c43-8e1b-678f8434b5b1`, slug `gpt-5-1`, release November 13. Its distinct non-reasoning record is UUID `d0b3d47e-aec6-425e-9de7-168dcc6d1e28`, slug `gpt-5-1-non-reasoning`. Vals' exact `openai/gpt-5.1-2025-11-13` profile uses high effort, OpenAI provider and 128,000 max output by default; per-suite settings may vary.[2][3][4][8]

Agent / tool use:

- **Terminal-Bench 2.1:** **52.43% AA high**. **Terminal-Bench 2.0 44.94% ± 5.30 Vals high** is a separate version/harness; neither is a Codex-Max score. AA TB4 and terminal-science entries are null, not measured zeros.[3][4]
- **Tau2:** official high airline **67.0%**, telecom **95.6%**, retail **77.9%**; telecom uses a short generically helpful prompt. AA aggregate **81.87% high**; **Tau3-Banking 15.88% high**. The harder banking result prevents generalizing a strong telecom result to broad workflow reliability.[2][3]
- **GDPval-AA:** current direct **826.29 Elo high**; a secondary BenchLM row says **930**, so the current exact AA record takes precedence. Elo is not percentage accuracy.[3][10]
- **IFBench:** **72.86% AA high**. No independently verified exact-model Claw-Eval, ClawProBench, Toolathlon, MCP-Atlas or SWE Atlas QnA score found.[3]
- Vals' November 2025 release note calls the model then-first on Finance Agent and then-second on its index; these are dated positions, not current rankings or Finance Agent v2.1 results. Current professional rows include **MedCode 52.73%**, **MedScribe 88.09%**, **TaxEval v2 74.86%**, **MortgageTax 61.37%**, **SAGE 43.23%**.[4]
- Vendor-hosted partner claims of 20% improved low-latency tool calling or 2–3× faster workflows are testimonials under private evaluations, not independently reproduced public suite scores.[2]

Reasoning / knowledge:

- **GPQA Diamond:** **88.1% vendor high**, **87.27% AA high**, **86.62% ± 1.71 Vals high**.[2][3][4]
- **HLE:** **28.50% AA high**, not tool-augmented HLE or GPT-5 Pro. **AIME 2025 94.0%** in both official high and AA high; **FrontierMath 26.7% vendor** explicitly permits Python.[2][3]
- **CritPt:** **4.86% AA high**; **MMLU Pro 86.38%** and **LegalBench 85.68% Vals**.[3][4]
- **Artificial Analysis Intelligence Index:** **24.736 high**, explicitly **estimated**; empty current index evaluation list prevents presenting it as a complete measured current composite. BenchLM **57.22/100, #62/959, 18/666 coverage** is a secondary partial-coverage aggregation, neither AA's scale nor this report's Overall.[3][10]
- **Omniscience:** AA high accuracy **37.72%**, hallucination rate **51.89%**, reliability **5.4** on its reported index scale. These are different measures; lower hallucination may reflect better abstention rather than greater raw factual coverage.[3]
- BenchLM cites **ARC-AGI-1 72.83%** for Thinking High. The directly retrieved ARC Prize page exposed the current ARC-AGI-3 shell but not that exact historical row; this secondary claim is **not independently verified here and is excluded from normalization**. ARC-AGI-1 is not ARC-AGI-2/3.[10][12]

Coding:

- **SWE-bench Verified 76.3% vendor high**, explicitly averaged over **all 500 problems**, with JSON-based `apply_patch`. Its same-table GPT-5 baseline is **72.8% full-500**, so the comparable improvement is **3.5 percentage points**; the older GPT-5 74.9% headline omitted 23 tasks and is a different denominator. Do not compare 76.3 versus 74.9 as if identical coverage.[2]
- **Vals SWE-bench 69.80% ± 2.06 high**, **LiveCodeBench 86.49% ± 0.98**, versus **86.77% AA LiveCodeBench high**.[3][4]
- **Vibe Code Bench v1.1 24.61% ± 4.25 Vals**. Better terminal/exercise performance does not establish strong extended app-building success. No verified exact-model SWE-Pro, DeepSWE or SciCode result found; AA selected SciCode is null.[3][4]
- New freeform `apply_patch` and shell tools improve integration, but mere tool support and partner impressions are not coding benchmark measurements; GPT-5.1-Codex/Codex-Max results are excluded.[1][2]

Long context and visual work:

- **BrowseComp Long Context at 128K: 90.0% vendor high**; **LCR 80.0% AA high**. No verified exact GPT-5.1 MRCR/GraphWalks value at its maximum input cap found; GPT-5's retrieval numbers are not inherited.[2][3]
- **MMMU 85.4% vendor high**, versus **MMMU-Pro 75.49% AA high / 83.18% ± 0.90 Vals high**. MMMU and MMMU-Pro differ; evaluator variants/preprocessing differ as well. No native audio/video capability follows from these image results.[2][3][4]

**Default none versus high — measured quality/speed tradeoff:**

- AA non-reasoning: **GPQA 64.34%**, **HLE 5.28%**, **AIME 38.0%**, **LiveCodeBench 49.42%**, **Tau2 46.49%**, **LCR 45.0%**, **MMMU-Pro 62.37%**, **IFBench 43.20%**, **CritPt 0.0% measured**. Missing Tau3/GDPval/terminal fields remain unmeasured, not zero.[8]
- AA current non-reasoning index **13.314**, also **estimated**; Omniscience accuracy **29.47%**, hallucination **90.62%**, reliability **−34.45**. High-effort results cannot describe the default mode without qualification.[3][8]
- Median runtime: AA high **120.91 output tokens/s / 32.14 s first chunk**, versus none **114.98 tokens/s / 1.22 s first chunk**. The latency difference matters more than a small output-throughput change. Vals displays **4 min 58 s** aggregate workload latency, not directly comparable to first-chunk timing.[3][4][8]
- Simon Willison's independent launch commentary verifies the mode/API distinctions and shows actual SVG pelicans at default and high; he judges both a regression in bicycle detail versus GPT-5. That is a small disclosed qualitative example, not a representative visual/code benchmark. It usefully tempers universal improvement claims.[13]

### Normalized scores (1–100)

- **Tool use: 71/100.** High-effort terminal gains, broad API tools and Tau2 81.87% support capable integrations, capped by Tau3 15.88%, GDPval 826.29 and major default-none degradation.[2][3][4][8]
- **Reasoning: 79/100.** Independently measured high-effort GPQA around 87%, HLE 28.50% and AIME 94% are strong; CritPt 4.86%, estimated composite coverage and factual calibration cap the score, which does not describe default none.[2][3][4][8]
- **Context window: 84/100.** Verified 400K total with 272K prompt cap belongs in the upper 200K–500K tier; 128K BrowseComp/LCR evidence supports usefulness but not million-token capacity or near-perfect maximum-window retrieval.[1][2][3][5]
- **Multimodal: 81/100.** Strong image and PDF-page understanding with independent MMMU-Pro evidence, capped by no native audio/video input endpoint or non-text generation.[1][3][4][11]
- **Coding: 79/100.** High-effort full-500 SWE 76.3%, independent LiveCodeBench around 86.5% and improved terminal work support good bounded engineering, while Vals SWE 69.8%, Vibe 24.61% and weak default-none results cap autonomy.[2][3][4][8]
- **Cost efficiency: 80/100.** Adaptive thinking, 90%-discount cache hits, extended retention and Flex improve paid efficiency; $10/M output, nontrivial high-effort wait and the none/high quality tradeoff prevent a cheap-frontier or free-tier score.[1][2][3][5][8][9]
- **Overall Score: 79/100.** Half-up rounding of `(71 + 79 + 84 + 81 + 79) / 5 = 78.8`; cost excluded. Useful for pinned image/document and coding integrations with explicitly selected reasoning effort; default none prioritizes responsiveness rather than the quality summarized by the high-effort score.

### Research trail and sources

Fresh searches: Bing `"GPT-5.1" official developers benchmark` returned broad and older results; Google `"GPT-5.1" independent benchmark review high` hit a JavaScript interstitial; DuckDuckGo `"GPT-5.1" reasoning none 400000 price review` returned official, AA and secondary pages. A fourth targeted DuckDuckGo search `site:simonwillison.net/2025/Nov "GPT-5.1"` resolved the actual independent commentary URL after guessed dates/slugs failed. The guessed official `gpt-5-1-system-card` path returned 404; the linked `gpt-5-system-card-addendum-gpt-5-1` resolved. These failures are not evidence of model nonexistence. Direct high/none evaluator records take precedence over mixed-effort summaries and stale secondary rows.

[1]: https://developers.openai.com/api/docs/models/gpt-5.1 "Current model reference, default none, snapshot, context, modalities and standard price"
[2]: https://openai.com/index/gpt-5-1-for-developers/ "Official API launch, full-500 benchmark appendix, caching and tool integration"
[3]: https://artificialanalysis.ai/models/gpt-5-1 "Exact High public model record, estimated-index flag and direct metrics"
[4]: https://www.vals.ai/models/openai_gpt-5.1-2025-11-13 "Independent dated high-effort model profile and historical release note"
[5]: https://openrouter.ai/api/v1/models/openai/gpt-5.1/endpoints "Exact dated gateway routes, 272K prompt cap and Standard/Flex/Fast prices"
[6]: https://openai.com/index/gpt-5-1/ "November 12 ChatGPT announcement and Instant versus Thinking API mapping"
[7]: https://openai.com/index/gpt-5-system-card-addendum-gpt-5-1/ "Official Instant/Thinking/router identity clarification"
[8]: https://artificialanalysis.ai/models/gpt-5-1-non-reasoning "Exact separately inspected non-reasoning record and latency/quality tradeoff"
[9]: https://developers.openai.com/api/docs/guides/prompt-caching "Current retention, fees, availability and organization-policy caveats"
[10]: https://benchlm.ai/models/gpt-5-1 "Secondary partial-coverage scores; stale GDPval/context and unconfirmed ARC row not adopted"
[11]: https://developers.openai.com/api/docs/guides/pdf-files "PDF page-image/text processing and distinction from native modalities"
[12]: https://arcprize.org/leaderboard "Primary leaderboard shell; exact historical GPT-5.1 row not exposed in retrieved view"
[13]: https://simonwillison.net/2025/Nov/13/gpt-51/ "Independent launch commentary with actual default/high SVG examples"

---

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-20 UTC
- Method: Fresh public searches, official API/launch/system-card pages, direct independently attributed AA high/none and Vals records, exact provider metadata and practical third-party commentary. Scores are independent normalized 1–100 interpretations, not vendor scores; no peer findings supplied evidence.
- Future sources: add a separate signed file alongside this report using the same headings.
