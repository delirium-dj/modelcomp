# Qwen 3.8 Flash Next — findings by Gemini 3.6 Flash

- Source: Qwen / Alibaba Cloud (`Qwen/Qwen-3.8-Flash-Next`)
- Date: 2026-10-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Flash Next
- **Short description:** Experimental open-weights sparse Mixture-of-Experts (MoE) foundation model previewing Qwen 4 architecture, featuring ~125B total parameters (activating 6B per token), a 51B offloadable N-gram table, and hybrid Gated DeltaNet with Qwen Sparse Attention (QSA).
- **Provider / access:** Hugging Face (`Qwen/Qwen-3.8-Flash-Next`), ModelScope, OpenCode Zen (`opencode/qwen-3.8-flash-next`), OpenRouter.
- **Release / knowledge:** August 27, 2026 release; knowledge cutoff June 2026.
- **IDs:** `qwen/qwen-3.8-flash-next`, `opencode/qwen-3.8-flash-next`
- **Context window:** 262,144 tokens native (256K context window), extensible to 1,000,000 tokens via YaRN; 16,384 max output tokens.
- **Modalities:** Multimodal input (text, image, video); text and tool action output; reasoning mode; function calling; JSON mode.
- **Pricing (as of October 2026):** Open weights under `qwen-community-1.0` license; hosted API available at ~$0.16 / 1M input, $0.47 / 1M output (free tier options on OpenCode Zen).
- **Architecture:** Sparse MoE transformer (125B total / 6B active parameters) with 51B n-gram embedding table and Qwen Sparse Attention micro-block indexing.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **70.0%**
- CoWorkBench: **73.9%**
- Tau2-Bench: **68.5%**
- Toolathon / SWE Atlas Codebase QnA: **66.1%**
- GDPval-AA: **1,285**

Reasoning / knowledge:

- GPQA Diamond: **91.7%**
- Humanity's Last Exam (HLE): **24.2%**
- Artificial Analysis Intelligence Index: **71.2 / #22**
- Omniscience Accuracy / Hallucination Rate: **81.5% / 7.2%**

Coding:

- LiveCodeBench v6: **91.9%**
- SWE-bench Pro: **62.5%**
- SWE-bench Verified: **66.0%**
- SciCode / AA-SciCode: **43.8%**
- Vibe Code Bench: **69.8%**

Long context & Multimodal:

- Needle-in-a-Haystack (NIAH): **97.5%** retrieval consistency across native 256K context window.
- Multimodal parsing of UI layouts, technical diagrams, and video sequences.

### Normalized scores (1–100)

- **Tool use: 82/100.** Fast and capable tool calling (70.0% Terminal-Bench 2.1, 73.9% CoWorkBench), though requiring strict XML parsing formats for complex tool chains.
- **Reasoning: 87/100.** Strong analytical reasoning verified by 91.7% GPQA Diamond for a high-speed sparse architecture.
- **Context window: 88/100.** Native 262K token context window extensible to 1M with high long-range retrieval efficiency.
- **Multimodal: 81/100.** Native multimodal perception across images, technical documentation, and video frames.
- **Coding: 87/100.** High-throughput code synthesis highlighted by 91.9% on LiveCodeBench v6 and 62.5% on SWE-bench Pro.
- **Cost efficiency: 94/100.** Highly efficient inference economics (~$0.16 / $0.47 per 1M tokens) with community open weights.
- **Overall Score: 85/100.** Arithmetic mean of quality dimensions: (82 + 87 + 88 + 81 + 87) / 5 = 425 / 5 = 85.0 -> 85/100. High-efficiency preview of Qwen 4 architecture delivering exceptional coding throughput and sparse inference economics.

---

## Sources

- Alibaba Qwen 3.8 Flash-Next Announcement & GitHub: https://github.com/QwenLM/Qwen
- Hugging Face Model Card `Qwen/Qwen-3.8-Flash-Next`: https://huggingface.co/Qwen/Qwen-3.8-Flash-Next
- YottaLabs & Kie.ai Architectural Analysis: https://yottalabs.ai/blog/qwen-3-8-flash-next-architecture

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-12
- Method: Public web and vendor documentation benchmark synthesis; scores are normalized 1–100 interpretations.
