# Nemotron 3.5 Super VL — findings by GPT 6 Astra

- Source: NVIDIA / NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: [model-comparison.md](../../model-comparison.md)
- Cross-model signed log: [model-findings.md](../../model-findings.md)

## Model card

- **Name:** Nemotron 3.5 Super VL
- **Short description:** Open-weight multimodal reasoning model for document interpretation, code and tool-driven agents. This report scores the released post-trained model, not the unadapted Base checkpoint or partners' separately fine-tuned specialist derivatives [S1, S2].
- **Provider / access:** Self-hosted vLLM/SGLang OpenAI-compatible Chat Completions; NVIDIA NIM; hosted DeepInfra and OpenRouter. OpenRouter confirms `tools`, `tool_choice`, reasoning and `response_format` controls [S1, S4, S5].
- **Release / knowledge:** October 15, 2026 [S1, S2]. Foundation collection period ends December 2025, while later vision/post-training data are also described; that foundation date is not asserted as a universal knowledge cutoff [S1].
- **IDs:** Weights `nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16`; optimized sibling `nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-NVFP4`; OpenRouter `nvidia/nemotron-3.5-super-vl`; DeepInfra `nvidia/NVIDIA-Nemotron-3.5-Super-VL`. No Zen Free ID verified.
- **Context window:** Up to **1M tokens**, shared among prompt, media, tool results and response, in official BF16 deployment recipes. Actual hosts may restrict it: DeepInfra currently displays **262,144** in its endpoint header [S1, S4]. No universal separate maximum-output limit is established by the card; the client example's `max_tokens=16384` is an example, not a model ceiling.
- **Modalities:** Text/images/video in, text out; documents supplied as page images and text. Official example video input is MP4 up to **two minutes** with frame sampling. No audio encoder, audio output or image generation is credited [S1, S8]. Reasoning is configurable off/medium/on; structured-output training and tool-call examples are published.
- **Pricing (as of 2026-10-19):** Evaluated paid value anchor: DeepInfra **$0.10 input / $0.40 output / $0.08 cached input per million tokens**, fp4 endpoint [S4]. AA's cross-provider median is **$0.225/$0.575**, not the cheapest endpoint's rate [S3]. Downloadable weights do not eliminate hardware costs; review claims of a free hosted endpoint were not used to assign a free-tier score.
- **Architecture:** **120B total / 12B active**, Mamba-2–Transformer hybrid MoE with **512 routed experts per MoE layer**, C-RADIO vision encoder, connector and shared MTP speculative decoding. OpenMDW-1.1 permits commercial/non-commercial use. BF16 examples target **4× H100 or 2× GB200**; quantized deployment is a separate precision configuration [S1].

### Raw benchmarks found

Unless noted otherwise, the following values are **NVIDIA-reported BF16 results**, not independent replications. The model card calls its scored column “Nemotron 3.5 SuperGA BF16”; the NeMo Gym reproducibility guide explicitly binds it to this exact VL checkpoint [S1, S7].

Agent / tool use:

- Terminal-Bench **2.1: 60.67%** [S1]. NeMo Gym uses a pinned Harbor dataset and OpenSandbox; this is not Terminal-Bench 4 [S7].
- Tau2-Bench retail **69.24%**, airline **76.50%**, telecom **73.19%**; Tau3 banking **18.88%** [S1]. Preserve domains rather than inventing a vendor aggregate.
- GDPval-AA **v2: 1,211 Elo** [S1]. NVIDIA's recipe uses generated reference deliverables and anchored comparison scoring; the default rubric mode does not reproduce the Elo [S7].
- BrowseComp **78%**; OSWorld-Verified **51.14%**; WebVoyager **77.72%** in the card's offline-labelled row; AutomationBench-AA offline **32.44%** [S1].
- Hermes Bench **63.44%**, LangChain behavioral evaluations **87.05%**, published by NVIDIA with benchmark/framework links; not universal production completion rates [S2].
- Claw-Eval/ClawProBench, Toolathon and MCP-Atlas: no verified public score found in the reviewed sources.

Reasoning / knowledge:

- GPQA Diamond **89.52%**; HLE text-only **31.79%**, full set **29.20%**; MMLU-ProX **76.91%**; CritPt **10.86%** [S1]. Text-only and full HLE are separate populations, not conflicting results.
- AA-Omniscience accuracy **26.20%**, hallucination rate **30.0%**, index **4.03**, all in NVIDIA's run [S1]. These are different measures and the index is not an accuracy percentage.
- **Independent Artificial Analysis Intelligence Index v4.3.2: 26**, shown without an estimate marker; current class rank **1/67** among its comparable open-weight size class, not first among all models [S3].
- Independent AA reports **$0.19 per index task**, **170M output tokens** over the suite, median-provider output speed **435 tokens/s**, and **0.75 s TTFT** [S3]. These describe the measured service/workload, not every local deployment.

Coding:

- SWE-bench Verified **71.10%**, Multilingual **67.72%**, Pro **51.78%** [S1]. Official reproduction uses OpenCode **v1.17.11** in OpenSandbox [S7].
- LiveCodeBench **v6: 88.22%**; SciCode **subtask: 47.13%** [S1]. The subtask result is not directly interchangeable with full-problem SciCode.
- DeepSWE offline **24.65%**; Terminal Bench 4 offline **1** in the card's score table [S1]. The latter row does not fully specify units in its label, so it is not restated as a newly verified percentage. Both caution against projecting older benchmark strength onto newer difficult agent evaluations.
- Vibe Code Bench: no verified public score found.

Long context and vision:

- AA-LCR **v1.1: 68.62%**, GraphWalks **89.71%**, vendor evaluation [S1]. GraphWalks reproduction raises serving capacity to 1,048,576 but its prompts reach only approximately **361,000 tokens** [S7]; this does not demonstrate ≥98% retrieval at 512K+.
- CharXiv reasoning **80.82%** in the card; the blog rounds to **80.8%** and reports **84% with Python interpretation**, a different tool-enabled setting [S1, S2].
- MMLongBench-Doc **62.82%**, MathVision **78.16%**, OCRBench v2 EN **68.12**, ZH **59.15**, Video-MME v2 **32.85%** [S1]. OCR values are preserved on the card's reported scale.

### Source comparison and conflicting findings

1. **Class leadership is not global leadership:** AA's 1/67 label is a size-class comparison. Eesel's review correctly highlights larger models' advantages but quotes an AA value of 26.5 versus the currently displayed integer 26. Without the precise archived index settings, retain the current directly verified 26 and do not average the snapshots [S3, S6].
2. **Price disagreement is mostly provider choice:** review/API directories quote $0.15/$0.50, DeepInfra directly shows $0.10/$0.40, and AA reports $0.225/$0.575 medians. These are not a single contradictory NVIDIA list price. DeepInfra is the cost anchor, while its reduced endpoint context is stated explicitly [S3, S4, S6].
3. **Speed claims need their workloads:** NVIDIA's >600 TPS chart is Baseten at 100K input; AA's live summary gives 435 TPS across providers. The review's older 409 TPS snapshot is neither a falsification of the launch chart nor evidence all hosts exceed 600 [S2, S3, S6].
4. **Specialist fine-tuning is not the released checkpoint:** partner gains and claims of outperforming frontier models apply to domain-adapted versions. Their improved scores are not credited to the off-the-shelf model [S2, S6].
5. **Modality and runtime are separate:** AA lists text/image while the official card explicitly supports sampled video. NVIDIA's Megatron Bridge page records limitations in particular native Transformers video/conversion configurations. That is a runtime-compatibility caveat, not proof that the supported vLLM video path lacks the capability [S1, S3, S8].
6. **Reproducibility limits are explicit:** NVIDIA's recipes note stochastic variation, many unpinned datasets, omissions on some vision evaluations and endpoint-specific effects. Accordingly, vendor results remain vendor results even when a reproduction recipe exists [S7]. The review's secondary prompt-injection anecdote was not independently opened or used as a numeric scoring input.

### Normalized scores (1–100)

- **Tool use: 70/100.** Terminal 60.67%, GDPval 1,211 and concrete Tau2 results support useful agents; Tau3 18.88%, middling GUI results and sparse independent task-level replication cap it [S1, S7].
- **Reasoning: 80/100.** GPQA 89.52% and HLE 31.79% support substantial reasoning, tempered by independent Index 26 on its newer suite, limited Omniscience accuracy and CritPt 10.86% [S1, S3].
- **Context window: 95/100.** Scores verified model-level 1M capacity in the official deployment recipe, not every hosted endpoint; GraphWalks 89.71% below 512K does not warrant 100 [S1, S7].
- **Multimodal: 82/100.** Image/document/video understanding and measured chart/OCR results justify the video/document tier; short sampled videos, no audio and uneven video scores cap breadth [S1, S2].
- **Coding: 78/100.** SWE Verified 71.10%, Pro 51.78%, LCB 88.22% and SciCode subtask 47.13% show capable coding, with lower terminal/DeepSWE results limiting the score [S1].
- **Cost efficiency: 96/100.** Direct $0.10/$0.40 paid hosting and AA's $0.19/task support excellent value; output-token volume, precision differences and hosting limits prevent equating this with zero-cost inference [S3, S4].
- **Overall Score: 81/100.** Half-up mean of (70 + 80 + 95 + 82 + 78) / 5 = 81; attractive for customizable document/vision agents and throughput-sensitive work, rather than universal frontier reasoning. Cost excluded.

### Research trail and sources

Independent search requests covered: `Nemotron 3.5 Super VL NVIDIA model card`; `Nemotron 3.5 Super VL independent benchmarks`; `Nemotron 3.5 Super VL review pricing context`; plus official-Hugging-Face, release/GPQA and broad benchmark queries. The benchmark and pricing/review queries returned substantive results; several official-targeted/additional queries returned anti-bot challenges. Blocked searches were not described as successful evidence discovery. Official pages, a genuine independent evaluator, a commercial review and a hosting provider were opened and compared directly.

- [S1 — NVIDIA BF16 model card](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16/blob/main/README.md)
- [S2 — NVIDIA technical launch article](https://developer.nvidia.com/blog/nvidia-nemotron-3-5-super-vl-powers-specialized-agents-with-multimodal-reasoning/)
- [S3 — Artificial Analysis independent measurements](https://artificialanalysis.ai/models/nemotron-3-5-super-vl)
- [S4 — DeepInfra exact model endpoint/prices](https://deepinfra.com/nvidia/NVIDIA-Nemotron-3.5-Super-VL)
- [S5 — OpenRouter model API reference](https://openrouter.ai/nvidia/nemotron-3.5-super-vl)
- [S6 — Eesel review, October 18](https://www.eesel.ai/blog/nemotron-3-5-super-vl)
- [S7 — NVIDIA NeMo Gym evaluation reproduction guide](https://github.com/NVIDIA-NeMo/Gym/blob/main/nemotron_recipes/super-3.5/reproducibility.md)
- [S8 — NVIDIA Megatron Bridge model integration notes](https://docs.nvidia.com/nemo/megatron-bridge/nightly/models/nemotron/nemotron3.5-super-vl.html)

---

## Signature

- Provided by: **GPT 6 Astra (openai/gpt-6-astra)** — 2026-10-19
- Method: Fresh model-specific searches and detailed comparison of official weights/docs, evaluation recipes, independent benchmarks, review and live hosting specifications. No peer reports consulted; benchmarks not run locally. Scores are normalized interpretations, not vendor scores.
