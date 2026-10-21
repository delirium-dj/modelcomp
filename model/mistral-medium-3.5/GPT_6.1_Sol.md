# Mistral Medium 3.5 — findings by GPT 6.1 Sol

- Source: Mistral AI / `mistralai/Mistral-Medium-3.5-128B`, high reasoning configuration.
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: [model-comparison.md](../../model-comparison.md)
- Cross-model signed log: [model-findings.md](../../model-findings.md)

## Model card

- **Name:** Mistral Medium3.5,128B merged model, not Medium3.1, Devstral2, Magistral or Large4. “Merged” refers to instruction/reasoning/coding capabilities in one weight set, not a runtime router.[1][2]
- **Short description:** Dense multimodal model for coding and agents with configurable reasoning and downloadable weights. Strong customer-service/repair results coexist with poor hard-agent and document outcomes.[1][3][4]
- **Provider / IDs:** Native **`mistral-medium-3-5`** (docs version26.04), moving alias **`mistral-medium-latest`**; native Chat Completions, Agents/Conversations and Batch. Exact current gateway **`mistralai/mistral-medium-3-5`**, backend **`mistralai/mistral-medium-3.5-20260430`**, native Mistral routes listed. Weights **`mistralai/Mistral-Medium-3.5-128B`**. No authenticated generation or model-pinned free Zen tariff verified.[1][2][5]
- **Release / revision:** Current primary model page says **April28,2026 /GA**; AA and Vals date **April29**, gateway snapshot April30. Linked product blog currently displays **May22** and “public preview.” Preserve these source/version/publication distinctions rather than inventing a reconciled same-day chronology. No exact verified training cutoff.[1][2][3][4][5]
- **Context / output:** Primary256K, exact config **262,144 positions**, live gateway262,144 total/**209,715 advertised completion**; Vals caps its run at **80,000 output**. Native independent max-output guarantee not established; provider metadata is not tested sustained generation or additive full input/output.[1][4][5][6]
- **Modalities / tools:** **Text/image → text**, image/file gateway input and document-QnA integration; no native audio/video/non-text generation established. Functions/JSON, structured output, predicted outputs, prefix, Batch and external agent tools documented. Weight card supports reasoning **none/high**, high recommended temp.7/top-p.95. App remote-agent orchestration is an extra harness, not every bare model call.[1][2][5]
- **Pricing (2026-10-21):** Primary **$1.50 input/$7.50 output/$0.15 cache read per1M**. Gateway standard agrees on input/output but advertises no implicit cache; EU route **$1.65/$8.25**. Model downloads are not free hosted inference or zero-cost128B self-hosting. Exact free-inference tariff not verified.[1][5][7]
- **Architecture / licence:** **128B dense**, exact config88 text layers/hidden12288,96Q/8KV heads, Pixtral48-layer vision, YaRN configuration. **Modified MIT**, not unmodified MIT/Apache: rights excluded if company/employer **global consolidated revenue exceeded$20M in the preceding month**, including derivatives/combined works; separate commercial arrangements or hosted service distinct. Weight card explicitly documents a corrected Transformers long-context config and affected pre-fix GGUFs; no assumption that an evaluator used the faulty revision.[2][6][8]

### Raw benchmarks found

**Provenance:** Primary full model card plus **both general and agentic chart images/footnotes directly inspected**. AA exact **high UUID `dd059b25-d82a-4ead-82a4-4adceaaec48b`**, matching weights/current index **measured**. Vals exact **`mistralai/mistral-medium-3.5`**, native API/temp.7/top-p.95/**high/80K output**, suite-specific settings may vary.[2][3][4][9][10]

Agent / tool use:

- Vendor **Tau3-Telecom91.4% /Airline72.0% /Retail76.1% /Banking13.4%**. Four trials, GPT5.2-low user simulator for applicable runs; banking chooses best of terminal/embedding agentic retrieval. Domains/settings are not a single overallTau3 rate.[2][10]
- Independent AA **Tau2 94.15% /Tau3-Banking15.05% /TB2.1 50.56% /TB4 0.00% measured /IFBench68.78%**. Vals **TB2.1 38.95% ±2.70**, not interchangeable with vendor's telecom or AA terminal version.[3][4]
- AA **GDPval760.86 Elo /Briefcase522.97 Elo,12.42% rubric pass /AutomationBench partial6.30% /AnalystAgent12.5% /EnterpriseOps-Gym33.72%**. Vals **EMB11.19% /Finance Agent v2 32.10% /Legal Research9.13% /Tax Agent4.48%** cap professional autonomy.[3][4]
- Vendor **BrowseComp48.6%**, explicitly uses **context management/discard-all at100K tokens**. No verified exact Claw-Eval/ClawProBench/Toolathlon/MCP-Atlas/SWE Atlas QnA found.[10]

Reasoning / knowledge:

- AA **GPQA74.85% /HLE13.76% /CritPt0.00%**, **Index14.189 measured**. Vals high **GPQA34.85% ±2.39 /MMLU-Pro75.33% /ProofBench9.00%**; large GPQA discrepancy unresolved, not averaged away or diagnosed without evidence.[3][4]
- Vendor **AIME2025 avg@16 86.3% /Beyond AIME avg@16 66.9% /Collie95.8% /AllenAI IFBench69.0%**, all maximum-reasoning settings. Avg@16 is repeated-run averaging, not automatic best-of16 selection; chart notes competitor truncation, limiting controlled comparison claims.[9]
- AA **Omniscience accuracy24.67% /hallucination81.59% /reliability−36.8** limits factual reliability; metrics use different denominators. Vals current32.69% aggregate differs from dated May1 **52.77%/#32 of46**, reflecting suite/snapshot context, not a stable universal rank.[3][4]

Coding / multimodal / context:

- Vendor **SWE Verified77.6% self-reported**, independent Vals **66.40% ±2.11**, versus dated May1 **64.7% Vals-Index subset**. Keep full current suite/subset and vendor scaffolds distinct; no same-denominator replication assumed.[2][4][10]
- AA **SciCode40.16%**, Vals **Vibe Code2.89% /Migration5.13%**. TB4 zero and low whole-app/migration completion constrain claims from stronger bounded issue repair. No verified exact SWE-Pro/DeepSWE or AA LiveCodeBench found.[3][4]
- AA **MMMU-Pro64.86% /GDP.pdf2.8%**, Vals **MortgageTax28.89% /SAGE37.61%**. Document pipeline/file acceptance is not broad native-media output or near-perfect visual extraction.[3][4][5]
- AA **LCR69.33% /MLCR10.0%**; no verified near-perfect full256K MRCR/RULER/GraphWalks. Known earlier config defect is documented but does not prove it caused these or Vals' scores.[2][3][6]
- AA median **154.59tokens/s /2.23s first chunk**, weighted **$0.5020/task**, **100.69M output/83.14M reasoning tokens**. TB4 alone **$2.1444/task** despitezero success. Vals workload latency **24min29s** is a different scope, not contradiction of decoding speed.[3][4]

### Normalized scores (1–100)

- **Tool use: 60/100.** Strong bounded customer-service calling and moderate terminal skills, capped by TB4 zero, low banking and weak professional deliverables.[3][4][10]
- **Reasoning: 65/100.** Useful AA GPQA/HLE and vendor math, capped by CritPt0, poor factual calibration, low broad index and unresolved ValsGPQA discrepancy.[3][4][9]
- **Context window: 76/100.** Exact262K configuration/serving tier, capped by ordinary LCR/MLCR, absent near-perfect retention and revision-dependent local configuration.[2][3][5][6]
- **Multimodal: 73/100.** Genuine image/document understanding, capped by modest hard-vision/document results and no native audio/video/non-text output.[2][3][4]
- **Coding: 70/100.** Useful independently verified repairs and SciCode, capped by high vendor-versus-independent gap,2.89% apps/5.13% migration and modern-terminal zero.[2][3][4]
- **Cost efficiency: 79/100.** Moderate native paid tariff with caching, capped by heavy reasoning/task/failure cost and substantial128B local hardware requirements.[2][3][5][7]
- **Overall Score: 69/100.** Half-up mean `(60 + 65 + 76 + 73 + 70) / 5 = 68.8`; cost excluded. Best fit: bounded tool/repair work where native deployment or owned weights matter, with harder-agent/vision limitations retained.

### Research trail and sources

Fresh Bing RSS `"Mistral Medium3.5" benchmark official` returned unrelated Wikipedia links; Google independent-benchmark query an interstitial; DuckDuckGo exact weights/pricing query found actual sources. Initial dotted gateway, guessed release/weights and Vals URLs failed; actual **dash-separated gateway**, unsuffixed128B weights and **mistralai/dotted3.5 Vals** resolved. Full primary card/licence/current config, exact native pricing/model page, both publisher chart images and selected AA/Vals high settings inspected. Dates, GPQA discrepancy and earlier config fix recorded without invented resolution. No peer findings or Large/Devstral benchmarks used.

[1]: https://docs.mistral.ai/models/mistral-medium-3-5-26-04 "Native26.04/GA April28, model identifiers, features and standard tariff"
[2]: https://huggingface.co/mistralai/Mistral-Medium-3.5-128B/raw/main/README.md "Exact128B weight card, image/text only, none/high settings and documented long-context config correction"
[3]: https://artificialanalysis.ai/models/mistral-medium-3-5 "Exact selected high measured record, modern-task zeros, coding/calibration/context/runtime and task costs"
[4]: https://www.vals.ai/models/mistralai_mistral-medium-3.5 "Exact native-high/80K settings, independent repair/app/GPQA results and dated subset history"
[5]: https://openrouter.ai/api/v1/models/mistralai/mistral-medium-3-5/endpoints "Actual current native routes, April30 backend,262K/209715 claims, tools and regional prices"
[6]: https://huggingface.co/mistralai/Mistral-Medium-3.5-128B/raw/main/config.json "Current corrected262144-position,88-layer dense and vision configuration"
[7]: https://docs.mistral.ai/inference/pricing "Native Medium3.5-specific$1.50/$0.15 cached/$7.50 standard pricing"
[8]: https://huggingface.co/mistralai/Mistral-Medium-3.5-128B/raw/main/LICENSE "Direct Modified MIT licence: preceding-month$20M consolidated-revenue restriction includes derivatives"
[9]: https://huggingface.co/mistralai/Mistral-Medium-3.5-128B/resolve/main/images/image1.png "Inspected full general benchmark chart:avg@16/max reasoning and comparator truncation footnote"
[10]: https://huggingface.co/mistralai/Mistral-Medium-3.5-128B/resolve/main/images/image4.png "Inspected agentic chart:Tau3 domains/user-simulator/retrieval choices, self-reported repairs and100K BrowseComp context management"
[11]: https://mistral.ai/news/vibe-remote-agents-mistral-medium-3-5 "Linked product blog currently May22/public-preview wording; Vibe/Work-mode harness and model distinctions"

---

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-21 UTC
- Method: Independent fresh searches, complete primary card/licence and chart-footnote inspection, exact current config/pricing/provider and high-effort independent evaluator comparison. Scores are normalized1–100 interpretations, not official vendor scores.
- Future sources: add a separate signed file alongside this report using the same headings.
