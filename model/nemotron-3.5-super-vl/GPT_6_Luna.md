# Nemotron 3.5 Super VL — findings by GPT-6 Luna

- Source: NVIDIA/Nemotron 3.5 Super VL
- Date: 2026-10-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Super VL 120B A12B
- **Short description:** NVIDIA's open-weight multimodal agent model combines a 120B-parameter, 12B-active hybrid Mamba-2/Transformer MoE language model with a C-RADIO vision encoder. It targets reasoning, coding, tool use, document understanding, and video understanding; BF16 and NVFP4 checkpoints are separately evaluated.
- **Provider / access:** NVIDIA Build/NIM hosts `nvidia/nemotron-3.5-super-vl-120b-a12b` through its API-trial service ([NIM model page, updated 2026-10-15](https://build.nvidia.com/nvidia/nemotron-3.5-super-vl-120b-a12b)). The downloadable BF16 and NVFP4 checkpoints can be served with vLLM or SGLang; NVIDIA's published local examples use OpenAI-compatible Chat Completions (`/v1/chat/completions`), with configurable reasoning and function/tool calling ([NVIDIA BF16 model card](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)). NanoGPT separately offers `nvidia/nemotron-3.5-super-vl` ([model page](https://nano-gpt.com/models/text/nvidia/nemotron-3.5-super-vl)).
- **Release / knowledge:** NVIDIA Build and Hugging Face list the release as **2026-10-15** ([NIM model card](https://docs.api.nvidia.com/nim/reference/nvidia-nemotron-3_5-super-vl-120b-a12b); [Hugging Face BF16 card](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)). NVIDIA's training-content summary says the foundation corpus was collected through December 2025; this is not a separately stated knowledge-cutoff date ([Hugging Face BF16 card](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)).
- **IDs:** NVIDIA Build/NIM endpoint `nvidia/nemotron-3.5-super-vl-120b-a12b`; BF16 weights `nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16`; quantized weights `nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-NVFP4`; NanoGPT route `nvidia/nemotron-3.5-super-vl` ([NIM](https://build.nvidia.com/nvidia/nemotron-3.5-super-vl-120b-a12b); [Hugging Face](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16); [NanoGPT](https://nano-gpt.com/models/text/nvidia/nemotron-3.5-super-vl)).
- **Context window:** NVIDIA documents up to **1,000,000 shared tokens** for prompt, visual inputs, history, tool results, and output ([NIM model card](https://docs.api.nvidia.com/nim/reference/nvidia-nemotron-3_5-super-vl-120b-a12b)). This is the native model limit, not a guarantee for every deployment. NanoGPT's hosted route lists **262,144 total tokens** and **16,384 max output tokens** ([NanoGPT model page, accessed 2026-10-29](https://nano-gpt.com/models/text/nvidia/nemotron-3.5-super-vl)); do not transfer that serving cap to local/NVIDIA deployments.
- **Modalities:** Text, images, sampled video, and documents provided as page images with text in; text out. Reasoning can be enabled/disabled in the chat template; tool calling is supported. No audio input/output is documented ([NIM model card](https://docs.api.nvidia.com/nim/reference/nvidia-nemotron-3_5-super-vl-120b-a12b); [Hugging Face BF16 card](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)).
- **Pricing (as of 2026-10-29):** NVIDIA's Build/NIM material describes API-trial terms but does not state a standard per-token rate ([NIM model card](https://docs.api.nvidia.com/nim/reference/nvidia-nemotron-3_5-super-vl-120b-a12b)). NanoGPT lists **$0.15 input / $0.50 output / $0.02 cache-read per 1M tokens** for its hosted route; that is third-party pricing and route, not NVIDIA's ([NanoGPT model page, updated 2026-10-29](https://nano-gpt.com/models/text/nvidia/nemotron-3.5-super-vl)). Open weights are available under **OpenMDW-1.1** for commercial or non-commercial use; self-hosting still incurs hardware/operation costs ([NIM model card](https://docs.api.nvidia.com/nim/reference/nvidia-nemotron-3_5-super-vl-120b-a12b); [license](https://openmdw.ai/license/1-1/)). No free hosted OpenCode Zen ID was verified.
- **Architecture:** 120B total / 12B active hybrid Mamba-2–Transformer MoE, with 512 routed experts per MoE layer, C-RADIO vision encoder, vision-language connector, and native Multi-Token Prediction. BF16 is the full-precision reference; NVFP4 is a separately quantized/distilled checkpoint. License: OpenMDW-1.1 ([NIM model card](https://docs.api.nvidia.com/nim/reference/nvidia-nemotron-3_5-super-vl-120b-a12b); [Hugging Face BF16 card](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)).

### Raw benchmarks found

The NVIDIA model cards report BF16 and NVFP4 separately; paired values below are **BF16 / NVFP4**, not interchangeable measurements. NVIDIA says most suite results were collected with NeMo Gym and provides recipes for reproducibility. Harness, prompt, and checkpoint differences limit cross-source comparisons.

Agent / tool use:

- Hermes Bench: **63.44%**; LangChain behavioral evaluations: **87.05%** ([NVIDIA technical blog, 2026-10-15](https://developer.nvidia.com/blog/nvidia-nemotron-3-5-super-vl-powers-specialized-agents-with-multimodal-reasoning/); vendor-reported).
- Terminal-Bench 2.1: NVIDIA's NIM card reports **66.70% / 60.80%** ([NIM card, updated 2026-10-15](https://docs.api.nvidia.com/nim/reference/nvidia-nemotron-3_5-super-vl-120b-a12b)); the Hugging Face BF16 card's comparison table reports **60.67%** for its BF16 row ([HF model card](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)). These official transcriptions conflict; retain the source-specific figures rather than averaging them or silently choosing one.
- Tau3-Bench Banking: **18.88% / 17.78%**; GDPval-AA v2: **1211 / 1206** (as reported, NVIDIA NIM card; no unit stated in that table) ([NIM model card](https://docs.api.nvidia.com/nim/reference/nvidia-nemotron-3_5-super-vl-120b-a12b)).
- OSWorld-Verified: **51.14 / 52.30** (NVIDIA NIM card; reported benchmark values) ([NIM model card](https://docs.api.nvidia.com/nim/reference/nvidia-nemotron-3_5-super-vl-120b-a12b)).
- AutomationBench-AA [offline]: **32.44 / 32.30** in the NIM card ([NIM model card](https://docs.api.nvidia.com/nim/reference/nvidia-nemotron-3_5-super-vl-120b-a12b)). NanoGPT's current Artificial Analysis-derived page separately lists **14.8%** workflow automation and **2.0%** fully completed tasks for its hosted evaluation ([NanoGPT model page, updated 2026-10-29](https://nano-gpt.com/models/text/nvidia/nemotron-3.5-super-vl)); these are distinct metrics/serving results, not a direct contradiction to merge.
- Claw-Eval: **no verified public score found**.

Reasoning / knowledge:

- GPQA Diamond: **89.52 / 89.90**; HLE text-only: **31.79 / 31.44**; HLE full set: **29.20 / 29.00** ([NVIDIA NIM card](https://docs.api.nvidia.com/nim/reference/nvidia-nemotron-3_5-super-vl-120b-a12b)).
- AA-LCR v1.1: **68.62 / 67.69**; CritPt: **10.86** for BF16; AA-Omniscience accuracy / hallucination rate: **26.20 / 30.0%** BF16 and **25.86 / 27.7%** NVFP4 (NVIDIA NIM card; units and variants follow the card's labels) ([NIM model card](https://docs.api.nvidia.com/nim/reference/nvidia-nemotron-3_5-super-vl-120b-a12b)).
- Artificial Analysis Intelligence Index: **13.6** on NanoGPT's model page, attributed there to Artificial Analysis ([NanoGPT model page, updated 2026-10-29](https://nano-gpt.com/models/text/nvidia/nemotron-3.5-super-vl)); this is a separate hosted/third-party snapshot from the NVIDIA checkpoint tables.

Coding:

- SWE-bench Verified: **71.10% / 71.07%**; SWE-bench Pro: **51.78% / 51.30%**; LiveCodeBench v6: **88.22% / 87.41%**; SciCode subtask: **47.13% / 46.61%** ([NVIDIA NIM card](https://docs.api.nvidia.com/nim/reference/nvidia-nemotron-3_5-super-vl-120b-a12b)).
- DeepSWE [offline]: **24.65 / 18.20** (NVIDIA NIM card; its table does not specify a percent sign for this entry) ([NIM model card](https://docs.api.nvidia.com/nim/reference/nvidia-nemotron-3_5-super-vl-120b-a12b)).
- Terminal-Bench 2.1 values and source discrepancy are recorded above; NVIDIA's technical report also reports different harness-specific results for its mid-training ablation, which are not substituted for the released checkpoint's results.

Long context / multimodal:

- AA-LCR v1.1: **68.62 / 67.69** as above; native context is documented up to **1M tokens** ([NIM model card](https://docs.api.nvidia.com/nim/reference/nvidia-nemotron-3_5-super-vl-120b-a12b)). NVIDIA's technical report, published **2026-10-27**, reports RULER-1M recovering to **81.0** after long-context recovery for a *pre-post-training/base-stage* checkpoint; this is not presented as a final Super VL score ([technical report](https://research.nvidia.com/labs/nemotron/files/NVIDIA-Nemotron-3.5-Super-and-Lightning-Technical-Report.pdf)).
- CharXiv reasoning: **80.82% / 79.88%**; OCRBench v2 English: **68.12 / 68.34**; Video-MME v2: **32.85 / 32.54** (NVIDIA NIM card; exact benchmark variant is stated in the labels) ([NIM model card](https://docs.api.nvidia.com/nim/reference/nvidia-nemotron-3_5-super-vl-120b-a12b)).
- NVIDIA's blog reports CharXiv at **80.8%**, versus **63%** for Nemotron 3 Nano Omni, and **84%** with Python code interpretation; those are NVIDIA-reported chart-reasoning evaluations, with the Python-assisted setup distinct from the plain CharXiv score ([NVIDIA technical blog, 2026-10-15](https://developer.nvidia.com/blog/nvidia-nemotron-3-5-super-vl-powers-specialized-agents-with-multimodal-reasoning/)).

### Normalized scores (1–100)

- **Tool use: 70/100.** Terminal-Bench 2.1 is 60.67–66.70% across NVIDIA's conflicting source tables/checkpoints, Tau3 Banking is 18.88%, and GDPval-AA v2 is 1211 ([NIM card](https://docs.api.nvidia.com/nim/reference/nvidia-nemotron-3_5-super-vl-120b-a12b); [HF card](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)); this reaches the upper edge of the methodology's midrange but remains well below frontier agent benchmarks. Claw-Eval was not verified.
- **Reasoning: 84/100.** GPQA Diamond is near 90% and AA-LCR v1.1 is 68.62, while HLE is 29.20–31.79 ([NIM card](https://docs.api.nvidia.com/nim/reference/nvidia-nemotron-3_5-super-vl-120b-a12b)) and the hosted Artificial Analysis Intelligence Index is 13.6 ([NanoGPT](https://nano-gpt.com/models/text/nvidia/nemotron-3.5-super-vl)); strong breadth is capped by the HLE/index results and checkpoint/harness variation.
- **Context window: 95/100.** The model supports a documented native 1M shared-token window ([NIM card](https://docs.api.nvidia.com/nim/reference/nvidia-nemotron-3_5-super-vl-120b-a12b)), placing it in the methodology's ≥1M tier. No verified final-checkpoint result demonstrates ≥98% retrieval at 512K+, so it does not receive 100; NanoGPT's hosted route caps context at 262K ([NanoGPT](https://nano-gpt.com/models/text/nvidia/nemotron-3.5-super-vl)).
- **Multimodal: 85/100.** Image, video, and document-page inputs are supported, with final-checkpoint CharXiv, OCRBench, and Video-MME results ([NIM card](https://docs.api.nvidia.com/nim/reference/nvidia-nemotron-3_5-super-vl-120b-a12b)); no audio input or non-text output is documented.
- **Coding: 81/100.** SWE-bench Verified reaches 71.10%, SWE-bench Pro 51.78%, LiveCodeBench v6 88.22%, and SciCode 47.13% ([NIM card](https://docs.api.nvidia.com/nim/reference/nvidia-nemotron-3_5-super-vl-120b-a12b)); Terminal-Bench is lower and source/harness-dependent ([NIM card](https://docs.api.nvidia.com/nim/reference/nvidia-nemotron-3_5-super-vl-120b-a12b); [HF card](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)), below the methodology's frontier coding range.
- **Cost efficiency: 96/100.** NanoGPT's listed $0.15/$0.50 per 1M input/output tokens is low relative to the methodology's paid-price examples ([NanoGPT, updated 2026-10-29](https://nano-gpt.com/models/text/nvidia/nemotron-3.5-super-vl)), but this is a third-party rate, not NVIDIA's published standard API price; the open-weight route requires self-hosted infrastructure.
- **Overall Score: 83/100.** Half-up mean of quality dimensions `(70 + 84 + 95 + 85 + 81) / 5 = 83`; best suited to long-context workflows that combine documents/video with code and tools, rather than as a verified frontier general agent.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-29
- Method: Three or more independent public searches plus NVIDIA's technical report, NVIDIA Developer/NIM model cards, Hugging Face's NVIDIA model card, and NanoGPT's Artificial Analysis-attributed hosted listing. Source dates, checkpoint identity, route-specific limits, and conflicting Terminal-Bench reports are preserved. Scores are normalized interpretations, not NVIDIA's ratings.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
