# Nemotron 3.5 Super VL — findings by GPT 6.1 Sol

- Source: NVIDIA / NVIDIA-Nemotron-3.5-Super-VL-120B-A12B, BF16 reference with deployment precision qualified.
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: [model-comparison.md](../../model-comparison.md)
- Cross-model signed log: [model-findings.md](../../model-findings.md)

## Model card

- **Name:** Nemotron 3.5 Super VL.
- **Short description:** NVIDIA's open-weight hybrid vision-language model for reasoning, coding and document/video understanding. The BF16 reference and optimized NVFP4 releases are serving/precision variants; neither inherits another Nemotron model's results.[1]
- **Provider / access:** Exact weights `nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16`; official NVFP4 sibling linked from the card. Self-hosted vLLM/SGLang **OpenAI-compatible Chat Completions**, served name `nemotron-3.5-super-vl`; gateway `nvidia/nemotron-3.5-super-vl`, snapshot `nvidia/nemotron-3.5-super-vl-20261015`. No separately verified free Zen route.[1][4]
- **Release / knowledge:** **2026-10-15 GA**. Card describes a foundation-data collection period ending December 2025 and later vision/post-training data; this is not a verified universal knowledge cutoff.[1][3]
- **Context window:** **Up to 1M**, with config **1,048,576 positions**. Prompt, visual inputs, history, tools and generation share this window. Actual routes differ: CoreWeave/BaseTen advertise **1,048,576 total / 943,718 output**, while Crusoe/Together/DeepInfra list **262,144 / 235,929**, Venice **262,144 / 32,768**. These are provider caps, not verified sustained output lengths or evidence of separate models.[1][2][4]
- **Modalities:** Native **text/images/video → text**, documents as page images plus text. Card recommends short MP4 clips up to two minutes; example sampling uses up to 256 frames, 2 FPS and pruning. No native audio: config `sound_config:null` and no audio token ID. Config names containing “Omni” do not override actual modalities.[1][2][4]
- **Reasoning / tools:** Off, on-medium and on via chat-template controls; reasoning/final answer share the output budget. Text sampling recommendation temperature 1/top-p .95; vision .6/.95. Tool and reasoning parsers must be configured for the deployed framework; tool support is not guaranteed by loading weights alone.[1]
- **Pricing (2026-10-20):** Exact gateway per-million Crusoe BF16 **$0.10 input/$0.40 output/$0.08 cache read**, Together/DeepInfra **$0.15/$0.50/$0.02**, CoreWeave 1M **$0.15/$0.50/$0.02**, BaseTen **$0.20/$0.50/$0.04**. Venice is $0.25/$1.25. AA's recorded evaluation prices are **$0.225/$0.575/$0.05**, a different serving assumption. Open weights do not make self-host compute or API use free.[3][4]
- **Architecture / licence:** **120B total / 12B active**, Mamba-2–Transformer hybrid MoE, 512 routed experts, C-RADIO encoder, connector and native MTP speculative decoding. **OpenMDW-1.1**, not Apache/MIT or the licence of an older Nemotron release. Official BF16 examples use 4×H100 or 2×GB200; configuration confirms multimodal architecture and maximum positions.[1][2]

### Raw benchmarks found

**Provenance:** Vendor BF16 table is labelled SuperGA and uses NeMo Gym recipes plus benchmark-specific exceptions/internal scaffolding for several visual tasks. AA exact selected record UUID `e2c0623e-c855-4a61-bb66-be1f1ed43234` links the BF16 checkpoint; its current index is measured. Vendor offline runs, BF16 reference and externally served optimized runs are not a controlled identical-precision replication.[1][3]

Agent / tool use:

- **TB2.1 60.67% vendor**; **TB4 offline 1% vendor**, but **TB4 0.0% and Terminal-Bench-Science 0.0% measured AA**, both backed by evaluation data rather than null fields. Harder suite results sharply constrain generalized autonomy.[1][3]
- Vendor **Tau2 retail 69.24% / airline 76.50% / telecom 73.19%**, **Tau3 banking 18.88%**, **GDPval-AA v2 1211 Elo**, **BrowseComp 78%**. AA selected Tau2/Tau3/TB2.1 are null, so those vendor results are not independently replicated by this record.[1][3]
- Current AA **GDPval 1162.41 Elo**, **Briefcase 998.76 Elo / 26.87% rubric pass**, **AutomationBench 14.82% partial score**. Vendor **AutomationBench offline 32.44%** uses a distinct offline setup; Briefcase-Lite's multiple component values are not a single full Briefcase Elo.[1][3]
- Vendor **OSWorld-Verified 51.14%**, **WebVoyager offline 77.72%**. No verified exact Claw-Eval/ClawProBench/MCP-Atlas/Toolathlon score found.[1]

Reasoning / knowledge:

- **GPQA Diamond 89.52% vendor**, **HLE text-only 31.79% / full-set 29.20% vendor**, versus **HLE 30.72% AA**. Different HLE task sets remain labelled.[1][3]
- **CritPt 10.86% vendor / 10.57% AA**; **APEX shortlist 88.36% vendor** is not full APEX or an AA agent index.[1][3]
- **AA Intelligence Index 26.491 measured**, not the repository's Overall. **Omniscience accuracy 23.28% / hallucination 35.85% / reliability −4.2167 AA**, versus vendor **26.20% / 30.0% / 4.03**. Calibration and factual coverage remain limited even when the vendor's reliability sign is positive.[1][3]
- Vendor **IFBench 70.86% / MMLU-ProX 76.91%**. No verified exact independent AIME/GPQA result found in the selected AA record; null is not zero.[1][3]

Coding / long context / vision:

- Vendor **SWE Verified 71.10% / Multilingual 67.72% / SWE-Pro 51.78% / LiveCodeBench v6 88.22%**. These are exact BF16 vendor results, not independent leaderboard replications.[1]
- **SciCode subtask 47.13% vendor / AA SciCode 47.80%**, with suite/harness distinction. **DeepSWE offline 24.65% vendor**, version not specified in that card row; no invented v1.1 attribution or independent Vibe score.[1][3]
- **LCR v1.1 68.62% vendor / 69.0% AA**, **GraphWalks 89.71% vendor** without a maximum-window length specified in the row. No verified ≥98% retrieval at 512K+ or full-million-token MRCR/RULER found.[1][3]
- Vendor **MMLongBench-Doc 62.82% / CharXiv reasoning 80.82% / MathVision 78.16% / BabyVision 29.60% / Video-MME v2 32.85%**. No audio score inferred.[1]
- **GDP.pdf 8.0% all-pass AA**, versus **6.6% vendor offline**; neither is a native raw-PDF API guarantee. AA selected MMMU-Pro is null.[1][3]
- AA median **430.22 output tokens/s / 0.84 s first chunk**, approximately **172.32M evaluation output / 153.30M reasoning tokens**, weighted **$0.1882/task**. These are hosted measurements, not BF16 self-host hardware guarantees or final-answer latency.[3]

### Normalized scores (1–100)

- **Tool use: 66/100.** Vendor TB2.1/Tau evidence and useful GDPval support bounded agents; observed AA TB4/science zeros, low AutomationBench and weak Briefcase pass rate cap autonomy.[1][3]
- **Reasoning: 79/100.** Vendor GPQA and independently measured HLE/CritPt support substantial reasoning, capped by poor factual recall/calibration and modest current broad-work index.[1][3]
- **Context window: 95/100.** Verified 1M weights and actual million-token route meet the capacity tier; smaller routes and incomplete full-window retrieval evidence prevent 100.[1][2][3][4]
- **Multimodal: 84/100.** Real image/video/document-page understanding with measured task evidence, capped by no audio/non-text generation, short-video deployment limits and poor document all-pass performance.[1][2][3]
- **Coding: 76/100.** Vendor SWE/LCB and independent SciCode support bounded engineering, capped by weak newer terminal/offline long-horizon results and limited independent repair replication.[1][3]
- **Cost efficiency: 94/100.** Cheap paid exact-model BF16/quantized routes and fast hosted throughput offer strong value, capped by route/precision differences, reasoning usage and real self-host resources.[1][3][4]
- **Overall Score: 80/100.** Half-up mean `(66 + 79 + 95 + 84 + 76) / 5 = 80`; cost excluded. Best fit: customizable multimodal reasoning and bounded tools on an explicitly selected context/precision route.

### Research trail and sources

Fresh Bing RSS `"Nemotron 3.5 Super VL" official benchmark` returned irrelevant speed-test links; Google `"Nemotron 3.5 Super VL" independent review` an interstitial; DuckDuckGo `"Nemotron 3.5 Super VL" context pricing` supplied exact provider/evaluator leads. The guessed unsuffixed HF path returned 401; AA's exact BF16 weights link resolved the full primary card/config. Guessed Vals and BenchLM model paths returned 404; no exact independent score inferred from those failures. Vendor tables/method caveats, selected AA record and live provider metadata were compared; no peer findings consulted.

[1]: https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16/raw/main/README.md "Exact primary BF16 model card, tables, offline caveats, licence and deployment"
[2]: https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16/raw/main/config.json "Exact positions, hybrid/vision configuration and absent audio component"
[3]: https://artificialanalysis.ai/models/nemotron-3-5-super-vl "Exact selected public model record, measured independent quality, costs and runtime"
[4]: https://openrouter.ai/api/v1/models/nvidia/nemotron-3.5-super-vl/endpoints "Exact dated routes, native modalities, precision, real serving limits and prices"

---

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-20 UTC
- Method: Independent fresh searches, exact publisher/configuration checks and directly attributed independent evaluator/provider comparison. Scores are editorial normalized 1–100 interpretations, not vendor scores.
- Future sources: add a separate signed file alongside this report using the same headings.
