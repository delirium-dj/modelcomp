# MiniMax M3.1 Flash Preview / released service — findings by GPT 6.1 Sol

- Source: MiniMax / released `MiniMax-M3.1-Flash`, current continuation of tracked preview entry.
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: [model-comparison.md](../../model-comparison.md)
- Cross-model signed log: [model-findings.md](../../model-findings.md)

## Model card

- **Name:** MiniMax M3.1 Flash, tracked under permanent `minimax-m3.1-flash-preview`. Publisher officially launched current serviceOctober19 and calls **Space Bunny an early version**, not proof that every stealth run used byte-identical released weights. This report scores current named service, not an independently frozen earlier preview.[1]
- **Short description:** Hosted multimodal reasoning/coding model with adaptive thinking and low-cost/free access. Fresh named-model independent evidence is stronger than inherited M3 or anonymous-preview claims.[1][2]
- **Provider / IDs:** Native **`MiniMax-M3.1-Flash`**, Anthropic-compatible `https://api.minimax.io/anthropic`, OpenAI-compatible `https://api.minimax.io/v1`, native docs also describe Responses effort. Actual free **`minimax/minimax-m3.1-flash:free`** gateway currently serves backend20261019; ordinary paid gateway record has **empty endpoints**. Zen **`opencode/minimax-m3.1-flash-free`** appears in successful live catalog and documented endpoint/pricing. No authenticated generation performed.[2][3][4][5][6]
- **Release / cutoff:** Primary/AA **2026-10-19**, Vals metadataOctober20/evaluationOctober20. Exact training cutoff unverified; dates describe publication/evaluation, not a new checkpoint inferred for every day.[1][7][8]
- **Context / output:** Primary **1,000,000 total context**, actual free gateway same/**524,288 advertised completion**, Vals settings524,288 but dated note262K. Zen registry records1M/512,000, not a native hard-cap proof. No additive full input/output or tested sustained524K generation assumed.[2][3][8][9]
- **Modalities / reasoning / tools:** Native **text/image/video → text**, no audio/non-text generation inherited from separate H3/speech/image products. **Thinking always on, default effort max**, low/medium/high/xhigh/max; none/disabled returns400. Native sampling fixed temp1/top-p.95; passed sampling values ignored. Interleaved reasoning/functions supported; preserve thinking/tool blocks. Free gateway guarantees auto tool choice but not every forced-name/required mode.[2][3][10]
- **Pricing (2026-10-21):** Native **$0.15 input/$0.60 output/$0.015 cache read per1M**, flat model-specific rate, not M3's long-prompt/priority tariff. Exact gateway/Zen **$0 input/output** verified; Zen says limited-time and **provider zero retention/no training** for this free lane. Those route-specific commitments do not prove identical terms for all other services. Rate/availability limits remain, not unlimited usage.[1][3][5][6][11]
- **Architecture / weights:** Parameter/active count/architecture/licence **not verified**. Publisher explicitly says **weights will be released later**. Native guide and Vals call it open-weight, while AA/registry markclosed; guessed HF candidate401 proves neither a released repository nor nonexistence. As of this review, no downloadable exact weight/licence artifact independently verified; M3's architecture/licence not inherited.[1][2][7][8][9]

### Raw benchmarks found

**Provenance:** Named-model AA exact UUID **`d49c8680-e29b-400e-9511-824f7ddebe07`**, October19/current index **measured**. Vals exact **`minimax/MiniMax-M3.1-flash`**, official MiniMax/temp1/top-p.95/**compute max**, with524K setting versus262K dated note retained. No anonymous Space Bunny or M3 predecessor scores counted as independent current measurements.[7][8]

Agent / tool use:

- Independent **AA TB4 25.76% /Terminal-Science3.33% /GDPval1457.69 Elo /Briefcase1473.90 Elo,47.80% rubric pass /AutomationBench partial72.52%**. Null Tau2/Tau3/TB2.1 not turned into zero.[7]
- Vals **TB4 25.25% /EMB v1.1 67.84% /Finance Agent v2.1 58.83% /Legal Research34.13% /Tax Agent32.14% /HLAB-Vals1.1 7.50%**. Stronger business task coverage coexists with weak scientific/legal tails.[8]
- Vendor **BankerToolBench76.2 /OSWorld V2 61.7 /Agents' Last Exam29.6 /CyberGym82%**. Source-reported, harness/metric details not independently reproduced here; OSWorldV2 is not an interchangeable Verified result. No verified exact Claw-Eval/ClawProBench/MCP-Atlas/Toolathlon/SWE Atlas QnA found.[1]

Reasoning / knowledge:

- Independent AA **HLE47.96% /CritPt22.29% /Index42.706 measured /LCR79.67%**. GPQA/AIME/IFBench selected fields null; no M3 or competitor numbers substituted.[7]
- AA **Omniscience accuracy56.20% /hallucination92.81% /reliability15.55**. High accuracy can coexist with poor abstention on remaining unknown questions; hallucination's denominator differs from total accuracy, so this is not93% of all responses necessarily false.[7]

Coding / multimodal / context:

- Vendor **DeepSWE v1.1 73.7%**, exact named release. Independent **SciCode53.36% AA /Vibe Code73.94% ±4.25 Vals**, with~25%hard-terminal completion. No independently verified exact SWE Verified/Pro/LiveCodeBench result adopted.[1][7][8]
- Independent AA **MMMU-Pro79.13% /GDP.pdf20.8%**. Native video formats and visual protocol verified separately; no native audio/media-output score inferred.[7][10]
- AA **LCR79.67%**, no verified ≥98% maximum1M MRCR/RULER. Million-token input capacity and large completion metadata do not establish full-window retention.[2][7]
- AA median **93.11tokens/s /1.38s first chunk**, **182.57M output/150.76M reasoning tokens**, weighted **$0.2201/task at paid list rates**. Vendor claims typical200+ and median170+TPS, not equivalent measurement setup. Long max-effort trajectories remain despite low tariff.[1][7]
- Vals current **$0.660/test /43min18s**, versus datedOctober20 **$4.46/test**; output-budget note/settings also differ. Unresolved cost/snapshot differences preserved rather than selecting a convenient “replicated” task bill. Its53.78%index is not AA42.706 or this report's Overall.[8]

### Normalized scores (1–100)

- **Tool use: 80/100.** Strong independently measured automation/professional delivery, capped by~25%hard terminal,3.33%scientific terminal and7.5%hard legal completion.[7][8]
- **Reasoning: 86/100.** Strong independent HLE/CritPt and measured broad index, capped by abstention/calibration, ordinary long-window reasoning and limited exact GPQA/AIME coverage.[7]
- **Context window: 95/100.** Primary/current free1M tier, capped by missing near-perfect maximum-window retrieval and untested large-output metadata.[2][3][7]
- **Multimodal: 84/100.** Genuine image/video input and strong visual/document evidence, capped by uneven difficult-PDF completion and no audio/non-text output.[7][10]
- **Coding: 85/100.** Strong vendor DeepSWE and independent SciCode/full-app evidence, capped by moderate hard-terminal success and missing independently verified repository-repair breadth.[1][7][8]
- **Cost efficiency: 100/100.** Exact current$0 routes under the project's tariff rule, with limited-time/rate/privacy scope retained; paid max-effort costs recorded separately.[3][5][6][11]
- **Overall Score: 86/100.** Half-up mean `(80 + 86 + 95 + 84 + 85) / 5 = 86.0`; cost excluded. Current released-service assessment within the existing preview record; particularly useful for low-cost multimodal coding/automation, not proof of identical earlier stealth behavior.

### Research trail and sources

Fresh Bing RSS exact official-benchmark query returned unrelated accounting/TV links; Google independent query an interstitial; DuckDuckGo exact weights/pricing led to real AA/free-provider sources. Fourth domain-focused query resolved current native invocation/pricing/protocol docs; their linked **actual launch blog** confirmed October19, early Space Bunny lineage and weights pending. Initial guessed news URL404/HF401 not mistaken for absent model. Current native docs, successful live Zen catalog/privacy, actual free versus empty ordinary gateway, selected AA and exact Vals inspected; open-weight/budget/cost inconsistencies retained. No peer/M3/anonymous benchmark inheritance.

[1]: https://www.minimax.io/blog/minimax-m31f "October19 actual launch,Space Bunny early-version statement,exact named vendor benchmarks/flat tariff and weights pending"
[2]: https://platform.minimax.io/docs/guides/text-generation "Primary exact model1M,protocol bases,always-on thinking/default max and effort controls"
[3]: https://openrouter.ai/api/v1/models/minimax/minimax-m3.1-flash:free/endpoints "Actual zero-price October19 backend,1M/524288 and route tool-choice limitations"
[4]: https://openrouter.ai/api/v1/models/minimax/minimax-m3.1-flash/endpoints "Ordinary named record has empty endpoints; distinct from active free entry"
[5]: https://opencode.ai/inference/v1/models "Successful live catalog contains minimax-m3.1-flash-free"
[6]: https://opencode.ai/docs/zen/ "Exact documented free ID/endpoint/pricing and limited-time zero-retention/no-training provider claim"
[7]: https://artificialanalysis.ai/models/minimax-m3-1-flash "Exact named measured current record,advanced tasks/calibration/vision/runtime/token/task-cost evidence"
[8]: https://www.vals.ai/models/minimax_MiniMax-M3.1-flash "Exact native max independent suite,output-budget and dated-versus-current cost discrepancy"
[9]: https://models.dev/api.json "External exact native/Zen registry records,closed/open status and route-specific512000 output metadata"
[10]: https://platform.minimax.io/docs/api-reference/text-openai-api "Native image/video formats,no audio,fixed sampling,interleaved thinking and none-effort rejection"
[11]: https://platform.minimax.io/docs/guides/pricing-paygo "Exact named model$0.15/$0.60/$0.015,distinct from predecessor long-context/priority rows"

---

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-21 UTC
- Method: Independent fresh searches,primary actual launch/native protocol/pricing and live free-route/catalog verification,exact named independent evaluator comparison. Scores assess the current released service,are normalized1–100 interpretations,not official vendor scores or a byte-identity claim about earlier preview weights.
- Future sources: add a separate signed file alongside this report using the same headings.
