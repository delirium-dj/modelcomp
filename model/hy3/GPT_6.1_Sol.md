# HY3 — findings by GPT 6.1 Sol

- Source: Tencent Hy / `tencent/Hy3`,July2026 final post-trained checkpoint.
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: [model-comparison.md](../../model-comparison.md)
- Cross-model signed log: [model-findings.md](../../model-findings.md)

## Model card

- **Identity / architecture:** Final **Hy3**,distinct from April Hy3-preview and Hy4. **295B/21B active backbone,additional3.8B MTP**,80layers,192experts/top8,GQA8KV heads. AA299B accounting is consistent with additional MTP,not another checkpoint. Downloadable BF16/FP8 under primary **Apache2.0**,confirmed licence file.[1][2][5]
- **Description / access:** Text-only reasoning/tool model for bounded coding,research and professional tasks. Official **`tencent/Hy3`**,OpenAI-compatible self-hosted **`hy3`**,actual gateway **`tencent/hy3`**,backend **`tencent/hy3-20260706`**. Native Tencent and other providers currently listed;no authenticated inference or exact free Zen route verified.[1][3]
- **Release / knowledge:** **2026-07-06** per exact AA/dated serving backend. No exact verified cutoff found;Hy3-preview/Hy4 dates are not substituted.[2][3]
- **Context / output:** Primary256K,config **262,144**,all inspected routes262,144. Output **128,000 Tencent/131,072 Atlas/235,929 Novita,GMICloud,Phala**,provider-advertised shared-context limits rather than primary universal guarantees. No1M context inherited from Hy4.[1][3][4]
- **Modalities / modes:** **Text→text**;no native image/audio/video. Primary default **`no_think`**,low/high options;highest reasoning used for primary benchmark chart and reasoning AA record. Recommended **temperature0.9/top-p1**;tool/structured-output parsers supported. Generic quantization-toolkit “multimodal” wording does not describe Hy3's input architecture.[1][3][6]
- **Pricing (2026-10-21):** Actual TencentFP8 **$0.132 input/$0.528 output/$0.033 cache per1M**,time-based override **$0.0825/$0.33/$0.020625** in its scheduled interval. Novita/GMICloud **$0.14/$0.58/$0.035**,Phala$0.15/$0.64/$0.04,AtlasFP8$0.20/$0.80/$0.05. No current$0 API tariff verified;Apache licence does not remove deployment cost.[3]

### Raw benchmarks found

**Attribution:** Full original final-Hy3 appendix image and detailed footnotes inspected,not a later Hy4 comparison rerun. Vendor highest effort;AA selected exact **UUID `b23e6c69-96e5-44c9-8f58-4b42e0c399d5`**,**Index25.297 measured**. Highest-effort results/latency are not default-no-think measurements.[1][2][6]

- **Tools:** Vendor **TB2.1 71.7%**,Terminus2/XML/**four-hour timeout/16CPU/32GB/max500episodes**. AA **TB2.1 64.42% /TB4 0.51% /Tau3-Banking22.89%**;Tau2 null. Version/scaffold/resource differences retained.[2][6]
- Vendor **MCP Atlas79.1%**,April2026/**500public tasks/100-tool-call budget/Gemini2.5Pro judge**;**Toolathlon48.5% /Apex25.6% pass@1 /ClawEval68.5% pass^3**. Claw uses internal harness/20260325 version/105queries/**Gemini3.5Flash judge**. Pass^3 is repeated reliability,not pass@3. **SkillsBench55.3% on79 self-contained text-only tasks**,mean over3runs.[6]
- AA **GDPval1066.59 Elo /Briefcase946.66 Elo,26.73% rubric pass /AutomationBench partial18.41%**. No verified exact independent ClawProBench or SWE Atlas result found;general agent successes are bounded by hard-terminal performance.[2]
- **Coding:** Vendor **SWE Verified78.0% /Multilingual75.8% /Pro57.9%**,swe-agent;**DeepSWE28.0%**,mini-swe-agent/**two-hour/8CPU/8GB/network-isolated**. Independent AA **SciCode48.61%**;no exact independent SWE/LCB/Vibe Code found. Family or later Hy4 values not imported.[2][6]
- **Reasoning:** Vendor **GPQA90.4% /HLE text-only37.0% no-tools,53.2% with tools /USAMO2026 72.0% /HorizonMath7.1% pass@12 /AA-LCR73.4%**. Tool-assisted search can self-summarize context;12-attempt math is not pass@1. Independent AA **GPQA89.70% /HLE33.46% /CritPt4.86% /LCR79.00%**.[2][6]
- **Calibration:** AA **Omniscience accuracy31.97% /hallucination74.13% /reliability−18.4667**. Vendor internal hallucination drop **12.5→5.4%** and multi-turn issue rate **17.4→7.9%** have different definitions/datasets;not the independent hallucination metric.[1][2]
- **Internal preference:** Publisher **270experts/2.67 out of4**,versus selected comparator2.51;internal workplace preference,not standardized pass rate or independent reproduction.[1]
- **Context / modality:** No verified near-perfect full256K retrieval;AA-LCR is not a1M capacity proof. AA **MMMU-Pro null/GDP.pdf11.2%**,tool-mediated documents,not native vision.[1][2][4]
- **Efficiency:** AA median **82.18tokens/s/2.84s first chunk**,output172.93M/reasoning157.49M tokens. Weighted **$0.0718/task**,TB4 **$0.4011/task/2,314.94s** with0.51% success. Cheap tokens do not guarantee short successful trajectories.[2]

### Normalized scores (1–100)

- **Tool use: 67/100.** Useful older terminal/banking and bounded professional work,capped by newer-terminal0.51% and mixed automation/reliability.[2][6]
- **Reasoning: 80/100.** Strong corroborated GPQA/HLE/LCR,capped by CritPt4.86%,calibration and effort dependence.[2][6]
- **Context window: 76/100.** Verified native/current262K class;no1M serving or near-perfect retention inferred.[1][3][4]
- **Multimodal: 15/100.** Explicit text-only architecture;tool documents/artifacts do not add native media understanding.[1][2][3]
- **Coding: 77/100.** Useful vendor repair and independent SciCode,capped by DeepSWE28%,weak newer terminal and missing independent persistent-app verification.[2][6]
- **Cost efficiency: 97/100.** Very low verified paid/cached rates,capped by substantial reasoning/runtime overhead and large local-memory footprint;no free inference assumed.[1][2][3]
- **Overall Score: 63/100.** Half-up mean `(67 + 80 + 76 + 15 + 77) / 5 = 63.0`;cost excluded. Best fit:low-cost text-only bounded engineering/research with explicitly high effort and external verification.

### Research trail and sources

Fresh Bing official HY3 query,Google final-model query returning an interstitial,and DuckDuckGo weights/benchmark query yielding exact primary/AA leads. Read actual final card/config/licence,visually inspected complete final benchmark image and footnotes,checked exact measured AA/current dated routes. Guessed exact Vals profile404;no preview/Hy4/peer research substituted.

[1]: https://huggingface.co/tencent/Hy3/raw/main/README.md "Final295B/21B plus3.8B MTP,default no_think,Apache,internal studies and operating guidance"
[2]: https://artificialanalysis.ai/models/hy3 "Exact final measured UUID and independent task/calibration/context/runtime/cost fields"
[3]: https://openrouter.ai/api/v1/models/tencent/hy3/endpoints "Actual July6 backend,paid/time-based rates,262K and provider output limits"
[4]: https://huggingface.co/tencent/Hy3/raw/main/config.json "Actual HYV3 causal text architecture,262,144positions,80layers/192experts"
[5]: https://huggingface.co/tencent/Hy3/raw/main/LICENSE "Exact Apache2.0 release licence"
[6]: https://huggingface.co/tencent/Hy3/resolve/main/assets/benchmark-appendix.png "Full final-versus-preview table and highest-effort,harness,resource,repeat,judge and context-management footnotes"

---

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-21 UTC
- Method: Independent fresh searches,exact final primary specification/licence and visual-methodology inspection,independent selected evaluator and live route verification. Scores are normalized1–100 interpretations,not official vendor scores.
- Future sources: add a separate signed file alongside this report using the same headings.
