# Qwen3.5-35B-A3B — findings by GPT 6.1 Sol

- Source: Alibaba Qwen / `Qwen/Qwen3.5-35B-A3B`,post-trained reasoning checkpoint.
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: [model-comparison.md](../../model-comparison.md)
- Cross-model signed log: [model-findings.md](../../model-findings.md)

## Model card

- **Identity / architecture:** **35B total/3B active** language model plus vision encoder,40layers,256experts/eight routed plus one shared,hybrid Gated DeltaNet/full attention and MTP. AA36B accounting not treated as another checkpoint. Apache2.0 weights,not separate35B-Base. Primary says hosted **Qwen3.5-Flash corresponds to these weights with extra production features**;its default1M/API tools are not silently imported into the explicit35B route.[1][2]
- **Access / dates:** Official **`Qwen/Qwen3.5-35B-A3B`**,self-hosted OpenAI-compatible API,actual gateway **`qwen/qwen3.5-35b-a3b`**,backend **`...-20260224`**;AA release **2026-02-24**. Cutoff unverified. AA supersession by3.6 is lineage,not loss of original current routes. No authenticated inference or exact free Zen route verified.[1][2][3]
- **Context / output:** **262,144 native**,optional **YaRN1,010,000/factor4**,static scaling may reduce short-text quality. Actual explicit35B routes262K,Venice256K. Output varies **16,384 Venice/32,768 Darkbloom/65,536 Alibaba/81,920 DeepInfra/235,929 other providers**;provider output/shared-context caps are not additive or universal.[1][3]
- **Modalities / thinking / tools:** **Text,image,video→text**,no native audio/generated media. Thinking default,toggle;general thinking **temperature1/top-p0.95/top-k20**,precise coding0.6/top-p0.95;recommended output32,768 normally/81,920 for hard competition problems. Supplied template excludes historical reasoning. Current DeepInfra/SiliconFlow paid-route metadata omits tools while several others list them.[1][3]
- **Pricing (2026-10-21):** Actual **DarkbloomFP4$0.065 input/$0.75 output/$0.0325 cache per1M**,DeepInfraFP8$0.14/$1.00/$0.05,ParasailFP8$0.15/$1.00/$0.05,Alibaba$0.1625/$1.30. Cheapest route/short output/precision differ from full model capabilities. No current$0 tariff assumed;weights still require infrastructure.[3]

### Raw benchmarks found

**Attribution:** Exact **35B-A3B column6** in both full primary tables and all relevant footnotes inspected. Vendor Tau2 airline fixes,search-agent256K context folding,WideSearch without management,MathVision fixed prompt,CI/no-CI visual results preserved. AA selected **Reasoning UUID `46d8315e-1630-463f-ab62-84185fa0faab`**,**Index19.330 estimated**,not a fully measured modern composite.[1][2]

- **Tools:** Vendor **BFCL-v4 67.3%/Tau2 81.2%/VITA31.9%/DeepPlanning22.8%/TB2 40.5%**;independent AA **Tau2 89.18%/IFBench72.52%**. AA banking,terminal2.1/4,GDPval/automation null;missing is not measured zero. No exact Claw-Eval/ClawProBench/MCP Atlas/Toolathlon/SWE Atlas found.[1][2]
- **Coding:** Vendor **SWE Verified69.2%/LCB v6 74.6%/FullStackBench English58.1%/OJBench36.0%/CodeForces2028** on vendor query set. No verified exact independent SWE/DeepSWE/Vibe Code/SciCode/modern-terminal result found in selected evaluator;no larger sibling scores transferred.[1][2]
- **Reasoning:** Vendor **GPQA84.2%/HLE CoT22.4%,with tools47.4%/MMLU-Pro85.3%/HMMT Feb2025 89.0%**. Independent AA **GPQA84.55%/HLE21.04%/CritPt0.86%**,Omniscience **accuracy20.13%/hallucination85.43%/reliability−48.1**. Hallucination lower better/different denominator;no selected AIME value found.[1][2]
- **Context:** Vendor **AA-LCR58.5%/LongBench v2 59.0%**,independent AA **LCR72.00%**;not verified near-perfect1M retrieval or proof the explicit35B hosted route serves1M. Hosted Flash correspondence remains a separate serving-contract distinction.[1][2][3]
- **Vision/video:** Vendor **MMMU-Pro75.1%/MathVista86.2%/OmniDocBench1.5 89.3 reported score/MMLongBench-Doc59.5%/VideoMME82.5% without,86.6% with subtitles/ScreenSpot-Pro68.6%/OSWorld-Verified54.5%/AndroidWorld71.1%**. Independent AA **MMMU-Pro72.66%**;not native audio or generated media.[1][2]
- **Efficiency:** AA median **142.40tokens/s/2.06s first chunk**. No exact successful-project cost established;cheap active computation does not remove total-weight memory or long reasoning cost.[2][3]

### Normalized scores (1–100)

- **Tool use: 54/100.** Strong basic Tau2 and visual agents,capped by vendor older-terminal40.5% and missing independent broad long-horizon validation.[1][2]
- **Reasoning: 71/100.** Strong corroborated knowledge/HLE,capped by CritPt0.86%,calibration and estimated composite coverage.[1][2]
- **Context window: 76/100.** Native/current explicit35B262K tier;optional scaling/hosted Flash1M not relabelled this route's reliable retention.[1][3]
- **Multimodal: 83/100.** Genuine strong image/video/document capability,capped by difficult long-doc/perception outcomes,no audio and text-only output.[1][2]
- **Coding: 68/100.** Useful vendor repair/contest/full-stack evidence,capped by middling terminal and missing exact independent persistent-project/scientific coding validation.[1][2]
- **Cost efficiency: 95/100.** Low actual paid rates and3B active computation,capped by precision/output/tool differences,reasoning overhead and total-weight hardware.[1][2][3]
- **Overall Score: 70/100.** Half-up mean `(54 + 71 + 76 + 83 + 68) / 5 = 70.4`;cost excluded. Best fit:bounded inexpensive multimodal coding/reasoning with explicit route limits.

### Research trail and sources

Fresh Bing official benchmark RSS,Google independent query returning an interstitial,and DuckDuckGo context/pricing query a202 challenge. Independently fetched exact35B card,selected correct own columns,read architecture,hosted-Flash correspondence,footnotes and YaRN/mode recipes;inspected exact AA/current paid routes. No peer,sibling or hosted-contract benchmark substitution.

[1]: https://huggingface.co/Qwen/Qwen3.5-35B-A3B/raw/main/README.md "Exact35B/3B architecture,own table columns,hosted-Flash correspondence,footnotes and native/YaRN/mode guidance"
[2]: https://artificialanalysis.ai/models/qwen3-5-35b-a3b "Exact selected Reasoning UUID,estimated composite and independent task/calibration/vision/context/speed"
[3]: https://openrouter.ai/api/v1/models/qwen/qwen3.5-35b-a3b/endpoints "Actual February24 backend,paid precision/output/tool differences and prices"

---

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-21 UTC
- Method: Independent fresh searches,exact primary column/footnote inspection,selected independent evaluator and actual paid-route metadata. Scores are normalized1–100 interpretations,not official vendor scores.
- Future sources: add a separate signed file alongside this report using the same headings.
