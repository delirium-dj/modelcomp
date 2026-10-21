# Qwen3.5-27B — findings by GPT 6.1 Sol

- Source: Alibaba Qwen / `Qwen/Qwen3.5-27B`,original February2026 reasoning checkpoint.
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: [model-comparison.md](../../model-comparison.md)
- Cross-model signed log: [model-findings.md](../../model-findings.md)

## Model card

- **Name / architecture:** Qwen3.5-27B,**dense27B language model** with vision encoder,64layers and hybrid Gated DeltaNet/full attention; **not MoE**,despite family-level MoE language in the introduction. AA27.8B versus language-model27B is accounting,not a different checkpoint. Apache2.0 downloadable weights; no5B/10B active MoE count inherited.[1][2]
- **Description / access:** General image/video/text model with thinking and tools. Official **`Qwen/Qwen3.5-27B`**,self-hosted OpenAI-compatible serving,exact current gateway **`qwen/qwen3.5-27b`**,backend **`qwen/qwen3.5-27b-20260224`**. Current paid Alibaba,SiliconFlow,DeepInfra,AtlasCloud andNovita routes list tools;Phala's route does not. No authenticated inference/free Zen route verified.[1][3]
- **Release / knowledge:** **2026-02-24** perAA/dated gateway;exact cutoff unknown. AA's supersession by3.6-27B is evaluator lineage,not original weights/routes disappearing.[2][3]
- **Context / output:** **262,144 native**,explicit optional **YaRN1,010,000/factor4** with short-text degradation caveat. Actual routes remain262K,output **65,536 Alibaba/Atlas/Novita/Phala;81,920 DeepInfra;235,929 SiliconFlow**. Output advertisements are route-specific/shared-context caps,not additive to native context or proof of1M serving.[1][3]
- **Modalities / modes:** **Text,image,video→text**,no audio/non-text generation. Thinking default with disabling switch;general thinking **temperature1/top-p0.95/top-k20**,precise coding0.6/top-p0.95,normal output32,768 versus recommended hard-competition81,920. Primary template drops historical thought content;video sampling/processor configuration affects long-video understanding.[1]
- **Pricing (2026-10-21):** Actual **Alibaba$0.195 input/$1.56 output per1M**,SiliconFlowFP8$0.25/$2.00,DeepInfraFP8$0.26/$2.60;Atlas$0.27/$2.16/cache$0.27;Phala$0.30/$2.40/cache$0.03;NovitaBF16$0.30/$2.40. No exact current$0 inference tariff established;open licence does not remove hardware/service costs.[3]

### Raw benchmarks found

**Attribution:** Exact **27B column** in both primary full tables independently extracted,plus footnotes: Tau2 airline fixes;search-agent256K context folding;WideSearch no context management;MathVision fixed boxed-answer prompt;CI versus no-CI visual results not merged. AA selected **Reasoning UUID `169e47f5-3d4d-4ad4-8f8b-ab46f0c73f67`**,**Index22.899 estimated**,not a fully measured current composite.[1][2]

Agent / coding:

- Vendor **BFCL-v4 68.5% /Tau2 79.0% /VITA41.9% /DeepPlanning22.6% /TB2 41.6%**. AA independently **Tau2 93.86% /IFBench75.58%**;banking,terminal2.1/4,GDPval and automation fields null. Missing harder measurements are not zero or assumed success.[1][2]
- Vendor **SWE Verified72.4% /LCB v6 80.7% /FullStackBench English60.1% /OJBench40.1% /CodeForces1899**,the rating uses a vendor query set. No exact independent SWE/Vibe Code/DeepSWE/SciCode found in selected evaluator. No exact Claw-Eval/ClawProBench/MCP Atlas/Toolathlon/SWE Atlas score found;generation/repair results do not validate general office agents.[1][2]

Reasoning / knowledge:

- Vendor **GPQA85.5% /HLE CoT24.3%,with tools48.5% /MMLU-Pro86.1% /HMMT Feb2025 92.0% /PolyMATH71.2%**. Agentic HLE uses folding;it is not unaided reasoning or direct million-token retention.[1]
- Independent AA **GPQA85.76% /HLE23.91% /CritPt0.85% /Omniscience accuracy20.67%,hallucination81.49%,reliability−43.9833**. Hallucination lower better/different denominator;difficult research and calibration cap the strong exam profile. No selected AIME result found.[2]

Context / multimodal / speed:

- Vendor **AA-LCR66.1% /LongBench v2 60.6%**;independent AA **LCR77.67%**. No verified complex near-perfect full1M retrieval;current served262K and optional scaling remain distinct.[1][2][3]
- Vendor **MMMU-Pro75.0% /MathVista87.8% /CharXiv79.5% /OmniDocBench1.5 88.9 reported score /MMLongBench-Doc60.2% /VideoMME82.8% without,87.0% with subtitles /OSWorld-Verified56.2% /ScreenSpot-Pro70.3%**. Independent AA **MMMU-Pro75.03%**. OmniDoc score not relabelled edit distance;native image/video coverage does not add audio or generated media.[1][2]
- AA median **76.42tokens/s /5.62s first chunk**,exact reasoning configuration. No successful-task cost or whole-project latency established;paid provider precision/context/output differences remain operationally relevant.[2][3]

### Normalized scores (1–100)

- **Tool use: 56/100.** Strong basic Tau2 and useful visual/basic agent tasks,capped by vendor older-terminal41.6% and missing independent hard-terminal/professional success.[1][2]
- **Reasoning: 73/100.** Strong independent GPQA/HLE and retrieval,capped by CritPt0.85%,calibration and estimated rather than fully measured composite coverage.[1][2]
- **Context window: 76/100.** Native/current262K tier;optional YaRN1M does not establish deployed or reliable1M retention.[1][3]
- **Multimodal: 84/100.** Strong genuine image/video/document understanding,capped by narrower modalities,difficult long-doc performance and text-only output.[1][2]
- **Coding: 71/100.** Useful exact vendor SWE/LCB and bounded application evidence,capped by absent independent broad engineering/newer-terminal verification.[1][2]
- **Cost efficiency: 94/100.** Low actual paid Alibaba rate and open deployment options,capped by reasoning latency,dense-memory cost and provider-dependent tools/precision.[1][2][3]
- **Overall Score: 72/100.** Half-up mean `(56 + 73 + 76 + 84 + 71) / 5 = 72.0`;cost excluded. Best fit:bounded multimodal coding/reasoning,with independent validation of longer autonomous work.

### Research trail and sources

Three fresh exact27B searches:Bing official-benchmark RSS,Google independent-benchmark query returning a JavaScript interstitial,and DuckDuckGo context/pricing query yielding actual model/provider leads. Independently fetched exact27B primary card and selected only its own column from both full tables,plus architecture/footnotes/mode/YaRN guidance. Checked exact AA Reasoning record and actual current gateway routes. No peer reports or sibling scores used.

[1]: https://huggingface.co/Qwen/Qwen3.5-27B/raw/main/README.md "Exact dense architecture,27B columns and footnotes,native/YaRN context and mode recipes"
[2]: https://artificialanalysis.ai/models/qwen3-5-27b "Exact selected Reasoning UUID,estimated composite and independent benchmark/calibration/vision/speed fields"
[3]: https://openrouter.ai/api/v1/models/qwen/qwen3.5-27b/endpoints "Actual dated original backend,paid rates,route precision,shared-context/output and tools"

---

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-21 UTC
- Method: Independent fresh searches,exact primary table-column/footnote inspection,selected independent evaluator and current exact-route metadata. Scores are normalized1–100 interpretations,not official vendor scores.
- Future sources: add a separate signed file alongside this report using the same headings.
