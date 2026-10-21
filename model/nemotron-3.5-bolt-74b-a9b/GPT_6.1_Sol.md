# Nemotron 3.5 Bolt 74B-A9B — findings by GPT 6.1 Sol

- Source: NVIDIA / `NVIDIA-Nemotron-3.5-Bolt-74B-A9B`,BF16 and explicitly separated24GB IQ2 deployment.
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: [model-comparison.md](../../model-comparison.md)
- Cross-model signed log: [model-findings.md](../../model-findings.md)
- Confidence: Cost score is a **low-confidence local-resource proxy**,not a verified hosted token tariff.

## Model card

- **Identity / architecture:** **74B total/9B active**,vision-language hybrid Mamba2/Transformer LatentMoE plus **C-RADIOv4-H** vision encoder,compressed from120B-A12B Super3.5VL. Not the unreleased/unknownE4B name or parent checkpoint. Actual open **BF16** and **24GB IQ2/GGUF** distributions;OpenMDW1.1,not Apache/MIT.[1][2]
- **Release / freshness:** Primary **2026-10-15**,post-training freshnessMay2026. Other model-date/data-collection ranges are not substituted for a uniform factual cutoff.[1][3]
- **Access:** Self-hosted Transformers/vLLM/llama.cpp variants;BF16 primary positioning is **customization/post-training**,24GB variant optimized for local inference. No exact Bolt74B route in inspected current NVIDIA/OpenCode/OpenRouter catalogs or models.dev;no authenticated inference or current$0/paid hosted tariff verified. Missing catalog entries are not proof no provider exists.[1][2][4]
- **Context / modes:** Up to **262,144 shared context**,including visual inputs/history/tool outputs/answer. Compression's **under24GB target uses batch1/128K context**;not a promise full256K/concurrency fits24GB. Thinking on/off and medium controls,temperature1/top-p0.95 text;reasoning and answer share output budget.[1][2]
- **Modalities / limits:** **Text,image,video→text**,no audio/generated media. Card documents video up to2minutes,frame sampling/pruning dependent;JSON/tool calling. No parent-only modality benchmark inherited.[1][2]
- **Quantization / resource cost:** Production expert weights **IQ2_XXS2.0625bits/element**,mixed other precisions,quantization-aware distillation and optional **1.13B LiLiCorr drafter**. Published24GB footprint and actual reference-speed measurements support a resource-efficiency assessment;electricity/hardware/service-dollar cost not measured here. Open-weight download is not free inference.[2][3]

### Raw benchmarks found

**Attribution:** Both exact primary cards inspected;BF16 versus24GB IQ2 columns not combined into a best-of profile. AA exact **UUID `7d2aa050-888e-4c27-a92d-10337a4dfb3a`**,**Index21.407 measured**;its weight link pointsBF16 but extracted fields do not establish precise serving quantization. Primary performance measurements explicitly refer to24GB+drafter,not BF16.[1][2][3][4]

- **Tools:** Vendor **TB2.1 53.93% BF16/50.98% IQ2 /Tau3-Banking17.01% both /MCP Atlas55.60%/52.20% /PinchBench90.35%/87.82% /BrowseComp70.00%/66.75%**. MCP uses **500public tasks/0.75coverage threshold** for binary task scoring;Pinch claim mentions10-repeat averaging. No exact Claw-Eval/ClawProBench/Toolathlon/SWE Atlas found.[1][2]
- Independent AA **TB4 0.00% measured /GDPval979.03 Elo /Briefcase911.94 Elo,24.34% rubric pass /AutomationBench partial15.46%**. Tau/older terminal null. Vendor GDPval-AA-V2 **31.13 BF16/28.47 IQ2** is retained on its reported non-Elo scale,not979.03 Elo or a universal accuracy percentage.[1][2][4]
- **Reasoning / coding:** Vendor **GPQA88.83% BF16/86.43% IQ2 /HLE28.73%/25.30% /SciCode44.49%/41.02%**. AA independently **HLE24.65%/CritPt4.29%/SciCode39.70%**,GPQA null. No exact independently verified SWE/DeepSWE/LCB/Vibe Code result found;training on SWE tasks is not measured repair success.[1][2][4]
- **Calibration:** Vendor Omniscience **accuracy21.80%/16.90%,non-hallucination56.14%/61.27%** BF16/IQ2;AA **accuracy17.08%/hallucination43.72%/reliability−19.1667**. Different metric definitions/denominators retained;non-hallucination not accuracy.[1][2][4]
- **Context / vision:** Vendor **AA-LCR67.38% BF16/64.06% IQ2**,independentAA **LCR69.67%**. Vendor **WebArena vision50.25% BF16/50.86% IQ2**,not a general image-understanding or audio score. AA **MMMU-Pro null/GDP.pdf2.8%**;no exact independent hard-perception/full256K retrieval validation found.[1][2][4]
- **Real local runtime:** Publisher's **llama.cpp/Windows11/reference RTX Spark Surface Laptop Ultra128GB** measurements:24GB IQ2+LiLiCorr **AIPerf SPEED-Bench-Coding83.99tokens/s /AA-AgentPerf Local replay600.80s**. Same-hardware comparator quantizations/drafters differ;not an independent benchmark or guaranteed max-context speed.[3]
- AA canonical output **228.56M/reasoning205.19M tokens**;Briefcase132,923output/task andTB4 361,433output/task across multi-call trajectories. Token totals exceed a single context because tasks involve multiple requests. AA prices/timescale fields null:they do not mean zero dollars or zero latency.[4]

### Normalized scores (1–100)

- **Tool use: 57/100.** Useful vendor terminal/MCP and bounded artifacts,capped by hard-terminal zero,banking17% and modest independent automation.[1][2][4]
- **Reasoning: 74/100.** Useful knowledge/HLE/science,capped by CritPt4.29%,calibration and precision/recipe dependence.[1][2][4]
- **Context window: 76/100.** Verified256K-class maximum,128K memory-target distinction and modest retention;no1M/near-perfect bonus.[1][2][4]
- **Multimodal: 77/100.** Genuine image/video encoder and visual web-task evidence,capped by limited exact hard-perception validation,duration limits,no audio and text-only output.[1][2][4]
- **Coding: 67/100.** Useful measured SciCode and bounded shell work,capped by absent repair/persistent-app verification and TB4 zero.[1][2][4]
- **Cost efficiency: 88/100.** **Provisional local-resource proxy** from24GB/128K deployment target and83.99TPS reference runtime;not an inverse verified API-dollar rate. Hardware/power,large BF16 footprint,drafter and unknown hosted tariffs cap confidence. No$0 service fabricated.[1][2][3][4]
- **Overall Score: 70/100.** Half-up mean `(57 + 74 + 76 + 77 + 67) / 5 = 70.2`;cost excluded. Best fit:local image-aware bounded agents and customization,with precision/window/resource budget explicit.

### Research trail and sources

Fresh Bing official query returned unrelated banking links;Google independent query an interstitial;DuckDuckGo weights/context query a202 challenge. Official HF search resolved exact BF16/24GB/GGUF/drafter artifacts;read both primary card scopes,quantization/memory methodology,local performance blog and exact measuredAA. Current hosted catalog checks found no exact route;guessed Vals profile404. No parent/E4B/peer benchmarks or zero tariffs imported.

[1]: https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-BF16/raw/main/README.md "Exact BF16 scope,architecture,256K,modes,precision-separated benchmarks and MCP methodology"
[2]: https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB/raw/main/README.md "Actual IQ2 distribution,mixed precision,batch1/128K memory target and own task results"
[3]: https://research.nvidia.com/labs/nemotron/Nemotron-3.5-Bolt-24GB/ "October15 release and actual reference-hardware83.99TPS/600.80s local benchmarks"
[4]: https://artificialanalysis.ai/models/nemotron-3-5-bolt-74b-a9b "Exact measured independent record,task/calibration/context and token counts;price/runtime missing,not zero"
[5]: https://openmdw.ai/license/1-1/ "Actual declared permissive weight licence,not hosted pricing"
[6]: https://integrate.api.nvidia.com/v1/models "Current native catalog check,no exact74B Bolt entry at inspection"
[7]: https://opencode.ai/inference/v1/models "Current OpenCode catalog,no exact Bolt entry"
[8]: https://openrouter.ai/api/v1/models "Current gateway catalog,no exact Bolt route"

---

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-21 UTC
- Method: Independent fresh searches,exact BF16/IQ2 primary scope and real-hardware performance inspection,selected independent evaluator and current catalog verification. Quality scores normalized1–100;cost explicitly a low-confidence resource proxy rather than a verified monetary tariff.
- Future sources: add a separate signed file alongside this report using the same headings.
