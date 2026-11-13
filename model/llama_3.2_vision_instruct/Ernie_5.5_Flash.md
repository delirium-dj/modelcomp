# Llama 3.2 11B Vision Instruct — findings by Ernie 5.5 Flash

- Source: Meta/Llama 3.2 11B Vision Instruct (`llama_3.2_vision_instruct`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Llama 3.2 11B Vision Instruct
- **Short description:** Meta's open-weights 11B vision-language instruct model (released 2024-09-25) — Llama 3.1 text backbone plus a separately trained cross-attention vision adapter, tuned for image reasoning, captioning, document VQA and assistant-style chat with images.
- **Provider / access:** Open weights `meta-llama/Llama-3.2-11B-Vision-Instruct` on Hugging Face (gated, Llama 3.2 Community License); vLLM / SGLang / transformers local serving; ~$0.345/$0.345 per 1M on third-party hosts.
- **Release / knowledge:** 2024-09-25; knowledge cutoff December 2023.
- **IDs:** `llama_3.2_vision_instruct` (dataset), `meta-llama/Llama-3.2-11B-Vision-Instruct` (HF).
- **Context window:** 131,072 tokens (128K).
- **Modalities:** text + image in; text out; no native tool-calling/reasoning mode (base instruct model).
- **Pricing (as of 2026-11-13):** $0 per token self-hosted (Llama 3.2 Community License); ~$0.345/$0.345 per 1M on third-party gateways.
- **Architecture:** dense 11B (10.6B) Llama 3.1-derived decoder + separately trained vision adapter (cross-attention layers over an image encoder); GQA; 6B image-text pairs pretraining; SFT + RLHF.

### Raw benchmarks found

> Meta's own instruction-tuned model card table (image reasoning + text rows) plus independent BenchmarkList rows (24 benchmarks, sampled 2026).

Agent / tool use:

- Tau2-Bench Telecom: **14.6%** (286/337, 15th pct); Terminal-Bench Hard: **0.8%** (279/326, 14th pct)
- No native tool-calling support; agentic rows are effectively floor-level

Reasoning / knowledge:

- GPQA Diamond: **22.1%** (BenchmarkList; vendor card 32.8% GPQA 0-shot) — 1st percentile of 481
- MMLU-Pro: **46.4%** (274/313); MMLU (CoT): **73.0%** (vendor card)
- HLE: **5.5%** (308/491); MuSR: **9.8%**; ObviousBench pass³: **23.6%** (271/275); MATH (CoT): **51.9%**; AIME 2025: **1.7%**
- AA Intelligence Index: **8.73**

Coding:

- SciCode: **11.2%** (289/312, 7th pct); HumanEval-class rows not published for the instruct model

Long context:

- AA-LCR: **12.7%** (329/425, 23rd pct); 128K declared with no retrieval-quality evidence.

Multimodal (the model's core):

- MMMU (val, CoT): **50.7%** (vendor); MMMU-Pro standard **33.0** / vision **23.7**; MathVista **51.5%**; ChartQA (CoT) **83.4%**; AI2 Diagram **91.1%**; DocVQA **88.4** ANLS; VQAv2 **75.2%**
- OpenVLM Leaderboard aggregate: **57.7** (155/285, 46th pct — MMBench 65.8, MMStar 49.8, MMMU_Val 48.0, OCRBench 753)
- SEAL Visual-Language Understanding: **20.5%** (54/55, 2nd pct); MechVQA **25.5%** (18/18)

### Normalized scores (1–100)

- **Tool use: 15/100.** No native tool-calling; the two agentic rows are floor-level (TB-Hard 0.8%, Tau2-Telecom 14.6%). This is a 2024 instruct model, pre-agentic.
- **Reasoning: 35/100.** GPQA 22.1–32.8%, MMLU-Pro 46.4%, HLE 5.5%, ObviousBench 23.6% — all bottom-quartile for the 2026 field, though MMLU 73.0% and MATH 51.9% are respectable for an 11B of its era.
- **Context window: 85/100.** 128K — tier 100K–200K band; AA-LCR 12.7% shows the retrieval quality does not match the window size.
- **Multimodal: 55/100.** Real, broad vision capability (MMMU 50.7%, DocVQA 88.4, ChartQA 83.4, AI2D 91.1) but 2024-era: OpenVLM aggregate 57.7 (46th pct) and SEAL 20.5% (2nd pct) are far behind current VL models.
- **Coding: 15/100.** SciCode 11.2% and no other coding row; the model is not a coding model.
- **Cost efficiency: 100/100.** $0 self-hosted under the Llama 3.2 Community License.
- **Overall Score: 41/100.** Best fit for private, offline image understanding, document VQA and captioning on modest hardware where open weights and zero cost matter; every capability row is a generation behind the 2026 field.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-13
- Method: public internet research (Meta Llama-3.2-11B-Vision-Instruct Hugging Face model card with the vendor benchmark tables, BenchmarkList record with 24 independent rows); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [meta-llama/Llama-3.2-11B-Vision-Instruct — Hugging Face model card (benchmark tables)](https://huggingface.co/meta-llama/Llama-3.2-11B-Vision-Instruct)
  - [Llama 3.2 11B Vision Instruct — BenchmarkList (24 benchmark rows)](https://benchmarklist.com/models/meta-llama-llama-3.2-11b-vision-instruct/)
  - [Llama 3.2 announcement — Meta AI blog](https://ai.meta.com/blog/llama-3-2-connect-2024-vision-edge-mobile-devices/)
- Future sources: add a new file next to this one, e.g. `Ernie_5.5_Flash_v2.md`, using the same headings.