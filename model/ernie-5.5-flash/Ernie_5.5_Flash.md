# ERNIE 5.5 Flash — findings by Ernie 5.5 Flash

- Source: Baidu/ERNIE 5.5 Flash (`ernie-5.5-flash`)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** ERNIE 5.5 Flash
- **Short description:** Baidu's efficient sparse MoE (released 2026-10-21): 280B total / 14B activated per token, pre-trained from scratch on 33.5T tokens with hybrid HCA + MLA-DSA attention, delivering 1M-token context at over 200 tok/s for high-volume coding and text work.
- **Provider / access:** Baidu Qianfan / Wenxin Workshop (`ernie-5.5-flash`), OpenRouter (`baidu/ernie-5.5-flash-preview:free`), plus third-party lanes. Open weights are published for the **Base** checkpoint only (`baidu/ERNIE-5.5-Flash-Base`, FP8 + BF16).
- **Release / knowledge:** 2026-10-21 (weights); knowledge cutoff not published.
- **IDs:** `ernie-5.5-flash`, `baidu/ERNIE-5.5-Flash-Base`, `baidu/ernie-5.5-flash-preview:free` (OpenRouter), `ernie-5.5-flash-preview`.
- **Context window:** 1,048,576 tokens (131,072 max training / 1M fine-tuning and inference); max output 131,072.
- **Modalities:** text in / text out (the Base checkpoint and the preview route are text-only); reasoning and tool calls on the hosted preview.
- **Pricing (as of 2026-11-11/12):** ~2 CNY/1M in, ~8 CNY/1M out (~$0.28/$1.13) on Baidu Qianfan; off-peak/promotional ~1/4 CNY (~$0.14/$0.56). The OpenRouter `ernie-5.5-flash-preview:free` lane is $0.
- **Architecture:** sparse MoE, 280B total / 14B active; 43 layers (1 dense FFN + 42 Multi-Router Latent MoE); 37 HCA + 6 MLA-DSA layers; 512 routed experts (top-10) + 1 shared; Muon optimizer; ~200K BPE tokenizer; ECHO MTP head.

### Raw benchmarks found

> All figures are Baidu's own evaluation table from the `baidu/ERNIE-5.5-Flash-Base` model card, ERNIE-5.5-Flash-Base column (same pipeline/prompts as DeepSeek-V4-Flash-Base, Hy3-preview-Base and MiMo-V2.5-Base). These are **Base-checkpoint** numbers — the post-trained hosted preview is not separately scored by the vendor.

Agent / tool use:

- Terminal-Bench / Tau2 / Claw-Eval / Toolathon / MCP-Atlas: no verified public score found for this model
- BBH (EM, direct): **77.1%** (3-shot); BBH (EM, CoT): **89.2%**

Reasoning / knowledge:

- MMLU (EM): **93.3%**; MMLU-Redux: **94.1%**; MMLU-Pro: **78.4%**; CMMLU: **90.0%**
- GPQA (EM): **60.2%**; SimpleQA: **34.1%**; ChineseSimpleQA: **73.0%**; PreciseWikiQA: **59.3%**
- MGSM (8-shot CoT): **87.0%**; MathBench-CN: **80.8%**; WinoGrande: **87.8%**; PIQA: **96.0%**
- MMMLU-lite: **81.0%**; INCLUDE-lite: **79.5%**; MultiLoKo: **43.3%**
- HLE / CritPt / ARC-AGI: no verified public score found

Coding:

- HumanEval+ (Pass@1): **82.3%**; MBPP+ (Pass@1): **81.5%**
- LiveCodeBench (Pass@1): **40.1%** (1-shot) — the weakest coding row
- FullStackBench: **54.6%**; RepoBench (EM): **50.3%**

Long context:

- HELMET-RAG (SubEM): **71.5%**; HELMET-Rerank (NDCG@10): **56.2%**; HELMET-ICL: **85.9%**
- RepoQA (Pass@1): **91.7%**; LongBench-v2 (EM): **48.7%**; InfiniteBench (Avg): **46.5%**

### Normalized scores (1–100)

- **Tool use: 70/100.** No agentic benchmark row is published for this model; the score rests on BBH (77.1% direct) and the model's agentic positioning — low confidence.
- **Reasoning: 78/100.** MMLU-Pro 78.4%, GPQA 60.2% and SimpleQA 34.1% are mid-tier for a 2026 flagship; MMLU 93.3% and CMMLU 90.0% are strong on knowledge recall. GPQA is the cap.
- **Context window: 100/100.** 1,048,576 tokens with 131,072 max output — verified by RepoQA 91.7% and LongBench-v2 48.7%.
- **Multimodal: 15/100.** Text-only Base checkpoint and text-only preview route (Baidu's ERNIE 4.5 VL line covers vision separately).
- **Coding: 75/100.** HumanEval+ 82.3% and MBPP+ 81.5% are strong, RepoBench 50.3% mid, but LiveCodeBench 40.1% is well behind the coding frontier — that single row is the cap.
- **Cost efficiency: 92/100.** ~$0.28/$1.13 per 1M on Qianfan (promotional ~$0.14/$0.56) and a $0 OpenRouter preview lane.
- **Overall Score: 67.6/100.** Best fit for high-volume Chinese/English text, document and code-completion workloads at 1M context; the text-only modality and the LiveCodeBench 40.1% keep it out of the top tier.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-12
- Method: public internet research (Baidu ERNIE 5.5 Flash Base Hugging Face model card and its vendor benchmark table, Baidu Qianfan pricing, OpenRouter model page); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [baidu/ERNIE-5.5-Flash-Base — Hugging Face model card (benchmark table)](https://huggingface.co/baidu/ERNIE-5.5-Flash-Base)
  - [ERNIE 5.5 Flash Base technical blog — Baidu](https://ernie.baidu.com/release/ernie-5-5-flash-base/)
  - [ERNIE-5.5-Flash-Preview (free) — OpenRouter](https://openrouter.ai/baidu/ernie-5.5-flash-preview)
  - [Qianfan model pricing — Baidu Cloud](https://cloud.baidu.com/product/wenxinworkshop)
- Future sources: add a new file next to this one, e.g. `ERNIE_5.5_Flash_v2.md`, using the same headings.