# Qwen3.8-27B — findings by Flint

- Source: Alibaba (Qwen / Alibaba Cloud)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-27B
- **Short description:** Alibaba's Qwen3.8 open-weight flagship generation entry — a native multimodal dense vision-language model (27B params, 64 layers, hybrid Gated DeltaNet + Gated Attention, hidden 5120) designed for compact deployment; outperforms the larger MoE Qwen3.7-Plus overall while running on consumer hardware.
- **Provider / access:** Open weights under Apache 2.0 (Hugging Face `Qwen/Qwen3.8-27B`, ModelScope); hosted via Alibaba Cloud Model Studio / Qwen API (`qwen3.8-27b`) with 1M context on hosted tier; third-party inference (Groq).
- **Release / knowledge:** Released 2026-08-14 (weights); Qwen3.8 flagship line Aug 2026; knowledge cutoff not verified in sources found.
- **IDs:** `Qwen/Qwen3.8-27B`; hosted `qwen3.8-27b`.
- **Context window:** 262,144 tokens native; extensible to 1,000,000 via YaRN (vLLM / SGLang / TokenSpeed); hosted tier default 1M context; recommended agentic output caps (reasoning 262,144, final response 131,072 within 1M.
- **Modalities:** Native multimodal — text, image, video input; text output; thinking + instruct modes; tool use; structured outputs.
- **Pricing:** Open weights → self-host free (Apache 2.0); hosted API pricing varies by provider.

- **Architecture:** Dense transformer, 27B params, hybrid GDN + Gated Attention, MoE-free dense design, multimodal (vision encoder), Apache 2.0.

### Raw benchmarks found

Official (Qwen — Hugging Face model card, Alibaba Cloud blog, GitHub AlibabaCloud-Official):

- Terminal Bench 2.1 (Terminus): **73.0** (Qwen3.8-27B vs Qwen3.6-27B 63.4, Qwen3.7-Plus 64.0, Muse Glimmer-30B 51.7, Opus 4.6 Max 78.2).
- SWE-bench Pro: **61.7** (vs Qwen3.6-27B 53.5, Qwen3.7-Plus 57.6, Opus 4.6 Max 53.4, Muse Glimmer 30B 51.2).
- DeepSWE 1.1: **42.2** (vs Qwen3.6-27B 13.3 — ~3.2× jump same param count).
- OSWorld-Verified: **84.3** (vs Qwen3.6-27B 63.9); AndroidWorld 81.9.
- SWE-MM (multimodal software engineering): 38.6.
- LiveCodeBench v6: **90.3** (vs Qwen3.6-27B 83.9, Qwen3.7-Plus 89.6, Opus 4.6 Max 88.8).
- QwenSWEBench: 79.0.
- CoWorkBench (long-horizon office): 70.7.
- JobBench: 33.4.
- Agents' Last Exam: 20.4 Pass@1 / 42.9 Score (vs Qwen3.7-Plus 13.2/33.6).
- IFBench: 79.5.
- GPQA Diamond: **89.2** (vs Qwen3.6-27B 87.8, Qwen3.7-Plus 90.3, Opus 4.6 Max 91.3).
- HLE: **30.8** (Judged by GPT-4o).
- Multimodal with code interpreter: MathVision 94.6, BabyVision 85.6, CharXiv 90.2 (tool-based figures; tool-free lower).

Independent (Groq docs, NYUL/rit research analysis, HokAI, AI/TLDR, ModelComp):

- Groq docs: GPQA Diamond 89.2, LiveCodeBench v6 90.3, SWE-bench Pro 61.7, Terminal-Bench 2.1 73.0, IFBench 79.5 — frontier-level claims on Groq's hosted tier (context window 131,072 on Groq).
- NYUL/rit: 4-bit quantisation ~17 GB → single consumer GPU; cache footprint ~0.5GB @8K / ~2GB @32K.
- ModelComp: GPQA **90.5%**, SWE-bench **86.0%** (Vals AI) — independent of vendor card; Terminal-Bench 73% cited by 23 reports.

Cross-source comparison & conflicts:

- Vendor card vs independent: QwenSWEBench 79.0 is Qwen's own in-house benchmark (self-authored, caution); Groq-host context window 131,072 vs native 262,144/1M via YaRN.
- Multimodal tool-vs-tool-free scoring caveats (MathVision/BabyVision/CharXiv with-code-interpreter figures).

### Normalized scores (1–100)

- **Tool use: 70/100.** Terminal Bench 2.1 73.0, SWE-bench Pro 61.7, OSWorld 84.3, CoWorkBench 70.7 — strong agentic tool use for a dense 27B.
- **Reasoning: 75/100.** GPQA Diamond 89.2 (vs Opus 4.6 Max 91.3), HLE 30.8 — near-top open-weight class reasoning.
- **Context window: 72/100.** Native 262K (top of mid tier 65–84; 200K = 70), extendable to 1M via YaRN — scored on native documented window.
- **Multimodal: 80/100.** Native text+image+video input, text output.
- **Coding: 75/100.** LiveCodeBench v6 90.3, Terminal Bench 2.1 73.0, SWE-bench Pro 61.7, QwenSWEBench 79.0 — top-tier open-weight coding.
- **Cost efficiency: 90/100.** Apache 2.0 open weights, self-host free.

- **Overall Score: 74/100.** Mean of the five quality dims (Tool 70 + Reasoning 75 + Context 72 + Multimodal 80 + Coding 75) / 5 = 74.4 → 74; Cost efficiency excluded.

## Signature

- Provided by: **Flint (opencode/qwen3.8-27b)** — 2026-11-01
- Method: public web research prioritizing official model card/docs (Qwen/Qwen3.8-27B Hugging Face card, Alibaba Cloud blog, AlibabaCloud-Official GitHub) plus independent benchmarks/reviews (Groq docs, NYUL/rit analysis, HokAI, AI/TLDR, ModelComp) — three independent web searches.
- Reference URLs:
  - [Qwen/Qwen3.8-27B — Hugging Face](https://huggingface.co/Qwen/Qwen3.8-27B)
  - [Alibaba Unveils Qwen3.8-27B and Releases Weights of Qwen3.8 Flagship Model](https://www.alibabacloud.com/blog/alibaba-unveils-qwen3-8-27b-and-releases-weights-of-qwen3-8-flagship-model_603463)
  - [Qwen 3.8 27B - GroqDocs](https://console.groq.com/docs/model/qwen/qwen3.8-27b)
- Future sources: add a new file next to this one, e.g. `<Source_Name>.md`, using the same headings.
