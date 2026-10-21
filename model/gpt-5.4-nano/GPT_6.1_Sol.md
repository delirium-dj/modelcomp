# GPT-5.4 Nano — findings by GPT 6.1 Sol

- Source: OpenAI / `gpt-5.4-nano-2026-03-17`, xhigh evaluation distinct from default none.
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: [model-comparison.md](../../model-comparison.md)
- Cross-model signed log: [model-findings.md](../../model-findings.md)

## Model card

- **Name:** GPT-5.4 Nano, not Mini, full5.4, original5-Nano or successorLuna.
- **Short description:** Small proprietary image/text model for classification, extraction, ranking and bounded supporting agents. Deep-reasoning benchmark scores are atxhigh, not the low-latency default.[1][2]
- **Provider / IDs:** Native **`gpt-5.4-nano`**, fixed snapshot **`gpt-5.4-nano-2026-03-17`**, Responses/Chat Completions/Batch. Current exact **`openai/gpt-5.4-nano`** gateway lists OpenAI/Azure including Flex. AA supersession byLuna is evaluator lineage, not proof of shutdown when current native docs/routes remain. No authenticated inference/free Zen ID verified.[1][3][4]
- **Release / knowledge:** **2026-03-17**, cutoff **2025-08-31**, primary/AA agree.[1][2][3]
- **Context / output:** Primary **400,000 total/272,000 input/128,000 output**; current gateway400K/128K. Do not treat400K as maximum input plus another128K output.[1][4]
- **Modalities / thinking / tools:** **Text/image → text**, no native audio/video/media generation. **None default**, low/medium/high/xhigh supported. Functions/structured output, search/file tools, shell/code interpreter/patch/skills/MCP documented through Responses; image-generation tool invokes another model, not native image output. Computer-use is not listed as a supported built-in Nano tool despite a scaffolded OSWorld benchmark.[1][2]
- **Pricing (2026-10-21):** Standard per1M **$0.20 input/$1.25 output/$0.02 cache read**, region processing **+10%**. Exact OpenAI Flex route **$0.10/$0.625/$0.01**; standard Azure/OpenAI rates agree, AzureUS$0.22/$1.375. Tools separately billed; no verified$0 API tariff or consumer Mini free access inherited.[1][4]
- **Architecture:** Proprietary; exact parameter/active counts/open weights not verified.[1][3]

### Raw benchmarks found

**Attribution:** Full primary launch appendix exact **Nano xhigh** column. AA selected **Xhigh UUID `d4fc3f33-f2b0-4da1-88ee-f1f82bd4de31`**, March17/current composite **measured**. Default-none capability/latency not assumed equal to xhigh; document parsing exception explicitly none.[1][2][3]

Agent / tool use:

- Vendor **TB2.0 46.3% /Toolathlon35.5% /MCP Atlas56.1% /Tau2 Telecom92.5% /OSWorld-Verified39.0%**. Telecom subset is not allTau2; computer-use harness does not establish a built-in API action tool.[2]
- Independent AA **TB2.1 60.67% /TB4 0.51% /Tau2 76.02% /Tau3-Banking27.42% /IFBench75.92%**. Different terminal versions/recipes, not a common averaged accuracy.[3]
- AA **GDPval947.98 Elo /Briefcase673.76 Elo,14.62% rubric pass /AutomationBench partial5.96% /EnterpriseOps-Gym31.48%**. No verified exact Claw-Eval/ClawProBench/SWE Atlas Codebase QnA found; missing scientific-terminal fields are null.[3]

Reasoning / knowledge:

- Vendor **GPQA82.8% /HLE no-tools24.3%, with tools37.7%**. Independent AA **GPQA81.72% /HLE28.27% /CritPt9.25% /Index20.720 measured**; tool-assisted/full-suite differences not silently erased.[2][3]
- AA **Omniscience accuracy25.67% /hallucination74.17% /reliability−29.4667**; denominators differ, factual coverage/calibration remain limits. No exact AIME score found in selected record.[3]

Coding / vision / long context:

- Vendor **SWE-bench Pro Public52.4%**, not SWE Verified; independent **SciCode47.22% AA**. No verified exact LCB/SWE Verified/DeepSWE/Vibe Code score found; modern terminal0.51% caps broad project autonomy.[2][3]
- Vendor **MMMU-Pro66.1%, with Python69.5%**, **OmniDocBench1.5 edit distance0.2419 lower better**, explicitly **none effort**. AA **MMMU-Pro65.38% /GDP.pdf7.8%**. None-effort parsing is not anxhigh visual accuracy result.[2][3]
- Vendor **MRCR v2 eight-needle44.2% at64K–128K /33.1% at128K–256K**, **GraphWalks BFS73.4% /parents50.8% at0–128K**. AA **LCR76.67% /MLCR16.11%**. Nominal400K is not near-perfect long-window retrieval.[2][3]
- AA median **157.86tokens/s /55.69s first chunk**, **186.28M output/174.21M reasoning tokens**, weighted **$0.1831/task**; Briefcase alone$0.5881/task. Token-price savings can coexist with long xhigh startup/trajectory costs. Vendor latency graphics use offline production simulations, not controlled current-route measurements.[2][3]

### Normalized scores (1–100)

- **Tool use: 62/100.** Useful bounded tools/instructions and older-terminal competence, capped by TB4 0.51%, weak automation and modest banking/professional delivery.[2][3]
- **Reasoning: 74/100.** Strong inexpensive-model GPQA/HLE/CritPt, capped by factual calibration and expensive xhigh-versus-default-none dependence.[2][3]
- **Context window: 84/100.** Verified400K total tier, capped by272K input and degraded retrieval, not a guarantee of maximum-window quality.[1][2][3]
- **Multimodal: 72/100.** Genuine image/screenshot understanding, capped by hard-vision/document results and no native audio/video/non-text output.[1][2][3]
- **Coding: 73/100.** Useful Pro-public repair/SciCode, capped by missing persistent-app verification and very weak newer terminal results.[2][3]
- **Cost efficiency: 93/100.** Low native/cached/Flex rates, capped by long reasoning startup, usage/tool fees and failure overhead; no free inference assumed.[1][3][4]
- **Overall Score: 73/100.** Half-up mean `(62 + 74 + 84 + 72 + 73) / 5 = 73.0`; cost excluded. Best fit: bounded high-volume image/text/code tasks with explicit effort and retrieval expectations.

### Research trail and sources

Fresh Bing RSS exact-model official benchmark query returned generic OpenAI links; Google independent query an interstitial; DuckDuckGo context/price/reasoning found actual primary/provider leads and multiple effort variants. Primary model page/full launch appendix, exact selected AA xhigh and live OpenAI/Azure standard/Flex routes inspected; guessed Vals profile404, no unrelated model substituted. No peer/Mini/successor scores or claimed free consumer access used.

[1]: https://developers.openai.com/api/docs/models/gpt-5.4-nano "Exact snapshot,default none,400K/272K/128K,modalities/native tool list and standard/regional rates"
[2]: https://openai.com/index/introducing-gpt-5-4-mini-and-nano/ "Full exact Nano xhigh benchmark appendix,none parsing exception and simulated latency methodology"
[3]: https://artificialanalysis.ai/models/gpt-5-4-nano "Exact selected Xhigh measured record,independent task/calibration/context/vision/runtime/cost"
[4]: https://openrouter.ai/api/v1/models/openai/gpt-5.4-nano/endpoints "Actual OpenAI/Azure standard and explicit Flex route,March17 backend and paid pricing"

---

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-21 UTC
- Method: Independent fresh searches, complete primary exact-Nano appendix/specification and exact-effort independent evaluator/current provider comparison. Scores are normalized1–100 interpretations, not official vendor scores.
- Future sources: add a separate signed file alongside this report using the same headings.
