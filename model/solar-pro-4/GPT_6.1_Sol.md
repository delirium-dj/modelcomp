# Solar Pro 4 — findings by GPT 6.1 Sol

- Source: Upstage, native `solar-pro4`, snapshot `solar-pro4-260806`.
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: [model-comparison](../../model-comparison.md)
- Cross-model signed log: [model-findings](../../model-findings.md)

## Model card

- **Name:** Solar Pro 4. API spelling is **`solar-pro4`**, not the guessed `solar-pro-4` endpoint suffix.
- **Short description:** Upstage's proprietary text model for multi-document work, coding and tool-using agents; distinct from the openly downloadable Solar Open 2.[1][2]
- **Provider / access / IDs:** Native `https://api.upstage.ai/v1`, alias `solar-pro4`, pinned snapshot `solar-pro4-260806`, Chat Completions and Responses. Current OpenRouter **`upstage/solar-pro4`** exposes normal and ZDR Upstage routes, backend `20260810`, both status 0 with advertised 100% recent uptime. AA's release container uses `solar-pro-4-2026-09-18`; that different metadata label is not established as byte-identical to every other tag. No authenticated inference performed.[1][3][4][5]
- **Release / knowledge:** Native snapshot release **2026-08-06**; announcement **August 11**; AA launch article **August 12**. Native training cutoff **February 2026**; AA stores February 28, a more precise metadata value not independently established by the native month-only statement.[1][2][4][6]
- **Context window:** Native **512K / 128K output**; current gateway **524,288 / 131,072**. AA selected record says **512,000**. Historical article's **384K / 256K output** differs; current native/gateway contract is used for capacity scoring, with no silent historical-spec substitution.[1][3][4][6]
- **Modalities / controls:** **Text in/out**, functions, structured outputs and optional reasoning; document toolchains do not imply native vision. Crucial current native behavior: **omitted/null effort leaves reasoning OFF**; `none`/`minimal` off, `low` through `max` on. This supersedes the launch blog's “reasons by default” description. Reasoning tokens consume output budget; visible reasoning is returned separately.[2][5]
- **Architecture:** Proprietary, parameter counts undisclosed. No Solar Open 2/Pro 3 parameter count or open-weight license imported.[1]
- **Pricing (2026-10-22):** Native list **$0.30 input / $1.20 output / $0.06 cached input per 1M**. Current gateway **$0.15/$0.60/$0.03 cached**, explicitly **50% discounted**. The launch's 90% promotion ended September 10 and does not establish today's price. Native docs advertise a free browser Playground/demo; demo fetch returned 403, so no working unlimited free API is inferred and the scored price basis is the verified paid API.[1][2][3]
- **Privacy:** Native page states inputs are not used for training and not stored unless required for service delivery and explicitly stated. Routing/service terms still matter; a ZDR-labelled route is not an assertion about every hosting path.[1][3]

### Raw benchmarks found

**Independent current AA selected record** — UUID `15c4cbd7-b9aa-42c8-9ce5-5abbde0e6963`, profile **`solar-pro4`**:[4]

- **Terminal-Bench 2.1 57.3034%**, **Tau3 banking 23.2990%**, **GDPval-AA 1105.73 Elo**; **TB4.0 0.0%**, measured zero, not missing data. AutomationBench **13.5934% partial score**, not strict task completion.
- **GPQA Diamond 89.0909%**, **HLE 29.8424%**, **CritPt 6.2857%**, **SciCode 48.0324%**, **AA-LCR 70.6667%**, **GDP.pdf 7.0% all-pass**. The document benchmark does not add native image input. Current AA flags CritPt/SciCode under review.
- Omniscience index **0.25**, accuracy **19.4167%**, hallucination rate **23.7849%**. Lower hallucination partly reflects abstention, not broad factual mastery.
- **Current Intelligence Index is null**, despite `isEstimated: false`; no current numeric index is invented from that flag. LCB, MMMU, Tau2, task-cost and most modern-agent fields are also absent.
- Runtime **119.1169 output tokens/s**, **1.6600 s to first chunk** in AA's setup; not end-to-end completion latency across all workloads.

**Historical independent AA launch article, August 12**:[6]

- Reports **Intelligence Index 42** and **GDPval-AA v2 1277 Elo**, with older index/harness/specification context. These are real dated figures, not fabricated simply because the current record differs; neither is silently used as today's payload value.
- Article reports **~8.6 minutes per index task**, **43K output tokens per task**, and **~19% knowledge accuracy / ~24% hallucination rate**. Suite/task averages are not universal latency.

**Publisher launch comparison**, asterisks explicitly indicate in-house evaluations:[2]

- **SWE-bench Verified 70.6% in OpenHands**, **LiveCodeBench 87.8%**, **MCP-Atlas 61.4%**, **APEX-Agents 18.7%**, BrowseComp **49.2%**, MMLU-Pro **86.3%**, AIME 2026 **95.3%**. LCB version is not specified in the accessible table; no v6 label is invented.
- **Ko-GDPval 87.3**, KMMLU-Pro **79.2%**, Korean law KBL **77.5%**, Japanese Arena-Hard v2 **81.9%**. Ko-GDPval is an in-house rubric/composite score, not binary completion or English GDPval Elo.
- Launch AA-attributed TB2.1 **57.0%**, banking **23.0%**, LCR **71.0%** approximately match the independently inspected current fields. Blog's separate GDPval table value **38.8** is not labelled as Elo and is not reported as 38.8 Elo.

**Limits:** No exact independently verified SWE/LCB, Claw or multimodal task score found; guessed Vals profile returned 404. No ≥98% retention at 512K verified. The scores retain both historical and current measurements without assuming identical evaluator versions or rolling backend bytes.

### Normalized scores (1–100)

- **Tool use: 62/100.** Independent TB2.1 ~57%, banking ~23% and modest GDPval show useful older-generation agents; TB4 measured zero and weak business automation cap harder-task reliability.[4]
- **Reasoning: 80/100.** GPQA 89.09%, HLE 29.84% and LCR 70.67% support capable reasoning; low CritPt and knowledge accuracy constrain breadth.[4]
- **Context window: 88/100.** Verified current 512K/524K capacity between the 400K and million-token bands, without conflating capacity and retrieval.[1][3][4]
- **Multimodal: 15/100.** Actual model and route are text-only; Office/PDF workflows rely on tools.[1][3]
- **Coding: 74/100.** Vendor OpenHands SWE 70.6%, LCB 87.8% and independent SciCode 48.03% show practical coding, with weaker terminal/general-agent transfer and incomplete independent repository coverage.[2][4]
- **Cost efficiency: 96/100.** Current $0.15/$0.60 discounted API is inexpensive; native standard rates, reasoning-token consumption and uncertain future discounts remain relevant. Browser-demo advertising is not priced as an unlimited free API.[1][3][5]
- **Overall Score: 64/100.** Half-up mean `(62 + 80 + 88 + 15 + 74) / 5 = 63.8`; cost excluded. Best fit: affordable text-only document and coding agents using explicit reasoning settings.

### Fresh search trail and sources

- Bing RSS [`"Solar Pro 4" benchmark`](https://www.bing.com/search?format=rss&q=%22Solar+Pro+4%22+benchmark): unrelated Gmail pages.
- Google [`"Solar Pro 4" Upstage benchmark`](https://www.google.com/search?q=%22Solar+Pro+4%22+Upstage+benchmark): JavaScript/access interstitial.
- DuckDuckGo [`"Solar Pro 4" benchmark`](https://duckduckgo.com/html/?q=%22Solar+Pro+4%22+benchmark): real native/evaluator/gateway leads, revealing the actual **`solar-pro4`** profile/route spelling. Native current reasoning/version docs, historical article and current selected payload were independently checked; no peer findings consulted.

[1]: https://console.upstage.ai/docs/models/solar-pro-4
[2]: https://www.upstage.ai/blog/en/solar-pro-4
[3]: https://openrouter.ai/api/v1/models/upstage/solar-pro4/endpoints
[4]: https://artificialanalysis.ai/models/solar-pro4
[5]: https://console.upstage.ai/docs/capabilities/generate/reasoning
[6]: https://artificialanalysis.ai/articles/upstage-solar-pro-4

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-22
- Method: independent public-web research; native version/reasoning/pricing docs, exact evaluator payload, dated launch evidence and current gateway. Normalized scores are interpretations; conflicting dates/specs/historical metrics remain scoped.
