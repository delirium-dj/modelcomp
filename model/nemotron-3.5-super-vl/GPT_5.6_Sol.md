# NVIDIA Nemotron 3.5 Super VL — findings by GPT 5.6 Sol

- Source: NVIDIA (`nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16`)
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** NVIDIA Nemotron 3.5 Super VL
- **Short description:** NVIDIA's open-weight 120B/12B-active vision-language MoE for long-running agents that combine reasoning, coding, tools, documents, images, and short video.
- **Provider / access:** BF16 and NVFP4 weights on Hugging Face; NVIDIA NIM plus hosted OpenAI-compatible routes including OpenRouter, Baseten, DeepInfra, Fireworks, Together, and others ([official model card](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16), [OpenRouter API](https://openrouter.ai/nvidia/nemotron-3.5-super-vl)).
- **Release / knowledge:** Released 2026-10-15; training data collection extends through December 2025.
- **IDs:** `nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16`, `nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-NVFP4`, and hosted `nvidia/nemotron-3.5-super-vl`.
- **Context window:** Up to 1,048,576 total tokens; OpenRouter lists up to 262,144 completion tokens, while self-hosted deployment limits depend on memory ([official card](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16), [OpenRouter](https://openrouter.ai/nvidia/nemotron-3.5-super-vl)).
- **Modalities:** Text, RGB image, document-page, and MP4 video input; text output; configurable reasoning, function calling, and structured output. Audio is not supported.
- **Pricing (as of 2026-10-17):** Artificial Analysis provider median is $0.225/M input and $0.575/M output; Plotly tested an OpenRouter route at $0.15/M and $0.50/M. Downloaded weights have no token fee but require substantial hardware ([Artificial Analysis](https://artificialanalysis.ai/models/nemotron-3-5-super-vl), [Plotly](https://plotly.com/blog/nvidia-nemotron-3-5-super-vl-plotly-data-analytics-bench/)).
- **Architecture:** OpenMDW-1.1 weights; Mamba-2/Transformer hybrid MoE with 512 routed experts, C-RADIO vision encoder, native multi-token prediction, 120B total and 12B active parameters.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **60.67%** on the model-card setup. Harness-specific results span **48.31% (Pi) to 61.80% (Codex)**, showing material wrapper sensitivity ([official model card](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16), [independent review of the harness chart](https://aitoolsreview.co.uk/insights/nvidia-nemotron-3-5-super-vl)).
- Tau2 Retail / Airline / Telecom: **69.24% / 76.50% / 73.19%**; harder Tau3 Banking: **18.88%**; GDPval-AA v2: **1211**; BrowseComp: **78.0%** ([official model card](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)).
- OSWorld-Verified: **51.14%**; AutomationBench-AA offline: **32.44%**; Hermes Bench / LangChain evals: **63.44% / 87.05%** ([official model card](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16), [NVIDIA technical review](https://developer.nvidia.com/blog/nvidia-nemotron-3-5-super-vl-powers-specialized-agents-with-multimodal-reasoning/)).

Reasoning / knowledge:

- GPQA Diamond: **89.52%**; HLE text-only / full: **31.79% / 29.20%**; CritPt: **10.86%** ([official model card](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)).
- Artificial Analysis Intelligence Index: **26**; AA Omniscience Accuracy / Hallucination Rate / Index: **26.20% / 30.0% / 4.03** ([Artificial Analysis](https://artificialanalysis.ai/models/nemotron-3-5-super-vl), [official model card](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)).
- AA-LCR v1.1: **68.62%** and GraphWalks: **89.71%** at the vendor's published settings.

Coding:

- SWE-bench Verified / Multilingual / Pro: **71.10% / 67.72% / 51.78%**; harness-specific SWE-Pro ranges from **41.04% (OpenCode) to 49.45% (Claude Code)** under the separate comparison protocol ([official model card](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)).
- LiveCodeBench v6: **88.22%**; SciCode subtask: **47.13%**; DeepSWE offline: **24.65%** ([official model card](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)).

Long context:

- GraphWalks: **89.71%** and AA-LCR v1.1: **68.62%** with a native 1M-token window. These support useful long-context reasoning but not near-perfect 512K+ retrieval.

Multimodal:

- CharXiv reasoning: **80.82%**; MMLongBench-Doc: **62.82%**; OCRBench v2 English / Chinese: **68.12% / 59.15%**; OCR-Reasoning: **65.08%** ([official model card](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)).
- MathVision: **78.16%**; OSWorld-Verified: **51.14%**; Video-MME v2: **32.85%**; BabyVision: **29.60%**. Video and basic visual reasoning are notably weaker than chart/document understanding.
- Plotly private analytics exam: **30/43 (70%)**, costing $0.46 with a 12-second median per question; it found **0/3** planted data-quality faults and **0/5** hidden patterns ([independent Plotly test](https://plotly.com/blog/nvidia-nemotron-3-5-super-vl-plotly-data-analytics-bench/)).

Conflicting evidence:

- NVIDIA's primary table gives Terminal-Bench 2.1 at 60.67%, while one release tracker lists 66.7% and harness runs span 48.31–61.80%; the primary table and range are retained, not the unexplained 66.7%. Artificial Analysis reports text-and-image support because its API test omits video, while NVIDIA's downloadable checkpoint explicitly accepts MP4 input; modality scoring follows the model card but reflects the weak Video-MME result. Plotly's independent 70% task score confirms useful analytics while exposing failures hidden by vendor averages.

### Normalized scores (1–100)

- **Tool use: 77/100.** Good Tau2, OSWorld, BrowseComp, and GDPval results are offset by Tau3 Banking 18.88%, harness-sensitive Terminal-Bench, and AutomationBench 32.44%.
- **Reasoning: 82/100.** GPQA 89.52% and strong GraphWalks are credible, while HLE near 30%, Intelligence Index 26, and CritPt 10.86% cap the score.
- **Context window: 96/100.** Native 1M capacity plus GraphWalks 89.71% and AA-LCR 68.62% support the top tier, but retrieval is below the 98% threshold for 100.
- **Multimodal: 85/100.** Text, image, documents, and video are native with strong chart/OCR results; no audio and weak Video-MME/BabyVision prevent a higher score.
- **Coding: 78/100.** SWE-Verified 71.1% and LiveCodeBench 88.22% are strong, but SWE-Pro 51.78%, DeepSWE 24.65%, and moderate terminal performance limit consistency.
- **Cost efficiency: 97/100.** Roughly $0.15–$0.225/M input and $0.50–$0.575/M output is exceptionally inexpensive, though self-hosting the full checkpoint is hardware-intensive.
- **Overall Score: 84/100.** Half-up mean of the five quality dimensions `(77 + 82 + 96 + 85 + 78) / 5 = 83.6`; a strong open choice for high-throughput document and visual agents, with independent task validation required.

---

## Signature

- Provided by: **GPT 5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-17
- Method: Three independent web searches followed by direct review of NVIDIA's model card/blog and independent Artificial Analysis, Plotly, OpenRouter, and AI Tools Review evidence; variant and harness conflicts were reconciled explicitly.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
