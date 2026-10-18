# Nemotron 3.5 Super VL 120B A12B - findings by GPT 5.6 Terra

- Source: OpenAI/gpt-5.6-terra
- Date: 2026-10-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Super VL 120B A12B
- **Short description:** NVIDIA's open-weight vision-language, Mamba-2-Transformer MoE for reasoning, coding, tool use, documents, and sampled video. It supports self-hosting through vLLM or SGLang.
- **Provider / access:** Official checkpoint `nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16`; self-hosted OpenAI-compatible model name `nemotron-3.5-super-vl`. This target is curated as `opencode/nemotron-3.5-super-vl`.
- **Release / knowledge:** Released 2026-10-15 according to Artificial Analysis; training data collection extends through December 2025, but no formal knowledge cutoff is stated.
- **IDs:** `nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16`; `opencode/nemotron-3.5-super-vl`
- **Context window:** Up to 1M tokens. NVIDIA notes individual deployments may use a smaller limit for memory or concurrency.
- **Modalities:** Text, images, and video input; text output. Tool calling and configurable reasoning are documented for self-hosting.
- **Pricing (as of 2026-10-18):** Open weights can be self-hosted under OpenMDW-1.1. Artificial Analysis reports a $0.225/$0.575 median provider price per 1M input/output tokens; the target record's NanoGPT route is lower at $0.15/$0.50.
- **Architecture:** 120B total / 12B active Mamba-2-Transformer hybrid MoE with C-RADIO vision encoder and native multi-token prediction.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **60.67%** (NVIDIA model card, NeMo Gym evaluation).
- tau2-bench: **69.24%** retail, **76.50%** airline, **73.19%** telecom (NVIDIA model card).
- tau3-bench banking: **18.88%** (NVIDIA model card).
- OSWorld-Verified: **51.14%** (NVIDIA model card).
- AutomationBench-AA: **32.44%** (NVIDIA model card, offline run).

Reasoning / knowledge:

- GPQA Diamond: **89.52%** (NVIDIA model card).
- HLE text-only: **31.79%** (NVIDIA model card).
- AA-LCR v1.1: **68.62%** (NVIDIA model card).
- Artificial Analysis Intelligence Index: **26** (independent composite evaluation).
- CritPt: **10.86%** (NVIDIA model card).

Coding:

- LiveCodeBench v6: **88.22%** (NVIDIA model card).
- SWE-bench Verified: **71.10%** (NVIDIA model card).
- SWE-bench Pro: **51.78%** (NVIDIA model card).
- SciCode subtask: **47.13%** (NVIDIA model card).
- DeepSWE: **24.65%** (NVIDIA model card, offline run).

Long context and multimodal:

- Context window: **1M tokens** (NVIDIA model card and Artificial Analysis).
- GraphWalks: **89.71%** and MMLongBench-Doc: **62.82%** (NVIDIA model card).
- Video-MME v2: **32.85%**; MathVision: **78.16%**; OCR-Reasoning: **65.08%** (NVIDIA model card).

Evidence reconciliation: NVIDIA's card provides an extensive NeMo Gym table, while Artificial Analysis independently assigns a 26 Intelligence Index and confirms model identity, 1M context, image input, and price range. Strong LiveCodeBench and GPQA results coexist with weaker DeepSWE, AutomationBench, CritPt, and tau3-bench results, so scores reflect the cross-harness spread rather than peak figures. NVIDIA documents video input, but its Megatron Bridge guide says native Hugging Face video forward is not yet verified; this limits the multimodal score rather than denying the documented vLLM video path.

### Normalized scores (1-100)

- **Tool use: 66/100.** tau2-bench scores of 69.2-76.5% are useful, but Terminal-Bench 2.1 60.7%, OSWorld 51.1%, AutomationBench 32.4%, and tau3-bench 18.9% rule out a frontier tool score.
- **Reasoning: 73/100.** GPQA Diamond 89.5% is strong, while HLE 31.8%, AA-LCR 68.6%, CritPt 10.9%, and the independent Index of 26 show uneven broader reasoning.
- **Context window: 95/100.** The verified 1M-token limit reaches the top context tier; GraphWalks 89.7% is encouraging but MMLongBench-Doc 62.8% prevents a maximum score.
- **Multimodal: 80/100.** Image and video input are documented and vision benchmarks are substantive, but Video-MME v2 32.9% and the current native-HF video limitation cap the score.
- **Coding: 76/100.** LiveCodeBench 88.2% and SWE-bench Verified 71.1% are strong, tempered by SWE-bench Pro 51.8%, SciCode 47.1%, Terminal-Bench 60.7%, and DeepSWE 24.7%.
- **Cost efficiency: 94/100.** The $0.15/$0.50 target-route price is inexpensive for the class, though self-hosting hardware and provider variation remain material costs.
- **Overall Score: 78/100.** Half-up mean of Tool, Reasoning, Context, Multimodal, and Coding: (66 + 73 + 95 + 80 + 76) / 5 = 78.0; suitable for low-cost, long-context visual workloads after validating the deployment stack.

---

## Signature

- Provided by: **GPT 5.6 Terra (openai/gpt-5.6-terra)** - 2026-10-18
- Method: Public internet research using NVIDIA's model card and developer documentation, Hugging Face discovery, Artificial Analysis, and fresh web searches. Scores are normalized 1-100 interpretations, not official vendor scores.
- Sources: https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16 ; https://docs.nvidia.com/nemo/megatron-bridge/nightly/models/nemotron/nemotron3.5-super-vl.html ; https://artificialanalysis.ai/models/nemotron-3-5-super-vl
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
