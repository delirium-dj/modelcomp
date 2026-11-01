# Nemotron 3.5 Super VL — findings by GPT 6 Sol

- Source: NVIDIA (`nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16`)
- Date: 2026-10-31 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Super VL
- **Short description:** NVIDIA's open-weight vision-language extension of Nemotron 3.5 Super for long-context documents, images, video frames and tool use. BF16 and NVFP4 are precision/deployment variants of the named Super VL model, not independent benchmark identities ([NVIDIA model card](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)).
- **Provider / access:** NVIDIA BF16 [checkpoint](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16); self-host through vLLM/SGLang **Chat Completions** with server ID `nemotron-3.5-super-vl`. [Baseten's hosted API](https://www.baseten.co/library/nemotron-35-super-vl/) uses `nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B` at `https://inference.baseten.co/v1`; OpenRouter also lists `nvidia/nemotron-3.5-super-vl` via [Chat Completions](https://openrouter.ai/nvidia/nemotron-3.5-super-vl/llms.txt). No verified OpenCode Zen Free ID for this particular Super VL checkpoint.
- **Release / knowledge:** **October 15, 2026** in the [official BF16 card](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16) and [Vals profile](https://www.vals.ai/models/baseten_nemotron-3.5-super-vl-120b-a12b). Published foundation data collection runs through **December 2025**, but this is not a guaranteed factual knowledge cutoff.
- **IDs:** `nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16` exact weights; `nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B` Baseten service; `nvidia/nemotron-3.5-super-vl` OpenRouter. Thinking off/medium/on and BF16/NVFP4 serving should not be counted as new models.
- **Context window:** NVIDIA supports **up to 1M combined tokens** with specified 4× H100 or 2× GB200 configurations; deployments can choose smaller windows ([official deployment instructions](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)). [Vals](https://www.vals.ai/models/baseten_nemotron-3.5-super-vl-120b-a12b) lists **1M context / 262K max output** for its route, not a universal self-hosted output cap.
- **Modalities:** Text, images, sampled video input and text output, configurable reasoning and function calls ([NVIDIA examples](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)). The official recipe handles at most one video (up to 2 minutes and 256 sampled frames at 2 FPS) and one image per prompt by default; other serving setups can differ. No native audio in/out established.
- **Pricing (as of 2026-10-31):** [Baseten](https://www.baseten.co/library/nemotron-35-super-vl/) lists **$0.20 input / $0.04 cached input / $0.50 output per million tokens** on its Model API; [Artificial Analysis](https://artificialanalysis.ai/models/nemotron-3-5-super-vl) independently observes $0.20/$0.50 median across its providers. Open weights do not make GPU hosting free: NVIDIA recommends 4× H100 or 2× GB200 for its full-context examples.
- **Architecture:** **120B total, 12B active**, Mamba-2/Transformer hybrid MoE with C-RADIO vision encoder and multi-token prediction; **OpenMDW-1.1** weights license, not MIT/Apache ([NVIDIA card](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)).

### Raw benchmarks found

Agent / tool use:

- [NVIDIA's own NeMo Gym table](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16) for the **SuperGA BF16** column lists **τ²-Bench retail 69.24%, airline 76.50%, telecom 73.19%**, **τ³-Bench banking 18.88%**, **BrowseComp 78%**, **Terminal-Bench 2.1 60.67%**, **OSWorld-Verified 51.14%** and **AutomationBench-AA offline 32.44%**. NVIDIA also discloses **Terminal-Bench 4 offline 1%** and **DeepSWE offline 24.65%**, which materially qualify the strong TB2.1 headline. NVIDIA's provided NeMo Gym recipes document harnesses; offline, agent and text-only settings are not interchangeable.
- [Vals' independent Baseten-hosted evaluation](https://www.vals.ai/models/baseten_nemotron-3.5-super-vl-120b-a12b) reports **Terminal-Bench 4.0 0% ±0**, **Finance Agent v2.1 47.73% ±2.10**, **Legal Research 10.10% ±2.09** and **Vals Index 29.73% ±1.02** (#30/32). Its TB4.0 zero broadly agrees with NVIDIA's *own* TB4.0 offline 1%, so treating vendor TB2.1 60.67% as a general agent success rate would mislead.

Reasoning / knowledge:

- [NVIDIA's table](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16) claims **GPQA Diamond 89.52%**, **HLE full 29.20% / text-only 31.79%**, **AA-Omniscience accuracy 26.20%**, **hallucination rate 30.0%**, **CritPt 10.86%**, and **MMLU-ProX 76.91%**. These are NVIDIA-run measurements using its settings; the AA-named rows in a vendor table are *not* by themselves an independent Artificial Analysis rerun.
- [Artificial Analysis](https://artificialanalysis.ai/models/nemotron-3-5-super-vl) independently gives **Intelligence Index v5 14**, #1 **among only two** comparably sized/evaluated open-weight entries displayed, not #1 overall. AA records **120M output tokens** for its Index versus a 72M class median, raising practical task cost despite inexpensive tokens.

Coding:

- [Vendor evaluation](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16): **LiveCodeBench v6 88.22%**, **SWE-bench Verified 71.10%**, **SWE-bench Pro 51.78%**, but **DeepSWE offline 24.65%** and **TB4 offline 1%**. These test different capabilities; the harness-labelled offline tests flag much weaker end-to-end agent reliability than short programming questions.
- [Vals](https://www.vals.ai/models/baseten_nemotron-3.5-super-vl-120b-a12b) independently scores **Vibe Code Bench v1.1 3.54% ±1.93**, **Code Migration v1.1 16.44% ±2.94** and **Terminal-Bench 4.0 0%**. Vals used a hosted/quantized route, rather than NVIDIA's BF16 reference; this is deployment evidence, not a same-harness BF16 replication.

Long context / vision:

- [NVIDIA](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16) reports **GraphWalks 89.71%**, **AA-LCR v1.1 68.62%**, **MMLongBench-Doc 62.82%**, **BabyVision 29.60%** and **Video-MME v2 32.85%**. The vendor does not present GraphWalks at a specified *near-1M position*, and the vision/video results are far below a blanket frontier-multimodal claim. [AA](https://artificialanalysis.ai/models/nemotron-3-5-super-vl) confirms 1M reported context, but its public profile lists image rather than video in its own tested modality metadata.

### Normalized scores (1–100)

- **Tool use: 57/100.** Vendor BrowseComp 78 and τ² retail 69.24, capped by Vals TB4 0, vendor offline TB4 1 and weak bank-agent performance.
- **Reasoning: 73/100.** Vendor GPQA 89.52 versus HLE full 29.2 and independent AA Index v5 14; class-relative #1/2 is weak ranking evidence.
- **Context window: 91/100.** Supported 1M on a configured high-end deployment, but no verified near-window recall and hosted routes may differ.
- **Multimodal: 72/100.** Text/image/video input, yet vendor BabyVision 29.6 and Video-MME v2 32.85, with no native audio or media output.
- **Coding: 56/100.** Vendor LiveCodeBench 88.22/SWE Verified 71.10 sharply conflict with independent Vals Vibe Code 3.54/Code Migration 16.44 in practical workflows.
- **Cost efficiency: 89/100.** Low Baseten $0.20/$0.50 with $0.04 cached input and open weights, tempered by GPU requirements and AA-measured verbosity.
- **Overall Score: 70/100.** Half-up mean (57 + 73 + 91 + 72 + 56) / 5 = 69.8; test the chosen hosting/quantization on production-like agent tasks before relying on the 1M/VL headline.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-10-31
- Method: Verified NVIDIA's exact BF16 model card and evaluation harness against independently run Vals/Baseten results, Artificial Analysis v5 Index and Baseten's route/pricing; distinguished benchmark versions, offline runs and precision/hosting differences. Scores are normalized interpretations.
- Reference URLs:
  - [NVIDIA Nemotron 3.5 Super VL BF16 model/evaluation card](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)
  - [Vals AI independent Baseten-hosted benchmark results](https://www.vals.ai/models/baseten_nemotron-3.5-super-vl-120b-a12b)
  - [Artificial Analysis independent model profile](https://artificialanalysis.ai/models/nemotron-3-5-super-vl)
  - [Baseten hosted model ID, endpoint and pricing](https://www.baseten.co/library/nemotron-35-super-vl/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
