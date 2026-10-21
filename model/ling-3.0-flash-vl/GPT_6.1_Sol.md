# Ling 3.0 Flash VL — findings by GPT 6.1 Sol

- Source: inclusionAI / `inclusionAI/Ling-3.0-flash-VL`, thinking vision-language model.
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: [model-comparison.md](../../model-comparison.md)
- Cross-model signed log: [model-findings.md](../../model-findings.md)

## Model card

- **Name:** Ling3.0 Flash VL, not the text-only Flash parent, Flash Fin,3.1 or a quantization-specific checkpoint. General visual model, not a finance-specialist SKU.[1]
- **Short description:** Hybrid-attention MoE for image/video understanding, visual agents and coding. Parent capability inheritance is a publisher claim; this assessment uses actual VL measurements.[1][2]
- **Provider / IDs:** Exact weights **`inclusionAI/Ling-3.0-flash-VL`**, local SGLang/vLLM Chat Completions. Current gateway **`inclusionai/ling-3.0-flash-vl`** lists DeepInfra FP16/backend20260910, functions/structured output. Listing is verified, not authenticated inference; no free Zen ID verified.[1][3][4]
- **Release / cutoff:** AA release **2026-09-10** matches gateway snapshot and primary0910 artwork. HF repo **created2026-09-04** is repository metadata, not proof of weight-publication day; secondary September9 announcement claim not independently established. Exact training cutoff unverified.[1][2][3][5]
- **Context / output:** **131,072 native positions** in exact config; primary/cookbook document explicit **2×YaRN extension to262,144**, which AA evaluates/records. This is not unconditional native256K. Actual DeepInfra route **131,072 total/32,768 output**. Primary TB recipe also uses32K generation but does not establish a universal model output cap.[1][2][3][4][6]
- **Modalities / reasoning:** **Text/image/video → text**, temporal VideoRoPE, no native audio/non-text generation. Thinking on by default; can disable per template. Card summary suggests temp.6/top-p.95/top-k20, generation config and cookbook temp1/.95/20; TB explicitly temp1. Retain recipe differences rather than assuming one default in every deployment.[1][4][7]
- **Pricing (2026-10-21):** Exact paid DeepInfra per1M **$0.06 input/$0.18 output/$0.012 cache read**. AA price/speed fields absent, not evidence of no hosted service or zero cost. No verified free inference tariff;124B BF16 deployment has substantial memory requirements despite5.5B active compute.[2][3][4]
- **Architecture / licence:** Publisher/AA **124B total/5.5B active**,42 layers,5KDA:1GatedMLA,512 routed experts/top8 plus shared expert, ViT/two-layer MLP and temporal positions. Cookbook approximate125B/5.1B is not substituted for primary VL counts. Publisher declares **MIT**; guessed standalone LICENSE returned404 and current HF file listing exposed README only as licence-bearing document, so no separately read custom terms invented.[1][2][4][5][6]

### Raw benchmarks found

**Provenance:** Complete primary card and **both multimodal table and launch-AA images directly inspected**. AA exact UUID **`433d5c5d-3092-4026-9727-1587ca07915d`**, VL weights link matches, current composite **measured**. Publisher's **Index42 explicitly v4.1.1**, current **24.569 under changed suite/version**; neither is this report's Overall or a drop measured under identical evaluation conditions.[1][2][8][9]

Agent / tool use:

- AA **TB2.1 64.42% /Tau3-Banking34.43% /GDPval1162.18 Elo**, **Briefcase985.79 Elo /24.95% rubric pass /AutomationBench partial15.68%**. **TB4 0.00% measured**, Tau2 null; missing and zero remain distinct.[2]
- Primary TB2.1 method follows AA protocol/Terminus2,2h timeout, JSON parser/preserved thinking,3 runs/task, temp1/32K generation/256K extended context. Publisher's AA-protocol reproduction is not automatically another independent run.[1]
- Vendor visual **ClawEval-MM59.9% /WebVoyager90.83% /MMSearch79.0%**. These named visual/agent protocols are not generic ClawProBench or all tools. No exact Toolathlon/MCP-Atlas/SWE Atlas Codebase QnA verified.[8]

Reasoning / knowledge:

- AA **GPQA86.16% /HLE21.96% /CritPt2.00% /Index24.569 measured**. Vendor **HLE-MM19.88%** concerns a separate multimodal set, not the same text-HLE metric.[2][8]
- AA **Omniscience accuracy14.35% /hallucination22.05% /reliability−4.5333**: relatively restrained guessing coexists with very low factual coverage. Do not turn low hallucination into broad knowledge mastery. No exact AIME/IFBench public score verified.[2]

Coding / multimodal / long context:

- Independent AA **SciCode44.21%**, plus64.42%TB2.1. Vendor **Vision2Web57.69%** is visual-to-frontend coding, not general SWE repair. No exact SWE Verified/Pro, LiveCodeBench, DeepSWE or Vibe Code score found.[2][8]
- Independent AA **MMMU-Pro78.96% /GDP.pdf8.4%**. Vendor **MMMU-Pro79.0% /MathVision84.87% /CharXiv-RQ81.30% /CountBench97.33% /WorldVQA45.67%** show strong but uneven visual capability.[2][8]
- Vendor **OmniDocBench1.5 score91.35**, metric aggregation details not established in the card; not directly comparable with another publisher's edit-distance0.149 or a universal91.35% exact-document success rate.[8]
- Vendor **AntBench-Medical0.96/0.93**, explicitly **in-house/to be released later**, two unnamed metrics; not independently validated clinical accuracy or evidence that the model should move to a medical/finance-only category. Table footnotes distinguish API-collected comparator scores and no-Python settings; comparisons are not silently treated as uniform independent runs.[8]
- AA **LCR78.33% /MLCR5.0%**. No verified ≥98% full256K retrieval;128K base/YaRN256K and current128K route must remain distinct.[1][2][3][4][6]
- AA **160.78M evaluation output/124.65M reasoning tokens**, but no current exact price/task-cost/throughput numbers. Long reasoning usage matters even at low provider tariffs; no self-invented latency.[2]

### Normalized scores (1–100)

- **Tool use: 65/100.** Useful independent banking/older terminal and vendor visual agents, capped by TB4 zero, modest automation and parser/context dependence.[1][2][8]
- **Reasoning: 76/100.** Strong GPQA/useful HLE, capped by CritPt, very low factual coverage and no version-matched interpretation of42 versus24.6 indices.[2][9]
- **Context window: 76/100.** Documented/evaluated262K YaRN tier, explicitly128K base and current hosted route; no near-perfect retention or universal256K serving guarantee.[1][2][3][4][6]
- **Multimodal: 87/100.** Native temporal video/image/document understanding with direct visual/GUI measurements, capped by hard-document weakness, no audio and text-only output.[1][2][8]
- **Coding: 73/100.** Useful independent SciCode/terminal plus visual frontend generation, capped by absent repair/full-app verification and modern-terminal zero.[2][8]
- **Cost efficiency: 98/100.** Exceptionally low verified paid route/caching, capped by128K hosted cap, long reasoning and substantial local hardware needs; not a free endpoint.[2][3][4]
- **Overall Score: 75/100.** Half-up mean `(65 + 76 + 76 + 87 + 73) / 5 = 75.4`; cost excluded. Efficient visual-agent/coding option with explicit context-extension, factual-coverage and newer-task limitations.

### Research trail and sources

Fresh Bing RSS exact VL benchmark query returned unrelated Instagram links; Google exact-ID benchmark query an interstitial; DuckDuckGo Ling3.0/VL weights query located real primary/serving leads. Exact primary VL card/config/generation metadata and both benchmark images, SGLang native-versus-YaRN deployment detail, selected AA and exact live gateway inspected. Vals guessed profile404. Raw LICENSE404 led to checked publisher metadata rather than an invented licence text. No peer/plain-Flash/Fin/successor benchmarks used.

[1]: https://huggingface.co/inclusionAI/Ling-3.0-flash-VL/raw/main/README.md "Exact VL card,124B/5.5B,MIT declaration, v4.1.1 index, TB protocol and explicit256K YaRN recipe"
[2]: https://artificialanalysis.ai/models/ling-3-0-flash-vl "Exact measured VL record, modern-task zero, context/calibration/code/vision and token usage; absent current prices/runtime"
[3]: https://openrouter.ai/api/v1/models/inclusionai/ling-3.0-flash-vl/endpoints "Actual DeepInfra FP16 September10 backend,128K/32K and$0.06/$0.18/$0.012 tariff"
[4]: https://docs.sglang.io/cookbook/autoregressive/InclusionAI/Ling-3.0-flash-VL "Implementation confirms128K native/256K explicit YaRN, no audio and recipe/hardware limitations"
[5]: https://huggingface.co/api/models/inclusionAI/Ling-3.0-flash-VL "Repository September4 creation metadata and public file list; not a formal release-date proof"
[6]: https://huggingface.co/inclusionAI/Ling-3.0-flash-VL/raw/main/config.json "Exact131072-position42-layer/512-expert hybrid multimodal config"
[7]: https://huggingface.co/inclusionAI/Ling-3.0-flash-VL/raw/main/generation_config.json "Actual temp1/top-p.95/top-k20 generation defaults differ from summary recommendation"
[8]: https://cdn-uploads.huggingface.co/production/uploads/6666ca359f5a0b3229238a1a/w-V0gtCa3qy0un6vuz-sj.png "Directly inspected full visual/agent/frontend table and API/Python/private-benchmark footnotes"
[9]: https://cdn-uploads.huggingface.co/production/uploads/6666ca359f5a0b3229238a1a/5gqrYjboQ8j7sTWjd1A_q.png "Directly inspected launch Index42 image explicitly labelled v4.1.1; not current same-suite score"

---

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-21 UTC
- Method: Independent fresh searches, complete exact primary card/config/images and native-versus-extended deployment inspection, exact independent evaluator/current provider comparison. Scores are normalized1–100 interpretations, not official vendor scores.
- Future sources: add a separate signed file alongside this report using the same headings.
