# Nemotron 3 Nano Omni — findings by GPT 6.1 Sol

- Source: NVIDIA / `Nemotron-3-Nano-Omni-30B-A3B-Reasoning`, original omni checkpoint.
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: [model-comparison.md](../../model-comparison.md)
- Cross-model signed log: [model-findings.md](../../model-findings.md)

## Model card

- **Name:** Nemotron 3 Nano Omni 30B-A3B Reasoning, distinct from its text-only Nano backbone,Nano V2 VL and3.5 Super VL. General multimodal perception/document/GUI model with text output; audio understanding is one input capability, not a separate TTS/realtime voice-first model.[1][2][3]
- **Short description:** Compact-active-parameter hybrid model for OCR,charts,screenshots and joint audio/video understanding. Strong publisher multimodal results coexist with weak independent text-agent/general-reasoning measurements.[1][3][4]
- **Provider / IDs:** Weights **`nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-{BF16,FP8,NVFP4}`**; NVIDIA native **`nvidia/nemotron-3-nano-omni-30b-a3b-reasoning`** is present in current **`https://integrate.api.nvidia.com/v1/models`**. Exact OpenRouter **`nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free`** is listed but its sole NVIDIA route currently has **status−5/0% recent uptime**, so it is not verified healthy access. Native listing and advertised free endpoint are not authenticated successful inference. No exact free Zen route verified.[1][5][6][7]
- **Release / knowledge:** Primary **2026-04-28** release; AA metadataApril29. Training collection period2019–2025 is not an exact knowledge cutoff, which remains unverified.[1][4]
- **Architecture / licence:** Marketing30B-A3B, official description **31B backbone/~3B active**, Mamba2–Transformer MoE plus **C-RADIOv4-H vision/Parakeet speech encoders**. Complete multimodal parameter accounting can exceed backbone count; HF auto-count is not a new checkpoint identity. Downloadable BF16/FP8/NVFP4, **NVIDIA Open Model Agreement**, commercial use permitted; not Apache/MIT.[1][2][8]
- **Context / output:** Primary **256K**, paper final training **262,144**, gateway **256,000/65,536 output**. Primary deployment examples start at131,072 and explicitly allow lower caps for memory. The text backbone's larger context is not inherited. Primary recommendation up to210,000 output for hard reasoning is not the hosted completion guarantee; prompt plus completion share server context.[1][3][5]
- **Modalities / limits:** **Text,image,audio,video→text**, English-only supported-language claim. API accepts page images **rather than raw PDFs**. Card documents **up to2minute video/1hour audio**; paper trains audio up to20minutes and says token capacity can accommodate over5hours—capacity is not demonstrated five-hour understanding/service support. No native speech/image/video generation.[1][2][3][7]
- **Reasoning / tools:** Thinking on by default, toggle **`enable_thinking`**. Typical multimodal thinking recipe **temperature0.6/top-p0.95/16,384 reasoning budget/1,024 grace/20,480 output**; instruct0.2/top-k1. JSON/tool parsers supported, but current free gateway lists all tool-choice options false despite tools appearing among accepted parameters. Service compatibility is not assumed equal to self-hosted feature support.[1][5][7]
- **Pricing (2026-10-21):** Exact NVIDIA Build page advertises a **free API endpoint**, native catalog retains model; exact gateway tariff **$0 input/output**, with unhealthy gateway status above. Trial quotas/access and **API Trial Terms** apply; trial service versus commercially usable weights are different contracts. Build's disclaimer says usage may be logged for security/improving products/services; no zero-retention promise made. AA records paid reference **$0.40/$1.365/$0.20 cache**, not a current native invoice or guarantee. Self-hosting hardware costs remain.[4][5][6][7]

### Raw benchmarks found

**Attribution:** Primary technical report **v1 tables7–10** inspected, keeping reasoning-on/off and pure-text recipes distinct. Independent AA selected **Reasoning UUID `8c748e53-61ae-48b8-af8d-eb8298b1e9db`**, **Index10.251 estimated**, not a fully measured current composite. Exact guessed Vals candidate404; no sibling results substituted.[3][4]

Agent / tools:

- Vendor **OSWorld47.4%**, **ScreenSpot-Pro57.8% thinking/59.3% off**, image-grounded GUI tasks rather than broad terminal autonomy. Independent AA **TB2.1 6.74% /Tau2 45.32% /GDPval229.86 Elo /IFBench63.20%**; terminal4,banking and automation fields null.[1][3][4]
- Vendor paper text recipe **TauBench v2 Telecom42.7% /IFBench74.2%**, **temperature1/top-p1/max131,072 output**, versus typical multimodal20,480 output. Telecom subset and AA's aggregate Tau2 are not identical. No verified Claw-Eval/ClawProBench/MCP Atlas/Toolathlon score found.[3]

Reasoning / coding:

- Vendor **GPQA no-tools72.2%**, mean four runs; **AIME2025 82.1%**, pass@1 averaged over eight runs; **MMLU-Pro77.3%**. Independent AA **GPQA46.87% /HLE4.82% /CritPt0.00% measured**. Large recipe/evaluator discrepancy remains unresolved rather than claiming primary numbers reproduced independently.[3][4]
- AA **Omniscience accuracy15.20% /hallucination85.65% /reliability−57.4333**, with hallucination lower better and differing denominators. Estimated index is not a measured benchmark accuracy.[4]
- Vendor **LiveCodeBench v5,July2024–May2025 63.2% /SciCode32.0%**, one run each under131K-output pure-text recipe. No verified exact SWE Verified/DeepSWE/Vibe Code result found; weak independent terminal6.74% caps coding-autonomy interpretation.[3][4]

Vision / audio / video:

- Vendor reasoning **MMMU70.8% /MathVista82.8% /CharXiv reasoning63.6% /DocVQA95.6% /OCRBenchV2 EN67.0%**. Primary card67.04 more precise; NVIDIA blog65.8 is **non-reasoning**, not an unexplained overall contradiction. Independent harder AA **MMMU-Pro53.18%**.[1][2][3][4]
- Vendor **VideoMME without subtitles72.2% thinking/70.8% off /WorldSense55.4% thinking/55.2% off /DailyOmni74.1% thinking/74.5% off**. The card headline74.52 and rounded blog numbers are preserved through exact paper mode attribution.[1][2][3]
- Vendor **VoiceBench89.4% reasoning**, versus **MMAU74.6% non-reasoning**; **English OpenASR average WER5.95% /TED-LIUM longform WER3.11%, lower better**, reasoning off. Spoken-input response quality is not generated speech quality. Vision/audio use VLMEvalKit/vLLM, text uses NeMo-Skills.[3]
- Quantized **nine non-ASR benchmark mean65.80 BF16/65.40 FP8/65.43 NVFP4**, explicitly **non-reasoning**; this small average difference is not universal equality across tasks/windows. Weights **61.5/32.8/20.9GB**, before full serving/KV/cache overhead; no promise that maximum context fits at minimum-GPU weight capacity.[1][3]

Context / independent small study / speed:

- Vendor **MMLongBench-Doc57.5% thinking/46.1% off**, long multi-page reasoning; **AA-LCR41.0% vendor versus39.67% independent AA**. No verified full256K98%-plus retrieval or exact MRCR result found.[1][3][4]
- Public community study **29 tasks:15text/5image/6synthetic-audio/2synthetic-video/1tool**, private early-access NVIDIA endpoint; reported text15/15 and tool1/1, audio mean74%,video75%, suspect image grader. This is an indicative early-access convenience sample with unmatched settings, not evidence of frontier-equivalent general reasoning/tool reliability; it does not test substantive coding or long-context drift.[9]
- AA median **236.52tokens/s/0.735s first chunk**. Primary throughput multipliers depend on **B200 hardware,fixed per-user interactivity and named Qwen3-Omni/NanoV2VL baselines** in the technical report; community anecdotes do not reproduce them.[3][4][9]

### Normalized scores (1–100)

- **Tool use: 42/100.** Useful screenshot-grounded GUI and basic functions, capped by independent TB2.1 6.74%,GDPval229.86 and modest Tau2 success.[3][4]
- **Reasoning: 55/100.** Useful publisher math/knowledge and multimodal reasoning, capped by weak independent GPQA/HLE/CritPt and factual calibration; long-output vendor recipe not treated as default service behavior.[3][4]
- **Context window: 76/100.** Verified256K-class final model,not backbone1M; hosted/local caps and modest retrieval remain explicit.[1][3][5]
- **Multimodal: 90/100.** Genuine joint image/audio/video understanding with strong OCR/ASR and GUI coverage, capped by harder vision,English/duration limits and text-only output.[1][3][4]
- **Coding: 58/100.** Some verified vendor LCB/SciCode ability, capped by very weak independent terminal performance and missing broad repository/persistent-app verification.[3][4]
- **Cost efficiency: 100/100.** Advertised exact NVIDIA$0 trial tier; quotas,trial data use and currently unhealthy free gateway are explicit. This score describes tariff,not guaranteed uptime or free self-hosting.[5][6][7]
- **Overall Score: 64/100.** Half-up mean `(42 + 55 + 76 + 90 + 58) / 5 = 64.2`; cost excluded. Best fit: bounded multimodal perception/document sub-agents,with harder reasoning and coding escalated.

### Research trail and sources

Fresh Bing official-benchmark query returned unrelated retail results; Google context/pricing query an interstitial; DuckDuckGo found exact primary checkpoints,technical report and independent evaluation leads. Resolved failed short-name guesses to full30B-A3B-Reasoning IDs; read primary card,launch article,original technical tables/methodology,exact AA selected record,current free gateway status,actual native catalog and Build free-endpoint disclosure. Community README/report inspected but tiny synthetic study is not a general benchmark bridge. No peer research or backbone/successor numbers used.

[1]: https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16/raw/main/README.md "Exact checkpoint,256K,English/duration limits,reasoning,PDF rendering,quantization and commercial licence"
[2]: https://huggingface.co/blog/nvidia/nemotron-3-nano-omni-multimodal-intelligence "April28 primary launch,architecture and mode-sensitive modality claims"
[3]: https://arxiv.org/html/2604.24954v1 "Original technical report,tables7–10,reasoning modes,pure-text131K recipe and system-efficiency methodology"
[4]: https://artificialanalysis.ai/models/nemotron-3-nano-omni-30b-a3b "Exact selected Reasoning UUID,estimated index,independent tasks/calibration/context/vision and speed"
[5]: https://openrouter.ai/api/v1/models/nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free/endpoints "Actual$0 route,but negative status/recent0% uptime;256K/64K and tool-choice limitations"
[6]: https://integrate.api.nvidia.com/v1/models "Current native public catalog includes exact reasoning ID;listing is not successful inference"
[7]: https://build.nvidia.com/nvidia/nemotron-3-nano-omni-30b-a3b-reasoning "Exact model Build payload advertises Free Endpoint and trial disclosure;not a production uptime claim"
[8]: https://www.nvidia.com/en-us/agreements/enterprise-software/nvidia-open-model-agreement/ "Model-weight licence,distinct from API Trial Terms"
[9]: https://raw.githubusercontent.com/anton-abyzov/nemotron-3-nano-omni-bench/main/REPORT.md "Indicative29-task early-access experiment,task counts,synthetic media,unmatched settings and suspect grader"
[10]: https://docs.api.nvidia.com/nim/reference/nvidia-nemotron-3-nano-omni-30b-a3b-reasoning "Exact native reference identifies trial service,modalities and downloadable model"

---

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-21 UTC
- Method: Independent fresh searches,primary exact-checkpoint card/report modes and methodologies,independent AA and small-study inspection,and current native/free-route verification. Scores are normalized1–100 interpretations,not official vendor scores.
- Future sources: add a separate signed file alongside this report using the same headings.
