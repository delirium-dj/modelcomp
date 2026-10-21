# LongCat 2.0 — findings by GPT 6.1 Sol

- Source: Meituan / `meituan-longcat/LongCat-2.0`,post-trained text model.
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: [model-comparison.md](../../model-comparison.md)
- Cross-model signed log: [model-findings.md](../../model-findings.md)

## Model card

- **Identity / architecture:** LongCat-2.0,not April2.0-Preview,September2.5-Preview or Flash/Omni. **1.6T total/~48B active**,including **135B n-gram embedding parameters**,LongCat Sparse Attention/MoE/three-step MTP;large-scale training/serving on AI ASIC superpods per publisher. Downloadable weights under actual **MIT** licence,not a preview-only API.[1][5]
- **Access / dates:** Official weights **`meituan-longcat/LongCat-2.0`**,FP8 distribution,self-hosted GPU/NPU support;native **`LongCat-2.0`** API. AA release **2026-06-29**,primary platform release/billing **June30**. Current exact gateway **`meituan/longcat-2.0`**,backend **`...-20260720`**;backend date is not the original launch or proven identical historical revision. No authenticated inference or exact free Zen ID verified.[1][2][3][6]
- **Context / output:** Primary/native **1,048,576 shared context/131,072 output**,trained on1M-context data. Download config's scalar **262,144** coexists with **deepseek_yarn factor120/original8,192**;local serving configuration must be considered separately from the documented native1M service. Current Atlas gateway advertises **1,048,756/262,144**,including a180-token discrepancy against primary context;this metadata is not a measured additional extension or native output guarantee.[1][3][4][7]
- **Modalities / tools:** **Text→text only**,no native image/audio/video. Tools and reasoning enabled/disabled;weight template optionally **`save_reasoning_content=true`** retains all thoughts for performance. Native platform fixes temperature **1.0 thinking-on/0.7 off**,top-p0.95 default. Weight-template behavior and hosted parameter contract are distinguished.[1][3][7]
- **Knowledge:** Exact cutoff not verified;2.5 disclosures/speculation are not inherited.[1][2]
- **Pricing (2026-10-21):** Native **limited-time $0.30 input/$1.20 output/$0.006 cache per1M**. Exact AtlasFP8 route matches,explicit **60% discount**;AA's$0.75/$2.95/cache$0.015 reference is a different dated serving/evaluation rate. No verified free API tariff;consumer chat and MIT weights do not imply zero hosted/self-hosted costs.[2][3][8]

### Raw benchmarks found

**Attribution:** Full primary HTML table,exact LongCat2.0 column. Publisher says in-house unified harness unless starred comparison values cite other official reports;detailed task/turn/resource budgets not given in inspected card. AA selected **UUID `5c3bdc0d-abab-4526-8079-34de4089bb4a`**,**Index19.112 measured**. No2.0-Preview/2.5/peer results imported.[1][2]

- **Tools:** Vendor **TB2.1 70.8% /FORTE73.2% /BrowseComp79.9% /RWSearch78.8% /IFEval90.0%**. Independent AA **TB2.1 50.19% /TB4 0.00% measured /Tau3-Banking13.20% /GDPval869.76 Elo /Briefcase739.75 Elo,16.87% rubric pass /AutomationBench partial4.53%**. Version/scaffold gaps and mixed workflow success retained.[1][2]
- No exact independent Tau2/Claw-Eval/ClawProBench/MCP Atlas/Toolathlon/SWE Atlas result found. FORTE/search results are distinct benchmarks,not substitutes with those names.[1][2]
- **Coding:** Vendor **SWE-Pro59.5% /SWE Multilingual77.3%**,not Verified. Independent AA **SciCode36.34%**;no selected LCB/SWE Verified/DeepSWE/Vibe Code. Weak newer terminal and limited scientific coding cap general project autonomy.[1][2]
- **Reasoning:** Vendor **GPQA88.9% /IMO-AnswerBench81.8% /WritingBench83.8** on their reported scales. AA **GPQA77.98% /HLE33.69% /CritPt2.57%**,with a substantial unresolved vendor/independent GPQA gap. **Omniscience accuracy29.63% /hallucination75.39% /reliability−23.4167**;hallucination lower better/different denominator.[1][2]
- **Deployment validation:** SGLang's exact **LongCat2.0-FP8,8×B300,CUDA graph enabled** validation reports **GSM8K98.0% on200examples** and **95.89% on1,314examples**. Subset versus full test count/quantization retained;not a new BF16 general-knowledge result or1M retention test.[9]
- **Context / modality:** AA **LCR65.00%**,no verified near-perfect full1M retention or MRCR. **MMMU-Pro null/GDP.pdf6.4%** represents tool-mediated document work,not native vision. Trained context size is not task accuracy.[1][2][7]
- **Efficiency:** AA median **62.41tokens/s/2.68s first chunk**,output142.56M/reasoning126.70M tokens. Weighted **$0.1462/task**,Briefcase$0.3637/task/491.16s. These use recorded reference prices,not current discounted billing;cheap tokens/large capacity do not establish successful end-to-end autonomy.[2][3]

### Normalized scores (1–100)

- **Tool use: 60/100.** Useful bounded search/older terminals,capped by banking13.2%,weak automation and TB4 zero.[1][2]
- **Reasoning: 74/100.** Useful independent HLE/knowledge and validated basic math,capped by GPQA discrepancy,CritPt2.57%,calibration and retention.[1][2][9]
- **Context window: 95/100.** Primary/native1M and actual hosted1M-class route,with explicit config/provider-limit distinctions;no near-perfect-retention bonus.[1][3][4][7]
- **Multimodal: 15/100.** Explicit text-only model;tool artifacts are not media input.[1][2][3]
- **Coding: 73/100.** Useful vendor Pro/Multilingual repair,capped by moderate independent SciCode,missing persistent-app verification and newer-terminal failure.[1][2]
- **Cost efficiency: 94/100.** Low verified promotional native/gateway/cache rates,capped by discount uncertainty,reasoning overhead and very large local footprint.[1][2][3][8]
- **Overall Score: 63/100.** Half-up mean `(60 + 74 + 95 + 15 + 73) / 5 = 63.4`;cost excluded. Best fit:bounded text-only long-document/search/code work with external task validation.

### Research trail and sources

Fresh Bing official-benchmark RSS,Google independent query returning an interstitial,and DuckDuckGo exact model/weights query. Inspected full primary card/table,actual config/MIT licence,native dedicated pricing/parameter docs,exact measured AA/current gateway and independent FP8 serving validation. Primary blog returned a JavaScript shell and added no usable evaluation details;guessed exact Vals profile404. No peer/predecessor/2.5 scores used.

[1]: https://huggingface.co/meituan-longcat/LongCat-2.0/raw/main/README.md "Exact1.6T/48B including135B n-gram,full benchmark table,1M training and template modes"
[2]: https://artificialanalysis.ai/models/longcat-2-0 "Exact measured record,independent task/calibration/context/runtime/cost"
[3]: https://openrouter.ai/api/v1/models/meituan/longcat-2.0/endpoints "Actual July20 AtlasFP8 route,60% discounted tariff and differing context/output metadata"
[4]: https://huggingface.co/meituan-longcat/LongCat-2.0/raw/main/config.json "Actual262K scalar plus deepseek_yarn scaling configuration"
[5]: https://huggingface.co/meituan-longcat/LongCat-2.0/raw/main/LICENSE "Actual MIT weight licence"
[6]: https://longcat.chat/platform/docs/change-log "June30 native2.0 release/billing,distinct preview lifecycle"
[7]: https://longcat.chat/platform/docs/api/model-params "Primary shared1M/128K native2.0 limits and mode-dependent sampling"
[8]: https://longcat.chat/platform/docs/pricing/longcat-2.0 "Exact current limited-time native2.0 input/output/cache rate"
[9]: https://docs.sglang.io/cookbook/autoregressive/Meituan/LongCat-2.0 "Actual8×B300 FP8 serving validation,GSM8K sample counts and deployment topology"

---

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-21 UTC
- Method: Independent fresh searches,exact primary table/config/licence inspection,selected independent evaluator,FP8 deployment validation and current native/gateway checks. Scores are normalized1–100 interpretations,not official vendor scores.
- Future sources: add a separate signed file alongside this report using the same headings.
