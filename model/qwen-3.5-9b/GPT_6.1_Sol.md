# Qwen3.5-9B — findings by GPT 6.1 Sol

- Source: Alibaba Qwen / `Qwen/Qwen3.5-9B`,post-trained reasoning model,not Base.
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: [model-comparison.md](../../model-comparison.md)
- Cross-model signed log: [model-findings.md](../../model-findings.md)

## Model card

- **Name / architecture:** Qwen3.5-9B,**dense9B language model** plus vision encoder,32layers,hybrid Gated DeltaNet/full attention,FFN intermediate12,288 and MTP;not an MoE despite generic family highlights. AA9.65B accounting differs from the language-model label. Apache2.0 weights;not the separate9B-Base.[1][2]
- **Description / access:** Small general multimodal reasoning model,official **`Qwen/Qwen3.5-9B`**,self-hosted OpenAI-compatible API;current exact gateway **`qwen/qwen3.5-9b`**. Backend **`qwen/qwen3.5-9b-20260310`** versus evaluator release **2026-03-02** are distinct metadata milestones,not proof of byte-identical historical serving. Exact cutoff unknown. No authenticated inference or exact free Zen route verified.[1][2][3]
- **Context / output:** **262,144 native**,optional **YaRN1,010,000/factor4** with potential short-text degradation. Actual routes remain262K,completion **65,536 Darkbloom /81,920 DeepInfra /235,929 SiliconFlow,Parasail,Together**,provider-specific shared-budget limits rather than native guaranteed outputs.[1][3]
- **Modalities / modes / tools:** **Text,image,video→text**,no native audio/generated media. Thinking default,disable through template flag;general thinking **temperature1/top-p0.95/top-k20**,precise coding0.6/top-p0.95;recommended output32,768 normally/81,920 on hard competitions. Template omits historical thought content;long-video performance depends on processor/sampling configuration. All inspected routes exceptParasail list tools/tool_choice.[1][3]
- **Pricing (2026-10-21):** Actual **DeepInfraBF16 andSiliconFlowFP8 $0.10 input/$0.15 output per1M**;DarkbloomFP4 **$0.08/$0.13/cache$0.04**;ParasailBF16$0.10/$0.25,Together$0.17/$0.25. Cheapest tariff and full-precision deployment are different options. No current$0 tariff established;self-hosting requires hardware.[3]

### Raw benchmarks found

**Attribution:** Exact9B primary language column **index5**,vision column **index4**—different table layouts were checked,not assumed aligned. Tau2 airline fixes and MathVision fixed boxed-answer prompt preserved;CI/no-CI figures not combined. AA selected **Reasoning UUID `2d28a13a-096e-475a-beb8-26bbd1c7d51c`**,current **Index11.196 measured**,not estimated.[1][2]

Agent / coding:

- Vendor **BFCL-v4 66.1% /Tau2 79.1% /VITA29.8% /DeepPlanning18.0%**. Independent AA **Tau2 86.84% /Tau3-Banking7.01% /TB2.1 29.21% /TB4 0.51% /IFBench66.73%**;versions/subsets differ. API-tool compatibility does not establish high autonomous task success.[1][2]
- AA **GDPval419.52 Elo /Briefcase340.67 Elo,7.98% rubric pass /AutomationBench partial1.05%**. No verified exact Claw-Eval/ClawProBench/MCP Atlas/Toolathlon/SWE Atlas found.[2]
- Vendor **LiveCodeBench v6 65.6% /OJBench29.2%**;independent AA **SciCode29.51%**. No verified exact SWE Verified/DeepSWE/Vibe Code score found;larger sibling repair numbers are not imported.[1][2]

Reasoning / knowledge:

- Vendor **GPQA81.7% /MMLU-Pro82.5% /HMMT Feb2025 83.2%,Nov82.9% /PolyMATH57.3%**. Independent AA **GPQA80.61% /HLE14.92% /CritPt0.29%**;good knowledge exams coexist with weak novel hard-science/research outcomes.[1][2]
- AA **Omniscience accuracy16.42% /hallucination83.61% /reliability−53.4667**. Hallucination lower better,different denominator;no selected AIME value found.[2]

Context / multimodal / efficiency:

- Vendor **AA-LCR63.0% /LongBench v2 55.2%**;independent AA **LCR70.00%**. No verified full1M near-perfect retrieval,MRCR or current1M route;extension capacity is not retention.[1][2][3]
- Vendor **MMMU-Pro70.1% /MathVista85.7% /CharXiv73.0% /OmniDocBench1.5 87.7 reported score /MMLongBench-Doc57.7% /VideoMME78.4% without,84.5% with subtitles /ScreenSpot-Pro65.2% /OSWorld-Verified41.8%**. Independent AA **MMMU-Pro69.25% /GDP.pdf6.6%**;high page-perception scores do not imply reliable end-to-end document artifacts.[1][2]
- AA median **69.29tokens/s /1.80s first chunk**,canonical output **215.28M/reasoning191.50M** tokens. Weighted **$0.2126/task**,TB4 **$1.0499/task** with0.51% success. Cheap token prices can coexist with long looping/failing trajectories;these evaluator costs use recorded reference pricing,not guaranteed current route bills.[2][3]

### Normalized scores (1–100)

- **Tool use: 42/100.** Useful simple tools and screenshot actions,capped by banking7.01%,weak terminal/new-terminal and automation1.05%.[1][2]
- **Reasoning: 66/100.** Strong size-class independent GPQA/HLE and useful context reasoning,capped by CritPt0.29%,calibration and long reasoning overhead.[1][2]
- **Context window: 76/100.** Verified native/current262K tier;optional YaRN1M not treated as deployed/reliably retrieved1M.[1][3]
- **Multimodal: 81/100.** Genuine capable image/video/document input,capped by hard-perception/document-workflow limits,no audio and text-only output.[1][2]
- **Coding: 60/100.** Useful LCB generation with modest independent SciCode,capped by missing repository-repair validation and very weak terminal autonomy.[1][2]
- **Cost efficiency: 98/100.** Very low actual paid BF16/FP8 rates and modest dense size,capped by long reasoning/failure costs;no free hosted service assumed.[1][2][3]
- **Overall Score: 65/100.** Half-up mean `(42 + 66 + 76 + 81 + 60) / 5 = 65.0`;cost excluded. Best fit:inexpensive bounded visual/text sub-tasks and local experimentation,rather than persistent autonomous projects.

### Research trail and sources

Fresh Bing official-benchmark RSS query,Google independent query returning a JavaScript interstitial,and DuckDuckGo context/pricing query yielding provider/evaluator leads. Independently fetched exact9B card,selected correct different table-column indices,read footnotes/native/YaRN/mode guidance,and inspected exact measured AA/current gateway records. No peer or sibling benchmark substitution;March2 evaluator release andMarch10 serving tag remain distinct.

[1]: https://huggingface.co/Qwen/Qwen3.5-9B/raw/main/README.md "Exact dense9B architecture,own language/vision columns,footnotes,native/YaRN context and operating recipes"
[2]: https://artificialanalysis.ai/models/qwen3-5-9b "Exact selected Reasoning measured record,independent task/calibration/context/vision and runtime/cost"
[3]: https://openrouter.ai/api/v1/models/qwen/qwen3.5-9b/endpoints "Actual March10 backend,paid BF16/FP8/FP4 routes,limits and tool support"

---

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-21 UTC
- Method: Independent fresh searches,exact primary column/footnote inspection,selected independent evaluator and current paid-route verification. Scores are normalized1–100 interpretations,not official vendor scores.
- Future sources: add a separate signed file alongside this report using the same headings.
