# Gemini 2.5 Flash-Lite — findings by GPT 6.1 Sol

- Source: Google / `gemini-2.5-flash-lite`, original June/July2025 model; non-thinking default.
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: [model-comparison.md](../../model-comparison.md)
- Cross-model signed log: [model-findings.md](../../model-findings.md)

## Model card

- **Name:** Gemini 2.5 Flash-Lite; distinct from full Flash, September2025 preview,2.0 Flash-Lite and3.1/3.5 Flash-Lite.
- **Short description:** Proprietary low-latency multimodal model for classification, extraction, translation and high-volume lightweight work. Optional thinking improves some tasks, but independent default-mode agent/reasoning performance is limited.[1][2][5]
- **Provider / IDs:** Native **`gemini-2.5-flash-lite`**, Gemini GenerateContent API; exact current gateway **`google/gemini-2.5-flash-lite`** lists AI Studio standard/Flex/Priority routes. **Cloud/Vertex retirement2026-10-20 is separate from Gemini API**, whose current docs explicitly say not deprecated/no shutdown announced, restricted to users who actively used2.5 previously. Do not promise new-project access or infer shutdown from AA's successor flag. No authenticated inference or current free Zen ID verified.[1][3][4][7]
- **Release / knowledge:** **June17,2025 preview; July22,2025 stable**, January2025 cutoff. Google explicitly says original preview and stable use the same underlying model; this does not equate the September preview.[1][2][8]
- **Context / output:** Native **1,048,576 input/65,536 output**; live gateway1,048,576 context/65,535 completion. Evaluator rounded1M/66K is not a larger exact limit; long-window task success is substantially below capacity.[1][4][6]
- **Modalities / tools / thinking:** **Text,image,video,audio,PDF → text**; no native audio/image generation or Live API. Function calling, structured output, search grounding, code execution, URL context and caching documented. **Thinking off by default**, optionally enabled; scores below preserve effort rather than attributing thinking results to default latency.[1][2][8]
- **Pricing (2026-10-21):** Native eligible free tier **$0 input/output**, quotas and **used to improve products: yes**; paid **$0.10 text/image/video input/$0.30 audio/$0.40 output including thought tokens**, cache **$0.01/$0.03 audio**, storage **$1/M tokens/hour**. Batch/Flex **$0.05/$0.15 audio/$0.20 output**. Paid data not used to improve products per pricing table. Gateway standard/Flex agree on token rates, Priority$0.18/$0.72; gateway Flex cache$0.005 is route metadata rather than the native page's$0.01. Grounding/storage billed separately; legacy-access restriction still applies to free tariff.[1][4][7]
- **Architecture:** Closed weights; exact parameter count not verified.[5]

### Raw benchmarks found

**Attribution:** Original primary June17 **06-17 non-thinking versus thinking columns**, full chart/footnotes visually inspected; July GA explicitly preserves underlying model. AA selected **Non-reasoning UUID `1d81aa1c-64c8-442a-9c41-81b37e407b91`**, index **estimated**, not a fully measured current composite. Vals exact **Nonthinking**, Google default provider/temperature1/max65,535; not the September successor.[2][5][6][8][9]

Agent / tool use:

- Independent AA **Tau2 19.01% /IFBench31.50%**; terminal2.1/4,banking,GDPval/automation fields null. Tool API support alone does not establish successful autonomy; no verified exact Claw-Eval/ClawProBench/MCP Atlas/Toolathlon score found.[5]
- Vendor SWE Verified agent scaffold **31.6% non-thinking single attempt /27.6% thinking single attempt**, versus **42.6%/44.9% multiple attempts**. Multiple-attempt recipe draws and re-scores trajectories using the model's own judgment; it is not single-attempt repair accuracy.[9]

Reasoning / coding:

- Vendor **GPQA64.6%/66.7%, HLE no-tools5.1%/6.9%, AIME2025 49.8%/63.1%**, non-thinking/thinking respectively. AA non-thinking **GPQA47.37% /HLE3.66% /AIME35.33% /CritPt0.00% measured**. Unresolved evaluator/prompt differences retained; measured zero differs from null.[5][9]
- AA **Intelligence Index6.669 estimated**, **Omniscience accuracy15.43% /hallucination87.76% /reliability−58.7833**. Hallucination lower is better and uses a different denominator; index estimate is not a measured frontier-equivalent intelligence score.[5]
- Vendor **LiveCodeBench33.7%/34.3%**, UI January1–May1,2025; **Aider Polyglot26.7%/27.1%**, average over three trials with non-default evaluation settings. Independent AA **LiveCodeBench40.00%**. No exact independent modern SWE/Vibe Code/DeepSWE/SciCode found; visual **Vibe-Eval is not Vibe Code**.[5][9]
- Vals **MedCode27.11% ±1.84 /MedScribe72.83% ±1.98 /SAGE27.53% ±3.12**, aggregate latency8.12s. These domain-specific text workflows are not broad autonomous coding measures.[6]

Long context / multimodal / speed:

- Vendor **MRCR v2 eight-needle at128K cumulative-average16.6%/30.6%; at1M pointwise4.1%/5.4%**, non-thinking/thinking. Harder eight-needle methodology differs from earlier MRCR tables. AA **LCR32.00%**; million-token input is not reliable full-window retrieval.[5][9]
- Vendor **MMMU72.9% both modes /Vibe-Eval51.3%/57.5%**, the latter uses Gemini as judge. AA harder **MMMU-Pro53.99%**. Broad verified media input supports coverage, while these results cap difficult perception quality; no dedicated exact audio/video benchmark found.[1][5][9]
- Vendor **SimpleQA10.7%/13.0%, FACTS Grounding84.1%/86.8%** illustrate ungrounded factuality versus supplied-evidence use. AA median **298.96tokens/s /0.321s first chunk**, specifically non-reasoning; optional thought mode and production batch/Flex do not inherit that exact latency.[5][9]

### Normalized scores (1–100)

- **Tool use: 36/100.** Real tool support and bounded repair, capped by Tau2 19.01%, weak instruction following and absent verified long-horizon tool success.[1][5][9]
- **Reasoning: 54/100.** Useful lightweight reasoning with optional thought uplift; weak independent HLE/GPQA, hard-science zero and poor factual calibration cap it.[5][9]
- **Context window: 95/100.** Verified1M-class input; MRCR4.1–5.4% at1M rules out near-perfect retrieval bonus.[1][5][9]
- **Multimodal: 86/100.** Genuine image/audio/video/PDF understanding; capped by modest hard visual scores, absent exact audio/video task validation and text-only output.[1][5][9]
- **Coding: 50/100.** Useful simple generation/editing, capped by single-attempt SWE27.6–31.6%, LCB33.7–40% and missing strong persistent-app evidence.[5][9]
- **Cost efficiency: 100/100.** Verified eligible native$0 tariff; quotas, legacy-user access and free-tier data use are explicit. Paid rates remain low, with separate storage/grounding costs.[1][7]
- **Overall Score: 64/100.** Half-up mean `(36 + 54 + 95 + 86 + 50) / 5 = 64.2`; cost excluded. Best fit: inexpensive fast multimodal extraction/classification with external validation, rather than difficult autonomous projects.

### Research trail and sources

Fresh Bing official-benchmark query returned generic Gemini links; Google independent query an interstitial; DuckDuckGo context/pricing/deprecation query found primary release leads. Full primary benchmark image and footnotes, June/July identity statement, current native model/pricing/deprecation pages, Cloud-specific retirement, exact AA non-reasoning and Vals profiles, and actual gateway routes inspected. Direct Node fetch recovered native docs after web-fetch transport errors; English query parameter resolved automatic locale redirects. No peer or successor benchmark substitution.

[1]: https://ai.google.dev/gemini-api/docs/models/gemini-2.5-flash-lite "Exact current stable model,legacy access,modalities,token limits and tools"
[2]: https://developers.googleblog.com/en/gemini-25-flash-lite-is-now-stable-and-generally-available/ "July22 GA,same original-preview model and modality-specific pricing"
[3]: https://cloud.google.com/vertex-ai/generative-ai/docs/models/gemini/2-5-flash-lite?hl=en "Cloud retirementOctober20,explicit distinction from Gemini API"
[4]: https://openrouter.ai/api/v1/models/google/gemini-2.5-flash-lite/endpoints "Actual standard,Flex and Priority AI Studio routes and limits"
[5]: https://artificialanalysis.ai/models/gemini-2-5-flash-lite "Exact Non-reasoning UUID,estimated index,measured benchmark fields and speed"
[6]: https://www.vals.ai/models/google_gemini-2.5-flash-lite "Exact Nonthinking profile,domain results,uncertainties and settings"
[7]: https://ai.google.dev/gemini-api/docs/pricing "Current free and paid tiers,data-use difference,media/cache/storage/tool costs"
[8]: https://developers.googleblog.com/en/gemini-2-5-thinking-model-updates/ "June17 preview,thinking off by default and original full benchmark image"
[9]: https://storage.googleapis.com/gweb-developer-goog-blog-assets/images/gemini_2-5_flash-lite2-0_flash_benchmarks_margi.original.png "Visually inspected complete non-thinking/thinking table,single versus multiple attempts,MRCR and evaluation footnotes"
[10]: https://ai.google.dev/gemini-api/docs/deprecations?hl=en "Stable2.5 not deprecated/no shutdown,September preview separately shutMarch31"

---

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-21 UTC
- Method: Independent fresh searches,full primary visual benchmark/methodology inspection,exact-effort independent evaluators and current native/gateway lifecycle/pricing checks. Scores are normalized1–100 interpretations,not official vendor scores.
- Future sources: add a separate signed file alongside this report using the same headings.
